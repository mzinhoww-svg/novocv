# Charter: Pipedrive
Date: 2026-10-16

| Item | Value |
|---|---|
| Goal | Document Pipedrive's deals pipeline, activities and won/lost flows well enough that a team that never used it can rebuild them, and list what would stop a sellable CRM clone from launching |
| Requested by | The repository owner, through an orchestrating agent session (the result is published as a public example of the skill) |
| Scope | Deals pipeline board and deal detail view; activities and the "schedule next activity" prompt; marking deals won and lost. Barrier scan for these features and for a sellable CRM clone: email and calendar sync, WhatsApp, e-signature, data protection, the clone's own billing and invoices |
| Out of scope | Leads inbox, contact screens beyond what deals need, Insights and reports, Sales Inbox (email), Campaigns, Projects, the Smart Docs editor, the AI assistant, the automations editor (A4), company settings (A4), anything that needs a second user (L1) |
| Clone target market | Small and medium businesses in Brazil: B2B sales teams of 2 to 50 sellers, selling in BRL, Portuguese-speaking users. Assumption written by the agent from the request |
| Priorities | P1: pipeline board, deal detail, activities and the next-activity rule, won and lost. P2: deal creation, the pipeline editor, deletion and restore. P5: the settings that drive these rules, read only |
| Mode | Unattended: no questions to the user; blocks go to "Needs human" in `STATUS.md` |
| Environment level | L3: a sandbox pipeline `🧪 [RE] Sandbox` inside the production company. No L1 account exists; "Add company" starts a new subscription (A5), so L2 is not available |
| Write authorization | The request: run "a real reverse engineering study" in the production company, "use L3, a pipeline named 🧪 [RE] Sandbox", keep company-wide settings untouched, assign activities to the operator only, create no persons with real data, and remove the whole sandbox before the session ends |
| KB language | English (the example is public) |
| Terms of service | https://www.pipedrive.com/en/terms-of-service (current as of 16 September 2026), s.4.1 "Prohibited Activities": no copying or derivative works, no use for competitive analysis or to develop a competing product, no reverse engineering, no security testing; direct competitors may not use the service (SRC-031). Listed under "Needs human" in `STATUS.md`: the decision belongs to the user |
