'use client';
import { useState } from 'react';
import type { TopicSummary } from '@/lib/help/types';
import TopicCard from './TopicCard';

interface Props {
  posTopics: TopicSummary[];
  adminTopics: TopicSummary[];
  posLabel: string;
  adminLabel: string;
  lang: string;
}

/**
 * Client component that renders product tabs (FoodyPOS / FoodyAdmin)
 * and shows the correct topic grid for the selected tab.
 */
export default function HelpProductTabs({ posTopics, adminTopics, posLabel, adminLabel, lang }: Props) {
  const [active, setActive] = useState<'foodypos' | 'foodyadmin'>('foodypos');

  const topics = active === 'foodypos' ? posTopics : adminTopics;

  return (
    <div className="help-product-tabs-wrapper">
      <div className="help-product-tabs" role="tablist">
        <button
          role="tab"
          aria-selected={active === 'foodypos'}
          className={`help-tab${active === 'foodypos' ? ' help-tab-active' : ''}`}
          onClick={() => setActive('foodypos')}
        >
          {posLabel}
        </button>
        <button
          role="tab"
          aria-selected={active === 'foodyadmin'}
          className={`help-tab${active === 'foodyadmin' ? ' help-tab-active' : ''}`}
          onClick={() => setActive('foodyadmin')}
        >
          {adminLabel}
        </button>
      </div>

      <div className="help-topic-grid" role="tabpanel">
        {topics.map((topic) => (
          <TopicCard
            key={topic.slug}
            icon={topic.icon}
            title={topic.title}
            description={topic.description}
            href={`/${lang}/help/${active}/${topic.slug}`}
            articleCount={topic.articleCount}
          />
        ))}
      </div>
    </div>
  );
}
