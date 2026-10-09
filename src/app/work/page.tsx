import type { Metadata } from "next";
import Image from "next/image";
import CaseStudies from "@/components/site/CaseStudies";

export const metadata: Metadata = {
  title: "Our Work — Case Studies | GOPANI",
  description: "Real client projects with real numbers: websites, apps and marketing campaigns we built and grew, and what they achieved.",
};

export default function WorkPage() {
  return (
    <>
      <div className="wrap" style={{ paddingTop: 48 }}>
        <div className="banner-photo" data-reveal>
          <Image src="/images/work-reports.jpg" alt="Reviewing campaign results" width={1600} height={700} sizes="100vw" />
        </div>
      </div>
      <CaseStudies />
    </>
  );
}
