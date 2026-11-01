import type { Lang } from "../seo";

export type ShareCardKind = "pos" | "kitchen" | "ordering" | "calculator" | "demo" | "pricing" | "comparison" | "help" | "equipment" | "payments" | "company" | "restaurant" | "retail" | "chains" | "contact" | "document";
export type ShareCard = { lang: Lang; path: string; title: string; subtitle: string; kind: ShareCardKind; image: string; alt: string };
const STYLE_VERSION = "v2";
type Copy = Record<Lang, [string, string]>;
const copy: Record<string, Copy> = {
  "/demos/kitchen": { fr: ["Foody Cuisine\nen pratique.", "Stocks, fournisseurs et service."], he: ["Foody Kitchen\nהלכה למעשה", "מלאי, ספקים ועבודה בשירות"], en: ["Foody Kitchen\nin practice.", "Stock, suppliers and service."] },
  "/tools/food-cost-calculator": { fr: ["Calculez votre\nfood cost.", "Le coût matière de chaque portion."], he: ["מחשבון פוד קוסט\nלמסעדה שלכם", "עלות חומרי הגלם לכל מנה"], en: ["Calculate your\nfood cost.", "Ingredient cost for every portion."] },
  "/solutions/kitchen": { fr: ["Votre cuisine,\nbien organisée.", "Recettes, stocks et préparations."], he: ["המטבח שלכם,\nמסודר ומחובר", "מתכונים, מלאי והכנות"], en: ["Your kitchen,\nworking together.", "Recipes, stock and preparations."] },
  "/solutions/pos": { fr: ["La caisse de\nvotre restaurant.", "Tables, commandes et encaissement."], he: ["הקופה של\nהמסעדה שלכם", "שולחנות, הזמנות ותשלומים"], en: ["The POS for\nyour restaurant.", "Tables, orders and payments."] },
  "/solutions/online-ordering": { fr: ["Vos commandes,\nsur votre site.", "Retrait, livraison et précommandes."], he: ["ההזמנות שלכם,\nבאתר שלכם", "איסוף, משלוחים והזמנות מראש"], en: ["Your orders,\non your website.", "Pickup, delivery and preorders."] },
  "/pricing": { fr: ["Les offres Foody.", "Licences, inclusions et frais."], he: ["המסלולים של Foody", "רישיונות, מה כלול ועלויות נפרדות"], en: ["Foody plans.", "Licences, inclusions and charges."] },
  "/compare/tabit": { fr: ["Foody ou Tabit ?", "Comparez les fonctions et les offres."], he: ["Foody או Tabit?", "השוו יכולות ומסלולים"], en: ["Foody or Tabit?", "Compare features and plans."] },
  "/sectors/food-beverage/restaurants": { fr: ["Votre caisse\nrestaurant.", "iPad, Android, commandes et tables."], he: ["קופה למסעדה\nבאייפד ובאנדרואיד", "הזמנות, שולחנות ותשלומים"], en: ["Your\nrestaurant POS.", "iPad, Android, orders and tables."] },
  "/solutions/kitchen-companion": { fr: ["Votre journée\navec le Compagnon.", "Avant, pendant et après le service."], he: ["יום העבודה\nעם Foody Companion", "לפני השירות, במהלכו ובסגירה"], en: ["Your day with\nFoody Companion.", "Before, during and after service."] },
  "/about": { fr: ["Foody POS,\ndu logiciel au terrain.", "Notre plateforme et nos coordonnées."], he: ["Foody POS,\nמהתוכנה לשטח", "הפלטפורמה שלנו ופרטי הקשר"], en: ["Foody POS,\nfrom software to your restaurant.", "Our platform and contact details."] },
};

function kindFor(path: string): ShareCardKind {
  if (path.startsWith("/help")) return "help";
  if (path.startsWith("/tools/")) return "calculator";
  if (path.startsWith("/demos/")) return "demo";
  if (path.startsWith("/compare/")) return "comparison";
  if (path.startsWith("/guides/")) return "document";
  if (path === "/pricing") return "pricing";
  if (path === "/contact") return "contact";
  if (path === "/about") return "company";
  if (path.includes("kitchen")) return "kitchen";
  if (path.includes("online-ordering")) return "ordering";
  if (path.includes("equipment")) return "equipment";
  if (path.includes("payments") || path.includes("verifone")) return "payments";
  if (path.includes("/pos")) return "pos";
  if (path.includes("chains")) return "chains";
  if (path.includes("retail")) return "retail";
  if (path.includes("food-beverage")) return "restaurant";
  return "document";
}

/** Builds a deterministic resource-specific image address; the public cache key is not a security hash. */
export function getShareCard(lang: Lang, path: string, pageTitle: string): ShareCard {
  const title = copy[path]?.[lang][0] || pageTitle.replace(/\s*\|\s*Foody\s*$/i, "").trim();
  const subtitle = copy[path]?.[lang][1] || "";
  const kind = kindFor(path);
  const content = JSON.stringify([STYLE_VERSION, lang, path, title, subtitle, kind]);
  let hash = 2166136261;
  for (let index = 0; index < content.length; index++) hash = Math.imul(hash ^ content.charCodeAt(index), 16777619);
  const key = (hash >>> 0).toString(16).padStart(8, "0");
  const slug = path.split("/").filter(Boolean).map(segment => encodeURIComponent(segment)).join("--");
  return { lang, path, title, subtitle, kind, image: `/assets/sharing/${lang}/${slug}-${STYLE_VERSION}-${key}.png`, alt: `Foody. ${title.replace(/\s+/g, " ")}${subtitle ? ` ${subtitle}` : ""}` };
}
