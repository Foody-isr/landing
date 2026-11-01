import type { Lang } from "@/lib/seo";
import { pricingRates } from "./pricing";

export const TABIT_COMPARISON_PATH = "/compare/tabit";
export const COMPARISON_REVIEWED_AT = "2026-10-30";
export const COMMISSION_EXAMPLE = { sales: 30000, rate: 3 } as const;
const exampleCommission = COMMISSION_EXAMPLE.sales * COMMISSION_EXAMPLE.rate / 100;
export const comparisonSources = {
  integrations: "https://www.tabit.cloud/integrations/",
} as const;

type ComparisonCopy = {
  title: string;
  description: string;
  heading: string;
  reviewed: string;
  caption: string;
  criterion: string;
  source: string;
  presentLabel: string;
  absentLabel: string;
  attributionNote: string;
  foodySource: string;
  moduleNote: string;
  reasonsTitle: string;
  reasons: { title: string; text: string; href: string; link: string }[];
  commission: { title: string; text: string; note: string };
  rows: { id: string; label: string; foody: string; proof: string }[];
  linksTitle: string;
  restaurantLink: string;
  pricingLink: string;
  orderGuide: string;
  tableGuide: string;
  compareLink: string;
};

/** Native-feature matrix using Foody evidence and the owner's attributed competitor assessment. */
export const comparisonCopy: Record<Lang, ComparisonCopy> = {
  fr: {
    title: "Foody ou Tabit : comparer sa caisse restaurant en Israël",
    description: "Administration et caisse multilingues, stocks liés aux recettes, prévisions de ventes, cuisine avant et pendant le service, fournisseurs et écarts : comparez le périmètre intégré de Foody avec Tabit.",
    heading: "Foody ou Tabit ?\nPourquoi choisir Foody.",
    reviewed: "Évaluation Foody du",
    caption: "Fonctionnalités natives",
    criterion: "Votre besoin",
    presentLabel: "Présent",
    absentLabel: "Absent",
    attributionNote: "Les absences indiquées pour Tabit reprennent l’évaluation communiquée par Foody et n’ont pas été confirmées indépendamment. Elles concernent le périmètre natif, sans logiciel tiers. Des intégrations peuvent apporter des fonctions complémentaires selon le pays, la version et le contrat.",
    foodySource: "Détails",
    moduleNote: `Les fonctions de cuisine relèvent de Foody Cuisine : ${pricingRates.kitchen} ₪ HT/mois seul ou ${pricingRates.complete} ₪ HT/mois dans Foody Restaurant & Cuisine, par établissement. Foody Restaurant coûte ${pricingRates.restaurant} ₪ HT/mois et Commandes seul ${pricingRates.ordering} ₪ HT/mois. Matériel, installation, formation et frais de paiement restent distincts.`,
    source: "Consulter les intégrations déclarées par Tabit",
    reasonsTitle: "Choisissez Foody pour ces besoins précis.",
    reasons: [
      { title: "Une équipe, plusieurs langues.", text: "La caisse et le back-office Foody proposent une interface en français, hébreu et anglais. La langue des outils de travail compte aussi pour le responsable, les serveurs et la cuisine, au-delà de la traduction du menu client.", href: "/solutions/pos", link: "Vérifier les interfaces disponibles" },
      { title: "De la vente au stock des ingrédients.", text: "Les recettes paramétrées relient les commandes aux consommations de matières premières. Produire un lot débite les ingrédients et crédite la préparation ; les comptages permettent ensuite de comparer le stock attendu au stock réel. Les recettes et rapprochements doivent être renseignés pour obtenir des résultats utiles.", href: "/help/kitchen/preparations", link: "Voir les préparations et leurs mouvements de stock" },
      { title: "Anticiper et piloter chaque service.", text: "Foody Compagnon réunit prévisions, préparations à lancer, besoins de stock et livraisons avant le service, suivi pendant le service et bilan des écarts à la clôture. Les propositions d’approvisionnement restent des brouillons à contrôler puis à envoyer manuellement.", href: "/help/kitchen/daily-operations", link: "Voir le parcours quotidien de la cuisine" },
    ],
    commission: { title: "Ce que représenterait une commission de 3 %.", text: `À titre illustratif, ${COMMISSION_EXAMPLE.rate} % sur ${COMMISSION_EXAMPLE.sales.toLocaleString("fr-IL")} ₪ de commandes en ligne représentent ${exampleCommission.toLocaleString("fr-IL")} ₪ de commission par mois. Avec 0 % de commission Foody, cette commission proportionnelle Foody est de 0 ₪.`, note: "Hypothèse de calcul illustrative, sans attribution à Tabit ni à un fournisseur. Ce n’est pas une économie totale garantie : abonnements, matériel, paiement carte et autres frais doivent être comparés séparément, sur la même assiette de ventes." },
    rows: [
      { id: "admin-languages", label: "Back-office en français", foody: "Gérez votre activité en français, hébreu ou anglais.", proof: "/solutions/pos" },
      { id: "pos-languages", label: "Caisse en français", foody: "Vos équipes utilisent la caisse en français, hébreu ou anglais.", proof: "/solutions/pos" },
      { id: "ingredient-depletion", label: "Déduction automatique des ingrédients", foody: "Les ingrédients sont déduits selon les recettes et les étapes de commande configurées.", proof: "/help/kitchen/daily-operations" },
      { id: "recipe-cost", label: "Coût matière par recette", foody: "Consultez le coût des ingrédients de chaque plat et comparez-le à son prix de vente.", proof: "/help/kitchen/food-cost" },
      { id: "sales-forecast", label: "Prévisions de ventes", foody: "Anticipez les quantités à préparer depuis l’historique des ventes. À ajuster par l’équipe.", proof: "/help/kitchen/daily-operations" },
      { id: "before-service", label: "Compagnon : avant le service", foody: "Retrouvez les préparations à lancer et les livraisons à vérifier.", proof: "/help/kitchen/daily-operations" },
      { id: "during-service", label: "Compagnon : pendant le service", foody: "Suivez les préparations disponibles et les ingrédients à réapprovisionner.", proof: "/help/kitchen/daily-operations" },
      { id: "day-close", label: "Clôture et écarts de stock", foody: "Comparez le stock prévu au stock compté et repérez les écarts.", proof: "/help/kitchen/daily-operations" },
      { id: "supplier-discrepancies", label: "Réceptions et écarts fournisseurs", foody: "Contrôlez les quantités livrées, les unités et les prix d’achat.", proof: "/help/kitchen/suppliers-and-purchases" },
    ],
    linksTitle: "Vérifier Foody en détail",
    restaurantLink: "Découvrir Foody Restaurant",
    pricingLink: "Voir les offres et tous les frais",
    orderGuide: "Comment prendre une commande",
    tableGuide: "Comment gérer les tables",
    compareLink: "Comparer Foody et Tabit",
  },
  en: {
    title: "Foody vs Tabit: restaurant POS comparison in Israel",
    description: "Multilingual back office and POS, recipe-linked stock, sales forecasts, kitchen prep and service, suppliers and variances: compare Foody’s integrated scope with Tabit.",
    heading: "Foody or Tabit?\nWhy choose Foody.",
    reviewed: "Foody assessment dated",
    caption: "Native features",
    criterion: "Your requirement",
    presentLabel: "Present",
    absentLabel: "Absent",
    attributionNote: "The Tabit absences reflect the assessment supplied by Foody and have not been independently confirmed. They concern native functionality without third-party software. Integrations may provide additional capabilities depending on country, version and contract.",
    foodySource: "Details",
    moduleNote: `Kitchen functions belong to Foody Kitchen: ILS ${pricingRates.kitchen}/month standalone or ILS ${pricingRates.complete}/month in Foody Restaurant & Kitchen, per location excluding VAT. Foody Restaurant is ILS ${pricingRates.restaurant}/month and standalone Orders ILS ${pricingRates.ordering}/month excluding VAT. Hardware, setup, training and processing are separate.`,
    source: "View Tabit’s listed integrations",
    reasonsTitle: "Choose Foody for these specific needs.",
    reasons: [
      { title: "One team, multiple languages.", text: "Foody POS and back office offer French, Hebrew and English interfaces. Working-language support matters for managers, waiters and kitchen teams, beyond translating the guest menu.", href: "/solutions/pos", link: "Check available interfaces" },
      { title: "From orders to ingredient stock.", text: "Configured recipes connect orders to ingredient consumption. Producing a batch deducts raw ingredients and credits the preparation; counts then allow expected and actual stock to be compared. Recipes and mappings must be configured for meaningful results.", href: "/help/kitchen/preparations", link: "See preparation stock movements" },
      { title: "Plan and manage every service.", text: "Foody Companion brings together forecasts, preparations to start, stock needs and incoming deliveries before service, monitoring during service and variance review at closing. Purchasing suggestions remain drafts for review and manual sending.", href: "/help/kitchen/daily-operations", link: "See the daily kitchen workflow" },
    ],
    commission: { title: "What a 3% commission would represent.", text: `For illustration, ${COMMISSION_EXAMPLE.rate}% of ILS ${COMMISSION_EXAMPLE.sales.toLocaleString("en-IL")} in online orders is ILS ${exampleCommission.toLocaleString("en-IL")} in monthly commission. At 0% Foody commission, that proportional Foody charge is ILS 0.`, note: "Illustrative calculation assumption, not attributed to Tabit or any vendor. This is not guaranteed total savings: subscriptions, hardware, card processing and other fees must be compared separately on the same sales basis." },
    rows: [
      { id: "admin-languages", label: "Back office in French", foody: "Manage your business in French, Hebrew or English.", proof: "/solutions/pos" },
      { id: "pos-languages", label: "POS in French", foody: "Your team uses the POS in French, Hebrew or English.", proof: "/solutions/pos" },
      { id: "ingredient-depletion", label: "Automatic ingredient deduction", foody: "Ingredients are deducted according to recipes and configured order stages.", proof: "/help/kitchen/daily-operations" },
      { id: "recipe-cost", label: "Recipe food cost", foody: "See each dish’s ingredient cost and compare it with its selling price.", proof: "/help/kitchen/food-cost" },
      { id: "sales-forecast", label: "Sales forecasts", foody: "Plan preparation quantities from sales history. The team reviews and adjusts estimates.", proof: "/help/kitchen/daily-operations" },
      { id: "before-service", label: "Companion: before service", foody: "Review preparations to start and deliveries to check.", proof: "/help/kitchen/daily-operations" },
      { id: "during-service", label: "Companion: during service", foody: "Track available preparations and ingredients to replenish.", proof: "/help/kitchen/daily-operations" },
      { id: "day-close", label: "Closing and stock variances", foody: "Compare expected and counted stock to identify variances.", proof: "/help/kitchen/daily-operations" },
      { id: "supplier-discrepancies", label: "Supplier receipts and discrepancies", foody: "Check delivered quantities, units and purchase prices.", proof: "/help/kitchen/suppliers-and-purchases" },
    ],
    linksTitle: "Explore Foody in detail",
    restaurantLink: "Explore Foody Restaurant",
    pricingLink: "See plans and all charges",
    orderGuide: "How to take an order",
    tableGuide: "How to manage tables",
    compareLink: "Compare Foody and Tabit",
  },
  he: {
    title: "Foody או Tabit: השוואת קופה למסעדה בישראל",
    description: "משרד אחורי וקופה בכמה שפות, מלאי הקשור למתכונים, תחזיות מכירות, הכנות ושירות במטבח, ספקים והפרשים: השוו את התכולה המשולבת של Foody מול Tabit.",
    heading: "Foody או Tabit?\nלמה לבחור ב־Foody.",
    reviewed: "הערכת Foody מתאריך",
    caption: "יכולות מובנות",
    criterion: "הצורך שלכם",
    presentLabel: "קיים",
    absentLabel: "לא קיים",
    attributionNote: "היכולות שסומנו כחסרות ב־Tabit מבוססות על ההערכה שמסר Foody ולא אומתו באופן עצמאי. ההשוואה מתייחסת ליכולת מובנית, ללא תוכנה חיצונית. חיבורים עשויים לספק יכולות נוספות בהתאם למדינה, לגרסה ולחוזה.",
    foodySource: "פרטים",
    moduleNote: `כלי המטבח שייכים ל־Foody Kitchen: ${pricingRates.kitchen} ₪ לחודש בנפרד או ${pricingRates.complete} ₪ לחודש בחבילת Foody מסעדה ומטבח, לעסק לפני מע״מ. Foody מסעדה עולה ${pricingRates.restaurant} ₪ לחודש ו־Foody הזמנות בנפרד ${pricingRates.ordering} ₪ לחודש לפני מע״מ. חומרה, הקמה, הדרכה וסליקה נפרדות.`,
    source: "לצפות בחיבורים ש־Tabit מפרסם",
    reasonsTitle: "בחרו ב־Foody לצרכים האלה.",
    reasons: [
      { title: "צוות אחד, כמה שפות.", text: "הקופה והמשרד האחורי של Foody מציעים ממשק בעברית, בצרפתית ובאנגלית. שפת כלי העבודה חשובה למנהלים, למלצרים ולצוות המטבח, מעבר לתרגום התפריט ללקוחות.", href: "/solutions/pos", link: "לבדוק ממשקים זמינים" },
      { title: "מההזמנה למלאי חומרי הגלם.", text: "מתכונים מוגדרים מחברים הזמנות לצריכת חומרי גלם. ייצור אצווה מפחית את המרכיבים ומוסיף את הכמות להכנה; ספירות מאפשרות להשוות מלאי צפוי למלאי בפועל. נדרשים מתכונים ושיוכים תקינים לתוצאות שימושיות.", href: "/help/kitchen/preparations", link: "לראות תנועות מלאי של הכנות" },
      { title: "לתכנן ולנהל כל סרוויס.", text: "Foody Companion מרכז תחזיות, הכנות שצריך להתחיל, צורכי מלאי ומשלוחים לפני השירות, מעקב בזמן השירות ובדיקת הפרשים בסגירה. הצעות רכש נשארות טיוטות לבדיקה ושליחה ידנית.", href: "/help/kitchen/daily-operations", link: "לראות את תהליך המטבח היומי" },
    ],
    commission: { title: "מה המשמעות של עמלה בשיעור 3%.", text: `להמחשה, ${COMMISSION_EXAMPLE.rate}% מתוך ${COMMISSION_EXAMPLE.sales.toLocaleString("he-IL")} ₪ בהזמנות אונליין הם ${exampleCommission.toLocaleString("he-IL")} ₪ עמלה בחודש. בשיעור עמלת Foody של 0%, עמלת Foody היחסית הזו היא 0 ₪.`, note: "הנחת חישוב להמחשה, ללא ייחוס ל־Tabit או לספק כלשהו. אין כאן הבטחה לחיסכון כולל: מנויים, חומרה, סליקה ועלויות נוספות יש להשוות בנפרד ועל בסיס מכירות זהה." },
    rows: [
      { id: "admin-languages", label: "משרד אחורי בצרפתית", foody: "נהלו את העסק בעברית, בצרפתית או באנגלית.", proof: "/solutions/pos" },
      { id: "pos-languages", label: "קופה בצרפתית", foody: "הצוות משתמש בקופה בעברית, בצרפתית או באנגלית.", proof: "/solutions/pos" },
      { id: "ingredient-depletion", label: "הפחתת חומרי גלם אוטומטית", foody: "חומרי גלם מופחתים לפי המתכונים ושלבי ההזמנה שהוגדרו.", proof: "/help/kitchen/daily-operations" },
      { id: "recipe-cost", label: "עלות חומרי גלם למתכון", foody: "בדקו את עלות חומרי הגלם לכל מנה מול מחיר המכירה שלה.", proof: "/help/kitchen/food-cost" },
      { id: "sales-forecast", label: "תחזיות מכירות", foody: "תכננו כמויות להכנה מהיסטוריית המכירות. הצוות בודק ומתאים את ההערכות.", proof: "/help/kitchen/daily-operations" },
      { id: "before-service", label: "Companion: לפני השירות", foody: "בדקו הכנות שצריך להתחיל ומשלוחים שצריך לאמת.", proof: "/help/kitchen/daily-operations" },
      { id: "during-service", label: "Companion: בזמן השירות", foody: "עקבו אחר הכנות זמינות וחומרי גלם להשלמה.", proof: "/help/kitchen/daily-operations" },
      { id: "day-close", label: "סגירה והפרשי מלאי", foody: "השוו מלאי צפוי למלאי שנספר ואתרו הפרשים.", proof: "/help/kitchen/daily-operations" },
      { id: "supplier-discrepancies", label: "קבלת סחורה והפרשי ספקים", foody: "בדקו כמויות שהגיעו, יחידות ומחירי קנייה.", proof: "/help/kitchen/suppliers-and-purchases" },
    ],
    linksTitle: "לבדוק את Foody לעומק",
    restaurantLink: "להכיר את Foody מסעדה",
    pricingLink: "לראות חבילות וכל העלויות",
    orderGuide: "איך לוקחים הזמנה",
    tableGuide: "איך מנהלים שולחנות",
    compareLink: "להשוות בין Foody ל־Tabit",
  },
};
