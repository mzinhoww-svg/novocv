# Findings

## Problems

| ID | Finding | Severity | Where | Evidence |
|---|---|---|---|---|
| B-001 | View changes (collapse, card size, grouping) are lost on reload without any warning; "Save view" is the only cue | Medium | S-001 | [obs EV-017][obs EV-046] |
| B-002 | Tasks created quickly one after another can land out of order (v-03 above v-02) | Low | S-001, S-004 | [obs EV-012] |
| B-003 | The list group count lagged during fast creation (29 shown while 54 existed) until reload | Low | S-004 | [obs EV-046] |
| B-004 | Card controls lack accessible names (open area, field toggles, Add subtask); the title link has no focus ring | Medium | C-001 | [obs EV-011][obs EV-034] |
| B-005 | No keyboard way to move a card or to move focus between cards; drag is mouse-only | Medium | S-001 | [obs EV-034][obs EV-046] |
| B-006 | The hover toolbar covers the end of the card title | Low | C-001 | [obs EV-030] |
| B-007 | The view Fields panel lists 7 workspace custom fields that the Custom Field Manager does not show (no way to see where they live) | Medium | C-003, S-003 | [obs EV-044][obs EV-045] |
| B-008 | Creating a list opens an AI settings offer that starts generating before the user agrees | Low | Create List | [obs EV-047] |
| B-010 | Escape in an empty inline input (checklist item) closes the whole task view instead of only the input | Medium | S-002 | [obs EV-068] |
| B-011 | Inline markdown for bold (`**text**`) typed in one go is not converted, while list markdown is | Low | C-012 | [obs EV-055] |
| B-012 | Opening and editing tasks sends a 'viewed' write on every task: a hidden write that feeds recently viewed lists | Low | S-002 | [net EV-058] |
| B-013 | Choosing a country in a Phone field silently changes the user's profile country for every workspace | Medium | C-019 | [obs EV-130][obs EV-131] |
| B-014 | "Required in tasks" does not turn on in Free Forever and gives no message beyond a tooltip; Pinned jumps to an upgrade dialog | Medium | C-018 | [obs EV-082][obs EV-083] |
| B-015 | Deleting a field has no Undo; the confirm dialog shows the task count only after a delay, so a fast click confirms without it | Low | C-018 | [obs EV-126][obs EV-127] |
| B-016 | Global search kept listing tasks of a deleted list minutes after the delete | Low | Search | [obs EV-138] |
| B-017 | Tag Manager is Business Plus; on Free the only way to delete a Space tag is from a task's tag picker, so an unused tag needs a task to reach it | Low | Tags | [obs EV-135][obs EV-136] |
| B-018 | Tasks and Relationship fields are created as custom fields but appear only in the Relate menu and a Related tab, not in the Fields section with the others | Low | C-017 | [obs EV-117][obs EV-118] |
| B-009 | Many entry points push AI (Assign with AI, Prioritize with AI, Ask AI to build filters, AI fields suggestions) into basic pickers | Low | C-005, C-009 | [obs EV-006][obs EV-041][obs EV-039] |

## Strengths

- Every card field edits in place with optimistic updates, and completing shows Undo [obs EV-012].
- Changes reach other open tabs without reload [obs EV-032].
- Adding a status now asks for its scope (list or space) instead of silently changing the Space [obs EV-037].
- Column paging keeps large lists responsive [obs EV-046].
- Number and money formats per field: BRL with Brazilian separators works out of the box [obs EV-102][obs EV-103].
- Restoring a deleted field from Trash brings its values back [obs EV-129].
- Every field change writes one activity line with the old and new value [obs EV-117].
- Location fields resolve real addresses through Google Places and keep coordinates [obs EV-114][net EV-112].
