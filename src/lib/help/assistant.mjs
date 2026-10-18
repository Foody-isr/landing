import { validateQuestion, validateAnswer } from './transport.mjs';
export { validateQuestion } from './transport.mjs';
async function readBoundedJSON(request) {
  if (!request.body || !request.headers.get('content-type')?.startsWith('application/json')) throw new Error('invalid');
  const reader = request.body.getReader();
  const chunks = [];
  let length = 0;
  try {
    for (;;) {
      const { value, done } = await reader.read();
      if (done) break;
      length += value.length;
      if (length > 64000) { await reader.cancel(); throw new Error('invalid'); }
      chunks.push(value);
    }
  } finally { reader.releaseLock(); }
  return JSON.parse(Buffer.concat(chunks).toString('utf8'));
}


/** Proxies preview questions to development without auth, cookies, tenant data or provider keys. */
export async function handleSupportRequest(request, { fetcher = fetch } = {}) {
  const origin = request.headers.get('origin');
  const own = new URL(request.url).origin;
  const headers = { 'Content-Type': 'application/json', 'Cache-Control': 'no-store' };
  const respond = (body, status) => new Response(JSON.stringify(body), { status, headers });
  if (origin && origin !== own) return respond({ error: 'origin_forbidden' }, 403);
  if (request.method !== 'POST') return respond({ error: 'method_not_allowed' }, 405);
  let question;
  try { question = validateQuestion(await readBoundedJSON(request)); } catch { /* Reject before any API side effect. */ }
  if (!question) return respond({ error: 'invalid_question' }, 400);
  // Canonical production browsers call the API directly so each visitor has its
  // own origin quota. Preview proxy traffic intentionally shares its egress cap.
  try {
    const response = await fetcher('https://dev-api.foody-pos.co.il/api/v1/public/support/chat', {
      method: 'POST', credentials: 'omit', cache: 'no-store', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(question), signal: AbortSignal.any([request.signal, AbortSignal.timeout(50000)]),
    });
    if (!response.ok) return respond({ error: response.status === 429 ? 'rate_limited' : 'assistant_unavailable' }, response.status === 429 ? 429 : 503);
    const answer = validateAnswer(await response.json());
    if (!answer) return respond({ error: 'assistant_unavailable' }, 502);
    return respond(answer, 200);
  } catch { return respond({ error: 'assistant_unavailable' }, 503); }
}
