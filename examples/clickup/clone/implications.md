# Implications for the clone

## Copy

| Area | Item | Why | Refs |
|---|---|---|---|
| Board | One column per status, empty columns shown, counts per column | Clear picture of the workflow at a glance | R-001, R-002 |
| Board | Inline edits on cards with optimistic updates and Undo on complete | Fast triage without opening tasks | R-003, R-017, R-024 |
| Board | Create a task inside a column takes that column's status | Natural for kanban users | R-010 |
| Task view | Every field saves on its own; one activity line per change with old and new value | No lost edits, full audit trail | R-044, E-014 |
| Custom fields | Number and money format per field; BRL with Brazilian separators | Brazilian SMBs need R$ 1.234,56 by default | R-035 |
| Custom fields | Location with address plus coordinates | Field service and sales visits | R-046 |
| Custom fields | Delete goes to a 30-day Trash and restore brings values back | Safe cleanup | R-051, R-052 |
| Data | One change record per field write (`versions[]` with before and after) | Feeds activity, undo and webhooks | E-014 |

## Avoid

| Area | Item | Why | Refs |
|---|---|---|---|
| Custom fields | Saving the user's profile country from a phone field's flag menu | A side effect the user cannot see or expect | R-036, B-013 |
| Custom fields | Toggles that silently refuse to switch on (Required on the free plan) | Feels broken; say why or hide it | R-041, B-014 |
| Custom fields | Relationship-type fields that live outside the Fields section | Users look for all fields in one place | R-039, B-018 |
| Board | View drafts dropped on reload without a warning | Lost work | R-008, B-001 |
| Task view | Escape in an inline input closing the whole task | Lost context | R-032, B-010 |
| Trash | Search still listing deleted tasks | Confusing after cleanup | B-016 |
| Pricing | Charging for Tag Manager or Required fields in the basic tiers | Small teams need both to keep data clean | B-017, R-041 |
| Brand | ClickUp names, icons, colors and copy | Trademark and look and feel (BR-010) | BR-010 |

## Improve

| Area | Item | How | Refs |
|---|---|---|---|
| Custom fields | Required fields | Offer on all plans; show which fields are missing when a task is created | R-042, Q-010 |
| Custom fields | Delete field | Show the task count at once, offer Undo in the toast | R-051, B-015 |
| Custom fields | Phone | Default country from the workspace (Brazil), never from a field edit | R-036 |
| Board | Drag and drop | Keyboard alternative to move a card (status menu, shortcuts) | R-019, B-005 |
| Board | View drafts | Warn before leaving with unsaved view changes, or autosave personal views | R-008 |
| Accessibility | Card controls and field rows | Accessible names and visible focus on every control | B-004 |
| Localization | Portuguese UI, BRL, dd/mm/yyyy, Brazilian phone masks by default | Target market | R-035 |
