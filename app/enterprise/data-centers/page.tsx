import type { Metadata } from "next";
import { Hero, FeatureRow, Term, CtaBand } from "@/components/sections";

export const metadata: Metadata = { title: "On-Prem Infrastructure Governance — Proxmox and VMware vCenter", description: "Bring Proxmox and VMware vCenter into the same Terraform workflow, policy checks, approvals and audit trail as your AWS and Azure accounts." };

export default function Page() {
  return (
    <>
      <Hero eyebrow="Enterprise · Data Centers" accent="#0070f3"
        title="Your own data centre, governed like your cloud accounts"
        sub="Many infrastructure tools assume every workload runs in a public cloud. Realm9 supports Proxmox and VMware vCenter as connection targets, so on-prem changes follow the same review, approval and audit path as cloud changes."
        ctas={[{ label: "Talk to the team", href: "/enterprise/contact" }, { label: "See pricing", href: "/pricing" }]} />

      <section className="pad"><div className="wrap stack-24" style={{ gap: 80 }}>
        <FeatureRow accent="#0070f3"
          title="Hypervisors as first-class connections"
          body="Add a Proxmox or VMware vCenter connection alongside your AWS and Azure accounts. Terraform projects can target any of them, and teams work through the same projects, workspaces and runs."
          bullets={[
            "Proxmox and VMware vCenter connections next to AWS and Azure",
            "Plans, applies and destroys for VMs through the standard Terraform run",
            "Credentials held in your chosen secrets vault rather than in code",
            "Workspaces attached to environments, so bookings and provisioning stay linked",
          ]}
          media={<Term title="connections" html={`NAME                 TYPE              STATUS
aws-production       AWS               <span class="c-ok">connected</span>
azure-shared         Azure             <span class="c-ok">connected</span>
dc1-proxmox          Proxmox           <span class="c-ok">connected</span>
dc1-vcenter          VMware vCenter    <span class="c-ok">connected</span>

<span class="c-dim">one run, policy and approval process for all four</span>`} />} />

        <FeatureRow flip accent="#0070f3"
          title="The same policy and approval rules on-prem"
          body="Policy profiles and approval gates apply to a project regardless of where it deploys. A VM change in your data centre is scanned and approved the same way as a change in a cloud account."
          bullets={[
            "Checkov, Trivy and TruffleHog findings on on-prem Terraform code",
            "Advisory, soft-mandatory or hard-mandatory enforcement per profile",
            "Named approvers and minimum approval counts per project",
            "Run history, logs and approvals recorded in the audit trail",
          ]}
          media={<Term title="run · dc1-build-runners" html={`<span class="c-dim">target</span>          dc1-proxmox
<span class="c-dim">run type</span>        plan

  <span class="c-ok">+</span> proxmox_vm_qemu.build_runner[3]

<span class="c-dim">policy</span>          <span class="c-ok">no blocking findings</span>
<span class="c-dim">approval</span>        pending · platform leads

<span class="c-dim">apply is held until approved</span>`} />} />

        <FeatureRow accent="#0070f3"
          title="Deployment that respects your boundaries"
          body="Organisations with on-prem estates often have strict rules about where management tools run. Realm9 can be deployed as a dedicated single-tenant cloud environment or self-hosted in your own infrastructure."
          bullets={[
            "Self-hosted deployment mode for running Realm9 in your environment",
            "Dedicated single-tenant cloud environment as an alternative",
            "Single sign-on through your identity provider, with SCIM provisioning",
            "Audit history exportable to your SIEM",
          ]} />
      </div></section>

      <CtaBand title="Bring your data centre into the same workflow as your cloud"
        sub="Proxmox, VMware vCenter, AWS and Azure — one set of projects, policies and approvals."
        primary={{ label: "Contact us", href: "/enterprise/contact" }} secondary={{ label: "Infrastructure Management", href: "/products/infrastructure-management" }} />
    </>
  );
}
