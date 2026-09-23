import type { Metadata } from "next";
import ComingSoon from "@/components/coming-soon";

export const metadata: Metadata = { title: "Realm9 AI System Assistant", description: "Ask Realm9 about bookings, environments, Terraform, costs and compliance in plain language. Answers from live platform data, scoped to your role. Bring your own LLM key on every plan." };

export default function Page() {
  return <ComingSoon
    title="Realm9 Agents" accent="#7c3aed" when="Design partners: Q1 2027"
    sub="Purpose-built agents for the operational work platform teams never get to — reclaiming waste, closing drift, and keeping the estate tidy."
    what={[
      "Reclaim agent: finds idle environments, orphaned volumes and forgotten reservations, and proposes teardown with owner sign-off",
      "Drift agent: watches for divergence and prepares remediation plans, queued for review rather than applied",
      "Cost agent: tracks budget burn against forecast and proposes policy changes before a ceiling is hit",
      "Onboarding agent: provisions a new joiner's access, environments and quotas from a single approval",
      "Every agent runs as a named principal, under the same quotas and audit trail as any other actor",
    ]}
    why="Platform teams accumulate a backlog of work that is individually small and collectively enormous. It is exactly the kind of work agents are good at — and exactly the kind of work you cannot safely delegate without a permission and accounting layer underneath. Realm9 Agents exist because we already built that layer."
  />;
}
