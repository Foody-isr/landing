import { ACQUISITION_CHANNELS, ACQUISITION_SOURCES } from "./measurement";

export type AnalyticsConsent = "granted" | "denied" | "unknown";
export const ANALYTICS_CONSENT_KEY = "foody-google-analytics-consent-v1";
const commercialPaths = new Set(["", "/pricing", "/contact", "/about", "/privacy", "/terms", "/sectors/food-beverage", "/sectors/food-beverage/restaurants", "/sectors/chains", "/sectors/retail", "/solutions/pos", "/solutions/kitchen", "/solutions/kitchen-companion", "/solutions/online-ordering", "/solutions/payments", "/solutions/verifone", "/solutions/equipment", "/compare/tabit", "/guides/restaurant-pos-israel", "/tools/food-cost-calculator", "/demos/kitchen", "/help"]);
const sourceOrigins: Record<string,string> = { google:"https://www.google.com/", bing:"https://www.bing.com/", chatgpt:"https://chatgpt.com/", perplexity:"https://www.perplexity.ai/", gemini:"https://gemini.google.com/", facebook:"https://www.facebook.com/", instagram:"https://www.instagram.com/" };

/** Accepts only a public Google Analytics measurement identifier, never an arbitrary script URL. */
export function isGoogleMeasurementId(value: string): boolean { return /^G-[A-Z0-9]{6,20}$/.test(value); }

/** Google measurement runs only after opt-in on the canonical production host. */
export function canMeasureGoogle(environment: string | undefined, hostname: string, id: string, consent: AnalyticsConsent): boolean {
  return environment === "production" && ["foody-pos.co.il", "www.foody-pos.co.il"].includes(hostname) && isGoogleMeasurementId(id) && consent === "granted";
}

/** Removes query strings, fragments and arbitrary paths; public help is measured as one section. */
export function sanitizedGooglePage(href: string, source: string): { page_location: string; page_referrer: string } {
  const url = new URL(href), match = /^\/(he|fr|en)(\/.*)?$/.exec(url.pathname);
  const lang = match?.[1] || "he", path = (match?.[2] || "").replace(/\/$/, "");
  const safePath = commercialPaths.has(path) ? path : path.startsWith("/help/") ? "/help" : "/not-found";
  return { page_location: `https://foody-pos.co.il/${lang}${safePath}`, page_referrer: Object.hasOwn(sourceOrigins,source) ? sourceOrigins[source] : "" };
}

/** Returns only finite, non-personal acquisition labels from a confirmed-demo browser event. */
export function sanitizeGoogleLead(value: unknown): Record<string,string> | null {
  if (!value || typeof value !== "object") return null;
  const v = value as Record<string,unknown>, languages = ["he","fr","en"];
  if (typeof v.language !== "string" || !languages.includes(v.language) || typeof v.landing_language !== "string" || !languages.includes(v.landing_language) || !ACQUISITION_SOURCES.some(source => source === v.acquisition_source) || !ACQUISITION_CHANNELS.some(channel => channel === v.acquisition_channel)) return null;
  return { language:v.language, landing_language:v.landing_language, acquisition_source:v.acquisition_source as string, acquisition_channel:v.acquisition_channel as string };
}

/** An unavailable or blocked optional analytics function must not break the page or a confirmed form receipt. */
export function sendGoogleCommand(gtag: unknown, ...args: unknown[]): boolean {
  if (typeof gtag !== "function") return false;
  try { gtag(...args); return true; } catch { return false; }
}
