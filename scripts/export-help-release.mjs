import fs from 'node:fs';
import crypto from 'node:crypto';
import { readCorpus, validateCorpus } from '../src/lib/help/corpus.mjs';
import { stopwords, aliases } from '../src/lib/help/search.mjs';
const hash = value => crypto.createHash('sha256').update(value).digest('hex');
const features = JSON.parse(fs.readFileSync('docs/help/catalog/features.json', 'utf8'));
const corpus = readCorpus();
const errors = validateCorpus(corpus);
for (const article of corpus) if ([...article.body].length > 24000) errors.push(`${article.lang}/${article.id}: split this guide before exceeding the complete AI grounding budget.`);
const articles = Object.fromEntries(features.map(feature => [feature.article, { feature: feature.id, audience: feature.audience, status: feature.status,
 translations: Object.fromEntries(['en', 'fr', 'he'].map(lang => {
  const file = feature.audience === 'internal' ? `docs/help/internal/${lang}/${feature.article.slice(9)}.md` : `src/content/help/${lang}/${feature.article}.mdx`;
  return [lang, { path: file, sha256: hash(fs.readFileSync(file)) }];
 })) }]));
for (const feature of features.filter(f => f.audience === 'public')) for (const lang of ['en', 'fr', 'he']) if (!corpus.some(a => a.id === feature.article && a.lang === lang)) errors.push(`${feature.article}: missing published ${lang}`);
if (errors.length) throw new Error(errors.join('\n'));
const documents = corpus.map(({ markdown, apps, slug, topic, ...article }) => article);
const bundle = { articles: documents, stopwords: [...stopwords], aliases };
const revision = hash(JSON.stringify({ articles, bundle }));
const release = { schemaVersion: 1, revision, articles, publicArticleCount: documents.length / 3, features: features.map(({id,article,module,audience,status,operations}) => ({id,article,module,audience,status,operations: operations.map(({id})=>id)})) };
fs.writeFileSync('docs/help/catalog/release.json', JSON.stringify(release, null, 2) + '\n');
fs.writeFileSync('docs/help/catalog/public-corpus.json', JSON.stringify({ revision, ...bundle }, null, 2) + '\n');
console.log(`Documentation release ${revision}: ${release.publicArticleCount} public guides, ${documents.length} translations.`);
