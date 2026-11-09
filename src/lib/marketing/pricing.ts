import type { Lang } from "@/lib/seo";
import offerGrid from "./offer-grid.json";

/** Software and setup prices in ILS, excluding VAT. */
export const pricingRates = offerGrid.rates;

/** Equipment and Verifone payment prices in ILS, excluding VAT. */
export const paymentRates = offerGrid.payments;

type ModuleKey = keyof typeof offerGrid.plans;
type SetupKey = "setup" | "orderingSetup" | "training" | "kitchenSetup";
type PricingCopy = {
  title: string;
  intro: string;
  description: string;
  monthly: string;
  unit: string;
  quote: string;
  homeLink: string;
  plans: Record<ModuleKey, { text: string; items: string[]; note: string }>;
  licenceTitle: string;
  licences: string;
  licenceUnit: string;
  costsTitle: string;
  costsText: string;
  costs: { key: SetupKey; title: string; text: string; unit?: string }[];
  menuNote: string;
  payments: {
    title: string;
    text: string;
    physical: string;
    online: string;
    victa: string;
    deviceUnit: string;
    physicalService: string;
    terminalMonthly: string;
    virtualSetup: string;
    activation: string;
    virtualService: string;
    included: string;
    overage: string;
    transactionUnit: string;
    secure: string;
    operationUnit: string;
    options: string;
  };
  projects: string;
  faq: { q: string; a: string }[];
};

