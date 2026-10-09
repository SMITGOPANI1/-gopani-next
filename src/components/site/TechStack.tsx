import { STACK } from "@/config/content";
import { SplitHeading } from "./Split";

export default function TechStack() {
  return (
    <section id="stack">
      <div className="wrap sec">
        <div className="sec-head">
          <p className="m m-blue sec-num" data-reveal>08 — Our toolbox</p>
          <SplitHeading className="h-section-sm" text="Modern tools. Trusted tech." />
          <p className="lead" data-reveal>No outdated platforms held together with plugins. We build and market on the same tools your next CTO or growth hire will already know.</p>
        </div>
        <div className="stack" data-stagger>
          {STACK.map((g) => (
            <div className="stack-row" key={g.group}>
              <h4>{g.group}</h4>
              <div className="chips">
                {g.items.map((t) => <span className="chip" key={t}><i />{t}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
