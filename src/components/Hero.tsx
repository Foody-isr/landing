'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n/context';

export default function Hero() {
  const { t } = useI18n();
  return (
    <header className="hero">
      <div className="hero-inner">
        <div className="hero-content">
          <h1>{t('hero.title')}</h1>
          <p className="lead">{t('hero.lead')}</p>
          <div className="hero-actions no-print">
            <Link className="btn btn-primary" href="/contact">{t('hero.cta')}</Link>
          </div>
        </div>
        <div className="hero-image-wrapper">
          <span className="hero-badge">{t('hero.badge')}</span>
          <div className="hero-image">
            <Image
              src="/assets/img/hero/hero-product.png"
              alt="Foody POS Dashboard"
              width={640}
              height={480}
              style={{ width: '100%', height: 'auto', display: 'block' }}
              priority
            />
          </div>
        </div>
      </div>
    </header>
  );
}
