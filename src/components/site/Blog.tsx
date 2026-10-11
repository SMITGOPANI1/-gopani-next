import { POSTS } from "@/config/content";
import { SplitHeading } from "./Split";

/**
 * Section 11: Insights. Informational only for now, no "read article" links,
 * because there are no real article pages behind them yet. Wire these up once
 * real articles exist at /insights/<slug>.
 */
export default function Blog() {
  return (
    <section id="insights" className="bg-2">
      <div className="wrap sec">
        <div className="sec-head">
          <SplitHeading className="h-section" text="Learn what works." />
          <p className="lead" data-reveal>A few of the questions we get asked most, answered properly. Full articles are coming soon.</p>
        </div>
        <div className="posts" data-stagger>
          {POSTS.map((p) => (
            <article className="post" key={p.title}>
              <div className={`post-thumb ${p.tone}`} aria-hidden="true"><span>{p.tag.slice(0, 1)}</span></div>
              <div className="post-body">
                <div className="post-meta">
                  <span className={`pill ${p.tone === "ink" ? "" : p.tone}`}>{p.tag}</span>
                  <span>{p.read}</span>
                  <span>·</span>
                  <span>{p.date}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
