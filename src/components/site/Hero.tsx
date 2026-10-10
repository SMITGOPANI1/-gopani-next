import Link from "next/link";
import Image from "next/image";
import { CONFIG } from "@/config/site";
import { CLIENTS } from "@/config/content";
import { SplitHeading } from "./Split";
import { Star, ArrowRight, ArrowUpRight } from "./icons";
import { TrendingUp } from "lucide-react";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-in">
        <div className="hero-copy">
          <p className="m m-blue sec-num" data-reveal>Strategy · Software · Infrastructure · Presence · Growth</p>
          <SplitHeading as="h1" className="h-display" text="We build and grow digital businesses." />
          <p className="lead-lg" data-reveal data-delay="0.25">
            Most agencies make you choose: a developer who builds it, or a marketer who promotes it — then leave you
            to manage both. We do both, as one accountable team with one plan. Your website, app or software gets
            built properly, then gets found, ranked and turned into enquiries every single month after that.
          </p>
          <div className="hero-actions" data-reveal data-delay="0.35">
            <Link href="/#contact" className="btn btn-blue">Book a Free Call <ArrowRight size={18} /></Link>
            <Link href="/services" className="btn btn-ghost">Our Services <ArrowUpRight size={18} /></Link>
          </div>
          <div className="hero-proof" data-reveal data-delay="0.45">
            <span className="stars">
              <Star size={16} /> {CONFIG.proof.rating} on {CONFIG.proof.ratingSource}
            </span>
            <span className="sep" aria-hidden="true" />
            <span><strong>{CONFIG.proof.projects}</strong> projects</span>
            <span className="sep" aria-hidden="true" />
            <span className="logos" aria-label={`Trusted by ${CONFIG.proof.brands} brands`}>
              {CLIENTS.slice(0, 4).map((c) => <i key={c.name} title={c.name}>{c.mark}</i>)}
              <span style={{ marginLeft: 8 }}>Trusted by {CONFIG.proof.brands} brands</span>
            </span>
          </div>
        </div>

        <div className="hero-visual" data-reveal data-delay="0.2">
          <div data-parallax="24">
            <div className="hero-photo">
              <Image
                src="/images/hero-studio.jpg"
                alt="A small product team working together around a table"
                width={1200}
                height={1500}
                priority
                sizes="(max-width: 960px) 100vw, 540px"
              />
            </div>
            <div className="float-chip" aria-hidden="true">
              <i><TrendingUp size={18} /></i>
              <div>
                <b>{CONFIG.proof.projects} projects</b>
                <small>Built and grown since launch</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
