import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CASES } from "@/config/content";
import { Check, ArrowRight } from "@/components/site/icons";

export function generateStaticParams() {
  return CASES.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const c = CASES.find((x) => x.slug === slug);
  if (!c) return {};
  return {
    title: `${c.client} — Case Study | GOPANI`,
    description: c.summary,
  };
}

export default async function CaseDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const c = CASES.find((x) => x.slug === slug);
  if (!c) notFound();

  return (
    <section>
      <div className="wrap sec">
        <div className="case-detail-head">
          <div className="case-tags">
            <span className="pill">{c.industry}</span>
            <span className={`pill ${c.type === "Grow" ? "orange" : c.type === "Build" ? "blue" : "ink"}`}>{c.type}</span>
          </div>
          <h1 className="h-section">{c.client}</h1>
          <p className="lead">{c.summary}</p>
        </div>

        <div className="case-results case-detail-results">
          {c.results.map((r) => (
            <div key={r.label}><b>{r.value}</b><small>{r.label}</small></div>
          ))}
        </div>

        <div className="case-detail-body">
          <div className="dlg-col">
            <h2 className="h-section-sm" style={{ fontSize: 24 }}>The problem</h2>
            <p>{c.problem}</p>
            <h2 className="h-section-sm" style={{ fontSize: 24, marginTop: 8 }}>What we did</h2>
            <ul className="dlg-outcomes">
              {c.whatWeDid.map((item) => <li key={item}><Check size={18} />{item}</li>)}
            </ul>
          </div>
          <div className="dlg-box">
            <span className="m m-muted">Tech &amp; tools used</span>
            <div className="chips" style={{ paddingTop: 12 }}>
              {c.tech.map((t) => <span className="chip" key={t}><i />{t}</span>)}
            </div>
          </div>
        </div>

        <blockquote className="case-quote">
          <p>&ldquo;{c.quote.text}&rdquo;</p>
          <cite>{c.quote.name} · {c.quote.role}</cite>
        </blockquote>

        <div className="svc-detail-cta">
          <Link href="/contact" className="btn btn-blue">Start a project like this <ArrowRight size={18} /></Link>
          <Link href="/work" className="btn btn-ghost">← View all work</Link>
        </div>
      </div>
    </section>
  );
}
