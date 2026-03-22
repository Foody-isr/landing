'use client';
import React, { createContext, useContext, useCallback, useMemo, useEffect } from 'react';
import en from './en.json';
import fr from './fr.json';
import he from './he.json';

export type Lang = 'en' | 'fr' | 'he';
type Translations = typeof en;

const translations: Record<Lang, Translations> = { en, fr, he };

function getKey(obj: Record<string, unknown>, key: string): string {
  const parts = key.split('.');
  let cur: unknown = obj;
  for (const p of parts) {
    if (cur && typeof cur === 'object') cur = (cur as Record<string, unknown>)[p];
    else return key;
  }
  return typeof cur === 'string' ? cur : key;
}

interface I18nCtx {
  lang: Lang;
  t: (key: string) => string;
  /** Prefix a path with the current locale, e.g. localePath('/pricing') → '/fr/pricing' */
  localePath: (path: string) => string;
}

const Ctx = createContext<I18nCtx>({
  lang: 'en',
  t: (k) => k,
  localePath: (p) => p,
});

export function I18nProvider({ lang, children }: { lang: Lang; children: React.ReactNode }) {
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'he' ? 'rtl' : 'ltr';
  }, [lang]);

  const t = useCallback(
    (key: string) => getKey(translations[lang] as unknown as Record<string, unknown>, key),
    [lang],
  );

  const localePath = useCallback(
    (path: string) => `/${lang}${path.startsWith('/') ? path : `/${path}`}`,
    [lang],
  );

  const value = useMemo(() => ({ lang, t, localePath }), [lang, t, localePath]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export const useI18n = () => useContext(Ctx);
