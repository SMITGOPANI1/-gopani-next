import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Calendar, Cookie, FileText, Mail, ShieldCheck } from "lucide-react";
import { CONFIG } from "@/config/site";

export const metadata: Metadata = { title: "Privacy, Terms & Cookies | KarmaHubAI" };

export default function Privacy() {
  return (
    <div className="legal-page">
      {/* NOTE: This is a simple starter text. Ask a lawyer to review it before going live. */}
      <header className="legal-hero">
        <div className="wrap">
          <p className="m">Legal</p>
          <h1>Privacy, terms &amp; cookies</h1>
          <p className="legal-intro">
            {CONFIG.legalName} (&quot;we&quot;, &quot;us&quot;) respects your privacy. This page explains what information we
            collect on this website, how we use it, and the terms that apply when you work with us.
          </p>
          <span className="legal-date"><Calendar size={15} aria-hidden="true" /> Last updated: 6 October 2026</span>
        </div>
      </header>

      <div className="wrap legal-body">
        <article className="legal">
          <section id="privacy" className="legal-sec">
            <span className="legal-ico"><ShieldCheck size={20} aria-hidden="true" /></span>
            <h2>Privacy policy</h2>
            <h3>What we collect</h3>
            <ul>
              <li>Details you give us in forms: name, email, phone number, company and project details.</li>
              <li>Basic usage data (pages visited, device, browser) through analytics tools.</li>
            </ul>
            <h3>How we use it</h3>
            <ul>
              <li>To reply to your inquiry and prepare a proposal.</li>
              <li>To send you information you asked for.</li>
              <li>To improve our website.</li>
            </ul>
            <p className="legal-note">We never sell your data. You can ask us to delete your data at any time by emailing us.</p>
          </section>

          <section id="terms" className="legal-sec">
            <span className="legal-ico"><FileText size={20} aria-hidden="true" /></span>
            <h2>Terms &amp; conditions</h2>
            <p>
              All content on this website belongs to {CONFIG.legalName}. Project scope, pricing and intellectual property
              terms are agreed in a written proposal and a signed agreement before work starts.
            </p>
          </section>

          <section id="cookies" className="legal-sec">
            <span className="legal-ico"><Cookie size={20} aria-hidden="true" /></span>
            <h2>Cookie policy</h2>
            <p>
              We use a few cookies to make the website work and to understand how visitors use it (for example, Google
              Analytics). You can block cookies in your browser settings.
            </p>
          </section>

          <section id="contact" className="legal-sec">
            <span className="legal-ico"><Mail size={20} aria-hidden="true" /></span>
            <h2>Contact</h2>
            <p>Questions about this page, or want your data deleted? Write to us:</p>
            <p>{CONFIG.legalName} · <a href={`mailto:${CONFIG.email}`}>{CONFIG.email}</a></p>
          </section>

          <Link href="/" className="btn btn-ghost legal-back"><ArrowLeft size={16} aria-hidden="true" /> Back to home</Link>
        </article>
      </div>
    </div>
  );
}
