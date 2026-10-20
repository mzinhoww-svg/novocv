# E-011 Checklist
Product term: Checklist · Parent: E-004 · Status: reviewed

## Fields

| Field | Type | Required | Default | Constraints or enum | Source |
|---|---|---|---|---|---|
| id | uuid | yes |  |  | [net EV-069] |
| name | string | yes | "Checklist" |  | [net EV-069] |
| items | {name, resolved, assignee, parent, orderindex}[] | no | [] | items can nest (parent, children) | [net EV-069] |
| resolved, unresolved | number | yes | 0 | counts | [net EV-069] |
| show_completed | boolean | yes | false |  | [net EV-069] |

## Relations

| Relation | Target | Cardinality | On delete | Source |
|---|---|---|---|---|
| on | E-004 Task | n..1 |  | [net EV-069] |

## Lifecycle

Created empty at once → items added → items resolved (hidden behind "Show completed").

## System fields

| Field | Set when | Source |
|---|---|---|
| creator, date_created | create | [net EV-069] |

## Rules

- R-030, R-031

## Not tested

- Item assignees, nested items, templates.
