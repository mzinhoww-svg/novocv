# Findings

## Problems

| ID | Finding | Severity | Where | Evidence |
|---|---|---|---|---|
| B-001 | The won follow-up form ignores the company's configured activity type and delay: it opens with today and the first type | Medium | C-003 after C-004 | [obs EV-036] |
| B-002 | The next activity always defaults to the first type in the company list, not the type just completed; with many custom types the seller changes it almost every time | Medium | C-003 | [obs EV-022] [net EV-031] |
| B-003 | Deleting a deal leaves its activities open and not deleted, and the confirmation does not mention activities; the docs say they are deleted | Medium | S-002 | [obs EV-045] [net EV-047] [doc SRC-014] |
| B-004 | Winning or losing a deal does not ask what to do with its open activities; they stay pending on a closed deal | Medium | S-002 | [obs EV-035] [obs EV-042] |
| B-005 | Free-form lost reasons cannot be entered even with "Allow free-form reasons" on, when predefined reasons exist | Low | C-005 | [obs EV-041] |
| B-006 | The board does not re-sort after an in-place change; a deal that just lost its next step stays at the top until reload | Low | S-001 | [obs EV-024] |
| B-007 | Rotting accepts 0 days, which marks every deal in the stage as rotten the moment it enters | Low | S-003 | [obs EV-008] [obs EV-016] |
| B-008 | English interface mixed with Portuguese dates and words ("e", "Hoje às", "outubro 16º") | Low | S-002, C-003 | [obs EV-022] [obs EV-027] |
| B-009 | Pipeline deletion defaults to moving the deals into another pipeline; a hurried confirm can push test or old deals into a live pipeline | Low | C-008 | [obs EV-060] |
| B-010 | Several tip and upsell banners on one deal page (automation suggestion, field descriptions, pipeline-specific fields) | Low | S-002 | [obs EV-032] [obs EV-035] |
| B-011 | The won modal waits about 4 seconds for report calls before it appears | Low | C-004 | [obs EV-034] [net EV-063] |

## Strengths

- One clear sales rule in the product: every open deal should have a next activity, enforced by a prompt at the exact moment the last one is completed, never by blocking [obs EV-022].
- One icon with four states on every card, and the warning icon is itself the button to schedule [obs EV-013] [obs EV-018].
- Default order by urgency: overdue, today, no next step, future [obs EV-010].
- Activity form with the day agenda beside it, the next free 15-minute slot, and Busy set automatically [obs EV-023].
- A global badge of overdue and due-today activities [obs EV-010].
- Lost requires a reason from a list; the comment is kept as a pinned note [obs EV-042].
- Pipeline deletion forces a decision about its deals [obs EV-060].
- Deleted deals keep a page with a clear permanent deletion date and a Restore button [obs EV-046].
- The stage bar shows time spent per stage and moves the deal in one click [obs EV-028].
