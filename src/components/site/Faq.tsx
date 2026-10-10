import Link from "next/link";
import { FAQS } from "@/config/content";
import { SplitHeading } from "./Split";
import { ArrowRight } from "./icons";

type Props = {
  num?: string;
  title?: string;
  lead?: string;
};

export default function Faq({
  num = "08 — FAQ",
  title = "Questions, answered.",
  lead = "Cost, time, ownership and contracts. The things people ask before they call.",
}: Props) {
  const items = FAQS;
  return (
    <section id="faq">
      <div className="wrap sec split">
        <div className="split-l">
          <p className="m m-blue sec-num" data-reveal>{num}</p>
          <SplitHeading className="h-section-sm" text={title} />
          <p className="lead" data-reveal>{lead}</p>
          <div className="faq-cta" data-reveal>
            <b>Still have a question?</b>
            <span>Ask us on a free call. No pitch, just answers.</span>
            <Link href="/#contact" className="link-arrow">Book a Free Call <ArrowRight size={16} /></Link>
          </div>
        </div>
        <div className="split-r" data-stagger>
          {items.map((f, i) => (
            <details className="faq" key={f.q} open={i === 0}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
