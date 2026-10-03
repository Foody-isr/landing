"use client";
import { useId, useRef, useState } from "react";
import type { marketing } from "@/lib/marketing/content";
import type { Lang } from "@/lib/seo";
import FoodyLogo from "../brand/FoodyLogo";
import Icon from "./Icon";

type DemoCopy = (typeof marketing)["en"]["demo"];

/** Illustrative product explorer with accessible tabs and explicit sample-data labelling. */
export default function ProductDemo({
  copy: t,
  lang,
  initial = 0,
  compact = false,
}: {
  copy: DemoCopy;
  lang: Lang;
  initial?: number;
  compact?: boolean;
}) {
  const [active, setActive] = useState(initial);
  const id = useId();
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  function keyDown(event: React.KeyboardEvent, index: number) {
    const direction = lang === "he" ? -1 : 1;
    let next = index;
    if (event.key === "ArrowRight") next = (index + direction + 3) % 3;
    else if (event.key === "ArrowLeft") next = (index - direction + 3) % 3;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = 2;
    else return;
    event.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  }
  return (
    <div className={`product-demo${compact ? " demo-compact" : ""}`}>
      {!compact && (
        <div role="tablist" aria-label={t.label} className="demo-tabs">
          {t.tabs.map((tab, i) => (
            <button
              key={tab}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              role="tab"
              id={`${id}-tab-${i}`}
              aria-controls={`${id}-panel-${i}`}
              aria-selected={active === i}
              tabIndex={active === i ? 0 : -1}
              onClick={() => setActive(i)}
              onKeyDown={(event) => keyDown(event, i)}
            >
              <Icon name={(["pos", "kitchen", "chart"] as const)[i]} />
              {tab}
            </button>
          ))}
        </div>
      )}
      <div className="demo-frame">
        <div className="demo-sidebar" aria-hidden="true">
          <span className="demo-monogram"><FoodyLogo variant="symbol" width={26} decorative /></span>
          <Icon name="pos" />
          <Icon name="restaurant" />
          <Icon name="kitchen" />
          <Icon name="chart" />
        </div>
        <div className="demo-workspace">
          <div className="demo-topbar">
            <div>
              <strong>
                {active === 0 ? t.title : active === 1 ? t.production : t.cost}
              </strong>
              <span>{t.branch}</span>
            </div>
            <span className="demo-avatar" aria-hidden="true">
              F
            </span>
          </div>
          <div
            className="demo-panel"
            role={compact ? undefined : "tabpanel"}
            id={`${id}-panel-${active}`}
            aria-labelledby={compact ? undefined : `${id}-tab-${active}`}
            tabIndex={compact ? undefined : 0}
          >
            {active === 0 && (
              <div className="pos-preview">
                <div className="pos-catalog">
                  <div className="preview-service">
                    <span>{t.dinein}</span>
                    <span>{t.takeaway}</span>
                  </div>
                  <div className="product-tiles">
                    {t.items.map((item, i) => (
                      <div className={`product-tile tile-${i}`} key={item}>
                        <span className="food-shape" aria-hidden="true">
                          {["🥗", "🥪", "☕", "🍊"][i]}
                        </span>
                        <strong>{item}</strong>
                        <span dir="ltr">₪{[48, 42, 16, 18][i]}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="order-preview">
                  <div className="order-heading">
                    <strong>{t.order}</strong>
                    <span>{t.table}</span>
                  </div>
                  {[0, 2, 2].map((item, i) => (
                    <div className="order-line" key={i}>
                      <span>{t.items[item]}</span>
                      <span dir="ltr">₪{[48, 42, 16, 18][item]}</span>
                    </div>
                  ))}
                  <div className="order-total">
                    <strong>{t.total}</strong>
                    <strong dir="ltr">₪80</strong>
                  </div>
                  <span className="preview-pay">
                    {t.pay}
                    <Icon name="card" />
                  </span>
                </div>
              </div>
            )}
            {active === 1 && (
              <div className="production-preview">
                <div className="production-summary">
                  <span>{t.today}</span>
                  <strong>
                    1 <span>/ 3</span>
                  </strong>
                  <div className="production-progress">
                    <i />
                  </div>
                </div>
                <div className="prep-list">
                  {t.prep.map((prep, i) => (
                    <div key={prep}>
                      <span className="prep-check">
                        <Icon name={i === 0 ? "check" : "kitchen"} />
                      </span>
                      <div>
                        <strong>{prep}</strong>
                        <span>{t.quantity[i]}</span>
                      </div>
                      <span className={`status status-${i}`}>
                        {t.statuses[i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {active === 2 && (
              <div className="cost-preview">
                <div className="cost-dish">
                  <span className="food-shape" aria-hidden="true">
                    🥗
                  </span>
                  <strong>{t.items[0]}</strong>
                  <div className="cost-ring">
                    <strong>
                      28<span>%</span>
                    </strong>
                    <span>Food cost</span>
                  </div>
                  <small>{t.target}: 30%</small>
                </div>
                <div className="cost-breakdown">
                  {[t.price, t.ingredients, t.margin].map((label, i) => (
                    <div key={label}>
                      <span>{label}</span>
                      <strong dir="ltr">
                        ₪{[40, 11.2, 28.8][i].toFixed(2)}
                      </strong>
                    </div>
                  ))}
                  <p>{t.costNote}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
      <p className="demo-caption">{t.label}</p>
    </div>
  );
}
