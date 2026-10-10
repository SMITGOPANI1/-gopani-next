import { DELIVERY_MODELS } from "@/config/content";
import { SplitHeading } from "./Split";

export default function DeliveryModels() {
  return (
    <section id="models" className="bg-ink">
      <div className="wrap sec">
        <div className="sec-head">
          <SplitHeading className="h-section-sm" text="Choose how the work happens." />
          <p className="lead" data-reveal>Every service on this site can run on any of these three models. Start with the one that fits your budget and risk, and change it as you grow.</p>
        </div>
        <div className="model-grid" data-stagger>
          {DELIVERY_MODELS.map((m) => (
            <div className={`model-card${m.popular ? " popular" : ""}`} key={m.title}>
              <p className={`m ${m.popular ? "m-blue" : "m-soft"}`}>{m.tag}</p>
              <h3>{m.title}</h3>
              <p className="desc">{m.text}</p>
              <ul className={m.popular ? "inc" : "dk"}>
                {m.bestFor.map((b) => <li key={b}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
