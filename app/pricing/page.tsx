import type { Metadata } from "next";
import { Hero, SectionHead, CtaBand, Section } from "@/components/sections";
import PricingPlans from "@/components/pricing-plans";
import { METERS, COMPARE, FAQ } from "@/lib/pricing";

export const metadata: Metadata = { title: "Pricing — Per-Request Infrastructure Governance", description: "Priced on governed actions (requests, approvals, leases), not resource inventory. Start free on SaaS or self-hosted. Scale to Starter, Enterprise or Ultimate as your team grows." };

export default function Page() {
  return (
    <>
      <Hero eyebrow="Pricing" accent="#0070f3"
        title="Priced on what you govern, not on how much infrastructure you own"
        sub="Per-resource pricing punishes you for managing more of your estate. Realm9 meters governed actions — requests, approvals and leases — so the bill tracks platform use rather than inventory." />

      <section style={{ padding: "48px 0 20px" }}><div className="wrap">
        <PricingPlans />
        <p className="small center" style={{ marginTop: 22 }}>
          All prices in USD. Annual plans are billed yearly. Self-hosted deployments never meter infrastructure you already own.
        </p>
      </div></section>

      <Section>
        <SectionHead center title="Metered usage"
          sub="Included allowances cover most teams. Beyond them, you pay for what you actually govern." />
        <table className="tbl" style={{ maxWidth: 820, margin: "0 auto" }}>
          <thead><tr><th>Meter</th><th>What it counts</th><th style={{ textAlign: "right" }}>Overage</th></tr></thead>
          <tbody>
            {METERS.map(([m, d, p]) => (
              <tr key={m}><td><strong>{m}</strong></td><td>{d}</td><td style={{ textAlign: "right" }} className="mono">{p}</td></tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section alt>
        <SectionHead title="Compare plans" />
        <table className="tbl">
          <thead><tr><th style={{ width: "34%" }}>Feature</th><th>Community</th><th>Team</th><th>Enterprise</th></tr></thead>
          <tbody>
            {COMPARE.map((r) => (
              <tr key={r[0]}><td><strong>{r[0]}</strong></td><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td></tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section>
        <SectionHead title="Questions" />
        <div className="grid g2">
          {FAQ.map(([q, a]) => (
            <div className="card" key={q}><h4 style={{ marginBottom: 9 }}>{q}</h4><p>{a}</p></div>
          ))}
        </div>
      </Section>

      <CtaBand title="Deploy the free tier today"
        sub="Ten minutes to your first governed environment. No credit card, no call."
        primary={{ label: "Get started", href: "/enterprise/contact" }} secondary={{ label: "Talk to an engineer", href: "/enterprise/contact" }} />
    </>
  );
}
