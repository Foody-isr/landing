import Link from 'next/link';
import type { ArticleSummary } from '@/lib/help/types';

interface Props {
  articles: ArticleSummary[];
  /** Base href for article links, e.g. "/en/help/foodypos/orders" */
  basePath: string;
}

/** Server-safe list of articles within a topic. */
export default function ArticleList({ articles, basePath }: Props) {
  if (articles.length === 0) {
    return <p className="help-empty">No articles yet. Check back soon.</p>;
  }

  return (
    <ul className="help-article-list">
      {articles.map((article) => (
        <li key={article.slug} className="help-article-list-item">
          <Link href={`${basePath}/${article.slug}`} className="help-article-link">
            <span className="help-article-link-title">{article.title}</span>
            {article.description && (
              <span className="help-article-link-desc">{article.description}</span>
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
