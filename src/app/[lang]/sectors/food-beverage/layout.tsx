import type { Metadata } from 'next';
import { getMarketingMetadata } from '@/lib/seo';

export function generateMetadata({ params }: { params: { lang: string } }): Metadata {
  return getMarketingMetadata(params.lang, 'food');
}

export default function FoodBeverageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
