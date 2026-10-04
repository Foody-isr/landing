import type { Lang } from "@/lib/seo";
import { ui } from "./ui";

/** Approved launch prices in ILS, excluding VAT, per establishment. */
export const pricingRates = {
  pos: 590,
  ordering: 590,
  restaurant: 890,
  complete: 1490,
  kitchen: 890,
  extraPos: 99,
  setup: 1490,
  training: 1200,
} as const;

type PlanKey = "pos" | "restaurant" | "complete";
type PricingCopy = {
  title: string;
  description: string;
  launch: string;
  featuredLabel: string;
  monthly: string;
  unit: string;
  quote: string;
  demo: string;
  homeLink: string;
  promises: string[];
  plans: { key: PlanKey; title: string; text: string; items: string[] }[];
  licences: string;
  exclusions: string;
  ordering: {
    title: string;
    text: string;
    items: string[];
    note: string;
    link: string;
  };
  kitchen: { title: string; text: string; note: string; link: string };
  networks: { title: string; text: string; link: string };
  costsTitle: string;
  costsText: string;
  costs: {
    key: "extraPos" | "setup" | "training";
    title: string;
    unit: string;
    text: string;
  }[];
  hardwareTitle: string;
  hardwareText: string;
  paymentsTitle: string;
  paymentsText: string;
  usageTitle: string;
  usageText: string;
  faq: { q: string; a: string }[];
};

