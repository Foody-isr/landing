import { readFile, writeFile } from "node:fs/promises";
import sharp from "sharp";

// Render a code-native social graphic using the manufacturer's unaltered product imagery.
const asset = async (name) => {
  const source = await readFile(
    new URL(`../public/assets/marketing/${name}`, import.meta.url),
  );
  return `data:image/png;base64,${(await sharp(source).png().toBuffer()).toString("base64")}`;
};
const portable = await asset("victa-portable-v2.webp");
const mini = await asset("victa-mini-v2.webp");
const brand = (await readFile(new URL("../public/assets/brand/foody-lockup.svg", import.meta.url), "utf8")).replace("<svg ", '<svg x="66" y="56" width="212" height="60" ');
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
<rect width="1200" height="630" fill="#ffffff"/><rect x="690" width="510" height="630" fill="#dceaff"/>
${brand}
<text x="66" y="239" font-family="Arial,sans-serif" font-weight="bold" font-size="62" letter-spacing="-2" fill="#171717">Your business.</text>
<text x="66" y="314" font-family="Arial,sans-serif" font-weight="bold" font-size="62" letter-spacing="-2" fill="#171717">All the possibilities.</text>
<text x="68" y="380" font-family="Arial,sans-serif" font-size="25" fill="#52575b">POS, payments &amp; business tools in Israel.</text>
<rect x="66" y="474" width="9" height="9" rx="4.5" fill="#eb5204"/><text x="86" y="488" font-family="Arial,sans-serif" font-size="19" fill="#171717">Official Verifone partner &amp; reseller</text>
<text x="66" y="559" font-family="Arial,sans-serif" font-size="20" fill="#697780">foody-pos.co.il</text>
<image href="${portable}" x="640" y="65" width="445" height="475"/><image href="${mini}" x="865" y="255" width="295" height="295"/>
</svg>`;
await writeFile(
  new URL("../public/assets/marketing/social-card.png", import.meta.url),
  await sharp(Buffer.from(svg)).png().toBuffer(),
);
