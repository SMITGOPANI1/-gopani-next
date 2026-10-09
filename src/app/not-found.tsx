import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Page not found — GOPANI", robots: { index: false } };

export default function NotFound() {
  return (
    <section className="page-simple">
      <div>
        <p className="m m-blue">Error 404</p>
        <h1>This page went missing.</h1>
        <p>The page you are looking for doesn&apos;t exist or was moved. Let&apos;s get you back on track.</p>
        <div className="btns">
          <Link href="/" className="btn btn-blue">Go to home →</Link>
          <Link href="/services" className="btn btn-ghost">Our services</Link>
          <Link href="/contact" className="btn btn-ghost">Contact us</Link>
        </div>
      </div>
    </section>
  );
}
