import Image from "next/image";
import Link from "next/link";
import type { Lang } from "@/lib/seo";
import { marketing, type Faq } from "@/lib/marketing/content";
import { routes, ui } from "@/lib/marketing/ui";
import Icon from "./Icon";
import ProductMentions from "./ProductMentions";

/** Renders escaped structured data without permitting script injection. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}

/** Shared acquisition call to action. */
export function CallToAction({
  lang,
  showPricing = false,
}: {
  lang: Lang;
  showPricing?: boolean;
}) {
  const t = ui[lang];
  return (
    <section className="closing-cta">
      <div className="shell closing-inner">
        <div>
          <h2>{t.ctaTitle}</h2>
          <p>{t.ctaText}</p>
        </div>
        <div className="closing-actions">
          <Link className="button button-dark" href={`/${lang}/contact`}>
            {t.demo}
            <Icon name="arrow" className="directional" />
          </Link>
          {showPricing && (
            <Link className="text-link" href={`/${lang}/pricing`}>
              {marketing[lang].pricing.homeLink}
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}

/** Native disclosure FAQ remains interactive without JavaScript. */
export function FaqSection({
  lang,
  items,
  currentHref,
}: {
  lang: Lang;
  items: Faq[];
  currentHref?: string;
}) {
  return (
    <section className="shell section-space faq-section">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          inLanguage: lang,
          mainEntity: items.map(({ q, a }) => ({
            "@type": "Question",
            name: q,
            acceptedAnswer: { "@type": "Answer", text: a },
          })),
        }}
      />
      <h2>{ui[lang].faq}</h2>
      <div>
        {items.map(({ q, a }) => (
          <details className="faq-item" key={q}>
            <summary>
              {q}
              <span aria-hidden="true" className="faq-plus" />
            </summary>
            <p>
              <ProductMentions lang={lang} currentHref={currentHref}>
                {a}
              </ProductMentions>
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}

/** Authentic product images with source specification links. */
export function HardwareDisplay({
  lang,
  compact = false,
}: {
  lang: Lang;
  compact?: boolean;
}) {
  return (
    <div className={`hardware-display${compact ? " compact" : ""}`} dir="ltr">
      <figure className="portable-device">
        <Image
          src="/assets/marketing/victa-portable-v2.webp"
          alt="Verifone Victa Portable"
          width={1000}
          height={947}
          sizes="(max-width: 700px) 55vw, 440px"
        />
        <figcaption>
          <span>Victa Portable</span>
          {!compact && (
            <a
              href="https://www.verifone.com/hardware-product/verifone-victa-portable"
              target="_blank"
              rel="noopener noreferrer"
            >
              {ui[lang].source}
            </a>
          )}
        </figcaption>
      </figure>
      <figure className="mini-device">
        <Image
          src="/assets/marketing/victa-mini-v2.webp"
          alt="Verifone Victa Mini"
          width={1000}
          height={1000}
          sizes="(max-width: 700px) 40vw, 300px"
        />
        <figcaption>
          <span>Victa Mini</span>
          {!compact && (
            <a
              href="https://www.verifone.com/hardware-product/verifone-victa-mini"
              target="_blank"
              rel="noopener noreferrer"
            >
              {ui[lang].source}
            </a>
          )}
        </figcaption>
      </figure>
    </div>
  );
}

/** Integrations are qualified by market and provider agreement. */
export function Providers({ lang }: { lang: Lang }) {
  const t = marketing[lang].home;
  return (
    <div className="providers">
      <div className="provider-grid">
        {["Verifone", "PayPlus", "SUMIT", "Stancer"].map((name, i) => (
          <div key={name}>
            <span
              className={`provider-name provider-${name.toLowerCase()}`}
              dir="ltr"
            >
              {name}
              {name === "PayPlus" && <span aria-hidden="true">+</span>}
            </span>
            <span>{t.providers[i]}</span>
          </div>
        ))}
      </div>
      <p className="fine-print">{t.providerNote}</p>
    </div>
  );
}

/** Discovery cards reused on the homepage and restaurant overview. */
export function Sectors({ lang }: { lang: Lang }) {
  const t = marketing[lang].home;
  return (
    <section className="shell section-space" id="solutions">
      <div className="section-heading split-heading">
        <h2>{t.intro}</h2>
        <p>{t.introText}</p>
      </div>
      <div className="sector-grid">
        {(["restaurants", "chains", "retail"] as const).map((key, i) => (
          <Link
            className="sector-card"
            key={key}
            href={`/${lang}${routes[key]}`}
          >
            <div className="sector-photo">
              <Image
                src={`/assets/marketing/${["cafe", "kitchen", "retail"][i]}-israel.webp`}
                alt={ui[lang][key]}
                width={1536}
                height={1024}
                sizes="(max-width: 700px) 92vw, 31vw"
              />
            </div>
            <div className="sector-card-heading">
              <h3>{ui[lang][key]}</h3>
              <span className="circle-arrow">
                <Icon name="arrow" className="directional" />
              </span>
            </div>
            <p>{t.sectorText[i]}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
