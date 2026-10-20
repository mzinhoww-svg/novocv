# E-001 Workspace
Product term: Workspace (API: team) · Parent: none · Status: reviewed

## Fields

| Field | Type | Required | Default | Constraints or enum | Source |
|---|---|---|---|---|---|
| id | string (numeric) | yes |  |  | [net EV-053] |
| name | string | yes |  |  | [obs EV-048] |
| plan | enum | yes | Free Forever | Free Forever, Unlimited, Business, Business Plus, Enterprise | [doc SRC-035] |
| custom_field_uses | counter | yes | 0 | limit 60 on Free Forever, unlimited on paid plans | [net EV-112][doc SRC-005] |
| region | string | yes |  | API gateway per region (eu-west-1 seen) | [net EV-005] |

## Relations

| Relation | Target | Cardinality | On delete | Source |
|---|---|---|---|---|
| has | E-002 Space | 1..n | deletes all | [obs EV-048] |
| has members | E-013 User | 1..n |  | [obs EV-048] |
| has | E-007 CustomField | 0..n |  | [net EV-099] |

## Lifecycle

Created by the owner from the workspace switcher; onboarding adds a Space, a List and two chat channels (R-033 context, EV-048).

## System fields

| Field | Set when | Source |
|---|---|---|
| id | creation | [net EV-053] |

## Rules

- None specific.

## Not tested

- Deleting a workspace (kept by instruction).
