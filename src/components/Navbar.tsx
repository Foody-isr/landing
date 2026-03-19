'use client';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useI18n } from '@/lib/i18n/context';

const CATEGORIES = [
  {
    key: 'nav.cat_food',
    href: '/sectors/food-beverage',
    enabled: true,
    discover: [
      { key: 'nav.discover_cafes', href: '/sectors/food-beverage', enabled: false, icon: '☕' },
      { key: 'nav.discover_bakeries', href: '/sectors/food-beverage', enabled: false, icon: '🥐' },
      { key: 'nav.discover_restaurants', href: '/sectors/food-beverage/restaurants', enabled: true, icon: '🍽️' },
      { key: 'nav.discover_bars', href: '/sectors/food-beverage', enabled: false, icon: '🍸' },
    ],
  },
  { key: 'nav.cat_retail', href: '/sectors/retail', enabled: false },
  { key: 'nav.cat_beauty', href: '/sectors/beauty', enabled: false },
  { key: 'nav.cat_services', href: '/sectors/professional-services', enabled: false },
];

export default function Navbar() {
  const { t, lang, localePath } = useI18n();
  const pathname = usePathname();
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<string | null>('nav.cat_food');
  const megaRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (
        megaRef.current && !megaRef.current.contains(e.target as Node) &&
        triggerRef.current && !triggerRef.current.contains(e.target as Node)
      ) {
        setMegaOpen(false);
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  // Build the path for the other locale (strip current lang prefix, add new one)
  function switchLangHref(targetLang: string) {
    const pathWithoutLocale = pathname.replace(/^\/(en|fr)/, '') || '/';
    return `/${targetLang}${pathWithoutLocale}`;
  }

  const activeCat = CATEGORIES.find((c) => c.key === activeCategory);
  const discoverItems = activeCat && 'discover' in activeCat ? activeCat.discover : null;

  return (
    <nav className="navbar no-print">
      <div className="nav-inner">
        <Link href={localePath('/')} className="nav-logo">
          <Image src="/assets/logo.svg" alt="Foody" width={110} height={44} />
        </Link>

        <div className="nav-links">
          <button
            ref={triggerRef}
            className={`nav-dropdown-trigger${megaOpen ? ' active' : ''}`}
            onClick={() => setMegaOpen(!megaOpen)}
            aria-expanded={megaOpen}
          >
            {t('nav.sectors')}
            <span className={`nav-chevron${megaOpen ? ' open' : ''}`}>&#9662;</span>
          </button>
          <Link href={localePath('/pricing')}>{t('nav.pricing')}</Link>
          <Link href={localePath('/contact')}>{t('nav.contact')}</Link>
        </div>

        <div className="nav-right">
          <div className="lang-switcher">
            <Link className={`lang-btn${lang === 'en' ? ' active' : ''}`} href={switchLangHref('en')} aria-label="Switch to English">EN</Link>
            <Link className={`lang-btn${lang === 'fr' ? ' active' : ''}`} href={switchLangHref('fr')} aria-label="Passer au français">FR</Link>
          </div>
          <Link className="nav-login" href={localePath('/contact')}>{t('nav.login')}</Link>
          <Link className="btn btn-dark btn-sm no-print" href={localePath('/contact')}>{t('nav.cta')}</Link>
          <button
            className="nav-hamburger"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
            aria-expanded={mobileOpen}
          >
            <span className={`nav-hamburger-icon${mobileOpen ? ' open' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu-section">
            <span className="mobile-menu-label">{t('nav.sectors')}</span>
            {CATEGORIES.map((cat) =>
              cat.enabled ? (
                <Link
                  key={cat.key}
                  href={localePath(cat.href)}
                  className="mobile-menu-link"
                  onClick={() => setMobileOpen(false)}
                >
                  {t(cat.key)}
                </Link>
              ) : (
                <span key={cat.key} className="mobile-menu-link mobile-menu-disabled">
                  {t(cat.key)}
                </span>
              )
            )}
            {CATEGORIES.filter(c => 'discover' in c).map(cat =>
              (cat as typeof CATEGORIES[0]).discover?.filter(d => d.enabled).map(item => (
                <Link
                  key={item.key}
                  href={localePath(item.href)}
                  className="mobile-menu-link mobile-menu-sub"
                  onClick={() => setMobileOpen(false)}
                >
                  <span>{item.icon}</span> {t(item.key)}
                </Link>
              ))
            )}
          </div>
          <div className="mobile-menu-section">
            <Link href={localePath('/pricing')} className="mobile-menu-link" onClick={() => setMobileOpen(false)}>
              {t('nav.pricing')}
            </Link>
            <Link href={localePath('/contact')} className="mobile-menu-link" onClick={() => setMobileOpen(false)}>
              {t('nav.contact')}
            </Link>
          </div>
          <div className="mobile-menu-section">
            <div className="mobile-menu-lang">
              <Link className={`lang-btn${lang === 'en' ? ' active' : ''}`} href={switchLangHref('en')} onClick={() => setMobileOpen(false)}>EN</Link>
              <Link className={`lang-btn${lang === 'fr' ? ' active' : ''}`} href={switchLangHref('fr')} onClick={() => setMobileOpen(false)}>FR</Link>
            </div>
          </div>
          <div className="mobile-menu-section mobile-menu-actions">
            <Link className="btn btn-primary" href={localePath('/contact')} onClick={() => setMobileOpen(false)}>
              {t('nav.cta')}
            </Link>
            <Link className="nav-login" href={localePath('/contact')} onClick={() => setMobileOpen(false)}>
              {t('nav.login')}
            </Link>
          </div>
        </div>
      )}

      {/* Mega menu */}
      <div ref={megaRef} className={`mega-menu${megaOpen ? ' open' : ''}`}>
        <div className="mega-menu-inner">
          {/* Left column — categories */}
          <div className="mega-col mega-categories">
            {CATEGORIES.map((cat) =>
              cat.enabled ? (
                <Link
                  key={cat.key}
                  href={localePath(cat.href)}
                  className={`mega-cat mega-cat-active${activeCategory === cat.key ? ' mega-cat-selected' : ''}`}
                  onMouseEnter={() => setActiveCategory(cat.key)}
                  onClick={() => setMegaOpen(false)}
                >
                  {t(cat.key)}
                </Link>
              ) : (
                <span
                  key={cat.key}
                  className="mega-cat mega-cat-disabled"
                  onMouseEnter={() => {}}
                >
                  {t(cat.key)}
                </span>
              )
            )}
            <span className="mega-cat mega-cat-small">{t('nav.cat_solutions')}</span>
          </div>

          {/* Right column — discover (only visible when category has subcategories) */}
          {discoverItems && (
            <div className="mega-col mega-discover">
              <span className="mega-label">{t('nav.discover')}</span>
              <Link
                href={localePath(activeCat!.href)}
                className="mega-discover-overview"
                onClick={() => setMegaOpen(false)}
              >
                {t('nav.discover_overview')}
              </Link>
              {discoverItems.map((item) =>
                item.enabled ? (
                  <Link
                    key={item.key}
                    href={localePath(item.href)}
                    className="mega-discover-item"
                    onClick={() => setMegaOpen(false)}
                  >
                    <span className="mega-discover-icon">{item.icon}</span>
                    <span>{t(item.key)}</span>
                  </Link>
                ) : (
                  <span key={item.key} className="mega-discover-item mega-discover-disabled">
                    <span className="mega-discover-icon">{item.icon}</span>
                    <span>{t(item.key)}</span>
                  </span>
                )
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
