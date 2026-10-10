import { BADGES, PRESS } from "@/config/content";
import { SplitHeading } from "./Split";

export default function Certifications() {
  return (
    <section id="trust" className="bg-white">
      <div className="wrap sec">
        <div className="sec-head center">
          <SplitHeading className="h-section-sm" text="Certified where it counts." />
          <p className="lead" data-reveal>We only list credentials we actually hold — not claims we can&apos;t back up if you ask to see them.</p>
        </div>
        <div className="badges" data-stagger>
          {BADGES.map((b) => (
            <div className="badge" key={b.title}>
              <span className="seal">{b.mark}</span>
              <b>{b.title}</b>
              <small>{b.text}</small>
            </div>
          ))}
        </div>
        {PRESS.length > 0 && (
          <div className="press-row" data-reveal>
            <span className="m m-muted">Featured in</span>
            <div className="press-marks">
              {PRESS.map((p) => (
                <span key={p.name} className="press-mark" title={p.name}>{p.mark}</span>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
