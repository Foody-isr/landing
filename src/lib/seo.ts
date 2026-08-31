import type { Metadata } from 'next';

export type Lang = 'en' | 'fr' | 'he';
export type MarketingPage = 'home' | 'pricing' | 'contact' | 'food' | 'restaurants';

export const SUPPORTED_LANGS: Lang[] = ['en', 'fr', 'he'];
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://foody-pos.co.il';

const PATHS: Record<MarketingPage, string> = {
  home: '',
  pricing: '/pricing',
  contact: '/contact',
  food: '/sectors/food-beverage',
  restaurants: '/sectors/food-beverage/restaurants',
};

const SEO: Record<Lang, Record<MarketingPage, { title: string; description: string }>> = {
  he: {
    home: {
      title: 'מערכת הזמנות ישירות למסעדות בישראל | Foody',
      description: 'קבלו הזמנות ישירות באתר ממותג, באיסוף, במשלוח או ב-QR. נהלו תשלומים, מטבח ולקוחות במקום אחד, ללא עמלת Foody על כל הזמנה.',
    },
    pricing: {
      title: 'מחירון Foody למסעדות | החל מ-299 ₪ לחודש',
      description: 'מסלולים שקופים למסעדות ובתי קפה בישראל: Starter ב-299 ₪ ו-Premium ב-799 ₪ לחודש. עמלות סליקה וחומרה מפורטות בנפרד.',
    },
    contact: {
      title: 'הזמינו הדגמה של Foody למסעדה שלכם',
      description: 'ספרו לנו על המסעדה, בית הקפה או המטבח שלכם וקבלו הדגמה מותאמת של הזמנות ישירות, קופה, QR ותשלומים.',
    },
    food: {
      title: 'מערכת הזמנות וקופה למסעדות ובתי קפה | Foody',
      description: 'אתר הזמנות ישירות, קופה, QR, מטבח, תשלומים ומלאי למסעדות, בתי קפה ומטבחי משלוחים בישראל.',
    },
    restaurants: {
      title: 'הזמנות אונליין ישירות למסעדות בישראל | Foody',
      description: 'בנו ערוץ הזמנות ממותג למסעדה עם איסוף, משלוח ותשלום אונליין, ושמרו על קשר ישיר עם הלקוחות שלכם.',
    },
  },
  en: {
    home: {
      title: 'Direct Online Ordering for Restaurants in Israel | Foody',
      description: 'Take direct pickup, delivery and QR orders from your own branded site. Manage payments, kitchen and customers in one place, with no Foody percentage commission per order.',
    },
    pricing: {
      title: 'Foody Restaurant Pricing | From ₪299 per Month',
      description: 'Transparent plans for Israeli restaurants and cafés: Starter at ₪299 and Premium at ₪799 per month. Payment processing and hardware are priced separately.',
    },
    contact: {
      title: 'Book a Foody Demo for Your Restaurant',
      description: 'Tell us about your restaurant, café or delivery kitchen and get a tailored demo of direct ordering, POS, QR and payments.',
    },
    food: {
      title: 'Restaurant and Café Ordering & POS System | Foody',
      description: 'Direct online ordering, POS, QR, kitchen, payments and inventory for restaurants, cafés and delivery kitchens in Israel.',
    },
    restaurants: {
      title: 'Direct Online Ordering for Israeli Restaurants | Foody',
      description: 'Build a branded pickup and delivery channel, accept online payments and keep a direct relationship with your restaurant customers.',
    },
  },
  fr: {
    home: {
      title: 'Commande directe pour restaurants en Israël | Foody',
      description: 'Recevez les commandes à emporter, en livraison et par QR depuis votre propre site. Gérez paiements, cuisine et clients sans commission Foody en pourcentage par commande.',
    },
    pricing: {
      title: 'Tarifs Foody pour restaurants | Dès 299 ₪ par mois',
      description: 'Des formules transparentes pour les restaurants et cafés en Israël : Starter à 299 ₪ et Premium à 799 ₪ par mois. Traitement des paiements et matériel séparés.',
    },
    contact: {
      title: 'Demandez une démo Foody pour votre restaurant',
      description: 'Présentez-nous votre restaurant, café ou dark kitchen et obtenez une démo adaptée de la commande directe, du POS, du QR et des paiements.',
    },
    food: {
      title: 'Commande et POS pour restaurants et cafés | Foody',
      description: 'Commande directe en ligne, POS, QR, cuisine, paiements et stocks pour les restaurants, cafés et dark kitchens en Israël.',
    },
    restaurants: {
      title: 'Commande en ligne directe pour restaurants en Israël | Foody',
      description: 'Créez un canal de commande à votre image pour le retrait et la livraison, acceptez les paiements et gardez une relation directe avec vos clients.',
    },
  },
};

const OPEN_GRAPH_LOCALES: Record<Lang, string> = {
  he: 'he_IL',
  en: 'en_IL',
  fr: 'fr_IL',
};

export function resolveLang(value: string): Lang {
  return SUPPORTED_LANGS.includes(value as Lang) ? (value as Lang) : 'he';
}

export function getMarketingMetadata(langValue: string, page: MarketingPage): Metadata {
  const lang = resolveLang(langValue);
  const pathname = PATHS[page];
  const copy = SEO[lang][page];
  const canonical = `${SITE_URL}/${lang}${pathname}`;

  return {
    title: copy.title,
    description: copy.description,
    alternates: {
      canonical,
      languages: {
        'he-IL': `${SITE_URL}/he${pathname}`,
        'en-IL': `${SITE_URL}/en${pathname}`,
        'fr-IL': `${SITE_URL}/fr${pathname}`,
        'x-default': `${SITE_URL}/he${pathname}`,
      },
    },
    openGraph: {
      title: copy.title,
      description: copy.description,
      siteName: 'Foody',
      type: 'website',
      url: canonical,
      locale: OPEN_GRAPH_LOCALES[lang],
      images: [{ url: '/assets/og-image.png', width: 1200, height: 630, alt: 'Foody' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: copy.title,
      description: copy.description,
      images: ['/assets/og-image.png'],
    },
    robots: { index: true, follow: true },
  };
}

export function getMarketingPath(page: MarketingPage): string {
  return PATHS[page];
}
