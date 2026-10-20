# Rules: custom fields

### R-033 A field created from a task belongs to that task's list
- Given a task in the list [RE] Board study
- When the user opens Add fields > Create new, picks a type, types a name and clicks Create
- Then the field is created with one location, the list ("Belongs to: [RE] Board study"), and shows in the Fields section of every task in that list; the client sends two requests: the definition (`POST /customFields/v2/field`) and its location (`PUT /field/v3/.../fields/:id/locations`, parent type 6 = List)
- Evidence: [obs EV-079][obs EV-080][obs EV-081][net EV-099]
- Feature: F-016 · Screen: S-002

### R-034 The type menu puts popular and AI types first; Rollup is not a type of its own
- Given Add fields > Create new in a task, or Create new in the Custom Field Manager
- When the type menu opens
- Then the task view lists Popular (Dropdown, Text, Date, Text area, Number, Labels, AI Autofill) and then All; the manager lists AI Fields (Summary, Custom Text, Custom Dropdown) and then All, which ends with Categorize, Translation, Sentiment, Action Items and T-shirt Size; Rollup is offered only inside a Tasks or Relationship field ("Create rollup fields")
- Evidence: [obs EV-079][obs EV-096][obs EV-097][obs EV-087][obs EV-093]
- Feature: F-016 · Screen: S-003

### R-035 Number and money formats are set per field, not by the user's language
- Given a Number field with format EU (1.234,56) and a Money field in BRL with format EU
- When the user enters 1234,5 and 1234,56
- Then the task and the card show 1.234,5 and R$ 1.234,56; the field stores `number_format: "de-DE"` and `currency_type: "BRL"`, and the value is sent as a string
- Evidence: [obs EV-084][obs EV-085][obs EV-102][obs EV-103][obs EV-121][net EV-099][net EV-112]
- Feature: F-016, F-017 · Screen: S-002

### R-036 Picking a country in a Phone field changes the user's profile country
- Given an empty Phone field; its flag defaults to the user's profile country (a country other than Brazil in this account)
- When the user picks Brazil in the flag menu and types a number
- Then the number takes the Brazilian mask, (11) 90000-0000, and is saved as +55 11 90000 0000; the pick also sends `PUT /user/v1/user` with the new country, so every empty Phone field on every task now defaults to Brazil; picking the original country again on another task, with no number typed, sends the same request and restores the default
- Evidence: [obs EV-104][obs EV-105][obs EV-130][obs EV-131]
- Feature: F-017 · Screen: S-002

### R-037 On Free Forever each value written counts once against 60 uses per workspace
- Given Free Forever with no values yet
- When 17 fields get one value each, and Labels gets two labels added one at a time
- Then the entitlement counter reads 18 used of 60 (`usage`, `limit`, `usageLeft`); linking a task through a Tasks field and configuring a Formula field did not change it; the counter is fetched again after each value is set
- Evidence: [net EV-112][doc SRC-005]
- Feature: F-022 · Screen: S-002
- Not observed: what happens at 60, and whether deleting a field gives uses back (Q-008). The docs say Formula values count as uses (SRC-043); here they did not (Q-009).

### R-038 A Formula field is defined once per field and takes the money format of a money input
- Given Number 1.234,5 and Money R$ 1.234,56 on a task
- When the user opens the empty Formula value, picks Number, +, Money and clicks Calculate
- Then the task and the card show R$ 2.469,06; the formula is saved on the field definition (`PUT /customFields/v2/field/:id` with `type_config.formula`, `simple: true`, `calculation_state: "ready"`), so every task in the location computes it, and tasks without inputs show R$ 0; the editor asks "Select a second field to calculate" until both inputs are set
- Evidence: [obs EV-115][obs EV-116][obs EV-120][net EV-112]
- Feature: F-016, F-017 · Screen: S-002

