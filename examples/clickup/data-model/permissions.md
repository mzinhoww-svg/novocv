# Permissions

The study ran with one account, the workspace owner, so only owner behavior and plan gates were observed. Roles below come from the docs; every cell without `obs` needs an L1 account with a second user (Q-010 covers required fields).

| Action | Owner | Admin | Member | Guest | Evidence |
|---|---|---|---|---|---|
| Create, edit, delete custom fields | yes (observed) | yes | with "Manage Custom Fields" | no | [obs EV-080][doc SRC-006] |
| Open the Custom Field Manager | yes (observed) | yes | with "Manage Custom Fields" | no | [obs EV-098][doc SRC-006] |
| Make a field required | Business plan and above | Business plan and above | no | no | [obs EV-082][doc SRC-003] |
| Restore a deleted field from Trash | yes (observed) | yes | not documented | no | [obs EV-129][doc SRC-004] |
| See a custom field | yes | yes | yes | if "Visible to Guests and Limited Members" is on | [obs EV-081] |
| Per-task permission flags | about 260 booleans returned with each task | | | | [net EV-053] |
