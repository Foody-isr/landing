import assert from "node:assert/strict";

// Read-only smoke checks against a running Next server; never submit leads or payments.
const base = process.env.MARKETING_BASE_URL || "http://localhost:3001";
const canonicalBase = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://foody-pos.co.il"
).replace(/\/$/, "");
const paths = [
  "",
  "/pricing",
  "/contact",
  "/sectors/food-beverage",
  "/sectors/food-beverage/restaurants",
  "/sectors/chains",
  "/sectors/retail",
  "/solutions/pos",
  "/solutions/kitchen",
  "/solutions/online-ordering",
  "/solutions/payments",
  "/solutions/verifone",
  "/solutions/equipment",
  "/solutions/kitchen-companion",
];
let checked = 0;
for (const lang of ["he", "fr", "en"]) {
  for (const path of paths) {
    const url = `${base}/${lang}${path}`;
    const response = await fetch(url);
    assert.equal(response.status, 200, url);
    const html = await response.text();
    assert.ok(
      html.includes(
        `<html lang="${lang}" dir="${lang === "he" ? "rtl" : "ltr"}"`,
      ),
      `Server-rendered document language: ${url}`,
    );
    assert.equal(
      (html.match(/<h1(?:\s|>)/g) || []).length,
      1,
      `Exactly one primary heading: ${url}`,
    );
    assert.ok(html.includes('id="main-content"'), `Skip link target: ${url}`);
    assert.ok(
      html.includes(`rel="canonical" href="${canonicalBase}/${lang}${path}"`),
      `Self canonical: ${url}`,
    );
    for (const alternate of ["he", "fr", "en"])
      assert.ok(
        html.includes(
          `hrefLang="${alternate}-IL" href="${canonicalBase}/${alternate}${path}"`,
        ),
        `Localized alternate: ${url}`,
      );
    assert.ok(
      !html.includes('name="robots" content="noindex'),
      `Indexable acquisition page: ${url}`,
    );
    assert.ok(
      html.includes("og:image") &&
        html.includes("/assets/marketing/social-card.png"),
      `Social card: ${url}`,
    );
    assert.ok(
      response.headers
        .get("content-security-policy")
        ?.includes("object-src 'none'"),
      `Security headers: ${url}`,
    );
    if (
      path.startsWith("/solutions/") ||
      [
        "/sectors/chains",
        "/sectors/retail",
        "/sectors/food-beverage/restaurants",
      ].includes(path)
    ) {
      assert.ok(
        !html.includes('role="tablist"'),
        `No repeated homepage explorer on product pages: ${url}`,
      );
    }
    if (path === "/solutions/kitchen-companion") {
      assert.ok(
        html.includes("iPadOS 18") && html.includes("Siri"),
        `Siri compatibility is disclosed: ${url}`,
      );
      assert.ok(
        html.includes('data-experience="companion"'),
        `Kitchen day illustration: ${url}`,
      );
    }
    if (path === "/solutions/equipment") {
      assert.ok(
        html.includes("epson-tm-u220ii.webp") &&
          html.includes("star-mc-print3.webp"),
        `Both printer families shown: ${url}`,
      );
      assert.ok(
        html.includes("Server Direct Print"),
        `Printer compatibility is disclosed: ${url}`,
      );
    }
    checked++;
  }
}
for (const path of [
  "/he/help",
  "/fr/help/kitchen/food-cost",
  "/en/help/kitchen/daily-operations",
  "/he/privacy",
  "/en/terms",
]) {
  const response = await fetch(base + path);
  assert.equal(response.status, 200, path);
  const html = await response.text();
  assert.ok(
    html.includes(`rel="canonical" href="${canonicalBase}${path}"`),
    `Supporting page canonical: ${path}`,
  );
  assert.ok(
    html.includes('id="main-content"'),
    `Supporting page skip target: ${path}`,
  );
  checked++;
}
const root = await fetch(base, { redirect: "manual" });
assert.equal(root.status, 302);
assert.equal(new URL(root.headers.get("location"), base).pathname, "/he");
const sitemap = await (await fetch(base + "/sitemap.xml")).text();
for (const path of paths)
  assert.ok(
    sitemap.includes(`${canonicalBase}/he${path}</loc>`),
    `Sitemap entry: ${path}`,
  );
assert.ok(sitemap.includes("/he/help/kitchen/food-cost"));
const robots = await (await fetch(base + "/robots.txt")).text();
assert.ok(robots.includes(`${canonicalBase}/sitemap.xml`));
assert.equal((await fetch(base + "/he/solutions/not-a-product")).status, 404);
assert.equal(
  (await fetch(base + "/he/sectors/beauty", { redirect: "manual" })).status,
  308,
);
const image = await fetch(base + "/assets/marketing/social-card.png");
assert.equal(image.status, 200);
assert.ok(image.headers.get("content-type")?.includes("image/png"));
console.log(
  `Marketing checks passed: ${checked} localized pages, canonicals, hreflang, RTL, headings, security headers, sitemap, redirects, 404 and social card.`,
);
