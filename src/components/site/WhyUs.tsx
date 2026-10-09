import Image from "next/image";
import { WHY, COMPARE } from "@/config/content";
import { CONFIG } from "@/config/site";
import { SplitHeading } from "./Split";
import { Ico, Check, X, Minus } from "./icons";

function Cell({ v }: { v: string }) {
  if (v === "yes" || v === "always") return <span className="yes"><Check size={18} /> {v === "always" ? "Always" : "Yes"}</span>;
  if (v === "sometimes") return <span className="so"><Minus size={18} /> Sometimes</span>;
  return <span className="no"><X size={18} /> No</span>;
}

export default function WhyUs() {
  return (
    <section id="why-us" className="bg-white">
      <div className="wrap sec">
        <div className="sec-head">
          <p className="m m-blue sec-num" data-reveal>05 — Why {CONFIG.name}</p>
          <SplitHeading className="h-section" text="Specific promises, not slogans." />
          <p className="lead" data-reveal>You are comparing agencies. Here is exactly what is different about working with us.</p>
        </div>

        <div className="banner-photo" data-reveal data-delay="0.1">
          <Image src="/images/whyus-review.jpg" alt="Reviewing results together" width={1600} height={700} sizes="100vw" />
        </div>

        <div className="why-grid" data-stagger>
          {WHY.map((w) => (
            <div className="why" key={w.title}>
              <span className="ic"><Ico name={w.icon} size={22} /></span>
              <h3>{w.title}</h3>
              <p>{w.text}</p>
            </div>
          ))}
        </div>

        <div className="compare" data-reveal>
          <table>
            <thead>
              <tr>
                <th scope="col">What you get</th>
                <th scope="col">Typical agency</th>
                <th scope="col" className="us">{CONFIG.name}</th>
              </tr>
            </thead>
            <tbody>
              {COMPARE.map((r) => (
                <tr key={r.label}>
                  <td>{r.label}</td>
                  <td><Cell v={r.agency} /></td>
                  <td className="us"><Cell v={r.us} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
