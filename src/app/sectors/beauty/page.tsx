'use client';
import { useI18n } from '@/lib/i18n/context';

export default function BeautyPage() {
  const { t } = useI18n();
  return (
    <main className="sector-page">
      <h1>{t('sectors.beauty_title')}</h1>
      <p className="sector-subtitle">{t('sectors.beauty_subtitle')}</p>
    </main>
  );
}
