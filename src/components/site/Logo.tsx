import Image from "next/image";
import Link from "next/link";
import { CONFIG } from "@/config/site";

/** Logo mark + wordmark ("Karmahub" + orange "AI"). `dark` switches the text colour for dark backgrounds. */
export default function Logo({ dark = false, href = "/#top" }: { dark?: boolean; href?: string }) {
  return (
    <Link href={href} className={`logo${dark ? " on-dark" : ""}`} aria-label={`${CONFIG.name} home`}>
      <Image src="/images/logo.png" alt="" width={32} height={32} className="logo-mark" priority />
      <span>
        Karmahub<span className="logo-ai">AI</span>
      </span>
    </Link>
  );
}
