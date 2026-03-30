import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Lang, Product, ArticleFrontmatter, TopicMeta, TopicSummary, ArticleSummary } from './types';

const CONTENT_ROOT = path.join(process.cwd(), 'src/content/help');

// ──────────────────────────────────────────────
// Path helpers
// ──────────────────────────────────────────────

function topicDir(lang: Lang, product: Product, topic: string): string {
  return path.join(CONTENT_ROOT, lang, product, topic);
}

function articlePath(lang: Lang, product: Product, topic: string, slug: string): string {
  return path.join(topicDir(lang, product, topic), `${slug}.mdx`);
}

/** Returns the effective directory, falling back to 'en' if the locale dir doesn't exist */
function resolveTopicDir(lang: Lang, product: Product, topic: string): string {
  const dir = topicDir(lang, product, topic);
  return fs.existsSync(dir) ? dir : topicDir('en', product, topic);
}

function resolveProductDir(lang: Lang, product: Product): string {
  const dir = path.join(CONTENT_ROOT, lang, product);
  return fs.existsSync(dir) ? dir : path.join(CONTENT_ROOT, 'en', product);
}

// ──────────────────────────────────────────────
// Public API
// ──────────────────────────────────────────────

/**
 * Returns sorted topic list for a given product + locale.
 * Falls back to 'en' if locale directory doesn't exist.
 */
export function getTopics(lang: Lang, product: Product): TopicSummary[] {
  const dir = resolveProductDir(lang, product);
  if (!fs.existsSync(dir)) return [];

  return fs
    .readdirSync(dir, { withFileTypes: true })
    .filter((d) => d.isDirectory())
    .map((d) => {
      const metaPath = path.join(dir, d.name, '_meta.json');
      const meta: TopicMeta = fs.existsSync(metaPath)
        ? (JSON.parse(fs.readFileSync(metaPath, 'utf8')) as TopicMeta)
        : { title: d.name, description: '', icon: '📄', order: 99 };

      const articles = getArticles(lang, product, d.name);
      return { ...meta, slug: d.name, product, lang, articleCount: articles.length };
    })
    .sort((a, b) => a.order - b.order);
}

/**
 * Returns all articles for a given topic.
 * Falls back to 'en' content if the locale directory doesn't exist.
 */
export function getArticles(lang: Lang, product: Product, topic: string): ArticleSummary[] {
  const dir = resolveTopicDir(lang, product, topic);
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
        product,
        lang,
      };
    });
}

/**
 * Reads and parses a single article.
 * Returns the frontmatter, the raw MDX content body (without frontmatter),
 * and whether a locale fallback to 'en' was used.
 */
export function getArticle(
  lang: Lang,
  product: Product,
  topic: string,
  slug: string,
): { frontmatter: ArticleFrontmatter; rawContent: string; usedFallback: boolean } {
  let filePath = articlePath(lang, product, topic, slug);
  let usedFallback = false;

  if (!fs.existsSync(filePath)) {
    filePath = articlePath('en', product, topic, slug);
    usedFallback = true;
  }

  const raw = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(raw);

  return {
    frontmatter: data as ArticleFrontmatter,
    rawContent: content,
    usedFallback,
  };
}

/**
 * Returns all (product, topic, slug) combos for a given locale.
 * Used by generateStaticParams in the article page.
 */
export function getAllArticlePaths(lang: Lang): { product: string; topic: string; slug: string }[] {
  const result: { product: string; topic: string; slug: string }[] = [];
  const products: Product[] = ['foodypos', 'foodyadmin'];

  for (const product of products) {
    const dir = path.join(CONTENT_ROOT, lang, product);
    if (!fs.existsSync(dir)) continue;

    for (const topicEntry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (!topicEntry.isDirectory()) continue;
      const tDir = path.join(dir, topicEntry.name);
      for (const file of fs.readdirSync(tDir)) {
        if (file.endsWith('.mdx')) {
          result.push({ product, topic: topicEntry.name, slug: file.replace('.mdx', '') });
        }
      }
    }
  }
  return result;
}

/**
 * Returns all (product, topic) combos for a given locale.
 * Used by generateStaticParams in the topic page.
 */
export function getAllTopicPaths(lang: Lang): { product: string; topic: string }[] {
  const result: { product: string; topic: string }[] = [];
  const products: Product[] = ['foodypos', 'foodyadmin'];

  for (const product of products) {
    const dir = path.join(CONTENT_ROOT, lang, product);
    if (!fs.existsSync(dir)) continue;

    for (const topicEntry of fs.readdirSync(dir, { withFileTypes: true })) {
      if (topicEntry.isDirectory()) {
        result.push({ product, topic: topicEntry.name });
      }
    }
  }
  return result;
}
