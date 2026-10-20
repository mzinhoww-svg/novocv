# E-007 CustomField
Product term: Custom Field · Parent: E-001 (one or more locations) · Status: reviewed

## Fields

| Field | Type | Required | Default | Constraints or enum | Source |
|---|---|---|---|---|---|
| id | uuid | yes |  |  | [net EV-099] |
| name | string | yes |  |  | [net EV-099] |
| type | enum string | yes |  | drop_down, number, currency, formula seen; 22 UI types created | [net EV-099][net EV-112][obs EV-098] |
| type_id | number | yes |  | 17 = formula | [net EV-112] |
| type_config | object | no | {} | per type: options, number_format, currency_type, precision, formula | [net EV-099][net EV-112] |
| required, required_on_subtasks | boolean | yes | false | Business plan | [net EV-099][doc SRC-003] |
| pinned | boolean | yes | false | Business plan | [net EV-099][obs EV-083] |
| hide_from_guests | boolean | yes | false |  | [net EV-099] |
| private, permission_level, members, groups | permissions | no | workspace default |  | [net EV-099][obs EV-081] |
| locations | {parent{type,id}}[] | yes | the list where it was created | type 6 = List | [net EV-099] |
| deleted, deleted_by | flags | yes | false |  | [net EV-099] |

## Relations

| Relation | Target | Cardinality | On delete | Source |
|---|---|---|---|---|
| located at | E-003 List (also Workspace, Space, Folder) | 1..n | list-only fields disappear with the list | [net EV-099][doc SRC-008] |
| values | E-008 CustomFieldValue | 0..n | values come back on restore | [obs EV-129] |

## Lifecycle

Active → Trash (on delete, 30 days, values kept) → restored or deleted forever.

## System fields

| Field | Set when | Source |
|---|---|---|
| userid | create | [net EV-099] |
| date_created | create | [net EV-099] |

## Rules

- R-033, R-038, R-051, R-052, R-054, R-055

## Not tested

- Workspace, Space and Folder locations; task-type fields; conversion between types.
