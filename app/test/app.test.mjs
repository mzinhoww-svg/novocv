import { test } from 'node:test';
import assert from 'node:assert/strict';
import { detectAts, parseJobPage, isPrivateHost } from '../lib/job.mjs';
import { parseModelJson, buildUserPrompt } from '../lib/prompt.mjs';

test('detects ATS from URL', () => {
  assert.equal(detectAts('https://boards.greenhouse.io/acme/jobs/1'), 'Greenhouse');
  assert.equal(detectAts('https://jobs.lever.co/acme/abc'), 'Lever');
  assert.equal(detectAts('https://acme.gupy.io/jobs/1'), 'Gupy');
  assert.equal(detectAts('https://example.com/careers'), 'Desconhecido');
});

test('parses JSON-LD JobPosting', () => {
  const html = `<script type="application/ld+json">${JSON.stringify({
    '@context': 'https://schema.org', '@type': 'JobPosting', title: 'Engenheiro',
    hiringOrganization: { name: 'Acme' }, description: '<p>Faça <b>coisas</b></p><ul><li>Node</li></ul>',
    jobLocation: { address: { addressLocality: 'São Paulo', addressCountry: 'BR' } },
  })}</script>`;
  const job = parseJobPage('https://example.com/j', html);
  assert.equal(job.company, 'Acme');
  assert.equal(job.location, 'São Paulo, BR');
  assert.match(job.description, /Faça coisas/);
  assert.match(job.description, /- Node/);
});

test('falls back to page text', () => {
  const job = parseJobPage('https://example.com/j', '<title>Dev</title><meta property="og:site_name" content="Foo"><body><p>Vaga boa</p></body>');
  assert.equal(job.source, 'html');
  assert.equal(job.company, 'Foo');
  assert.match(job.description, /Vaga boa/);
});

test('blocks private hosts', () => {
  assert.ok(isPrivateHost('localhost'));
  assert.ok(isPrivateHost('192.168.0.1'));
  assert.ok(!isPrivateHost('boards.greenhouse.io'));
});

test('parses fenced model JSON and clamps score', () => {
  const r = parseModelJson('```json\n{"cv_markdown":"a","cover_letter":"b","match_score":250}\n```');
  assert.equal(r.match_score, 100);
  assert.deepEqual(r.gaps, []);
  assert.throws(() => parseModelJson('sem json'));
});

test('prompt includes ATS and job text', () => {
  const p = buildUserPrompt({ cv: 'meu cv', job: { title: 'T', company: 'C', ats: 'Lever', description: 'desc' } });
  assert.match(p, /Lever/); assert.match(p, /meu cv/);
});
