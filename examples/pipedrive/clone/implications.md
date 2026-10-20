# Implications for the clone

## Copy

| Area | Item | Why | Refs |
|---|---|---|---|
| Board | Four-state activity icon on every card, clickable, opening the deal's activity list | One glance tells the seller what needs action | R-001, R-010 |
| Board | Default order: overdue, today, no next step, future; newest first on ties | Puts the day's work at the top | R-003, R-004, R-005 |
| Activities | Prompt for the next activity when the last open one is done; allow Cancel; leave a visible warning | Keeps every deal moving without blocking the seller | R-014, R-015 |
| Activities | Form with the day agenda beside it, next 15-minute slot, Busy on timed activities | Conflicts are visible before saving | R-017 |
| Activities | Global badge of overdue and due-today activities | Daily workload in one number | R-012 |
| Lost | Required reason from a list; comment kept as a pinned note | Clean loss analysis | R-027, R-029 |
| Pipeline | Deleting a pipeline forces a decision about its deals | Prevents silent data loss | R-035 |
| Delete | Deleted items keep a page with the purge date and Restore | Easy recovery | R-032 |
| Stage bar | Days per stage and one-click moves | Speed and visibility of cycle time | R-030, R-031 |

## Avoid

| Area | Item | Why | Refs |
|---|---|---|---|
| Activities | Defaulting the next activity to the first type in the list | Sellers change it almost every time | B-002 |
| Won | Ignoring the configured follow-up type and delay | The setting looks broken | B-001 |
| Delete | Leaving activities open when their deal is deleted, and not saying so | Orphaned tasks on calendars and counts | B-003 |
| Won and lost | Leaving open activities pending on closed deals without asking | Stale tasks | B-004 |
| Lost | A free-form setting that the dialog does not honor | Confusing configuration | B-005 |
| Pipeline editor | Accepting rotting of 0 days | Every deal looks rotten | B-007 |
| Pipeline delete | Defaulting to moving deals into another pipeline | Easy to pollute a live pipeline | B-009 |
| Locale | Mixing the interface language with another language's dates and words | Looks unfinished | B-008 |
| Interface | Several tip and upsell banners on the same page | Noise | B-010 |

## Improve

| Area | Item | How | Refs |
|---|---|---|---|
| Next activity | Suggest the next type and date from the stage playbook or the activity just completed | Store a default next step per stage; preselect it in the prompt | R-016, B-002 |
| Closing | Ask what to do with open activities on won, lost and delete | Options: complete, cancel, keep; default to cancel for lost and delete | B-003, B-004 |
| Signals | Show the same activity state in every view (list, deal page header, API) | Expose a computed `next_step_state` field: overdue, today, future, none | R-001, R-020 |
| Rule in the domain | Enforce the next-activity rule in the API, not only in the UI | API responses and webhooks flag deals with no next step; integrations and agents see it | R-014 |
| Board | Re-sort in place after a change, with a short animation | Removes the stale order until reload | B-006 |
| WhatsApp | First-class WhatsApp activity and conversation linked to the deal | The channel Brazilian SMBs use; requires BR-005 | BR-005 |
| Brazil | Portuguese interface, BRL, NFS-e for the clone's own billing, São Paulo hosting | Local fit and compliance | BR-007, BR-008, BR-009 |
