import { languages, localizedCorpus } from '../src/lib/help/corpus.mjs';

/** Resolves main-content help citations against the same published corpus used by help search and the assistant. */
export function marketingHelpReferences(mainHtml, pageUrl, corpus, canonicalBase) {
  const page = new URL(pageUrl), lang = page.pathname.split('/')[1];
  if (!languages.includes(lang)) throw new Error(`Unsupported marketing language: ${page.pathname}`);
  const origins = new Set([page.origin, new URL(canonicalBase).origin]);
  const articles = localizedCorpus(corpus, lang);
  const references = [];
  for (const [, href] of mainHtml.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)) {
    const target = new URL(href.replaceAll('&amp;', '&'), page);
    if (!origins.has(target.origin)) continue;
    const parts = target.pathname.split('/').filter(Boolean);
    if (parts[1] !== 'help') continue;
    if (parts[0] !== lang) throw new Error(`${page.pathname}: help citation changes language: ${target.pathname}`);
    const article = parts.length === 4 ? articles.find(entry => entry.id === parts.slice(2).join('/')) : undefined;
    const valid = parts.length === 2 || (parts.length === 3 && articles.some(entry => entry.topic === parts[2])) || article;
    if (!valid) throw new Error(`${page.pathname}: unpublished help citation: ${target.pathname}`);
    const pathname = '/' + parts.join('/');
    references.push({ pathname, canonicalPath: article?.url || pathname, sourceLang: article?.lang || lang, fragment: target.hash ? decodeURIComponent(target.hash.slice(1)) : '' });
  }
  return references;
}
