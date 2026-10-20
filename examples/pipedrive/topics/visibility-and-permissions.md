# Topic: visibility and permissions
Features: F-012 · Status: draft

## Summary

Every deal, organization and person has a visibility level. Pipelines are visible by visibility group: an account with one default group shows every pipeline to every user. Creating a group or changing pipeline access is a company setting.

## Behavior

- Four levels: Item owner; Item owner's visibility group (default for new deals); group and sub-groups; All users. "Item owner" still shows the item to Deals admins, followers and parent groups (R-048) [obs EV-052].
- API values 1, 3, 5, 7 [net EV-009].
- Visibility groups and permission sets: 15 each on Premium, 25 on Ultimate, none on Lite and Growth [doc SRC-041].
- Only deal admins edit pipelines [doc SRC-004].

## Scope and configuration

| Setting | Scope | Default | Evidence |
|---|---|---|---|
| Item visibility | item | owner's visibility group | [obs EV-052] |
| Pipeline access | visibility group | all pipelines in the default group | [doc SRC-041] |

## Rules

- R-048

## Not tested

- The view of a second user (needs L1 with two accounts).
