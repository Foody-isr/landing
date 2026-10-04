import type { Metadata } from "next";
import { marketing, type SolutionKey } from "./marketing/content";
import { getSolution } from "./marketing/solutions";
import { routes } from "./marketing/ui";
import social from "./marketing/social.json";

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
    home: "קופה ממוחשבת בענן למסעדות ולעסקים בישראל | Foody",
    pricing: "מחירי קופה ומערכת לניהול מסעדה בישראל | Foody",
    contact: "תיאום הדגמה והצעת מחיר לקופה וסליקה | Foody",
    food: "פתרונות למסעדות, בתי קפה ורשתות בישראל | Foody",
  },
  fr: {
    home: "Caisse cloud iPad et Android en Israël | Foody",
    pricing: "Tarifs caisse et gestion restaurant en Israël | Foody",
    contact: "Démo et devis caisse et slika en Israël | Foody",
    food: "Solutions pour restaurants et cafés en Israël | Foody",
  },
  en: {
    home: "Cloud POS for iPad & Android in Israel | Foody",
    pricing: "POS & Restaurant Software Pricing in Israel | Foody",
    contact: "Book a POS & Payments Demo in Israel | Foody",
    food: "Restaurant & Café Solutions in Israel | Foody",
  },
};
const HOME_DESCRIPTIONS = {
  he: "קופת ענן ב־iPad וב־Android למסעדות ולעסקים בישראל. שותף Verifone, סליקה, Epson ו־Star Micronics. ניהול מטבח עם Foody Kitchen ו־Foody Companion.",
  fr: "Caisse cloud iPad et Android en Israël. Partenaire Verifone, intégrateur Epson et Star Micronics. Gérez votre cuisine avec Foody Cuisine et Foody Compagnon.",
  en: "Cloud POS for iPad and Android in Israel. Verifone partner, Epson and Star Micronics integrator. Run your kitchen with Foody Kitchen and Foody Companion.",
};

/** Returns the localized, versioned sharing image and its accessible description. */
function socialImage(lang: Lang) {
  return {
    url: social[lang].image,
    width: 1200,
    height: 630,
    type: "image/png",
    alt: social[lang].alt,
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
    title = `${content.title} | Foody`;
    description = content.description;
  }
  const canonical = `${SITE_URL}/${lang}${path}`;
  const image = socialImage(lang);
  const shareTitle = page === "home" ? social[lang].title : title;
  const shareDescription = page === "home" ? social[lang].description : description;
  return {
    title,
    description,
    alternates: { canonical, languages: languageAlternates(path) },
    openGraph: {
      title: shareTitle,
      description: shareDescription,
      siteName: "Foody",
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
  const image = socialImage(lang);
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
