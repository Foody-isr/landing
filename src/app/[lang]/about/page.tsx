import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { JsonLd } from "@/components/marketing/Shared";
import { companyCopy } from "@/lib/marketing/company";
import { ABOUT_PATH, FOOD_COST_PATH, PRODUCT_DEMOS_PATH, publicContact } from "@/lib/marketing/resources";
import { getContentMetadata, resolveLang, SITE_URL, SUPPORTED_LANGS } from "@/lib/seo";

/** Localized publisher identity and official public contact details. */
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang=resolveLang((await params).lang),t=companyCopy[lang];
  return getContentMetadata(lang,ABOUT_PATH,t.title,t.description,SUPPORTED_LANGS);
}

/** Describes the actual software and on-site service without publishing a private address or invented company credentials. */
export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const lang=resolveLang((await params).lang),t=companyCopy[lang];
  return <><Navbar /><main id="main-content" className="company-page">
    <JsonLd data={{ "@context":"https://schema.org", "@type":"AboutPage",url:`${SITE_URL}/${lang}${ABOUT_PATH}`,inLanguage:lang,name:t.title,mainEntity:{"@type":"Organization","@id":`${SITE_URL}/#organization`,name:"Foody POS",alternateName:"Foody",url:SITE_URL,email:publicContact.email,telephone:publicContact.phone,areaServed:{"@type":"Country",name:"Israel"},contactPoint:{"@type":"ContactPoint",contactType:"sales",telephone:publicContact.phone,email:publicContact.email,areaServed:"IL",hoursAvailable:[{"@type":"OpeningHoursSpecification",dayOfWeek:["Sunday","Monday","Tuesday","Wednesday","Thursday"],opens:"08:00",closes:"20:00"},{"@type":"OpeningHoursSpecification",dayOfWeek:"Friday",opens:"08:00",closes:"15:00"}]}}}} />
    <header className="shell resource-heading"><h1>{t.heading}</h1><p>{t.intro}</p></header>
    <section className="shell company-products"><h2>{t.productsTitle}</h2><div className="feature-columns">{t.products.map(product=><div key={product.href}><h3><Link href={`/${lang}${product.href}`}>{product.title}</Link></h3><p>{product.text}</p></div>)}</div><p className="fine-print">{t.scope}</p><Link className="text-link" href={`/${lang}/pricing`}>{t.pricingLink}</Link></section>
    <section className="shell company-service"><div><h2>{t.onsiteTitle}</h2><p>{t.onsite}</p><p>{t.area}</p></div><div className="company-contact" id="official-contact"><h2>{t.contactTitle}</h2><dl><div><dt>{t.phone}</dt><dd><a href={`tel:${publicContact.phone}`} dir="ltr">{publicContact.displayPhone}</a></dd></div><div><dt>{t.email}</dt><dd><a href={`mailto:${publicContact.email}`} dir="ltr">{publicContact.email}</a></dd></div></dl><h3>{t.hoursTitle}</h3><p>{t.hours}</p><p className="fine-print">{t.hoursNote}</p><Link className="button button-primary" href={`/${lang}/contact`}>{t.contactLink}</Link></div></section>
    <section className="shell company-proof"><h2>{t.proofTitle}</h2><p>{t.proof}</p><div className="resource-inline-links"><Link className="text-link" href={`/${lang}${PRODUCT_DEMOS_PATH}`}>{t.demos}</Link><Link className="text-link" href={`/${lang}${FOOD_COST_PATH}`}>{t.calculator}</Link><Link className="text-link" href={`/${lang}/help`}>{t.help}</Link></div></section>
  </main><Footer /></>;
}
