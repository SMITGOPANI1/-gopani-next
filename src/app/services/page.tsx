import type { Metadata } from "next";
import Image from "next/image";
import Services from "@/components/site/Services";

export const metadata: Metadata = {
  title: "Services — Strategy, Software, Infrastructure & Growth | GOPANI",
  description: "Eight services, one accountable team: IT strategy, application development, start-up launches, scalable infrastructure, managed support, digital presence and marketing & growth.",
};

export default function ServicesPage() {
  return (
    <>
      <div className="wrap" style={{ paddingTop: 48 }}>
        <div className="banner-photo" data-reveal>
          <Image src="/images/code-screen.jpg" alt="Real code, not a mockup" width={1600} height={700} sizes="100vw" />
        </div>
      </div>
      <Services />
    </>
  );
}
