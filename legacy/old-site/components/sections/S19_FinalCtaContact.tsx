import type { CSSProperties } from "react";

export default function S19_FinalCtaContact() {
  return (
    <>
    <section className="final" id="contact">
      <div className="blob b1"></div>
      <div className="blob b2"></div>
      <div className="container">
        <div className="final-head">
          <div className="sec-num reveal" style={{ "justifyContent": "center" } as CSSProperties}>13 — Let&apos;s talk</div>
          <h2 className="split" data-split>
            <span className="ln"><span>Let&apos;s build something</span></span>
            <span className="ln"><span className="grad-text">that grows.</span></span>
          </h2>
          <p className="reveal d2">Tell us about your project. Free consultation. No pressure.</p>
        </div>

        <div className="contact-grid">
          <form className="form-card reveal left" id="contactForm" noValidate>
            <h3>Send us a message</h3>
            <div className="form-grid">
              <div className="field"><label htmlFor="cName">Your name *</label><input id="cName" name="name" type="text" placeholder="Rahul Sharma" required /><span className="err">Please enter your name</span></div>
              <div className="field"><label htmlFor="cPhone">Phone / WhatsApp *</label><input id="cPhone" name="phone" type="tel" placeholder="+91 98765 43210" required /><span className="err">Please enter a valid phone number</span></div>
              <div className="field full"><label htmlFor="cEmail">Email *</label><input id="cEmail" name="email" type="email" placeholder="you@company.com" required /><span className="err">Please enter a valid email</span></div>
              <div className="field full">
                <label>What do you need?</label>
                <div className="service-pills">
                  <label><input type="checkbox" name="service" value="Website" /><span>🌐 Website</span></label>
                  <label><input type="checkbox" name="service" value="App" /><span>📱 App</span></label>
                  <label><input type="checkbox" name="service" value="Software" /><span>⚙️ Software</span></label>
                  <label><input type="checkbox" name="service" value="SEO" /><span>🔍 SEO</span></label>
                  <label><input type="checkbox" name="service" value="Ads" /><span>🎯 Ads</span></label>
                  <label><input type="checkbox" name="service" value="Social Media" /><span>📣 Social</span></label>
                  <label><input type="checkbox" name="service" value="Branding" /><span>💎 Branding</span></label>
                </div>
              </div>
              <div className="field full">
                <label htmlFor="cBudget">Budget</label>
                <select id="cBudget" name="budget">
                  <option value="">Select a range</option>
                  <option>Under ₹50,000</option>
                  <option>₹50,000 – ₹1,50,000</option>
                  <option>₹1,50,000 – ₹5,00,000</option>
                  <option>₹5,00,000+</option>
                  <option>Not sure yet</option>
                </select>
              </div>
              <div className="field full"><label htmlFor="cMsg">Tell us about your project</label><textarea id="cMsg" name="message" placeholder="A few lines about your business and goals..."></textarea></div>
            </div>
            <div className="form-foot">
              <small>🔒 Your details are safe with us.</small>
              <button type="submit" className="btn btn-primary">Send Message <span className="arrow">→</span><span className="spinner"></span></button>
            </div>
          </form>

          <div className="side-cards">
            <div className="person-card reveal right">
              <div className="top">
                <div className="av">G</div>
                <div><b>Your Name</b><span>Founder, GOPANI</span></div>
              </div>
              <p style={{ "margin": "0 0 6px", "color": "#a3a3bb" } as CSSProperties}>Prefer to talk? Reach me directly:</p>
              <a href="#" data-phone className="contact-line"><i>📞</i><span data-phone-text>+91 XXXXX XXXXX</span></a>
              <a href="#" data-wa className="contact-line wa" target="_blank" rel="noopener"><i>💬</i>Chat on WhatsApp</a>
              <a href="#" data-email className="contact-line"><i>✉️</i><span data-email-text>hello@gopani.com</span></a>
            </div>
            <div className="promise reveal right d2"><span>⚡</span>We reply within 24 hours — usually much faster.</div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
