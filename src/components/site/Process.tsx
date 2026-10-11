import Link from "next/link";
import Image from "next/image";
import { PROCESS } from "@/config/content";
import { SplitHeading } from "./Split";
import { ArrowRight } from "./icons";

// Outline of each step's tile and icon in the illustration (1536×1024), as % of the image
const TILE_CLIPS = [
  [[140, 790], [205, 760], [205, 712], [350, 712], [350, 770], [405, 800], [405, 860], [275, 948], [140, 880]],
  [[403, 700], [475, 660], [475, 582], [610, 582], [610, 668], [668, 700], [668, 770], [540, 838], [403, 770]],
  [[667, 580], [735, 545], [735, 442], [885, 442], [885, 545], [930, 575], [930, 640], [800, 702], [667, 640]],
  [[915, 440], [995, 400], [995, 305], [1110, 305], [1110, 395], [1178, 430], [1178, 500], [1050, 562], [915, 500]],
  [[1185, 280], [1250, 230], [1250, 172], [1370, 172], [1370, 215], [1432, 250], [1432, 320], [1300, 398], [1185, 330]],
].map((pts) => `polygon(${pts.map(([x, y]) => `${((x / 1536) * 100).toFixed(2)}% ${((y / 1024) * 100).toFixed(2)}%`).join(", ")})`);

// Each step's icon, cut out of the illustration (process-icon-N.png) so it can lift on hover.
// Position and width as % of the base image, which has the icons painted out.
const ICONS = [
  { left: 12.7, top: 68.36, width: 10.74 },
  { left: 30.6, top: 57.42, width: 9.77 },
  { left: 47.2, top: 43.46, width: 11.39 },
  { left: 63.48, top: 30.27, width: 9.77 },
  { left: 80.4, top: 15.62, width: 9.77 },
];

/** Section 04: how we work, the five steps as a vertical timeline beside the step illustration. */
export default function Process() {
  return (
    <section id="process" aria-label="How we work" className="bg-2">
      <div className="wrap sec proc-home">
        <div className="proc-home-head">
          <SplitHeading className="h-section" text="Five steps. One team, start to finish." />
        </div>
        <p className="lead proc-home-lead" data-reveal>No handoffs between a &ldquo;build&rdquo; vendor and a &ldquo;grow&rdquo; vendor. The same people who design and build your project are the ones who market it afterward.</p>

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

        {/* Step illustration: the base has the icons painted out; each icon is its own image so it
            lifts on hover. The clipped tiles are just hover hit-areas, linked both ways with the list. */}
        <div className="pv" data-reveal data-delay="0.15">
          <div className="pv-in">
            <Image
              src="/images/process-base.webp"
              alt="Our five steps: Discover, Strategy, Design & Build, Launch, Grow"
              width={1536}
              height={1024}
              sizes="(max-width: 1000px) 100vw, 50vw"
              unoptimized
            />
            {PROCESS.map((p, i) => (
              /* eslint-disable-next-line @next/next/no-img-element -- cut-out layered over the base image */
              <img className="pv-icon" data-n={i + 1} key={p.n} src={`/images/process-icon-${i + 1}.png`} alt="" style={{ left: `${ICONS[i].left}%`, top: `${ICONS[i].top}%`, width: `${ICONS[i].width}%` }} />
            ))}
            {PROCESS.map((p, i) => (
              <div className="pv-step" data-n={i + 1} key={p.n} aria-hidden="true">
                <div className="pv-tile" style={{ clipPath: TILE_CLIPS[i] }} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
