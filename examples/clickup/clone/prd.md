# Clone requirements: ClickUp
Updated: 2026-10-16 · Status: draft for the three studied areas

## Problem and users

Small and medium businesses in Brazil that plan and track team work: an owner or manager sets up lists and fields, a few team members move tasks across a board and fill in task details. They want a board that reflects their own workflow (statuses), task records they can extend with their own fields (money in BRL, phone numbers, addresses, dropdowns) and an interface in Portuguese with Brazilian formats.

## Launch blockers

From `clone/barriers.md`, severity `blocks launch` and `adds lead time`, with who clears each one and when.

| Barrier | Severity | Owner | Start by |
|---|---|---|---|
| BR-001 LGPD processor duties and transfers | blocks launch | Founder with counsel | Week 1 |
| BR-002 NFS-e national standard and CBS/IBS fields | blocks launch | Founder with accountant and an invoicing provider | Week 1 |
| BR-010 Own name and visual identity | blocks launch | Founder and designer | Week 1 |
| BR-011 ClickUp terms review | adds lead time | Counsel (Q-005) | Before any public launch |
| BR-003 Recurring billing (Pix Automático, boleto, cards) | adds lead time | Founder with a payment provider | Week 2 |
| BR-005 Microsoft publisher verification | adds lead time | Engineering | Only if Outlook sync is in the first release |
| BR-006 Slack review | adds lead time | Engineering | After 10 active workspaces |

## Core loop

1. Create a list with statuses; the board shows one column per status (R-001).
2. Create tasks in a column (R-010), edit fields on the card (R-004 to R-007, R-017), move them by drag or by completing (R-003, R-019).
3. Open a task (R-020): description (R-025), subtasks (R-028), checklist (R-030), dependencies (R-029), comments (R-026), custom fields (R-043 to R-047).
4. Define the list's own fields (R-033) and show them on cards (R-048 to R-050).

## Scope by priority

| Priority | Feature | Rules | Screens | Notes |
|---|---|---|---|---|
| P1 | F-001 Board columns by status | R-001, R-002, R-009, R-011 | S-001 | |
| P1 | F-002 Card and inline edits | R-003 to R-007, R-017 | S-001 | |
| P1 | F-003 Create in a column | R-010 | S-001 | |
| P1 | F-004 Customize view, drafts | R-008, R-012 to R-015 | S-001 | Decide whether to keep drafts (see implications) |
| P1 | F-005 Drag and drop | R-019 | S-001 | From docs only; Q-003 |
| P1 | F-009 to F-014 Task view | R-020 to R-032 | S-002 | |
| P1 | F-015 Fields section | R-043, R-044 | S-002 | |
| P1 | F-016 Field types and form | R-033, R-034, R-040 | S-002, S-003 | Start with the 17 non-AI types the API documents |
| P1 | F-017 Values per type | R-035 to R-038, R-045 to R-047 | S-002 | BRL and Brazilian phone formats by default |
| P1 | F-018 Fields on cards | R-048 to R-050 | S-001 | |
| P1 | F-019 Required fields | R-041, R-042 | S-002 | Offer on every plan (implications) |
| P1 | F-020 Delete, Trash, restore | R-051 to R-054 | S-002, S-005 | 30-day Trash with values kept |
| P1 | F-021 Field manager and scope | R-055 | S-003 | List and Space locations first |
| P2 | F-007 Many items | R-016 | S-001 | Paging per column |
| P2 | F-024, F-025 Statuses and tags | R-011, R-006 | S-001 | |
| P2 | F-026 Realtime | R-018 | S-001 | BR-013 |
| P3 | F-022 Usage limits | R-037 | | Only if the pricing needs a field-use cap |
| P3 | F-023 AI fields | | | BR-014; later |

## Non-goals

- Docs, chat, goals, dashboards, automations, time tracking, other view types (out of the studied scope).
- AI fields and AI suggestions in the first release.
- Copying ClickUp's names, icons, colors or copy (BR-010; see `clone/implications.md`).

## Data model

See `data-model/erd.mmd`, `data-model/types.ts` and the entity files E-001 to E-014.

## Build order

1. Start long lead-time approvals and launch blockers (they run in parallel): BR-001, BR-002, BR-010, BR-003, counsel on BR-011.
2. Data model and persistence: workspace, space, list, status, task, custom field, value, history item; one change log row per field write (EV-007 pattern).
3. Core loop screens: board (S-001) and task view (S-002).
4. Rules in `clone/parity.md`, P1 first.
5. Field manager (S-003) and Trash (S-005).
6. Secondary features, after the barriers they depend on (calendar and WhatsApp integrations after BR-004 and BR-007).

## Open questions

See `questions.md`, especially Q-003 (drag details), Q-006 (what Brazilian buyers require), Q-008 to Q-010 (limits and required fields).
