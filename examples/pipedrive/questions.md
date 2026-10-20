# Open questions

| ID | Question | Why it matters | How to answer | Status |
|---|---|---|---|---|
| Q-001 | Confirm: the first click on Won, Lost, "+ Deal" and item menus was often ignored. Product bug or an artifact of driving a browser window that was not in front? | An earlier study reported it as a product bug | A person clicks the same controls by hand in a focused window | open |
| Q-002 | Confirm: can deleted activities be restored? The activity delete dialog points to Restore data, which listed leads, deals, people, organizations, products and projects, but no activities | Teardown and the clone's trash design | In L1, delete an activity and look for it in Restore data | open |
| Q-003 | Confirm: is a free-form lost reason offered only when the company has no predefined reasons? Is there an API for the reason list? | R-028 and E-009 | In L1, remove the predefined reasons and mark a deal lost; check the API reference | open |
| Q-004 | Confirm: after saving a new pipeline, the board returns to the pipeline viewed before (seen in this session, not captured) | S-003 behavior | Create a pipeline in L1 and capture the board after Save | open |
| Q-005 | Confirm: after deleting a pipeline, the app opens another pipeline, and that becomes where Deals opens by default (seen and restored in this session, not captured) | Hidden write on a user preference | Repeat in L1 and capture `/deals-default` before and after | open |
| Q-006 | Confirm: what another user sees of "Item owner" deals and of a new pipeline | Visibility model (R-048) | L1 with a second user | open |
| Q-007 | Confirm: does the next-activity prompt also open for activities linked only to a person or organization, and from the Activities list? | Scope of R-014 | Test in L1 | open |
| Q-008 | Confirm: what resets the rotting timer (docs say done activities, notes, files and emails) | R-008 for longer periods | Set rotting to 1 day in L1 and test over two days | open |
| Q-009 | Confirm: does a change in one tab or by another user appear without reload? | Realtime requirement | Two tabs and two users in L1 | open |
| Q-010 | For counsel: the Terms forbid reverse engineering and using the service to build a competing product (SRC-031 s.4.1). Can this study be used to build and sell a clone? | Launch risk BR-001 | Legal review by the user's counsel | open |
| Q-011 | For counsel: which ISS service item applies to a CRM SaaS in the clone's city, and is the NFS-e national standard mandatory there? | BR-009 | Municipal tax rules; accountant | open |
| Q-012 | For counsel: are simple or advanced e-signatures enough for the contracts the clone's buyers sign, and does CPC art. 784 §4 apply? | BR-006 | Legal review | open |
| Q-013 | Confirm: cost and lead time of Google's CASA assessment for Gmail restricted scopes | BR-002 budget | Quotes from authorized labs | open |
| Q-014 | Confirm: how many Brazilian SMB buyers require WhatsApp inside the CRM | Market weight of BR-005 | Customer interviews or a survey | open |
| Q-015 | Confirm: which payment methods SMB buyers expect for a SaaS subscription (Pix Automático, boleto, card) | BR-010 | Customer interviews; PSP data | open |
| Q-016 | Confirm: do target customers' Microsoft 365 tenants restrict user consent or require Microsoft 365 Certification? | BR-004 | Ask pilot customers' IT | open |
| Q-017 | Confirm: do SMB buyers in Brazil ask for SOC 2 or ISO 27001 before buying a CRM? | Market weight of BR-011 | Sales calls | open |
| Q-018 | Confirm: the company setting for the won follow-up popup (type and "in 3 months") was read during the preflight but not captured, to keep company configuration out of the KB | Evidence for R-024 and B-001 | In L1, set the type and delay, win a deal and capture both | open |
