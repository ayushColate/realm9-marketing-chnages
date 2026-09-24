import type { Metadata } from "next";
import { Hero, Cards, SectionHead, CtaBand, Section } from "@/components/sections";
import { Icons } from "@/components/icons";

export const metadata: Metadata = {
  title: "Realm9 for Startups",
  description: "A practical way for growing engineering teams to manage shared environments, Terraform changes and cloud cost before manual coordination becomes a bottleneck.",
};

export default function Page() {
  return (
    <>
      <Hero eyebrow="Realm9 for Startups" accent="#0d9488"
        title="Build the operating habits before the operating overhead"
        sub="Growing teams need to ship quickly, but shared environments, Terraform changes and cloud accounts become harder to coordinate long before there is a dedicated platform team. Realm9 gives engineers a defined workflow without adding a separate process for every request."
        ctas={[{ label: "See plans", href: "/pricing" }, { label: "Talk to the team", href: "/enterprise/contact" }]} />

      <Section>
        <SectionHead center title="Start with the work that is already getting harder"
          sub="Realm9 brings environment requests, bookings, Terraform review and cost visibility into one platform, so small teams can replace ad-hoc coordination with a record they can grow with." />
        <Cards items={[
          { icon: Icons.env, accent: "var(--cyan)", title: "Share environments without the guesswork", desc: "Give each development, test or staging environment an owner, a status and booking rules. Teams can request time through an approval workflow instead of relying on chat messages." },
          { icon: Icons.infra, accent: "var(--blue)", title: "Review infrastructure changes before apply", desc: "Connect a Git repository, create workspaces, and run Terraform plans with policy checks and approval gates before an infrastructure change is applied." },
          { icon: Icons.shield, accent: "var(--green)", title: "Keep decisions in the record", desc: "Requests, approvals, bookings and Terraform activity are written to Realm9’s audit history, making it easier to answer what changed and who approved it." },
          { icon: Icons.finops, accent: "var(--amber)", title: "Make cost part of the conversation", desc: "When you reach Ultimate, connect AWS and Azure cost data, investigate unusual spend and set Infracost thresholds on Terraform plans." },
          { icon: Icons.r9, accent: "var(--pink)", title: "Use an assistant that knows the project", desc: "R9 works in the Terraform editor with your own model provider key on Free and Starter, helping your team inspect and edit the project without leaving its normal review path." },
          { icon: Icons.dc, accent: "var(--purple)", title: "Keep a path to on-prem", desc: "Enterprise adds Proxmox and VMware vCenter alongside AWS and Azure, so a later infrastructure change does not require teams to adopt a new operating model." },
        ]} />
      </Section>

      <Section alt>
        <SectionHead title="A sensible starting point" sub="You do not need to adopt every module at once. Begin where handoffs are creating the most friction, then add controls as your team and estate grow." />
        <Cards cols={3} items={[
          { title: "Start Free", desc: "Use SaaS or self-hosted Free for environment requests and bookings, Terraform with Git integration, remote state locking, drift detection and R9 with your own model key." },
          { title: "Move to Starter", desc: "Add capacity for more users, environments and projects, unlimited cloud connections, webhooks and email support. Starter has a 14-day free trial." },
          { title: "Add enterprise controls when needed", desc: "Enterprise adds SAML, SCIM, MFA, session security, Proxmox, VMware vCenter and included AI usage. Ultimate adds FinOps and full audit logs." },
        ]} />
      </Section>

      <CtaBand title="Start with the workflow your team needs now"
        sub="Realm9’s Free plan has no time limit and no credit-card requirement. When your needs change, the same projects, environments and workflows remain in place."
        primary={{ label: "See plans", href: "/pricing" }} secondary={{ label: "Talk to the team", href: "/enterprise/contact" }} />
    </>
  );
}
