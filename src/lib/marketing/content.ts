import type { Lang } from "@/lib/seo";
import { pricing } from "./pricing";

export type Faq = { q: string; a: string };
export type Feature = { title: string; text: string };
export type SolutionKey =
  | "restaurants"
  | "chains"
  | "retail"
  | "pos"
  | "kitchen"
  | "ordering"
  | "payments"
  | "hardware"
  | "equipment"
  | "companion";
export type Solution = {
  title: string;
  sectionTitle?: string;
  description: string;
  heading: string;
  intro: string;
  features: Feature[];
  faq: Faq[];
};

const he = {
  home: {
    title: "העסק שלכם.\nכל האפשרויות.",
    description:
      "קופת ענן ב־iPad וב־Android, תשלומים וניהול עסק שעובדים יחד. מהקפה השכונתי ועד לרשת המסעדות הבאה של ישראל.",
    secondary: "למצוא את הפתרון שלי",
    photoAlt: "בעלת בית קפה מגישה קפה ללקוח ליד קופה על הדלפק",
    photoLabel: "פחות להתעסק. יותר לארח.",
    intro: "כל מה שצריך כדי\nלעשות עסק טוב.",
    introText:
      "מוכרים בדלפק, מגישים לשולחן או מנהלים כמה סניפים? התחילו במה שצריך היום והוסיפו כלים כשהעסק גדל.",
    sectorText: [
      "כל ההזמנות, השולחנות והמטבח באותו קצב.",
      "ייצור, חומרי גלם וספקים. שליטה שמתחילה בפרטים.",
      "קופה נוחה ותשלום מהיר. גם כשהדלפק קטן.",
    ],
    platformTitle: "מההזמנה ועד התשלום.\nהכול מתחבר.",
    platformText:
      "הצוות מקבל כלים פשוטים לעבודה. אתם מקבלים תמונה ברורה של מה שקורה בעסק.",
    featureTitles: [
      "קופה שעובדת בקצב שלכם.",
      "הלקוחות שלכם. האתר שלכם.",
      "לדעת מה נשאר מכל מנה.",
    ],
    featureTexts: [
      "הזמנות, שולחנות, תוספות ופיצול תשלום בממשק אחד, ב־iPad וב־Android, מחוברים לענן.",
      "הזמנות לאיסוף, למשלוח וב־QR באתר ממותג, שמגיעות ישירות לתהליך העבודה שלכם.",
      "מחברים מתכונים, מחירי חומרי גלם ונתוני מכירות כדי להבין עלויות ופערים.",
    ],
    verifoneTitle: "הטכנולוגיה של Verifone.\nהכול מתחבר עם Foody.",
    verifoneText:
      "כשותף ומפיץ רשמי של Verifone, אנחנו מחברים את העסק שלכם לדור החדש של מסופי התשלום. Victa Portable לשירות בתנועה. Victa Mini לדלפק קומפקטי.",
    verifoneCta: "לגלות את מסופי Victa",
    opsTitle: "יותר מסניף אחד.\nאותה שליטה בפרטים.",
    opsText:
      "רשת טובה מתחילה בתפעול מדויק. מתכננים ייצור, עוקבים אחרי עלויות, מנהלים ספקים ובודקים פערים בין התכנון למה שקרה בפועל.",
    opsItems: [
      "תוכניות ייצור והכנות",
      "עלות מנה ופחת",
      "מלאי והזמנות מספקים",
      "ניהול גישה לפי סניף ותפקיד",
    ],
    opsCta: "הפתרון לרשתות",
    paymentsTitle: "גם לתנאי הסליקה שלכם\nמגיע שדרוג.",
    paymentsText:
      "אנחנו בונים הצעות סליקה תחרותיות לפי המחזור, סוג הפעילות ואופן התשלום שלכם. קבלו הצעה ברורה שמפרידה בין תוכנה, חומרה וסליקה.",
    paymentsCta: "לקבלת הצעת סליקה",
    providerNote:
      "החיבור נבחר לפי המדינה, סוג העסק והסכם הסליקה. Stancer מיועד לשווקים הנתמכים על ידו.",
    providers: [
      "מסופים ותשלומים",
      "סליקה בישראל",
      "סליקה ומסמכים",
      "תשלומים בשווקים נתמכים",
    ],
    faq: [
      {
        q: "האם Foody מתאים רק למסעדות?",
        a: "לא. Foody מציע קופה ותשלומים גם לחנויות ולעסקים קטנים. למסעדות ולרשתות יש בנוסף כלים ייעודיים לשולחנות, הזמנות, מטבח, ייצור, food cost וספקים. בהדגמה נבדוק את תהליכי העבודה והציוד שמתאימים לעסק שלכם.",
      },
      {
        q: "האם אתם שותפים רשמיים של Verifone?",
        a: "כן. Foody הוא שותף ומפיץ רשמי של Verifone. אנחנו עוזרים להתאים מסוף מתוך משפחת Victa, כולל Victa Portable ו־Victa Mini, בהתאם לאופי הפעילות, לזמינות ולחיבור הסליקה הנדרש בישראל.",
      },
      {
        q: "אפשר לקבל הצעה גם לסליקה?",
        a: "כן. נבחן את מחזור הסליקה ואת אופן קבלת התשלומים ונכין הצעה מותאמת. העמלות והעלויות הקבועות יפורטו בהצעה; הן תלויות בספק, בסוגי הכרטיסים ובתנאי ההסכם.",
      },
      {
        q: "מה Foody נותן לרשת מסעדות?",
        a: "ניהול מסעדות תחת חשבון מורשה, כלי ייצור והכנות, מתכונים, חישוב עלות מנה, מלאי וספקים. אפשר לעבור בין הסניפים המורשים ולעקוב אחר הפעילות שלהם. את היקף הפריסה וההרשאות מתאימים לרשת.",
      },
      {
        q: "איך עוברים מהמערכת הקיימת?",
        a: "מתחילים בשיחה ובהדגמה. ממפים את התפריט או הקטלוג, את הציוד, הסליקה והסניפים, ואז מתכננים את ההקמה וההדרכה. היקף העברת הנתונים תלוי בפורמט וביכולות הייצוא של המערכת הקיימת.",
      },
    ],
  },
  demo: {
    label: "המחשה עם נתונים לדוגמה",
    tabs: ["קופה", "ייצור", "Food Cost"],
    title: "יום טוב, צוות Foody",
    branch: "סניף לדוגמה · תל אביב",
    order: "הזמנה חדשה",
    table: "שולחן 08",
    items: ["סלט ים תיכוני", "כריך הבית", "קפה הפוך", "מיץ תפוזים"],
    total: "סה״כ",
    pay: "לתשלום",
    takeaway: "איסוף עצמי",
    dinein: "ישיבה במקום",
    production: "תוכנית הייצור",
    today: "היום במטבח",
    prep: ["רוטב עגבניות", "ירקות חתוכים", "בצק לפוקאצ׳ה"],
    quantity: ["12 ליטר", "8 ק״ג", "40 יחידות"],
    statuses: ["הושלם", "בהכנה", "מתוכנן"],
    cost: "עלות מנה",
    price: "מחיר מכירה ללא מע״מ",
    ingredients: "עלות חומרי גלם",
    margin: "יתרה אחרי חומרי גלם",
    target: "יעד Food Cost",
    costNote: "דוגמה להמחשה. היתרה אינה כוללת שכר, שכירות והוצאות נוספות.",
  },
  pricing: pricing.he,
  contact: {
    title: "בואו נדבר\nעל העסק שלכם.",
    description:
      "מסעדה אחת, רשת שלמה או חנות חדשה? ספרו לנו מה אתם צריכים. נחזור אליכם לתיאום הדגמה והצעה מותאמת.",
    steps: [
      "נכיר את הפעילות והאתגרים שלכם",
      "נדגים את הכלים שמתאימים לעסק",
      "נבנה הצעה לתוכנה, ציוד וסליקה",
    ],
    firstName: "שם פרטי",
    lastName: "שם משפחה",
    email: "כתובת אימייל",
    phone: "טלפון",
    business: "שם העסק",
    sector: "סוג העסק",
    select: "בחרו סוג עסק",
    volume: "מספר עסקאות חודשי",
    optional: "לא חובה",
    sectors: ["מסעדה או בית קפה", "רשת מסעדות", "חנות או עסק", "עסק אחר"],
    volumes: [
      "פחות מ־500",
      "500–1,000",
      "1,000–3,000",
      "יותר מ־3,000",
      "העסק בהקמה",
    ],
    submit: "שליחת בקשה להדגמה",
    sending: "שולחים את הבקשה…",
    success: "הבקשה התקבלה. הצוות שלנו יחזור אליכם לתיאום הדגמה.",
    error: "הבקשה לא נשלחה. נסו שוב או כתבו לנו באימייל.",
    consent:
      "בשליחת הטופס אתם מבקשים שניצור קשר בנוגע ל־Foody. פרטים נוספים במדיניות הפרטיות.",
    required: "שדות המסומנים בכוכבית הם חובה.",
    emailLink: "מעדיפים לכתוב לנו?",
  },
};

