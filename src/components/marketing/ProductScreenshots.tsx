import Image from "next/image";
import Link from "next/link";
import type { Lang } from "@/lib/seo";

const copy = {
  he: { title: "כך זה נראה ב־Foody Admin", note: "צילומי ממשק מתוך תרחישי בדיקה של Foody, עם נתוני הדגמה בלבד, מהגרסה של 4 באוקטובר 2026. התיעוד המקושר מסביר את הפעולות וההגדרות.", cost: "עלות חומרי הגלם ביחס למחיר המכירה", day: "הכנות, סרוויס וסיכום היום ב־Foody Companion", enlarge: "פתיחת הצילום בגודל מלא", procedure: "למדריך התפעול" },
  fr: { title: "Dans l’interface Foody Admin", note: "Captures de l’interface issues des tests Foody, avec des données fictives, dans la version du 4 octobre 2026. Les procédures liées détaillent les actions et réglages.", cost: "Le coût des ingrédients rapporté au prix de vente", day: "Préparations, service et bilan avec Foody Compagnon", enlarge: "Ouvrir la capture en grand", procedure: "Lire la procédure" },
  en: { title: "Inside Foody Admin", note: "Interface captures from Foody test scenarios with synthetic data, from the 4 October 2026 version. The French interface is shown here; linked procedures explain the actions and settings in English.", cost: "Ingredient cost relative to the selling price", day: "Preparation, service and day review with Foody Companion", enlarge: "Open the full-size capture", procedure: "Read the procedure" },
};

/** Actual product captures with synthetic data and explicit capture-language provenance. */
export default function ProductScreenshots({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const images = [
    { file: lang === "he" ? "food-cost-he-dark.png" : "food-cost-fr.png", title: t.cost, guide: "food-cost", width: lang === "he" ? 1440 : 1920, height: lang === "he" ? 1000 : 1080 },
    { file: lang === "he" ? "kitchen-he-dark.png" : "kitchen-fr.png", title: t.day, guide: "daily-operations", width: 1440, height: 1000 },
  ];
  return <section className="shell section-space product-captures" id="product-captures">
    <div className="section-heading"><h2>{t.title}</h2><p>{t.note}</p></div>
    <div className="product-capture-grid">{images.map(item => <figure key={item.file}>
      <a href={`/assets/product/${item.file}`} target="_blank" rel="noopener noreferrer" aria-label={`${t.enlarge}: ${item.title}`}><Image src={`/assets/product/${item.file}`} alt={item.title} width={item.width} height={item.height} sizes="(max-width: 800px) 92vw, 45vw" /></a>
      <figcaption><h3>{item.title}</h3><Link className="text-link" href={`/${lang}/help/kitchen/${item.guide}`}>{t.procedure}</Link></figcaption>
    </figure>)}</div>
  </section>;
}
