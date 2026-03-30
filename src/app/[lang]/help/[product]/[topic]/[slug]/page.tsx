import { notFound } from 'next/navigation';
import { compileMDX } from 'next-mdx-remote/rsc';
import { getTopics, getArticles, getArticle, getAllArticlePaths } from '@/lib/help/content';
import Breadcrumb from '@/components/help/Breadcrumb';
import ArticleSidebar from '@/components/help/ArticleSidebar';
import type { Lang, Product, ArticleFrontmatter } from '@/lib/help/types';
import en from '@/lib/i18n/en.json';
import fr from '@/lib/i18n/fr.json';
import he from '@/lib/i18n/he.json';

const SUPPORTED_LANGS: Lang[] = ['en', 'fr', 'he'];
const SUPPORTED_PRODUCTS: Product[] = ['foodypos', 'foodyadmin'];
const translations = { en, fr, he } as Record<Lang, typeof en>;

const PRODUCT_LABELS: Record<Product, string> = {
  foodypos: 'FoodyPOS',
  foodyadmin: 'FoodyAdmin',
};

export function generateStaticParams() {
  const params = [];
  for (const lang of SUPPORTED_LANGS) {
    for (const { product, topic, slug } of getAllArticlePaths(lang)) {
      params.push({ lang, product, topic, slug });
    }
  }
  return params;
}

export default async function HelpArticlePage({
  params,
}: {
  params: { lang: string; product: string; topic: string; slug: string };
}) {
  const lang: Lang = SUPPORTED_LANGS.includes(params.lang as Lang) ? (params.lang as Lang) : 'en';
  const product = params.product as Product;
  if (!SUPPORTED_PRODUCTS.includes(product)) notFound();

  let articleData;
  try {
    articleData = getArticle(lang, product, params.topic, params.slug);
  } catch {
    notFound();
  }

  const { frontmatter, rawContent, usedFallback } = articleData;
  const t = translations[lang];

  const { content } = await compileMDX<ArticleFrontmatter>({
    source: rawContent,
    options: { parseFrontmatter: false },
  });

  const topics = getTopics(lang, product);
  const topicMeta = topics.find((tp) => tp.slug === params.topic);
  const articles = getArticles(lang, product, params.topic);
  const basePath = `/${lang}/help/${product}/${params.topic}`;

  return (
    <main className="help-article-page">
      <Breadcrumb
        segments={[
          { label: t.help.breadcrumb_home, href: `/${lang}` },
          { label: t.help.breadcrumb_help, href: `/${lang}/help` },
          { label: PRODUCT_LABELS[product], href: `/${lang}/help/${product}` },
          { label: topicMeta?.title ?? params.topic, href: basePath },
          { label: frontmatter.title },
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
            <h1>{frontmatter.title}</h1>

            <div className="help-article-meta">
              <span className="help-article-meta-tag">{product === 'foodypos' ? 'FoodyPOS' : 'FoodyAdmin'}</span>
              <span className="help-article-meta-tag">{frontmatter.audience}</span>
              {frontmatter.updatedAt && (
                <span>{t.help.updated}: {String(frontmatter.updatedAt).slice(0, 10)}</span>
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
