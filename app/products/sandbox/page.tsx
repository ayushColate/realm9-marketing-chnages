import type { Metadata } from "next";
import ComingSoon from "@/components/coming-soon";

export const metadata: Metadata = { title: "Realm9 Sandbox", description: "Sub-second isolated environments for agent work, on your own hardware. Coming soon." };

export default function Page() {
  return <ComingSoon
    title="Realm9 Sandbox" accent="#0d9488" when="Private preview: Q4 2026"
    sub="Sub-second isolated environments for agent work — running on hardware you already own, under the quotas and budgets you already set."
    what={[
      "MicroVM isolation with a hard boundary between agent-generated code and everything else",
      "Sub-second creation, with a full filesystem, shell and controlled network egress",
      "Runs in your own VPC or your own data centre — not on a third-party multi-tenant platform",
      "Every sandbox is a lease: it has an owner, a TTL, a cost and a ledger entry",
      "Persistent and ephemeral modes, so long-running agents can resume where they left off",
    ]}
    why="The sandbox market solves isolation and startup latency well. What none of it solves is governance: who is allowed to create sandboxes, how many, for how long, at what cost, and on whose behalf. For regulated organisations the answer cannot be a public multi-tenant platform. Realm9 Sandbox puts the isolation on your own hardware and the accounting in your own ledger."
  />;
}
