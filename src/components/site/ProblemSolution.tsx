import { PROBLEMS } from "@/config/content";
import { SplitHeading } from "./Split";
import { ServiceLink } from "./ServiceModal";
import { Check, ArrowRight } from "./icons";

export default function ProblemSolution() {
  return (
    <section id="problems" className="bg-2">
      <div className="wrap sec">
        <div className="sec-head center">
          <SplitHeading className="h-section" text="Why businesses come to us." />
          <p className="lead" data-reveal>Almost every business owner we talk to has at least one of these three problems, usually because their website and their marketing were never built by the same team in the first place. We fix all three, together.</p>
        </div>
        <div className="ps-grid" data-stagger>
          {PROBLEMS.map((p) => (
            <article className="ps" key={p.problem}>
              <div className="ps-problem">
                <span className="m">The problem</span>
                <p>&ldquo;{p.problem}&rdquo;</p>
              </div>
              <div className="ps-fix">
                <span className="m"><Check size={14} /> Our fix</span>
                <p>{p.fix}</p>
                <ServiceLink id={p.service} className="link-arrow soft">See how <ArrowRight size={16} /></ServiceLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
