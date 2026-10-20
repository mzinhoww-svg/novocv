# Rules: stages, won, lost, reopen and deletion

### R-022 Won is one click and needs no confirmation
- Given an open deal on its detail page
- When the user clicks Won
- Then the deal becomes won at once: WON badge and Reopen replace the buttons, the stage bar turns light green, "Create project" turns green, and Won time appears in Details
- Evidence: [obs EV-035]
- Feature: F-005 · Screen: S-002

### R-023 Winning shows a celebration with next steps
- Given the personal preference for the celebration is on
- When a deal is marked won on its detail page
- Then about 4 seconds later a modal shows the deal card, "Close time" and "Activities done", and asks "What's next for this won deal?" with "Schedule follow-up activity" and "Create a project", plus "Don't show me this again"
- Evidence: [obs EV-034]
- Feature: F-005 · Screen: S-002

### R-024 The won follow-up opens with today and the first type
- Given the company setting for the won follow-up popup names a type and a delay
- When the user chooses "Schedule follow-up activity"
- Then the form "Schedule an activity" opens with a "Follow up after winning a deal" box, today's date and the first activity type selected; the configured type and delay are not applied (setting read during the preflight, Q-018)
- Evidence: [obs EV-036]
- Feature: F-005 · Screen: S-002

### R-025 Open activities stay open when a deal is won or lost
- Given a deal with one open activity
- When the deal is marked won or lost
- Then the activity remains open in Focus; nothing asks what to do with it
- Evidence: [obs EV-035] [obs EV-042] [doc SRC-030]
- Feature: F-005, F-006 · Screen: S-002

### R-026 Reopen returns a closed deal to open
- Given a won deal
- When the user clicks Reopen
- Then the deal is open again at once, the Won and Lost buttons return and Won time disappears
- Evidence: [obs EV-037] [net EV-063]
- Feature: F-005 · Screen: S-002

### R-027 Losing a deal requires a reason
- Given the Mark as Lost dialog with no reason selected
- When the user clicks "Mark as lost"
- Then the reason select gets a red border, no message is shown and no request is sent
- Evidence: [obs EV-039]
- Feature: F-006 · Screen: S-002

### R-028 With predefined reasons, the reason must come from the list
- Given the company has predefined lost reasons and the setting "Allow free-form reasons" on
- When the user types text that matches no reason and presses Enter
- Then the list stays empty, no option to use the text appears, and the reason remains unset
- Evidence: [obs EV-040] [obs EV-041]
- Feature: F-006 · Screen: S-002

### R-029 The lost comment becomes a note pinned to the deal
- Given a reason and a comment in the dialog
- When the user marks the deal lost
- Then the deal gets status lost with the reason, and a note with the comment is created and pinned: it shows in Focus (yellow) and History, and Details shows Lost time and Lost reason
- Evidence: [obs EV-042] [net EV-063] [doc SRC-011]
- Feature: F-006 · Screen: S-002

### R-030 Clicking a stage moves the deal at once
- Given an open deal
- When the user clicks a later stage in the stage bar
- Then the app checks the target stage's required fields, moves the deal without confirmation, and may show a "Recommended first automation" banner for that stage
- Evidence: [obs EV-032] [net EV-033]
- Feature: F-002 · Screen: S-002

### R-031 The stage bar shows time per stage
- Given a deal created directly in the third stage
- When its page opens
- Then the first three chevrons are green with "0 days", the current stage tooltip reads "Been here for N minutes", and a later stage reads "This deal has not been in this stage yet"
- Evidence: [obs EV-027] [obs EV-028] [obs EV-029]
- Feature: F-002 · Screen: S-002

### R-032 Deleting a deal does not delete its activities
- Given an open deal with one open activity
- When the user deletes the deal from its "..." menu
- Then the dialog mentions notes, files, documents and invoices but not activities; the deal page turns to a deleted state with Restore and a permanent deletion date 30 days later; the activity stays open and not deleted (the docs say it is deleted)
- Evidence: [obs EV-045] [obs EV-046] [net EV-047] [doc SRC-014]
- Feature: F-009 · Screen: S-002

### R-033 Activities of a deleted deal can be deleted from its page
- Given a deleted deal that still lists an open activity in Focus
- When the user chooses Delete in the activity's menu and confirms
- Then the activity is deleted (the API reports is_deleted true)
- Evidence: [obs EV-048] [net EV-047]
- Feature: F-009 · Screen: S-002

### R-034 Deleting a note asks for confirmation and cannot be undone
- Given a pinned note on a deal
- When the user chooses Delete in its menu
- Then the dialog says "This action cannot be undone"; after confirming, the note disappears from Focus and History
- Evidence: [obs EV-043]
- Feature: F-009 · Screen: S-002

### R-035 Deleting a pipeline requires a decision about its deals
- Given a pipeline with deals
- When the user chooses Delete pipeline in the editor
- Then the dialog asks what to do with the N deals: "Move deals to another pipeline" (default, needs a pipeline and stage) or "Delete deals" (warning: restorable within 30 days); the delete button stays disabled until the choice is complete
- Evidence: [obs EV-060] [obs EV-061]
- Feature: F-009 · Screen: S-003

### R-036 Deleting an organization keeps other linked items
- Given an organization
- When the user deletes it
- Then the dialog says its notes, files, documents and invoices are deleted, other linked items remain without the organization, and it can be restored within 30 days
- Evidence: [obs EV-062]
- Feature: F-009 · Screen: S-005
