import type { CSSProperties } from "react";

export default function S13_TechStack() {
  return (
    <>
    <section className="section">
      <div className="container">
        <div className="sec-head">
          <div className="sec-num reveal">08 — Our toolbox</div>
          <h2 className="sec-title reveal d1">Modern tools. Trusted tech.</h2>
        </div>
        <div className="stack-groups">
          <div className="stack-group reveal d1">
            <h5>Website &amp; App</h5>
            <div className="chips">
              <span className="chip" style={{ "--c": "#61dafb" } as CSSProperties}><i></i>React</span>
              <span className="chip" style={{ "--c": "#000" } as CSSProperties}><i></i>Next.js</span>
              <span className="chip" style={{ "--c": "#68a063" } as CSSProperties}><i></i>Node.js</span>
              <span className="chip" style={{ "--c": "#02569b" } as CSSProperties}><i></i>Flutter</span>
              <span className="chip" style={{ "--c": "#21759b" } as CSSProperties}><i></i>WordPress</span>
              <span className="chip" style={{ "--c": "#96bf48" } as CSSProperties}><i></i>Shopify</span>
              <span className="chip" style={{ "--c": "#3776ab" } as CSSProperties}><i></i>Python</span>
              <span className="chip" style={{ "--c": "#ff2d20" } as CSSProperties}><i></i>Laravel</span>
            </div>
          </div>
          <div className="stack-group reveal d2">
            <h5>Cloud</h5>
            <div className="chips">
              <span className="chip" style={{ "--c": "#ff9900" } as CSSProperties}><i></i>AWS</span>
              <span className="chip" style={{ "--c": "#4285f4" } as CSSProperties}><i></i>Google Cloud</span>
              <span className="chip" style={{ "--c": "#000" } as CSSProperties}><i></i>Vercel</span>
              <span className="chip" style={{ "--c": "#2496ed" } as CSSProperties}><i></i>Docker</span>
            </div>
          </div>
          <div className="stack-group reveal d3">
            <h5>Marketing</h5>
            <div className="chips">
              <span className="chip" style={{ "--c": "#4285f4" } as CSSProperties}><i></i>Google Ads</span>
              <span className="chip" style={{ "--c": "#0866ff" } as CSSProperties}><i></i>Meta Ads</span>
              <span className="chip" style={{ "--c": "#e37400" } as CSSProperties}><i></i>Google Analytics 4</span>
              <span className="chip" style={{ "--c": "#34a853" } as CSSProperties}><i></i>Search Console</span>
              <span className="chip" style={{ "--c": "#ff7a59" } as CSSProperties}><i></i>HubSpot</span>
              <span className="chip" style={{ "--c": "#ff642d" } as CSSProperties}><i></i>SEMrush</span>
              <span className="chip" style={{ "--c": "#25d366" } as CSSProperties}><i></i>WhatsApp API</span>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
