import type { Metadata } from "next";
import Industries from "@/components/site/Industries";

export const metadata: Metadata = {
  title: "Industries We Serve | KarmaHubAI",
  description: "Healthcare, e-commerce, real estate, education, SaaS, manufacturing, retail, hotels and finance. We speak your industry's language from the first call.",
};

export default function IndustriesPage() {
  return (
    <>
      <Industries />
    </>
  );
}
