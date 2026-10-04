import type { MetadataRoute } from "next";
import { getAllArticlePaths, getTopics } from "@/lib/help/content";
import {
  getMarketingPath,
  languageAlternates,
  MarketingPage,
  SITE_URL,
  SUPPORTED_LANGS,
} from "@/lib/seo";

const PAGES: MarketingPage[] = [
  "home",
  "pricing",
  "contact",
  "food",
  "restaurants",
  "chains",
  "retail",
  "pos",
  "kitchen",
  "ordering",
  "payments",
  "hardware",
  "equipment",
  "companion",
];

/** Lists acquisition routes and existing help content without fictitious update dates. */
export default function sitemap(): MetadataRoute.Sitemap {
  const pages = PAGES.flatMap((page) =>
    SUPPORTED_LANGS.map((lang) => ({
      url: `${SITE_URL}/${lang}${getMarketingPath(page)}`,
      changeFrequency: "monthly" as const,
      priority: page === "home" ? 1 : 0.8,
      alternates: { languages: languageAlternates(getMarketingPath(page)) },
    })),
  );
  const help = SUPPORTED_LANGS.flatMap((lang) => [
    { url: `${SITE_URL}/${lang}/help`, priority: 0.6 },
    ...getTopics(lang).map((topic) => ({
      url: `${SITE_URL}/${lang}/help/${topic.slug}`,
      priority: 0.5,
    })),
    ...getAllArticlePaths(lang).map(({ topic, slug }) => ({
      url: `${SITE_URL}/${lang}/help/${topic}/${slug}`,
      priority: 0.5,
    })),
  ]);
  return [...pages, ...help];
}
