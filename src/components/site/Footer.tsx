import Link from "next/link";
import { CONFIG, waLink, telHref, mailHref } from "@/config/site";
import { BUILD, GROW } from "@/config/services";
import Logo from "./Logo";
import { ServiceLink } from "./ServiceModal";
import Newsletter from "./Newsletter";

const SOCIALS = [
  { key: "linkedin", label: "LinkedIn", mark: "in" },
  { key: "instagram", label: "Instagram", mark: "IG" },
  { key: "facebook", label: "Facebook", mark: "f" },
  { key: "youtube", label: "YouTube", mark: "▶" },
  { key: "x", label: "X", mark: "X" },
] as const;

export default function Footer() {
  return (
    <footer className="ftr">
      <div className="wrap ftr-in">
        <div className="ftr-top">
          <div className="ftr-brand">
            <Logo dark />
            <p>We build and grow digital businesses. One team designs and builds your website, app or software, then markets it every month after — so you never have to manage two vendors, or two invoices, for one result.</p>
            <Newsletter />
            <div className="socials">
              {SOCIALS.map((s) => CONFIG.socials[s.key] && (
                <a key={s.key} href={CONFIG.socials[s.key]} aria-label={s.label} target="_blank" rel="noopener">{s.mark}</a>
              ))}
            </div>
          </div>

          <div className="ftr-col">
            <span className="m">Strategy & engineering</span>
            {BUILD.map((s) => <ServiceLink key={s.id} id={s.id}>{s.title}</ServiceLink>)}
          </div>
          <div className="ftr-col">
            <span className="m">Presence & marketing</span>
            {GROW.map((s) => <ServiceLink key={s.id} id={s.id}>{s.title}</ServiceLink>)}
          </div>
          <div className="ftr-col">
            <span className="m">Company</span>
            <Link href="/about">About us</Link>
            <Link href="/#faq">FAQ</Link>
            <Link href="/#contact">Contact</Link>
          </div>
          <div className="ftr-col">
            <span className="m">Contact</span>
            {CONFIG.address && <a className="addr" href={CONFIG.mapUrl} target="_blank" rel="noopener">{CONFIG.address}</a>}
            <a href={telHref}>{CONFIG.phone}</a>
            <a href={mailHref}>{CONFIG.email}</a>
            <a href={waLink()} target="_blank" rel="noopener">WhatsApp</a>
            <span className="addr">{CONFIG.hours}</span>
          </div>
        </div>

        <div className="ftr-legal">
          <div>
            © {new Date().getFullYear()} {CONFIG.legalName}. All rights reserved.
            {(CONFIG.llpin || CONFIG.gstin) && (
              <span className="reg">
                {CONFIG.llpin && <>LLPIN: {CONFIG.llpin}</>}
                {CONFIG.llpin && CONFIG.gstin && " · "}
                {CONFIG.gstin && <>GSTIN: {CONFIG.gstin}</>}
              </span>
            )}
          </div>
          <span className="links">
            <Link href="/privacy">Privacy policy</Link>
            <Link href="/privacy#terms">Terms &amp; conditions</Link>
            <Link href="/privacy#cookies">Cookie policy</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
