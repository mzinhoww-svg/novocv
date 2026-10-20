# Topic: hidden writes

Actions in this product that change data or state without a Save button.

| Pattern | Where | Class | Evidence |
|---|---|---|---|
| Card field pickers save at once (priority, assignee) or when the picker closes (dates, tags) | Board card | A2 | [net EV-007][net EV-014] |
| ✓ in the card's hover toolbar completes the task with one click | Board card | A2 | [obs EV-012] |
| The hover toolbar buttons are in the Tab order even without hover; Enter on them acts | Board card | A2 | [obs EV-034] |
| "+ Add group" creates a status (List only or Entire Space) | Board | A4 when Entire Space | [obs EV-037] |
| Tags typed in a card picker are created at Space level | Board card | A4 | [obs EV-040][net EV-014] |
| Assigning yourself offers "Don't ask again", a personal preference | Board card | A3 | [obs EV-042] |
| View option changes are drafts: nothing is saved until "Save view", and a reload drops the draft (the opposite risk: losing work) | Board toolbar and Customize | A1 | [obs EV-017][net EV-014] |
| "Autosave for me" turns every later view change into a saved change | Customize view | A3/A4 | [obs EV-019] |
| Creating a list opens an AI "List settings" offer that generates task types, views, fields and statuses unless declined | Create List | A4 | [obs EV-047] |
| Onboarding a workspace creates a Space, a List and two chat channels | Workspace creation | A2 | [obs EV-048] |
| Picking a country in a Phone field's flag menu saves the user's profile country (all workspaces), even with no number typed | Task Fields section | A3 | [obs EV-130][obs EV-131] |
| Custom field values save on change (checkbox click, picker choice, slider drag, blur) and each one spends a Free plan use | Task Fields section, card rows | A2 | [net EV-112] |
| Configuring a Formula value edits the field definition for every task in its locations | Task Fields section | A4 at workspace or space level | [net EV-112] |
| Deleting a tag from a task's tag picker deletes it in the whole Space | Tag picker | A4 | [obs EV-136] |
| Opening a task marks it viewed (`PUT .../viewed`) | Task view | A3 (product telemetry, not restorable) | [net EV-058] |
| Using Create menus writes a per-user UI entry (`PUT /growth-v1/.../dynamic_ui/entries/globalCreateBtn`) | Global Create menu | A3 (product telemetry, not restorable) | [net EV-140] |

## Not tested

- Keyboard shortcuts on the board (SRC-046 lists them); notification inbox; "Remind me in Inbox".
