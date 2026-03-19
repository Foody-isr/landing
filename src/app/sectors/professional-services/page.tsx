'use client';
import { useI18n } from '@/lib/i18n/context';

export default function ProfessionalServicesPage() {
  const { t } = useI18n();
  return (
    <main className="sector-page">
      <h1>{t('sectors.services_title')}</h1>
      <p className="sector-subtitle">{t('sectors.services_subtitle')}</p>
    </main>
  );
}
