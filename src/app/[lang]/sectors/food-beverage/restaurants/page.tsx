import type { Metadata } from 'next';
import SolutionPage from '@/components/marketing/SolutionPage';
import { getMarketingMetadata, resolveLang } from '@/lib/seo';

/** Metadata for the localized restaurants offering. */
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  return getMarketingMetadata((await params).lang, 'restaurants');
}

/** Localized restaurants acquisition page. */
export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  return <SolutionPage lang={resolveLang((await params).lang)} page="restaurants" />;
}
