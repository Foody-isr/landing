import Link from "next/link";
import type { Lang } from "@/lib/seo";
import { productNavigation, routes, ui } from "@/lib/marketing/ui";

/** Links product names in editorial copy while preserving plain text for metadata. */
export default function ProductMentions({
  lang,
  children,
  currentHref,
}: {
  lang: Lang;
  children: string;
  currentHref?: string;
}) {
  const products = [
    ...productNavigation.map(({ key, href }) => ({ name: ui[lang][key], href })),
    { name: ui[lang].companion, href: routes.companion },
  ].sort((a, b) => b.name.length - a.name.length);
  // Match the complete bundle name before its Restaurant prefix, in every locale.
  const names = products.map(({ name }) =>
    name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"),
  );
  const pattern = new RegExp(
    `(?<![A-Za-z0-9_])(${names.join("|")})(?![\\p{L}\\p{N}_])`,
    "gu",
  );
  const linked = new Set<string>();
  return (
    <span className="product-mentions">
      {children.split(pattern).map((part, index) => {
        const product = products.find(({ name }) => name === part);
        if (!product || product.href === currentHref || linked.has(product.href))
          return part;
        linked.add(product.href);
        return (
          <Link
            key={index}
            className="product-mention"
            href={`/${lang}${product.href}`}
          >
            {part}
          </Link>
        );
      })}
    </span>
  );
}
