import Link from "next/link";
import { SplitHeading } from "./Split";
import HeroOrbit from "./HeroOrbit";
import { ArrowRight, ArrowUpRight } from "./icons";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-in">
        <div className="hero-copy">
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
        </div>

        <div className="hero-visual" data-reveal data-delay="0.2">
          <HeroOrbit />
        </div>
      </div>
    </section>
  );
}
