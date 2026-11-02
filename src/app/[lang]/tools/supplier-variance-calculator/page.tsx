import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SupplierVarianceCalculator from "@/components/marketing/SupplierVarianceCalculator";
import { CallToAction, FaqSection, JsonLd } from "@/components/marketing/Shared";
import { supplierVarianceCopy } from "@/lib/marketing/supplier-variance-copy";
import { calculateSupplierVariance, SUPPLIER_VARIANCE_SCENARIOS } from "@/lib/marketing/supplier-variance";
import { FOOD_COST_PATH, SUPPLIER_VARIANCE_PATH } from "@/lib/marketing/resources";
import { INVENTORY_GUIDE_PATH } from "@/lib/marketing/inventory-guide";
import { ui } from "@/lib/marketing/ui";
import { getContentMetadata, resolveLang, SITE_URL, SUPPORTED_LANGS } from "@/lib/seo";

/** Resource-specific metadata for the independent supplier discrepancy worksheet. */
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = resolveLang((await params).lang), t = supplierVarianceCopy[lang];
  return getContentMetadata(lang, SUPPLIER_VARIANCE_PATH, t.title, t.description, SUPPORTED_LANGS);
}

/** Public synthetic document cases and local reconciliation; no supplier upload or restaurant access. */
export default async function SupplierVariancePage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = resolveLang((await params).lang), t = supplierVarianceCopy[lang];
  return <><Navbar /><main id="main-content" className="supplier-variance-page">
    <JsonLd data={{ "@context": "https://schema.org", "@type": "WebApplication", name: t.title, description: t.description, url: `${SITE_URL}/${lang}${SUPPLIER_VARIANCE_PATH}`, inLanguage: lang, applicationCategory: "BusinessApplication", operatingSystem: "Web browser", isAccessibleForFree: true, publisher: { "@id": `${SITE_URL}/#organization` } }} />
    <header className="shell resource-heading"><Link className="breadcrumb" href={`/${lang}/solutions/kitchen`}>{ui[lang].kitchen}</Link><h1>{t.heading}</h1><p>{t.intro}</p><p className="fine-print">{t.notice}</p><a className="text-link" href="#supplier-edit-title">{t.editTitle}</a></header>
    <div className="shell"><SupplierVarianceCalculator lang={lang} /></div>
    <article className="shell supplier-explanation">
      <section><h2>{t.examplesTitle}</h2><div className="supplier-worked-examples">{SUPPLIER_VARIANCE_SCENARIOS.map(scenario => {
        const example = t.scenarios[scenario.id];
        const calculation = calculateSupplierVariance(scenario);
        return <section key={scenario.id} id={`example-${scenario.id}`} data-supplier-worked-example={scenario.id}><h3>{example.title}</h3><p>{example.text}</p><p className="supplier-example-conclusion" data-example-total-minor={calculation.ok ? calculation.totalVarianceMinor : undefined}>{example.conclusion}</p></section>;
      })}</div></section>
      <section id="reconciliation-formula"><h2>{t.formulaTitle}</h2><p className="supplier-formula">{t.formula}</p><p>{t.formulaDetails}</p></section>
      <section><h2>{t.scopeTitle}</h2><p>{t.scopeText}</p><div className="resource-inline-links"><Link className="text-link" href={`/${lang}/solutions/kitchen`}>{t.kitchenLink}</Link><Link className="text-link" href={`/${lang}/help/kitchen/suppliers-and-purchases`}>{t.procedureLink}</Link><Link className="text-link" href={`/${lang}/help/kitchen/delivery-note-import`}>{t.importLink}</Link><Link className="text-link" href={`/${lang}${INVENTORY_GUIDE_PATH}`}>{t.inventoryLink}</Link><Link className="text-link" href={`/${lang}${FOOD_COST_PATH}`}>{t.foodCostLink}</Link></div></section>
    </article>
    <FaqSection lang={lang} items={t.faq} currentHref={`/${lang}${SUPPLIER_VARIANCE_PATH}`} /><CallToAction lang={lang} />
  </main><Footer /></>;
}
