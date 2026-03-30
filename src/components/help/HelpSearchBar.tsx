'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import type { ArticleSummary } from '@/lib/help/types';

interface Props {
  /** Lang-filtered article summaries used for in-memory search */
  manifest: ArticleSummary[];
  placeholder: string;
  noResultsLabel: string;
}

/**
 * In-memory search bar. Filters articles by title, description.
 * No server round-trip needed — the full manifest is passed as a prop.
 */
export default function HelpSearchBar({ manifest, placeholder, noResultsLabel }: Props) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const results = query.trim().length > 1
    ? manifest.filter((a) => {
        const q = query.toLowerCase();
        return (
          a.title.toLowerCase().includes(q) ||
          a.description.toLowerCase().includes(q)
        );
      }).slice(0, 8)
    : [];

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  return (
    <div className="help-search-wrapper" ref={containerRef}>
      <div className="help-search-input-wrap">
        <span className="help-search-icon" aria-hidden="true">🔍</span>
        <input
          className="help-search-input"
          type="search"
          placeholder={placeholder}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          onFocus={() => setOpen(true)}
          aria-label={placeholder}
          autoComplete="off"
        />
      </div>

      {open && query.trim().length > 1 && (
        <div className="help-search-results" role="listbox">
          {results.length === 0 ? (
            <div className="help-search-no-results">{noResultsLabel.replace('{query}', query)}</div>
          ) : (
            results.map((article) => (
              <Link
                key={`${article.product}/${article.topic}/${article.slug}`}
                href={`/${article.lang}/help/${article.product}/${article.topic}/${article.slug}`}
                className="help-search-result-item"
                onClick={() => { setQuery(''); setOpen(false); }}
                role="option"
                aria-selected="false"
              >
                <span className="help-search-result-title">{article.title}</span>
                <span className="help-search-result-meta">
                  {article.product === 'foodypos' ? 'FoodyPOS' : 'FoodyAdmin'} · {article.topic.replace(/-/g, ' ')}
                </span>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}
