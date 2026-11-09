import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/marketing/Icon";
import ProductMentions from "@/components/marketing/ProductMentions";
import { CallToAction, FaqSection } from "@/components/marketing/Shared";
import { marketing } from "@/lib/marketing/content";
import { paymentRates, pricingRates } from "@/lib/marketing/pricing";
import { mapsOffer, mapsPricing } from "@/lib/marketing/maps-pricing";
import { routes, ui } from "@/lib/marketing/ui";
import { resolveLang } from "@/lib/seo";

const modules = [
  { key: "restaurant", label: "restaurantPlan", href: routes.restaurants },
  { key: "ordering", label: "ordering", href: routes.ordering },
  { key: "kitchen", label: "kitchen", href: routes.kitchen },
] as const;

/** Shows the independent Foody modules and their setup, equipment and payment fees. */
export default async function PricingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = resolveLang((await params).lang);
  const t = marketing[lang].pricing;
  const u = ui[lang];
  const payments = t.payments;
  const maps = mapsPricing[lang];
  const format = new Intl.NumberFormat(lang === "he" ? "he-IL" : lang);
  const price = (amount: number) => (
    <bdi dir="ltr">{format.format(amount)} ₪</bdi>
  );
  const paymentGroups: {
    id: string;
    title: string;
    rows: {
      id: string;
      title: string;
      detail?: string;
      charges: { amount: number; unit: string }[];
    }[];
  }[] = [
    {
      id: "physical",
      title: payments.physical,
      rows: [
        {
          id: "victa-portable",
          title: payments.victa,
          charges: [{ amount: paymentRates.victaPortable, unit: payments.deviceUnit }],
        },
        {
          id: "emv-service",
          title: payments.physicalService,
          charges: [{ amount: paymentRates.physicalMonthly, unit: payments.terminalMonthly }],
        },
      ],
    },
    {
      id: "online",
      title: payments.online,
      rows: [
        {
          id: "virtual-activation",
          title: payments.virtualSetup,
          charges: [{ amount: paymentRates.virtualSetup, unit: payments.activation }],
        },
        {
          id: "virtual-service",
          title: payments.virtualService,
          detail: payments.included.replace("{n}", format.format(paymentRates.virtualIncludedTransactions)),
          charges: [{ amount: paymentRates.virtualMonthly, unit: payments.terminalMonthly }],
        },
        {
          id: "virtual-overage",
          title: payments.overage,
          charges: [{ amount: paymentRates.virtualOverage, unit: payments.transactionUnit }],
        },
        {
          id: "3d-secure",
          title: payments.secure,
          charges: [
            { amount: paymentRates.secureSetup, unit: payments.activation },
            { amount: paymentRates.secureOperation, unit: payments.operationUnit },
          ],
        },
      ],
    },
  ];

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
          <p className="pricing-unit">{t.unit}</p>
          <div className="plans">
            {modules.map(({ key, label, href }) => {
              const plan = t.plans[key];
              return (
                <article key={key} id={`plan-${key}`} data-pricing-plan={key} className="plan">
                  {key === "restaurant" && <span id="plan-pos" className="pricing-anchor" aria-hidden="true" />}
                  <h2><Link href={`/${lang}${href}`}>{u[label]}</Link></h2>
                  <p className="pricing-module-intro">{plan.text}</p>
                  <div className="plan-price">
                    <strong>{price(pricingRates[key])}</strong>
                    <span>{t.monthly}</span>
                  </div>
                  <ul className="check-list">
                    {plan.items.map((item) => (
                      <li key={item}>
                        <Icon name="check" />
                        <ProductMentions lang={lang}>{item}</ProductMentions>
                      </li>
                    ))}
                  </ul>
                  <p className="pricing-module-note">{plan.note}</p>
                </article>
              );
            })}
          </div>
          <div className="pricing-licence-strip">
            <div>
              <h2>{t.licenceTitle}</h2>
              <p data-pricing-licences>{t.licences}</p>
            </div>
            <div className="cost-amount" data-pricing-cost="extraPos">
              <strong>{price(pricingRates.extraPos)}</strong>
              <span>{t.licenceUnit}</span>
            </div>
          </div>
        </section>

        <section
          id="plan-delivery"
          className="shell pricing-content-section"
          aria-labelledby="maps-and-routes"
          data-maps-offer-status={mapsOffer.status}
        >
          <div className="pricing-delivery">
            <div className="pricing-delivery-heading">
              <header className="pricing-block-heading">
                <h2 id="maps-and-routes">{maps.title}</h2>
                <p>{maps.description}</p>
              </header>
              <Link className="button button-outline" href={`/${lang}/contact`}>{maps.contact}</Link>
            </div>
            <p className="pricing-detail">
              <ProductMentions lang={lang}>{maps.shared}</ProductMentions>
            </p>
            <details className="pricing-delivery-details">
              <summary>{maps.details}</summary>
              <dl className="pricing-cost-list">
                <div data-pricing-maps="included">
                  <dt>{maps.included}</dt>
                  <dd className="cost-amount">
                    <strong>{price(0)}</strong>
                    <span>{maps.includedUnit}</span>
                  </dd>
                  <dd className="cost-description">{maps.includedText}</dd>
                </div>
                <div data-pricing-maps="plus">
                  <dt>{maps.plus}<p className="fine-print">{maps.planned}</p></dt>
                  <dd className="cost-amount">
                    <strong>{price(mapsOffer.monthly_price)}</strong>
                    <span>{maps.monthly}</span>
                  </dd>
                  <dd className="cost-description">
                    <ul className="check-list">
                      {[
                        [maps.optimization, mapsOffer.optimization_credits],
                        [maps.tiles, mapsOffer.map_tiles],
                        [maps.geocoding, mapsOffer.geocoding_requests],
                        [maps.routes, mapsOffer.route_requests],
                      ].map(([label, amount]) => (
                        <li key={String(label)}>
                          <Icon name="check" />
                          {String(label).replace("{n}", format.format(Number(amount)))}
                        </li>
                      ))}
                    </ul>
                    <p>{maps.creditRules
                      .replace("{single}", format.format(mapsOffer.single_stop_credits))
                      .replace("{fleet}", format.format(mapsOffer.fleet_stop_credits))}</p>
                    <p className="fine-print">{maps.activation}</p>
                    <Link className="text-link" href={`/${lang}/contact`}>{maps.contact}</Link>
                  </dd>
                </div>
                <div data-pricing-maps="custom">
                  <dt>{maps.custom}</dt>
                  <dd className="cost-amount"><strong>{t.quote}</strong></dd>
                  <dd className="cost-description">{maps.customText}</dd>
                </div>
              </dl>
              <p className="pricing-detail">{maps.noOverage}</p>
            </details>
          </div>
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
                  <strong>{cost.key === "kitchenSetup" ? t.quote : price(pricingRates[cost.key])}</strong>
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
                <dl className="pricing-payment-list">
                  {group.rows.map((row) => (
                    <div key={row.id} data-pricing-payment={row.id}>
                      <dt>
                        {row.title}
                        {row.detail && <span className="cost-description">{row.detail}</span>}
                      </dt>
                      <dd className="cost-amount">
                        {row.charges.map((charge) => (
                          <p key={charge.unit}>
                            <strong>{price(charge.amount)}</strong>
                            <span>{charge.unit}</span>
                          </p>
                        ))}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
          <p className="pricing-detail">{payments.options}</p>
          <p className="pricing-detail">{t.projects}</p>
        </section>

        <FaqSection lang={lang} items={t.faq} />
        <CallToAction lang={lang} />
      </main>
      <Footer />
    </>
  );
}
