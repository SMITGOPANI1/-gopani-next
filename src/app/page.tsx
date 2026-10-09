import Link from "next/link";
import Hero from "@/components/site/Hero";
import ClientLogos from "@/components/site/ClientLogos";
import ProblemSolution from "@/components/site/ProblemSolution";
import Services from "@/components/site/Services";
import CaseStudies from "@/components/site/CaseStudies";
import Stats from "@/components/site/Stats";
import Process from "@/components/site/Process";
import WhyUs from "@/components/site/WhyUs";
import Industries from "@/components/site/Industries";
import Testimonials from "@/components/site/Testimonials";
import TechStack from "@/components/site/TechStack";
import Certifications from "@/components/site/Certifications";
import DeliveryModels from "@/components/site/DeliveryModels";
import LeadMagnet from "@/components/site/LeadMagnet";
import Blog from "@/components/site/Blog";
import Faq from "@/components/site/Faq";
import { ArrowRight } from "@/components/site/icons";
import { FAQS } from "@/config/content";

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c") }}
      />
      <Hero />
      <ClientLogos />
      <ProblemSolution />
      <Services limit={4} />
      <CaseStudies limit={2} />
      <Stats />
      <Process />
      <WhyUs />
      <Industries limit={6} />
      <Testimonials />
      <TechStack />
      <Certifications />
      <DeliveryModels />
      <LeadMagnet />
      <Blog />
      <Faq />

      <section className="bg-ink">
        <div className="wrap">
          <div className="magnet" style={{ gridTemplateColumns: "1fr", textAlign: "center" }} data-reveal>
            <div>
              <h2 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(26px, 3.2vw, 38px)", marginBottom: 14 }}>
                Let&apos;s build something that grows.
              </h2>
              <p className="lead" style={{ color: "var(--on-dark)", maxWidth: 560, margin: "0 auto 24px" }}>
                Tell us about your project. Free consultation, no pressure — we reply within 24 hours.
              </p>
              <Link href="/contact" className="btn btn-blue">Book a Free Call <ArrowRight size={18} /></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
