import type { Metadata } from "next";
import Link from "next/link";
import { Hero, Cards, SectionHead, Section } from "@/components/sections";
import { Icons } from "@/components/icons";

export const metadata: Metadata = { title: "Security, Audit & Compliance", description: "SOC 2, ISO 27001, PCI DSS audit exports. Deployment options: SaaS, self-hosted, air-gapped. SAML/SCIM/MFA, 12-month audit retention, CIS scanning, break-glass access." };

const CERTS: [string, string][] = [
  ["SOC 2 Type II", "Annual audit. Report available under NDA."],
  ["ISO 27001", "Information security management system certified."],
  ["GDPR", "DPA available. EU data residency supported."],
  ["CIS Benchmarks", "Scanning built into the product and applied to our own estate."],
];

const ROWS: [string, string][] = [
  ["Deployment models", "Managed SaaS, self-hosted in your cloud account, self-hosted in your data centre, or fully air-gapped with offline update bundles. Feature parity across all four."],
  ["Data residency", "Control plane and ledger data can be pinned to a named jurisdiction. No cross-boundary transfer without explicit configuration."],
  ["Credential handling", "Cloud and hypervisor credentials are encrypted at rest with envelope encryption and are never written to logs. Self-hosted deployments can use your own KMS or HashiCorp Vault."],
  ["Encryption", "TLS 1.3 in transit. AES-256 at rest. Optional customer-managed keys on enterprise plans."],
  ["Authentication", "SAML 2.0 and OIDC single sign-on, SCIM 2.0 provisioning and deprovisioning, and enforced MFA. Available on every paid plan."],
  ["Authorisation", "Role-based access control with per-tenant, per-workspace and per-environment scoping. Separation of duties enforced structurally — a requester cannot approve their own request."],
  ["Audit logging", "Thirteen-plus event categories captured for every action by every principal, human or machine. Included in the free tier. Twelve-month retention as standard on enterprise plans, extensible on request."],
  ["Agent identity", "Every non-human principal has a named owner, a quota, a budget ceiling and a policy scope. Leases are time-bounded and revocable in a single call."],
  ["Vulnerability handling", "Continuous dependency scanning, annual third-party penetration testing, and a coordinated disclosure policy. Critical findings triaged within 24 hours."],
  ["Sub-processors", "Published list maintained with 30 days' notice before any change. Self-hosted and air-gapped deployments use none."],
  ["Availability", "99.95% contractual target for managed deployments. Public status page. Incident post-mortems shared with affected customers."],
  ["Business continuity", "Documented backup, restore and disaster recovery procedures, tested annually. Source code escrow available on enterprise agreements."],
];

export default function Page() {
  return (
    <>
      <Hero eyebrow="Enterprise · Trust Center" accent="#15803d"
        title="How Realm9 is built, hosted and secured"
        sub="Realm9 governs the systems you cannot afford to get wrong. Here is our posture, in the level of detail your security team will ask for anyway."
        ctas={[{ label: "Request the full pack", href: "/enterprise/contact" }]} />

      <Section>
        <SectionHead title="Certifications and attestations" />
        <Cards cols={4} items={CERTS.map(([title, desc]) => ({ title, desc, icon: Icons.shield }))} />
      </Section>

      <Section alt>
        <SectionHead title="Architecture and data handling" />
        <table className="tbl">
          <thead><tr><th style={{ width: "32%" }}>Area</th><th>Position</th></tr></thead>
          <tbody>{ROWS.map(([a, b]) => <tr key={a}><td><strong>{a}</strong></td><td>{b}</td></tr>)}</tbody>
        </table>
      </Section>

      <section className="pad"><div className="narrow center">
        <h3 style={{ marginBottom: 14 }}>Reporting a vulnerability</h3>
        <p className="lede" style={{ margin: "0 auto" }}>
          If you believe you have found a security issue in Realm9, contact{" "}
          <span className="mono" style={{ color: "var(--blue)" }}>security@realm9.app</span>. We acknowledge within one
          business day and will keep you updated through to resolution. We do not pursue legal action against good-faith research.
        </p>
        <div className="btn-row" style={{ justifyContent: "center", marginTop: 26 }}>
          <Link className="btn btn-secondary" href="/enterprise/contact">Request the security pack</Link>
        </div>
      </div></section>
    </>
  );
}
