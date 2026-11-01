"use client";

import { useState } from "react";
import Link from "next/link";
import type { Lang } from "@/lib/seo";
import Experience from "./Experience";

const copy = {
  fr: {
    title: "Trois exemples pour voir la différence.",
    note: "Exemples interactifs simplifiés, avec des données fictives. Les procédures liées décrivent le fonctionnement de Foody ; ces illustrations ne sont pas des captures de l’application.",
    explore: "Essayer l’exemple",
    languages: "Une caisse et un back-office dans la langue de l’équipe",
    languagesText: "Le responsable et les serveurs peuvent travailler en français, hébreu ou anglais. Changez la langue de cet exemple pour voir les repères de navigation.",
    language: "Langue de l’exemple",
    languageProof: "Vérifier les langues des interfaces",
    stock: "Une vente reliée aux ingrédients et au coût du plat",
    stockText: "Dans cet exemple, un plat utilise 200 g d’un ingrédient dont le stock initial est de 10 kg. Simulez des ventes pour suivre la quantité consommée et le stock restant.",
    initial: "Stock initial",
    consumed: "Quantité consommée",
    remaining: "Stock restant",
    orders: "Plats vendus dans l’exemple",
    simulate: "Simuler une vente",
    reset: "Réinitialiser",
    cost: "Exemple de coût matière HT : 11,20 ₪ pour un plat vendu 40 ₪, soit 28 %. Ce taux ne représente pas le bénéfice net.",
    stockCondition: "Dans Foody, les recettes, les correspondances et les étapes de commande doivent être configurées. La clôture ne déduit pas une seconde fois les ventes Foody POS déjà comptabilisées.",
    stockProof: "Vérifier les mouvements et la clôture",
    costProof: "Vérifier le calcul du coût matière",
    companion: "Un même Compagnon avant, pendant et après le service",
    companionText: "Parcourez les trois moments de la journée : préparer le service, suivre les besoins de cuisine, puis contrôler le stock et les écarts à la clôture.",
    companionCondition: "Les prévisions restent des estimations. Les propositions d’achat sont des brouillons à contrôler et à envoyer manuellement. L’accès Siri demande un iPad compatible et une activation.",
    companionProof: "Vérifier le parcours quotidien de la cuisine",
  },
  en: {
    title: "Three examples to see the difference.",
    note: "Simplified interactive examples with sample data. The linked guides describe how Foody works; these illustrations are not application screenshots.",
    explore: "Try the example",
    languages: "POS and back office in your team’s language",
    languagesText: "Managers and waiters can work in French, Hebrew or English. Change this example’s language to see the navigation labels.",
    language: "Example language",
    languageProof: "Check interface languages",
    stock: "A sale connected to ingredients and dish cost",
    stockText: "In this example, one dish uses 200 g of an ingredient with 10 kg in starting stock. Simulate sales to follow consumption and remaining stock.",
    initial: "Starting stock",
    consumed: "Quantity consumed",
    remaining: "Remaining stock",
    orders: "Dishes sold in the example",
    simulate: "Simulate a sale",
    reset: "Reset",
    cost: "Example excluding VAT: ILS 11.20 ingredient cost for a dish sold at ILS 40 is 28%. This rate is not net profit.",
    stockCondition: "In Foody, recipes, mappings and order stages must be configured. Closing does not deduct Foody POS sales a second time when already accounted for.",
    stockProof: "Check stock movements and closing",
    costProof: "Check the food-cost calculation",
    companion: "One Companion before, during and after service",
    companionText: "Explore three moments of the day: prepare for service, follow kitchen needs, then check stock and variances at closing.",
    companionCondition: "Forecasts remain estimates. Purchase suggestions are drafts for review and manual sending. Siri requires a compatible iPad and activation.",
    companionProof: "Check the daily kitchen workflow",
  },
  he: {
    title: "שלוש דוגמאות שממחישות את ההבדל.",
    note: "דוגמאות אינטראקטיביות מפושטות עם נתונים לדוגמה. המדריכים המקושרים מתארים את פעולת Foody; האיורים אינם צילומי מסך של היישום.",
    explore: "לנסות את הדוגמה",
    languages: "קופה ומשרד אחורי בשפה של הצוות",
    languagesText: "המנהלים והמלצרים יכולים לעבוד בעברית, בצרפתית או באנגלית. החליפו את שפת הדוגמה כדי לראות את תוויות הניווט.",
    language: "שפת הדוגמה",
    languageProof: "לבדוק את שפות הממשקים",
    stock: "מכירה שמחוברת לחומרי הגלם ולעלות המנה",
    stockText: "בדוגמה זו, מנה אחת צורכת 200 גרם מחומר גלם שמלאי הפתיחה שלו הוא 10 ק״ג. דמו מכירות כדי לעקוב אחר הצריכה והמלאי שנותר.",
    initial: "מלאי פתיחה",
    consumed: "כמות שנצרכה",
    remaining: "מלאי שנותר",
    orders: "מנות שנמכרו בדוגמה",
    simulate: "לדמות מכירה",
    reset: "איפוס",
    cost: "דוגמה ללא מע״מ: עלות חומרי גלם של 11.20 ₪ למנה הנמכרת ב־40 ₪ היא 28%. השיעור אינו הרווח הנקי.",
    stockCondition: "ב־Foody יש להגדיר מתכונים, התאמות ושלבי הזמנה. הסגירה אינה מפחיתה שוב מכירות של Foody POS שכבר נרשמו.",
    stockProof: "לבדוק תנועות מלאי וסגירה",
    costProof: "לבדוק את חישוב עלות חומרי הגלם",
    companion: "Companion אחד לפני השירות, במהלכו ואחריו",
    companionText: "עברו בין שלושת חלקי היום: הכנה לשירות, מעקב אחר צורכי המטבח ובדיקת מלאי והפרשים בסגירה.",
    companionCondition: "התחזיות נשארות הערכות. הצעות הרכש הן טיוטות לבדיקה ושליחה ידנית. השימוש ב־Siri דורש iPad תואם והפעלה.",
    companionProof: "לבדוק את תהליך העבודה היומי במטבח",
  },
} satisfies Record<Lang, Record<string, string>>;

