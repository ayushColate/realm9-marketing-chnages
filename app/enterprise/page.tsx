import type { Metadata } from "next";
import { Hero, StatBand, Cards, SectionHead, CtaBand, Section } from "@/components/sections";
import { Icons } from "@/components/icons";

export const metadata: Metadata = { title: "Enterprise", description: "Air-gapped deployment, data residency, SSO and SCIM, and an engineer on the call." };

export default function Page() {
  return (
    <>
      <Hero eyebrow="Realm9 for Enterprise" accent="#0070f3"
        title="Governed capacity at the scale and under the constraints you actually operate in"
        sub="Air-gapped deployment, data residency, SSO and SCIM, twelve-month audit retention, and a support model that puts an engineer on the call. Realm9 runs where your infrastructure runs."
        ctas={[{ label: "Talk to an engineer", href: "/enterprise/contact" }, { label: "Visit the Trust Center", href: "/enterprise/trust-center" }]} />

      <StatBand stats={[
        { n: "Air-gapped", l: "Full deployment with no outbound connectivity required" },
        { n: "SSO · SCIM", l: "SAML, OIDC and automated lifecycle provisioning" },
        { n: "12 months", l: "Audit retention as standard, extensible on request" },
        { n: "99.95%", l: "Contractual availability target for managed deployments" },
      ]} />

      <Section>
        <SectionHead title="Explore enterprise" />
        <Cards cols={2} items={[
          { icon: Icons.dc, accent: "var(--blue)", title: "Data Centers", desc: "vCenter, Proxmox and bare metal as first-class bookable capacity, with CIS scanning and hybrid connectivity built in.", href: "/enterprise/data-centers" },
          { icon: Icons.gpu, accent: "var(--cyan)", title: "GPU", desc: "Fair-share queues, quota borrowing, fractional allocation and chargeback for the most contended resource you own.", href: "/enterprise/gpu" },
          { icon: Icons.cases, accent: "var(--amber)", title: "Use cases", desc: "How telecom, healthcare, financial services and public sector organisations deploy Realm9.", href: "/enterprise/use-cases" },
          { icon: Icons.lock, accent: "var(--green)", title: "Trust Center", desc: "Certifications, architecture, sub-processors, vulnerability handling and data residency.", href: "/enterprise/trust-center" },
        ]} />
      </Section>

      <Section alt>
        <SectionHead title="What changes at enterprise scale" />
        <Cards items={[
          { title: "Multi-tenancy that maps to your org", desc: "Business units, subsidiaries and joint ventures as isolated tenants with their own policy, budgets and audit boundary — under one control plane." },
          { title: "Deployment on your terms", desc: "Managed, self-hosted in your VPC, in your own data centre, or fully air-gapped with offline updates. The feature set does not change." },
          { title: "Evidence, not screenshots", desc: "Audit exports formatted for SOC 2, ISO 27001, PCI DSS and internal audit, generated on a schedule rather than assembled by hand." },
          { title: "Data residency", desc: "Pin control plane and ledger data to a jurisdiction. Nothing traverses a boundary you have not explicitly approved." },
          { title: "Migration support", desc: "Structured migration from Plutora, Enov8, Terraform Enterprise, Spacelift or an internal Backstage build, with parallel running." },
          { title: "An engineer on the call", desc: "Named technical contact, shared channel, and quarterly architecture reviews. Escalation reaches someone who can change the code." },
        ]} />
      </Section>

      <CtaBand title="Tell us what you run"
        sub="Thirty minutes with an engineer who will tell you honestly whether Realm9 fits."
        primary={{ label: "Contact us", href: "/enterprise/contact" }} secondary={{ label: "Trust Center", href: "/enterprise/trust-center" }} />
    </>
  );
}
