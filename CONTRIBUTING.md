# Contributing

Issues and pull requests are welcome, especially reports from real studies: what the skill got wrong, where the agent hesitated, which product behaved in a way the skill did not expect.

## Setup

```bash
npm install
```

```bash
npx playwright install --only-shell chromium
```

```bash
npm test
```

The skill itself has no dependencies. Playwright is only used by the tests, to run the page scripts in a headless browser against `tests/fixture.html`.

## Changing a script

Add or update a test in `tests/` for every behavior you change. The page scripts return structure, counts and shapes, not the page's data. Keep it that way, and add a leak assertion to `tests/page-scripts.test.mjs` for any new output field: the test page holds fake names, emails, IDs and storage values that must not appear in the results.

## Changing the skill text

Skill text is tested with scenarios, as described in `docs/testing.md`:

1. Run the relevant scenario with a fresh agent that reads `SKILL.md` from disk, before your change. Note what it gets wrong.
2. Change the text.
3. Run the same scenario again and confirm the agent now does the right thing without new problems.
4. Record the result in `docs/testing.md`.

## Style

Plain English, short sentences, one idea per sentence. Rules are written as instructions ("Do X", "X is forbidden"). Keep `SKILL.md` for rules and move detail to `references/`.
