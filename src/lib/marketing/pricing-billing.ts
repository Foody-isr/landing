import type { Lang } from "@/lib/seo";
import type { BillingPolicy } from "./public-catalogue";

export type BillingPeriod = "monthly" | "annual";

const comparisonMonths = 12;
const annualPaidMonths = 11;

/** Calculates the twelve-month software offer in agorot, without rounding a discount percentage. */
export function softwareBillingAmounts(monthlyMinor: number, policy?: BillingPolicy) {
  if (!Number.isSafeInteger(monthlyMinor) || monthlyMinor < 1 || monthlyMinor > Math.floor(Number.MAX_SAFE_INTEGER / comparisonMonths)) {
    throw new RangeError("Invalid monthly software price");
  }
  return {
    monthlyMinor,
    annualMinor: monthlyMinor * (policy?.annual_billed_months ?? annualPaidMonths),
    twelveMonthsMinor: monthlyMinor * comparisonMonths,
    savingMinor: monthlyMinor * (comparisonMonths - (policy?.annual_billed_months ?? annualPaidMonths)),
  };
}

/** Localized labels for software payment frequency, distinct from the contract duration. */
export const billingCopy: Record<Lang, {
  label: string;
  monthly: string;
  monthlyBadge: string;
  annual: string;
  badge: string;
  discount: string;
  monthlyTerms: string;
  annualTerms: string;
  scope: string;
  monthlyUnit: string;
  annualUnit: string;
  monthlyPayment: string;
  annualPayment: string;
  saving: string;
  monthlyAnnouncement: string;
  annualAnnouncement: string;
  faqQuestion: string;
  faqAnswer: string;
}> = {
  fr: {
    label: "Rythme de paiement des abonnements logiciels",
    monthly: "Mensuel",
    monthlyBadge: "Sans engagement",
    annual: "Annuel",
    badge: "1 mois offert",
    discount: "8,33 % d’économie avec l’annuel",
    monthlyTerms: "Sans engagement de durée. Vous payez chaque mois.",
    annualTerms: "12 mois payés à l’avance, au prix de 11.",
    scope: "L’offre annuelle concerne les modules et formules. Licences supplémentaires, options, matériel, mise en service et paiements facturés séparément.",
    monthlyUnit: "/ mois",
    annualUnit: "/ an",
    monthlyPayment: "Facturé chaque mois",
    annualPayment: "12 mois payés en une fois",
    saving: "Économisez {amount} par an",
    monthlyAnnouncement: "Tarifs mensuels affichés, sans engagement de durée.",
    annualAnnouncement: "Tarifs annuels affichés, payables en une fois. Un mois offert par rapport à douze mensualités.",
    faqQuestion: "Quelle différence entre paiement mensuel et annuel ?",
    faqAnswer: "Le paiement mensuel est sans engagement de durée : vous payez chaque mois, sans vous engager pour un an. Si vous choisissez le paiement annuel, vous réglez 12 mois à l’avance au prix de 11 : l’économie représente un mois du module ou de la formule choisie, soit 8,33 % par rapport à 12 mensualités. Les modalités de résiliation figurent dans votre devis et votre contrat. Les licences supplémentaires, options, matériel, mise en service, formation et services de paiement sont facturés séparément et ne bénéficient pas de cette remise. Les conditions de votre contrat déjà accepté restent applicables.",
  },
  en: {
    label: "Software subscription billing frequency",
    monthly: "Monthly",
    monthlyBadge: "No commitment",
    annual: "Annual",
    badge: "1 month free",
    discount: "Save 8.33% with annual billing",
    monthlyTerms: "No minimum term. Pay each month.",
    annualTerms: "12 months paid upfront for the price of 11.",
    scope: "Annual pricing applies to modules and bundles. Additional licences, options, hardware, setup and payment services are billed separately.",
    monthlyUnit: "/ month",
    annualUnit: "/ year",
    monthlyPayment: "Billed every month",
    annualPayment: "12 months paid upfront",
    saving: "Save {amount} per year",
    monthlyAnnouncement: "Monthly prices displayed, with no minimum term.",
    annualAnnouncement: "Annual prices displayed, paid upfront. One month free compared with twelve monthly payments.",
    faqQuestion: "How do monthly and annual billing differ?",
    faqAnswer: "Monthly billing has no minimum term: you pay each month without committing to a year. If you choose annual billing, you pay for 12 months upfront at the price of 11: you save one month of your chosen module or bundle, or 8.33% compared with 12 monthly payments. Cancellation terms are set out in your quote and contract. Additional licences, options, hardware, setup, training and payment services are billed separately and do not receive this discount. The terms of your already accepted contract still apply.",
  },
  he: {
    label: "תדירות התשלום עבור מנויי התוכנה",
    monthly: "חודשי",
    monthlyBadge: "ללא התחייבות",
    annual: "שנתי",
    badge: "חודש במתנה",
    discount: "חיסכון של 8.33% בתשלום שנתי",
    monthlyTerms: "ללא התחייבות לתקופה. משלמים מדי חודש.",
    annualTerms: "12 חודשים בתשלום מראש, במחיר של 11.",
    scope: "המחיר השנתי חל על מודולים וחבילות. רישיונות נוספים, תוספות, ציוד, הקמה ושירותי תשלום מחויבים בנפרד.",
    monthlyUnit: "לחודש",
    annualUnit: "לשנה",
    monthlyPayment: "חיוב מדי חודש",
    annualPayment: "12 חודשים בתשלום אחד מראש",
    saving: "חיסכון של {amount} בשנה",
    monthlyAnnouncement: "מוצגים מחירים חודשיים, ללא התחייבות לתקופה.",
    annualAnnouncement: "מוצגים מחירים שנתיים בתשלום מראש. חודש במתנה לעומת שנים עשר תשלומים חודשיים.",
    faqQuestion: "מה ההבדל בין תשלום חודשי לשנתי?",
    faqAnswer: "התשלום החודשי הוא ללא התחייבות לתקופה: משלמים מדי חודש בלי להתחייב לשנה. אם בוחרים בתשלום שנתי, משלמים מראש עבור 12 חודשים במחיר של 11: החיסכון הוא חודש אחד של המודול או החבילה שבחרתם, כלומר 8.33% לעומת 12 תשלומים חודשיים. תנאי הביטול מפורטים בהצעת המחיר ובחוזה. רישיונות נוספים, תוספות, ציוד, הקמה, הדרכה ושירותי תשלום מחויבים בנפרד ואינם כלולים בהנחה זו. תנאי החוזה שכבר אישרתם נשארים בתוקף.",
  },
};
