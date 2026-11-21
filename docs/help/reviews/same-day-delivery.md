# Same-day delivery and settings audit — 29 October 2026

This coordinated API/Admin/guest release adds an optional policy for bookings
received for the restaurant's current local calendar date. Future dates retain
the existing zone calendar, ordering mode and preparation rules. Referenced zones
supply geography independently of their weekdays and fees. The restaurant can
confirm today's precise time after the customer reviews an estimate. Courier
capacity remains an operational check; there is no new payment-provider action
or WhatsApp dispatch trigger.

The audit fixes stale whole-object hours saves, whole-row restaurant profile
writes, unversioned zone writes, conflicting reservation-mode activation and
invalid delivery minimums. Legacy custom slot-hour precedence, null-calendar
inheritance and unrestricted coverage when all classic zones are inactive are
preserved and explained. An enabled new policy requires active coverage and
protects its referenced zones. No production restaurant configuration is changed
by deployment; no live orders or messages are used for acceptance.

Review evidence is synthetic API tests (product readiness, quantities, transit,
Friday geography, Sunday, future bookings, frozen order promises and concurrent
saves), FR/HE/EN browser checks and the affected services' complete validation.
The detailed French operational audit is in the API repository at
`docs/audits/delivery-settings-2026-10-29.md`.

The delivery-zones, preorders, order-detail and guest-ordering procedures are
updated in all three languages. Source-scoped reviews in the consumers cover
unchanged feature classifications sharing a file. POS, Backoffice and Landing
application source blocks and surfaces retain the exact pre-review inventory;
those checkouts are not claimed as reviewed for this change. The inventory and
public corpus must match the final source checkpoints, and consumer contracts
must pin the immutable Landing documentation commit before PR readiness.

Deploy the compatible API schema/policy first, then the guest client, then Admin,
with the matching public guide and embedded support corpus. Verify development
before promoting the same immutable artifacts under the user's explicit dev/prod
release request. Tenant activation is a separate configuration action: review the
actual zone weekdays, local coverage and Saturday decision first.
