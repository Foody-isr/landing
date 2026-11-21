export type SupplierVarianceInput = {
  referencePrice: number;
  invoicePrice: number;
  invoicedQuantity: number;
  receivedQuantity: number;
};
export type SupplierVarianceField = keyof SupplierVarianceInput;
export type SupplierVarianceResult =
  | { ok: false; errors: SupplierVarianceField[] }
  | {
      ok: true;
      billedMinor: number;
      referenceInvoiceMinor: number;
      receivedReferenceMinor: number;
      priceVarianceMinor: number;
      quantityVarianceMinor: number;
      totalVarianceMinor: number;
    };

export const SUPPLIER_VARIANCE_SCENARIOS = [
  { id: "price", referencePrice: 70, invoicePrice: 100, invoicedQuantity: 10, receivedQuantity: 10 },
  { id: "quantity", referencePrice: 40, invoicePrice: 40, invoicedQuantity: 10, receivedQuantity: 9 },
  { id: "combined", referencePrice: 40, invoicePrice: 44, invoicedQuantity: 10, receivedQuantity: 9 },
] as const;
export type SupplierVarianceScenarioId = (typeof SUPPLIER_VARIANCE_SCENARIOS)[number]["id"];

/** Reconciles one VAT-exclusive invoice line with a confirmed receipt in the same unit. Amounts are integer agorot. */
export function calculateSupplierVariance(input: SupplierVarianceInput): SupplierVarianceResult {
  const fields: SupplierVarianceField[] = ["referencePrice", "invoicePrice", "invoicedQuantity", "receivedQuantity"];
  const errors = fields.filter(field => {
    const value = input[field];
    const scale = field.endsWith("Price") ? 100 : 1000;
    return !Number.isFinite(value) || value < 0 || value > 100_000
      || Math.abs(value * scale - Math.round(value * scale)) > 0.00001;
  });
  if (errors.length) return { ok: false, errors };
  const referenceCents = Math.round(input.referencePrice * 100);
  const invoiceCents = Math.round(input.invoicePrice * 100);
  const invoicedMilli = Math.round(input.invoicedQuantity * 1000);
  const receivedMilli = Math.round(input.receivedQuantity * 1000);
  const billedMinor = Math.round(invoicedMilli * invoiceCents / 1000);
  const referenceInvoiceMinor = Math.round(invoicedMilli * referenceCents / 1000);
  const receivedReferenceMinor = Math.round(receivedMilli * referenceCents / 1000);
  return {
    ok: true,
    billedMinor,
    referenceInvoiceMinor,
    receivedReferenceMinor,
    priceVarianceMinor: billedMinor - referenceInvoiceMinor,
    quantityVarianceMinor: referenceInvoiceMinor - receivedReferenceMinor,
    totalVarianceMinor: billedMinor - receivedReferenceMinor,
  };
}
