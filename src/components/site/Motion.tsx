"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * All scroll animations for the page, driven by data attributes:
 *  - data-reveal            fade + rise when it enters the viewport
 *  - data-stagger           children fade + rise one after another
 *  - data-split             heading words slide up out of a mask (see <Split/>)
 *  - data-count / -prefix / -suffix   number counts up
 *  - data-parallax="40"     drifts vertically while scrolling
 * Also: sticky header shadow, back-to-top and mobile CTA.
 */
export default function Motion() {
  const pathname = usePathname();

  // Layout-level components like this one don't remount on client-side
  // navigation (only the page content changes), so without `pathname` as a
  // dependency this effect would only ever run once, on the very first page
  // — every page visited afterwards would have its [data-reveal]/[data-stagger]
  // elements permanently stuck at opacity:0 (CSS hides them until GSAP reveals
  // them), which looks exactly like a blank page.
  useEffect(() => {
    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* Scroll-position UI (works even with reduced motion) */
    const header = document.getElementById("site-header");
    const toTop = document.getElementById("toTop");
    const mobileCta = document.getElementById("mobileCta");
    const contact = document.getElementById("contact");
    const onScroll = () => {
      const y = window.scrollY;
      header?.classList.toggle("scrolled", y > 12);
      toTop?.classList.toggle("show", y > 900);
      if (mobileCta) {
        const r = contact?.getBoundingClientRect();
        const inContact = !!r && r.top < window.innerHeight && r.bottom > 0;
        mobileCta.classList.toggle("show", y > 700 && !inContact);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    if (reduce) {
      root.removeAttribute("data-js");
      return () => window.removeEventListener("scroll", onScroll);
    }
    root.setAttribute("data-js", "");

    const ctx = gsap.context(() => {
      try {
        gsap.utils.toArray<HTMLElement>("[data-split]").forEach((h) => {
          const words = h.querySelectorAll(".w");
          if (!words.length) return;
          gsap.fromTo(
            words,
            { yPercent: 110, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 0.9, ease: "power4.out", stagger: 0.04, scrollTrigger: { trigger: h, start: "top 90%", once: true } },
          );
        });

        gsap.utils.toArray<HTMLElement>("[data-reveal]").forEach((el) => {
          const delay = parseFloat(el.dataset.delay || "0");
          gsap.fromTo(
            el,
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, delay, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 90%", once: true } },
          );
        });

        gsap.utils.toArray<HTMLElement>("[data-stagger]").forEach((group) => {
          const kids = Array.from(group.children) as HTMLElement[];
          if (!kids.length) return;
          gsap.fromTo(
            kids,
            { y: 36, opacity: 0 },
            // clearProps: drop GSAP's inline transform afterwards so CSS :hover transforms still work
            { y: 0, opacity: 1, duration: 0.9, ease: "power3.out", stagger: 0.08, clearProps: "transform", scrollTrigger: { trigger: group, start: "top 88%", once: true } },
          );
        });

        gsap.utils.toArray<HTMLElement>("[data-count]").forEach((el) => {
          const target = parseFloat(el.dataset.count || "0");
          const prefix = el.dataset.prefix || "";
          const suffix = el.dataset.suffix || "";
          const n = { v: 0 };
          gsap.to(n, {
            v: target,
            duration: 2,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 88%", once: true },
            onUpdate: () => {
              el.textContent = prefix + Math.round(n.v).toLocaleString("en-IN") + suffix;
            },
          });
        });

        gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((el) => {
          const amt = parseFloat(el.dataset.parallax || "40");
          gsap.fromTo(
            el,
            { y: amt },
            { y: -amt, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: 0.6 } },
          );
        });
      } catch {
        root.removeAttribute("data-js"); // never leave the page hidden
      }
    });

    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    document.fonts?.ready.then(refresh).catch(() => {});
    // The new page's content is already in the DOM by the time this effect
    // runs, but measure again on the next frame to be safe against any
    // late layout shift (e.g. an image finishing decode).
    requestAnimationFrame(refresh);

    return () => {
      ctx.revert();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("load", refresh);
    };
  }, [pathname]);

  return null;
}
