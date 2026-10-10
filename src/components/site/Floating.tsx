import Link from "next/link";
import { telHref } from "@/config/site";
import { ArrowUp, Phone } from "lucide-react";

export default function Floating() {
  return (
    <>
      <div className="progress" id="progress" aria-hidden="true" />

      <a href="#top" className="to-top" id="toTop" aria-label="Back to top"><ArrowUp size={18} /></a>

      <div className="mobile-cta" id="mobileCta">
        <a href={telHref} className="btn btn-ghost"><Phone size={16} /> Call</a>
        <Link href="/#contact" className="btn btn-blue">Book a Free Call</Link>
      </div>
    </>
  );
}
