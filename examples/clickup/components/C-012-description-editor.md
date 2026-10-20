# C-012 Description editor
Product name: `cu-task-editor (Quill)` · Used in: S-002 · Status: reviewed

## Anatomy

![Description editor](../evidence/EV-055-task-description-editing.jpg)

| # | Part | Content | Evidence |
|---|---|---|---|
| 1 | Text area | Rich text with markdown shortcuts | [obs EV-055] |
| 2 | Placeholder | Add description, or write with AI | [obs EV-051] |
| 3 | Actions | Description history, full screen | [obs EV-055][obs EV-050] |

## Variants

| Variant | Difference | Evidence |
|---|---|---|
| Empty | Placeholder with AI link | [obs EV-051] |
| Filled | Paragraphs and lists | [obs EV-078] |

## States

| State | Visual change | Evidence |
|---|---|---|
| Default | Plain text | [obs EV-078] |
| Hover | Not checked |  |
| Focus | Caret, toolbar on selection | [obs EV-055] |
| Pressed | Not observed |  |
| Selected | Not checked |  |
| Disabled | Not observed |  |
| Loading | Not observed |  |
| Error | Not observed |  |

## Measurements and tokens

| Property | Value | Token | Evidence |
|---|---|---|---|
| Width | the content column |  | [obs EV-051] |

## Behavior

- Saves without a button through the collaborative editor connection; the task detail response carries an `editor_token` [net EV-053][obs EV-078].
- "- " at the start of a line makes a bullet list; `**bold**` typed in one go is not converted (R-025) [obs EV-055].

## Keyboard and accessibility

| Role | Accessible name | Keys | Focus visible | Evidence |
|---|---|---|---|---|
| textbox (contenteditable) | not checked | Enter new line | caret | [obs EV-055] |

## Not tested

- Toolbar formats, slash commands, AI writing, image paste, description history, concurrent editing.
