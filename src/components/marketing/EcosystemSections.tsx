import Image from "next/image";
import Link from "next/link";
import type { Lang } from "@/lib/seo";
import { ecosystem } from "@/lib/marketing/ecosystem";
import { routes, ui } from "@/lib/marketing/ui";
import Experience from "./Experience";
import Icon from "./Icon";
import ProductMentions from "./ProductMentions";

const EPSON_URL =
  "https://www.epson.eu/en_EU/products/printers/pos-printers/pos-printers/pc-pos-printers/epson-tm-u220iib-(101b0):-usb,-ps,-ne-sensor,-ecw/p/52044";
const STAR_URL =
  "https://starmicronics.com/product/mc-print3-pos-receipt-printer-retail-kitchen-online-ordering/";

/** Manufacturer product gallery; model compatibility is explained alongside it. */
export function PrinterGallery({ lang }: { lang: Lang }) {
  return (
    <div className="printer-gallery">
      {(["epson", "star"] as const).map((brand) => (
        <figure key={brand}>
          <Image
            src={`/assets/marketing/${brand === "epson" ? "epson-tm-u220ii" : "star-mc-print3"}.webp`}
            alt={
              brand === "epson" ? "Epson TM-U220II" : "Star Micronics mC-Print3"
            }
            width={800}
            height={brand === "epson" ? 1058 : 800}
            sizes="(max-width: 700px) 45vw, 300px"
          />
          <figcaption>
            <strong dir="ltr">
              {brand === "epson" ? "Epson TM-U220II" : "Star mC-Print3"}
            </strong>
            <a
              href={brand === "epson" ? EPSON_URL : STAR_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {ui[lang].source}
            </a>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

/** Shows the complete Foody table-service journey on a single portable terminal. */
export function TableServiceSection({ lang }: { lang: Lang }) {
  const t = ecosystem[lang];
  return (
    <section className="service-section section-space">
      <div className="shell">
        <div className="section-heading split-heading">
          <h2>{t.serviceTitle}</h2>
          <div>
            <p>{t.serviceText}</p>
            <p className="fine-print">{t.serviceNote}</p>
          </div>
        </div>
        <Experience kind="service" lang={lang} />
      </div>
    </section>
  );
}

/** A voice-led editorial section with examples, not a browser microphone control. */
export function VoiceSection({ lang }: { lang: Lang }) {
  const t = ecosystem[lang];
  return (
    <section className="voice-section section-space">
      <div className="shell voice-layout">
        <div>
          <h2>{t.voiceTitle}</h2>
          <p>{t.voiceText}</p>
          <ul className="voice-examples">
            {t.voiceExamples.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="fine-print">{t.voiceNote}</p>
        </div>
        <figure className="voice-card">
          <span className="voice-glyph" aria-hidden="true">
            <Icon name="mic" />
          </span>
          <blockquote>{t.voicePrompt}</blockquote>
          <div className="voice-wave" aria-hidden="true">
            {[14, 28, 42, 22, 55, 36, 64, 42, 24, 48, 31, 18].map((h, i) => (
              <i key={i} style={{ height: h }} />
            ))}
          </div>
          <p>{t.voiceAnswer}</p>
          <figcaption>
            {t.voiceLabel} · {t.sample}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/** Introduces the dedicated kitchen companion without repeating the general POS demo. */
export function CompanionTeaser({
  lang,
  currentHref,
}: {
  lang: Lang;
  currentHref?: string;
}) {
  const t = ecosystem[lang];
  return (
    <section className="shell section-space companion-teaser">
      <div className="companion-photo">
        <Image
          src="/assets/marketing/kitchen-israel.webp"
          alt={ui[lang].companion}
          width={1536}
          height={1024}
          sizes="(max-width:800px) 92vw, 45vw"
        />
        <div className="companion-quote">
          <Icon name="mic" />
          <span>{t.voicePrompt}</span>
        </div>
      </div>
      <div>
        <h2>{t.companionTitle}</h2>
        <p>
          <ProductMentions lang={lang} currentHref={currentHref}>
            {t.companionText}
          </ProductMentions>
        </p>
        <ul className="check-list">
          {t.phases.map((p) => (
            <li key={p}>
              <Icon name="check" />
              {p}
            </li>
          ))}
        </ul>
        <p>
          <ProductMentions lang={lang} currentHref={currentHref}>
            {t.companionIncluded}
          </ProductMentions>
        </p>
        <Link className="text-link" href={`/${lang}${routes.companion}`}>
          {t.companionLink}
          <Icon name="arrow" className="directional" />
        </Link>
      </div>
    </section>
  );
}

/** Shared hardware discovery section for iPad/Android setups and receipt printing. */
export function EquipmentTeaser({ lang }: { lang: Lang }) {
  const t = ecosystem[lang];
  return (
    <section className="equipment-teaser section-space">
      <div className="shell equipment-layout">
        <div>
          <span className="ecosystem-partner">{t.equipmentPartner}</span>
          <h2>{t.equipmentTitle}</h2>
          <p>{t.equipmentText}</p>
          <Link className="text-link" href={`/${lang}${routes.equipment}`}>
            {t.equipmentLink}
            <Icon name="arrow" className="directional" />
          </Link>
        </div>
        <PrinterGallery lang={lang} />
      </div>
    </section>
  );
}

/** Kitchen-printer detail grounded in manufacturer specifications and Foody routing. */
export function PrinterDetail({ lang }: { lang: Lang }) {
  const t = ecosystem[lang];
  return (
    <section className="shell section-space printer-detail">
      <div>
        <h2>{t.epsonTitle}</h2>
        <p>{t.epsonText}</p>
        <ul className="check-list">
          {t.epsonPoints.map((p) => (
            <li key={p}>
              <Icon name="check" />
              {p}
            </li>
          ))}
        </ul>
        <Link
          className="text-link"
          href={`/${lang}/help/printers/epson-tm-u220iib`}
        >
          {t.printerGuide}
          <Icon name="arrow" className="directional" />
        </Link>
        <p className="fine-print">{t.epsonNote}</p>
      </div>
      <figure className="kitchen-ticket-scene">
        <div className="ticket-rail" />
        <div className="kitchen-ticket">
          <span className="ticket-pass">
            {lang === "he" ? "מטבח" : lang === "fr" ? "Cuisine" : "Kitchen"}
          </span>
          <strong>{t.table}</strong>
          <div>{t.dishes[0]}</div>
          <div>2 × {lang === "he" ? "פוקצ׳ה" : "Focaccia"}</div>
          <span className="ticket-divider" />
          <p>Foody × Epson</p>
          <Icon name="printer" />
        </div>
        <figcaption>{t.sample}</figcaption>
      </figure>
    </section>
  );
}

/** Explains the order-to-kitchen journey with its own process illustration. */
export function OrderRouting({ lang }: { lang: Lang }) {
  const t = ecosystem[lang];
  return (
    <section className="order-routing section-space">
      <div className="shell">
        <div className="section-heading split-heading">
          <h2>{t.routeTitle}</h2>
          <p>{t.routeText}</p>
        </div>
        <ol className="route-steps">
          {t.routeSteps.map((label, i) => (
            <li key={label}>
              <span>{i + 1}</span>
              <Icon name={(["globe", "card", "kitchen"] as const)[i]} />
              <h3>{label}</h3>
            </li>
          ))}
        </ol>
        <aside className="route-printing-option" data-ordering-printing>
          <Icon name="printer" />
          <div>
            <p className="ecosystem-partner">{t.printingLabel}</p>
            <h3>{t.printingTitle}</h3>
            <p>{t.printingText}</p>
            <p className="fine-print">{t.printingNote}</p>
            <Link className="text-link" href={`/${lang}/contact`}>
              {t.printingLink}
              <Icon name="arrow" className="directional" />
            </Link>
          </div>
        </aside>
      </div>
    </section>
  );
}

/** Shows cloud benefits without promising unsupported offline payment behaviour. */
export function CloudSection({ lang }: { lang: Lang }) {
  const t = ecosystem[lang];
  return (
    <section className="shell section-space cloud-section">
      <div>
        <h2>{t.cloudTitle}</h2>
        <p>{t.cloudText}</p>
        <p className="fine-print">{t.cloudNote}</p>
      </div>
      <Experience kind="cloud" lang={lang} />
    </section>
  );
}
