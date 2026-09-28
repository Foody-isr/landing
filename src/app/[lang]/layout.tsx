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

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const lang = resolveLang((await params).lang);
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

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const lang = resolveLang((await params).lang);

  return (
    <I18nProvider lang={lang}>
      <div lang={lang} dir={lang === 'he' ? 'rtl' : 'ltr'}>
        {children}
      </div>
    </I18nProvider>
  );
}
