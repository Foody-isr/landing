import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const publicRoot = path.resolve('public');
const images = new Map();
const walk = directory => fs.readdirSync(directory,{withFileTypes:true}).flatMap(entry=>entry.isDirectory()?walk(path.join(directory,entry.name)):entry.name.endsWith('.html')?[path.join(directory,entry.name)]:[]);
let pages = 0;
for (const file of walk('.next/server/app')) {
  const html = fs.readFileSync(file,'utf8');
  const canonical = /<link rel="canonical" href="([^"]+)"/.exec(html)?.[1];
  if (!canonical || /name="robots" content="[^"]*noindex/.test(html)) continue;
  const image = /<meta property="og:image" content="([^"]+)"/.exec(html)?.[1];
  const twitter = /<meta name="twitter:image" content="([^"]+)"/.exec(html)?.[1];
  if (!image || image !== twitter) throw new Error(`Missing/mismatched sharing image: ${file}`);
  const url = new URL(image);
  const filename = path.resolve(publicRoot, '.'+decodeURIComponent(url.pathname));
  if (!filename.startsWith(publicRoot+path.sep) || !fs.existsSync(filename)) throw new Error(`Sharing image missing from built artifact: ${file}: ${url.pathname}`);
  const previous = images.get(filename);
  if (previous && previous !== canonical) throw new Error(`Unrelated pages reuse a sharing image: ${canonical}, ${previous}`);
  images.set(filename,canonical);
  pages++;
}
for (const filename of images.keys()) {
  const metadata = await sharp(filename).metadata();
  if (metadata.format!=='png'||metadata.width!==1200||metadata.height!==630) throw new Error(`Invalid sharing image format: ${filename}`);
}
console.log(`Built sharing: ${pages} page outputs checked; ${images.size} distinct canonical/locale images, all PNG 1200×630.`);
