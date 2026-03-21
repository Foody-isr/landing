'use client';
import Image from 'next/image';
import { useI18n } from '@/lib/i18n/context';

const USE_CASES = [
  'whatsapp.use1',
  'whatsapp.use2',
  'whatsapp.use3',
  'whatsapp.use4',
];

export default function WhatsApp() {
  const { t } = useI18n();
  return (
    <section className="section whatsapp-section">
      <div className="section-inner">
        <div className="whatsapp-row">
          <div className="whatsapp-text">
            <span className="whatsapp-badge">{t('whatsapp.badge')}</span>
            <h2>{t('whatsapp.title')}</h2>
            <p className="whatsapp-desc">{t('whatsapp.desc')}</p>
            <ul className="whatsapp-uses">
              {USE_CASES.map((key) => (
                <li key={key}>
                  <span className="whatsapp-check">&#10003;</span>
                  <span>{t(key)}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="whatsapp-image-wrapper">
            <Image
              src="/assets/img/whatsapp/whatsapp-preview.png"
              alt="WhatsApp Business integration"
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
