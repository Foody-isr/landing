import { permanentRedirect } from 'next/navigation';
import { resolveLang } from '@/lib/seo';

/** Preserves the old placeholder URL through the active business offering. */
export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  permanentRedirect(`/${resolveLang((await params).lang)}/sectors/retail`);
}
