import type { Metadata } from "next";
import { Hero, StatBand, FeatureRow, Term, CtaBand } from "@/components/sections";

export const metadata: Metadata = {
  title: "Terraform Orchestration — Cloud & On-Prem",
  description: "Git-driven Terraform with the same workflow for AWS, Azure, GCP, and on-prem (vCenter, Proxmox). Drift detection, Checkov/Trivy scanning, policy checks on every run.",
};

export default function Page() {
  return (
    <>
      <Hero eyebrow="Infrastructure Management" accent="#0070f3"
        title="Terraform, Kubernetes, vCenter and Proxmox — one governed workflow"
        sub="Most orchestration platforms assume everything you run is in a public cloud. Realm9 treats the racks you already own as first-class infrastructure, with the same policy, state and audit model."
        ctas={[{ label: "Start free", href: "/pricing" }, { label: "Talk to an engineer", href: "/enterprise/contact" }]} />

      <StatBand stats={[
        { n: "82", l: "API routes for infrastructure read and change" },
        { n: "13+", l: "Audit categories capture every infrastructure action" },
        { n: "4 clouds", l: "AWS, Azure, GCP, OCI + on-prem (vCenter, Proxmox, bare metal)" },
        { n: "Drift detection", l: "Webhook-driven scanning for infrastructure drift" },
      ]} />

      <FeatureRow accent="#0070f3" title="One workflow for cloud and on-prem" body="A VM in your rack goes through the same approval, quota and audit as an EC2 instance. No separate systems, no translation layers." bullets={[
        "vCenter and Proxmox over site-to-site VPN",
        "Same Terraform workflow, state and audit",
        "Same quotas, approvals and cost tracking",
        "On-prem infrastructure on equal footing with cloud",
      ]} />

      <FeatureRow accent="#0070f3" title="Drift detection across your estate" body="Realm9 detects when your real infrastructure diverges from your code and flags it — before it becomes a crisis." bullets={[
        "Webhook-driven scanning triggered on infrastructure change",
        "Drift categorised by severity and compliance impact",
        "Automated remediation policies: detect, report, fix",
        "Audit trail showing what drifted, who detected it, what changed",
      ]} flip />

      <FeatureRow accent="#0070f3" title="Security scanning on every run" body="Checkov, Trivy and custom scanners run on every Terraform plan. Policy violations block apply." bullets={[
        "Checkov for infrastructure misconfiguration",
        "Trivy for container and dependency vulnerabilities",
        "Custom OPA policies for your compliance rules",
        "Scan results in the change request, not a separate system",
      ]} />

      <CtaBand title="One control plane for your entire infrastructure estate" sub="Cloud, on-prem, Kubernetes — same governance, same audit, same cost." primary={{ label: "Start free", href: "/pricing" }} secondary={{ label: "Talk to an engineer", href: "/enterprise/contact" }} />
    </>
  );
}
