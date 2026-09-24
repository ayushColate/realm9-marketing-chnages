import type { Metadata } from "next";
import { Hero, SectionHead, CtaBand, Section } from "@/components/sections";
import PricingPlans from "@/components/pricing-plans";
import { LIMITS, COMPARE, FAQ } from "@/lib/pricing";

export const metadata: Metadata = { title: "Pricing — Free, Starter, Enterprise and Ultimate", description: "Start free on SaaS or self-hosted. Move to Starter for more capacity and cloud connections, Enterprise for SAML, SCIM and on-prem infrastructure, or Ultimate for FinOps, full audit logs and unlimited capacity." };

export default function Page() {
  return (
    <>
      <Hero eyebrow="Pricing" accent="#0070f3"
        title="Plans that grow with how you govern infrastructure"
        sub="Every plan includes environment requests, bookings and approvals, Terraform runs and drift detection. Higher plans add capacity, enterprise identity and security, on-prem infrastructure, FinOps and full audit logs." />

      <section style={{ padding: "48px 0 20px" }}><div className="wrap">
        <PricingPlans />
        <p className="small center" style={{ marginTop: 22 }}>
          All prices in USD. Starter and Enterprise can be tried free for 14 days. Enterprise and Ultimate pricing is agreed with our team.
        </p>
      </div></section>

      <Section>
        <SectionHead center title="Plan limits"
          sub="The Free plan allows slightly more capacity when you run it yourself, for a single organisation." />
        <table className="tbl">
          <thead><tr><th style={{ width: "26%" }}>Limit</th><th>Free · SaaS</th><th>Free · self-hosted</th><th>Starter</th><th>Enterprise</th><th>Ultimate</th></tr></thead>
          <tbody>
            {LIMITS.map((r) => (
              <tr key={r[0]}><td><strong>{r[0]}</strong></td><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td><td>{r[4]}</td><td>{r[5]}</td></tr>
            ))}
          </tbody>
        </table>
      </Section>

      <Section alt>
        <SectionHead title="Compare plans" />
        <table className="tbl">
          <thead><tr><th style={{ width: "34%" }}>Feature</th><th>Free</th><th>Starter</th><th>Enterprise</th><th>Ultimate</th></tr></thead>
          <tbody>
            {COMPARE.map((r) => (
              <tr key={r[0]}><td><strong>{r[0]}</strong></td><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td><td>{r[4]}</td></tr>
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

      <CtaBand title="Start with the Free plan"
        sub="Run it as SaaS or on your own infrastructure. No credit card required."
        primary={{ label: "Get started", href: "/" }} secondary={{ label: "Talk to the team", href: "/enterprise/contact" }} />
    </>
  );
}
