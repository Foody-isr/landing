import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const social = JSON.parse(await readFile(
  new URL("../src/lib/marketing/social.json", import.meta.url), "utf8",
));

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
  const navigationTitles = {};
  for (const path of paths) {
    const url = `${base}/${lang}${path}`;
    const response = await fetch(url);
    assert.equal(response.status, 200, url);
    const html = await response.text();
    const main = html.match(/<main\b[\s\S]*?<\/main>/)?.[0] || "";
    const mentions = [
      ...main.matchAll(
        /<a\b[^>]*class="product-mention"[^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/g,
      ),
    ];
    for (const [, href, label] of mentions) {
      assert.ok(
        href.startsWith(`/${lang}/`),
        `Product mention retains language: ${url}`,
      );
      assert.notEqual(
        href,
        `/${lang}${path}`,
        `No contextual link to the current page: ${url}`,
      );
      assert.ok(!label.includes("<a"), `No nested product links: ${url}`);
    }
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
    for (const [attribute, name] of [["property", "og:image"], ["name", "twitter:image"]]) {
      assert.ok(
        html.includes(`${attribute}="${name}" content="${canonicalBase}${social[lang].image}"`),
        `Localized ${name}: ${url}`,
      );
    }
    assert.ok(
      html.includes(`property="og:image:alt" content="${social[lang].alt}"`),
      `Localized sharing-image description: ${url}`,
    );
    if (path === "") {
      for (const [attribute, prefix] of [["property", "og"], ["name", "twitter"]]) {
        for (const field of ["title", "description"]) {
          assert.ok(
            html.includes(`${attribute}="${prefix}:${field}" content="${social[lang][field]}"`),
            `Concise localized sharing ${field}: ${url}`,
          );
        }
      }
      assert.notEqual(
        html.match(/<title>([^<]+)<\/title>/)?.[1], social[lang].title,
        `Search and sharing titles have distinct purposes: ${url}`,
      );
    }
    assert.ok(
      response.headers
        .get("content-security-policy")
        ?.includes("object-src 'none'"),
      `Security headers: ${url}`,
    );
    if (path === "") {
      for (const landmark of ["header", "footer"]) {
        const markup = html.match(
          new RegExp(`<${landmark}\\b[\\s\\S]*?</${landmark}>`),
        )?.[0];
        assert.ok(markup, `${landmark} rendered: ${url}`);
        assert.deepEqual(
          [...markup.matchAll(/data-product="([^"]+)"/g)].map(
            (match) => match[1],
          ),
          ["pos", "ordering", "restaurant", "kitchen", "complete"],
          `Five product families in ${landmark}: ${url}`,
        );
        for (const [plan, route, detail] of [
          ["pos", "/solutions/pos", null],
          ["ordering", "/solutions/online-ordering", null],
          [
            "restaurant",
            "/sectors/food-beverage/restaurants",
            null,
          ],
          ["kitchen", "/solutions/kitchen", "/solutions/kitchen-companion"],
          ["complete", "/pricing#plan-complete", null],
        ]) {
          const item = markup.match(
            new RegExp(`data-product="${plan}"[\\s\\S]*?</li>`),
          )?.[0];
          assert.ok(
            item?.includes(`href="/${lang}${route}"`),
            `Product destination: ${landmark}/${plan}/${lang}`,
          );
          if (detail) {
            assert.ok(
              item.includes(`href="/${lang}${detail}"`),
              `Included feature nested under ${plan}: ${url}`,
            );
          }
          const title = item.match(/<a\b[^>]*>([\s\S]*?)<\/a>/)?.[1];
          if (landmark === "header") navigationTitles[plan] = title;
          else
            assert.equal(
              title,
              navigationTitles[plan],
              `Footer product label matches menu: ${plan}/${lang}`,
            );
        }
      }
    }
    if (path === "/pricing") {
      const licenceNote = html.match(
        /<p\b[^>]*data-pricing-licences[^>]*>([\s\S]*?)<\/p>/,
      )?.[1];
      assert.ok(
        licenceNote?.includes({
          he: "כמה עובדים יכולים להתחלף באותה עמדה",
          fr: "Plusieurs salariés peuvent se relayer sur le même poste",
          en: "Several staff members can take turns on the same device",
        }[lang]),
        `Pricing distinguishes device licences from staff accounts: ${url}`,
      );
      const visibleText = (markup) =>
        markup.replace(/<[^>]*>/g, "").replace(/[\s,\u00a0\u202f]/g, "");
      for (const [plan, amount] of Object.entries({
        pos: 590,
        restaurant: 890,
        complete: 1490,
        kitchen: 890,
      })) {
        const card = html.match(
          new RegExp(`data-pricing-plan="${plan}"[\\s\\S]*?</article>`),
        )?.[0];
        assert.ok(card, `Public ${plan} offer: ${url}`);
        assert.ok(
          html.includes(`id="plan-${plan}"`),
          `Pricing anchor exists: ${plan}/${lang}`,
        );
        assert.ok(
          card.includes(navigationTitles[plan]),
          `Offer name matches product navigation: ${plan}/${lang}`,
        );
        assert.ok(
          visibleText(card).includes(`${amount}₪`),
          `Approved ${plan} monthly price: ${url}`,
        );
        assert.equal(
          card.includes(lang === "fr" ? "Foody Compagnon" : "Foody Companion"),
          plan === "complete" || plan === "kitchen",
          `Companion belongs to the kitchen offers: ${url} (${plan})`,
        );
        if (plan === "restaurant") {
          assert.ok(
            card.includes(navigationTitles.ordering),
            `Restaurant explicitly includes the ordering product: ${url}`,
          );
          for (const route of ["/solutions/pos", "/solutions/online-ordering"]) {
            const features = card.match(/<ul\b[\s\S]*?<\/ul>/)?.[0];
            assert.ok(
              features?.includes(`href="/${lang}${route}"`),
              `Included product is linked in Restaurant: ${route}/${lang}`,
            );
          }
        }
        if (plan === "complete") {
          const productLinks = card.match(
            /class="plan-product-links"[\s\S]*?<\/div>/,
          )?.[0];
          for (const route of [
            "/sectors/food-beverage/restaurants",
            "/solutions/kitchen",
          ]) {
            assert.ok(
              productLinks?.includes(`href="/${lang}${route}"`),
              `Combined offer links to each product: ${route}/${lang}`,
            );
          }
        } else {
          const route = {
            pos: "/solutions/pos",
            restaurant: "/sectors/food-beverage/restaurants",
            kitchen: "/solutions/kitchen",
          }[plan];
          const title = card.match(/<h2\b[\s\S]*?<\/h2>/)?.[0];
          assert.ok(
            title?.includes(`href="/${lang}${route}"`),
            `Pricing title links to its product page: ${plan}/${lang}`,
          );
        }
      }
      const orderingCard = html.match(
        /data-pricing-plan="ordering"[\s\S]*?<\/article>/,
      )?.[0];
      assert.ok(
        orderingCard?.includes(navigationTitles.ordering) &&
          visibleText(orderingCard).includes("590₪") &&
          !orderingCard.includes('class="specialist-quote"'),
        `Standalone ordering offer displays its public monthly rate: ${url}`,
      );
      assert.ok(
        orderingCard.includes({
          he: "לפני מע״מ, לכל סניף",
          fr: "HT par établissement",
          en: "Excl. VAT per location",
        }[lang]) &&
          orderingCard.includes({ he: "/ חודש", fr: "/ mois", en: "/ month" }[lang]),
        `Ordering price specifies monthly billing, VAT and location basis: ${url}`,
      );
      assert.ok(
        orderingCard.includes(`href="/${lang}/solutions/online-ordering"`) &&
          html.includes('id="plan-ordering"') &&
          html.includes('href="#plan-ordering"'),
        `Ordering offer is reachable from pricing and links to its shared product page: ${url}`,
      );
      assert.ok(
        orderingCard.match(/<h2\b[\s\S]*?<\/h2>/)?.[0]
          .includes(`href="/${lang}/solutions/online-ordering"`),
        `Orders pricing title links to its product: ${url}`,
      );
      for (const [cost, amount] of Object.entries({
        extraPos: 99,
        setup: 1490,
        training: 1200,
      })) {
        const row = html.match(
          new RegExp(`data-pricing-cost="${cost}"[\\s\\S]*?</div>`),
        )?.[0];
        assert.ok(row, `Separate ${cost} charge: ${url}`);
        assert.ok(
          visibleText(row).includes(`${amount}₪`),
          `Correct ${cost} price: ${url}`,
        );
      }
      assert.ok(
        html.includes(
          {
            he: "לפני מע״מ",
            fr: "HT par établissement",
            en: "Excl. VAT per location",
          }[lang],
        ),
        `VAT and location basis: ${url}`,
      );
      assert.ok(
        html.includes({ he: "30 יום", fr: "30 jours", en: "30 days" }[lang]),
        `Cancellation notice: ${url}`,
      );
      assert.ok(
        html.includes(
          {
            he: "עמלות תשלום בכרטיס",
            fr: "Les frais de paiement carte restent applicables",
            en: "Card processing fees still apply",
          }[lang],
        ),
        `Zero commission does not hide processing fees: ${url}`,
      );
      const faq = [
        ...html.matchAll(
          /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g,
        ),
      ]
        .map((match) => JSON.parse(match[1]))
        .find((data) => data["@type"] === "FAQPage");
      assert.equal(
        faq?.mainEntity.length,
        7,
        `Localized pricing FAQ schema: ${url}`,
      );
      assert.ok(
        faq.mainEntity.every(({ acceptedAnswer }) => !acceptedAnswer.text.includes("<a")),
        `FAQ metadata remains plain text: ${url}`,
      );
      const answers = main.match(
        /class="shell section-space faq-section"[\s\S]*?<\/section>/,
      )?.[0];
      assert.ok(
        answers?.includes(`class="product-mention" href="/${lang}/solutions/online-ordering"`),
        `FAQ answer links to the ordering product: ${url}`,
      );
      const orderingQuestion = {
        he: "מסלול Foody קופה כולל הזמנות אונליין?",
        fr: "Foody Caisse inclut-il les commandes en ligne ?",
        en: "Does Foody POS include online orders?",
      }[lang];
      const orderingAnswer = faq.mainEntity.find(
        (item) => item.name === orderingQuestion,
      )?.acceptedAnswer.text;
      assert.ok(
        orderingAnswer?.startsWith(
          { he: "לא.", fr: "Non.", en: "No." }[lang],
        ) && orderingAnswer.includes("890") && orderingAnswer.includes("590") &&
          orderingAnswer.includes(navigationTitles.ordering),
        `Ordering is standalone or included in Restaurant, outside POS-only: ${url}`,
      );
      if (lang === "fr") {
        const main = html.match(/<main[\s\S]*?<\/main>/)?.[0];
        assert.ok(
          main?.includes("Foody Cuisine") && !main.includes("Foody Kitchen"),
          `French kitchen branding is consistent: ${url}`,
        );
      }
    }
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
    const pagePlan = {
      "/solutions/pos": "pos",
      "/sectors/food-beverage/restaurants": "restaurant",
      "/solutions/kitchen": "kitchen",
      "/solutions/online-ordering": "ordering",
    }[path];
    if (pagePlan) {
      assert.ok(
        html.includes(`href="/${lang}/pricing#plan-${pagePlan}"`),
        `Product links to its matching offer: ${url}`,
      );
      const sectionTitle = html.match(
        /class="solution-intro[^\"]*"[^>]*>\s*<h2>([\s\S]*?)<\/h2>/,
      )?.[1];
      const searchTitle = html.match(/<title>([\s\S]*?)<\/title>/)?.[1];
      assert.ok(
        sectionTitle && searchTitle && !searchTitle.includes(sectionTitle),
        `Product section uses editorial copy instead of its search title: ${url}`,
      );
    }
    if (path === "/solutions/kitchen-companion") {
      assert.ok(
        main.replace(/<[^>]*>/g, "").includes(
          {
            he: "כלול ללא תוספת תשלום ב־Foody Kitchen",
            fr: "Inclus sans supplément dans Foody Cuisine",
            en: "Included at no extra charge in Foody Kitchen",
          }[lang],
        ),
        `Dedicated companion page explains its included status: ${url}`,
      );
      assert.ok(
        html.includes("iPadOS 18") && html.includes("Siri"),
        `Siri compatibility is disclosed: ${url}`,
      );
      assert.ok(
        html.includes('data-experience="companion"'),
        `Kitchen day illustration: ${url}`,
      );
    }
    if (path === "/solutions/online-ordering") {
      assert.ok(
        html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1].includes(navigationTitles.ordering),
        `Shared ordering page is named after its product: ${url}`,
      );
      const inclusion = html.match(
        /<p\b[^>]*data-ordering-included[^>]*>([\s\S]*?)<\/p>/,
      )?.[1];
      assert.ok(
        inclusion?.includes(`href="/${lang}/sectors/food-beverage/restaurants"`),
        `Shared ordering page links back to the Restaurant offer: ${url}`,
      );
      assert.ok(
        inclusion.includes(`href="/${lang}/pricing#plan-complete">${navigationTitles.complete}</a>`),
        `Combined offer name links as a whole to the correct plan: ${url}`,
      );
      const printingOption = html.match(
        /<aside\b[^>]*data-ordering-printing[^>]*>([\s\S]*?)<\/aside>/,
      )?.[1];
      assert.ok(
        printingOption?.includes({
          he: "תוספת בתשלום",
          fr: "Option payante",
          en: "Paid add-on",
        }[lang]),
        `Online kitchen printing is explicitly a paid add-on: ${url}`,
      );
      assert.ok(
        printingOption.includes(`href="/${lang}/contact"`),
        `Kitchen printing has a setup enquiry: ${url}`,
      );
    }
    const contextualRoutes = {
      "": ["/solutions/kitchen", "/pricing#plan-complete"],
      "/sectors/food-beverage/restaurants": [
        "/solutions/online-ordering",
        "/solutions/kitchen",
        "/solutions/kitchen-companion",
      ],
      "/solutions/kitchen": ["/solutions/kitchen-companion"],
      "/solutions/kitchen-companion": ["/solutions/kitchen", "/pricing#plan-complete"],
    }[path];
    for (const route of contextualRoutes || []) {
      assert.ok(
        mentions.some(([, href]) => href === `/${lang}${route}`),
        `Contextual inclusion links to its product or plan: ${route} from ${url}`,
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
for (const [lang, content] of Object.entries(social)) {
  const image = await fetch(base + content.image);
  assert.equal(image.status, 200, `Sharing image exists: ${lang}`);
  assert.ok(image.headers.get("content-type")?.includes("image/png"));
  const bytes = Buffer.from(await image.arrayBuffer());
  assert.deepEqual(bytes.subarray(0, 8), Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
  assert.equal(bytes.readUInt32BE(16), 1200, `Sharing image width: ${lang}`);
  assert.equal(bytes.readUInt32BE(20), 630, `Sharing image height: ${lang}`);
}
console.log(
  `Marketing checks passed: ${checked} localized pages, canonicals, hreflang, RTL, headings, security headers, sitemap, redirects, 404 and social card.`,
);
