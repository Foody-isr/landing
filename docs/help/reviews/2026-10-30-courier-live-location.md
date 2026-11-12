# Courier live location — release review

Reviewed against Admin `ab567d1d`, API `84ba64c` and Landing `e828d4e9` on develop.
The report is a courier whose map never appeared to move. The courier phone's
permission and foreground state could not be confirmed, so this preparation does
not claim to diagnose the live phone or certify background GPS.

Confirmed defects: Courier mode did not render received GPS positions or consume
courier location events. The reporter discarded a final reading inside its throttle
window and hid transmission failures, GPS timeouts and unavailable acquisition.

The correction displays the last accepted position in both delivery views, labels
the marker separately from the departure triangle, exposes receipt time and missing
or stale GPS, surfaces acquisition/permission/transmission failures with Retry, and
resumes acquisition when Foody returns to the foreground. Owners/superadmins viewing
another courier never report their own device position. Completed or draft runs do
not start a reporter. GPS updates do not call routing or address-provider APIs.

French, Hebrew and English courier, dispatch and support procedures are updated.
The API embedded public corpus is copied from the same export. Other service source
inventory entries are retained from the exact Landing develop baseline and are not
revalidated. Shared-file exemptions name only feature scopes whose procedures and
behavior are unchanged by these GPS changes.

Validation uses synthetic API, GPS, WebSocket messages and map tiles. It covers
movement, a trailing throttled reading, unavailable/denied GPS, transmission failure,
recovery, stale positions, selected-courier isolation and observer non-reporting.
It does not change any real delivery, send a customer message or consume Google APIs.

The owner explicitly authorized pushing, development deployment and subsequent
production promotion on 30 October 2026. Pin the immutable Landing documentation
commit in Admin and API before PR readiness. Publish the guides/corpus with the
matching verified Admin artifact. Production must promote the same development
artifacts, after development verification; no synchronization to main is requested.

Validation completed locally:
- All 81 courier/dispatcher browser cases passed across the full run and the focused
  rerun of the address-retry selector adapted for the separate GPS Retry control.
- Admin lint, TypeScript and production build passed; lint reports existing warnings
  outside the changed code.
- Landing lint, TypeScript, production build, check:help and all 47 help tests passed.
- API support tests passed; only the embedded documentation JSON and its contract
  changed in the API, with no Go runtime or schema changes.
- Admin, API and Landing source/help contracts pass against origin/develop. The API
  corpus differs only in the three reviewed guides, in all three languages.

Foreground-return follow-up: the existing correction already restarts acquisition
on visibilitychange when Foody becomes visible. A new WebKit regression simulates
leaving Foody, returning, acquiring another GPS fix and transmitting it for the
same active restaurant/route, with no order completion or paid address recheck.
The test passed against the production build. This is engine-level synthetic
validation, not a physical iPhone/Safari acceptance test. This follow-up changes
tests only, so the published procedures and source/corpus hashes remain unchanged.
