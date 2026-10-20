# Security policy

RES instructs an AI agent to operate a real browser on accounts you control. Two kinds of problems matter most:

- **A safety rule that fails**: the skill lets the agent change production data, reach a real person, or skip the change ledger in a situation the rules should cover.
- **A data leak in the page scripts**: a script returns values from the page (names, emails, IDs, tokens, storage values) instead of shapes and counts.

## Reporting

Report either kind privately through GitHub's private vulnerability reporting on this repository (Security tab, "Report a vulnerability"). Include the agent and model you used, the product, the environment level, and the exact steps. Do not include real customer data or credentials in the report.

Other problems go to the public issue tracker.

## Supported versions

Only the latest release receives fixes.
