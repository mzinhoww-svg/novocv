# Design tokens

Theme(s) studied: light only. Window: 1710 × 925 CSS px (screenshots at 1502 × 812). Values come from `tokens.js` on the production board [obs EV-002]; the stylesheet declares 971 custom properties named `--pd-*`.

## Color

| Token | Light | Dark | Variable | Used for | Evidence |
|---|---|---|---|---|---|
| surface | rgb(255, 255, 255) | not studied | `--pd-color-fill-white-static` | cards, dialogs | [obs EV-002] |
| app background | rgb(245, 245, 246) | not studied | `--pd-color-surface-app-background` | board background, columns | [obs EV-002] |
| text primary | rgb(33, 35, 44) | not studied | `--pd-color-text-black-static` | titles | [obs EV-002] |
| text secondary | rgb(101, 104, 111) | not studied | `--pd-color-text-secondary` | second lines, icons | [obs EV-002] |
| divider | rgba(33, 35, 44, 0.14) | not studied | `--pd-color-divider-medium-rgba` | borders | [obs EV-002] |
| navigation | rgb(33, 28, 82) | not studied | `--pd-color-navigation-background` | sidebar | [obs EV-002] |
| primary (green) | rgb(45, 134, 71) | not studied | `--pd-color-primary-default` | "+ Deal", Won, today icon, Save | [obs EV-002] |
| negative (red) | rgb(216, 60, 56) | not studied | `--pd-color-negative-default` | Lost, overdue icon, errors, delete buttons | [obs EV-002] |
| warning (yellow) | rgb(209, 184, 0) | not studied | `--pd-non-semantic-color-lemon-yellow-108` | no-activity triangle | [obs EV-002] |
| info | rgb(13, 104, 197) | not studied | `--pd-color-info-strong` | links, active sort | [obs EV-002] |
| info background | rgb(239, 246, 255) | not studied | `--pd-color-info-background-light` | info boxes | [obs EV-002] |
| learn (purple) | rgb(97, 80, 225) | not studied | `--pd-color-secondary-strong` | tip banners | [obs EV-002] |

## Typography

| Token | Family | Size | Weight | Line height | Used for | Evidence |
|---|---|---|---|---|---|---|
| body small | Inter | 12px | 450 | 18px | card second lines | [obs EV-002] |
| body | Inter | 14px | 450 | 21px | text | [obs EV-002] |
| body strong | Inter | 14px | 600 | 21px | card titles | [obs EV-002] |
| heading | Inter | 16px | 600 | 24px | stage names | [obs EV-002] |
| label | Inter | 11px | 600 | 16px | badges | [obs EV-002] |

## Spacing, radius, shadow

| Token | Value | Variable | Used for | Evidence |
|---|---|---|---|---|
| space 1 | 4px | none | most paddings | [obs EV-002] |
| space 2 | 8px | none | card padding | [obs EV-002] |
| space 1.5 | 6px | none | compact controls | [obs EV-002] |
| space 3 | 12px | none | sections | [obs EV-002] |
| radius m | 8px | `--pd-radius-m` | cards, buttons | [obs EV-002] |
| radius xs | 4px | `--pd-radius-xs` | inputs | [obs EV-002] |
| shadow card | rgba(42, 54, 71, 0.05) 0 1px 2px 0 | none | cards | [obs EV-002] |
| shadow popover | 0 0 2px rgba(0,0,0,0.24), 0 16px 24px 2px rgba(0,0,0,0.05), 0 6px 30px 5px rgba(0,0,0,0.06), 0 8px 10px -5px rgba(0,0,0,0.1) | none | menus, popovers | [obs EV-002] |

## Motion

| Token | Duration | Easing | Used for | Evidence |
|---|---|---|---|---|
| hover | 0.1s | cubic-bezier(0.5, 0, 0.2, 1) | background and shadow on hover | [obs EV-002] |
| dialog fade | about 0.5s | not measured | delete dialogs | [obs EV-060] |

## Z-index layers

| Layer | Value | Used for | Evidence |
|---|---|---|---|
| base | 1-2 | sticky headers | [obs EV-002] |
| overlay | 50 | toolbar layers | [obs EV-002] |

## Icons

| Name | Size | Where used | Evidence |
|---|---|---|---|
| activity status (four states) | 24 px | deal card | [obs EV-010] |
| balance (weighted value) | 12 px | stage header | [obs EV-010] |
| bell (rotting) | 12 px | stage header in the editor | [obs EV-008] |
| activity type icons | 16 px | form type row, popover rows | [obs EV-022] |

Do not copy the icon files or the won illustration; draw new ones.

## Breakpoints and layout

| Width | Change | Evidence |
|---|---|---|
| 1710 CSS px | Sidebar 210 px; four stage columns of about 350 px | [obs EV-011] |
| other widths | not tested | none |
