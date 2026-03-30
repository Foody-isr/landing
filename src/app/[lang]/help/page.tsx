import { getTopics, getArticles, getAllTopicPaths } from '@/lib/help/content';
import HelpProductTabs from '@/components/help/HelpProductTabs';
import HelpSearchBar from '@/components/help/HelpSearchBar';
import type { Lang } from '@/lib/help/types';
import type { ArticleSummary } from '@/lib/help/types';
import en from '@/lib/i18n/en.json';
import fr from '@/lib/i18n/fr.json';
import he from '@/lib/i18n/he.json';

const SUPPORTED: Lang[] = ['en', 'fr', 'he'];
const translations = { en, fr, he } as Record<Lang, typeof en>;

export function generateStaticParams() {
  return SUPPORTED.map((lang) => ({ lang }));
}

export default function HelpHubPage({ params }: { params: { lang: string } }) {
  const lang: Lang = SUPPORTED.includes(params.lang as Lang) ? (params.lang as Lang) : 'en';
  const t = translations[lang];

  const posTopics = getTopics(lang, 'foodypos');
  const adminTopics = getTopics(lang, 'foodyadmin');

  // Build search manifest: all articles for this locale
  const manifest: ArticleSummary[] = [];
  for (const { product, topic } of getAllTopicPaths(lang)) {
    const articles = getArticles(lang, product as 'foodypos' | 'foodyadmin', topic);
    manifest.push(...articles);
  }

  return (
    <main className="help-hub">
      <div className="help-hub-hero">
        <h1>{t.help.hub_title}</h1>
        <p>{t.help.hub_subtitle}</p>
        <HelpSearchBar
          manifest={manifest}
          placeholder={t.help.search_placeholder}
          noResultsLabel={t.help.no_results}
        />
      </div>

      <HelpProductTabs
        posTopics={posTopics}
        adminTopics={adminTopics}
        posLabel={t.help.tab_pos}
        adminLabel={t.help.tab_admin}
        lang={lang}
      />
    </main>
  );
}
