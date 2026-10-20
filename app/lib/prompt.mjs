// Prompt construction and response parsing for the tailoring call.

export const SYSTEM_PROMPT = `Você é um especialista em recrutamento e em currículos compatíveis com ATS.
Adapte o currículo e escreva uma carta de apresentação para UMA vaga específica.

Regras invioláveis:
1. Nunca invente cargos, empresas, datas, números, diplomas ou habilidades. Use só o que está no CV original.
2. Reordene, reescreva e destaque o que for mais relevante para a vaga. Use as palavras-chave da vaga quando o CV de fato comprova a experiência.
3. Formato amigável a ATS: texto simples em Markdown, sem tabelas, colunas, ícones ou imagens. Seções padrão (Resumo, Experiência, Formação, Habilidades, Idiomas).
4. Ajuste o formato ao ATS informado quando relevante (por exemplo, datas no formato MM/AAAA, títulos de seção convencionais).
5. A carta tem de 200 a 300 palavras, tom profissional e direto, cita a empresa e a vaga, sem clichês e sem repetir o CV.
6. Responda no mesmo idioma da vaga, a menos que o usuário peça outro.
7. Responda SOMENTE com um objeto JSON válido, sem texto fora dele.`;

export function buildUserPrompt({ cv, job, language, notes }) {
  return `## Vaga
Título: ${job.title || '(não informado)'}
Empresa: ${job.company || '(não informada)'}
Local: ${job.location || '(não informado)'}
Plataforma ATS: ${job.ats || 'Desconhecido'}

### Descrição
${(job.description || '').slice(0, 10000)}

## CV original
${cv.slice(0, 12000)}

## Preferências
Idioma da saída: ${language || 'o mesmo da vaga'}
Observações do candidato: ${notes || 'nenhuma'}

Retorne JSON com estas chaves:
{
  "cv_markdown": "CV adaptado em Markdown",
  "cover_letter": "carta em texto, com saudação e assinatura",
  "keywords_matched": ["palavras-chave da vaga que o CV comprova"],
  "gaps": ["requisitos da vaga que o CV não comprova (não os invente)"],
  "ats_tips": ["2 a 5 ajustes específicos para a plataforma ATS"],
  "match_score": 0
}
match_score é um inteiro de 0 a 100.`;
}

export function parseModelJson(text) {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/);
  const raw = fenced ? fenced[1] : text;
  const start = raw.indexOf('{');
  const end = raw.lastIndexOf('}');
  if (start === -1 || end <= start) throw new Error('A IA não devolveu JSON');
  const data = JSON.parse(raw.slice(start, end + 1));
  return {
    cv_markdown: String(data.cv_markdown || ''),
    cover_letter: String(data.cover_letter || ''),
    keywords_matched: Array.isArray(data.keywords_matched) ? data.keywords_matched.map(String) : [],
    gaps: Array.isArray(data.gaps) ? data.gaps.map(String) : [],
    ats_tips: Array.isArray(data.ats_tips) ? data.ats_tips.map(String) : [],
    match_score: Math.max(0, Math.min(100, Number(data.match_score) || 0)),
  };
}

export async function callOpenRouter({ apiKey, model, messages }) {
  const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
    method: 'POST',
    signal: AbortSignal.timeout(120000),
    headers: {
      authorization: `Bearer ${apiKey}`,
      'content-type': 'application/json',
      'x-title': 'Vaga Certa',
    },
    body: JSON.stringify({ model, messages, temperature: 0.4, response_format: { type: 'json_object' } }),
  });
  const body = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(body?.error?.message || `OpenRouter respondeu ${res.status}`);
  const content = body?.choices?.[0]?.message?.content;
  if (!content) throw new Error('Resposta vazia do OpenRouter');
  return content;
}
