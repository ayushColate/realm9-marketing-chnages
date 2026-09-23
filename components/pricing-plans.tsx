"use client";

import Link from "next/link";
import { useState } from "react";
import { PLANS } from "@/lib/pricing";

export default function PricingPlans() {
  const [cycle, setCycle] = useState<"yr" | "mo">("yr");

  return (
    <>
      <div className="center" style={{ marginBottom: 28 }}>
        <div className="pill-nav" style={{ justifyContent: "center", margin: 0 }}>
          <button className={`pill ${cycle === "yr" ? "active" : ""}`} onClick={() => setCycle("yr")}>Annual · save 20%</button>
          <button className={`pill ${cycle === "mo" ? "active" : ""}`} onClick={() => setCycle("mo")}>Monthly</button>
        </div>
      </div>

      <div className="price-grid">
        {PLANS.map((p) => (
          <div className={`plan ${p.featured ? "featured" : ""}`} key={p.name}>
            <div>
              <div className="plan-name">{p.name}</div>
              <p className="plan-desc" style={{ marginTop: 8 }}>{p.desc}</p>
            </div>

            <div>
              {p.mo === null ? (
                <>
                  <div className="plan-price"><b>Custom</b></div>
                  <p className="small">{p.unit}</p>
                </>
              ) : p.mo === 0 ? (
                <>
                  <div className="plan-price"><b>$0</b><span>forever</span></div>
                  <p className="small">Self-hosted, unlimited users</p>
                </>
              ) : (
                <>
                  <div className="plan-price"><b>${cycle === "yr" ? p.yr : p.mo}</b><span>{p.unit}</span></div>
                  <p className="small">{cycle === "yr" ? "Billed annually" : "Billed monthly"}</p>
                </>
              )}
            </div>

            <Link className={`btn ${p.ctaVariant}`} href={p.ctaHref}>{p.ctaLabel}</Link>

            <div className="meter">
              {p.meter.map(([k, v]) => (
                <div className="meter-row" key={k}><span>{k}</span><b>{v}</b></div>
              ))}
            </div>

            <ul className="bullets check" style={{ ["--acc" as string]: "var(--cyan)", fontSize: 13 }}>
              {p.features.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </>
  );
}
