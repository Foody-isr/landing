'use client';
import { useI18n } from '@/lib/i18n/context';

interface SectorNavProps {
  sectorKey: string;
}

export default function SectorNav({ sectorKey }: SectorNavProps) {
  const { t } = useI18n();
  return (
    <div className="sector-nav">
      <div className="sector-nav-inner">
        <span className="sector-nav-title">{t(`sectors.${sectorKey}_title`)}</span>
      </div>
    </div>
  );
}
