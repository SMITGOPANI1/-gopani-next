"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Scroll position that puts the top of `el` flush under the sticky header, so the section fills
 * the screen. Computed as a number because Lenis adds the CSS scroll-padding-top on top of any
 * offset given with an element target, which left a strip of the previous section showing.
 */
const landingY = (el: HTMLElement) =>
  window.scrollY + el.getBoundingClientRect().top - (document.getElementById("site-header")?.offsetHeight ?? 0);

/**
 * Replays a section's entrance animation (the same moves Motion uses on scroll): heading words
 * slide up, then text and cards rise in. Used after jumping straight to a section so the
 * arrival doesn't look like a hard cut. `overwrite` stops the section's own scroll reveal
 * (which fires on the jump) from fighting it.
 */
function playIntro(section: HTMLElement) {
  const words = section.querySelectorAll("[data-split] .w");
  const reveals = section.querySelectorAll("[data-reveal]");
  const kids = section.querySelectorAll("[data-stagger] > *");
  const tl = gsap.timeline();
  tl.fromTo(section, { opacity: 0 }, { opacity: 1, duration: 0.45, ease: "power2.out", overwrite: true, clearProps: "opacity" });
  if (words.length) tl.fromTo(words, { yPercent: 110, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.9, ease: "power4.out", stagger: 0.04, overwrite: true }, 0.1);
  if (reveals.length) tl.fromTo(reveals, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out", stagger: 0.1, overwrite: true }, 0.25);
  if (kids.length) tl.fromTo(kids, { y: 36, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", stagger: 0.08, overwrite: true }, 0.35);
}

/** Buttery smooth scrolling (Lenis), kept in sync with GSAP ScrollTrigger. */
export default function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const lenis = new Lenis({ lerp: 0.1 });
    lenisRef.current = lenis;
    lenis.on("scroll", ScrollTrigger.update);
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // In-page links (e.g. "/#contact" on the homepage): run before Next's <Link> handler and
    // go straight to the section (no scrolling through the page), then play its entrance animation.
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const a = (e.target as Element | null)?.closest?.("a[href*='#']") as HTMLAnchorElement | null;
      if (!a || a.target === "_blank") return;
      const url = new URL(a.href);
      if (url.origin !== location.origin || url.pathname !== location.pathname || !url.hash) return;
      const el = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!el) return;
      e.preventDefault();
      if (location.hash !== url.hash) history.pushState(null, "", url.hash);
      // Wait a frame so an open mobile menu can close (and unlock scrolling) first.
      requestAnimationFrame(() => {
        const main = document.querySelector("main") ?? document.body;
        // Quick fade of the current view, jump, then the target section animates in.
        gsap.to(main, {
          opacity: 0, duration: 0.18, ease: "power1.in", overwrite: true,
          onComplete: () => {
            const section = el.closest("section") ?? el;
            lenis.scrollTo(landingY(section), { immediate: true, force: true });
            playIntro(section);
            gsap.to(main, { opacity: 1, duration: 0.25, ease: "power1.out", clearProps: "opacity" });
          },
        });
      });
    };
    window.addEventListener("click", onClick, true);

    // Pause smooth scroll while the mobile menu or a modal locks the page
    const lock = new MutationObserver(() => {
      if (document.body.classList.contains("no-scroll")) lenis.stop();
      else lenis.start();
    });
    lock.observe(document.body, { attributes: true, attributeFilter: ["class"] });

    return () => {
      window.removeEventListener("click", onClick, true);
      lock.disconnect();
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Start every new page at the top (Lenis otherwise keeps the old scroll position).
  // Arriving with a hash (e.g. a service page's "/?service=…#contact"): land on that section
  // directly and play its entrance animation. Two frames so Motion has set up its reveals first.
  useEffect(() => {
    if (window.location.hash) {
      const el = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
      const lenis = lenisRef.current;
      if (!el || !lenis) return;
      let raf = requestAnimationFrame(() => {
        raf = requestAnimationFrame(() => {
          lenis.resize(); // the new page is taller than the one we came from; Lenis would clamp to the old height
          const section = el.closest("section") ?? el;
          lenis.scrollTo(landingY(section), { immediate: true, force: true });
          playIntro(section);
        });
      });
      return () => cancelAnimationFrame(raf);
    }
    lenisRef.current?.scrollTo(0, { immediate: true, force: true });
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname]);

  return null;
}
