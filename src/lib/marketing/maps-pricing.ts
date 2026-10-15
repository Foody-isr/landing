import type { Lang } from '@/lib/seo';
import offer from './maps-offers.json';

/** Informational future Foody extension; mirrored from the API's canonical contract. */
export const mapsOffer = offer;

type MapsPricingCopy = {
  title: string; description: string; included: string; includedUnit: string;
  includedText: string; plus: string; planned: string; monthly: string;
  optimization: string; tiles: string; geocoding: string; routes: string;
  creditRules: string; activation: string; contact: string; custom: string;
  quote: string; customText: string; noOverage: string; faqTitle: string; faqAnswer: string;
};

/** Localized commercial copy for maps, separate from supplier API prices. */
export const mapsPricing: Record<Lang, MapsPricingCopy> = {
  fr: {
    title: 'Cartes et tournées,\nselon votre volume.',
    description: 'La gestion des livraisons reste incluse dans Foody Commandes, seul ou avec Foody Restaurant. Une extension optionnelle préparera les besoins de cartographie et d’optimisation plus importants.',
    included: 'Usage partagé inclus', includedUnit: 'de supplément Foody',
    includedText: 'Gestion des tournées et utilisation protégée dans les quotas disponibles de Google et Geoapify. Ces quotas sont partagés par les restaurants Foody ; aucun volume fournisseur individuel n’est réservé.',
    plus: 'Cartes Plus', planned: 'Extension en préparation', monthly: 'HT / mois / établissement',
    optimization: '{n} crédits d’optimisation Foody', tiles: '{n} tuiles de carte Google', geocoding: '{n} recherches d’adresses Google', routes: '{n} calculs de trajet Google',
    creditRules: '{single} crédit Foody par arrêt soumis à l’optimisation d’un livreur ; {fleet} par arrêt en répartition entre plusieurs livreurs. Les recalculs consomment de nouveau des crédits. Ces crédits sont distincts des crédits Geoapify.',
    activation: 'Tarif prévu pour l’extension, actuellement en préparation. Contactez Foody pour étudier son activation. Les plafonds gratuits actuels restent appliqués ; aucune souscription ni aucun paiement ne sont déclenchés depuis cette page.',
    contact: 'Contacter Foody', custom: 'Volumes supérieurs', quote: 'Sur devis', customText: 'Une proposition adaptée au volume, aux établissements et à l’accompagnement nécessaires.', noOverage: 'Aucun dépassement payant automatique. Les frais des transporteurs restent distincts.',
    faqTitle: 'Les cartes et l’optimisation des tournées sont-elles facturées en plus ?',
    faqAnswer: 'La gestion des livraisons et l’usage partagé protégé sont inclus dans Foody Commandes et les formules Restaurant, dans les quotas fournisseurs disponibles. L’extension Cartes Plus est en préparation au tarif prévu de {price} ₪ HT par mois et par établissement, avec {credits} crédits d’optimisation Foody et des volumes Google définis. Elle nécessite de contacter Foody ; aucune facturation automatique ni augmentation des plafonds actuels n’est activée. Les transporteurs sont facturés séparément.',
  },
  en: {
    title: 'Maps and routes,\nmatched to your volume.',
    description: 'Delivery management remains included with Foody Orders, standalone or with Foody Restaurant. An optional extension is being prepared for larger mapping and optimization needs.',
    included: 'Included shared usage', includedUnit: 'additional Foody charge',
    includedText: 'Route management and protected usage within available Google and Geoapify allowances. These are shared across Foody restaurants; no individual supplier allowance is reserved.',
    plus: 'Maps Plus', planned: 'Extension in preparation', monthly: 'excl. VAT / month / establishment',
    optimization: '{n} Foody optimization credits', tiles: '{n} Google map tiles', geocoding: '{n} Google address lookups', routes: '{n} Google route calls',
    creditRules: '{single} Foody credit per stop submitted to single-courier optimization; {fleet} per stop in multi-courier allocation. Recalculation uses credits again. These are separate from Geoapify credits.',
    activation: 'Planned pricing for an extension currently in preparation. Contact Foody to discuss activation. Current free caps remain active; this page does not create a subscription or take payment.',
    contact: 'Contact Foody', custom: 'Higher volumes', quote: 'On quotation', customText: 'A proposal matched to your volume, establishments and support needs.', noOverage: 'No automatic paid overage. External courier charges remain separate.',
    faqTitle: 'Do maps and route optimization cost extra?',
    faqAnswer: 'Delivery management and protected shared usage are included with Foody Orders and Restaurant bundles within available supplier allowances. Maps Plus is in preparation at a planned price of {price} ILS excluding VAT per establishment/month, with {credits} Foody optimization credits and defined Google volumes. Contact Foody to discuss activation; automatic billing and higher provider caps are not enabled. External couriers are charged separately.',
  },
  he: {
    title: 'מפות ומסלולים,\nבהתאם לנפח הפעילות.',
    description: 'ניהול משלוחים נשאר כלול ב-Foody הזמנות, בנפרד או עם Foody מסעדה. הרחבה אופציונלית נמצאת בהכנה לצורכי מפות ואופטימיזציה בנפחים גדולים יותר.',
    included: 'שימוש משותף כלול', includedUnit: 'תוספת תשלום ל-Foody',
    includedText: 'ניהול סבבי משלוחים ושימוש מוגן במסגרת המכסות הזמינות של Google ו-Geoapify. המכסות משותפות למסעדות Foody; לא נשמרת מכסת ספק נפרדת לכל עסק.',
    plus: 'מפות Plus', planned: 'הרחבה בהכנה', monthly: 'לפני מע״מ / חודש / עסק',
    optimization: '{n} קרדיטים לאופטימיזציה של Foody', tiles: '{n} אריחי מפה של Google', geocoding: '{n} חיפושי כתובת של Google', routes: '{n} חישובי מסלול של Google',
    creditRules: '{single} קרדיט Foody לכל עצירה שנשלחת לאופטימיזציה לשליח אחד; {fleet} לכל עצירה בחלוקה בין כמה שליחים. חישוב חוזר צורך קרדיטים מחדש. קרדיטים אלה נפרדים מקרדיטי Geoapify.',
    activation: 'תמחור מתוכנן להרחבה שנמצאת בהכנה. פנו ל-Foody לבדיקת הפעלה. המכסות החינמיות הנוכחיות נשארות בתוקף; הדף אינו יוצר מנוי ואינו גובה תשלום.',
    contact: 'פנייה ל-Foody', custom: 'נפחים גדולים יותר', quote: 'בהצעת מחיר', customText: 'הצעה בהתאם לנפח, לעסקים ולליווי הנדרשים.', noOverage: 'אין חיוב אוטומטי על חריגה. עלויות חברות המשלוחים נשארות נפרדות.',
    faqTitle: 'האם מפות ואופטימיזציה של מסלולים כרוכות בתשלום נוסף?',
    faqAnswer: 'ניהול משלוחים ושימוש משותף מוגן כלולים ב-Foody הזמנות ובחבילות המסעדה במסגרת מכסות הספקים הזמינות. הרחבת מפות Plus נמצאת בהכנה במחיר מתוכנן של {price} ₪ לפני מע״מ לחודש ולעסק, עם {credits} קרדיטים לאופטימיזציה של Foody ונפחי Google מוגדרים. יש לפנות ל-Foody לבדיקת הפעלה; חיוב אוטומטי והגדלת מכסות הספקים אינם מופעלים. עלויות חברות המשלוחים נגבות בנפרד.',
  },
};
