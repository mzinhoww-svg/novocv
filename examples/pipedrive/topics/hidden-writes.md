# Topic: hidden writes

Actions in this product that change data or state without a Save button.

| Pattern | Where | Class | Evidence |
|---|---|---|---|
| Clicking a done circle completes the activity at once (no Save) | Card popover, Focus | A2 | [obs EV-020] |
| Completing the last open activity opens a modal; Cancel saves nothing | Card popover, Focus | A1 | [obs EV-024] |
| Clicking a stage chevron moves the deal at once | Deal page | A2 | [obs EV-032] |
| Won and Reopen apply on one click | Deal page | A2 | [obs EV-035] [obs EV-037] |
| Lost comments create a pinned note | Mark as Lost | A2 | [obs EV-042] |
| Unmatched organization text creates a new organization on Save | Add deal form | A2 | [obs EV-051] |
| Deleting a deal leaves its activities open | Deal page | A2 | [net EV-047] |
| Deleting a pipeline defaults to moving its deals into another pipeline | Pipeline editor | A2 | [obs EV-060] |
| After deleting a pipeline the app opens another one, which becomes where Deals opens by default | Board | A3 | [inf] Q-005 |
| Banners and tips ("Don't show me this again", close icons) change personal preferences | Deal page, won modal | A3 | [obs EV-034] |

## Not tested

- Whether sort, filter and view choices persist per user (not changed).
- Whether opening a deal records it in "recently viewed".
