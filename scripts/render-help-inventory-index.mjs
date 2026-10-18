import fs from 'node:fs';
const inventory=JSON.parse(fs.readFileSync('docs/help/inventory.json','utf8'));
const publicFeatures=inventory.features.filter(f=>f.audience==='public');
let text=`# Inventaire fonctionnel Foody\n\nRévision du relevé : ${inventory.reviewedAt}.\n\n${inventory.features.length} fiches de fonctionnalités, ${inventory.coverage.operations} procédures/sous-fonctionnalités, dont ${publicFeatures.length} guides publics en trois langues et ${inventory.features.length-publicFeatures.length} fiches opérateur internes. Le relevé machine contient ${inventory.coverage.sourceFiles} fichiers applicatifs et ${inventory.coverage.surfaces} surfaces de code. Aucune route de page/application relevée ne reste sans classification.\n\nCe relevé décrit les sources examinées, les contrôles et les procédures. Il ne certifie pas chaque état d’exécution ni une installation physique. Les chemins API relatifs à un groupe et les enfants Flutter relatifs conservent cette qualification. Les fichiers techniques partagés sont identifiés séparément.\n\n## Services\n\n| Service | Fichiers sources | Surfaces | Dépôt/version |\n|---|---:|---:|---|\n`;
for(const [name,s] of Object.entries(inventory.services))text+=`| ${name} | ${Object.keys(s.sourceFiles).length} | ${inventory.surfaces.filter(x=>x.service===name).length} | ${s.sourceCommit?.slice(0,12)||'sans commit'} ; ${s.releaseStatus} |\n`;
for(const module of [...new Set(inventory.features.map(f=>f.module))]) {
 text+=`\n## ${module}\n`;
 for(const f of inventory.features.filter(f=>f.module===module)) {
  const href=f.audience==='public'?`../../src/content/help/fr/${f.article}.mdx`:`internal/fr/${f.article.slice(9)}.md`;
  text+=`\n### [${f.title.fr}](${href})\n\nIdentifiant : \`${f.id}\`. Public : ${f.audience}. Disponibilité : ${f.status}. Services : ${[...new Set(f.evidence.map(e=>e.service))].join(', ')}.\n\n`;
  for(const op of f.operations)text+=`- [${op.title.fr}](${href}#${op.id})\n`;
 }
}
text+='\n## Traçabilité détaillée\n\n[inventory.json](inventory.json) conserve chaque fichier, son empreinte SHA-256, les fonctions associées, les routes, les enregistrements API, les destinations Flutter, les champs de configuration Website V3, les clés traduites des contrôles et les actions nommées. [catalog/features.json](catalog/features.json) conserve les instructions rédigées dans les trois langues. Les contrats locaux de chaque service figent le même relevé pour la CI.\n';
fs.writeFileSync('docs/help/INVENTAIRE.fr.md',text);
console.log('French inventory index regenerated.');