const navigation = {
  fr: { admin: "Back-office", pos: "Caisse", orders: "Commandes", stock: "Stock", tables: "Tables", kitchen: "Cuisine" },
  en: { admin: "Back office", pos: "POS", orders: "Orders", stock: "Stock", tables: "Tables", kitchen: "Kitchen" },
  he: { admin: "משרד אחורי", pos: "קופה", orders: "הזמנות", stock: "מלאי", tables: "שולחנות", kitchen: "מטבח" },
};

/** Illustrates three documented capabilities with synthetic, browser-local examples. */
export default function ComparisonDemonstrations({ lang }: { lang: Lang }) {
  const t = copy[lang];
  const [exampleLanguage, setExampleLanguage] = useState<Lang>(lang);
  const [sales, setSales] = useState(0);
  const labels = navigation[exampleLanguage];
  const kg = (grams: number) => `${new Intl.NumberFormat(`${lang}-IL`, { maximumFractionDigits: 1 }).format(grams / 1000)} kg`;
  return <section className="shell comparison-examples" aria-labelledby="comparison-examples-title" data-comparison-examples>
    <h2 id="comparison-examples-title">{t.title}</h2>
    <p className="fine-print" data-demo-disclosure>{t.note}</p>
    <details className="comparison-example" id="example-languages">
      <summary><span>{t.languages}</span><span>{t.explore}</span></summary>
      <div className="comparison-example-body">
        <div><p>{t.languagesText}</p><Link className="text-link" href={`/${lang}/solutions/pos`}>{t.languageProof}</Link></div>
        <div className="comparison-language-example">
          <label htmlFor="example-language">{t.language}</label>
          <select id="example-language" value={exampleLanguage} onChange={event => setExampleLanguage(event.target.value as Lang)}>
            <option value="fr" lang="fr">Français</option><option value="he" lang="he">עברית</option><option value="en" lang="en">English</option>
          </select>
          <div className="comparison-language-panels" lang={exampleLanguage} dir={exampleLanguage === "he" ? "rtl" : "ltr"} aria-live="polite">
            <div><strong>{labels.admin}</strong><span>{labels.orders}</span><span>{labels.stock}</span></div>
            <div><strong>{labels.pos}</strong><span>{labels.tables}</span><span>{labels.kitchen}</span></div>
          </div>
        </div>
      </div>
    </details>
    <details className="comparison-example" id="example-stock">
      <summary><span>{t.stock}</span><span>{t.explore}</span></summary>
      <div className="comparison-example-body">
        <div><p>{t.stockText}</p><p className="fine-print">{t.stockCondition}</p><Link className="text-link" href={`/${lang}/help/kitchen/daily-operations`}>{t.stockProof}</Link><Link className="text-link" href={`/${lang}/help/kitchen/food-cost`}>{t.costProof}</Link></div>
        <div className="comparison-stock-example">
          <p>{t.orders} : <strong data-example-sales>{sales}</strong></p>
          <dl aria-live="polite"><div><dt>{t.initial}</dt><dd dir="ltr">{kg(10000)}</dd></div><div><dt>{t.consumed}</dt><dd dir="ltr">{kg(sales * 200)}</dd></div><div><dt>{t.remaining}</dt><dd dir="ltr" data-example-remaining>{kg(10000 - sales * 200)}</dd></div></dl>
          <div className="comparison-example-actions"><button type="button" onClick={() => setSales(value => value + 1)} disabled={sales >= 50}>{t.simulate}</button><button type="button" onClick={() => setSales(0)} disabled={sales === 0}>{t.reset}</button></div>
          <p className="fine-print">{t.cost}</p>
        </div>
      </div>
    </details>
    <details className="comparison-example" id="example-companion">
      <summary><span>{t.companion}</span><span>{t.explore}</span></summary>
      <div className="comparison-example-body">
        <div><p>{t.companionText}</p><p className="fine-print">{t.companionCondition}</p><Link className="text-link" href={`/${lang}/help/kitchen/daily-operations`}>{t.companionProof}</Link></div>
        <Experience kind="companion" lang={lang} />
      </div>
    </details>
  </section>;
}
