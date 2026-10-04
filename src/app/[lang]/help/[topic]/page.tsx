import { getContentMetadata } from '@/lib/seo';
import { notFound } from 'next/navigation';
import { getTopics, getArticles, getAllTopicSlugs } from '@/lib/help/content';
import Breadcrumb from '@/components/help/Breadcrumb';
import ArticleList from '@/components/help/ArticleList';
import type { Lang } from '@/lib/help/types';
import en from '@/lib/i18n/en.json';
import fr from '@/lib/i18n/fr.json';
import he from '@/lib/i18n/he.json';

const SUPPORTED: Lang[] = ['en', 'fr', 'he'];
const translations = { en, fr, he } as Record<Lang, typeof en>;

/** Topic metadata reflects existing localized topic content. */
export async function generateMetadata({ params }: { params: Promise<{ lang: string; topic: string }> }) {
  const { lang: value, topic } = await params;
  const lang = value as Lang;
  const item = getTopics(lang).find(t => t.slug === topic);
  if (!item) notFound();
  const available = SUPPORTED.filter(l => getTopics(l).some(t => t.slug === topic));
  return getContentMetadata(lang, `/help/${topic}`, item.title, item.description, available);
}

export function generateStaticParams() {
  const params = [];
  for (const lang of SUPPORTED) {
    for (const topic of getAllTopicSlugs(lang)) {
      params.push({ lang, topic });
    }
  }
  return params;
}

export default async function HelpTopicPage({
  params,
}: {
  params: Promise<{ lang: string; topic: string }>;
}) {
  const { lang: requestedLang, topic } = await params;
  const lang: Lang = SUPPORTED.includes(requestedLang as Lang) ? (requestedLang as Lang) : 'en';
  const t = translations[lang];

  const topics = getTopics(lang);
  const topicMeta = topics.find((tp) => tp.slug === topic);
  if (!topicMeta) notFound();

  const articles = getArticles(lang, topic);
  const basePath = `/${lang}/help/${topic}`;

  return (
    <main id="main-content" className="help-topic-page">
      <Breadcrumb
        segments={[
          { label: t.help.breadcrumb_home, href: `/${lang}` },
          { label: t.help.breadcrumb_help, href: `/${lang}/help` },
          { label: topicMeta.title },
        ]}
      />

      <div className="help-topic-header">
        <span aria-hidden="true" style={{ fontSize: 32 }}>{topicMeta.icon}</span>
        <h1>{topicMeta.title}</h1>
        <p>{topicMeta.description}</p>
      </div>

      <ArticleList articles={articles} basePath={basePath} />
    </main>
  );
}
