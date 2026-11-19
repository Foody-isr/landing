import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/marketing/Icon";
import ProductMentions from "@/components/marketing/ProductMentions";
import { PricingBilling, SoftwarePrice } from "@/components/marketing/PricingBilling";
import { billingCopy } from "@/lib/marketing/pricing-billing";
import { CallToAction, FaqSection } from "@/components/marketing/Shared";
import { marketing } from "@/lib/marketing/content";
import { paymentRates as initialPaymentRates, pricingRates as initialPricingRates, bundleCopy } from "@/lib/marketing/pricing";
import offerGrid from "@/lib/marketing/offer-grid.json";
const deliveryCopy = {
  en: { title: 'Foody Delivery', description: 'Assign orders to couriers and plan delivery routes with Google Maps.' },
  fr: { title: 'Foody Livraison', description: 'Affectez les commandes aux livreurs et planifiez leurs tournées avec Google Maps.' },
  he: { title: 'Foody משלוחים', description: 'שבצו הזמנות לשליחים ותכננו מסלולי משלוח בעזרת Google Maps.' },
};
import { routes, ui } from "@/lib/marketing/ui";
import { resolveLang } from "@/lib/seo";

import { publicCatalogue, catalogueCopy, type PublicCatalogue, type PublicLimits } from "@/lib/marketing/public-catalogue";

export const dynamic = "force-dynamic";

const modules = [
  { key: "restaurant", label: "restaurantPlan", href: routes.restaurants },
  { key: "ordering", label: "ordering", href: routes.ordering },
  { key: "kitchen", label: "kitchen", href: routes.kitchen },
] as const;

type PaymentRow = {
  id: string;
  title: string;
  detail?: string;
  help?: string;
  included?: true;
  charges?: { amount: number | null; unit: string }[];
};

