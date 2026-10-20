import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import { fetchJob } from './lib/job.mjs';
import { SYSTEM_PROMPT, buildUserPrompt, parseModelJson, callOpenRouter } from './lib/prompt.mjs';

const PORT = Number(process.env.PORT) || 3000;
const PUBLIC = new URL('./public/', import.meta.url);
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css' };

function send(res, status, data) {
  res.writeHead(status, { 'content-type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify(data));
}

async function readJson(req) {
  let size = 0;
  const chunks = [];
  for await (const c of req) {
    size += c.length;
    if (size > 1_000_000) throw new Error('Pedido muito grande');
    chunks.push(c);
  }
  return JSON.parse(Buffer.concat(chunks).toString() || '{}');
}

const routes = {
  'POST /api/analyze': async (body) => fetchJob(String(body.url || '')),
  'POST /api/tailor': async (body, req) => {
    const apiKey = req.headers['x-openrouter-key'] || process.env.OPENROUTER_API_KEY;
    if (!apiKey) throw new Error('Informe sua chave do OpenRouter');
    if (!body.cv?.trim()) throw new Error('Cole seu CV');
    if (!body.job?.description?.trim()) throw new Error('A vaga está sem descrição');
    const model = body.model || 'anthropic/claude-sonnet-4.5';
    const content = await callOpenRouter({
      apiKey,
      model,
      messages: [
        { role: 'system', content: SYSTEM_PROMPT },
        { role: 'user', content: buildUserPrompt(body) },
      ],
    });
    return parseModelJson(content);
  },
};

const server = createServer(async (req, res) => {
  const path = new URL(req.url, 'http://x').pathname;
  const route = routes[`${req.method} ${path}`];
  if (route) {
    try { return send(res, 200, await route(await readJson(req), req)); }
    catch (e) { return send(res, 400, { error: e.message }); }
  }
  const file = path === '/' ? 'index.html' : path.slice(1);
  if (file.includes('..')) return send(res, 404, { error: 'not found' });
  try {
    const data = await readFile(new URL(file, PUBLIC));
    const ext = file.slice(file.lastIndexOf('.'));
    res.writeHead(200, { 'content-type': TYPES[ext] || 'application/octet-stream' });
    res.end(data);
  } catch {
    send(res, 404, { error: 'not found' });
  }
});

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  server.listen(PORT, '127.0.0.1', () => console.log(`Vaga Certa em http://localhost:${PORT}`));
}
export { server };
