import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const landing = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const arguments_ = process.argv.slice(2);
const at = arguments_.indexOf('--workspace');
if (at < 0) throw new Error('Pass --workspace <service-root-map.json>');
const roots = JSON.parse(fs.readFileSync(path.resolve(arguments_[at + 1]), 'utf8'));
const workspace = path.dirname(landing);
const features = JSON.parse(fs.readFileSync(path.join(landing, 'docs/help/catalog/features.json'), 'utf8'));
const languages = ['en', 'fr', 'he'];
const digest = value => crypto.createHash('sha256').update(value).digest('hex');
const sourceExtension = /\.(?:tsx?|jsx?|mjs|css|go|dart|swift|kt|json|arb)$/;
const sourceRoots = /^(?:src|app|components|lib|services|store|internal|config|cmd|ios\/Runner|ios\/AppIntents|android\/app\/src)\//;
const excluded = /(?:^|\/)(?:__tests__|test|tests|node_modules|build|Pods|\.dart_tool|generated|l10n\/app_localizations[^/]*)(?:\/|$)|(?:\.test|\.spec|_test|\.g|\.freezed)\./;
const glob = value => new RegExp('^' + value.split('**').map(part => part.split('*').map(x => x.replace(/[.+?^${}()|[\]\\]/g, '\\$&')).join('[^/]*')).join('.*') + '$');
const selectors = features.map(f => ({ id: f.id, service: f.selectors, compiled: Object.fromEntries(Object.entries(f.selectors).map(([service, paths]) => [service, paths.map(glob)])) }));
const git = (root, ...args) => { try { return execFileSync('git', args, { cwd: root, encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] }).trim(); } catch { return ''; } };
function walk(root, dir = '') {
  const entries = [];
  for (const item of fs.readdirSync(path.join(root, dir), { withFileTypes: true })) {
    if (item.name.startsWith('.') || ['node_modules', 'Pods', 'build', 'vendor'].includes(item.name)) continue;
    const file = path.posix.join(dir, item.name);
    if (item.isDirectory()) entries.push(...walk(root, file));
    else if (item.isFile()) entries.push(file);
  }
  return entries;
}
function routePath(file) {
  return '/' + file.replace(/^(?:src\/)?app\//, '').replace(/\/(?:page|route)\.[jt]sx?$/, '')
    .split('/').filter(x => !/^\([^)]*\)$/.test(x) && !x.startsWith('@')).join('/');
}
function flutterRoutes(source, classes) {
  const paths = [...source.matchAll(/path:\s*['"]([^'"]+)['"]/g)];
  return paths.map((match, index) => {
    const block = source.slice(match.index, paths[index + 1]?.index || source.length);
    const componentSources = [...new Set([...block.matchAll(/\b([A-Z]\w*)\s*\(/g)].flatMap(m => classes.get(m[1]) || []))];
    return { kind: 'flutter-route', route: match[1], line: source.slice(0, match.index).split('\n').length, resolution: match[1].startsWith('/') ? 'absolute' : 'relative-to-parent', componentSources };
  });
}

const services = {};
const surfaces = [];
for (const [service, configuredRoot] of Object.entries(roots)) {
  const root = path.resolve(workspace, configuredRoot);
  const hasGit = !!git(root, 'rev-parse', '--show-toplevel') && git(root, 'rev-parse', '--show-toplevel') === root;
  const listed = hasGit ? [...new Set((git(root, 'ls-files') + '\n' + git(root, 'ls-files', '--others', '--exclude-standard')).split('\n').filter(Boolean))] : walk(root);
  // Only authored migration selectors opt SQL into evidence. Do not expand the
  // review to every historical migration or to compressed/database data files.
  const explicitMigration = file => service === 'foodyserver'
    && /^migrations\/[^/]+\.sql$/.test(file)
    && selectors.some(feature => feature.compiled[service]?.some(pattern => pattern.test(file)));
  const files = listed.filter(file => ((sourceRoots.test(file) && sourceExtension.test(file)) || explicitMigration(file)) && !excluded.test(file) && fs.existsSync(path.join(root, file))).sort();
  const classes = new Map();
  for (const file of files.filter(f => f.endsWith('.dart'))) for (const match of fs.readFileSync(path.join(root, file), 'utf8').matchAll(/\bclass\s+(\w+)/g)) classes.set(match[1], [...(classes.get(match[1]) || []), file]);
  const sources = {};
  for (const file of files) {
    const bytes = fs.readFileSync(path.join(root, file));
    const text = bytes.toString('utf8');
    const matched = selectors.filter(f => f.compiled[service]?.some(pattern => pattern.test(file))).map(f => f.id);
    // The unified payment-history reader lives in orders for existing data
    // access, but it does not change order creation, types or fulfillment.
    // This extracted resolver classifies cash POS access failures only; it does
    // not introduce order creation, fulfillment or order-type procedures.
    const ids = service === 'foodyserver' && file === 'internal/orders/cash_drawer_context.go'
      ? ['pos-payments', 'pos-cash-access-diagnostics']
      : service === 'foodyserver' && /^internal\/orders\/transactions(?:_handler|_adjustments)?\.go$/.test(file)
        ? ['pos-payments'] : service === 'foodyserver' && file === 'internal/menu/item_photos.go'
          ? ['menu-product-photos'] : matched.length ? matched : ['shared-runtime'];
    sources[file] = { sha256: digest(bytes), features: ids };
    const found = [];
    if (/(?:^|\/)app\/.*\/(?:page|route)\.[jt]sx?$/.test(file)) found.push({ kind: file.includes('/route.') ? 'next-api-route' : 'next-page', route: routePath(file), line: 1 });
    if (file.endsWith('.dart') && /routing\/.*router/.test(file)) found.push(...flutterRoutes(text, classes));
    if (file.endsWith('.go') && !file.endsWith('_test.go')) {
      for (const match of text.matchAll(/\b([A-Za-z]\w*)\.(GET|POST|PUT|PATCH|DELETE|OPTIONS|HEAD)\(\s*"([^"]*)"\s*,([^\n]+)/g)) {
        found.push({ kind: 'api-registration', method: match[2], receiver: match[1], routeFragment: match[3], handler: (match[4].match(/(\w+\.\w+)\)?\s*\)\s*$/)||[])[1] || '', line: text.slice(0, match.index).split('\n').length, resolution: 'router-group-relative' });
      }
    }
    if (file.endsWith('website-v3/field-contracts.ts')) {
      const registered = [...text.matchAll(/\b(?:site|page|pageMetadata|section|orderSection|footer|action|siteAction)\(\s*"([^"]+)"/g), ...text.matchAll(/\bid:\s*"((?:site|page|section)\.[^"]+)"/g)];
      for (const match of registered.filter((m,i,all)=>all.findIndex(other=>other[1]===m[1])===i)) found.push({ kind: 'configuration-field', field: match[1], line: text.slice(0, match.index).split('\n').length });
    }
    if (/\.(?:tsx?|jsx?|dart)$/.test(file)) {
      const labels = [...new Set([...text.matchAll(/\bt\(\s*['"]([\w.-]+)['"]|\bl10n\.([A-Za-z]\w*)/g)].map(m => m[1] || m[2]))].sort();
      const actions = [...new Set([...text.matchAll(/(?:function\s+|(?:const|void|Future<[^>]*>)\s+)((?:handle|on|save|submit|create|update|delete|remove|publish|discard|confirm|send|cancel|accept|reject|merge|split|transfer|fire|repeat|print|close|open|load|refresh)\w*)\s*(?:\(|=)/g)].map(m => m[1]))].sort();
      if (labels.length || actions.length) found.push({ kind: 'ui-controls', labels, actions, line: 1 });
    }
    for (const surface of found) {
      let featureIds = surface.kind === 'flutter-route' && surface.componentSources.length
        ? [...new Set(surface.componentSources.flatMap(component => selectors.filter(f => f.compiled[service]?.some(pattern => pattern.test(component))).map(f => f.id)))] : ids;
      if (service === 'foodypos' && surface.kind === 'flutter-route' && surface.route === 'kitchen-companion') featureIds = ['kitchen-companion'];
      if (service === 'foodypos' && surface.kind === 'flutter-route' && surface.route === 'pos-settings') featureIds = ['pos-workspace'];
      surfaces.push({ id: `${service}:${file}:${surface.kind}:${surface.line}`, service, source: file, features: featureIds, ...surface });
    }
  }
  const remote = git(root, 'remote', 'get-url', 'origin');
  services[service] = { repository: remote.replace(/\.git$/, ''), sourceCommit: git(root, 'rev-parse', 'HEAD') || null,
    releaseStatus: remote ? 'versioned' : 'local-release-unverified', sourceSnapshot: digest(JSON.stringify(sources)), workingTreeHasChanges: !!git(root, 'status', '--porcelain'), sourceFiles: sources };
}
const errors = [];
for (const feature of features) {
  for (const lang of languages) if (!feature.title[lang] || !feature.entry[lang]) errors.push(`${feature.id}: missing ${lang} title/entry`);
  if (!feature.operations.length) errors.push(`${feature.id}: no operations`);
  for (const operation of feature.operations) for (const lang of languages) if (!operation.title[lang] || !operation.instructions[lang]) errors.push(`${feature.id}/${operation.id}: missing ${lang} procedure`);
  const evidence = Object.entries(services).flatMap(([service, value]) => Object.entries(value.sourceFiles).filter(([,source]) => source.features.includes(feature.id)).map(([file]) => ({ service, file })));
  if (!evidence.length) errors.push(`${feature.id}: no matching source evidence`);
  feature.evidence = evidence;
}
const unmatched = surfaces.filter(s => (s.kind === 'next-page' || s.kind === 'flutter-route') && !s.features.length);
if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
const inventory = { schemaVersion: 1, reviewedAt: '2026-10-18', services, features, surfaces,
  coverage: { sharedRuntimeFiles: Object.values(services).reduce((n,s) => n + Object.values(s.sourceFiles).filter(f=>f.features.length===1 && f.features[0]==='shared-runtime').length,0), features: features.length, operations: features.reduce((n, f) => n + f.operations.length, 0), sourceFiles: Object.values(services).reduce((n,s) => n + Object.keys(s.sourceFiles).length,0), surfaces: surfaces.length, unclassifiedRoutes: unmatched.map(({ service, source, route }) => ({ service, source, route })) } };
fs.writeFileSync(path.join(landing, 'docs/help/coverage.json'), JSON.stringify({ schemaVersion: 2, canonicalInventory: 'inventory.json', features: features.map(({id,article,audience,selectors})=>({id,article,audience,selectors})) }, null, 2) + '\n');
fs.writeFileSync(path.join(landing, 'docs/help/inventory.json'), JSON.stringify(inventory, null, 2) + '\n');
console.log(JSON.stringify(inventory.coverage, null, 2));
