"use client";

import { useState } from "react";

export default function Waitlist() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);
  const [bad, setBad] = useState(false);

  function join() {
    if (email.includes("@")) { setDone(true); setBad(false); setEmail(""); }
    else setBad(true);
    // TODO: POST to your waitlist endpoint here.
  }

  return (
    <div>
      <div className="waitlist" style={{ marginLeft: 0 }}>
        <input className="input" type="email" placeholder="you@company.com" aria-label="Work email"
          value={email} style={bad ? { borderColor: "var(--red)" } : undefined}
          onChange={(e) => { setEmail(e.target.value); setBad(false); }}
          onKeyDown={(e) => { if (e.key === "Enter") join(); }} />
        <button className="btn btn-primary" onClick={join}>Join waitlist</button>
      </div>
      {done && <p className="small" style={{ marginTop: 10, color: "var(--cyan)" }}>
        Thanks — you&apos;re on the list. We&apos;ll reach out before the next cohort opens.
      </p>}
    </div>
  );
}
