import Link from "next/link";
import type { Lang } from "@/lib/seo";
import { productNavigation, routes, ui } from "@/lib/marketing/ui";

/** Links the priced product families to their pages, with included features nested below. */
export default function ProductLinks({
  lang,
  onNavigate,
}: {
  lang: Lang;
  onNavigate?: () => void;
}) {
  const t = ui[lang];
  return (
    <ul className="product-links">
      {productNavigation.map((product) => (
        <li key={product.key} data-product={product.plan}>
          <Link href={`/${lang}${product.href}`} onClick={onNavigate}>
            {t[product.key]}
          </Link>
          {product.detail && (
            <ul>
              <li>
                <Link
                  href={`/${lang}${routes[product.detail]}`}
                  onClick={onNavigate}
                >
                  <span>{t[product.detail]}</span>
                  <small>{t.included}</small>
                </Link>
              </li>
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
