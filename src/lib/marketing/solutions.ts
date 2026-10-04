import type { Lang } from "@/lib/seo";
import type { Solution, SolutionKey } from "./content";
import { additionalSolutions } from "./ecosystem";

type Entry = [
  title: string,
  description: string,
  heading: string,
  intro: string,
  features: [string, string][],
  faq: [string, string][],
];

const entries: Record<
  Lang,
  Record<Exclude<SolutionKey, "equipment" | "companion">, Entry>
> = {
  he: {
    restaurants: [
      "קופה למסעדות ולבתי קפה בישראל",
      "Foody מסעדה מחבר קופה, ניהול שולחנות, אתר הזמנות, QR ותשלומים. השירות במקום וההזמנות אונליין עובדים יחד.",
      "מהשולחן הראשון\nועד לסגירת היום.",
      "בין הסרוויס, ההזמנות שמגיעות מהאתר והמטבח שעובד במרץ, אתם צריכים שכל הצוות יראה את אותה תמונה. Foody מחבר את נקודות המגע של המסעדה.",
      [
        [
          "Foody הזמנות כלול.",
          "אתר הזמנות, הזמנות להיום והזמנות מראש, איסוף ומשלוחים: Foody הזמנות כלול לצד הקופה והשירות בשולחן. הצוות מרכז את ההכנה במשרד האחורי.",
        ],
        [
          "שירות שזורם מההתחלה.",
          "אפליקציית Foody הרשמית על Victa Portable מחברת קבלת הזמנה, תשלום בשולחן וקבלה מודפסת במכשיר אחד, עם מסך 6.7 אינץ׳ ומדפסת מובנית.",
        ],
        [
          "ליווי למטבח לאורך כל היום.",
          "אפשר להוסיף את Foody Kitchen לניהול מתכונים, מלאי ועלויות. Foody Companion כלול במודול המטבח ומלווה את השף והצוות בהכנות, בשירות ובסגירה לקראת מחר.",
        ],
      ],
      [
        [
          "מתאים גם לבית קפה או למזון מהיר?",
          "כן. אפשר להתאים את תהליך העבודה לשירות בדלפק, לישיבה במקום, לאיסוף ולמשלוחים. בהקמה בוחרים את המצבים והציוד הנחוצים לעסק.",
        ],
        [
          "האם אתר ההזמנות מחובר לקופה?",
          "כן. אתר Foody, ה־QR והקופה משתמשים באותה פלטפורמה. התפריטים, זמינות המנות ותהליך ההזמנה מנוהלים בהתאם להגדרות המסעדה.",
        ],
      ],
    ],
    chains: [
      "מערכת ניהול לרשתות מסעדות בישראל",
      "שליטה בייצור, food cost, מלאי וספקים. כלים תפעוליים לקבוצות מסעדות ולעסקים עם מספר סניפים.",
      "לגדול במספר הסניפים.\nלהישאר קרובים לפרטים.",
      "כשעסק גדל, כל פער בחומרי הגלם וכל החלטת ייצור מקבלים משמעות גדולה יותר. Foody נותן למנהלים ולצוותים כלים לעבוד בתהליך מסודר בכל מסעדה.",
      [
        [
          "לתכנן את הייצור לפני הלחץ.",
          "נהלו מתכונים, הכנות ותוכניות ייצור. השתמשו בהיסטוריית המכירות לתכנון כמויות ובדקו את התוכנית לפני שמעבירים אותה לביצוע.",
        ],
        [
          "לראות לאן הולכים חומרי הגלם.",
          "השוו בין צריכה צפויה לפי מתכונים לצריכה בפועל לפי ספירות וקבלות סחורה. תעדו פחת ובדקו חריגות לפני שהן הופכות להרגל.",
        ],
        [
          "ספקים והזמנות בתוך התהליך.",
          "חברו חומרי גלם לספקים, תעדו קבלת סחורה והכינו טיוטות הזמנה לפי הצורך. המעבר בין מסעדות מוגבל להרשאות הצוות.",
        ],
      ],
      [
        [
          "יש תחזית אוטומטית לייצור?",
          "המערכת יכולה להציע כמויות על בסיס היסטוריית הפעילות. ההצעות הן כלי תכנון שיש לבדוק ולהתאים לאירועים, לחגים ולשינויים צפויים בביקוש.",
        ],
        [
          "אפשר להגדיר הרשאות לפי סניף?",
          "כן. הגישה למסעדות ולפעולות נקבעת לפי המשתמש וההרשאות שלו. את מבנה הגישה ותוכנית הפריסה מגדירים בהתאם לארגון.",
        ],
      ],
    ],
    retail: [
      "קופה ממוחשבת לחנויות ולעסקים קטנים בישראל",
      "קופה, קטלוג מוצרים ותשלום במסופי Verifone. פתרון לעסקים שרוצים לעבוד בקלות בדלפק ובתנועה.",
      "עסק קטן.\nאפשרויות גדולות.",
      "כל מכירה מתחילה בחוויית קנייה טובה. חברו קופה פשוטה לתפעול עם מסוף מתאים ומעקב אחר המכירות, והקדישו יותר תשומת לב ללקוחות.",
      [
        [
          "הדלפק שלכם, מסודר יותר.",
          "רכזו מוצרים, מחירים ואפשרויות בקטלוג נגיש לצוות. בהדגמה בודקים שהמכירה, הקטלוג והדוחות עונים על צורכי העסק.",
        ],
        [
          "התשלום מגיע אל הלקוח.",
          "Victa Mini מתאים לדלפק קומפקטי. Victa Portable מאפשר תשלום בתנועה. נבחר את הציוד בהתאם לשטח, לחיבור ולספק הסליקה.",
        ],
        [
          "להבין את יום המכירות.",
          "קבלו גישה לדוחות המכירות והעסקאות במקום אחד. הגדירו את הצוות ואת הגישה שלו לפי אופן העבודה שלכם.",
        ],
      ],
      [
        [
          "מתאים לעסק חדש?",
          "כן. נתחיל ממספר עמדות המכירה, סוג המוצרים ואופן קבלת התשלום, ונבנה הצעה לתוכנה, לציוד ולהקמה.",
        ],
        [
          "אפשר להשתמש בציוד שכבר יש לי?",
          "נבדוק את הדגמים והחיבורים בהדגמה. התמיכה תלויה במכשיר, במערכת ההפעלה, במדפסת ובספק התשלום.",
        ],
      ],
    ],
    pos: [
      "קופת ענן ל־iPad ול־Android בישראל",
      "Foody קופה מרכז מכירות, קטלוג, שולחנות וניהול בענן על iPad או Android. להזמנות אונליין הוסיפו Foody הזמנות או בחרו ב־Foody מסעדה, שכולל גם הזמנה ב־QR.",
      "פחות לחיצות.\nיותר זמן ללקוחות.",
      "הקופה פועלת על iPad או Android. העסק מנוהל בענן. Foody מחברת הזמנות, קטלוג, צוות ותשלומים, בדלפק וגם מרחוק.",
      [
        [
          "המוצרים שלכם, בדרך שלכם.",
          "נהלו תפריטים או קטלוג, אפשרויות, תוספות וגדלים. התאימו את המסכים לצורת המכירה של העסק.",
        ],
        [
          "מצוות קטן למשמרת מלאה.",
          "העניקו גישה לפי תפקיד ועקבו אחרי הפעילות. במסעדות אפשר לשלב שולחנות, סוגי הזמנה ותהליכי עבודה למטבח.",
        ],
        [
          "תשלום כחלק מההזמנה.",
          "חברו ספק תשלום ומסוף תואם. פרטי הסכום וסטטוס העסקה נשארים קשורים להזמנה, עם תמיכה באפשרויות תשלום לפי ההגדרה.",
        ],
      ],
      [
        [
          "באילו מכשירים אפשר לעבוד?",
          "Foody POS פועל על iPad ועל Android, כולל Victa Portable שמוגדר עם Foody. מדפסות Star Micronics ו־Epson והאביזרים נבחרים בהתאם להתקנה שלכם.",
        ],
        [
          "האם הממשק בעברית?",
          "כן. הממשק תומך בעברית ובתצוגה מימין לשמאל, לצד אנגלית וצרפתית.",
        ],
      ],
    ],
    kitchen: [
      "ניהול מטבח, מלאי ו־Food Cost למסעדות בישראל",
      "חברו מתכונים, הכנות, מחירי קנייה, מלאי וספקים. ראו עלות מנה ופערים בין הצריכה הצפויה לצריכה בפועל.",
      "כל מנה מתחילה במתכון.\nכל החלטה מתחילה בנתונים.",
      "עלות חומרי הגלם משתנה. כמויות הייצור משתנות. חברו את המידע במקום אחד כדי לדעת מה להכין, מה להזמין ומה כדאי לבדוק.",
      [
        [
          "מהמתכון לעלות המנה.",
          "הגדירו רכיבים וכמויות וקשרו אותם למחירי המלאי. Foody מחשב את עלות חומרי הגלם של המנה ואת היחס למחיר המכירה.",
        ],
        [
          "לנהל את מה שקורה בפועל.",
          "רשמו אספקות, הכנות וספירות. בסגירת היום בדקו פערים מול הצריכה הצפויה, לצד הפחת שתועד.",
        ],
        [
          "Foody Companion כלול.",
          "העוזר היומיומי של מודול המטבח מלווה את ההכנות, סדרי העדיפויות, השירות והסגירה. הוא כלול ללא תוספת תשלום. ב־iPad תואם, Siri מאפשרת לקבל תדריך ומידע שימושי למטבח.",
        ],
      ],
      [
        [
          "מה ההבדל בין food cost תיאורטי לאמיתי?",
          "העלות התיאורטית מבוססת על המתכון ועל מחירי חומרי הגלם. העלות בפועל תלויה גם בספירות מלאי, אספקות ופחת. ההשוואה מסייעת לזהות חריגות.",
        ],
        [
          "האם Food Cost הוא הרווח הנקי?",
          "לא. הוא מודד עלות חומרי גלם ביחס למכירות. שכר, שכירות, סליקה והוצאות נוספות נבחנים בנפרד.",
        ],
      ],
    ],
    ordering: [
      "הזמנות אונליין למטבחי משלוחים ולמסעדות בישראל",
      "אתר ממותג להזמנות להיום ולהזמנות מראש. נהלו איסוף, משלוחים, כמויות להכנה ואריזה לכל לקוח דרך Foody.",
      "Foody הזמנות\nמהאתר ועד המשלוח.",
      "מטבח משלוחים שעובד לאורך היום, קייטרינג או עסק שמרכז הזמנות לסוף השבוע: הלקוחות מזמינים באתר שלכם והצוות עוקב אחרי ההזמנות והתשלומים במשרד האחורי, גם ללא שירות בשולחן.",
      [
        [
          "הזמנות להכנה היום.",
          "קבלו הזמנות לאיסוף או למשלוח באותו יום, בהתאם לשעות ולזמינות שהגדרתם. הצוות רואה את ההזמנות הנכנסות ומארגן את ההכנה.",
        ],
        [
          "הזמנות מראש לפי לוח הזמנים שלכם.",
          "הגדירו חלון הזמנות, מועד סגירה ויום איסוף או משלוח. לדוגמה: הזמנות מיום ראשון עד רביעי, ומשלוח ביום שישי.",
        ],
        [
          "לדעת מה להכין ולמי לארוז.",
          "רכזו את הכמויות לכל מנה, בדקו מנות ואריזות לפי לקוח וסמנו הזמנות שהוכנו. ארגנו את האיסופים והמשלוחים מתוך המשרד האחורי.",
        ],
      ],
      [
        [
          "צריך אפליקציה כדי להזמין?",
          "לא. הלקוחות פותחים את אתר המסעדה או סורקים QR ומשתמשים בדפדפן בטלפון.",
        ],
        [
          "אפשר להפעיל רק איסוף?",
          "כן. סוגי השירות נקבעים לפי הגדרות העסק. ניתן להתאים את תהליך ההזמנה לאיסוף, למשלוח או לשירות במקום.",
        ],
        [
          "צריך קופת Foody כדי להשתמש ב־Foody הזמנות?",
          "לא. אפשר להשתמש ב־Foody הזמנות כמסלול עצמאי ולנהל הזמנות, הכנות ומשלוחים מהמשרד האחורי. הוא כלול גם ב־Foody מסעדה וב־Foody מסעדה ומטבח. הדפסת פתקים במטבח היא תוספת בתשלום.",
        ],
        [
          "מה ההבדל בין מעקב ההכנות ל־Foody Kitchen?",
          "Foody הזמנות מרכז כמויות להכנה ואריזה לפי ההזמנות שהתקבלו. Foody Kitchen מוסיף מתכונים, Food Cost, מלאי, ספקים ו־Foody Companion. ניתן להוסיף אותו למסלול לפי הצורך.",
        ],
      ],
    ],
    payments: [
      "סליקת אשראי לעסקים בישראל",
      "Foody מחבר קופה ותשלומים עם Verifone, PayPlus ו־SUMIT, ומציע תנאי סליקה מותאמים למחזור ולאופי הפעילות.",
      "תשלומים פשוטים.\nתנאים שעובדים בשבילכם.",
      "העמלה היא רק חלק מהתמונה. אנחנו בודקים גם את המסופים, העלויות הקבועות וערוצי המכירה, כדי לבנות הצעה מסודרת לעסק שלכם.",
      [
        [
          "להשוות את ההצעה כולה.",
          "מחזור העסקאות, סוגי הכרטיסים, תשלום בדלפק או אונליין ועלויות קבועות משפיעים על ההצעה. כל תנאי מפורט לפני שבוחרים.",
        ],
        [
          "הספק המתאים לפעילות.",
          "Foody כולל חיבורים ל־Verifone, PayPlus, SUMIT ו־Stancer. הזמינות תלויה בשוק ובסוג ההסכם; Stancer מוצע רק בשווקים הנתמכים על ידו.",
        ],
        [
          "המסוף כחלק מחוויית השירות.",
          "כשותף ומפיץ רשמי של Verifone, אנחנו עוזרים להתאים את מסופי Victa לדלפק או לשירות בתנועה, עם חיבור תואם לעסק.",
        ],
      ],
      [
        [
          "מה עמלת הסליקה?",
          "העמלה נקבעת בהצעה אישית לפי המחזור, ספק התשלום, סוגי הכרטיסים ותנאי ההסכם. פנו אלינו לקבלת פירוט של העמלות והעלויות הקבועות.",
        ],
        [
          "כל ארבעת הספקים זמינים בישראל?",
          "לא בהכרח. את החיבור בוחרים לפי השוק, המטבע ותנאי הספק. בישראל נבדוק התאמה מקומית; Stancer מיועד לשווקים הנתמכים שלו.",
        ],
      ],
    ],
    hardware: [
      "מסופי Verifone Victa בישראל",
      "Foody הוא שותף ומפיץ רשמי Verifone. התאימו Victa Portable או Victa Mini לקופה, לדלפק ולשירות בתנועה.",
      "דור חדש של תשלום.\nעם שותף שמבין את העסק.",
      "חומרה מתקדמת צריכה להתאים לאנשים שמשתמשים בה. נבחר יחד מסוף Verifone לפי סביבת העבודה, החיבור לסליקה וצורת השירות.",
      [
        [
          "Victa Portable",
          "אפליקציית Foody הרשמית על Victa Portable מחברת קבלת הזמנה, תשלום בשולחן וקבלה מודפסת במכשיר אחד, עם מסך 6.7 אינץ׳ ומדפסת מובנית.",
        ],
        [
          "Victa Mini",
          "מסוף קומפקטי עם מסך מגע בגודל 4 אינץ׳. מתאים לדלפק קטן ולחיבור עם טאבלט או מערכת קופה תואמת.",
        ],
        [
          "התאמה מעבר למסוף עצמו.",
          "בדקו איתנו את החיבור לקופה, ספק הסליקה, המדפסות ואביזרי ההתקנה. ההצעה כוללת את הדגמים והתצורה שנבחרו לעסק.",
        ],
      ],
      [
        [
          "מה ההבדל בין Portable ל־Mini?",
          "Portable מיועד לשירות נייד וכולל מסך גדול יותר ומדפסת. Mini מציע גודל קומפקטי לדלפק ולחיבור עם מכשירים אחרים. נבחר לפי תהליך העבודה והזמינות.",
        ],
        [
          "אפשר לרכוש מסוף דרך Foody?",
          "כן. Foody הוא שותף ומפיץ רשמי של Verifone. פנו אלינו לבדיקת זמינות, התאמה לסליקה והצעת מחיר לציוד ולהתקנה.",
        ],
      ],
    ],
  },
  fr: {
    restaurants: [
      "Logiciel de caisse pour restaurants et cafés en Israël",
      "Foody Restaurant réunit caisse, gestion des tables, site de commande, QR et paiements. Votre salle et vos commandes en ligne avancent ensemble.",
      "De la première table\nà la dernière commande.",
      "Le service en salle, les commandes du site et la cuisine doivent avancer ensemble. Foody relie les équipes et les étapes du parcours de vos clients.",
      [
        [
          "Foody Commandes est inclus.",
          "Site de commande, ventes du jour, précommandes, retrait et livraison : Foody Commandes est inclus aux côtés de la caisse et du service en salle. Votre équipe centralise la préparation dans le back-office.",
        ],
        [
          "Un service qui garde le rythme.",
          "L’application officielle Foody sur Victa Portable réunit prise de commande, paiement à table et reçu imprimé sur un seul appareil, avec un écran de 6,7 pouces et une imprimante intégrée.",
        ],
        [
          "La cuisine accompagnée toute la journée.",
          "Complétez Foody Restaurant avec Foody Cuisine pour gérer recettes, stocks et coûts. Foody Compagnon est inclus dans le module Cuisine et accompagne le chef et son équipe dans les préparations, le service et la clôture.",
        ],
      ],
      [
        [
          "Et pour un café ou un comptoir ?",
          "Oui. Le fonctionnement peut être adapté au service au comptoir, à table, au retrait et à la livraison. Les modes et le matériel sont choisis lors de la configuration.",
        ],
        [
          "Le site est-il relié à la caisse ?",
          "Oui. Le site Foody, le QR et la caisse utilisent la même plateforme. Menus, disponibilités et commandes suivent les paramètres de votre établissement.",
        ],
      ],
    ],
    chains: [
      "Gestion de chaînes de restaurants en Israël",
      "Production, food cost, stocks et fournisseurs. Les outils opérationnels pour les groupes de restaurants et les activités multisites.",
      "Plus d’adresses.\nToujours le sens du détail.",
      "Quand votre réseau grandit, chaque écart de matières premières et chaque décision de production comptent davantage. Donnez à chaque établissement un cadre de travail précis.",
      [
        [
          "Préparer la production avant le rush.",
          "Organisez les recettes, préparations et plans de production. Appuyez-vous sur l’historique des ventes et ajustez les quantités avant de lancer la préparation.",
        ],
        [
          "Comprendre la consommation réelle.",
          "Comparez les quantités théoriques aux consommations issues des inventaires et réceptions. Enregistrez les pertes et examinez les écarts.",
        ],
        [
          "Intégrer les fournisseurs au quotidien.",
          "Associez les ingrédients aux fournisseurs, enregistrez les livraisons et préparez les commandes. L’accès à chaque restaurant reste limité aux équipes autorisées.",
        ],
      ],
      [
        [
          "Les prévisions sont-elles automatiques ?",
          "Foody peut suggérer des quantités à partir de l’historique. Ces propositions doivent être vérifiées et adaptées aux événements, fêtes et évolutions de la demande.",
        ],
        [
          "Peut-on limiter les accès par établissement ?",
          "Oui. Les restaurants accessibles et les actions autorisées dépendent de l’utilisateur et de ses droits. Le plan de déploiement est défini avec votre organisation.",
        ],
      ],
    ],
    retail: [
      "Caisse pour boutiques et commerces en Israël",
      "Une caisse, un catalogue et les terminaux Verifone pour encaisser au comptoir ou en mobilité.",
      "Petit commerce.\nGrandes possibilités.",
      "Une vente réussie commence par une expérience agréable. Réunissez une caisse facile à prendre en main, un terminal adapté et le suivi des ventes.",
      [
        [
          "Un comptoir mieux organisé.",
          "Rassemblez les produits, prix et options dans un catalogue accessible à l’équipe. La démo permet de valider le parcours de vente et les rapports nécessaires.",
        ],
        [
          "Le paiement va vers le client.",
          "Victa Mini s’adapte aux petits comptoirs. Victa Portable accompagne le service mobile. Le choix dépend de votre espace et du prestataire de paiement.",
        ],
        [
          "Comprendre votre journée.",
          "Consultez les ventes et transactions au même endroit. Configurez les accès de votre équipe selon votre organisation.",
        ],
      ],
      [
        [
          "Pour une nouvelle ouverture ?",
          "Oui. Nous partons du nombre de caisses, de votre catalogue et des moyens de paiement pour chiffrer logiciel, matériel et installation.",
        ],
        [
          "Puis-je garder mon matériel ?",
          "Nous vérifions les modèles et connexions. La compatibilité dépend de l’appareil, du système, de l’imprimante et du prestataire de paiement.",
        ],
      ],
    ],
    pos: [
      "Caisse cloud sur iPad et Android en Israël",
      "Foody Caisse réunit encaissement, catalogue, tables et gestion dans le cloud sur iPad ou Android. Pour vendre en ligne, ajoutez Foody Commandes ou choisissez Foody Restaurant, qui inclut aussi la commande QR.",
      "Moins de manipulations.\nPlus de temps pour vos clients.",
      "Votre caisse tourne sur iPad ou Android. Votre activité se pilote dans le cloud. Foody relie les commandes, le catalogue, les équipes et les paiements, au comptoir comme à distance.",
      [
        [
          "Vos produits, à votre façon.",
          "Organisez menus ou catalogue, options, suppléments et tailles. Adaptez la présentation à votre manière de vendre.",
        ],
        [
          "D’une petite équipe à un service complet.",
          "Attribuez des accès par rôle. Pour les restaurants, ajoutez les tables, types de commandes et étapes de préparation en cuisine.",
        ],
        [
          "Le paiement suit la commande.",
          "Connectez un prestataire et un terminal compatibles. Le montant et le statut de la transaction restent associés à la commande.",
        ],
      ],
      [
        [
          "Sur quels appareils ?",
          "Foody POS fonctionne sur iPad et Android, y compris sur les Victa Portable configurés avec Foody. Les imprimantes Star Micronics et Epson et les accessoires sont sélectionnés selon votre installation.",
        ],
        [
          "L’interface est-elle en hébreu ?",
          "Oui, avec une présentation de droite à gauche. Le français et l’anglais sont également disponibles.",
        ],
      ],
    ],
    kitchen: [
      "Gestion de cuisine, stocks et food cost en Israël",
      "Reliez recettes, préparations, prix d’achat et fournisseurs. Comparez le coût matière théorique à la consommation réelle.",
      "Chaque plat a sa recette.\nChaque décision, ses données.",
      "Les prix d’achat évoluent. Les quantités à préparer aussi. Réunissez l’information pour savoir quoi produire, quoi commander et où agir.",
      [
        [
          "De la recette au coût matière.",
          "Définissez les ingrédients et quantités, puis associez-les aux prix du stock. Foody calcule le coût des ingrédients et son rapport au prix de vente.",
        ],
        [
          "Suivre ce qui se passe vraiment.",
          "Enregistrez livraisons, préparations et inventaires. À la clôture, examinez les écarts de consommation et les pertes déclarées.",
        ],
        [
          "Foody Compagnon est inclus.",
          "L’assistant quotidien du module Cuisine accompagne les préparations, les priorités, le service et la clôture. Il est inclus sans supplément. Sur iPad compatible, Siri donne accès au briefing et aux informations utiles.",
        ],
      ],
      [
        [
          "Théorique et réel : quelle différence ?",
          "Le coût théorique vient des recettes et prix des ingrédients. Le réel s’appuie aussi sur les inventaires, réceptions et pertes. La comparaison permet de repérer des écarts.",
        ],
        [
          "Le food cost représente-t-il le bénéfice net ?",
          "Non. Il mesure le coût des ingrédients par rapport aux ventes. Salaires, loyers, paiements et autres charges sont à prendre en compte séparément.",
        ],
      ],
    ],
    ordering: [
      "Commandes en ligne pour dark kitchens et restaurants en Israël",
      "Votre site de commande pour les ventes du jour et les précommandes. Gérez le retrait, la livraison, les quantités à préparer et l’emballage par client depuis Foody.",
      "Foody Commandes.\nDu site à la livraison.",
      "Dark kitchen qui travaille en continu, traiteur ou cuisine qui regroupe les commandes de la semaine : vos clients commandent sur votre site et votre équipe suit les commandes et les paiements dans le back-office, même sans service à table.",
      [
        [
          "Les commandes à préparer aujourd’hui.",
          "Recevez les commandes à emporter ou à livrer le jour même, selon les horaires et disponibilités que vous définissez. L’équipe retrouve les commandes entrantes et organise leur préparation.",
        ],
        [
          "Les précommandes selon votre calendrier.",
          "Définissez une période de commande, une date de clôture et un jour de retrait ou de livraison. Par exemple : commandes du dimanche au mercredi, puis livraison le vendredi.",
        ],
        [
          "Savoir quoi préparer et pour qui emballer.",
          "Regroupez les quantités par plat, consultez les portions et les emballages par client, puis marquez les commandes préparées. Organisez ensuite les retraits et les livraisons depuis le back-office.",
        ],
      ],
      [
        [
          "Faut-il télécharger une application ?",
          "Non. Les clients ouvrent votre site ou scannent un QR et commandent directement dans le navigateur de leur téléphone.",
        ],
        [
          "Puis-je proposer seulement du retrait ?",
          "Oui. Les modes de service sont définis dans les paramètres du restaurant : retrait, livraison ou consommation sur place.",
        ],
        [
          "Faut-il une caisse Foody pour utiliser Foody Commandes ?",
          "Non. Foody Commandes peut être utilisé seul pour gérer les commandes, la préparation et les livraisons depuis le back-office. Il est aussi inclus dans Foody Restaurant et Foody Restaurant & Cuisine. L’impression des bons en cuisine est une option payante.",
        ],
        [
          "Quelle différence entre le suivi des préparations et Foody Cuisine ?",
          "Foody Commandes regroupe les quantités à préparer et à emballer à partir des commandes reçues. Foody Cuisine ajoute les recettes, le food cost, les stocks, les fournisseurs et Foody Compagnon. Ce module peut compléter votre offre selon vos besoins.",
        ],
      ],
    ],
    payments: [
      "Paiements et contrats de slika en Israël",
      "Foody relie la caisse à Verifone, PayPlus et SUMIT, avec des conditions de traitement adaptées au volume et à l’activité.",
      "Des paiements simples.\nDes conditions qui comptent.",
      "Le taux n’est qu’une partie du sujet. Nous examinons le matériel, les frais fixes et les canaux de vente pour vous proposer un ensemble cohérent.",
      [
        [
          "Comparer l’offre dans son ensemble.",
          "Volume, types de cartes, paiements sur place ou en ligne et frais fixes influencent le devis. Chaque poste est détaillé avant votre décision.",
        ],
        [
          "Le bon prestataire pour votre activité.",
          "Foody intègre Verifone, PayPlus, SUMIT et Stancer. Le choix dépend du pays et du contrat. Stancer est proposé uniquement sur ses marchés compatibles.",
        ],
        [
          "Un terminal au service de l’expérience.",
          "Partenaire et distributeur officiel Verifone, nous vous aidons à choisir les terminaux Victa pour le comptoir ou le service mobile.",
        ],
      ],
      [
        [
          "Quel est le taux de slika ?",
          "Il est établi sur devis selon votre volume, le prestataire, les cartes et le contrat. Contactez-nous pour une proposition détaillant commissions et frais fixes.",
        ],
        [
          "Les quatre prestataires sont-ils disponibles en Israël ?",
          "Pas nécessairement. Le choix dépend du marché, de la devise et du prestataire. La compatibilité locale est vérifiée ; Stancer concerne ses marchés pris en charge.",
        ],
      ],
    ],
    hardware: [
      "Terminaux Verifone Victa en Israël",
      "Foody, partenaire et distributeur officiel Verifone. Choisissez Victa Portable ou Victa Mini pour votre caisse et votre service.",
      "Une nouvelle génération.\nUn partenaire à vos côtés.",
      "Le meilleur équipement est celui qui convient aux personnes qui l’utilisent. Choisissons votre terminal selon votre activité, votre slika et votre manière de servir.",
      [
        [
          "Victa Portable",
          "L’application officielle Foody sur Victa Portable réunit prise de commande, paiement à table et reçu imprimé sur un seul appareil, avec un écran de 6,7 pouces et une imprimante intégrée.",
        ],
        [
          "Victa Mini",
          "Un format compact avec un écran tactile de 4 pouces, adapté aux petits comptoirs et à la connexion avec une tablette ou une caisse compatible.",
        ],
        [
          "Tout ce qui va avec votre terminal.",
          "Vérifions la caisse, le prestataire de slika, les imprimantes et accessoires. Les modèles et configurations retenus sont précisés dans votre proposition.",
        ],
      ],
      [
        [
          "Portable ou Mini ?",
          "Portable dispose d’un écran plus grand et d’une imprimante pour le service mobile. Mini offre un format compact pour le comptoir et les appareils associés. Le choix dépend du besoin et de la disponibilité.",
        ],
        [
          "Peut-on acheter auprès de Foody ?",
          "Oui. Foody est partenaire et distributeur officiel Verifone. Contactez-nous pour vérifier disponibilité, compatibilité de paiement et tarifs du matériel.",
        ],
      ],
    ],
  },
  en: {
    restaurants: [
      "Restaurant and café POS in Israel",
      "Foody Restaurant brings together POS, table management, an ordering website, QR and payments. Table service and online orders work together.",
      "From your first table\nto your final order.",
      "Front of house, online orders and a busy kitchen need to move together. Foody connects the people and steps that make your restaurant work.",
      [
        [
          "Foody Orders is included.",
          "Your ordering website, same-day orders, preorders, pickup and delivery: Foody Orders is included alongside POS and table service. Your team coordinates preparation in the back office.",
        ],
        [
          "Keep service moving.",
          "The official Foody app on Victa Portable brings ordering, payment at the table and printed receipts into one device, with a 6.7-inch screen and integrated printer.",
        ],
        [
          "Support for the kitchen, all day.",
          "Add Foody Kitchen to manage recipes, stock and costs. Foody Companion is included in the Kitchen module and guides the chef and team through prep, service and closing.",
        ],
      ],
      [
        [
          "Does it work for cafés and quick service?",
          "Yes. Workflows can be adapted for counter service, dine-in, pickup and delivery. Modes and equipment are selected during setup.",
        ],
        [
          "Is the website connected to the POS?",
          "Yes. Your Foody website, QR and POS use the same platform. Menus, availability and order workflows follow your restaurant settings.",
        ],
      ],
    ],
    chains: [
      "Restaurant group management in Israel",
      "Production, food cost, stock and suppliers. Operational tools for restaurant groups and businesses with multiple locations.",
      "Grow your footprint.\nKeep sight of the details.",
      "As you grow, every ingredient variance and production decision matters more. Give managers and teams a structured way to run each restaurant.",
      [
        [
          "Plan production before the rush.",
          "Organize recipes, preparations and production plans. Use sales history to inform quantities and review plans before sending them into action.",
        ],
        [
          "Understand what you actually use.",
          "Compare expected recipe consumption with stock counts and deliveries. Record waste and investigate variances before they become habits.",
        ],
        [
          "Bring suppliers into the workflow.",
          "Link ingredients to suppliers, record deliveries and prepare purchase drafts. Access to each restaurant stays limited to authorized staff.",
        ],
      ],
      [
        [
          "Are production forecasts automatic?",
          "Foody can suggest quantities from activity history. Review and adjust suggestions for events, holidays and changing demand.",
        ],
        [
          "Can access be restricted by location?",
          "Yes. Accessible restaurants and permitted actions depend on each user’s permissions. Rollout and access are planned around your organization.",
        ],
      ],
    ],
    retail: [
      "POS for shops and small businesses in Israel",
      "A POS, product catalogue and Verifone payments for businesses selling at the counter or on the move.",
      "Small business.\nBig possibilities.",
      "Every sale starts with a good customer experience. Combine an approachable POS, a suitable payment terminal and sales visibility.",
      [
        [
          "A better-organized counter.",
          "Keep products, prices and options in a catalogue your team can use. The demo checks that the sales workflow and reporting fit your needs.",
        ],
        [
          "Bring checkout to the customer.",
          "Victa Mini suits compact counters. Victa Portable supports mobile service. We choose equipment around your space and payment provider.",
        ],
        [
          "Understand your trading day.",
          "Review sales and transactions in one place. Set up your team’s access around the way you work.",
        ],
      ],
      [
        [
          "Is it suitable for a new business?",
          "Yes. We start with your checkout count, product catalogue and payment needs to quote software, hardware and setup.",
        ],
        [
          "Can I keep my existing hardware?",
          "We check models and connections during discovery. Support depends on the device, operating system, printer and payment provider.",
        ],
      ],
    ],
    pos: [
      "Cloud POS for iPad and Android in Israel",
      "Foody POS brings sales, catalogues, tables and cloud management to iPad or Android. Add Foody Orders to sell online, or choose Foody Restaurant, which also includes QR ordering.",
      "Fewer steps.\nMore time for customers.",
      "Your POS runs on iPad or Android. Your business is managed in the cloud. Foody connects orders, catalogues, teams and payments, at the counter and remotely.",
      [
        [
          "Your products, your way.",
          "Organize menus or catalogues, options, modifiers and sizes. Adapt the display to how your business sells.",
        ],
        [
          "From a small team to a full shift.",
          "Assign access by role. Restaurants can add tables, order types and kitchen preparation workflows.",
        ],
        [
          "Payments stay with the order.",
          "Connect a supported payment provider and compatible terminal. Amounts and transaction statuses stay associated with the order.",
        ],
      ],
      [
        [
          "Which devices can I use?",
          "Foody POS runs on iPad and Android, including Victa Portable devices configured with Foody. Star Micronics and Epson printers and accessories are selected for your setup.",
        ],
        [
          "Does the interface support Hebrew?",
          "Yes, including right-to-left layouts. English and French are also available.",
        ],
      ],
    ],
    kitchen: [
      "Kitchen management, stock and food cost in Israel",
      "Connect recipes, preparations, purchasing prices and suppliers. Compare theoretical ingredient cost with real consumption.",
      "Every dish starts with a recipe.\nEvery decision, with data.",
      "Ingredient prices change. Production quantities do, too. Bring the information together to know what to prepare, what to order and what needs attention.",
      [
        [
          "From recipe to ingredient cost.",
          "Define ingredients and quantities, then link them to stock prices. Foody calculates ingredient cost and its share of the selling price.",
        ],
        [
          "Follow what really happens.",
          "Record deliveries, preparations and inventory counts. At daily close, review consumption variances alongside recorded waste.",
        ],
        [
          "Foody Companion is included.",
          "The Kitchen module’s everyday assistant guides prep, priorities, service and closing. It is included at no extra charge. On a compatible iPad, Siri brings briefings and useful kitchen information.",
        ],
      ],
      [
        [
          "What is theoretical versus actual food cost?",
          "Theoretical cost uses recipes and ingredient prices. Actual consumption also depends on counts, deliveries and waste. Comparing them helps identify discrepancies.",
        ],
        [
          "Is food cost the same as net profit?",
          "No. It measures ingredient cost relative to sales. Wages, rent, payment fees and other expenses must be considered separately.",
        ],
      ],
    ],
    ordering: [
      "Online ordering for dark kitchens and restaurants in Israel",
      "A branded ordering website for same-day sales and preorders. Manage pickup, delivery, preparation quantities and packing for each customer in Foody.",
      "Foody Orders.\nFrom website to delivery.",
      "Whether you run a dark kitchen taking orders throughout the day, a catering business or a kitchen collecting weekly preorders, customers order on your website and your team tracks orders and payments in the back office, even without table service.",
      [
        [
          "Orders to prepare today.",
          "Accept same-day pickup and delivery orders within your opening hours and availability. Your team sees incoming orders and organises preparation.",
        ],
        [
          "Preorders around your schedule.",
          "Set an ordering window, cutoff and pickup or delivery date. For example: orders from Sunday to Wednesday, with delivery on Friday.",
        ],
        [
          "Know what to prepare and pack for each customer.",
          "See quantities by dish, check portions and packaging per customer, and mark orders as prepared. Organise pickups and deliveries from the back office.",
        ],
      ],
      [
        [
          "Do customers need an app?",
          "No. They open your website or scan a QR code and use the browser on their phone.",
        ],
        [
          "Can I offer pickup only?",
          "Yes. Service types are configured for the business. The ordering flow can be adapted to pickup, delivery or dine-in.",
        ],
        [
          "Do I need a Foody POS to use Foody Orders?",
          "No. Foody Orders can be used on its own to manage orders, preparation and deliveries from the back office. It is also included in Foody Restaurant and Foody Restaurant & Kitchen. Kitchen ticket printing is a paid add-on.",
        ],
        [
          "How does preparation tracking differ from Foody Kitchen?",
          "Foody Orders brings together preparation and packing quantities from received orders. Foody Kitchen adds recipes, food cost, stock, suppliers and Foody Companion. You can add this module to your plan as needed.",
        ],
      ],
    ],
    payments: [
      "Payment processing for businesses in Israel",
      "Foody connects your POS with Verifone, PayPlus and SUMIT, with processing proposals tailored to your turnover and business.",
      "Simple payments.\nTerms that work for you.",
      "The rate is only part of the picture. We look at terminals, fixed fees and sales channels to build a clear proposal for your business.",
      [
        [
          "Compare the whole offer.",
          "Volume, card types, in-person or online payments and fixed costs influence the proposal. Each item is detailed before you decide.",
        ],
        [
          "The provider that fits your business.",
          "Foody integrates with Verifone, PayPlus, SUMIT and Stancer. Availability depends on country and agreement. Stancer is offered only in its supported markets.",
        ],
        [
          "Make the terminal part of great service.",
          "As an official Verifone partner and reseller, we help you choose Victa terminals for the counter or service on the move.",
        ],
      ],
      [
        [
          "What is the processing rate?",
          "Rates are quoted based on turnover, provider, card types and agreement. Contact us for a proposal detailing transaction rates and fixed fees.",
        ],
        [
          "Are all four providers available in Israel?",
          "Not necessarily. Selection depends on market, currency and provider terms. We verify local compatibility; Stancer serves its supported markets.",
        ],
      ],
    ],
    hardware: [
      "Verifone Victa terminals in Israel",
      "Foody is an official Verifone partner and reseller. Match Victa Portable or Victa Mini to your checkout and service workflow.",
      "Next-generation payments.\nA partner who knows your business.",
      "Advanced hardware should fit the people using it. Choose a Verifone terminal around your workspace, processing connection and service style.",
      [
        [
          "Victa Portable",
          "The official Foody app on Victa Portable brings ordering, payment at the table and printed receipts into one device, with a 6.7-inch screen and integrated printer.",
        ],
        [
          "Victa Mini",
          "A compact terminal with a 4-inch touchscreen, suited to smaller counters and pairing with a compatible tablet or POS system.",
        ],
        [
          "Everything around your terminal.",
          "We check your POS connection, processor, printers and accessories. Your proposal specifies the selected models and configuration.",
        ],
      ],
      [
        [
          "Portable or Mini?",
          "Portable has a larger screen and printer for mobile service. Mini offers a compact setup for the counter and paired devices. Selection depends on workflow and availability.",
        ],
        [
          "Can I buy through Foody?",
          "Yes. Foody is an official Verifone partner and reseller. Contact us to check availability, payment compatibility and hardware pricing.",
        ],
      ],
    ],
  },
};

