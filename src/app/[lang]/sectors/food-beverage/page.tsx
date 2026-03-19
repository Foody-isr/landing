'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n/context';
import SectorNav from '@/components/SectorNav';

const CAROUSEL_ITEMS = [
  { titleKey: 'food_overview.carousel_pos_title', descKey: 'food_overview.carousel_pos_desc', image: '/assets/img/sectors/carousel-pos.png' },
  { titleKey: 'food_overview.carousel_qr_title', descKey: 'food_overview.carousel_qr_desc', image: '/assets/img/sectors/carousel-qr.png' },
  { titleKey: 'food_overview.carousel_kds_title', descKey: 'food_overview.carousel_kds_desc', image: '/assets/img/sectors/carousel-kds.png' },
  { titleKey: 'food_overview.carousel_tap_title', descKey: 'food_overview.carousel_tap_desc', image: '/assets/img/sectors/carousel-tap.png' },
  { titleKey: 'food_overview.carousel_dashboard_title', descKey: 'food_overview.carousel_dashboard_desc', image: '/assets/img/sectors/carousel-dashboard.png' },
];

const PAIN_POINTS = [
  'food_overview.pain_1',
  'food_overview.pain_2',
  'food_overview.pain_3',
  'food_overview.pain_4',
  'food_overview.pain_5',
  'food_overview.pain_6',
];

const BENEFITS = [
  { titleKey: 'food_overview.benefit_1_title', descKey: 'food_overview.benefit_1_desc' },
  { titleKey: 'food_overview.benefit_2_title', descKey: 'food_overview.benefit_2_desc' },
  { titleKey: 'food_overview.benefit_3_title', descKey: 'food_overview.benefit_3_desc' },
  { titleKey: 'food_overview.benefit_4_title', descKey: 'food_overview.benefit_4_desc' },
  { titleKey: 'food_overview.benefit_5_title', descKey: 'food_overview.benefit_5_desc' },
  { titleKey: 'food_overview.benefit_6_title', descKey: 'food_overview.benefit_6_desc' },
];

const CONCEPTS = [
  {
    key: 'food_overview.concept_ghost',
    descKey: 'food_overview.concept_ghost_desc',
    image: '/assets/img/sectors/concept-ghost.png',
    backImage: '/assets/img/sectors/concept-ghost-back.png',
  },
  {
    key: 'food_overview.concept_counter',
    descKey: 'food_overview.concept_counter_desc',
    image: '/assets/img/sectors/concept-counter.png',
    backImage: '/assets/img/sectors/concept-counter-back.png',
  },
  {
    key: 'food_overview.concept_fullservice',
    descKey: 'food_overview.concept_fullservice_desc',
    image: '/assets/img/sectors/concept-fullservice.png',
    backImage: '/assets/img/sectors/concept-fullservice-back.png',
  },
];

