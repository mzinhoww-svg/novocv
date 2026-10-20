# Rules: task view

### R-020 Clicking a card opens the task at its own URL, over the board
- Given the board
- When the user clicks a card title
- Then the task opens at `/t/:team/:task` in the user's layout (Full screen here), the page title becomes "<name> | #<task id>", and the board stays mounted underneath
- Evidence: [obs EV-051][obs EV-050][net EV-053]
- Feature: F-009 · Screen: S-002

### R-021 The task layout is a personal preference shared by every task and workspace
- Given the task view in Full screen
- When the user clicks the Switch layout button
- Then the layout cycles to Sidebar (board visible on the left, task on the right); the hover popover offers Modal, Full screen and Sidebar; the choice applies to the next task opened, also after a reload
- Evidence: [obs EV-052][obs EV-074][obs EV-075][obs EV-078][doc SRC-016]
- Feature: F-009 · Screen: S-002

### R-022 The header arrows step through tasks in the board's order
- Given a task opened from the board
- When the user clicks ↓
- Then the next card's task opens ([RE] typical → [RE] overdue), without closing the view
- Evidence: [obs EV-059]
- Feature: F-009 · Screen: S-002

### R-023 The status picker groups statuses by type
- Given a list with to do, in progress, [re] review and complete
- When the user opens the status pill
- Then the picker shows Not started (to do), Active (in progress, [re] review) and Closed (complete), with search
- Evidence: [obs EV-054][net EV-053]
- Feature: F-009 · Screen: S-002

### R-024 The next-status arrow moves a task one status forward
- Given a task in TO DO
- When the user clicks ▸ beside the status pill
- Then the status becomes IN PROGRESS, a toast offers Undo ⌘Z, and the activity log adds "You changed status from To Do to In Progress"
- Evidence: [obs EV-073][net EV-014]
- Feature: F-009 · Screen: S-002

### R-025 The description saves while typing, and "- " starts a bullet list
- Given an empty description
- When the user types a line, Enter, "- first item", Enter, "second item", then clicks away
- Then the lines become a paragraph and a two-item bullet list; no Save button exists; after a reload the text is still there; `**bold**` typed in one go stays literal
- Evidence: [obs EV-055][obs EV-078]
- Feature: F-010 · Screen: S-002

### R-026 A comment posts to the activity stream; the composer stays empty for the next
- Given the activity sidebar
- When the user types a comment and clicks send
- Then the comment appears with author, "Just now", reactions and Reply; the request carries the text blocks and the followers
- Evidence: [obs EV-057][net EV-058]
- Feature: F-014 · Screen: S-002

### R-027 Opening and using a task marks it as viewed
- Given any task
- When the user opens it and acts in it
- Then the client sends `PUT /task-v3/core/:id/tasks/:id/viewed` with an empty body
- Evidence: [net EV-058]
- Feature: F-009 · Screen: S-002

### R-028 Subtasks are created inline and show as a table with a progress count
- Given a task without subtasks
- When the user clicks Add subtask and enters two names
- Then a Subtasks section shows "2 open", a progress bar and a table (Name, Assignee, Priority); the header gets a subtask count; the board card shows "2 subtasks"
- Evidence: [obs EV-061][obs EV-062][obs EV-070][net EV-063]
- Feature: F-011 · Screen: S-002

### R-029 A dependency shows on both tasks and on both cards
- Given two tasks
- When the user sets "This task is blocked by" the other
- Then the blocked task shows "Blocked by <task>" under its fields and a Dependencies tab; the other shows "Blocking <task>"; their cards show a yellow warning 1 and a red blocking 1
- Evidence: [obs EV-065][obs EV-066][obs EV-070][net EV-069]
- Feature: F-013 · Screen: S-002

### R-030 Create checklist creates an empty checklist at once
- Given a task
- When the user clicks Create checklist
- Then a checklist named "Checklist" is saved immediately with its name in edit mode; items added with Enter save one by one
- Evidence: [obs EV-067][net EV-069]
- Feature: F-012 · Screen: S-002

### R-031 Resolved checklist items hide behind "Show completed" and update counts
- Given a checklist with 3 open items
- When the user resolves one
- Then the section reads "2 open", the item moves under "Show 1 completed", the header count reads 2, and the card shows 1/3
- Evidence: [obs EV-072][obs EV-073][obs EV-074]
- Feature: F-012 · Screen: S-002

### R-032 Escape in an empty inline input closes the task view
- Given the checklist item input open and empty
- When the user presses Escape
- Then the task view closes and the board shows again
- Evidence: [obs EV-068]
- Feature: F-009 · Screen: S-002
