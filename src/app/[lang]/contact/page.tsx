import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/marketing/ContactForm";
import Icon from "@/components/marketing/Icon";
import { marketing } from "@/lib/marketing/content";
import { ui } from "@/lib/marketing/ui";
import { resolveLang } from "@/lib/seo";

/** Lead acquisition page for restaurant, chain and retail enquiries. */
export default async function ContactPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const lang = resolveLang((await params).lang);
  const t = marketing[lang].contact;
  return (
    <>
      <Navbar />
      <main className="shell contact-layout" id="main-content">
        <div className="contact-intro">
          <h1>{t.title}</h1>
          <p>{t.description}</p>
          <ul className="check-list">
            {t.steps.map((step) => (
              <li key={step}>
                <Icon name="check" />
                {step}
              </li>
            ))}
          </ul>
          <div className="contact-partner">
            <span className="partner-dot" />
            <span>{ui[lang].partner}</span>
          </div>
          <div className="contact-email">
            <span>{t.emailLink}</span>
            <a href="mailto:mickael@foody-pos.co.il">mickael@foody-pos.co.il</a>
          </div>
        </div>
        <ContactForm lang={lang} copy={t} />
      </main>
      <Footer />
    </>
  );
}
