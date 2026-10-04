import { readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

// Use the bundled fonts even on machines without a system Fontconfig setup.
process.env.FONTCONFIG_FILE ??= fileURLToPath(new URL("./social-fonts.conf", import.meta.url));
const { default: sharp } = await import("sharp");

// Keep all artwork inside the central 630px square for compact, centered crops.
const width = 1200;
const height = 630;
const safeWidth = 550;
const social = JSON.parse(await readFile(
  new URL("../src/lib/marketing/social.json", import.meta.url), "utf8",
));
const publicRoot = new URL("../public/", import.meta.url);
const wordmark = await readFile(new URL("assets/logo.svg", publicRoot), "utf8");
const symbol = await readFile(new URL("assets/brand/foody-symbol-black.svg", publicRoot), "utf8");
const placed = (svg, x, y, w, h) => svg.replace(
  "<svg ", `<svg x="${x}" y="${y}" width="${w}" height="${h}" `,
);
// Match the approved header proportions and center the letter body, not the y descender.
const brand = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
<rect width="${width}" height="${height}" fill="#ffffff"/>
${placed(symbol, 388, 141, 122, 122)}
${placed(wordmark, 536, 202 - (276 * 51 / 348), 276, 276 * 128 / 348)}
</svg>`);
const escape = value => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

for (const [lang, content] of Object.entries(social)) {
  const family = lang === "he" ? "Heebo" : "Manrope";
  const fontfile = fileURLToPath(new URL(
    `assets/fonts/${family.toLowerCase()}-600.ttf`, publicRoot,
  ));
  const lines = await Promise.all(content.headline.map(async (line, index) => {
    // Pango shapes Hebrew in its logical order using the bundled font.
    const { data, info } = await sharp({ text: {
      text: `<span foreground="#171717">${escape(line)}</span>`,
      font: `${family} SemiBold 54`, fontfile, dpi: 72, rgba: true,
    } }).png().toBuffer({ resolveWithObject: true });
    if (info.width > safeWidth || info.height > 66) {
      throw new Error(`Social headline exceeds crop-safe bounds: ${lang}, line ${index + 1}`);
    }
    return { input: data, left: Math.round((width - info.width) / 2), top: 340 + index * 70 };
  }));
  const image = await sharp(brand).composite(lines).png().toBuffer();
  await writeFile(new URL(content.image.slice(1), publicRoot), image);
  console.log(`${lang}: ${content.image} (${width}×${height}, ${image.length} bytes)`);
}
