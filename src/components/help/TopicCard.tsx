import Link from 'next/link';

interface Props {
  icon: string;
  title: string;
  description: string;
  href: string;
  articleCount: number;
}

/** Server-safe topic card shown on the help hub and product pages. */
export default function TopicCard({ icon, title, description, href, articleCount }: Props) {
  return (
    <Link href={href} className="help-topic-card">
      <span className="help-topic-icon" aria-hidden="true">{icon}</span>
      <span className="help-topic-title">{title}</span>
      <span className="help-topic-desc">{description}</span>
      <span className="help-topic-count">
        {articleCount} {articleCount === 1 ? 'article' : 'articles'}
      </span>
    </Link>
  );
}
