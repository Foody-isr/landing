'use client';
import { useState, useEffect, useRef } from 'react';
import { useI18n } from '@/lib/i18n/context';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

export default function Contact() {
  const { t } = useI18n();
  const [open, setOpen] = useState(false);
  const [showPrinterSub, setShowPrinterSub] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ msg: string; ok: boolean } | null>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
  }, [open]);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a[href="#contact"]');
      if (anchor) { e.preventDefault(); setOpen(true); }
    };
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const name = (data.get('name') as string || '').trim();
    const email = (data.get('email') as string || '').trim();
    const restaurant = (data.get('restaurant') as string || '').trim();

    if (!name || !email || !restaurant) {
      alert(t('contact.form_validation_required'));
      return;
    }
    const orderTypes = (data.getAll('order_types') as string[]);
    if (orderTypes.length === 0) {
      alert(t('contact.form_validation_order_types'));
      return;
    }

    setSubmitting(true);
    setFeedback(null);

    const body = {
      first_name: name,
      email,
      business_name: restaurant,
      sector: `Order types: ${orderTypes.join(', ')}`,
      monthly_orders: (data.get('monthly_orders') as string) || '',
      phone: [
        `iPad: ${(data.get('has_ipad') as string) || 'N/A'}`,
        `Printer: ${(data.get('wants_printer') as string) || 'N/A'}`,
        `Has printer: ${(data.get('has_printer') as string) || 'N/A'}`,
        `Start: ${(data.get('start_date') as string || '').trim() || 'N/A'}`,
      ].join(' | '),
    };

    try {
      const res = await fetch(`${API_URL}/api/v1/public/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const json = await res.json();
      if (json.ok) {
        setFeedback({ msg: t('contact.form_success'), ok: true });
        form.reset();
        setShowPrinterSub(false);
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
      {/* Dark CTA Footer */}
      <footer id="contact" className="dark-footer no-print">
        <div className="dark-footer-inner">
          <h2>{t('footer.title')}</h2>
          <a className="footer-link" href="#contact">
            {t('footer.link')} &rarr;
          </a>

          <div className="footer-newsletter">
            <div>
              <h3>{t('footer.newsletter_title')}</h3>
              <p>{t('footer.newsletter_desc')}</p>
              <div className="newsletter-form">
                <input type="email" placeholder={t('footer.newsletter_placeholder')} />
                <button type="button">{t('footer.newsletter_button')}</button>
              </div>
              <div className="newsletter-consent">
                <input type="checkbox" id="consent" />
                <label htmlFor="consent">
                  {t('footer.newsletter_consent')}
                </label>
              </div>
            </div>
            <div className="footer-icons">
              <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M40 8H8v32h32V8zm-4 4v24H12V12h24z"/><path d="M20 20h8v8h-8z"/></svg>
              <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M8 12l16 12L40 12v24H8V12zm4 4v16h24V16L24 28 12 16z"/></svg>
              <svg viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg"><path d="M10 14l14 10 14-10v20H10V14z"/></svg>
            </div>
          </div>

          <div className="footer-bottom">
            {t('footer.copyright')}
          </div>
        </div>
      </footer>

      {/* Modal */}
      <div
        ref={overlayRef}
        className={`modal-overlay no-print${open ? ' open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => { if (e.target === overlayRef.current) setOpen(false); }}
      >
        <div className="modal">
          <button className="modal-close" onClick={() => setOpen(false)} aria-label={t('contact.modal_close')}>&times;</button>
          <h3 id="modal-title">{t('contact.modal_title')}</h3>
          <p className="modal-sub">{t('contact.modal_subtitle')}</p>

          <form onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="f-name"><span>{t('contact.form_name')}</span> <span style={{ color: 'var(--primary)' }}>*</span></label>
              <input type="text" id="f-name" name="name" required placeholder={t('contact.form_name_placeholder')} />
            </div>
            <div className="form-group">
              <label htmlFor="f-email"><span>{t('contact.form_email')}</span> <span style={{ color: 'var(--primary)' }}>*</span></label>
              <input type="email" id="f-email" name="email" required placeholder={t('contact.form_email_placeholder')} />
            </div>
            <div className="form-group">
              <label htmlFor="f-restaurant"><span>{t('contact.form_restaurant')}</span> <span style={{ color: 'var(--primary)' }}>*</span></label>
              <input type="text" id="f-restaurant" name="restaurant" required placeholder={t('contact.form_restaurant_placeholder')} />
            </div>

            <hr className="form-divider" />

            <div className="form-group">
              <span className="form-section-label"><span>{t('contact.form_order_types')}</span> <span style={{ color: 'var(--primary)' }}>*</span></span>
              <div className="checkbox-group">
                <label><input type="checkbox" name="order_types" value="Pickup" /> <span>{t('contact.form_pickup')}</span></label>
                <label><input type="checkbox" name="order_types" value="Delivery" /> <span>{t('contact.form_delivery')}</span></label>
                <label><input type="checkbox" name="order_types" value="Dine-in" /> <span>{t('contact.form_dinein')}</span></label>
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="f-orders">{t('contact.form_monthly_orders')}</label>
              <select id="f-orders" name="monthly_orders">
                <option value="">{t('contact.form_select')}</option>
                <option value="Less than 500">{t('contact.form_orders_lt500')}</option>
                <option value="500 – 1,000">{t('contact.form_orders_500_1000')}</option>
                <option value="1,000 – 3,000">{t('contact.form_orders_1000_3000')}</option>
                <option value="More than 3,000">{t('contact.form_orders_gt3000')}</option>
                <option value="I don't know / not sure">{t('contact.form_orders_unknown')}</option>
              </select>
            </div>

            <hr className="form-divider" />

            <div className="form-group">
              <span className="form-section-label">{t('contact.form_ipad')}</span>
              <div className="radio-group">
                <label><input type="radio" name="has_ipad" value="Yes" /> <span>{t('contact.form_yes')}</span></label>
                <label><input type="radio" name="has_ipad" value="No" /> <span>{t('contact.form_no')}</span></label>
              </div>
              <p className="form-note">{t('contact.form_ipad_note')}</p>
            </div>

            <div className="form-group">
              <span className="form-section-label">{t('contact.form_printer')}</span>
              <div className="radio-group">
                <label><input type="radio" name="wants_printer" value="Yes" onChange={() => setShowPrinterSub(true)} /> <span>{t('contact.form_yes')}</span></label>
                <label><input type="radio" name="wants_printer" value="No" onChange={() => setShowPrinterSub(false)} /> <span>{t('contact.form_no')}</span></label>
              </div>
              {showPrinterSub && (
                <div className="sub-group">
                  <span className="form-section-label" style={{ marginTop: 10 }}>{t('contact.form_printer_sub')}</span>
                  <div className="radio-group">
                    <label><input type="radio" name="has_printer" value="Yes" /> <span>{t('contact.form_yes')}</span></label>
                    <label><input type="radio" name="has_printer" value="No" /> <span>{t('contact.form_no')}</span></label>
                  </div>
                  <p className="form-note">{t('contact.form_printer_note')}</p>
                </div>
              )}
            </div>

            <hr className="form-divider" />

            <div className="form-group">
              <label htmlFor="f-start">{t('contact.form_start')}</label>
              <input type="text" id="f-start" name="start_date" placeholder={t('contact.form_start_placeholder')} />
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: 8 }} disabled={submitting}>
              {submitting ? t('contact.form_sending') : t('contact.form_submit')}
            </button>

            {feedback && (
              <p style={{ marginTop: 12, textAlign: 'center', fontSize: 14, color: feedback.ok ? '#77BA4B' : 'var(--primary)' }}>
                {feedback.msg}
              </p>
            )}
          </form>
        </div>
      </div>
    </>
  );
}
