# S-002 Task view
Features: F-009 to F-015, F-017, F-019, F-020 · URL: `/t/:team/:task` · Status: reviewed

## Purpose

Shows one task in full: its properties, description, custom fields, subtasks, relations, checklists and attachments, with the activity log and comments beside it. Every edit saves in place.

## Entry points

- Click a card title on the board (C-001); the URL changes to `/t/:team/:task` and the title bar reads "<task name> | #<task id>" [obs EV-051][net EV-053].
- Header arrows ↑ ↓ step to the previous or next task in the board's order [obs EV-059].
- Card More > New tab; a direct link opens the same view [obs EV-024].

## Anatomy

![Task view anatomy](../evidence/EV-051-task-view-anatomy.jpg)

| # | Region | Contents | Component | Evidence |
|---|---|---|---|---|
| 1 | Header | Previous and next task, breadcrumb (Space / List), add to another list, move; right: "Created <date>", AI, Share, More, favorite, Switch layout, close | | [obs EV-051][obs EV-076] |
| 2 | Hero | Task type pill ("Task ▾"), AI and task ID buttons, counts for subtasks, relations or checklist items, the title (wraps, no truncation), an AI prompt bar | C-011 | [obs EV-051][obs EV-060] |
| 3 | Fields grid | Two columns: Status (pill, next-status arrow, complete ✓), Dates (Start → Due), Track time (Start), Assignees, Priority, Tags; dependency rows (Blocked by, Blocking) appear under the grid | C-011 | [obs EV-051][obs EV-065] |
| 4 | Description | Rich text editor; placeholder "Add description, or write with AI"; history and full-screen icons | C-012 | [obs EV-055] |
| 5 | Sections | Add fields, Add subtask, Relate items or add dependencies, Create checklist, Attach file; each becomes a section once used | C-013, C-014, C-015 | [obs EV-062][obs EV-065][obs EV-071] |
| 5a | Fields section | One row per custom field of the task's locations, "Hide N empty fields" | C-017, C-019 | [obs EV-117] |
| 5b | Related section | One tab per Tasks or Relationship field with a table of linked tasks | C-019 | [obs EV-119] |
| 6 | Activity sidebar | "Activity" with search, follower count bell and filter; history lines with relative times, "Show more"; comments; composer at the bottom; right rail toggles (collapse, comments, activity, apps) | C-016 | [obs EV-057] |

Component tree (Angular): `cu-task-view` > `cu-task-view-header`, `cu-task-hero-section`, `cu-task-fields-container`, `cu-task-view-content-description` (`cu-task-editor`, Quill), `cu-task-view-flat-layout` (custom fields, subtasks, relationships, checklists, attachments sections) and `cu-task-view-right-sidebar` [obs EV-050].

## Data shown

| Element | Entity.field | Evidence |
|---|---|---|
| Title | Task.name | [net EV-053] |
| Type | Task.custom_type (null = Task) | [net EV-053][obs EV-077] |
| Status | Task.status {status, color, type, status_group} | [net EV-053] |
| Dates | Task.time_mgmt.start_date, due_date (+ _time flags) | [net EV-053][obs EV-059] |
| Assignees | Task.users[type=assigned] | [net EV-053] |
| Priority | Task.priority | [net EV-053] |
| Tags | Task.tags | [net EV-053] |
| Description | Task.content (rich text), text_content | [net EV-053][obs EV-078] |
| Subtasks | Task.subtask_ids, subtasks_count | [net EV-053][obs EV-062] |
| Dependencies | Task.related_tasks_count {dependsOn, dependedBy} | [net EV-053][obs EV-065] |
| Checklists | Task.checklists[{name, items[{name, resolved}]}] | [net EV-069][obs EV-071] |
| Activity | history items and comments | [net EV-058] |
| Created | Task.time_mgmt.date_created ("Created 16 Oct") | [obs EV-051] |
| Fields | CustomFieldValue for each CustomField at the task's locations | [obs EV-117][net EV-112] |

## States

| State | How to reach it | What it shows | Evidence |
|---|---|---|---|
| Empty | A new task | Placeholders: Start, Due, Empty for priority and tags, "Add description, or write with AI", the five section buttons | [obs EV-059] |
| Loading | Open a task | The board stays mounted underneath; the activity list fills in after the body | [obs EV-050][obs EV-051] |
| Typical | Fixtures | Filled fields, description, comment | [obs EV-078] |
| Many items | Not reached (2 subtasks, 3 checklist items) | | |
| Long text | 216-character title | Title wraps over four lines, no ellipsis | [obs EV-060] |
| Overdue | Due date in the past | Due shows "3 days ago" with a red icon | [obs EV-059] |
| Error | Not reached | | |
| No permission | Needs a second account (L1) | | |
| Plan-gated | Required and Pinned field settings | Required stays off; Pinned opens Upgrade to Business | [obs EV-082][obs EV-083] |

## Interactions

