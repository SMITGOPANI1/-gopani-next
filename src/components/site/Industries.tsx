import Link from "next/link";
import { INDUSTRIES } from "@/config/content";
import { SplitHeading } from "./Split";
import { Ico, ArrowUpRight } from "./icons";

/** Section 06 on the homepage (a short teaser); the full grid lives on /industries. */
export default function Industries({ limit, heading = true }: { limit?: number; heading?: boolean } = {}) {
  const industries = limit ? INDUSTRIES.slice(0, limit) : INDUSTRIES;
  return (
    <section id="industries" className="ind-sec">
      <div className={`wrap sec${limit ? " ind-teaser" : ""}`}>
        {heading && (
          <div className="sec-head">
            <SplitHeading className="h-section" text="We understand your business." />
            <p className="lead" data-reveal>Every industry has its own buying cycle, its own compliance worries and its own customers. We have worked across these, so we speak your language from the first call, not a generic agency pitch.</p>
          </div>
        )}
        <div className="ind-grid" data-stagger>
          {industries.map((i) => (
            <Link href="/#contact" className="ind" key={i.title}>
              <span className="ic"><Ico name={i.icon} size={22} /></span>
              <div>
                <h4>{i.title}</h4>
                <p>{i.text}</p>
              </div>
              <ArrowUpRight size={18} className="go" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
