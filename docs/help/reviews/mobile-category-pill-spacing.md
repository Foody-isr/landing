# Mobile category pill spacing review — 26 October 2026

The mobile pill and rounded category controls are visually smaller, with internal
space above and below their painted backgrounds and a 44px touch target. The
category style setting, labels, menu/group separation, sticky behavior, horizontal
scrolling and color controls retain their documented behavior. No merchant or
guest procedure changes, so the current French, Hebrew and English guides and
public support corpus remain accurate. The exact CSS digest is reviewed in Web
`docs/help/reviews/mobile-category-pill-spacing.json`.

Inventory scope: Web only. The other five services retain the exact source
evidence from Landing commit `129597e5380f8d66b4b54383ed70532d405b2bce`; they are
not revalidated by this geometry correction. No API/Admin/POS contract changes
or public corpus changes are introduced. Pin this immutable documentation commit
in Web before CI, verify development, then promote the same staged artifact.
