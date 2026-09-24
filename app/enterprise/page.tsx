import type { Metadata } from "next";
import { Hero, Cards, SectionHead, CtaBand, Section } from "@/components/sections";
import { Icons } from "@/components/icons";

export const metadata: Metadata = { title: "Enterprise — Identity, Audit and Deployment Control", description: "Realm9 for larger organisations: SAML and OIDC single sign-on, SCIM provisioning, role-based access, session controls, exportable audit history, and dedicated or self-hosted deployment." };

export default function Page() {
  return (
    <>
      <Hero eyebrow="Realm9 for Enterprise" accent="#0070f3"
        title="Governance that fits the way a large organisation already works"
        sub="Enterprise teams need more than features. They need Realm9 to use their identity provider, respect their approval structure, produce an audit record their security team can use, and run in a deployment model they are comfortable with."
        ctas={[{ label: "Talk to the team", href: "/enterprise/contact" }, { label: "Visit the Trust Center", href: "/enterprise/trust-center" }]} />

      <Section>
        <SectionHead title="Explore enterprise" />
        <Cards cols={2} items={[
          { icon: Icons.dc, accent: "var(--blue)", title: "Data Centers", desc: "Proxmox and VMware vCenter under the same Terraform, policy and approval process as your AWS and Azure accounts.", href: "/enterprise/data-centers" },
          { icon: Icons.gpu, accent: "var(--cyan)", title: "GPU", desc: "Use bookings, approvals and cost visibility to control access to expensive accelerated environments.", href: "/enterprise/gpu" },
          { icon: Icons.cases, accent: "var(--amber)", title: "Use cases", desc: "The operational problems platform, release and infrastructure teams bring to Realm9.", href: "/enterprise/use-cases" },
          { icon: Icons.lock, accent: "var(--green)", title: "Trust Center", desc: "Deployment isolation, identity integration, data protection, audit and security testing.", href: "/enterprise/trust-center" },
        ]} />
      </Section>

      <Section alt>
        <SectionHead title="What enterprise teams rely on" />
        <Cards items={[
          { title: "Your identity provider", desc: "Single sign-on through SAML or OIDC with providers such as Okta, Microsoft Entra ID and Google Workspace, and SCIM to keep users and groups in step." },
          { title: "Approval structures that match yours", desc: "Multi-level workflows with named approvers or role-based steps, required approval counts and information requests, set per environment type or Terraform project." },
          { title: "Session and access controls", desc: "Limits on concurrent sessions and devices, optional IP binding and device fingerprinting, and API keys for automation." },
          { title: "An audit record security can use", desc: "Authentication, user, environment, booking, workflow, Terraform, FinOps and integration events recorded, reviewable in Realm9 and exportable." },
          { title: "Deployment options", desc: "A dedicated single-tenant cloud environment per customer, or a self-hosted installation where your infrastructure policies require it." },
          { title: "Connected to your service management", desc: "ServiceNow integration brings configuration-item data into environment records, so Realm9 and your CMDB describe the same estate." },
        ]} />
      </Section>

      <CtaBand title="Tell us how your organisation works"
        sub="A conversation with the team about your identity setup, approval model and deployment requirements — and whether Realm9 fits them."
        primary={{ label: "Contact us", href: "/enterprise/contact" }} secondary={{ label: "Trust Center", href: "/enterprise/trust-center" }} />
    </>
  );
}
