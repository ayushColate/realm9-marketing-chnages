import Link from "next/link";
import { PLANS } from "@/lib/pricing";

export default function PricingPlans() {
  return (
    <div className="price-grid cols-4">
      {PLANS.map((p) => (
        <div className={`plan ${p.featured ? "featured" : ""}`} key={p.name}>
          <div>
            <div className="plan-name">{p.name}</div>
            <p className="plan-desc" style={{ marginTop: 8 }}>{p.desc}</p>
          </div>

          <div>
            <div className="plan-price"><b>{p.price}</b>{p.unit && <span>{p.unit}</span>}</div>
            <p className="small">{p.note}</p>
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
  );
}
