# E-005 Organization
Product term: Organization · Parent: none · Status: draft

## Fields

| Field | Type | Required | Default | Constraints or enum | Source |
|---|---|---|---|---|---|
| id | int | system | | | [net EV-009] |
| name | string | yes | | | [net EV-009] |
| owner_id | int | yes | current user | | [net EV-009] |
| visible_to | int | yes | owner's visibility group | 1, 3, 5, 7 | [net EV-009] |
| address | object or null | no | | | [net EV-009] |
| website, linkedin | url or null | no | | | [net EV-009] |
| industry, annual_revenue, employee_count | int or null | no | | | [net EV-009] |
| label_ids | int[] | no | [] | | [net EV-009] |
| custom_fields | object | no | | | [net EV-009] |
| is_deleted | bool | system | false | 30-day restore | [net EV-009] [obs EV-062] |

## Relations

| Relation | Target | Cardinality | On delete | Source |
|---|---|---|---|---|
| deals | E-001 Deal | one to many | deals remain without the organization | [obs EV-062] |
| persons | E-006 Person | one to many | not tested | [doc SRC-017] |
| notes, files, documents, invoices | E-007 Note and others | one to many | deleted with the organization | [obs EV-062] |

## Lifecycle

Created from the Add deal form (NEW badge) or the API; deleted from its page with a 30-day restore. Evidence: [obs EV-051] [obs EV-062].

## System fields

| Field | Set when | Source |
|---|---|---|
| add_time, update_time | creation, change | [net EV-009] |

## Rules

- R-036, R-038

## Not tested

- Enrichment ("Enrich" buttons), merging duplicates, the organization page itself.
