import type { Metadata } from "next";
import Link from "next/link";
import { CASES } from "@/config/content";
import FirstName from "./FirstName";

export const metadata: Metadata = { title: "Thank you — GOPANI", robots: { index: false } };

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
        <div className="mini-cases" aria-label="Recent results">
          {CASES.slice(0, 3).map((c) => (
            <div className="mini-case" key={c.client}>
              <b>{c.results[0].value}</b>
              <small>{c.results[0].label}</small>
              <span>{c.client} · {c.industry}</span>
            </div>
          ))}
        </div>
        <div className="btns">
          <Link href="/work" className="btn btn-blue">See our work while you wait →</Link>
          <Link href="/" className="btn btn-ghost">Back to home</Link>
        </div>
      </div>
    </section>
  );
}
