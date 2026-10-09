import type { CSSProperties } from "react";

export default function S04_ClientLogos() {
  return (
    <>
    <section className="logos" aria-label="Clients">
      <p>Trusted by growing brands</p>
      <div className="marquee">
        <div className="marquee-track" id="marqueeTrack">
          {/* Replace these with your real client logos (img tags) */}
          <a href="#work" className="client-logo" style={{ "--c": "#5b4bff" } as CSSProperties}><i>◆</i>Nova Health</a>
          <a href="#work" className="client-logo" style={{ "--c": "#ff7a45" } as CSSProperties}><i>●</i>UrbanNest</a>
          <a href="#work" className="client-logo" style={{ "--c": "#18c48f" } as CSSProperties}><i>▲</i>ShopKart</a>
          <a href="#work" className="client-logo" style={{ "--c": "#b84bff" } as CSSProperties}><i>■</i>EduPrime</a>
          <a href="#work" className="client-logo" style={{ "--c": "#ffb400" } as CSSProperties}><i>✦</i>FinEdge</a>
          <a href="#work" className="client-logo" style={{ "--c": "#0ea5e9" } as CSSProperties}><i>◉</i>TravelBee</a>
          <a href="#work" className="client-logo" style={{ "--c": "#ef4444" } as CSSProperties}><i>❖</i>FreshMart</a>
          <a href="#work" className="client-logo" style={{ "--c": "#14b8a6" } as CSSProperties}><i>⬢</i>CloudLabs</a>
          {/* duplicate set for a seamless loop */}
          <a href="#work" aria-hidden="true" tabIndex={-1} className="client-logo" style={{ "--c": "#5b4bff" } as CSSProperties}><i>◆</i>Nova Health</a>
          <a href="#work" aria-hidden="true" tabIndex={-1} className="client-logo" style={{ "--c": "#ff7a45" } as CSSProperties}><i>●</i>UrbanNest</a>
          <a href="#work" aria-hidden="true" tabIndex={-1} className="client-logo" style={{ "--c": "#18c48f" } as CSSProperties}><i>▲</i>ShopKart</a>
          <a href="#work" aria-hidden="true" tabIndex={-1} className="client-logo" style={{ "--c": "#b84bff" } as CSSProperties}><i>■</i>EduPrime</a>
          <a href="#work" aria-hidden="true" tabIndex={-1} className="client-logo" style={{ "--c": "#ffb400" } as CSSProperties}><i>✦</i>FinEdge</a>
          <a href="#work" aria-hidden="true" tabIndex={-1} className="client-logo" style={{ "--c": "#0ea5e9" } as CSSProperties}><i>◉</i>TravelBee</a>
          <a href="#work" aria-hidden="true" tabIndex={-1} className="client-logo" style={{ "--c": "#ef4444" } as CSSProperties}><i>❖</i>FreshMart</a>
          <a href="#work" aria-hidden="true" tabIndex={-1} className="client-logo" style={{ "--c": "#14b8a6" } as CSSProperties}><i>⬢</i>CloudLabs</a>
        </div>
      </div>
    </section>
    </>
  );
}
