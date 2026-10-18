import fs from 'node:fs';
import path from 'node:path';
import matter from 'gray-matter';

const features = JSON.parse(fs.readFileSync('docs/help/catalog/features.json', 'utf8'));
const languages = ['en', 'fr', 'he'];
const check = process.argv.includes('--check');
const changes = [];
const labels = {
 en: { access: 'Availability and access', recovery: 'If the operation fails', local: 'Release availability must be confirmed', localText: 'This application exists in the source workspace. This guide does not confirm public distribution or availability in your installed release.' },
 fr: { access: 'Disponibilité et accès', recovery: 'En cas d’échec', local: 'Disponibilité à confirmer', localText: 'Cette application existe dans les sources. Ce guide ne confirme ni sa distribution publique ni sa disponibilité dans votre version installée.' },
 he: { access: 'זמינות וגישה', recovery: 'במקרה של כשל', local: 'יש לאשר זמינות גרסה', localText: 'האפליקציה קיימת במקורות. המדריך אינו מאשר הפצה ציבורית או זמינות בגרסה המותקנת.' },
};
function write(file, value) {
  if (fs.existsSync(file) && fs.readFileSync(file, 'utf8') === value) return;
  changes.push(file);
  if (!check) { fs.mkdirSync(path.dirname(file), { recursive: true }); fs.writeFileSync(file, value); }
}
for (const feature of features) {
  for (const lang of languages) {
    const destination = feature.audience === 'internal' ? `docs/help/internal/${lang}/${feature.article.slice(9)}.md` : `src/content/help/${lang}/${feature.article}.mdx`;
    const existing = fs.existsSync(destination) ? matter(fs.readFileSync(destination, 'utf8')).data : {};
    const meta = { title: feature.title[lang], description: existing.description || feature.entry[lang], apps: feature.module === 'guest' ? 'foodyweb' : feature.id === 'landing-offers' ? 'foodylanding' : existing.apps || (feature.selectors.foodyadmin && !feature.selectors.foodypos ? 'foodyadmin' : feature.selectors.foodypos && !feature.selectors.foodyadmin ? 'foodypos' : 'both'), tags: [...new Set([feature.module, feature.id, ...(existing.tags || [])])], updatedAt: feature.procedureUpdatedAt || '2026-10-18', featureId: feature.id, audience: feature.audience, releaseStatus: feature.status };
    let body = feature.entry[lang] + '\n\n';
    if (feature.status === 'local-release-unverified') body += `> **${labels[lang].local}**\n> ${labels[lang].localText}\n\n`;
    if (feature.access) body += `## ${labels[lang].access}\n\n${feature.access[lang]}\n\n`;
    for (const operation of feature.operations) body += `<span id="${operation.id}" />\n\n${'#'.repeat(operation.level || 2)} ${operation.title[lang]}\n\n${operation.instructions[lang]}\n\n`;
    if (feature.recovery) body += `## ${labels[lang].recovery}\n\n${feature.recovery[lang]}\n\n`;
    write(destination, matter.stringify(body.trim() + '\n', meta, { lineWidth: 120 }));
  }
}
const topics = {
 account: ['Account and subscription | Compte et abonnement | חשבון ומנוי', 'Account security and commercial access. | Sécurité du compte et accès commercial. | אבטחת חשבון וגישה מסחרית.', 'settings'],
 customers: ['Customers | Clients | לקוחות', 'Profiles, addresses and duplicate management. | Fiches, adresses et doublons. | פרטים, כתובות וכפילויות.', 'users'],
 marketing: ['Marketing and promotions | Marketing et promotions | שיווק ומבצעים', 'Promotion codes and social content. | Codes promotionnels et contenus sociaux. | קודי מבצע ותוכן ברשתות.', 'tag'],
 delivery: ['Delivery and routes | Livraisons et tournées | משלוחים וסבבים', 'Zones, scheduling, dispatch and couriers. | Zones, horaires, affectation et livreurs. | אזורים, מועדים, שיבוץ ושליחים.', 'globe'],
 catering: ['Catering | Catering | קייטרינג', 'Services, offers, quotes and events. | Services, offres, devis et événements. | שירותים, הצעות מחיר ואירועים.', 'kitchen'],
 chains: ['Chains and branches | Chaînes et établissements | רשתות וסניפים', 'Branch access and public presence. | Accès et présence publique des établissements. | גישת סניפים ונוכחות ציבורית.', 'globe'],
 communications: ['Messages and communications | Messages et communications | הודעות ותקשורת', 'WhatsApp, templates and automation. | WhatsApp, modèles et automatisations. | WhatsApp, תבניות ואוטומציה.', 'receipt'],
 guest: ['Customer ordering | Commande côté client | הזמנות ללקוחות', 'Online, QR, tracking and receipts. | Commande en ligne, QR, suivi et reçus. | הזמנות, QR, מעקב וקבלות.', 'card'],
};
for (const [topic, [title, description, icon]] of Object.entries(topics)) for (const [i, lang] of languages.entries()) write(`src/content/help/${lang}/${topic}/_meta.json`, JSON.stringify({ title: title.split(' | ')[i], description: description.split(' | ')[i], icon, order: 12 + Object.keys(topics).indexOf(topic) }, null, 2) + '\n');
if (check && changes.length) { console.error('Guides are stale. Run npm run render:help:\n' + changes.join('\n')); process.exit(1); }
console.log(`${features.length} feature guides rendered/checked in ${languages.length} languages (${changes.length} changed files).`);
