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
  const beganRef = useRef(false);
  const [phase, setPhase] = useState<Phase>('gone');
  const [progress, setProgress] = useState(0);
  const [began, setBegan] = useState(false);
  // Read from video metadata once it loads — adapts to 9:16, 16:9, 1:1 alike.
  const [stageDims, setStageDims] = useState<{ w: number; h: number }>({ w: 9, h: 16 });

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.sessionStorage.getItem(sessionKey)) return;
    setPhase('curtain');
  }, []);

  // Force the right attributes for autoplay-policy compliance (React doesn't always
  // reflect `muted` / `playsinline` to actual HTML attributes).
  const setVideoRef = useCallback((el: HTMLVideoElement | null) => {
    videoRef.current = el;
    if (!el) return;
    el.muted = true;
    el.defaultMuted = true;
    el.setAttribute('muted', '');
    el.setAttribute('playsinline', '');
    el.setAttribute('webkit-playsinline', '');
  }, []);

  // Choreograph: curtain → reveal → playing.
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

  // The one true play function. Triggered by the first tap/click anywhere
  // (or Space key). Idempotent.
  //
  // iOS pattern: play() must be called synchronously inside the user gesture, with the
  // video element still muted. Once the play promise resolves, we unmute. Trying to
  // unmute *before* play() will make iOS reject the play call and you'll see a black
  // screen with no audio.
  const begin = useCallback(() => {
    if (beganRef.current) return;
    const v = videoRef.current;
    if (!v) return;
    beganRef.current = true;
    setBegan(true);

    // Snap into the playing phase so the stage CSS becomes visible immediately.
    setPhase((cur) => (cur === 'curtain' || cur === 'reveal' ? 'playing' : cur));

    // Keep muted at this point — that's the state iOS will accept for play().
    v.volume = 1;

    const p = v.play();
    if (p && typeof p.then === 'function') {
      p.then(() => {
        // Playback started — the gesture has unlocked the audio context. Unmute now.
        v.muted = false;
      }).catch(() => {
        // Even muted play was blocked (very rare — Low Power Mode, strict privacy).
        // Stay muted; user can tap again or the video plays silently.
      });
    } else {
      // Older browser without play-promise. Unmute optimistically.
      v.muted = false;
    }
  }, []);

  // Global tap/touch anywhere on the page → begin.
  useEffect(() => {
    if (phase === 'gone' || phase === 'dissolving') return;
    if (began) return;

    const onPointer = (e: Event) => {
      const target = e.target as HTMLElement | null;
      if (target && target.closest('.intro-skip')) return; // let skip do its thing
      begin();
    };

    window.addEventListener('pointerdown', onPointer);
    window.addEventListener('touchstart', onPointer);
    return () => {
      window.removeEventListener('pointerdown', onPointer);
      window.removeEventListener('touchstart', onPointer);
    };
  }, [phase, began, begin]);

  // Keyboard: Esc to skip, Space to begin / play-pause.
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
        if (!beganRef.current) {
          begin();
        } else if (v.paused) {
          v.play().catch(() => {});
        } else {
          v.pause();
        }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [phase, dismiss, begin]);

  // Lock body scroll while the overlay is up.
  useEffect(() => {
    if (phase === 'gone') return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [phase]);

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

  return (
    <div
      className={`intro-overlay intro-phase-${phase}`}
      aria-hidden={phase === 'dissolving'}
      role="dialog"
      aria-label="Foody intro"
    >
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
          preload="metadata"
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={() => dismiss('ended')}
          onError={() => dismiss('error')}
          onTimeUpdate={handleTimeUpdate}
        />

        <div className="intro-vignette" aria-hidden />
        <div className="intro-grain" aria-hidden />
      </div>

      {/* Tap-to-Begin — overlays the whole viewport. CSS animation-delay handles
          the timing so it materializes after the curtain wordmark. The whole page
          is tappable; this is just the visual cue. */}
      {!began && (
        <div className="intro-tap-play" aria-label={t('intro.tap_to_begin')}>
          <span className="intro-tap-play-icon" aria-hidden>
            <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span className="intro-tap-play-label">{t('intro.tap_to_begin')}</span>
        </div>
      )}

      {/* Hairline progress */}
      <div className="intro-progress" aria-hidden>
        <div className="intro-progress-fill" style={{ transform: `scaleX(${progress})` }} />
      </div>

      {/* Skip */}
      <button
        type="button"
        className="intro-skip"
        onClick={(e) => { e.stopPropagation(); dismiss('skipped'); }}
        aria-label={t('intro.skip')}
      >
        <span>{t('intro.skip')}</span>
        <span className="intro-skip-kbd">esc</span>
      </button>
    </div>
  );
}
