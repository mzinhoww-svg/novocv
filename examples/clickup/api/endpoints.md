# Endpoints

IDs in paths are `:id`. Shapes and types only; no real values.

The web app talks to a regional gateway, `frontdoor-prod-<region>.clickup.com` (the test workspace used `eu-west-1-2`), split by service path (`/tasks/v1`, `/task-v3`, `/view/v1`, `/customFields/v2`, `/hierarchy/v3`, `/data/v3`) [net EV-005]. Search goes to a separate GraphQL gateway `frontdoor-search.clickup-eu.com/graphql/gateway` [net EV-014]. This internal API is not the public API (`api.clickup.com/api/v2`, documented in SRC-023 to SRC-034); a clone needs only its behavior, not its paths.

## Board view

| Method | Template | Triggered by | Request shape | Response shape | Evidence |
|---|---|---|---|---|---|
| POST | `/view/v1/genericView` | Board load; any view draft change (`?fresh_req&include_empties&skip_max_length`) | the full view definition: `id, name, type, parent{id,type}, visibility, settings{...}, grouping{field,dir,collapsed[],ignore}, divide{field,dir,collapsed[]}, sorting{fields[]}, filters{op,fields[],search,show_closed,...}, columns{fields[{field,pinned,hidden}]}, auto_save, ...` | `{board{groups[{data{status,type}}]}, tasks, team_id, last_page, overall_calculations, permissions, _version_vector}` | [net EV-005][net EV-014] |
| POST | `/task-v3/experience/:workspace/tasks/bulk` | Board load, refetch after edits, next page on column scroll | `{ids[], fields[], filterOmit, customFieldIds[], taskRelationshipTypes[], relatedTaskFields[], orderindexes{basic[], status[{listId}]}, rollupFields[], includeClosedSubtasksInRollup}` | `{tasks[{status, data{task{...}}}], statuses[{status,type}], fields, list_status_ids_map, user_map, group_map, parent_task_map}` | [net EV-014] |
| POST | `/:id/access/:id/task/acls/bulk?expand_groups&include_parents` | After refetching tasks | not captured | not captured | [net EV-007] |
| GET | `/:id/core/:id/tasks/properties` | Board load | | | [net EV-005] |
| GET | `/customFields/v2/field` | Board load | | | [net EV-005] |
| GET | `/tasks/v1/tag` | Board load | | | [net EV-005] |
| PUT | `/tasks/v1/item?check_dependencies` | Card priority | `{item_ids[], priority: "1".."4"}` | `{assignees{add,rem}, followers{add,rem}, item_ids[], new_indexes{}, versions[{object_type, object_id, operation, data{changes[{field,before,after,history_id}], relationships[{type,object_type}]}, version, date_updated}], hist_ids{}, dependencies_adjusted[], schedulingData{changes[],reachedDependencyLimit,reachedSubtaskLimit}}` | [net EV-007] |
| PUT | `/tasks/v1/item?check_dependencies&check_remap_subtasks` | Card dates (sent when the picker closes) | `{item_ids[], due_date: epoch-ms, start_date: epoch-ms or "", due_date_time: bool, start_date_time: bool, duration_is_elapsed: bool, duration{}}` | same as above | [net EV-014] |
| PUT | `/tasks/v1/item?check_dependencies&check_resolved` | Mark complete | `{item_ids[], status: "<status name>"}` | same, plus `orderindices` | [net EV-014] |
| PUT | `/tasks/v1/task/:id?check_dependencies&field_backlinks` | Card assignee | `{assignees{add[number], rem[]}}` | `{task{...}, newHistIds, undo_order, dependencies_adjusted, version, schedulingData}` | [net EV-014] |
| POST | `/tasks/v1/tag` | Create a tag from a card (on picker close) | `{name, tag_fg: hex, tag_bg: hex, new: bool, task_ids[]}` | empty | [net EV-014] |
| GET | `/data/v3/workspaces/:id/workweek_schedules/reference/workspace/:id` | Opening the date picker | | `{data}` | [net EV-014] |
| GET | `/data/v3/workspaces/:id/schedule_exceptions/reference/workspace/:id` | Opening the date picker | | `{data}` | [net EV-014] |

Every task write returns a `versions[]` array with the field changes (`before`, `after`, `history_id`) and the task's place in the hierarchy (`task-in-space`, `task-in-folder`, `task-in-list`) [net EV-007]. A clone can use the same pattern: one change log entry per field write, which also feeds the activity feed and undo.

Enum samples seen: `priority` "2" (High); `status.type` open, custom, closed; `versions[].object_type` task [net EV-007][net EV-014].

## Custom fields

| Method | Template | Triggered by | Request shape | Response shape | Evidence |
|---|---|---|---|---|---|
| POST | `/customFields/v2/field?ignore_existing` | Create in the field form | `{name, description, type, type_config{...per type}, required, required_on_subtasks, pinned, hide_from_guests, private, permission_level, members[], groups[], default_value, subcategory_id}` | the field: `{id(uuid), name, type, type_id, type_config, userid, date_created, team_id, deleted, required, pinned, private, linked_subcategory, automation_count, ...}` | [net EV-099] |
| PUT | `/field/v3/experience/workspaces/:id/fields/:id/locations` | Right after create | `{new_locations[{parent{type: 6 (List), id}, required, required_on_subtasks, hide_from_guests}]}` | 204 | [net EV-099] |
| PUT | `/customFields/v2/field/:id` | Saving a formula (field-level) | the field with `type_config{formula, simple, version, is_dynamic, return_types[], calculation_state}`, `entity{type: "subcategory", id}` | the field (`type_id` 17 for formula) | [net EV-112] |
| GET | `/customFields/v2/field?subcategory_id&hierarchy_fields&incl_below` | Opening a task or the form | | fields of the location | [net EV-099] |
| POST | `/customFields/v1/task/:id/field/:id` | Setting any value | `{value, value_options?, value_richtext}`; value per type in EV-112 | `{historyIds[], suppressedHistoryCount, version{object_type: task, data{changes[{field, before, after}], relationships[]}}}` | [net EV-112] |
| DELETE | `/customFields/v1/task/:id/field/:id` | Clearing a value | none | as above | [net EV-112] |
| GET | `/entitlements/v1/team/:id/entitlements/custom_field_values` | After each value is set | | `{type: "counter", entitled, planLimits, limit, usage, usageLeft}` | [net EV-112] |
| PUT | `/user/v1/user` | Picking a country in a Phone field | the user's profile with the country | not recorded | [obs EV-131][net EV-112] |
| (DELETE) | `/customFields/v2/field/:id?delete_all=true` | Delete field after the confirm dialog | method inferred from the CORS preflight | not recorded | [net EV-112] |

Type strings recorded in this study: `drop_down`, `number`, `currency` [net EV-099] and `formula` (type_id 17) [net EV-112]. The other internal type strings were not recorded; the public API names 17 of them [doc SRC-001].

## Not captured

- Task creation from the inline form and status creation (Add group): the recorder was not installed at that moment.
- WebSocket frames (realtime): the socket opens before a page script can wrap it; realtime is recorded as UI behavior (R-018).
