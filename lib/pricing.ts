export interface Plan {
  name: string;
  mo: number | null;
  yr: number | null;
  unit: string;
  desc: string;
  featured?: boolean;
  ctaLabel: string;
  ctaHref: string;
  ctaVariant: "btn-primary" | "btn-secondary";
  meter: [string, string][];
  features: string[];
}

export const PLANS: Plan[] = [
  {
    name: "Community", mo: 0, yr: 0, unit: "",
    desc: "Self-hosted, free forever. Audit logging included — governance is not an upsell.",
    ctaLabel: "Deploy free", ctaHref: "/enterprise/contact", ctaVariant: "btn-secondary",
    meter: [["Users", "Unlimited"], ["Environments", "25"], ["Terraform workspaces", "10"], ["Governed actions", "5,000 / mo"], ["Audit retention", "30 days"]],
    features: ["Environment booking, queues and approvals", "Terraform and OpenTofu runs with remote state", "vCenter and Proxmox provisioning", "Policy scanning: Checkov, Trivy, TruffleHog", "MCP Server", "Audit logging", "Community support"],
  },
  {
    name: "Team", mo: 40, yr: 32, unit: "per user / month", featured: true,
    desc: "For teams that have outgrown the spreadsheet and need cost attribution and SSO.",
    ctaLabel: "Start 14-day trial", ctaHref: "/enterprise/contact", ctaVariant: "btn-primary",
    meter: [["Users", "Billed per seat"], ["Environments", "Unlimited"], ["Terraform workspaces", "Unlimited"], ["Governed actions", "50,000 / mo included"], ["Audit retention", "12 months"]],
    features: ["Everything in Community", "FinOps: unified cost ledger and attribution", "Anomaly detection and budget ceilings", "SSO via SAML and OIDC", "R9 infrastructure generation (beta)", "Agent principals with quotas and budgets", "Email support, one business day"],
  },
  {
    name: "Enterprise", mo: null, yr: null, unit: "from $45,000 / year",
    desc: "Air-gapped or sovereign deployment, multi-tenancy, and an engineer on the call.",
    ctaLabel: "Talk to an engineer", ctaHref: "/enterprise/contact", ctaVariant: "btn-secondary",
    meter: [["Users", "Unlimited"], ["Tenants", "Unlimited, isolated"], ["Governed actions", "Custom, committed"], ["GPU entitlement", "Included"], ["Audit retention", "12 months+, configurable"]],
    features: ["Everything in Team", "Air-gapped and sovereign deployment", "Multi-tenancy with independent audit boundaries", "GPU fair-share, quota borrowing and chargeback", "SCIM provisioning and custom RBAC", "Data residency controls and customer-managed keys", "Named engineer, shared channel, 99.95% SLA", "Migration support and source code escrow"],
  },
];

export const METERS: [string, string, string][] = [
  ["Governed action", "Any policy-evaluated request: a booking, an approval, a plan, an apply, a lease renewal", "$0.004"],
  ["Agent principal", "A named non-human identity with its own quota, budget and ledger", "$8 / mo"],
  ["GPU-hour brokered", "Accelerated compute issued through a Realm9 lease. Your hardware, our entitlement layer", "$0.02"],
  ["Ledger retention", "Consumption records held beyond the plan's included window", "$40 / mo per TB"],
  ["Self-hosted capacity", "VMs and hosts you provision on your own vCenter, Proxmox or bare metal", "Free"],
];

export const COMPARE: [string, string, string, string][] = [
  ["Environment booking and queues", "✓", "✓", "✓"],
  ["Terraform / OpenTofu orchestration", "✓", "✓", "✓"],
  ["vCenter, Proxmox and bare metal", "✓", "✓", "✓"],
  ["Policy scanning and drift detection", "✓", "✓", "✓"],
  ["Audit logging", "30 days", "12 months", "Configurable"],
  ["MCP Server", "✓", "✓", "✓"],
  ["FinOps cost ledger", "—", "✓", "✓"],
  ["Budget ceilings and anomaly detection", "—", "✓", "✓"],
  ["R9 generation", "—", "Beta", "✓"],
  ["Agent principals", "5", "Unlimited", "Unlimited"],
  ["SSO (SAML / OIDC)", "—", "✓", "✓"],
  ["SCIM provisioning", "—", "—", "✓"],
  ["Multi-tenancy", "—", "—", "✓"],
  ["GPU entitlement and fair-share", "—", "—", "✓"],
  ["Air-gapped deployment", "—", "—", "✓"],
  ["Data residency controls", "—", "—", "✓"],
  ["Support", "Community", "1 business day", "Named engineer, SLA"],
];

export const FAQ: [string, string][] = [
  ["Is the free tier actually usable?", "Yes. Community is self-hosted, unlimited on users, and includes audit logging, the MCP Server and full Terraform orchestration. We do not gate compliance features behind a sales call."],
  ["Why meter actions instead of resources?", "Because per-resource pricing charges you more for bringing more of your estate under management, which is the opposite of what we want you to do. A governed action tracks how much you use the platform."],
  ["Do you charge for on-prem capacity?", "No. Provisioning VMs on your own vCenter, Proxmox or bare metal is free at every tier. We meter GPU-hours brokered through a lease because that is where the entitlement work happens."],
  ["Can we self-host the paid plans?", "Yes. Team and Enterprise are both fully self-hostable, including air-gapped. Feature parity with the managed service is deliberate."],
  ["What happens if we exceed an allowance?", "Nothing breaks. You are billed the overage rate and notified at 80% and 100%. You can set a hard ceiling that queues rather than bills, if you prefer."],
  ["Can we migrate from another platform?", "We support structured migration from Terraform Cloud, Spacelift, env0, Plutora, Enov8 and internal Backstage builds. Enterprise agreements include hands-on migration support."],
];
