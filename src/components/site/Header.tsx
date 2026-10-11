"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";
import Logo from "./Logo";
import { BUILD, GROW, GROUPS } from "@/config/services";
import { ServiceLink } from "./ServiceModal";
import { CallArrow } from "./icons";

const LINKS = [
  { href: "/#process", label: "How we work", id: "process" },
  { href: "/#why-us", label: "Why us", id: "why-us" },
  { href: "/#faq", label: "FAQ", id: "faq" },
];

// Homepage sections that have a nav item, in page order ("top" is the hero → Home)
const SPY = ["top", "services", "process", "why-us", "faq"];

/** Which nav item to underline: on the homepage, the section under the header; on service pages, Services. */
function useActiveNav() {
  const pathname = usePathname();
  const [active, setActive] = useState<string | null>(null);
  useEffect(() => {
    if (pathname !== "/") {
      setActive(pathname.startsWith("/services") ? "services" : null); // eslint-disable-line react-hooks/set-state-in-effect -- derived from the route
      return;
    }
    const update = () => {
      const probe = (document.getElementById("site-header")?.offsetHeight ?? 0) + window.innerHeight * 0.3;
      let next: string | null = null;
      for (const id of SPY) {
        const r = document.getElementById(id)?.getBoundingClientRect();
        if (!r) continue;
        if (r.top <= probe && r.bottom > probe) next = id;
      }
      // Between the hero and Services (problem/solution etc.) still counts as Home
      const services = document.getElementById("services")?.getBoundingClientRect();
      if (!next && services && services.top > probe) next = "top";
      setActive(next);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, [pathname]);
  return active;
}

export default function Header() {
  const active = useActiveNav();
  const pathname = usePathname();
  const navRef = useRef<HTMLUListElement>(null);
  type PillBox = { left: number; width: number; top: number; height: number };
  const [pill, setPill] = useState<{ box: PillBox | null; shown: boolean; jump: boolean }>({ box: null, shown: false, jump: false });
  const [open, setOpen] = useState(false); // mobile menu

  // One highlight pill slides between nav items as the active section changes (instead of each
  // item lighting up on its own). Measured against the <ul>, re-measured on resize and font load.
  useLayoutEffect(() => {
    const ul = navRef.current;
    if (!ul) return;
    let raf = 0;
    const measure = () => {
      const el = ul.querySelector<HTMLElement>(".active");
      if (!el) {
        // Nothing active (e.g. between sections): fade out where it is, don't slide away
        setPill((p) => ({ ...p, shown: false }));
        return;
      }
      const u = ul.getBoundingClientRect(), r = el.getBoundingClientRect();
      const box = { left: r.left - u.left, width: r.width, top: r.top - u.top, height: r.height };
      setPill((p) => {
        // Coming back from hidden: appear in place (no slide from the old spot), then animate again
        if (!p.shown) {
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(() => setPill((q) => ({ ...q, jump: false })));
          return { box, shown: true, jump: true };
        }
        return { ...p, box };
      });
    };
    measure();
    window.addEventListener("resize", measure);
    document.fonts?.ready.then(measure).catch(() => {});
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", measure); };
  }, [active]);
  const [mega, setMega] = useState(false); // services dropdown (click / touch)
  const megaRef = useRef<HTMLLIElement>(null);
  const closeTimer = useRef<number | undefined>(undefined);

  // Hover opens the services menu; leaving closes it after a short grace period,
  // so moving the pointer from the button down into the panel never closes it.
  const openMega = () => { window.clearTimeout(closeTimer.current); setMega(true); };
  const closeMegaSoon = () => {
    window.clearTimeout(closeTimer.current);
    closeTimer.current = window.setTimeout(() => setMega(false), 180);
  };
  useEffect(() => () => window.clearTimeout(closeTimer.current), []);

  useEffect(() => {
    document.body.classList.toggle("no-scroll", open);
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(false); setMega(false); }
    };
    const onClick = (e: MouseEvent) => {
      if (megaRef.current && !megaRef.current.contains(e.target as Node)) setMega(false);
    };
    window.addEventListener("keydown", onKey);
    document.addEventListener("click", onClick);
    return () => {
      document.body.classList.remove("no-scroll");
      window.removeEventListener("keydown", onKey);
      document.removeEventListener("click", onClick);
    };
  }, [open]);

  const closeAll = () => { setOpen(false); setMega(false); };

  return (
    <>
      <header className="hdr" id="site-header">
        <div className="wrap hdr-in">
          <Logo />

          <nav aria-label="Primary">
            <ul className="nav-links" ref={navRef}>
              <li className={`nav-pill${pill.shown ? " show" : ""}${pill.jump ? " jump" : ""}`} aria-hidden="true" style={pill.box ?? undefined} />
              <li><Link href="/#top" className={active === "top" ? "active" : undefined}>Home</Link></li>
              <li
                ref={megaRef}
                className={mega ? "open" : ""}
                onMouseEnter={openMega}
                onMouseLeave={closeMegaSoon}
                onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setMega(false); }}
              >
                <Link href="/#services" className={`nav-btn${active === "services" ? " active" : ""}`} aria-haspopup="true" aria-expanded={mega} onClick={closeAll}>
                  Services <ChevronDown size={16} />
                </Link>
                <div className="mega" role="menu">
                  <div className="mega-col">
                    <span className="m m-blue">{GROUPS.build.label} · {GROUPS.build.kicker}</span>
                    {BUILD.map((s) => (
                      <ServiceLink key={s.id} id={s.id} className="mega-item" aria-current={pathname === `/services/${s.id}` ? "page" : undefined} role="menuitem" onPick={closeAll}>
                        <span>{s.title}</span>
                      </ServiceLink>
                    ))}
                  </div>
                  <div className="mega-col">
                    <span className="m m-orange">{GROUPS.grow.label} · {GROUPS.grow.kicker}</span>
                    {GROW.map((s) => (
                      <ServiceLink key={s.id} id={s.id} className="mega-item" aria-current={pathname === `/services/${s.id}` ? "page" : undefined} role="menuitem" onPick={closeAll}>
                        <span>{s.title}</span>
                      </ServiceLink>
                    ))}
                  </div>
                  <div className="mega-foot">
                    <span>Not sure what you need? Message us and we&apos;ll point you the right way.</span>
                    <Link href="/#contact" className="link-arrow" onClick={closeAll}>Start Your Project <CallArrow /></Link>
                  </div>
                </div>
              </li>
              {LINKS.map((l) => (
                <li key={l.href}><Link href={l.href} className={active === l.id ? "active" : undefined}>{l.label}</Link></li>
              ))}
            </ul>
          </nav>

          <div className="hdr-cta">
            <Link href="/#contact" className="btn btn-ink btn-sm">Start Your Project <CallArrow /></Link>
            <button
              className="burger"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
              onClick={() => setOpen((v) => !v)}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      <nav id="mobile-nav" aria-label="Mobile" className={`mnav${open ? " open" : ""}`}>
        <Link href="/#top" onClick={closeAll}>Home</Link>
        <details>
          <summary>Services</summary>
          <div className="mnav-sub">
            <span className="m m-blue">{GROUPS.build.label} · {GROUPS.build.kicker}</span>
            {BUILD.map((s) => <ServiceLink key={s.id} id={s.id} aria-current={pathname === `/services/${s.id}` ? "page" : undefined} onPick={closeAll}>{s.title}</ServiceLink>)}
            <span className="m m-orange">{GROUPS.grow.label} · {GROUPS.grow.kicker}</span>
            {GROW.map((s) => <ServiceLink key={s.id} id={s.id} aria-current={pathname === `/services/${s.id}` ? "page" : undefined} onPick={closeAll}>{s.title}</ServiceLink>)}
          </div>
        </details>
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} onClick={closeAll}>{l.label}</Link>
        ))}
        <Link href="/#contact" className="btn btn-blue" onClick={closeAll}>Start Your Project <CallArrow /></Link>
      </nav>
    </>
  );
}
