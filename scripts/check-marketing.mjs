import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const social = JSON.parse(await readFile(
  new URL("../src/lib/marketing/social.json", import.meta.url), "utf8",
));
const mapsOffer = JSON.parse(await readFile(new URL('../src/lib/marketing/maps-offers.json', import.meta.url), 'utf8'));

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
  "/compare/tabit",
  "/guides/restaurant-pos-israel",
  "/guides/restaurant-inventory-israel",
  "/tools/food-cost-calculator",
  "/demos/kitchen",
  "/about",
];
let checked = 0;

function checkMetaPixel(response, html, url) {
  const csp = response.headers.get("content-security-policy") || "";
  const directives = Object.fromEntries(csp.split(";").map((directive) => {
    const [name, ...sources] = directive.trim().split(/\s+/);
    return [name, sources];
  }));
  assert.ok(
    directives["script-src"]?.includes("https://connect.facebook.net"),
    `Meta script allowed by CSP: ${url}`,
  );
  for (const origin of ["https://connect.facebook.net", "https://www.facebook.com"]) {
    assert.ok(
      directives["connect-src"]?.includes(origin),
      `Meta connection allowed by CSP: ${origin} on ${url}`,
    );
  }
  assert.match(
    html,
    /<noscript><img[^>]+src="https:\/\/www\.facebook\.com\/tr\?id=1059276727609296&amp;ev=PageView&amp;noscript=1"[^>]*\/><\/noscript>/,
    `Meta no-JavaScript fallback: ${url}`,
  );
}

