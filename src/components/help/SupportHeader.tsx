'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import FoodyLogo from '@/components/brand/FoodyLogo';
import { ui } from '@/lib/marketing/ui';
import { useI18n } from '@/lib/i18n/context';

/** Focused support navigation with the same brand and languages as the Foody site. */
export default function SupportHeader() {
  const { lang, t } = useI18n();
  const pathname = usePathname();
  return <>
    <a className="skip-link" href="#main-content">{ui[lang].skip}</a>
    <header className="support-header">
      <Link href={`/${lang}/help`} className="support-brand" aria-label={`Foody ${t('help.support_title')}`}>
        <FoodyLogo variant="lockup" monochrome width={102} decorative />
        <span>{t('help.support_title')}</span>
      </Link>
      <nav aria-label={t('help.support_title')}>
        <div className="locale-switch" dir="ltr">
          {(['he', 'en', 'fr'] as const).map(l => <Link key={l} href={`/${l}${pathname.replace(/^\/(he|en|fr)/, '')}`}
            lang={l} hrefLang={l} aria-current={lang === l ? 'true' : undefined} aria-label={{ he: 'עברית', en: 'English', fr: 'Français' }[l]}>{l === 'he' ? 'עב' : l.toUpperCase()}</Link>)}
        </div>
        <Link className="support-resources" href={`/${lang}`}>{t('help.resources')}</Link>
        <a href="https://admin.foody-pos.co.il">{t('help.account')}</a>
      </nav>
    </header>
  </>;
}
