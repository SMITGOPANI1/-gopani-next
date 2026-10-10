"use client";

import { useLayoutEffect, useRef, useState } from "react";

// Brand icons (cut from the brand artwork) shown on small cards with a text label.
const NODES = [
  { label: "Software", src: "/icon-software.png", pos: "top",
    items: ["IT Strategy & Consulting", "Application Development", "Start-up Launch"] },
  { label: "Infrastructure", src: "/icon-infrastructure.png", pos: "br",
    items: ["POC to Scalable Infrastructure", "Scaling Up", "Managed Support & Outsourcing"] },
  { label: "Growth", src: "/icon-growth.png", pos: "bl",
    items: ["Digital Content & Presence", "Marketing & Growth"] },
] as const;

type Box = { x: number; y: number; w: number; h: number };
type Pill = { x: number; y: number; delay: number };
type Link = { x1: number; y1: number; x2: number; y2: number; delay: number };

const overlaps = (a: Box, b: Box, gap: number) =>
  a.x < b.x + b.w + gap && b.x < a.x + a.w + gap && a.y < b.y + b.h + gap && b.y < a.y + a.h + gap;

// Candidate directions and gaps for placing an item around the hovered card (every 10 degrees, near to far).
const DIRS = Array.from({ length: 36 }, (_, n) => (n * 10 * Math.PI) / 180);
const GAPS = [16, 40, 70, 105, 145, 190, 240];
// Half-size of a box measured along a direction, so items sit just clear of the card at any angle.
const half = (w: number, h: number, c: number, s: number) => (Math.abs(c) * w) / 2 + (Math.abs(s) * h) / 2;

