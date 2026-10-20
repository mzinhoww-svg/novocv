# E-008 CustomFieldValue
Product term: Custom Field value (a "use") · Parent: E-004 · Status: reviewed

## Fields

| Field | Type | Required | Default | Constraints or enum | Source |
|---|---|---|---|---|---|
| field_id | uuid | yes |  |  | [net EV-112] |
| task_id | string | yes |  |  | [net EV-112] |
| value | per type | yes |  | boolean, epoch-ms string, option uuid, string, number, {add,rem} ids, {current}, location object | [net EV-112] |
| value_options | object | no |  | date {time}, signature {isTyped, signedBy} | [net EV-112] |
| value_richtext | string | no |  | rich copy of text values | [net EV-112] |

## Relations

| Relation | Target | Cardinality | On delete | Source |
|---|---|---|---|---|
| of | E-007 CustomField | n..1 | kept while the field is in Trash | [obs EV-129] |
| on | E-004 Task | n..1 |  | [net EV-112] |

## Lifecycle

Set (counts one use on Free) → changed → cleared (DELETE).

## System fields

| Field | Set when | Source |
|---|---|---|
| history item | every set | [net EV-112] |

## Rules

- R-035, R-036, R-037, R-044, R-046, R-047

## Not tested

- Files values, Relationship values, values at the 60-use limit.
