import fs from 'node:fs';
import { readCorpus } from '../src/lib/help/corpus.mjs';
const argument = name => {const at=process.argv.indexOf(name);return at<0?undefined:process.argv[at+1];};
const base=argument('--site'), api=argument('--api');
if(!base||!api)throw new Error('Pass --site <reviewed-landing-url> --api <environment-api-origin>');
for(const value of [base,api]) if(!['https:','http:'].includes(new URL(value).protocol))throw new Error('Invalid release origin');
const release=JSON.parse(fs.readFileSync('docs/help/catalog/release.json','utf8'));
const get=async(url)=>{const response=await fetch(url,{cache:'no-store',credentials:'omit',signal:AbortSignal.timeout(25000)});if(!response.ok)throw new Error(`HTTP ${response.status}: ${new URL(url).pathname}`);return response;};
const health=await (await get(new URL('/health',api))).json();
if(health.status!=='ok')throw new Error('API health failed');
const status=await (await get(new URL('/api/v1/public/support/status',api))).json();
if(status.revision!==release.revision||status.configured!==true)throw new Error('Support configuration or documentation revision differs');
const articles=readCorpus(),errors=[];
let next=0,checked=0;
const decode=value=>value.replace(/&(amp|lt|gt|quot|#x27|#39);/g,(_,entity)=>({amp:'&',lt:'<',gt:'>',quot:'\"','#x27':"'",'#39':"'"})[entity]);
await Promise.all(Array.from({length:4},async()=>{
 while(next<articles.length){const article=articles[next++];try{
  const html=await (await get(new URL(article.url,base))).text();
  if(!html.includes(`lang="${article.lang}"`)||!decode(html).includes(article.title))throw new Error('Expected language/title not served');
  checked++;
 }catch(error){errors.push(`${article.url}: ${error.message}`);}}
}));
if(errors.length)throw new Error(errors.join('\n'));
let devAnswer=false;
if(process.argv.includes('--ask-dev')){
 if(new URL(api).origin!=='https://dev-api.foody-pos.co.il')throw new Error('A live model verification is restricted to development');
 const response=await fetch(new URL('/api/v1/public/support/chat',api),{method:'POST',headers:{'Content-Type':'application/json'},credentials:'omit',body:JSON.stringify({lang:'fr',message:'Comment partager une addition par couvert dans FoodyPOS ?',history:[],topic:'orders'}),signal:AbortSignal.timeout(55000)});
 const answer=await response.json();
 if(!response.ok||answer.revision!==release.revision||!answer.sources?.length||typeof answer.answer!=='string')throw new Error('Development model verification failed');
 if(answer.sources.some(s=>s.url!==`/${s.lang}/help/${s.id}`||!articles.some(a=>a.id===s.id&&a.lang===s.lang)))throw new Error('Development returned an unknown citation');
 devAnswer=true;
}
console.log(JSON.stringify({revision:release.revision,checkedTranslations:checked,apiConfigured:true,developmentModelVerified:devAnswer,site:new URL(base).origin,api:new URL(api).origin},null,2));
