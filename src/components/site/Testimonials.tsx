"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Dialog } from "radix-ui";
import { ArrowLeft, ArrowRight as ArrowR } from "lucide-react";
import { CONFIG } from "@/config/site";
import { TESTIMONIALS, VIDEO_TESTIMONIAL } from "@/config/content";
import { SplitHeading } from "./Split";
import { Star, Play } from "./icons";

export default function Testimonials() {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true, align: "start" });
  const [index, setIndex] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);

  useEffect(() => {
    if (!embla) return;
    const onSelect = () => setIndex(embla.selectedScrollSnap());
    embla.on("select", onSelect);
    onSelect();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const timer = reduce ? 0 : window.setInterval(() => embla.scrollNext(), 6000);
    return () => {
      embla.off("select", onSelect);
      if (timer) clearInterval(timer);
    };
  }, [embla]);

  const prev = useCallback(() => embla?.scrollPrev(), [embla]);
  const next = useCallback(() => embla?.scrollNext(), [embla]);

  return (
    <section id="reviews" className="bg-2">
      <div className="wrap sec">
        <div className="sec-head center">
          <p className="m m-blue sec-num" data-reveal>07 — Client reviews</p>
          <SplitHeading className="h-section" text="Don't take our word for it." />
          <p className="lead" data-reveal>Every quote below is from a named client with a real company — no stock photos, no Lorem Ipsum. If a number sounds big, ask us for the case study behind it.</p>
        </div>

        <div className="testi">
          <button type="button" className="video-card" data-reveal onClick={() => setVideoOpen(true)} aria-label="Play video testimonial">
            <span className="badge">Video review · {VIDEO_TESTIMONIAL.duration}</span>
            <span className="play"><Play size={28} /></span>
            <blockquote>&ldquo;{VIDEO_TESTIMONIAL.quote}&rdquo;</blockquote>
            <span className="who">{VIDEO_TESTIMONIAL.name} · {VIDEO_TESTIMONIAL.role}</span>
          </button>

          <div className="slider" data-reveal data-delay="0.1">
            <div className="embla" ref={emblaRef}>
              <div className="embla-track">
                {TESTIMONIALS.map((t) => (
                  <figure className="slide" key={t.name} style={{ margin: 0 }}>
                    <div className="stars" aria-label="5 out of 5 stars">
                      {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={16} />)}
                    </div>
                    <blockquote style={{ margin: 0 }}><p>&ldquo;{t.quote}&rdquo;</p></blockquote>
                    <figcaption className="person">
                      <span className="av">{t.initials}</span>
                      <span><b>{t.name}</b><small>{t.role}</small></span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
            <div className="slider-nav">
              <div className="dots">
                {TESTIMONIALS.map((t, i) => (
                  <button key={t.name} className={i === index ? "active" : ""} aria-label={`Go to review ${i + 1}`} onClick={() => embla?.scrollTo(i)} />
                ))}
              </div>
              <div className="arrows">
                <button aria-label="Previous review" onClick={prev}><ArrowLeft size={18} /></button>
                <button aria-label="Next review" onClick={next}><ArrowR size={18} /></button>
              </div>
            </div>
          </div>
        </div>

        <div className="review-links" data-reveal>
          {CONFIG.reviews.google && <a href={CONFIG.reviews.google} target="_blank" rel="noopener"><Star size={16} /> {CONFIG.proof.rating} on Google Reviews</a>}
          {CONFIG.reviews.clutch && <a href={CONFIG.reviews.clutch} target="_blank" rel="noopener">Rated on Clutch</a>}
          {CONFIG.reviews.goodfirms && <a href={CONFIG.reviews.goodfirms} target="_blank" rel="noopener">Verified on GoodFirms</a>}
        </div>
      </div>

      <Dialog.Root open={videoOpen} onOpenChange={setVideoOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="dlg-overlay" />
          <Dialog.Content className="video-box" aria-describedby={undefined}>
            <Dialog.Title className="sr-only" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clip: "rect(0 0 0 0)" }}>
              Video testimonial
            </Dialog.Title>
            <Dialog.Close className="dlg-close" aria-label="Close video">×</Dialog.Close>
            <div className="frame">
              {CONFIG.videoId ? (
                <iframe
                  src={`https://www.youtube.com/embed/${CONFIG.videoId}?autoplay=1`}
                  title="Client video testimonial"
                  allow="autoplay; encrypted-media; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <div className="empty">
                  <p>Your client video goes here. Paste a YouTube video ID into <code>CONFIG.videoId</code> in <code>src/config/site.ts</code>.</p>
                </div>
              )}
            </div>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
}
