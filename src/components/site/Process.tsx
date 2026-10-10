import Link from "next/link";
import Image from "next/image";
import { PROCESS } from "@/config/content";
import { SplitHeading } from "./Split";
import { ArrowRight } from "./icons";

// Outline of each step's tile and icon in process-steps.webp (1536×1024), as % of the image
const TILE_CLIPS = [
  [[140, 790], [205, 760], [205, 712], [350, 712], [350, 770], [405, 800], [405, 860], [275, 948], [140, 880]],
  [[403, 700], [475, 660], [475, 582], [610, 582], [610, 668], [668, 700], [668, 770], [540, 838], [403, 770]],
  [[667, 580], [735, 545], [735, 442], [885, 442], [885, 545], [930, 575], [930, 640], [800, 702], [667, 640]],
  [[915, 440], [995, 400], [995, 305], [1110, 305], [1110, 395], [1178, 430], [1178, 500], [1050, 562], [915, 500]],
  [[1185, 280], [1250, 230], [1250, 172], [1370, 172], [1370, 215], [1432, 250], [1432, 320], [1300, 398], [1185, 330]],
].map((pts) => `polygon(${pts.map(([x, y]) => `${((x / 1536) * 100).toFixed(2)}% ${((y / 1024) * 100).toFixed(2)}%`).join(", ")})`);

// Centre of each tile, so a hovered tile grows in place and fully covers the original
const TILE_CENTRES = [[272, 850], [535, 730], [798, 610], [1046, 470], [1308, 300]].map(
  ([x, y]) => `${((x / 1536) * 100).toFixed(2)}% ${((y / 1024) * 100).toFixed(2)}%`,
);

/** Section 04: how we work — the five steps as a vertical timeline beside the step illustration. */
export default function Process() {
  return (
    <section id="process" aria-label="How we work" className="bg-2">
      <div className="wrap sec proc-home">
        <div className="proc-home-head">
          <p className="proc-kicker m" data-reveal>Our process</p>
          <SplitHeading className="h-section" text="Five steps. One team, start to finish." />
        </div>
        <p className="lead proc-home-lead" data-reveal>No handoffs between a &ldquo;build&rdquo; vendor and a &ldquo;grow&rdquo; vendor — the same people who design and build your project are the ones who market it afterwards.</p>

        <div className="proc-home-body">
          <ol className="vtl" data-stagger>
            {PROCESS.map((p) => (
              <li key={p.n}>
                <span className="vtl-n">{p.n}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="tl-cta" data-reveal>
            <Link href="/#contact" className="btn btn-blue">Book a Free Call <ArrowRight size={18} /></Link>
            <span style={{ color: "var(--muted)", fontSize: 15 }}>Your project can start within 10 days of the first call.</span>
          </div>
        </div>

        {/* Step illustration. Each tile is a copy of the image clipped to that tile, so it can
            grow and glow on hover; hovering a step in the list does the same (and the reverse). */}
        <div className="pv" data-reveal data-delay="0.15">
          <div className="pv-in">
            <Image
              src="/images/process-steps.webp"
              alt="Our five steps: Discover, Strategy, Design & Build, Launch, Grow"
              width={1536}
              height={1024}
              sizes="(max-width: 1000px) 100vw, 50vw"
              unoptimized
            />
            {PROCESS.map((p, i) => (
              <div className="pv-step" data-n={i + 1} key={p.n} aria-hidden="true">
                <div className="pv-tile" style={{ clipPath: TILE_CLIPS[i], transformOrigin: TILE_CENTRES[i] }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
