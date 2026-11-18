import { headers } from 'next/headers';
import type { Lang } from '@/lib/seo';

type Name = Record<Lang, string>;
export type BillingPolicy = { version:string; monthly_commitment_months:number; annual_period_months:number; annual_billed_months:number };
export type PublicLimits = {pos_users_unlimited?:boolean;pos:number;chef:number;kds:number;employees:number|null;pos_devices:number|null};
export type PublicCatalogue = {
 version:string; revision:number; currency:'ILS';
 billing_policy?:BillingPolicy;
 products:{id:'restaurant'|'ordering'|'kitchen';name:Name;monthly_minor:number;included:PublicLimits;capabilities?:string[]}[];
 plans:{id:string;name:Name;monthly_minor:number;included:PublicLimits;capabilities:string[];published:boolean;modules?:string[];automatic?:boolean;recommended?:boolean}[];
 tariffs:{id:string;name:Name;amount_minor:number|null;quantity?:number;unit:string}[];
 capabilities:{key:string;name:Name}[];
};

/** Loads the published catalogue from the API matching this hostname, with no account credentials. */
export async function publicCatalogue():Promise<PublicCatalogue|null> {
 const requestHeaders=await headers();
 const host=(requestHeaders.get('host')??'').split(':')[0];
 const production=host==='foody-pos.co.il'||host==='www.foody-pos.co.il';
 const local=host==='localhost'||host==='127.0.0.1';
 const origin=production?'https://api.foody-pos.co.il':local?(process.env.NEXT_PUBLIC_API_URL??'http://localhost:8080'):'https://dev-api.foody-pos.co.il';
 const response=await fetch(`${origin.replace(/\/$/,'')}/api/v1/public/foody-catalog`,{credentials:'omit',next:{revalidate:60},signal:AbortSignal.timeout(6000)});
 // Backwards-compatible rollout only: an API without the endpoint still uses the reviewed initial grid.
 if(response.status===404)return null;
 if(!response.ok)throw new Error('pricing_unavailable');
 const c=await response.json() as PublicCatalogue;
 if(c.currency!=='ILS'||!Array.isArray(c.products)||c.products.length!==3||!Array.isArray(c.tariffs)||!Array.isArray(c.capabilities)||!Array.isArray(c.plans))throw new Error('pricing_invalid');
 if(c.billing_policy&&(c.billing_policy.monthly_commitment_months!==0||c.billing_policy.annual_period_months!==12||c.billing_policy.annual_billed_months!==11))throw new Error('pricing_policy_invalid');
 for(const p of c.products){if(!Number.isSafeInteger(p.monthly_minor)||p.monthly_minor<1||!p.name?.fr||!p.name?.en||!p.name?.he)throw new Error('pricing_invalid');}
 for(const r of c.tariffs){if(r.amount_minor!==null&&(!Number.isSafeInteger(r.amount_minor)||r.amount_minor<0))throw new Error('pricing_invalid');}
 return c;
}

export const catalogueCopy = {
 en:{licencesTitle:'Additional licences',unlimited:'Unlimited',services:'Additional services',unavailable:'Prices are temporarily unavailable. Contact Foody for the current offers.',details:'All included features',pos:'named POS users',chef:'chef users',kds:'kitchen displays',employees:'accounts, including owner',pos_devices:'physical POS devices',plans:'Combined plans',licences:'Named users and physical POS devices have separate quotas. Included quantities are listed with each offer.',faqPrice:'How much do the modules cost?',faqExtras:'What is billed separately?',faqExtraAnswer:'Setup, equipment, training and payment services use the prices shown on this page. Quotation-only services require an agreed offer.',faqContract:'Does a catalogue update change my contract?',faqContractAnswer:'Your accepted prices and included rights remain unchanged. An addition requires your approval.'},
 fr:{licencesTitle:'Licences supplémentaires',unlimited:'Illimité',services:'Prestations complémentaires',unavailable:'Les tarifs sont temporairement indisponibles. Contactez Foody pour les offres actuelles.',details:'Toutes les fonctionnalités incluses',pos:'utilisateurs caisse nominatifs',chef:'accès chef',kds:'écrans cuisine',employees:'comptes, propriétaire inclus',pos_devices:'postes POS physiques',plans:'Formules composées',licences:'Les utilisateurs nominatifs et les postes POS physiques ont des quotas distincts. Les quantités incluses figurent dans chaque offre.',faqPrice:'Combien coûtent les modules ?',faqExtras:'Quelles prestations sont facturées séparément ?',faqExtraAnswer:'La mise en service, le matériel, la formation et les services de paiement suivent les tarifs affichés sur cette page. Les prestations sur devis nécessitent un accord.',faqContract:'Une mise à jour du catalogue modifie-t-elle mon contrat ?',faqContractAnswer:'Vos prix et droits acceptés sont conservés. Tout ajout nécessite votre accord.'},
 he:{licencesTitle:'רישיונות נוספים',unlimited:'ללא הגבלה',services:'שירותים נוספים',unavailable:'המחירים אינם זמינים כרגע. פנו ל־Foody לקבלת ההצעות העדכניות.',details:'כל היכולות הכלולות',pos:'משתמשי קופה אישיים',chef:'גישות שף',kds:'מסכי מטבח',employees:'חשבונות, כולל הבעלים',pos_devices:'עמדות קופה פיזיות',plans:'מסלולים משולבים',licences:'למשתמשים אישיים ולעמדות קופה פיזיות יש מכסות נפרדות. הכמויות הכלולות מוצגות בכל הצעה.',faqPrice:'כמה עולים המודולים?',faqExtras:'מה מחויב בנפרד?',faqExtraAnswer:'הקמה, ציוד, הדרכה ושירותי תשלום מחויבים לפי המחירים המוצגים בעמוד. שירותים בהצעת מחיר דורשים הסכמה.',faqContract:'האם עדכון הקטלוג משנה את החוזה שלי?',faqContractAnswer:'המחירים והזכויות שאושרו נשמרים. כל תוספת מחייבת את הסכמתכם.'},
};
