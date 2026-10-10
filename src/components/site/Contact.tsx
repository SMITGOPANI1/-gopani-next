"use client";

import { useEffect, useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { CONFIG, mailHref } from "@/config/site";
import { SERVICES, SERVICE_BY_ID } from "@/config/services";
import { emailOk, sendForm } from "@/lib/forms";
import { SplitHeading } from "./Split";
import { ArrowRight } from "./icons";

type Errors = Partial<Record<"name" | "email", string>>;

const STAGES = [
  "I'm starting something new",
  "I'm building a product",
  "I'm growing an existing business",
  "I need help with a system I already have",
  "Something else",
];

/** "Get in touch" section. Every "Book a Free Call" button links here (/#contact). */
export default function Contact() {
  const router = useRouter();
  const [service, setService] = useState(SERVICES[0].title);
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [failed, setFailed] = useState(false);

  // "Discuss your …" buttons on service pages link to /?service=<id>#contact.
  // Read it after mount (not via useSearchParams) so this section is server-rendered
  // with the rest of the page and its scroll animations are set up with everything else.
  useEffect(() => {
    const preselected = SERVICE_BY_ID[new URLSearchParams(window.location.search).get("service") ?? ""]?.title;
    if (preselected) setService(preselected); // eslint-disable-line react-hooks/set-state-in-effect -- sync from the ?service= link
  }, []);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const fd = new FormData(f);
    const get = (k: string) => String(fd.get(k) ?? "").trim();
    const data = { form: "Contact", name: get("name"), email: get("email"), company: get("company"), stage: get("stage"), service: get("service"), message: get("message") };

    const errs: Errors = {};
    if (data.name.length < 2) errs.name = "Please enter your name";
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
      // No form service set up yet: open the visitor's email app with the details filled in.
      const body = `Name: ${data.name}\nEmail: ${data.email}\nCompany: ${data.company}\nWhere we are: ${data.stage}\nNeed help with: ${data.service}\n\n${data.message}`;
      window.open(`${mailHref}?subject=${encodeURIComponent(`New enquiry from ${data.name}`)}&body=${encodeURIComponent(body)}`, "_blank", "noopener");
    }
    try { sessionStorage.setItem("karmahubai-name", data.name.split(" ")[0]); } catch {}
    router.push("/thank-you");
  }

  const clear = (k: keyof Errors) => () => setErrors((e) => (e[k] ? { ...e, [k]: undefined } : e));

  return (
    <section id="contact" className="bg-ink">
      <div className="wrap sec contact-grid">
        <div className="contact-copy">
          <p className="m m-orange" data-reveal>Get in touch</p>
          <SplitHeading className="h-section" text="Tell us where you are. We'll map the path from there." />
          <p className="lead" data-reveal>
            A free consultation is a conversation about your goals, not a sales pitch. You&apos;ll leave with a clear
            view of options, a rough scope and a recommended first step.
          </p>
          <div className="contact-info" data-reveal>
            <a href={mailHref} className="contact-mail">{CONFIG.email}</a>
            {CONFIG.address && <span>{CONFIG.address}</span>}
          </div>
        </div>

        <form className="form" onSubmit={onSubmit} noValidate data-reveal data-delay="0.1">
          <div>
            <label className="lbl" htmlFor="cName">Name</label>
            <input className="fld" id="cName" name="name" type="text" autoComplete="name" required aria-invalid={!!errors.name} onInput={clear("name")} />
            <span className="err">{errors.name}</span>
          </div>
          <div>
            <label className="lbl" htmlFor="cEmail">Work email</label>
            <input className="fld" id="cEmail" name="email" type="email" autoComplete="email" required aria-invalid={!!errors.email} onInput={clear("email")} />
            <span className="err">{errors.email}</span>
          </div>
          <div>
            <label className="lbl" htmlFor="cCompany">Company</label>
            <input className="fld" id="cCompany" name="company" type="text" autoComplete="organization" />
          </div>
          <div>
            <label className="lbl" htmlFor="cStage">Where are you today?</label>
            <select className="fld" id="cStage" name="stage" defaultValue={STAGES[1]}>
              {STAGES.map((s) => <option key={s}>{s}</option>)}
            </select>
          </div>
          <div>
            <label className="lbl" htmlFor="cService">What do you need help with?</label>
            <select className="fld" id="cService" name="service" value={service} onChange={(e) => setService(e.target.value)}>
              {SERVICES.map((s) => <option key={s.id}>{s.title}</option>)}
              <option>Not sure yet</option>
            </select>
          </div>
          <div>
            <label className="lbl" htmlFor="cMsg">Tell us a little more</label>
            <textarea className="fld" id="cMsg" name="message" rows={5} />
          </div>
          {failed && <p className="form-msg" role="alert">We couldn&apos;t send that. Please try again or email us at {CONFIG.email}.</p>}
          <button type="submit" className="btn btn-blue form-submit" disabled={sending}>
            {sending ? "Sending…" : "Book a Free Call"} <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </section>
  );
}
