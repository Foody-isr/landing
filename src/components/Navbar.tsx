"use client";
import { useEffect, useRef, useState } from "react";
import FoodyLogo from "./brand/FoodyLogo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useI18n } from "@/lib/i18n/context";
import { routes, ui } from "@/lib/marketing/ui";
import Icon from "./marketing/Icon";
import ProductLinks from "./marketing/ProductLinks";

/** Responsive navigation with keyboard-accessible solution disclosure. */
export default function Navbar() {
  const { lang, localePath } = useI18n();
  const t = ui[lang];
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const header = useRef<HTMLElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    function dismiss(event: MouseEvent) {
      if (!header.current?.contains(event.target as Node)) setOpen(false);
    }
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape" && open) {
        setOpen(false);
        trigger.current?.focus();
      }
    }
    document.addEventListener("click", dismiss);
    document.addEventListener("keydown", escape);
    return () => {
      document.removeEventListener("click", dismiss);
      document.removeEventListener("keydown", escape);
    };
  }, [open]);
  return (
    <>
      <a className="skip-link" href="#main-content">
        {t.skip}
      </a>
      <div className="partner-strip">
        <Link href={localePath(routes.hardware)}>
          <span className="partner-dot" />
          {t.partner}
          <Icon name="arrow" className="directional" />
        </Link>
      </div>
      <header className="site-header no-print" ref={header}>
        <nav className="shell header-inner" aria-label={t.menu}>
          <Link
            href={localePath("/")}
            aria-label="Foody"
            className="brand brand-lockup"
            dir="ltr"
            onClick={() => setOpen(false)}
          >
            <FoodyLogo variant="symbol" monochrome width={30} className="brand-symbol" decorative />
            <FoodyLogo width={67.5} className="brand-wordmark" decorative />
          </Link>
          <button
            ref={trigger}
            className="solutions-toggle"
            aria-expanded={open}
            aria-controls="solutions-menu"
            onClick={() => setOpen(!open)}
          >
            <span className="desktop-label">{t.solutions}</span>
            <span className="mobile-label">{open ? t.close : t.menu}</span>
            <Icon name={open ? "close" : "chevron"} />
          </button>
          <Link className="desktop-nav" href={localePath(routes.hardware)}>
            {t.hardware}
          </Link>
          <Link className="desktop-nav" href={localePath("/pricing")}>
            {t.pricing}
          </Link>
          <div className="header-actions">
            <div className="locale-switch" aria-label={t.language} dir="ltr">
              {(["he", "en", "fr"] as const).map((l) => (
                <Link
                  key={l}
                  href={`/${l}${pathname.replace(/^\/(he|en|fr)(?=\/|$)/, "") || ""}`}
                  hrefLang={l}
                  lang={l}
                  aria-label={{ he: "עברית", en: "English", fr: "Français" }[l]}
                  aria-current={l === lang ? "true" : undefined}
                  onClick={() => setOpen(false)}
                >
                  {l === "he" ? "עב" : l.toUpperCase()}
                </Link>
              ))}
            </div>
            <a className="login-link" href="https://admin.foody-pos.co.il">
              {t.login}
            </a>
            <Link
              className="button button-dark button-small header-cta"
              href={localePath("/contact")}
              onClick={() => setOpen(false)}
            >
              {t.demo}
            </Link>
          </div>
        </nav>
        <div
          className="mega-menu"
          id="solutions-menu"
          hidden={!open}
          onBlur={(event) => {
            if (
              event.relatedTarget &&
              !header.current?.contains(event.relatedTarget)
            )
              setOpen(false);
          }}
        >
          <div className="shell mega-grid">
            <div>
              <p className="nav-group-label">{t.products}</p>
              <ProductLinks lang={lang} onNavigate={() => setOpen(false)} />
            </div>
            <div>
              <p className="nav-group-label">{t.businesses}</p>
              {(["restaurants", "chains", "retail"] as const).map((key, i) => (
                <Link
                  href={localePath(routes[key])}
                  key={key}
                  onClick={() => setOpen(false)}
                >
                  <Icon name={(["restaurant", "chain", "shop"] as const)[i]} />
                  {t[key]}
                </Link>
              ))}
              <p className="nav-group-label nav-group-spaced">
                {t.hardwarePayments}
              </p>
              {(["hardware", "equipment", "payments"] as const).map((key) => (
                <Link
                  href={localePath(routes[key])}
                  key={key}
                  onClick={() => setOpen(false)}
                >
                  {t[key]}
                </Link>
              ))}
            </div>
            <div className="menu-feature">
              <strong>Foody × Verifone</strong>
              <p>{t.partner}</p>
              <Link
                href={localePath("/contact")}
                onClick={() => setOpen(false)}
              >
                {t.demo}
                <Icon name="arrow" className="directional" />
              </Link>
            </div>
            <div className="menu-utility">
              <Link
                href={localePath("/pricing")}
                onClick={() => setOpen(false)}
              >
                {t.pricing}
              </Link>
              <Link href={localePath("/help")} onClick={() => setOpen(false)}>
                {t.help}
              </Link>
              <a href="https://admin.foody-pos.co.il">{t.login}</a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
