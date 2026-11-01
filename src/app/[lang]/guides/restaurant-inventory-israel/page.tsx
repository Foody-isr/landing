import type { Metadata } from "next";
import { acquisitionContent } from "@/lib/marketing/acquisition";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CallToAction, JsonLd } from "@/components/marketing/Shared";
import { inventoryGuide, INVENTORY_GUIDE_PATH, INVENTORY_GUIDE_REVIEWED_AT } from "@/lib/marketing/inventory-guide";
import { FOOD_COST_PATH, PRODUCT_DEMOS_PATH } from "@/lib/marketing/resources";
import { ui } from "@/lib/marketing/ui";
import { getContentMetadata, resolveLang, SITE_URL, SUPPORTED_LANGS } from "@/lib/seo";

/** Localized inventory guide metadata with reciprocal language alternates and a resource-specific sharing card. */
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = resolveLang((await params).lang), t = inventoryGuide[lang];
  return getContentMetadata(lang, INVENTORY_GUIDE_PATH, t.title, t.description, SUPPORTED_LANGS);
}

/** Explains inventory reconciliation and buying checks using published Foody procedures and a synthetic example. */
export default async function InventoryGuidePage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = resolveLang((await params).lang), t = inventoryGuide[lang];
  return <><Navbar /><main id="main-content">
    <JsonLd data={{ "@context": "https://schema.org", "@type": "Article", headline: t.title, description: t.description, inLanguage: lang, dateModified: INVENTORY_GUIDE_REVIEWED_AT, mainEntityOfPage: `${SITE_URL}/${lang}${INVENTORY_GUIDE_PATH}`, author: { "@type": "Organization", name: "Foody POS", url: SITE_URL }, publisher: { "@type": "Organization", "@id": `${SITE_URL}/#organization`, name: "Foody", url: SITE_URL } }} />
    <article className="shell buying-guide" data-inventory-guide>
      <header><Link className="breadcrumb" href={`/${lang}/solutions/kitchen`}>{ui[lang].kitchen}</Link><h1>{t.title}</h1><p className="guide-intro">{t.description}</p><p className="guide-disclosure">{t.disclosure}</p><p className="fine-print">{t.reviewed} <time dateTime={INVENTORY_GUIDE_REVIEWED_AT}>{new Intl.DateTimeFormat(`${lang}-IL`, { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${INVENTORY_GUIDE_REVIEWED_AT}T12:00:00Z`))}</time></p></header>
      <p className="guide-section">{t.summary}</p>
      {t.sections.map(section => <section className="guide-section" id={section.id} key={section.id}><h2>{section.title}</h2><p>{section.text}</p><Link className="text-link" href={`/${lang}${section.path}`}>{section.link}</Link></section>)}
      <section className="guide-section" id="worked-example"><h2>{t.exampleTitle}</h2><p>{t.exampleIntro}</p><div className="guide-table-scroll"><table className="guide-budget"><caption>{t.exampleTitle}</caption><thead><tr>{t.exampleHeaders.map(label => <th scope="col" key={label}>{label}</th>)}</tr></thead><tbody>{t.exampleRows.map(([label, quantity]) => <tr key={label}><th scope="row">{label}</th><td><bdi dir="ltr">{quantity}</bdi></td></tr>)}</tbody></table></div><p>{t.exampleFormula}</p><p><bdi dir="ltr">20 + 10 − 6 − 1 = 23 kg</bdi><br /><bdi dir="ltr">22 − 23 = −1 kg</bdi></p><p>{t.exampleResult}</p><p className="guide-disclosure">{t.exampleNote}</p></section>
      <section className="guide-section" id="demo-checklist"><h2>{t.checklistTitle}</h2><ul className="guide-checklist">{t.checklist.map(item => <li key={item}>{item}</li>)}</ul></section>
      <section className="guide-section"><h2>{t.nextTitle}</h2><p>{t.nextText}</p><div className="resource-inline-links"><Link className="text-link" href={`/${lang}${FOOD_COST_PATH}`}>{t.calculatorLink}</Link><Link className="text-link" href={`/${lang}${PRODUCT_DEMOS_PATH}`}>{t.demosLink}</Link><Link className="text-link" href={`/${lang}/solutions/kitchen`}>{t.kitchenLink}</Link><Link className="text-link" href={`/${lang}/sectors/food-beverage/restaurants`}>{acquisitionContent[lang].restaurantLink}</Link></div></section>
    </article><CallToAction lang={lang} /></main><Footer /></>;
}
