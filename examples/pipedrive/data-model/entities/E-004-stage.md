# E-004 Stage
Product term: Stage · Parent: E-003 Pipeline · Status: draft

## Fields

| Field | Type | Required | Default | Constraints or enum | Source |
|---|---|---|---|---|---|
| id | int | system | | | [net EV-009] |
| name | string | yes | default names in a new pipeline | | [net EV-009] [obs EV-003] |
| deal_probability | int | yes | 100 | 0-100 | [net EV-009] [obs EV-005] |
| is_deal_rot_enabled | bool | yes | false | | [net EV-009] |
| days_to_rotten | int or null | when rotting on | 0 | 0 accepted | [net EV-009] [obs EV-008] |
| order_nr | int | system | position in the editor | | [doc SRC-017] |

## Relations

| Relation | Target | Cardinality | On delete | Source |
|---|---|---|---|---|
| pipeline | E-003 Pipeline | many to one | | [net EV-009] |
| deals | E-001 Deal | one to many | an empty stage asks for confirmation; the docs say deleting a stage deletes its deals | [obs EV-007] [doc SRC-004] |

## Lifecycle

Created, renamed and deleted in the pipeline editor. Evidence: [obs EV-008].

## System fields

| Field | Set when | Source |
|---|---|---|
| add_time, update_time | creation, change | [doc SRC-017] |

## Rules

- R-007, R-008, R-042, R-043

## Not tested

- Deleting a stage that holds deals.
