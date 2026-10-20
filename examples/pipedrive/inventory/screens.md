# Screens

| ID | Screen | URL pattern | Entry points | Features | File |
|---|---|---|---|---|---|
| S-001 | Pipeline board | `/pipeline/:id/user/everyone` (`/deals-default` redirects to the last viewed pipeline) | Sidebar > Deals | F-001, F-003, F-004, F-007, F-011, F-012 | screens/S-001-pipeline-board.md |
| S-002 | Deal detail | `/deal/:id` | Click a card title; toast "View" after creating a deal | F-002, F-003, F-004, F-005, F-006, F-009 | screens/S-002-deal-detail.md |
| S-003 | Pipeline editor | `/pipeline/:id/add` (new), `/pipeline/:id/edit` (existing) | Pipeline selector > New pipeline; pencil button on the board | F-008, F-009 | screens/S-003-pipeline-editor.md |
| S-004 | Activities list | `/activities/list/user/:id` | Sidebar > Activities | F-010 | screens/S-004-activities-list.md |
| S-005 | Organization detail | `/organization/:id` | Organization link on a card or deal | F-009 | none (only its delete dialog was studied) |
| S-006 | Settings: activities, lost reasons, restore data | `/settings/activity_settings`, `/settings/company-settings/lost-reasons`, `/settings/restore` | Account menu > Company settings; Tools and apps | F-009, F-017 | none (read only, company configuration) |
