# Parity tests

One test per rule the clone must reproduce. A test passes when the clone shows the same behavior as the rule. Rules marked "improve" in `clone/implications.md` are reproduced in their improved form.

| Test | Rule | Feature | Summary | Clone status |
|---|---|---|---|---|
| T-001 | R-001 | F-001 | The board shows one column per status of the list, empty ones included, in status order | todo |
| T-002 | R-002 | F-001 | Column counts include every task of the group; the sidebar list count leaves out closed tasks | todo |
| T-003 | R-003 | F-002 | Mark complete on a card moves the task to the closed status and offers Undo | todo |
| T-004 | R-004 | F-002 | The card date chip uses relative text and an urgency color | todo |
| T-005 | R-005 | F-002 | The date picker saves when it closes, not when a day is clicked | todo |
| T-006 | R-006 | F-025 | Typing an unknown tag on a card creates a Space tag and applies it when the picker closes | todo |
| T-007 | R-007 | F-002 | Assigning yourself prompts to add the task to your personal priorities | todo |
| T-008 | R-008 | F-004 | View changes are drafts until Save view; a reload drops them without warning | todo |
| T-009 | R-009 | F-001 | The column menu offers Archive all and Select all only for columns with tasks | todo |
| T-010 | R-010 | F-003 | A task created inside a column takes that column's status and the form stays open | todo |
| T-011 | R-011 | F-024 | Adding a group on a list that inherits statuses asks where the new status applies | todo |
| T-012 | R-012 | F-004 | Grouping by a field other than status adds a status chip to cards and a column for empty values | todo |
| T-013 | R-013 | F-004 | A subgroup splits the board into collapsible swimlanes | todo |
| T-014 | R-014 | F-004 | Card size sets the column width | todo |
| T-015 | R-015 | F-004 | Show empty fields and Stack fields change the card body | todo |
| T-016 | R-016 | F-007 | Columns load tasks in pages while scrolling | todo |
| T-017 | R-017 | F-002 | Priority has four fixed levels stored as numbers | todo |
| T-018 | R-018 | F-026 | Changes appear in other open tabs without reload | todo |
| T-019 | R-019 | F-005 | Dragging a card to another column changes its group value | todo |
| T-020 | R-033 | F-016 | A field created from a task belongs to that task's list | todo |
| T-021 | R-034 | F-016 | The type menu puts popular and AI types first; Rollup is not a type of its own | todo |
| T-022 | R-035 | F-016, F-017 | Number and money formats are set per field, not by the user's language | todo |
| T-023 | R-036 | F-017 | Picking a country in a Phone field changes the user's profile country | todo |
| T-024 | R-037 | F-022 | On Free Forever each value written counts once against 60 uses per workspace | todo |
| T-025 | R-038 | F-016, F-017 | A Formula field is defined once per field and takes the money format of a money input | todo |
| T-026 | R-039 | F-016, F-017, F-018 | Tasks and Relationship fields live in the Relate menu, not in the Fields section | todo |
| T-027 | R-040 | F-016 | A Relationship field must point at another list | todo |
| T-028 | R-041 | F-019 | Required and Pinned do nothing on Free Forever except point to an upgrade | todo |
| T-029 | R-042 | F-019 | A required field blocks task creation where it is used (documented) | todo |
| T-030 | R-043 | F-015 | The task view lists a location's fields in one Fields section | todo |
| T-031 | R-044 | F-017 | Each value saves on its own and adds an activity line | todo |
| T-032 | R-045 | F-017 | Each type has its own editor in the Fields section | todo |
| T-033 | R-046 | F-017 | Location values store the address and the coordinates | todo |
| T-034 | R-047 | F-017 | A typed signature is drawn in a script font and records who signed | todo |
| T-035 | R-048 | F-018 | On a card every shown custom field takes its own row with the type icon | todo |
| T-036 | R-049 | F-018 | Custom field values can be edited on the card | todo |
| T-037 | R-050 | F-018 | Showing custom fields on cards is a view draft | todo |
| T-038 | R-051 | F-020 | Deleting a field warns with the task count and sends it to Trash without Undo | todo |
| T-039 | R-052 | F-020 | Restoring a field from Trash brings its values back | todo |
| T-040 | R-053 | F-020 | Trash holds deleted lists, tasks, tags and fields for 30 days | todo |
| T-041 | R-054 | F-020, F-021 | Deleting a list takes its list-level fields with it | todo |
| T-042 | R-055 | F-021 | The Custom Field Manager groups fields by type and lists their locations | todo |
| T-043 | R-020 | F-009 | Clicking a card opens the task at its own URL, over the board | todo |
| T-044 | R-021 | F-009 | The task layout is a personal preference shared by every task and workspace | todo |
| T-045 | R-022 | F-009 | The header arrows step through tasks in the board's order | todo |
| T-046 | R-023 | F-009 | The status picker groups statuses by type | todo |
| T-047 | R-024 | F-009 | The next-status arrow moves a task one status forward | todo |
| T-048 | R-025 | F-010 | The description saves while typing, and "- " starts a bullet list | todo |
| T-049 | R-026 | F-014 | A comment posts to the activity stream; the composer stays empty for the next | todo |
| T-050 | R-027 | F-009 | Opening and using a task marks it as viewed | todo |
| T-051 | R-028 | F-011 | Subtasks are created inline and show as a table with a progress count | todo |
| T-052 | R-029 | F-013 | A dependency shows on both tasks and on both cards | todo |
| T-053 | R-030 | F-012 | Create checklist creates an empty checklist at once | todo |
| T-054 | R-031 | F-012 | Resolved checklist items hide behind "Show completed" and update counts | todo |
| T-055 | R-032 | F-009 | Escape in an empty inline input closes the task view | todo |
