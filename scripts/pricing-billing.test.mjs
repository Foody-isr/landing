import { test } from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import ts from "typescript";

const source = await readFile(new URL("../src/lib/marketing/pricing-billing.ts", import.meta.url), "utf8");
const compiled = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.ESNext, target: ts.ScriptTarget.ES2022 } }).outputText;
const { softwareBillingAmounts } = await import(`data:text/javascript;base64,${Buffer.from(compiled).toString("base64")}`);

test("the three modules and existing bundle prices receive exactly one free month", () => {
  for (const [monthly, annual, fullYear] of [[59000, 649000, 708000], [89000, 979000, 1068000], [99000, 1089000, 1188000], [179000, 1969000, 2148000]]) {
    const result = softwareBillingAmounts(monthly);
    assert.equal(result.monthlyMinor, monthly);
    assert.equal(result.annualMinor, annual);
    assert.equal(result.twelveMonthsMinor, fullYear);
    assert.equal(result.savingMinor, monthly);
    assert.equal(result.annualMinor + result.savingMinor, fullYear);
  }
});

test("edited catalogue amounts retain their agorot, with no rounded percentage or double bundle discount", () => {
  assert.deepEqual(softwareBillingAmounts(59725), { monthlyMinor: 59725, annualMinor: 656975, twelveMonthsMinor: 716700, savingMinor: 59725 });
});

test("invalid or overflowing catalogue money cannot become an advertised offer", () => {
  for (const value of [0, -1, 0.5, NaN, Infinity, "59000", Number.MAX_SAFE_INTEGER]) {
    assert.throws(() => softwareBillingAmounts(value), RangeError);
  }
});
