import type { Metadata } from "next";
import Services from "@/components/site/Services";

export const metadata: Metadata = {
  title: "Services — Strategy, Software, Infrastructure & Growth | KarmahubAI",
  description: "Eight services, one accountable team: IT strategy, application development, start-up launches, scalable infrastructure, managed support, digital presence and marketing & growth.",
};

export default function ServicesPage() {
  return (
    <>
      <Services />
    </>
  );
}
