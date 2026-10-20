# Permissions

Observed with one user only (the operator, an admin). Everything else comes from the docs or the visibility options and needs a second account (L1) to confirm.

| Action | Item owner | Users in the owner's visibility group | Deals admins | Followers | Evidence |
|---|---|---|---|---|---|
| See a deal with visibility "Item owner" | yes | no | yes | yes | [obs EV-052] |
| See a deal with visibility "Item owner's visibility group" | yes | yes | yes | yes | [obs EV-052] |
| See a deal with visibility "All users" | yes | yes | yes | yes | [obs EV-052] |
| Edit pipelines and stages | admins only per the docs | no | yes | no | [doc SRC-004] |
| Delete deals | with a matching permission | not tested | yes | not tested | [doc SRC-001] |
| Define lost reasons | no | no | yes | no | [doc SRC-012] |
