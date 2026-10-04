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
- `src/lib/marketing/pricing.ts`: approved public launch prices and localized plan, setup, payment and cancellation details.
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

Pricing uses the launch grid approved on 4 October 2026: POS ₪590 (1 device licence), standalone Orders ₪590 (no POS required), Restaurant ₪890 (2 licences, QR and online orders), Restaurant & Kitchen ₪1,490 (2 licences), and standalone Kitchen ₪890 per month per establishment, excluding VAT. Cloud is included. Additional POS licences cost ₪99/month; standard setup is ₪1,490 once and on-site training is ₪1,200/day. Software is billed monthly with 30 days’ cancellation notice and a launch price fixed for the first 12 months. The subscription wording on the terms page reflects these approved conditions; other legal wording is preserved.

Foody Cuisine (French) / Foody Kitchen (English and Hebrew) remains the kitchen management module: recipes, food cost, stock, suppliers and preparations. Foody Compagnon (French) / Foody Companion (English and Hebrew, with localized descriptions) is its daily kitchen assistant, included without a surcharge in standalone Kitchen and Restaurant & Kitchen. The dedicated companion page explains prep, service, closing and compatible Siri access; it is not a separate subscription. These names and inclusions are shared across homepage, navigation, restaurant, kitchen, companion and pricing pages. Foody Commandes (French), Foody Orders (English) and Foody הזמנות (Hebrew) is the shared online-ordering product. It is available standalone without a required POS and included in Restaurant and Restaurant & Kitchen. The standalone Orders subscription costs ₪590 per month per establishment, excluding VAT. The POS-only plan does not include online ordering.

Navigation and footer expose five product offers: POS, Orders, Restaurant, Kitchen, and Restaurant & Kitchen. Companion remains nested under Kitchen. Orders has one shared page at the existing `/solutions/online-ordering` URL, whether purchased standalone or included in Restaurant. Its hero explains both uses and links to Restaurant; Restaurant links back to the same page and names the included product. Pricing has a standalone Orders card and direct anchors to all five offers. Hardware and payments have their own group; business-sector navigation remains available. The existing POS, restaurant and kitchen pages are reused with stable URLs and links to their matching pricing anchors. The combined offer links directly to its pricing card rather than duplicating those product pages. Product names and the shared navigation map live in `ui.ts`; `ProductLinks.tsx` renders the same hierarchy in both menus. `ProductMentions.tsx` uses those same localized names and routes for contextual links in offer inclusions, product copy and FAQ answers. It links each product once per text block, recognizes the complete bundle before its Restaurant prefix, and skips links back to the current product page. Pricing titles link to their product pages; the combined card links to both Restaurant and Kitchen. FAQ structured data remains plain text.

Hardware, EMV services, processing, SMS, external courier services, kiosks and third-party integrations remain separate; no provisional supplier rate is published. Zero Foody order commission is distinct from card processing and external platform fees. A Victa used as a Foody POS consumes one device licence without double billing. Standalone Kitchen connections to third-party POS systems require technical validation and a separate quote. Groups, central production, catering and logistics receive a scoped proposal. No competitor quote, invented saving, artificial discount, free trial or unverified 24/7 support promise is published. The homepage links to pricing from its existing closing section without adding another pricing grid.

A POS station means one device running Foody, whether a counter POS, a waiter tablet or a Victa used for orders and payments. Staff accounts and permissions are distinct: several employees can take turns on the same station with their own access. Pricing cards, the note below them and the FAQ clarify that the included licences cover software per device, not the physical hardware or a charge per employee. This is the commercial pricing definition; the landing does not implement subscription enforcement.

The online-ordering page covers same-day pickup/delivery and batch preorders with an ordering window, cutoff and fulfilment date. The weekly Sunday-to-Wednesday/Friday example is illustrative, not a fixed product schedule. Preparation quantities, portions and customer packing belong to this order-fulfilment workflow. Kitchen ticket printing is explicitly a paid add-on, with hardware and configuration quoted separately and compatibility checked; no unapproved amount or recurring billing period is implied. The standard preparation step uses a kitchen icon, with printing presented separately. Order fulfilment includes delivery management, distinct from external courier charges. Back-office access, preparation tracking and delivery management are not POS device licences. The Orders card displays its public ₪590 monthly rate, consistent with the localized pricing FAQ; there is no duplicate Orders page for Restaurant customers.

Product section headings use concise editorial copy separate from search titles via `sectionTitle`. Search titles retain local product terms and Israel where relevant. Avoid em dashes in commercial copy; write natural sentences instead of combining a product name with an SEO keyword list.

Verifone, PayPlus and SUMIT integrations are presented with market/contract qualifications; Stancer is restricted to its supported markets. Hardware availability and processor compatibility are qualified beside the products. Legal pages retain their explicit English language/direction and metadata.

## Asset provenance

