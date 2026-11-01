import type { Lang } from "@/lib/seo";
import { pricingRates } from "./pricing";

export const BUYING_GUIDE_PATH = "/guides/restaurant-pos-israel";
export type AcquisitionPage = "restaurants" | "kitchen" | "ordering" | "pos";
type Workflow = { title: string; intro: string; steps: { title: string; text: string; guide: string }[]; offer: string };

/** Reviewed buying journeys, backed by the existing public help procedures. */
export const acquisitionContent: Record<Lang, {
  readProcedure: string; buyingGuide: string; restaurantLink: string; checkoutGuide: string; stockGuide: string; salesGuide: string; workflows: Record<AcquisitionPage, Workflow>;
}> = {
  he: {
    readProcedure: "למדריך התפעול",
    buyingGuide: "איך לבחור קופה למסעדה בישראל",
    restaurantLink: "קופות למסעדות ולבתי קפה עם Foody POS",
    checkoutGuide: "איך מאשרים תשלום בקופה",
    stockGuide: "איך מנהלים חומרי גלם ויחידות מלאי",
    salesGuide: "איך מקשרים מכירות למתכונים ולצריכה",
    workflows: {
      pos: {
        title: "הזמנה, מטבח ותשלום. בדקו את הרצף בהדגמה.",
        intro: "לקופה בדלפק או לטאבלט של המלצר, בדקו את העבודה עם התפריט, השפות והציוד שלכם. ממשקי הקופה והמשרד האחורי זמינים בעברית, בצרפתית ובאנגלית.",
        steps: [
          { title: "בוחרים את השולחן ואת המנות", text: "פתחו את השולחן או את המכירה בדלפק, בחרו מנה, גודל ותוספות והשלימו בחירות חובה. לפני השליחה בדקו כמויות, הערות ומחירים. פתיחת שולחן פעיל חוזרת לחשבון הקיים; היא אינה מכירה חדשה.", guide: "/help/orders/taking-an-order-pos" },
          { title: "שולחים לפי קצב השירות", text: "כשהפרופיל והגרסאות התואמות מאפשרים זאת, משייכים מנות לשירות ושולחים או משחררים אותן במפורש. הוספת מנה לסל אינה משגרת או מדפיסה אותה. הדפסת בוני מטבח היא אפשרות בתשלום, עם מדפסת ופרופיל מוגדרים.", guide: "/help/orders/courses-and-kitchen-release" },
          { title: "בודקים את החשבון ואת אישור התשלום", text: "בחרו את החשבון והסכום הנכונים ושלמו באמצעות ההגדרה התואמת. טאבלט עם Foody אינו הופך בעצמו למסוף כרטיסים. תוצאה לא ברורה דורשת בדיקת העסקה הקיימת לפני ניסיון נוסף; אישור תשלום אינו אישור שהקבלה הודפסה.", guide: "/help/payments/pos-checkout" },
        ],
        offer: `Foody קופה: ${pricingRates.pos} ₪ לחודש לעסק, כולל רישיון מכשיר אחד. Foody מסעדה: ${pricingRates.restaurant} ₪ לחודש, כולל שני רישיונות, הזמנות אונליין ו־QR. הרישיון אינו כולל את המכשיר עצמו. לפני מע״מ; חומרה, הקמה, הדרכה, EMV, סליקה והדפסת בוני מטבח בנפרד.`,
      },
      restaurants: {
        title: "קופה למסעדה: בדקו הזמנה, שירות ותשלום",
        intro: "כשמשווים קופות למסעדות, בדקו פתיחת שולחן, בחירת מנות ותוספות, שליחה להכנה ואישור תשלום. המדריכים מציגים את הפעולות והתנאים בכל שלב; מעקב אחר חומרי הגלם דורש את מודול המטבח והגדרת הקישורים למתכונים.",
        steps: [
          { title: "פותחים שולחן ולוקחים הזמנה", text: "המלצר בוחר מנות, גדלים ותוספות בטאבלט תואם. הקופה והמשרד האחורי זמינים בעברית, בצרפתית ובאנגלית, עם תצוגה מימין לשמאל בעברית.", guide: "/help/orders/taking-an-order-pos" },
          { title: "מארגנים את השירות והתשלום", text: "שולחים את המנות לפי הגדרות ההכנה ומנהלים את החשבון בשולחן. בודקים מראש התאמה למדפסות ולספק הסליקה; הדפסת בוני מטבח היא אפשרות בתשלום.", guide: "/help/orders/courses-and-kitchen-release" },
          { title: "מחברים למתכונים ולמלאי עם מודול המטבח", text: "עם Foody Kitchen, מתכונים וקישורי מכירות שהוגדרו מאפשרים לעקוב אחר צריכת חומרי הגלם. בסיכום היום בודקים פערים בלי לנכות שוב צריכה שכבר נרשמה.", guide: "/help/kitchen/data-and-sales-links" },
        ],
        offer: `Foody מסעדה: ${pricingRates.restaurant} ₪ לחודש לעסק, כולל שני רישיונות מכשיר, הזמנות אונליין ו־QR. Foody מסעדה ומטבח: ${pricingRates.complete} ₪ לחודש. לפני מע״מ; חומרה, הקמה, הדרכה וסליקה בנפרד.`,
      },
      kitchen: {
        title: "ניהול מלאי למסעדות וחישוב פוד קוסט בתהליך אחד",
        intro: "מספירת חומרי הגלם ועד להכנות לסרוויס: Foody Kitchen מחבר מתכונים, מלאי, מחירי ספקים והפעילות היומית. איכות החישוב תלויה ביחידות, במחירים ובקישורי המכירות שהוגדרו.",
        steps: [
          { title: "מחשבים עלות חומרי גלם למנה", text: "קושרים כמויות מתכון למחירי המלאי ומשווים למחיר המכירה. פוד קוסט הוא עלות חומרי הגלם ביחס למכירה; הוא אינו כולל את כל הוצאות המסעדה ואינו רווח נקי.", guide: "/help/kitchen/food-cost" },
          { title: "בודקים קבלות סחורה והפרשי ספקים", text: "משווים את הכמויות שהתקבלו להזמנת הרכש ומיישבים פערים. בייבוא תעודת משלוח בודקים התאמות, יחידות, כמויות ומחירים לפני אישור קבלה.", guide: "/help/kitchen/suppliers-and-purchases" },
          { title: "מתכננים הכנות ועוקבים במהלך היום", text: "Foody Companion מציג הכנות, תחזית ומעקב לקראת הסרוויס ובמהלכו. תחזית היא הערכה; ייצור דורש אישור. בסגירה בודקים ספירות, פחת וסטיות. טיוטות ספק דורשות שליחה מפורשת.", guide: "/help/kitchen/daily-operations" },
        ],
        offer: `Foody Kitchen עצמאי: ${pricingRates.kitchen} ₪ לחודש לעסק. Foody Companion כלול ללא תוספת תשלום. חיבור לקופה חיצונית דורש בדיקה טכנית והצעת מחיר. לפני מע״מ; הקמה והדרכה בנפרד.`,
      },
      ordering: {
        title: "מערכת הזמנות למסעדה, מהאתר ועד למסירה",
        intro: "קבלו הזמנות אונליין באתר ממותג ורכזו אותן במשרד האחורי. אפשר לעבוד עם Foody הזמנות גם ללא קופת Foody.",
        steps: [
          { title: "מגדירים איסוף ומשלוחים", text: "התאימו שעות, אזורים ותנאי שירות לפעילות העסק. הזמנות לאותו יום והזמנות מראש פועלות לפי ההגדרות והזמינות שבחרתם.", guide: "/help/delivery/zones-and-schedules" },
          { title: "קובעים מתי מזמינים ומתי מכינים", text: "להזמנות מראש מגדירים חלון הזמנה, מועד סגירה ותאריך מסירה. אפשר לרכז הזמנות למועד מסוים, בלי להפוך כל הזמנה להכנה מיידית.", guide: "/help/orders/preorders-and-batches" },
          { title: "מרכזים כמויות, אריזה ומסירה", text: "הצוות בודק כמויות לפי מנה ואריזות לפי לקוח, מסמן הכנה ומנהל איסוף או משלוח. מעקב תשלום ומצב הכנה הם שלבים נפרדים.", guide: "/help/orders/payment-preparation-and-handoff" },
        ],
        offer: `Foody הזמנות עצמאי: ${pricingRates.ordering} ₪ לחודש לעסק, וכלול גם ב־Foody מסעדה. עמלת Foody באחוזים על הזמנות ישירות: 0%. לפני מע״מ; דמי מנוי, סליקה, חומרה, הדפסת בוני מטבח ושירותים חיצוניים בנפרד.`,
      },
    },
  },
  fr: {
    readProcedure: "Lire la procédure",
    buyingGuide: "Choisir une caisse restaurant en Israël",
    restaurantLink: "Caisses pour restaurants et cafés avec Foody POS",
    checkoutGuide: "Comment confirmer un paiement en caisse",
    stockGuide: "Comment gérer les ingrédients et unités de stock",
    salesGuide: "Comment relier ventes, recettes et consommations",
    workflows: {
      pos: {
        title: "Commande, cuisine, paiement. Vérifiez le parcours en démo.",
        intro: "Pour la caisse du comptoir ou la tablette du serveur, testez avec votre menu, vos langues et votre matériel. La caisse et le back-office sont disponibles en français, hébreu et anglais.",
        steps: [
          { title: "Choisir la table et les plats", text: "Ouvrez la table ou la vente au comptoir, choisissez plat, taille et suppléments, puis complétez les options obligatoires. Vérifiez quantités, notes et prix avant l’envoi. Rouvrir une table active reprend son addition ; ce n’est pas une nouvelle vente.", guide: "/help/orders/taking-an-order-pos" },
          { title: "Envoyer au rythme du service", text: "Avec un profil et des versions compatibles, affectez les plats aux services, puis envoyez ou lancez-les explicitement. Ajouter un plat au panier ne l’envoie ni ne l’imprime. L’impression des bons cuisine est une option payante, avec imprimante et profil configurés.", guide: "/help/orders/courses-and-kitchen-release" },
          { title: "Vérifier l’addition et le paiement confirmé", text: "Sélectionnez la bonne addition et son montant, puis utilisez le parcours de paiement compatible. Une tablette avec Foody ne devient pas elle-même un terminal carte. Un résultat incertain demande de vérifier la transaction existante avant toute nouvelle tentative ; un paiement confirmé ne prouve pas la sortie du reçu papier.", guide: "/help/payments/pos-checkout" },
        ],
        offer: `Foody Caisse : ${pricingRates.pos} ₪ HT par établissement et par mois, avec une licence appareil. Foody Restaurant : ${pricingRates.restaurant} ₪ HT par mois, avec deux licences, commandes en ligne et QR. La licence ne comprend pas l’appareil physique. Matériel, installation, formation, EMV, slika et impression des bons cuisine séparés.`,
      },
      restaurants: {
        title: "Caisse restaurant : vérifiez commande, service et paiement",
        intro: "Pour comparer les caisses restaurant, testez l’ouverture d’une table, les plats et suppléments, l’envoi en préparation et la confirmation du paiement. Les procédures détaillent chaque étape et ses conditions ; le suivi des ingrédients demande le module Cuisine et les liens entre ventes et recettes.",
        steps: [
          { title: "Ouvrir la table et prendre la commande", text: "Le serveur choisit plats, tailles et suppléments sur une tablette compatible. La caisse et le back-office sont disponibles en français, hébreu et anglais, avec affichage de droite à gauche en hébreu.", guide: "/help/orders/taking-an-order-pos" },
          { title: "Organiser le service et le paiement", text: "Envoyez les plats selon les règles de préparation et gérez l’addition à table. La compatibilité des imprimantes et du prestataire de slika se vérifie avant installation ; l’impression des bons en cuisine est une option payante.", guide: "/help/orders/courses-and-kitchen-release" },
          { title: "Relier recettes et stocks avec le module Cuisine", text: "Avec Foody Cuisine, les recettes et les correspondances de ventes configurées permettent de suivre la consommation des ingrédients. La clôture rapproche les écarts sans déduire une seconde fois les consommations déjà enregistrées.", guide: "/help/kitchen/data-and-sales-links" },
        ],
        offer: `Foody Restaurant : ${pricingRates.restaurant} ₪ HT par établissement et par mois, avec deux licences appareil, commandes en ligne et QR. Foody Restaurant & Cuisine : ${pricingRates.complete} ₪ HT par mois. Matériel, installation, formation et slika séparés.`,
      },
      kitchen: {
        title: "Recettes, stocks et food cost dans le même parcours",
        intro: "Du comptage des ingrédients aux préparations du service, Foody Cuisine relie recettes, stocks, prix fournisseurs et activité du jour. Les calculs dépendent des unités, prix et correspondances de ventes configurés.",
        steps: [
          { title: "Calculer le coût matière d’un plat", text: "Reliez les quantités de recette aux prix des stocks et comparez le coût au prix de vente. Le food cost mesure les matières premières rapportées aux ventes ; il ne couvre pas toutes les charges et ne représente pas le bénéfice net.", guide: "/help/kitchen/food-cost" },
          { title: "Contrôler les réceptions et les écarts fournisseurs", text: "Comparez les quantités reçues à la commande fournisseur et rapprochez les différences. Lors de l’import d’un bon de livraison, vérifiez correspondances, unités, quantités et prix avant de confirmer la réception.", guide: "/help/kitchen/suppliers-and-purchases" },
          { title: "Préparer le service et suivre la journée", text: "Foody Compagnon présente préparations, prévisions et suivi avant et pendant le service. Une prévision reste une estimation ; la production demande confirmation. À la clôture, vérifiez comptages, pertes et écarts. Les brouillons fournisseurs demandent un envoi explicite.", guide: "/help/kitchen/daily-operations" },
        ],
        offer: `Foody Cuisine seul : ${pricingRates.kitchen} ₪ HT par établissement et par mois. Foody Compagnon est inclus sans supplément. Une connexion à une caisse externe demande une validation technique et un devis. Installation et formation séparées.`,
      },
      ordering: {
        title: "Les commandes en ligne, du site à la remise au client",
        intro: "Recevez les commandes sur votre site et centralisez-les dans le back-office. Foody Commandes fonctionne aussi sans caisse Foody.",
        steps: [
          { title: "Configurer retraits et livraisons", text: "Adaptez horaires, zones et conditions de service à votre activité. Les commandes du jour et les précommandes respectent les paramètres et disponibilités choisis.", guide: "/help/delivery/zones-and-schedules" },
          { title: "Définir les dates de commande et de préparation", text: "Pour les précommandes, définissez une fenêtre de commande, une date limite et une date de remise. Regroupez les commandes pour une échéance sans lancer chaque préparation immédiatement.", guide: "/help/orders/preorders-and-batches" },
          { title: "Regrouper quantités, emballages et remises", text: "L’équipe consulte les quantités par plat et les emballages par client, marque la préparation et organise retrait ou livraison. Le suivi du paiement et l’état de préparation restent distincts.", guide: "/help/orders/payment-preparation-and-handoff" },
        ],
        offer: `Foody Commandes seul : ${pricingRates.ordering} ₪ HT par établissement et par mois, également inclus dans Foody Restaurant. Commission Foody en pourcentage sur les commandes directes : 0 %. Abonnement, slika, matériel, impression des bons en cuisine et services externes séparés.`,
      },
    },
  },
  en: {
    readProcedure: "Read the procedure",
    buyingGuide: "Choosing a restaurant POS in Israel",
    restaurantLink: "POS for restaurants and cafés with Foody POS",
    checkoutGuide: "How to confirm a POS payment",
    stockGuide: "How to manage ingredients and stock units",
    salesGuide: "How to connect sales, recipes and consumption",
    workflows: {
      pos: {
        title: "Orders, kitchen, payment. Check the journey in a demo.",
        intro: "For the counter POS or a waiter’s tablet, test with your menu, staff languages and equipment. Both POS and back-office interfaces support English, Hebrew and French.",
        steps: [
          { title: "Choose the table and dishes", text: "Open the table or counter sale, select dishes, sizes and modifiers, and complete required choices. Check quantities, notes and prices before sending. Reopening an active table resumes its existing bill; it does not create a new sale.", guide: "/help/orders/taking-an-order-pos" },
          { title: "Send dishes at the service’s pace", text: "With a compatible profile and versions, assign courses and explicitly send or release dishes. Adding a dish to the basket does not send or print it. Kitchen ticket printing is a paid option requiring a configured printer and profile.", guide: "/help/orders/courses-and-kitchen-release" },
          { title: "Check the bill and confirmed payment", text: "Select the correct bill and amount, then use the compatible payment flow. A tablet running Foody does not itself become a card terminal. An uncertain result requires checking the existing transaction before another attempt; confirmed payment does not prove a paper receipt was printed.", guide: "/help/payments/pos-checkout" },
        ],
        offer: `Foody POS: ILS ${pricingRates.pos} per location/month, with one device licence. Foody Restaurant: ILS ${pricingRates.restaurant} per month, with two licences, online orders and QR. A licence does not include the physical device. Excluding VAT; hardware, setup, training, EMV, processing and kitchen ticket printing are separate.`,
      },
      restaurants: {
        title: "Restaurant POS: check ordering, service and payment",
        intro: "When comparing restaurant POS systems, test opening a table, selecting dishes and modifiers, sending to preparation and confirming payment. The procedures explain each step and its conditions; ingredient tracking requires the Kitchen module and configured sales-to-recipe mappings.",
        steps: [
          { title: "Open the table and take the order", text: "The waiter selects dishes, sizes and extras on a compatible tablet. Both POS and back-office interfaces support English, Hebrew and French, with right-to-left display in Hebrew.", guide: "/help/orders/taking-an-order-pos" },
          { title: "Organise service and payment", text: "Send dishes according to the preparation rules and manage the table’s bill. Check printer and processor compatibility before installation; kitchen ticket printing is a paid option.", guide: "/help/orders/courses-and-kitchen-release" },
          { title: "Connect recipes and stock with Kitchen", text: "With Foody Kitchen, configured recipes and sales mappings support ingredient consumption tracking. Day closing reconciles variances without deducting previously recorded consumption twice.", guide: "/help/kitchen/data-and-sales-links" },
        ],
        offer: `Foody Restaurant: ${pricingRates.restaurant} ILS per location/month, with two device licences, online orders and QR. Foody Restaurant & Kitchen: ${pricingRates.complete} ILS/month. Excluding VAT; hardware, setup, training and processing are separate.`,
      },
      kitchen: {
        title: "Recipes, inventory and food cost in one workflow",
        intro: "From ingredient counts to service preparation, Foody Kitchen connects recipes, stock, supplier prices and daily operations. Calculations depend on configured units, prices and sales mappings.",
        steps: [
          { title: "Calculate ingredient cost per dish", text: "Link recipe quantities to stock prices and compare the cost with the selling price. Food cost measures ingredients relative to sales; it excludes other operating expenses and is not net profit.", guide: "/help/kitchen/food-cost" },
          { title: "Check receipts and supplier discrepancies", text: "Compare delivered quantities with the purchase order and reconcile differences. When importing a delivery note, review matches, units, quantities and prices before confirming receipt.", guide: "/help/kitchen/suppliers-and-purchases" },
          { title: "Prepare for service and follow the day", text: "Foody Companion brings together preparations, forecasts and tracking before and during service. Forecasts are estimates; production requires confirmation. At closing, review counts, waste and variances. Supplier drafts require explicit sending.", guide: "/help/kitchen/daily-operations" },
        ],
        offer: `Standalone Foody Kitchen: ${pricingRates.kitchen} ILS per location/month, including Foody Companion at no extra charge. Connecting an external POS requires technical validation and a quote. Excluding VAT; setup and training are separate.`,
      },
      ordering: {
        title: "Online restaurant orders, from your website to handoff",
        intro: "Receive orders on your branded website and centralise them in the back office. Foody Orders can also run without a Foody POS.",
        steps: [
          { title: "Configure pickup and delivery", text: "Set hours, zones and service conditions for your operation. Same-day orders and preorders follow the settings and availability you choose.", guide: "/help/delivery/zones-and-schedules" },
          { title: "Set ordering and preparation dates", text: "For preorders, define an ordering window, cutoff and handoff date. Group orders for a particular date without starting every preparation immediately.", guide: "/help/orders/preorders-and-batches" },
          { title: "Group quantities, packing and handoffs", text: "Staff check quantities by dish and packing by customer, mark preparation and organise pickup or delivery. Payment tracking and preparation status remain separate.", guide: "/help/orders/payment-preparation-and-handoff" },
        ],
        offer: `Standalone Foody Orders: ${pricingRates.ordering} ILS per location/month, also included in Foody Restaurant. Foody percentage commission on direct orders: 0%. Excluding VAT; subscription, processing, hardware, kitchen ticket printing and external services are separate.`,
      },
    },
  },
};
