export type Lang = 'en' | 'fr' | 'he';

/** Indicates which Foody app(s) an article applies to — used as display tags only */
export type AppTag = 'foodypos' | 'foodyadmin' | 'both';

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
  lang: Lang;
  articleCount: number;
}

export interface ArticleSummary {
  slug: string;
  title: string;
  description: string;
  topic: string;
  lang: Lang;
}

/** Full entry in help-manifest.json for FoodyAI indexing */
export interface ArticleManifestEntry extends ArticleSummary {
  /** Unique ID: "{topic}/{slug}" */
  id: string;
  tags: string[];
  apps: AppTag;
  updatedAt: string;
  url: string;
  /** Plain-text body (stripped of markdown) for AI embedding */
  body: string;
}
