import type { Metadata } from 'next';
import { getMarketingMetadata } from '@/lib/seo';

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  return getMarketingMetadata(params.lang, 'pricing');
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children;
}
