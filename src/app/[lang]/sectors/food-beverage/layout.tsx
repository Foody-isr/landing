import type { Metadata } from 'next';
import { getMarketingMetadata } from '@/lib/seo';

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  return getMarketingMetadata((await params).lang, 'food');
}

export default function FoodBeverageLayout({ children }: { children: React.ReactNode }) {
  return children;
}
