import type { Metadata } from "next";
import { Hero, StatBand, FeatureRow, Term, CtaBand } from "@/components/sections";

export const metadata: Metadata = {
  title: "Infrastructure Management",
  description: "Terraform, Kubernetes, vCenter and Proxmox from one governed control plane.",
};

export default function Page() {
  return (
    <>
      <Hero eyebrow="Infrastructure Management" accent="#0070f3"
        title="Terraform, Kubernetes, vCenter and Proxmox — one governed workflow"
        sub="Most orchestration platforms assume everything you run is in a public cloud. Realm9 treats the racks you already own as first-class infrastructure, with the same policy, state and audit model."
        ctas={[{ label: "Start free", href: "/pricing" }, { label: "Talk to an engineer", href: "/enterprise/contact" }]} />

      <StatBand stats={[
        { n: "Terraform", l: "and OpenTofu, with remote state, locking and versioning" },
        { n: "AWS · Azure", l: "GCP and OCI, with per-account and per-project scoping" },
        { n: "vCenter", l: "Proxmox and bare metal through the same control plane" },
        { n: "3 scanners", l: "Checkov, Trivy and TruffleHog gating every plan" },
      ]} />

      <section className="pad"><div className="wrap stack-24" style={{ gap: 80 }}>
        <FeatureRow accent="#0070f3"
          title="Plans that get reviewed before they get applied"
          body="Every run produces a diff, a policy report, a secret scan and a cost delta in one place. Approval routes by what the change actually does, not by which repository it came from."
          bullets={["Policy-as-code gates with clear pass, warn and block outcomes", "Cost estimation attached to the plan, with thresholds that require sign-off", "Secret detection before apply, not after a leak", "Full run history with the plan, the approver and the resulting state"]}
          media={<Term title="run #4,182 · production-vpc" html={`<span class="c-dim">stage</span>  plan      <span class="c-ok">✓ 2m 14s</span>
<span class="c-dim">stage</span>  policy    <span class="c-ok">✓ checkov 32/33</span>  <span class="c-warn">1 warn</span>
<span class="c-dim">stage</span>  secrets   <span class="c-ok">✓ clean</span>
<span class="c-dim">stage</span>  cost      <span class="c-num">+$318/mo</span>  <span class="c-warn">⚑ gate</span>
<span class="c-dim">stage</span>  approve   <span class="c-warn">⧗ waiting</span> <span class="c-fn">@platform-leads</span>
<span class="c-dim">stage</span>  apply     <span class="c-dim">blocked</span>

<span class="c-com"># CKV_AWS_23 — security group rule has no description</span>
<span class="c-com"># non-blocking, tracked as tech debt R9-2211</span>`} />} />

        <FeatureRow flip accent="#0070f3"
          title="Drift you find out about on your terms"
          body="Someone changed a security group at 3am to unblock an incident. Realm9 notices, tells you what diverged, and prepares a remediation plan you approve rather than one that silently runs."
          bullets={["Scheduled and on-demand drift scans across every workspace", "Side-by-side diff of declared state against actual state", "Remediation plans queued for review, never auto-applied by default", "Drift trends by team and workspace so you can fix the cause"]}
          media={<Term title="realm9 drift · 12 workspaces" html={`WORKSPACE          DIVERGED   SINCE     SEVERITY
production-vpc            2   09-11     <span class="c-warn">medium</span>
payments-prod             0   —         <span class="c-ok">clean</span>
data-lake                 5   09-08     <span class="c-warn">high</span>
proxmox-build             0   —         <span class="c-ok">clean</span>

<span class="c-dim">production-vpc / aws_security_group.api</span>
  <span class="c-warn">~</span> ingress[3].cidr_blocks
      declared  <span class="c-str">["10.0.0.0/8"]</span>
      actual    <span class="c-str">["0.0.0.0/0"]</span>   <span class="c-warn">← changed out of band</span>

<span class="c-dim">remediation plan queued for</span> <span class="c-fn">@security</span>`} />} />

        <FeatureRow accent="#0070f3"
          title="The on-prem estate nobody else covers properly"
          body="vCenter, Proxmox, site-to-site VPN, CIS benchmark scanning and Zabbix integration. If a meaningful share of your infrastructure lives in your own building, this is the difference between a tool that fits and one that does not."
          bullets={["Provision and reclaim VMs on vCenter and Proxmox from the same catalogue", "CIS benchmark scanning with exportable evidence", "Site-to-site VPN and private connectivity for hybrid estates", "Monitoring integration so bookings and alerts share one view"]}
          media={<Term title="realm9 providers" html={`PROVIDER        STATUS      MANAGED   LAST SYNC
aws/prod        <span class="c-ok">connected</span>       412   14s ago
azure/eu        <span class="c-ok">connected</span>        88   22s ago
gcp/analytics   <span class="c-ok">connected</span>        31   18s ago
vcenter/ldn-1   <span class="c-ok">connected</span>       240   9s ago
proxmox/build   <span class="c-ok">connected</span>        96   11s ago
baremetal/gpu   <span class="c-ok">connected</span>        32   30s ago

<span class="c-dim">one catalogue · one policy engine · one ledger</span>`} />} />
      </div></section>

      <CtaBand title="Bring your racks into the same workflow as your cloud"
        sub="Free forever when self-hosted. No consumption meter on infrastructure you already own."
        primary={{ label: "Start free", href: "/pricing" }} secondary={{ label: "Data centers", href: "/enterprise/data-centers" }} />
    </>
  );
}
