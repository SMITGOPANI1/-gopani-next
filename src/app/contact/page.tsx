import type { Metadata } from "next";
import Contact from "@/components/site/Contact";

export const metadata: Metadata = {
  title: "Contact Us | KarmaHubAI",
  description: "Tell us about your project. No calls, no pressure. We reply within 24 hours.",
};

export default function ContactPage() {
  return (
    <Contact />
  );
}
