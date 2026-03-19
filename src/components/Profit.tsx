'use client';
import Image from 'next/image';
import { useI18n } from '@/lib/i18n/context';

export default function TapToPaySection() {
  const { t } = useI18n();
  return (
    <section className="section">
      <div className="section-inner">
        <div className="tap-row">
          <div className="tap-text">
            <h2>{t('tap.title')}</h2>
            <p className="qr-desc">{t('tap.desc')}</p>
          </div>
          <div className="tap-image-wrapper">
            <span className="qr-badge-new tap-badge">{t('tap.badge')}</span>
            <Image
              src="/assets/img/tap/tap-to-pay.png"
              alt="Tap to Pay contactless payment"
              width={720}
              height={480}
              style={{ width: '100%', height: 'auto', display: 'block' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
