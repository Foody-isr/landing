"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import Script from "next/script";
import Link from "next/link";
import type { Lang } from "@/lib/seo";
import { GA4_MEASUREMENT_ID } from "@/lib/marketing/analytics-config";
import { captureAcquisition } from "@/lib/marketing/measurement";
import { ANALYTICS_CONSENT_KEY, canMeasureGoogle, isGoogleMeasurementId, sanitizedGooglePage, sanitizeGoogleLead, sendGoogleCommand, type AnalyticsConsent } from "@/lib/marketing/google-analytics";

type AnalyticsWindow = Window & { dataLayer?: unknown[]; gtag?: (...args: unknown[]) => void; foodyGoogleConsent?: AnalyticsConsent; foodyGaInitialized?: boolean; [key: `ga-disable-${string}`]: boolean | undefined };
const deniedAdvertising = { ad_storage:"denied", ad_user_data:"denied", ad_personalization:"denied" };
const copy = {
  fr: { title:"Statistiques Google Analytics",text:"Autorisez les statistiques de visite et de demandes de démo pour nous aider à améliorer Foody. Ce choix concerne Google Analytics ; la politique décrit aussi la mesure Meta.",allow:"Autoriser",decline:"Refuser",privacy:"Lire la politique de confidentialité",close:"Fermer" },
  en: { title:"Google Analytics statistics",text:"Allow visit and demo-request statistics to help us improve Foody. This choice applies to Google Analytics; the policy also describes Meta measurement.",allow:"Allow",decline:"Decline",privacy:"Read the privacy policy",close:"Close" },
  he: { title:"סטטיסטיקות Google Analytics",text:"אפשרו מדידה של ביקורים ובקשות להדגמה כדי לעזור לנו לשפר את Foody. הבחירה חלה על Google Analytics; המדיניות מתארת גם את מדידת Meta.",allow:"אישור",decline:"סירוב",privacy:"למדיניות הפרטיות",close:"סגירה" },
};

