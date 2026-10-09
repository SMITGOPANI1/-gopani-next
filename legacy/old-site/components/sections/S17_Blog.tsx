import type { CSSProperties } from "react";

export default function S17_Blog() {
  return (
    <>
    <section className="section soft" id="insights">
      <div className="container">
        <div className="blog-head">
          <div className="sec-head">
            <div className="sec-num reveal">11 — Insights</div>
            <h2 className="sec-title reveal d1">Learn what works.</h2>
          </div>
          <a href="#" className="btn btn-outline reveal">Read all articles →</a>
        </div>
        <div className="blog-grid">
          <a href="#" className="post reveal d1">
            <div className="post-thumb" style={{ "background": "linear-gradient(135deg,#eceaff,#f6e9ff)" } as CSSProperties}><span>💰</span></div>
            <div className="post-body">
              <div className="post-meta"><span className="tag it">Development</span><span>5 min read</span></div>
              <h3>How much does a website cost in India in 2026?</h3>
              <span className="link-arrow">Read article <span>→</span></span>
            </div>
          </a>
          <a href="#" className="post reveal d2">
            <div className="post-thumb" style={{ "background": "linear-gradient(135deg,#fff1ea,#fff7e0)" } as CSSProperties}><span>🥊</span></div>
            <div className="post-body">
              <div className="post-meta"><span className="tag mk">Marketing</span><span>7 min read</span></div>
              <h3>SEO vs Google Ads: which one should a small business choose?</h3>
              <span className="link-arrow">Read article <span>→</span></span>
            </div>
          </a>
          <a href="#" className="post reveal d3">
            <div className="post-thumb" style={{ "background": "linear-gradient(135deg,#e6fbf4,#e0f2fe)" } as CSSProperties}><span>🚨</span></div>
            <div className="post-body">
              <div className="post-meta"><span className="tag both">Growth</span><span>4 min read</span></div>
              <h3>5 signs your website is losing you customers</h3>
              <span className="link-arrow">Read article <span>→</span></span>
            </div>
          </a>
        </div>
      </div>
    </section>
    </>
  );
}
