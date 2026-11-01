import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';
import { loadLocalTypeScript } from './load-local-typescript.mjs';
import { sharingResources } from './social-resources.mjs';
import { readCorpus } from '../src/lib/help/corpus.mjs';
const { getShareCard } = loadLocalTypeScript('src/lib/marketing/share-cards.ts');
const { getMarketingMetadata, getContentMetadata } = loadLocalTypeScript('src/lib/seo.ts');
const resources = sharingResources();

test('sharing images distinguish resources and languages while retaining the actual page subject', () => {
  const cards = ['fr','he','en'].flatMap(lang=>['/demos/kitchen','/tools/food-cost-calculator','/solutions/online-ordering'].map(route=>getShareCard(lang,route,'Page title')));
  assert.equal(new Set(cards.map(card=>card.image)).size,9);
  assert.equal(getShareCard('fr','/demos/kitchen','Ignored search title').title,'Foody Cuisine\nen pratique.');
  for (const card of cards) { assert.ok(card.image.startsWith(`/assets/sharing/${card.lang}/`)); assert.match(card.image,/-v2-[a-f0-9]{8}\.png$/); assert.ok(card.alt.includes(card.title.replace(/\s+/g,' '))); }
});

test('content changes version the image URL and encoded route segments cannot escape the asset directory', () => {
  const a=getShareCard('fr','/help/kitchen/example','Première procédure');
  const b=getShareCard('fr','/help/kitchen/example','Procédure mise à jour');
  assert.notEqual(a.image,b.image);
  assert.deepEqual(a,getShareCard('fr','/help/kitchen/example','Première procédure'));
  const unusual=getShareCard('fr','/../folder?query=private','Title');
  assert.ok(path.resolve('public','.'+unusual.image).startsWith(path.resolve('public/assets/sharing')+path.sep));
});

test('search titles and the approved home image stay unchanged while Open Graph and Twitter use the same page-specific asset', () => {
  const home=getMarketingMetadata('fr','home');
  assert.equal(home.openGraph.images[0].url,'/assets/marketing/social-card-fr-v1.png');
  const kitchen=getMarketingMetadata('fr','kitchen');
  assert.ok(kitchen.title.includes('Foody'));
  assert.equal(kitchen.openGraph.images[0].url,kitchen.twitter.images[0].url);
  assert.notEqual(kitchen.openGraph.images[0].url,home.openGraph.images[0].url);
  const article=getContentMetadata('en','/help/kitchen/food-cost','Recipe cost','Original English source');
  assert.equal(article.alternates.canonical,'https://foody-pos.co.il/en/help/kitchen/food-cost');
  assert.equal(article.openGraph.images[0].url,getShareCard('en','/help/kitchen/food-cost','Recipe cost').image);
});

test('every published help source and current marketing resource has its exact generated PNG in the artifact input', async () => {
  const keys=new Set(resources.map(resource=>`${resource.lang}:${resource.path}`));
  for (const article of readCorpus()) assert.ok(keys.has(`${article.lang}:/help/${article.topic}/${article.slug}`),article.url);
  assert.equal(new Set(resources.map(resource=>resource.card.image)).size,resources.length);
  for (const resource of resources) {
    const image=resource.metadata.openGraph.images[0];
    assert.equal(image.url,resource.card.image,`${resource.lang}:${resource.path}`);
    assert.equal(image.alt,resource.card.alt);
    const file=path.join('public',image.url);
    assert.ok(fs.existsSync(file),image.url);
    const metadata=await sharp(file).metadata();
    assert.equal(metadata.width,1200,image.url);assert.equal(metadata.height,630,image.url);assert.equal(metadata.format,'png');
  }
});
