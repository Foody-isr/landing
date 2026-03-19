'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n/context';

const CARDS = [
  {
    titleKey: 'sell.card1_title',
    descKey: 'sell.card1_desc',
    image: '/assets/img/sell/sell-online.png',
    alt: 'QR ordering web app',
  },
  {
    titleKey: 'sell.card2_title',
    descKey: 'sell.card2_desc',
    image: '/assets/img/sell/sell-pos.png',
    alt: 'iPad POS system',
  },
  {
    titleKey: 'sell.card3_title',
    descKey: 'sell.card3_desc',
    linkKey: 'sell.card3_link',
    linkHref: 'https://www.payplus.co.il',
    image: '/assets/img/sell/sell-payments.png',
    alt: 'Payment processing',
  },
];

export default function Features() {
  const { t } = useI18n();
  return (
    <section id="features" className="section section-gray">
      <div className="section-inner">
        <div className="sell-header">
          <h2>{t('sell.title')}</h2>
        </div>
        <div className="sell-grid">
          {CARDS.map((card) => (
            <div key={card.titleKey} className="sell-card">
              <div className="sell-card-image">
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={400}
                  height={300}
                  style={{ width: '85%', height: 'auto', display: 'block', borderRadius: 8, boxShadow: '0 4px 20px rgba(0,0,0,0.1)' }}
                />
              </div>
              <h3>{t(card.titleKey)}</h3>
              <p>{t(card.descKey)}</p>
              {'linkKey' in card && card.linkHref && (
                <a href={card.linkHref} target="_blank" rel="noopener noreferrer" className="sell-card-link">
                  {t(card.linkKey!)} &rarr;
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
