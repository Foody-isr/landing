import { notFound } from 'next/navigation';
import { getTopics, getArticles, getAllTopicPaths } from '@/lib/help/content';
import Breadcrumb from '@/components/help/Breadcrumb';
import ArticleList from '@/components/help/ArticleList';
import type { Lang, Product } from '@/lib/help/types';
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
    for (const { product, topic } of getAllTopicPaths(lang)) {
      params.push({ lang, product, topic });
    }
  }
  return params;
}

export default function HelpTopicPage({
  params,
}: {
  params: { lang: string; product: string; topic: string };
}) {
  const lang: Lang = SUPPORTED_LANGS.includes(params.lang as Lang) ? (params.lang as Lang) : 'en';
  const product = params.product as Product;
  if (!SUPPORTED_PRODUCTS.includes(product)) notFound();

  const t = translations[lang];
  const topics = getTopics(lang, product);
  const topicMeta = topics.find((tp) => tp.slug === params.topic);
  if (!topicMeta) notFound();

  const articles = getArticles(lang, product, params.topic);
  const basePath = `/${lang}/help/${product}/${params.topic}`;

  return (
    <main className="help-topic-page">
      <Breadcrumb
        segments={[
          { label: t.help.breadcrumb_home, href: `/${lang}` },
          { label: t.help.breadcrumb_help, href: `/${lang}/help` },
          { label: PRODUCT_LABELS[product], href: `/${lang}/help/${product}` },
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
