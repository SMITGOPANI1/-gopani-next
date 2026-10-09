"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight as ArrowR } from "lucide-react";
import { CASES } from "@/config/content";
import { SplitHeading } from "./Split";
import { ArrowRight } from "./icons";

/** Section 03 on the homepage (a short teaser); the full carousel lives on /work. */
export default function CaseStudies({ limit, heading = true }: { limit?: number; heading?: boolean } = {}) {
  const cases = limit ? CASES.slice(0, limit) : CASES;
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setIndex(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = reduce ? 0 : window.setInterval(() => embla.scrollNext(), 7000);
    return () => {
      embla.off("select", onSelect);
      if (timer) clearInterval(timer);
    };
  }, [embla]);

  const prev = useCallback(() => embla?.scrollPrev(), [embla]);
  const next = useCallback(() => embla?.scrollNext(), [embla]);

  return (
    <section id="work" className="bg-2">
      <div className="wrap sec">
        {heading && (
          <div className="sec-row">
            <div className="sec-head">
              <p className="m m-blue sec-num" data-reveal>03 — Proof, not promises</p>
              <SplitHeading className="h-section" text="Real work. Real numbers." />
              <p className="lead" data-reveal>Claims like &ldquo;we&apos;re the best&rdquo; don&apos;t mean much. Numbers do. Here are a few real projects where we built, grew, or did both — with the results attached.</p>
            </div>
            <Link href="/work" className="btn btn-ghost" data-reveal>View all work <ArrowRight size={18} /></Link>
          </div>
        )}

        <div className="case-slider" data-reveal data-delay="0.1">
          <div className="embla" ref={emblaRef}>
            <div className="embla-track">
              {cases.map((c) => (
                <article className="slide case-slide" key={c.client}>
                  <div className="case-slide-photo">
                    <Image src={c.image} alt={`${c.client} — ${c.industry}`} width={1400} height={900} sizes="(max-width: 900px) 100vw, 640px" />
                  </div>
                  <div className="case-body">
                    <div className="case-top">
                      <b>{c.client}</b>
                      <div className="case-tags">
                        <span className="pill">{c.industry}</span>
                        <span className={`pill ${c.type === "Grow" ? "orange" : c.type === "Build" ? "blue" : "ink"}`}>{c.type}</span>
                      </div>
                    </div>
                    <div className="case-results">
                      {c.results.map((r) => (
                        <div key={r.label}><b>{r.value}</b><small>{r.label}</small></div>
                      ))}
                    </div>
                    <p>{c.summary}</p>
                    <Link href={`/work/${c.slug}`} className="link-arrow">Read case study <ArrowRight size={16} /></Link>
                  </div>
                </article>
              ))}
            </div>
          </div>
          <div className="slider-nav">
            <div className="dots">
              {cases.map((c, i) => (
                <button key={c.client} className={i === index ? "active" : ""} aria-label={`Go to ${c.client}`} onClick={() => embla?.scrollTo(i)} />
              ))}
            </div>
            <div className="arrows">
              <button aria-label="Previous case study" onClick={prev}><ArrowLeft size={18} /></button>
              <button aria-label="Next case study" onClick={next}><ArrowR size={18} /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
