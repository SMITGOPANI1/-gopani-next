"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import Logo from "./Logo";
import { BUILD, GROW, GROUPS } from "@/config/services";
import { ServiceLink } from "./ServiceModal";
import { Ico, ArrowRight } from "./icons";

const LINKS = [
  { href: "/#process", label: "How we work" },
  { href: "/#why-us", label: "Why us" },
  { href: "/#faq", label: "FAQ" },
];

export default function Header() {
  const [open, setOpen] = useState(false); // mobile menu
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
            <ul className="nav-links">
              <li><Link href="/#top">Home</Link></li>
              <li
                ref={megaRef}
                className={mega ? "open" : ""}
                onMouseEnter={openMega}
                onMouseLeave={closeMegaSoon}
                onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node | null)) setMega(false); }}
              >
                <button className="nav-btn" aria-haspopup="true" aria-expanded={mega} onClick={openMega}>
                  Services <ChevronDown size={16} />
                </button>
                <div className="mega" role="menu">
                  <div className="mega-col">
                    <span className="m m-blue">{GROUPS.build.label} · {GROUPS.build.kicker}</span>
                    {BUILD.map((s) => (
                      <ServiceLink key={s.id} id={s.id} className="mega-item" role="menuitem" onPick={closeAll}>
                        <i><Ico name={s.icon} size={18} /></i>
                        <span>{s.title}</span>
                      </ServiceLink>
                    ))}
                  </div>
                  <div className="mega-col">
                    <span className="m m-orange">{GROUPS.grow.label} · {GROUPS.grow.kicker}</span>
                    {GROW.map((s) => (
                      <ServiceLink key={s.id} id={s.id} className="mega-item" role="menuitem" onPick={closeAll}>
                        <i><Ico name={s.icon} size={18} /></i>
                        <span>{s.title}</span>
                      </ServiceLink>
                    ))}
                  </div>
                  <div className="mega-foot">
                    <span>Not sure what you need? We&apos;ll tell you on a free call.</span>
                    <Link href="/#contact" className="link-arrow" onClick={closeAll}>Book a Free Call <ArrowRight size={16} /></Link>
                  </div>
                </div>
              </li>
              {LINKS.map((l) => (
                <li key={l.href}><Link href={l.href}>{l.label}</Link></li>
              ))}
            </ul>
          </nav>

          <div className="hdr-cta">
            <Link href="/#contact" className="btn btn-ink btn-sm">Book a Free Call <ArrowRight size={16} /></Link>
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
            {BUILD.map((s) => <ServiceLink key={s.id} id={s.id} onPick={closeAll}>{s.title}</ServiceLink>)}
            <span className="m m-orange">{GROUPS.grow.label} · {GROUPS.grow.kicker}</span>
            {GROW.map((s) => <ServiceLink key={s.id} id={s.id} onPick={closeAll}>{s.title}</ServiceLink>)}
          </div>
        </details>
        {LINKS.map((l) => (
          <Link key={l.href} href={l.href} onClick={closeAll}>{l.label}</Link>
        ))}
        <Link href="/#contact" className="btn btn-blue" onClick={closeAll}>Book a Free Call <ArrowRight size={16} /></Link>
      </nav>
    </>
  );
}
