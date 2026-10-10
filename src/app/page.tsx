import Hero from "@/components/site/Hero";
import ClientLogos from "@/components/site/ClientLogos";
import ProblemSolution from "@/components/site/ProblemSolution";
import Services from "@/components/site/Services";
import Stats from "@/components/site/Stats";
import Process from "@/components/site/Process";
import WhyUs from "@/components/site/WhyUs";
import Industries from "@/components/site/Industries";
import TechStack from "@/components/site/TechStack";
import Faq from "@/components/site/Faq";
import Contact from "@/components/site/Contact";
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
      <Services />
      <Stats />
      <Process />
      <WhyUs />
      <Industries limit={6} />
      <TechStack />
      <Faq />
      <Contact />
    </>
  );
}
