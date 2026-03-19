'use client';
import { useI18n } from '@/lib/i18n/context';

export default function Pricing() {
  const { t } = useI18n();
  return (
    <section id="pricing" className="section section-alt">
      <div className="section-inner">
        <div className="section-header">
          <span className="badge green">{t('pricing.badge')}</span>
          <h2>{t('pricing.section_title')}</h2>
          <p>{t('pricing.section_description')}</p>
        </div>
        <div className="pricing-grid">
          {/* Starter */}
          <div className="plan">
            <div className="plan-top">
              <div>
                <h3>{t('pricing.starter_title')}</h3>
                <div className="plan-subtitle">{t('pricing.starter_subtitle')}</div>
              </div>
            </div>
            <div className="price"><span>{t('pricing.starter_price')}</span> <small>{t('pricing.starter_period')}</small></div>
            <hr className="plan-divider" />
            <ul>
              {['starter_feat1','starter_feat2','starter_feat3','starter_feat4','starter_feat5','starter_feat6'].map(k => (
                <li key={k}>{t(`pricing.${k}`)}</li>
              ))}
            </ul>
            <a className="btn btn-outline plan-cta no-print" href="/contact">{t('pricing.starter_cta')}</a>
            <div className="plan-note">{t('pricing.starter_note')}</div>
          </div>
          {/* Premium */}
          <div className="plan popular">
            <div className="plan-top">
              <div>
                <h3>{t('pricing.premium_title')}</h3>
                <div className="plan-subtitle">{t('pricing.premium_subtitle')}</div>
              </div>
              <span className="badge orange">{t('pricing.premium_badge')}</span>
            </div>
            <div className="price"><span>{t('pricing.premium_price')}</span> <small>{t('pricing.premium_period')}</small></div>
            <hr className="plan-divider" />
            <ul>
              {['premium_feat1','premium_feat2','premium_feat4','premium_feat5','premium_feat6','premium_feat7','premium_feat8','premium_feat9','premium_feat10'].map(k => (
                <li key={k}>{t(`pricing.${k}`)}</li>
              ))}
            </ul>
            <a className="btn btn-primary plan-cta no-print" href="/contact">{t('pricing.premium_cta')}</a>
            <div className="plan-note">{t('pricing.premium_note')}</div>
          </div>
          {/* Enterprise */}
          <div className="plan">
            <div className="plan-top">
              <div>
                <h3>{t('pricing.enterprise_title')}</h3>
                <div className="plan-subtitle">{t('pricing.enterprise_subtitle')}</div>
              </div>
            </div>
            <div className="price"><span>{t('pricing.enterprise_price')}</span> <small>{t('pricing.enterprise_period')}</small></div>
            <hr className="plan-divider" />
            <ul>
              {['enterprise_feat1','enterprise_feat2','enterprise_feat3','enterprise_feat4','enterprise_feat5','enterprise_feat6','enterprise_feat7','enterprise_feat8'].map(k => (
                <li key={k}>{t(`pricing.${k}`)}</li>
              ))}
            </ul>
            <a className="btn btn-outline plan-cta no-print" href="/contact">{t('pricing.enterprise_cta')}</a>
            <div className="plan-note">{t('pricing.enterprise_note')}</div>
          </div>
        </div>
        <p className="small-print">{t('pricing.small_print')}</p>
      </div>
    </section>
  );
}
