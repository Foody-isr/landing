'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n/context';
import SectorNav from '@/components/SectorNav';

const FEATURES = [
  {
    titleKey: 'food.feat1_title',
    descKey: 'food.feat1_desc',
    image: '/assets/img/sectors/feat-website.png',
  },
  {
    titleKey: 'food.feat2_title',
    descKey: 'food.feat2_desc',
    image: '/assets/img/sectors/feat-stock.png',
  },
  {
    titleKey: 'food.feat3_title',
    descKey: 'food.feat3_desc',
    image: '/assets/img/sectors/feat-foodcost.png',
  },
  {
    titleKey: 'food.feat4_title',
    descKey: 'food.feat4_desc',
    image: '/assets/img/sectors/feat-qr.png',
  },
];

const TOOLS = [
  { titleKey: 'food.tool1_title', descKey: 'food.tool1_desc', icon: '🎁' },
  { titleKey: 'food.tool2_title', descKey: 'food.tool2_desc', icon: '📦' },
  { titleKey: 'food.tool3_title', descKey: 'food.tool3_desc', icon: '📄' },
];

export default function FoodBeveragePage() {
  const { t } = useI18n();

  return (
    <>
      <SectorNav sectorKey="food" />

      {/* Hero */}
      <section className="rest-hero">
        <div className="rest-hero-inner">
          <div className="rest-hero-text">
            <span className="rest-hero-label">{t('food.hero_label')}</span>
            <h1>{t('food.hero_title')}</h1>
            <p>{t('food.hero_desc')}</p>
            <Link className="btn btn-primary" href="/contact">{t('food.hero_cta')}</Link>
          </div>
          <div className="rest-hero-image">
            <Image
              src="/assets/img/sectors/hero-restaurant.png"
              alt="Foody POS for restaurants"
              width={640}
              height={480}
              style={{ width: '100%', height: 'auto', display: 'block' }}
              priority
            />
          </div>
        </div>
      </section>

      {/* Dark banner */}
      <section className="rest-banner">
        <div className="rest-banner-inner">
          <div className="rest-banner-text">
            <h2>{t('food.banner_title')}</h2>
            <p>{t('food.banner_desc')}</p>
          </div>
          <div className="rest-banner-image">
            <Image
              src="/assets/img/sectors/banner-tools.png"
              alt="Restaurant tools overview"
              width={560}
              height={400}
              style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 12 }}
            />
          </div>
        </div>
      </section>

      {/* Alternating feature rows */}
      <section className="rest-features">
        <div className="rest-features-inner">
          <h2 className="rest-features-title">{t('food.features_title')}</h2>

          {FEATURES.map((feat, i) => (
            <div key={feat.titleKey} className={`rest-feat-row${i % 2 === 1 ? ' rest-feat-row-reverse' : ''}`}>
              <div className="rest-feat-image">
                <Image
                  src={feat.image}
                  alt={t(feat.titleKey)}
                  width={560}
                  height={400}
                  style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 16 }}
                />
              </div>
              <div className="rest-feat-text">
                <h3>{t(feat.titleKey)}</h3>
                <p>{t(feat.descKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tools / cards section */}
      <section className="rest-tools">
        <div className="rest-tools-inner">
          <h2>{t('food.tools_title')}</h2>
          <p className="rest-tools-desc">{t('food.tools_desc')}</p>
          <div className="rest-tools-grid">
            {TOOLS.map((tool) => (
              <div key={tool.titleKey} className="rest-tool-card">
                <span className="rest-tool-icon">{tool.icon}</span>
                <h3>{t(tool.titleKey)}</h3>
                <p>{t(tool.descKey)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="rest-cta">
        <div className="rest-cta-inner">
          <h2>{t('food.cta_title')}</h2>
          <p>{t('food.cta_desc')}</p>
          <Link className="btn btn-primary" href="/contact">{t('food.cta_button')}</Link>
        </div>
      </section>
    </>
  );
}
