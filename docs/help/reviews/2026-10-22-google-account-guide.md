# Google onboarding guide and Admin assistant publication

Reviewed on 2026-10-22. The user explicitly requested publication in the public
Foody help center and connection to the FoodyAdmin assistant.

The French, Hebrew and English guide covers Google account creation, a dedicated
Cloud project, billing, the actual Places (New), Geocoding, Routes, Map Tiles and
Route Optimization integrations, key restrictions, budgets, conditional service
account credentials and secure handoff. Official Google sources are linked beside
the relevant steps. The guide explicitly describes preparation: the existing Maps
screen has no business-owned credential form and the API still uses platform
credentials. Publication does not claim that tenant credential routing has shipped.

Admin now exposes a localized guide shortcut and question suggestion in its
existing public support panel. Delivery routes contribute only the public delivery
topic; restaurant IDs, JWTs and records remain excluded. The setup, ecosystem,
dispatch and support guides explain this access in all three languages.

The API embeds the exact canonical Landing corpus. Its regression test loads the
real bundle and checks selection of the guide and its matching locale citation for
the three Admin suggestions without contacting an AI provider. Provider behavior,
authorization, quotas and business operations do not change.

The isolated publication branches start from the current develop heads:
Landing 08bb4c9a61071b238ceff72b1d3dbdeeb17f653b,
API a0c218ae4fd77edbe07e303dc5fa9737e91ba5b5 and
Admin 6ff33f0d4e948e3968e22248b159a736bec90862.
Only this guide and its support entry points were imported from the original
workspace. Other uncommitted work is preserved there. Inventory regeneration
scans these three isolated service roots and preserves the other services' reviewed
snapshots and ordering. Consumer contracts pin the immutable Landing guide commit.

Publication order: verify and promote the API's successful development image,
publish the matching Landing artifact, then verify and promote the matching Admin
artifact. Verify public article titles/languages, the search manifest and matching
API documentation revision. A live paid model call is not required for this change
and is not included in release verification.
