# Coverage

Values: `todo`, `partial`, `done`, `blocked`, `n/a`. The work queue is this table, top to bottom.

| Feature | Anatomy | States | Interactions | Rules | Data | Network | Keyboard and a11y | Persistence | Design | Notes |
|---|---|---|---|---|---|---|---|---|---|---|
| F-001 Pipeline board | done | done | partial | done | done | partial | partial | partial | done | Drag did not complete (drop zones only); card customization and filters not opened; sort persistence not changed (shared preference) |
| F-002 Deal detail | done | done | partial | done | done | done | partial | partial | partial | Composer tabs other than Activity not opened; Changelog tab not opened |
| F-003 Activities | done | done | done | done | done | done | partial | done | partial | Guests, location, video call and recurrence not tested (would reach people or need sync) |
| F-004 Next-activity rule | done | done | done | done | done | done | n/a | done | done | From the Activities list and calendar not tested |
| F-005 Won flow | done | done | done | done | done | partial | n/a | done | done | Won dropdown (create project) not opened; drag to Won not completed |
| F-006 Lost flow | done | done | done | done | done | done | n/a | done | done | Free-form reason never offered (Q-003) |
| F-007 Add deal form | done | done | done | done | done | done | partial | done | partial | Person creation and custom fields not exercised (company fields) |
| F-008 Pipeline editor | done | done | partial | done | done | n/a | n/a | done | partial | Stage reorder by drag and duplicate pipeline not tested |
| F-009 Delete and restore | partial | done | done | done | done | done | n/a | done | n/a | Restore itself not exercised; Restore data read only |
| F-010 Activities list | partial | partial | todo | partial | n/a | todo | todo | todo | partial | Rows show production data: only the toolbar was captured |
| F-011 Quick add and shortcuts | done | n/a | partial | done | n/a | n/a | partial | n/a | n/a | Shortcut keys not pressed (focus could hit production records) |
| F-012 Visibility | partial | n/a | partial | partial | done | n/a | n/a | blocked | n/a | Effect on other users needs a second account (L1) |
| F-013 Email sync | blocked | blocked | blocked | blocked | partial | blocked | blocked | blocked | blocked | Connecting a mailbox is A5; documented from public sources |
| F-014 Calendar sync | blocked | blocked | blocked | blocked | partial | blocked | blocked | blocked | blocked | Sync was inactive and stays so (A5); public sources only |
| F-015 WhatsApp | blocked | blocked | blocked | blocked | n/a | blocked | blocked | blocked | blocked | Connecting is A5; public sources only |
| F-016 E-signature | blocked | blocked | blocked | blocked | n/a | blocked | blocked | blocked | blocked | Sending a document reaches signers (A5); public sources only |
| F-017 Company settings | partial | n/a | blocked | partial | n/a | n/a | n/a | n/a | n/a | A4: read only, not exercised |
