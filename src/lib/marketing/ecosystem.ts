import type { Lang } from "@/lib/seo";
import type { Solution } from "./content";

/** Editorial copy for the cloud, hardware and kitchen experiences. */
export const ecosystem = {
  fr: {
    sample: "Illustration avec données de démonstration",
    cloudTitle: "Votre caisse est ici.\nVotre activité est dans le cloud.",
    cloudText:
      "Foody est une plateforme entièrement cloud. La caisse tourne sur iPad et Android ; les commandes, le catalogue et la gestion se retrouvent dans le même écosystème. Au comptoir, en salle ou à distance, chacun accède aux outils de son rôle.",
    cloudNote:
      "Les services cloud et les paiements connectés nécessitent une connexion Internet. Le matériel et les versions compatibles sont vérifiés lors de l’installation.",
    cloudLabels: [
      "Caisse iPad",
      "Caisse Android",
      "Service sur Victa",
      "Cuisine",
      "Site et QR",
      "Gestion à distance",
    ],
    cloudCenter: "Une plateforme cloud",
    cloudLink: "Découvrir la caisse cloud",
    equipmentSetup:
      "Imprimantes, tiroirs et accessoires sélectionnés selon vos postes de travail, avec une installation qui relie le comptoir à la cuisine.",
    equipmentTitle: "Le bon matériel.\nÀ chaque poste.",
    equipmentText:
      "Partenaire et intégrateur Star Micronics et Epson, Foody relie votre caisse aux imprimantes de reçus, aux bons de cuisine et aux accessoires adaptés à votre établissement.",
    equipmentLink: "Explorer le matériel et les imprimantes",
    equipmentPartner: "Partenaire et intégrateur Star Micronics et Epson",
    epsonTitle: "Epson TM-U220.\nLe bon arrive. La cuisine avance.",
    epsonText:
      "Du bistrot à la restauration gastronomique, chaque détail du bon compte. Nous intégrons la famille TM-U220, dont la TM-U220II, aux cuisines en Israël : impression à impact sur papier ordinaire, ruban et son distinctif pour repérer une nouvelle commande pendant le service.",
    epsonPoints: [
      "Bons dirigés vers la cuisine, le bar ou la passe",
      "Impression à impact pour les commandes en cuisine",
      "Installation et routage configurés avec votre équipe",
    ],
    epsonNote:
      "La connexion directe au cloud requiert une variante intelligente compatible ou une passerelle Epson. Les modèles standard ne disposent pas tous de Server Direct Print.",
    starText:
      "La mC-Print3 met l’impression des reçus dans un format compact. Nous choisissons le modèle et la connexion adaptés à votre caisse iPad ou Android, ainsi que les accessoires nécessaires.",
    equipmentNote:
      "Modèles présentés à titre d’exemple. Interfaces, accessoires et disponibilité selon la configuration retenue.",
    printerGuide: "Voir le guide d’installation Epson",
    serviceTitle: "Une table. Un serveur.\nUn seul appareil.",
    serviceSummary:
      "Avec l’application officielle Foody sur Victa Portable, tout le service se fait depuis un seul appareil.",
    serviceSummarySteps: ["Commande", "Paiement", "Reçu"],
    serviceText:
      "L’application officielle Foody s’intègre au Victa Portable. Le serveur prend la commande, encaisse et remet le reçu depuis le même appareil, au plus près du client.",
    serviceSteps: [
      "Prendre la commande",
      "Encaisser à table",
      "Remettre le reçu",
    ],
    serviceDetails: [
      "Retrouvez la table, les plats, les suppléments et les notes dans Foody.",
      "Passez au paiement lié à la commande, sur le terminal que vous avez déjà en main.",
      "Imprimez le reçu sur l’imprimante intégrée au Victa Portable.",
    ],
    serviceNote:
      "Application Foody, service de paiement et imprimante intégrée configurés sur les appareils compatibles.",
    table: "Table 08",
    dishes: ["Salade méditerranéenne", "Cappuccino"],
    orderSent: "Commande transmise",
    payment: "Paiement à table",
    paid: "Paiement confirmé",
    receipt: "Reçu client",
    thanks: "Merci de votre visite",
    companionTitle: "Le compagnon du chef.\nAvant, pendant, après le service.",
    companionText:
      "Un fil conducteur pour la journée en cuisine : les préparations à lancer, les priorités du service, les stocks à vérifier et les commandes fournisseurs à préparer pour demain.",
    companionLink: "Rencontrer le compagnon cuisine",
    phases: ["Avant le service", "Pendant le service", "Après le service"],
    phaseDescriptions: [
      "Priorisez les préparations, les quantités et la mise en place avant l’arrivée des clients.",
      "Gardez les besoins, les disponibilités et les alertes de stock à portée de main pendant le service.",
      "Clôturez avec les comptages, les pertes et les écarts, puis préparez les besoins fournisseurs du lendemain.",
    ],
    phaseTitle: [
      "La mise en place, dans le bon ordre.",
      "Le prochain geste, au bon moment.",
      "Fermer aujourd’hui. Préparer demain.",
    ],
    phaseItems: [
      ["Sauce tomate · 12 litres", "Légumes · 8 kg", "Focaccia · 40 portions"],
      [
        "Contrôler les préparations disponibles",
        "Repérer les besoins du prochain service",
        "Consulter les alertes de stock",
      ],
      [
        "Compter les stocks et noter les pertes",
        "Comparer prévu et réalisé",
        "Préparer les commandes fournisseurs",
      ],
    ],
    phaseLabel: [
      "Plan de production",
      "Suivi du service",
      "Clôture et fournisseurs",
    ],
    voiceTitle: "Les mains en cuisine.\nSiri fait le point.",
    voiceText:
      "Sur iPad, demandez un briefing Foody, consultez les stocks ou les livraisons attendues, et laissez une note à la cuisine. L’information vous accompagne sans interrompre votre geste.",
    voicePrompt: "Dis Siri, fais le point cuisine dans Foody.",
    voiceAnswer:
      "Voici les priorités de votre cuisine, les stocks à surveiller et les livraisons attendues.",
    voiceExamples: [
      "Fais le bilan des stocks dans Foody.",
      "Vérifie les livraisons dans Foody.",
      "Laisse une note à la cuisine dans Foody.",
    ],
    voiceNote:
      "Siri et les widgets nécessitent un iPad sous iPadOS 18 ou ultérieur, l’activation dans Foody et les autorisations du compte. Les actions sensibles restent soumises à confirmation.",
    voiceLabel: "Exemple de briefing vocal",
    routeTitle: "Du téléphone de votre client\nau bon poste en cuisine.",
    routeText:
      "Un parcours de commande à votre marque, avec le menu, les options et les modes de service que vous avez choisis. Le statut du paiement accompagne la commande jusqu’à votre équipe.",
    routeSteps: [
      "Le client commande",
      "Le paiement est confirmé",
      "L’équipe prépare",
    ],
    guest: "Votre restaurant",
    pickup: "À emporter",
    delivery: "Livraison",
    pickupNote: "Retrait au restaurant",
    deliveryNote: "Adresse et zone vérifiées à la commande",
    menu: "À la carte",
    basket: "Votre panier",
    retailTitle: "Un panier clair.\nUn comptoir qui respire.",
    retailText:
      "Retrouvez les articles, leurs prix et le total de la vente. La caisse cloud sur tablette garde sa place, même sur un petit comptoir, avec un terminal et une imprimante adaptés.",
    retailItems: [
      "Tasse en céramique",
      "Café en grains · 250 g",
      "Sac en coton",
    ],
    catalog: "Catalogue boutique",
    total: "Total",
    counter: "Caisse boutique",
    chainTitle: "La production se prépare.\nLes équipes savent quoi faire.",
    chainText:
      "Préparations, quantités et besoins en matières premières donnent un cadre commun au travail de chaque établissement. Les accès restent définis par restaurant et par rôle.",
    branches: ["Tel Aviv", "Haïfa", "Jérusalem"],
    plan: "Plans par établissement",
    preparation: "Préparation",
    quantity: "Quantité prévue",
    supplier: "Fournisseur",
    supplierItems: ["Maraîcher", "Crémier", "Épicerie"],
    recipeTitle: "Une recette.\nUne vue précise du coût.",
    recipeText:
      "Reliez chaque ingrédient à son prix d’achat, puis comparez le coût de la recette au prix de vente. Le compagnon prend le relais pour suivre les préparations pendant la journée.",
    recipe: "Fiche recette",
    ingredients: ["Légumes et herbes", "Fromage", "Assaisonnement"],
    foodcost: "Coût matière",
    price: "Prix de vente HT",
    recipeNote:
      "Exemple HT : 11,20 ₪ ÷ 40 ₪ = 28 %. Ce taux ne représente pas le bénéfice net.",
    paymentTitle: "Chaque paiement\nretrouve sa commande.",
    paymentText:
      "Au comptoir, à table ou en ligne, le parcours de paiement reste lié à la vente. Nous vous accompagnons dans le choix du prestataire et des conditions de slika.",
    channels: ["Au comptoir", "À table", "En ligne"],
    linked: "Commande et paiement liés",
  },
  en: {
    sample: "Illustration with sample data",
    cloudTitle: "Your till is here.\nYour business is in the cloud.",
    cloudText:
      "Foody is a fully cloud-based platform. The POS runs on iPad and Android, with orders, catalogues and management in one ecosystem. At the counter, on the floor or remotely, each person accesses the tools for their role.",
    cloudNote:
      "Cloud services and connected payments require Internet access. Compatible devices and software versions are checked during setup.",
    cloudLabels: [
      "iPad POS",
      "Android POS",
      "Service on Victa",
      "Kitchen",
      "Website and QR",
      "Remote management",
    ],
    cloudCenter: "One cloud platform",
    cloudLink: "Explore cloud POS",
    equipmentSetup:
      "Printers, drawers and accessories selected for your workstations, with a setup that connects the counter to the kitchen.",
    equipmentTitle: "The right hardware.\nAt every station.",
    equipmentText:
      "As a Star Micronics and Epson partner and integrator, Foody connects your POS with receipt printers, kitchen tickets and accessories suited to your business.",
    equipmentLink: "Explore hardware and printers",
    equipmentPartner: "Star Micronics and Epson partner and integrator",
    epsonTitle: "Epson TM-U220.\nThe ticket arrives. The kitchen moves.",
    epsonText:
      "From neighbourhood bistros to fine dining, every detail on the ticket matters. We integrate the TM-U220 family, including TM-U220II, into kitchens in Israel: impact printing on plain paper, a ribbon and a distinctive sound to draw attention to incoming orders.",
    epsonPoints: [
      "Tickets routed to the kitchen, bar or pass",
      "Impact printing for kitchen orders",
      "Setup and routing planned with your team",
    ],
    epsonNote:
      "Direct cloud printing requires a compatible intelligent model or Epson gateway. Not every standard model includes Server Direct Print.",
    starText:
      "The mC-Print3 brings receipt printing to a compact footprint. We select the model, connection and accessories that suit your iPad or Android POS.",
    equipmentNote:
      "Illustrative model selection. Interfaces, accessories and availability depend on the chosen setup.",
    printerGuide: "Read the Epson setup guide",
    serviceTitle: "One table. One server.\nOne device.",
    serviceSummary:
      "With the official Foody app on Victa Portable, your server handles the whole service on one device.",
    serviceSummarySteps: ["Order", "Payment", "Receipt"],
    serviceText:
      "The official Foody app runs on Victa Portable. Your server takes the order, accepts payment and provides the receipt from the same device, right beside the customer.",
    serviceSteps: ["Take the order", "Accept payment", "Provide the receipt"],
    serviceDetails: [
      "Open the table, dishes, modifiers and notes in Foody.",
      "Move to the payment linked to the order on the terminal already in your hand.",
      "Print the receipt with the printer built into Victa Portable.",
    ],
    serviceNote:
      "Foody, payment services and the integrated printer are configured on compatible devices.",
    table: "Table 08",
    dishes: ["Mediterranean salad", "Cappuccino"],
    orderSent: "Order sent",
    payment: "Payment at the table",
    paid: "Payment confirmed",
    receipt: "Customer receipt",
    thanks: "Thank you for visiting",
    companionTitle: "The chef’s companion.\nBefore, during and after service.",
    companionText:
      "A guide through the kitchen day: preparations to start, service priorities, stock to check and supplier orders to prepare for tomorrow.",
    companionLink: "Meet the kitchen companion",
    phases: ["Before service", "During service", "After service"],
    phaseDescriptions: [
      "Prioritise preparations, quantities and mise en place before guests arrive.",
      "Keep needs, available preparations and stock alerts within reach during service.",
      "Close with counts, waste and variances, then prepare tomorrow’s supplier needs.",
    ],
    phaseTitle: [
      "Prep, in the right order.",
      "The next move, at the right time.",
      "Close today. Prepare tomorrow.",
    ],
    phaseItems: [
      [
        "Tomato sauce · 12 litres",
        "Vegetables · 8 kg",
        "Focaccia · 40 portions",
      ],
      [
        "Check available preparations",
        "Spot the next service’s needs",
        "Review stock alerts",
      ],
      [
        "Count stock and record waste",
        "Compare planned and actual usage",
        "Prepare supplier orders",
      ],
    ],
    phaseLabel: [
      "Production plan",
      "Service overview",
      "Closing and suppliers",
    ],
    voiceTitle: "Hands in the kitchen.\nSiri brings the briefing.",
    voiceText:
      "On iPad, ask for a Foody briefing, check stock or expected deliveries, and leave a kitchen handover note. Get the information without breaking your stride.",
    voicePrompt: "Hey Siri, give me my kitchen briefing in Foody.",
    voiceAnswer:
      "Here are your kitchen priorities, stock to watch and expected deliveries.",
    voiceExamples: [
      "Review my kitchen stocks in Foody.",
      "Check my kitchen deliveries in Foody.",
      "Leave a kitchen note in Foody.",
    ],
    voiceNote:
      "Siri and widgets require an iPad with iPadOS 18 or later, activation in Foody and account permissions. Sensitive actions still require confirmation.",
    voiceLabel: "Illustrative voice briefing",
    routeTitle: "From your customer’s phone\nto the right kitchen station.",
    routeText:
      "A branded ordering journey with your menu, options and service types. Payment status follows the order through to your team.",
    routeSteps: [
      "The guest orders",
      "Payment is confirmed",
      "The team prepares",
    ],
    guest: "Your restaurant",
    pickup: "Pickup",
    delivery: "Delivery",
    pickupNote: "Collect at the restaurant",
    deliveryNote: "Address and delivery area checked at checkout",
    menu: "Our menu",
    basket: "Your basket",
    retailTitle: "A clear basket.\nMore room at the counter.",
    retailText:
      "Find your items, prices and sale total. A cloud POS on a tablet fits even a small counter, paired with the right terminal and printer.",
    retailItems: ["Ceramic cup", "Coffee beans · 250 g", "Cotton tote"],
    catalog: "Shop catalogue",
    total: "Total",
    counter: "Shop POS",
    chainTitle: "Production gets a plan.\nTeams know what comes next.",
    chainText:
      "Preparations, quantities and ingredient needs give each location a structured way to work. Access remains scoped to each restaurant and role.",
    branches: ["Tel Aviv", "Haifa", "Jerusalem"],
    plan: "Plans by location",
    preparation: "Preparation",
    quantity: "Planned quantity",
    supplier: "Supplier",
    supplierItems: ["Produce supplier", "Dairy supplier", "Dry goods supplier"],
    recipeTitle: "One recipe.\nA clear view of cost.",
    recipeText:
      "Connect every ingredient to its purchase price, then compare recipe cost with the selling price. The companion takes over to guide preparation through the day.",
    recipe: "Recipe card",
    ingredients: ["Vegetables and herbs", "Cheese", "Dressing"],
    foodcost: "Ingredient cost",
    price: "Selling price, excl. VAT",
    recipeNote:
      "Example excluding VAT: ₪11.20 ÷ ₪40 = 28%. This is not net profit.",
    paymentTitle: "Every payment\nconnects to its order.",
    paymentText:
      "At the counter, at the table or online, the payment journey stays linked to the sale. We help you select the provider and processing terms.",
    channels: ["At the counter", "At the table", "Online"],
    linked: "Order and payment connected",
  },
  he: {
    sample: "המחשה עם נתונים לדוגמה",
    cloudTitle: "הקופה כאן.\nהעסק שלכם בענן.",
    cloudText:
      "Foody היא פלטפורמה המבוססת כולה על הענן. הקופה פועלת על iPad ועל Android, וההזמנות, הקטלוג והניהול מתחברים לאותה מערכת. בדלפק, באולם או מרחוק — כל אחד מקבל גישה לכלים שמתאימים לתפקיד שלו.",
    cloudNote:
      "שירותי הענן והתשלומים המקוונים דורשים חיבור לאינטרנט. התאמת המכשירים וגרסאות התוכנה נבדקת בזמן ההקמה.",
    cloudLabels: [
      "קופה ב־iPad",
      "קופה ב־Android",
      "שירות עם Victa",
      "מטבח",
      "אתר ו־QR",
      "ניהול מרחוק",
    ],
    cloudCenter: "פלטפורמת ענן אחת",
    cloudLink: "לגלות את הקופה בענן",
    equipmentSetup:
      "מדפסות, מגירות ואביזרים שנבחרים לפי עמדות העבודה, בהתקנה שמחברת את הדלפק למטבח.",
    equipmentTitle: "הציוד הנכון.\nבכל עמדה.",
    equipmentText:
      "כשותף ואינטגרטור של Star Micronics ושל Epson, אנחנו מחברים את הקופה למדפסות קבלות, לבוני המטבח ולאביזרים שמתאימים לעסק שלכם.",
    equipmentLink: "לגלות את הציוד והמדפסות",
    equipmentPartner: "שותף ואינטגרטור של Star Micronics ושל Epson",
    epsonTitle: "Epson TM-U220.\nהבון מגיע. המטבח מתקדם.",
    epsonText:
      "מביסטרו שכונתי ועד למסעדת שף, כל פרט בבון חשוב. אנחנו משלבים את משפחת TM-U220, כולל TM-U220II, במטבחים בישראל: הדפסת סיכות על נייר רגיל, סרט דיו וצליל מובחן שמסייע לזהות הזמנה חדשה בזמן השירות.",
    epsonPoints: [
      "בונים מנותבים למטבח, לבר או לפס",
      "הדפסת סיכות להזמנות המטבח",
      "התקנה וניתוב שמתוכננים עם הצוות",
    ],
    epsonNote:
      "חיבור ישיר לענן דורש דגם חכם תואם או שער Epson מתאים. לא כל דגם רגיל כולל Server Direct Print.",
    starText:
      "mC-Print3 מרכזת את הדפסת הקבלות במבנה קומפקטי. אנחנו מתאימים את הדגם, החיבור והאביזרים לקופה שלכם ב־iPad או ב־Android.",
    equipmentNote:
      "הדגמים מוצגים להמחשה. החיבורים, האביזרים והזמינות תלויים בתצורה שנבחרה.",
    printerGuide: "למדריך ההתקנה של Epson",
    serviceTitle: "שולחן אחד. מלצר אחד.\nמכשיר אחד.",
    serviceSummary:
      "אפליקציית Foody הרשמית ב־Victa Portable מרכזת את כל השירות במכשיר אחד.",
    serviceSummarySteps: ["הזמנה", "תשלום", "קבלה"],
    serviceText:
      "אפליקציית Foody הרשמית משולבת ב־Victa Portable. המלצר מקבל הזמנה, גובה תשלום ומוסר קבלה מאותו מכשיר — לצד האורח.",
    serviceSteps: ["מקבלים הזמנה", "גובים תשלום בשולחן", "מוסרים קבלה"],
    serviceDetails: [
      "פותחים את השולחן, המנות, התוספות וההערות ב־Foody.",
      "עוברים לתשלום שמקושר להזמנה במסוף שכבר נמצא ביד.",
      "מדפיסים את הקבלה במדפסת המובנית של Victa Portable.",
    ],
    serviceNote:
      "אפליקציית Foody, שירות התשלום והמדפסת המובנית מוגדרים במכשירים תואמים.",
    table: "שולחן 08",
    dishes: ["סלט ים תיכוני", "קפה הפוך"],
    orderSent: "ההזמנה נשלחה",
    payment: "תשלום בשולחן",
    paid: "התשלום אושר",
    receipt: "קבלה ללקוח",
    thanks: "תודה שביקרתם",
    companionTitle: "השותף של השף.\nלפני, בזמן ואחרי השירות.",
    companionText:
      "ליווי לאורך יום העבודה במטבח: מה להכין, במה להתמקד בשירות, איזה מלאי לבדוק ואילו הזמנות ספקים להכין למחר.",
    companionLink: "להכיר את מלווה המטבח",
    phases: ["לפני השירות", "בזמן השירות", "אחרי השירות"],
    phaseDescriptions: [
      "מתעדפים הכנות, כמויות והיערכות לפני הגעת האורחים.",
      "רואים את הצרכים, ההכנות הזמינות והתראות המלאי לאורך השירות.",
      "מסיימים עם ספירות, פחת ופערים, ומתכננים את צורכי הספקים למחר.",
    ],
    phaseTitle: [
      "מכינים את המטבח, לפי סדר עדיפויות.",
      "הפעולה הבאה, בזמן הנכון.",
      "מסיימים את היום. מתכוננים למחר.",
    ],
    phaseItems: [
      ["רוטב עגבניות · 12 ליטר", "ירקות · 8 ק״ג", "פוקצ׳ה · 40 מנות"],
      [
        "בודקים את ההכנות הזמינות",
        "מזהים את צורכי השירות הבא",
        "בודקים התראות מלאי",
      ],
      [
        "סופרים מלאי ומתעדים פחת",
        "משווים בין תכנון לביצוע",
        "מכינים הזמנות לספקים",
      ],
    ],
    phaseLabel: ["תוכנית ייצור", "מעקב שירות", "סגירה וספקים"],
    voiceTitle: "הידיים במטבח.\nSiri מעדכנת.",
    voiceText:
      "ב־iPad אפשר לבקש תדריך של Foody, לבדוק מלאי ומשלוחים צפויים ולהשאיר הערה לצוות המטבח. המידע מגיע אליכם בלי לעצור את העבודה.",
    voicePrompt: "היי Siri, סקירת מטבח ב־Foody.",
    voiceAnswer:
      "הנה סדר העדיפויות במטבח, המלאי שכדאי לבדוק והמשלוחים הצפויים.",
    voiceExamples: [
      "סקירת מלאי המטבח ב־Foody.",
      "בדיקת משלוחים ב־Foody.",
      "השאר הערה למטבח ב־Foody.",
    ],
    voiceNote:
      "Siri והווידג׳טים דורשים iPad עם iPadOS 18 ומעלה, הפעלה ב־Foody והרשאות מתאימות בחשבון. פעולות רגישות עדיין דורשות אישור.",
    voiceLabel: "המחשה של תדריך קולי",
    routeTitle: "מהטלפון של הלקוח\nלעמדה הנכונה במטבח.",
    routeText:
      "תהליך הזמנה ממותג עם התפריט, האפשרויות וסוגי השירות שבחרתם. סטטוס התשלום מלווה את ההזמנה עד לצוות.",
    routeSteps: ["הלקוח מזמין", "התשלום מאושר", "הצוות מכין"],
    guest: "המסעדה שלכם",
    pickup: "איסוף עצמי",
    delivery: "משלוח",
    pickupNote: "איסוף מהמסעדה",
    deliveryNote: "הכתובת ואזור המשלוח נבדקים בהזמנה",
    menu: "התפריט שלנו",
    basket: "הסל שלכם",
    retailTitle: "סל קנייה ברור.\nיותר מקום בדלפק.",
    retailText:
      "מוצאים את הפריטים, המחירים וסכום המכירה. קופת הענן על הטאבלט מתאימה גם לדלפק קטן, עם מסוף ומדפסת שנבחרו לעסק.",
    retailItems: ["ספל קרמיקה", "פולי קפה · 250 גרם", "תיק כותנה"],
    catalog: "קטלוג החנות",
    total: "סה״כ",
    counter: "קופת החנות",
    chainTitle: "הייצור מתוכנן.\nהצוותים יודעים מה להכין.",
    chainText:
      "הכנות, כמויות וצריכת חומרי גלם נותנות מסגרת מסודרת לעבודה בכל סניף. הגישה נשארת מוגדרת לפי מסעדה ותפקיד.",
    branches: ["תל אביב", "חיפה", "ירושלים"],
    plan: "תוכניות לפי סניף",
    preparation: "הכנה",
    quantity: "כמות מתוכננת",
    supplier: "ספק",
    supplierItems: ["ספק ירקות", "ספק מוצרי חלב", "ספק מוצרים יבשים"],
    recipeTitle: "מתכון אחד.\nתמונה ברורה של העלות.",
    recipeText:
      "מחברים כל רכיב למחיר הקנייה שלו ומשווים את עלות המתכון למחיר המכירה. מלווה המטבח ממשיך איתכם למעקב אחר ההכנות לאורך היום.",
    recipe: "כרטיס מתכון",
    ingredients: ["ירקות ועשבי תיבול", "גבינה", "רוטב"],
    foodcost: "עלות חומרי גלם",
    price: "מחיר מכירה ללא מע״מ",
    recipeNote: "דוגמה ללא מע״מ: 11.20 ₪ ÷ 40 ₪ = 28%. הנתון אינו הרווח הנקי.",
    paymentTitle: "כל תשלום\nמחובר להזמנה שלו.",
    paymentText:
      "בדלפק, בשולחן או באתר — התשלום נשאר מקושר למכירה. אנחנו מלווים את בחירת הספק ותנאי הסליקה.",
    channels: ["בדלפק", "בשולחן", "אונליין"],
    linked: "ההזמנה והתשלום מחוברים",
  },
} satisfies Record<Lang, Record<string, string | string[] | string[][]>>;

