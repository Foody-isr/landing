"use client";

import { useState } from "react";
import type { Lang } from "@/lib/seo";
import { ecosystem } from "@/lib/marketing/ecosystem";
import FoodyLogo from "../brand/FoodyLogo";
import Icon from "./Icon";

type ExperienceKind =
  | "cloud"
  | "service"
  | "companion"
  | "ordering"
  | "retail"
  | "chains"
  | "recipe"
  | "payments";

/** Dedicated product illustrations; state changes are local examples, never live operations. */
export default function Experience({
  lang,
  kind,
}: {
  lang: Lang;
  kind: ExperienceKind;
}) {
  const t = ecosystem[lang];
  const [step, setStep] = useState(0);
  const [delivery, setDelivery] = useState(false);
  return (
    <figure className={`experience experience-${kind}`} data-experience={kind}>
      {kind === "cloud" && (
        <div className="cloud-map">
          <div className="cloud-core">
            <Icon name="cloud" />
            <strong><FoodyLogo width={100} /></strong>
            <span>{t.cloudCenter}</span>
          </div>
          <div className="cloud-nodes">
            {t.cloudLabels.map((label, i) => (
              <div key={label}>
                <Icon
                  name={
                    (
                      [
                        "tablet",
                        "pos",
                        "card",
                        "kitchen",
                        "globe",
                        "chart",
                      ] as const
                    )[i]
                  }
                />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      {kind === "service" && (
        <div className="service-demo">
          <div
            className="flow-controls"
            role="group"
            aria-label={t.serviceTitle}
          >
            {t.serviceSteps.map((label, i) => (
              <button
                key={label}
                aria-pressed={step === i}
                onClick={() => setStep(i)}
              >
                <span>{i + 1}</span>
                <strong>{label}</strong>
              </button>
            ))}
          </div>
          <div className="service-preview" aria-live="polite">
            <div className="handheld-shell">
              <div className="handheld-screen">
                <div className="mini-brand">
                  <FoodyLogo width={80} />
                  <Icon
                    name={
                      step === 0
                        ? "restaurant"
                        : step === 1
                          ? "card"
                          : "printer"
                    }
                  />
                </div>
                <span className="device-table">{t.table}</span>
                {step === 0 ? (
                  <>
                    <h3>{t.basket}</h3>
                    <div className="mini-order">
                      <span>{t.dishes[0]}</span>
                      <b dir="ltr">₪48</b>
                    </div>
                    <div className="mini-order">
                      <span>2 × {t.dishes[1]}</span>
                      <b dir="ltr">₪32</b>
                    </div>
                    <div className="mini-total">
                      <span>{t.total}</span>
                      <b dir="ltr">₪80</b>
                    </div>
                    <div className="demo-status">
                      <Icon name="check" />
                      {t.orderSent}
                    </div>
                  </>
                ) : step === 1 ? (
                  <div className="payment-screen">
                    <Icon name="card" />
                    <h3>{t.payment}</h3>
                    <strong dir="ltr">₪80</strong>
                    <span>
                      {t.paid}
                      <Icon name="check" />
                    </span>
                  </div>
                ) : (
                  <div className="receipt-paper">
                    <Icon name="check" />
                    <h3>{t.receipt}</h3>
                    <span>{t.dishes[0]}</span>
                    <span>2 × {t.dishes[1]}</span>
                    <div className="mini-total">
                      <span>{t.total}</span>
                      <b dir="ltr">₪80</b>
                    </div>
                    <p>{t.thanks}</p>
                  </div>
                )}
              </div>
              <span className="device-model" dir="ltr">
                Foody × Victa Portable
              </span>
            </div>
            <p className="flow-explanation">{t.serviceDetails[step]}</p>
          </div>
        </div>
      )}
      {kind === "companion" && (
        <div className="companion-demo">
          <div className="companion-top">
            <span className="mini-brand"><FoodyLogo width={80} /></span>
            <Icon name="kitchen" />
          </div>
          <div
            className="day-controls"
            role="group"
            aria-label={t.companionTitle}
          >
            {t.phases.map((label, i) => (
              <button
                key={label}
                aria-pressed={step === i}
                onClick={() => setStep(i)}
              >
                <span dir="ltr">{["08:00", "12:30", "22:00"][i]}</span>
                {label}
              </button>
            ))}
          </div>
          <div className="companion-body" aria-live="polite">
            <span className="companion-phase">{t.phaseLabel[step]}</span>
            <h3>{t.phaseTitle[step]}</h3>
            <ul>
              {t.phaseItems[step].map((item, i) => (
                <li key={item}>
                  <span className="task-dot">{i + 1}</span>
                  {item}
                </li>
              ))}
            </ul>
            <div className="companion-voice">
              <Icon name="mic" />
              <span>{t.voicePrompt}</span>
            </div>
          </div>
        </div>
      )}
      {kind === "ordering" && (
        <div className="guest-phone">
          <div className="phone-speaker" />
          <div className="guest-cover">
            <Icon name="restaurant" />
            <h3>{t.guest}</h3>
          </div>
          <div className="guest-body">
            <div
              className="service-switch"
              role="group"
              aria-label={t.routeTitle}
            >
              <button
                aria-pressed={!delivery}
                onClick={() => setDelivery(false)}
              >
                {t.pickup}
              </button>
              <button aria-pressed={delivery} onClick={() => setDelivery(true)}>
                {t.delivery}
              </button>
            </div>
            <p className="guest-mode" aria-live="polite">
              {delivery ? t.deliveryNote : t.pickupNote}
            </p>
            <h4>{t.menu}</h4>
            {t.dishes.map((dish, i) => (
              <div className="guest-dish" key={dish}>
                <span className={`dish-mark dish-mark-${i}`} aria-hidden="true">
                  <Icon name={i === 0 ? "restaurant" : "shop"} />
                </span>
                <strong>{dish}</strong>
                <b dir="ltr">₪{i === 0 ? 48 : 16}</b>
              </div>
            ))}
            <div className="guest-basket">
              <span>{t.basket}</span>
              <b dir="ltr">₪64</b>
            </div>
          </div>
        </div>
      )}
      {kind === "retail" && (
        <div className="retail-demo">
          <div className="mock-toolbar">
            <span className="mini-brand"><FoodyLogo width={80} /></span>
            <span>{t.counter}</span>
            <Icon name="shop" />
          </div>
          <div className="retail-body">
            <h3>{t.catalog}</h3>
            <div className="retail-items">
              {t.retailItems.map((item, i) => (
                <div key={item}>
                  <span
                    className={`shop-object shop-object-${i}`}
                    aria-hidden="true"
                  >
                    <span />
                  </span>
                  <strong>{item}</strong>
                  <b dir="ltr">₪{[45, 38, 25][i]}</b>
                </div>
              ))}
            </div>
            <div className="retail-basket">
              <span>{t.retailItems[0]}</span>
              <span>{t.retailItems[1]}</span>
              <div>
                <strong>{t.total}</strong>
                <strong dir="ltr">₪83</strong>
              </div>
            </div>
          </div>
        </div>
      )}
      {kind === "chains" && (
        <div className="chain-demo">
          <div className="mock-toolbar">
            <span className="mini-brand"><FoodyLogo width={80} /></span>
            <Icon name="chain" />
          </div>
          <div className="chain-body">
            <h3>{t.plan}</h3>
            <div className="branch-plans">
              {t.branches.map((branch, i) => (
                <div key={branch}>
                  <span className="branch-mark">
                    <Icon name="restaurant" />
                  </span>
                  <h4>{branch}</h4>
                  <p>{t.preparation}</p>
                  <strong>
                    {[40, 24, 32][i]}{" "}
                    <small>
                      {lang === "he"
                        ? "פוקצ׳ות"
                        : lang === "fr"
                          ? "focaccias"
                          : "focaccias"}
                    </small>
                  </strong>
                  <div className="plan-bar">
                    <span style={{ width: `${[80, 48, 64][i]}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <div className="supplier-strip">
              <Icon name="kitchen" />
              <span>{t.supplier}</span>
              <strong>{t.supplierItems[2]}</strong>
            </div>
          </div>
        </div>
      )}
      {kind === "recipe" && (
        <div className="recipe-demo">
          <div className="mock-toolbar">
            <span className="mini-brand"><FoodyLogo width={80} /></span>
            <span>{t.recipe}</span>
            <Icon name="chart" />
          </div>
          <div className="recipe-body">
            <h3>{t.dishes[0]}</h3>
            <div className="recipe-cost">
              <strong dir="ltr">
                28<span>%</span>
              </strong>
              <span>Food cost</span>
            </div>
            <div className="recipe-lines">
              {t.ingredients.map((label, i) => (
                <div key={label}>
                  <span>{label}</span>
                  <b dir="ltr">₪{[5.6, 4.2, 1.4][i].toFixed(2)}</b>
                </div>
              ))}
              <div>
                <strong>{t.foodcost}</strong>
                <b dir="ltr">₪11.20</b>
              </div>
              <div>
                <span>{t.price}</span>
                <b dir="ltr">₪40.00</b>
              </div>
            </div>
            <p>{t.recipeNote}</p>
          </div>
        </div>
      )}
      {kind === "payments" && (
        <div className="payment-map">
          <span className="mini-brand"><FoodyLogo width={80} /></span>
          <div className="payment-channels">
            {t.channels.map((label, i) => (
              <div key={label}>
                <Icon name={(["pos", "card", "globe"] as const)[i]} />
                <span>{label}</span>
              </div>
            ))}
          </div>
          <div className="payment-connection" />
          <div className="linked-order">
            <Icon name="check" />
            <strong>{t.linked}</strong>
            <span dir="ltr">#1048 · ₪80</span>
          </div>
          <div className="payment-brands" dir="ltr">
            Verifone · PayPlus · SUMIT · Stancer
          </div>
        </div>
      )}
      <figcaption>{t.sample}</figcaption>
    </figure>
  );
}
