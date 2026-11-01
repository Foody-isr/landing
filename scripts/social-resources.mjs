import fs from 'node:fs';
import path from 'node:path';
import { readCorpus, localizedCorpus } from '../src/lib/help/corpus.mjs';
import { loadLocalTypeScript } from './load-local-typescript.mjs';

/** Enumerates sharing resources from actual marketing copy and the published help corpus, including canonical fallbacks. */
export function sharingResources() {
  const { getMarketingMetadata, getContentMetadata, SUPPORTED_LANGS } = loadLocalTypeScript('src/lib/seo.ts');
  const { routes } = loadLocalTypeScript('src/lib/marketing/ui.ts');
  const { getShareCard } = loadLocalTypeScript('src/lib/marketing/share-cards.ts');
  const resources = [];
  const add = (lang, pathname, title, description = '') => resources.push({ lang, path: pathname, title, description, card: getShareCard(lang, pathname, title), metadata: getContentMetadata(lang, pathname, title, description) });
  const pages = ['pricing', 'contact', 'food', ...Object.keys(routes)];
  const extras = [
    ['/compare/tabit', 'comparison.ts', 'comparisonCopy'],
    ['/guides/restaurant-pos-israel', 'buying-guide.ts', 'buyingGuide'],
    ['/guides/restaurant-inventory-israel', 'inventory-guide.ts', 'inventoryGuide'],
    ['/tools/food-cost-calculator', 'food-cost-copy.ts', 'foodCostCopy'],
    ['/demos/kitchen', 'demonstrations.ts', 'demoCopy'],
    ['/about', 'company.ts', 'companyCopy'],
  ];
  const corpus = readCorpus();
  for (const lang of SUPPORTED_LANGS) {
    for (const page of pages) {
      const metadata = getMarketingMetadata(lang, page);
      const pathname = new URL(metadata.alternates.canonical).pathname.replace(`/${lang}`, '');
      const title = metadata.title;
      resources.push({ lang, path: pathname, title, card: getShareCard(lang, pathname, title), metadata });
    }
    for (const [pathname, file, exported] of extras) {
      const content = loadLocalTypeScript(`src/lib/marketing/${file}`)[exported][lang];
      add(lang, pathname, content.title, content.description);
    }
    add(lang, '/privacy', 'Privacy Policy', 'Foody privacy policy.');
    add(lang, '/terms', 'Terms of Service', 'Foody terms of service.');
    const translations = JSON.parse(fs.readFileSync(`src/lib/i18n/${lang}.json`, 'utf8'));
    add(lang, '/help', translations.help.hub_title, translations.help.hub_subtitle);
    const articles = localizedCorpus(corpus, lang);
    for (const topic of new Set(articles.map(article => article.topic))) {
      const translated = path.join('src/content/help', lang, topic, '_meta.json');
      const meta = JSON.parse(fs.readFileSync(fs.existsSync(translated) ? translated : path.join('src/content/help/en', topic, '_meta.json'), 'utf8'));
      add(lang, `/help/${topic}`, meta.title, meta.description);
    }
  }
  for (const article of corpus) add(article.lang, `/help/${article.topic}/${article.slug}`, article.title, article.description);
  const unique = new Map();
  for (const resource of resources) unique.set(resource.card.image, resource);
  return [...unique.values()];
}
