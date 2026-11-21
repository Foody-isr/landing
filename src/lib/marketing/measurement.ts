export const META_PIXEL_ID = "1059276727609296";
const STORAGE_KEY = "foody-acquisition-v1";
/** Allowed acquisition sources; arbitrary referrer and campaign strings never become event parameters. */
export const ACQUISITION_SOURCES = ["direct", "google", "bing", "chatgpt", "perplexity", "gemini", "facebook", "instagram", "other"] as const;
/** Allowed acquisition channels for confirmed-demo measurement. */
export const ACQUISITION_CHANNELS = ["direct", "organic_search", "paid_search", "ai_referral", "social", "paid_social", "referral"] as const;
type Source = (typeof ACQUISITION_SOURCES)[number];
type Channel = (typeof ACQUISITION_CHANNELS)[number];
type Language = "he" | "fr" | "en";
type Acquisition = { source: Source; channel: Channel; landingLanguage: Language };
type MeasurementWindow = Window & {
  fbq?: (...args: unknown[]) => void;
  dataLayer?: Record<string, unknown>[];
};
let acquisition: Acquisition | undefined;

/** Classifies an entry visit using finite labels; never returns URLs or parameter values. */
export function classifyAcquisition(href: string, referrer: string): Acquisition {
  const url = new URL(href);
  const landingLanguage = /^\/(fr|en)(?:\/|$)/.exec(url.pathname)?.[1] as "fr" | "en" | undefined;
  let host = "";
  try { host = new URL(referrer).hostname.toLowerCase(); } catch { /* Missing/invalid referrers are direct visits. */ }
  const matches = (domain: string) => host === domain || host.endsWith(`.${domain}`);
  const utm = url.searchParams.get("utm_source")?.toLowerCase();
  const medium = url.searchParams.get("utm_medium")?.toLowerCase();
  const taggedSources: Record<string, Source | undefined> = { google: "google", bing: "bing", chatgpt: "chatgpt", "chatgpt.com": "chatgpt", perplexity: "perplexity", "perplexity.ai": "perplexity", gemini: "gemini", "gemini.google.com": "gemini", facebook: "facebook", fb: "facebook", instagram: "instagram", ig: "instagram" };
  const taggedSource = utm && Object.hasOwn(taggedSources, utm) ? taggedSources[utm] : undefined;
  let source: Source = "direct";
  if (taggedSource) source = taggedSource;
  else if (host === "gemini.google.com") source = "gemini";
  else if (/(^|\.)google\.(?:com|co\.il|fr|co\.uk)$/.test(host) || url.searchParams.has("gclid")) source = "google";
  else if (matches("bing.com") || url.searchParams.has("msclkid")) source = "bing";
  else if (matches("chatgpt.com") || matches("chat.openai.com")) source = "chatgpt";
  else if (matches("perplexity.ai")) source = "perplexity";
  else if (matches("facebook.com")) source = "facebook";
  else if (matches("instagram.com")) source = "instagram";
  else if (host && host !== url.hostname && !matches("foody-pos.co.il")) source = "other";
  let channel: Channel = "direct";
  if (source === "google" || source === "bing") channel = ["cpc", "ppc", "paid_search", "paidsearch"].includes(medium || "") || url.searchParams.has("gclid") || url.searchParams.has("msclkid") ? "paid_search" : "organic_search";
  else if (["chatgpt", "perplexity", "gemini"].includes(source)) channel = "ai_referral";
  else if (source === "facebook" || source === "instagram") channel = ["cpc", "paid", "paid_social", "paidsocial"].includes(medium || "") ? "paid_social" : "social";
  else if (source === "other") channel = "referral";
  return { source, channel, landingLanguage: landingLanguage || "he" };
}

/** Keeps the initial acquisition categories for this browser tab, without visitor or form identifiers. */
export function captureAcquisition(): Acquisition {
  if (acquisition) return acquisition;
  const current = classifyAcquisition(window.location.href, document.referrer);
  try {
    const stored = JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || "null");
    if (stored && ACQUISITION_SOURCES.includes(stored.source) && ACQUISITION_CHANNELS.includes(stored.channel) && ["he", "fr", "en"].includes(stored.landingLanguage)) {
      acquisition = { source: stored.source, channel: stored.channel, landingLanguage: stored.landingLanguage };
      return acquisition;
    }
  } catch { /* Analytics remains optional when session storage is unavailable. */ }
  acquisition = current;
  try { window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(current)); } catch { /* Memory-only attribution for this page. */ }
  return current;
}

/** Emits a conversion only after the contact API confirms receipt; accepts no form data. */
export function recordDemoSubmission(language: Language): void {
  if (process.env.NODE_ENV !== "production") return;
  const visit = captureAcquisition();
  const params = { language, acquisition_source: visit.source, acquisition_channel: visit.channel, landing_language: visit.landingLanguage };
  const target = window as MeasurementWindow;
  // A blocked analytics library must never turn an accepted lead into a form error.
  try { (target.dataLayer ||= []).push({ event: "foody_demo_submitted", ...params }); } catch { /* Optional measurement channel. */ }
  try { target.fbq?.("trackSingle", META_PIXEL_ID, "Lead", params); } catch { /* The API's confirmed receipt remains authoritative. */ }
  try { if (typeof target.dispatchEvent === "function") target.dispatchEvent(new CustomEvent("foody:demo-submitted", { detail: params })); } catch { /* Optional consent-gated Google measurement cannot invalidate receipt. */ }
}
