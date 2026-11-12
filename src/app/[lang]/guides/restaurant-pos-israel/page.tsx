import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CallToAction, JsonLd } from "@/components/marketing/Shared";
import { buyingGuide } from "@/lib/marketing/buying-guide";
import { acquisitionContent, BUYING_GUIDE_PATH } from "@/lib/marketing/acquisition";
import { TABIT_COMPARISON_PATH } from "@/lib/marketing/comparison";
import { pricingRates } from "@/lib/marketing/pricing";
import { getContentMetadata, languageAlternates, resolveLang, SITE_URL, SUPPORTED_LANGS } from "@/lib/seo";

/** Localized buying guide with one canonical per language and reciprocal alternates. */
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = resolveLang((await params).lang);
  const t = buyingGuide[lang];
  return { ...getContentMetadata(lang, BUYING_GUIDE_PATH, t.title, t.description, SUPPORTED_LANGS), alternates: { canonical: `${SITE_URL}/${lang}${BUYING_GUIDE_PATH}`, languages: languageAlternates(BUYING_GUIDE_PATH) } };
}

/** Quote-review questions and transparent Foody cost arithmetic for Israeli restaurants. */
export default async function BuyingGuidePage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = resolveLang((await params).lang);
  const t = buyingGuide[lang];
  const monthly = pricingRates.restaurant + pricingRates.extraPos;
  const amount = (value: number) => new Intl.NumberFormat(`${lang}-IL`).format(value);
  return <><Navbar /><main id="main-content">
    <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: t.title, description: t.description, inLanguage: lang, dateModified: "2026-11-01", mainEntityOfPage: `${SITE_URL}/${lang}${BUYING_GUIDE_PATH}`, author: { "@type": "Organization", name: "Foody POS", url: SITE_URL }, publisher: { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: "Foody", url: SITE_URL } }} />
    <article className="shell buying-guide">
      <header><Link className="breadcrumb" href={`/${lang}`}>Foody POS</Link><h1>{t.title}</h1><p className="guide-intro">{t.description}</p><p className="guide-disclosure">{t.disclosure}</p><p className="fine-print">{t.reviewed} <time dateTime="2026-11-01">{new Intl.DateTimeFormat(`${lang}-IL`, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date("2026-11-01T12:00:00Z"))}</time></p></header>
      {t.sections.map((section) => <section className="guide-section" key={section.path}><h2>{section.title}</h2><p>{section.text}</p><Link className="text-link" href={`/${lang}${section.path}`}>{section.link}</Link></section>)}
      <section className="guide-section"><h2>{t.budgetTitle}</h2><p>{t.budgetIntro}</p><div className="guide-table-scroll"><table className="guide-budget"><caption>{t.budgetTitle}</caption><thead><tr>{t.budgetHeaders.map(label => <th scope="col" key={label}>{label}</th>)}</tr></thead><tbody>{t.budgetRows.map(([label, key]) => <tr key={key}><th scope="row">{label}</th><td><bdi>{amount(pricingRates[key])}</bdi></td></tr>)}</tbody><tfoot><tr><th scope="row">{t.monthly}</th><td><bdi>{amount(monthly)}</bdi></td></tr><tr><th scope="row">{t.firstYear}</th><td><bdi>{amount(monthly * 12 + pricingRates.setup)}</bdi></td></tr></tfoot></table></div><p className="guide-disclosure">{t.budgetNote}</p><div className="resource-inline-links"><Link className="text-link" href={`/${lang}/pricing`}>{t.pricesLink}</Link><Link className="text-link" href={`/${lang}/sectors/food-beverage/restaurants`}>{acquisitionContent[lang].restaurantLink}</Link></div></section>
      <section className="guide-section"><h2>{t.checklistTitle}</h2><ul className="guide-checklist">{t.checklist.map(item => <li key={item}>{item}</li>)}</ul><Link className="text-link" href={`/${lang}${TABIT_COMPARISON_PATH}`}>{t.compareLink}</Link></section>
    </article>
    <CallToAction lang={lang} />
  </main><Footer /></>;
}
