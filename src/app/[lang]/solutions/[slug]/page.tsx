import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SolutionPage from "@/components/marketing/SolutionPage";
import { getMarketingMetadata, resolveLang } from "@/lib/seo";
import type { SolutionKey } from "@/lib/marketing/content";

const products: Record<string, SolutionKey> = {
  pos: "pos",
  kitchen: "kitchen",
  "online-ordering": "ordering",
  payments: "payments",
  verifone: "hardware",
  equipment: "equipment",
  "kitchen-companion": "companion",
};
function product(slug: string) {
  return Object.prototype.hasOwnProperty.call(products, slug)
    ? products[slug]
    : notFound();
}

/** Pre-render all supported product paths. */
export function generateStaticParams() {
  return Object.keys(products).map((slug) => ({ slug }));
}

/** Each product has its own canonical and localized search metadata. */
export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  return getMarketingMetadata(lang, product(slug));
}

/** Product detail page backed by verified marketing content. */
export default async function Page({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}) {
  const { lang, slug } = await params;
  return (
    <>
      <Navbar />
      <SolutionPage lang={resolveLang(lang)} page={product(slug)} />
      <Footer />
    </>
  );
}
