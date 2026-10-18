import fs from 'node:fs';
import path from 'node:path';
const at=process.argv.indexOf('--workspace');
if(at<0)throw new Error('Pass --workspace <service-root-map.json>');
const roots=JSON.parse(fs.readFileSync(process.argv[at+1],'utf8'));
const inventory=JSON.parse(fs.readFileSync('docs/help/inventory.json','utf8'));
const release=JSON.parse(fs.readFileSync('docs/help/catalog/release.json','utf8'));
const refAt=process.argv.indexOf('--documentation-ref');
const documentationRef=refAt<0?'WORKSPACE':process.argv[refAt+1];
const script=fs.readFileSync('scripts/check-help-contract.mjs');
for(const [service,folder] of Object.entries(roots)) {
 const root=path.resolve('..',folder);
 const contract={schemaVersion:1,service,documentationRepository:'Foody-isr/landing',documentationRef:service==='foodylanding'?'self':documentationRef,documentationRevision:release.revision,articles:release.articles,
  sources:inventory.services[service].sourceFiles,surfaces:inventory.surfaces.filter(s=>s.service===service).map(({id,kind,source,line,features,route,method,routeFragment,labels,actions,componentSources,field})=>({id,kind,source,line,features,route,method,routeFragment,labels,actions,componentSources,field}))};
 fs.mkdirSync(path.join(root,'docs/help'),{recursive:true});fs.writeFileSync(path.join(root,'docs/help/contract.json'),JSON.stringify(contract,null,2)+'\n');
 if(service==='foodylanding')continue;
 if(service==='foodyadmin') for(const file of ['check-help-ui.mjs','help-ui.test.mjs']) { fs.mkdirSync(path.join(root,'scripts'),{recursive:true}); fs.writeFileSync(path.join(root,'scripts',file),fs.readFileSync('scripts/'+file)); }
 fs.mkdirSync(path.join(root,'scripts'),{recursive:true});fs.writeFileSync(path.join(root,'scripts/check-help-contract.mjs'),script);
 fs.writeFileSync(path.join(root,'scripts/help-contract.test.mjs'),fs.readFileSync('scripts/help-contract.test.mjs'));
 // Local-only apps receive the same runnable checks. CI is not claimed without a remote.
 if(!inventory.services[service].repository)continue;
 fs.mkdirSync(path.join(root,'.github/workflows'),{recursive:true});
 fs.writeFileSync(path.join(root,'.github/workflows/help-contract.yml'),`name: Help documentation contract
on:
  pull_request:
    branches: [develop]
  workflow_dispatch:
permissions:
  contents: read
concurrency:
  group: help-contract-\u0024{{ github.event.pull_request.number || github.ref }}
  cancel-in-progress: true
jobs:
  help:
    name: Help coverage and translations
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: node --test scripts/help-contract.test.mjs${service==='foodyadmin'?' scripts/help-ui.test.mjs':''}
      - name: Resolve immutable documentation reference
        id: docs
        run: |
          node --input-type=module -e 'import fs from "node:fs"; const c=JSON.parse(fs.readFileSync("docs/help/contract.json")); if(!/^[a-f0-9]{40}$/.test(c.documentationRef)) throw new Error("Pin the reviewed Landing commit"); fs.appendFileSync(process.env.GITHUB_OUTPUT, "ref="+c.documentationRef+"\\n");'
      - uses: actions/checkout@v4
        with:
          repository: Foody-isr/landing
          ref: \u0024{{ steps.docs.outputs.ref }}
          path: .help-docs
          persist-credentials: false
          sparse-checkout: |
            docs/help
            src/content/help
${service==='foodyadmin'?`      - name: Check guides against current Admin screens
        run: node scripts/check-help-ui.mjs --documentation-root .help-docs --admin-root .
`:''}      - name: Check source impact and three-language procedures
        env:
          HELP_BASE: \u0024{{ github.event.pull_request.base.sha }}
        run: node scripts/check-help-contract.mjs --documentation-root .help-docs \u0024{HELP_BASE:+--base "\u0024HELP_BASE"}
`);
}
console.log('Service documentation contracts and independent CI workflows generated.');
