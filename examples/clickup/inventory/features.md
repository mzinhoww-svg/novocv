# Features

Priority: P1 named by the user, P2 core loop, P3 data model completeness, P4 collaboration, P5 admin and settings.
Plan names: Free Forever (the test workspace), Unlimited, Business, Business Plus, Enterprise [doc SRC-035][doc SRC-037].

| ID | Area | Feature | Plan | Priority | Screens | Barriers | Status | Source |
|---|---|---|---|---|---|---|---|---|
| F-001 | Board | Columns by group: one column per status, counts, empty columns, add group (new status), collapse | All | P1 | S-001 | | done | [obs EV-002][doc SRC-012] |
| F-002 | Board | Card: anatomy, inline field edits (assignee, dates, priority, tags), hover toolbar, More menu | All | P1 | S-001 | | done | [obs EV-013][doc SRC-009] |
| F-003 | Board | Create a task inside a column | All | P1 | S-001 | | done | [obs EV-029] |
| F-004 | Board | Customize view and view drafts: card size, cover, stack and empty fields, fields, group, subgroup, filter, sort, Save view | All (private, protected, default views: Business) | P1 | S-001 | | partial | [obs EV-019][doc SRC-013][doc SRC-014] |
| F-005 | Board | Drag and drop cards between columns and within a column | All | P1 | S-001 | | blocked | [doc SRC-012] |
| F-006 | Board | Bulk selection and bulk actions | All | P2 | S-001 | | partial | [obs EV-028] |
| F-007 | Board | Many items: column paging and virtual scroll | All | P2 | S-001 | | done | [obs EV-046] |
| F-008 | Board | Work in progress limits per column | Business | P2 | S-001 | | blocked | [doc SRC-011] |
| F-009 | Task view | Layout and header: breadcrumb, status, assignees, dates, priority, tags, layout modes | All | P1 | S-002 | | done | [doc SRC-016][doc SRC-017] |
| F-010 | Task view | Description | All | P1 | S-002 | | partial | [doc SRC-017] |
| F-011 | Task view | Subtasks | All | P1 | S-002 | | partial | [doc SRC-017] |
| F-012 | Task view | Checklists | All | P1 | S-002 | | done | [doc SRC-017] |
| F-013 | Task view | Relationships and dependencies | All | P1 | S-002 | | partial | [doc SRC-021][doc SRC-022] |
| F-014 | Task view | Activity and comments | All | P1 | S-002 | | partial | [doc SRC-017] |
| F-015 | Task view | Fields section (custom fields inside the task) | All | P1 | S-002 | | done | [doc SRC-007] |
| F-016 | Custom fields | Create a field of each type, with its options | All (60 value uses on Free) | P1 | S-002, S-003 | | partial | [doc SRC-002][api SRC-001] |
| F-017 | Custom fields | Fill values of each type | All (60 uses on Free) | P1 | S-001, S-002 | | partial | [doc SRC-005] |
| F-018 | Custom fields | How each type renders on board cards | All | P1 | S-001 | | done | [doc SRC-007] |
| F-019 | Custom fields | Required fields | Business | P1 | S-002, S-003 | | blocked | [doc SRC-003] |
| F-020 | Custom fields | Delete a field that has values; trash and restore | All | P1 | S-002, S-005 | | done | [doc SRC-004] |
| F-021 | Custom fields | Scope (workspace, space, folder, list, task type) and the Custom Field Manager | All (task-type fields: Business Plus) | P1 | S-003 | | partial | [doc SRC-006][doc SRC-008] |
| F-022 | Custom fields | Free Forever limit of 60 value uses | Free | P1 | S-002 | | partial | [doc SRC-005] |
| F-023 | Custom fields | AI fields (summary, categorize, autofill) | AI credits | P3 | S-003 | BR-014 | blocked | [doc SRC-044] |
| F-024 | Statuses | Status groups, list or space scope | All | P2 | S-001 | | partial | [obs EV-037][doc SRC-018] |
| F-025 | Tags | Space-level tags created from a card | All | P2 | S-001 | | partial | [obs EV-040] |
| F-026 | Realtime | Changes appear in other open tabs without reload | All | P2 | S-001 | BR-013 | done | [obs EV-032] |
| F-027 | Integrations | Calendar, email, chat, CRM and storage integrations (barrier scan only) | Varies | P5 | | BR-004, BR-005, BR-006, BR-007 | n/a | [obs EV-001][doc SRC-049] |
