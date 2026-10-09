export default function S20_Footer() {
  return (
    <>
  <footer className="footer">
    <div className="container">
      <div className="foot-top">
        <div className="foot-brand">
          <a href="#top" className="logo"><span className="logo-mark">G</span>GOPANI<span className="dot">.</span></a>
          <p>We build and grow digital businesses — websites, apps, software and marketing under one roof.</p>
          <form className="news" id="newsForm" noValidate>
            <input type="email" placeholder="Your email" aria-label="Email htmlFor newsletter" required />
            <button type="submit">Subscribe</button>
          </form>
          <div className="socials">
            <a href="#" aria-label="LinkedIn">in</a>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="YouTube">▶</a>
            <a href="#" aria-label="X">𝕏</a>
          </div>
        </div>
        <div className="foot-col">
          <h5>IT Services</h5>
          <ul><li><a href="#services" data-tab="build">Web Development</a></li><li><a href="#services" data-tab="build">App Development</a></li><li><a href="#services" data-tab="build">Custom Software</a></li><li><a href="#services" data-tab="build">UI/UX Design</a></li><li><a href="#services" data-tab="build">AI Integration</a></li></ul>
        </div>
        <div className="foot-col">
          <h5>Marketing</h5>
          <ul><li><a href="#services" data-tab="grow">SEO</a></li><li><a href="#services" data-tab="grow">Google Ads</a></li><li><a href="#services" data-tab="grow">Social Media</a></li><li><a href="#services" data-tab="grow">Branding</a></li><li><a href="#services" data-tab="grow">Content</a></li></ul>
        </div>
        <div className="foot-col">
          <h5>Company</h5>
          <ul><li><a href="#why-us">About Us</a></li><li><a href="#work">Our Work</a></li><li><a href="#">Careers</a></li><li><a href="#insights">Blog</a></li><li><a href="#faq">FAQ</a></li></ul>
        </div>
        <div className="foot-col">
          <h5>Contact</h5>
          <ul>
            <li>📍 Your office address,<br />City, Gujarat, India</li>
            <li><a href="#" data-phone>📞 <span data-phone-text>+91 XXXXX XXXXX</span></a></li>
            <li><a href="#" data-email>✉️ <span data-email-text>hello@gopani.com</span></a></li>
            <li><a href="#" data-wa target="_blank" rel="noopener">💬 WhatsApp</a></li>
          </ul>
        </div>
      </div>
      <div className="foot-legal">
        <div>
          © <span id="year">2026</span> GOPANI LLP. All rights reserved.
          <div className="reg">LLPIN: XXX-XXXX · GSTIN: XXXXXXXXXXXXXXX</div>
        </div>
        <div className="links"><a href="/privacy">Privacy Policy</a><a href="/privacy#terms">Terms &amp; Conditions</a><a href="/privacy#cookies">Cookie Policy</a></div>
      </div>
      <div className="big-word">GOPANI</div>
    </div>
  </footer>
    </>
  );
}
