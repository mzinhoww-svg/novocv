# Coverage

Values: `todo`, `partial`, `done`, `blocked`, `n/a`. The work queue is this table, top to bottom.

| Feature | Anatomy | States | Interactions | Rules | Data | Network | Keyboard and a11y | Persistence | Design | Notes |
|---|---|---|---|---|---|---|---|---|---|---|
| F-001 Board columns | done | done | done | done | done | done | partial | done | done | S-001, C-002, R-001, R-002, R-009 |
| F-002 Board card | done | done | done | done | done | done | done | done | done | C-001, C-004, C-005, C-009, C-010; R-003 to R-007, R-017 |
| F-003 Create in column | done | done | done | done | partial | blocked | partial | done | done | C-007, R-010; create request not captured (recorder off) |
| F-004 Customize view and drafts | done | done | partial | done | done | done | todo | done | done | C-003, R-008, R-012 to R-015; Save view, Autosave, Private, Protect, Default not clicked |
| F-005 Drag and drop | partial | blocked | blocked | partial | n/a | blocked | partial | blocked | todo | blocked: drag not automatable (EV-046); R-019 from docs; Q-003 |
| F-006 Bulk selection | done | partial | partial | todo | n/a | todo | todo | n/a | done | C-006; no bulk action run |
| F-007 Many items | n/a | done | done | done | n/a | done | n/a | n/a | n/a | R-016 |
| F-008 WIP limits | blocked | blocked | blocked | partial | n/a | blocked | blocked | blocked | blocked | blocked: plan (Business) [doc SRC-011] |
| F-009 Task view header and layout | done | done | done | done | done | done | partial | done | partial | S-002, C-011, R-020 to R-024, R-027, R-032; keyboard walk not done |
| F-010 Description | done | partial | partial | done | done | blocked | todo | done | partial | C-012, R-025; saved through the collaborative editor socket (not capturable) |
| F-011 Subtasks | done | partial | partial | done | done | done | todo | done | partial | C-013, R-028 |
| F-012 Checklists | done | done | partial | done | done | done | partial | done | partial | C-014, R-030, R-031 |
| F-013 Relationships and dependencies | done | partial | partial | done | done | done | todo | done | partial | C-015, R-029; plain links and custom relationships not tested |
| F-014 Activity and comments | done | partial | partial | done | done | done | todo | done | partial | C-016, R-026; mentions and threads need a second person (L1) |
| F-015 Fields section in task | done | done | done | done | done | done | partial | done | partial | C-017, R-043, R-044; keyboard entry not walked |
| F-016 Create custom fields | done | partial | done | done | done | done | todo | done | partial | C-018, R-033, R-034, R-040; 22 of the UI types created; Button (needs an automation), Rollup and AI types not created |
| F-017 Fill custom field values | done | partial | done | done | done | done | todo | done | done | C-019, R-035 to R-038, R-044 to R-047; Files and Relationship values not set; invalid input not tried |
| F-018 Custom fields on cards | done | done | done | done | done | done | n/a | done | done | C-019, R-048 to R-050 |
| F-019 Required fields | partial | blocked | blocked | partial | partial | blocked | blocked | blocked | partial | blocked: plan (Business) [doc SRC-003]; R-041 observed on Free, R-042 from docs; Q-010 |
| F-020 Delete field with values | done | done | done | done | done | partial | todo | done | done | S-005, R-051 to R-054; delete method inferred from the preflight; restore request not captured |
| F-021 Field scope and manager | done | partial | partial | partial | done | partial | todo | done | partial | S-003, R-055; only list locations tried; task-type fields need Business Plus |
| F-022 Free plan 60 uses | n/a | partial | n/a | partial | done | done | n/a | done | n/a | R-037; limit not reached (18 of 60); Q-008, Q-009 |
| F-023 AI fields | partial | blocked | blocked | blocked | partial | blocked | blocked | blocked | blocked | blocked: AI credits; presets seen in the type menu (EV-095, EV-096); BR-014 |
| F-024 Statuses | partial | partial | partial | partial | partial | todo | n/a | partial | partial | R-011 |
| F-025 Tags | partial | partial | done | done | done | done | n/a | done | partial | R-006 |
| F-026 Realtime | n/a | n/a | done | done | n/a | blocked | n/a | n/a | n/a | R-018; WebSocket not capturable |
| F-027 Integrations | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | n/a | barrier scan only (clone/barriers.md) |
