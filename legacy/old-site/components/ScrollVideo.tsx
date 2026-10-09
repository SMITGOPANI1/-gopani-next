"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type Manifest = { count: number; fps: number; width: number; height: number; path: string; ext: string; pad: number };

// Each caption is visible between `from` and `to` (0 = start of the section, 1 = end).
const CAPTIONS = [
  { from: 0.0, to: 0.24, kicker: "01 · Idea", title: "It starts with your idea.", text: "One free call. We learn your business, your customers and your goals." },
  { from: 0.26, to: 0.49, kicker: "02 · Design", title: "Designed to convert.", text: "Clean, modern screens that turn visitors into enquiries." },
  { from: 0.51, to: 0.74, kicker: "03 · Build", title: "Built for every screen.", text: "Websites, apps and software — fast, secure and tested." },
  { from: 0.76, to: 1.01, kicker: "04 · Grow", title: "Then we grow it.", text: "SEO, Google & Meta ads that bring real customers, every month." },
];

const FADE = 0.05;
const captionOpacity = (p: number, from: number, to: number) =>
  Math.max(0, Math.min(1, (p - from) / FADE, (to - p) / FADE));

/**
 * Scroll-driven video: an AI-generated clip split into 30 fps frames
 * (public/frames) and painted on a canvas as you scroll.
 */
export default function ScrollVideo() {
  const sectionRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const capRefs = useRef<(HTMLDivElement | null)[]>([]);
  const barRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const [loaded, setLoaded] = useState(0); // 0–100 %

  useEffect(() => {
    const section = sectionRef.current;
    const canvas = canvasRef.current;
    if (!section || !canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let cancelled = false;
    let images: HTMLImageElement[] = [];
    let manifest: Manifest | null = null;
    let current = -1;
    let target = 0;
    let raf = 0;
    let trigger: ScrollTrigger | undefined;

    // Paint frame `i` (or the closest frame that has finished loading), cover-fit
    function draw(i: number) {
      if (!manifest || !ctx || !canvas) return;
      const ready = (im?: HTMLImageElement) => !!im && im.complete && im.naturalWidth > 0;
      let img: HTMLImageElement | undefined = images[i];
      const exact = ready(img);
      if (!exact) {
        img = undefined;
        for (let d = 1; d < images.length && !img; d++) {
          if (ready(images[i - d])) img = images[i - d];
          else if (ready(images[i + d])) img = images[i + d];
        }
      }
      if (!img) return;
      const cw = canvas.width, ch = canvas.height;
      const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
      const w = img.naturalWidth * scale, h = img.naturalHeight * scale;
      ctx.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h);
      current = exact ? i : -1; // keep retrying until the exact frame has loaded
    }

    function resize() {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(canvas.clientWidth * dpr);
      canvas.height = Math.round(canvas.clientHeight * dpr);
      if (ctx) ctx.imageSmoothingQuality = "high";
      current = -1;
      draw(target);
    }

    function loop() {
      if (target !== current) draw(target);
      raf = requestAnimationFrame(loop);
    }

    function onProgress(p: number) {
      if (!manifest) return;
      target = Math.min(manifest.count - 1, Math.max(0, Math.round(p * (manifest.count - 1))));
      CAPTIONS.forEach((c, i) => {
        const el = capRefs.current[i];
        if (!el) return;
        const o = captionOpacity(p, c.from, c.to);
        el.style.opacity = String(o);
        el.style.transform = `translateY(${(1 - o) * 24}px)`;
      });
      if (barRef.current) barRef.current.style.transform = `scaleX(${p})`;
      if (counterRef.current) counterRef.current.textContent = String(target + 1).padStart(3, "0");
    }

    fetch("/frames/manifest.json")
      .then(r => r.json())
      .then((m: Manifest) => {
        if (cancelled) return;
        manifest = m;
        let done = 0;
        const src = (i: number) => `${m.path}${String(i + 1).padStart(m.pad, "0")}${m.ext}`;
        images = Array.from({ length: m.count }, (_, i) => {
          const img = new Image();
          img.decoding = "async";
          img.onload = img.onerror = () => {
            done++;
            if (done % 6 === 0 || done === m.count) setLoaded(Math.round((done / m.count) * 100));
            if (i === target || current === -1) draw(target);
          };
          img.src = src(i);
          return img;
        });

        resize();
        trigger = ScrollTrigger.create({
          trigger: section,
          start: "top top",
          end: "bottom bottom",
          onUpdate: self => onProgress(self.progress),
          onRefresh: self => onProgress(self.progress),
        });
        onProgress(trigger.progress);
        raf = requestAnimationFrame(loop);
      })
      .catch(() => setLoaded(100));

    window.addEventListener("resize", resize);
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
      trigger?.kill();
      window.removeEventListener("resize", resize);
      images.forEach(img => (img.onload = img.onerror = null));
    };
  }, []);

  return (
    <section className="sv" ref={sectionRef} aria-label="From idea to growth — scroll story">
      <div className="sv-sticky">
        <canvas ref={canvasRef} className="sv-canvas" aria-hidden="true" />
        <div className="sv-shade" />

        <div className="container sv-head">
          <div className="sec-num">From idea to growth</div>
          <span className="sv-tag">✦ AI-generated film · scroll to play</span>
        </div>

        <div className="container sv-captions">
          {CAPTIONS.map((c, i) => (
            <div key={c.kicker} className="sv-cap" ref={el => { capRefs.current[i] = el; }}>
              <small>{c.kicker}</small>
              <h2>{c.title}</h2>
              <p>{c.text}</p>
              {i === CAPTIONS.length - 1 && (
                <a href="#contact" className="btn btn-primary">Book a Free Call <span className="arrow">→</span></a>
              )}
            </div>
          ))}
        </div>

        <div className="container sv-foot">
          <div className="sv-track"><div className="sv-bar" ref={barRef} /></div>
          <span className="sv-count">
            Frame <span ref={counterRef}>001</span> · 30 fps
          </span>
        </div>

        {loaded < 100 && (
          <div className="sv-loading" aria-live="polite">Loading film… {loaded}%</div>
        )}
      </div>
    </section>
  );
}
