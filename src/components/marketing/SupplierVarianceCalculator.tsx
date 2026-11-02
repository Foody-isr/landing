"use client";

import { useState } from "react";
import type { Lang } from "@/lib/seo";
import { supplierVarianceCopy } from "@/lib/marketing/supplier-variance-copy";
import { calculateSupplierVariance, SUPPLIER_VARIANCE_SCENARIOS, type SupplierVarianceField, type SupplierVarianceInput, type SupplierVarianceScenarioId } from "@/lib/marketing/supplier-variance";

const fields: SupplierVarianceField[] = ["referencePrice", "invoicePrice", "invoicedQuantity", "receivedQuantity"];
const parse = (value: string) => /^\d+(?:[.,]\d+)?$/.test(value.trim()) ? Number(value.trim().replace(",", ".")) : Number.NaN;
const valuesFor = (id: SupplierVarianceScenarioId): Record<SupplierVarianceField, string> => {
  const scenario = SUPPLIER_VARIANCE_SCENARIOS.find(item => item.id === id)!;
  return Object.fromEntries(fields.map(field => [field, String(scenario[field])])) as Record<SupplierVarianceField, string>;
};

/** Local illustrative receipt comparison; entered values never leave this component or mutate restaurant records. */
export default function SupplierVarianceCalculator({ lang }: { lang: Lang }) {
  const t = supplierVarianceCopy[lang];
  const [scenario, setScenario] = useState<SupplierVarianceScenarioId>("price");
  const [values, setValues] = useState(() => valuesFor("price"));
  const [unit, setUnit] = useState<"kg" | "l" | "piece">("kg");
  const input = Object.fromEntries(fields.map(field => [field, parse(values[field])])) as SupplierVarianceInput;
  const result = calculateSupplierVariance(input);
  const errors = result.ok ? [] : result.errors;
  const money = (minor: number) => new Intl.NumberFormat(`${lang}-IL`, { style: "currency", currency: "ILS", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(minor / 100);
  const quantity = (field: "invoicedQuantity" | "receivedQuantity") => errors.includes(field) ? t.unavailable : `${new Intl.NumberFormat(`${lang}-IL`, { maximumFractionDigits: 3 }).format(input[field])} ${t.units[unit]}`;
  const price = (field: "referencePrice" | "invoicePrice") => errors.includes(field) ? t.unavailable : money(Math.round(input[field] * 100));
  const choose = (id: SupplierVarianceScenarioId) => { setScenario(id); setValues(valuesFor(id)); setUnit("kg"); };
  const product = unit === "kg" ? t.product : t.productLabel;
  return <div className="supplier-simulator" data-supplier-variance-calculator>
    <div className="supplier-scenarios" role="group" aria-label={t.scenarioLabel}>
      {SUPPLIER_VARIANCE_SCENARIOS.map(item => <button key={item.id} type="button" aria-pressed={scenario === item.id} onClick={() => choose(item.id)} data-supplier-scenario={item.id}>{t.scenarios[item.id].title}</button>)}
    </div>

    <section className="supplier-document-desk" aria-labelledby="supplier-documents-title">
      <div className="supplier-desk-heading"><h2 id="supplier-documents-title">{t.documents}</h2><p>{t.documentUpdate}</p></div>
      <div className="supplier-document-grid">
        <article className="supplier-paper" data-supplier-document="reference">
          <header><span className="supplier-paper-demo">{t.fictional}</span><h3>{t.referenceDocument}</h3><span className="supplier-document-ref" dir="ltr">{t.referencePrefix}-DEMO-{scenario.toUpperCase()}</span></header>
          <p className="supplier-document-parties">{t.supplier}<br />{t.restaurant}</p>
          <dl><div><dt>{t.productLabel}</dt><dd>{product}</dd></div><div><dt>{t.unitLabel}</dt><dd>{t.units[unit]}</dd></div><div className="supplier-document-key"><dt>{t.unitPrice}</dt><dd><bdi>{price("referencePrice")}</bdi></dd></div></dl>
          <p className="supplier-document-note">{t.referenceNote}</p>
        </article>
        <article className="supplier-paper" data-supplier-document="delivery">
          <header><span className="supplier-paper-demo">{t.fictional}</span><h3>{t.deliveryDocument}</h3><span className="supplier-document-ref" dir="ltr">{t.deliveryPrefix}-DEMO-{scenario.toUpperCase()}</span></header>
          <p className="supplier-document-parties">{t.supplier}<br />{t.restaurant}</p>
          <dl><div><dt>{t.productLabel}</dt><dd>{product}</dd></div><div><dt>{t.indicatedDelivery}</dt><dd><bdi>{quantity("invoicedQuantity")}</bdi></dd></div></dl>
          <div className={`supplier-receipt-check${result.ok && input.invoicedQuantity !== input.receivedQuantity ? " supplier-document-difference" : ""}`}><span>{t.receivedCheck}</span><strong data-supplier-received><bdi>{quantity("receivedQuantity")}</bdi></strong><p>{t.receivedNote}</p></div>
          <p className="supplier-document-note">{t.deliveryNote}</p>
        </article>
        <article className="supplier-paper" data-supplier-document="invoice">
          <header><span className="supplier-paper-demo">{t.fictional}</span><h3>{t.invoiceDocument}</h3><span className="supplier-document-ref" dir="ltr">{t.invoicePrefix}-DEMO-{scenario.toUpperCase()}</span></header>
          <p className="supplier-document-parties">{t.supplier}<br />{t.restaurant}</p>
          <dl><div><dt>{t.productLabel}</dt><dd>{product}</dd></div><div><dt>{t.quantity}</dt><dd><bdi>{quantity("invoicedQuantity")}</bdi></dd></div><div className={result.ok && input.invoicePrice !== input.referencePrice ? "supplier-document-difference" : ""}><dt>{t.unitPrice}</dt><dd><bdi>{price("invoicePrice")}</bdi></dd></div><div className="supplier-document-key"><dt>{t.amount}</dt><dd data-supplier-invoice-total><bdi>{result.ok ? money(result.billedMinor) : t.unavailable}</bdi></dd></div></dl>
          <p className="supplier-document-note">{t.invoiceNote}</p>
        </article>
      </div>
    </section>

    <div className="supplier-calculation-layout">
      <section className="supplier-inputs" aria-labelledby="supplier-edit-title">
        <h2 id="supplier-edit-title">{t.editTitle}</h2><p>{t.editIntro}</p>
        <label className="supplier-unit" htmlFor="supplier-unit"><span>{t.unitLabel}</span><select id="supplier-unit" value={unit} onChange={event => setUnit(event.target.value as typeof unit)}>{(["kg", "l", "piece"] as const).map(value => <option key={value} value={value}>{t.units[value]}</option>)}</select></label>
        <div className="supplier-field-grid">{fields.map(field => {
          const invalid = errors.includes(field);
          const message = field.endsWith("Price") ? t.invalidPrice : t.invalidQuantity;
          return <label htmlFor={`supplier-${field}`} key={field}><span className="supplier-field-label">{t[field]}</span><input id={`supplier-${field}`} type="text" inputMode="decimal" maxLength={14} value={values[field]} onChange={event => setValues(current => ({ ...current, [field]: event.target.value }))} aria-invalid={invalid} aria-describedby={invalid ? `supplier-${field}-error` : undefined} /><span id={`supplier-${field}-error`} className="supplier-field-error">{invalid ? message : ""}</span></label>;
        })}</div>
        <div className="supplier-actions"><button type="button" className="text-link" onClick={() => choose(scenario)}>{t.reset}</button><button type="button" className="text-link" onClick={() => window.print()} disabled={!result.ok}>{t.print}</button></div>
      </section>
      <aside className="supplier-results" aria-labelledby="supplier-result-title" aria-live="polite" aria-atomic="true">
        <h2 id="supplier-result-title">{t.resultTitle}</h2>
        {result.ok ? <>
          <dl className="supplier-result-comparison"><div><dt>{t.billed}</dt><dd><bdi>{money(result.billedMinor)}</bdi></dd></div><div><dt>{t.receivedValue}</dt><dd><bdi>{money(result.receivedReferenceMinor)}</bdi></dd></div></dl>
          <dl className="supplier-result-breakdown"><div><dt>{t.priceVariance}</dt><dd data-supplier-price-variance><bdi>{money(result.priceVarianceMinor)}</bdi></dd></div><div><dt>{t.quantityVariance}</dt><dd data-supplier-quantity-variance><bdi>{money(result.quantityVarianceMinor)}</bdi></dd></div></dl>
          <p className="supplier-total"><span>{result.totalVarianceMinor > 0 ? t.positive : result.totalVarianceMinor < 0 ? t.negative : t.balanced}</span><strong data-supplier-total data-supplier-total-minor={result.totalVarianceMinor}><bdi>{money(result.totalVarianceMinor)}</bdi></strong></p>
          <p className="supplier-result-note">{t.netNote}</p><p className="supplier-result-note">{t.rounding}</p><p className="supplier-result-note">{t.resultNote}</p>
        </> : <p className="supplier-invalid" role="status">{t.invalidResult}</p>}
      </aside>
    </div>
    <noscript>{t.noScript}</noscript>
  </div>;
}
