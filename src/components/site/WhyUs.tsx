import Image from "next/image";
import { WHY } from "@/config/content";
import { CONFIG } from "@/config/site";
import { SplitHeading } from "./Split";
import { Ico } from "./icons";

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

      </div>
    </section>
  );
}
