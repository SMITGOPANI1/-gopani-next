export default function S15_Pricing() {
  return (
    <>
    <section className="section" id="pricing">
      <div className="container">
        <div className="sec-head center">
          <div className="sec-num reveal">10 — Ways to work with us</div>
          <h2 className="sec-title reveal d1">Clear pricing. No surprises.</h2>
          <p className="sec-sub reveal d2">Pick what fits you. Final price depends on your exact needs.</p>
        </div>
        {/* NOTE: set your real starting prices */}
        <div className="price-grid">
          <div className="price reveal d1">
            <div className="ic">📦</div>
            <h3>Fixed Project</h3>
            <p className="desc">For one clear project like a website or an app.</p>
            <div className="from">Starting from</div>
            <div className="amount">₹49,999</div>
            <ul><li>Fixed price &amp; timeline</li><li>Design + development</li><li>Free 30-day support</li><li>You own the code</li></ul>
            <a href="#contact" className="btn btn-outline">Get a Quote</a>
          </div>
          <div className="price popular reveal d2">
            <span className="pop-tag">⭐ Most Popular</span>
            <div className="ic">📈</div>
            <h3>Monthly Growth</h3>
            <p className="desc">Ongoing SEO, ads and social media to grow every month.</p>
            <div className="from">Starting from</div>
            <div className="amount">₹24,999<small> / month</small></div>
            <ul><li>SEO + Google / Meta Ads</li><li>Social media management</li><li>Weekly reports + dashboard</li><li>No long lock-in</li></ul>
            <a href="#contact" className="btn btn-primary">Get a Quote <span className="arrow">→</span></a>
          </div>
          <div className="price reveal d3">
            <div className="ic">👥</div>
            <h3>Dedicated Team</h3>
            <p className="desc">Our developers work only on your product.</p>
            <div className="from">Starting from</div>
            <div className="amount">₹89,999<small> / month</small></div>
            <ul><li>Full-time developers</li><li>Daily updates</li><li>Scale up or down anytime</li><li>Project manager included</li></ul>
            <a href="#contact" className="btn btn-outline">Get a Quote</a>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