/** Hero visual: logo core with orbiting service cards. Hover a card to fan out what it covers. */
export default function HeroOrbit() {
  const wrap = useRef<HTMLDivElement>(null);
  const orbit = useRef<HTMLDivElement>(null);
  const core = useRef<HTMLDivElement>(null);
  const pop = useRef<HTMLDivElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [hot, setHot] = useState<number | null>(null);
  const [pills, setPills] = useState<Pill[] | null>(null);
  const [links, setLinks] = useState<Link[]>([]);
  const MAX = 8; // degrees of tilt at the edge

  // The side under the cursor sinks in, the opposite side lifts out (off while a card is open).
  const tilt = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = orbit.current;
    if (!el || hot !== null || e.pointerType !== "mouse") return;
    const r = e.currentTarget.getBoundingClientRect();
    const dx = ((e.clientX - r.left) / r.width - 0.5) * 2;
    const dy = ((e.clientY - r.top) / r.height - 0.5) * 2;
    el.style.transition = "transform 0.15s ease-out";
    el.style.transform = `rotateX(${(-dy * MAX).toFixed(2)}deg) rotateY(${(dx * MAX).toFixed(2)}deg)`;
  };
  const reset = () => {
    const el = orbit.current;
    if (!el || hot !== null) return;
    el.style.transition = "transform 0.7s cubic-bezier(0.2, 0.8, 0.2, 1)";
    el.style.transform = "";
  };

  const keep = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
  };
  // The orbit freezes where it is, so the card never slips out from under the cursor.
  const enter = (i: number, e: React.PointerEvent<HTMLElement>) => {
    if (e.pointerType !== "mouse") return;
    keep();
    if (hot === i) return;
    setPills(null);
    setLinks([]);
    setHot(i);
  };
  // Grace period: lets the cursor cross from the card to its items, and ignores 1px slips.
  const leave = () => {
    keep();
    closeTimer.current = setTimeout(() => {
      setHot(null);
      setPills(null);
      setLinks([]);
    }, 280);
  };

  // Lay the items out around the hovered card, wherever the rotation has put it.
  useLayoutEffect(() => {
    const w = wrap.current, c = core.current, p = pop.current;
    if (hot === null || pills !== null || !w || !c || !p) return;
    const o = w.getBoundingClientRect();
    const k = o.width / w.offsetWidth || 1;
    const local = (r: DOMRect): Box => ({ x: (r.left - o.left) / k, y: (r.top - o.top) / k, w: r.width / k, h: r.height / k });

    const cb = local(c.getBoundingClientRect());
    const C = { x: cb.x + cb.w / 2, y: cb.y + cb.h / 2 };
    const cards = Array.from(w.querySelectorAll<HTMLElement>(".orbit-node")).map((n) => local(n.getBoundingClientRect()));
    const card = cards[hot];
    const P = { x: card.x + card.w / 2, y: card.y + card.h / 2 };
    const angle = Math.atan2(P.y - C.y, P.x - C.x);

    // Keep items inside the hero, right of the text column and on screen.
    const heroEl = w.closest(".hero");
    const visEl = w.closest(".hero-visual");
    const hr = heroEl ? local(heroEl.getBoundingClientRect()) : { x: -1e4, y: -1e4, w: 2e4, h: 2e4 };
    const vr = visEl ? local(visEl.getBoundingClientRect()) : hr;
    const screenRight = (window.innerWidth - 16 - o.left) / k;
    const bounds = { l: vr.x - 8, t: hr.y + 12, r: Math.min(hr.x + hr.w - 12, screenRight), b: hr.y + hr.h - 12 };

    const blocked: Box[] = [...cards, cb];
    const sizes = Array.from(p.querySelectorAll<HTMLElement>("b")).map((b) => ({ w: b.offsetWidth, h: b.offsetHeight }));
    const placed: Pill[] = [];
    const nextLinks: Link[] = [];

    // Each item takes the nearest free spot around its card, staying near the previous item and
    // leaning outward (spots on the logo side cost extra), so the group fans out tight and readable.
    const spots = (s: { w: number; h: number }) =>
      DIRS.flatMap((d) =>
        GAPS.map((gap) => {
          const c = Math.cos(d), sn = Math.sin(d);
          const r = half(card.w, card.h, c, sn) + gap + half(s.w, s.h, c, sn);
          const out = Math.cos(d - angle);
          return { box: { x: P.x + c * r - s.w / 2, y: P.y + sn * r - s.h / 2, w: s.w, h: s.h }, r, inward: out < 0 ? -out * 90 : 0 };
        }),
      );
    let anchor = P;
    for (const s of sizes) {
      let best: Box | null = null;
      let bestScore = Infinity;
      const all = spots(s);
      for (const { box, r, inward } of all) {
        const inside = box.x >= bounds.l && box.y >= bounds.t && box.x + box.w <= bounds.r && box.y + box.h <= bounds.b;
        if (!inside || blocked.some((b) => overlaps(box, b, 10))) continue;
        const score = r + inward + 0.25 * Math.hypot(box.x + s.w / 2 - anchor.x, box.y + s.h / 2 - anchor.y);
        if (score < bestScore) {
          bestScore = score;
          best = box;
        }
      }
      if (!best) {
        // Nothing fits cleanly (very small screens): take the on-screen spot that overlaps the least.
        let fewest = Infinity;
        for (const { box } of all) {
          const b2 = { ...box };
          b2.x = Math.min(Math.max(b2.x, bounds.l), bounds.r - s.w);
          b2.y = Math.min(Math.max(b2.y, bounds.t), bounds.b - s.h);
          const hits = blocked.filter((b) => overlaps(b2, b, 4)).length;
          if (hits < fewest) {
            fewest = hits;
            best = b2;
          }
        }
      }
      if (!best) continue;
      blocked.push(best);
      placed.push({ x: best.x, y: best.y, delay: 0 });
      anchor = { x: best.x + best.w / 2, y: best.y + best.h / 2 };

      // Line: from the edge of the hovered card to the facing edge of the item.
      const Q = { x: best.x + best.w / 2, y: best.y + best.h / 2 };
      const vx = Q.x - P.x, vy = Q.y - P.y;
      const edge = (b: Box, dx: number, dy: number) =>
        Math.min(dx ? b.w / 2 / Math.abs(dx) : Infinity, dy ? b.h / 2 / Math.abs(dy) : Infinity);
      const ts = edge(card, vx, vy); // where the line leaves the card
      const te = edge(best, vx, vy); // where it meets the item
      nextLinks.push({ x1: P.x + vx * ts, y1: P.y + vy * ts, x2: Q.x - vx * te, y2: Q.y - vy * te, delay: 0 });
    }
    // Reveal order: clockwise around the card, starting from the side facing back toward the logo.
    const sweep = placed.map((b, n) => {
      const a = Math.atan2(b.y + sizes[n].h / 2 - P.y, b.x + sizes[n].w / 2 - P.x) - angle;
      return { n, a: Math.atan2(Math.sin(a), Math.cos(a)) }; // -PI..PI, increasing = clockwise on screen
    }).sort((x, y) => x.a - y.a);
    sweep.forEach(({ n }, step) => {
      placed[n].delay = step * 110;
      nextLinks[n].delay = step * 110;
    });
    setPills(placed);
    setLinks(nextLinks);
  }, [hot, pills]);

  return (
    <div className="orbit-wrap" ref={wrap} onPointerMove={tilt} onPointerLeave={reset} aria-hidden="true">
      <svg className="orbit-links">
        {links.map((l, n) => (
          <g key={n}>
            <line x1={l.x1} y1={l.y1} x2={l.x2} y2={l.y2} pathLength={1} style={{ animationDelay: `${l.delay}ms` }} />
          </g>
        ))}
      </svg>
      <div className={`orbit${hot !== null ? " has-hot" : ""}`} ref={orbit}>
        <span className="orbit-ring r1" />
        <span className="orbit-ring r2" />
        <span className="orbit-ring r3" />
        <span className="orbit-glow" />
        <div className="orbit-core" ref={core}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-mark.png" alt="" width={96} height={96} />
          <b>Karmahub<i>AI</i></b>
        </div>
        <div className="orbit-spin">
          {NODES.map(({ label, pos }) => (
            <span key={label} className={`orbit-line ${pos}`} />
          ))}
          {NODES.map(({ label, src, pos }, i) => (
            <div
              key={label}
              className={`orbit-pos ${pos}${hot === i ? " is-hot" : ""}`}
              onPointerEnter={(e) => enter(i, e)}
              onPointerLeave={leave}
            >
              <div className="orbit-node">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt="" height={40} />
                <span>{label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      {hot !== null && (
        <div className="orbit-pop" ref={pop}>
          {NODES[hot].items.map((t, n) => (
            <b
              key={t}
              className={pills?.[n] ? "on" : undefined}
              style={pills?.[n] ? { left: pills[n].x, top: pills[n].y, transitionDelay: `${pills[n].delay + 140}ms` } : undefined}
              onPointerEnter={keep}
              onPointerLeave={leave}
            >
              {t}
            </b>
          ))}
        </div>
      )}
    </div>
  );
}
