import Link from "next/link";
import { FAQS } from "@/config/content";
import { SplitHeading } from "./Split";
import { CallArrow } from "./icons";

type Props = {
  title?: string;
  lead?: string;
};

export default function Faq({
  title = "Questions, answered.",
  lead = "Cost, time, ownership and contracts. The things people ask before they call.",
}: Props) {
  const items = FAQS;
  return (
    <section id="faq">
      <div className="wrap sec split">
        <div className="split-l">
          <SplitHeading className="h-section-sm" text={title} />
          <p className="lead" data-reveal>{lead}</p>
          <div className="faq-cta" data-reveal>
            <b>Still have a question?</b>
            <span>Send us a message. No pitch, just answers.</span>
            <Link href="/#contact" className="link-arrow">Start Your Project <CallArrow /></Link>
          </div>
        </div>
        <div className="split-r" data-stagger>
          {items.map((f) => (
            <details className="faq" key={f.q}>
              <summary>{f.q}</summary>
              <p>{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
