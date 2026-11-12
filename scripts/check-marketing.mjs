import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { readCorpus } from "../src/lib/help/corpus.mjs";
import { marketingHelpReferences } from "./marketing-help-links.mjs";

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
  "/tools/supplier-variance-calculator",
  "/demos/kitchen",
  "/about",
];
let checked = 0;
const publishedHelp = readCorpus();
const helpReferences = new Map();

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
    if (path === "") {
      const title = html.match(/<title>([^<]+)<\/title>/)?.[1] || "";
      const heading = main.match(/<h1[^>]*>([\s\S]*?)<\/h1>/)?.[1] || "";
      assert.ok(title.startsWith("Foody POS |"), `Official brand leads the homepage search title: ${url}`);
      assert.ok(heading.startsWith("Foody POS"), `Official brand is visible in the primary heading: ${url}`);
      const schemas = [...main.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
      const organization = schemas.find(schema => schema["@type"] === "Organization");
      const website = schemas.find(schema => schema["@type"] === "WebSite");
      assert.equal(organization?.name, "Foody POS", `Organization and site use the same brand: ${url}`);
      assert.equal(website?.name, organization.name);
      assert.equal(organization?.telephone, "+972537081799");
    }
    if (["", "/guides/restaurant-pos-israel", "/guides/restaurant-inventory-israel"].includes(path)) {
      const restaurantLinks = [...main.matchAll(new RegExp(`<a\\b[^>]*href="/${lang}/sectors/food-beverage/restaurants"[^>]*>([\\s\\S]*?)</a>`, "g"))];
      const category = { he: "קופות למסעדות", fr: "Caisses pour restaurants", en: "POS for restaurants" }[lang];
      assert.ok(restaurantLinks.some(match => match[1].includes(category)), `Contextual restaurant-category link in homepage or guide: ${url}`);
    }
    if (path === "" || path === "/sectors/food-beverage/restaurants") {
      const heading = main.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1] || "";
      assert.ok(heading.includes({ he: "בישראל", fr: "Israël", en: "Israel" }[lang]), `Israeli service scope is visible in the primary heading: ${url}`);
    }
    if (path === "") {
      const heroLink = main.match(/<a\b[^>]*data-home-restaurant-link[^>]*>[\s\S]*?<\/a>/)?.[0] || "";
      assert.ok(heroLink.includes(`href="/${lang}/sectors/food-beverage/restaurants"`), `Homepage hero points directly to its localized restaurant offering: ${url}`);
    }
    for (const reference of marketingHelpReferences(main, url, publishedHelp, canonicalBase)) {
      if (!helpReferences.has(reference.pathname)) helpReferences.set(reference.pathname, { ...reference, fragments: new Set() });
      if (reference.fragment) helpReferences.get(reference.pathname).fragments.add(reference.fragment);
    }
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
      assert.ok(main.includes(new Intl.NumberFormat(`${lang}-IL`).format(739)), `Monthly subscription for two employees: ${url}`);
      assert.ok(main.includes(new Intl.NumberFormat(`${lang}-IL`).format(10158)), `First-year subscription and setup arithmetic: ${url}`);
      for (const target of ["/pricing", "/solutions/kitchen", "/solutions/online-ordering", "/compare/tabit"]) assert.ok(main.includes(`href="/${lang}${target}"`), `Guide product/source link: ${target}`);
    }
    if (path === "/tools/food-cost-calculator") {
      assert.ok(main.includes('data-food-cost-calculator'), `Calculator is server rendered: ${url}`);
      assert.ok(main.includes('data-calculator-percent'), `Default cost result is visible without hydration: ${url}`);
      assert.ok(main.includes('28%') || main.includes('28<!-- -->%'), `Worked example food-cost percentage: ${url}`);
      assert.ok(main.includes('href="/' + lang + '/help/kitchen/food-cost"'), `Calculator links to its procedure: ${url}`);
    }
    if (path === "/tools/supplier-variance-calculator") {
      assert.ok(main.includes('data-supplier-variance-calculator'), `Supplier calculator is server rendered: ${url}`);
      assert.ok(main.includes('data-supplier-total-minor="30000"'), `Default supplier result is available without JavaScript: ${url}`);
      assert.deepEqual([...main.matchAll(/data-example-total-minor="([^"]+)"/g)].map(match => Number(match[1])), [30000, 4000, 8000], `Three independently reconciled document examples: ${url}`);
      assert.deepEqual([...main.matchAll(/data-supplier-document="([^"]+)"/g)].map(match => match[1]), ["reference", "delivery", "invoice"], `Reference, delivery and invoice documents are present: ${url}`);
      assert.ok(main.includes('id="negotiated-prices"'), `Negotiated price and validity context is server rendered: ${url}`);
      const evidence = main.match(/<section id="invoice-price-evidence">([\s\S]*?)<\/section>/)?.[1] || "";
      assert.ok(evidence.includes('href="https://supy.io/the-spread"') && /22[.,]7/.test(evidence), `Invoice-level statistic has a visible primary source: ${url}`);
      assert.ok(!main.includes('data-food-cost-calculator'), `Supplier worksheet is separate from the food-cost worksheet: ${url}`);
      for (const target of ["/help/kitchen/suppliers-and-purchases", "/help/kitchen/delivery-note-import", "/tools/food-cost-calculator"]) assert.ok(main.includes(`href="/${lang}${target}"`), `Supplier calculator source/resource link: ${url}: ${target}`);
      const software = [...main.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1])).find(schema => schema["@type"] === "WebApplication");
      assert.equal(software?.url, `${canonicalBase}/${lang}${path}`);
      assert.equal(software?.isAccessibleForFree, true);
      assert.ok(!main.includes('type="file"'), `The public worksheet does not request supplier uploads: ${url}`);
    }
    if (path === "/solutions/kitchen") {
      const schemas = [...main.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
      const software = schemas.find(schema => schema["@type"] === "SoftwareApplication");
      assert.equal(software?.offers.price, 890, `Standalone Kitchen offer retains its approved rate: ${url}`);
      const questions = schemas.find(schema => schema["@type"] === "FAQPage")?.mainEntity;
      assert.equal(questions?.length, 6, `Kitchen scope and purchasing answers are localized: ${url}`);
      assert.ok(questions.some(question => question.acceptedAnswer.text.includes("890") && question.acceptedAnswer.text.includes(navigationTitles.kitchen)), `Kitchen standalone pricing is visible: ${url}`);
      for (const target of ["/help/kitchen/stock-management", "/help/kitchen/data-and-sales-links"]) assert.ok(main.includes(`href="/${lang}${target}"`), `Kitchen inventory and sales claims link to their procedures: ${target}`);
    }
    if (path === "/tools/food-cost-calculator") assert.ok(main.includes('id="recipe-versus-actual"'), `Recipe estimate and actual consumption are distinguished without JavaScript: ${url}`);
    if (path === "/guides/restaurant-inventory-israel") {
      assert.ok(main.includes('id="software-scope"'), `Inventory purchasing scope is server rendered: ${url}`);
      assert.ok(main.includes(`href="/${lang}/pricing#plan-kitchen"`), `Inventory guide exposes the relevant localized price: ${url}`);
    }
    if (lang === "he") {
      const expected = {"/pricing": "מחיר קופה למסעדה", "/solutions/kitchen": "תוכנה לניהול מטבח", "/guides/restaurant-inventory-israel": "ניהול מלאי למסעדות", "/tools/food-cost-calculator": "פוד קוסט למסעדה"}[path];
      if (expected) assert.ok(main.includes(expected), `Hebrew destination answers its primary search intent: ${url}`);
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
    if (path === "/about") assert.ok(main.includes('href="https://apps.apple.com/il/app/foody-pos/id6758894756"'), `Official publisher page links to its verified iPad app: ${url}`);
    const workflow = { "/sectors/food-beverage/restaurants": "restaurants", "/solutions/kitchen": "kitchen", "/solutions/online-ordering": "ordering", "/solutions/pos": "pos" }[path];
    if (workflow) {
      assert.ok(main.includes(`data-acquisition-workflow="${workflow}"`), `Server-rendered buying workflow: ${url}`);
      assert.ok(main.includes(`href="/${lang}/guides/restaurant-pos-israel"`), `Product links to localized buying guide: ${url}`);
    }
    if (path === "/solutions/pos") {
      const schemas = [...main.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
      const software = schemas.find(schema => schema["@type"] === "SoftwareApplication");
      assert.equal(software?.url, `${canonicalBase}/${lang}/solutions/pos`, `POS software describes its own page: ${url}`);
      assert.equal(software?.offers.price, 590, `POS is priced through Restaurant: ${url}`);
      assert.equal(software?.offers.url, `${canonicalBase}/${lang}/pricing#plan-restaurant`, `POS offer links to Restaurant: ${url}`);
      assert.equal(software?.offers.priceCurrency, "ILS");
      assert.deepEqual(software?.sameAs, ["https://apps.apple.com/il/app/foody-pos/id6758894756"], `POS software identifies its verified App Store listing: ${url}`);
      assert.equal(software?.offers.priceSpecification.valueAddedTaxIncluded, false);
      assert.equal(software?.offers.priceSpecification.unitText, "month");
      assert.ok(main.includes("590") && main.includes("149"), `Visible licence prices and offer distinctions: ${url}`);
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
          ["pos", "ordering", "restaurant", "kitchen"],
          `Four product links in ${landmark}: ${url}`,
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
      const delivery = main.match(/<section\b[^>]*id="plan-delivery"[\s\S]*?<\/section>/)?.[0];
      assert.ok(delivery?.includes('data-maps-offer-status="planned"'), "Planned maps extension belongs to the delivery module: " + url);
      assert.ok(delivery.includes({ fr: "Foody Livraison", en: "Foody Delivery", he: "Foody משלוחים" }[lang]));
      const deliveryDetails = delivery.match(/<details\b[^>]*>[\s\S]*?<\/details>/)?.[0];
      assert.ok(deliveryDetails, "Delivery mapping details are expandable: " + url);
      assert.deepEqual(
        [...deliveryDetails.matchAll(/data-pricing-maps="([^"]+)"/g)].map(match => match[1]),
        ["included", "plus", "custom"],
        "Shared usage, Cartes Plus and higher volumes are grouped together: " + url,
      );
      assert.equal(mapsOffer.automatic_billing, false);
      const mapsPlus = deliveryDetails.match(/data-pricing-maps="plus"([\s\S]*?)<\/dd>\s*<\/div>/)?.[1];
      assert.ok(mapsPlus?.includes(String(mapsOffer.monthly_price)), "Maps Plus price matches the offer contract: " + url);
      assert.ok(mapsPlus.includes('href="/' + lang + '/contact"'), "Maps activation uses contact only: " + url);
      assert.ok(!delivery.includes("<form"), "Delivery has no maps checkout: " + url);
      const licenceNote = main.match(
        /<p\b[^>]*data-pricing-licences[^>]*>([\s\S]*?)<\/p>/,
      )?.[1];
      assert.ok(
        licenceNote?.includes({
          he: "לכל עובד שמקבל הזמנות או תשלומים",
          fr: "Chaque employé qui prend des commandes ou encaisse",
          en: "Every employee who takes orders or accepts payments",
        }[lang]),
        "POS licences are named per employee: " + url,
      );
      const visibleText = (markup) => markup.replace(/<[^>]*>/g, "").replace(/\s/g, "");
      const amountText = (amount) => visibleText(
        new Intl.NumberFormat(lang === "he" ? "he-IL" : lang, {
          minimumFractionDigits: Number.isInteger(amount) ? 0 : 2,
        }).format(amount) + " ₪",
      );
      const moduleKeys = [...main.matchAll(/data-pricing-plan="([^"]+)"/g)].map(match => match[1]);
      assert.deepEqual(moduleKeys, ["restaurant", "ordering", "kitchen"], "Three independent modules: " + url);
      for (const [key, amount, route] of [
        ["restaurant", 590, "/sectors/food-beverage/restaurants"],
        ["ordering", 590, "/solutions/online-ordering"],
        ["kitchen", 890, "/solutions/kitchen"],
      ]) {
        const card = main.match(new RegExp('data-pricing-plan="' + key + '"[\\s\\S]*?</article>'))?.[0];
        assert.ok(card?.includes(navigationTitles[key]), "Module matches product navigation: " + key + " " + url);
        assert.ok(main.includes('id="plan-' + key + '"'), "Module anchor: " + key + " " + url);
        assert.ok(card.includes('href="/' + lang + route + '"'), "Module links to its product: " + key + " " + url);
        assert.ok(visibleText(card).includes(amountText(amount)), "Module monthly price: " + key + " " + url);
        assert.equal(card.includes("QR"), key === "restaurant", "Table QR belongs to Restaurant: " + url);
        assert.equal(card.includes(lang === "fr" ? "Foody Compagnon" : "Foody Companion"), key === "kitchen");
        assert.doesNotMatch(card, /hébergement|hosting|אחסון/i, "Module does not claim site hosting: " + url);
      }
      assert.equal((main.match(/\bQR\b/g) || []).length, 1, "QR is listed once: " + url);
      assert.doesNotMatch(main, /data-quote-total|quote-summary|type="checkbox"/, "Pricing has no interactive quote: " + url);

      for (const [key, amount] of Object.entries({extraPos: 149, setup: 1290, orderingSetup: 1090, training: 990})) {
        const row = main.match(new RegExp('data-pricing-cost="' + key + '"[\\s\\S]*?</div>'))?.[0];
        assert.ok(row && visibleText(row).includes(amountText(amount)), "Separate " + key + " price: " + url);
      }
      const setupPosition = main.indexOf('id="setup-fees"');
      const paymentsPosition = main.indexOf('id="hardware-and-payments"');
      assert.ok(setupPosition >= 0 && paymentsPosition > setupPosition, "Payment fees follow setup fees: " + url);
      const paymentRow = (key) => main.match(
        new RegExp('data-pricing-payment="' + key + '"[\\s\\S]*?</div>'),
      )?.[0];
      for (const [key, amounts] of Object.entries({
        "victa-portable": [1290],
        "victa-mobile": [1210],
        "victa-mini": [1190],
        "emv-service": [49],
        "emv-lab-repair": [15],
        "payment-gateway": [20],
        "sim-data": [10],
        "virtual-activation": [199],
        "virtual-service": [49],
        "virtual-overage": [0.05],
        "3d-secure": [249, 0.90],
      })) {
        const row = paymentRow(key);
        assert.ok(row && amounts.every(amount => visibleText(row).includes(amountText(amount))), "Separate " + key + " payment charges: " + url);
        if (key === "virtual-service") {
          const allowance = new Intl.NumberFormat(lang === "he" ? "he-IL" : lang).format(1000);
          assert.ok(row.includes(allowance), "Virtual terminal includes 1,000 monthly transactions: " + url);
        }
      }
      const includedServices = ["shva-license", "vhq-management"];
      const terminalOptions = main.match(/<details class="pricing-payment-options">[\s\S]*?<\/article>/)?.[0];
      const terminalOptionKeys = ["emv-lab-repair", "payment-gateway", "sim-data", "dock-and-stand", "terminal-replacement", "terminal-transport"];
      for (const key of terminalOptionKeys) {
        assert.ok(terminalOptions?.includes('data-pricing-payment="' + key + '"'), "Terminal option " + key + " is separate from the monthly service: " + url);
      }
      for (const key of includedServices) {
        const row = paymentRow(key);
        assert.ok(row?.includes('data-pricing-payment-included="true"'), key + " is included in the EMV service: " + url);
        assert.ok(row.includes({ fr: "Inclus", he: "כלול", en: "Included" }[lang]));
        assert.doesNotMatch(visibleText(row), /₪/);
      }
      for (const key of ["emv-service", ...includedServices]) {
        assert.ok(!terminalOptions.includes('data-pricing-payment="' + key + '"'));
      }
      for (const key of ["dock-and-stand", "terminal-replacement", "terminal-transport", "additional-virtual-terminal"]) {
        const row = paymentRow(key);
        assert.ok(row?.includes({fr: "Sur devis", he: "בהצעת מחיר", en: "On request"}[lang]), key + " requires a quote: " + url);
      }
      for (const key of [
        "emv-service", ...includedServices, ...terminalOptionKeys,
        "virtual-activation", "virtual-service", "virtual-overage", "3d-secure", "additional-virtual-terminal",
      ]) {
        assert.match(
          paymentRow(key) ?? "",
          /<details class="pricing-service-help"><summary[^>]*>[\s\S]*?<\/summary><p>[^<]+<\/p><\/details>/,
          key + " explains the service in a disclosure: " + url,
        );
      }
      const faq = [...main.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)]
        .map(match => JSON.parse(match[1]))
        .find(schema => schema["@type"] === "FAQPage");
      assert.equal(faq?.mainEntity.length, 3, "Localized pricing FAQ: " + url);
      assert.ok(faq.mainEntity.every(({ acceptedAnswer }) => !acceptedAnswer.text.includes("<a")));
      assert.ok(main.includes({he: "30 יום", fr: "30 jours", en: "30 days"}[lang]), "Cancellation notice: " + url);
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
      "/solutions/pos": "restaurant",
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
      const schemas = [...main.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(match => JSON.parse(match[1]));
      const software = schemas.find(schema => schema["@type"] === "SoftwareApplication");
      assert.equal(software?.url, `${canonicalBase}/${lang}/solutions/online-ordering`);
      assert.equal(software?.operatingSystem, "Web browser", `Standalone ordering does not require a native POS: ${url}`);
      assert.equal(software?.offers.price, 590);
      assert.equal(software?.offers.priceCurrency, "ILS");
      assert.equal(software?.offers.url, `${canonicalBase}/${lang}/pricing#plan-ordering`);
      assert.equal(software?.offers.priceSpecification.valueAddedTaxIncluded, false);
      assert.equal(schemas.find(schema => schema["@type"] === "FAQPage")?.mainEntity.length, 6, `Ordering has six localized buying answers: ${url}`);
      assert.ok(main.includes(`href="/${lang}/help/delivery/zones-and-schedules"`), `Delivery proof uses the published procedure: ${url}`);
      assert.ok(!main.includes(`/help/settings/delivery-zones`), `Legacy alias is not used as a proof citation: ${url}`);
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
      const heroImage = main.match(/<img\b[^>]*src="[^"]*cafe-israel[^>]*>/)?.[0];
      assert.ok(heroImage, `Restaurant LCP image is discoverable in initial HTML: ${url}`);
      assert.match(heroImage, /fetchpriority="high"/i, `Restaurant LCP image has explicit network priority: ${url}`);
      assert.doesNotMatch(heroImage, /loading="lazy"/i, `Restaurant LCP image is not deferred: ${url}`);
      const heroPreload = [...html.matchAll(/<link\b[^>]*rel="preload"[^>]*as="image"[^>]*>/g)].find(match => match[0].includes("cafe-israel"))?.[0];
      assert.match(heroPreload || "", /fetchpriority="high"/i, `The responsive LCP preload has the same high priority: ${url}`);
      const category = { he: "קופה למסעדה", fr: "caisse restaurant", en: "restaurant POS" }[lang];
      const heading = main.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/)?.[1] || "";
      assert.ok(heading.toLocaleLowerCase().includes(category.toLocaleLowerCase()), `Restaurant category is visible in the primary heading: ${url}`);
      assert.ok(html.match(/<title>([\s\S]*?)<\/title>/)?.[1].endsWith(" | Foody POS"), `Restaurant search title identifies Foody POS: ${url}`);
      const schemas = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((match) => JSON.parse(match[1]));
      const setupFaq = schemas.find((schema) => schema["@type"] === "FAQPage")?.mainEntity;
      assert.equal(setupFaq?.length, 6, `Restaurant buying FAQ includes on-site installation: ${url}`);
      const setupAnswer = setupFaq[5].acceptedAnswer.text;
      assert.ok(setupAnswer.includes("1290") && setupAnswer.includes("990"), `Setup and optional training retain the approved shared prices: ${url}`);
      const software = schemas.find((schema) => schema["@type"] === "SoftwareApplication");
      assert.ok(software, `Restaurant product is described as software: ${url}`);
      assert.equal(software.offers.price, 590, `Approved Restaurant price: ${url}`);
      assert.equal(software.offers.priceCurrency, "ILS");
      assert.equal(software.offers.priceSpecification.valueAddedTaxIncluded, false);
      assert.equal(software.offers.priceSpecification.unitText, "month");
      assert.ok(software.offers.description.includes("590"));
      assert.ok(main.includes("590"), `Structured price is also visible: ${url}`);
      assert.ok(main.includes(`href="/${lang}/compare/tabit"`));
      assert.ok(main.includes(`href="/${lang}/help/orders/taking-an-order-pos"`));
      assert.ok(main.includes(`href="/${lang}/solutions/pos"`), `Restaurant content links directly to the POS product: ${url}`);
      for (const proof of ["/help/orders/taking-an-order-pos", "/help/tables-floors/floor-plans", "/help/orders/courses-and-kitchen-release", "/help/payments/pos-checkout", "/help/kitchen/data-and-sales-links"]) assert.ok(main.includes(`href="/${lang}${proof}"`), `Restaurant claim has a localized operational source: ${proof}/${url}`);
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
      for (const amount of ["890", "590"]) assert.ok(moduleScope?.includes(amount), `Kitchen and Restaurant module prices remain distinct: ${amount}/${url}`);
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
      "": ["/solutions/kitchen"],
      "/sectors/food-beverage/restaurants": [
        "/solutions/online-ordering",
        "/solutions/kitchen",
        "/solutions/kitchen-companion",
      ],
      "/solutions/kitchen": ["/solutions/kitchen-companion"],
      "/solutions/kitchen-companion": ["/solutions/kitchen"],
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
const datedEntries = [...sitemap.matchAll(/<url>([\s\S]*?)<\/url>/g)].map(match => ({ url: match[1].match(/<loc>(.*?)<\/loc>/)?.[1], date: match[1].match(/<lastmod>(.*?)<\/lastmod>/)?.[1] })).filter(entry => entry.date);
assert.deepEqual(datedEntries.map(entry => entry.url).sort(), ["he", "fr", "en"].flatMap(lang => ["", "/sectors/food-beverage/restaurants"].map(path => `${canonicalBase}/${lang}${path}`)).sort(), "Only the six pages with reviewed main-content edits receive a sitemap modification date");
for (const entry of datedEntries) assert.equal(entry.date, "2026-11-02", `Sitemap date reflects the actual editorial update, independently of build time: ${entry.url}`);
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
const proofPages = [...helpReferences.values()];
for (let index = 0; index < proofPages.length; index += 4) await Promise.all(proofPages.slice(index, index + 4).map(async reference => {
  const response = await fetch(base + reference.pathname, { redirect: "manual", signal: AbortSignal.timeout(20000) });
  assert.equal(response.status, 200, `Published help citation returns directly: ${reference.pathname}`);
  const html = await response.text();
  assert.ok(html.includes(`rel="canonical" href="${canonicalBase}${reference.canonicalPath}"`), `Citation retains the actual published source: ${reference.pathname}`);
  assert.match(html, /<h1\b/, `Citation renders an article or help index: ${reference.pathname}`);
  for (const fragment of reference.fragments) {
    const attribute = fragment.replaceAll('&', '&amp;').replaceAll('"', '&quot;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
    assert.ok(html.includes(`id="${attribute}"`), `Citation anchor exists: ${reference.pathname}#${fragment}`);
  }
}));
for (const lang of ["he", "fr", "en"]) {
  const response = await fetch(`${base}/${lang}/help/settings/delivery-zones`, { redirect: "manual" });
  assert.equal(response.status, 308, `Already shared delivery links are retained: ${lang}`);
  const target = new URL(response.headers.get("location"), base);
  assert.equal(target.origin, new URL(base).origin);
  assert.equal(target.pathname, `/${lang}/help/delivery/zones-and-schedules`);
}
console.log(
  `Marketing checks passed: ${checked} localized pages, ${proofPages.length} help destinations, canonicals, hreflang, RTL, headings, security headers, sitemap, redirects, 404 and social card.`,
);