const sectionTitles: Record<
  Lang,
  Partial<Record<SolutionKey, string>>
> = {
  fr: {
    restaurants: "Le service en salle et les commandes en ligne réunis.",
    pos: "Une caisse pour le comptoir et le service en salle.",
    kitchen: "Les préparations, les stocks et les coûts au même endroit.",
    ordering: "Pour les commandes du jour ou celles de la semaine.",
  },
  en: {
    restaurants: "Table service and online orders, together.",
    pos: "One POS for the counter and table service.",
    kitchen: "Prep, stock and costs in one place.",
    ordering: "For today’s orders or the week ahead.",
  },
  he: {
    restaurants: "השירות במסעדה וההזמנות אונליין באותה מערכת.",
    pos: "קופה לדלפק ולשירות בשולחן.",
    kitchen: "ההכנות, המלאי והעלויות במקום אחד.",
    ordering: "להזמנות של היום או להזמנות של השבוע.",
  },
};

/** Returns localized editorial content for an acquisition page. */
export function getSolution(lang: Lang, key: SolutionKey): Solution {
  if (key === "equipment" || key === "companion")
    return additionalSolutions[lang][key];
  const [title, description, heading, intro, features, faq] =
    entries[lang][key];
  return {
    title,
    sectionTitle: sectionTitles[lang][key],
    description,
    heading,
    intro,
    features: features.map(([title, text]) => ({ title, text })),
    faq: faq.map(([q, a]) => ({ q, a })),
  };
}
