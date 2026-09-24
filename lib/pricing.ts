export interface Plan {
  name: string;
  price: string;
  unit: string;
  note: string;
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
    name: "Free", price: "$0", unit: "forever", note: "SaaS or self-hosted",
    desc: "For evaluating Realm9 and for small teams getting shared environments and Terraform under control.",
    ctaLabel: "Get started", ctaHref: "/", ctaVariant: "btn-secondary",
    meter: [["Users", "3 SaaS · 5 self-hosted"], ["Environments", "5 SaaS · 10 self-hosted"], ["Terraform projects", "1 SaaS · 2 self-hosted"], ["Cloud connections", "1"]],
    features: ["Environment requests, bookings and approvals", "Terraform runs with Git integration", "Remote state with locking", "Drift detection", "Secrets vault integration", "Community support"],
  },
  {
    name: "Starter", price: "$299", unit: "per month", note: "SaaS · 14-day free trial", featured: true,
    desc: "For growing teams that need more capacity and more than one cloud account.",
    ctaLabel: "Start a trial", ctaHref: "/enterprise/contact", ctaVariant: "btn-primary",
    meter: [["Users", "15"], ["Environments", "50"], ["Terraform projects", "5"], ["Cloud connections", "Unlimited"]],
    features: ["Everything in Free", "Multiple AWS and Azure connections", "Webhook integrations", "10 workspaces per project", "Email support"],
  },
  {
    name: "Enterprise", price: "Custom", unit: "", note: "SaaS or self-hosted · 14-day free trial",
    desc: "For organisations that need enterprise identity, session security and on-prem infrastructure.",
    ctaLabel: "Talk to the team", ctaHref: "/enterprise/contact", ctaVariant: "btn-secondary",
    meter: [["Users", "200"], ["Environments", "500"], ["Terraform projects", "100"], ["Cloud connections", "Unlimited"]],
    features: ["Everything in Starter", "SAML single sign-on and SCIM provisioning", "MFA, session security and device fingerprinting", "Proxmox and VMware vCenter", "Custom scanner images and starter projects", "Priority support"],
  },
  {
    name: "Ultimate", price: "Custom", unit: "", note: "SaaS or self-hosted",
    desc: "For organisations that need unlimited capacity, FinOps and full audit logs.",
    ctaLabel: "Talk to the team", ctaHref: "/enterprise/contact", ctaVariant: "btn-secondary",
    meter: [["Users", "Unlimited"], ["Environments", "Unlimited"], ["Terraform projects", "Unlimited"], ["Cloud connections", "Unlimited"]],
    features: ["Everything in Enterprise", "FinOps: cost explorer, dashboards and anomaly detection", "Rightsizing and usage analysis", "Full audit logs with unlimited retention", "24/7 support"],
  },
];

export const LIMITS: [string, string, string, string, string, string][] = [
  ["Users", "3", "5", "15", "200", "Unlimited"],
  ["Environments", "5", "10", "50", "500", "Unlimited"],
  ["Terraform projects", "1", "2", "5", "100", "Unlimited"],
  ["Workspaces per project", "2", "3", "10", "Unlimited", "Unlimited"],
  ["Cloud connections", "1", "1", "Unlimited", "Unlimited", "Unlimited"],
  ["Observability services", "5", "10", "20", "50", "Unlimited"],
];

export const COMPARE: [string, string, string, string, string][] = [
  ["Environment requests, bookings and approvals", "✓", "✓", "✓", "✓"],
  ["Terraform runs, Git integration and state locking", "✓", "✓", "✓", "✓"],
  ["Drift detection", "✓", "✓", "✓", "✓"],
  ["Secrets vault integration", "✓", "✓", "✓", "✓"],
  ["Multiple cloud connections", "—", "✓", "✓", "✓"],
  ["Webhook integrations", "—", "✓", "✓", "✓"],
  ["SAML single sign-on and SCIM", "—", "—", "✓", "✓"],
  ["MFA and session security", "—", "—", "✓", "✓"],
  ["Proxmox and VMware vCenter", "—", "—", "✓", "✓"],
  ["Custom scanner images", "—", "—", "✓", "✓"],
  ["FinOps", "—", "—", "—", "✓"],
  ["Full audit logs", "—", "—", "—", "✓"],
  ["Support", "Community", "Email", "Priority", "24/7"],
];

export const FAQ: [string, string][] = [
  ["Is the Free plan really free?", "Yes. Free has no time limit and needs no credit card. It runs as SaaS or self-hosted; the self-hosted version allows slightly more users, environments and projects, for a single organisation."],
  ["How do trials work?", "You can try Starter or Enterprise free for 14 days from your account settings, without a credit card. Each organisation gets one trial."],
  ["Can we self-host a paid plan?", "Enterprise and Ultimate are available self-hosted as well as SaaS. Starter is offered as SaaS."],
  ["When should we move to Enterprise?", "When you need SAML single sign-on, SCIM provisioning, MFA and session security, or want to manage Proxmox and VMware vCenter alongside your cloud accounts."],
  ["What does Ultimate add?", "Unlimited capacity, the FinOps module for AWS and Azure cost visibility and anomaly detection, and full audit logs with unlimited retention."],
];
