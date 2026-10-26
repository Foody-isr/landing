# Continue shopping reliability review — 26 October 2026

Repeated cart activation before Next commits its pathname transition could push
identical local cart history entries. Continue shopping then went back to the
same open cart, whose closing guard ignored later clicks. The controller now
checks the current browser entry synchronously before pushing. One activation
sequence creates one entry; one click returns to the preserved menu, and Forward
can reopen the cart.

This restores the existing guest ordering procedure. No control, label, setting,
permission, cart content, price, payment flow or translation changes. Existing
French, Hebrew and English guest ordering guides and the public support corpus
remain accurate. Web records the exact reviewed source digest in
`docs/help/reviews/cart-continue-shopping.json`.

Inventory scope: Web only. Other services retain the exact source evidence from
Landing commit `e2f3667c58ccecdfc445cf4f46ade3c10ebcfba4`; they are not revalidated
by this correction. No public corpus or API/Admin/POS contract changes. Pin this
immutable documentation commit in Web before CI; verify development and promote
the exact staged artifact.
