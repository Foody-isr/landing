'use client';
import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import en from './en.json';
import fr from './fr.json';

type Lang = 'en' | 'fr';
type Translations = typeof en;

const STORAGE_KEY = 'foody-language';
const translations: Record<Lang, Translations> = { en, fr };

function getBrowserLang(): Lang {
  if (typeof navigator === 'undefined') return 'en';
  const l = (navigator.language || '').toLowerCase();
  return l.startsWith('fr') ? 'fr' : 'en';
}

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
  setLang: (l: Lang) => void;
}

const Ctx = createContext<I18nCtx>({ lang: 'en', t: (k) => k, setLang: () => {} });

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
    setLangState(stored && (stored === 'en' || stored === 'fr') ? stored : getBrowserLang());
  }, []);

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
    localStorage.setItem(STORAGE_KEY, l);
    document.documentElement.lang = l;
  }, []);

  const t = useCallback((key: string) => getKey(translations[lang] as unknown as Record<string, unknown>, key), [lang]);

  return <Ctx.Provider value={{ lang, t, setLang }}>{children}</Ctx.Provider>;
}

export const useI18n = () => useContext(Ctx);
