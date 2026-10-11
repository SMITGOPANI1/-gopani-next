import Link from "next/link";
import Image from "next/image";
import { PROCESS } from "@/config/content";
import { SplitHeading } from "./Split";
import { CallArrow } from "./icons";

// Outline of each step's tile and icon in the illustration (1536×1024), as % of the image
const TILE_PTS = [
  [[136, 790], [205, 760], [205, 712], [350, 712], [350, 770], [409, 800], [409, 884], [275, 972], [136, 904]],
  [[399, 700], [475, 660], [475, 582], [610, 582], [610, 668], [672, 700], [672, 794], [540, 862], [399, 794]],
  [[663, 580], [735, 545], [735, 442], [885, 442], [885, 545], [934, 575], [934, 664], [800, 726], [663, 664]],
  [[911, 440], [995, 400], [995, 305], [1110, 305], [1110, 395], [1182, 430], [1182, 524], [1050, 586], [911, 524]],
  [[1181, 280], [1250, 230], [1250, 172], [1370, 172], [1370, 215], [1436, 250], [1436, 344], [1300, 422], [1181, 354]],
];
const TILE_CLIPS = TILE_PTS.map((pts) => `polygon(${pts.map(([x, y]) => `${((x / 1536) * 100).toFixed(2)}% ${((y / 1024) * 100).toFixed(2)}%`).join(", ")})`);
// Box around each step's icon [x, y, w, h] in image px. Only this part lifts on hover; it grows from
// its base, so the enlarged copy always covers the original icon underneath.
const ICON_BOXES = [[196, 708, 160, 140], [470, 582, 146, 146], [726, 440, 142, 182], [988, 302, 124, 160], [1244, 172, 132, 130]];
const ICON_STYLES = ICON_BOXES.map(([x, y, w, h]) => ({
  left: `${(x / 1536) * 100}%`,
  top: `${(y / 1024) * 100}%`,
  width: `${(w / 1536) * 100}%`,
  height: `${(h / 1024) * 100}%`,
  backgroundSize: `${(1536 / w) * 100}% ${(1024 / h) * 100}%`,
  backgroundPosition: `${(x / (1536 - w)) * 100}% ${(y / (1024 - h)) * 100}%`,
}));


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
            <Link href="/#contact" className="btn btn-blue">Start Your Project <CallArrow /></Link>
            <span style={{ color: "var(--muted)", fontSize: 15 }}>Your project can start within 10 days of your first message.</span>
          </div>
        </div>

        {/* Step illustration. Each icon is a feathered copy of the same picture laid
            exactly over itself. The tile is only the hover area; on hover just the icon lifts. Linked both ways with the list. */}
        <div className="pv" data-reveal data-delay="0.15">
          <div className="pv-in">
            <Image
              src="/images/process-full.webp"
              alt="Our five steps: Discover, Strategy, Design & Build, Launch, Grow"
              width={1536}
              height={1024}
              sizes="(max-width: 1000px) 100vw, 50vw"
              unoptimized
            />
            {PROCESS.map((p, i) => (
              <div className="pv-step" data-n={i + 1} key={p.n} aria-hidden="true">
                <div className="pv-tile" style={{ clipPath: TILE_CLIPS[i] }} />
                <div className="pv-icon" style={ICON_STYLES[i]} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
