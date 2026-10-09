import type { CSSProperties } from "react";

export default function S16_LeadMagnet() {
  return (
    <>
    <section className="section" id="audit" style={{ "paddingTop": "0" } as CSSProperties}>
      <div className="container">
        <div className="magnet reveal zoom">
          <div>
            <h2>Is your website losing customers?</h2>
            <p>Get a <strong>free audit</strong> of your website&apos;s speed, SEO and design — delivered within 48 hours.</p>
            <ul><li>⚡ Speed check</li><li>🔍 SEO score</li><li>🎨 Design tips</li><li>📋 Action plan</li></ul>
          </div>
          <form className="magnet-form" id="auditForm" noValidate>
            <label htmlFor="auditSite">Your website</label>
            <input type="text" id="auditSite" name="website" placeholder="www.yourbusiness.com" required />
            <label htmlFor="auditEmail">Your email</label>
            <input type="email" id="auditEmail" name="email" placeholder="you@company.com" required />
            <button type="submit" className="btn">Get My Free Audit <span className="arrow">→</span><span className="spinner"></span></button>
            <small>🔒 No spam. We only send your report.</small>
          </form>
        </div>
      </div>
    </section>
    </>
  );
}
