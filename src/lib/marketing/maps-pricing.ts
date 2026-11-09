import type { Lang } from '@/lib/seo';
import offer from './maps-offers.json';

/** Informational future Foody extension; mirrored from the API's canonical contract. */
export const mapsOffer = offer;

type MapsPricingCopy = {
  title: string; description: string; shared: string; details: string; included: string; includedUnit: string;
  includedText: string; plus: string; planned: string; monthly: string;
  optimization: string; tiles: string; geocoding: string; routes: string;
  creditRules: string; activation: string; contact: string; custom: string;
  customText: string; noOverage: string;
};

/** Localized commercial copy for maps, separate from supplier API prices. */
export const mapsPricing: Record<Lang, MapsPricingCopy> = {
  fr: {
    title: 'Foody Livraison',
    description: 'Affectez les commandes aux livreurs, suivez les remises et organisez les tournées avec les cartes et l’optimisation des itinéraires.',
    shared: 'Avec Foody Commandes, l’usage partagé est inclus dans les quotas disponibles. Les volumes supérieurs et l’accompagnement se chiffrent sur devis.',
    details: 'Voir les quotas et l’extension Cartes Plus',
    included: 'Usage partagé inclus', includedUnit: 'de supplément Foody',
    includedText: 'Gestion des tournées et utilisation protégée dans les quotas disponibles de Google et Geoapify. Ces quotas sont partagés par les restaurants Foody ; aucun volume fournisseur individuel n’est réservé.',
    plus: 'Cartes Plus', planned: 'Extension en préparation', monthly: 'HT / mois / établissement',
    optimization: '{n} crédits d’optimisation Foody', tiles: '{n} tuiles de carte Google', geocoding: '{n} recherches d’adresses Google', routes: '{n} calculs de trajet Google',
    creditRules: '{single} crédit Foody par arrêt soumis à l’optimisation d’un livreur ; {fleet} par arrêt en répartition entre plusieurs livreurs. Les recalculs consomment de nouveau des crédits. Ces crédits sont distincts des crédits Geoapify.',
    activation: 'Tarif prévu pour l’extension, actuellement en préparation. Contactez Foody pour étudier son activation. Les plafonds gratuits actuels restent appliqués ; aucune souscription ni aucun paiement ne sont déclenchés depuis cette page.',
    contact: 'Demander un devis', custom: 'Volumes supérieurs', customText: 'Une proposition adaptée au volume, aux établissements et à l’accompagnement nécessaires.', noOverage: 'Aucun dépassement payant automatique. Les frais des transporteurs restent distincts.',
  },
  en: {
    title: 'Foody Delivery',
    description: 'Assign orders to couriers, track handoffs and plan deliveries with maps and route optimization.',
    shared: 'Foody Orders includes shared usage within available allowances. Higher volumes and additional support are quoted separately.',
    details: 'View allowances and the Maps Plus extension',
    included: 'Included shared usage', includedUnit: 'additional Foody charge',
    includedText: 'Route management and protected usage within available Google and Geoapify allowances. These are shared across Foody restaurants; no individual supplier allowance is reserved.',
    plus: 'Maps Plus', planned: 'Extension in preparation', monthly: 'excl. VAT / month / establishment',
    optimization: '{n} Foody optimization credits', tiles: '{n} Google map tiles', geocoding: '{n} Google address lookups', routes: '{n} Google route calls',
    creditRules: '{single} Foody credit per stop submitted to single-courier optimization; {fleet} per stop in multi-courier allocation. Recalculation uses credits again. These are separate from Geoapify credits.',
    activation: 'Planned pricing for an extension currently in preparation. Contact Foody to discuss activation. Current free caps remain active; this page does not create a subscription or take payment.',
    contact: 'Request a quote', custom: 'Higher volumes', customText: 'A proposal matched to your volume, establishments and support needs.', noOverage: 'No automatic paid overage. External courier charges remain separate.',
  },
  he: {
    title: 'Foody משלוחים',
    description: 'שבצו הזמנות לשליחים, עקבו אחר המסירה ותכננו סבבי משלוחים בעזרת מפות ואופטימיזציה של מסלולים.',
    shared: 'Foody הזמנות כולל שימוש משותף במסגרת המכסות הזמינות. נפחים גבוהים יותר וליווי מתומחרים בהצעת מחיר.',
    details: 'למכסות השימוש ולהרחבת מפות Plus',
    included: 'שימוש משותף כלול', includedUnit: 'תוספת תשלום ל-Foody',
    includedText: 'ניהול סבבי משלוחים ושימוש מוגן במסגרת המכסות הזמינות של Google ו-Geoapify. המכסות משותפות למסעדות Foody; לא נשמרת מכסת ספק נפרדת לכל עסק.',
    plus: 'מפות Plus', planned: 'הרחבה בהכנה', monthly: 'לפני מע״מ / חודש / עסק',
    optimization: '{n} קרדיטים לאופטימיזציה של Foody', tiles: '{n} אריחי מפה של Google', geocoding: '{n} חיפושי כתובת של Google', routes: '{n} חישובי מסלול של Google',
    creditRules: '{single} קרדיט Foody לכל עצירה שנשלחת לאופטימיזציה לשליח אחד; {fleet} לכל עצירה בחלוקה בין כמה שליחים. חישוב חוזר צורך קרדיטים מחדש. קרדיטים אלה נפרדים מקרדיטי Geoapify.',
    activation: 'תמחור מתוכנן להרחבה שנמצאת בהכנה. פנו ל-Foody לבדיקת הפעלה. המכסות החינמיות הנוכחיות נשארות בתוקף; הדף אינו יוצר מנוי ואינו גובה תשלום.',
    contact: 'לבקשת הצעת מחיר', custom: 'נפחים גדולים יותר', customText: 'הצעה בהתאם לנפח, לעסקים ולליווי הנדרשים.', noOverage: 'אין חיוב אוטומטי על חריגה. עלויות חברות המשלוחים נשארות נפרדות.',
  },
};
