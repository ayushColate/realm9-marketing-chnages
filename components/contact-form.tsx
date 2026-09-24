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
          <option>Environment requests and bookings</option>
          <option>Terraform governance and approvals</option>
          <option>FinOps and cloud cost visibility</option>
          <option>On-prem Proxmox or VMware vCenter</option>
          <option>R9 and the MCP Server</option>
          <option>Security, SSO and deployment options</option>
          <option>Plans and pricing</option>
          <option>Something else</option>
        </select>
      </div>
      <div className="field"><label htmlFor="msg">How do your teams work today?</label>
        <textarea className="input" id="msg" name="msg" rows={5}
          placeholder="Cloud accounts and hypervisors, how environments are requested and booked, how Terraform changes are approved, and what is not working." />
      </div>
      <div><button className="btn btn-primary btn-lg" type="submit">Send message</button></div>
      {sent && <p className="small" style={{ color: "var(--cyan)" }}>Thanks — we&apos;ve received this and will be in touch.</p>}
      {error && <p className="small" style={{ color: "var(--red)" }}>Add your name, work email and company so we know who to reply to.</p>}
    </form>
  );
}
