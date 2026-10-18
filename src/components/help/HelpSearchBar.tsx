'use client';
import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { searchArticles } from '@/lib/help/search.mjs';
import Icon from '@/components/marketing/Icon';
import type { ArticleManifestEntry } from '@/lib/help/types';

interface Props {
  /** Lang-filtered article summaries used for in-memory search */
  manifest: ArticleManifestEntry[];
  placeholder: string;
  noResultsLabel: string;
  lang: string;
  fallbackLabel: string;
}

/**
 * In-memory search bar. Filters articles by title, description.
 * No server round-trip needed — the full manifest is passed as a prop.
 */
export default function HelpSearchBar({ manifest, placeholder, noResultsLabel, lang, fallbackLabel }: Props) {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const results: ArticleManifestEntry[] = query.trim().length > 1
    ? searchArticles(manifest, query).slice(0, 8)
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
        <span className="help-search-icon"><Icon name="search" /></span>
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
          onKeyDown={e => { if (e.key === 'Escape') setOpen(false); }}
          aria-label={placeholder}
          autoComplete="off"
        />
      </div>

      {open && query.trim().length > 1 && (
        <div className="help-search-results" aria-label={placeholder}>
          {results.length === 0 ? (
            <div className="help-search-no-results">{noResultsLabel.replace('{query}', query)}</div>
          ) : (
            results.map((article) => (
              <Link
                key={`${article.topic}/${article.slug}`}
                href={`/${article.lang}/help/${article.topic}/${article.slug}`}
                className="help-search-result-item"
                onClick={() => { setQuery(''); setOpen(false); }}
              >
                <span className="help-search-result-title">{article.title}</span>
                <span className="help-search-result-meta">
                  {article.lang !== lang ? fallbackLabel : article.description}
                </span>
              </Link>
            ))
          )}
        </div>
      )}
    </div>
  );
}
