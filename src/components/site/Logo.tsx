import Link from "next/link";
import { CONFIG } from "@/config/site";

// "Domino Rise" mark: three dominoes tipping into an upright orange bar. Rounded corners come from
// a stroke in the same colour as each fill.
const DOMINOES = [
  "345,404 384,424 330,516 290,488",
  "409,370 450,385 404,516 357,497",
  "466,330 506,338 488,516 432,507",
];

/** The logo mark on its own. `dark` uses the light-tan dominoes made for dark backgrounds. */
export function LogoMark({ size = 32, dark = false }: { size?: number; dark?: boolean }) {
  const brown = dark ? "#c98a5e" : "#4e2a17";
  return (
    <svg className="logo-mark" width={size} height={size} viewBox="278 268 300 262" aria-hidden="true">
      {DOMINOES.map((pts) => (
        <polygon key={pts} points={pts} fill={brown} stroke={brown} strokeWidth={14} strokeLinejoin="round" />
      ))}
      <rect x={509} y={275} width={61} height={248} rx={9} fill="#ec6a2a" />
    </svg>
  );
}

/** Logo mark + wordmark ("KarmaHub" + orange "AI"). `dark` switches colours for dark backgrounds. */
export default function Logo({ dark = false, href = "/#top" }: { dark?: boolean; href?: string }) {
  return (
    <Link href={href} className={`logo${dark ? " on-dark" : ""}`} aria-label={`${CONFIG.name} home`}>
      <LogoMark dark={dark} />
      <span>
        KarmaHub<span className="logo-ai">AI</span>
      </span>
    </Link>
  );
}
