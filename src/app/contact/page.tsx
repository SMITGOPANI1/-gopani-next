import type { Metadata } from "next";
import Contact from "@/components/site/Contact";

export const metadata: Metadata = {
  title: "Contact Us — KarmahubAI",
  description: "Tell us about your project. Free consultation, no pressure — we reply within 24 hours.",
};

export default function ContactPage() {
  return (
    <Contact />
  );
}
