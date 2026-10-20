# Production barriers: ClickUp

Clone target market: small and medium businesses in Brazil (see `00-charter.md`). Scope: the board, the task view and custom fields, plus what any SaaS needs to sell in Brazil.
Not legal advice. A legal reading without a source is `[inf]` with a question for counsel in `questions.md`.

## Summary

Launch blockers first. One row per barrier; details below.

| Barrier | Category | Severity | Market weight | Blocks | Lead time |
|---|---|---|---|---|---|
| BR-001 LGPD duties of a processor, and transfers out of Brazil | Regulation | blocks launch | required to sell | the whole product | weeks (contracts, records, incident procedure) |
| BR-002 Electronic service invoices (NFS-e national standard, CBS/IBS fields) | The clone's own operation | blocks launch | required to sell | charging customers | weeks to months (municipal registration, certificate, provider) |
| BR-010 Trademark and look and feel | Intellectual property and terms | blocks launch | required to sell | brand, UI skin | weeks (own name, own visual identity) |
| BR-011 ClickUp terms on reverse engineering and competitive API use | Intellectual property and terms | adds lead time | n/a | how research is done | counsel review |
| BR-003 Recurring billing customers expect (Pix Automático, boleto, cards) | The clone's own operation | adds lead time | required to sell | subscriptions | weeks (payment provider onboarding) |
| BR-004 Google OAuth verification (Calendar sensitive; Gmail and Drive restricted) | Permissioned integration | blocks feature | important | calendar sync, Drive files, Gmail | days (sensitive) to weeks plus a yearly security assessment (restricted) |
| BR-005 Microsoft publisher verification (Outlook, Teams) | Permissioned integration | adds lead time | important | Outlook calendar and mail, Teams | weeks (partner program account) |
| BR-006 Slack Marketplace review | Permissioned integration | adds lead time | minor | Slack listing | 10 active workspaces first, then up to 10 weeks |
| BR-007 WhatsApp Business Platform | Permissioned integration | blocks feature | important | WhatsApp notifications and task creation | weeks (business verification, Tech Provider review) |
| BR-008 Security certifications buyers may ask for | Certifications | adds cost | minor | larger SMB deals | months (SOC 2 or ISO 27001 audit) |
| BR-009 Enterprise must-haves (SSO, SCIM, audit log, data residency) | Certifications | adds cost | minor | upmarket deals | months |
| BR-013 Realtime collaboration and regional hosting | Infrastructure and operating cost | adds cost | important | live board updates | build time |
| BR-014 AI features depend on paid LLM providers | Infrastructure and operating cost | adds cost | minor | AI fields, AI pickers | days (provider contract) |
| BR-012 Integrations, templates and user base | Data, content and network effects | moat | important | switching from ClickUp | ongoing |

### BR-001 LGPD duties of a processor, and transfers out of Brazil
- Category: regulation and licensing
- Blocks: every feature that stores customer workspaces (F-001 to F-026)
- Gatekeeper: ANPD (Autoridade Nacional de Proteção de Dados)
- Severity: blocks launch
- Market weight: required to sell [inf] Q-006
- What it takes: as processor (operador), follow the customer's instructions (Art. 39), keep records of processing (Art. 37), apply security measures (Art. 46), support incident notices (Art. 48) [doc SRC-053]. Small companies may skip appointing an encarregado but must offer a contact channel (Res. 2/2022) [doc SRC-055]. Hosting outside Brazil needs ANPD standard contractual clauses adopted without changes; only the EU has an adequacy decision (Res. 32/2026) [doc SRC-054][doc SRC-056]. Fines up to 2% of Brazil revenue, capped at R$ 50 million per infraction [doc SRC-053].
- Lead time and cost: weeks; mostly legal work [inf] Q-005
- Mitigation: host in a Brazilian cloud region (ClickUp lists none in its subprocessors [doc SRC-041]) or sign the ANPD clauses with the cloud provider; publish a DPA and privacy policy; name a contact channel.
- Evidence: [doc SRC-053][doc SRC-054][doc SRC-055][doc SRC-056][doc SRC-041]

### BR-002 Electronic service invoices (NFS-e national standard, CBS/IBS fields)
- Category: the clone's own operation
- Blocks: charging customers
- Gatekeeper: Receita Federal, CGIBS, the municipality of the issuing company
- Severity: blocks launch
- Market weight: required to sell (Brazilian companies need a valid invoice to book the expense) [inf] Q-006
- What it takes: Simples Nacional companies must issue NFS-e through the national issuer from 1 November 2026 [doc SRC-057]. Regular-regime invoices without IBS/CBS fields are rejected from 3 August 2026 [doc SRC-058]. CBS starts in 2027 and ISS ends after 2032 [doc SRC-059].
- Lead time and cost: weeks to months; an invoicing provider with the national API, or direct integration [inf] Q-007
- Mitigation: use an invoicing provider that already supports the national NFS-e API and IBS/CBS fields; start municipal registration in month one.
- Evidence: [doc SRC-057][doc SRC-058][doc SRC-059]