type Copy = typeof he;

const fr: Copy = {
  home: {
    title: "Votre commerce.\nToutes les possibilités.",
    description:
      "La caisse cloud sur iPad et Android, les paiements et la gestion qui travaillent ensemble. Du café de quartier au prochain réseau de restaurants en Israël.",
    secondary: "Trouver ma solution",
    photoAlt:
      "Une gérante de café sert un client au comptoir, à côté de sa caisse",
    photoLabel: "Moins de gestion. Plus de liens.",
    intro: "Tout pour faire\ntourner votre activité.",
    introText:
      "Au comptoir, à table ou dans plusieurs établissements : commencez avec les outils dont vous avez besoin et faites évoluer votre équipement.",
    sectorText: [
      "Les commandes, la salle et la cuisine au même rythme.",
      "Production, matières premières et fournisseurs sous contrôle.",
      "Une caisse simple. Un paiement fluide. Même sur un petit comptoir.",
    ],
    platformTitle: "De la commande au paiement.\nTout se connecte.",
    platformText:
      "Des outils simples pour vos équipes. Une vue claire de votre activité pour vous.",
    featureTitles: [
      "Une caisse au rythme du service.",
      "Vos clients. Votre site.",
      "Comprendre la marge de chaque plat.",
    ],
    featureTexts: [
      "Commandes, tables, suppléments et partage du paiement dans une caisse cloud sur iPad et Android.",
      "Retrait, livraison et QR : votre site de commande alimente directement votre organisation.",
      "Reliez recettes, prix des ingrédients et ventes pour comprendre vos coûts et vos écarts.",
    ],
    verifoneTitle: "La technologie Verifone.\nL’expérience Foody.",
    verifoneText:
      "Partenaire et distributeur officiel Verifone, nous connectons votre activité à la nouvelle génération de terminaux. Victa Portable pour le service en mouvement. Victa Mini pour les petits comptoirs.",
    verifoneCta: "Découvrir les terminaux Victa",
    opsTitle: "Plusieurs adresses.\nLe même souci du détail.",
    opsText:
      "Un réseau solide commence par des opérations maîtrisées. Planifiez la production, suivez vos coûts, gérez les fournisseurs et comparez le prévu au réalisé.",
    opsItems: [
      "Plans de production et préparations",
      "Coût matière et pertes",
      "Stocks et commandes fournisseurs",
      "Accès par établissement et par rôle",
    ],
    opsCta: "La solution pour les réseaux",
    paymentsTitle: "Vos conditions de slika\nméritent aussi mieux.",
    paymentsText:
      "Nous négocions des offres de slika compétitives selon votre volume, votre activité et vos canaux de vente. Une proposition claire qui distingue logiciel, matériel et traitement des paiements.",
    paymentsCta: "Obtenir une offre de slika",
    providerNote:
      "Prestataire choisi selon le pays, l’activité et le contrat de paiement. Stancer est proposé sur ses marchés pris en charge.",
    providers: [
      "Terminaux et paiements",
      "Slika en Israël",
      "Paiements et documents",
      "Paiements sur marchés compatibles",
    ],
    faq: [
      {
        q: "Foody est-il réservé aux restaurants ?",
        a: "Non. La caisse et les paiements s’adressent aussi aux boutiques et petites entreprises. Les restaurants disposent en plus de fonctions pour la salle, les commandes, la cuisine, la production, le food cost et les fournisseurs. La démo permet de vérifier les outils et le matériel adaptés à votre métier.",
      },
      {
        q: "Êtes-vous partenaire officiel Verifone ?",
        a: "Oui. Foody est partenaire et distributeur officiel Verifone. Nous vous accompagnons dans le choix de la gamme Victa, notamment Victa Portable et Victa Mini, selon vos usages, la disponibilité et le prestataire de paiement en Israël.",
      },
      {
        q: "Pouvez-vous proposer un contrat de slika ?",
        a: "Oui. Nous étudions votre volume et vos modes d’encaissement pour établir une offre adaptée. Les commissions et frais fixes sont détaillés dans la proposition. Ils dépendent du prestataire, des cartes et des conditions du contrat.",
      },
      {
        q: "Quels outils pour une chaîne de restaurants ?",
        a: "Un accès à plusieurs restaurants autorisés, des plans de production, des recettes, le calcul du coût matière, les stocks et les fournisseurs. Vous passez d’un établissement à l’autre pour suivre son activité. Le déploiement et les droits sont adaptés à votre réseau.",
      },
      {
        q: "Comment changer de système ?",
        a: "Nous commençons par une démo et un état des lieux : carte ou catalogue, matériel, paiements et établissements. Nous préparons ensuite l’installation et la formation. La reprise de données dépend des formats et des exports de votre système actuel.",
      },
    ],
  },
  demo: {
    label: "Illustration avec données de démonstration",
    tabs: ["Caisse", "Production", "Food cost"],
    title: "Bonjour, équipe Foody",
    branch: "Établissement démo · Tel Aviv",
    order: "Nouvelle commande",
    table: "Table 08",
    items: [
      "Salade méditerranéenne",
      "Sandwich maison",
      "Cappuccino",
      "Jus d’orange",
    ],
    total: "Total",
    pay: "Encaisser",
    takeaway: "À emporter",
    dinein: "Sur place",
    production: "Plan de production",
    today: "Aujourd’hui en cuisine",
    prep: ["Sauce tomate", "Légumes découpés", "Pâte à focaccia"],
    quantity: ["12 litres", "8 kg", "40 portions"],
    statuses: ["Terminé", "En préparation", "Planifié"],
    cost: "Coût d’un plat",
    price: "Prix de vente HT",
    ingredients: "Coût des ingrédients",
    margin: "Reste après ingrédients",
    target: "Objectif food cost",
    costNote:
      "Exemple illustratif. Le solde exclut les salaires, le loyer et les autres charges.",
  },
  pricing: pricing.fr,
  contact: {
    title: "Parlons de\nvotre activité.",
    description:
      "Un restaurant, tout un réseau ou une nouvelle boutique : dites-nous ce dont vous avez besoin. Nous vous recontactons pour une démo et une proposition adaptée.",
    steps: [
      "Comprendre votre activité et vos enjeux",
      "Montrer les outils utiles à vos équipes",
      "Chiffrer logiciel, matériel et slika",
    ],
    firstName: "Prénom",
    lastName: "Nom",
    email: "Adresse e-mail",
    phone: "Téléphone",
    business: "Nom de l’entreprise",
    sector: "Votre activité",
    select: "Choisir une activité",
    volume: "Transactions mensuelles",
    optional: "Facultatif",
    sectors: [
      "Restaurant ou café",
      "Chaîne de restaurants",
      "Commerce ou boutique",
      "Autre activité",
    ],
    volumes: [
      "Moins de 500",
      "500–1 000",
      "1 000–3 000",
      "Plus de 3 000",
      "En cours de création",
    ],
    submit: "Demander ma démonstration",
    sending: "Envoi en cours…",
    success:
      "Votre demande a bien été reçue. Notre équipe vous recontactera pour organiser la démo.",
    error:
      "Votre demande n’a pas été envoyée. Réessayez ou contactez-nous par e-mail.",
    consent:
      "En envoyant ce formulaire, vous demandez à être contacté au sujet de Foody. Consultez notre politique de confidentialité.",
    required: "Les champs marqués d’un astérisque sont obligatoires.",
    emailLink: "Vous préférez nous écrire ?",
  },
};

