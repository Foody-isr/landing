// Compatibility entry point for the original workspace command. CI uses the same guard.
import path from 'node:path';
import { checkContract } from './check-help-contract.mjs';
const argument=name=>{const at=process.argv.indexOf(name);return at<0?undefined:process.argv[at+1];};
const service=argument('--service');
if(!service)throw new Error('Pass --service <service> and optionally --repo <worktree>');
const root=path.resolve(argument('--repo')||path.join('..',service));
const errors=checkContract(root,process.cwd(),argument('--base')||'origin/develop');
if(errors.length){console.error(errors.join('\n'));process.exit(1);}
console.log(`${service}: exact help contract passed.`);
