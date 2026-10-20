# Charter: ClickUp
Date: 2026-10-16

| Item | Value |
|---|---|
| Goal | Document ClickUp's board view, task detail view and custom fields well enough that a team that never used ClickUp can rebuild them, and say what would block such a clone from launching |
| Requested by | The product owner of this study (a founder in Brazil), through a parent agent session |
| Scope | Board view, task detail view, custom fields (create each type, fill, required, delete with values, rendering on the board and in the task). Barrier scan for these features |
| Out of scope | List, calendar, Gantt and other views; docs, chat, goals, dashboards, AI features; automations beyond their entry points; mobile and desktop apps |
| Clone target market | Small and medium businesses in Brazil (stated by the requester) |
| Priorities | P1: the three named areas. P2: the core task loop they rest on (create, open, edit, complete). P3: every custom field type |
| Mode | Unattended. No questions to the user; blocks go to "Needs human" in `STATUS.md` |
| Environment level | L2 if creating a workspace is free (no billing, no trial, no terms); otherwise L3 in a private space |
| Write authorization | "Run a real reverse engineering study of ClickUp with RES"; "Environment: L2, a new empty ClickUp workspace named '🧪 [RE] ClickUp study' under [the user's] login, only if creation is free" |
| KB language | English (the example is public) |
| Terms of service | See "Terms" below |

## Terms

| Document | Clause | URL | Source |
|---|---|---|---|
| Terms of Service | 1.5: users may not disassemble, decompile or reverse engineer the Service | https://clickup.com/terms | [doc SRC-038] |
| Terms of Service | 3.9 and 4.13: no scraping and no derivative or competing uses of the Service | https://clickup.com/terms | [doc SRC-038] |
| Developer Terms | 3: no API use for benchmarking or a competitive purpose | https://clickup.com/terms/developer-terms | [doc SRC-040] |

This study observed only the UI of the user's own test workspace and did not call the public API. Whether a clone built from it is allowed is the user's decision with counsel (BR-011, Q-005); it is listed under "Needs human" in `STATUS.md`. The study followed the user's original instruction.
