# Courier map marker visibility

Reviewed against Admin develop `30d6bddf169c3608f52254722ca9054eb25bda71`,
API develop `d692fcc9c1ea0915d64d8ba1ce28def358b31025` and Landing develop
`6beef053cca4401a8e906bf3ff1949934c6770b4`.

The existing received-position marker was an 18px dot with 40% opacity when old.
The correction uses a 44px avatar with a permanent localized label and places it
above selected delivery pins. Old positions remain visible and explicitly labelled
old; the receipt time remains in the existing location status. It never invents a
position when none was received or treats an old fix as live GPS.

Initial route framing, resize and the existing courier Fit the whole route action
include the latest received courier position. Subsequent GPS updates move the
avatar without refitting the map. Acquisition, permissions, reporter throttling,
WebSocket filtering, delivery actions and API contracts are unchanged. GPS marker
movement itself makes no provider request; framing can load map tiles under the
existing provider usage rules.

This is a user-visible rendering correction. The courier, dispatcher and support
procedures are updated in French, Hebrew and English, with the identical public
corpus embedded in the API. Unrelated service inventory blocks and surfaces are
retained exactly from the reviewed Landing baseline. The API's scoped review
exempts only unrelated feature guides whose content and procedures are unchanged;
it does not exempt the courier guidance from translated updates.

Synthetic browser regressions cover overlapping selected-stop and courier pins,
readable old-position labels, an initially distant position, explicit reframing,
GPS movement without recentering, missing positions and observer non-reporting.
They do not inspect a physical courier phone or modify real deliveries.

The user's existing instruction authorizes pushes and development deployment,
followed by production promotion after verification. Production must promote the
same development-tested Admin, Landing and API artifacts; no main synchronization
or migration is required. Pin this immutable Landing commit in Admin and API.
