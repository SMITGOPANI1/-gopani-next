"use client";

import { useState, type FormEvent } from "react";
import { emailOk, sendForm } from "@/lib/forms";

export default function Newsletter() {
  const [msg, setMsg] = useState("");
  const [done, setDone] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = e.currentTarget;
    const email = String(new FormData(f).get("email") ?? "").trim();
    if (!emailOk(email)) { setMsg("Please enter a valid email."); return; }
    setMsg("");
    await sendForm({ form: "Newsletter", email });
    f.reset();
    setDone(true);
  }

  if (done) return <p style={{ color: "#fff", fontSize: 15 }}>Subscribed. Thanks for joining.</p>;

  return (
    <form className="news" onSubmit={onSubmit} noValidate aria-label="Newsletter">
      <input type="email" name="email" placeholder="Your email for monthly tips" aria-label="Email for newsletter" required />
      <button type="submit">Subscribe</button>
      {msg && <span className="form-msg" style={{ flexBasis: "100%" }}>{msg}</span>}
    </form>
  );
}
