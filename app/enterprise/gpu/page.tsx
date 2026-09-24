import type { Metadata } from "next";
import { Hero, StatBand, Cards, SectionHead, CtaBand, Section } from "@/components/sections";

export const metadata: Metadata = { title: "GPU Environments — Governed Access to Accelerated Compute", description: "Use Realm9 bookings, approval workflows, Terraform policy checks and FinOps cost visibility to control who can use expensive GPU-backed environments, and for how long." };

export default function Page() {
  return (
    <>
      <Hero eyebrow="Enterprise · GPU" accent="#0d9488"
        title="Expensive capacity needs a clear process for who gets it"
        sub="GPU-backed environments are costly and in demand. Realm9 does not schedule GPU workloads; it controls the process around them — who can book a GPU environment, who approves it, how its infrastructure is changed, and what it costs."
        ctas={[{ label: "Talk to the team", href: "/enterprise/contact" }, { label: "Data centers", href: "/enterprise/data-centers" }]} />

      <StatBand stats={[
        { n: "Bookings", l: "Exclusive or shared bookings with per-environment duration limits" },
        { n: "Approvals", l: "Multi-level sign-off before scarce capacity is committed" },
        { n: "Policy", l: "Terraform changes to GPU infrastructure checked before apply" },
        { n: "Cost", l: "AWS and Azure spend and anomalies visible in FinOps" },
      ]} />

      <Section>
        <div className="feature-row">
          <div>
            <h3 style={{ marginBottom: 14 }}>Governance around the scheduler, not instead of it</h3>
            <p className="lede" style={{ fontSize: 16 }}>Placement and job scheduling stay with the tools you already run. The harder problem is usually organisational: several teams want the same accelerated environment, nobody is sure who holds it, and the bill arrives after the fact.</p>
            <p className="lede" style={{ fontSize: 16, marginTop: 16 }}>Realm9 treats a GPU environment like any other governed environment. It has an owner and a status, it is booked through an approval workflow, its infrastructure is changed through reviewed Terraform runs, and its cloud cost is visible in FinOps.</p>
            <ul className="bullets" style={{ ["--acc" as string]: "var(--cyan)", marginTop: 26 }}>
              <li>Exclusive bookings so one team holds a GPU environment at a time</li>
              <li>Maximum booking duration set per environment</li>
              <li>Approval workflows chosen by environment type</li>
              <li>Cost thresholds on Terraform runs that add accelerated instances</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section alt>
        <SectionHead title="Problems this helps with" />
        <Cards items={[
          { accent: "var(--cyan)", title: "Unclear ownership", desc: "Every GPU environment has an owner, a status and a booking history, so there is no guessing who is using it or since when." },
          { accent: "var(--cyan)", title: "Long-held capacity", desc: "Per-environment maximum booking durations and organisation booking limits stop one team holding scarce capacity indefinitely." },
          { accent: "var(--cyan)", title: "Unreviewed changes", desc: "Adding or resizing GPU instances goes through the project's Terraform policy checks and approval gate before apply." },
          { accent: "var(--cyan)", title: "Unexpected bills", desc: "Infracost estimates and cost thresholds flag expensive changes before apply, and FinOps anomaly detection highlights unusual spend after." },
          { accent: "var(--cyan)", title: "On-prem and cloud GPUs apart", desc: "GPU hosts in Proxmox or VMware vCenter and GPU instances in AWS or Azure follow the same governed process." },
          { accent: "var(--cyan)", title: "No record for audit", desc: "Bookings, approvals and infrastructure runs are recorded in the audit history for later review." },
        ]} />
      </Section>

      <CtaBand title="Bring order to how GPU environments are shared"
        sub="Works alongside the schedulers and platforms you already use."
        primary={{ label: "Talk to the team", href: "/enterprise/contact" }} secondary={{ label: "See pricing", href: "/pricing" }} />
    </>
  );
}
