import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SERVICES, SERVICE_BY_ID } from "@/config/services";
import { ArrowRight } from "@/components/site/icons";
import { SplitHeading } from "@/components/site/Split";
import {
  MessagesSquare, FileSearch, Boxes, ClipboardCheck, Send, Layers, Settings, CloudUpload,
  ChartNoAxesColumn, ShieldCheck, Users, FileCog, ArrowRightLeft, MonitorCog, ChartColumnBig,
  MessageSquareText, ImagePlus, CalendarArrowUp, SlidersHorizontal, Search, Paintbrush, CodeXml,
  Lightbulb, FileCode, Rocket, ChartNoAxesCombined, Gauge, Target, Wrench, Megaphone, TrendingUp,
  type LucideIcon,
} from "lucide-react";

// One icon per process step, in order (every service has five steps)
const PROCESS_ICONS: LucideIcon[] = [MessagesSquare, FileSearch, Boxes, ClipboardCheck, Send];
// Services whose steps have their own icons
const PROCESS_ICONS_BY_SERVICE: Record<string, LucideIcon[]> = {
  "poc-to-scale": [MessagesSquare, FileSearch, Layers, Settings, CloudUpload],
  "scaling-up": [FileSearch, ChartNoAxesColumn, ShieldCheck, Layers, Users],
  "managed-support": [MessagesSquare, FileCog, ArrowRightLeft, MonitorCog, ChartColumnBig],
  "digital-presence": [FileSearch, MessageSquareText, ImagePlus, CalendarArrowUp, SlidersHorizontal],
  "application-development": [Search, Paintbrush, CodeXml, ClipboardCheck, Send],
  "startup-launch": [Lightbulb, FileSearch, FileCode, Rocket, ChartNoAxesCombined],
  "marketing-growth": [Gauge, Target, Wrench, Megaphone, TrendingUp],
};
// Services that show their name above the process heading
const PROCESS_KICKER = new Set(["marketing-growth"]);
// Services whose staircase uses a solid glowing line instead of a dashed one
const SOLID_RAIL = new Set(["managed-support", "digital-presence"]);

export function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.id }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICE_BY_ID[slug];
  if (!service) return {};
  return {
    title: `${service.title} | KarmaHubAI`,
    description: service.result,
  };
}

export default async function ServiceDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICE_BY_ID[slug];
  if (!service) notFound();

  return (
    <div className="svc-page">
      <section className="bg-2">
        <div className="wrap sec">
          <div className="svc-hero-grid">
            <div className="svc-hero-copy">
              {/* Same entrance as the homepage hero: words slide up, then the rest rises in */}
              <SplitHeading as="h1" className="h-section" text={service.title} />
              <p className="tag" data-reveal data-delay="0.15">{service.tagline}</p>
              <p className="desc" data-reveal data-delay="0.25">{service.description}</p>
              <div className="svc-detail-cta" data-reveal data-delay="0.35">
                <Link href={`/?service=${service.id}#contact`} className="btn btn-blue">{service.cta} <ArrowRight size={18} /></Link>
              </div>
            </div>
            <div className="svc-glance" data-reveal data-delay="0.2">
              <p className="m svc-glance-head">At a glance</p>
              <ol className="svc-glance-list">
                {[
                  ["Best for", service.glance.bestFor],
                  ["Starting point", service.glance.startingPoint],
                  ["Delivery", service.glance.delivery],
                  ["You'll work with", service.glance.workWith],
                ].map(([label, value], i) => (
                  <li className="svc-glance-row" key={label}>
                    <span className="svc-glance-num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                    <div>
                      <p className="m">{label}</p>
                      <p>{value}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="wrap sec">
          <div className="sec-head">
            <h2 className="h-section-sm">The problems we solve.</h2>
          </div>
          <div className="svc-problems-grid" data-stagger>
            {service.problems.map((p) => (
              <div className="svc-problem" key={p.title}>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="deliver">
        <div className="wrap sec">
          <div className="sec-head">
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

      <section className="bg-warm proc-sec">
        <div className="wrap sec proc">
          <div className="proc-copy">
            <div className="sec-head">
              {PROCESS_KICKER.has(service.id) && <p className="m proc-kicker-dark">{service.title}</p>}
              <h2 className="h-section-sm">Five steps, each with something you can review.</h2>
            </div>
            <ol className="proc-list" data-stagger>
              {service.process.map((step, i) => (
                <li key={step.title}>
                  <span className="proc-n">{String(i + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="proc-visual" aria-hidden="true">
            <svg className={`proc-rail${SOLID_RAIL.has(service.id) ? " solid" : ""}`} viewBox="0 0 100 85" preserveAspectRatio="none">
              <line x1="15" y1="74" x2="89" y2="23" />
            </svg>
            {service.process.map((step, i) => {
              const icons = PROCESS_ICONS_BY_SERVICE[service.id] ?? PROCESS_ICONS;
              const StepIcon = icons[i % icons.length];
              return (
                <div className="proc-node" key={step.title} style={{ "--i": i } as React.CSSProperties}>
                  <div className="proc-label">
                    <b>{String(i + 1).padStart(2, "0")}</b>
                    <span>{step.title}</span>
                  </div>
                  <div className="proc-tile" />
                  <StepIcon className="proc-icon" size={40} strokeWidth={1.5} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="wrap sec">
          <div className="sec-head">
            <h2 className="h-section-sm">What changes for you?</h2>
            <p className="lead">The result, in plain terms.</p>
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
        <div className="wrap sec svc-faq">
          <div className="sec-head center">
            <h2 className="h-section-sm">FAQ</h2>
            <p className="lead">Quick answers to what clients ask us most about {service.title}.</p>
          </div>
          <div className="svc-faq-list" data-stagger>
            {service.faqs.map((f, i) => (
              <details className="faq" key={f.q} open={i === 0}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
