import type { Lang } from "@/lib/seo";
import { pricingRates } from "./pricing";

export const INVENTORY_GUIDE_PATH = "/guides/restaurant-inventory-israel";
export const INVENTORY_GUIDE_REVIEWED_AT = "2026-11-01";

type InventoryGuide = {
  title: string; description: string; disclosure: string; reviewed: string;
  summary: string;
  sections: { id: string; title: string; text: string; path: string; link: string }[];
  exampleTitle: string; exampleIntro: string; exampleHeaders: [string, string];
  exampleRows: [string, string][]; exampleFormula: string; exampleResult: string; exampleNote: string;
  checklistTitle: string; checklist: string[];
  nextTitle: string; nextText: string; calculatorLink: string; demosLink: string; kitchenLink: string;
  linkLabel: string;
};

/** Ingredient-inventory buying guide grounded in the published kitchen procedures, with synthetic examples. */
export const inventoryGuide: Record<Lang, InventoryGuide> = {
  he: {
    title: "ניהול מלאי למסעדות: מתכונים, פוד קוסט וספירות",
    description: "איך מחברים מלאי חומרי גלם, מתכונים, קבלות ספקים וספירה פיזית במסעדה בישראל? דוגמת חישוב מלאי צפוי מול מלאי שנספר, וקישורים למחשבון ולהדגמות Foody.",
    disclosure: "מדריך מאת צוות Foody POS, על בסיס נהלי המטבח המפורסמים שלנו. הדוגמה מספרית וסינתטית; היא אינה נתון של לקוח או הבטחת חיסכון.",
    reviewed: "נבדק בתאריך",
    summary: "ניהול מלאי למסעדה מתחיל ביחידות קנייה ובכמויות מתכון, ומסתיים בבדיקה של מה שנשאר בפועל. מסך הזמנות במטבח, מספר מנות זמינות וחשבונאות חומרי גלם הם צרכים שונים. כדי לעקוב אחר מלאי ופוד קוסט, צריך לקשר בין חומרי הגלם, המתכונים, המכירות והתנועות, ואז להשוות לספירה פיזית.",
    sections: [
      { id: "units", title: "1. מגדירים יחידות לפני שמחשבים עלויות", text: "רשמו כמה חומר גלם באמת יש באריזה ומה מחיר הקנייה שלה. שני ארגזים של 12 קופסאות, 400 גרם בכל קופסה, הם 9.6 ק״ג. מתכון בגרמים חייב להתאים ליחידת המלאי. ב־Foody אפשר לבדוק יחידות, אריזות והמרות; שם האריזה לבדו אינו קובע את התכולה.", path: "/help/kitchen/stock-management", link: "יחידות, אריזות ותנועות מלאי" },
      { id: "recipes", title: "2. מקשרים מתכונים למכירות", text: "כמות מרכיבים למנה או לגודל היא הבסיס לצריכה התאורטית. ב־Foody יש לבדוק את קישורי המכירות והמתכונים לפני שמסתמכים על החישוב. מכירה שלא הותאמה או מתכון חסר אינם צריכה של אפס. ספירת מנות מוכנות למכירה אינה מחליפה מעקב אחר חומרי הגלם.", path: "/help/kitchen/data-and-sales-links", link: "נתוני המטבח והתאמת מכירות" },
      { id: "preparations", title: "3. מבדילים בין חומר גלם להכנה", text: "רוטב שהוכן מראש הוא מלאי של הכנה. ב־Foody אישור ייצור אצווה מפחית את חומרי הגלם ומוסיף את הכמות שיוצרה להכנה. המנות שמשתמשות בה צורכות את ההכנה. בבדיקת הצריכה, ודאו שלא סופרים שוב את אותם חומרי גלם גם בייצור וגם בכל מנה שנמכרה.", path: "/help/kitchen/preparations", link: "הכנות, אצוות ותפוקה" },
      { id: "receipts", title: "4. מקבלים את מה שסופק בפועל", text: "אם הוזמנו 6 ק״ג והתקבלו 5.5 ק״ג, יש לבדוק ולרשום את הכמות שהתקבלה. ב־Foody משווים לקבלת הסחורה ולפקודת הרכש. בייבוא מסמך בודקים התאמה לחומרי הגלם, יחידות, כמויות ומחירים לפני האישור. מסמך שנותח אינו קבלה מאושרת, ואין לזכות אותה אספקה פעמיים.", path: "/help/kitchen/suppliers-and-purchases", link: "ספקים, הזמנות רכש וקבלת סחורה" },
      { id: "counts", title: "5. משווים מלאי צפוי למלאי שנספר", text: "המלאי הצפוי מסתמך על התנועות שנרשמו; הספירה הפיזית בודקת מה נשאר. ב־Foody בוחרים את היום הנכון ובודקים מכירות, קישורים, כמויות ויחידות. פריט שלא נספר נשאר לא נספר, ולא אפס. פער יכול לנבוע מפחת שלא נרשם, מנה גדולה מהמתכון, קבלה חסרה או שגיאת ספירה; הפער לבדו אינו מוכיח את הסיבה.", path: "/help/kitchen/daily-operations", link: "ספירות, פערים וסגירת יום" },
      { id: "cost", title: "6. מפרידים בין פוד קוסט לרווח נקי", text: "פוד קוסט למנה הוא עלות חומרי הגלם חלקי מחיר המכירה, באותו בסיס מס, כפול 100. ב־Foody העלות התאורטית תלויה במתכון ובמחירי המלאי. את הצריכה בפועל בודקים בנפרד באמצעות המכירות, התנועות והספירות. היתרה לאחר חומרי הגלם אינה רווח נקי: שכר, שכירות, אנרגיה, אריזה וסליקה עדיין נפרדים.", path: "/help/kitchen/food-cost", link: "עלות חומרי גלם לפי מתכון" },
      { id: "software-scope", title: "7. בוחרים מערכת לפי היקף ניהול המלאי", text: `לניהול חומרי גלם, בדקו יחד מתכון מקושר, מכירה, קבלת ספק וספירה פיזית. ב־Foody, מודול Kitchen כולל מתכונים, מלאי, ספקים והכנות עם Foody Companion. הוא זמין בנפרד ב־${pricingRates.kitchen} ₪ לחודש לסניף לפני מע״מ, או עם קופה והזמנות במסלול מסעדה ומטבח ב־${pricingRates.complete} ₪. חיבור לקופה חיצונית דורש בדיקה והצעת מחיר; חומרה, הקמה, הדרכה וסליקה בנפרד.`, path: "/pricing#plan-kitchen", link: "להיקף המסלולים ולמחירים" },
    ],
    exampleTitle: "דוגמה: לאן נעלם קילוגרם?",
    exampleIntro: "עוקבים אחר חומר גלם אחד לאורך תקופה, בקילוגרמים ובאותו מיקום מלאי. אין בדוגמה העברות או התאמות נוספות, והפחת לא נכלל בצריכת המתכון.",
    exampleHeaders: ["נתון", "כמות בק״ג"],
    exampleRows: [["מלאי פתיחה", "20"], ["קבלות שאושרו", "+10"], ["צריכה לפי מתכונים", "−6"], ["פחת שנרשם בנפרד", "−1"], ["מלאי צפוי בסוף התקופה", "23"], ["מלאי שנספר בפועל", "22"]],
    exampleFormula: "מלאי צפוי = מלאי פתיחה + קבלות − צריכת מתכונים − פחת שנרשם בנפרד.",
    exampleResult: "הפער הוא מינוס ק״ג אחד: נספר ק״ג אחד פחות מהמלאי הצפוי. בודקים קודם יחידות, קבלות, מתכונים, פחת ותזמון; לא מסיקים אוטומטית מה גרם לפער.",
    exampleNote: "זו דוגמת התאמה מפושטת, לא נוסחה שמכסה כל תנועת מלאי במערכת. בפעילות עם הכנות, העברות או התאמות נוספות צריך לכלול גם אותן. אין כאן אומדן חיסכון כספי.",
    checklistTitle: "מה לבקש לראות בהדגמת מערכת",
    checklist: ["אריזת ספק אחת וההמרה שלה ליחידת המתכון.", "מנה עם מתכון מקושר ומכירה שמדגימה צריכה פעם אחת.", "אצוות הכנה: אילו חומרי גלם ירדו ומה התווסף להכנה.", "אספקה חלקית והשוואה בין הכמות שהוזמנה לכמות שהתקבלה.", "ספירה עם פער, וגם פריט שלא נספר, בלי להפוך אותו לאפס.", "מי מאשר ייצור, סגירה והזמנת ספק. ב־Foody תחזית היא הערכה, ושליחת הזמנת ספק דורשת פעולה מפורשת."],
    nextTitle: "בדקו עם דוגמה משלכם", nextText: "התחילו בחישוב עלות למנה ללא חשבון. אחר כך עברו על מסכי Foody עם נתוני הדגמה, או בדקו את היקף מודול המטבח וההצעה המתאימה. חיבור לקופה חיצונית דורש בדיקה טכנית והצעת מחיר.",
    calculatorLink: "מחשבון פוד קוסט", demosLink: "הדגמות מתכונים, מלאי וקבלות", kitchenLink: "Foody Kitchen והיכולות שלו", linkLabel: "ניהול מלאי למסעדות: מתכונים, ספירות ופערים",
  },
  fr: {
    title: "Stocks restaurant : recettes, inventaire et food cost",
    description: "Relier ingrédients, recettes, réceptions fournisseurs et inventaire dans un restaurant en Israël. Un exemple de stock attendu et compté, avec le calculateur et les démonstrations Foody.",
    disclosure: "Guide de l’équipe Foody POS, fondé sur nos procédures de cuisine publiées. L’exemple utilise des données fictives ; ce n’est ni un résultat client ni une promesse d’économie.",
    reviewed: "Revu le",
    summary: "Le suivi des stocks d’un restaurant commence par les unités d’achat et les quantités des recettes, puis se vérifie avec un inventaire physique. Afficher les commandes en cuisine, compter les plats disponibles et suivre les ingrédients répondent à des besoins différents. Pour contrôler stocks et food cost, reliez ingrédients, recettes, ventes et mouvements avant de comparer ce qui reste réellement.",
    sections: [
      { id: "units", title: "1. Définir les unités avant de calculer", text: "Notez le contenu réel du conditionnement et son prix d’achat. Deux cartons de 12 boîtes de 400 g représentent 9,6 kg. Une recette en grammes doit correspondre à l’unité de stock. Dans Foody, vérifiez unités, conditionnements et conversions ; le nom d’une boîte ne suffit pas à définir son contenu.", path: "/help/kitchen/stock-management", link: "Unités, conditionnements et mouvements" },
      { id: "recipes", title: "2. Relier les recettes aux ventes", text: "Les quantités par portion ou par taille déterminent la consommation théorique. Dans Foody, contrôlez les correspondances entre ventes et recettes avant d’interpréter le calcul. Une vente non rapprochée ou une recette absente ne signifie pas une consommation nulle. Un compteur de plats disponibles ne remplace pas le suivi des ingrédients.", path: "/help/kitchen/data-and-sales-links", link: "Données cuisine et rapprochement des ventes" },
      { id: "preparations", title: "3. Distinguer ingrédients et préparations", text: "Une sauce produite à l’avance possède son propre stock de préparation. Dans Foody, confirmer un lot retire les ingrédients bruts et crédite la préparation produite. Les plats consomment ensuite cette préparation. Lors du contrôle, vérifiez que les mêmes ingrédients ne sont pas comptés une seconde fois à chaque plat après leur consommation en production.", path: "/help/kitchen/preparations", link: "Préparations, lots et rendement" },
      { id: "receipts", title: "4. Réceptionner les quantités réellement livrées", text: "Si vous commandez 6 kg et recevez 5,5 kg, contrôlez et enregistrez la quantité reçue. Dans Foody, rapprochez la réception de la commande fournisseur. Pour un document importé, vérifiez correspondances, unités, quantités et prix avant confirmation. Un document analysé n’est pas encore une réception validée ; ne créditez pas la même livraison deux fois.", path: "/help/kitchen/suppliers-and-purchases", link: "Fournisseurs, achats et réceptions" },
      { id: "counts", title: "5. Comparer stock attendu et stock compté", text: "Le stock attendu dépend des mouvements enregistrés ; le comptage mesure ce qui reste. Dans Foody, choisissez la bonne journée et contrôlez ventes, correspondances, quantités et unités. Un ingrédient non compté reste non compté, pas zéro. Un écart peut venir de pertes non saisies, d’une portion différente, d’une réception manquante ou d’une erreur de comptage ; il n’en prouve pas la cause.", path: "/help/kitchen/daily-operations", link: "Comptages, écarts et clôture de journée" },
      { id: "cost", title: "6. Séparer food cost et bénéfice net", text: "Le food cost d’un plat est son coût matière divisé par son prix de vente, sur la même base de taxe, multiplié par 100. Dans Foody, le coût théorique dépend des recettes et prix de stock. La consommation réelle se contrôle séparément avec ventes, mouvements et comptages. La marge matière n’est pas le bénéfice net : salaires, loyer, énergie, emballage et slika restent distincts.", path: "/help/kitchen/food-cost", link: "Le coût matière selon les recettes" },
      { id: "software-scope", title: "7. Choisir le logiciel selon le stock à suivre", text: `Pour suivre les ingrédients, vérifiez ensemble une recette rapprochée, une vente, une réception fournisseur et un inventaire physique. Foody Cuisine comprend recettes, stocks, fournisseurs et préparations, avec Foody Compagnon. Le module seul coûte ${pricingRates.kitchen} ₪ HT par établissement et par mois, ou ${pricingRates.complete} ₪ HT avec caisse et commandes dans Foody Restaurant & Cuisine. Une caisse externe demande validation et devis ; matériel, installation, formation et slika séparés.`, path: "/pricing#plan-kitchen", link: "Comparer les formules et leurs prix" },
    ],
    exampleTitle: "Exemple : où est passé un kilogramme ?",
    exampleIntro: "Un seul ingrédient, sur une période et un même emplacement, en kilogrammes. L’exemple ne comprend aucun transfert ou ajustement supplémentaire. La perte est séparée de la consommation prévue par recette.",
    exampleHeaders: ["Donnée", "Quantité en kg"],
    exampleRows: [["Stock initial", "20"], ["Réceptions confirmées", "+10"], ["Consommation selon les recettes", "−6"], ["Perte enregistrée séparément", "−1"], ["Stock attendu en fin de période", "23"], ["Stock physiquement compté", "22"]],
    exampleFormula: "Stock attendu = stock initial + réceptions − consommation selon les recettes − pertes enregistrées séparément.",
    exampleResult: "L’écart est de moins 1 kg : le comptage trouve 1 kg de moins que le stock attendu. Vérifiez unités, réceptions, recettes, pertes et dates avant de conclure à une cause.",
    exampleNote: "Rapprochement simplifié, pas une formule couvrant tous les mouvements du logiciel. Ajoutez les productions, transferts et autres ajustements si votre activité en comporte. Aucune économie financière n’est déduite de cet exemple.",
    checklistTitle: "Ce qu’il faut demander pendant une démo",
    checklist: ["Un conditionnement fournisseur et sa conversion dans l’unité de recette.", "Un plat relié à sa recette, puis une vente consommée une seule fois.", "Un lot de préparation : ingrédients retirés et quantité produite ajoutée.", "Une livraison partielle avec quantités commandées et reçues distinctes.", "Un comptage avec écart et un ingrédient non compté qui reste distinct de zéro.", "Les confirmations de production, clôture et commande fournisseur. Dans Foody, une prévision reste une estimation et l’envoi au fournisseur exige une action explicite."],
    nextTitle: "Vérifiez avec votre propre exemple", nextText: "Commencez par calculer le coût d’une portion sans créer de compte. Parcourez ensuite les écrans Foody avec des données de démonstration, ou examinez le périmètre du module Cuisine et son offre. Une connexion à une caisse externe demande validation technique et devis.",
    calculatorLink: "Calculer le food cost", demosLink: "Voir recettes, stocks et réceptions en pratique", kitchenLink: "Découvrir le périmètre de Foody Cuisine", linkLabel: "Stocks restaurant : recettes, inventaire et écarts",
  },
  en: {
    title: "Restaurant inventory: recipes, counts and food cost",
    description: "Connect ingredients, recipes, supplier receipts and physical counts in an Israeli restaurant. A worked expected-versus-counted stock example, with the Foody calculator and demonstrations.",
    disclosure: "A guide by the Foody POS team, based on our published kitchen procedures. The example uses synthetic data, not customer results or promised savings.",
    reviewed: "Reviewed on",
    summary: "Restaurant inventory starts with purchase units and recipe quantities, then needs checking against a physical count. Displaying kitchen orders, counting available dishes and accounting for ingredients serve different needs. To track inventory and food cost, connect ingredients, recipes, sales and movements before comparing what actually remains.",
    sections: [
      { id: "units", title: "1. Define units before calculating cost", text: "Record a package’s actual contents and purchase price. Two cases of 12 tins containing 400 g each equal 9.6 kg. A recipe in grams must match the stock unit. In Foody, review units, packaging and conversions; a package name alone does not define its contents.", path: "/help/kitchen/stock-management", link: "Units, packaging and stock movements" },
      { id: "recipes", title: "2. Connect recipes to sales", text: "Quantities per portion or size determine theoretical consumption. In Foody, check sales-to-recipe mappings before interpreting the calculation. An unmatched sale or missing recipe does not mean zero consumption. A counter of available dishes does not replace ingredient tracking.", path: "/help/kitchen/data-and-sales-links", link: "Kitchen data and sales matching" },
      { id: "preparations", title: "3. Separate ingredients from preparations", text: "A sauce made ahead has its own preparation stock. In Foody, confirming a batch deducts raw ingredients and credits the quantity of preparation produced. Dishes then consume that preparation. When reviewing consumption, check that the same raw ingredients are not counted again for every dish after their use in production.", path: "/help/kitchen/preparations", link: "Preparations, batches and yield" },
      { id: "receipts", title: "4. Receive what was actually delivered", text: "If you ordered 6 kg and received 5.5 kg, check and record the received quantity. In Foody, reconcile the receipt against the purchase order. For an imported document, review ingredient matches, units, quantities and prices before confirmation. An analysed document is not a confirmed receipt; do not credit the same delivery twice.", path: "/help/kitchen/suppliers-and-purchases", link: "Suppliers, purchases and receipts" },
      { id: "counts", title: "5. Compare expected stock with a physical count", text: "Expected stock depends on recorded movements; a physical count measures what remains. In Foody, select the correct day and check sales, mappings, quantities and units. An uncounted ingredient stays uncounted, not zero. A variance may come from unrecorded waste, different portions, a missing receipt or a counting error; the variance itself does not establish the cause.", path: "/help/kitchen/daily-operations", link: "Counts, variances and day closing" },
      { id: "cost", title: "6. Separate food cost from net profit", text: "A dish’s food-cost percentage is ingredient cost divided by selling price, on the same tax basis, multiplied by 100. In Foody, theoretical cost depends on recipes and stock prices. Check actual consumption separately using sales, movements and counts. Ingredient margin is not net profit: wages, rent, energy, packaging and payment processing remain separate.", path: "/help/kitchen/food-cost", link: "Recipe ingredient cost" },
      { id: "software-scope", title: "7. Choose software for the stock you need to track", text: `For ingredient inventory, check a mapped recipe, a sale, a supplier receipt and a physical count together. Foody Kitchen includes recipes, stock, suppliers and preparations, with Foody Companion. Standalone Kitchen costs ILS ${pricingRates.kitchen} per location/month, excluding VAT, or ILS ${pricingRates.complete} with POS and online orders in Foody Restaurant & Kitchen. An external POS requires validation and a quote; hardware, setup, training and processing are separate.`, path: "/pricing#plan-kitchen", link: "Compare plan scope and pricing" },
    ],
    exampleTitle: "Worked example: where did one kilogram go?",
    exampleIntro: "One ingredient, one period and one stock location, measured in kilograms. There are no additional transfers or adjustments in this example, and recorded waste is separate from recipe consumption.",
    exampleHeaders: ["Entry", "Quantity in kg"],
    exampleRows: [["Opening stock", "20"], ["Confirmed receipts", "+10"], ["Recipe-based consumption", "−6"], ["Separately recorded waste", "−1"], ["Expected closing stock", "23"], ["Physical closing count", "22"]],
    exampleFormula: "Expected stock = opening stock + receipts − recipe consumption − separately recorded waste.",
    exampleResult: "The variance is minus 1 kg: the count found 1 kg less than expected. Check units, receipts, recipes, waste and timing before deciding why.",
    exampleNote: "A simplified reconciliation, not a formula covering every stock movement in the software. Include production, transfers and other adjustments where applicable. No financial saving is inferred from this example.",
    checklistTitle: "What to request in a demonstration",
    checklist: ["A supplier package converted into a recipe unit.", "A mapped dish and a sale whose consumption is recorded once.", "A preparation batch showing raw ingredients deducted and output credited.", "A partial delivery with distinct ordered and received quantities.", "A count showing a variance and an uncounted ingredient kept separate from zero.", "Who confirms production, closing and supplier orders. In Foody, forecasts are estimates and sending a supplier order requires an explicit action."],
    nextTitle: "Check with your own example", nextText: "Start by calculating cost per portion without creating an account. Then review Foody screens with demonstration data, or examine the Kitchen module’s scope and offer. Connecting an external POS requires technical validation and a separate quote.",
    calculatorLink: "Calculate food cost", demosLink: "See recipes, stock and receipts in practice", kitchenLink: "Explore the Foody Kitchen scope", linkLabel: "Restaurant stock: recipes, counts and variances",
  },
};
