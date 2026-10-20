# Topic: deletion and restore
Features: F-009 · Status: draft

## Summary

Deletes are soft for 30 days. The confirmations say what goes with each item, but deals and activities do not behave as the deal dialog and the docs say: activities survive their deal.

## Behavior

- Deal: dialog lists notes, files, documents and invoices; after delete the page shows a permanent deletion date 30 days later and a Restore button; activities stay open (R-032) [obs EV-045] [obs EV-046] [net EV-047].
- Docs say deleting a deal deletes its activities, notes and attachments [doc SRC-014]; observed behavior differs for activities.
- Activity: deletable from the deleted deal's page (R-033) [obs EV-048].
- Note: "cannot be undone" (R-034) [obs EV-043].
- Pipeline: move or delete its deals, with a warning when deleting (R-035) [obs EV-060] [obs EV-061].
- Organization: linked items remain without it (R-036) [obs EV-062].
- Restore data keeps deleted leads, deals, people and organizations for 30 days [doc SRC-015]; whether activities can be restored there is open (Q-002).

## Scope and configuration

| Setting | Scope | Default | Evidence |
|---|---|---|---|
| Retention | company | 30 days | [obs EV-046] [doc SRC-015] |

## Rules

- R-032, R-033, R-034, R-035, R-036

## Not tested

- Restoring anything; bulk delete from lists; deleting persons.
