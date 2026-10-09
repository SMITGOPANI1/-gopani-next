import Link from "next/link";
import { BUILD, GROW, GROUPS, type Service } from "@/config/services";
import { SplitHeading } from "./Split";
import { ServiceLink } from "./ServiceModal";
import { Ico, ArrowRight } from "./icons";

function Card({ s }: { s: Service }) {
  return (
    <ServiceLink id={s.id} className="svc-card" aria-label={`${s.title}: see full details`}>
      <span className="ic"><Ico name={s.icon} size={22} /></span>
      <h4>{s.title}</h4>
      <p>{s.result}</p>
      <span className="more">Learn more <ArrowRight size={16} /></span>
    </ServiceLink>
  );
}

/** Section 02 on the homepage (a short teaser of 4 + 4); the full 7 + 7 grid lives on /services. */
export default function Services({ limit, heading = true }: { limit?: number; heading?: boolean } = {}) {
  const build = limit ? BUILD.slice(0, limit) : BUILD;
  const grow = limit ? GROW.slice(0, limit) : GROW;
  return (
    <section id="services">
      <div className="wrap sec">
        {heading && (
          <div className="sec-head">
            <p className="m m-blue sec-num" data-reveal>02 — What we do</p>
            <SplitHeading className="h-section" text="We build it. Then we grow it." />
            <p className="lead" data-reveal>Everything your business needs online, under one roof — so you never have to find, brief and manage a second vendor. Open any service below to see exactly how it runs, what you get and what changes for you.</p>
          </div>
        )}

        <div className="svc-groups">
          <div>
            <div className="svc-group-head" data-reveal>
              <h3><i>01</i>{GROUPS.build.label}</h3>
              <span className="pill blue">{GROUPS.build.kicker}</span>
              <p>{GROUPS.build.blurb}</p>
            </div>
            <div className="svc-grid" data-stagger>
              {build.map((s) => <Card key={s.id} s={s} />)}
            </div>
          </div>
          <div>
            <div className="svc-group-head" data-reveal>
              <h3><i>02</i>{GROUPS.grow.label}</h3>
              <span className="pill orange">{GROUPS.grow.kicker}</span>
              <p>{GROUPS.grow.blurb}</p>
            </div>
            <div className="svc-grid" data-stagger>
              {grow.map((s) => <Card key={s.id} s={s} />)}
            </div>
          </div>
        </div>

        {limit && (
          <div className="center-btn" data-reveal>
            <Link href="/services" className="btn btn-ghost">See all {BUILD.length + GROW.length} services <ArrowRight size={18} /></Link>
          </div>
        )}
      </div>
    </section>
  );
}
