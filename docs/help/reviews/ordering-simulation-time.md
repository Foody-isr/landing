# Ordering simulation reference time — 30 October 2026

The owner requested a selectable ordering day/time in the existing simulator.
The existing push/dev/prod authorization continues for this delivery workflow.

A protected restaurant-scoped GET provides the actual server clock and effective
timezone; POST accepts a local minute and current basket, requires settings,
menu and order-management access, checks service activation and tenant ownership,
and rejects malformed, nonexistent or repeated daylight-saving minutes. Request
size and quantities are bounded. Responses are not cached. No clock is accepted
by public calendars or real checkout. Existing public resolution timing is kept.

The UI displays weekday and timezone, separates ordering and receiving dates,
advances a receiving date that would precede the ordering day, and reloads the
server reference with Now. Changing inputs hides results. Draft settings block
evaluation; current ready stock and rules are used, without historical or courier
capacity reconstruction. No order, stock reservation, payment or message is made.

Targeted Go race regressions cover the requested Monday/Tuesday and late-Monday
rolls, the four-hour cake plus transport, Friday closing, Sunday/remote bans,
pickup without transport, ready quantity coverage, foreign items, missing scope,
DST and public clock-spoof attempts. Browser fixtures cover FR/EN/HE, server time
independent of the browser, Now refresh, stale results and invalid server clocks.
Complete API validation will run once on the frozen feature head before readiness;
Admin and Landing run their complete checks locally and required PR CI.

Preserve Web, POS, Backoffice and Landing application evidence from Landing develop
0bd42f971827ea4d9a239977c24f288d28705624. Capture clean API/Admin checkpoints,
synchronize the published corpus and pin immutable documentation before PR CI.
One feature PR per affected service; development verification precedes promotion
of those exact artifacts. No tenant configuration conversion or real-order write
is needed for this follow-up.
