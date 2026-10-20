# E-007 Note
Product term: Note · Parent: E-001 Deal, E-005 Organization or E-006 Person · Status: draft

## Fields

| Field | Type | Required | Default | Constraints or enum | Source |
|---|---|---|---|---|---|
| id | int | system | | | [net EV-063] [doc SRC-022] |
| content | HTML string | yes | | sanitized | [net EV-063] [doc SRC-022] |
| deal_id, org_id, person_id, lead_id, project_id | int or null | at least one link | | | [net EV-063] [doc SRC-022] |
| pinned_to_deal_flag (and _organization_, _person_, _lead_, _project_) | bool | no | false; true for lost comments | | [net EV-063] |
| user_id | int | system | current user | | [doc SRC-018] |
| active_flag | bool | system | true | false when deleted | [doc SRC-018] |

## Relations

| Relation | Target | Cardinality | On delete | Source |
|---|---|---|---|---|
| deal | E-001 Deal | many to one | the deal dialog says notes are deleted with the deal | [obs EV-045] |

## Lifecycle

Created from the Notes tab or as the lost comment; deleted with a confirmation that says it cannot be undone. Evidence: [obs EV-042] [obs EV-043].

## System fields

| Field | Set when | Source |
|---|---|---|
| add_time, update_time | creation, change | [doc SRC-018] |

## Rules

- R-029, R-034

## Not tested

- Notes tab editor, comments on notes ("Add a comment"), unpinning.
