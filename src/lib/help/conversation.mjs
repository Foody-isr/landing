/** Bounds completed history by both turns and UTF-8 bytes, dropping oldest pairs together. */
export function boundedHistory(turns) {
  const history = turns.slice(-8).map(({ role, content }) => ({ role, content }));
  while (history.length && (new TextEncoder().encode(JSON.stringify(history)).length > 24000 || history.reduce((sum, turn) => sum + turn.content.length, 0) > 20000)) history.splice(0, 2);
  return history;
}
