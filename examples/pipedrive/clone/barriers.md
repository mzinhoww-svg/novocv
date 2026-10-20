# Production barriers: Pipedrive

Clone target market: see `00-charter.md` (SMBs in Brazil).
Not legal advice. A legal reading without a source is `[inf]` with a question for counsel in `questions.md`.

## Summary

Launch blockers first. One row per barrier; details below.

| Barrier | Category | Severity | Market weight | Blocks | Lead time |
|---|---|---|---|---|---|
| BR-007 LGPD processor duties | Regulation | blocks launch | required to sell | Selling to any business | weeks (contracts and processes) |
| BR-009 Service invoices and the tax reform | The clone's own operation | blocks launch | required to sell | Charging customers | weeks (accountant, invoicing provider) |
| BR-001 Pipedrive terms on reverse engineering | Intellectual property and terms | blocks launch | n/a | Using this study to build a competitor | until counsel decides |
| BR-005 WhatsApp Business Platform | Permissioned integration | blocks feature | required to sell | F-015 | days to weeks |
| BR-002 Gmail restricted scopes | Permissioned integration | blocks feature | important | F-013 (Gmail) | several weeks, yearly |
| BR-004 Microsoft 365 mail and calendar | Permissioned integration | adds lead time | important | F-013, F-014 (Microsoft) | days |
| BR-003 Google Calendar scopes | Permissioned integration | adds lead time | important | F-014 (Google) | 3-5 business days |
| BR-008 International transfer | Regulation | adds lead time | important | Hosting outside Brazil | weeks (contracts) |
| BR-010 Recurring billing methods | The clone's own operation | adds cost | required to sell | Subscriptions | days (PSP onboarding) |
| BR-006 E-signatures | Regulation | adds cost | important | F-016 | days (provider integration) |
| BR-012 Bulk email sender rules | Distribution gatekeepers | blocks feature | important | Email sending from the CRM | days (DNS) |
| BR-011 Security certifications | Certifications | adds cost | minor | Larger buyers | months |
| BR-013 Enterprise controls | Certifications | adds cost | minor | F-012 at scale | months |
| BR-015 Ecosystem and data | Data and network effects | moat | important | Switching from the product | ongoing |
| BR-014 Brand and assets | Intellectual property | moat | n/a | Copying UI assets | none (do not copy) |

### BR-001 Pipedrive's terms forbid reverse engineering and building a competing product
- Category: intellectual property and terms
- Blocks: using this knowledge base to build and sell a competing CRM without legal clearance
- Gatekeeper: Pipedrive's Terms of Service, s.4.1 "Prohibited Activities"
- Severity: blocks launch (legal risk until counsel decides)
- Market weight: n/a
- What it takes: the Terms bar copying and derivative works, use for competitive analysis or to build a competing product, reverse engineering, and access by direct competitors [doc SRC-031]; the AUP bans harvesting data about others [doc SRC-032]. Whether behavior observed in the user's own account may inform a new product is a legal question [inf] Q-010
- Lead time and cost: counsel review
- Mitigation: rebuild from behavior, not assets (clean room); write new copy and art; record the decision in `STATUS.md`
- Evidence: [doc SRC-031] [doc SRC-032]

### BR-002 Gmail sync needs restricted-scope verification and a yearly security assessment
- Category: permissioned integration
- Blocks: F-013 for Gmail and Google Workspace mailboxes
- Gatekeeper: Google OAuth verification and the App Defense Alliance CASA assessment
- Severity: blocks feature
- Market weight: important (Google Workspace is common among Brazilian SMBs) [inf] Q-014
- What it takes: all Gmail read and modify scopes are restricted; an app that stores that data on its servers needs a security assessment by an authorized lab, repeated at least every 12 months; also a public homepage, privacy policy, domain verification and a demo video [doc SRC-046] [doc SRC-048] [doc SRC-050] [doc SRC-047]
- Lead time and cost: verification "can potentially take several weeks"; Google publishes no fee [doc SRC-046]; cost from labs is open [inf] Q-013. Unverified apps are capped at 100 users [doc SRC-049]
- Mitigation: start verification in month one; launch with IMAP or forwarding (BCC) capture until approved; keep scopes minimal
- Evidence: [doc SRC-046] [doc SRC-048] [doc SRC-049] [doc SRC-050]

### BR-003 Google Calendar sync needs sensitive-scope verification
- Category: permissioned integration
- Blocks: F-014 for Google calendars
- Gatekeeper: Google OAuth verification
- Severity: adds lead time
- Market weight: important [inf] Q-014
- What it takes: reading calendar events is a sensitive scope; review typically takes 3-5 business days and needs the same brand and privacy materials [doc SRC-047]
- Lead time and cost: 3-5 business days; no fee published [doc SRC-047]
- Mitigation: submit together with BR-002; start with one-way sync
- Evidence: [doc SRC-047] [doc SRC-037]

