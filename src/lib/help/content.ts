import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Lang, TopicMeta, TopicSummary, ArticleSummary } from './types';

const CONTENT_ROOT = path.join(process.cwd(), 'src/content/help');

// ──────────────────────────────────────────────
// Path helpers
// ──────────────────────────────────────────────

function topicDir(lang: Lang, topic: string): string {
  return path.join(CONTENT_ROOT, lang, topic);
}

function articlePath(lang: Lang, topic: string, slug: string): string {
  return path.join(topicDir(lang, topic), `${slug}.mdx`);
}

/** Falls back to 'en' if the locale's topic dir doesn't exist */
function resolveTopicDir(lang: Lang, topic: string): string {
  const dir = topicDir(lang, topic);
  return fs.existsSync(dir) ? dir : topicDir('en', topic);
}

function resolveLangDir(lang: Lang): string {
  const dir = path.join(CONTENT_ROOT, lang);
  return fs.existsSync(dir) ? dir : path.join(CONTENT_ROOT, 'en');
}

// ──────────────────────────────────────────────
// Public API
// ──────────────────────────────────────────────

/**
 * Returns sorted topic list for a given locale.
 * Falls back to 'en' if locale directory doesn't exist.
 */
export function getTopics(lang: Lang): TopicSummary[] {
  const dir = resolveLangDir(lang);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => {
      const metaPath = path.join(dir, d.name, '_meta.json');
      const meta: TopicMeta = fs.existsSync(metaPath)
        ? (JSON.parse(fs.readFileSync(metaPath, 'utf8')) as TopicMeta)
        : { title: d.name, description: '', icon: '📄', order: 99 };

      const articles = getArticles(lang, d.name);
      return { ...meta, slug: d.name, lang, articleCount: articles.length };
    })
    .sort((a, b) => a.order - b.order);
}

/**
 * Returns all articles for a given topic.
 * Falls back to 'en' content if the locale directory doesn't exist.
 */
export function getArticles(lang: Lang, topic: string): ArticleSummary[] {
  const dir = resolveTopicDir(lang, topic);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => {
      const slug = f.replace('.mdx', '');
      const raw = fs.readFileSync(path.join(dir, f), 'utf8');
      const { data } = matter(raw);
      return {
        slug,
        title: (data.title as string) || slug,
        description: (data.description as string) || '',
        topic,
        lang,
      };
    });
}

/**
 * Reads and parses a single article.
 * Returns frontmatter, raw MDX body, and whether a locale fallback was used.
 */
export function getArticle(
  lang: Lang,
  topic: string,
  slug: string,
): { frontmatter: Record<string, unknown>; rawContent: string; usedFallback: boolean } {
  let filePath = articlePath(lang, topic, slug);
  let usedFallback = false;

  if (!fs.existsSync(filePath)) {
    filePath = articlePath('en', topic, slug);
    usedFallback = true;
  }

  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);

  return {
    frontmatter: data,
    rawContent: content,
    usedFallback,
  };
}

/**
 * Returns all (topic, slug) combos for a given locale.
 * Used by generateStaticParams in the article page.
 */
export function getAllArticlePaths(lang: Lang): { topic: string; slug: string }[] {
  const result: { topic: string; slug: string }[] = [];
  const dir = path.join(CONTENT_ROOT, lang);
  if (!fs.existsSync(dir)) return result;

  for (const topicEntry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (!topicEntry.isDirectory()) continue;
    const tDir = path.join(dir, topicEntry.name);
    for (const file of fs.readdirSync(tDir)) {
      if (file.endsWith('.mdx')) {
        result.push({ topic: topicEntry.name, slug: file.replace('.mdx', '') });
      }
    }
  }
  return result;
}

/**
 * Returns all topic slugs for a given locale.
 * Used by generateStaticParams in the topic page.
 */
export function getAllTopicSlugs(lang: Lang): string[] {
  const dir = path.join(CONTENT_ROOT, lang);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => d.name);
}
