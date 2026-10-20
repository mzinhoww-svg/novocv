# E-003 Pipeline
Product term: Pipeline · Parent: none · Status: draft

## Fields

| Field | Type | Required | Default | Constraints or enum | Source |
|---|---|---|---|---|---|
| id | int | system | | | [net EV-009] |
| name | string | yes | "New pipeline" | emoji accepted | [net EV-009] [obs EV-003] |
| is_deal_probability_enabled | bool | yes | true in a new pipeline | | [net EV-009] [obs EV-003] |
| order_nr | int | system | | lowest is the default pipeline | [doc SRC-017] |
| is_deleted | bool | system | false | | [doc SRC-017] |

## Relations

| Relation | Target | Cardinality | On delete | Source |
|---|---|---|---|---|
| stages | E-004 Stage | one to many, ordered | deleted with the pipeline | [net EV-009] |
| deals | E-001 Deal | one to many | move to another pipeline or delete (required choice) | [obs EV-060] [obs EV-061] |

## Lifecycle

Created in the editor, edited in place, deleted from the editor's menu. Evidence: [obs EV-003] [obs EV-060].

## System fields

| Field | Set when | Source |
|---|---|---|
| add_time, update_time | creation, change | [doc SRC-017] |

## Rules

- R-035, R-041

## Not tested

- Pipeline visibility per visibility group (company setting), duplicate pipeline, reordering.
