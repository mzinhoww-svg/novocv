# Vaga Certa

Simplified personal tool inspired by JobLeads' CV and cover-letter tailoring. Built from the public feature list (see `re-jobleads/`), not from the product's code or in-app behavior.

## Run

```bash
cd app
npm start            # http://localhost:3000
```

Node 22+, no dependencies. Paste your OpenRouter key in the page (stored only in your browser), or set `OPENROUTER_API_KEY` before starting.

## Flow

1. Paste your base CV (saved in the browser).
2. Paste a job link. The server fetches the page, reads schema.org `JobPosting` data when present (otherwise page text), and detects the ATS (Greenhouse, Lever, Ashby, Workable, Gupy, Workday and others) and the company.
3. Review or edit the extracted description. If the link needs a login (LinkedIn) or blocks fetching, paste the description manually.
4. The model returns a tailored CV, a cover letter, matched keywords, gaps and ATS tips. It is instructed never to invent experience. Edit, copy, download or print to PDF.

`npm test` runs the unit tests.