function ConceptCards({ concepts }: { concepts: typeof CONCEPTS }) {
  const { t } = useI18n();
  const [flipped, setFlipped] = useState<string | null>(null);

  return (
    <div className="sector-concepts-grid">
      {concepts.map((c) => (
        <div
          key={c.key}
          className={`sector-concept-flip${flipped === c.key ? ' flipped' : ''}`}
          onClick={() => setFlipped(flipped === c.key ? null : c.key)}
        >
          <div className="sector-concept-flip-inner">
            {/* Front */}
            <div className="sector-concept-front">
              <div className="sector-concept-image">
                <Image
                  src={c.image}
                  alt={t(c.key)}
                  width={500}
                  height={400}
                  style={{ display: 'block' }}
                />
              </div>
              <div className="sector-concept-label">{t(c.key)}</div>
            </div>
            {/* Back */}
            <div className="sector-concept-back">
              <div className="sector-concept-back-img">
                <Image
                  src={c.backImage}
                  alt={t(c.key)}
                  width={500}
                  height={400}
                  style={{ display: 'block' }}
                />
              </div>
              <div className="sector-concept-back-text">
                <strong>{t(c.key)}</strong>
                <p>{t(c.descKey)}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function FoodBeveragePage() {
  const { t, localePath } = useI18n();

  return (
    <>
      <SectorNav sectorKey="food" />

      {/* Hero */}
      <section id="overview" className="sector-hero">
        <div className="sector-hero-inner">
          <div className="sector-hero-left">
            <p className="sector-hero-category">{t('food_overview.hero_category')}</p>
            <h1>{t('food_overview.hero_title')}</h1>
          </div>
          <div className="sector-hero-right">
            <p className="sector-hero-desc">{t('food_overview.hero_desc')}</p>
            <div className="sector-hero-actions">
              <Link className="btn btn-primary" href={localePath('/contact')}>{t('food_overview.hero_cta')}</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Product carousel */}
      <section className="sector-carousel">
        <div className="sector-carousel-track">
          {CAROUSEL_ITEMS.map((item) => (
            <div key={item.titleKey} className="sector-carousel-card">
              <Image
                src={item.image}
                alt={t(item.titleKey)}
                width={480}
                height={600}
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
              <div className="sector-carousel-overlay">
                <p><strong>{t(item.titleKey)}</strong> {t(item.descKey)}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* What is it */}
      <section className="sector-section">
        <div className="sector-section-inner sector-centered">
          <h2 className="sector-section-title">{t('food_overview.what_title')}</h2>
          <p className="sector-section-desc">{t('food_overview.what_desc')}</p>
        </div>
      </section>

      {/* Why switch — 2 col */}
      <section className="sector-section">
        <div className="sector-section-inner sector-two-col">
          <h2 className="sector-big-heading">{t('food_overview.why_title')}</h2>
          <div>
            <p className="sector-big-text">{t('food_overview.why_desc')}</p>
          </div>
        </div>
      </section>

      {/* Old way — pain points */}
      <section className="sector-section sector-section-center">
        <div className="sector-section-inner">
          <div className="sector-notepad">
            {PAIN_POINTS.map((key) => (
              <div key={key} className="sector-notepad-item">
                <span className="sector-notepad-x">&#10005;</span>
                <span>{t(key)}</span>
              </div>
            ))}
          </div>
          <h2 className="sector-ghost-heading">{t('food_overview.old_way_title')}</h2>
        </div>
      </section>

      {/* New way — benefits */}
      <section className="sector-section">
        <div className="sector-section-inner">
          <div className="sector-new-card">
            <h2 className="sector-gradient-heading">{t('food_overview.new_way_title')}</h2>
            <div className="sector-benefits-grid">
              {BENEFITS.map((b) => (
                <div key={b.titleKey} className="sector-benefit">
                  <span className="sector-benefit-check">&#10003;</span>
                  <div>
                    <strong>{t(b.titleKey)}</strong> {t(b.descKey)}
                  </div>
                </div>
              ))}
            </div>
            <hr className="sector-divider" />
            <Link className="sector-link sector-link-center" href={localePath('/contact')}>{t('food_overview.new_way_cta')} &rarr;</Link>
          </div>
        </div>
      </section>

      {/* Restaurant concepts — 3 cards */}
      <section className="sector-section">
        <div className="sector-section-inner">
          <h2 className="sector-section-title-left">{t('food_overview.concepts_title')}</h2>
          <p className="sector-section-desc-left">{t('food_overview.concepts_desc')}</p>
          <ConceptCards concepts={CONCEPTS} />
        </div>
      </section>

      {/* Get started */}
      <section className="sector-section">
        <div className="sector-section-inner">
          <h2 className="sector-section-title-left">{t('food_overview.start_title')}</h2>
          <div className="sector-start-grid">
            <div className="sector-start-card sector-start-card-primary">
              <h3>{t('food_overview.start_card1_title')}</h3>
              <p>{t('food_overview.start_card1_desc')}</p>
              <div className="sector-start-card-actions">
                <Link className="btn btn-primary" href={localePath('/contact')}>{t('food_overview.start_card1_cta')}</Link>
              </div>
            </div>
            <div className="sector-start-card">
              <h3>{t('food_overview.start_card2_title')}</h3>
              <p>{t('food_overview.start_card2_desc')}</p>
              <p className="sector-start-card-note">{t('food_overview.start_card2_note')}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