- `cafe-israel.webp`, `kitchen-israel.webp`, `retail-israel.webp`: original AI-generated lifestyle illustrations created for this redesign. These do not depict identified Foody customers or testimonials.
- `victa-portable-v2.webp`: optimized manufacturer asset from [Verifone Victa family](https://www.verifone.com/fr-fr/verifone-victa), source `https://cdn.prod.website-files.com/69dff366f2242bfb12942d5a/69dff366f2242bfb12943c29_Rectangle%204.avif`.
- `victa-mini-v2.webp`: optimized manufacturer asset from the same family page, source `https://cdn.prod.website-files.com/69dff366f2242bfb12942d5a/6aac33796034f3715a4064d4_ID%20Render_Victa%20Mini_r0035_1024x1024_300dpi%20(1).png`.
- Hardware copy checked against [Victa Portable](https://www.verifone.com/hardware-product/verifone-victa-portable) and [Victa Mini](https://www.verifone.com/hardware-product/verifone-victa-mini). No speculative PCI version, biometric availability, Israeli certification or universal processor compatibility is claimed.
- Integration references: [PayPlus](https://www.payplus.co.il/), [SUMIT](https://www.sumit.co.il/), [Stancer](https://www.stancer.com/), and the Foody server's existing provider integrations.
- `social-card-{fr,he,en}-v1.png`: localized sharing cards generated with `npm run social:generate`, using the approved C2 symbol/wordmark and bundled Manrope/Heebo fonts. Logo and headlines stay inside the central 630 px square of the 1200 × 630 image for centered compact crops. `src/lib/marketing/social.json` supplies the image copy and concise homepage Open Graph/Twitter titles and descriptions; search titles remain separate. Supporting and product pages retain their own titles with a localized image. `scripts/social-fonts.conf` makes text rendering independent of system fonts. Versioned filenames distinguish the new cards from cached previews; the historical `social-card.png` is retained for existing references. Actual messaging-app layouts and cache refresh timing remain platform-controlled.
- Approved C2 Foody identity: shared path-based `FoodyLogo` component, with the monochrome symbol and wordmark together in both the header and footer. Header dimensions keep the symbol-to-wordmark proportions measured on Square France, scaled for the thinner Foody lettering: a 30 px symbol, 24.8 px full wordmark height and 8 px gap, on desktop and mobile. Both drawings keep their own aspect ratios without stretching. The header and footer share an optical alignment: the wordmark is lowered by 2.5 px to center the letter body with the symbol while allowing the y descender below it. Product demos retain the compact color lockup. That lockup shares one vertical center across symbol and full wordmark, including the descender; the cloud diagram uses a white monochrome symbol above the white wordmark. The browser favicon uses the monochrome C2 symbol: black in light mode and white in dark mode, with a black-on-white PNG fallback. Its versioned URL refreshes cached favicons. Orange remains the accent for product-demo lockups, application/home-screen icons and campaign assets. Landing sharing cards use the black symbol to continue the site’s monochrome identity. The sharing-card generator consumes `public/assets/brand/foody-symbol-black.svg`, copied from the approved black-symbol master. Masters, export commands, archived originals and usage rules: `../brand/foody/identity/v1/README.md`. Device photographs retain the manufacturer's own example currency and interface.

Never commit/push or deploy production without the authorization required by the workspace `AGENTS.md`.

## Cloud, equipment and companion update

The homepage uses the cloud ecosystem diagram in place of the general three-tab explorer, plus a compact order → payment → receipt sequence inside the existing Verifone section. Full table-service interactions remain on the dedicated pages. Product pages use their own visual: table-service flow, retail basket, branch production plans, cloud map, recipe cost, guest-ordering phone, payment flow, printer gallery or kitchen-day companion. The new `/solutions/equipment` and `/solutions/kitchen-companion` routes are localized, linked from navigation and included in the sitemap.

Foody's owner supplied the Star Micronics/Epson partner and integrator status and the official Foody app on Victa Portable positioning. The native Victa printer integration, Epson routing documentation and iPad kitchen companion/App Intents were checked in the workspace. Siri is presented for activated, authorized iPads running iPadOS 18 or later; examples do not imply Siri support on Android or a live microphone on the website. Cloud services and connected payments require Internet access.

- `epson-tm-u220ii.webp`: manufacturer image from [Epson TM-U220IIB](https://www.epson.eu/en_EU/products/printers/pos-printers/pos-printers/pc-pos-printers/epson-tm-u220iib-(101b0):-usb,-ps,-ne-sensor,-ecw/p/52044), source `https://i8.amplience.net/i/epsonemear/no_6_type-b_nowindow-black-receipt-_main?w=1200&fmt=png`.
- `star-mc-print3.webp`: manufacturer image from [Star mC-Print3](https://starmicronics.com/product/mc-print3-pos-receipt-printer-retail-kitchen-online-ordering/), source `https://starmicronics.com/wp-content/uploads/2022/01/mC-Print3-1-800x800.jpg.webp`.

Epson is positioned for professional and fine-dining kitchens in Israel. No unsupported claim of exclusive design for Michelin-starred restaurants, endorsement or first Israeli availability is made. Direct cloud printing is qualified: compatible intelligent Epson variant or gateway required. Manufacturer images retain their own example tickets and screens.
