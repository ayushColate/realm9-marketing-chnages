"use client";

import Link from "next/link";
import { useState } from "react";
import { USE_CASES } from "@/lib/use-cases";
import { Icons } from "./icons";

export default function UseCaseSwitcher() {
  const [id, setId] = useState(USE_CASES[0].id);
  const u = USE_CASES.find((x) => x.id === id) ?? USE_CASES[0];

  return (
    <>
      <div className="pill-nav" role="tablist">
        {USE_CASES.map((x) => (
          <button key={x.id} role="tab" aria-selected={x.id === id}
            className={`pill ${x.id === id ? "active" : ""}`} onClick={() => setId(x.id)}>
            {x.name}
          </button>
        ))}
      </div>

      <div className="feature-row" style={{ ["--acc" as string]: u.accent }}>
        <div>
          <h2 className="grad" style={{ marginBottom: 16 }}>{u.head}</h2>
          <p className="lede">{u.body}</p>
          <ul className="bullets check" style={{ ["--acc" as string]: u.accent, marginTop: 26 }}>
            {u.points.map((p) => <li key={p}>{p}</li>)}
          </ul>
          <div className="btn-row" style={{ marginTop: 28 }}>
            <Link className="btn btn-secondary" href="/enterprise/contact">Discuss {u.name.toLowerCase()}</Link>
          </div>
        </div>
        <div className="fr-media" style={{
          display: "flex", alignItems: "center", justifyContent: "center",
          background: `linear-gradient(150deg, ${u.accent}10, transparent 60%)`,
        }}>
          <div style={{ textAlign: "center", padding: 30 }}>
            <div style={{
              width: 60, height: 60, margin: "0 auto 18px", borderRadius: 16,
              border: `1px solid ${u.accent}44`, display: "flex", alignItems: "center",
              justifyContent: "center", color: u.accent, background: "#fff",
            }}>
              <span style={{ width: 26, height: 26 }}>{Icons.cases}</span>
            </div>
            <div className="mono" style={{ color: u.accent }}>{u.name.toUpperCase()}</div>
            <p className="small" style={{ marginTop: 10, maxWidth: "26ch" }}>
              Available as a dedicated cloud deployment or self-hosted.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
