export default function S06_Services() {
  return (
    <>
    <section className="section" id="services">
      <div className="container">
        <div className="sec-head">
          <div className="sec-num reveal">02 — What we do</div>
          <h2 className="sec-title reveal d1">We <span className="grad-text">build</span> it. Then we <span className="grad-text">grow</span> it.</h2>
          <p className="sec-sub reveal d2">Everything your business needs online — under one roof.</p>
        </div>

        <div className="tabs reveal d2" role="tablist">
          <div className="tab-ind" id="tabInd"></div>
          <button className="tab active" role="tab" data-target="build" aria-selected="true">🛠️ Build · IT Services</button>
          <button className="tab" role="tab" data-target="grow" aria-selected="false">📈 Grow · Marketing</button>
        </div>

        <div className="tab-panel active" id="panel-build" role="tabpanel">
          <article className="svc featured"><div className="svc-icon">🌐</div><h3>Website Development</h3><p>Fast, beautiful websites that turn visitors into customers.</p><a href="#contact" className="link-arrow">Learn more <span>→</span></a></article>
          <article className="svc"><div className="svc-icon">📱</div><h3>Mobile Apps</h3><p>Android &amp; iOS apps your customers will love to use every day.</p><a href="#contact" className="link-arrow">Learn more <span>→</span></a></article>
          <article className="svc"><div className="svc-icon">⚙️</div><h3>Custom Software</h3><p>CRMs, dashboards and tools built exactly for how you work.</p><a href="#contact" className="link-arrow">Learn more <span>→</span></a></article>
          <article className="svc"><div className="svc-icon">🎨</div><h3>UI/UX Design</h3><p>Clean, simple designs that are easy and pleasant to use.</p><a href="#contact" className="link-arrow">Learn more <span>→</span></a></article>
          <article className="svc"><div className="svc-icon">☁️</div><h3>Cloud &amp; DevOps</h3><p>Secure, fast hosting that never goes down when you grow.</p><a href="#contact" className="link-arrow">Learn more <span>→</span></a></article>
          <article className="svc"><div className="svc-icon">🤖</div><h3>AI Integration</h3><p>Chatbots and automation that save your team hours every week.</p><a href="#contact" className="link-arrow">Learn more <span>→</span></a></article>
        </div>

        <div className="tab-panel" id="panel-grow" role="tabpanel">
          <article className="svc featured"><div className="svc-icon">🔍</div><h3>SEO</h3><p>Get found on Google by people already looking for you.</p><a href="#contact" className="link-arrow">Learn more <span>→</span></a></article>
          <article className="svc"><div className="svc-icon">🎯</div><h3>Google &amp; Meta Ads</h3><p>Ads that bring sales and leads — with every rupee tracked.</p><a href="#contact" className="link-arrow">Learn more <span>→</span></a></article>
          <article className="svc"><div className="svc-icon">📣</div><h3>Social Media</h3><p>Posts, reels and campaigns that build a loyal audience.</p><a href="#contact" className="link-arrow">Learn more <span>→</span></a></article>
          <article className="svc"><div className="svc-icon">✍️</div><h3>Content Writing</h3><p>Blogs and website copy that rank on Google and sell.</p><a href="#contact" className="link-arrow">Learn more <span>→</span></a></article>
          <article className="svc"><div className="svc-icon">💎</div><h3>Branding</h3><p>Logo, colors and voice that make you look premium.</p><a href="#contact" className="link-arrow">Learn more <span>→</span></a></article>
          <article className="svc"><div className="svc-icon">📧</div><h3>Email &amp; WhatsApp</h3><p>Automatic follow-ups that turn leads into paying clients.</p><a href="#contact" className="link-arrow">Learn more <span>→</span></a></article>
        </div>
      </div>
    </section>
    </>
  );
}
