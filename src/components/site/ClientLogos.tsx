import Link from "next/link";
import { CLIENTS } from "@/config/content";

export default function ClientLogos() {
  const items = [...CLIENTS, ...CLIENTS]; // duplicated for a seamless loop
  return (
    <section className="logos-sec" aria-label="Clients">
      <div className="wrap">
        <span className="m m-muted">Trusted by growing brands</span>
      </div>
      <div className="marquee">
        <div className="marquee-track">
          {items.map((c, i) => (
            <Link key={`${c.name}-${i}`} href="/work" className="client" aria-hidden={i >= CLIENTS.length} tabIndex={i >= CLIENTS.length ? -1 : 0}>
              <i>{c.mark}</i>{c.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
