import Link from 'next/link';
import Icon from '@/components/marketing/Icon';

interface Props {
  icon: string;
  topic?: string;
  countLabel?: string;
  title: string;
  description: string;
  href: string;
  articleCount: number;
}

/** Server-safe topic card shown on the help hub and product pages. */
export default function TopicCard({ icon, topic, title, description, href, articleCount, countLabel = 'articles' }: Props) {
  const icons = { 'getting-started': 'settings', menu: 'tag', kitchen: 'kitchen', orders: 'receipt', payments: 'card', printers: 'printer', settings: 'settings', staff: 'users', analytics: 'chart', 'website-qr': 'globe', 'tables-floors': 'table', account: 'settings', customers: 'users', marketing: 'tag', delivery: 'globe', catering: 'kitchen', chains: 'globe', communications: 'chat', guest: 'card' } as const;
  const name = icons[topic as keyof typeof icons];
  return (
    <Link href={href} className="help-topic-card">
      <span className="help-topic-icon" aria-hidden="true">{name ? <Icon name={name} /> : icon}</span>
      <span className="help-topic-title">{title}</span>
      <span className="help-topic-desc">{description}</span>
      <span className="help-topic-count">
        {articleCount} {countLabel}
      </span>
    </Link>
  );
}
