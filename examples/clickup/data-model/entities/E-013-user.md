# E-013 User
Product term: User · Parent: E-001 (member) · Status: reviewed

## Fields

| Field | Type | Required | Default | Constraints or enum | Source |
|---|---|---|---|---|---|
| id | number | yes |  |  | [net EV-053] |
| username, initials, color | string | yes |  |  | [net EV-053] |
| profilePicture | url | no |  |  | [net EV-053] |
| timezone | string | yes |  |  | [net EV-053] |
| country | ISO code | no |  | set by the Phone field flag menu | [obs EV-131][net EV-112] |
| task layout | enum | yes | Full screen | Full screen, Modal, Sidebar | [obs EV-052] |

## Relations

| Relation | Target | Cardinality | On delete | Source |
|---|---|---|---|---|
| member of | E-001 Workspace | n..n |  | [obs EV-048] |

## Lifecycle

Not studied.

## System fields

| Field | Set when | Source |
|---|---|---|

## Rules

- R-021, R-036

## Not tested

- Roles, guests, invitations (need a second person, L1).
