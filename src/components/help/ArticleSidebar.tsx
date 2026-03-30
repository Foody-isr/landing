'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { ArticleSummary } from '@/lib/help/types';

interface Props {
  articles: ArticleSummary[];
  /** Base path for article links, e.g. "/en/help/foodypos/orders" */
  basePath: string;
  topicTitle: string;
}

/**
 * Sticky sidebar showing all articles in the current topic.
 * Highlights the active article based on the current URL.
 */
export default function ArticleSidebar({ articles, basePath, topicTitle }: Props) {
  const pathname = usePathname();

  return (
    <aside className="help-article-sidebar">
      <p className="help-sidebar-topic-label">{topicTitle}</p>
      <ul className="help-sidebar-list">
        {articles.map((article) => {
          const href = `${basePath}/${article.slug}`;
          const isActive = pathname === href || pathname.endsWith(`/${article.slug}`);
          return (
            <li key={article.slug}>
              <Link
                href={href}
                className={`help-sidebar-link${isActive ? ' help-sidebar-link-active' : ''}`}
              >
                {article.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}
