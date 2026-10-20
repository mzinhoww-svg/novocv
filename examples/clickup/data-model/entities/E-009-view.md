# E-009 View
Product term: View · Parent: E-003 (or Space, Folder) · Status: reviewed

## Fields

| Field | Type | Required | Default | Constraints or enum | Source |
|---|---|---|---|---|---|
| id | string | yes |  |  | [net EV-014] |
| type | enum | yes |  | board, list, overview and others | [net EV-014] |
| grouping | {field, dir, collapsed[]} | yes | status |  | [net EV-014] |
| divide | {field, dir, collapsed[]} | no | none | subgroup (swimlanes) | [net EV-014] |
| sorting | {fields[]} | no | [] |  | [net EV-014] |
| filters | {op, fields[], search, show_closed} | no |  |  | [net EV-014] |
| columns | {fields[{field, hidden}]} | yes | name, assignee, dates, priority, tags | custom fields hidden until shown | [net EV-014][obs EV-123] |
| settings | object | yes | card size Medium, show empty fields on |  | [net EV-014][obs EV-020] |
| auto_save | boolean | yes | false |  | [net EV-014] |

## Relations

| Relation | Target | Cardinality | On delete | Source |
|---|---|---|---|---|
| of | E-003 List | n..1 | deleted with the list | [obs EV-132] |

## Lifecycle

Saved definition plus an unsaved draft in the client; reload drops the draft (R-008).

## System fields

| Field | Set when | Source |
|---|---|---|

## Rules

- R-008, R-012, R-013, R-014, R-050

## Not tested

- Private, protected and default views; sharing.
