'use client';
import { useI18n } from '@/lib/i18n/context';

export default function RetailPage() {
  const { t } = useI18n();
  return (
    <main className="sector-page">
      <h1>{t('sectors.retail_title')}</h1>
      <p className="sector-subtitle">{t('sectors.retail_subtitle')}</p>
    </main>
  );
}
