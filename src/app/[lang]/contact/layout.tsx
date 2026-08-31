import type { Metadata } from 'next';
import { getMarketingMetadata } from '@/lib/seo';

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  return getMarketingMetadata(params.lang, 'contact');
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
