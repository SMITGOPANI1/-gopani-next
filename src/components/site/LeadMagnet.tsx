"use client";

import { useState, type FormEvent } from "react";
import { emailOk, sendForm } from "@/lib/forms";
import { Check, ArrowRight } from "./icons";

const POINTS = ["Speed check", "SEO score", "Design review", "Action plan"];

export default function LeadMagnet() {
  const [state, setState] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [msg, setMsg] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const fd = new FormData(f);
    const website = String(fd.get("website") ?? "").trim();
    const email = String(fd.get("email") ?? "").trim();
    if (website.length < 4) { setMsg("Please enter your website address."); return; }
    if (!emailOk(email)) { setMsg("Please enter a valid email."); return; }
    setMsg("");
    setState("sending");
    const ok = await sendForm({ form: "Free audit", website, email });
    if (!ok) { setState("error"); setMsg("We couldn't send that. Please try again or message us on WhatsApp."); return; }
    f.reset();
    setState("done");
  }

  return (
    <section id="audit" style={{ paddingTop: 104, paddingBottom: 104 }}>
      <div className="wrap">
        <div className="magnet" data-reveal>
          <div>
            <p className="m m-orange sec-num" style={{ marginBottom: 16 }}>Free resource</p>
            <h2>Is your website losing customers?</h2>
            <p className="lead">Most small-business websites lose customers to slow load times, confusing navigation or invisible SEO — and nobody ever tells the owner. Get a free, honest audit of your site&apos;s speed, SEO and design, delivered within 48 hours. No strings attached, even if you never call us again.</p>
            <ul>
              {POINTS.map((p) => <li key={p}><Check size={14} /> {p}</li>)}
            </ul>
          </div>
          <form className="magnet-form" onSubmit={onSubmit} noValidate>
            {state === "done" ? (
              <div style={{ display: "flex", flexDirection: "column", gap: 8, padding: "8px 0" }}>
                <b style={{ fontFamily: "var(--font-display)", fontSize: 22 }}>Done. Your audit is on its way.</b>
                <p style={{ color: "var(--text-2)" }}>You&apos;ll have the report in your inbox within 48 hours.</p>
              </div>
            ) : (
              <>
                <div>
                  <label className="lbl" htmlFor="auditSite">Your website</label>
                  <input className="fld" id="auditSite" name="website" type="text" inputMode="url" placeholder="www.yourbusiness.com" required />
                </div>
                <div>
                  <label className="lbl" htmlFor="auditEmail">Your email</label>
                  <input className="fld" id="auditEmail" name="email" type="email" autoComplete="email" placeholder="you@company.com" required />
                </div>
                {msg && <p className="form-msg" role="alert">{msg}</p>}
                <button type="submit" className="btn btn-blue" disabled={state === "sending"}>
                  {state === "sending" ? "Sending…" : "Get My Free Audit"} <ArrowRight size={18} />
                </button>
                <small>No spam. We only send your report.</small>
              </>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
