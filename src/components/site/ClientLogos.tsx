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
            <span key={`${c.name}-${i}`} className="client" aria-hidden={i >= CLIENTS.length}>
              <i>{c.mark}</i>{c.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
