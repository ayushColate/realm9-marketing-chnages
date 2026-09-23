import type { Metadata } from "next";
import ComingSoon from "@/components/coming-soon";

export const metadata: Metadata = { title: "AIOps — Detect & Explain Infrastructure Incidents", description: "Detect and explain infrastructure incidents using change, booking and approval history Realm9 already records. Suggest reviewable remediation through normal approval workflows." };

export default function Page() {
  return <ComingSoon
    title="AIOps" accent="#15803d" when="Design partners: Q2 2027"
    sub="Detect, explain and remediate infrastructure incidents inside the same policy and approval model that governs everything else."
    what={[
      "Correlate alerts, changes, bookings and deployments into a single incident timeline",
      "Explain root cause in terms of what changed, who changed it, and under which approval",
      "Propose remediation as a reviewable plan with a blast-radius assessment attached",
      "Auto-remediate only within explicitly whitelisted policy bounds, never by default",
      "Post-incident evidence packaged automatically for review and audit",
    ]}
    why="Most AIOps tools see telemetry but not intent. Realm9 holds the record of every change request, every booking and every approval, which means it can connect a 3am latency spike to the plan that was applied at 2:47am and the agent that requested it. That is the difference between an anomaly alert and an answer."
  />;
}
