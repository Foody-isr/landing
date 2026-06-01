'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import { useI18n } from '@/lib/i18n/context';

/**
 * Swap this filename every 2–3 months when you ship a new intro.
 * The session key is derived from it, so returning visitors get the new cut.
 */
const VIDEO_SRC = '/intro/foody-intro.mp4';

const sessionKey = `foody_intro_seen::${VIDEO_SRC}`;

type Phase = 'curtain' | 'reveal' | 'playing' | 'dissolving' | 'gone';

export default function IntroVideo() {
  const { t } = useI18n();
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [phase, setPhase] = useState<Phase>('gone');
  const [progress, setProgress] = useState(0);
  const [needsSoundTap, setNeedsSoundTap] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.sessionStorage.getItem(sessionKey)) return;
    setPhase('curtain');
  }, []);

  // Choreograph: curtain → reveal → start playback.
  useEffect(() => {
    if (phase !== 'curtain') return;
    const a = window.setTimeout(() => setPhase('reveal'), 1700);
    const b = window.setTimeout(() => setPhase('playing'), 2500);
    return () => {
      window.clearTimeout(a);
      window.clearTimeout(b);
    };
  }, [phase]);

  const dismiss = useCallback((reason: 'ended' | 'skipped' | 'error') => {
    setPhase((cur) => (cur === 'gone' ? cur : 'dissolving'));
    try {
      window.sessionStorage.setItem(sessionKey, '1');
    } catch {
      /* private mode — ignore */
    }
    const ms = reason === 'error' ? 0 : 700;
    window.setTimeout(() => setPhase('gone'), ms);
  }, []);

  // Start muted (browsers always allow muted autoplay) and prompt for sound.
  useEffect(() => {
    if (phase !== 'playing') return;
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;
    v.volume = 1;
    setNeedsSoundTap(true);

    v.play().catch(() => dismiss('error'));
  }, [phase, dismiss]);

  // Keyboard: Esc to skip, Space to pause/play.
  useEffect(() => {
    if (phase === 'gone' || phase === 'dissolving') return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        dismiss('skipped');
      } else if (e.code === 'Space') {
        e.preventDefault();
        const v = videoRef.current;
        if (!v) return;
        if (v.paused) v.play().catch(() => {});
        else v.pause();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [phase, dismiss]);

  // Lock body scroll while the overlay is up.
  useEffect(() => {
    if (phase === 'gone') return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [phase]);

  const handleEnableSound = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    v.volume = 1;
    v.currentTime = 0;
    setNeedsSoundTap(false);
    v.play().catch(() => {});
  };

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    setProgress(v.currentTime / v.duration);
  };

  if (phase === 'gone') return null;

  const overlayClass = [
    'intro-overlay',
    `intro-phase-${phase}`,
    needsSoundTap ? 'intro-needs-sound' : '',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={overlayClass} aria-hidden={phase === 'dissolving'} role="dialog" aria-label="Foody intro">
      {/* Curtain wordmark — appears, then fades as the frame reveals */}
      <div className="intro-curtain">
        <div className="intro-wordmark" aria-hidden>
          {'FOODY'.split('').map((c, i) => (
            <span key={i} style={{ animationDelay: `${i * 110}ms` }}>{c}</span>
          ))}
        </div>
        <div className="intro-curtain-line" />
      </div>

      {/* Video stage */}
      <div className="intro-stage">
        <span className="intro-bracket intro-bracket-tl" aria-hidden />
        <span className="intro-bracket intro-bracket-tr" aria-hidden />
        <span className="intro-bracket intro-bracket-bl" aria-hidden />
        <span className="intro-bracket intro-bracket-br" aria-hidden />

        <video
          ref={videoRef}
          className="intro-video"
          src={VIDEO_SRC}
          playsInline
          muted
          preload="auto"
          onEnded={() => dismiss('ended')}
          onError={() => dismiss('error')}
          onTimeUpdate={handleTimeUpdate}
        />

        <div className="intro-vignette" aria-hidden />
        <div className="intro-grain" aria-hidden />
      </div>

      {/* Sound prompt (only shown if autoplay-with-sound was blocked) */}
      {needsSoundTap && (
        <button type="button" className="intro-sound-pill" onClick={handleEnableSound}>
          <span className="intro-sound-icon" aria-hidden>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M3 10v4h4l5 4V6L7 10H3z" fill="currentColor" />
              <path d="M16 8c1.5 1 2.5 2.5 2.5 4s-1 3-2.5 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
            </svg>
          </span>
          {t('intro.sound_on')}
        </button>
      )}

      {/* Hairline progress */}
      <div className="intro-progress" aria-hidden>
        <div className="intro-progress-fill" style={{ transform: `scaleX(${progress})` }} />
      </div>

      {/* Skip */}
      <button
        type="button"
        className="intro-skip"
        onClick={() => dismiss('skipped')}
        aria-label={t('intro.skip')}
      >
        <span>{t('intro.skip')}</span>
        <span className="intro-skip-kbd">esc</span>
      </button>
    </div>
  );
}