| Trigger | Result | Request | Persistence scope | Evidence |
|---|---|---|---|---|
| Status pill | Picker grouped Not started, Active, Closed | | | [obs EV-054] |
| Next-status arrow ▸ | Moves to the next status in order; toast with Undo; activity line | `PUT /tasks/v1/item?...check_resolved` | Task | [obs EV-073][net EV-014] |
| Description typing | Saved on its own (no Save); markdown "- " makes a bullet list | not fetch/XHR (collaborative editor) | Task | [obs EV-055][obs EV-078] |
| Comment composer > send | Comment appears in the activity stream | `POST /comments/v1/task/:id/comment` | Task | [obs EV-057][net EV-058] |
| Add subtask > name > Enter | Subtasks section with a table; input stays for the next | `POST /tasks/v1/subcategory/:list/task` | Task | [obs EV-062][net EV-063] |
| Relate > This task is blocked by > pick | Blocked by row and Dependencies tab; the other task shows Blocking | `POST /scheduling/v1/dependency` | Both tasks | [obs EV-065][obs EV-066][net EV-069] |
| Create checklist | A checklist named "Checklist" is created at once | `POST /tasks/v1/task/:id/checklist` | Task | [obs EV-067][net EV-069] |
| Checklist item circle | Item resolved and hidden under "Show 1 completed" | `PUT /tasks/v1/checklistItem/:id` | Task | [obs EV-072] |
| Switch layout | Toggles Full screen, Modal, Sidebar | | User preference (all workspaces) | [obs EV-074][obs EV-075] |
| Opening or using a task | Marks it viewed | `PUT /task-v3/core/:id/tasks/:id/viewed` | User (recently viewed) | [net EV-058] |
| ↑ ↓ arrows | Previous or next task in the board order | | | [obs EV-059] |
| Fields > + > Create new > type > Create | New field on the task's list | `POST /customFields/v2/field`, `PUT .../locations` | List (field location) | [obs EV-080][net EV-099] |
| A field value | Type editor; saves on change; activity line | `POST /customFields/v1/task/:id/field/:id` | Task | [obs EV-117][net EV-112] |
| Phone flag menu > a country | Changes the default country of every phone field | `PUT /user/v1/user` | User profile (all workspaces) | [obs EV-130][obs EV-131] |
| Row gear > delete icon > Delete | Field removed from every task, toast "Field deleted successfully" | `/customFields/v2/field/:id?delete_all=true` | Workspace (field to Trash) | [obs EV-126][obs EV-127] |

## Keyboard and accessibility

| Check | Result | Evidence |
|---|---|---|
| Tab order | Not walked in the task view | |
| Arrow keys | Not checked | |
| Shortcuts | Documented: Shift+S status, Shift+A assignee, M assign to me, Shift+P priority, Shift+D date, Shift+L tag, Shift+M comment (off by default) | [doc SRC-046] |
| Focus visible | Not checked | |
| Escape | Escape in an empty checklist item input closed the whole task view and returned to the board | [obs EV-068] |
| Unlabeled controls | Several icon-only buttons in the header have no name (one `_iconOnly` button flagged) | [obs EV-050] |

## Microcopy

| Element | Text | Evidence |
|---|---|---|
| Description placeholder | "Add description, or write with AI" | [obs EV-051] |
| Section buttons | "Add fields", "Add subtask", "Relate items or add dependencies", "Create checklist", "Attach file" | [obs EV-051] |
| Relate menu | "Relate a Task or Doc", "This task blocks...", "This task is blocked by...", "New custom relationship" | [obs EV-064] |
| Composer | "Write a comment..."; after the first comment "Comment, press 'space' for AI, '/' for commands" | [obs EV-057] |
| Activity | "You created this task", "You created subtask: …", "You marked this task as blocking …", "You added 3 items to checklist …", "You changed status from To Do to In Progress" | [obs EV-062][obs EV-066][obs EV-071][obs EV-073] |

## Rules

- R-020 to R-032 in `rules/task-view.md`.
- R-033 to R-047, R-051, R-052 in `rules/custom-fields.md`.

## Realtime and performance

| Check | Result | Evidence |
|---|---|---|
| A change in a second tab appears without reload | Board side confirmed (R-018); not checked inside the task view | [obs EV-032] |
| Loading pattern (skeleton, spinner, optimistic update) | Checklist section shows a skeleton while it is created | [obs EV-067] |
| Delays the user sees | Not measured (background tab) | Q-001 |

## Responsive

| Width | Change | Evidence |
|---|---|---|
| 1710 CSS px | Full screen, Modal and Sidebar layouts | [obs EV-074][obs EV-075] |
| 1024 and 390 | Not tested | |

## Not tested

- Attachments (no file upload), time tracking (would start a running timer), recurrence, cover image, task type change, Share and the sharing dialog (A5 risk).
- Mentions, assigned comments, threaded replies, reactions (need a second person to be meaningful).
- Description history, Print, Duplicate, Merge, Move, Archive, Delete from the task view.
- Keyboard walk and focus styles inside the task view.
