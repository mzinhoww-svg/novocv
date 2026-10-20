# E-009 Lost reason
Product term: Lost reason · Parent: none (company list) · Status: draft

## Fields

| Field | Type | Required | Default | Constraints or enum | Source |
|---|---|---|---|---|---|
| label | string | yes | | up to 100 predefined reasons per company | [obs EV-040] [doc SRC-011] |
| allow free-form (company flag) | bool | no | | "Allow free-form reasons" | [doc SRC-012] |

The deal stores the chosen text in Deal.lost_reason [net EV-063]. No public endpoint for the list was found [inf] Q-003.

## Relations

| Relation | Target | Cardinality | On delete | Source |
|---|---|---|---|---|
| deals | E-001 Deal | by text | not tested | [net EV-063] |

## Lifecycle

Managed in Company settings > Lost reasons (A4; read only).

## System fields

| Field | Set when | Source |
|---|---|---|
| none observed | | [obs EV-040] |

## Rules

- R-027, R-028

## Not tested

- Editing the list; the dialog with no predefined reasons.
