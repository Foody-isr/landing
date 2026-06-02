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
  const [needsTapToPlay, setNeedsTapToPlay] = useState(false);
  // Read from video metadata once it loads — adapts to 9:16, 16:9, 1:1 alike.
  const [stageDims, setStageDims] = useState<{ w: number; h: number }>({ w: 9, h: 16 });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.sessionStorage.getItem(sessionKey)) return;
    setPhase('curtain');
  }, []);

  // React doesn't reliably reflect `muted` / `autoplay` to HTML attributes, but
  // Chrome and Safari's autoplay policies check the attributes — set them directly.
  const setVideoRef = useCallback((el: HTMLVideoElement | null) => {
    videoRef.current = el;
    if (!el) return;
    el.muted = true;
    el.defaultMuted = true;
    el.setAttribute('muted', '');
    el.setAttribute('playsinline', '');
    el.setAttribute('webkit-playsinline', '');
    el.setAttribute('autoplay', '');
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

  // At the reveal moment: attempt muted autoplay. Show tap-to-play if it fails after 1.5s.
  useEffect(() => {
    if (phase !== 'playing') return;
    const v = videoRef.current;
    if (!v) return;

    v.muted = true;
    v.volume = 1;
    setNeedsSoundTap(true);

    const start = () => {
      try { v.currentTime = 0; } catch { /* noop */ }
      const p = v.play();
      if (p && typeof p.then === 'function') {
        p.catch(() => { /* fallback timer below handles this */ });
      }
    };

    if (v.readyState >= 2) start();
    else v.addEventListener('canplay', start, { once: true });

    // Safety net: if the video is still paused after 1.5s, surface tap-to-play.
    const stuckTimer = window.setTimeout(() => {
      if (v.paused || v.currentTime === 0) {
        setNeedsTapToPlay(true);
        setNeedsSoundTap(false);
      }
    }, 1500);

    return () => {
      window.clearTimeout(stuckTimer);
      v.removeEventListener('canplay', start);
    };
  }, [phase]);

  // First user interaction anywhere → unmute. Attach from page load so even clicks
  // during the curtain count (otherwise users who tapped early miss the audio).
  useEffect(() => {
    if (phase === 'gone' || phase === 'dissolving') return;

    const enable = () => {
      const v = videoRef.current;
      if (!v) return;
      v.muted = false;
      v.volume = 1;
      // If the video isn't playing yet (autoplay blocked or not yet at playing phase),
      // this gesture-driven play call will succeed.
      v.play().catch(() => {});
      setNeedsSoundTap(false);
      setNeedsTapToPlay(false);
    };

    // Pointer/touch only — keyboard handled separately so Space doesn't double-fire.
    const opts: AddEventListenerOptions = { once: true, capture: true };
    window.addEventListener('pointerdown', enable, opts);
    window.addEventListener('touchstart', enable, opts);
    return () => {
      window.removeEventListener('pointerdown', enable, opts);
      window.removeEventListener('touchstart', enable, opts);
    };
  }, [phase]);

  // Keyboard: Esc to skip, Space to play (with sound) / pause.
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
        if (v.paused) {
          // Pressing Space to start ⇒ also unmute (the keypress grants gesture).
          v.muted = false;
          v.volume = 1;
          v.play().catch(() => {});
          setNeedsSoundTap(false);
          setNeedsTapToPlay(false);
        } else {
          v.pause();
        }
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
    setNeedsTapToPlay(false);
    v.play().catch(() => {});
  };

  const handleTapToPlay = () => {
    const v = videoRef.current;
    if (!v) return;
    v.muted = false;
    v.volume = 1;
    setNeedsTapToPlay(false);
    setNeedsSoundTap(false);
    v.play().catch(() => {
      v.muted = true;
      v.play().catch(() => {});
    });
  };

  const handleTimeUpdate = () => {
    const v = videoRef.current;
    if (!v || !v.duration) return;
    setProgress(v.currentTime / v.duration);
  };

  const handleLoadedMetadata = () => {
    const v = videoRef.current;
    if (!v || !v.videoWidth || !v.videoHeight) return;
    setStageDims({ w: v.videoWidth, h: v.videoHeight });
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

      {/* Video stage — sized to the video's actual aspect ratio */}
      <div
        className="intro-stage"
        style={{ ['--aw' as string]: stageDims.w, ['--ah' as string]: stageDims.h }}
      >
        <span className="intro-bracket intro-bracket-tl" aria-hidden />
        <span className="intro-bracket intro-bracket-tr" aria-hidden />
        <span className="intro-bracket intro-bracket-bl" aria-hidden />
        <span className="intro-bracket intro-bracket-br" aria-hidden />

        <video
          ref={setVideoRef}
          className="intro-video"
          src={VIDEO_SRC}
          playsInline
          muted
          preload="auto"
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => dismiss('ended')}
          onError={() => dismiss('error')}
          onTimeUpdate={handleTimeUpdate}
        />

        <div className="intro-vignette" aria-hidden />
        <div className="intro-grain" aria-hidden />
      </div>

      {/* Sound prompt — sits at top-center while muted playback runs */}
      {needsSoundTap && !needsTapToPlay && (
        <button type="button" className="intro-sound-pill" onClick={handleEnableSound}>
          <span className="intro-sound-icon" aria-hidden>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
              <path d="M3 10v4h4l5 4V6L7 10H3z" fill="currentColor" />
              <path d="M16 8c1.5 1 2.5 2.5 2.5 4s-1 3-2.5 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" fill="none" />
            </svg>
          </span>
          {t('intro.sound_on')}
        </button>
      )}

      {/* Tap-to-play fallback (iOS + autoplay-blocked cases) */}
      {needsTapToPlay && (
        <button type="button" className="intro-tap-play" onClick={handleTapToPlay} aria-label={t('intro.tap_to_begin')}>
          <span className="intro-tap-play-icon" aria-hidden>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="intro-tap-play-label">{t('intro.tap_to_begin')}</span>
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
