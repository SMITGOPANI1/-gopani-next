import type { CSSProperties } from "react";

export default function S12_Testimonials() {
  return (
    <>
    <section className="section soft">
      <div className="container">
        <div className="sec-head center">
          <div className="sec-num reveal">07 — Client love</div>
          <h2 className="sec-title reveal d1">Don&apos;t take our word for it.</h2>
        </div>

        {/* NOTE: sample reviews — replace with real client reviews (with permission) */}
        <div className="testi-wrap">
          <div className="video-card reveal left" id="videoCard" role="button" tabIndex={0} aria-label="Play video testimonial">
            <span className="video-badge">▶ Video review · 1:24</span>
            <div className="play">▶</div>
            <blockquote>“They handled our website and ads together. Leads doubled in 3 months.”</blockquote>
            <div className="who">Rahul S. — Founder, Nova Health</div>
          </div>

          <div className="slider reveal right" id="slider">
            <div className="slides">
              <div className="slide active">
                <div className="q">“</div>
                <p>Our old website gave zero enquiries. GOPANI rebuilt it and ran Google Ads — now we get 30+ calls every week.</p>
                <div className="person"><div className="av" style={{ "background": "#5b4bff" } as CSSProperties}>PM</div><div><b>Priya Mehta</b><small>Director, UrbanNest Realty</small></div></div>
              </div>
              <div className="slide">
                <div className="q">“</div>
                <p>The weekly report is my favourite part. I always know exactly where my money is going and what it brings back.</p>
                <div className="person"><div className="av" style={{ "background": "#ff7a45" } as CSSProperties}>AK</div><div><b>Arjun Kapoor</b><small>Owner, ShopKart</small></div></div>
              </div>
              <div className="slide">
                <div className="q">“</div>
                <p>They built our app on time and on budget. One project manager, always on WhatsApp — super easy to work with.</p>
                <div className="person"><div className="av" style={{ "background": "#18c48f" } as CSSProperties}>NJ</div><div><b>Neha Joshi</b><small>COO, EduPrime</small></div></div>
              </div>
              <div className="slide">
                <div className="q">“</div>
                <p>We tried 3 agencies before. GOPANI is the first one that actually cared about our sales, not just likes.</p>
                <div className="person"><div className="av" style={{ "background": "#b84bff" } as CSSProperties}>VS</div><div><b>Vikram Shah</b><small>Founder, FreshMart</small></div></div>
              </div>
            </div>
            <div className="slider-nav">
              <div className="dots" id="dots"></div>
              <div className="arrows"><button id="prev" aria-label="Previous review">←</button><button id="next" aria-label="Next review">→</button></div>
            </div>
          </div>
        </div>

        <div className="review-links reveal">
          <a href="#">⭐ 4.9 on Google Reviews</a>
          <a href="#">🏆 Rated on Clutch</a>
          <a href="#">💼 GoodFirms</a>
        </div>
      </div>
    </section>
    </>
  );
}
