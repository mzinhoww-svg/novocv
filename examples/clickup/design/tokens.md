# Design tokens

Theme(s) studied: dark only (the user's preference; light was not switched on, to avoid a personal-preference write). Window: 1710 × 981 CSS px, device pixel ratio 2.

Values come from `tokens.js` and element styles on the board [obs EV-035]. Variables are declared on `body.dark-theme`, so a clone should scope theme tokens to a class, not `:root`. The clone must pick its own names and palette: this table is a reference for density and contrast, not something to copy.

## Color

| Token | Light | Dark | Variable | Used for | Evidence |
|---|---|---|---|---|---|
| background.main | not captured | rgb(17,17,17) | `--cu-background-main` | page | [obs EV-035] |
| background.subtle | not captured | rgb(25,25,25) | `--cu-background-subtle` | cards, menus | [obs EV-035] |
| background.elevated | not captured | rgba(255,255,255,.035) | `--cu-background-elevated` | raised surfaces | [obs EV-035] |
| background.hover | not captured | rgba(255,255,255,.07) | `--cu-background-main-hover` | hover | [obs EV-035] |
| background.tooltip | not captured | rgb(42,42,42) | `--cu-background-tooltip` | tooltips | [obs EV-035] |
| background.success | not captured | rgb(48,164,108) | `--cu-background-success` | success fills | [obs EV-035] |
| background.warning | not captured | rgb(255,197,61) | `--cu-background-warning` | warning fills | [obs EV-035] |
| background.danger | not captured | rgb(210,30,36) | `--cu-background-danger` | delete buttons | [obs EV-035][obs EV-126] |
| content.default | not captured | rgb(238,238,238) | `--cu-content-default` | text, card titles | [obs EV-035] |
| content.secondary | not captured | rgb(180,180,180) | `--cu-content-secondary` | secondary text | [obs EV-035] |
| content.tertiary | not captured | rgb(123,123,123) | `--cu-content-tertiary` | meta text | [obs EV-035] |
| content.placeholder | not captured | rgb(110,110,110) | `--cu-content-placeholder` | placeholders | [obs EV-035] |
| content.danger | not captured | rgb(255,133,137) | `--cu-content-danger` | overdue dates | [obs EV-035][obs EV-010] |
| content.warning | not captured | rgb(255,204,77) | `--cu-content-warning` | due today | [obs EV-035][obs EV-010] |
| border.default | not captured | rgb(42,42,42) | `--cu-border-default` | borders | [obs EV-035] |
| border.low | not captured | rgb(34,34,34) | `--cu-border-low-contrast` | card field toggles | [obs EV-035] |
| border.input | not captured | rgb(110,110,110) | `--cu-border-input` | inputs | [obs EV-035] |
| brand | not captured | rgb(102,71,240) | not mapped | in-progress status, links, checked boxes | [obs EV-035][obs EV-121] |
| status.complete | not captured | rgb(44,140,94) | not mapped | closed status pill | [obs EV-035] |

## Typography

| Token | Family | Size | Weight | Line height | Used for | Evidence |
|---|---|---|---|---|---|---|
| font.family | system UI stack (-apple-system, Segoe UI Variable Text, Roboto, Helvetica, Arial) | | | | everything; no web fonts | [obs EV-035] |
| size scale | | 6, 8, 10, 11, 12, 14, 16, 18 px (`--cu-font-size-1..8`) | | | | [obs EV-035] |
| card.title | system | 14px | 500 | 20px | card titles | [obs EV-035] |
| status.pill | system | 11px | 500 | 11px | status pills | [obs EV-035] |
| body.small | system | 12px | 500 | 16px | meta and chips | [obs EV-035] |
| weights | | | 400, 500, 600, 700 | | | [obs EV-035] |

## Spacing, radius, shadow

| Token | Value | Variable | Used for | Evidence |
|---|---|---|---|---|
| space.1 | 2px | | tight gaps | [obs EV-035] |
| space.2 | 4px | | most common gap | [obs EV-035] |
| space.3 | 8px | | column header padding, footer gap | [obs EV-035] |
| radius.small | 6px | | pills, field toggles (most common) | [obs EV-035] |
| radius.card | 10px | | board cards | [obs EV-035] |
| radius.pill | 666px | | round pills | [obs EV-035] |
| shadow.card | 0 0 1px rgba(255,255,255,.33), 0 1px 2px rgba(0,0,0,.055) | | cards | [obs EV-035] |
| shadow.popover | 0 4px 6px -1px rgba(0,0,0,.1), 0 2px 4px -2px rgba(0,0,0,.1) | | popovers | [obs EV-035] |
| focus.ring | 0 0 0 1px rgb(238,238,238), 0 0 0 3px rgb(49,49,49) | | card field toggles | [obs EV-035][obs EV-033] |
| border.size | 1px, 2px | `--cu-border-size-1/2` | | [obs EV-035] |

## Motion

| Token | Duration | Easing | Used for | Evidence |
|---|---|---|---|---|
| motion.pop | 0.125s | cubic-bezier(0.17,0.67,0.55,1.09) | scale on press | [obs EV-035] |
| motion.slide | 0.2s | cubic-bezier(0.785,0.135,0.15,0.86) | panels, min-width | [obs EV-035] |
| motion.move | 0.3s | cubic-bezier(0.17,0.67,0.55,1.09) | transforms | [obs EV-035] |

## Z-index layers

| Layer | Value | Used for | Evidence |
|---|---|---|---|
| base | 1, 2 | stacked card parts | [obs EV-035] |
| panels | 15, 700 | sticky headers, side panels | [obs EV-035] |
| overlays | 999, 1000 | popovers and dialogs | [obs EV-035] |

## Icons

| Name | Size | Where used | Evidence |
|---|---|---|---|
| card field toggles | 24 × 24 box | assignee, date, priority, tag on cards | [obs EV-035] |
| custom field type icons | about 16 px | Fields section rows and card rows | [obs EV-117][obs EV-121] |

## Breakpoints and layout

| Width | Change | Evidence |
|---|---|---|
| 1710 CSS px | Column 264 px (Medium cards), card 246 px | [obs EV-035][obs EV-046] |
| Other widths | Not tested (the user's window was not resized) | |
