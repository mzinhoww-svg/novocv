# Rules: pipeline board

### R-001 Each card shows one of four activity states
- Given an open deal on the board
- When the board renders
- Then the card icon is red with "<" if its earliest open activity is overdue, green with ">" if it is due today, grey with ">" if it is in the future, and a yellow warning triangle if the deal has no open activity
- Evidence: [obs EV-010] [obs EV-012] [obs EV-013] [obs EV-014] [obs EV-015] [doc SRC-002]
- Feature: F-001 · Screen: S-001

| Probe | Input | Result | Evidence |
|---|---|---|---|
| Activity due yesterday 10:00 | Deal B | Red icon, "View overdue activity" | [obs EV-012] |
| Activity due today, no time | Deal E | Green icon, "View activity scheduled for today" | [obs EV-015] |
| Activity in 5 days | Deal D | Grey icon, "View upcoming activity" | [obs EV-014] |
| No activity | Deals A, K | Yellow triangle, "Schedule an activity" | [obs EV-013] |

### R-002 An activity due today whose time has passed counts as overdue
- Given a deal whose only overdue candidate is an activity due today at 09:00, viewed at 13:15
- When the board renders
- Then the card icon is red and the popover shows "Today at 09:00" in red
- Evidence: [obs EV-010] [obs EV-019]
- Feature: F-001 · Screen: S-001

### R-003 The default order is overdue, today, no activity, future
- Given a stage whose deals are in different activity states and the sort "Next activity (default)"
- When the board loads
- Then the cards are ordered overdue first, then due today, then deals with no open activity, then deals whose next activity is in the future
- Evidence: [obs EV-010] [obs EV-026] [doc SRC-002]
- Feature: F-001 · Screen: S-001

| Probe | Input | Result | Evidence |
|---|---|---|---|
| Lead in stage | B overdue, A and K none, D future | B, K, A, D | [obs EV-010] |
| Proposal stage after one change | C today, E none, F future | C, E, F | [obs EV-026] |

### R-004 Within "today", an activity without a time comes before a timed one
- Given two deals with activities due today, one without a time and one at 17:00
- When the board loads
- Then the deal whose activity has no time is listed first
- Evidence: [obs EV-010]
- Feature: F-001 · Screen: S-001

### R-005 Ties are broken by the newest deal first
- Given deals in the same activity state and due date
- When the board loads
- Then the most recently created deal comes first
- Evidence: [obs EV-010] [obs EV-059]
- Feature: F-001 · Screen: S-001

| Probe | Input | Result | Evidence |
|---|---|---|---|
| Three future deals due the same day | H, I, J created in that order | J, I, H | [obs EV-010] |
| Five deals with no activity | A, B, D, K, L created in that order | L, K, D, B, A | [obs EV-059] |

### R-006 The board does not re-sort after an in-place change until reload
- Given a card whose activity state changes from the popover, or a deal just created
- When the change is saved
- Then the card keeps its position (a new deal goes to the top with a NEW badge) until the page is reloaded
- Evidence: [obs EV-024] [obs EV-053] [obs EV-026]
- Feature: F-001 · Screen: S-001

### R-007 The stage header shows the weighted value of its deals
- Given deals with values in a stage with probability P and no deal-level probability
- When the board renders
- Then the header shows Σ value × P ÷ 100 and the number of deals
- Evidence: [obs EV-010] [doc SRC-006]
- Feature: F-001 · Screen: S-001

| Probe | Input | Result | Evidence |
|---|---|---|---|
| 10% stage | 1.000 + 30.000 + 0 + 1.234.567,89 | R$ 126.556,79 · 4 deals | [obs EV-010] |
| 25% stage | 3.000 | R$ 750 · 1 deal | [obs EV-010] |
| 50% stage | 8.000 + 2.000 + 5.000 | R$ 7.500 · 3 deals | [obs EV-010] |
| 80% stage | 100 + 20.000 + 50.000 | R$ 56.080 · 3 deals | [obs EV-010] |

### R-008 A stage with rotting at 0 days marks deals rotten at once
- Given a stage with rotting on and 0 days
- When a deal enters it
- Then the card turns pale pink and shows a red "<1d" badge whose tooltip reads "No actions for <1 days"
- Evidence: [obs EV-010] [obs EV-016] [net EV-009]
- Feature: F-001 · Screen: S-001

### R-009 Closed and deleted deals leave the board
- Given a pipeline with a lost deal and a deleted deal
- When the board loads
- Then neither card is shown and the deal count excludes them
- Evidence: [obs EV-053] [doc SRC-001]
- Feature: F-001 · Screen: S-001

### R-010 The status icon opens the deal's activity list
- Given a card
- When the user clicks its status icon
- Then a popover lists the open activities with relative dates and done circles, plus "+ Schedule an activity"; with no activity it reads "You have no activities scheduled for this deal"
- Evidence: [obs EV-018] [obs EV-019] [net EV-025]
- Feature: F-001 · Screen: S-001

### R-011 Dragging a card shows four drop zones
- Given the board
- When the user starts dragging a card
- Then four zones appear along the bottom: Delete, Lost, Won, Move to
- Evidence: [obs EV-054] [doc SRC-001]
- Feature: F-001 · Screen: S-001

### R-012 The Activities badge counts the user's overdue and due-today activities
- Given the user's open activities
- When one is created, completed or becomes due
- Then the navigation badge equals the number of the user's open activities that are overdue or due today
- Evidence: [obs EV-010] [obs EV-020] [obs EV-024] [obs EV-030]
- Feature: F-003 · Screen: S-001

| Probe | Input | Result | Evidence |
|---|---|---|---|
| Created 1 overdue and 3 due-today activities | badge 25 before | 29 | [obs EV-010] |
| Completed one due today | 29 | 28 | [obs EV-020] |
| Completed another due today | 28 | 27 | [obs EV-024] |
| Completed a third due today and created a follow-up due today | 27 | 27 (net zero) | [obs EV-030] |
