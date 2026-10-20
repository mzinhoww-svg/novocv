# Status: JobLeads
Updated: 2026-10-20 · Session: s01 · Phase: 3 Recon (public sources only)
Environment: L4 Observe only · Sandbox: none · Open ledger rows: 0

## Summary
- Covered: public marketing page of JobLeads (feature list, plans, trust claims). Scope narrowed to CV and cover letter tailoring from a job link.
- Not covered: all in-app screens, states, rules and API. No account or browser session was used, so nothing behind login was observed.
- Decide: whether to give a trial account (L1) for a deeper study, and whether the terms of service allow it.

## Next actions
1. User provides a trial account in a separate browser profile (L1) if a deeper study of the in-app CV and letter flows is wanted.
2. Read the JobLeads terms (https://www.jobleads.com/terms returned 404) and record the reverse-engineering clause in `00-charter.md`.
3. Compare the in-app CV and letter output with `app/` and record parity in `clone/parity.md`.

## Needs human
- Terms of service: clause on reverse engineering not checked (Q-002). The decision to continue is the user's.
- Dedicated trial account in a separate browser profile (L1), only if a deeper study is wanted.

## Blocked
- In-app screens, rules and API: blocked, no account.

## Last session
- Charter, sources, features seed and barriers written. A simplified tool was built in `app/` from the public feature list, not from observed in-app behavior.

## Residuals
- None.
