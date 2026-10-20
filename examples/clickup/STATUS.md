# Status: ClickUp
Updated: 2026-10-16 · Session: s01 · Phase: 7 Close (study ended)
Environment: L2 · Sandbox: 🧪 [RE] ClickUp study (new workspace, Free Forever) · Open ledger rows: 0

## Summary
- Covered: board view (F-001 to F-007), task view (F-009 to F-015) and custom fields (F-016 to F-022): 55 rules, 19 components, 5 screens, 14 entities, 14 production barriers. 22 field types (every non-AI type except Button and Rollup) were created, filled where possible and shown on cards; a field with a value was deleted and restored.
- Not covered: drag and drop (not automatable here), WIP limits and required fields (Business plan), task-type fields (Business Plus), AI fields (credits), Files, Button and Rollup fields, anything that needs a second person.
- Decide: whether the ClickUp terms allow building a clone from this study (Q-005), and whether to open an L1 trial account for the Business-plan features.

## Next actions
1. F-005 drag and drop: a person drags cards while the agent records, or a Playwright session with real mouse events (Q-003).
2. F-019 required fields and F-021 task-type fields: Business trial in an L1 account; probe where creation is blocked and the message (Q-010).
3. Validate the barrier weights and costs with 10 to 20 Brazilian SMB buyers and two quotes per provider (Q-006, Q-007), then fix the PRD build order.

## Needs human
- Terms: ClickUp Terms 1.5, 3.9 and 4.13 and Developer Terms 3 restrict reverse engineering and competitive use (`00-charter.md`, BR-011). Decide with counsel whether a clone may rely on this study (Q-005).
- A dedicated trial account in a separate browser profile (L1) for tests that need a second person (mentions, assignments, permissions, guests) or a Business plan (required fields, WIP limits, pinned fields, Tag Manager).
- The test workspace is kept by instruction (L-001). Delete it when it is no longer useful: Settings > Workspace > Delete workspace.

## Blocked
- F-005 Drag and drop: synthetic drag does not move cards and freezes the page script (EV-046).
- F-008 WIP limits and F-019 Required fields: Business plan.
- F-021 task-type fields: Business Plus.
- F-023 AI fields: AI credits.

## Last session
- s01 (2026-10-16): created the L2 workspace, covered F-001 to F-022, tore everything down. See log/2026-10-16-s01.md.

## Residuals
- Trash, restorable until about 2026-11-15 and then deleted forever by ClickUp: the list "[RE] Board study" with its 54 tasks, the tag "[re] tag-a" and the task "[RE] tag cleanup". The agent does not empty the Trash (permanent deletion is the user's call).
- Global search still listed the deleted tasks minutes after the list went to Trash (B-016).
- Product telemetry that cannot be restored: "viewed" marks on the study tasks (EV-058) and per-user UI entries for the Create button (EV-140).
- The kept workspace holds only its onboarding defaults (Space, List, two channels; L-003) and 7 system "Custom Fields in Workspace" that the study did not create (Q-002).
- The last-used workspace was set back by opening the production workspace once, read only (L-002).
