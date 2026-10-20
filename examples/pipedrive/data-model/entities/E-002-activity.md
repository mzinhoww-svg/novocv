# E-002 Activity
Product term: Activity · Parent: E-001 Deal (optional) · Status: draft

## Fields

| Field | Type | Required | Default | Constraints or enum | Source |
|---|---|---|---|---|---|
| id | int | system | | | [net EV-009] |
| subject | string | no (placeholder is the type name) | | | [net EV-009] [obs EV-022] |
| type | string | yes | first active type in company order | E-008 ActivityType.key_string | [net EV-009] [net EV-031] |
| owner_id | int | yes | current user | | [net EV-009] [obs EV-022] |
| creator_user_id | int | system | | | [net EV-009] |
| deal_id, org_id, person_id, lead_id, project_id | int or null | no | from context | | [net EV-009] |
| due_date | date | yes | today | YYYY-MM-DD | [net EV-009] [obs EV-022] |
| due_time | time or null | no | null | HH:MM in UTC; the UI offers 15-minute slots | [net EV-009] [obs EV-023] |
| duration | time or null | no | null | HH:MM | [net EV-009] |
| done | bool | yes | false | | [net EV-009] |
| busy | bool | yes | true with a time, false without | Free/Busy in the UI | [net EV-009] [obs EV-023] |
| marked_as_done_time | datetime or null | system | null | set when done | [net EV-009] [net EV-025] |
| participants | array of {person_id, primary} | no | [] | persons, not users | [net EV-009] |
| attendees | array or null | no | null | guests; invites need calendar sync | [net EV-025] [doc SRC-009] |
| priority | int or null | no | null | | [net EV-009] [obs EV-022] |
| outcome | int or null | no | null | per type | [net EV-009] |
| note | HTML or null | no | null | yellow note area in the form | [net EV-009] [obs EV-022] |
| public_description | string or null | no | null | | [net EV-009] |
| location | object or null | no | null | | [net EV-009] |
| conference_meeting_client, _url, _id | string or null | no | null | | [net EV-009] |
| private | bool | no | false | | [net EV-009] |
| is_deleted | bool | system | false | | [net EV-009] [net EV-047] |

## Relations

| Relation | Target | Cardinality | On delete | Source |
|---|---|---|---|---|
| deal | E-001 Deal | many to one | survives the deal's deletion | [net EV-047] |
| organization | E-005 Organization | many to one | not tested | [net EV-009] |
| type | E-008 ActivityType | many to one | not tested | [net EV-025] |
| owner | E-010 User | many to one | not tested | [net EV-009] |

## Lifecycle

Open (done false) to done (done true, marked_as_done_time set) to deleted (is_deleted true). Reverting a done activity was not tested. Evidence: [obs EV-020] [net EV-025] [net EV-047].

## System fields

| Field | Set when | Source |
|---|---|---|
| add_time, update_time | creation, change | [net EV-009] |
| marked_as_done_time | marked done | [net EV-025] |

## Rules

- R-002, R-012, R-013, R-014, R-016, R-017, R-019, R-020, R-021, R-025, R-032, R-033

## Not tested

- Recurrence, guests and invites, location, video call links, outcomes, priorities.
