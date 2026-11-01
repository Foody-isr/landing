import type { Lang } from "@/lib/seo";

type BuyingGuide = {
  title: string; description: string; disclosure: string; reviewed: string;
  sections: { title: string; text: string; path: string; link: string }[];
  checklistTitle: string; checklist: string[];
  budgetTitle: string; budgetIntro: string; budgetHeaders: [string, string];
  budgetRows: [string, "restaurant" | "extraPos" | "setup" | "training"][];
  monthly: string; firstYear: string; budgetNote: string; pricesLink: string;
  compareLink: string;
};

/** Original quote-review guide for restaurants in Israel, localized in all acquisition languages. */
export const buyingGuide: Record<Lang, BuyingGuide> = {
  he: {
    title: "איך לבחור קופה למסעדה בישראל?",
    description: "מה לבדוק בקופה למסעדה: טאבלטים למלצרים, שפות צוות, הזמנות אונליין, סליקה, מלאי ופוד קוסט. כולל דוגמת תקציב Foody בשקלים.",
    disclosure: "מדריך מאת צוות Foody POS. דוגמת המחיר מתייחסת לתעריף הציבורי של Foody; את שאלות הבדיקה אפשר לקחת גם להדגמות ולהצעות של ספקים אחרים.",
    reviewed: "נבדק בתאריך",
    sections: [
      { title: "התחילו מהסרוויס ומהשפות של הצוות", text: "כתבו כמה עמדות דלפק וטאבלטים למלצרים יעבדו במקביל. בהדגמה פתחו שולחן, בחרו גודל ותוספות ושלחו מנות להכנה. בקשו לראות את הקופה ואת המשרד האחורי בכל שפת צוות נחוצה. ב־Foody שני הממשקים זמינים בעברית, בצרפתית ובאנגלית; בעברית יש תצוגה מימין לשמאל.", path: "/solutions/pos", link: "הקופה והשפות ב־Foody" },
      { title: "הפרידו בין רישיון מכשיר, חומרה וסליקה", text: "בררו האם המחיר הוא לעסק, למכשיר או לעובד. ב־Foody רישיון קופה הוא למכשיר שמריץ את האפליקציה; חשבונות עובדים הם עניין נפרד. חומרה אינה כלולה ברישיון. בדקו דגם, מערכת הפעלה, מדפסת וספק סליקה לפני בחירת הציוד. בקשו הצעה שמפרידה דמי מנוי, הקמה, הדרכה, EMV ועמלות תשלום.", path: "/solutions/payments", link: "תשלומים והתאמת ספק סליקה" },
      { title: "בדקו מה קורה להזמנה מהאתר", text: "עברו על הזמנה לאיסוף, משלוח והזמנה מראש עם מועד סגירה ותאריך מסירה. בדקו איפה הצוות רואה כמויות להכנה ואריזה לפי לקוח. Foody הזמנות זמין בנפרד וכלול גם ב־Foody מסעדה. עמלת Foody באחוזים על הזמנות ישירות היא 0%; דמי המנוי, הסליקה ושירותים חיצוניים נפרדים.", path: "/solutions/online-ordering", link: "מסלול ההזמנות הישירות" },
      { title: "הגדירו איזה ניהול מטבח אתם צריכים", text: "מסך שמציג הזמנות למטבח, מכסת מנות זמינות וחשבונאות חומרי גלם הם היקפים שונים. בקשו לראות מתכון שמקושר למכירה, צריכת חומרי גלם, חישוב פוד קוסט ובדיקת קבלת ספק. בררו אילו פעולות הן במערכת עצמה ואילו דורשות חיבור חיצוני. Foody Kitchen כולל מתכונים, מלאי, ספקים, הכנות ו־Foody Companion; חיבור לקופה חיצונית דורש בדיקה והצעה נפרדת.", path: "/solutions/kitchen", link: "ניהול המטבח והמלאי ב־Foody" },
    ],
    checklistTitle: "מה להביא להדגמה",
    checklist: ["תפריט לדוגמה עם גדלים ותוספות, ומספר המכשירים הנדרשים.", "רשימת שפות הצוות ודגמי הציוד והמדפסות הקיימים.", "תרחיש איסוף או משלוח, ואם צריך גם חלון להזמנות מראש.", "מתכון אחד, חומרי הגלם שלו ודוגמה אנונימית של קבלת ספק, אם בודקים את מודול המטבח."],
    budgetTitle: "דוגמת תקציב: מסעדה עם שלושה מכשירי קופה",
    budgetIntro: "קופה בדלפק ושני טאבלטים למלצרים. החישוב כולל את מסלול Foody מסעדה ואת הרישיון הנוסף הדרוש למכשיר השלישי; הוא אינו כולל את מודול המטבח.",
    budgetHeaders: ["רכיב", "מחיר בשקלים לפני מע״מ"],
    budgetRows: [["Foody מסעדה, כולל שני רישיונות מכשיר, לחודש", "restaurant"], ["רישיון מכשיר שלישי, לחודש", "extraPos"], ["הקמה סטנדרטית, חד־פעמי", "setup"], ["הדרכה באתר הלקוח, ליום, אם נבחרה", "training"]],
    monthly: "סך דמי המנוי לחודש", firstYear: "12 חודשי מנוי והקמה סטנדרטית",
    budgetNote: "לעסק אחד, לפני מע״מ. חומרה, הדרכה, EMV, סליקה, הדפסת בוני מטבח ושירותים חיצוניים אינם כלולים בסכומים הכוללים. אין כאן אומדן של כלל הוצאות העסק. מחיר ההשקה קבוע ל־12 החודשים הראשונים; תנאי הביטול וההחרגות מפורטים במחירון.",
    pricesLink: "למחירון ולתנאים המלאים", compareLink: "השוואת Foody ו־Tabit לפי היקף התכונות",
  },
  fr: {
    title: "Comment choisir une caisse restaurant en Israël ?",
    description: "Tablettes serveurs, langues du personnel, commandes en ligne, slika, stocks et food cost : les vérifications utiles, avec un exemple de budget Foody en shekels.",
    disclosure: "Guide rédigé par l’équipe Foody POS. L’exemple de prix utilise le tarif public de Foody ; les questions servent aussi à examiner les démonstrations et devis d’autres fournisseurs.",
    reviewed: "Revu le",
    sections: [
      { title: "Commencer par le service et les langues de l’équipe", text: "Listez les caisses de comptoir et les tablettes serveurs utilisées simultanément. En démo, ouvrez une table, sélectionnez une taille et des suppléments, puis envoyez les plats en préparation. Demandez à voir la caisse et le back-office dans chaque langue nécessaire. Chez Foody, les deux interfaces sont en français, hébreu et anglais, avec affichage de droite à gauche en hébreu.", path: "/solutions/pos", link: "La caisse et les langues de Foody" },
      { title: "Séparer licences, matériel et slika", text: "Vérifiez si le tarif s’applique par établissement, appareil ou salarié. Chez Foody, une licence caisse couvre un appareil exécutant l’application ; les comptes employés sont distincts. Le matériel est séparé. Vérifiez modèle, système, imprimante et prestataire de slika avant de choisir les appareils. Demandez un devis séparant abonnement, installation, formation, EMV et frais de paiement.", path: "/solutions/payments", link: "Paiements et compatibilité du prestataire" },
      { title: "Suivre une commande reçue sur le site", text: "Parcourez un retrait, une livraison et une précommande avec date limite et date de remise. Vérifiez où l’équipe retrouve les quantités à préparer et les emballages par client. Foody Commandes existe seul et est aussi inclus dans Foody Restaurant. La commission Foody en pourcentage sur les commandes directes est de 0 % ; abonnement, slika et services externes restent séparés.", path: "/solutions/online-ordering", link: "Le parcours des commandes directes" },
      { title: "Définir le périmètre de gestion de cuisine", text: "L’affichage des commandes en cuisine, un quota de plats disponibles et le suivi comptable des ingrédients couvrent des besoins différents. Demandez à voir une recette reliée à une vente, sa consommation d’ingrédients, le food cost et une réception fournisseur. Identifiez les fonctions natives et celles nécessitant une intégration. Foody Cuisine couvre recettes, stocks, fournisseurs, préparations et Foody Compagnon ; une connexion à une caisse externe demande validation et devis séparé.", path: "/solutions/kitchen", link: "La gestion de cuisine et des stocks Foody" },
    ],
    checklistTitle: "À préparer pour votre démonstration",
    checklist: ["Un menu avec tailles et suppléments, et le nombre d’appareils nécessaires.", "Les langues de l’équipe et les modèles des appareils et imprimantes existants.", "Un scénario de retrait ou de livraison, avec une fenêtre de précommande si nécessaire.", "Une recette, ses ingrédients et un exemple anonymisé de réception fournisseur pour examiner le module Cuisine."],
    budgetTitle: "Exemple de budget : un restaurant avec trois appareils",
    budgetIntro: "Une caisse au comptoir et deux tablettes serveurs. Le calcul comprend Foody Restaurant et la licence supplémentaire pour le troisième appareil ; le module Cuisine est séparé.",
    budgetHeaders: ["Poste", "Prix en shekels HT"],
    budgetRows: [["Foody Restaurant, deux licences appareil incluses, par mois", "restaurant"], ["Licence du troisième appareil, par mois", "extraPos"], ["Installation standard, une fois", "setup"], ["Formation sur place, par jour, si retenue", "training"]],
    monthly: "Total de l’abonnement mensuel", firstYear: "12 mois d’abonnement et installation standard",
    budgetNote: "Pour un établissement, hors TVA. Matériel, formation, EMV, slika, impression des bons en cuisine et services externes sont exclus des totaux. Il ne s’agit pas du coût complet d’exploitation. Le prix de lancement est fixe les 12 premiers mois ; préavis de résiliation et exclusions figurent dans les tarifs.",
    pricesLink: "Consulter les tarifs et conditions", compareLink: "Comparer le périmètre des fonctionnalités Foody et Tabit",
  },
  en: {
    title: "How to choose a restaurant POS in Israel",
    description: "Waiter tablets, staff languages, online ordering, processing, stock and food cost: practical checks with a Foody budget example in ILS.",
    disclosure: "A guide by the Foody POS team. The pricing example uses Foody’s public rates; the questions also help you review other vendors’ demonstrations and quotes.",
    reviewed: "Reviewed on",
    sections: [
      { title: "Start with service and staff languages", text: "List the counter stations and waiter tablets that will run simultaneously. In a demo, open a table, choose a size and extras, then send dishes for preparation. Ask to see both POS and back-office interfaces in each language your team needs. Foody supports English, Hebrew and French in both interfaces, with right-to-left display in Hebrew.", path: "/solutions/pos", link: "Foody POS and interface languages" },
      { title: "Separate licences, hardware and processing", text: "Check whether a price is per location, device or employee. A Foody POS licence covers one device running the application; staff accounts are separate. Hardware is not included in a licence. Check the model, OS, printer and processor before choosing equipment. Request a quote separating subscription, setup, training, EMV and payment fees.", path: "/solutions/payments", link: "Payments and processor compatibility" },
      { title: "Follow an order from the website", text: "Walk through pickup, delivery and a preorder with a cutoff and handoff date. Check where staff see preparation quantities and packing per customer. Foody Orders is available standalone and is also included in Foody Restaurant. Foody’s percentage commission on direct orders is 0%; subscription, processing and external services remain separate.", path: "/solutions/online-ordering", link: "The direct-order journey" },
      { title: "Define the kitchen management scope", text: "Displaying kitchen orders, limiting available dishes and accounting for ingredients serve different needs. Ask to see a recipe linked to a sale, ingredient consumption, food cost and a supplier receipt. Identify native functions and those requiring an integration. Foody Kitchen covers recipes, stock, suppliers, preparations and Foody Companion; an external POS connection requires technical validation and a separate quote.", path: "/solutions/kitchen", link: "Foody kitchen and stock management" },
    ],
    checklistTitle: "Bring these to your demonstration",
    checklist: ["A menu with sizes and extras, plus the number of devices you need.", "Staff languages and the models of existing devices and printers.", "A pickup or delivery scenario, including a preorder window if needed.", "A recipe, its ingredients and an anonymised supplier receipt example when reviewing Kitchen."],
    budgetTitle: "Budget example: a restaurant with three POS devices",
    budgetIntro: "One counter POS and two waiter tablets. The calculation includes Foody Restaurant and the extra licence for the third device; Kitchen is separate.",
    budgetHeaders: ["Component", "Price in ILS excluding VAT"],
    budgetRows: [["Foody Restaurant, two device licences included, per month", "restaurant"], ["Third device licence, per month", "extraPos"], ["Standard setup, once", "setup"], ["On-site training, per day, if selected", "training"]],
    monthly: "Total monthly subscription", firstYear: "12 months of subscription and standard setup",
    budgetNote: "For one location, excluding VAT. Hardware, training, EMV, processing, kitchen ticket printing and external services are excluded from the totals. This is not the restaurant’s full operating cost. The launch price is fixed for the first 12 months; cancellation notice and exclusions are detailed in pricing.",
    pricesLink: "Read full pricing and conditions", compareLink: "Compare Foody and Tabit feature scope",
  },
};
