import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { I18nProvider } from "@/lib/i18n/context";
import {
  getMarketingMetadata,
  SITE_URL,
  SUPPORTED_LANGS,
  type Lang,
} from "@/lib/seo";
import "../globals.css";

/** Pre-render each locale with correct document language and text direction. */
export function generateStaticParams() {
  return SUPPORTED_LANGS.map((lang) => ({ lang }));
}

/** Default localized metadata, overridden by each acquisition and help page. */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const defaults = getMarketingMetadata((await params).lang, "home");
  delete defaults.alternates;
  return {
    metadataBase: new URL(SITE_URL),
    icons: {
      icon: [
        { url: "/assets/favicon.svg?v=c2", type: "image/svg+xml" },
        { url: "/assets/favicon-32.png?v=c2", sizes: "32x32", type: "image/png" },
      ],
      apple: [{ url: "/assets/apple-touch-icon.png?v=c2", sizes: "180x180" }],
    },
    ...defaults,
  };
}

/** Locale root layout gives crawlers correct language/RTL before hydration. */
export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const value = (await params).lang;
  if (!SUPPORTED_LANGS.includes(value as Lang)) notFound();
  const lang = value as Lang;
  return (
    <html lang={lang} dir={lang === "he" ? "rtl" : "ltr"}>
      <body>
        <I18nProvider lang={lang}>{children}</I18nProvider>
      </body>
    </html>
  );
}
