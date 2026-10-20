# Glossary

| Term | Definition | Evidence |
|---|---|---|
| Workspace | Top container of an account's work; has members, plan and billing. API name: team | [obs EV-001][doc SRC-023] |
| Space | Container inside a workspace holding folders and lists; owns statuses, tags and ClickApps that lists inherit | [obs EV-037][doc SRC-018] |
| Folder | Optional container of lists inside a Space | [doc SRC-008] |
| List | Container of tasks; every task lives in at least one list | [doc SRC-017] |
| View | A saved way to show a location's tasks (List, Board, Calendar...); has grouping, filters, sorting, columns and settings | [net EV-014][doc SRC-028] |
| Board | View type that shows tasks as cards in columns, one column per group value | [obs EV-012] |
| Group | The field that makes the board's columns (status by default) | [obs EV-025] |
| Subgroup | A second grouping field that adds swimlanes (rows) | [obs EV-027] |
| Card | A task as shown on the board | [obs EV-013] |
| Status | Workflow state of a task; types open, custom (active), done and closed | [net EV-014][doc SRC-018] |
| Custom field | A user-defined task attribute with a type (Dropdown, Money, Date, ...) defined at a location | [obs EV-004][doc SRC-008] |
| Use (custom field) | One value written to a custom field on a task; Free Forever allows 60 per workspace | [doc SRC-005] |
| Custom Field Manager | Settings screen that lists custom fields by location and task type | [obs EV-045][doc SRC-006] |
| ClickApp | A feature switch per workspace or space (WIP limits, custom task IDs, ...) | [doc SRC-011][doc SRC-019] |
| Save view | Button that turns view draft changes into the saved view for everyone | [obs EV-017][doc SRC-013] |
| Me mode | View filter showing only the current user's tasks | [obs EV-022] |
| Task type | Kind of task (Task, Milestone, Form Response, Meeting Note); custom fields can be bound to it | [obs EV-045] |
| Location (custom field) | Where a field lives: Workspace, Space, Folder or List; a field shows on every task there | [net EV-099][doc SRC-008] |
| Fields section | The block of custom fields in the task view | [obs EV-117] |
| Formula field | A field computed from other fields, defined once for all tasks of its locations | [obs EV-116][net EV-112] |
| Tasks / Relationship field | Fields that link tasks; they appear in the Relate menu and a Related tab | [obs EV-118][obs EV-119] |
| Trash | Settings page that keeps deleted lists, tasks, tags and fields for 30 days | [obs EV-137] |
| Entitlement | The server-side counter of a plan limit, such as custom field uses | [net EV-112] |
