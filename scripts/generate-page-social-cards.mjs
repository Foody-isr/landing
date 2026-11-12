import { readFile, writeFile, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { sharingResources } from './social-resources.mjs';

process.env.FONTCONFIG_FILE ??= fileURLToPath(new URL('./social-fonts.conf', import.meta.url));
const { default: sharp } = await import('sharp');
const publicRoot = path.resolve('public');
const symbol = await readFile(path.join(publicRoot, 'assets/brand/foody-symbol-black.svg'), 'utf8');
const wordmark = await readFile(path.join(publicRoot, 'assets/logo.svg'), 'utf8');
const placed = (svg, x, y, width, height) => svg.replace('<svg ', `<svg x="${x}" y="${y}" width="${width}" height="${height}" `);
const escape = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const icons = {
  pos: '<rect x="12" y="15" width="76" height="56" rx="7"/><path d="M37 71v15m26-15v15M27 86h46M24 30h27m-27 12h27m-27 12h14m25-24h12m-12 12h12"/>',
  kitchen: '<path d="M16 48h68M24 48v25c0 9 52 9 52 0V48M15 59H5m80 0h10M35 17c-9 9 9 12 0 22m15-28c-9 9 9 12 0 22m15-16c-9 9 9 12 0 22M31 84h38"/>',
  ordering: '<rect x="27" y="5" width="46" height="88" rx="8"/><path d="M41 16h18M43 82h14M36 37h28l-3 28H39l-3-28m9 0v-6c0-8 10-8 10 0v6"/>',
  calculator: '<rect x="23" y="5" width="54" height="90" rx="7"/><path d="M34 20h32v17H34zM35 51h5m20 0h5M35 65h5m20 0h5M35 79h5m20 0h5"/>',
  demo: '<rect x="5" y="13" width="25" height="30" rx="3"/><rect x="38" y="55" width="25" height="30" rx="3"/><rect x="71" y="13" width="25" height="30" rx="3"/><path d="M14 23h7m-7 9h7m23 33h12m-12 9h12m24-51h9m-9 9h9M17 50v20h14m39 0h13V50"/>',
  pricing: '<path d="M22 12h56v76l-9-5-9 5-10-5-10 5-9-5-9 5V12M34 28h32M34 43h20M34 58h32M34 72h17"/>',
  comparison: '<rect x="10" y="12" width="80" height="76" rx="5"/><path d="M50 12v76M10 34h80M22 49h16m24 0h16M22 63h16m24 0h16M22 77h16m24 0h16"/>',
  help: '<path d="M50 24C34 13 18 13 7 18v62c14-5 29-3 43 7 14-10 29-12 43-7V18c-11-5-27-5-43 6v63M19 33c7-1 15 1 20 5m-20 9c7-1 15 1 20 5m22-14c5-4 13-6 20-5m-20 19c5-4 13-6 20-5"/>',
  equipment: '<path d="M25 35V7h50v28M25 73v20h50V57H25v16H10V35h80v38H75M38 70h24M38 82h24M72 45h5"/>',
  payments: '<rect x="28" y="5" width="45" height="88" rx="7"/><path d="M37 17h27v24H37zM38 54h5m14 0h6M38 65h5m14 0h6M38 77h24M12 25c-7 6-7 19 0 25m8-20c-4 4-4 10 0 14"/>',
  company: '<path d="M21 88V20h58v68M10 88h80M35 33h5m20 0h5M35 48h5m20 0h5M35 63h5m20 0h5M44 88V73h12v15"/>',
  restaurant: '<path d="M22 8v33m-10-33v22c0 13 20 13 20 0V8M22 42v50M74 92V8c-17 10-23 28-18 46h18"/>',
  retail: '<path d="M10 32h80l-8-21H18l-8 21M16 45v46h68V45M37 91V60h26v31M10 32c0 15 20 15 20 0 0 15 20 15 20 0 0 15 20 15 20 0 0 15 20 15 20 0"/>',
  chains: '<rect x="36" y="5" width="28" height="25" rx="3"/><rect x="5" y="67" width="28" height="25" rx="3"/><rect x="67" y="67" width="28" height="25" rx="3"/><path d="M50 30v19M19 67V49h62v18"/>',
  contact: '<path d="M17 18h66v48H46L25 84V66h-8V18M29 33h42M29 47h29"/>',
  document: '<path d="M22 6h39l17 18v69H22V6M61 6v19h17M35 40h30M35 54h30M35 68h30M35 82h18"/>',
};
const backgrounds = { calculator: '#dceaff', kitchen: '#dceaff', ordering: '#fff1e9', pricing: '#fff1e9', restaurant: '#dceaff', contact: '#dceaff', retail: '#fff1e9' };

async function textImage(text, lang, initialSize, maxHeight, color = '#171717') {
  const family = lang === 'he' ? 'Heebo' : 'Manrope';
  const fontfile = path.join(publicRoot, `assets/fonts/${family.toLowerCase()}-600.ttf`);
  for (let size = initialSize; size >= 26; size -= 2) {
    const result = await sharp({ text: { text: `<span foreground="${color}">${escape(text)}</span>`, font: `${family} SemiBold ${size}`, fontfile, dpi: 72, width: 550, align: 'centre', rgba: true } }).png().toBuffer({ resolveWithObject: true });
    if (result.info.height <= maxHeight) return result;
  }
  throw new Error(`Sharing text exceeds its safe area: ${lang}: ${text}`);
}

const resources = sharingResources();
let generated = 0;
const footer = await textImage('foody-pos.co.il', 'en', 26, 40, '#52575b');
for (const { card } of resources) {
  const filename = path.join(publicRoot, card.image);
  if (!process.argv.includes('--force')) { try { await access(filename); continue; } catch { /* A missing derived asset is generated below. */ } }
  const icon = icons[card.kind];
  if (!icon) throw new Error(`Missing sharing illustration: ${card.kind}`);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630"><rect width="1200" height="630" fill="${backgrounds[card.kind] || '#f4f6f8'}"/>${placed(symbol,497,53,50,50)}${placed(wordmark,559,78-145*51/348,145,145*128/348)}<g transform="translate(554 152) scale(.92)" fill="none" stroke="#153b5b" stroke-width="3.7" stroke-linecap="round" stroke-linejoin="round">${icon}</g></svg>`;
  const subtitle = card.subtitle ? await textImage(card.subtitle, card.lang, 28, 80, '#52575b') : null;
  const heading = await textImage(card.title, card.lang, 54, subtitle ? 245-18-subtitle.info.height : 220);
  const groupHeight = heading.info.height + (subtitle ? 18 + subtitle.info.height : 0);
  const titleTop = Math.round(263 + (245-groupHeight)/2);
  const layers = [{ input:heading.data,left:Math.round((1200-heading.info.width)/2),top:titleTop },...(subtitle ? [{input:subtitle.data,left:Math.round((1200-subtitle.info.width)/2),top:titleTop+heading.info.height+18}] : []),{input:footer.data,left:Math.round((1200-footer.info.width)/2),top:550}];
  for (const [index, layer] of layers.entries()) {
    const info = index===0 ? heading.info : subtitle && index===1 ? subtitle.info : footer.info;
    if (layer.left<325 || layer.left+info.width>875 || layer.top<250 || layer.top+info.height>600) throw new Error(`Sharing text exceeds square-crop safe area: ${card.image}`);
  }
  const output = await sharp(Buffer.from(svg)).composite(layers).png().toBuffer();
  await mkdir(path.dirname(filename), { recursive: true });
  await writeFile(filename, output);
  generated++;
}
console.log(`Sharing cards: ${resources.length} resource/language images available (${generated} generated).`);
