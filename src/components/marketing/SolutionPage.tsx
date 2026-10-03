import Image from "next/image";
import Link from "next/link";
import type { Lang } from "@/lib/seo";
import { SITE_URL } from "@/lib/seo";
import { marketing, type SolutionKey } from "@/lib/marketing/content";
import { ecosystem } from "@/lib/marketing/ecosystem";
import { getSolution } from "@/lib/marketing/solutions";
import { routes, ui } from "@/lib/marketing/ui";
import {
  CallToAction,
  FaqSection,
  HardwareDisplay,
  JsonLd,
  Providers,
} from "./Shared";
import {
  CloudSection,
  CompanionTeaser,
  EquipmentTeaser,
  OrderRouting,
  PrinterDetail,
  PrinterGallery,
  TableServiceSection,
  VoiceSection,
} from "./EcosystemSections";
import Experience from "./Experience";
import ProductDemo from "./ProductDemo";
import Icon from "./Icon";

function HeroVisual({ lang, page }: { lang: Lang; page: SolutionKey }) {
  if (page === "hardware") return <HardwareDisplay lang={lang} />;
  if (page === "equipment") return <PrinterGallery lang={lang} />;
  if (page === "restaurants")
    return (
      <Image
        src="/assets/marketing/cafe-israel.webp"
        alt={ui[lang].restaurants}
        width={1536}
        height={1024}
        priority
        sizes="(max-width:800px) 92vw, 50vw"
      />
    );
  const kinds = {
    pos: "cloud",
    kitchen: "recipe",
    chains: "chains",
    retail: "retail",
    ordering: "ordering",
    payments: "payments",
    companion: "companion",
  } as const;
  return <Experience key={page} lang={lang} kind={kinds[page]} />;
}

function PageStory({ lang, page }: { lang: Lang; page: SolutionKey }) {
  const t = ecosystem[lang];
  switch (page) {
    case "restaurants":
      return (
        <>
          <TableServiceSection lang={lang} />
          <EquipmentTeaser lang={lang} />
        </>
      );
    case "hardware":
      return (
        <>
          <TableServiceSection lang={lang} />
          <section className="shell provider-section">
            <Providers lang={lang} />
          </section>
        </>
      );
    case "equipment":
      return <PrinterDetail lang={lang} />;
    case "companion":
      return <VoiceSection lang={lang} />;
    case "ordering":
      return <OrderRouting lang={lang} />;
    case "payments":
      return (
        <section className="shell section-space">
          <Providers lang={lang} />
        </section>
      );
    case "retail":
      return (
        <>
          <CloudSection lang={lang} />
          <EquipmentTeaser lang={lang} />
        </>
      );
    case "kitchen":
      return <CompanionTeaser lang={lang} />;
    case "chains":
      return (
        <section className="shell section-space chain-story">
          <div>
            <h2>{t.chainTitle}</h2>
            <p>{t.chainText}</p>
            <ul className="check-list">
              {t.supplierItems.map((item) => (
                <li key={item}>
                  <Icon name="check" />
                  {item}
                </li>
              ))}
            </ul>
            <Link className="text-link" href={`/${lang}${routes.companion}`}>
              {t.companionLink}
              <Icon name="arrow" className="directional" />
            </Link>
          </div>
          <Image
            src="/assets/marketing/kitchen-israel.webp"
            alt={ui[lang].chains}
            width={1536}
            height={1024}
            sizes="(max-width:800px) 92vw, 45vw"
          />
        </section>
      );
    case "pos":
      return (
        <>
          <section className="platform-section section-space">
            <div className="shell pos-focus">
              <div className="section-heading split-heading">
                <h2>
                  Foody POS
                  <br />
                  <span dir="ltr">iPad + Android</span>
                </h2>
                <div>
                  <p>{t.cloudText}</p>
                  <p className="fine-print">{t.cloudNote}</p>
                </div>
              </div>
              <div className="tablet-presentation">
                <ProductDemo lang={lang} copy={marketing[lang].demo} compact />
              </div>
            </div>
          </section>
          <EquipmentTeaser lang={lang} />
        </>
      );
  }
}

const related: Record<SolutionKey, SolutionKey[]> = {
  restaurants: ["hardware", "companion", "equipment"],
  chains: ["kitchen", "companion", "equipment"],
  retail: ["pos", "payments", "equipment"],
  pos: ["hardware", "equipment", "ordering"],
  kitchen: ["companion", "chains", "equipment"],
  ordering: ["restaurants", "payments", "pos"],
  payments: ["hardware", "pos", "ordering"],
  hardware: ["restaurants", "pos", "equipment"],
  equipment: ["pos", "hardware", "companion"],
  companion: ["kitchen", "chains", "equipment"],
};

/** Localized acquisition page with a visual and narrative specific to each product. */
export default function SolutionPage({
  lang,
  page,
}: {
  lang: Lang;
  page: SolutionKey;
}) {
  const t = getSolution(lang, page);
  const u = ui[lang];
  const e = ecosystem[lang];
  return (
    <main id="main-content">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Foody",
              item: `${SITE_URL}/${lang}`,
            },
            {
              "@type": "ListItem",
              position: 2,
              name: u[page],
              item: `${SITE_URL}/${lang}${routes[page]}`,
            },
          ],
        }}
      />
      <section className={`solution-hero shell solution-${page}`}>
        <div className="solution-hero-copy">
          <Link href={`/${lang}`} className="breadcrumb">
            Foody / {u[page]}
          </Link>
          {page === "hardware" && (
            <span className="partner-pill">
              <span className="partner-dot" />
              {u.partner}
            </span>
          )}
          {page === "equipment" && (
            <span className="ecosystem-partner">{e.equipmentPartner}</span>
          )}
          <h1>{t.heading}</h1>
          <p>{t.description}</p>
          <Link className="button button-dark" href={`/${lang}/contact`}>
            {u.demo}
            <Icon name="arrow" className="directional" />
          </Link>
        </div>
        <div
          className={`solution-hero-visual${page === "hardware" ? " blue-visual" : ""}`}
        >
          <HeroVisual lang={lang} page={page} />
        </div>
      </section>
      {(page === "hardware" || page === "equipment") && (
        <p className="shell fine-print hardware-note">
          {page === "hardware" ? u.availability : e.equipmentNote}
        </p>
      )}
      <section className="shell section-space solution-features">
        <div
          className={`solution-intro${t.intro === t.description ? " intro-single" : ""}`}
        >
          <h2>{t.title}</h2>
          {t.intro !== t.description && <p>{t.intro}</p>}
        </div>
        <div className="feature-columns">
          {t.features.map((feature, i) => (
            <div key={feature.title}>
              <Icon
                name={
                  page === "equipment"
                    ? "printer"
                    : page === "companion"
                      ? "kitchen"
                      : (["pos", "kitchen", "chart"] as const)[i % 3]
                }
              />
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </section>
      <PageStory lang={lang} page={page} />
      <FaqSection lang={lang} items={t.faq} />
      <section className="shell related-section">
        <h2>{u.related}</h2>
        <div>
          {related[page].map((key) => (
            <Link href={`/${lang}${routes[key]}`} key={key}>
              {u[key]}
              <Icon name="arrow" className="directional" />
            </Link>
          ))}
        </div>
      </section>
      <CallToAction lang={lang} />
    </main>
  );
}
