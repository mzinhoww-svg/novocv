# Clone requirements: Pipedrive
Updated: 2026-10-16 · Status: draft

## Problem and users

Small and medium B2B sales teams in Brazil (2 to 50 sellers) need a pipeline that tells each seller what to do next, every day, and makes closing a deal fast. The studied product does this with one rule: every open deal should have a next activity. The clone keeps that rule and its signals, and adds what Brazilian teams need to buy it: WhatsApp, Portuguese, BRL, local invoicing and LGPD compliance.

Users: sellers (daily board and activities), sales managers (pipelines, stages, lost reasons), company admins (users, visibility, billing).

## Launch blockers

From `clone/barriers.md`, severity `blocks launch` and `adds lead time`, with who clears each one and when.

| Barrier | Severity | Owner | Start by |
|---|---|---|---|
| BR-007 LGPD processor duties (DPA, records, incident process) | blocks launch | founder with counsel | month 1 |
| BR-009 NFS-e and CBS/IBS for the clone's own invoices | blocks launch | founder with an accountant | month 1 |
| BR-001 Terms of the studied product | blocks launch | counsel | before building on this study |
| BR-005 WhatsApp Business Platform onboarding | blocks feature (required to sell) | engineering lead | month 1 |
| BR-002 Google restricted scopes and CASA | blocks feature | engineering lead | month 1 |
| BR-004 Microsoft publisher verification and Graph | adds lead time | engineering lead | month 2 |
| BR-003 Google Calendar sensitive scopes | adds lead time | engineering lead | month 2 |
| BR-008 Transfer clauses or São Paulo hosting | adds lead time | founder | month 1 |

## Core loop

1. The seller opens the board of a pipeline (S-001). Each card shows whether its next activity is overdue, today, in the future or missing (R-001), and the board is ordered by urgency (R-003).
2. The seller works the top cards: from the card icon or the deal page, completes today's activity (R-013).
3. When it was the last open activity, the product asks for the next one with sensible defaults and the day's agenda beside the form (R-014, R-016, R-017). Cancel is allowed and leaves a visible warning (R-015).
4. The seller moves deals through stages in one click (R-030) and closes them as won or lost (R-022, R-027).
5. The badge in the navigation keeps the count of overdue and due-today activities (R-012).

## Scope by priority

| Priority | Feature | Rules | Screens | Notes |
|---|---|---|---|---|
| P1 | F-001 Pipeline board | R-001 to R-011 | S-001 | Four activity states, urgency order, weighted totals, rotting |
| P1 | F-003 Activities | R-012, R-017, R-019 to R-021, R-047 | S-001, S-002, S-004 | Form with day agenda and 15-minute slots |
| P1 | F-004 Next-activity rule | R-013 to R-018 | S-001, S-002 | Improve the default type (see implications) |
| P1 | F-002 Deal detail | R-030, R-031 | S-002 | Stage bar, Focus, History |
| P1 | F-005 Won | R-022 to R-026 | S-002 | Ask what to do with open activities |
| P1 | F-006 Lost | R-027 to R-029 | S-002 | Reason list; comment kept as a note |
| P2 | F-007 Add deal | R-037 to R-040 | S-001 | Person or organization required |
| P2 | F-008 Pipeline editor | R-041 to R-043 | S-003 | Reject rotting of 0 days |
| P2 | F-009 Delete and restore | R-032 to R-036 | S-002, S-003 | Delete activities with their deal |
| P2 | F-015 WhatsApp | none observed | none | Required to sell in Brazil; waits for BR-005 |
| P3 | F-011 Quick add | R-046 | S-001 | One-key shortcuts |
| P4 | F-012 Visibility | R-048 | S-001 | Four levels from day one |
| P5 | F-013 Email sync, F-014 Calendar sync | none observed | none | After BR-002, BR-003, BR-004 |
| P5 | F-016 E-signature | none observed | none | Through a Brazilian provider (BR-006) |

## Non-goals

- Copying the studied product's brand, icons, illustrations or text (BR-014).
- Leads inbox, campaigns, projects, products, AI assistant and reports in the first release.
- Unofficial WhatsApp automation (BR-005).

## Data model

See `data-model/erd.mmd` and `data-model/types.ts`.

## Build order

1. Start long lead-time approvals and launch blockers (they run in parallel): BR-007, BR-009, BR-005, BR-002, BR-008, then BR-004 and BR-003. Get counsel's answer on BR-001.
2. Data model and persistence: E-001 to E-010, soft delete with 30-day restore, visibility levels.
3. Core loop screens: S-001, S-002, C-003.
4. Rules in `clone/parity.md`, P1 first (board, activities, next-activity rule, won, lost).
5. Secondary features after the barriers they depend on: WhatsApp, email and calendar sync, e-signature.

## Open questions

See `questions.md`.
