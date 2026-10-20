# E-010 Comment
Product term: Comment · Parent: E-004 · Status: reviewed

## Fields

| Field | Type | Required | Default | Constraints or enum | Source |
|---|---|---|---|---|---|
| id | string (numeric) | yes |  |  | [net EV-058] |
| comment | {text, attributes}[] | yes |  | block-based rich text | [net EV-058] |
| userid | number | yes |  | author | [net EV-058] |
| date | epoch ms | yes |  |  | [net EV-058] |
| resolved, assignee | boolean, user | no | false, null | assigned comments | [net EV-058] |
| reactions | [] | no | [] |  | [net EV-058] |

## Relations

| Relation | Target | Cardinality | On delete | Source |
|---|---|---|---|---|
| on | E-004 Task | n..1 |  | [net EV-058] |

## Lifecycle

Posted → edited, resolved or deleted (not tested).

## System fields

| Field | Set when | Source |
|---|---|---|
| date_updated | edit | [net EV-058] |

## Rules

- R-026

## Not tested

- Threads, mentions, assigned comments, reactions.
