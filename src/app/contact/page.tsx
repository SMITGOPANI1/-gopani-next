import type { Metadata } from "next";
import { Suspense } from "react";
import Contact from "@/components/site/Contact";

export const metadata: Metadata = {
  title: "Contact Us — GOPANI",
  description: "Tell us about your project. Free consultation, no pressure — we reply within 24 hours.",
};

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <Contact />
    </Suspense>
  );
}
