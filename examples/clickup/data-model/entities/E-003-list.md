# E-003 List
Product term: List (legacy API: subcategory) · Parent: E-002 (or a Folder) · Status: reviewed

## Fields

| Field | Type | Required | Default | Constraints or enum | Source |
|---|---|---|---|---|---|
| id | string (numeric) | yes |  |  | [net EV-053] |
| name | string | yes |  |  | [obs EV-048] |
| statuses | Status[] | yes | inherited from the Space | own statuses once "List only" is chosen | [obs EV-037][obs EV-038] |
| task_count | number | yes | 0 | sidebar count leaves out closed tasks | [obs EV-046] |

## Relations

| Relation | Target | Cardinality | On delete | Source |
|---|---|---|---|---|
| contains | E-004 Task | 0..n | tasks go to Trash with the list | [obs EV-132] |
| location of | E-007 CustomField | 0..n | list-only fields disappear with it | [obs EV-134] |
| has | E-009 View | 1..n |  | [obs EV-002] |

## Lifecycle

Active → Trash (30 days, restorable) → deleted forever.

## System fields

| Field | Set when | Source |
|---|---|---|
| date_deleted | delete | [obs EV-133] |

## Rules

- R-001, R-002, R-011, R-054

## Not tested

- Folders, list settings, list templates.
