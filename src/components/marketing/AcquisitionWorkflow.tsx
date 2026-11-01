import Link from "next/link";
import type { Lang } from "@/lib/seo";
import { acquisitionContent, BUYING_GUIDE_PATH, type AcquisitionPage } from "@/lib/marketing/acquisition";

/** Connects product buying questions to the reviewed operational procedures. */
export default function AcquisitionWorkflow({ lang, page }: { lang: Lang; page: AcquisitionPage }) {
  const copy = acquisitionContent[lang];
  const workflow = copy.workflows[page];
  return (
    <section className="workflow-section section-space" data-acquisition-workflow={page}>
      <div className="shell">
        <div className="section-heading split-heading">
          <h2>{workflow.title}</h2><p>{workflow.intro}</p>
        </div>
        <ol className="workflow-steps">
          {workflow.steps.map((step) => <li key={step.guide}>
            <h3>{step.title}</h3><p>{step.text}</p>
            <Link className="text-link" href={`/${lang}${step.guide}`}>{copy.readProcedure}</Link>
          </li>)}
        </ol>
        <p className="workflow-offer">{workflow.offer} <Link href={`/${lang}/pricing`}>{ {he:"למחירון המלא", fr:"Voir les tarifs complets", en:"See full pricing"}[lang]}</Link></p>
        <Link className="text-link" href={`/${lang}${BUYING_GUIDE_PATH}`}>{copy.buyingGuide}</Link>
      </div>
    </section>
  );
}
