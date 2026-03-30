import { getTopics, getArticles, getAllTopicSlugs } from '@/lib/help/content';
import HelpSearchBar from '@/components/help/HelpSearchBar';
import TopicCard from '@/components/help/TopicCard';
import type { Lang, ArticleSummary } from '@/lib/help/types';
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

  const topics = getTopics(lang);

  // Build search manifest: all articles for this locale
  const manifest: ArticleSummary[] = [];
  for (const topicSlug of getAllTopicSlugs(lang)) {
    const articles = getArticles(lang, topicSlug);
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

      <div className="help-topic-grid">
        {topics.map((topic) => (
          <TopicCard
            key={topic.slug}
            icon={topic.icon}
            title={topic.title}
            description={topic.description}
            href={`/${lang}/help/${topic.slug}`}
            articleCount={topic.articleCount}
          />
        ))}
      </div>
    </main>
  );
}
