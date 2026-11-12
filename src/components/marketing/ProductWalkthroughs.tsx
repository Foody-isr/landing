"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Lang } from "@/lib/seo";
import { demoCopy, type DemoScenario } from "@/lib/marketing/demonstrations";

function Walkthrough({ scenario, lang }: { scenario: DemoScenario; lang: Lang }) {
  const [selected,setSelected]=useState(0),t=demoCopy[lang],frame=scenario.frames[selected];
  return <section className="product-walkthrough" id={scenario.id} aria-labelledby={`${scenario.id}-title`} data-product-walkthrough={scenario.id}>
    <div className="walkthrough-copy"><h2 id={`${scenario.id}-title`}>{scenario.title}</h2><p>{scenario.intro}</p><ol>{scenario.steps.map(step=><li key={step}>{step}</li>)}</ol><div className="walkthrough-example"><h3>{t.exampleLabel}</h3><p>{scenario.example}</p></div><p className="fine-print">{scenario.condition}</p><Link className="text-link" href={`/${lang}/help/kitchen/${scenario.guide}`}>{t.procedure}</Link></div>
    <div className="walkthrough-evidence"><div className="walkthrough-screen-choices" role="group" aria-label={t.screenshots}>{scenario.frames.map((item,index)=><button type="button" key={item.file} aria-pressed={selected===index} aria-controls={`${scenario.id}-capture`} onClick={()=>setSelected(index)}>{item.label}</button>)}</div><figure id={`${scenario.id}-capture`}><a href={`/assets/product/${frame.file}`} target="_blank" rel="noopener noreferrer" aria-label={`${t.enlarge}: ${frame.alt}`}><Image src={`/assets/product/${frame.file}`} alt={frame.alt} width={frame.width} height={frame.height} sizes="(max-width: 900px) 92vw, 52vw" /></a><figcaption>{frame.alt}. <a className="text-link" href={`/assets/product/${frame.file}`} target="_blank" rel="noopener noreferrer">{t.enlarge}</a></figcaption></figure></div>
  </section>;
}

/** Three documented screen walkthroughs using immutable, inspected synthetic product captures. */
export default function ProductWalkthroughs({ lang }: { lang: Lang }) {
  return <div className="shell product-walkthroughs">{demoCopy[lang].scenarios.map(scenario=><Walkthrough key={scenario.id} scenario={scenario} lang={lang} />)}</div>;
}
