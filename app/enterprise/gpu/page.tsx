import type { Metadata } from "next";
import { Hero, StatBand, Cards, Term, SectionHead, CtaBand, Section } from "@/components/sections";

export const metadata: Metadata = { title: "GPU", description: "Fair-share, quota and chargeback for accelerated compute. Placement stays with your scheduler." };

export default function Page() {
  return (
    <>
      <Hero eyebrow="Enterprise · GPU" accent="#0d9488"
        title="Your GPUs are the most contended resource you own and the least governed"
        sub="Realm9 does not replace your scheduler. It sits above it — deciding who is entitled to what, for how long, at what cost, and who has to approve it. Placement stays with Kubernetes, Slurm or your hypervisor."
        ctas={[{ label: "Talk to an engineer", href: "/enterprise/contact" }, { label: "Data centers", href: "/enterprise/data-centers" }]} />

      <StatBand stats={[
        { n: "Fair-share", l: "Deserved quota per project, with controlled over-quota borrowing" },
        { n: "Fractional", l: "MIG partitioning and time-slicing exposed as bookable units" },
        { n: "Multi-cluster", l: "Kubernetes, Slurm, bare metal and neocloud in one entitlement view" },
        { n: "Chargeback", l: "Every GPU-hour attributed to a principal, a project and an approval" },
      ]} />

      <Section>
        <div className="feature-row">
          <div>
            <h3 style={{ marginBottom: 14 }}>We deliberately do not build a scheduler</h3>
            <p className="lede" style={{ fontSize: 16 }}>Kubernetes now handles GPUs properly. Dynamic Resource Allocation is GA, NVIDIA donated its DRA driver to the CNCF, and the KAI Scheduler is a CNCF sandbox project. Placement, bin-packing, gang scheduling and preemption are solved.</p>
            <p className="lede" style={{ fontSize: 16, marginTop: 16 }}>What is not solved is entitlement: which team is allowed how much, for how long, at what cost, and who signs off when they want more. Realm9 owns that layer and delegates placement downward.</p>
            <ul className="bullets" style={{ ["--acc" as string]: "var(--cyan)", marginTop: 26 }}>
              <li>Delegates to KAI, Kueue and Volcano on Kubernetes; to Slurm on HPC estates</li>
              <li>Delegates to vCenter and Proxmox for VM-attached accelerators</li>
              <li>Adds the quota, approval, budget and ledger those schedulers do not have</li>
              <li>Works identically across owned clusters and rented neocloud capacity</li>
            </ul>
          </div>
          <div className="fr-media">
            <Term title="realm9 gpu lease --request" html={`$ realm9 gpu lease <span class="c-str">--gpus 8 --type H100 --hours 6</span> \\
    <span class="c-str">--project data-platform</span>

  <span class="c-dim">deserved quota</span>   16 GPU  <span class="c-dim">(project)</span>
  <span class="c-dim">in use</span>           12 GPU
  <span class="c-dim">requested</span>         8 GPU  <span class="c-warn">→ 4 over quota</span>
  <span class="c-dim">borrowable</span>        <span class="c-ok">yes, from shared pool (idle 21 GPU)</span>
  <span class="c-dim">preemptible</span>       <span class="c-warn">yes — reclaimed if owner returns</span>
  <span class="c-dim">est. cost</span>         <span class="c-num">$811.20</span> <span class="c-dim">@ $16.90/GPU-hr</span>
  <span class="c-dim">budget after</span>      <span class="c-ok">$14,180 of $40,000 remaining</span>
  <span class="c-dim">approval</span>          <span class="c-warn">⧗ over-quota → @ml-platform-leads</span>

<span class="c-dim">placement delegated to</span> <span class="c-fn">kai-scheduler</span>`} />
          </div>
        </div>
      </Section>

      <Section alt>
        <SectionHead title="The problems that actually cost you money" />
        <Cards items={[
          { accent: "var(--cyan)", title: "Idle at night, queued at noon", desc: "Utilisation is a scheduling problem only after it is an entitlement problem. TTLs, idle detection and preemptible over-quota borrowing recover capacity nobody is using." },
          { accent: "var(--cyan)", title: "The team that took everything", desc: "Deserved quota per project with controlled borrowing means one team's experiment cannot starve another team's deadline — without an administrator refereeing it manually." },
          { accent: "var(--cyan)", title: "Fragmented fleets", desc: "Owned clusters, HPC partitions and rented neocloud capacity appear as one entitlement surface, so demand routes to whatever is free and cheapest." },
          { accent: "var(--cyan)", title: "Whole GPUs for small jobs", desc: "MIG partitions and time-sliced shares are bookable units in their own right, so an inference job does not consume an H100 it cannot use." },
          { accent: "var(--cyan)", title: "Agents with no ceiling", desc: "An autonomous training pipeline is a principal like any other: named, quota-bound, budget-capped and revocable in one call." },
          { accent: "var(--cyan)", title: "No answer for finance", desc: "Every GPU-hour attributed to a project, a principal and an approval, on the same ledger as cloud and token spend." },
        ]} />
      </Section>

      <CtaBand title="Turn your GPU fleet into governed, accountable capacity"
        sub="Works with the schedulers you already run. No migration, no replacement."
        primary={{ label: "Talk to an engineer", href: "/enterprise/contact" }} secondary={{ label: "See pricing", href: "/pricing" }} />
    </>
  );
}
