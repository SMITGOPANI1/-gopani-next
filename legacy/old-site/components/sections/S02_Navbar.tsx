export default function S02_Navbar() {
  return (
    <>
  <header className="nav" id="nav">
    <div className="container nav-inner">
      <a href="#top" className="logo" aria-label="GOPANI home"><span className="logo-mark">G</span>GOPANI<span className="dot">.</span></a>

      <nav aria-label="Main">
        <ul className="nav-links">
          <li className="has-mega">
            <button aria-haspopup="true">Services <span className="chev">▼</span></button>
            <div className="mega">
              <div>
                <h5>🛠️ Build — IT Services</h5>
                <a href="#services" data-tab="build"><i>🌐</i>Website Development</a>
                <a href="#services" data-tab="build"><i>📱</i>Mobile Apps</a>
                <a href="#services" data-tab="build"><i>⚙️</i>Custom Software</a>
                <a href="#services" data-tab="build"><i>🎨</i>UI/UX Design</a>
                <a href="#services" data-tab="build"><i>🤖</i>AI Integration</a>
              </div>
              <div>
                <h5>📈 Grow — Digital Marketing</h5>
                <a href="#services" data-tab="grow"><i>🔍</i>SEO</a>
                <a href="#services" data-tab="grow"><i>🎯</i>Google &amp; Meta Ads</a>
                <a href="#services" data-tab="grow"><i>📣</i>Social Media</a>
                <a href="#services" data-tab="grow"><i>✍️</i>Content Writing</a>
                <a href="#services" data-tab="grow"><i>💎</i>Branding</a>
              </div>
            </div>
          </li>
          <li><a href="#work">Work</a></li>
          <li><a href="#industries">Industries</a></li>
          <li><a href="#process">Process</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#insights">Insights</a></li>
        </ul>
      </nav>

      <div className="nav-cta">
        <a href="#contact" className="btn btn-outline btn-sm">Contact</a>
        <a href="#contact" className="btn btn-primary btn-sm">Book a Free Call <span className="arrow">→</span></a>
        <button className="burger" id="burger" aria-label="Open menu"><span></span><span></span><span></span></button>
      </div>
    </div>
  </header>

  {/* Mobile menu */}
  <div className="mobile-menu" id="mobileMenu">
    <a href="#services">Services</a>
    <a href="#work">Our Work</a>
    <a href="#industries">Industries</a>
    <a href="#process">Process</a>
    <a href="#pricing">Pricing</a>
    <a href="#insights">Insights</a>
    <a href="#faq">FAQ</a>
    <a href="#contact" className="btn btn-primary">Book a Free Call →</a>
  </div>
    </>
  );
}
