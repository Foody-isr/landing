import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductWalkthroughs from "@/components/marketing/ProductWalkthroughs";
import { CallToAction, JsonLd } from "@/components/marketing/Shared";
import { demoCopy } from "@/lib/marketing/demonstrations";
import { FOOD_COST_PATH, PRODUCT_DEMOS_PATH } from "@/lib/marketing/resources";
import { ui } from "@/lib/marketing/ui";
import { getContentMetadata, resolveLang, SITE_URL, SUPPORTED_LANGS } from "@/lib/seo";

/** Localized metadata for the three public kitchen walkthroughs. */
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang=resolveLang((await params).lang),t=demoCopy[lang];return getContentMetadata(lang,PRODUCT_DEMOS_PATH,t.title,t.description,SUPPORTED_LANGS);
}

/** Readable product evidence with synthetic examples, capture dates and current procedure links. */
export default async function KitchenDemosPage({ params }: { params: Promise<{ lang: string }> }) {
  const lang=resolveLang((await params).lang),t=demoCopy[lang];
  return <><Navbar /><main id="main-content" className="product-demos-page"><JsonLd data={{"@context":"https://schema.org","@type":"CollectionPage",name:t.title,description:t.description,url:`${SITE_URL}/${lang}${PRODUCT_DEMOS_PATH}`,inLanguage:lang,publisher:{"@id":`${SITE_URL}/#organization`}}} /><header className="shell resource-heading"><Link className="breadcrumb" href={`/${lang}/solutions/kitchen`}>{ui[lang].kitchen}</Link><h1>{t.heading}</h1><p>{t.intro}</p><p className="fine-print">{t.note}</p><nav className="walkthrough-navigation" aria-label={t.scenarioLink}>{t.scenarios.map(s=><a className="text-link" href={`#${s.id}`} key={s.id}>{s.title}</a>)}</nav></header><ProductWalkthroughs lang={lang} /><section className="shell demos-next"><p>{t.scope}</p><div className="resource-inline-links"><Link className="text-link" href={`/${lang}${FOOD_COST_PATH}`}>{t.calculator}</Link><Link className="text-link" href={`/${lang}/solutions/kitchen`}>{t.kitchen}</Link><Link className="text-link" href={`/${lang}/pricing`}>{t.pricing}</Link></div></section><CallToAction lang={lang} /></main><Footer /></>;
}
