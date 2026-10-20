# Environment

Published copy: workspace IDs, the production workspace and earlier objects are replaced by placeholders. In a real KB this file keeps the real identifiers for the location check, and `pack-kb` leaves `sandbox/` out of the handoff.

| Item | Value |
|---|---|
| Level | L2 Separate workspace (created 2026-10-16; creation had no payment form, no plan choice and no terms) |
| Browser tool | Claude in Chrome, in the user's own Chrome, one tab opened by the agent |
| Browser profile | The user's default profile (production login present; the write gate is the guard) |
| Account | The user's own ClickUp login (owner of the test workspace) |
| Plan and trial end | Free Forever, 1 seat, no payment method, no trial |
| Window size | Viewport 1456 × 835 (the user's window; not resized) |
| Theme | Dark (user preference, not changed) |

## Location check

Before every A2, A3 or A4 action the screen must show these values.

| Identifier | Expected value |
|---|---|
| Workspace name | 🧪 [RE] ClickUp study (top-left switcher) |
| Workspace ID in URL | `app.clickup.com/[test-workspace-id]/...` |
| Sandbox breadcrumb | Space / List, or spaces created by the study with the `[RE]` prefix |
| Sandbox URL pattern | `https://app.clickup.com/[test-workspace-id]/*` |
| Sandbox ID | [test-workspace-id] |

Never write here (production):

| Identifier | Value |
|---|---|
| Production workspace | The company workspace ([production-workspace-id]). Read only, and only when unavoidable (it was the last-used workspace at the start) |
| Other workspace | Another workspace of the user. Not opened |
| Pre-existing objects | A sandbox list from earlier work in the production workspace ([earlier-list]). Not touched |

## Preflight

| Check | Result | Date |
|---|---|---|
| Members who could be notified | 1 member: the operator (owner). No guests. Nobody else can be notified | 2026-10-16 |
| Automations in the write scope | Automations > Manage: Active (0) for the Space | 2026-10-16 |
| Webhooks and API apps | None; no API token generated; the study will not open "ClickUp API" token pages | 2026-10-16 |
| Integrations (chat, email, calendar, Zapier) | App Center > Connected: "No connected apps" in every category | 2026-10-16 |
| Email and calendar sync | No email or calendar app connected in this workspace | 2026-10-16 |
| Plan and trial | Free Forever, $0, 1 seat, no payment method, no trial | 2026-10-16 |

Expected side effects of L2 (each has a ledger row): the last-used workspace switched to the test workspace (L-002); onboarding created a Space, a List and two Channels (L-003); welcome emails may reach the operator only.

## Baseline counts

| Record type | Start | End |
|---|---|---|
| Spaces | 1 ("Space", created by onboarding) | 1 |
| Lists | 1 ("List") | 1 (the study list is in Trash) |
| Tasks | 0 | 0 in List; study tasks in Trash with their list |
| Custom fields (Custom Field Manager, all) | 0 | 0 |
| Channels | 2 (Welcome, General) | 2 |
| Automations | 0 | 0 (none created) |
| Members | 1 | 1 |

Differences from the baseline: none in live records. Trash holds the list, one tag and one task for 30 days; tags count 0 at the start and 0 at the end.
