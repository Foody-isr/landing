import { getContentMetadata } from '@/lib/seo';
import { getTopics, getHelpArticles } from '@/lib/help/content';
import HelpSearchBar from '@/components/help/HelpSearchBar';
import TopicCard from '@/components/help/TopicCard';
import { SupportEntry } from '@/components/help/SupportAssistant';
import Link from 'next/link';
import type { Lang } from '@/lib/help/types';
import en from '@/lib/i18n/en.json';
import fr from '@/lib/i18n/fr.json';
import he from '@/lib/i18n/he.json';

const SUPPORTED: Lang[] = ['en', 'fr', 'he'];
const translations = { en, fr, he } as Record<Lang, typeof en>;

/** Search metadata for the help hub in its actual language. */
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  const lang = (await params).lang as Lang;
  const t = translations[lang];
  return getContentMetadata(lang, '/help', t.help.hub_title, t.help.hub_subtitle, SUPPORTED);
}

export function generateStaticParams() {
  return SUPPORTED.map((lang) => ({ lang }));
}

export default async function HelpHubPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang: requestedLang } = await params;
  const lang: Lang = SUPPORTED.includes(requestedLang as Lang) ? (requestedLang as Lang) : 'en';
  const t = translations[lang];

  const topics = getTopics(lang);

  const manifest = getHelpArticles(lang);
  const startingIds = ['getting-started/first-login', 'menu/menus-and-groups', 'orders/managing-orders', 'kitchen/stock-management', 'printers/epson-tm-u220iib', 'getting-started/using-support'];
  const popular = startingIds.flatMap(id => manifest.filter(a => a.id === id));

  return (
    <main id="main-content" className="help-hub">
      <div className="help-hub-hero">
        <h1>{t.help.hub_title}</h1>
        <p>{t.help.hub_subtitle}</p>
        <HelpSearchBar
          manifest={manifest}
          lang={lang}
          fallbackLabel={t.help.english}
          placeholder={t.help.search_placeholder}
          noResultsLabel={t.help.no_results}
        />
        <SupportEntry />
      </div>

      <h2 className="support-section-title">{t.help.topics}</h2>
      <div className="help-topic-grid">
        {topics.map((topic) => (
          <TopicCard
            key={topic.slug}
            icon={topic.icon}
            topic={topic.slug}
            title={topic.title}
            description={topic.description}
            href={`/${lang}/help/${topic.slug}`}
            articleCount={topic.articleCount}
            countLabel={topic.articleCount === 1 ? t.help.article : t.help.articles}
          />
        ))}
      </div>
      <section className="support-popular">
        <h2>{t.help.popular}</h2>
        <div>{popular.map(article => <Link href={article.url} key={article.id}><span>{article.title}</span>{article.lang !== lang && <small>{t.help.english}</small>}<span aria-hidden="true">↗</span></Link>)}</div>
      </section>
      <section className="support-contact"><div><h2>{t.help.contact_title}</h2><p>{t.help.contact_description}</p></div><a className="button button-dark" href="mailto:support@foody-pos.co.il">{t.help.contact_action}</a></section>
    </main>
  );
}
