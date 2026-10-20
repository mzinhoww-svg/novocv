# E-006 Person
Product term: Person (contact person) · Parent: E-005 Organization (optional) · Status: draft

## Fields

| Field | Type | Required | Default | Constraints or enum | Source |
|---|---|---|---|---|---|
| id | int | system | | | [doc SRC-017] |
| name, first_name, last_name | string | name | | | [doc SRC-017] |
| emails, phones | array of {value, primary, label} | no | | labels such as work, mobile | [doc SRC-017] [obs EV-050] |
| org_id, owner_id | int | no, yes | current user | | [doc SRC-017] |
| visible_to, label_ids | int, int[] | yes, no | | | [doc SRC-017] |
| marketing_status | enum | no | | no_consent, unsubscribed, subscribed, archived | [doc SRC-017] |
| custom_fields | object | no | | | [doc SRC-017] |

## Relations

| Relation | Target | Cardinality | On delete | Source |
|---|---|---|---|---|
| organization | E-005 Organization | many to one | not tested | [doc SRC-017] |
| deals | E-001 Deal | one to many | not tested | [doc SRC-017] |
| activity participation | E-002 Activity | many to many | not tested | [net EV-009] |

## Lifecycle

Not studied: the study created no persons (no real or fake contact data in production).

## System fields

| Field | Set when | Source |
|---|---|---|
| add_time, update_time | creation, change | [doc SRC-017] |

## Rules

- R-037

## Not tested

- Everything observable: persons were out of scope to avoid contact records in production.
