import type { MetadataRoute } from 'next';
import { getMarketingPath, SITE_URL, SUPPORTED_LANGS, type MarketingPage } from '@/lib/seo';

const PAGES: MarketingPage[] = ['home', 'pricing', 'contact', 'food', 'restaurants'];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.flatMap((page) => {
    const pathname = getMarketingPath(page);
    const languages = {
      he: `${SITE_URL}/he${pathname}`,
      en: `${SITE_URL}/en${pathname}`,
      fr: `${SITE_URL}/fr${pathname}`,
    };

    return SUPPORTED_LANGS.map((lang) => ({
      url: languages[lang],
      lastModified: new Date(),
      changeFrequency: page === 'home' ? ('weekly' as const) : ('monthly' as const),
      priority: page === 'home' ? 1 : 0.8,
      alternates: { languages },
    }));
  });
}
