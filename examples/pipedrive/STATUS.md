# Status: Pipedrive
Updated: 2026-10-16 · Session: s01 · Phase: 7 Close
Environment: L3 · Sandbox: 🧪 [RE] Sandbox pipeline in the production company (removed) · Open ledger rows: 0

## Summary
- Covered: pipeline board, deal detail, activities and the next-activity rule, won, lost, deal creation, pipeline editor, deletion (F-001 to F-009): 46 rules, 4 screens, 8 components, 4 flows, 10 entities, 15 production barriers for a Brazilian SMB clone.
- Not covered: email and calendar sync, WhatsApp and e-signature (connecting them reaches people, A5: public sources only), company settings (A4, read only, not exercised), anything that needs a second user, the activities list beyond its toolbar.
- Decide: get counsel's view on Pipedrive's terms before building on this study (BR-001), and create a trial account (L1) to answer Q-001 to Q-009.

## Next actions
1. In an L1 trial with two users: answer Q-001 to Q-009 (first-click behavior, restore of activities, free-form lost reasons, visibility for another user, realtime).
2. Study the deal list view, the forecast view, card customization and drag-to-close (Not tested items of S-001) in L1.
3. Start the month-one barriers from `clone/prd.md`: BR-007, BR-009, BR-005, BR-002.

## Needs human
- Pipedrive Terms s.4.1 forbid reverse engineering and using the service to build a competing product (SRC-031). Decide with counsel whether this study may be used (BR-001, Q-010).
- Create a dedicated trial account (L1) in a separate browser profile, with a second user, for permissions, realtime and notifications (Q-006, Q-009) and for the integrations (F-013 to F-016) with test mailboxes and calendars you own.
- Check by hand whether the first click on Won, Lost and item menus is ignored in a focused window (Q-001).

## Blocked
- F-013 Email sync, F-014 Calendar sync, F-015 WhatsApp, F-016 E-signature: connecting accounts or sending documents is A5. Needs L1 with the user's own test accounts.
- F-017 Company settings: A4 at L3; read only, not exercised.
- F-012 Visibility as seen by other users: needs a second user (L1).

## Last session
- s01 (2026-10-16): preflight, sandbox pipeline with 12 deals and 12 activities, deep dive of F-001 to F-009 with network capture, teardown verified through the API. See log/2026-10-16-s01.md.

## Residuals
- The 12 sandbox deals and the sandbox organization are in Pipedrive's deleted state and remain restorable for 30 days (until about 15 November 2026); Pipedrive then purges them. Deleted activities and the deleted note are not listed in the UI.
- Pre-existing, not touched: a note from an earlier manual study, attached to a deal deleted in that study, unreachable in the UI.
- Nothing created by this session is active: no `[RE]` pipeline, deal, organization, activity or note is returned by the API or search.
