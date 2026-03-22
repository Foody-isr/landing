import type { Metadata } from 'next';
import { I18nProvider } from '@/lib/i18n/context';
import en from '@/lib/i18n/en.json';
import fr from '@/lib/i18n/fr.json';
import he from '@/lib/i18n/he.json';

type Lang = 'en' | 'fr' | 'he';
const SUPPORTED: Lang[] = ['en', 'fr', 'he'];
const translations: Record<Lang, typeof en> = { en, fr, he };

export function generateStaticParams() {
  return SUPPORTED.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang: Lang = SUPPORTED.includes(params.lang as Lang) ? (params.lang as Lang) : 'en';
  const t = translations[lang];

  return {
    title: t.meta.title,
    description: t.meta.description,
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      siteName: 'Foody POS',
      type: 'website',
      locale: lang,
      images: [{ url: '/assets/og-image.png', width: 1200, height: 630, alt: 'Foody POS' }],
    },
    twitter: {
      card: 'summary_large_image',
      title: t.meta.title,
      description: t.meta.description,
      images: ['/assets/og-image.png'],
    },
  };
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const lang: Lang = SUPPORTED.includes(params.lang as Lang) ? (params.lang as Lang) : 'en';

  return <I18nProvider lang={lang}>{children}</I18nProvider>;
}
