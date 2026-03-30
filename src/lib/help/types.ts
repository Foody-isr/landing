export type Lang = 'en' | 'fr' | 'he';
export type Product = 'foodypos' | 'foodyadmin';

/** Frontmatter block at the top of each .mdx article file */
export interface ArticleFrontmatter {
  title: string;
  description: string;
  product: Product;
  topic: string;
  slug: string;
  tags: string[];
  /** Who this article is primarily for */
  audience: 'staff' | 'manager' | 'owner';
  difficulty: 'beginner' | 'intermediate' | 'advanced';
  /** ISO date string: YYYY-MM-DD (gray-matter may parse this as a Date) */
  updatedAt: string | Date;
}

/** Metadata stored in _meta.json at the topic directory level */
export interface TopicMeta {
  title: string;
  description: string;
  icon: string;
  /** Lower number = shown first */
  order: number;
}

export interface TopicSummary extends TopicMeta {
  slug: string;
  product: Product;
  lang: Lang;
  articleCount: number;
}

export interface ArticleSummary {
  slug: string;
  title: string;
  description: string;
  topic: string;
  product: Product;
  lang: Lang;
}

/** Full entry in help-manifest.json for FoodyAI indexing */
export interface ArticleManifestEntry extends ArticleSummary {
  /** Unique ID: "{product}/{topic}/{slug}" */
  id: string;
  tags: string[];
  audience: string;
  difficulty: string;
  updatedAt: string;
  url: string;
  /** Plain-text body (stripped of markdown) for AI embedding */
  body: string;
}
