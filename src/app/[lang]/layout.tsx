import type { Metadata } from 'next';
import { I18nProvider } from '@/lib/i18n/context';
import en from '@/lib/i18n/en.json';
import fr from '@/lib/i18n/fr.json';
import he from '@/lib/i18n/he.json';
import { resolveLang, SUPPORTED_LANGS } from '@/lib/seo';

const translations = { en, fr, he };

export function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }));
}

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  const lang = resolveLang(params.lang);
  const t = translations[lang];

  return {
    title: t.meta.title,
    description: t.meta.description,
    openGraph: {
      title: t.meta.title,
      description: t.meta.description,
      siteName: 'Foody',
      type: 'website',
      locale: lang === 'he' ? 'he_IL' : `${lang}_IL`,
    },
    robots: { index: true, follow: true },
  };
}

export default function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const lang = resolveLang(params.lang);

  return (
    <I18nProvider lang={lang}>
      <div lang={lang} dir={lang === 'he' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </I18nProvider>
  );
}
