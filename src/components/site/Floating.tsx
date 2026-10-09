import Link from "next/link";
import { waLink, telHref } from "@/config/site";
import { ArrowUp, Phone } from "lucide-react";

export default function Floating() {
  return (
    <>
      <div className="progress" id="progress" aria-hidden="true" />

      <a href={waLink()} className="wa-float" target="_blank" rel="noopener" aria-label="Chat on WhatsApp">
        <span className="tip">Chat with us</span>
        <svg viewBox="0 0 32 32" aria-hidden="true">
          <path d="M16 3C8.8 3 3 8.7 3 15.8c0 2.5.7 4.9 2 7L3 29l6.4-2c2 1.1 4.3 1.7 6.6 1.7 7.2 0 13-5.7 13-12.8C29 8.7 23.2 3 16 3zm0 23.4c-2.1 0-4.1-.6-5.9-1.6l-.4-.3-3.8 1.2 1.2-3.7-.3-.4c-1.2-1.8-1.8-3.8-1.8-5.9C5 9.9 9.9 5.1 16 5.1S27 9.9 27 15.8 22.1 26.4 16 26.4zm6-7.9c-.3-.2-1.9-1-2.2-1.1-.3-.1-.5-.2-.7.2-.2.3-.8 1.1-1 1.3-.2.2-.4.2-.7.1-.3-.2-1.4-.5-2.6-1.6-1-.9-1.6-1.9-1.8-2.2-.2-.3 0-.5.1-.7l.5-.6c.2-.2.2-.3.3-.6.1-.2 0-.4 0-.6l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.7s1.2 3.2 1.4 3.4c.2.2 2.4 3.6 5.7 5 .8.3 1.4.5 1.9.7.8.3 1.5.2 2.1.1.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5-.1-.2-.3-.3-.6-.4z" />
        </svg>
      </a>

      <a href="#top" className="to-top" id="toTop" aria-label="Back to top"><ArrowUp size={18} /></a>

      <div className="mobile-cta" id="mobileCta">
        <a href={telHref} className="btn btn-ghost"><Phone size={16} /> Call</a>
        <Link href="/contact" className="btn btn-blue">Book a Free Call</Link>
      </div>
    </>
  );
}
