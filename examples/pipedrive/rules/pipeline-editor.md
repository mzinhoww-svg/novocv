# Rules: pipeline editor

### R-041 A new pipeline starts with five default stages
- Given the pipeline selector
- When the user chooses New pipeline
- Then the editor opens with the name "New pipeline", deal probability on, and five stages (Qualified, Contact Made, Demo Scheduled, Proposal Made, Negotiations Started) at 100% with rotting off
- Evidence: [obs EV-003]
- Feature: F-008 · Screen: S-003

### R-042 Rotting accepts zero days
- Given a stage in the editor
- When the user turns rotting on
- Then the days field starts at 0, the header shows "0 days", and saving keeps 0
- Evidence: [obs EV-008] [net EV-009]
- Feature: F-008 · Screen: S-003

### R-043 Deleting an empty stage asks for confirmation
- Given a stage with no deals in the editor
- When the user clicks Delete Stage
- Then a dialog says "There are no deals in this stage right now" with Cancel and Delete stage
- Evidence: [obs EV-007]
- Feature: F-008 · Screen: S-003

### R-046 Quick add offers one-key shortcuts
- Given the "+" button in the top bar
- When the user opens it
- Then it lists Person P, Organization O, Activity A, Deal D, Lead L, Note N, Product R, Project E
- Evidence: [obs EV-055] [doc SRC-016]
- Feature: F-011 · Screen: S-001
