# Examples

Two end-to-end studies run with RES on 2026-10-16 by Claude Code (Opus 5.5) driving Claude in Chrome, without a person at the keyboard. Each folder is the unzipped handoff: the knowledge base, `BUILD.md` for a coding agent, and `REPORT.html` for people. All records created during the studies were fake (`[RE]` prefix) and were removed or kept only inside the test workspace. Real data in screenshots is masked.

| Product | Environment | Scope | Result | Read |
|---|---|---|---|---|
| ClickUp | L2: a new free workspace, kept for reference | Board view, task view, custom fields | 55 rules, 19 components, 14 entities, 14 production barriers, 139 evidence files | [Report](https://alextnetto.github.io/res/examples/clickup/REPORT.html) · [Knowledge base](clickup/) |
| Pipedrive | L3: a sandbox pipeline inside a production account, removed at the end of the session | Pipeline board, deal detail, next-activity rule, won and lost | 46 rules, 8 components, 10 entities, 15 production barriers, 63 evidence files | [Report](https://alextnetto.github.io/res/examples/pipedrive/REPORT.html) · [Knowledge base](pipedrive/) |

## Use an example

- Read `REPORT.html` in a browser. It is one self-contained page.
- Give the folder to a coding agent and tell it to start at `BUILD.md`.
- Compare an example with your own study to see what a finished knowledge base looks like.

## Notes

- ClickUp and Pipedrive are trademarks of their owners. These examples document observed behavior for research; they contain none of the products' code or assets.
- Both products' terms restrict reverse engineering or competing use. Each charter records the clause; read it before building on an example.
- `sandbox/` keeps a copy of the change ledger with account identifiers replaced by placeholders, so the folders pass `check-kb --closing`.
