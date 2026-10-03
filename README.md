# Foody Landing

Next.js marketing site for Foody in Israel. Hebrew is the default acquisition language; English and French have complete commercial pages. This repository is independent from the API, guest ordering website and administration apps.

## Development and validation

```sh
npm ci
npm run dev
```

The local site runs on port 3001. The existing contact endpoint is `POST /api/v1/public/contact`; development uses `http://localhost:8080` unless `NEXT_PUBLIC_API_URL` is configured. Production defaults to `https://api.foody-pos.co.il`. The form expects an HTTP success response and `{ "ok": true }`; rejected, malformed or timed-out requests show an error and retain the form values. Do not submit test leads to the production API.

```sh
npm run lint
npx tsc --noEmit
npm run build
npm run start
# In another terminal, with the server running:
npm run test:marketing
```

`MARKETING_BASE_URL` changes the smoke-test target. `NEXT_PUBLIC_SITE_URL` controls canonical URLs (default `https://foody-pos.co.il`). No deployment or environment changes are needed to preview locally. After moving route files, `npx next typegen` regenerates Next's route types. Do not run a production build and the development server against the same `.next` directory concurrently.

## Content and routes

- `src/lib/marketing/content.ts`: Hebrew, French and English homepage, pricing, demo and contact copy.
- `src/lib/marketing/solutions.ts`: editorial content for restaurants, chains, retail, POS, kitchen, online orders, payments and Verifone.
- `src/lib/marketing/ecosystem.ts`: cloud, Star/Epson, table service, companion and Siri content.
- `src/components/marketing/Experience.tsx`: distinct illustrations for each product; interactive examples only, with no live operations.
- `src/lib/marketing/ui.ts`: navigation labels and shared route map.
- `src/components/marketing/`: reusable product illustrations, page sections, accessible tabs and contact form.
- `src/lib/seo.ts`: localized metadata, canonical URLs and language alternates.
- `src/app/[lang]/layout.tsx`: the root document. Language and RTL are rendered on the server, without waiting for JavaScript.
- `src/content/help/`: existing help articles. Their URLs and content are retained, with resource-specific metadata; untranslated article fallbacks canonicalize to their original English version.

Commercial pages are rendered statically. New products belong under `/[lang]/solutions/[slug]`; sector pages preserve existing URLs. Previously empty beauty/services routes redirect permanently to the general business offering. The full-screen intro and unused older landing components were retired. Historical public assets and help content remain available.

## Design and editorial decisions

Square-inspired navigation by business and product, large merchant photography, real hardware images, specific use cases and a consistent demo CTA. Palette: white `#ffffff`, ink `#171717`, Foody orange `#eb5204`, campaign orange `#ff7b45`, light blue `#dceaff`, navy `#153b5b`. Heebo serves Hebrew; Manrope serves French and English. Both are self-hosted with their OFL licenses.

The official Verifone partner/reseller status is supplied by Foody's owner in the redesign brief. No external certification, customer endorsement, revenue statistic, testimonial or guaranteed saving is invented. Software capabilities were checked against the workspace's payment resolver and kitchen/help implementation. Illustrative product panels are labelled as sample data; they are not screenshots or customer performance claims. Food cost examples exclude VAT consistently and do not present ingredient margin as net profit.

Pricing is a tailored proposal instead of the old fixed packages/trial claims. Software, equipment, setup and processing are separate. Verifone, PayPlus and SUMIT integrations are presented with market/contract qualifications; Stancer is restricted to its supported markets. Hardware availability and processor compatibility are qualified beside the products. Existing legal wording was not rewritten; its English language/direction and page metadata are explicit.

## Asset provenance

- `cafe-israel.webp`, `kitchen-israel.webp`, `retail-israel.webp`: original AI-generated lifestyle illustrations created for this redesign. These do not depict identified Foody customers or testimonials.
- `victa-portable-v2.webp`: optimized manufacturer asset from [Verifone Victa family](https://www.verifone.com/fr-fr/verifone-victa), source `https://cdn.prod.website-files.com/69dff366f2242bfb12942d5a/69dff366f2242bfb12943c29_Rectangle%204.avif`.
- `victa-mini-v2.webp`: optimized manufacturer asset from the same family page, source `https://cdn.prod.website-files.com/69dff366f2242bfb12942d5a/6aac33796034f3715a4064d4_ID%20Render_Victa%20Mini_r0035_1024x1024_300dpi%20(1).png`.
- Hardware copy checked against [Victa Portable](https://www.verifone.com/hardware-product/verifone-victa-portable) and [Victa Mini](https://www.verifone.com/hardware-product/verifone-victa-mini). No speculative PCI version, biometric availability, Israeli certification or universal processor compatibility is claimed.
- Integration references: [PayPlus](https://www.payplus.co.il/), [SUMIT](https://www.sumit.co.il/), [Stancer](https://www.stancer.com/), and the Foody server's existing provider integrations.
- `social-card.png`: deterministic code-native social graphic using the same product assets, regenerated with `npm run social:generate`.
- Approved C2 Foody identity: shared path-based `FoodyLogo` component, wordmark in header/footer, symbol in product demos, and regenerated favicon/social card. Masters, export commands, archived originals and usage rules: `../brand/foody/identity/v1/README.md`. Device photographs retain the manufacturer's own example currency and interface.

Never commit/push or deploy production without the authorization required by the workspace `AGENTS.md`.

## Cloud, equipment and companion update

The homepage uses the cloud ecosystem diagram in place of the general three-tab explorer, plus a compact order → payment → receipt sequence inside the existing Verifone section. Full table-service interactions remain on the dedicated pages. Product pages use their own visual: table-service flow, retail basket, branch production plans, cloud map, recipe cost, guest-ordering phone, payment flow, printer gallery or kitchen-day companion. The new `/solutions/equipment` and `/solutions/kitchen-companion` routes are localized, linked from navigation and included in the sitemap.

Foody's owner supplied the Star Micronics/Epson partner and integrator status and the official Foody app on Victa Portable positioning. The native Victa printer integration, Epson routing documentation and iPad kitchen companion/App Intents were checked in the workspace. Siri is presented for activated, authorized iPads running iPadOS 18 or later; examples do not imply Siri support on Android or a live microphone on the website. Cloud services and connected payments require Internet access.

- `epson-tm-u220ii.webp`: manufacturer image from [Epson TM-U220IIB](https://www.epson.eu/en_EU/products/printers/pos-printers/pos-printers/pc-pos-printers/epson-tm-u220iib-(101b0):-usb,-ps,-ne-sensor,-ecw/p/52044), source `https://i8.amplience.net/i/epsonemear/no_6_type-b_nowindow-black-receipt-_main?w=1200&fmt=png`.
- `star-mc-print3.webp`: manufacturer image from [Star mC-Print3](https://starmicronics.com/product/mc-print3-pos-receipt-printer-retail-kitchen-online-ordering/), source `https://starmicronics.com/wp-content/uploads/2022/01/mC-Print3-1-800x800.jpg.webp`.

Epson is positioned for professional and fine-dining kitchens in Israel. No unsupported claim of exclusive design for Michelin-starred restaurants, endorsement or first Israeli availability is made. Direct cloud printing is qualified: compatible intelligent Epson variant or gateway required. Manufacturer images retain their own example tickets and screens.
