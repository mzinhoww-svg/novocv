# Rules: activities and the next-activity prompt

### R-013 Completing an activity while others remain open does not prompt
- Given a deal with three open activities
- When the user marks one done from the card popover
- Then the row is struck through with a green check, the toast "Activity marked as done (subject)" appears, no modal opens, and the card icon updates to the next open activity
- Evidence: [obs EV-020] [net EV-025]
- Feature: F-004 · Screen: S-001

### R-014 Completing the last open activity prompts for the next one
- Given a deal with exactly one open activity
- When the user marks it done from the card popover or from the deal page Focus block
- Then the modal "Schedule your next activity" opens, linked to the deal and its organization, after a short skeleton
- Evidence: [obs EV-021] [obs EV-022] [obs EV-030] [net EV-025] [doc SRC-010]
- Feature: F-004 · Screen: S-001, S-002

| Probe | Input | Result | Evidence |
|---|---|---|---|
| From the card popover | Deal E | Modal opened | [obs EV-022] |
| From deal page Focus | Deal C | Modal opened; saved | [obs EV-030] |
| With other open activities | Deal F | No modal | [obs EV-020] |

### R-015 Cancelling the prompt leaves the deal without a next step
- Given the "Schedule your next activity" modal
- When the user clicks Cancel
- Then nothing is created, the card shows the yellow warning icon, and the deal page Focus shows "No focus items yet" with "+ Schedule an activity"
- Evidence: [obs EV-024] [obs EV-058]
- Feature: F-004 · Screen: S-001, S-002

### R-016 The prompt defaults to the first activity type, today and no time
- Given the prompt opens after completing a call
- When it renders
- Then the selected type is the first active type in the company's type order (not the type just completed), the subject placeholder is that type's name, the date is today, the time is empty, availability is Free, the owner is the current user, and the deal and organization are linked
- Evidence: [obs EV-022] [net EV-031]
- Feature: F-004 · Screen: S-001, S-002

### R-017 Choosing a time fills the next 15-minute slot and switches to Busy
- Given the activity form with no time
- When the user clicks the start time at 13:19
- Then 13:30 is filled, a list of 15-minute slots opens, Free becomes Busy, and the day agenda shows the new block at 13:30
- Evidence: [obs EV-023]
- Feature: F-003 · Screen: S-001

### R-018 Saving the prompt creates the activity and confirms it
- Given the prompt with a subject
- When the user clicks Save
- Then the activity is created, the toast "Activity added · View" appears, and the activity shows in Focus
- Evidence: [obs EV-030] [net EV-031]
- Feature: F-004 · Screen: S-002

### R-019 API defaults for activities
- Given an activity created through the API
- When it has a due time
- Then busy is true; without a time busy is false; participants is empty when no person is linked; due_time is stored in UTC
- Evidence: [net EV-009]
- Feature: F-003 · Screen: S-002

### R-020 The deal page marks overdue activities
- Given an open activity due yesterday
- When the deal page opens
- Then the Focus item shows a red OVERDUE badge and a red "Yesterday at 10:00"
- Evidence: [obs EV-057]
- Feature: F-003 · Screen: S-002

### R-021 Done activities move from Focus to History
- Given an activity in Focus
- When it is marked done
- Then it leaves Focus and appears in History with a green check, and the History filter shows "Activities (1)"
- Evidence: [obs EV-030]
- Feature: F-003 · Screen: S-002

### R-047 The activities list opens on To-do with period tabs and a type filter
- Given the Activities list
- When it opens
- Then the To-do tab is selected, the other tabs are Overdue, Today, Tomorrow, This week, Next week and Select period, a type filter row offers All plus one icon per type, and a count shows "N activities"
- Evidence: [obs EV-056]
- Feature: F-010 · Screen: S-004
