import Link from "next/link";
import Image from "next/image";
import { PROCESS, PROCESS_NAME } from "@/config/content";
import { SplitHeading } from "./Split";
import { ArrowRight } from "./icons";

/** Section 04: how we work — a real photo next to the five-step timeline, no gimmicks. */
export default function Process() {
  return (
    <section id="process" aria-label="How we work" className="bg-2">
      <div className="wrap sec">
        <div className="sec-head">
          <p className="m m-blue sec-num" data-reveal>04 — {PROCESS_NAME}</p>
          <SplitHeading className="h-section" text="Five steps. One team, start to finish." />
          <p className="lead" data-reveal>No handoffs between a &ldquo;build&rdquo; vendor and a &ldquo;grow&rdquo; vendor — the same people who design and build your project are the ones who market it afterwards.</p>
        </div>

        <div className="banner-photo" data-reveal data-delay="0.1">
          <Image
            src="/images/strategy-discuss.jpg"
            alt="Reviewing a project plan together"
            width={1600}
            height={700}
            sizes="100vw"
          />
        </div>

        <div className="tl-grid" data-stagger>
          {PROCESS.map((p) => (
            <div className="tl" key={p.n}>
              <span className="dot">{p.n}</span>
              <span className="when">{p.when}</span>
              <h4>{p.title}</h4>
              <p>{p.text}</p>
            </div>
          ))}
        </div>

        <div className="tl-cta" data-reveal>
          <Link href="/#contact" className="btn btn-blue">Book a Free Call <ArrowRight size={18} /></Link>
          <span style={{ color: "var(--muted)", fontSize: 15 }}>Your project can start within 10 days of the first call.</span>
        </div>
      </div>
    </section>
  );
}
