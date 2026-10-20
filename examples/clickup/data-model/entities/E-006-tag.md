# E-006 Tag
Product term: Tag · Parent: E-002 · Status: reviewed

## Fields

| Field | Type | Required | Default | Constraints or enum | Source |
|---|---|---|---|---|---|
| name | string | yes |  | lower case as typed | [net EV-014][obs EV-040] |
| tag_fg, tag_bg | hex | yes | generated |  | [net EV-014] |

## Relations

| Relation | Target | Cardinality | On delete | Source |
|---|---|---|---|---|
| on | E-004 Task | n..n | removed from all tasks when deleted | [obs EV-136] |

## Lifecycle

Created from a card picker (Space-level) → deleted from a picker ("everywhere in this Space") → Trash.

## System fields

| Field | Set when | Source |
|---|---|---|

## Rules

- R-006

## Not tested

- Tag Manager (Business Plus), renaming and colors.
