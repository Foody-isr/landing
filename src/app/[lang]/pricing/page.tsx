import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/marketing/Icon";
import ProductMentions from "@/components/marketing/ProductMentions";
import { CallToAction, FaqSection } from "@/components/marketing/Shared";
import { marketing } from "@/lib/marketing/content";
import { pricingRates } from "@/lib/marketing/pricing";
import { mapsOffer, mapsPricing } from "@/lib/marketing/maps-pricing";
import { productNavigation, routes, ui } from "@/lib/marketing/ui";
import { resolveLang } from "@/lib/seo";

/** Public launch plans with explicit software, setup and payment boundaries. */
export default async function PricingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = resolveLang((await params).lang);
  const t = marketing[lang].pricing;
  const maps = mapsPricing[lang];
  const format = new Intl.NumberFormat(lang === "he" ? "he-IL" : lang);
  const price = (amount: number) => (
    <bdi dir="ltr">{format.format(amount)} ₪</bdi>
  );
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="shell pricing-section">
          <div className="section-heading centered pricing-heading">
            <p className="pricing-launch">{t.launch}</p>
            <h1>{t.title}</h1>
            <p>{t.description}</p>
            <ul className="pricing-promises" role="list">
              {t.promises.map((promise) => (
                <li key={promise}>
                  <Icon name="check" />
                  {promise}
                </li>
              ))}
            </ul>
            <nav className="pricing-plan-nav" aria-label={ui[lang].products}>
              {productNavigation.map((product) => (
                <Link key={product.key} href={`#plan-${product.plan}`}>
                  {ui[lang][product.key]}
                </Link>
              ))}
            </nav>
          </div>
          <div className="plans">
            {t.plans.map((plan, i) => (
              <article
                key={plan.key}
                id={`plan-${plan.key}`}
                data-pricing-plan={plan.key}
                className={`plan${i === 1 ? " plan-featured" : ""}`}
              >
                {i === 1 && (
                  <span className="plan-label">{t.featuredLabel}</span>
                )}
                <Icon name={(["shop", "restaurant", "kitchen"] as const)[i]} />
                <h2>
                  <ProductMentions
                    lang={lang}
                    currentHref="/pricing#plan-complete"
                  >
                    {plan.title}
                  </ProductMentions>
                </h2>
                <p>
                  <ProductMentions lang={lang}>{plan.text}</ProductMentions>
                </p>
                <div className="plan-price">
                  <strong>{price(pricingRates[plan.key])}</strong>
                  <span>{t.monthly}</span>
                </div>
                <p className="plan-unit">{t.unit}</p>
                <Link
                  className={`button ${i === 1 ? "button-dark" : "button-outline"}`}
                  href={`/${lang}/contact`}
                >
                  {t.demo}
                </Link>
                <ul className="check-list">
                  {plan.items.map((item) => (
                    <li key={item}>
                      <Icon name="check" />
                      <ProductMentions lang={lang}>{item}</ProductMentions>
                    </li>
                  ))}
                </ul>
                {plan.key === "complete" && (
                  <div className="plan-product-links">
                    {(["restaurantPlan", "kitchen"] as const).map((key) => (
                      <Link
                        className="text-link"
                        key={key}
                        href={`/${lang}${key === "restaurantPlan" ? routes.restaurants : routes.kitchen}`}
                      >
                        {ui[lang][key]}
                        <Icon name="arrow" className="directional" />
                      </Link>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
          <p className="pricing-note" data-pricing-licences>
            {t.licences}
          </p>
          <p className="pricing-note">{t.exclusions}</p>
        </section>
        <section className="shell pricing-specialists">
          <article
            id="plan-ordering"
            className="pricing-ordering"
            data-pricing-plan="ordering"
          >
            <Icon name="globe" />
            <h2>
              <ProductMentions lang={lang}>{t.ordering.title}</ProductMentions>
            </h2>
            <p>
              <ProductMentions lang={lang}>{t.ordering.text}</ProductMentions>
            </p>
            <div className="specialist-price">
              <strong>{price(pricingRates.ordering)}</strong>
              <span>
                {t.monthly} · {t.unit}
              </span>
            </div>
            <ul className="check-list">
              {t.ordering.items.map((item) => (
                <li key={item}>
                  <Icon name="check" />
                  <ProductMentions lang={lang}>{item}</ProductMentions>
                </li>
              ))}
            </ul>
            <p className="fine-print">
              <ProductMentions lang={lang}>{t.ordering.note}</ProductMentions>
            </p>
            <div className="solution-actions">
              <Link className="button button-dark" href={`/${lang}/contact`}>
                {t.demo}
              </Link>
              <Link className="text-link" href={`/${lang}${routes.ordering}`}>
                {t.ordering.link}
                <Icon name="arrow" className="directional" />
              </Link>
            </div>
          </article>
          <article
            id="plan-kitchen"
            className="pricing-kitchen"
            data-pricing-plan="kitchen"
          >
            <Icon name="kitchen" />
            <h2>
              <ProductMentions lang={lang}>{t.kitchen.title}</ProductMentions>
            </h2>
            <p>
              <ProductMentions lang={lang}>{t.kitchen.text}</ProductMentions>
            </p>
            <div className="specialist-price">
              <strong>{price(pricingRates.kitchen)}</strong>
              <span>
                {t.monthly} · {t.unit}
              </span>
            </div>
            <p className="fine-print">
              <ProductMentions lang={lang}>{t.kitchen.note}</ProductMentions>
            </p>
            <Link className="text-link" href={`/${lang}/solutions/kitchen`}>
              {t.kitchen.link}
              <Icon name="arrow" className="directional" />
            </Link>
          </article>
          <article className="pricing-networks">
            <Icon name="chain" />
            <h2>{t.networks.title}</h2>
            <p>{t.networks.text}</p>
            <strong className="specialist-quote">{t.quote}</strong>
            <Link className="text-link" href={`/${lang}/contact`}>
              {t.networks.link}
              <Icon name="arrow" className="directional" />
            </Link>
          </article>
        </section>
        <section className="shell section-space pricing-costs">
          <div className="split-heading">
            <h2>{t.costsTitle}</h2>
            <p>{t.costsText}</p>
          </div>
          <dl className="pricing-cost-list">
            {t.costs.map((cost) => (
              <div key={cost.key} data-pricing-cost={cost.key}>
                <dt>{cost.title}</dt>
                <dd className="cost-amount">
                  <strong>{price(pricingRates[cost.key])}</strong>
                  <span>{cost.unit}</span>
                </dd>
                <dd className="cost-description">{cost.text}</dd>
              </div>
            ))}
          </dl>
          <div className="pricing-fee-details">
            {[
              { title: t.hardwareTitle, text: t.hardwareText },
              { title: t.paymentsTitle, text: t.paymentsText },
              { title: t.usageTitle, text: t.usageText },
            ].map((detail) => (
              <article key={detail.title}>
                <h3>{detail.title}</h3>
                <p>
                  <ProductMentions lang={lang}>{detail.text}</ProductMentions>
                </p>
              </article>
            ))}
          </div>
        </section>
        <section id="maps-and-routes" className="shell section-space pricing-costs" data-maps-offer-status={mapsOffer.status}>
          <div className="split-heading"><h2>{maps.title}</h2><p><ProductMentions lang={lang}>{maps.description}</ProductMentions></p></div>
          <dl className="pricing-cost-list">
            <div data-pricing-maps="included"><dt>{maps.included}</dt><dd className="cost-amount"><strong>{price(0)}</strong><span>{maps.includedUnit}</span></dd><dd className="cost-description">{maps.includedText}</dd></div>
            <div data-pricing-maps="plus">
              <dt>{maps.plus}<p className="fine-print">{maps.planned}</p></dt>
              <dd className="cost-amount"><strong>{price(mapsOffer.monthly_price)}</strong><span>{maps.monthly}</span></dd>
              <dd className="cost-description">
                <ul className="check-list">{[[maps.optimization, mapsOffer.optimization_credits], [maps.tiles, mapsOffer.map_tiles], [maps.geocoding, mapsOffer.geocoding_requests], [maps.routes, mapsOffer.route_requests]].map(([label, amount]) => <li key={String(label)}><Icon name="check" />{String(label).replace('{n}', format.format(Number(amount)))}</li>)}</ul>
                <p>{maps.creditRules.replace('{single}', format.format(mapsOffer.single_stop_credits)).replace('{fleet}', format.format(mapsOffer.fleet_stop_credits))}</p>
                <p className="fine-print">{maps.activation}</p>
                <Link className="button button-outline" href={`/${lang}/contact`}>{maps.contact}</Link>
              </dd>
            </div>
            <div data-pricing-maps="custom"><dt>{maps.custom}</dt><dd className="cost-amount"><strong>{maps.quote}</strong></dd><dd className="cost-description">{maps.customText}</dd></div>
          </dl>
          <p className="pricing-note">{maps.noOverage}</p>
        </section>
        <FaqSection lang={lang} items={[...t.faq, { q: maps.faqTitle, a: maps.faqAnswer.replace('{price}', format.format(mapsOffer.monthly_price)).replace('{credits}', format.format(mapsOffer.optimization_credits)) }]} />
        <CallToAction lang={lang} />
      </main>
      <Footer />
    </>
  );
}
