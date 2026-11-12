export type IngredientUnit = "g" | "ml" | "piece";
export type FoodCostIngredient = { quantity: number; unitPrice: number; unit: IngredientUnit; usableYield: number };
export type FoodCostInput = { portions: number; sellingPrice: number; targetPercent: number; ingredients: FoodCostIngredient[] };
export type FoodCostError = { field: "portions" | "sellingPrice" | "targetPercent" | "quantity" | "unitPrice" | "usableYield" | "unit" | "ingredients" | "overflow"; ingredient?: number };
export type FoodCostResult = { ok: false; errors: FoodCostError[] } | { ok: true; ingredientCosts: number[]; recipeCost: number; portionCost: number; foodCostPercent: number; ingredientMargin: number; targetPrice: number };

/** Calculates a recipe's ingredient cost from net quantities, purchase units and usable yields, excluding VAT. */
export function calculateFoodCost(input: FoodCostInput): FoodCostResult {
  const errors: FoodCostError[] = [];
  const positive = (value: number) => Number.isFinite(value) && value > 0;
  if (!positive(input.portions) || !Number.isInteger(input.portions)) errors.push({ field: "portions" });
  if (!positive(input.sellingPrice)) errors.push({ field: "sellingPrice" });
  if (!positive(input.targetPercent) || input.targetPercent > 100) errors.push({ field: "targetPercent" });
  if (input.ingredients.length === 0) errors.push({ field: "ingredients" });
  input.ingredients.forEach((item, ingredient) => {
    if (!positive(item.quantity)) errors.push({ field: "quantity", ingredient });
    if (!Number.isFinite(item.unitPrice) || item.unitPrice < 0) errors.push({ field: "unitPrice", ingredient });
    if (!positive(item.usableYield) || item.usableYield > 100) errors.push({ field: "usableYield", ingredient });
    if (!["g", "ml", "piece"].includes(item.unit)) errors.push({ field: "unit", ingredient });
  });
  if (errors.length) return { ok: false, errors };
  const ingredientCosts = input.ingredients.map(item => item.quantity / (item.unit === "piece" ? 1 : 1000) * item.unitPrice / (item.usableYield / 100));
  const recipeCost = ingredientCosts.reduce((sum, cost) => sum + cost, 0);
  const portionCost = recipeCost / input.portions;
  const foodCostPercent = portionCost / input.sellingPrice * 100;
  const ingredientMargin = input.sellingPrice - portionCost;
  const targetPrice = portionCost / (input.targetPercent / 100);
  if (![...ingredientCosts, recipeCost, portionCost, foodCostPercent, ingredientMargin, targetPrice].every(Number.isFinite)) return { ok: false, errors: [{ field: "overflow" }] };
  return { ok: true, ingredientCosts, recipeCost, portionCost, foodCostPercent, ingredientMargin, targetPrice };
}
