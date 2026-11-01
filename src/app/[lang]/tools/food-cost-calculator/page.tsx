import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FoodCostCalculator from "@/components/marketing/FoodCostCalculator";
import { CallToAction, JsonLd } from "@/components/marketing/Shared";
import { foodCostCopy } from "@/lib/marketing/food-cost-copy";
import { inventoryGuide, INVENTORY_GUIDE_PATH } from "@/lib/marketing/inventory-guide";
import { FOOD_COST_PATH, PRODUCT_DEMOS_PATH } from "@/lib/marketing/resources";
import { ui } from "@/lib/marketing/ui";
import { getContentMetadata, resolveLang, SITE_URL, SUPPORTED_LANGS } from "@/lib/seo";

/** Reciprocal, localized metadata for the free recipe-cost tool. */
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = resolveLang((await params).lang), t = foodCostCopy[lang];
  return getContentMetadata(lang, FOOD_COST_PATH, t.title, t.description, SUPPORTED_LANGS);
}

/** Public food-cost worksheet with readable formulas and no restaurant data access. */
export default async function FoodCostPage({ params }: { params: Promise<{ lang: string }> }) {
  const lang = resolveLang((await params).lang), t = foodCostCopy[lang];
  return <><Navbar /><main id="main-content" className="food-cost-page">
    <JsonLd data={{ "@context": "https://schema.org", "@type": "WebApplication", name: t.title, description: t.description, url: `${SITE_URL}/${lang}${FOOD_COST_PATH}`, inLanguage: lang, applicationCategory: "BusinessApplication", operatingSystem: "Web browser", isAccessibleForFree: true, publisher: { "@id": `${SITE_URL}/#organization` } }} />
    <header className="shell resource-heading"><Link className="breadcrumb" href={`/${lang}/solutions/kitchen`}>{ui[lang].kitchen}</Link><h1>{t.heading}</h1><p>{t.intro}</p><p className="fine-print">{t.notice}</p></header>
    <section className="shell"><FoodCostCalculator lang={lang} /></section>
    <article className="shell calculator-explanation"><section><h2>{t.formulaTitle}</h2><p>{t.formula}</p></section><section><h2>{t.exampleTitle}</h2><p>{t.example}</p><p className="fine-print">{t.exampleNote}</p></section><section><h2>{t.foodyTitle}</h2><p>{t.foodyText}</p><div className="resource-inline-links"><Link className="text-link" href={`/${lang}/solutions/kitchen`}>{t.kitchenLink}</Link><Link className="text-link" href={`/${lang}/help/kitchen/food-cost`}>{t.guideLink}</Link><Link className="text-link" href={`/${lang}${PRODUCT_DEMOS_PATH}`}>{t.demoLink}</Link></div></section></article>
    <div className="shell resource-inline-links"><Link className="text-link" href={`/${lang}${INVENTORY_GUIDE_PATH}`}>{inventoryGuide[lang].linkLabel}</Link></div>
    <CallToAction lang={lang} /></main><Footer /></>;
}