### R-039 Tasks and Relationship fields live in the Relate menu, not in the Fields section
- Given a Tasks field and a Relationship field on the list
- When the user opens "Relate items or add dependencies"
- Then both fields appear under the dependency options; picking the Tasks field and a task adds a Related section with one tab per field ("[RE] cf-tasks 1") and a table (Name, Due date, Priority); the board card shows the linked task as a chip with a + button, and an empty one shows "Add task"
- Evidence: [obs EV-118][obs EV-119][obs EV-120][obs EV-121][net EV-112]
- Feature: F-016, F-017, F-018 · Screen: S-002

### R-040 A Relationship field must point at another list
- Given the Relationship field form
- When the user chooses "tasks from a specific List"
- Then a related list is required and the field's own list cannot be chosen; the form offers rollup fields from the related list
- Evidence: [obs EV-093]
- Feature: F-016 · Screen: S-003

### R-041 Required and Pinned do nothing on Free Forever except point to an upgrade
- Given the field's Permissions and settings on Free Forever
- When the user clicks "Required in tasks", then "Pinned"
- Then Required stays off with only a tooltip as feedback; Pinned opens "Upgrade to Business" (closed without choosing)
- Evidence: [obs EV-082][obs EV-083][doc SRC-003]
- Feature: F-019 · Screen: S-002

### R-042 A required field blocks task creation where it is used (documented)
- Given a Business workspace and a field set to "Required in tasks"
- When a user creates a task in a location of that field without a value
- Then the task cannot be created until the field has a value; the public API skips the check unless `check_required_custom_fields` is true; the task view always shows required fields, even empty
- Evidence: [doc SRC-003][doc SRC-029][doc SRC-007]
- Feature: F-019 · Screen: S-002
- Not observed: plan (Business). Q-010.

### R-043 The task view lists a location's fields in one Fields section
- Given a task in a list with 22 fields
- When the task opens
- Then a "Fields" section under the description has one row per field (type icon, name, value) in name order, with search, expand and + in its header; "Hide N empty fields" collapses the empty rows; Tasks and Relationship fields are not listed there (R-039)
- Evidence: [obs EV-100][obs EV-117][doc SRC-007]
- Feature: F-015 · Screen: S-002

### R-044 Each value saves on its own and adds an activity line
- Given the Fields section
- When the user sets a value (checkbox click, picker choice, text and blur, slider drag)
- Then one request saves that value (`POST /customFields/v1/task/:id/field/:id`; `DELETE` on the same path clears it) and the activity log adds a line such as "You set [RE] cf-money to R$ 1.234,56", "You added [RE] lab 1 to [RE] cf-labels", "You signed on [RE] cf-signature"
- Evidence: [obs EV-106][obs EV-117][net EV-112]
- Feature: F-017 · Screen: S-002

### R-045 Each type has its own editor in the Fields section
- Given the Fields section
- When the user clicks a value
- Then the editor depends on the type: dropdown and labels open an option picker with search and colors; people a person picker with "Keep typing a full email to invite"; text area a large popover editor; manual progress a slider; rating clickable stars; voting a thumbs-up toggle; signature a pad with a typed or drawn mode; location a search with Google Places suggestions; formula a field-operator-field editor
- Evidence: [obs EV-100][obs EV-106][obs EV-107][obs EV-108][obs EV-109][obs EV-110][obs EV-113][obs EV-115]
- Feature: F-017 · Screen: S-002

### R-046 Location values store the address and the coordinates
- Given a Location field
- When the user types a street and picks the suggestion
- Then the value shows the formatted address ("Av. Paulista, São Paulo - SP, Brazil") and is saved with `formatted_address`, `location {lat, lng}` and `place_id`
- Evidence: [obs EV-113][obs EV-114][net EV-112]
- Feature: F-017 · Screen: S-002

