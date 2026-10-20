// Job-page analysis: ATS detection, company and posting text extraction.

const ATS_RULES = [
  ['Greenhouse', /greenhouse\.io|boards\.eu\.greenhouse/i],
  ['Lever', /jobs\.lever\.co/i],
  ['Ashby', /ashbyhq\.com/i],
  ['Workable', /workable\.com/i],
  ['Recruitee', /recruitee\.com/i],
  ['SmartRecruiters', /smartrecruiters\.com/i],
  ['Workday', /myworkdayjobs\.com|myworkdaysite\.com/i],
  ['Gupy', /gupy\.io/i],
  ['Kenoby', /kenoby\.com/i],
  ['Pandape', /pandape\.com|pandape/i],
  ['Jobvite', /jobvite\.com/i],
  ['iCIMS', /icims\.com/i],
  ['Taleo', /taleo\.net/i],
  ['SuccessFactors', /successfactors\.(com|eu)/i],
  ['BambooHR', /bamboohr\.com/i],
  ['Teamtailor', /teamtailor\.com/i],
  ['Personio', /personio\.(de|com)/i],
  ['LinkedIn', /linkedin\.com\/jobs/i],
  ['Indeed', /indeed\.com/i],
];

export function detectAts(url, html = '') {
  for (const [name, re] of ATS_RULES) if (re.test(url)) return name;
  for (const [name, re] of ATS_RULES) if (re.test(html)) return name;
  return 'Desconhecido';
}

export function isPrivateHost(hostname) {
  const h = hostname.toLowerCase();
  if (h === 'localhost' || h.endsWith('.local') || h.endsWith('.internal')) return true;
  if (/^(127|10)\./.test(h) || /^192\.168\./.test(h) || /^169\.254\./.test(h)) return true;
  if (/^172\.(1[6-9]|2\d|3[01])\./.test(h)) return true;
  return h === '::1' || h.startsWith('[');
}

const ENTITIES = { '&amp;': '&', '&lt;': '<', '&gt;': '>', '&quot;': '"', '&#39;': "'", '&nbsp;': ' ' };

export function htmlToText(html) {
  return html
    .replace(/<(script|style|noscript|svg)[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<(br|\/p|\/div|\/li|\/h[1-6]|\/tr)>/gi, '\n')
    .replace(/<li[^>]*>/gi, '\n- ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&(amp|lt|gt|quot|#39|nbsp);/g, (m) => ENTITIES[m])
    .replace(/&#(\d+);/g, (_, n) => String.fromCharCode(Number(n)))
    .replace(/[ \t]+/g, ' ')
    .replace(/\n\s*\n+/g, '\n\n')
    .trim();
}

function metaContent(html, key) {
  const re = new RegExp(`<meta[^>]+(?:property|name)=["']${key}["'][^>]*content=["']([^"']*)["']`, 'i');
  const alt = new RegExp(`<meta[^>]+content=["']([^"']*)["'][^>]*(?:property|name)=["']${key}["']`, 'i');
  return (html.match(re) || html.match(alt) || [])[1] || '';
}

function findJobPosting(node) {
  if (!node || typeof node !== 'object') return null;
  if (Array.isArray(node)) {
    for (const n of node) { const f = findJobPosting(n); if (f) return f; }
    return null;
  }
  const type = node['@type'];
  if (type === 'JobPosting' || (Array.isArray(type) && type.includes('JobPosting'))) return node;
  return findJobPosting(node['@graph']);
}

export function parseJobPage(url, html) {
  let posting = null;
  const blocks = html.matchAll(/<script[^>]+application\/ld\+json[^>]*>([\s\S]*?)<\/script>/gi);
  for (const b of blocks) {
    try { posting = findJobPosting(JSON.parse(b[1])); } catch { /* ignore invalid JSON-LD */ }
    if (posting) break;
  }
  const ats = detectAts(url, html);
  if (posting) {
    const org = posting.hiringOrganization;
    const loc = posting.jobLocation?.address;
    return {
      ats,
      source: 'json-ld',
      title: posting.title || '',
      company: (typeof org === 'string' ? org : org?.name) || '',
      location: [loc?.addressLocality, loc?.addressCountry?.name || loc?.addressCountry].filter(Boolean).join(', '),
      description: htmlToText(posting.description || ''),
    };
  }
  const ogTitle = metaContent(html, 'og:title') || (html.match(/<title>([^<]*)<\/title>/i) || [])[1] || '';
  const site = metaContent(html, 'og:site_name');
  const text = htmlToText(html);
  return {
    ats,
    source: 'html',
    title: htmlToText(ogTitle),
    company: site,
    location: '',
    description: text.slice(0, 12000),
  };
}

export async function fetchJob(rawUrl) {
  let u;
  try { u = new URL(rawUrl); } catch { throw new Error('Link inválido'); }
  if (!/^https?:$/.test(u.protocol)) throw new Error('Use um link http(s)');
  if (isPrivateHost(u.hostname)) throw new Error('Host não permitido');
  const res = await fetch(u, {
    redirect: 'follow',
    signal: AbortSignal.timeout(15000),
    headers: { 'user-agent': 'Mozilla/5.0 (compatible; VagaCerta/0.1)', accept: 'text/html,*/*' },
  });
  if (!res.ok) throw new Error(`A página respondeu ${res.status}. Cole a descrição da vaga manualmente.`);
  const html = (await res.text()).slice(0, 3_000_000);
  return parseJobPage(res.url || u.href, html);
}
