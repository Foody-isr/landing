import { test } from 'node:test';
import assert from 'node:assert/strict';
import { loadLocalTypeScript } from './load-local-typescript.mjs';
const { calculateSupplierVariance: calculate, SUPPLIER_VARIANCE_SCENARIOS: scenarios } = loadLocalTypeScript('src/lib/marketing/supplier-variance.ts');
const base = () => ({ referencePrice: 40, invoicePrice: 40, invoicedQuantity: 10, receivedQuantity: 10 });

test('three independent document cases reconcile to 40, 40 and 80 ILS', () => {
  assert.deepEqual(scenarios.map(s => calculate(s).totalVarianceMinor), [4000, 4000, 8000]);
  const combined = calculate(scenarios[2]);
  assert.equal(combined.billedMinor, 44000);
  assert.equal(combined.receivedReferenceMinor, 36000);
  assert.equal(combined.priceVarianceMinor, 4000);
  assert.equal(combined.quantityVarianceMinor, 4000);
});
test('a partial order has no financial discrepancy when received and invoiced quantities agree', () => {
  const result = calculate({ ...base(), invoicedQuantity: 9, receivedQuantity: 9 });
  assert.equal(result.totalVarianceMinor, 0);
  assert.equal(result.quantityVarianceMinor, 0);
});
test('more received than invoiced and lower prices stay signed, without forced savings or absolute-value inflation', () => {
  assert.equal(calculate({ ...base(), invoicePrice: 38 }).priceVarianceMinor, -2000);
  assert.equal(calculate({ ...base(), receivedQuantity: 11 }).quantityVarianceMinor, -4000);
  const offset = calculate({ referencePrice: 50, invoicePrice: 40, invoicedQuantity: 10, receivedQuantity: 8 });
  assert.equal(offset.priceVarianceMinor, -10000);
  assert.equal(offset.quantityVarianceMinor, 10000);
  assert.equal(offset.totalVarianceMinor, 0);
});
test('line rounding and decomposition agree exactly, including fractional quantities', () => {
  for (const input of [
    { referencePrice: 1, invoicePrice: 1.01, invoicedQuantity: 1.005, receivedQuantity: 1.001 },
    { referencePrice: 1.99, invoicePrice: 2.03, invoicedQuantity: 0.125, receivedQuantity: 0.12 },
    { referencePrice: 0.01, invoicePrice: 0.02, invoicedQuantity: 0.5, receivedQuantity: 0 },
  ]) {
    const r = calculate(input);
    assert.equal(r.ok, true);
    for (const [key, value] of Object.entries(r)) if (key !== 'ok') assert.equal(Number.isSafeInteger(value), true);
    assert.equal(r.priceVarianceMinor + r.quantityVarianceMinor, r.totalVarianceMinor);
    assert.equal(r.billedMinor - r.receivedReferenceMinor, r.totalVarianceMinor);
  }
  assert.equal(calculate({ ...base(), referencePrice: 1, invoicePrice: 1, invoicedQuantity: 1.005, receivedQuantity: 1.005 }).billedMinor, 101);
});
test('zero received quantity, zero prices and empty invoice amounts are legitimate numeric values', () => {
  assert.equal(calculate({ ...base(), receivedQuantity: 0 }).totalVarianceMinor, 40000);
  const r = calculate({ referencePrice: 0, invoicePrice: 0, invoicedQuantity: 0, receivedQuantity: 0 });
  assert.equal(r.ok, true);
  assert.equal(r.totalVarianceMinor, 0);
});
test('invalid, nonfinite, excessive and over-precision values never produce a result', () => {
  for (const field of ['referencePrice', 'invoicePrice', 'invoicedQuantity', 'receivedQuantity']) {
    for (const value of [NaN, Infinity, -Infinity, -1, 100001, undefined]) {
      const r = calculate({ ...base(), [field]: value });
      assert.equal(r.ok, false, `${field}: ${value}`);
      assert.ok(r.errors.includes(field));
      assert.equal(r.totalVarianceMinor, undefined);
    }
  }
  assert.equal(calculate({ ...base(), referencePrice: 40.001 }).ok, false);
  assert.equal(calculate({ ...base(), receivedQuantity: 1.0001 }).ok, false);
  assert.equal(calculate({ ...base(), invoicePrice: 0.1 + 0.2 }).ok, true);
});
test('maximum supported values retain safe integer intermediates and exact cancellation', () => {
  const r = calculate({ referencePrice: 100000, invoicePrice: 100000, invoicedQuantity: 100000, receivedQuantity: 100000 });
  assert.equal(r.ok, true);
  assert.equal(r.billedMinor, 1000000000000);
  assert.equal(r.totalVarianceMinor, 0);
});
test('many price/receipt combinations decompose to the same signed reconciliation without double-counting', () => {
  for (const referencePrice of [0, 0.01, 1.99, 40, 100000]) for (const invoicePrice of [0, 0.01, 2.03, 44, 100000]) for (const invoicedQuantity of [0, 0.001, 0.125, 10, 100000]) for (const receivedQuantity of [0, 0.001, 0.12, 9, 100000]) {
    const r = calculate({ referencePrice, invoicePrice, invoicedQuantity, receivedQuantity });
    assert.equal(r.ok, true);
    assert.equal(r.priceVarianceMinor + r.quantityVarianceMinor, r.totalVarianceMinor);
  }
});
