# RES and REA

[REA](https://github.com/morluto/rea) (Reverse Engineer Anything) is an open-source MCP server and skill for reverse engineering binaries, Android apps, Electron apps, network captures and websites. RES and REA answer different questions, and they work well together.

| | REA | RES |
|---|---|---|
| Question it answers | What technology is the product built with? | How does the product work, and how do we rebuild it and launch it? |
| Main output | Evidence records (JSON) about code, network and runtime | A knowledge base: screens, states, rules, data model, design tokens, barriers, PRD, parity tests |
| Best for | Technical audits, stack and API surface, binaries, comparing builds | Product studies for a rebuild, run safely on a real account |

## What we observed

We ran REA 6.5.0 on the ClickUp web app on 2026-10-15, in a clean Claude Code session that used only REA: the login page, the public site, and then the logged-in app with read-only navigation.

| Aspect | REA | RES |
|---|---|---|
| Stack, modules, routes | Strong: 844 lazy-loaded modules, GraphQL operation names, CDN and vendors. It did not identify Angular on its own | Basic: frameworks, component tags, routes from links |
| API endpoints and payload shapes | Strong when logged in: about 100 REST endpoints, JSON shapes, WebSocket protocol | Per user action, with `api-shapes.js` (shapes and types; values only for short enum-like fields) |
| Feature flags | Strong: 1,550 flag names from browser storage | Storage key names only |
| Binaries, Android, Electron | Strong | Out of scope |
| Screens and states | One screenshot and accessibility tree per scripted step | Every screen, with empty, loading, error, permission and plan-gated states |
| Flows | Runs steps you declare; does not explore | Explores feature by feature with planned fixtures |
| Business rules | Not covered | Given/When/Then rules with evidence, turned into parity tests |
| Design tokens and components | Not covered (no CSS analysis) | Tokens mapped to CSS variables; one file per component with states |
| Production barriers | Not covered | Permissioned integrations, regulation, certifications, gatekeepers, moats |
| Safety on a real account | Passive capture is read-only; scripted steps can change data | Environment levels, action classes, write gate, change ledger, teardown |
| Evidence | Excellent: every result states confidence, authority and limits | Every claim tagged; `check-kb.mjs` requires evidence on rules and barriers and flags untagged data-model rows |
| Context cost | High: about 110k tokens of tool schemas before any analysis; about 380k for the whole session | Five small page scripts; no extra tools in context |

RES has not yet been run end to end on a real product: its column reflects the method and the automated tests, not a measured study. The REA column reflects the session described above.

## When to use which

- You need the stack, the API surface, feature flags, or a diff between two builds: use REA.
- You want to understand the product well enough to rebuild it and launch it, without breaking a production account: use RES.
- You want both: let RES drive the study and use REA for bundle and binary analysis where the technical layer matters.
