import type { Metadata } from "next";
import Link from "next/link";
import { CONFIG } from "@/config/site";

export const metadata: Metadata = { title: "Privacy, Terms & Cookies — KarmahubAI" };

export default function Privacy() {
  return (
      <div className="legal">
        {/* NOTE: This is a simple starter text. Ask a lawyer to review it before going live. */}
        <p className="m m-blue" style={{ marginBottom: 16 }}>Legal</p>
        <h1>Privacy policy</h1>
        <p>Last updated: 6 October 2026</p>
        <p>
          {CONFIG.legalName} (&quot;we&quot;, &quot;us&quot;) respects your privacy. This page explains what information we
          collect on this website and how we use it.
        </p>

        <h2>What we collect</h2>
        <ul>
          <li>Details you give us in forms: name, email, phone number, company and project details.</li>
          <li>Basic usage data (pages visited, device, browser) through analytics tools.</li>
        </ul>

        <h2>How we use it</h2>
        <ul>
          <li>To reply to your enquiry and prepare a proposal.</li>
          <li>To send you information you asked for.</li>
          <li>To improve our website.</li>
        </ul>
        <p>We never sell your data. You can ask us to delete your data at any time by emailing us.</p>

        <h2 id="terms">Terms of service</h2>
        <p>
          All content on this website belongs to {CONFIG.legalName}. Project scope, pricing and intellectual property
          terms are agreed in a written proposal and a signed agreement before work starts.
        </p>

        <h2 id="cookies">Cookie policy</h2>
        <p>
          We use a few cookies to make the website work and to understand how visitors use it (for example, Google
          Analytics). You can block cookies in your browser settings.
        </p>

        <h2>Contact</h2>
        <p>
          {CONFIG.legalName} · <a href={`mailto:${CONFIG.email}`} style={{ color: "var(--blue)" }}>{CONFIG.email}</a>
        </p>

        <p style={{ marginTop: 50 }}>
          <Link href="/" className="btn btn-ghost">← Back to home</Link>
        </p>
      </div>
  );
}
