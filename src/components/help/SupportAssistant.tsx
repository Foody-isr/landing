'use client';

import { createContext, useContext, useEffect, useRef, useState } from 'react';
import { boundedHistory } from '@/lib/help/conversation.mjs';
import { usePathname } from 'next/navigation';
import { useI18n } from '@/lib/i18n/context';
import { supportEndpoint, validateAnswer } from '@/lib/help/transport.mjs';
import Icon from '@/components/marketing/Icon';

type Source = { id: string; title: string; url: string; lang: string; updatedAt: string };
type Turn = { role: 'user' | 'assistant'; content: string; sources?: Source[] };
const Context = createContext<() => void>(() => {});

/** Opens the shared assistant from the hub without creating a separate conversation. */
export function SupportEntry() {
  const open = useContext(Context);
  const { t } = useI18n();
  return <button className="support-ask" onClick={open}><Icon name="sparkles" />{t('help.assistant_open')}</button>;
}

/** Session-only, accessible support panel; responses contain plain text and verified article links. */
export default function SupportAssistant({ children }: { children: React.ReactNode }) {
  const { t, lang } = useI18n();
  const pathname = usePathname();
  const dialog = useRef<HTMLDialogElement>(null);
  const scroll = useRef<HTMLDivElement>(null);
  const controller = useRef<AbortController | null>(null);
  const [draft, setDraft] = useState('');
  const [turns, setTurns] = useState<Turn[]>([]);
  const [pendingQuestion, setPendingQuestion] = useState('');
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState('');
  const locked = useRef(false);
  useEffect(() => { scroll.current?.scrollTo({ top: scroll.current.scrollHeight }); }, [turns, busy, error]);
  useEffect(() => () => controller.current?.abort(), []);
  useEffect(() => { controller.current?.abort(); setTurns([]); setPendingQuestion(''); setError(''); setDraft(''); }, [lang]);

  async function ask(message: string) {
    if (!message.trim() || locked.current) return;
    locked.current = true;
    setBusy(true); setError(''); setPendingQuestion(message); setDraft('');
    const abort = new AbortController(); controller.current = abort;
    try {
      const response = await fetch(supportEndpoint(window.location.hostname, process.env.NEXT_PUBLIC_API_URL), { method: 'POST', credentials: 'omit',
        headers: { 'Content-Type': 'application/json' }, referrerPolicy: 'no-referrer', signal: AbortSignal.any([abort.signal, AbortSignal.timeout(55000)]),
        body: JSON.stringify({ lang, message, topic: pathname.split('/')[3] || '', history: boundedHistory(turns) }) });
      if (!response.ok) throw new Error(response.status === 429 ? 'assistant_limit' : 'assistant_error');
      const result = validateAnswer(await response.json());
      if (!result) throw new Error('assistant_error');
      if (abort.signal.aborted) return;
      setTurns(current => [...current, { role: 'user', content: message }, { role: 'assistant', content: result.answer, sources: result.sources }]);
      setPendingQuestion('');
    } catch (e) {
      if (!abort.signal.aborted) { setError(e instanceof Error && e.message === 'assistant_limit' ? 'assistant_limit' : 'assistant_error'); setDraft(message); }
    } finally { setBusy(false); locked.current = false; }
  }

  function reset() { controller.current?.abort(); setTurns([]); setError(''); setPendingQuestion(''); setDraft(''); }
  const open = () => { if (!dialog.current?.open) dialog.current?.showModal(); };
  return <Context.Provider value={open}>
    {children}
    <button className="support-floating" onClick={open} aria-label={t('help.assistant_open')}><Icon name="chat" /></button>
    <dialog className="help-assistant" ref={dialog} aria-labelledby="support-assistant-title" dir={lang === 'he' ? 'rtl' : 'ltr'}>
      <header className="support-panel-header">
        <button aria-label={t('help.assistant_close')} onClick={() => dialog.current?.close()}><Icon name="close" /></button>
        <h2 id="support-assistant-title">{t('help.assistant_title')}</h2>
        <button aria-label={t('help.assistant_reset')} title={t('help.assistant_reset')} onClick={reset} disabled={busy}><Icon name="reset" /></button>
      </header>
      <div className="support-conversation" ref={scroll}>
        {!turns.length && !pendingQuestion && <div className="support-welcome">
          <Icon name="sparkles" /><h3>{t('help.assistant_heading')}</h3><p>{t('help.assistant_description')}</p>
          <div className="support-suggestions">{['menu', 'stock', 'order', 'printer'].map(key => <button key={key} onClick={() => ask(t(`help.suggestion_${key}`))} disabled={busy}>{t(`help.suggestion_${key}`)}<Icon name="arrow" /></button>)}</div>
        </div>}
        <div role="log" aria-live="polite" aria-relevant="additions text">
          {turns.map((turn, i) => <div className={`support-turn support-turn-${turn.role}`} key={i}>
            <span className="support-speaker">{t(`help.${turn.role === 'user' ? 'assistant_you' : 'assistant_title'}`)}</span>
            <div className="support-answer">{turn.content}</div>
            {!!turn.sources?.length && <div className="support-citations"><strong>{t('help.assistant_sources')}</strong>{turn.sources.map(source => <a key={source.id} href={source.url} target="_blank" rel="noopener noreferrer">{source.title}{source.lang !== lang && <small>{t('help.english')}</small>}</a>)}</div>}
          </div>)}
          {pendingQuestion && <div className="support-turn support-turn-user"><span className="support-speaker">{t('help.assistant_you')}</span><div className="support-answer">{pendingQuestion}</div></div>}
        </div>
        {busy && <p className="support-status" role="status">{t('help.assistant_busy')}</p>}
        {error && <div className="support-error" role="alert"><p>{t(`help.${error}`)}</p><a href={`/${lang}/help`}>{t('help.back_to_help')}</a> · <a href="mailto:support@foody-pos.co.il">{t('help.contact_action')}</a></div>}
      </div>
      <form className="support-composer" onSubmit={e => { e.preventDefault(); void ask(draft); }}>
        <label className="sr-only" htmlFor="support-question">{t('help.assistant_placeholder')}</label>
        <div><textarea id="support-question" maxLength={1500} rows={2} value={draft} placeholder={t('help.assistant_placeholder')} onChange={e => setDraft(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey && !e.nativeEvent.isComposing) { e.preventDefault(); void ask(draft); } }} />
          <button type="submit" disabled={busy || !draft.trim()} aria-label={t('help.assistant_send')}><Icon name="up" /></button></div>
        <p>{t('help.assistant_notice')}</p>
        {!turns.length && <p>{t('help.assistant_privacy')} <a href={`/${lang}/privacy`}>{t('help.privacy_link')}</a></p>}
      </form>
    </dialog>
  </Context.Provider>;
}
