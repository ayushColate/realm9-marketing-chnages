import type { Metadata } from "next";
import ComingSoon from "@/components/coming-soon";

export const metadata: Metadata = { title: "AIOps — On the roadmap", description: "AIOps is a planned Realm9 capability for assisted incident investigation, built on Realm9 observability and the change history the platform already records. It is not yet available." };

export default function Page() {
  return <ComingSoon
    title="AIOps" accent="#15803d" when="timeline not yet announced"
    sub="A planned capability for assisted incident investigation. It is not yet available. Today, Realm9 observability lets teams collect logs from registered services and group relevant log entries and notes into an investigation, with a status from investigating through diagnosed to resolved."
    what={[
      "Suggestions for which log entries to add to an investigation",
      "A timeline that places service logs next to recent Terraform runs, bookings and approvals",
      "Draft summaries of an investigation's findings for the team to review and edit",
      "Proposed follow-up changes submitted as normal Terraform runs, with policy checks and approval",
      "No change applied automatically without a person approving it",
    ]}
    why="Diagnosing an incident usually starts with one question: what changed? Realm9 already records Terraform runs, bookings, approvals and environment history, and its observability module holds service logs and investigations. AIOps is planned to connect the two, so an investigation can draw on both the symptoms and the changes behind them." />;
}
