import type { CSSProperties } from "react";

export default function S03_Hero() {
  return (
    <>
    <section className="hero">
      <div className="hero-bg">
        <div className="grid-lines"></div>
        <div className="blob b1"></div>
        <div className="blob b2"></div>
        <div className="blob b3"></div>
      </div>

      <div className="container hero-inner">
        <div>
          <div className="pill reveal"><span className="live-dot"></span> Taking new projects for this month <b>Open</b></div>

          <h1 className="split" data-split>
            <span className="ln"><span>We build &amp; grow</span></span>
            <span className="ln"><span><span className="rotator" id="rotator"><span className="word grad-text">businesses.</span></span></span></span>
          </h1>

          <p className="hero-sub reveal d2">Websites, apps and software — plus SEO and ads that bring you <strong>real customers</strong>. One team. One plan. Real results.</p>

          <div className="hero-btns reveal d3">
            <a href="#contact" className="btn btn-primary magnetic">Book a Free Call <span className="arrow">→</span></a>
            <a href="#work" className="btn btn-outline magnetic">See Our Work</a>
          </div>

          <div className="proof reveal d4">
            <div className="avatars">
              <span style={{ "background": "#5b4bff" } as CSSProperties}>RS</span>
              <span style={{ "background": "#ff7a45" } as CSSProperties}>PM</span>
              <span style={{ "background": "#18c48f" } as CSSProperties}>AK</span>
              <span style={{ "background": "#b84bff" } as CSSProperties}>NJ</span>
            </div>
            <div className="proof-text">
              <span className="stars">★★★★★</span> <strong>4.9/5</strong><br />
              from 80+ happy clients · 150+ projects
            </div>
          </div>
        </div>

        <div className="hero-visual reveal right d2" id="heroVisual">
          <div className="mock-wrap" id="mockWrap">
            <div className="laptop">
              <div className="laptop-bar"><i></i><i></i><i></i><div className="url">yourbusiness.com/dashboard</div></div>
              <div className="screen">
                <div className="kpi"><small>Visitors</small><b>48.2K</b> <em>▲ 64%</em></div>
                <div className="kpi"><small>Leads</small><b>1,284</b> <em>▲ 2.1x</em></div>
                <div className="kpi"><small>ROAS</small><b>3.2x</b> <em>▲ 41%</em></div>
                <div className="chart">
                  <span style={{ "--h": "30%" } as CSSProperties}></span><span style={{ "--h": "42%" } as CSSProperties}></span><span style={{ "--h": "38%" } as CSSProperties}></span>
                  <span style={{ "--h": "55%" } as CSSProperties}></span><span style={{ "--h": "50%" } as CSSProperties}></span><span style={{ "--h": "68%" } as CSSProperties}></span>
                  <span style={{ "--h": "62%" } as CSSProperties}></span><span style={{ "--h": "80%" } as CSSProperties}></span><span style={{ "--h": "74%" } as CSSProperties}></span>
                  <span style={{ "--h": "92%" } as CSSProperties}></span>
                </div>
              </div>
            </div>
            <div className="phone">
              <div className="phone-screen">
                <h6>New leads today</h6>
                <div className="big" data-count="47">0</div>
                <div className="phone-card"><span>📩 Website form</span><b>+18</b></div>
                <div className="phone-card"><span>💬 WhatsApp</span><b>+21</b></div>
                <div className="phone-card"><span>📞 Calls</span><b>+8</b></div>
              </div>
            </div>
          </div>
          <div className="float-card fc1"><div className="ic">📈</div><div>+240% traffic<small>SEO · 6 months</small></div></div>
          <div className="float-card fc2"><div className="ic">🚀</div><div>App launched<small>4.8★ on Play Store</small></div></div>
        </div>
      </div>
    </section>
    </>
  );
}