### BR-004 Microsoft 365 mail and calendar need Graph, publisher verification and tenant consent
- Category: permissioned integration
- Blocks: F-013 and F-014 for Microsoft mailboxes
- Gatekeeper: Microsoft Entra and Microsoft Graph
- Severity: adds lead time
- Market weight: important [inf] Q-016
- What it takes: publisher verification (free, needs a Microsoft AI Cloud Partner Program account) [doc SRC-051]; delegated Mail and Calendars permissions need no admin consent but tenants can restrict user consent [doc SRC-052] [doc SRC-053]; optional yearly Microsoft 365 Certification [doc SRC-054]; Exchange Web Services is being disabled from October 2026 and fully in April 2027, so the clone must use Graph [doc SRC-055]
- Lead time and cost: days for verification; certification months and paid (no public price) [doc SRC-054]
- Mitigation: build on Graph only; do publisher verification before the first pilot
- Evidence: [doc SRC-051] [doc SRC-052] [doc SRC-053] [doc SRC-054] [doc SRC-055]

### BR-005 WhatsApp needs Meta's Business Platform: verification, templates and per-message fees
- Category: permissioned integration
- Blocks: F-015
- Gatekeeper: Meta, WhatsApp Business Platform
- Severity: blocks feature
- Market weight: required to sell (Brazilian SMB sales run on WhatsApp) [inf] Q-014
- What it takes: Tech Provider onboarding with business verification and App Review [doc SRC-058]; approved message templates (review up to 24 hours) [doc SRC-059]; messaging limits from 250 recipients per day for new portfolios [doc SRC-060]; per-message pricing since July 2025, billed in BRL for Brazilian customers from July 2026 [doc SRC-056]; Pipedrive itself integrates through this platform [doc SRC-038]. Meta's s.4.7 restricts providers whose main product is AI; in Brazil CADE suspended that restriction [doc SRC-057] [doc SRC-062]
- Lead time and cost: days to weeks for verification; per-message fees paid by each customer [doc SRC-056]
- Mitigation: start Tech Provider onboarding on day one or partner with a Business Solution Provider; never automate WhatsApp Web (the WhatsApp terms ban unofficial automation and accounts get disabled [doc SRC-061])
- Evidence: [doc SRC-056] [doc SRC-058] [doc SRC-059] [doc SRC-060] [doc SRC-061]

### BR-006 E-signatures: validity rules in Brazil and a signature provider
- Category: regulation and licensing
- Blocks: F-016
- Gatekeeper: MP 2.200-2/2001 and Lei 14.063/2020; signature providers
- Severity: adds cost
- Market weight: important
- What it takes: non-ICP signatures are valid when the parties accept them (MP 2.200-2 Art. 10 §2) [doc SRC-064] [doc SRC-065]; Lei 14.063 defines simple, advanced and qualified signatures and its Chapter II does not apply between private parties [doc SRC-063]; some acts need a qualified (ICP-Brasil) signature [doc SRC-063]. Pipedrive's Smart Docs offer "basic digital signing" [doc SRC-039]. Whether this covers the buyers' contracts is a question for counsel [inf] Q-012
- Lead time and cost: integrate an existing provider (Clicksign, D4Sign with an ICP-Brasil option) [doc SRC-066] [doc SRC-067]
- Mitigation: integrate a Brazilian provider instead of building signing; add an acceptance clause to the clone's templates
- Evidence: [doc SRC-063] [doc SRC-064] [doc SRC-065] [doc SRC-066] [doc SRC-067]

### BR-007 LGPD: the clone is a processor of its customers' contact data
- Category: regulation and licensing
- Blocks: selling the clone to any business
- Gatekeeper: LGPD and the ANPD
- Severity: blocks launch
- Market weight: required to sell
- What it takes: processor duties (records of processing, follow instructions, security, joint liability) [doc SRC-068]; incidents: the controller reports within 3 business days, the processor alerts the controller without undue delay [doc SRC-070]; an encarregado is optional for a processor but expected for the clone's own data [doc SRC-071]; small agents get simplified duties and doubled deadlines [doc SRC-069]; Pipedrive's own DPA is the benchmark [doc SRC-035]
- Lead time and cost: weeks to prepare a DPA, records, incident runbook and privacy notice
- Mitigation: publish a DPA naming the customer as controller, a subprocessor list and an incident process before the first paying customer
- Evidence: [doc SRC-068] [doc SRC-069] [doc SRC-070] [doc SRC-071] [doc SRC-035]

### BR-008 Hosting outside Brazil needs a transfer mechanism
- Category: regulation and licensing
- Blocks: hosting the clone outside Brazil
- Gatekeeper: ANPD Resolution 19/2024
- Severity: adds lead time
- Market weight: important
- What it takes: standard contractual clauses adopted without changes, and a transfer notice [doc SRC-072]; only the EU is recognized as adequate [doc SRC-073]. Pipedrive has no Brazil region; Brazilian accounts default to the US [doc SRC-034], and its DPA includes the Brazil clauses [doc SRC-035]
- Lead time and cost: contract work
- Mitigation: host in São Paulo (also a selling point) or include the clauses in the DPA
- Evidence: [doc SRC-072] [doc SRC-073] [doc SRC-034] [doc SRC-035]

