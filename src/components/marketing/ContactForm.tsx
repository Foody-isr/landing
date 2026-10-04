"use client";
import { useRef, useState } from "react";
import Link from "next/link";
import type { marketing } from "@/lib/marketing/content";
import type { Lang } from "@/lib/seo";
import Icon from "./Icon";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8080";
type ContactCopy = (typeof marketing)["en"]["contact"];

/** Accessible lead form using the existing public contact API contract. */
export default function ContactForm({
  lang,
  copy: t,
}: {
  lang: Lang;
  copy: ContactCopy;
}) {
  const [submitting, setSubmitting] = useState(false);
  const pending = useRef(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (pending.current) return;
    const form = event.currentTarget;
    for (const field of Array.from(
      form.querySelectorAll<HTMLInputElement>("input[required]"),
    )) {
      if (!field.value.trim()) {
        field.value = "";
        field.reportValidity();
        return;
      }
    }
    if (!form.reportValidity()) return;
    const data = new FormData(form);
    const value = (key: string) => String(data.get(key) || "").trim();
    const body = {
      first_name: value("first_name"),
      last_name: value("last_name"),
      email: value("email"),
      phone: value("phone"),
      business_name: value("business_name"),
      sector: value("sector"),
      monthly_orders: value("monthly_orders"),
    };
    pending.current = true;
    setSubmitting(true);
    setStatus(null);
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch(`${API_URL}/api/v1/public/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
        signal: controller.signal,
      });
      if (!response.ok) throw new Error("Contact request rejected");
      const result: { ok?: boolean } = await response.json();
      if (result.ok !== true) throw new Error("Contact request not confirmed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      clearTimeout(timeout);
      pending.current = false;
      setSubmitting(false);
    }
  }
  return (
    <form className="lead-form" onSubmit={submit} aria-busy={submitting}>
      <p className="form-required">{t.required}</p>
      <div className="form-row">
        <label>
          {t.firstName} <span>*</span>
          <input
            name="first_name"
            required
            autoComplete="given-name"
            maxLength={80}
          />
        </label>
        <label>
          {t.lastName}
          <input name="last_name" autoComplete="family-name" maxLength={80} />
        </label>
      </div>
      <label>
        {t.business} <span>*</span>
        <input
          name="business_name"
          required
          autoComplete="organization"
          maxLength={160}
        />
      </label>
      <div className="form-row">
        <label>
          {t.email} <span>*</span>
          <input
            name="email"
            type="email"
            dir="ltr"
            required
            autoComplete="email"
            maxLength={254}
          />
        </label>
        <label>
          {t.phone} <span>*</span>
          <input
            name="phone"
            type="tel"
            dir="ltr"
            required
            autoComplete="tel"
            maxLength={32}
            minLength={7}
          />
        </label>
      </div>
      <label>
        {t.sector} <span>*</span>
        <select name="sector" required defaultValue="">
          <option value="" disabled>
            {t.select}
          </option>
          {t.sectors.map((label, i) => (
            <option
              key={label}
              value={
                ["Restaurant or café", "Restaurant group", "Retail", "Other"][i]
              }
            >
              {label}
            </option>
          ))}
        </select>
      </label>
      <label>
        {t.volume}
        <select name="monthly_orders" defaultValue="">
          <option value="">{t.optional}</option>
          {t.volumes.map((label, i) => (
            <option
              key={label}
              value={
                [
                  "Under 500",
                  "500–1,000",
                  "1,000–3,000",
                  "Over 3,000",
                  "Opening soon",
                ][i]
              }
            >
              {label}
            </option>
          ))}
        </select>
      </label>
      <p className="form-consent">
        <Link href={`/${lang}/privacy`}>{t.consent}</Link>
      </p>
      <button
        className="button button-dark form-submit"
        type="submit"
        disabled={submitting}
      >
        {submitting ? t.sending : t.submit}
        <Icon name="arrow" className="directional" />
      </button>
      <div aria-live="polite" aria-atomic="true">
        {status && (
          <div className={`form-feedback ${status}`}>
            {status === "success" ? (
              t.success
            ) : (
              <>
                {t.error}{" "}
                <a href="mailto:mickael@foody-pos.co.il">
                  mickael@foody-pos.co.il
                </a>
              </>
            )}
          </div>
        )}
      </div>
    </form>
  );
}
