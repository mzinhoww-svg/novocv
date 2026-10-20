# E-005 Status
Product term: Status · Parent: E-002 or E-003 · Status: reviewed

## Fields

| Field | Type | Required | Default | Constraints or enum | Source |
|---|---|---|---|---|---|
| id | string | yes |  |  | [net EV-053] |
| status | string | yes |  | shown upper case on the board | [net EV-053][obs EV-038] |
| type | enum | yes |  | open, custom, closed (done in docs) | [net EV-014][doc SRC-018] |
| status_group | string | yes |  | picker groups: Not started, Active, Closed | [net EV-053][obs EV-054] |
| color | hex | yes |  |  | [net EV-053] |
| orderindex | number | yes |  | column order | [net EV-053] |

## Relations

| Relation | Target | Cardinality | On delete | Source |
|---|---|---|---|---|
| belongs to | E-002 Space or E-003 List | n..1 |  | [obs EV-037] |

## Lifecycle

Created from Add group or status settings; removed with its list when list-only.

## System fields

| Field | Set when | Source |
|---|---|---|

## Rules

- R-001, R-011, R-023

## Not tested

- Renaming, deleting a status with tasks, done-type statuses.
