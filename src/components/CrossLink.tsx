'use client';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n/context';

export default function CrossLink({ labelKey, href }: { labelKey: string; href: string }) {
  const { t, localePath } = useI18n();
  return (
    <div className="crosslink">
      <Link href={localePath(href)}>{t(labelKey)} &rarr;</Link>
    </div>
  );
}
