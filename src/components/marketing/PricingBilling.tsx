"use client";

import { createContext, useContext, useId, useState, type ReactNode } from "react";
import type { Lang } from "@/lib/seo";
import type { BillingPolicy } from "@/lib/marketing/public-catalogue";
import { billingCopy, softwareBillingAmounts, type BillingPeriod } from "@/lib/marketing/pricing-billing";

const BillingContext = createContext<{period: BillingPeriod; policy?: BillingPolicy}>({period: "monthly"});

/** Switches software offers together while leaving separately priced services outside the provider. */
export function PricingBilling({ lang, policy, children }: { lang: Lang; policy?: BillingPolicy; children: ReactNode }) {
  const [period, setPeriod] = useState<BillingPeriod>("monthly");
  const id = useId();
  const t = billingCopy[lang];
  return (
    <BillingContext.Provider value={{period, policy}}>
      <div className="pricing-billing" data-billing-period={period}>
        <div className="pricing-billing-switch" role="group" aria-label={t.label} aria-describedby={`${id}-commitment`}>
          <button type="button" aria-pressed={period === "monthly"} aria-controls={`${id}-offers`} onClick={() => setPeriod("monthly")}>
            <span>{t.monthly}</span>
            <span className="pricing-billing-badge">{t.monthlyBadge}</span>
          </button>
          <button type="button" aria-pressed={period === "annual"} aria-controls={`${id}-offers`} onClick={() => setPeriod("annual")}>
            <span>{t.annual}</span>
            <span className="pricing-billing-badge">{t.badge}</span>
          </button>
        </div>
        <p className="pricing-billing-discount">{t.discount}</p>
        <p id={`${id}-commitment`} className="pricing-billing-commitment">{period === "monthly" ? t.monthlyTerms : t.annualTerms}</p>
        <p className="pricing-billing-status" role="status" aria-atomic="true">{period === "monthly" ? t.monthlyAnnouncement : t.annualAnnouncement}</p>
      </div>
      <div id={`${id}-offers`}>{children}</div>
      <p className="pricing-billing-scope">{t.scope}</p>
    </BillingContext.Provider>
  );
}

/** Shows the full amount payable for the selected period and its exact twelve-month comparison. */
export function SoftwarePrice({ monthlyMinor, lang }: { monthlyMinor: number; lang: Lang }) {
  const {period, policy} = useContext(BillingContext);
  const t = billingCopy[lang];
  const amounts = softwareBillingAmounts(monthlyMinor, policy);
  const annual = period === "annual";
  const amount = annual ? amounts.annualMinor : amounts.monthlyMinor;
  const format = new Intl.NumberFormat(lang === "he" ? "he-IL" : lang, { maximumFractionDigits: 2 });
  const money = (minor: number) => <bdi dir="ltr">{format.format(minor / 100)} ₪</bdi>;
  const [before, after] = t.saving.split("{amount}");
  return (
    <div className="pricing-software-price" data-software-period={period} data-price-minor={amount}>
      <div className="plan-price">
        <strong>{money(amount)}</strong>
        <span>{annual ? t.annualUnit : t.monthlyUnit}</span>
      </div>
      <p className="pricing-payment-frequency">{annual ? t.annualPayment : t.monthlyPayment}</p>
      <p className={`pricing-period-comparison${annual ? " pricing-period-saving" : ""}`}>
        {annual ? <>{before}{money(amounts.savingMinor)}{after}</> : t.monthlyBadge}
      </p>
    </div>
  );
}
