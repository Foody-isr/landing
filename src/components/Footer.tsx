'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n/context';

export default function Footer() {
  const { t } = useI18n();
  return (
    <footer className="site-footer no-print">
      <div className="site-footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image src="/assets/logo.svg" alt="Foody" width={100} height={40} />
            <p className="footer-tagline">{t('footer.tagline')}</p>
          </div>

          <div className="footer-col">
            <h4>{t('footer.col1_title')}</h4>
            <ul>
              <li><Link href="/sectors/food-beverage">{t('footer.col1_pos')}</Link></li>
              <li><Link href="/sectors/food-beverage">{t('footer.col1_qr')}</Link></li>
              <li><Link href="/sectors/food-beverage">{t('footer.col1_payments')}</Link></li>
              <li><Link href="/sectors/food-beverage">{t('footer.col1_dashboard')}</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t('footer.col2_title')}</h4>
            <ul>
              <li><Link href="/sectors/food-beverage">{t('footer.col2_food')}</Link></li>
              <li><span className="footer-disabled">{t('footer.col2_retail')}</span></li>
              <li><span className="footer-disabled">{t('footer.col2_beauty')}</span></li>
              <li><span className="footer-disabled">{t('footer.col2_services')}</span></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t('footer.col3_title')}</h4>
            <ul>
              <li><Link href="/pricing">{t('footer.col3_pricing')}</Link></li>
              <li><Link href="/contact">{t('footer.col3_contact')}</Link></li>
              <li><Link href="/contact">{t('footer.col3_demo')}</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>{t('footer.col4_title')}</h4>
            <ul>
              <li><Link href="/">{t('footer.col4_about')}</Link></li>
              <li><Link href="/privacy">{t('footer.col4_privacy')}</Link></li>
              <li><Link href="/terms">{t('footer.col4_terms')}</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom-bar">
          <span>{t('footer.copyright')}</span>
        </div>
      </div>
    </footer>
  );
}
