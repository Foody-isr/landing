Foody needs useful, verifiable resources for restaurant searches in Israel and a
way to measure confirmed demo requests. This adds a recipe-cost calculator,
three documented kitchen walkthroughs and an official company/contact page in
Hebrew, French and English, linked through product pages, footer and sitemap.

The Tabit table now cites its documented forecasts and marks eight remaining
absence reports as unconfirmed. GA4 uses explicit Google opt-in, sanitized page
addresses and closed acquisition categories; enhanced measurement is disabled.
The existing Meta behavior is retained and disclosed separately.

Validation: help metadata/three-language UI checks, 47 help tests, 9 measurement
and privacy tests, 6 calculator tests, lint, TypeScript and production build
passed. Production HTTP smoke passed for 62 localized pages; sitemap contains
408 URLs including the nine additions. Mobile/RTL, calculator input states,
gallery controls and consent persistence/reopening were checked locally.
No production lead was submitted. Other service inventories and public help
article/corpus bytes remain unchanged.

Release: merge one feature PR into develop, verify its immutable deployment,
then promote that exact artifact only with the owner's approval. GA4 account
and property exist; the tag starts collecting only after publication and visitor
opt-in. Partner mention requests remain unsent drafts.
