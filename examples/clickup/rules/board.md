# Rules: board view

### R-001 The board shows one column per status of the list, empty ones included, in status order
- Given a list whose statuses are to do, in progress, complete
- When the board view opens with Group: Status
- Then three columns appear in that order, each with its count, even when empty, followed by "+ Add group"; the closed status is the last column
- Evidence: [obs EV-002][obs EV-038][net EV-014]
- Feature: F-001 · Screen: S-001

### R-002 Column counts include every task of the group; the sidebar list count leaves out closed tasks
- Given 54 tasks, one of them in the closed status
- When the board and the sidebar render
- Then the columns read 53 and 1, and the sidebar shows 53 next to the list
- Evidence: [obs EV-012][obs EV-046]
- Feature: F-001 · Screen: S-001

### R-003 Mark complete on a card moves the task to the closed status and offers Undo
- Given an open task on the board
- When the user clicks ✓ "Mark complete" in the card's hover toolbar
- Then the card moves to the closed column, the counts update, and a toast "Status changed" shows "Undo ⌘Z"; the request sends `status` with the closed status name
- Evidence: [obs EV-012][net EV-014]
- Feature: F-002 · Screen: S-001

### R-004 The card date chip uses relative text and an urgency color
- Given open tasks with due dates in the past, today, and a start-to-due range
- When the board renders
- Then a past due date reads "3 days ago" in red, today reads "Today" in yellow, and a range reads "Today - Mon" in the default color
- Evidence: [obs EV-010][obs EV-035]
- Feature: F-002 · Screen: S-001

| Probe | Input | Result | Evidence |
|---|---|---|---|
| Overdue | due 13 Oct, today 16 Oct | "3 days ago", red | [obs EV-010] |
| Today | quick option Today | "Today", yellow | [obs EV-010] |
| Range | start Today, due Next week | "Today - Mon" | [obs EV-010] |

### R-005 The date picker saves when it closes, not when a day is clicked
- Given the date picker open on a card
- When the user clicks a day
- Then the chip updates inside the picker only; the update request is sent when the picker closes (Escape or click outside)
- Evidence: [net EV-014][obs EV-008]
- Feature: F-002 · Screen: S-001

### R-006 Typing an unknown tag on a card creates a Space tag and applies it when the picker closes
- Given the tag picker on a card and a name that matches no tag
- When the user presses Enter on "Create <name>" and closes the picker
- Then one request creates the tag with generated foreground and background colors and applies it to the task; the card shows the tag pill
- Evidence: [obs EV-040][net EV-014]
- Feature: F-025 · Screen: S-001

### R-007 Assigning yourself prompts to add the task to your personal priorities
- Given the assignee picker on a card
- When the user picks "Me"
- Then the assignee is saved at once and a prompt offers "Don't ask again" and "Add to priorities"
- Evidence: [obs EV-041][obs EV-042][net EV-014]
- Feature: F-002 · Screen: S-001

### R-008 View changes are drafts until Save view; a reload drops them without warning
- Given the default board view
- When the user collapses a column, changes card size, toggles a layout option, or changes grouping
- Then "Save view" appears in the toolbar, the board re-queries the view with the draft settings, nothing is saved; after a reload the board is back to the saved settings and no message mentions the lost draft
- Evidence: [obs EV-017][obs EV-020][net EV-014]
- Feature: F-004 · Screen: S-001

| Probe | Input | Result | Evidence |
|---|---|---|---|
| Collapse group, reload | IN PROGRESS collapsed | expanded again after reload | [obs EV-017] |
| Card size Large, layout toggles, reload | Large, Stack fields on, Show empty fields off | back to Medium and defaults | [obs EV-023] |
| Group Priority + subgroup Status, reload | swimlanes | back to Group: Status | [obs EV-027] |

### R-009 The column menu offers Archive all and Select all only for columns with tasks
- Given one column with tasks and one empty column
- When the user opens Group options on each
- Then the full column shows Collapse group, Archive all in this group, Automate status, Select all, Rename, Edit statuses; the empty column shows only Collapse group, Automate status, Rename, Edit statuses
- Evidence: [obs EV-015][obs EV-016]
- Feature: F-001 · Screen: S-001

### R-010 A task created inside a column takes that column's status and the form stays open
- Given the board grouped by status
- When the user opens "+ Add Task" in IN PROGRESS, types a name and presses Enter
- Then the task is created with status in progress, the form reopens for the next task, and a "Task created" toast appears; Enter with an empty name does nothing
- Evidence: [obs EV-029][obs EV-030]
- Feature: F-003 · Screen: S-001

### R-011 Adding a group on a list that inherits statuses asks where the new status applies
- Given a list that inherits its statuses from the Space
- When the user adds a group named "[re] review" and confirms with ✓
- Then a dialog asks "List only" (default) or "Entire Space"; with List only the list gets its own statuses and the new status column appears before the closed column
- Evidence: [obs EV-036][obs EV-037][obs EV-038]
- Feature: F-024 · Screen: S-001

### R-012 Grouping by a field other than status adds a status chip to cards and a column for empty values
- Given the board
- When Group is set to Priority
- Then columns are Urgent, High, Normal, Low and No priority; cards show their status as a chip; closed tasks are hidden and the Closed toggle becomes active
- Evidence: [obs EV-026][obs EV-025]
- Feature: F-004 · Screen: S-001

### R-013 A subgroup splits the board into collapsible swimlanes
- Given the board grouped by Priority
- When the user adds a subgroup by Status
- Then each status becomes a row with its own count, collapse arrow and +, crossing every priority column; the group button reads "Group: Priority / Status"
- Evidence: [obs EV-027]
- Feature: F-004 · Screen: S-001

### R-014 Card size sets the column width
- Given the board
- When Card size is Small, Medium or Large
- Then columns are 200, 264 or 328 CSS px wide; Medium is the default
- Evidence: [obs EV-020][obs EV-021][obs EV-046]
- Feature: F-004 · Screen: S-001

### R-015 Show empty fields and Stack fields change the card body
- Given cards with some fields empty
- When Show empty fields is off and Stack fields is on
- Then empty field placeholders disappear (an empty card shows only its title) and each filled field takes its own row with an icon
- Evidence: [obs EV-023]
- Feature: F-004 · Screen: S-001

### R-016 Columns load tasks in pages while scrolling
- Given a column with 53 tasks
- When the board loads and the user scrolls inside the column
- Then about 11 cards exist at first; scrolling sends another tasks/bulk request and more cards render
- Evidence: [obs EV-046][net EV-014]
- Feature: F-007 · Screen: S-001

### R-017 Priority has four fixed levels stored as numbers
- Given the priority picker
- When the user picks High
- Then the card shows a yellow flag with "High" and the request sends `priority: "2"`; the scale is Urgent 1, High 2, Normal 3, Low 4, and Clear removes it
- Evidence: [obs EV-006][net EV-007][doc SRC-031]
- Feature: F-002 · Screen: S-001

### R-018 Changes appear in other open tabs without reload
- Given the same board open in two tabs
- When priority Low is set in the first tab
- Then the second tab shows "Low" on the card without a reload (about 8 s in a background tab)
- Evidence: [obs EV-031][obs EV-032]
- Feature: F-026 · Screen: S-001

### R-019 Dragging a card to another column changes its group value
- Given the board grouped by status
- When the user drags a card to another column
- Then the task takes that column's status; dragging within a column changes its order
- Evidence: [doc SRC-012]
- Feature: F-005 · Screen: S-001
- Not observed: the drag could not be automated (EV-046). Q-003.
