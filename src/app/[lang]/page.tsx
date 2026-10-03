import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  CompanionTeaser,
  EquipmentTeaser,
} from "@/components/marketing/EcosystemSections";
import { ecosystem } from "@/lib/marketing/ecosystem";
import Experience from "@/components/marketing/Experience";
import Icon from "@/components/marketing/Icon";
import {
  CallToAction,
  FaqSection,
  HardwareDisplay,
  JsonLd,
  Providers,
  Sectors,
} from "@/components/marketing/Shared";
import { marketing } from "@/lib/marketing/content";
import { routes, ui } from "@/lib/marketing/ui";
import { getMarketingMetadata, resolveLang, SITE_URL } from "@/lib/seo";

/** Localized homepage metadata for the Israeli acquisition site. */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  return getMarketingMetadata((await params).lang, "home");
}

/** Product-led homepage connecting business discovery, hardware and operations. */
export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = resolveLang((await params).lang);
  const { home: t } = marketing[lang];
  const u = ui[lang];
  const e = ecosystem[lang];
  return (
    <>
      <Navbar />
      <main id="main-content">
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Organization",
            "@id": `${SITE_URL}/#organization`,
            name: "Foody",
            url: SITE_URL,
            logo: `${SITE_URL}/assets/logo.svg`,
            areaServed: { "@type": "Country", name: "Israel" },
            contactPoint: {
              "@type": "ContactPoint",
              contactType: "sales",
              email: "mickael@foody-pos.co.il",
              availableLanguage: ["Hebrew", "English", "French"],
            },
          }}
        />
        <section className="shell home-hero">
          <div className="hero-heading">
            <h1>{t.title}</h1>
            <div>
              <p>{t.description}</p>
              <div className="button-row">
                <Link className="button button-dark" href={`/${lang}/contact`}>
                  {u.demo}
                </Link>
                <a className="text-link" href="#solutions">
                  {t.secondary}
                  <Icon name="arrow" className="directional" />
                </a>
              </div>
            </div>
          </div>
          <div className="hero-media">
            <div className="hero-photo">
              <Image
                src="/assets/marketing/cafe-israel.webp"
                alt={t.photoAlt}
                fill
                priority
                sizes="(max-width: 700px) 100vw, 65vw"
              />
              <span>{t.photoLabel}</span>
            </div>
            <Link className="hero-hardware" href={`/${lang}${routes.hardware}`}>
              <div className="hero-hardware-heading">
                <span>{u.partner}</span>
                <strong dir="ltr">
                  Verifone<span className="brand-dot">.</span>
                </strong>
              </div>
              <HardwareDisplay lang={lang} compact />
              <div className="hero-hardware-link">
                <span>{u.hardware}</span>
                <span className="circle-arrow">
                  <Icon name="arrow" className="directional" />
                </span>
              </div>
            </Link>
          </div>
          <div className="hero-shortcuts">
            {(["pos", "ordering", "kitchen"] as const).map((key, i) => (
              <Link href={`/${lang}${routes[key]}`} key={key}>
                <Icon name={(["pos", "globe", "chart"] as const)[i]} />
                <span>{u[key]}</span>
                <Icon name="arrow" className="directional" />
              </Link>
            ))}
          </div>
        </section>
        <Sectors lang={lang} />
        <section className="platform-section section-space" id="cloud">
          <div className="shell">
            <div className="cloud-section">
              <div>
                <h2>{e.cloudTitle}</h2>
                <p>{e.cloudText}</p>
                <p className="fine-print">{e.cloudNote}</p>
              </div>
              <Experience kind="cloud" lang={lang} />
            </div>
            <div className="feature-columns">
              {(["pos", "ordering", "kitchen"] as const).map((key, i) => (
                <div key={key}>
                  <Icon name={(["pos", "globe", "chart"] as const)[i]} />
                  <h3>{t.featureTitles[i]}</h3>
                  <p>{t.featureTexts[i]}</p>
                  <Link className="text-link" href={`/${lang}${routes[key]}`}>
                    {u[key]}
                    <Icon name="arrow" className="directional" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="verifone-section" id="verifone">
          <div className="shell verifone-inner">
            <div className="verifone-copy">
              <span className="partner-pill">
                <span className="partner-dot" />
                {u.partner}
              </span>
              <h2>{t.verifoneTitle}</h2>
              <p>{t.verifoneText}</p>
              <p>{e.serviceSummary}</p>
              <ol
                className="verifone-service-flow"
                role="list"
                aria-label="Victa Portable"
              >
                {e.serviceSummarySteps.map((label, i) => (
                  <li key={label}>
                    <span>
                      <Icon
                        name={(["restaurant", "card", "printer"] as const)[i]}
                      />
                      {label}
                    </span>
                    {i < e.serviceSummarySteps.length - 1 && (
                      <Icon name="arrow" className="directional" />
                    )}
                  </li>
                ))}
              </ol>
              <Link
                className="button button-light"
                href={`/${lang}${routes.hardware}`}
              >
                {t.verifoneCta}
                <Icon name="arrow" className="directional" />
              </Link>
            </div>
            <div>
              <HardwareDisplay lang={lang} />
              <p className="fine-print">{u.availability}</p>
            </div>
          </div>
        </section>
        <CompanionTeaser lang={lang} />
        <EquipmentTeaser lang={lang} />
        <section className="payments-section section-space">
          <div className="shell">
            <div className="split-heading">
              <h2>{t.paymentsTitle}</h2>
              <div>
                <p>{t.paymentsText}</p>
                <Link className="button button-dark" href={`/${lang}/contact`}>
                  {t.paymentsCta}
                </Link>
              </div>
            </div>
            <Providers lang={lang} />
          </div>
        </section>
        <FaqSection lang={lang} items={t.faq} />
        <CallToAction lang={lang} />
      </main>
      <Footer />
    </>
  );
}
