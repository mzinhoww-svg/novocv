# Fixtures

All fixtures live in list "[RE] Board study" (L-004), in the test workspace. Assignee: the operator or nobody.

| Feature | Name | Case | Created | Ledger |
|---|---|---|---|---|
| F-001 to F-008 | [RE] minimal | Name only | 2026-10-16 | L-005 |
| F-001 to F-008 | [RE] typical | Assignee (operator), due next week, priority, one tag | 2026-10-16 | L-005 |
| F-002 | [RE] overdue | Due date 3 days ago, open | 2026-10-16 | L-005 |
| F-002 | [RE] due today | Due today | 2026-10-16 | L-005 |
| F-002 | [RE] due next week | Start and due date range | 2026-10-16 | L-005 |
| F-002 | [RE] no date | No dates | 2026-10-16 | L-005 |
| F-002, F-006 | [RE] long title ... | 200+ characters, emoji and accents | 2026-10-16 | L-005 |
| F-002, F-007 | [RE] parent with subtasks | Two subtasks "[RE] child 1", "[RE] child 2" | 2026-10-16 | L-005 |
| F-002, F-007 | [RE] blocked / [RE] blocking | Dependency between them | 2026-10-16 | L-005 |
| F-007 | [RE] checklist | Checklist with 3 items, 1 resolved | 2026-10-16 | L-005 |
| F-001 | [RE] in progress | Status in progress | 2026-10-16 | L-005 |
| F-001 | [RE] complete | Status complete | 2026-10-16 | L-005 |
| F-009 to F-012 | [RE] all fields | One value in every custom field type | 2026-10-16 | L-005 |
| F-003 | [RE] created in column | Created from the IN PROGRESS column | 2026-10-16 | L-009 |
| F-001 | [RE] v-01 .. [RE] v-40 | Volume for virtual scroll | 2026-10-16 | L-006 |
| F-009 to F-012 | [RE] cf-<type> | One list-level custom field per type | 2026-10-16 | L-007 onward |

## Teardown, 2026-10-16

All fixtures above were removed with the list [RE] Board study (L-004), which sits in Trash for 30 days. The temporary task "[RE] tag cleanup" (L-017) was created in List only to reach the tag picker and was deleted the same minute.
