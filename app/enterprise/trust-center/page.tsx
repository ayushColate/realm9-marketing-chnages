import type { Metadata } from "next";
import Link from "next/link";
import { Hero, Cards, SectionHead, Section } from "@/components/sections";
import { Icons } from "@/components/icons";

export const metadata: Metadata = { title: "Trust Center — Security, Identity and Audit", description: "How Realm9 is deployed and secured: dedicated single-tenant infrastructure or self-hosted deployment, SAML SSO and SCIM, encryption at rest and in transit, role-based access, SIEM-exportable audit trails and independent penetration testing." };

const PILLARS: [string, string][] = [
  ["Dedicated deployment", "Each cloud customer runs in an isolated, single-tenant environment. Self-hosted deployment is also available."],
  ["Enterprise identity", "SAML 2.0 single sign-on, SCIM provisioning, and MFA enforced through your identity provider."],
  ["Encryption", "Customer data is encrypted at rest and in transit."],
  ["Independent testing", "Penetration testing against production-equivalent Realm9 deployments."],
];

const ROWS: [string, string][] = [
  ["Deployment security", "Each customer environment is provisioned in an isolated cloud account or tenancy using standardised Infrastructure-as-Code and hardened baseline configurations, with a web application firewall and edge protection. Provisioning and de-provisioning follow controlled workflows."],
  ["Identity and access", "Sign-in through your identity provider with SAML 2.0, with MFA and conditional access applied by that provider. SCIM keeps users and groups in step, and optional governed just-in-time onboarding controls first access."],
  ["Authorisation", "Role-based access control with admin, provisioner, user and viewer roles. Approval workflows and approver configuration support separation of duties for environment and infrastructure changes."],
  ["Data protection", "Encryption at rest and in transit, isolated database and storage per customer, and restricted access to databases and storage. Cloud and hypervisor credentials can be held in AWS Secrets Manager, Azure Key Vault, HashiCorp Vault or OpenBao."],
  ["Audit and monitoring", "Audit records cover access, role changes, environment requests, approvals, provisioning, Terraform activity and administrative actions. They can be reviewed in Realm9 and exported to your SIEM. Platform and infrastructure activity is logged and monitored, with alerting for suspicious behaviour."],
  ["Session controls", "Administrators can limit concurrent sessions and devices per user, and require IP address binding and device fingerprinting."],
  ["Security testing", "Independent penetration testing against production-equivalent deployments, periodic security assessments, and findings tracked through remediation and validation."],
  ["Customer-controlled boundaries", "You keep control of your identity provider policies, MFA and conditional access, user lifecycle and group membership, role mappings and approvers, optional network access restrictions, and revocation of trust relationships."],
];

const DOCS = [
  "Penetration test executive summary",
  "Security architecture overview",
  "Cloud deployment architecture",
  "Access control and identity integration guide",
];

export default function Page() {
  return (
    <>
      <Hero eyebrow="Enterprise · Trust Center" accent="#15803d"
        title="How Realm9 is deployed, secured and audited"
        sub="Realm9 manages access to environments and infrastructure, so its own security has to hold up to review. This page sets out how deployments are isolated, how identity and access work, how data is protected, and what records are available to your security team."
        ctas={[{ label: "Request security documents", href: "/enterprise/contact" }]} />

      <Section>
        <SectionHead title="Security foundations" />
        <Cards cols={4} items={PILLARS.map(([title, desc]) => ({ title, desc, icon: Icons.shield }))} />
      </Section>

      <Section alt>
        <SectionHead title="Architecture, access and data handling" />
        <table className="tbl">
          <thead><tr><th style={{ width: "32%" }}>Area</th><th>Approach</th></tr></thead>
          <tbody>{ROWS.map(([a, b]) => <tr key={a}><td><strong>{a}</strong></td><td>{b}</td></tr>)}</tbody>
        </table>
      </Section>

      <Section>
        <SectionHead title="Documents available on request" sub="Shared with prospective and existing customers as part of a security review." />
        <Cards cols={4} items={DOCS.map((title) => ({ title, desc: "Available on request.", icon: Icons.lock }))} />
      </Section>

      <section className="pad"><div className="narrow center">
        <h3 style={{ marginBottom: 14 }}>Reporting a security issue</h3>
        <p className="lede" style={{ margin: "0 auto" }}>
          If you believe you have found a security issue in Realm9, contact{" "}
          <span className="mono" style={{ color: "var(--blue)" }}>security@realm9.app</span>. Please include enough detail
          for us to reproduce the issue, and allow us time to investigate before sharing it publicly.
        </p>
        <div className="btn-row" style={{ justifyContent: "center", marginTop: 26 }}>
          <Link className="btn btn-secondary" href="/enterprise/contact">Request security documents</Link>
        </div>
      </div></section>
    </>
  );
}