for (const lang of ["he", "fr", "en"]) {
  const navigationTitles = {};
  for (const path of paths) {
    const url = `${base}/${lang}${path}`;
    const response = await fetch(url);
    assert.equal(response.status, 200, url);
    const html = await response.text();
    checkMetaPixel(response, html, url);
    const csp = response.headers.get("content-security-policy") || "";
    for (const origin of ["https://www.googletagmanager.com", "https://www.google-analytics.com", "https://region1.google-analytics.com"]) assert.ok(csp.includes(origin), `Consent-gated Google endpoint allowed by CSP: ${url}`);
    assert.doesNotMatch(html, /<script[^>]+src="https:\/\/www\.googletagmanager\.com/, `No Google library loaded before browser opt-in: ${url}`);
    assert.ok(html.includes('class="footer-preferences"'), `Google preferences can be reopened from the footer: ${url}`);
    const main = html.match(/<main\b[\s\S]*?<\/main>/)?.[0] || "";
    if (path === "/guides/restaurant-inventory-israel") {
      const article = [...main.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1])).find(schema => schema["@type"] === "Article");
      assert.equal(article?.inLanguage, lang, `Inventory guide language: ${url}`);
      assert.equal(article?.mainEntityOfPage, `${canonicalBase}/${lang}${path}`, `Inventory guide canonical entity: ${url}`);
      assert.ok(main.includes('data-inventory-guide'), `Guide is rendered without JavaScript: ${url}`);
      for (const target of ["/help/kitchen/stock-management", "/help/kitchen/preparations", "/help/kitchen/daily-operations", "/help/kitchen/suppliers-and-purchases", "/help/kitchen/food-cost", "/tools/food-cost-calculator", "/demos/kitchen", "/solutions/kitchen"]) assert.ok(main.includes(`href="/${lang}${target}"`), `Inventory guide source/resource link: ${target}`);
    }
    if (["/sectors/food-beverage/restaurants", "/solutions/kitchen", "/compare/tabit", "/tools/food-cost-calculator"].includes(path)) assert.ok(main.includes(`href="/${lang}/guides/restaurant-inventory-israel"`), `Contextual discovery link outside navigation/footer: ${url}`);
    if (path === "/guides/restaurant-pos-israel") {
      const article = [...main.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1])).find(schema => schema["@type"] === "Article");
      assert.equal(article?.inLanguage, lang, `Guide Article language: ${url}`);
      assert.equal(article?.mainEntityOfPage, `${canonicalBase}/${lang}${path}`, `Guide canonical entity: ${url}`);
      assert.ok(main.includes(new Intl.NumberFormat(`${lang}-IL`).format(989)), `Three-device monthly subscription: ${url}`);
      assert.ok(main.includes(new Intl.NumberFormat(`${lang}-IL`).format(13358)), `First-year subscription and setup arithmetic: ${url}`);
      for (const target of ["/pricing", "/solutions/kitchen", "/solutions/online-ordering", "/compare/tabit"]) assert.ok(main.includes(`href="/${lang}${target}"`), `Guide product/source link: ${target}`);
    }
    if (path === "/tools/food-cost-calculator") {
      assert.ok(main.includes('data-food-cost-calculator'), `Calculator is server rendered: ${url}`);
      assert.ok(main.includes('data-calculator-percent'), `Default cost result is visible without hydration: ${url}`);
      assert.ok(main.includes('28%') || main.includes('28<!-- -->%'), `Worked example food-cost percentage: ${url}`);
      assert.ok(main.includes('href="/' + lang + '/help/kitchen/food-cost"'), `Calculator links to its procedure: ${url}`);
    }
    if (path === "/demos/kitchen") {
      assert.deepEqual([...main.matchAll(/data-product-walkthrough="([^"]+)"/g)].map(match => match[1]), ["sale-to-stock", "supplier-receipt", "companion-day"], `Three documented screen walkthroughs: ${url}`);
      assert.ok(main.includes('/help/kitchen/suppliers-and-purchases'), `Supplier workflow links to its procedure: ${url}`);
    }
    if (path === "/about" || path === "/contact") {
      assert.ok(main.includes('href="tel:+972537081799"'), `Owner-approved professional phone: ${url}`);
      assert.ok(main.includes('08:00') && main.includes('20:00') && main.includes('15:00'), `Owner-approved contact hours: ${url}`);
      assert.ok(!main.includes('Schwartz'), `Private verification address is not published: ${url}`);
    }
    const workflow = { "/sectors/food-beverage/restaurants": "restaurants", "/solutions/kitchen": "kitchen", "/solutions/online-ordering": "ordering", "/solutions/pos": "pos" }[path];
    if (workflow) {
      assert.ok(main.includes(`data-acquisition-workflow="${workflow}"`), `Server-rendered buying workflow: ${url}`);
      assert.ok(main.includes(`href="/${lang}/guides/restaurant-pos-israel"`), `Product links to localized buying guide: ${url}`);
    }
    if (path === "/solutions/pos") {
      const schemas = [...main.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
      const software = schemas.find(schema => schema["@type"] === "SoftwareApplication");
      assert.equal(software?.url, `${canonicalBase}/${lang}/solutions/pos`, `POS software describes its own page: ${url}`);
      assert.equal(software?.offers.price, 590, `POS price is distinct from Restaurant: ${url}`);
      assert.equal(software?.offers.url, `${canonicalBase}/${lang}/pricing#plan-pos`, `POS offer links to its own plan: ${url}`);
      assert.equal(software?.offers.priceCurrency, "ILS");
      assert.equal(software?.offers.priceSpecification.valueAddedTaxIncluded, false);
      assert.equal(software?.offers.priceSpecification.unitText, "month");
      assert.ok(main.includes("590") && main.includes("99") && main.includes("890"), `Visible licence prices and offer distinctions: ${url}`);
      assert.equal(schemas.find(schema => schema["@type"] === "FAQPage")?.mainEntity.length, 5, `POS FAQ has complete localized answers: ${url}`);
      for (const target of ["/help/orders/taking-an-order-pos", "/help/orders/courses-and-kitchen-release", "/help/payments/pos-checkout", "/sectors/food-beverage/restaurants"]) assert.ok(main.includes(`href="/${lang}${target}"`), `POS source or offering link: ${target}`);
      const heading = main.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] || "";
      assert.ok(heading.includes("iPad") && heading.includes("Android"), `POS heading identifies the supported platforms: ${url}`);
    }
    if (path === "/solutions/kitchen" || path === "/compare/tabit") {
      assert.ok(main.includes('id="product-captures"'), `Real product evidence included: ${url}`);
      const capture = lang === "he" ? "food-cost-he-dark.png" : "food-cost-fr.png";
      assert.ok(main.includes(`href="/assets/product/${capture}"`), `Full-size inspected capture: ${url}`);
    }
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
    const ogImage = /<meta property="og:image" content="([^"]+)"/.exec(html)?.[1];
    const twitterImage = /<meta name="twitter:image" content="([^"]+)"/.exec(html)?.[1];
    const imageAlt = /<meta property="og:image:alt" content="([^"]+)"/.exec(html)?.[1];
    assert.equal(ogImage, twitterImage, `Same resource image for Open Graph and Twitter: ${url}`);
    if (path === "") {
      assert.equal(ogImage, `${canonicalBase}${social[lang].image}`, `Approved home sharing image: ${url}`);
      assert.equal(imageAlt, social[lang].alt, `Home sharing description: ${url}`);
    } else {
      assert.ok(ogImage?.startsWith(`${canonicalBase}/assets/sharing/${lang}/`), `Image matches the resource language: ${url}`);
      assert.notEqual(imageAlt,social[lang].alt, `Resource-specific image description: ${url}`);
      const imageResponse = await fetch(`${base}${new URL(ogImage).pathname}`);
      assert.equal(imageResponse.status,200, `Resource sharing image can be fetched without JavaScript: ${url}`);
      assert.ok(imageResponse.headers.get('content-type')?.startsWith('image/png'));
    }
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
      assert.ok(html.includes('data-maps-offer-status="planned"'), `Maps extension remains explicitly planned: ${url}`);
      assert.equal(mapsOffer.automatic_billing, false);
      const mapsPlus = html.match(/data-pricing-maps="plus"([\s\S]*?)<\/dd>\s*<\/div>/)?.[1];
      assert.ok(mapsPlus, `Maps Plus pricing is present: ${url}`);
      assert.ok(mapsPlus.includes(String(mapsOffer.monthly_price)), `Maps price matches the offer contract: ${url}`);
      assert.ok(mapsPlus.includes(`href="/${lang}/contact"`), `Maps activation uses contact only: ${url}`);
      assert.ok(!mapsPlus.includes('<form'), `No maps checkout is published: ${url}`);
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
        8,
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
    if (path === "/sectors/food-beverage/restaurants") {
      const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
      const software = schemas.find((schema) => schema["@type"] === "SoftwareApplication");
      assert.ok(software, `Restaurant product is described as software: ${url}`);
      assert.equal(software.offers.price, 890, `Approved Restaurant price: ${url}`);
      assert.equal(software.offers.priceCurrency, "ILS");
      assert.equal(software.offers.priceSpecification.valueAddedTaxIncluded, false);
      assert.equal(software.offers.priceSpecification.unitText, "month");
      assert.ok(software.offers.description.includes("890"));
      assert.ok(main.includes("890"), `Structured price is also visible: ${url}`);
      assert.ok(main.includes(`href="/${lang}/compare/tabit"`));
      assert.ok(main.includes(`href="/${lang}/help/orders/taking-an-order-pos"`));
      assert.ok(main.includes(`href="/${lang}/solutions/pos"`), `Restaurant content links directly to the POS product: ${url}`);
    }
    if (path === "/compare/tabit") {
      const demonstrations = main.match(/<section[^>]*data-comparison-examples[^>]*>([\s\S]*?)<\/section>/)?.[1];
      assert.ok(demonstrations, `Three concrete examples are server-rendered: ${url}`);
      assert.deepEqual([...demonstrations.matchAll(/<details[^>]*id="([^"]+)"/g)].map(match => match[1]), ["example-languages", "example-stock", "example-companion"]);
      assert.ok(demonstrations.includes({fr: "ne sont pas des captures", en: "not application screenshots", he: "אינם צילומי מסך"}[lang]), `Illustrations are clearly distinguished from application screenshots: ${url}`);
      const remainingStock = demonstrations.match(/<dd\b[^>]*\bdata-example-remaining(?:="[^"]*")?[^>]*>([\s\S]*?)<\/dd>/)?.[1];
      assert.equal(remainingStock, "10 kg", `Stock example has a readable starting state: ${url}`);
      const reasons = main.match(/<section[^>]*data-foody-reasons[^>]*>([\s\S]*?)<\/section>/)?.[1];
      assert.ok(reasons, `Concrete Foody buying reasons are visible: ${url}`);
      assert.equal((reasons.match(/<h3>/g) || []).length, 3, `Three substantiated Foody benefits: ${url}`);
      const moduleScope = main.match(/<p[^>]*data-kitchen-scope[^>]*>([\s\S]*?)<\/p>/)?.[1];
      for (const amount of ["890", "590", "1490"]) assert.ok(moduleScope?.includes(amount), `Kitchen and Restaurant module prices remain distinct: ${amount}/${url}`);
      assert.ok(reasons.includes(`href="/${lang}/solutions/pos"`));
      assert.ok(reasons.includes(`href="/${lang}/help/kitchen/preparations"`));
      assert.ok(reasons.includes(`href="/${lang}/help/kitchen/daily-operations"`));
      const example = main.match(/<section[^>]*data-commission-example[^>]*>([\s\S]*?)<\/section>/)?.[1];
      assert.ok(example?.includes("900"), `Three-percent illustration has the correct arithmetic: ${url}`);
      assert.ok(example.includes({fr: "sans attribution à Tabit", en: "not attributed to Tabit", he: "ללא ייחוס ל־Tabit"}[lang]), `Illustrative commission is never represented as a verified competitor tariff: ${url}`);
      assert.ok(main.includes('<time dateTime="2026-11-01">'), `Explicit source review date: ${url}`);
      const expectedCapabilities = ["admin-languages", "pos-languages", "ingredient-depletion", "recipe-cost", "sales-forecast", "before-service", "during-service", "day-close", "supplier-discrepancies"];
      assert.deepEqual([...main.matchAll(/data-capability="([^"]+)"/g)].map(match => match[1]), expectedCapabilities, `Every reviewed functional comparison is rendered: ${url}`);
      assert.equal((main.match(/scope="row"/g) || []).length, 9, `Only the owner's stated native differences are compared: ${url}`);
      const table = main.match(/<table\b[\s\S]*?<\/table>/)?.[0];
      assert.equal((table.match(/class="comparison-present"/g) || []).length, 9, `Foody uses explicit Present statuses: ${url}`);
      assert.equal((table.match(/data-competitor-status="documented"/g) || []).length, 1, `Tabit forecasts are documented: ${url}`);
      assert.equal((table.match(/data-competitor-status="unconfirmed"/g) || []).length, 8, `Unverified absences remain unconfirmed: ${url}`);
      assert.ok(!table.includes('comparison-absent'), `No unverified absence is presented as fact: ${url}`);
      assert.ok(main.includes('https://tabit.cloud/il/'), `Israeli competitor scope is sourced: ${url}`);
      assert.ok(table.includes('>Tabit*</th>'), `Native scope note is attached once to the column heading: ${url}`);
      assert.ok(table.includes("Tabit-Bizz-overview"), `Documented competitor forecasts link to their actual source: ${url}`);
      assert.ok(table.includes('aria-describedby="comparison-assessment"'), `Status claims link to their assessment scope: ${url}`);
      const assessment = main.match(/<p[^>]*id="comparison-assessment"[^>]*>([\s\S]*?)<\/p>/)?.[1];
      assert.ok(assessment?.includes({fr: "sans confirmation indépendante", en: "without independent confirmation", he: "ללא אימות עצמאי"}[lang]), `Owner-reported absences are not represented as independently verified: ${url}`);
      const proofAnchors = [...table.matchAll(/<a\b([^>]*)>/g)].map(match => match[1]).filter(attributes => /class="[^"]*\bcomparison-source\b[^"]*"/.test(attributes) && /href="\//.test(attributes));
      assert.equal(proofAnchors.length, 9, `Each Foody capability has a public proof link: ${url}`);
      assert.ok(proofAnchors.every(attributes => attributes.includes('aria-label="')), `Compact proof links retain feature-specific accessible names: ${url}`);
      const proofLinks = new Set(proofAnchors.map(attributes => attributes.match(/href="([^"]+)"/)?.[1]).filter(href => href?.startsWith('/')));
      for (const href of proofLinks) assert.equal((await fetch(base + href)).status, 200, `Functional evidence resolves: ${href}`);
      assert.ok(main.includes('href="https://support-us.tabit.cloud/hc/en-us/articles/12570827573266-Overview-of-Tabit-s-Integrations"'), `Third-party integration scope is sourced: ${url}`);
      assert.ok(main.includes('role="region"'), `Scrollable comparison is keyboard accessible: ${url}`);
      assert.ok(main.includes(`href="/${lang}/pricing"`));
      for (const guide of ["orders/taking-an-order-pos", "tables-floors/floor-plans"]) {
        assert.equal((await fetch(`${base}/${lang}/help/${guide}`)).status, 200, `Published product evidence: ${lang}/${guide}`);
      }
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
  checkMetaPixel(response, html, base + path);
  if (path === "/he/privacy") {
    assert.ok(html.includes("Meta (Facebook) Pixel"), "Privacy policy discloses Meta tracking");
    assert.ok(!html.includes("We do not use third-party advertising trackers"));
  }
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
for (const file of ["food-cost-fr.png", "food-cost-he-dark.png", "kitchen-fr.png", "kitchen-he-dark.png"]) {
  const response = await fetch(`${base}/assets/product/${file}`);
  assert.equal(response.status, 200, `Product capture available: ${file}`);
  const bytes = Buffer.from(await response.arrayBuffer());
  assert.deepEqual(bytes.subarray(0, 8), Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), `Product capture PNG: ${file}`);
}
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
// Preview consumers must receive complete sharing metadata in HTML, without executing JavaScript.
for (const userAgent of ["WhatsApp", "facebookexternalhit/1.1", "Twitterbot/1.0"]) {
  for (const pathname of ["/fr/demos/kitchen", "/he/tools/food-cost-calculator", "/en/solutions/online-ordering"]) {
    const response = await fetch(base+pathname,{headers:{"User-Agent":userAgent}});
    assert.equal(response.status,200, `Preview consumer can fetch page: ${userAgent} ${pathname}`);
    const html=await response.text(),head=html.slice(0,html.indexOf("</head>"));
    for (const field of ["og:title","og:description","og:url","og:image"]) assert.ok(head.includes(`property="${field}"`), `Sharing metadata in head: ${userAgent} ${pathname} ${field}`);
    assert.ok(head.includes('/assets/sharing/'), `Resource image served to preview consumer: ${userAgent} ${pathname}`);
  }
}
console.log(
  `Marketing checks passed: ${checked} localized pages, canonicals, hreflang, RTL, headings, security headers, sitemap, redirects, 404 and social card.`,
);
