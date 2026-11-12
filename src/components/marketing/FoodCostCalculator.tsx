"use client";

import { useRef, useState } from "react";
import { calculateFoodCost, type IngredientUnit, type FoodCostError } from "@/lib/marketing/food-cost";
import { foodCostCopy } from "@/lib/marketing/food-cost-copy";
import type { Lang } from "@/lib/seo";

type Row = { id: number; name: string; quantity: string; unitPrice: string; unit: IngredientUnit; usableYield: string };
const parse = (value: string) => value.trim() === "" ? Number.NaN : Number(value);

/** Local recipe calculator; ingredient inputs never enter the contact or analytics APIs. */
export default function FoodCostCalculator({ lang }: { lang: Lang }) {
  const t = foodCostCopy[lang];
  const examples = (): Row[] => t.ingredients.map((name, index) => ({ id: index + 1, name, quantity: ["2000", "1000", "10"][index], unitPrice: ["16", "60", "2"][index], unit: index === 2 ? "piece" : "g", usableYield: "100" }));
  const [rows, setRows] = useState<Row[]>(examples);
  const [portions, setPortions] = useState("10");
  const [sellingPrice, setSellingPrice] = useState("40");
  const [targetPercent, setTargetPercent] = useState("30");
  const nextId = useRef(4);
  const result = calculateFoodCost({ portions: parse(portions), sellingPrice: parse(sellingPrice), targetPercent: parse(targetPercent), ingredients: rows.map(row => ({ quantity: parse(row.quantity), unitPrice: parse(row.unitPrice), unit: row.unit, usableYield: parse(row.usableYield) })) });
  const errors = result.ok ? [] : result.errors;
  const errorText = { portions: t.invalidPortions, sellingPrice: t.invalidPrice, targetPercent: t.invalidTarget, quantity: t.invalidQuantity, unitPrice: t.invalidPurchase, usableYield: t.invalidYield, unit: t.invalidUnit, ingredients: t.invalidIngredients, overflow: t.overflow };
  const hasError = (field: FoodCostError["field"], ingredient?: number) => errors.some(error => error.field === field && error.ingredient === ingredient);
  const money = (value: number) => new Intl.NumberFormat(`${lang}-IL`, { style: "currency", currency: "ILS", minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(value);
  const percent = (value: number) => `${new Intl.NumberFormat(`${lang}-IL`, { maximumFractionDigits: 2 }).format(value)}%`;
  const update = (id: number, value: Partial<Row>) => setRows(current => current.map(row => row.id === id ? { ...row, ...value } : row));
  const fieldError = (id: string, field: FoodCostError["field"], index?: number) => hasError(field, index) ? <span className="calculator-field-error" id={`${id}-error`}>{errorText[field]}</span> : null;
  const validity = (id: string, field: FoodCostError["field"], index?: number) => ({ "aria-invalid": hasError(field, index), "aria-describedby": hasError(field, index) ? `${id}-error` : undefined });
  return <div className="calculator-layout" data-food-cost-calculator>
    <div className="calculator-sheet calculator-settings-sheet">
      <h2>{t.recipe}</h2>
      <div className="calculator-settings">
        <label htmlFor="cost-portions"><span className="calculator-field-label">{t.portions}</span><input id="cost-portions" type="number" min="1" step="1" inputMode="numeric" value={portions} onChange={event => setPortions(event.target.value)} {...validity("cost-portions", "portions")} />{fieldError("cost-portions", "portions")}</label>
        <label htmlFor="cost-selling-price"><span className="calculator-field-label">{t.sellingPrice}</span><input id="cost-selling-price" type="number" min="0.01" step="any" inputMode="decimal" value={sellingPrice} onChange={event => setSellingPrice(event.target.value)} {...validity("cost-selling-price", "sellingPrice")} />{fieldError("cost-selling-price", "sellingPrice")}</label>
        <label htmlFor="cost-target"><span className="calculator-field-label">{t.target}</span><input id="cost-target" type="number" min="0.01" max="100" step="any" inputMode="decimal" value={targetPercent} onChange={event => setTargetPercent(event.target.value)} {...validity("cost-target", "targetPercent")} />{fieldError("cost-target", "targetPercent")}</label>
      </div>
      <p className="fine-print">{t.targetNote}</p>
    </div>
    <aside className="calculator-results" aria-labelledby="cost-results-title" aria-live="polite" aria-atomic="true">
      <h2 id="cost-results-title">{t.result}</h2>
      {result.ok ? <><div className="calculator-result-highlights"><p className="calculator-main-result"><span>{t.portion}</span><strong data-calculator-portion><bdi>{money(result.portionCost)}</bdi></strong></p><p className="calculator-main-result"><span>{t.percent}</span><strong className="calculator-rate" data-calculator-percent><bdi>{percent(result.foodCostPercent)}</bdi></strong></p></div><details className="calculator-result-details"><summary>{t.details}</summary><dl>
        <div><dt>{t.total}</dt><dd data-calculator-total><bdi>{money(result.recipeCost)}</bdi></dd></div>
        <div><dt>{t.margin}</dt><dd data-calculator-margin><bdi>{money(result.ingredientMargin)}</bdi></dd></div>
        <div><dt>{t.targetPrice}</dt><dd><bdi>{money(result.targetPrice)}</bdi></dd></div>
      </dl><p className="fine-print">{t.marginNote}</p></details>{result.ingredientMargin < 0 && <p className="calculator-warning">{t.warning}</p>}</> : <div className="calculator-errors" role="status"><p>{t.error}</p>{errors.some(error => error.field === "overflow" || error.field === "ingredients") && <p>{errorText[errors.find(error => error.field === "overflow" || error.field === "ingredients")!.field]}</p>}</div>}
    </aside>
    <div className="calculator-sheet calculator-row-sheet">
      <div className="calculator-ingredients">{rows.map((row, index) => <fieldset className="calculator-ingredient" key={row.id}>
        <legend>{t.ingredient} {index + 1}</legend>
        <div className="calculator-ingredient-title"><input aria-label={`${t.ingredient} ${index + 1}`} id={`ingredient-${row.id}-name`} value={row.name} maxLength={80} onChange={event => update(row.id, { name: event.target.value })} /><button className="calculator-remove" type="button" aria-label={`${t.remove}: ${row.name || `${t.ingredient} ${index + 1}`}`} disabled={rows.length === 1} onClick={() => setRows(current => current.filter(item => item.id !== row.id))}>{t.remove}</button></div>
        <div className="calculator-ingredient-fields">
          <label htmlFor={`ingredient-${row.id}-quantity`}><span className="calculator-field-label">{t.quantity}</span><input id={`ingredient-${row.id}-quantity`} type="number" min="0.001" step="any" inputMode="decimal" value={row.quantity} onChange={event => update(row.id, { quantity: event.target.value })} {...validity(`ingredient-${row.id}-quantity`, "quantity", index)} />{fieldError(`ingredient-${row.id}-quantity`, "quantity", index)}</label>
          <label htmlFor={`ingredient-${row.id}-unit`}><span className="calculator-field-label">{t.unit}</span><select id={`ingredient-${row.id}-unit`} value={row.unit} onChange={event => update(row.id, { unit: event.target.value as IngredientUnit })}><option value="g">{t.grams}</option><option value="ml">{t.millilitres}</option><option value="piece">{t.pieces}</option></select></label>
          <label htmlFor={`ingredient-${row.id}-price`}><span className="calculator-field-label">{t.price}<span className="calculator-unit-hint">{row.unit === "g" ? t.perKg : row.unit === "ml" ? t.perLitre : t.perPiece}</span></span><input id={`ingredient-${row.id}-price`} type="number" min="0" step="any" inputMode="decimal" value={row.unitPrice} onChange={event => update(row.id, { unitPrice: event.target.value })} {...validity(`ingredient-${row.id}-price`, "unitPrice", index)} />{fieldError(`ingredient-${row.id}-price`, "unitPrice", index)}</label>
          <label htmlFor={`ingredient-${row.id}-yield`}><span className="calculator-field-label">{t.yield}</span><input id={`ingredient-${row.id}-yield`} type="number" min="0.01" max="100" step="any" inputMode="decimal" value={row.usableYield} onChange={event => update(row.id, { usableYield: event.target.value })} {...validity(`ingredient-${row.id}-yield`, "usableYield", index)} />{fieldError(`ingredient-${row.id}-yield`, "usableYield", index)}</label>
        </div>
        <p className="calculator-line-total">{t.cost}<strong><bdi>{result.ok ? money(result.ingredientCosts[index]) : "—"}</bdi></strong></p>
      </fieldset>)}</div>
      <div className="calculator-actions"><button type="button" className="button button-secondary" disabled={rows.length >= 30} onClick={() => { const id = nextId.current++; setRows(current => [...current, { id, name: `${t.nextIngredient} ${current.length + 1}`, quantity: "100", unitPrice: "10", unit: "g", usableYield: "100" }]); }}>{t.add}</button><button type="button" className="text-link" onClick={() => { setRows(examples()); setPortions("10"); setSellingPrice("40"); setTargetPercent("30"); }}>{t.reset}</button></div>
      {rows.length >= 30 && <p className="fine-print">{t.limit}</p>}
      <p className="fine-print">{t.yieldNote}</p>
    </div>
    <noscript>{t.noScript}</noscript>
  </div>;
}
