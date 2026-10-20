# E-012 Dependency
Product term: Dependency (waiting on / blocking) · Parent: E-004 · Status: reviewed

## Fields

| Field | Type | Required | Default | Constraints or enum | Source |
|---|---|---|---|---|---|
| task_id | string | yes |  | the blocked task | [net EV-069] |
| depends_on | string | yes |  | the blocking task | [net EV-069] |
| type | number | yes |  |  | [net EV-069] |
| lag_ms | number | no | null |  | [net EV-069] |

## Relations

| Relation | Target | Cardinality | On delete | Source |
|---|---|---|---|---|
| between | E-004 Task | n..n |  | [net EV-069] |

## Lifecycle

Created from the Relate menu; removal not tested.

## System fields

| Field | Set when | Source |
|---|---|---|
| date_created | create | [net EV-069] |

## Rules

- R-029

## Not tested

- Removing, dependency warnings on status change, scheduling shifts.