/** Localized copy for the three independent modules and their additional fees. */
export const pricing: Record<Lang, PricingCopy> = {
  fr: {
    title: "Choisissez les modules qu’il vous faut",
    intro: "Prenez un seul module ou combinez-en plusieurs. Vous pouvez garder votre caisse ou votre site actuel et relier vos outils compatibles à Foody.",
    description: "Tarifs Foody POS en Israël. Trois modules indépendants pour la caisse et le service en salle, les commandes en ligne et la cuisine. Frais de mise en service, matériel et paiements détaillés.",
    monthly: "/ mois",
    unit: "Abonnements HT par établissement",
    quote: "Sur devis",
    homeLink: "Découvrez nos offres et leurs tarifs",
    plans: {
      restaurant: {
        text: "Gérez la caisse et le service en salle.",
        items: ["Caisse sur iPad ou terminal compatible", "Plan de salle, tables et additions", "Commandes par QR à table"],
        note: "1 licence de caisse nominative incluse",
      },
      ordering: {
        text: "Vendez en ligne sur un site à votre image.",
        items: ["Site de commande personnalisé", "Commandes à emporter et en livraison", "Suivi des commandes et fiches clients"],
        note: "0 % de commission Foody sur vos commandes directes",
      },
      kitchen: {
        text: "Pilotez vos préparations, vos achats et vos marges.",
        items: ["Recettes, stocks et food cost", "Réceptions et écarts fournisseurs", "Prévisions de ventes et Foody Compagnon", "Écran de suivi des commandes en cuisine"],
        note: "1 accès chef et 1 licence écran cuisine (KDS) inclus",
      },
    },
    licenceTitle: "Une licence de caisse par employé",
    licences: "Chaque employé qui prend des commandes ou encaisse a son propre accès, même si l’équipe partage un iPad. Le premier accès est inclus avec Foody Restaurant.",
    licenceUnit: "HT par mois et par employé supplémentaire",
    costsTitle: "Frais de mise en service",
    costsText: "Ces frais s’appliquent une seule fois aux modules et prestations que vous choisissez.",
    costs: [
      { key: "setup", title: "Mise en service Restaurant", text: "Paramétrage de la caisse et du plan de salle, formation à distance.", unit: "HT" },
      { key: "orderingSetup", title: "Création et mise en ligne du site Commandes", text: "Personnalisation du site et configuration du retrait et de la livraison.", unit: "HT" },
      { key: "training", title: "Formation sur place, en option", text: "Une journée avec votre équipe.", unit: "HT / jour" },
      { key: "kitchenSetup", title: "Accompagnement Cuisine, selon vos besoins", text: "Aide à la reprise de vos recettes, stocks et fournisseurs." },
    ],
    menuNote: "La mise en service Restaurant ou Commandes inclut la reprise du menu fourni. Si vous prenez les deux modules, votre menu est repris une seule fois.",
    payments: {
      title: "Matériel et paiements",
      text: "Prix HT applicables aux équipements et services de paiement que vous choisissez.",
      physical: "Paiement en salle",
      online: "Paiement en ligne",
      victa: "Verifone Victa Portable",
      deviceUnit: "à l’achat, par appareil",
      physicalService: "Service de paiement EMV",
      terminalMonthly: "/ mois par terminal",
      virtualSetup: "Activation du terminal virtuel",
      activation: "à l’activation",
      virtualService: "Service du terminal virtuel",
      included: "{n} transactions incluses par mois",
      overage: "Au-delà du forfait mensuel",
      transactionUnit: "/ transaction supplémentaire",
      secure: "3D Secure, si activé",
      operationUnit: "/ opération 3D Secure",
      options: "Autres terminaux, accessoires, SIM et services optionnels sur devis. Les commissions d’encaissement dépendent de votre contrat avec l’acquéreur.",
    },
    projects: "Bornes Kiosk, impression des bons en cuisine, SMS, intégrations et projets multi-établissements sur devis.",
    faq: [
      { q: "Puis-je garder ma caisse ou mon site actuel ?", a: "Oui. Chaque module s’achète séparément. Si vous souhaitez connecter une caisse ou un site existant à Foody, nous vérifions la compatibilité et chiffrons l’intégration." },
      { q: "Que signifie 0 % de commission Foody ?", a: "Foody Commandes fonctionne au forfait mensuel. Foody ne prélève pas de pourcentage sur vos commandes directes. Les frais de paiement et les prestations externes se chiffrent séparément." },
      { q: "Quel est l’engagement ?", a: "Les abonnements logiciels sont facturés chaque mois et résiliables avec un préavis de 30 jours. Le tarif de lancement de votre abonnement est garanti pendant les 12 premiers mois. Le matériel et les contrats de paiement ont leurs propres conditions." },
    ],
  },
  en: {
    title: "Choose the modules you need",
    intro: "Start with one module or combine several. Keep your current POS or website and connect compatible tools to Foody.",
    description: "Foody POS pricing in Israel. Three independent modules for POS and table service, online ordering and kitchen management, with separate setup, hardware and payment fees.",
    monthly: "/ month",
    unit: "Subscriptions per location, excluding VAT",
    quote: "On request",
    homeLink: "Explore our modules and pricing",
    plans: {
      restaurant: {
        text: "Run your POS and table service.",
        items: ["POS on an iPad or compatible terminal", "Floor plan, tables and bills", "QR ordering at the table"],
        note: "1 named POS licence included",
      },
      ordering: {
        text: "Sell online through a site designed for your restaurant.",
        items: ["Custom ordering website", "Pickup and delivery orders", "Order tracking and customer profiles"],
        note: "0% Foody commission on direct orders",
      },
      kitchen: {
        text: "Manage prep, purchasing and margins.",
        items: ["Recipes, stock and food cost", "Supplier receipts and discrepancies", "Sales forecasts and Foody Companion", "Kitchen display for order tracking"],
        note: "1 chef account and 1 kitchen display (KDS) licence included",
      },
    },
    licenceTitle: "One POS licence per employee",
    licences: "Every employee who takes orders or accepts payments has their own login, even when the team shares an iPad. Foody Restaurant includes the first licence.",
    licenceUnit: "per additional employee/month, excl. VAT",
    costsTitle: "One-time setup fees",
    costsText: "These fees apply to the modules and services you choose.",
    costs: [
      { key: "setup", title: "Restaurant setup", text: "POS and floor plan configuration, with remote training.", unit: "excl. VAT" },
      { key: "orderingSetup", title: "Orders website setup and launch", text: "Website design and setup for pickup and delivery.", unit: "excl. VAT" },
      { key: "training", title: "Optional on-site training", text: "One day with your team.", unit: "per day, excl. VAT" },
      { key: "kitchenSetup", title: "Kitchen onboarding as needed", text: "Help importing recipes, stock and suppliers." },
    ],
    menuNote: "Restaurant and Orders setup include importing your supplied menu. If you choose both modules, we import the shared menu once.",
    payments: {
      title: "Hardware and payments",
      text: "Prices exclude VAT and apply to the equipment and payment services you choose.",
      physical: "In-person payments",
      online: "Online payments",
      victa: "Verifone Victa Portable",
      deviceUnit: "purchase price per device",
      physicalService: "EMV payment service",
      terminalMonthly: "/ month per terminal",
      virtualSetup: "Virtual terminal activation",
      activation: "at activation",
      virtualService: "Virtual terminal service",
      included: "{n} transactions included per month",
      overage: "Above the monthly allowance",
      transactionUnit: "/ additional transaction",
      secure: "3D Secure, if enabled",
      operationUnit: "/ 3D Secure operation",
      options: "Other terminals, accessories, SIM plans and optional services are quoted separately. Card processing fees depend on your acquiring agreement.",
    },
    projects: "Kiosks, kitchen ticket printing, SMS, integrations and multi-location projects are quoted separately.",
    faq: [
      { q: "Can I keep my existing POS or website?", a: "Yes. You can buy each module separately. If you want to connect an existing POS or website to Foody, we check compatibility and quote the integration." },
      { q: "What does 0% Foody commission mean?", a: "Foody Orders has a fixed monthly subscription. Foody charges no percentage on your direct orders. Payment fees and external services are priced separately." },
      { q: "What is the commitment?", a: "Software subscriptions are billed monthly and can be cancelled with 30 days’ notice. Your launch subscription price is guaranteed for the first 12 months. Hardware and payment services have separate terms." },
    ],
  },
  he: {
    title: "מחיר קופה למסעדה ומודולים לבחירה",
    intro: "אפשר לבחור מודול אחד או לשלב כמה מודולים. אפשר להישאר עם הקופה או האתר הקיימים ולחבר ל־Foody כלים תואמים.",
    description: "מחירון Foody POS בישראל. שלושה מודולים עצמאיים לקופה ושירות במסעדה, הזמנות אונליין וניהול המטבח, עם פירוט עלויות הקמה, ציוד וסליקה.",
    monthly: "לחודש",
    unit: "מחירי המנוי לסניף, לפני מע״מ",
    quote: "בהצעת מחיר",
    homeLink: "לכל המודולים והמחירים",
    plans: {
      restaurant: {
        text: "ניהול הקופה והשירות בשולחנות.",
        items: ["קופה ב־iPad או במסוף תואם", "מפת שולחנות וניהול חשבונות", "הזמנות ב־QR בשולחן"],
        note: "רישיון קופה אישי אחד כלול",
      },
      ordering: {
        text: "מכירה אונליין מאתר בעיצוב העסק שלכם.",
        items: ["אתר הזמנות מותאם לעסק", "הזמנות לאיסוף עצמי ולמשלוח", "מעקב הזמנות וכרטיסי לקוחות"],
        note: "0% עמלת Foody על הזמנות ישירות",
      },
      kitchen: {
        text: "ניהול הכנות, רכש ורווחיות.",
        items: ["מתכונים, מלאי ועלות מנה", "קבלת סחורה ובדיקת פערים מול ספקים", "תחזיות מכירה ו־Foody Companion", "מסך למעקב אחר הזמנות במטבח"],
        note: "גישה אחת לשף ורישיון אחד למסך מטבח (KDS)",
      },
    },
    licenceTitle: "רישיון קופה אחד לכל עובד",
    licences: "לכל עובד שמקבל הזמנות או תשלומים יש גישה אישית, גם כשהצוות חולק iPad. הרישיון הראשון כלול ב־Foody מסעדה.",
    licenceUnit: "לחודש לכל עובד נוסף, לפני מע״מ",
    costsTitle: "דמי הקמה חד־פעמיים",
    costsText: "דמי ההקמה חלים על המודולים והשירותים שתבחרו.",
    costs: [
      { key: "setup", title: "הקמת Foody מסעדה", text: "הגדרת הקופה ומפת השולחנות, כולל הדרכה מרחוק.", unit: "לפני מע״מ" },
      { key: "orderingSetup", title: "הקמה והשקה של אתר ההזמנות", text: "התאמת האתר לעסק והגדרת איסוף עצמי ומשלוחים.", unit: "לפני מע״מ" },
      { key: "training", title: "הדרכה בבית העסק, לפי בחירה", text: "יום הדרכה אחד לצוות שלכם.", unit: "ליום, לפני מע״מ" },
      { key: "kitchenSetup", title: "ליווי בהקמת המטבח לפי הצורך", text: "עזרה בהעברת מתכונים, מלאי וספקים." },
    ],
    menuNote: "ההקמה של Foody מסעדה או Foody הזמנות כוללת קליטת התפריט שתספקו. אם בחרתם בשני המודולים, קולטים את התפריט המשותף פעם אחת.",
    payments: {
      title: "ציוד ותשלומים",
      text: "המחירים לפני מע״מ וחלים על הציוד ושירותי התשלום שבחרתם.",
      physical: "תשלומים בבית העסק",
      online: "תשלומים אונליין",
      victa: "Verifone Victa Portable",
      deviceUnit: "מחיר רכישה למכשיר",
      physicalService: "שירות תשלומים EMV",
      terminalMonthly: "לחודש למסוף",
      virtualSetup: "הפעלת מסוף וירטואלי",
      activation: "בעת ההפעלה",
      virtualService: "שירות מסוף וירטואלי",
      included: "{n} עסקאות כלולות בחודש",
      overage: "מעבר למכסה החודשית",
      transactionUnit: "לכל עסקה נוספת",
      secure: "3D Secure, אם הופעל",
      operationUnit: "לכל פעולת 3D Secure",
      options: "מסופים אחרים, אביזרים, SIM ושירותים לפי בחירה מתומחרים בהצעת המחיר. עמלות הסליקה נקבעות בהסכם מול הסולק.",
    },
    projects: "עמדות קיוסק, הדפסת בוני מטבח, הודעות SMS, אינטגרציות ופרויקטים מרובי סניפים מתומחרים בהצעת מחיר.",
    faq: [
      { q: "אפשר להישאר עם הקופה או האתר הקיימים?", a: "כן. אפשר לרכוש כל מודול בנפרד. אם תרצו לחבר קופה או אתר קיימים ל־Foody, נבדוק תאימות ונתמחר את החיבור." },
      { q: "מה המשמעות של 0% עמלת Foody?", a: "Foody הזמנות מחויב במנוי חודשי קבוע. Foody לא גובה אחוז מההזמנות הישירות שלכם. דמי תשלום ושירותים חיצוניים מתומחרים בנפרד." },
      { q: "מהי תקופת ההתחייבות?", a: "מנויי התוכנה מחויבים מדי חודש ואפשר לבטל אותם בהודעה של 30 יום מראש. מחיר ההשקה של המנוי נשמר ב־12 החודשים הראשונים. לציוד ולשירותי התשלומים תנאים נפרדים." },
    ],
  },
};
