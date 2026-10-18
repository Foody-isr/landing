import fs from 'node:fs';
import path from 'node:path';
import { readCorpus, localizedCorpus } from './corpus.mjs';
import type { Lang, TopicMeta, TopicSummary, ArticleSummary, ArticleManifestEntry } from './types';

const CONTENT_ROOT = path.join(process.cwd(), 'src/content/help');
type Entry = ArticleManifestEntry & { markdown: string };

/** Returns the current published corpus with per-article English fallback. */
export function getHelpArticles(lang: Lang): ArticleManifestEntry[] {
  return localizedCorpus(readCorpus(CONTENT_ROOT), lang).map(({ markdown: _markdown, ...entry }: Entry) => entry);
}

/** Lists every published topic, including topics only partially translated. */
export function getTopics(lang: Lang): TopicSummary[] {
  const articles = getHelpArticles(lang);
  return [...new Set(articles.map(a => a.topic))].map(slug => {
    const translated = path.join(CONTENT_ROOT, lang, slug, '_meta.json');
    const original = path.join(CONTENT_ROOT, 'en', slug, '_meta.json');
    const meta: TopicMeta = JSON.parse(fs.readFileSync(fs.existsSync(translated) ? translated : original, 'utf8'));
    return { ...meta, slug, lang, articleCount: articles.filter(a => a.topic === slug).length };
  }).sort((a, b) => a.order - b.order);
}

/** Returns published summaries for a topic, preserving the actual content language. */
export function getArticles(lang: Lang, topic: string): ArticleSummary[] {
  return getHelpArticles(lang).filter(a => a.topic === topic);
}

/** Reads a published article; invalid paths, drafts and unknown articles are rejected. */
export function getArticle(lang: Lang, topic: string, slug: string): {
  frontmatter: Record<string, unknown>; rawContent: string; usedFallback: boolean;
} {
  const entry = localizedCorpus(readCorpus(CONTENT_ROOT), lang).find((a: Entry) => a.id === `${topic}/${slug}`) as Entry | undefined;
  if (!entry) throw new Error('Help article not found');
  const { markdown, ...frontmatter } = entry;
  return { frontmatter, rawContent: markdown, usedFallback: entry.lang !== lang };
}

/** Lists original paths for SEO, optionally including fallback routes for static generation. */
export function getAllArticlePaths(lang: Lang, includeFallback = false): { topic: string; slug: string }[] {
  const all = readCorpus(CONTENT_ROOT) as Entry[];
  return (includeFallback ? localizedCorpus(all, lang) : all.filter(a => a.lang === lang))
    .map((a: Entry) => ({ topic: a.topic, slug: a.slug }));
}

/** Lists all accessible topics in the selected language. */
export function getAllTopicSlugs(lang: Lang): string[] { return getTopics(lang).map(t => t.slug); }
