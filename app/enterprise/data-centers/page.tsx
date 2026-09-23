import type { Metadata } from "next";
import { Hero, FeatureRow, Term, CtaBand } from "@/components/sections";

export const metadata: Metadata = { title: "On-Prem Infrastructure Governance", description: "VMware vCenter and Proxmox get the same Terraform workflow, policy checks, CIS scanning, and audit trails as AWS, Azure, and GCP. Govern your data center on equal footing with cloud." };

export default function Page() {
  return (
    <>
      <Hero eyebrow="Enterprise · Data Centers" accent="#0070f3"
        title="The estate you own, managed as well as the estate you rent"
        sub="Modern infrastructure platforms quietly assume everything runs in a public cloud. If a meaningful share of yours does not, most of the category stops being useful. Realm9 treats your racks as first-class."
        ctas={[{ label: "Talk to an engineer", href: "/enterprise/contact" }, { label: "See pricing", href: "/pricing" }]} />

      <section className="pad"><div className="wrap stack-24" style={{ gap: 80 }}>
        <FeatureRow accent="#0070f3"
          title="Hypervisors as a provisioning target"
          body="vCenter and Proxmox sit in the same catalogue as AWS and Azure. A requester picks what they need; policy decides where it lands."
          bullets={["VM lifecycle on vCenter and Proxmox — create, snapshot, reclaim", "Bare-metal allocation with the same lease, quota and expiry model", "Placement policy that can prefer on-prem capacity before it reaches for cloud", "Capacity headroom visible next to booking demand, so you know when to buy"]}
          media={<Term title="realm9 capacity --site ldn-dc1" html={`POOL                 TOTAL   IN USE   QUEUED
vcenter/prod-a         240      <span class="c-num">198</span>       <span class="c-warn">6</span>
vcenter/prod-b         240      <span class="c-num">121</span>       <span class="c-ok">0</span>
proxmox/build           96       <span class="c-num">88</span>      <span class="c-warn">14</span>
baremetal/gpu-01        32       <span class="c-num">31</span>      <span class="c-warn">22</span>

<span class="c-warn">! proxmox/build at 92% — 14 requests queued</span>
  <span class="c-dim">median wait 3h 40m · policy suggests +24 nodes</span>
<span class="c-dim">reclaimable now: 19 leases idle &gt; 72h</span>`} />} />

        <FeatureRow flip accent="#0070f3"
          title="Hybrid connectivity and hardened baselines"
          body="Site-to-site VPN, private connectivity and CIS benchmark scanning are part of the platform rather than a separate programme of work."
          bullets={["Site-to-site VPN and private links between sites and cloud regions", "CIS benchmark scanning with exportable evidence per host", "Zabbix and Prometheus integration so bookings and health share one view", "Offline update channel for air-gapped sites"]}
          media={<Term title="realm9 compliance --profile cis-l2" html={`HOST              PROFILE        PASS   FAIL   DRIFT
pve-ldn-01        rhel9-level2    218      4     <span class="c-ok">0</span>
pve-ldn-02        rhel9-level2    220      2     <span class="c-ok">0</span>
esxi-ldn-11       vmware-l1       164      0     <span class="c-warn">2</span>
esxi-ldn-12       vmware-l1       164      0     <span class="c-ok">0</span>

<span class="c-dim">evidence bundle</span>  cis-2026-09-13.zip  <span class="c-ok">signed</span>
<span class="c-dim">next scheduled</span>   2026-09-20 02:00 UTC`} />} />

        <FeatureRow accent="#0070f3"
          title="Sovereign and regulated deployment"
          body="Data residency, air-gapped operation and per-jurisdiction tenancy for organisations where the location of the control plane is a regulatory question, not a preference."
          bullets={["Fully air-gapped installation with no outbound connectivity", "Control plane and ledger pinned to a named jurisdiction", "Separate tenants per legal entity with independent audit boundaries", "Offline licence activation and update bundles"]}
          media={<Term title="realm9 status --deployment" html={`mode              <span class="c-ok">air-gapped</span>
outbound          <span class="c-ok">none</span>  <span class="c-dim">(0 egress rules)</span>
control plane     ldn-dc1  <span class="c-dim">jurisdiction: GB</span>
ledger            ldn-dc1  <span class="c-dim">jurisdiction: GB</span>
tenants           4  <span class="c-dim">isolated audit boundaries</span>
update channel    <span class="c-str">offline-bundle</span>  <span class="c-dim">v4.2.1 signed</span>
telemetry         <span class="c-ok">disabled</span>

<span class="c-dim">no data has left this boundary</span>`} />} />
      </div></section>

      <CtaBand title="Bring your data centre into the same workflow as your cloud"
        sub="One catalogue, one policy engine, one ledger — wherever the capacity physically sits."
        primary={{ label: "Contact us", href: "/enterprise/contact" }} secondary={{ label: "GPU capacity", href: "/enterprise/gpu" }} />
    </>
  );
}
