'use client';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useI18n } from '@/lib/i18n/context';

const FORMSPREE = 'https://formspree.io/f/xbdaqwev';

export default function ContactPage() {
  const { t, localePath } = useI18n();
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ msg: string; ok: boolean } | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const firstName = (data.get('first_name') as string || '').trim();
    const email = (data.get('email') as string || '').trim();

    if (!firstName || !email) {
      alert(t('contact.form_validation_required'));
      return;
    }

    setSubmitting(true);
    setFeedback(null);

    try {
      const res = await fetch(FORMSPREE, { method: 'POST', headers: { Accept: 'application/json' }, body: data });
      const json = await res.json();
      if (json.ok) {
        setFeedback({ msg: t('contact.form_success'), ok: true });
        form.reset();
      } else {
        throw new Error();
      }
    } catch {
      setFeedback({ msg: t('contact.form_error'), ok: false });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      <nav className="contact-nav">
        <Link href={localePath('/')} className="nav-logo">
          <Image src="/assets/logo.svg" alt="Foody" width={110} height={44} />
        </Link>
      </nav>

      <div className="contact-page">
        <div className="contact-page-inner">
          <div className="contact-page-left">
            <div className="contact-page-hero">
              <h1>{t('contact.page_title')}</h1>
              <p>{t('contact.page_subtitle')}</p>
            </div>
          </div>

          <div className="contact-page-right">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="contact-form-row">
                <div className="contact-form-field">
                  <input type="text" name="first_name" required placeholder={t('contact.form_first_name')} />
                </div>
                <div className="contact-form-field">
                  <input type="text" name="last_name" placeholder={t('contact.form_last_name')} />
                </div>
              </div>

              <div className="contact-form-field">
                <input type="email" name="email" required placeholder={t('contact.form_email')} />
              </div>

              <div className="contact-form-field">
                <input type="tel" name="phone" placeholder={t('contact.form_phone')} />
              </div>

              <div className="contact-form-field">
                <input type="text" name="business_name" placeholder={t('contact.form_business_name')} />
              </div>

              <div className="contact-form-field">
                <select name="sector" defaultValue="">
                  <option value="" disabled>{t('contact.form_sector')}</option>
                  <option value="Food & Beverage">{t('contact.form_sector_food')}</option>
                  <option value="Retail">{t('contact.form_sector_retail')}</option>
                  <option value="Beauty">{t('contact.form_sector_beauty')}</option>
                  <option value="Professional Services">{t('contact.form_sector_services')}</option>
                  <option value="Other">{t('contact.form_sector_other')}</option>
                </select>
              </div>

              <div className="contact-form-field">
                <select name="monthly_orders" defaultValue="">
                  <option value="" disabled>{t('contact.form_monthly_orders')}</option>
                  <option value="Less than 500">{t('contact.form_orders_lt500')}</option>
                  <option value="500 – 1,000">{t('contact.form_orders_500_1000')}</option>
                  <option value="1,000 – 3,000">{t('contact.form_orders_1000_3000')}</option>
                  <option value="More than 3,000">{t('contact.form_orders_gt3000')}</option>
                  <option value="I don't know">{t('contact.form_orders_unknown')}</option>
                </select>
              </div>

              <button type="submit" className="btn btn-primary contact-submit" disabled={submitting}>
                {submitting ? t('contact.form_sending') : t('contact.form_submit')}
              </button>

              {feedback && (
                <p className={`contact-feedback ${feedback.ok ? 'success' : 'error'}`}>
                  {feedback.msg}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
