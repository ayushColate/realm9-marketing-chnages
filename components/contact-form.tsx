"use client";

import { useState, type FormEvent } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const ok = String(f.get("name")).trim() && String(f.get("email")).includes("@") && String(f.get("company")).trim();
    setError(!ok);
    setSent(!!ok);
    if (ok) e.currentTarget.reset();
    // TODO: POST to your CRM endpoint here.
  }

  return (
    <form className="stack-16" onSubmit={onSubmit} noValidate>
      <div className="grid g2" style={{ gap: 14 }}>
        <div className="field"><label htmlFor="name">Full name</label><input className="input" id="name" name="name" /></div>
        <div className="field"><label htmlFor="email">Work email</label><input className="input" id="email" name="email" type="email" /></div>
      </div>
      <div className="grid g2" style={{ gap: 14 }}>
        <div className="field"><label htmlFor="company">Company</label><input className="input" id="company" name="company" /></div>
        <div className="field"><label htmlFor="size">Engineers</label>
          <select className="input" id="size" name="size">
            <option>1–50</option><option>51–250</option><option>251–1,000</option><option>1,000+</option>
          </select>
        </div>
      </div>
      <div className="field"><label htmlFor="topic">What brings you here</label>
        <select className="input" id="topic" name="topic">
          <option>Environment contention and booking</option>
          <option>Infrastructure and Terraform governance</option>
          <option>FinOps and cost attribution</option>
          <option>GPU capacity and fair-share</option>
          <option>Governing AI agents</option>
          <option>Data centre or air-gapped deployment</option>
          <option>Migration from another platform</option>
          <option>Startup program</option>
        </select>
      </div>
      <div className="field"><label htmlFor="msg">What does your estate look like?</label>
        <textarea className="input" id="msg" name="msg" rows={5}
          placeholder="Clouds, hypervisors, cluster sizes, team count, current tooling, and what is going wrong today." />
      </div>
      <div><button className="btn btn-primary btn-lg" type="submit">Send message</button></div>
      {sent && <p className="small" style={{ color: "var(--cyan)" }}>Thanks — we&apos;ve received this. An engineer will reply within one business day.</p>}
      {error && <p className="small" style={{ color: "var(--red)" }}>Add your name, work email and company so we know who to reply to.</p>}
    </form>
  );
}
