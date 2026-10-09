import type { CSSProperties } from "react";

export default function S07_CaseStudies() {
  return (
    <>
    <section className="section soft" id="work">
      <div className="container">
        <div className="sec-head">
          <div className="sec-num reveal">03 — Proof, not promises</div>
          <h2 className="sec-title reveal d1">Real work. Real numbers.</h2>
          <p className="sec-sub reveal d2">A few projects where we built, grew — or did both.</p>
        </div>

        {/* NOTE: sample results — replace with your real case studies */}
        <div className="cases">
          <article className="case reveal d1">
            <div className="case-img" style={{ "background": "linear-gradient(135deg,#5b4bff,#b84bff)" } as CSSProperties}>
              <div className="mini"><div className="bar w40"></div><div className="hero-blk" style={{ "background": "linear-gradient(90deg,#eceaff,#f6e9ff)" } as CSSProperties}></div><div className="row"><span></span><span></span><span></span></div></div>
            </div>
            <div className="case-body">
              <div className="case-top"><span className="case-client">ShopKart</span><span className="tag both">E-commerce · Build + Grow</span></div>
              <div className="case-results"><div><b>+240%</b><small>organic traffic</small></div><div><b>3.2x</b><small>return on ad spend</small></div></div>
              <p>New Shopify store + SEO + Meta ads. Sales tripled in 6 months.</p>
              <a href="#contact" className="link-arrow">Read case study <span>→</span></a>
            </div>
          </article>

          <article className="case reveal d2">
            <div className="case-img" style={{ "background": "linear-gradient(135deg,#18c48f,#0ea5e9)" } as CSSProperties}>
              <div className="mini"><div className="bar w60"></div><div className="bar w40"></div><div className="hero-blk" style={{ "background": "linear-gradient(90deg,#e6fbf4,#e0f2fe)" } as CSSProperties}></div><div className="row"><span></span><span></span><span></span></div></div>
            </div>
            <div className="case-body">
              <div className="case-top"><span className="case-client">Nova Health</span><span className="tag it">Healthcare · App</span></div>
              <div className="case-results"><div><b>12K+</b><small>app downloads</small></div><div><b>4.8★</b><small>Play Store rating</small></div></div>
              <p>Patient booking app with reminders and online payments.</p>
              <a href="#contact" className="link-arrow">Read case study <span>→</span></a>
            </div>
          </article>

          <article className="case reveal d1">
            <div className="case-img" style={{ "background": "linear-gradient(135deg,#ff7a45,#ffb400)" } as CSSProperties}>
              <div className="mini"><div className="hero-blk" style={{ "background": "linear-gradient(90deg,#fff1ea,#fff7e0)" } as CSSProperties}></div><div className="bar w60"></div><div className="row"><span></span><span></span><span></span></div></div>
            </div>
            <div className="case-body">
              <div className="case-top"><span className="case-client">UrbanNest</span><span className="tag mk">Real Estate · Ads</span></div>
              <div className="case-results"><div><b>-58%</b><small>cost per lead</small></div><div><b>900+</b><small>leads / month</small></div></div>
              <p>Google + Meta lead campaigns with WhatsApp auto follow-up.</p>
              <a href="#contact" className="link-arrow">Read case study <span>→</span></a>
            </div>
          </article>

          <article className="case reveal d2">
            <div className="case-img" style={{ "background": "linear-gradient(135deg,#0e0e1a,#3b2fb8)" } as CSSProperties}>
              <div className="mini"><div className="bar w40"></div><div className="row"><span></span><span></span><span></span></div><div className="hero-blk" style={{ "background": "#f2f2f8" } as CSSProperties}></div></div>
            </div>
            <div className="case-body">
              <div className="case-top"><span className="case-client">EduPrime</span><span className="tag both">Education · Build + Grow</span></div>
              <div className="case-results"><div><b>2.4x</b><small>admissions enquiries</small></div><div><b>#1</b><small>on Google in city</small></div></div>
              <p>New website, student portal and local SEO for 3 campuses.</p>
              <a href="#contact" className="link-arrow">Read case study <span>→</span></a>
            </div>
          </article>
        </div>
        <div className="center-btn reveal"><a href="#contact" className="btn btn-outline">View all work →</a></div>
      </div>
    </section>
    </>
  );
}
