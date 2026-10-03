import { getContentMetadata, resolveLang } from '@/lib/seo';

/** Canonical metadata for the existing legal document. */
export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }) {
  return getContentMetadata(resolveLang((await params).lang), '/privacy', 'Privacy Policy', 'Foody privacy policy.');
}

/** Keeps the legal document in the current locale navigation. */
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