/** Optional Google measurement with explicit opt-in, sanitized pages and confirmed-demo events only. */
export default function GoogleAnalytics({ lang }: { lang: Lang }) {
  const pathname=usePathname(), [consent,setConsent]=useState<AnalyticsConsent>("unknown"),[visible,setVisible]=useState(false),[libraryReady,setLibraryReady]=useState(false);
  const lastPage=useRef<string|null>(null),t=copy[lang],configured=isGoogleMeasurementId(GA4_MEASUREMENT_ID);
  const choose = (choice: "granted"|"denied") => {
    const target=window as unknown as AnalyticsWindow;
    target.foodyGoogleConsent=choice;
    target[`ga-disable-${GA4_MEASUREMENT_ID}`]=choice!=="granted";
    if(choice==="denied") {
      sendGoogleCommand(target.gtag,"consent","update",{...deniedAdvertising,analytics_storage:"denied"});
      for(const name of ["_ga",`_ga_${GA4_MEASUREMENT_ID.slice(2)}`]) for(const domain of ["", "; domain=foody-pos.co.il", "; domain=.foody-pos.co.il"]) document.cookie=`${name}=; Max-Age=0; path=/${domain}; SameSite=Lax`;
    }
    try { window.localStorage.setItem(ANALYTICS_CONSENT_KEY,choice); } catch { /* A blocked preference store leaves the explicit choice in this page's memory. */ }
    setConsent(choice);setVisible(false);lastPage.current=null;
  };

  useEffect(()=>{
    if(!configured)return;
    let stored: AnalyticsConsent="unknown";
    try { const saved=window.localStorage.getItem(ANALYTICS_CONSENT_KEY);if(saved==="granted"||saved==="denied")stored=saved; } catch { /* No measurement until a visitor explicitly opts in. */ }
    (window as unknown as AnalyticsWindow).foodyGoogleConsent=stored;setConsent(stored);setVisible(stored==="unknown");
    const open=()=>setVisible(true);window.addEventListener("foody:analytics-preferences",open);return()=>window.removeEventListener("foody:analytics-preferences",open);
  },[configured]);

  useEffect(()=>{
    if(!canMeasureGoogle(process.env.NODE_ENV,window.location.hostname,GA4_MEASUREMENT_ID,consent))return;
    const target=window as unknown as AnalyticsWindow;
    target.dataLayer ||= [];
    target.gtag ||= function () { target.dataLayer!.push(arguments); };
    target[`ga-disable-${GA4_MEASUREMENT_ID}`]=false;
    if(!target.foodyGaInitialized) {
      sendGoogleCommand(target.gtag,"consent","default",{...deniedAdvertising,analytics_storage:"denied"});
      sendGoogleCommand(target.gtag,"consent","update",{...deniedAdvertising,analytics_storage:"granted"});
      sendGoogleCommand(target.gtag,"js",new Date());
      sendGoogleCommand(target.gtag,"config",GA4_MEASUREMENT_ID,{send_page_view:false,allow_google_signals:false,allow_ad_personalization_signals:false,cookie_expires:7776000,...sanitizedGooglePage(window.location.href,captureAcquisition().source)});
      target.foodyGaInitialized=true;
    } else sendGoogleCommand(target.gtag,"consent","update",{...deniedAdvertising,analytics_storage:"granted"});
    const lead=(event:Event)=>{
      const params=sanitizeGoogleLead((event as CustomEvent<unknown>).detail);
      if(params&&target.foodyGoogleConsent==="granted"&&!target[`ga-disable-${GA4_MEASUREMENT_ID}`]) sendGoogleCommand(target.gtag,"event","generate_lead",{...params,send_to:GA4_MEASUREMENT_ID,...sanitizedGooglePage(window.location.href,captureAcquisition().source)});
    };
    window.addEventListener("foody:demo-submitted",lead);return()=>window.removeEventListener("foody:demo-submitted",lead);
  },[consent]);

  useEffect(()=>{
    if(!libraryReady||!pathname||lastPage.current===pathname||!canMeasureGoogle(process.env.NODE_ENV,window.location.hostname,GA4_MEASUREMENT_ID,consent))return;
    const target=window as unknown as AnalyticsWindow,visit=captureAcquisition();
    if(target.foodyGoogleConsent!=="granted"||target[`ga-disable-${GA4_MEASUREMENT_ID}`])return;
    sendGoogleCommand(target.gtag,"event","page_view",{send_to:GA4_MEASUREMENT_ID,...sanitizedGooglePage(window.location.href,visit.source),language:lang,acquisition_source:visit.source,acquisition_channel:visit.channel,landing_language:visit.landingLanguage});
    lastPage.current=pathname;
  },[consent,lang,libraryReady,pathname]);

  if(!configured)return null;
  const loadTag=consent==="granted"&&process.env.NODE_ENV==="production"&&typeof window!=="undefined"&&["foody-pos.co.il","www.foody-pos.co.il"].includes(window.location.hostname);
  return <>{loadTag&&<Script id="foody-google-analytics" src={`https://www.googletagmanager.com/gtag/js?id=${GA4_MEASUREMENT_ID}`} strategy="afterInteractive" onReady={()=>setLibraryReady(true)} />}{visible&&<section className="analytics-choice" aria-labelledby="analytics-choice-title"><div><h2 id="analytics-choice-title">{t.title}</h2><p>{t.text} <Link href={`/${lang}/privacy`}>{t.privacy}</Link></p></div><div className="analytics-choice-actions"><button type="button" onClick={()=>choose("granted")}>{t.allow}</button><button type="button" onClick={()=>choose("denied")}>{t.decline}</button>{consent!=="unknown"&&<button type="button" onClick={()=>setVisible(false)}>{t.close}</button>}</div></section>}</>;
}
