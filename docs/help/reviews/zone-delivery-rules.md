# Zone delivery rules and the restaurant framework — 30 October 2026

The API stores an optional explicit `same_day` rule inside the existing zone
calendar JSON. It adds no schema, payment/provider action or message trigger.
A zone's same-day weekdays must be a subset of its delivery weekdays. Its
same-day time choice and transport allowance replace the legacy global rule,
never stack with it. Conflicting new postal overlaps are rejected before saving
so a same-day edit cannot silently remove another zone’s future weekdays. Future slots, weekly receiving windows, product preparation,
ready quantities and frozen existing-order promises retain their established rules.

Admin groups these fields in the zone editor, warns about postal overlaps and
shows the normal/same-day calendars in the zone summary. A new zone keeps
restaurant-calendar inheritance until an explicit calendar/rule is selected. Ordinary workspaces no
longer show the global block. Only an enabled legacy policy exposes the historical
recovery editor until conversion. API rejects simultaneous systems and prevents
old editors from silently dropping an explicit zone rule. Inactive explicit zones
fail closed; deleting the last requires another active classic zone. Legacy
unconfigured no-zone behavior remains explicitly documented.

Orders & availability retains service enables, hours/closures, preparation and its
clock, horizon, slot duration, batches and existing payment controls. Scheduled
orders explicitly include today. The default calendar preview is collapsed and
states its limits. A saved basket/address/date simulation reuses the public
calendar/coverage resolvers, reports server-local evaluation, readiness reference,
transport and time mode, and creates no order or stock reservation. It does not
claim to test menu publication, selected options or final stock/payment acceptance.
It requires existing menu/delivery access; unsaved restaurant drafts block it.

Legacy rules are read before the zone inventory and frozen for the address
resolution. In-flight geocoding therefore cannot observe the old calendar with
a newly disabled global policy during the atomic conversion. The internal
provenance is omitted from JSON and persistence. A regression changes the global
policy between resolution and availability to verify this boundary.

The owner explicitly said Go for this joint redesign and previously requested
push, dev and production deployment. The separately approved Lovely behavior is
preserved by converting its overlapping postal calendars to three distinct areas:
local €10 (Mon–Fri/Sun, same-day Mon–Fri), extended €10 and extended €15
(Fri/Sun, advance orders only). The 39 covered codes and one outside code produce
560 equal old/new day/mode/price/transport comparisons. The conversion is a
reviewable, version-guarded maintenance transaction after API verification, not
an application bootstrap preset. Four rolls remain 30 minutes, Saint-Honoré 240;
hours, prices, minimums, payment rules and existing orders are untouched.

Update preorders, delivery-zones, fulfillment-policy, guest-ordering, order-types,
delivery-dispatch and restaurant-profile guides in French, Hebrew and English
together, with the internal shared-runtime contract. Preserve guest Web, POS, Backoffice and
Landing application-source inventory blocks exactly; their application code is
unchanged. Refresh only API and Admin source evidence from clean checkpoints,
copy the final corpus into API and pin this immutable Landing release. Existing
public Web supports per-date delivery mode/estimates and needs no rebuild.

Validation covers zone subset rules, local/remote Friday, Sunday preorder versus
same-day, readiness + transport + closing, legacy snapshots, stale editors,
postal policy compatibility, responsive FR/HE/EN browser controls and the basket
simulation. Run complete API/Admin and Landing validations. Merge one feature PR
per affected repository into develop, exercise the API in development, then
promote those exact immutable artifacts and apply the approved equivalent Lovely
conversion. No release synchronization to main is requested.

Concurrent courier GPS work already merged into develop is retained in this
release. The inventory baseline is the integrated Landing c69022ca commit;
its unchanged service snapshots are preserved, and API/Admin evidence includes
their merged upstream source. The combined help corpus retains both procedures.
