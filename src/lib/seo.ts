import type { Metadata } from "next";
import { marketing, type SolutionKey } from "./marketing/content";
import { getSolution } from "./marketing/solutions";
import { routes } from "./marketing/ui";
import social from "./marketing/social.json";
import { getShareCard } from "./marketing/share-cards";

export type Lang = "en" | "fr" | "he";
export type MarketingPage =
  | "home"
  | "pricing"
  | "contact"
  | "food"
  | SolutionKey;
export const SUPPORTED_LANGS: Lang[] = ["he", "en", "fr"];
export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://foody-pos.co.il"
).replace(/\/$/, "");
const PATHS: Record<MarketingPage, string> = {
  home: "",
  pricing: "/pricing",
  contact: "/contact",
  food: "/sectors/food-beverage",
  ...routes,
};
const TITLES = {
  he: {
    home: "Foody POS | קופה וניהול מסעדות בישראל",
    pricing: "מחיר קופה למסעדה בישראל | מסלולי Foody POS",
    contact: "תיאום הדגמה והצעת מחיר לקופה וסליקה | Foody",
    food: "פתרונות למסעדות, בתי קפה ורשתות בישראל | Foody",
  },
  fr: {
    home: "Foody POS | Caisse et gestion de restaurant en Israël",
    pricing: "Prix d’une caisse restaurant en Israël | Foody POS",
    contact: "Démo et devis caisse et slika en Israël | Foody",
    food: "Solutions pour restaurants et cafés en Israël | Foody",
  },
  en: {
    home: "Foody POS | Restaurant POS and Management in Israel",
    pricing: "Restaurant POS Pricing in Israel | Foody POS",
    contact: "Book a POS & Payments Demo in Israel | Foody",
    food: "Restaurant & Café Solutions in Israel | Foody",
  },
};
const HOME_DESCRIPTIONS = {
  he: "האתר הרשמי של Foody POS בישראל. קופה ל־iPad ולאנדרואיד, שולחנות, הזמנות אונליין וניהול מטבח. ממשקי עבודה בעברית, בצרפתית ובאנגלית, והתקנה והדרכה בבית העסק.",
  fr: "Site officiel de Foody POS en Israël. Caisse iPad et Android, tables, commandes en ligne et gestion de cuisine. Interfaces en français, hébreu et anglais, installation et formation sur place.",
  en: "Official Foody POS website in Israel. iPad and Android POS, tables, online ordering and kitchen management. Hebrew, French and English interfaces, with on-site setup and training.",
};

/** Returns the localized, versioned sharing image and its accessible description. */
function socialImage(lang: Lang, path = "", title = "") {
  const card = path ? getShareCard(lang, path, title) : null;
  return {
    url: card?.image || social[lang].image,
    width: 1200,
    height: 630,
    type: "image/png",
    alt: card?.alt || social[lang].alt,
  };
}

/** Resolves a supported language, using Hebrew as the acquisition default. */
export function resolveLang(value: string): Lang {
  return SUPPORTED_LANGS.includes(value as Lang) ? (value as Lang) : "he";
}

/** Returns canonicals and hreflang links for the same resource in each language. */
export function languageAlternates(pathname: string) {
  return {
    "he-IL": `${SITE_URL}/he${pathname}`,
    "en-IL": `${SITE_URL}/en${pathname}`,
    "fr-IL": `${SITE_URL}/fr${pathname}`,
    "x-default": `${SITE_URL}/he${pathname}`,
  };
}

/** Generates search and social metadata from the actual localized page content. */
export function getMarketingMetadata(
  langValue: string,
  page: MarketingPage,
): Metadata {
  const lang = resolveLang(langValue);
  const path = PATHS[page];
  let title: string;
  let description: string;
  if (
    page === "home" ||
    page === "food" ||
    page === "pricing" ||
    page === "contact"
  ) {
    title = TITLES[lang][page];
    description =
      page === "pricing" || page === "contact"
        ? marketing[lang][page].description
        : HOME_DESCRIPTIONS[lang];
  } else {
    const content = getSolution(lang, page);
    title = `${content.title} | ${page === "restaurants" ? "Foody POS" : "Foody"}`;
    description = content.description;
  }
  const canonical = `${SITE_URL}/${lang}${path}`;
  const image = socialImage(lang, path, title);
  const shareTitle = page === "home" ? social[lang].title : title;
  const shareDescription = page === "home" ? social[lang].description : description;
  return {
    title,
    description,
    alternates: { canonical, languages: languageAlternates(path) },
    openGraph: {
      title: shareTitle,
      description: shareDescription,
      siteName: "Foody POS",
      type: "website",
      url: canonical,
      locale: `${lang}_IL`,
      alternateLocale: SUPPORTED_LANGS.filter((l) => l !== lang).map(
        (l) => `${l}_IL`,
      ),
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: shareTitle,
      description: shareDescription,
      images: [image],
    },
    robots: { index: true, follow: true },
  };
}

/** Returns the locale-independent route of a marketing page. */
export function getMarketingPath(page: MarketingPage): string {
  return PATHS[page];
}

/** Metadata for supporting content with a self-canonical and no fabricated translations. */
export function getContentMetadata(
  lang: Lang,
  path: string,
  title: string,
  description: string,
  translatedLanguages: Lang[] = [lang],
): Metadata {
  const canonical = `${SITE_URL}/${lang}${path}`;
  const image = socialImage(lang, path, title);
  return {
    title: `${title} | Foody`,
    description,
    alternates: {
      canonical,
      languages: Object.fromEntries(
        translatedLanguages.map((l) => [`${l}-IL`, `${SITE_URL}/${l}${path}`]),
      ),
    },
    openGraph: {
      title: `${title} | Foody`,
      description,
      siteName: "Foody POS",
      url: canonical,
      type: "website",
      locale: `${lang}_IL`,
      images: [image],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Foody`,
      description,
      images: [image],
    },
  };
}
