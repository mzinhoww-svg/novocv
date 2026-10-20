# Rules: creating deals and visibility

### R-037 A deal needs a person or an organization in the form
- Given the Add deal form with only a title
- When the user clicks Save
- Then both contact fields show "A person or organization is required" with red borders and Save dims
- Evidence: [obs EV-050]
- Feature: F-007 · Screen: S-001

### R-038 Unmatched organization text creates a new organization
- Given text typed in the Organization field
- When it does not exactly match an existing organization
- Then the field shows a NEW badge and the list offers "Add 'text' as new organization"; picking the existing match removes the badge
- Evidence: [obs EV-051]
- Feature: F-007 · Screen: S-001

### R-039 New deal defaults
- Given the Add deal form opened from a pipeline board
- When it opens
- Then the pipeline is the current one, the first stage is selected, the owner is the current user, the currency is the company currency, and Visible to is "Item owner's visibility group"
- Evidence: [obs EV-049] [obs EV-052]
- Feature: F-007 · Screen: S-001

### R-040 A saved deal appears at the top of its stage
- Given a valid Add deal form
- When the user saves
- Then the deal is created, the toast 'New deal "title" created · View' appears, the details view does not open, and the card shows at the top of its stage with a NEW badge until reload
- Evidence: [obs EV-053] [net EV-063]
- Feature: F-007 · Screen: S-001

### R-048 Visibility levels of an item
- Given the Visible to field
- When it opens
- Then it offers Item owner (owner, Deals admins, followers, parent visibility groups), Item owner's visibility group, Item owner's visibility group and sub-groups, and All users
- Evidence: [obs EV-052] [net EV-009]
- Feature: F-012 · Screen: S-001