### BR-009 Service invoices (NFS-e) and the 2026 tax reform for the clone's own sales
- Category: the clone's own operation
- Blocks: charging Brazilian customers
- Gatekeeper: municipalities (ISS, NFS-e), Receita Federal and CGIBS (CBS and IBS)
- Severity: blocks launch
- Market weight: required to sell
- What it takes: issue NFS-e for each subscription invoice; the national NFS-e standard is pushed by LC 214/2025 art. 62 [doc SRC-074] [doc SRC-075]; from 2026 invoices carry an informational CBS/IBS highlight, optional at first on NFS-e and from 2027 for Simples Nacional [doc SRC-076] [doc SRC-077]; which ISS item applies to SaaS varies by city [doc SRC-085] [inf] Q-011
- Lead time and cost: weeks with an accountant and an invoicing API provider
- Mitigation: use an NFS-e issuing provider from day one; confirm the ISS item with an accountant
- Evidence: [doc SRC-074] [doc SRC-075] [doc SRC-076] [doc SRC-077]

### BR-010 Recurring billing methods buyers expect
- Category: the clone's own operation
- Blocks: subscription billing
- Gatekeeper: Banco Central do Brasil (through licensed payment providers)
- Severity: adds cost
- Market weight: required to sell [inf] Q-015
- What it takes: Pix Automático (launched June 2025) needs a receiver with an active CNPJ and a receiving provider [doc SRC-078] [doc SRC-079]; collecting your own subscriptions through a licensed provider needs no Central Bank license [doc SRC-084]
- Lead time and cost: provider fees per transaction
- Mitigation: integrate a provider with Pix Automático, boleto and card
- Evidence: [doc SRC-078] [doc SRC-079] [doc SRC-084]

### BR-011 Security certifications larger buyers ask for
- Category: certifications buyers require
- Blocks: deals with larger or regulated buyers
- Gatekeeper: auditors (ISO 27001, SOC 2)
- Severity: adds cost
- Market weight: minor for SMBs [inf] Q-017
- What it takes: Pipedrive holds ISO 27001:2022, ISO 27701, SOC 2 Type 2 and SOC 3 [doc SRC-033]
- Lead time and cost: months and audit fees
- Mitigation: publish a security page and controls first; certify when upmarket deals need it
- Evidence: [doc SRC-033]

### BR-012 Email sent from the CRM must meet bulk sender rules
- Category: distribution gatekeepers
- Blocks: campaigns, sequences and bulk email from the clone
- Gatekeeper: Gmail, Yahoo, Outlook.com
- Severity: blocks feature
- Market weight: important
- What it takes: SPF, DKIM and DMARC, one-click unsubscribe, spam rate under 0.3% for bulk senders [doc SRC-080] [doc SRC-081]; Outlook.com rejects non-compliant high-volume mail with 550 5.7.515 [doc SRC-082]
- Lead time and cost: DNS setup per customer domain; deliverability monitoring
- Mitigation: send through each user's own mailbox for one-to-one email; a managed sending domain with compliance checks for bulk
- Evidence: [doc SRC-080] [doc SRC-081] [doc SRC-082]

### BR-013 Enterprise controls are part of the higher plans
- Category: certifications buyers require
- Blocks: F-012 at scale (teams that need permission sets and audit)
- Gatekeeper: buyers' IT
- Severity: adds cost
- Market weight: minor for SMBs
- What it takes: SAML SSO on all plans [doc SRC-044]; security rules and the audit log on Ultimate [doc SRC-042] [doc SRC-043]; visibility groups and permission sets on Premium and Ultimate [doc SRC-041]
- Lead time and cost: engineering
- Mitigation: build the visibility model (four levels) early; SSO and audit later
- Evidence: [doc SRC-041] [doc SRC-042] [doc SRC-043] [doc SRC-044]

### BR-014 Brand, icons, illustrations and copy cannot be copied
- Category: intellectual property and terms
- Blocks: copying UI assets
- Gatekeeper: Pipedrive's rights in its materials
- Severity: moat
- Market weight: n/a
- What it takes: the Terms forbid copying Pipedrive materials [doc SRC-031]; the won illustration and icons are assets [obs EV-034]
- Lead time and cost: design work for new assets and copy
- Mitigation: new names, icons, illustrations and microcopy; keep only the behavior
- Evidence: [doc SRC-031] [obs EV-034]

### BR-015 The ecosystem and the customers' data are a moat
- Category: data, content and network effects
- Blocks: matching integrations and switching
- Gatekeeper: Pipedrive Marketplace; customers' existing data
- Severity: moat
- Market weight: important
- What it takes: Pipedrive cites 400+ Marketplace apps with a reviewed developer program [doc SRC-045] [doc SRC-029]; a public API with webhooks and OAuth [doc SRC-027] [doc SRC-028]
- Lead time and cost: ongoing
- Mitigation: importers for Pipedrive exports and spreadsheets; a public API and webhooks from the start; focus on WhatsApp and Brazilian integrations
- Evidence: [doc SRC-045] [doc SRC-029] [doc SRC-027] [doc SRC-028]
