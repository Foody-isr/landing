import { I18nProvider } from '@/lib/i18n/context';

type Lang = 'en' | 'fr';
const SUPPORTED: Lang[] = ['en', 'fr'];

export function generateStaticParams() {
  return SUPPORTED.map((lang) => ({ lang }));
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
