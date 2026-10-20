# E-002 Space
Product term: Space (legacy API: project) · Parent: E-001 · Status: reviewed

## Fields

| Field | Type | Required | Default | Constraints or enum | Source |
|---|---|---|---|---|---|
| id | string (numeric) | yes |  |  | [net EV-053] |
| name | string | yes | "Space" from onboarding |  | [obs EV-048] |
| statuses | Status[] | yes | to do, in progress, complete | inherited by lists unless a list has its own | [obs EV-037][doc SRC-018] |
| tags | Tag[] | no |  | tags are Space-level | [obs EV-040][obs EV-136] |

## Relations

| Relation | Target | Cardinality | On delete | Source |
|---|---|---|---|---|
| contains | E-003 List | 0..n | list goes to Trash | [obs EV-048] |
| owns | E-006 Tag | 0..n |  | [obs EV-136] |
| owns | E-005 Status | 1..n |  | [obs EV-037] |

## Lifecycle

Active; deleted spaces were not observed.

## System fields

| Field | Set when | Source |
|---|---|---|
| space_id | set on every task as its location | [net EV-053] |

## Rules

- R-011, R-050

## Not tested

- Folders, Space settings, ClickApps.
