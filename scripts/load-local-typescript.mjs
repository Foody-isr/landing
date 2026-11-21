import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
import ts from 'typescript';

/** Loads trusted local data/metadata modules with the project's existing TypeScript compiler. */
export function loadLocalTypeScript(filename, cache = new Map()) {
  const file = path.resolve(filename);
  if (cache.has(file)) return cache.get(file).exports;
  const module = { exports: {} };
  cache.set(file, module);
  const nativeRequire = createRequire(file);
  const requireLocal = specifier => {
    if (!specifier.startsWith('.') && !specifier.startsWith('@/')) return nativeRequire(specifier);
    const absolute = specifier.startsWith('@/') ? path.resolve('src', specifier.slice(2)) : path.resolve(path.dirname(file), specifier);
    const resolved = [absolute, `${absolute}.ts`, `${absolute}.json`, `${absolute}/index.ts`].find(candidate => fs.existsSync(candidate) && fs.statSync(candidate).isFile());
    if (!resolved) throw new Error(`Local metadata import not found: ${specifier}`);
    return resolved.endsWith('.ts') ? loadLocalTypeScript(resolved, cache) : nativeRequire(resolved);
  };
  const code = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true } }).outputText;
  new Function('require', 'module', 'exports', 'process', '__dirname', '__filename', code)(requireLocal, module, module.exports, process, path.dirname(file), file);
  return module.exports;
}
