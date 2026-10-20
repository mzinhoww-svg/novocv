# E-014 HistoryItem
Product term: Activity entry (version change) · Parent: E-004 · Status: reviewed

## Fields

| Field | Type | Required | Default | Constraints or enum | Source |
|---|---|---|---|---|---|
| history_id | string (numeric) | yes |  |  | [net EV-007][net EV-112] |
| field | string | yes |  |  | [net EV-007] |
| before, after | any | yes |  |  | [net EV-007][net EV-112] |
| relationships | {type, object_type}[] | yes |  | task-in-space, task-in-folder, task-in-list | [net EV-007] |

## Relations

| Relation | Target | Cardinality | On delete | Source |
|---|---|---|---|---|
| of | E-004 Task | n..1 |  | [net EV-007] |

## Lifecycle

Append only.

## System fields

| Field | Set when | Source |
|---|---|---|
| date | every write | [net EV-007] |

## Rules

- R-024, R-044

## Not tested

- Retention, filters in the activity panel.
