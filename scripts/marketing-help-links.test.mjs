import { test } from 'node:test';
import assert from 'node:assert/strict';
import { marketingHelpReferences } from './marketing-help-links.mjs';

const origin = 'https://foody.example';
const page = `${origin}/fr/solutions/online-ordering`;
const corpus = [
  { id: 'delivery/zones-and-schedules', topic: 'delivery', slug: 'zones-and-schedules', lang: 'en', url: '/en/help/delivery/zones-and-schedules', title: 'Delivery zones' },
  { id: 'delivery/zones-and-schedules', topic: 'delivery', slug: 'zones-and-schedules', lang: 'fr', url: '/fr/help/delivery/zones-and-schedules', title: 'Zones de livraison' },
  { id: 'orders/english-only', topic: 'orders', slug: 'english-only', lang: 'en', url: '/en/help/orders/english-only', title: 'English source' },
];

test('a localized published citation retains its actual source and decoded anchor', () => {
  assert.deepEqual(marketingHelpReferences('<a class="text-link" href="/fr/help/delivery/zones-and-schedules#zone">Zones</a>', page, corpus, origin), [{ pathname: '/fr/help/delivery/zones-and-schedules', canonicalPath: '/fr/help/delivery/zones-and-schedules', sourceLang: 'fr', fragment: 'zone' }]);
});

test('the former broken delivery citation fails even if a legacy redirect is available', () => {
  assert.throws(() => marketingHelpReferences('<a href="/fr/help/settings/delivery-zones">Zones</a>', page, corpus, origin), /unpublished help citation/);
});

test('an English fallback is valid only when its published source exists', () => {
  assert.equal(marketingHelpReferences('<a href="/fr/help/orders/english-only">Source</a>', page, corpus, origin)[0].canonicalPath, '/en/help/orders/english-only');
  for (const slug of ['draft', 'internal', 'unknown']) assert.throws(() => marketingHelpReferences(`<a href="/fr/help/orders/${slug}">Source</a>`, page, corpus, origin), /unpublished help citation/);
});

test('own-site citations keep the page language while external documentation is left alone', () => {
  assert.throws(() => marketingHelpReferences('<a href="/en/help/delivery/zones-and-schedules">Source</a>', page, corpus, origin), /changes language/);
  assert.deepEqual(marketingHelpReferences('<a href="https://vendor.example/en/help/manual">Vendor</a>', page, corpus, origin), []);
});

test('only real topic and hub paths are accepted, without arbitrary nested paths', () => {
  assert.equal(marketingHelpReferences('<a href="/fr/help">Help</a><a href="/fr/help/delivery/">Delivery</a>', page, corpus, origin).length, 2);
  for (const path of ['/fr/help/private', '/fr/help/delivery/zones-and-schedules/extra']) assert.throws(() => marketingHelpReferences(`<a href="${path}">Help</a>`, page, corpus, origin), /unpublished help citation/);
});

test('preview links may use the canonical origin while retaining the requested local path', () => {
  assert.equal(marketingHelpReferences(`<a href="${origin}/fr/help/delivery/zones-and-schedules">Source</a>`, 'http://127.0.0.1:3001/fr/solutions/online-ordering', corpus, origin)[0].pathname, '/fr/help/delivery/zones-and-schedules');
});