export const additionalSolutions: Record<
  Lang,
  Record<"equipment" | "companion", Solution>
> = Object.fromEntries(
  (["he", "fr", "en"] as const).map((lang) => {
    const t = ecosystem[lang];
    const titles = {
      he: [
        "מדפסות Epson ו־Star Micronics לעסקים בישראל",
        "מלווה מטבח למסעדות עם Siri ב־iPad",
      ],
      fr: [
        "Imprimantes Epson et Star Micronics en Israël",
        "Compagnon cuisine et Siri sur iPad",
      ],
      en: [
        "Epson & Star Micronics POS Printers in Israel",
        "Kitchen Companion with Siri on iPad",
      ],
    }[lang];
    return [
      lang,
      {
        equipment: {
          title: titles[0],
          heading: t.equipmentTitle,
          description: t.equipmentText,
          intro: t.equipmentText,
          features: [
            {
              title: "Epson TM-U220II",
              text: t.epsonPoints[1] + ". " + t.epsonPoints[0] + ".",
            },
            { title: "Star Micronics mC-Print3", text: t.starText },
            { title: "iPad + Android", text: t.equipmentSetup },
          ],
          faq: [
            {
              q:
                lang === "he"
                  ? "האם כל מדפסת Epson מתחברת ישירות לענן?"
                  : lang === "fr"
                    ? "Toutes les Epson se connectent-elles directement au cloud ?"
                    : "Does every Epson printer connect directly to the cloud?",
              a: t.epsonNote,
            },
          ],
        },
        companion: {
          title: titles[1],
          heading: t.companionTitle,
          description: t.companionText,
          intro: t.companionText,
          features: t.phases.map((title, i) => ({
            title,
            text: t.phaseDescriptions[i],
          })),
          faq: [
            {
              q:
                lang === "he"
                  ? "מה צריך כדי להשתמש ב־Siri?"
                  : lang === "fr"
                    ? "Que faut-il pour utiliser Siri ?"
                    : "What do I need to use Siri?",
              a: t.voiceNote,
            },
          ],
        },
      },
    ];
  }),
) as Record<Lang, Record<"equipment" | "companion", Solution>>;
