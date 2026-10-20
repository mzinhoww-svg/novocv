# E-008 Activity type
Product term: Activity type · Parent: none (company list) · Status: draft

## Fields

| Field | Type | Required | Default | Constraints or enum | Source |
|---|---|---|---|---|---|
| id | int | system | | | [net EV-025] |
| name | string | yes | | shown as the subject placeholder | [net EV-025] [obs EV-022] |
| key_string | string | system | generated from the name | Activity.type | [net EV-025] [doc SRC-021] |
| order_nr | int | yes | | the first active type is the default for new activities | [net EV-025] [obs EV-022] |
| icon_key | string | yes | | one of about 40 icons (call, task, meeting, email...) | [net EV-025] [doc SRC-021] |
| active_flag | bool | yes | true | inactive types are hidden in the form | [net EV-025] |
| is_custom_flag | bool | system | | | [net EV-025] |
| color | string or null | no | null | | [net EV-025] |

## Relations

| Relation | Target | Cardinality | On delete | Source |
|---|---|---|---|---|
| activities | E-002 Activity | one to many | deactivated types stay on old activities (settings text) | [doc SRC-008] |

## Lifecycle

Managed in Company settings > Activities (A4; read only in this study).

## System fields

| Field | Set when | Source |
|---|---|---|
| add_time, update_time | creation, change | [net EV-025] |

## Rules

- R-016

## Not tested

- Creating, reordering or deactivating types.
