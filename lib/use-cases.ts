export interface UseCase {
  id: string; name: string; accent: string; head: string; body: string; points: string[];
}

export const USE_CASES: UseCase[] = [
  { id: "platform", name: "Platform engineering", accent: "#0070f3",
    head: "Self-service environments without losing control of them",
    body: "Development teams want environments quickly; platform teams need to know who has what, how it was built and what it costs. Realm9 gives developers a request-and-book process while the platform team keeps lifecycle, Terraform and approval control.",
    points: ["Environment requests with the fields and approvals your platform team defines", "Bookings on shared environments instead of spreadsheets and chat threads", "Terraform runs with policy checks and approval gates before apply", "Templates that let teams create workspaces without editing Terraform"] },
  { id: "finserv", name: "Financial services", accent: "#b45309",
    head: "Infrastructure change with a clear record of who approved it",
    body: "Financial institutions need to move quickly while keeping access, change history and cloud spend under control. Realm9 keeps infrastructure changes inside defined workflows and records each decision along the way.",
    points: ["Multi-level approvals with named approvers or role-based steps", "Hard-mandatory policy enforcement that blocks non-compliant Terraform", "Audit history of access, approvals and infrastructure runs, exportable to your SIEM", "Cost thresholds and anomaly detection for AWS and Azure spend"] },
  { id: "healthcare", name: "Healthcare", accent: "#15803d",
    head: "Consistent environment handling for sensitive workloads",
    body: "Healthcare platforms need dependable environments and clear accountability across teams. Realm9 standardises how environments are requested, changed and retired, and keeps a record of each step.",
    points: ["A single, defined lifecycle from request to decommission", "Business justification and supporting documents stored with each request", "Role-based access and single sign-on through your identity provider", "Dedicated single-tenant or self-hosted deployment options"] },
  { id: "telecom", name: "Telecommunications", accent: "#7c3aed",
    head: "Shared lab and integration environments that many teams depend on",
    body: "Telecom teams run distributed infrastructure and long-lived test environments used by many groups at once. Realm9 brings bookings, infrastructure changes and environment history into one place.",
    points: ["Exclusive or shared bookings with per-environment duration limits", "Proxmox and VMware vCenter managed alongside AWS and Azure", "ServiceNow CMDB data linked to environment records", "Environment comparison and a change history for each environment"] },
  { id: "manufacturing", name: "Manufacturing", accent: "#0d9488",
    head: "One way of working across legacy sites and cloud accounts",
    body: "Manufacturers often run a mix of on-prem hypervisors and cloud platforms, each managed differently. Realm9 applies the same Terraform, policy and approval process to both.",
    points: ["Proxmox and VMware vCenter connections next to AWS and Azure", "The same policy profiles and approval gates for on-prem and cloud", "Drift alerts when repository changes diverge from what is deployed", "Credentials held in AWS Secrets Manager, Azure Key Vault, HashiCorp Vault or OpenBao"] },
  { id: "cost", name: "Variable demand", accent: "#e5007a",
    head: "Keep temporary environments from turning into permanent cost",
    body: "When demand changes quickly, idle environments and overprovisioned resources add up. Realm9 connects environment lifecycle with cost visibility so waste is easier to spot and remove.",
    points: ["Governed decommission requests so environments are retired deliberately", "Organisation-wide booking limits and maximum booking durations", "Statistical anomaly detection on AWS and Azure cost data", "Usage and rightsizing views for running resources"] },
];
