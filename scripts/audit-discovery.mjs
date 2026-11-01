import { writeFile } from "node:fs/promises";

const base = (process.env.DISCOVERY_BASE_URL || "https://foody-pos.co.il").replace(/\/$/, "");
const paths = ["", "/sectors/food-beverage/restaurants", "/solutions/kitchen", "/solutions/online-ordering", "/pricing", "/compare/tabit"];
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
  report.pages.push({ url, status: response.status, title: /<title>([^<]*)<\/title>/.exec(head)?.[1], canonical, robots, robotHeader, alternates, serverRenderedMain: /<main\b[\s\S]*?<h1\b/.test(html), declaredLang: /<html lang="([^"]+)"/.exec(html)?.[1], declaredDirection: /<html[^>]* dir="([^"]+)"/.exec(html)?.[1], indexableByObservedDirectives: response.ok && !/noindex/i.test(`${robots || ""} ${robotHeader || ""}`) });
}
for (const path of ["/robots.txt", "/sitemap.xml"]) {
  const response = await fetch(`${base}${path}`, { headers, signal: AbortSignal.timeout(20000) });
  const body = await response.text();
  report.infrastructure[path] = { status: response.status, ...(path === "/robots.txt" ? { content: body } : { urls: (body.match(/<loc>/g) || []).length, hebrewRestaurant: body.includes("/he/sectors/food-beverage/restaurants</loc>"), hebrewComparison: body.includes("/he/compare/tabit</loc>") }) };
}
const outputIndex = process.argv.indexOf("--output");
if (outputIndex >= 0) await writeFile(process.argv[outputIndex + 1], `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify({ checkedAt: report.checkedAt, pages: report.pages.length, http200: report.pages.filter(page => page.status === 200).length, indexableByObservedDirectives: report.pages.filter(page => page.indexableByObservedDirectives).length, infrastructure: report.infrastructure, indexingConfirmed: false }, null, 2));
if (report.pages.some(page => page.status !== 200 || !page.canonical || !page.indexableByObservedDirectives || !page.serverRenderedMain || page.alternates.length < 3) || Object.values(report.infrastructure).some(item => item.status !== 200)) process.exitCode = 1;