const en: Copy = {
  home: {
    title: "Your business.\nAll the possibilities.",
    description:
      "Cloud POS on iPad and Android, payments and business tools that work together. From the neighborhood café to Israel’s next restaurant group.",
    secondary: "Find my solution",
    photoAlt:
      "A café owner serving a customer at the counter beside her point of sale",
    photoLabel: "Less admin. More connection.",
    intro: "Everything to keep\nyour business moving.",
    introText:
      "At the counter, at the table or across locations. Start with what you need today and add tools as your business grows.",
    sectorText: [
      "Your orders, front of house and kitchen in sync.",
      "Production, ingredients and suppliers. Control in every detail.",
      "A simple POS and a smooth checkout. Even on a small counter.",
    ],
    platformTitle: "From first order to final payment.\nIt all connects.",
    platformText:
      "Simple tools for your team. A clearer picture of your business for you.",
    featureTitles: [
      "A POS that keeps up with service.",
      "Your customers. Your website.",
      "Know what every dish leaves you.",
    ],
    featureTexts: [
      "Orders, tables, modifiers and split payments in a cloud POS on iPad and Android.",
      "Pickup, delivery and QR orders on your branded website, connected to your workflow.",
      "Connect recipes, ingredient prices and sales to understand your costs and variances.",
    ],
    verifoneTitle: "Verifone technology.\nThe Foody experience.",
    verifoneText:
      "As an official Verifone partner and reseller, we connect your business to the next generation of payment terminals. Victa Portable for service on the move. Victa Mini for compact counters.",
    verifoneCta: "Explore Victa terminals",
    opsTitle: "More locations.\nThe same attention to detail.",
    opsText:
      "Strong restaurant groups start with well-run operations. Plan production, track costs, manage suppliers and compare what you planned with what actually happened.",
    opsItems: [
      "Production plans and preparations",
      "Ingredient costs and waste",
      "Stock and supplier orders",
      "Access by location and role",
    ],
    opsCta: "Built for restaurant groups",
    paymentsTitle: "Your processing terms\ncould use an upgrade, too.",
    paymentsText:
      "We put together competitive processing proposals around your turnover, business and sales channels. Get a clear breakdown of software, hardware and payment fees.",
    paymentsCta: "Get a processing proposal",
    providerNote:
      "Provider selection depends on country, business and processing agreement. Stancer is offered in its supported markets.",
    providers: [
      "Terminals and payments",
      "Processing in Israel",
      "Payments and documents",
      "Payments in supported markets",
    ],
    faq: [
      {
        q: "Is Foody only for restaurants?",
        a: "No. Foody POS and payments also serve shops and small businesses. Restaurants have additional tools for tables, orders, kitchen operations, production, food cost and suppliers. Your demo helps establish which workflows and devices fit your business.",
      },
      {
        q: "Are you an official Verifone partner?",
        a: "Yes. Foody is an official Verifone partner and reseller. We help you choose from the Victa family, including Victa Portable and Victa Mini, based on your workflow, availability and compatible payment processing in Israel.",
      },
      {
        q: "Can you provide a processing agreement?",
        a: "Yes. We review your turnover and how you take payments to prepare a tailored proposal. Processing rates and fixed fees are detailed in your offer and depend on the provider, card types and agreement.",
      },
      {
        q: "What does Foody offer restaurant groups?",
        a: "Access to multiple authorized restaurants, production plans, recipes, ingredient costing, inventory and suppliers. Switch between your authorized locations to follow their activity. Deployment and permissions are adapted to your group.",
      },
      {
        q: "How do I switch from my current system?",
        a: "We start with a conversation and demo, map your menu or catalogue, equipment, payments and locations, then plan setup and training. Data migration depends on the formats and export options available in your current system.",
      },
    ],
  },
  demo: {
    label: "Illustration with sample data",
    tabs: ["Point of sale", "Production", "Food cost"],
    title: "Hello, team Foody",
    branch: "Demo location · Tel Aviv",
    order: "New order",
    table: "Table 08",
    items: [
      "Mediterranean salad",
      "House sandwich",
      "Cappuccino",
      "Orange juice",
    ],
    total: "Total",
    pay: "Take payment",
    takeaway: "Pickup",
    dinein: "Dine in",
    production: "Production plan",
    today: "Today in the kitchen",
    prep: ["Tomato sauce", "Prepared vegetables", "Focaccia dough"],
    quantity: ["12 litres", "8 kg", "40 portions"],
    statuses: ["Complete", "In progress", "Planned"],
    cost: "Cost per dish",
    price: "Selling price excl. VAT",
    ingredients: "Ingredient cost",
    margin: "Remaining after ingredients",
    target: "Food cost target",
    costNote:
      "Illustrative example. The remainder excludes wages, rent and other expenses.",
  },
  pricing: pricing.en,
  contact: {
    title: "Let’s talk about\nyour business.",
    description:
      "One restaurant, an entire group or a brand-new shop. Tell us what you need and we’ll get in touch to arrange a demo and tailored proposal.",
    steps: [
      "Understand your business and challenges",
      "Show the tools that fit your team",
      "Build a software, hardware and payments proposal",
    ],
    firstName: "First name",
    lastName: "Last name",
    email: "Email address",
    phone: "Phone number",
    business: "Business name",
    sector: "Business type",
    select: "Choose your business type",
    volume: "Monthly transactions",
    optional: "Optional",
    sectors: [
      "Restaurant or café",
      "Restaurant group",
      "Shop or business",
      "Other business",
    ],
    volumes: [
      "Under 500",
      "500–1,000",
      "1,000–3,000",
      "Over 3,000",
      "Opening soon",
    ],
    submit: "Request my demo",
    sending: "Sending your request…",
    success:
      "Your request has been received. Our team will get in touch to arrange your demo.",
    error: "Your request wasn’t sent. Please try again or contact us by email.",
    consent:
      "By sending this form you are asking us to contact you about Foody. Read more in our privacy policy.",
    required: "Fields marked with an asterisk are required.",
    emailLink: "Prefer to email us?",
  },
};

export const marketing: Record<Lang, Copy> = { he, fr, en };
