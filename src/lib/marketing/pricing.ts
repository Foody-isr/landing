import type { Lang } from "@/lib/seo";
import offerGrid from "./offer-grid.json";

/** Software and setup prices in ILS, excluding VAT. */
export const pricingRates = offerGrid.rates;

/** Equipment and Verifone payment prices in ILS, excluding VAT. */
export const paymentRates = offerGrid.payments;

type ModuleKey = keyof typeof offerGrid.plans;
type SetupKey = "setup" | "orderingSetup" | "training" | "kitchenSetup";
type PaymentServiceCopy = { title: string; help: string; detail?: string };
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
    portableDetail: string;
    mobileDetail: string;
    miniDetail: string;
    deviceUnit: string;
    physicalService: PaymentServiceCopy;
    shvaLicense: PaymentServiceCopy;
    vhqManagement: PaymentServiceCopy;
    includedLabel: string;
    explanationLabel: string;
    activeTerminalMonthly: string;
    terminalMonthly: string;
    optionsTitle: string;
    labRepair: PaymentServiceCopy;
    gateway: PaymentServiceCopy;
    simData: PaymentServiceCopy;
    accessories: PaymentServiceCopy;
    replacement: PaymentServiceCopy;
    transport: PaymentServiceCopy;
    virtualSetup: PaymentServiceCopy;
    activation: string;
    virtualService: PaymentServiceCopy;
    included: string;
    overage: PaymentServiceCopy;
    transactionUnit: string;
    secure: PaymentServiceCopy;
    operationUnit: string;
    additionalVirtual: PaymentServiceCopy;
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
      portableDetail: "Terminal mobile avec imprimante intégrée pour les reçus.",
      mobileDetail: "Terminal pour encaisser à table, sans imprimante intégrée.",
      miniDetail: "Terminal compact pour le comptoir.",
      deviceUnit: "à l’achat, par appareil",
      physicalService: {
        title: "Service mensuel du terminal EMV",
        detail: "Requis pour chaque terminal actif.",
        help: "Ce forfait couvre la licence de paiement et la gestion à distance du terminal.",
      },
      shvaLicense: { title: "Licence SHVA", help: "Licence du logiciel qui permet au terminal d’accepter les paiements par carte en Israël, avec les mises à jour requises." },
      vhqManagement: { title: "Gestion à distance (VHQ)", help: "Verifone peut superviser le terminal à distance et y installer les mises à jour logicielles et de sécurité." },
      includedLabel: "Inclus",
      explanationLabel: "Détails sur {service}",
      activeTerminalMonthly: "/ mois par terminal actif",
      terminalMonthly: "/ mois par terminal",
      optionsTitle: "Options et accessoires",
      labRepair: { title: "Réparation EMV en laboratoire", help: "Prise en charge des réparations et du remplacement de pièces selon la couverture. Le transport est proposé sur devis." },
      gateway: { title: "Passerelle de paiement (GW)", help: "Achemine les transactions vers SHVA si votre configuration d’encaissement utilise cette passerelle." },
      simData: { title: "Carte SIM Data", help: "Permet à un terminal compatible de se connecter au réseau mobile pour encaisser sans Wi-Fi." },
      accessories: { title: "Dock de recharge et support de comptoir", help: "Le dock recharge le terminal. Le support le maintient en place au comptoir. Le choix dépend du modèle." },
      replacement: { title: "Terminal de secours ou remplacement", help: "Un appareil de secours ou de remplacement peut être proposé selon le modèle, la disponibilité et votre couverture." },
      transport: { title: "Collecte et retour du terminal", help: "Sur demande, le terminal est collecté pour la réparation en laboratoire, puis rapporté." },
      virtualSetup: { title: "Activation du terminal virtuel", help: "Mise en service, payée une fois, pour activer l’encaissement par carte sur votre site." },
      activation: "à l’activation",
      virtualService: { title: "Service du terminal virtuel", help: "Forfait mensuel qui permet d’encaisser les paiements par carte sur votre site, avec un volume de transactions inclus." },
      included: "{n} transactions incluses par mois",
      overage: { title: "Au-delà du forfait mensuel", help: "Frais appliqués à chaque transaction supplémentaire une fois la limite mensuelle atteinte." },
      transactionUnit: "/ transaction supplémentaire",
      secure: { title: "3D Secure, en option", help: "Vérification de l’identité du client lors du paiement en ligne, par exemple dans son application bancaire. L’activation et chaque vérification sont facturées séparément." },
      operationUnit: "/ opération 3D Secure",
      additionalVirtual: { title: "Terminal virtuel supplémentaire", help: "Peut être nécessaire si vous enregistrez des cartes ou utilisez un contrôle du code de sécurité de la carte (CVV), selon votre configuration." },
      options: "Autres terminaux sur devis. Les commissions d’encaissement dépendent de votre contrat avec l’acquéreur.",
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
      portableDetail: "Mobile terminal with a built-in receipt printer.",
      mobileDetail: "Tableside payment terminal without a built-in printer.",
      miniDetail: "Compact terminal for the counter.",
      deviceUnit: "purchase price per device",
      physicalService: {
        title: "Monthly EMV terminal service",
        detail: "Required for each active terminal.",
        help: "This plan covers the payment licence and remote management for the terminal.",
      },
      shvaLicense: { title: "SHVA licence", help: "Licences the software that lets the terminal accept card payments in Israel and covers required updates." },
      vhqManagement: { title: "Remote management (VHQ)", help: "Verifone can monitor the terminal remotely and install software and security updates." },
      includedLabel: "Included",
      explanationLabel: "About {service}",
      activeTerminalMonthly: "/ month per active terminal",
      terminalMonthly: "/ month per terminal",
      optionsTitle: "Options and accessories",
      labRepair: { title: "EMV lab repair", help: "Covers repairs and replacement parts subject to your coverage. Transport is quoted separately." },
      gateway: { title: "Payment gateway (GW)", help: "Routes transactions to SHVA if your payment setup uses this gateway." },
      simData: { title: "Data SIM card", help: "Connects a compatible terminal to the mobile network so it can take payments without Wi-Fi." },
      accessories: { title: "Charging dock and counter stand", help: "The dock charges the terminal. The stand holds it in place at the counter. Options depend on your model." },
      replacement: { title: "Spare or replacement terminal", help: "A spare or replacement device may be available depending on the model, stock and your coverage." },
      transport: { title: "Terminal collection and return", help: "On request, the terminal is collected for lab repair and returned afterwards." },
      virtualSetup: { title: "Virtual terminal activation", help: "One-time setup to enable online card payments on your site." },
      activation: "at activation",
      virtualService: { title: "Virtual terminal service", help: "Monthly service that processes online card payments on your site and includes a set number of transactions." },
      included: "{n} transactions included per month",
      overage: { title: "Above the monthly allowance", help: "Applies to each additional transaction once you reach your monthly limit." },
      transactionUnit: "/ additional transaction",
      secure: { title: "Optional 3D Secure", help: "Verifies the customer’s identity during online checkout, for example in their banking app. Activation and each verification are billed separately." },
      operationUnit: "/ 3D Secure operation",
      additionalVirtual: { title: "Additional virtual terminal", help: "May be required if your payment setup uses saved cards or checks the card security code (CVV)." },
      options: "Other terminals are quoted separately. Card processing fees depend on your acquiring agreement.",
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
      portableDetail: "מסוף נייד עם מדפסת קבלות מובנית.",
      mobileDetail: "מסוף לתשלום בשולחן ללא מדפסת מובנית.",
      miniDetail: "מסוף קומפקטי לדלפק.",
      deviceUnit: "מחיר רכישה למכשיר",
      physicalService: {
        title: "שירות חודשי למסוף EMV",
        detail: "נדרש לכל מסוף פעיל.",
        help: "השירות כולל את רישיון התשלומים ואת ניהול המסוף מרחוק.",
      },
      shvaLicense: { title: "רישיון שב״א", help: "רישיון לתוכנה שמאפשרת למסוף לקבל תשלומי כרטיס בישראל, כולל עדכוני תוכנה נדרשים." },
      vhqManagement: { title: "ניהול מסוף מרחוק (VHQ)", help: "Verifone יכולה לנטר את המסוף מרחוק ולהתקין בו עדכוני תוכנה ואבטחה." },
      includedLabel: "כלול",
      explanationLabel: "מידע על {service}",
      activeTerminalMonthly: "לחודש למסוף פעיל",
      terminalMonthly: "לחודש למסוף",
      optionsTitle: "שירותים אופציונליים ואביזרים",
      labRepair: { title: "תיקון מסופי EMV במעבדה", help: "השירות מכסה תיקונים והחלפת רכיבים בהתאם לכיסוי. השינוע מתומחר בנפרד בהצעת מחיר." },
      gateway: { title: "מתג סליקה (GW)", help: "מנתב את העסקאות לשב״א כאשר תצורת הסליקה שלכם משתמשת במתג זה." },
      simData: { title: "כרטיס SIM לגלישה", help: "מחבר מסוף תואם לרשת סלולרית כדי לקבל תשלומים גם בלי Wi-Fi." },
      accessories: { title: "תחנת טעינה ומעמד לדלפק", help: "תחנת הטעינה מטעינה את המסוף. המעמד מקבע אותו על הדלפק. האפשרויות תלויות בדגם." },
      replacement: { title: "מסוף חלופי או לגיבוי", help: "ניתן להציע מסוף חלופי או לגיבוי בהתאם לדגם, לזמינות ולכיסוי שלכם." },
      transport: { title: "איסוף והחזרת המסוף", help: "לפי בקשה, המסוף נאסף לתיקון במעבדה ומוחזר לאחר מכן." },
      virtualSetup: { title: "הפעלת מסוף וירטואלי", help: "הקמה בתשלום חד-פעמי שמאפשרת לקבל תשלומי כרטיס באתר שלכם." },
      activation: "בעת ההפעלה",
      virtualService: { title: "שירות מסוף וירטואלי", help: "שירות חודשי לקבלת תשלומי כרטיס באתר. השירות כולל מכסת עסקאות חודשית." },
      included: "{n} עסקאות כלולות בחודש",
      overage: { title: "מעבר למכסה החודשית", help: "תשלום על כל עסקה נוספת לאחר ניצול המכסה החודשית." },
      transactionUnit: "לכל עסקה נוספת",
      secure: { title: "3D Secure, לפי בחירה", help: "אימות זהות הלקוח בתשלום אונליין, למשל באפליקציית הבנק. ההפעלה וכל אימות מחויבים בנפרד." },
      operationUnit: "לכל פעולת 3D Secure",
      additionalVirtual: { title: "מסוף וירטואלי נוסף", help: "עשוי להידרש בתצורת תשלום עם כרטיסים שמורים או בדיקת קוד האבטחה של הכרטיס (CVV)." },
      options: "מסופים אחרים מתומחרים בהצעת מחיר. עמלות הסליקה נקבעות בהסכם מול הסולק.",
    },
    projects: "עמדות קיוסק, הדפסת בוני מטבח, הודעות SMS, אינטגרציות ופרויקטים מרובי סניפים מתומחרים בהצעת מחיר.",
    faq: [
      { q: "אפשר להישאר עם הקופה או האתר הקיימים?", a: "כן. אפשר לרכוש כל מודול בנפרד. אם תרצו לחבר קופה או אתר קיימים ל־Foody, נבדוק תאימות ונתמחר את החיבור." },
      { q: "מה המשמעות של 0% עמלת Foody?", a: "Foody הזמנות מחויב במנוי חודשי קבוע. Foody לא גובה אחוז מההזמנות הישירות שלכם. דמי תשלום ושירותים חיצוניים מתומחרים בנפרד." },
      { q: "מהי תקופת ההתחייבות?", a: "מנויי התוכנה מחויבים מדי חודש ואפשר לבטל אותם בהודעה של 30 יום מראש. מחיר ההשקה של המנוי נשמר ב־12 החודשים הראשונים. לציוד ולשירותי התשלומים תנאים נפרדים." },
    ],
  },
};
