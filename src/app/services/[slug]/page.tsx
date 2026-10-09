import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, SERVICE_BY_ID } from "@/config/services";
import { Ico, ArrowRight } from "@/components/site/icons";

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICE_BY_ID[slug];
  if (!service) return {};
  return {
    title: `${service.title} — GOPANI`,
    description: service.result,
  };
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICE_BY_ID[slug];
  if (!service) notFound();

  const index = SERVICES.findIndex((s) => s.id === service.id);
  const prev = index > 0 ? SERVICES[index - 1] : null;
  const next = index < SERVICES.length - 1 ? SERVICES[index + 1] : null;
  const number = String(index + 1).padStart(2, "0");

  return (
    <>
      <section className="bg-2">
        <div className="wrap sec">
          <div className="svc-hero-grid">
            <div className="svc-hero-copy">
              <div className="kicker">
                <i><Ico name={service.icon} size={20} /></i>
                <span className="m m-blue">Service {number} · {service.phase}</span>
              </div>
              <h1 className="h-section">{service.title}</h1>
              <p className="tag">{service.tagline}</p>
              <p className="desc">{service.description}</p>
              <div className="svc-detail-cta">
                <Link href={`/contact?service=${service.id}`} className="btn btn-blue">{service.cta} <ArrowRight size={18} /></Link>
                <Link href="/services" className="link-u">All services</Link>
              </div>
            </div>
            <div className="svc-glance">
              <p className="m m-muted" style={{ padding: "16px 0 4px" }}>At a glance</p>
              <div className="svc-glance-row">
                <p className="m m-blue">Best for</p>
                <p>{service.glance.bestFor}</p>
              </div>
              <div className="svc-glance-row">
                <p className="m m-blue">Starting point</p>
                <p>{service.glance.startingPoint}</p>
              </div>
              <div className="svc-glance-row">
                <p className="m m-blue">Delivery</p>
                <p>{service.glance.delivery}</p>
              </div>
              <div className="svc-glance-row">
                <p className="m m-blue">You&apos;ll work with</p>
                <p>{service.glance.workWith}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="wrap sec">
          <div className="sec-head">
            <p className="m m-blue sec-num" data-reveal>Sound familiar?</p>
            <h2 className="h-section-sm">The problems this service is built to solve.</h2>
          </div>
          <div className="svc-problems-grid" data-stagger>
            {service.problems.map((p) => <p className="svc-problem" key={p}>{p}</p>)}
          </div>
        </div>
      </section>

      <section id="deliver">
        <div className="wrap sec">
          <div className="sec-head">
            <p className="m m-blue sec-num" data-reveal>What we deliver</p>
            <h2 className="h-section-sm">Six things you can point to when we are done.</h2>
          </div>
          <div className="svc-deliver-grid" data-stagger>
            {service.deliverables.map((d, i) => (
              <div className="svc-deliver-card" key={d.title}>
                <span className="m m-blue">{String(i + 1).padStart(2, "0")}</span>
                <h3>{d.title}</h3>
                <p>{d.text}</p>
              </div>
            ))}
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <p className="m m-muted">Typical tools and methods</p>
            <div className="chips">
              {service.tools.map((t) => <span className="chip" key={t}><i aria-hidden="true" />{t}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-ink">
        <div className="wrap sec">
          <div className="sec-head">
            <p className="m m-orange sec-num" data-reveal>How it works</p>
            <h2 className="h-section-sm">Five steps, each with something you can review.</h2>
          </div>
          <div>
            {service.process.map((step, i) => (
              <div className="svc-process-row" key={step.title}>
                <div className="svc-process-step">Step {String(i + 1).padStart(2, "0")}</div>
                <div className="svc-process-body">
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                  <p className="get"><b>You get</b>{step.youGet}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="wrap sec">
          <div className="sec-head">
            <p className="m m-blue sec-num" data-reveal>What changes for you</p>
            <h2 className="h-section-sm">The result, in plain terms.</h2>
          </div>
          <div className="svc-outcomes-grid" data-stagger>
            {service.outcomes.map((o) => (
              <div className="svc-outcome" key={o.title}>
                <h3>{o.title}</h3>
                <p>{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="faq" className="bg-2">
        <div className="wrap sec split">
          <div className="split-l">
            <p className="m m-blue sec-num" data-reveal>FAQ</p>
            <h2 className="h-section-sm">Common questions.</h2>
          </div>
          <div className="split-r" data-stagger>
            {service.faqs.map((f, i) => (
              <details className="faq" key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink">
        <div className="wrap sec" style={{ paddingTop: 64, paddingBottom: 64 }}>
          <div className="svc-cta-row">
            <div className="copy">
              <h2 className="h-section-sm">Talk to us about {service.title}.</h2>
              <p className="lead">Tell us where you are and what you need. We&apos;ll reply with options, a rough scope and a recommended first step.</p>
            </div>
            <div className="actions">
              <Link href={`/contact?service=${service.id}`} className="btn btn-blue">{service.cta} <ArrowRight size={18} /></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-2">
        <div className="wrap">
          <div className="svc-detail-nav" style={{ borderTop: "none", paddingTop: 20, paddingBottom: 20 }}>
            {prev ? (
              <Link href={`/services/${prev.id}`} className="svc-nav-link">← <span>{prev.title}</span></Link>
            ) : <span />}
            {next ? (
              <Link href={`/services/${next.id}`} className="svc-nav-link right"><span>Next · {next.title}</span> →</Link>
            ) : <span />}
          </div>
        </div>
      </section>
    </>
  );
}
