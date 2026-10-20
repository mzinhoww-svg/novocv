# Open questions

| ID | Question | Why it matters | How to answer | Status |
|---|---|---|---|---|
| Q-001 | Confirm: do card field values (chips) render later than card titles in a visible tab, and by how much? | Perceived performance target for the clone | Open the board in a foreground tab and record a video or Performance trace | open |
| Q-002 | Confirm: where do the 7 "Custom Fields in Workspace" listed in the view Fields panel come from (chat posts, meeting notes, docs)? | Data model: hidden system fields per object type | Inspect `/customFields/v2/field` response or open a chat post's fields | open |
| Q-003 | Confirm: drag and drop details: status change on drop, order within a column, multi-card drag, drop preview and animation, whether columns can be reordered | Core board interaction (F-005) | A human performs drags while the agent records, or a Playwright session with real mouse events | open |
| Q-004 | Confirm: board Sort options and how sort interacts with manual order | View model (`sorting.fields`) | Open Sort, apply one, reload | open |
| Q-005 | Counsel: does building a clone from this study conflict with ClickUp's Terms 1.5 (no reverse engineering) and 4.13, and with the Developer Terms ban on competitive use? | Legal risk of the whole project | Brazilian counsel reads SRC-038 and SRC-040 | open |
| Q-006 | Confirm market weights: which of these do Brazilian SMB buyers require before buying a work-management tool: WhatsApp, Google and Microsoft calendar sync, Slack, BRL pricing with Pix or boleto, NFS-e, SOC 2, SSO? | Orders the PRD build list (barriers BR-001 to BR-014) | Interviews or a short survey with 10 to 20 target buyers; sales calls | open |
| Q-007 | Confirm costs and lead times for: an NFS-e provider with the national API, Pix Automático through a Brazilian payment provider, a SOC 2 Type 1 audit, enterprise SSO and SCIM | Budget and roadmap | Quotes from two providers each | open |
| Q-008 | Confirm: does deleting a field (or a value) give Free Forever uses back, and what happens at 60 (block, warning, read-only)? | Plan limits the clone may copy or avoid | Watch the entitlement counter while deleting a field with values; fill values up to 60 in a throwaway workspace | open |
| Q-009 | Confirm: do Formula fields count as uses? The docs say yes (SRC-043); the counter did not move when a formula was configured | Accurate free-plan model | Set inputs on a new task and compare the counter before and after the formula computes | open |
| Q-010 | Confirm: required-field enforcement on Business: where it blocks (inline create, task view, import, API), the message, and subtasks | P1 feature named by the requester | Business trial in an L1 account | open |
| Q-011 | Confirm: the HTTP method and response of field delete and of Restore from Trash | API parity for delete and restore | Repeat with the api-shapes recorder installed on the Trash page | open |
| Q-012 | Confirm: Rollup fields, Button fields with an automation, and AI fields (credits, refresh, errors) | Remaining field types | L1 account with AI credits; build a related list for rollups | open |
