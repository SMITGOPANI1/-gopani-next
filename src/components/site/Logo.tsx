import Link from "next/link";
import { CONFIG } from "@/config/site";

/** Logo mark + wordmark. `dark` switches the bar colours for dark backgrounds. */
export default function Logo({ dark = false, href = "/#top" }: { dark?: boolean; href?: string }) {
  const bar = dark ? "#9DB0FF" : "#2B4DF0";
  return (
    <Link href={href} className={`logo${dark ? " on-dark" : ""}`} aria-label={`${CONFIG.name} home`}>
      <svg width="28" height="28" viewBox="0 0 28 28" aria-hidden="true">
        <rect x="3" y="16" width="6" height="9" fill={bar} />
        <rect x="11" y="10" width="6" height="15" fill={bar} />
        <rect x="19" y="3" width="6" height="22" fill="#FF7A45" />
      </svg>
      <span>
        {CONFIG.name}
        <span className="logo-dot">.</span>
      </span>
    </Link>
  );
}
