import { writeFile } from "node:fs/promises";

const base = (process.env.DISCOVERY_BASE_URL || "https://foody-pos.co.il").replace(/\/$/, "");
const canonicalBase = (process.env.NEXT_PUBLIC_SITE_URL || "https://foody-pos.co.il").replace(/\/$/, "");
const paths = ["", "/sectors/food-beverage/restaurants", "/solutions/pos", "/solutions/kitchen", "/solutions/online-ordering", "/pricing", "/compare/tabit", "/guides/restaurant-pos-israel", "/guides/restaurant-inventory-israel", "/tools/food-cost-calculator", "/demos/kitchen", "/about"];
const priorities = ["/solutions/pos", "/solutions/kitchen", "/solutions/online-ordering", "/pricing", "/guides/restaurant-pos-israel", "/guides/restaurant-inventory-israel", "/tools/food-cost-calculator"];
const headers = { "User-Agent": "FoodyDiscoveryAudit/1.0" };
const report = { checkedAt: new Date().toISOString(), base, limitations: ["HTTP and HTML checks do not prove Google/Bing indexing or requests from real crawler IPs.", "No Search Console, Bing performance or LLM ranking data is inferred from this report."], pages: [], infrastructure: {} };
for (const lang of ["he", "fr", "en"]) for (const path of paths) {
  const url = `${base}/${lang}${path}`;
  const response = await fetch(url, { headers, signal: AbortSignal.timeout(20000) });
  const html = await response.text();
  const head = html.slice(0, html.indexOf("</head>"));
  const canonical = /<link rel="canonical" href="([^"]+)"/.exec(head)?.[1];
  const robots = /<meta name="robots" content="([^"]+)"/.exec(head)?.[1];
  const alternates = [...head.matchAll(/<link rel="alternate" hrefLang="([^"]+)" href="([^"]+)"/g)].map(([,language,href]) => ({ language, href }));
  const robotHeader = response.headers.get("x-robots-tag");
  const main = html.match(/<main\b[\s\S]*?<\/main>/)?.[0] || "";
  const mainLinks = [...new Set([...main.matchAll(/<a\b[^>]*\bhref="([^"]+)"/g)].flatMap(([, href]) => {
    const target = new URL(href.replaceAll("&amp;", "&"), url);
    return [new URL(base).origin, new URL(canonicalBase).origin].includes(target.origin) ? [target.pathname] : [];
  }))];
  report.pages.push({ url, path: `/${lang}${path}`, status: response.status, title: /<title>([^<]*)<\/title>/.exec(head)?.[1], canonical, robots, robotHeader, alternates, mainLinks, serverRenderedMain: /<h1\b/.test(main), declaredLang: /<html lang="([^"]+)"/.exec(html)?.[1], declaredDirection: /<html[^>]* dir="([^"]+)"/.exec(html)?.[1], indexableByObservedDirectives: response.ok && !/noindex/i.test(`${robots || ""} ${robotHeader || ""}`) });
}
report.internalDiscovery = ["he", "fr", "en"].flatMap(lang => priorities.map(path => {
  const target = `/${lang}${path}`;
  return { path: target, incomingFromMain: report.pages.filter(page => page.path !== target && page.mainLinks.includes(target) && page.path.startsWith(`/${lang}`)).map(page => page.path) };
}));
for (const path of ["/robots.txt", "/sitemap.xml"]) {
  const response = await fetch(`${base}${path}`, { headers, signal: AbortSignal.timeout(20000) });
  const body = await response.text();
  report.infrastructure[path] = { status: response.status, ...(path === "/robots.txt" ? { content: body } : { urls: (body.match(/<loc>/g) || []).length, missingAuditedPages: report.pages.filter(page => !body.includes(`<loc>${canonicalBase}${page.path}</loc>`)).map(page => page.path) }) };
}
const outputIndex = process.argv.indexOf("--output");
if (outputIndex >= 0) await writeFile(process.argv[outputIndex + 1], `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify({ checkedAt: report.checkedAt, pages: report.pages.length, http200: report.pages.filter(page => page.status === 200).length, indexableByObservedDirectives: report.pages.filter(page => page.indexableByObservedDirectives).length, priorityPagesWithTwoContextualSources: report.internalDiscovery.filter(page => page.incomingFromMain.length >= 2).length, infrastructure: report.infrastructure, indexingConfirmed: false }, null, 2));
if (report.pages.some(page => page.status !== 200 || page.canonical !== `${canonicalBase}${page.path}` || !page.indexableByObservedDirectives || !page.serverRenderedMain || page.alternates.length < 3) || report.internalDiscovery.some(page => page.incomingFromMain.length < 2) || report.infrastructure["/sitemap.xml"].missingAuditedPages.length || Object.values(report.infrastructure).some(item => item.status !== 200)) process.exitCode = 1;
