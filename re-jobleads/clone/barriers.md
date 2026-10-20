# Production barriers: JobLeads

Clone target market: single personal user, see `00-charter.md`.
Not legal advice. A legal reading without a source is `[inf]` with a question for counsel in `questions.md`.

## Summary

| Barrier | Category | Severity | Market weight | Blocks | Lead time |
|---|---|---|---|---|---|
| BR-001 Headhunter network and job inventory | data and network effects | moat | not needed for personal use | F-004, F-005 | not copyable by code |
| BR-002 Scraping job pages | distribution gatekeeper | blocks feature | needed for link analysis | F-002, F-003 | none for a personal tool |

### BR-001 Headhunter network and job inventory
- Category: what code cannot copy
- Blocks: F-004, F-005
- Gatekeeper: none, it is the product's data and relationships
- Severity: moat
- Market weight: not needed, the clone starts from a job link the user provides
- What it takes: years of partnerships; out of scope
- Lead time and cost: not applicable
- Mitigation: the user brings the job link
- Evidence: [doc SRC-001]

### BR-002 Job pages may block automated fetch
- Category: distribution gatekeeper
- Blocks: F-002, F-003 (needs the posting text)
- Gatekeeper: job boards and ATS sites (LinkedIn blocks anonymous fetch and needs login)
- Severity: blocks feature
- Market weight: needed for link analysis
- What it takes: fetch public ATS pages (Greenhouse, Lever, Ashby, Workable, Recruitee, SmartRecruiters, Workday) directly, use structured data where present, and provide a paste-the-description fallback
- Lead time and cost: none
- Mitigation: paste fallback in the UI
- Evidence: [inf] Q-001
