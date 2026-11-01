import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ComparisonDemonstrations from "@/components/marketing/ComparisonDemonstrations";
import ProductScreenshots from "@/components/marketing/ProductScreenshots";
import { CallToAction, JsonLd } from "@/components/marketing/Shared";
import { COMPARISON_REVIEWED_AT, comparisonCopy, comparisonSources, TABIT_COMPARISON_PATH } from "@/lib/marketing/comparison";
import { FOOD_COST_PATH, PRODUCT_DEMOS_PATH } from "@/lib/marketing/resources";
import { ui } from "@/lib/marketing/ui";
import { routes } from "@/lib/marketing/ui";
import { getContentMetadata, resolveLang, SITE_URL } from "@/lib/seo";

/** Localized metadata for the same sourced comparison in all three languages. */
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = resolveLang((await params).lang);
  const t = comparisonCopy[lang];
  return getContentMetadata(lang, TABIT_COMPARISON_PATH, t.title, t.description, ["he", "fr", "en"]);
}

/** Buying criteria with attributed competitor facts and no invented competitor prices. */
export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const lang = resolveLang((await params).lang);
  const t = comparisonCopy[lang];
  return <>
    <Navbar />
    <main id="main-content" className="comparison-page">
      <JsonLd data={{
        "@context": "https://schema.org", "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Foody", item: `${SITE_URL}/${lang}` },
          { "@type": "ListItem", position: 2, name: t.title, item: `${SITE_URL}/${lang}${TABIT_COMPARISON_PATH}` },
        ],
      }} />
      <section className="shell comparison-heading">
        <Link href={`/${lang}${routes.restaurants}`} className="breadcrumb">{t.restaurantLink}</Link>
        <h1>{t.heading}</h1>
        <p>{t.description}</p>
      </section>
      <section className="shell related-section" data-foody-reasons>
        <h2>{t.reasonsTitle}</h2>
        <div className="feature-columns">
          {t.reasons.map(reason => <div key={reason.title}>
            <h3>{reason.title}</h3>
            <p>{reason.text}</p>
            <Link className="text-link" href={`/${lang}${reason.href}`}>{reason.link}</Link>
          </div>)}
        </div>
        <p className="fine-print" data-kitchen-scope>{t.moduleNote}</p>
      </section>
      <section className="shell">
        <p className="fine-print">{t.reviewed} <time dateTime={COMPARISON_REVIEWED_AT}>{new Intl.DateTimeFormat(`${lang}-IL`, { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${COMPARISON_REVIEWED_AT}T00:00:00Z`))}</time>.</p>
      </section>
      <section className="shell comparison-details">
        <div className="comparison-scroll" role="region" aria-label={t.caption} tabIndex={0}>
          <table className="comparison-table comparison-matrix" aria-describedby="comparison-assessment">
            <caption>{t.caption}</caption>
            <thead><tr><th scope="col">{t.criterion}</th><th scope="col">Foody</th><th scope="col">Tabit*</th></tr></thead>
            <tbody>{t.rows.map(row => <tr key={row.id} data-capability={row.id}>
              <th scope="row">{row.label}<p className="comparison-detail">{row.foody} <Link className="comparison-source" href={`/${lang}${row.proof}`} aria-label={`${t.foodySource} : ${row.label}`}>{t.foodySource}</Link></p></th>
              <td><span className="comparison-vendor" aria-hidden="true">Foody</span><strong className="comparison-present"><span aria-hidden="true">✓</span>{t.presentLabel}</strong></td>
              <td data-competitor-status={row.id === "sales-forecast" ? "documented" : "unconfirmed"}><span className="comparison-vendor" aria-hidden="true">Tabit*</span>
                <strong className={row.id === "sales-forecast" ? "comparison-documented" : "comparison-unconfirmed"}><span aria-hidden="true">{row.id === "sales-forecast" ? "✓" : "?"}</span>{row.id === "sales-forecast" ? t.documentedLabel : t.unconfirmedLabel}</strong>
                <p className="comparison-status-detail">{row.id === "sales-forecast" ? t.forecastNote : t.unconfirmedNote}</p>
                {row.id === "sales-forecast" && <a className="comparison-source" href={comparisonSources.forecasts}>{t.forecastSource}</a>}
              </td>
            </tr>)}</tbody>
          </table>
        </div>
        <p id="comparison-assessment" className="comparison-attribution">* {t.attributionNote} <a className="comparison-source" href={comparisonSources.integrations}>{t.source}</a></p>
        <p className="comparison-scope-note">{t.scopeNote} <a className="comparison-source" href={comparisonSources.israel}>{t.israelSource}</a> <a className="comparison-source" href={comparisonSources.production}>{t.productionSource}</a></p>
        <Link className="text-link" href={`/${lang}/pricing`}>{t.pricingLink}</Link>
      </section>
      <ComparisonDemonstrations lang={lang} />
      <ProductScreenshots lang={lang} />
      <div className="shell resource-inline-links"><Link className="text-link" href={`/${lang}${PRODUCT_DEMOS_PATH}`}>{ui[lang].productDemos}</Link><Link className="text-link" href={`/${lang}${FOOD_COST_PATH}`}>{ui[lang].foodCostCalculator}</Link></div>
      <section className="shell related-section" data-commission-example>
        <h2>{t.commission.title}</h2>
        <p>{t.commission.text}</p>
        <p className="fine-print">{t.commission.note}</p>
      </section>
      <section className="shell related-section">
        <h2>{t.linksTitle}</h2>
        <div>
          <Link href={`/${lang}${routes.restaurants}`}>{t.restaurantLink}</Link>
          <Link href={`/${lang}/help/orders/taking-an-order-pos`}>{t.orderGuide}</Link>
          <Link href={`/${lang}/help/tables-floors/floor-plans`}>{t.tableGuide}</Link>
        </div>
      </section>
      <CallToAction lang={lang} />
    </main>
    <Footer />
  </>;
}
