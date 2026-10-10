import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CONFIG } from "@/config/site";
import { Handshake, UserRound, ChartColumn, KeyRound } from "lucide-react";
import { ArrowRight } from "@/components/site/icons";

export const metadata: Metadata = {
  title: "About Us — KarmahubAI",
  description: "We're one team that builds a business's website, app or software, then grows it with marketing. Here's why, and who's behind it.",
};

const VALUES = [
  { icon: Handshake, title: "One team, start to finish", text: "The people who design and build your project are the same people who market it afterwards. No handoffs, no blame-shifting between vendors." },
  { icon: UserRound, title: "A named person, always", text: "You get one project manager who knows your business, not a rotating support queue or a different account manager every few months." },
  { icon: ChartColumn, title: "Numbers over opinions", text: "Every report says what we did, what it cost and what it brought back — in plain language, not vanity metrics dressed up as results." },
  { icon: KeyRound, title: "You own everything", text: "Your code, domain, ad accounts and data are registered in your name from day one. We earn the right to keep your business every month, not lock you in." },
];

export default function AboutPage() {
  return (
    <>
      <section>
        <div className="wrap sec">
          <div className="sec-head">
            <p className="m m-blue sec-num" data-reveal>About us</p>
            <h1 className="h-section" data-reveal>Built by people who got tired of the two-vendor problem.</h1>
            <p className="lead" data-reveal>
              {CONFIG.legalName} exists because every small business we talked to was stuck hiring one agency to build
              something and another to market it — paying twice, managing two relationships, and getting blamed by
              each side whenever something didn&apos;t work. We built KarmahubAI to be the team that does both, properly,
              under one roof.
            </p>
          </div>

          <div className="about-grid" data-reveal data-delay="0.1">
            <div className="about-photo">
              <Image src="/images/culture-team.jpg" alt="The team working together" width={1400} height={1000} sizes="(max-width: 900px) 100vw, 640px" />
            </div>
            <div className="person-card">
              <div className="top">
                <span className="av">{CONFIG.founder.initials}</span>
                <div>
                  <b>{CONFIG.founder.name}</b>
                  <span className="role">{CONFIG.founder.role}</span>
                </div>
              </div>
              <p>Started KarmahubAI after watching too many good small businesses get let down by agencies that over-promised and under-reported. Answers enquiries personally — reach out any time.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="wrap sec">
          <div className="sec-head">
            <p className="m m-blue sec-num" data-reveal>What we actually believe</p>
            <h2 className="h-section-sm" data-reveal>Not slogans. Working rules.</h2>
          </div>
          <div className="why-grid" data-stagger>
            {VALUES.map((v) => (
              <div className="why" key={v.title}>
                <span className="ic"><v.icon size={22} strokeWidth={1.75} aria-hidden="true" /></span>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="wrap">
          <div className="magnet" style={{ gridTemplateColumns: "1fr", textAlign: "center" }} data-reveal>
            <div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 3.2vw, 38px)", marginBottom: 14 }}>
                Want to see if we&apos;re a fit?
              </h2>
              <p className="lead" style={{ color: "var(--on-dark)", maxWidth: 560, margin: "0 auto 24px" }}>
                No pitch, no pressure — just a free call to talk through what you actually need.
              </p>
              <Link href="/#contact" className="btn btn-blue">Book a Free Call <ArrowRight size={18} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
