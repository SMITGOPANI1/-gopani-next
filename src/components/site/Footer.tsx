import Link from "next/link";
import { CONFIG } from "@/config/site";
import { BUILD, GROW } from "@/config/services";
import Logo from "./Logo";
import { ServiceLink } from "./ServiceModal";

// Brand marks inline: lucide-react v1 no longer ships brand icons.
const SOCIALS = [
  { key: "linkedin", label: "LinkedIn", icon: <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.03-3.06-1.86-3.06-1.87 0-2.15 1.46-2.15 2.96V21H9z" /> },
  { key: "instagram", label: "Instagram", icon: <><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" /><circle cx="17.3" cy="6.7" r="1.2" /></> },
  { key: "facebook", label: "Facebook", icon: <path d="M14 8.5V6.6c0-.9.6-1.1 1-1.1h2.6V1.6L14 1.5c-4 0-4.9 3-4.9 4.9v2.1H6.8v4h2.3v10h4.9v-10h3.3l.5-4z" /> },
  { key: "youtube", label: "YouTube", icon: <path fillRule="evenodd" d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.75 15.02V8.98L15.5 12z" /> },
  { key: "x", label: "X", icon: <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.65l-5.21-6.82-5.97 6.82H1.68l7.73-8.84L1.25 2.25h6.82l4.71 6.23zm-1.16 17.52h1.83L7.08 4.13H5.12z" /> },
] as const;

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="ftr-box">
      <svg className="ftr-waves" viewBox="0 0 1440 320" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 210C220 150 420 140 640 190S1080 250 1250 120C1340 60 1400 30 1440 20V320H0z" fill="#FFDCC0" opacity="0.35" />
        <path d="M0 250C260 200 470 190 700 230S1120 250 1440 150V320H0z" fill="#FFDCC0" opacity="0.5" />
        <path d="M0 285C300 255 560 250 820 270S1210 240 1440 215V320H0z" fill="#FBD2B0" opacity="0.55" />
      </svg>

      <div className="wrap ftr-in">
        <div className="ftr-top">
          <div className="ftr-brand">
            <Logo />
            <p>We build and grow digital businesses. One team designs and builds your website, app or software, then markets it every month after, so you never have to manage two vendors, or two invoices, for one result.</p>
            <div className="socials">
              {SOCIALS.map((s) => CONFIG.socials[s.key] && (
                <a key={s.key} href={CONFIG.socials[s.key]} aria-label={s.label} target="_blank" rel="noopener">
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">{s.icon}</svg>
                </a>
              ))}
            </div>
          </div>

          <nav className="ftr-col" aria-label="Strategy & engineering">
            <h2 className="ftr-h">Strategy &amp; engineering</h2>
            {BUILD.map((s) => <ServiceLink key={s.id} id={s.id}>{s.title}</ServiceLink>)}
          </nav>
          <nav className="ftr-col" aria-label="Presence & marketing">
            <h2 className="ftr-h">Presence &amp; marketing</h2>
            {GROW.map((s) => <ServiceLink key={s.id} id={s.id}>{s.title}</ServiceLink>)}
          </nav>
          <nav className="ftr-col" aria-label="Company">
            <h2 className="ftr-h">Company</h2>
            <Link href="/about">About us</Link>
            <Link href="/#faq">FAQ</Link>
            <Link href="/#contact">Contact</Link>
          </nav>
        </div>

        <div className="ftr-legal">
          <div>
            © {new Date().getFullYear()} {CONFIG.legalName}. All rights reserved.
          </div>
          <span className="links">
            <Link href="/privacy">Privacy policy</Link>
            <Link href="/privacy#terms">Terms &amp; conditions</Link>
            <Link href="/privacy#cookies">Cookie policy</Link>
          </span>
        </div>
      </div>
      </div>
    </footer>
  );
}
