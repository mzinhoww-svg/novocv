# E-004 Task
Product term: Task · Parent: E-003 (home list) · Status: reviewed

## Fields

| Field | Type | Required | Default | Constraints or enum | Source |
|---|---|---|---|---|---|
| id | string | yes |  | short alphanumeric id | [net EV-053] |
| name | string | yes |  | no limit hit at 216 characters | [net EV-053][obs EV-060] |
| content | rich text (Quill delta) | no |  | also text_content | [net EV-053] |
| status | Status | yes | first status of the list |  | [net EV-053] |
| priority | enum string | no | null | "1" Urgent, "2" High, "3" Normal, "4" Low | [net EV-007][doc SRC-031] |
| start_date, due_date | epoch ms string | no | null | with start_date_time, due_date_time flags | [net EV-014][net EV-053] |
| users | {userid, type}[] | no | owner | type: assigned, watcher, owner | [net EV-053] |
| tags | string[] | no | [] | Space tags | [net EV-053] |
| parent | task id | no | null | set for subtasks | [net EV-063] |
| orderindex, boardindex | number | yes |  | one order index per grouping | [net EV-063][net EV-014] |
| custom_type | task type | no | null (Task) | Task, Milestone, Form Response, Meeting Note, custom | [net EV-053][obs EV-077] |
| fields | CustomFieldValue[] | no | [] |  | [net EV-053][net EV-112] |
| states | {is_archived, is_deleted} | yes | false |  | [net EV-053] |

## Relations

| Relation | Target | Cardinality | On delete | Source |
|---|---|---|---|---|
| in | E-003 List | n..1 home, n..n extra lists | Trash with the list | [net EV-053] |
| has subtasks | E-004 Task | 0..n |  | [net EV-063] |
| has | E-010 Comment | 0..n |  | [net EV-058] |
| has | E-011 Checklist | 0..n |  | [net EV-069] |
| depends on | E-012 Dependency | 0..n |  | [net EV-069] |
| has values | E-008 CustomFieldValue | 0..n |  | [net EV-112] |
| has history | E-014 HistoryItem | 0..n |  | [net EV-007] |

## Lifecycle

open statuses → custom (active) statuses → closed status; archived and deleted are separate flags; deleted tasks sit in Trash 30 days.

## System fields

| Field | Set when | Source |
|---|---|---|
| date_created | create | [net EV-053] |
| date_updated | every change | [net EV-053] |
| date_closed | moved to a closed status | [net EV-053] |
| creator, owner | create | [net EV-053] |

## Rules

- R-003, R-010, R-020, R-024, R-028, R-029

## Not tested

- Recurrence, time tracking, cover image, privacy and sharing, multiple lists.
