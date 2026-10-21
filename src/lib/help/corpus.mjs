import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

export const languages = ['en', 'fr', 'he'];
const segment = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

/** Removes Markdown presentation while retaining the words used by search and the assistant. */
export function plainText(markdown) {
  return markdown.replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/```[^\n]*\n([\s\S]*?)```/g, '$1')
    .replace(/<[^>]*>/g, '').replace(/[#*_`>|]/g, ' ').replace(/\s+/g, ' ').trim();
}

/** Reads the canonical authored corpus; unpublished drafts never reach search or AI. */
export function readCorpus(root = path.join(process.cwd(), 'src/content/help')) {
  const entries = [];
  for (const lang of languages) {
    const dir = path.join(root, lang);
    if (!fs.existsSync(dir)) continue;
    for (const topic of fs.readdirSync(dir).sort()) {
      if (!segment.test(topic) || !fs.statSync(path.join(dir, topic)).isDirectory()) continue;
      for (const file of fs.readdirSync(path.join(dir, topic)).sort()) {
        if (!file.endsWith('.mdx')) continue;
        const slug = file.slice(0, -4);
        if (!segment.test(slug)) throw new Error(`Invalid article slug: ${lang}/${topic}/${file}`);
        const { data, content } = matter(fs.readFileSync(path.join(dir, topic, file), 'utf8'));
        if (data.status && !['published', 'draft', 'archived'].includes(data.status)) throw new Error(`Invalid article status: ${lang}/${topic}/${file}`);
        if (data.status === 'draft' || data.status === 'archived' || data.audience === 'internal') continue;
        const updatedAt = data.updatedAt instanceof Date ? data.updatedAt.toISOString().slice(0, 10) : String(data.updatedAt || '');
        entries.push({ id: `${topic}/${slug}`, slug, topic, lang, title: String(data.title || ''),
          description: String(data.description || ''), apps: data.apps, tags: data.tags || [],
          updatedAt, url: `/${lang}/help/${topic}/${slug}`, body: plainText(content), markdown: content });
      }
    }
  }
  return entries;
}

/** Merges English articles with locale overrides, preserving each article's actual source language. */
export function localizedCorpus(entries, lang) {
  const merged = new Map(entries.filter(e => e.lang === 'en').map(e => [e.id, e]));
  for (const entry of entries.filter(e => e.lang === lang)) merged.set(entry.id, entry);
  return [...merged.values()].sort((a, b) => a.title.localeCompare(b.title, lang));
}

/** Validates authored metadata and internal help links before publishing or rebuilding the index. */
export function validateCorpus(entries, assetRoot = path.join(process.cwd(), 'public')) {
  const errors = [];
  const paths = new Set(entries.map(e => e.url));
  const ids = new Set(entries.map(e => e.id));
  for (const entry of entries) {
    const label = `${entry.lang}/${entry.id}`;
    if (!entry.title || !entry.description || !entry.body) errors.push(`${label}: title, description and content are required`);
    if (!['both', 'foodyadmin', 'foodypos', 'foodyweb', 'foodylanding'].includes(entry.apps)) errors.push(`${label}: invalid apps`);
    if (!Array.isArray(entry.tags) || !entry.tags.length || entry.tags.some(t => typeof t !== 'string')) errors.push(`${label}: tags are required`);
    if (!/^\d{4}-\d{2}-\d{2}$/.test(entry.updatedAt) || (!Number.isFinite(Date.parse(entry.updatedAt)) || new Date(entry.updatedAt).toISOString().slice(0, 10) !== entry.updatedAt)) errors.push(`${label}: invalid updatedAt`);
    for (const match of entry.markdown.matchAll(/!\[[^\]]*\]\(([^\s)]+)[^)]*\)/g)) {
      const href = match[1];
      if (/^(https?:|data:)/.test(href)) continue;
      const pathname = new URL(href, `https://foody.test${entry.url}`).pathname;
      if (!fs.existsSync(path.join(assetRoot, pathname)) || !fs.statSync(path.join(assetRoot, pathname)).isFile()) errors.push(`${label}: missing image asset ${pathname}`);
    }
    for (const match of entry.markdown.matchAll(/(?<!!)\]\(([^\s)]+)[^)]*\)/g)) {
      const href = match[1];
      if (/^(https?:|mailto:|#)/.test(href)) continue;
      const target = new URL(href, `https://foody.test${entry.url}`).pathname;
      const parts = target.split('/').filter(Boolean);
      if (parts[1] !== 'help') continue;
      if (parts.length === 4 && !paths.has(target) && !ids.has(parts.slice(2).join('/'))) errors.push(`${label}: broken help link ${target}`);
      if (parts.length === 3 && !entries.some(e => e.topic === parts[2])) errors.push(`${label}: broken topic link ${target}`);
    }
  }
  return errors;
}