/** Shows the independent Foody modules and their setup, equipment and payment fees. */
export default async function PricingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = resolveLang((await params).lang);
  let catalog: PublicCatalogue | null;
  try { catalog = await publicCatalogue(); }
  catch { return <><Navbar /><main id="main-content" className="shell py-20"><h1>{catalogueCopy[lang].unavailable}</h1><Link href={`/${lang}/contact`}>{ui[lang].contact}</Link></main><Footer /></>; }
  const editable = catalog;
  const deviceBased = catalog?.products.find(p => p.id === "restaurant")?.included.pos_users_unlimited ?? !catalog;
  const bundles = (catalog?.plans ?? offerGrid.bundles).filter(p => p.published);
  const b = bundleCopy[lang];
  const rate = (id: string, initial: number | null): number | null => {
    const row = catalog?.tariffs.find(t => t.id === id);
    return row ? row.amount_minor === null ? null : row.amount_minor / 100 : initial;
  };
  const pricingRates = { ...initialPricingRates, ...Object.fromEntries(catalog?.products.map(p => [p.id, p.monthly_minor / 100]) ?? []), extraPos: rate(deviceBased ? 'extraPOSDevice' : 'extraPos', initialPricingRates.extraPOSDevice)! };
  const paymentRates = { ...initialPaymentRates, ...Object.fromEntries(Object.entries(initialPaymentRates).map(([key, value]) => [key, key === 'virtualIncludedTransactions' ? catalog?.tariffs.find(r => r.id === key)?.quantity ?? value : rate(key, value)])) } as Record<keyof typeof initialPaymentRates, number | null>;
  const t = marketing[lang].pricing;
  const u = ui[lang];
  const payments = t.payments;
  const delivery = deliveryCopy[lang];
  const locale = lang === "he" ? "he-IL" : lang;
  const format = new Intl.NumberFormat(locale);
  const formatDecimal = new Intl.NumberFormat(locale, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  const price = (amount: number | null) => amount === null ? t.quote : (
    <bdi dir="ltr">{(Number.isInteger(amount) ? format : formatDecimal).format(amount)} ₪</bdi>
  );
  const included = (limits: PublicLimits) => {
    const entries: [number | null, string][] = [];
    if (limits.pos_users_unlimited) entries.push([limits.pos_devices, b.devices]);
    else if (limits.pos > 0) entries.push([limits.pos, catalogueCopy[lang].pos]);
    if (limits.chef > 0) entries.push([limits.chef, catalogueCopy[lang].chef]);
    if (limits.kds > 0) entries.push([limits.kds, 'KDS']);
    if (!limits.pos_users_unlimited && limits.pos_devices !== null && limits.pos_devices > 0) entries.push([limits.pos_devices, catalogueCopy[lang].pos_devices]);
    return entries.map(([n, label]) => `${n === null ? catalogueCopy[lang].unlimited : n} ${label}`).join(' · ');
  };
  const featureList = (keys: string[], module?: string) => {
    const primary: Record<string, string[]> = { restaurant: ['pos', 'tables', 'qr_dine_in', 'receipt_printing', 'cash_management', 'payment_terminals'], ordering: ['website', 'pickup_flow', 'delivery_flow', 'scheduled_orders', 'order_management', 'online_payments'], kitchen: ['recipes', 'stock_management', 'food_cost', 'suppliers', 'preparation', 'kds'] };
    const priority = primary[module ?? ''] ?? [];
    const ordered = [...priority.filter(key => keys.includes(key)), ...keys.filter(key => !priority.includes(key))];
    const rows = (items: string[]) => <ul className="check-list">{items.map(key => <li key={key}><Icon name="check" />{editable?.capabilities.find(feature => feature.key === key)?.name[lang] ?? key}</li>)}</ul>;
    return <>{rows(ordered.slice(0, 6))}{ordered.length > 6 && <details className="pricing-payment-options"><summary>{catalogueCopy[lang].details} ({ordered.length})</summary>{rows(ordered.slice(6))}</details>}</>;
  };
  const paymentGroups: {
    id: string;
    title: string;
    rows: PaymentRow[];
    options?: PaymentRow[];
  }[] = [
    {
      id: "physical",
      title: payments.physical,
      rows: [
        {
          id: "victa-portable",
          title: "Verifone Victa Portable",
          detail: payments.portableDetail,
          charges: [{ amount: paymentRates.victaPortable, unit: payments.deviceUnit }],
        },
        {
          id: "victa-mobile",
          title: "Verifone Victa Mobile",
          detail: payments.mobileDetail,
          charges: [{ amount: paymentRates.victaMobile, unit: payments.deviceUnit }],
        },
        {
          id: "victa-mini",
          title: "Verifone Victa Mini",
          detail: payments.miniDetail,
          charges: [{ amount: paymentRates.victaMini, unit: payments.deviceUnit }],
        },
        {
          id: "emv-service",
          ...payments.physicalService,
          charges: [{ amount: paymentRates.physicalMonthly, unit: payments.activeTerminalMonthly }],
        },
        { id: "shva-license", ...payments.shvaLicense, ...(rate("shvaLicense", 0) === 0 ? { included: true as const } : { charges: [{ amount: rate("shvaLicense", 0), unit: payments.terminalMonthly }] }) },
        { id: "vhq-management", ...payments.vhqManagement, ...(rate("vhqManagement", 0) === 0 ? { included: true as const } : { charges: [{ amount: rate("vhqManagement", 0), unit: payments.terminalMonthly }] }) },
      ],
      options: [
        {
          id: "emv-lab-repair",
          ...payments.labRepair,
          charges: [{ amount: paymentRates.labRepairMonthly, unit: payments.terminalMonthly }],
        },
        {
          id: "payment-gateway",
          ...payments.gateway,
          charges: [{ amount: paymentRates.gatewayMonthly, unit: payments.terminalMonthly }],
        },
        {
          id: "sim-data",
          ...payments.simData,
          charges: [{ amount: paymentRates.simDataMonthly, unit: payments.terminalMonthly }],
        },
        { id: "dock-and-stand", ...payments.accessories, charges: [{ amount: rate("accessories", null), unit: payments.deviceUnit }] },
        { id: "terminal-replacement", ...payments.replacement, charges: [{ amount: rate("replacement", null), unit: payments.deviceUnit }] },
        { id: "terminal-transport", ...payments.transport, charges: [{ amount: rate("transport", null), unit: payments.deviceUnit }] },
      ],
    },
    {
      id: "online",
      title: payments.online,
      rows: [
        {
          id: "virtual-activation",
          ...payments.virtualSetup,
          charges: [{ amount: paymentRates.virtualSetup, unit: payments.activation }],
        },
        {
          id: "virtual-service",
          ...payments.virtualService,
          detail: payments.included.replace("{n}", format.format(paymentRates.virtualIncludedTransactions ?? 0)),
          charges: [{ amount: paymentRates.virtualMonthly, unit: payments.terminalMonthly }],
        },
        {
          id: "virtual-overage",
          ...payments.overage,
          charges: [{ amount: paymentRates.virtualOverage, unit: payments.transactionUnit }],
        },
        {
          id: "3d-secure",
          ...payments.secure,
          charges: [
            { amount: paymentRates.secureSetup, unit: payments.activation },
            { amount: paymentRates.secureOperation, unit: payments.operationUnit },
          ],
        },
        { id: "additional-virtual-terminal", ...payments.additionalVirtual, charges: [{ amount: rate("additionalVirtual", null), unit: payments.deviceUnit }] },
      ],
    },
  ];

  const paymentList = (rows: PaymentRow[]) => (
    <dl className="pricing-payment-list">
      {rows.map((row) => (
        <div key={row.id} data-pricing-payment={row.id} data-pricing-payment-included={row.included}>
          <dt>
            {row.help ? (
              <details className="pricing-service-help">
                <summary aria-label={payments.explanationLabel.replace("{service}", row.title)}>
                  <span>{row.title}</span>
                  <span className="pricing-help-icon" aria-hidden="true">?</span>
                </summary>
                <p>{row.help}</p>
              </details>
            ) : row.title}
            {row.detail && <span className="cost-description">{row.detail}</span>}
          </dt>
          <dd className="cost-amount">
            {row.charges ? row.charges.map((charge) => (
              <p key={charge.unit}>
                <strong>{price(charge.amount)}</strong>
                <span>{charge.unit}</span>
              </p>
            )) : row.included ? (
              <span className="pricing-included-label">{payments.includedLabel}</span>
            ) : <strong>{t.quote}</strong>}
          </dd>
        </div>
      ))}
    </dl>
  );

  return (
    <>
      <Navbar />
      <main id="main-content" className="pricing-page">
        <section id="compare-offers" className="shell pricing-overview" aria-labelledby="pricing-title">
          <header className="pricing-heading">
            <p className="pricing-launch">{u.pricing}</p>
            <h1 id="pricing-title">{t.title}</h1>
            <p className="pricing-intro">{t.intro}</p>
          </header>
          <PricingBilling lang={lang} policy={editable?.billing_policy}>
          <p className="pricing-unit">{t.unit}</p>
          <div className="plans">
            {modules.map(({ key, label, href }) => {
              const plan = t.plans[key];
 const commercial = editable?.products.find(p => p.id === key);

              return (
                <article key={key} id={`plan-${key}`} data-pricing-plan={key} className="plan">
                  {key === "restaurant" && <span id="plan-pos" className="pricing-anchor" aria-hidden="true" />}
                  <h2><Link href={`/${lang}${href}`}>{commercial?.name[lang] ?? u[label]}</Link></h2>
                  <p className="pricing-module-intro">{plan.text}</p>
                  <SoftwarePrice lang={lang} monthlyMinor={commercial?.monthly_minor ?? Math.round(pricingRates[key] * 100)} />
                  {commercial?.capabilities ? featureList(commercial.capabilities, key) : <ul className="check-list">
                    {plan.items.map((item) => (
                      <li key={item}>
                        <Icon name="check" />
                        <ProductMentions lang={lang}>{item}</ProductMentions>
                      </li>
                    ))}
                  </ul>}
                  <p className="pricing-module-note">{commercial && key !== "ordering" ? included(commercial.included) : plan.note}</p>
                </article>
              );
            })}
          </div>
          {bundles.length > 0 && <section className="pricing-bundles" aria-labelledby="bundle-title">
            <h2 id="bundle-title">{b.title}</h2>
            <div className="pricing-bundle-grid">
              {[...bundles].sort((a, b) => Number(!!b.recommended) - Number(!!a.recommended)).map(plan => <article key={plan.id} data-pricing-bundle={plan.id} className={`pricing-bundle${plan.recommended ? ' pricing-bundle-recommended' : ''}`}>
                {plan.recommended && <p className="pricing-bundle-badge">{b.recommended}</p>}
                <h3>{plan.name[lang]}</h3>
                <p>{plan.id === 'integral' ? b.integral : plan.id === 'restaurant-orders' ? b.duo : plan.modules?.map(id => catalog?.products.find(p => p.id === id)?.name[lang] ?? id).join(' + ')}</p>
                <SoftwarePrice lang={lang} monthlyMinor={plan.monthly_minor} />
                <p className="pricing-bundle-inclusions">{included(plan.included)}</p>
                {'capabilities' in plan && !['integral', 'restaurant-orders'].includes(plan.id) && featureList(plan.capabilities)}
                {plan.included.pos_users_unlimited && <p>{b.accounts}</p>}
                <Link className="pricing-bundle-cta" href={`/${lang}/contact?offer=${encodeURIComponent(plan.id)}`}>{b.cta}</Link>
              </article>)}
            </div>
          </section>}
          </PricingBilling>
          <div className="pricing-licence-strip">
            <div>
              <h2>{deviceBased ? t.licenceTitle : catalogueCopy[lang].pos}</h2>
              <p data-pricing-licences>{deviceBased ? t.licences : catalogueCopy[lang].licences}</p>
            </div>
            <div className="cost-amount" data-pricing-cost="extraPos">
              <strong>{price(pricingRates.extraPos)}</strong>
              <span>{deviceBased ? t.licenceUnit : t.monthly}</span>
            </div>
          </div>
        </section>

        {editable && <section className="shell pricing-content-section"><h2>{catalogueCopy[lang].licencesTitle}</h2><dl className="pricing-setup-list">{editable.tariffs.filter(row=>(deviceBased ? ['extraChef','extraKDS'] : ['extraEmployee','extraChef','extraPOSDevice','extraKDS']).includes(row.id)).map(row=><div key={row.id}><dt>{row.name[lang]}</dt><dd className="cost-amount"><strong>{price(row.amount_minor===null?null:row.amount_minor/100)}</strong><span>{t.monthly}</span></dd></div>)}</dl></section>}

        <section id="plan-delivery" className="shell pricing-content-section" aria-labelledby="maps-and-routes">
          <header className="pricing-block-heading">
            <h2 id="maps-and-routes">{delivery.title}</h2>
            <p>{delivery.description}</p>
          </header>
        </section>

        <section id="setup-fees" className="shell pricing-content-section" aria-labelledby="setup-fees-title">
          <header className="pricing-block-heading">
            <h2 id="setup-fees-title">{t.costsTitle}</h2>
            <p>{t.costsText}</p>
          </header>
          <dl className="pricing-setup-list">
            {t.costs.map((cost) => (
              <div key={cost.key} data-pricing-cost={cost.key}>
                <dt>{cost.title}<span className="cost-description">{cost.text}</span></dt>
                <dd className="cost-amount">
                  <strong>{price(rate(cost.key, cost.key === "kitchenSetup" ? null : initialPricingRates[cost.key]))}</strong>
                  {cost.unit && <span>{cost.unit}</span>}
                </dd>
              </div>
            ))}
          </dl>
          <p className="pricing-detail">{t.menuNote}</p>
        </section>

        <section id="hardware-and-payments" className="shell pricing-content-section" aria-labelledby="hardware-and-payments-title">
          <header className="pricing-block-heading">
            <h2 id="hardware-and-payments-title">{payments.title}</h2>
            <p>{payments.text}</p>
          </header>
          <div className="pricing-payment-grid">
            {paymentGroups.map((group) => (
              <article className="pricing-payment-card" key={group.id}>
                <h3>{group.title}</h3>
                {paymentList(group.rows)}
                {group.options && (
                  <details className="pricing-payment-options">
                    <summary>{payments.optionsTitle}</summary>
                    {paymentList(group.options)}
                  </details>
                )}
              </article>
            ))}
          </div>
          <p className="pricing-detail">{payments.options}</p>
          <p className="pricing-detail">{t.projects}</p>
        </section>

        {editable && <section className="shell pricing-content-section"><h2>{catalogueCopy[lang].services}</h2><dl className="pricing-setup-list">
          {editable.tariffs.filter(row => ['deliveryService', 'kitchenPrinting'].includes(row.id)).map(row => <div key={row.id} data-pricing-cost={row.id}><dt>{row.name[lang]}</dt><dd className="cost-amount"><strong>{price(row.amount_minor === null ? null : row.amount_minor / 100)}</strong></dd></div>)}
        </dl></section>}

        <FaqSection lang={lang} items={editable ? [
 {q:billingCopy[lang].faqQuestion,a:billingCopy[lang].faqAnswer},
 {q: lang === "fr" ? "Le QR à table exige-t-il Foody Online ?" : lang === "he" ? "האם QR בשולחן דורש את מודול ההזמנות?" : "Does table QR ordering require Foody Online?", a:b.qr},
 {q:lang === "fr" ? "Peut-on vendre en ligne sans caisse ?" : lang === "he" ? "אפשר למכור אונליין בלי קופה?" : "Can I sell online without a POS?", a:b.printing},
 {q:catalogueCopy[lang].faqPrice,a:editable.products.map(p=>`${p.name[lang]} ${new Intl.NumberFormat(locale).format(p.monthly_minor/100)} ₪ ${t.monthly}.`).join(' ')},
 {q:catalogueCopy[lang].faqExtras,a:catalogueCopy[lang].faqExtraAnswer},
 {q:catalogueCopy[lang].faqContract,a:catalogueCopy[lang].faqContractAnswer},
 ] : t.faq} />
        <CallToAction lang={lang} />
      </main>
      <Footer />
    </>
  );
}
