import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import { getTopics, getArticles, getArticle, getAllArticlePaths } from '@/lib/help/content';
import Breadcrumb from '@/components/help/Breadcrumb';
import ArticleSidebar from '@/components/help/ArticleSidebar';
import type { Lang } from '@/lib/help/types';
import en from '@/lib/i18n/en.json';
import fr from '@/lib/i18n/fr.json';
import he from '@/lib/i18n/he.json';

const SUPPORTED: Lang[] = ['en', 'fr', 'he'];
const translations = { en, fr, he } as Record<Lang, typeof en>;

export function generateStaticParams() {
  const params = [];
  for (const lang of SUPPORTED) {
    for (const { topic, slug } of getAllArticlePaths(lang)) {
      params.push({ lang, topic, slug });
    }
  }
  return params;
}

export default async function HelpArticlePage({
  params,
}: {
  params: { lang: string; topic: string; slug: string };
}) {
  const lang: Lang = SUPPORTED.includes(params.lang as Lang) ? (params.lang as Lang) : 'en';
  const t = translations[lang];

  let articleData;
  try {
    articleData = getArticle(lang, params.topic, params.slug);
  } catch {
    notFound();
  }

  const { frontmatter, rawContent, usedFallback } = articleData;

  const { content } = await compileMDX({
    source: rawContent,
    options: { parseFrontmatter: false, mdxOptions: { remarkPlugins: [remarkGfm] } },
  });

  const topics = getTopics(lang);
  const topicMeta = topics.find((tp) => tp.slug === params.topic);
  const articles = getArticles(lang, params.topic);
  const basePath = `/${lang}/help/${params.topic}`;

  const title = String(frontmatter.title || params.slug);
  const apps = frontmatter.apps as string | undefined;
  const updatedAt = frontmatter.updatedAt ? String(frontmatter.updatedAt).slice(0, 10) : null;

  return (
    <main className="help-article-page">
      <Breadcrumb
        segments={[
          { label: t.help.breadcrumb_home, href: `/${lang}` },
          { label: t.help.breadcrumb_help, href: `/${lang}/help` },
          { label: topicMeta?.title ?? params.topic, href: basePath },
          { label: title },
        ]}
      />

      <div className="help-article-layout">
        <article>
          {usedFallback && (
            <div className="help-translation-notice">
              <span aria-hidden="true">ℹ️</span>
              {t.help.translation_notice}
            </div>
          )}

          <div className="help-article-body">
            <h1>{title}</h1>

            <div className="help-article-meta">
              {apps === 'both' ? (
                <>
                  <span className="help-article-meta-tag">FoodyPOS</span>
                  <span className="help-article-meta-tag">FoodyAdmin</span>
                </>
              ) : apps === 'foodypos' ? (
                <span className="help-article-meta-tag">FoodyPOS</span>
              ) : apps === 'foodyadmin' ? (
                <span className="help-article-meta-tag">FoodyAdmin</span>
              ) : null}
              {updatedAt && (
                <span>{t.help.updated}: {updatedAt}</span>
              )}
            </div>

            {content}
          </div>
        </article>

        <ArticleSidebar
          articles={articles}
          basePath={basePath}
          topicTitle={topicMeta?.title ?? params.topic}
        />
      </div>
    </main>
  );
}
