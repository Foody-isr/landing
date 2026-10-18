export const stopwords = new Set('a an the is are to of in on for how can i my do does and or with what it you your me please un une des les le la de du et en pour comment je mon mes est sur que au aux avec dans il elle vous votre vos ma ou qu se this that from as be at by not help aide moi לי את של איך אני על עם זה מה או האם שלי אפשר'.split(' '));
export const aliases = [
  ['article', 'articles', 'item', 'items', 'produit', 'produits', 'מנה', 'מנות', 'פריט', 'פריטים'],
  ['menu', 'menus', 'carte', 'cartes', 'תפריט', 'תפריטים'],
  ['order', 'orders', 'commande', 'commandes', 'הזמנה', 'הזמנות'],
  ['printer', 'printing', 'imprimante', 'impression', 'מדפסת', 'הדפסה'],
  ['payment', 'payments', 'paiement', 'paiements', 'תשלום', 'תשלומים'],
  ['stock', 'inventory', 'inventaire', 'מלאי'],
  ['staff', 'employee', 'employees', 'equipe', 'personnel', 'employe', 'עובדים', 'צוות'],
  ['login', 'connexion', 'connecter', 'התחברות'],
  ['website', 'site', 'online', 'ligne', 'אתר', 'אונליין'],
  ['availability', 'disponibilite', 'זמינות'],
];

/** Normalizes accents and Hebrew vowel marks for multilingual lexical retrieval. */
export function normalize(value) { return value.normalize('NFKD').replace(/\p{M}/gu, '').toLowerCase(); }

/** Ranks only matching articles, shared by full-text search and grounded AI retrieval. */
export function searchArticles(entries, query, topic = '') {
  const original = [...new Set(normalize(query).split(/[^\p{L}\p{N}]+/u).filter(t => t.length > 1 && !stopwords.has(t)))];
  if (!original.length) return [];
  const expanded = new Set(original);
  for (const group of aliases) if (group.some(t => expanded.has(t))) group.forEach(t => expanded.add(t));
  return entries.map(entry => {
    const fields = [[entry.title, 8], [entry.tags?.join(' ') || '', 5], [entry.description, 3], [entry.body || '', 1]];
    let score = 0;
    for (const [text, weight] of fields) {
      const words = new Set(normalize(String(text)).split(/[^\p{L}\p{N}]+/u));
      for (const token of expanded) if (words.has(token) || (token.length >= 3 && original.includes(token) && [...words].some(word => word.startsWith(token)))) score += Number(weight) * (original.includes(token) ? 1 : 0.3);
    }
    if (score > 0 && entry.topic === topic) score += 2;
    return { entry, score };
  }).filter(result => result.score > 0).sort((a, b) => b.score - a.score || a.entry.id.localeCompare(b.entry.id)).map(result => result.entry);
}
