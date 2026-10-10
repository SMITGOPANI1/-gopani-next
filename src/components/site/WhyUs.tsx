import type { CSSProperties } from "react";
import { WHY } from "@/config/content";
import { SplitHeading } from "./Split";
import { Ico } from "./icons";

/**
 * Why us: four cards on a gentle wave. A dashed path runs through the numbered markers above
 * the cards (the path's y-values match each card's offset in CSS: 0, 48, 28, 68px).
 */
export default function WhyUs() {
  return (
    <section id="why-us" className="why-sec">
      <div className="wrap sec">
        <div className="sec-head center">
          <SplitHeading className="h-section" text="A simpler way to build and grow" />
          <p className="lead" data-reveal>Experienced people, aligned teams, clear numbers and long-term thinking — all working together for your success.</p>
        </div>

        <div className="why-track">
          <svg className="why-wave" viewBox="0 0 1000 120" preserveAspectRatio="none" aria-hidden="true">
            <defs>
              <marker id="why-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
                <path d="M0 0 L10 5 L0 10" fill="none" stroke="currentColor" strokeWidth="1.6" />
              </marker>
            </defs>
            <path d="M0 54 C50 30 90 30 125 30 S300 78 375 78 S550 58 625 58 S800 98 875 98 S955 80 992 64" markerEnd="url(#why-arrow)" />
          </svg>

          <div className="why-grid" data-stagger>
            {WHY.map((w, i) => (
              <div className="why" key={w.title} style={{ "--i": i } as CSSProperties}>
                <span className="why-n">{String(i + 1).padStart(2, "0")}</span>
                <span className="ic"><Ico name={w.icon} size={26} /></span>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
