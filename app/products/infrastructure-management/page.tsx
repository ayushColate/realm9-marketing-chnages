import type { Metadata } from "next";
import { Hero, FeatureRow, Term, CtaBand, Section } from "@/components/sections";

export const metadata: Metadata = {
  title: "Infrastructure Management — Governed Terraform",
  description: "Git-connected Terraform projects, workspaces and runs with policy profiles, approval gates, locked remote state and drift alerts — across AWS, Azure, Proxmox and VMware vCenter.",
};

export default function Page() {
  return (
    <>
      <Hero eyebrow="Infrastructure Management" accent="#0070f3"
        title="Terraform changes that are reviewed before they are applied"
        sub="Infrastructure Management runs your Terraform from Git inside Realm9, checks every plan against the policies you choose, and holds changes for approval — whether the target is a cloud account or a hypervisor in your own data centre."
        ctas={[{ label: "Get started", href: "/" }, { label: "Talk to the team", href: "/enterprise/contact" }]} />

      <Section>
        <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
      <FeatureRow accent="#0070f3" title="Projects, workspaces and runs, connected to Git"
        body="Each project points at a repository, branch and path in GitHub or GitLab. Workspaces hold the variables for each deployment, and every plan, apply, destroy or refresh is recorded as a run with its logs and plan summary."
        bullets={[
          "Runs started manually, through the API, or from repository webhooks",
          "Each run executes as an isolated Kubernetes job with its own streamed logs",
          "Remote state with locking so two runs cannot change the same workspace at once",
          "Templates expose selected variables as simple forms, so teams can create workspaces without editing code",
        ]}
        media={<Term title="run · production-network" html={`<span class="c-com"># plan waiting for review</span>

  <span class="c-dim">type</span>             plan
  <span class="c-dim">trigger</span>          webhook · main
  <span class="c-dim">state lock</span>       <span class="c-ok">acquired</span>
  <span class="c-dim">policy checks</span>    <span class="c-warn">1 finding to review</span>
  <span class="c-dim">approval</span>         pending · project approvers

<span class="c-dim">apply is held until approved</span>`} />} />

      <FeatureRow flip accent="#0070f3" title="Policy checks with the enforcement level you set"
        body="Attach a policy profile to a project to scan each run for misconfiguration, exposed secrets, vulnerabilities and cost. You decide whether findings are advisory or whether they block the run."
        bullets={[
          "Scanners include Checkov, Trivy, TruffleHog, Infracost and OPA, plus your own scanner image",
          "Advisory, soft-mandatory and hard-mandatory enforcement modes",
          "Block thresholds and exclusions tuned per profile",
          "Policy results reviewed on the run, and overrides recorded in the audit log",
        ]} />

      <FeatureRow accent="#0070f3" title="Approval gates for changes that matter"
        body="Projects can require approval before apply. Named approvers and a minimum approval count keep production changes with the people responsible for them."
        bullets={[
          "Approve or reject from the run page, with notes kept on the run",
          "Approver lists and minimum approvals configured per project",
          "Role-based permissions separate viewing, running and managing Terraform",
          "Run creation, approvals and overrides captured in the Terraform audit trail",
        ]} />

      <FeatureRow flip accent="#0070f3" title="Know when code, permissions and reality diverge"
        body="When a repository changes, Realm9 re-analyses the project and raises drift alerts — new or removed resources, changed variables or modules, and permission gaps in the cloud role used to deploy."
        bullets={[
          "Drift alerts graded by severity, with acknowledge, ignore and resolve actions",
          "Missing and excess cloud-role permissions identified for each project",
          "Runs blocked while a project has unresolved drift or pending variables",
          "Credentials kept in AWS Secrets Manager, Azure Key Vault, HashiCorp Vault or OpenBao",
        ]} />

      <FeatureRow accent="#0070f3" title="The same process for cloud and on-prem"
        body="AWS and Azure cloud connections sit alongside Proxmox and VMware vCenter hypervisors, so a VM in your rack goes through the same policy, approval and audit path as a cloud instance."
        bullets={[
          "AWS and Azure connections with validated deployment roles",
          "Proxmox and VMware vCenter supported as on-prem targets",
          "Workspaces can be attached to environments and bookings in Environment Management",
          "Estimated cost from each plan feeds FinOps cost thresholds",
        ]} />
        </div>
      </Section>

      <CtaBand title="Put a review step between Terraform plan and apply"
        sub="Infrastructure Management shares users, approvals and audit with the rest of Realm9, so infrastructure changes and the environments they serve are governed together."
        primary={{ label: "Get started", href: "/" }} secondary={{ label: "Talk to the team", href: "/enterprise/contact" }} />
    </>
  );
}
