import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import ts from "typescript";

const source = await readFile(new URL("../src/lib/marketing/measurement.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText;
const fresh = () => import(`data:text/javascript;base64,${Buffer.from(compiled).toString("base64")}#${Math.random()}`);

test("entry classification distinguishes Israeli Google, AI assistants and paid search", async () => {
  const { classifyAcquisition } = await fresh();
  const classify = (referrer, query = "") => classifyAcquisition(`https://foody-pos.co.il/he/solutions/kitchen${query}`, referrer);
  assert.deepEqual(classify("https://www.google.co.il/search?q=stock"), { source: "google", channel: "organic_search", landingLanguage: "he" });
  for (const [host, source] of [["chatgpt.com", "chatgpt"], ["www.perplexity.ai", "perplexity"], ["gemini.google.com", "gemini"]]) assert.deepEqual(classify(`https://${host}/private-conversation`), { source, channel: "ai_referral", landingLanguage: "he" });
  assert.equal(classify("https://www.google.com/", "?utm_medium=cpc&gclid=private-id").channel, "paid_search");
  assert.equal(classify("https://www.google.com.evil.example/").source, "other");
  assert.equal(classify("https://admin.foody-pos.co.il/").source, "direct");
  assert.equal(classify("", "?utm_source=chatgpt.com").source, "chatgpt");
  assert.equal(classify("https://www.google.com/", "?utm_source=perplexity").source, "perplexity");
  assert.equal(classify("", "?gclid=not-stored").channel, "paid_search");
  assert.equal(classify("", "?utm_source=constructor").source, "direct");
  assert.equal(classify("", "?utm_source=__proto__").source, "direct");
});

test("custom event parameters never contain form values, URLs or campaign identifiers", async () => {
  const { recordDemoSubmission } = await fresh();
  const environment = process.env.NODE_ENV;
  const previousWindow = globalThis.window, previousDocument = globalThis.document;
  const sent = [], broadcasts = [];
  const previousCustomEvent = globalThis.CustomEvent;
  let stored;
  try {
    process.env.NODE_ENV = "production";
    globalThis.CustomEvent = class { constructor(type, options) { this.type = type; this.detail = options.detail; } };
    globalThis.window = { dispatchEvent: event => broadcasts.push({ type: event.type, detail: event.detail }), location: { href: "https://foody-pos.co.il/fr/contact?utm_source=chatgpt&utm_campaign=private%40example.com&email=private%40example.com&gclid=secret" }, sessionStorage: { getItem: () => null, setItem: (_, value) => { stored = value; } }, fbq: (...args) => sent.push(args) };
    globalThis.document = { referrer: "https://chatgpt.com/c/private-thread" };
    recordDemoSubmission("fr");
    assert.deepEqual(sent[0], ["trackSingle", "1059276727609296", "Lead", { language: "fr", acquisition_source: "chatgpt", acquisition_channel: "ai_referral", landing_language: "fr" }]);
    assert.equal(window.dataLayer[0].event, "foody_demo_submitted");
    assert.deepEqual(broadcasts, [{ type: "foody:demo-submitted", detail: sent[0][3] }]);
    assert.doesNotMatch(JSON.stringify({ sent, stored, broadcasts, dataLayer: window.dataLayer }), /private|secret|@|https|contact/);
  } finally { process.env.NODE_ENV = environment; globalThis.window = previousWindow; globalThis.document = previousDocument; globalThis.CustomEvent = previousCustomEvent; }
});

test("language switches keep the entry source and discard unexpected stored fields", async () => {
  const { captureAcquisition } = await fresh();
  const previousWindow = globalThis.window, previousDocument = globalThis.document;
  try {
    globalThis.window = { location: { href: "https://foody-pos.co.il/fr/contact" }, sessionStorage: { getItem: () => JSON.stringify({ source: "bing", channel: "organic_search", landingLanguage: "he", email: "must-not-escape@example.com" }) } };
    globalThis.document = { referrer: "https://foody-pos.co.il/he" };
    assert.deepEqual(captureAcquisition(), { source: "bing", channel: "organic_search", landingLanguage: "he" });
  } finally { globalThis.window = previousWindow; globalThis.document = previousDocument; }
});

test("blocked storage and analytics cannot throw after a lead was accepted", async () => {
  const { recordDemoSubmission } = await fresh();
  const environment = process.env.NODE_ENV;
  const previousWindow = globalThis.window, previousDocument = globalThis.document;
  try {
    process.env.NODE_ENV = "production";
    globalThis.window = { location: { href: "https://foody-pos.co.il/en/contact" }, sessionStorage: { getItem() { throw Error("blocked"); }, setItem() { throw Error("blocked"); } }, fbq() { throw Error("blocked"); }, dataLayer: { push() { throw Error("blocked"); } } };
    globalThis.document = { referrer: "" };
    assert.doesNotThrow(() => recordDemoSubmission("en"));
  } finally { process.env.NODE_ENV = environment; globalThis.window = previousWindow; globalThis.document = previousDocument; }
});

test("development previews do not emit conversions", async () => {
  const { recordDemoSubmission } = await fresh();
  const environment = process.env.NODE_ENV;
  try { process.env.NODE_ENV = "development"; assert.doesNotThrow(() => recordDemoSubmission("he")); }
  finally { process.env.NODE_ENV = environment; }
});
