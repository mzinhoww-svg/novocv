# E-010 User
Product term: User (seat) · Parent: company · Status: draft

## Fields

| Field | Type | Required | Default | Constraints or enum | Source |
|---|---|---|---|---|---|
| id | int | system | | | [net EV-025] |
| name, email | string | yes | | | [net EV-025] |
| locale, timezone_name, default_currency | string | yes | | drive date and number formats | [net EV-025] |
| active_flag, is_deleted | bool | system | | | [net EV-025] |
| is_admin | number | system | | | [net EV-025] |
| access | array of {app, admin, permission_set_id} | system | | apps such as sales, campaigns, projects | [net EV-025] |
| is_you | bool | system | | marks the current user ("(You)") | [net EV-025] |

## Relations

| Relation | Target | Cardinality | On delete | Source |
|---|---|---|---|---|
| owns deals, activities, organizations | E-001, E-002, E-005 | one to many | not tested | [net EV-009] |
| follows deals | E-001 Deal | many to many | not tested | [obs EV-027] |

## Lifecycle

Managed in Settings > Manage users (seats are billed; A5 to add).

## System fields

| Field | Set when | Source |
|---|---|---|
| created, modified, last_login | account events | [net EV-025] |

## Rules

- R-012, R-048

## Not tested

- Roles, permission sets and visibility groups in practice (needs a second user).
