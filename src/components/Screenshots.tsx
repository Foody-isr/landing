'use client';
import Image from 'next/image';
import { useI18n } from '@/lib/i18n/context';

export default function ManageSection() {
  const { t } = useI18n();
  return (
    <section className="section">
      <div className="section-inner">
        <div className="manage-header">
          <h2>{t('manage.title')}</h2>
          <p>{t('manage.desc')}</p>
        </div>
        <div className="manage-grid">
          <div className="manage-card">
            <div className="manage-card-visual">
              <Image
                src="/assets/img/manage/manage-dashboard.png"
                alt="Analytics dashboard"
                width={600}
                height={375}
                style={{ width: '90%', height: 'auto', display: 'block', borderRadius: 8, boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}
              />
            </div>
            <div className="manage-card-body">
              <h3>{t('manage.card1_title')}</h3>
              <p>{t('manage.card1_desc')}</p>
            </div>
          </div>
          <div className="manage-card">
            <div className="manage-card-visual">
              <Image
                src="/assets/img/manage/manage-devices.png"
                alt="Foody on iPad, iPhone, Android and Mac"
                width={600}
                height={375}
                style={{ width: '90%', height: 'auto', display: 'block', borderRadius: 8, boxShadow: '0 2px 12px rgba(0,0,0,0.08)' }}
              />
            </div>
            <div className="manage-card-body">
              <h3>{t('manage.card2_title')}</h3>
              <p>{t('manage.card2_desc')}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