### BR-003 Recurring billing customers expect (Pix Automático, boleto, cards)
- Category: the clone's own operation
- Blocks: subscriptions
- Gatekeeper: Banco Central do Brasil (Pix rules) and the chosen payment provider
- Severity: adds lead time
- Market weight: required to sell [inf] Q-006
- What it takes: Pix Automático lets the payer authorize recurring debits once; only CNPJ holders can receive; receiving support is optional for providers, so the clone needs one that offers it; the receiver may be charged, the payer may not [doc SRC-060]. ClickUp bills by card only, through Braintree and Stripe [doc SRC-041], in USD even on the Portuguese pricing page [doc SRC-036].
- Lead time and cost: weeks of provider onboarding; per-transaction fees [inf] Q-007
- Mitigation: launch with cards and Pix (one-off) through a Brazilian provider, add Pix Automático when the provider supports it. Pricing in BRL is itself an advantage over ClickUp.
- Evidence: [doc SRC-060][doc SRC-041][doc SRC-036]

### BR-004 Google OAuth verification
- Category: permissioned integration
- Blocks: F-027 (calendar sync, Drive attachments, Gmail); ClickUp offers Google Calendar two-way sync, Google Drive and Gmail in its App Center [obs EV-001]
- Gatekeeper: Google (OAuth app verification)
- Severity: blocks feature
- Market weight: important [inf] Q-006
- What it takes: Calendar scopes are sensitive (verification typically 3 to 5 business days) [doc SRC-062]. Gmail and full Drive scopes are restricted: a CASA security assessment by an approved assessor, renewed at least every 12 months [doc SRC-061][doc SRC-063][doc SRC-064]. `drive.file` with the Picker is non-sensitive [doc SRC-064].
- Lead time and cost: days for sensitive; weeks plus assessor fees for restricted [doc SRC-061][doc SRC-062]
- Mitigation: start with Calendar (sensitive) and Drive via `drive.file`; postpone Gmail.
- Evidence: [obs EV-001][doc SRC-061][doc SRC-062][doc SRC-063][doc SRC-064]

### BR-005 Microsoft publisher verification
- Category: permissioned integration
- Blocks: F-027 (Outlook calendar and mail, Microsoft Teams) [obs EV-001]
- Gatekeeper: Microsoft (Entra ID publisher verification, AI Cloud Partner Program)
- Severity: adds lead time
- Market weight: important [inf] Q-006
- What it takes: a verified partner program account, a work tenant and a matching domain; free; without it users cannot consent to new multitenant apps [doc SRC-065].
- Lead time and cost: weeks; no fee [doc SRC-065]
- Mitigation: register the partner account early.
- Evidence: [obs EV-001][doc SRC-065]

### BR-006 Slack Marketplace review
- Category: permissioned integration (distribution)
- Blocks: F-027 (Slack listing; ClickUp lists Slack in App Center) [obs EV-001]
- Gatekeeper: Slack
- Severity: adds lead time
- Market weight: minor [inf] Q-006
- What it takes: 10 active workspaces before submission, preliminary review up to 10 business days, functional review up to 10 weeks, no broad scopes [doc SRC-066].
- Lead time and cost: up to about 3 months [doc SRC-066]
- Mitigation: distribute the app outside the Marketplace until it qualifies.
- Evidence: [obs EV-001][doc SRC-066]

### BR-007 WhatsApp Business Platform
- Category: permissioned integration
- Blocks: WhatsApp notifications and creating tasks from WhatsApp (not in ClickUp: no WhatsApp in App Center [obs EV-001]; the request has about 2,500 votes, status "future" [doc SRC-051])
- Gatekeeper: Meta
- Severity: blocks feature
- Market weight: important for Brazilian SMBs [inf] Q-006
- What it takes: business verification, Tech Provider app review with videos, advanced access to messaging and management permissions, Embedded Signup for customers [doc SRC-068]; per-template-message fees by category, billed in BRL for Brazil from 1 July 2026 [doc SRC-067].
- Lead time and cost: weeks; per-message fees [doc SRC-067][doc SRC-068]
- Mitigation: start verification in month one or use a WhatsApp solution provider; launch with email and in-app notifications. This is a differentiator against ClickUp.
- Evidence: [obs EV-001][doc SRC-051][doc SRC-067][doc SRC-068]

### BR-008 Security certifications buyers may ask for
- Category: certifications buyers require
- Blocks: larger SMB and enterprise deals
- Gatekeeper: auditors (SOC 2, ISO 27001)
- Severity: adds cost
- Market weight: minor for small companies, important above that [inf] Q-006
- What it takes: ClickUp holds SOC 1, 2 and 3, ISO 27001, 27017, 27018, 27701 and 42001, PCI and HIPAA badges [doc SRC-039].
- Lead time and cost: months and audit fees [inf] Q-007
- Mitigation: publish a security page with the controls in place; plan SOC 2 Type 1 after product-market fit.
- Evidence: [doc SRC-039]

