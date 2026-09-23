export interface UseCase {
  id: string; name: string; accent: string; head: string; body: string; points: string[];
}

export const USE_CASES: UseCase[] = [
  { id: "telecom", name: "Telecom", accent: "#0070f3",
    head: "Network and OSS environments that six teams share and nobody owns",
    body: "Carrier environments are long-lived, expensive, deeply interdependent and booked by teams that rarely talk to each other. A contention clash does not cost an afternoon — it costs a release window.",
    points: ["Model OSS, BSS and lab environments with their real dependencies", "Booking queues that respect release windows and change freezes", "vCenter and bare-metal lab capacity in the same catalogue as cloud", "Evidence packs for regulator and internal audit generated on schedule"] },
  { id: "healthcare", name: "Healthcare", accent: "#15803d",
    head: "Prove who touched what, without slowing clinical delivery",
    body: "Access to environments carrying patient data has to be requested, justified, approved, time-boxed and provable. Doing that in a ticketing system produces delay without producing assurance.",
    points: ["Data-class-aware policy so PHI environments require explicit approval", "Time-boxed access with automatic revocation and no manual cleanup", "Full audit trail suitable for HIPAA and internal compliance review", "Air-gapped deployment where hosted infrastructure is not permitted"] },
  { id: "finserv", name: "Financial services", accent: "#b45309",
    head: "Segregation of duties that is enforced, not documented",
    body: "The control is only real if the system prevents the action. Realm9 enforces separation at the moment of request rather than describing it in a policy document nobody reads.",
    points: ["Approval chains that structurally prevent self-approval", "Change windows and freeze periods enforced at request time", "Twelve-month audit retention with SOC 2 and PCI-shaped exports", "Per-entity tenancy for subsidiaries with independent audit boundaries"] },
  { id: "public", name: "Public sector", accent: "#7c3aed",
    head: "Sovereign deployment where the location of the control plane is the requirement",
    body: "For many public bodies the question is not whether a platform is secure but where it physically runs and who can reach it. Realm9 installs entirely inside your boundary.",
    points: ["Fully air-gapped installation with offline update bundles", "Control plane and ledger pinned to a named jurisdiction", "CIS benchmark scanning with exportable per-host evidence", "Procurement-friendly perpetual and annual licensing options"] },
  { id: "ai", name: "AI and research", accent: "#0d9488",
    head: "Fair access to accelerated compute without an administrator refereeing it",
    body: "Research teams do not need a better scheduler. They need to know how much they are entitled to, when they will get it, and what it costs the group.",
    points: ["Deserved quota per project with controlled over-quota borrowing", "Preemptible leases so idle capacity is usable but returnable", "Fractional GPU allocation for inference and development workloads", "Cost per experiment attributed to a grant, a project and a principal"] },
  { id: "msp", name: "Service providers", accent: "#e5007a",
    head: "Run governed capacity for customers who are not your employees",
    body: "Managed service providers and neoclouds need multi-tenancy, metering and white-labelled self-service — not a tool designed for one company managing its own estate.",
    points: ["Hard tenant isolation with per-customer policy and audit boundaries", "Consumption metering suitable for billing your own customers", "White-labelled self-service portal and catalogue", "Per-tenant quotas, budgets and reporting out of the box"] },
];
