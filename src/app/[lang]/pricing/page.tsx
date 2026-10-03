import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Icon from "@/components/marketing/Icon";
import { CallToAction, Providers } from "@/components/marketing/Shared";
import { marketing } from "@/lib/marketing/content";
import { ui } from "@/lib/marketing/ui";
import { resolveLang } from "@/lib/seo";

/** Tailored pricing, keeping software, hardware and payment fees explicit. */
export default async function PricingPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = resolveLang((await params).lang);
  const t = marketing[lang].pricing;
  return (
    <>
      <Navbar />
      <main id="main-content">
        <section className="shell pricing-section">
          <div className="section-heading centered pricing-heading">
            <h1>{t.title}</h1>
            <p>{t.description}</p>
          </div>
          <div className="plans">
            {t.plans.map((plan, i) => (
              <article
                key={plan.title}
                className={`plan${i === 1 ? " plan-featured" : ""}`}
              >
                {i === 1 && <span className="plan-label">{t.popular}</span>}
                <Icon name={(["shop", "restaurant", "chain"] as const)[i]} />
                <h2>{plan.title}</h2>
                <p>{plan.text}</p>
                <strong className="plan-price">{t.quote}</strong>
                <Link
                  className={`button ${i === 1 ? "button-dark" : "button-outline"}`}
                  href={`/${lang}/contact`}
                >
                  {ui[lang].contact}
                </Link>
                <ul className="check-list">
                  {plan.items.map((item) => (
                    <li key={item}>
                      <Icon name="check" />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
          <p className="pricing-note">{t.note}</p>
        </section>
        <section className="payments-section section-space">
          <div className="shell">
            <div className="split-heading">
              <h2>{t.includeTitle}</h2>
              <ul className="check-list">
                {t.include.map((item) => (
                  <li key={item}>
                    <Icon name="check" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <Providers lang={lang} />
          </div>
        </section>
        <CallToAction lang={lang} />
      </main>
      <Footer />
    </>
  );
}