### BR-009 Enterprise must-haves (SSO, SCIM, audit log, data residency)
- Category: certifications buyers require (enterprise features)
- Blocks: upmarket deals
- Gatekeeper: buyers' IT
- Severity: adds cost
- Market weight: minor for the target segment [inf] Q-006
- What it takes: ClickUp gives Google SSO on Business and SAML, SCIM, audit logs and data residency (US, EU, APAC) on Enterprise [doc SRC-035][doc SRC-039][doc SRC-042].
- Lead time and cost: build time [inf] Q-007
- Mitigation: Google sign-in at launch; defer SAML, SCIM and audit log.
- Evidence: [doc SRC-035][doc SRC-039][doc SRC-042]

### BR-010 Trademark and look and feel
- Category: intellectual property and terms
- Blocks: brand, product name, domain, UI skin
- Gatekeeper: Mango Technologies, Inc. (DBA ClickUp)
- Severity: blocks launch
- Market weight: required to sell
- What it takes: the trademark guidelines bar "ClickUp" or similar names in product names, handles and domains, ads on the mark, and copying the website design, app look and feel, colors, icons or slogans [doc SRC-052]. The Terms bar copying content and marks (sections 4.3, 4.9) [doc SRC-038].
- Lead time and cost: weeks for an own name and identity [inf] Q-005
- Mitigation: own name, palette, icons and copy; use "ClickUp" only to label an importer. The design tokens in this KB describe structure and contrast, not a palette to copy.
- Evidence: [doc SRC-052][doc SRC-038]

### BR-011 ClickUp terms on reverse engineering and competitive API use
- Category: intellectual property and terms
- Blocks: how the research is done (not the clone's launch directly)
- Gatekeeper: ClickUp terms; courts
- Severity: adds lead time
- Market weight: n/a
- What it takes: Terms 1.5 "You may not disassemble, decompile, or reverse engineer the Service" [doc SRC-038]; 3.9 and 4.13 bar scraping and derivative uses [doc SRC-038]; the Developer Terms bar API use for "benchmarking or competitive purpose" [doc SRC-040].
- Lead time and cost: counsel review (Q-005)
- Mitigation: this study only observed the UI of the user's own workspace; it did not use the public API. Counsel decides whether the clone may rely on it.
- Evidence: [doc SRC-038][doc SRC-040]

### BR-012 Integrations, templates and user base
- Category: data, content and network effects
- Blocks: switching from ClickUp
- Gatekeeper: none (market)
- Severity: moat
- Market weight: important [inf] Q-006
- What it takes: ClickUp claims 1,000+ integrations, 1,000+ templates and over 5 million teams [doc SRC-049][doc SRC-050][doc SRC-070]; App Center lists about 90 native integrations [obs EV-001]. It imports from 11 tools and exports List and Table views to CSV or Excel with custom fields [doc SRC-047][doc SRC-015].
- Lead time and cost: ongoing
- Mitigation: an importer for ClickUp's CSV/Excel export (custom fields included) on day one; a small set of Brazil-specific integrations (WhatsApp, Pix, NFS-e) instead of breadth.
- Evidence: [obs EV-001][doc SRC-015][doc SRC-047][doc SRC-049][doc SRC-050][doc SRC-070]

### BR-013 Realtime collaboration and regional hosting
- Category: infrastructure and operating cost
- Blocks: F-026 (live updates across tabs and users)
- Gatekeeper: none
- Severity: adds cost
- Market weight: important [inf] Q-006
- What it takes: board changes propagate to other open sessions without reload [obs EV-032]; the web app uses regional gateways (an EU host served the test workspace) [net EV-005]; ClickUp hosts on AWS in the US, Ireland, Germany, Australia and Singapore [doc SRC-041].
- Lead time and cost: engineering time and a realtime service
- Mitigation: one Brazilian region at launch; a managed realtime service.
- Evidence: [obs EV-032][net EV-005][doc SRC-041]

### BR-014 AI features depend on paid LLM providers
- Category: infrastructure and operating cost
- Blocks: F-023 (AI fields) and the AI shortcuts in pickers (Assign with AI, Prioritize with AI, Ask AI to build filters) [obs EV-041][obs EV-006][obs EV-039]
- Gatekeeper: LLM providers
- Severity: adds cost
- Market weight: minor [inf] Q-006
- What it takes: ClickUp lists 12 LLM subprocessors [doc SRC-041] and meters AI through credits per plan [doc SRC-035][doc SRC-044].
- Lead time and cost: per-use fees
- Mitigation: leave AI out of the first release; add it later behind credits.
- Evidence: [doc SRC-041][doc SRC-035][doc SRC-044][obs EV-041]
