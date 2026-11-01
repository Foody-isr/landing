# Restaurant inventory guide

Reviewed 1 November 2026 against Landing develop
`a49c2c72d18f7ada41d4f1bc0a3d45ed87f18760`.

`/{he,fr,en}/guides/restaurant-inventory-israel` addresses ingredient inventory,
recipe consumption, preparation batches, partial receipts, physical counts and
recipe food cost. It is an original Foody-authored buying guide, not an independent
vendor recommendation or a replacement for operational help. Each section links
to the corresponding published procedure in the same language. Existing Kitchen,
Restaurant, comparison and calculator pages link to it from their main content.
The page has localized Article metadata, canonical/alternate URLs, a generated
sharing card and a sitemap entry. No city variants or keyword-only pages are added.

## Evidence and arithmetic

Sources reviewed: `kitchen/stock-management`, `data-and-sales-links`, `preparations`,
`suppliers-and-purchases`, `daily-operations` and `food-cost`, in the published help
corpus. Product behavior is unchanged. Do not imply that a missing recipe is zero
consumption, that an uncounted ingredient is zero stock, that closing deducts
Foody POS consumption a second time or that forecasting sends supplier orders.

The inventory example is synthetic: opening 20 kg + confirmed receipts 10 kg
− recipe consumption 6 kg − separately recorded waste 1 kg = expected 23 kg.
A physical count of 22 kg gives a variance of −1 kg. It is explicitly limited to
one period, ingredient and location, without other production, transfer or
adjustment movements. It establishes neither the cause nor a financial saving.
The package conversion is 2 × 12 × 400 g = 9.6 kg. A partial delivery of 5.5 kg
against 6 kg ordered is an explanatory example, not an actual customer receipt.
No customer, testimonial, competitor absence or independent endorsement is invented.

## Discovery checks

`npm run audit:discovery -- --output <private-report.json>` now inspects 33 localized
pages and 15 priority targets. It requires at least two incoming main-content
links per priority target from the audited same-language pages, self canonicals,
server-rendered main headings, indexable observed directives and sitemap membership.
It excludes navigation/footer links from the incoming-link count. It is a focused
sample, not a full crawl, actual crawler-IP verification or proof of indexing.

The Search Console observations of 1 November showed recent unvisited pages:
Kitchen unknown, calculator/pricing/buying guide discovered but not indexed.
Kitchen and buying-guide indexing requests had already been accepted. Do not
attribute those states to a demonstrated HTML or robots defect or repeatedly
resubmit them. Google performance data was still processing. Private statistics
and search-account observations remain outside the public repository/site.

Google recommends useful original text and descriptive crawlable internal links;
the same foundations apply to its AI search features. No special AI ranking markup
or guaranteed citation is claimed. Sources:
[internal links](https://developers.google.com/search/docs/crawling-indexing/links-crawlable),
[AI features](https://developers.google.com/search/docs/appearance/ai-features).

Partner and customer outreach remain deferred to the owner. No recurring job,
paid API, real lead, supplier message, order or restaurant setting is created.
