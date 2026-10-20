# Screens

| ID | Screen | URL pattern | Entry points | Features | File |
|---|---|---|---|---|---|
| S-001 | Board view of a list | `/:team/v/b/li/:list` (also `/:team/v/li/:list/:view`) | Views bar > Board; sidebar list > Board tab | F-001 to F-008, F-016 to F-018, F-024 to F-026 | screens/S-001-board.md |
| S-002 | Task view | `/t/:task` and `/t/:team/:task` (opens as modal, full screen or sidebar) | Click a card title; card More > New tab | F-009 to F-015, F-017 | screens/S-002-task-view.md |
| S-003 | Custom Field Manager | modal over `/:team/settings/...` or any view (no own route seen) | Workspace menu > Custom Fields; Settings > Custom Field Manager; Fields panel gear | F-016, F-019 to F-021 | screens/S-003-custom-field-manager.md |
| S-005 | Trash | `/:team/settings/trash` | Settings > Trash | F-020 | screens/S-005-trash.md |
| S-004 | List view of a list | `/:team/v/l/li/:list` | Views bar > List | (used only to create fixtures; out of scope) | |