### R-047 A typed signature is drawn in a script font and records who signed
- Given a Signature field
- When the user types a name in Type mode and clicks Save
- Then the value shows the name in a script font in the task and on the card; the request carries `value_options {isTyped, signedBy}`; the activity says "You signed on <field>"
- Evidence: [obs EV-110][obs EV-111][obs EV-121][net EV-112]
- Feature: F-017 · Screen: S-002

### R-048 On a card every shown custom field takes its own row with the type icon
- Given all 22 fields turned on in Customize > Fields
- When the board renders
- Then each card gets one row per field, icon at the left, even with Stack fields off; empty values show "-", except Formula ("R$ 0"), Checkbox (empty box), Rating (grey stars), Voting (0), Progress (empty bar, 0) and Tasks or Relationship ("Add task"); filled values keep their task-view look, with text area cut to the first line plus an ellipsis and location cut at the card width; some values (rating, phone) appear a moment after the card
- Evidence: [obs EV-120][obs EV-121][obs EV-123]
- Feature: F-018 · Screen: S-001

### R-049 Custom field values can be edited on the card
- Given a card showing a dropdown value
- When the user clicks the value
- Then the same option picker as in the task view opens on the card; hovering the field icon shows the field name and "Custom Field"
- Evidence: [obs EV-122]
- Feature: F-018 · Screen: S-001

### R-050 Showing custom fields on cards is a view draft
- Given a board view saved without custom fields
- When the user turns fields on in Customize > Fields
- Then "Save view" appears; after a reload without saving, the cards show no custom fields again
- Evidence: [obs EV-123][obs EV-124]
- Feature: F-018 · Screen: S-001

### R-051 Deleting a field warns with the task count and sends it to Trash without Undo
- Given a Dropdown field holding a value on one task
- When the user opens the field settings from the row gear and clicks the delete icon
- Then a dialog reads "This action will delete this Custom Field from 1 task. Admins are able to restore deleted fields from the Trash." (the count appears a moment after the dialog); Delete removes the row from the task at once and shows "Field deleted successfully" with no Undo
- Evidence: [obs EV-125][obs EV-126][obs EV-127][doc SRC-004]
- Feature: F-020 · Screen: S-002

### R-052 Restoring a field from Trash brings its values back
- Given the deleted field in Settings > Trash
- When the user opens its menu and clicks Restore
- Then the item leaves the Trash and the task shows the field again with its old value ([RE] opt A)
- Evidence: [obs EV-128][obs EV-129]
- Feature: F-020 · Screen: S-005

### R-053 Trash holds deleted lists, tasks, tags and fields for 30 days
- Given deleted items
- When the user opens Settings > Trash
- Then each item shows name, location, deleted on and deleted by, filtered to "Me" by default; a deleted list is one row (its tasks are not listed separately); a tag deleted from a picker is there too; the page says items are deleted forever after 30 days and offers "Clear all Trash"; each row offers Restore and Delete forever
- Evidence: [obs EV-128][obs EV-133][obs EV-137][doc SRC-004]
- Feature: F-020 · Screen: S-005

### R-054 Deleting a list takes its list-level fields with it
- Given 22 fields whose only location is a list
- When the list is deleted ("54 tasks and templates within this List will be deleted. Additionally, automations will become inactive.")
- Then the list goes to Trash with its tasks, and the Custom Field Manager shows no fields in All, Workspace Fields or Personal List
- Evidence: [obs EV-132][obs EV-133][obs EV-134]
- Feature: F-020, F-021 · Screen: S-003

### R-055 The Custom Field Manager groups fields by type and lists their locations
- Given 22 list-level fields
- When the user opens Settings > Custom Field Manager
- Then All Custom Fields shows one group per type with a count and a "Create <type> field" link, and columns Name, Type, Created by, Date Created, Location(s); the left side filters by Workspace Fields, Task Type Fields, Personal List, By Location and By Task Type
- Evidence: [obs EV-098][obs EV-134][doc SRC-006]
- Feature: F-021 · Screen: S-003
