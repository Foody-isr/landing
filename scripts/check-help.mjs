import fs from 'node:fs';
import { readCorpus, validateCorpus } from '../src/lib/help/corpus.mjs';

const entries = readCorpus();
const errors = validateCorpus(entries);
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
const manifest = entries.map(({ markdown, ...entry }) => entry);
fs.writeFileSync('public/help-manifest.json', `${JSON.stringify(manifest, null, 2)}\n`);
console.log(`Help: ${entries.length} published translations validated; search/AI manifest regenerated.`);
