import type { Metadata } from "next";
import Image from "next/image";
import Industries from "@/components/site/Industries";

export const metadata: Metadata = {
  title: "Industries We Serve — GOPANI",
  description: "Healthcare, e-commerce, real estate, education, SaaS, manufacturing, retail, hotels and finance — we speak your industry's language from the first call.",
};

export default function IndustriesPage() {
  return (
    <>
      <div className="wrap" style={{ paddingTop: 48 }}>
        <div className="banner-photo" data-reveal>
          <Image src="/images/team-collab.jpg" alt="Reviewing a project together" width={1600} height={700} sizes="100vw" />
        </div>
      </div>
      <Industries />
    </>
  );
}
