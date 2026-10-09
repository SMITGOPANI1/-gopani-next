"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CONFIG, waLink, telHref, mailHref } from "@/config/site";
import { SERVICES, SERVICE_BY_ID } from "@/config/services";
import { emailOk, phoneOk, sendForm } from "@/lib/forms";
import { SplitHeading } from "./Split";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "./icons";
import { MessageCircle, Zap, Lock } from "lucide-react";

type Errors = Partial<Record<"name" | "phone" | "email", string>>;

export default function Contact() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const preselected = SERVICE_BY_ID[searchParams.get("service") ?? ""]?.title;
  const [service, setService] = useState(preselected ?? "Not sure yet");
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    if (preselected) setService(preselected); // eslint-disable-line react-hooks/set-state-in-effect -- sync from the ?service= link
  }, [preselected]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const fd = new FormData(f);
    const get = (k: string) => String(fd.get(k) ?? "").trim();
    const data = { form: "Contact", name: get("name"), phone: get("phone"), email: get("email"), service: get("service"), message: get("message") };

    const errs: Errors = {};
    if (data.name.length < 2) errs.name = "Please enter your name";
    if (!phoneOk(data.phone)) errs.phone = "Please enter a valid phone number";
    if (!emailOk(data.email)) errs.email = "Please enter a valid email";
    setErrors(errs);
    if (Object.keys(errs).length) {
      (f.elements.namedItem(Object.keys(errs)[0]) as HTMLElement | null)?.focus();
      return;
    }

    setSending(true);
    setFailed(false);
    const ok = await sendForm(data);
    setSending(false);
    if (!ok) { setFailed(true); return; }

    if (!CONFIG.formEndpoint) {
      const msg = `New enquiry from the website\n\nName: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\nNeeds: ${data.service}\n\n${data.message}`;
      window.open(waLink(msg), "_blank", "noopener");
    }
    try { sessionStorage.setItem("gopani-name", data.name.split(" ")[0]); } catch {}
    router.push("/thank-you");
  }

  const clear = (k: keyof Errors) => () => setErrors((e) => (e[k] ? { ...e, [k]: undefined } : e));

  return (
    <section id="contact" className="bg-ink">
      <div className="wrap sec">
        <div className="sec-head center">
          <p className="m m-orange sec-num" data-reveal>13 — Let&apos;s talk</p>
          <SplitHeading className="h-section" text="Let's build something that grows." />
          <p className="lead" data-reveal>Tell us about your project — a few lines is enough to start. Free consultation, no pressure, and no generic sales pitch on the call.</p>
        </div>

        <div className="contact-grid">
          <form className="form" onSubmit={onSubmit} noValidate data-reveal>
            <h3>Send us a message</h3>
            <div className="form-row">
              <div>
                <label className="lbl" htmlFor="cName">Your name</label>
                <input className="fld" id="cName" name="name" type="text" autoComplete="name" placeholder="Rahul Sharma" required aria-invalid={!!errors.name} onInput={clear("name")} />
                <span className="err">{errors.name}</span>
              </div>
              <div>
                <label className="lbl" htmlFor="cPhone">Phone / WhatsApp</label>
                <input className="fld" id="cPhone" name="phone" type="tel" autoComplete="tel" placeholder="+91 98765 43210" required aria-invalid={!!errors.phone} onInput={clear("phone")} />
                <span className="err">{errors.phone}</span>
              </div>
            </div>
            <div>
              <label className="lbl" htmlFor="cEmail">Email</label>
              <input className="fld" id="cEmail" name="email" type="email" autoComplete="email" placeholder="you@company.com" required aria-invalid={!!errors.email} onInput={clear("email")} />
              <span className="err">{errors.email}</span>
            </div>
            <div>
              <label className="lbl" htmlFor="cService">What do you need?</label>
              <select className="fld" id="cService" name="service" value={service} onChange={(e) => setService(e.target.value)}>
                <option>Not sure yet</option>
                {SERVICES.map((s) => <option key={s.id}>{s.title}</option>)}
              </select>
            </div>
            <div>
              <label className="lbl" htmlFor="cMsg">Tell us about your project <span className="opt">(optional)</span></label>
              <textarea className="fld" id="cMsg" name="message" rows={4} placeholder="A few lines about your business and goals" />
            </div>
            {failed && <p className="form-msg" role="alert">We couldn&apos;t send that. Please try again or message us on WhatsApp.</p>}
            <div className="form-foot">
              <span className="form-note"><Lock size={14} /> Your details are safe with us.</span>
              <button type="submit" className="btn btn-blue" disabled={sending}>
                {sending ? "Sending…" : "Send Message"} <ArrowRight size={18} />
              </button>
            </div>
          </form>

          <div className="side">
            <div className="person-card" data-reveal data-delay="0.1">
              <div className="top">
                <span className="av">{CONFIG.founder.initials}</span>
                <div>
                  <b>{CONFIG.founder.name}</b>
                  <span className="role">{CONFIG.founder.role}</span>
                </div>
              </div>
              <p>Prefer to talk instead of filling a form? Reach me directly — I read every enquiry myself, and I&apos;ll tell you honestly if we&apos;re not the right fit for your project.</p>
              <a href={telHref} className="contact-line"><Phone size={18} /> {CONFIG.phone}</a>
              <a href={waLink()} className="contact-line wa" target="_blank" rel="noopener"><MessageCircle size={18} /> Chat on WhatsApp</a>
              <a href={mailHref} className="contact-line"><Mail size={18} /> {CONFIG.email}</a>
            </div>
            <div className="promise" data-reveal data-delay="0.2"><Zap size={18} /> We reply within 24 hours, usually much faster.</div>
            <div className="contact-meta" data-reveal data-delay="0.25">
              {CONFIG.address && (
                <div><MapPin size={16} /><a href={CONFIG.mapUrl} target="_blank" rel="noopener">{CONFIG.address}</a></div>
              )}
              <div><Clock size={16} /><span>{CONFIG.hours}</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
