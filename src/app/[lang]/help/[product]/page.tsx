import { notFound } from 'next/navigation';
import { getTopics } from '@/lib/help/content';
import Breadcrumb from '@/components/help/Breadcrumb';
import TopicCard from '@/components/help/TopicCard';
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

const PRODUCT_DESCRIPTIONS: Record<Product, string> = {
  foodypos: 'Tablet point-of-sale app for restaurant staff.',
  foodyadmin: 'Web dashboard for restaurant owners and managers.',
};

export function generateStaticParams() {
  const params = [];
  for (const lang of SUPPORTED_LANGS) {
    for (const product of SUPPORTED_PRODUCTS) {
      params.push({ lang, product });
    }
  }
  return params;
}

export default function HelpProductPage({
  params,
}: {
  params: { lang: string; product: string };
}) {
  const lang: Lang = SUPPORTED_LANGS.includes(params.lang as Lang) ? (params.lang as Lang) : 'en';
  const product = params.product as Product;
  if (!SUPPORTED_PRODUCTS.includes(product)) notFound();

  const t = translations[lang];
  const topics = getTopics(lang, product);

  return (
    <main className="help-product-page">
      <Breadcrumb
        segments={[
          { label: t.help.breadcrumb_home, href: `/${lang}` },
          { label: t.help.breadcrumb_help, href: `/${lang}/help` },
          { label: PRODUCT_LABELS[product] },
        ]}
      />

      <div className="help-product-header">
        <h1>{PRODUCT_LABELS[product]}</h1>
        <p>{PRODUCT_DESCRIPTIONS[product]}</p>
      </div>

      <div className="help-topic-grid">
        {topics.map((topic) => (
          <TopicCard
            key={topic.slug}
            icon={topic.icon}
            title={topic.title}
            description={topic.description}
            href={`/${lang}/help/${product}/${topic.slug}`}
            articleCount={topic.articleCount}
          />
        ))}
      </div>
    </main>
  );
}
