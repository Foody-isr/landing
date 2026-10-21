const languages = ['en', 'fr', 'he'];

/** Accepts only bounded plain conversation turns; system instructions cannot be supplied by clients. */
export function validateQuestion(value) {
  if (!value || typeof value !== 'object' || Object.keys(value).some(key => !['lang', 'message', 'history', 'topic'].includes(key)) || !languages.includes(value.lang) || typeof value.message !== 'string'
    || !value.message.trim() || value.message.length > 1500 || !Array.isArray(value.history) || value.history.length > 8
    || value.history.reduce((length, turn) => length + (typeof turn?.content === 'string' ? turn.content.length : 0), 0) > 20000
    || (value.topic !== undefined && (typeof value.topic !== 'string' || !/^[a-z-]{0,40}$/.test(value.topic)))) return null;
  if (value.history.length % 2 || value.history.some((turn, index) => !turn || turn.role !== (index % 2 ? 'assistant' : 'user')
    || typeof turn.content !== 'string' || !turn.content.trim() || turn.content.length > 6000)) return null;
  return { lang: value.lang, message: value.message.trim(), topic: value.topic || '',
    history: value.history.map(({ role, content }) => ({ role, content })) };
}


/** Validates documentation-only answers before displaying any external response. */
export function validateAnswer(value) {
  if (!value || typeof value.answer !== 'string' || !value.answer.trim() || value.answer.length > 12000 || !Array.isArray(value.sources) || value.sources.length > 5) return null;
  if (value.sources.some(source => !source || typeof source.id !== 'string' || !/^[a-z0-9-]+\/[a-z0-9-]+$/.test(source.id) || !languages.includes(source.lang) || source.url !== `/${source.lang}/help/${source.id}` || typeof source.title !== 'string' || !source.title.trim() || typeof source.updatedAt !== 'string')) return null;
  return { answer: value.answer, sources: value.sources, revision: value.revision };
}

/** Selects production only on the canonical public host; previews stay on development. */
export function supportEndpoint(hostname, localAPI = 'http://localhost:8080') {
  if (['foody-pos.co.il', 'www.foody-pos.co.il'].includes(hostname)) return 'https://api.foody-pos.co.il/api/v1/public/support/chat';
  if (hostname === 'localhost' || hostname === '127.0.0.1') return `${localAPI.replace(/\/$/, '')}/api/v1/public/support/chat`;
  return '/api/support/chat';
}
