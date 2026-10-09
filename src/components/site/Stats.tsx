import { CONFIG } from "@/config/site";

export default function Stats() {
  return (
    <section className="stats" aria-label="Our numbers">
      <div className="wrap stats-in" data-stagger>
        {CONFIG.stats.map((s) => (
          <div className="stat" key={s.label}>
            <b data-count={s.value} data-prefix={s.prefix ?? ""} data-suffix={s.suffix ?? ""}>
              {s.prefix ?? ""}{s.value}{s.suffix ?? ""}
            </b>
            <span>{s.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
