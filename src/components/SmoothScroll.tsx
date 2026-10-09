"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Buttery smooth scrolling (Lenis), kept in sync with GSAP ScrollTrigger. */
export default function SmoothScroll() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ anchors: { offset: -80 }, lerp: 0.1 });
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Pause smooth scroll while the mobile menu or a modal locks the page
    const lock = new MutationObserver(() => {
      if (document.body.classList.contains("no-scroll")) lenis.stop();
      else lenis.start();
    });
    lock.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => {
      lock.disconnect();
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return null;
}
