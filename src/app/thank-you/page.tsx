import type { Metadata } from "next";
import Link from "next/link";
import FirstName from "./FirstName";

export const metadata: Metadata = { title: "Thank you | KarmaHubAI", robots: { index: false } };

export default function ThankYou() {
  return (
    <section className="page-simple">
      <div>
        <div className="check" aria-hidden="true">
          <svg viewBox="0 0 52 52"><path d="M14 27l8 8 16-17" /></svg>
        </div>
        <p className="m m-blue">Message received</p>
        <h1>Thank you<FirstName />.</h1>
        <p>We got your message. Someone from our team will contact you <strong>within 24 hours</strong>, usually much faster.</p>
        <div className="btns">
          <Link href="/services" className="btn btn-blue">Explore our services →</Link>
          <Link href="/" className="btn btn-ghost">Back to home</Link>
        </div>
      </div>
    </section>
  );
}