/** Localized public pricing copy, separate from the shared numeric rates. */
export const pricing: Record<Lang, PricingCopy> = {
  fr: {
    title: "Des prix clairs.\nDès le premier jour.",
    description:
      "La caisse Foody dès 590 ₪ HT par mois en Israël. Cloud, back-office et support inclus. Choisissez les outils qui correspondent à votre activité.",
    launch: "Tarifs de lancement",
    featuredLabel: "Pour le service en salle et en ligne",
    monthly: "/ mois",
    unit: "HT par établissement",
    quote: "Sur devis",
    demo: "Demander une démo",
    homeLink: "Découvrez nos offres et leurs tarifs",
    promises: [
      "Base cloud incluse",
      "Paiement mensuel",
      "Tarif logiciel garanti 12 mois",
    ],
    plans: [
      {
        key: "pos",
        title: ui.fr.pos,
        text: "Pour les commerces, les cafés et les comptoirs.",
        items: [
          "1 licence de caisse incluse",
          "Caisse, catalogue et gestion des tables",
          "Back-office et application pour le dirigeant",
          "Rapports de ventes",
          "Cloud, sauvegardes, mises à jour et support Foody",
        ],
      },
      {
        key: "restaurant",
        title: ui.fr.restaurantPlan,
        text: "Pour réunir la salle et les commandes en ligne.",
        items: [
          "Tout Foody Caisse, avec 2 licences de caisse incluses",
          "Commande QR à table",
          "Foody Commandes inclus, avec votre site à vos couleurs",
          "Commandes du jour et précommandes, en retrait ou livraison",
          "0 % de commission Foody sur les commandes en ligne",
        ],
      },
      {
        key: "complete",
        title: ui.fr.completePlan,
        text: "Pour suivre le service et le coût de chaque préparation.",
        items: [
          "Tout Foody Restaurant, avec 2 licences de caisse incluses",
          "Recettes et fiches techniques",
          "Food cost et suivi des coûts",
          "Stocks et inventaires",
          "Fournisseurs et préparation des commandes d’achat",
          "Foody Compagnon, votre assistant cuisine inclus",
        ],
      },
    ],
    licences:
      "Un poste de caisse correspond à un appareil utilisé comme POS Foody, au comptoir ou en salle. Plusieurs salariés peuvent se relayer sur le même poste avec leurs propres accès. Le back-office, le suivi des préparations et la gestion des livraisons ne comptent pas comme des postes de caisse.",
    exclusions:
      "Les prix couvrent le logiciel. Matériel, installation, services EMV, slika, transporteurs et SMS sont facturés séparément selon vos besoins. Les frais de paiement carte restent applicables, y compris avec 0 % de commission Foody.",
    ordering: {
      title: ui.fr.ordering,
      text: "Pour vendre en ligne, préparer et livrer vos commandes, sans caisse POS obligatoire.",
      items: [
        "Site de commande à vos couleurs",
        "Commandes du jour et précommandes par lots",
        "Quantités à préparer et emballage par client",
        "Gestion du retrait et des livraisons",
        "Back-office, cloud et support Foody",
      ],
      note: "Disponible seul et inclus dans Foody Restaurant. Impression des bons en cuisine en option payante. Matériel, configuration, frais de paiement et transporteurs chiffrés séparément.",
      link: "Découvrir Foody Commandes",
    },
    kitchen: {
      title: "Gardez votre caisse.\nAjoutez Foody Cuisine.",
      text: "Recettes, food cost, stocks et fournisseurs, avec la base cloud incluse. Foody Compagnon est inclus pour accompagner votre équipe avant, pendant et après le service.",
      note: "L’abonnement Foody Cuisine n’inclut pas Foody Caisse. Toute connexion à une caisse tierce fait l’objet d’une validation technique et d’un devis séparé.",
      link: "Découvrir Foody Cuisine",
    },
    networks: {
      title: "Plusieurs établissements.\nUne organisation à vous.",
      text: "Chaînes, groupes, production centrale, catering et logistique : nous chiffrons le périmètre, les sites, les intégrations et l’accompagnement nécessaires.",
      link: "Parlons de votre projet",
    },
    costsTitle: "Chaque coût,\nà sa place.",
    costsText:
      "Voici les compléments aux abonnements. Les prix sont hors TVA et le périmètre de chaque prestation est confirmé avant le démarrage.",
    costs: [
      {
        key: "extraPos",
        title: "Licence de caisse supplémentaire",
        unit: "HT / mois / poste",
        text: "Pour un appareil Foody supplémentaire au comptoir ou en salle, tablette ou Victa. Le matériel est acheté séparément. Les licences incluses dans votre formule ne sont pas refacturées.",
      },
      {
        key: "setup",
        title: "Installation standard",
        unit: "HT · une fois",
        text: "Configuration, menu fourni dans un format exploitable et formation à distance. Reprise complexe de données et déplacement sur devis.",
      },
      {
        key: "training",
        title: "Formation sur site",
        unit: "HT / journée",
        text: "Une journée avec votre équipe, en complément de l’installation standard. Les éventuels frais de déplacement sont précisés dans le devis.",
      },
    ],
    hardwareTitle: "Le matériel adapté à votre service",
    hardwareText:
      "Tablettes, terminaux Verifone et accessoires sont chiffrés selon votre configuration. Pour les commandes en ligne, l’impression des bons en cuisine est une option payante, avec imprimante compatible Epson ou Star Micronics et configuration chiffrées séparément. Vos appareils existants peuvent être conservés après vérification de leur compatibilité.",
    paymentsTitle: "Les paiements, détaillés séparément",
    paymentsText:
      "Le matériel Victa, la licence Foody utilisée sur l’appareil, le service EMV et les frais de slika sont distingués dans votre proposition. Les taux et frais fixes dépendent du prestataire, des cartes, des canaux de paiement et du contrat.",
    usageTitle: "Les usages et les besoins spécifiques",
    usageText:
      "La gestion des livraisons est incluse dans Foody Commandes, seul ou avec Foody Restaurant. Les prestations des transporteurs, les SMS, les bornes Kiosk, les intégrations tierces et les commissions des plateformes externes sont chiffrés séparément.",
    faq: [
      {
        q: "Foody Caisse inclut-il les commandes en ligne ?",
        a: "Non. Pour vendre en ligne sans caisse POS, choisissez Foody Commandes, disponible seul à 590 ₪ HT par mois et par établissement. Foody Commandes et la commande QR sont aussi inclus dans Foody Restaurant, à 890 ₪ HT par mois et par établissement avec deux licences de caisse, ainsi que dans Foody Restaurant & Cuisine.",
      },
      {
        q: "Quelle est la différence entre Foody Cuisine et Foody Compagnon ?",
        a: "Foody Cuisine réunit recettes, food cost, stocks, fournisseurs et suivi des préparations. Foody Compagnon est son assistant du quotidien : priorités, mise en place, suivi du service et clôture. Il est inclus sans supplément dans Foody Cuisine seul et Foody Restaurant & Cuisine. L’accès vocal avec Siri nécessite un iPad compatible et l’activation dans Foody.",
      },
      {
        q: "Faut-il ajouter une base cloud au prix affiché ?",
        a: "Non. Chaque formule inclut la base cloud, les sauvegardes, les mises à jour, le back-office et le support Foody. Les montants affichés sont hors TVA, par mois et par établissement.",
      },
      {
        q: "Quel est l’engagement ?",
        a: "Les abonnements logiciels sont facturés chaque mois et résiliables avec un préavis de 30 jours. Le tarif de lancement de votre abonnement est garanti pendant les 12 premiers mois. Le matériel et les contrats de paiement ont leurs propres conditions, présentées séparément.",
      },
      {
        q: "Que signifie 0 % de commission sur les commandes ?",
        a: "Foody ne prélève pas de commission sur les commandes de votre site ou par QR inclus dans les formules Foody Restaurant et Foody Restaurant & Cuisine. Les frais de paiement carte, la livraison, les SMS et les commissions éventuelles de plateformes tierces restent distincts.",
      },
      {
        q: "Un poste correspond-il à un appareil ou à un salarié ?",
        a: "Un poste est un appareil équipé de l’application Foody : caisse au comptoir, tablette serveur ou Victa utilisé pour prendre les commandes et encaisser. Une caisse au comptoir et deux appareils serveur représentent donc trois postes. Les comptes du personnel sont distincts des licences : plusieurs salariés peuvent se relayer sur le même appareil avec leurs propres accès. Foody Caisse inclut une licence ; Foody Restaurant et Foody Restaurant & Cuisine en incluent deux. Chaque licence supplémentaire coûte 99 ₪ HT par mois. Un Victa compte une seule fois, même s’il sert à commander et à payer. Le matériel, le service EMV et la slika restent séparés.",
      },
      {
        q: "Puis-je utiliser uniquement Foody Cuisine ?",
        a: "Oui, pour 890 ₪ HT par mois et par établissement, base cloud et Foody Compagnon inclus. Cette formule comprend recettes, food cost, stocks et fournisseurs. Une synchronisation avec votre caisse actuelle dépend de sa compatibilité et fait l’objet d’un devis séparé.",
      },
    ],
  },
  en: {
    title: "Clear prices.\nFrom day one.",
    description:
      "Foody POS from ₪590 per month, excluding VAT, in Israel. Cloud, back office and support included. Choose the tools that fit your business.",
    launch: "Launch pricing",
    featuredLabel: "For table service and online orders",
    monthly: "/ month",
    unit: "Excl. VAT per location",
    quote: "Custom quote",
    demo: "Book a demo",
    homeLink: "Explore our plans and pricing",
    promises: [
      "Cloud included",
      "Monthly billing",
      "Software price fixed for 12 months",
    ],
    plans: [
      {
        key: "pos",
        title: ui.en.pos,
        text: "For shops, cafés and counters.",
        items: [
          "1 POS device licence included",
          "POS, catalogue and table management",
          "Back office and owner app",
          "Sales reports",
          "Cloud, backups, updates and Foody support",
        ],
      },
      {
        key: "restaurant",
        title: ui.en.restaurantPlan,
        text: "Bring table service and online orders together.",
        items: [
          "Everything in Foody POS, with 2 device licences",
          "QR ordering at the table",
          "Foody Orders included, with a branded ordering website",
          "Same-day orders and preorders for pickup or delivery",
          "0% Foody commission on online orders",
        ],
      },
      {
        key: "complete",
        title: ui.en.completePlan,
        text: "Manage service and understand your preparation costs.",
        items: [
          "Everything in Foody Restaurant, with 2 device licences",
          "Recipes and preparation sheets",
          "Food cost and cost tracking",
          "Stock and inventory counts",
          "Suppliers and purchase order preparation",
          "Foody Companion, your kitchen assistant included",
        ],
      },
    ],
    licences:
      "A POS station is a device used as a Foody POS, at the counter or by a waiter. Several staff members can take turns on the same device using their own access. Back-office access, preparation tracking and delivery management do not count as POS stations.",
    exclusions:
      "Prices cover software. Hardware, setup, EMV services, payment processing, courier services and SMS are charged separately as needed. Card processing fees still apply, including with 0% Foody commission.",
    ordering: {
      title: ui.en.ordering,
      text: "Sell online, prepare and deliver orders without requiring a POS.",
      items: [
        "Branded ordering website",
        "Same-day orders and batch preorders",
        "Preparation quantities and packing per customer",
        "Pickup and delivery management",
        "Back office, cloud and Foody support",
      ],
      note: "Available on its own and included in Foody Restaurant. Kitchen ticket printing is a paid add-on. Hardware, setup, processing fees and courier services are quoted separately.",
      link: "Explore Foody Orders",
    },
    kitchen: {
      title: "Keep your POS.\nAdd Foody Kitchen.",
      text: "Recipes, food cost, stock and suppliers, with cloud included. Foody Companion is included to guide your team before, during and after service.",
      note: "Foody Kitchen does not include Foody POS. Any connection to a third-party POS requires technical validation and a separate quote.",
      link: "Explore Foody Kitchen",
    },
    networks: {
      title: "Multiple locations.\nYour way of working.",
      text: "Restaurant groups, central production, catering and logistics: we quote for your locations, required tools, integrations and rollout support.",
      link: "Discuss your project",
    },
    costsTitle: "Every cost,\nclearly explained.",
    costsText:
      "These services and options are separate from your subscription. All prices exclude VAT; the scope of each service is agreed before setup.",
    costs: [
      {
        key: "extraPos",
        title: "Additional POS device",
        unit: "Excl. VAT / month / device",
        text: "For an additional Foody device at the counter or used by a waiter, whether a tablet or Victa. Hardware is purchased separately. Licences included in your plan are not charged again.",
      },
      {
        key: "setup",
        title: "Standard setup",
        unit: "Excl. VAT · one time",
        text: "Configuration, a menu supplied in a usable format and remote training. Complex data migration and travel are quoted separately.",
      },
      {
        key: "training",
        title: "On-site training",
        unit: "Excl. VAT / day",
        text: "One day with your team, in addition to standard setup. Any travel charges are specified in your quote.",
      },
    ],
    hardwareTitle: "Hardware that fits your service",
    hardwareText:
      "Tablets, Verifone terminals and accessories are quoted for your setup. Kitchen ticket printing for online orders is a paid add-on, with a compatible Epson or Star Micronics printer and configuration quoted separately. Existing devices can be retained after a compatibility check.",
    paymentsTitle: "Payments priced separately",
    paymentsText:
      "Your proposal separates Victa hardware, the Foody device licence, EMV service and payment processing fees. Rates and fixed fees depend on the provider, card types, payment channels and agreement.",
    usageTitle: "Usage and specialist requirements",
    usageText:
      "Delivery management is included in Foody Orders, on its own or with Foody Restaurant. Courier services, SMS, kiosks, third-party integrations and external platform commissions are quoted separately.",
    faq: [
      {
        q: "Does Foody POS include online orders?",
        a: "No. Choose standalone Foody Orders to sell online without a POS for ₪590 per month per location, excluding VAT. Foody Orders and QR ordering are also included in Foody Restaurant at ₪890 per month per location, excluding VAT, with two POS device licences, and in Foody Restaurant & Kitchen.",
      },
      {
        q: "What is the difference between Foody Kitchen and Foody Companion?",
        a: "Foody Kitchen brings together recipes, food cost, stock, suppliers and preparation tracking. Foody Companion is its everyday assistant for priorities, prep, service and closing. It is included at no extra charge in standalone Foody Kitchen and Foody Restaurant & Kitchen. Siri voice access requires a compatible iPad and activation in Foody.",
      },
      {
        q: "Is there an extra cloud base fee?",
        a: "No. Every plan includes cloud hosting, backups, updates, back office and Foody support. Prices shown are monthly, per location, excluding VAT.",
      },
      {
        q: "What is the commitment?",
        a: "Software subscriptions are billed monthly and can be cancelled with 30 days’ notice. Your launch subscription price is fixed for the first 12 months. Hardware and payment agreements have their own terms, presented separately.",
      },
      {
        q: "What does 0% order commission mean?",
        a: "Foody charges no commission on website or QR orders included in Foody Restaurant and Foody Restaurant & Kitchen plans. Card processing, delivery, SMS and any third-party platform commissions remain separate.",
      },
      {
        q: "Is a POS licence counted per device or per staff member?",
        a: "A POS station is a device running Foody: a counter POS, a waiter’s tablet or a Victa used to take orders and payments. One counter POS and two waiter devices count as three stations. Staff accounts are separate from licences: several staff members can take turns on the same device using their own access. Foody POS includes one licence; Foody Restaurant and Foody Restaurant & Kitchen include two. Each additional licence costs ₪99 per month, excluding VAT. A Victa counts once, even when used for both orders and payments. Hardware, EMV service and processing fees remain separate.",
      },
      {
        q: "Can I use Foody Kitchen on its own?",
        a: "Yes, for ₪890 per month per location, excluding VAT, with cloud and Foody Companion included. It covers recipes, food cost, stock and suppliers. Synchronisation with your existing POS depends on compatibility and is quoted separately.",
      },
    ],
  },
  he: {
    title: "מחירים ברורים.\nמהיום הראשון.",
    description:
      "קופת Foody החל מ־590 ₪ לחודש לפני מע״מ בישראל. ענן, משרד אחורי ותמיכה כלולים. בחרו את הכלים שמתאימים לעסק שלכם.",
    launch: "מחירי השקה",
    featuredLabel: "לשירות במסעדה ולהזמנות אונליין",
    monthly: "/ חודש",
    unit: "לפני מע״מ, לכל סניף",
    quote: "בהצעת מחיר",
    demo: "לתיאום הדגמה",
    homeLink: "למסלולים ולמחירים שלנו",
    promises: [
      "תשתית הענן כלולה",
      "חיוב חודשי",
      "מחיר התוכנה קבוע ל־12 חודשים",
    ],
    plans: [
      {
        key: "pos",
        title: ui.he.pos,
        text: "לחנויות, לבתי קפה ולמכירה בדלפק.",
        items: [
          "רישיון לעמדת קופה אחת כלול",
          "קופה, קטלוג וניהול שולחנות",
          "משרד אחורי ואפליקציית בעלים",
          "דוחות מכירות",
          "ענן, גיבויים, עדכונים ותמיכת Foody",
        ],
      },
      {
        key: "restaurant",
        title: ui.he.restaurantPlan,
        text: "לחיבור השירות במסעדה וההזמנות אונליין.",
        items: [
          "כל מסלול Foody קופה, עם 2 רישיונות לעמדות",
          "הזמנה ב־QR מהשולחן",
          "Foody הזמנות כלול, עם אתר הזמנות במיתוג שלכם",
          "הזמנות להיום והזמנות מראש, לאיסוף ולמשלוח",
          "0% עמלת Foody על הזמנות אונליין",
        ],
      },
      {
        key: "complete",
        title: ui.he.completePlan,
        text: "לניהול השירות ולמעקב אחרי עלויות ההכנה.",
        items: [
          "כל מסלול Foody מסעדה, עם 2 רישיונות לעמדות",
          "מתכונים וכרטיסי הכנה",
          "Food Cost ומעקב עלויות",
          "מלאי וספירות מלאי",
          "ספקים והכנת הזמנות רכש",
          "Foody Companion, העוזר היומיומי למטבח, כלול במסלול",
        ],
      },
    ],
    licences:
      "עמדת קופה היא מכשיר שמשמש כקופת Foody, בדלפק או בידי המלצר. כמה עובדים יכולים להתחלף באותה עמדה, כל אחד עם הרשאות הגישה שלו. גישה למשרד האחורי, מעקב הכנות וניהול משלוחים אינם נספרים כעמדות קופה.",
    exclusions:
      "המחירים כוללים תוכנה. חומרה, הקמה, שירותי EMV, סליקה, שירותי חברות משלוחים ו־SMS מתומחרים בנפרד לפי הצורך. עמלות תשלום בכרטיס חלות גם כאשר עמלת Foody היא 0%.",
    ordering: {
      title: ui.he.ordering,
      text: "למכור אונליין, להכין ולשלוח הזמנות, ללא צורך בקופת POS.",
      items: [
        "אתר הזמנות במיתוג שלכם",
        "הזמנות להיום והזמנות מראש במרוכז",
        "כמויות להכנה ואריזה לפי לקוח",
        "ניהול איסוף ומשלוחים",
        "משרד אחורי, ענן ותמיכת Foody",
      ],
      note: "זמין כמסלול עצמאי וכלול ב־Foody מסעדה. הדפסת פתקים במטבח היא תוספת בתשלום. ציוד, הגדרה, עמלות סליקה ושירותי חברות משלוחים מתומחרים בנפרד.",
      link: "לגלות את Foody הזמנות",
    },
    kitchen: {
      title: "נשארים עם הקופה.\nמוסיפים Foody Kitchen.",
      text: "מתכונים, Food Cost, מלאי וספקים, עם תשתית ענן כלולה. Foody Companion כלול ומלווה את הצוות לפני, בזמן ואחרי השירות.",
      note: "מסלול Foody Kitchen אינו כולל את Foody קופה. חיבור לקופה של ספק אחר מחייב בדיקת התאמה טכנית והצעת מחיר נפרדת.",
      link: "לגלות את Foody Kitchen",
    },
    networks: {
      title: "כמה סניפים.\nהדרך שלכם לעבוד.",
      text: "רשתות, קבוצות, ייצור מרכזי, קייטרינג ולוגיסטיקה: ההצעה נקבעת לפי הסניפים, הכלים, החיבורים והליווי הנדרשים.",
      link: "בואו נדבר על הפרויקט",
    },
    costsTitle: "כל עלות,\nבמקום שלה.",
    costsText:
      "השירותים והתוספות הבאים נפרדים מהמנוי. המחירים לפני מע״מ והיקף כל שירות נקבע לפני תחילת ההקמה.",
    costs: [
      {
        key: "extraPos",
        title: "עמדת קופה נוספת",
        unit: "לפני מע״מ / חודש / עמדה",
        text: "למכשיר Foody נוסף בדלפק או בידי המלצר, בטאבלט או ב־Victa. החומרה נרכשת בנפרד. הרישיונות הכלולים במסלול אינם מחויבים שוב.",
      },
      {
        key: "setup",
        title: "הקמה סטנדרטית",
        unit: "לפני מע״מ · חד־פעמי",
        text: "הגדרת המערכת, תפריט שסופק בפורמט מתאים והדרכה מרחוק. העברת נתונים מורכבת והגעה לעסק בהצעת מחיר נפרדת.",
      },
      {
        key: "training",
        title: "הדרכה בעסק",
        unit: "לפני מע״מ / יום",
        text: "יום הדרכה עם הצוות שלכם, בנוסף להקמה הסטנדרטית. הוצאות נסיעה, ככל שישנן, מפורטות בהצעה.",
      },
    ],
    hardwareTitle: "הציוד שמתאים לשירות שלכם",
    hardwareText:
      "טאבלטים, מסופי Verifone ואביזרים מתומחרים לפי התצורה שלכם. הדפסת פתקים במטבח להזמנות אונליין היא תוספת בתשלום, עם מדפסת Epson או Star Micronics תואמת והגדרה המתומחרות בנפרד. אפשר לשמור ציוד קיים לאחר בדיקת התאמה.",
    paymentsTitle: "התשלומים מתומחרים בנפרד",
    paymentsText:
      "ההצעה מפרידה בין חומרת Victa, רישיון Foody במכשיר, שירות EMV ועמלות סליקה. התעריפים והעלויות הקבועות תלויים בספק, בסוגי הכרטיסים, בערוצי התשלום ובהסכם.",
    usageTitle: "שימושים וצרכים מיוחדים",
    usageText:
      "ניהול משלוחים כלול ב־Foody הזמנות, כמסלול עצמאי או עם Foody מסעדה. שירותי חברות משלוחים, SMS, קיוסקים, חיבורים לספקים חיצוניים ועמלות פלטפורמות חיצוניות מתומחרים בנפרד.",
    faq: [
      {
        q: "מסלול Foody קופה כולל הזמנות אונליין?",
        a: "לא. למכירה אונליין ללא קופת POS, בחרו ב־Foody הזמנות כמסלול עצמאי, במחיר 590 ₪ לחודש לכל סניף לפני מע״מ. Foody הזמנות והזמנה ב־QR כלולים גם ב־Foody מסעדה, במחיר 890 ₪ לחודש לכל סניף לפני מע״מ עם שני רישיונות קופה, וב־Foody מסעדה ומטבח.",
      },
      {
        q: "מה ההבדל בין Foody Kitchen ל־Foody Companion?",
        a: "Foody Kitchen מרכז מתכונים, Food Cost, מלאי, ספקים ומעקב הכנות. Foody Companion הוא העוזר היומיומי לתעדוף, הכנות, שירות וסגירה. הוא כלול ללא תוספת תשלום ב־Foody Kitchen העצמאי ובמסלול Foody מסעדה ומטבח. גישה קולית עם Siri דורשת iPad תואם והפעלה ב־Foody.",
      },
      {
        q: "צריך להוסיף תשלום על תשתית הענן?",
        a: "לא. כל מסלול כולל ענן, גיבויים, עדכונים, משרד אחורי ותמיכת Foody. המחירים המוצגים הם לחודש ולכל סניף, לפני מע״מ.",
      },
      {
        q: "מהי תקופת ההתחייבות?",
        a: "מנויי התוכנה מחויבים מדי חודש וניתנים לביטול בהודעה מוקדמת של 30 יום. מחיר ההשקה של המנוי קבוע ל־12 החודשים הראשונים. לחומרה ולהסכמי התשלום יש תנאים נפרדים, המוצגים בנפרד.",
      },
      {
        q: "מה המשמעות של 0% עמלה על הזמנות?",
        a: "Foody אינה גובה עמלה על הזמנות מהאתר או ב־QR הכלולות במסלולי Foody מסעדה ו־Foody מסעדה ומטבח. עמלות סליקה, משלוחים, SMS ועמלות של פלטפורמות חיצוניות, ככל שישנן, מחויבות בנפרד.",
      },
      {
        q: "רישיון קופה נספר לפי מכשיר או לפי עובד?",
        a: "עמדה היא מכשיר עם אפליקציית Foody: קופה בדלפק, טאבלט מלצר או Victa לקבלת הזמנות ותשלומים. קופה אחת בדלפק ושני מכשירי מלצרים הם שלוש עמדות. חשבונות העובדים נפרדים מהרישיונות: כמה עובדים יכולים להתחלף באותו מכשיר, כל אחד עם הרשאות הגישה שלו. מסלול Foody קופה כולל רישיון אחד; מסלולי Foody מסעדה ו־Foody מסעדה ומטבח כוללים שניים. כל רישיון נוסף עולה 99 ₪ לחודש לפני מע״מ. Victa נספר פעם אחת, גם כשמשמש להזמנות וגם לתשלום. החומרה, שירות ה־EMV והסליקה נפרדים.",
      },
      {
        q: "אפשר להשתמש רק ב־Foody Kitchen?",
        a: "כן, ב־890 ₪ לחודש לכל סניף לפני מע״מ, כולל ענן ו־Foody Companion. המסלול כולל מתכונים, Food Cost, מלאי וספקים. סנכרון עם הקופה הקיימת תלוי בהתאמה טכנית ובהצעת מחיר נפרדת.",
      },
    ],
  },
};
