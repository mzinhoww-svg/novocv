# Endpoints

IDs in paths are `:id`. Shapes and types only; no real values. The web app calls the same host as the page (`/api/v1/...`) and passes a `session_token` query parameter on every call [net EV-025]; the public API (v1 and v2) is documented in SRC-017 and SRC-018. Deprecated v1 endpoints with v2 replacements are out of support since 2026-08-01 [doc SRC-026], so a compatible clone should model v2 and treat these web-app v1 calls as the UI's private contract.

| Method | Template | Triggered by | Request shape | Response shape | Evidence |
|---|---|---|---|---|---|
| GET | `/api/v1/deals/:id/activities?done&start` | Card status icon popover | none | `{data: Activity(v1)[]}` | [net EV-025] |
| PUT | `/api/v1/activities/:id` | Done circle (popover, Focus) | `{done: boolean}` | `{data: Activity(v1)}` with marked_as_done_time | [net EV-025] |
| GET | `/api/v1/activities/:id` | After marking done | none | `{data: Activity(v1)}` | [net EV-025] |
| POST | `/api/v1/activities` | Save in the activity form | `{subject, type, busy_flag, due_date, attendees[], assigned_to_user_id, done, deal_id, participants[], person_id, org_id}` | 201, `{data: Activity(v1)}` | [net EV-031] |
| DELETE | `/api/v1/activities/:id` | Activity menu > Delete | none | 200 | [obs EV-048] [net EV-047] |
| GET | `/api/v1/activities?start_date&end_date&user_id&limit&include_duration&include_private&include_recurring` | Day agenda in the activity form | none | `{data: Activity(v1)[]}` | [net EV-025] |
| GET | `/api/v1/scheduler/timeslots?start_date&end_date&is_active` | Day agenda | none | `{data: [], related_objects: {events: []}}` | [net EV-025] |
| GET | `/api/v1/activityTypes` | Activity form | none | `{data: ActivityType[]}` | [net EV-025] |
| GET | `/api/:id/fields/activity?activeOnly` | Activity form | none | `{data: Field[]}` with mandatory and visibility flags | [net EV-025] |
| GET | `/api/v1/users?include_deleted_users` | Owner picker | none | `{data: User[]}` | [net EV-025] |
| GET | `/api/v1/deals/:id` | Prefill links; reload a deal | none | `{data: Deal(v1)}` with next_activity_* and counts | [net EV-025] |
| PUT | `/api/v1/deals/:id?include_projects` | Stage bar click; Won; Reopen | `{pipeline_id, stage_id}` or `{status}` | `{data: Deal(v1)}` | [net EV-033] [net EV-063] |
| PUT | `/api/v1/deals/:id` | Mark as lost | `{lost_reason, status}` | `{data: Deal(v1)}` | [net EV-063] |
| POST | `/api/v1/notes` | Lost comment | `{deal_id, content, pinned_to_deal_flag}` | `{data: Note}` | [net EV-063] |
| POST | `/api/v1/deals` | Save in the Add deal form | `{pipeline_id, visible_to, user_id, stage_id, title, org_id, origin, origin_id, channel, channel_id}` | 201, `{data: Deal(v1)}` (81 keys) | [net EV-063] |
| GET | `/api/:id/deals/count?archived_status&pipeline_id&quick_filter_id&status` | After creating a deal | none | count | [net EV-063] |
| DELETE | `/api/v1/deals/:id` | Deal menu > Delete | none | 200 | [net EV-047] |
| GET | `/api/v1/data-police/dataQualityRules/missingRequiredFields?deal_id&new_stage_id` | Before a stage move | none | `{dealId, missingDealFields, missingPersonFields, missingOrganizationFields, personId, organizationId}` | [net EV-033] |
| GET | `/api/v1/data-police/dataQualityRules?enabled` | Deal page | none | `{importantFields, requiredFields}` | [net EV-031] |
| POST | `/api/:id/automation-suggestions/suggestions/trigger` | After a stage move | `{pattern[], stageId}` | `{success, data}` | [net EV-033] |
| GET | `/api/:id/automation-suggestions/suggestions?experimentVariant&onlyVisible&patterns` | Deal page | none | suggestions | [net EV-033] |
| POST | `/proactive-cards-service/api/v1/triggers` | After marking done | `[{triggerType}]` | `{data: []}` | [net EV-025] |
| POST | `/api/v1/insights-api/deals/chart` and `/activities/chart` | Won modal statistics | report filter objects | chart data | [net EV-063] |
| GET | `/api/v1/fastis/sync/active`, `/api/v1/fastis/sync/:id/status` | Activity form (calendar sync check) | none | 204 or `{data: {status}}` | [net EV-025] |
| GET | `/api/v1/deals/:id/participants?limit&start` | Activity form | none | `{data: null}` when none | [net EV-025] |

Public API facts a clone that offers an API should match:

- v2 base `https://api.pipedrive.com/api/v2`, cursor pagination with `limit` (max 500) and `additional_data.next_cursor` [doc SRC-024] [net EV-009].
- Daily token budget per company, scaled by plan and seats; HTTP 429 when exhausted [doc SRC-025].
- Webhooks v2 with `meta`, `data` and `previous`; retries at 3, 30 and 150 seconds [doc SRC-027].
- OAuth access tokens last 60 minutes [doc SRC-028].

Third-party scripts seen on the page: Segment, FullStory, Intercom, Google Tag Manager, Gainsight PX, Grafana Faro (front-end telemetry) [obs EV-001].
