"use client";
import FoodyLogo from "./brand/FoodyLogo";
import Link from "next/link";
import { useI18n } from "@/lib/i18n/context";
import { routes, ui } from "@/lib/marketing/ui";

/** Localized footer linking each offering to its own acquisition page. */
export default function Footer() {
  const { lang, localePath } = useI18n();
  const t = ui[lang];
  return (
    <footer className="site-footer">
      <div className="shell">
        <div className="footer-top">
          <div className="footer-brand">
            <Link href={localePath("/")}>
              <FoodyLogo width={134} />
            </Link>
            <p>{t.footer}</p>
            <span className="footer-partner">{t.partner}</span>
          </div>
          <div>
            <h2>{t.products}</h2>
            {(
              [
                "pos",
                "ordering",
                "kitchen",
                "companion",
                "payments",
                "hardware",
                "equipment",
              ] as const
            ).map((key) => (
              <Link key={key} href={localePath(routes[key])}>
                {t[key]}
              </Link>
            ))}
          </div>
          <div>
            <h2>{t.businesses}</h2>
            {(["restaurants", "chains", "retail"] as const).map((key) => (
              <Link key={key} href={localePath(routes[key])}>
                {t[key]}
              </Link>
            ))}
          </div>
          <div>
            <h2>{t.resources}</h2>
            <Link href={localePath("/pricing")}>{t.pricing}</Link>
            <Link href={localePath("/contact")}>{t.contact}</Link>
            <Link href={localePath("/help")}>{t.help}</Link>
            <a href="https://admin.foody-pos.co.il">{t.login}</a>
          </div>
        </div>
        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} Foody. {t.allRights}
          </span>
          <span>{t.country}</span>
          <div>
            <Link href={localePath("/privacy")}>{t.privacy}</Link>
            <Link href={localePath("/terms")}>{t.terms}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
