# Topic: locale and formats
Features: F-001, F-002, F-003 · Status: draft

## Summary

The account used English (US) for the interface with a Brazilian region setting and BRL. Numbers, dates and some sentence glue follow the regional setting, so the English interface shows Portuguese dates and words.

## Behavior

- Money: `R$ 1.234.567,89` (dot thousands, comma decimals) on cards and headers [obs EV-010].
- Short dates in forms: `16 de out de 2026`, pattern `D [de] MMM [de] YYYY` [obs EV-022].
- Long dates: `10 de outubro de 2026` in the deal summary [obs EV-027].
- Agenda header: `sexta-feira, outubro 16º` (Portuguese weekday with an English-style ordinal) [obs EV-022].
- History: `Hoje às 13:11` next to English labels [obs EV-027].
- Form copy: "Add Location, Video call e Description" (Portuguese "e") [obs EV-022].
- Expected close date input placeholder `DD/MM/YYYY` [obs EV-049].
- API times are UTC; the UI shows local time (UTC−03:00) [net EV-009] [obs EV-019].

## Scope and configuration

| Setting | Scope | Default | Evidence |
|---|---|---|---|
| Interface language | user | English (US) in this account | [obs EV-001] |
| Regional format | user | Brazilian Portuguese formats | [obs EV-022] |
| Default currency | user and company | BRL | [obs EV-049] |

## Rules

- R-007, R-017

## Not tested

- Portuguese interface language; other regional settings; time zone changes.
