import type { Metadata } from "next";
import ComingSoon from "@/components/coming-soon";

export const metadata: Metadata = { title: "Release Management — Target Q1 2027", description: "Coordinate deployments across environments using live environment booking records. Release calendars read from real approval workflows. Target: Q1 2027." };

export default function Page() {
  return <ComingSoon
    title="Release Management" accent="#0070f3" when="Target: Q1 2027"
    sub="Coordinate releases across environments, teams and change windows — on the same booking and approval engine that already governs your environments."
    what={[
      "Release calendars that read from real environment bookings, not a parallel spreadsheet",
      "Change windows and freeze periods enforced at request time, so a booking that violates a freeze never gets granted",
      "Implementation plans with per-step ownership, dependencies and rollback criteria",
      "Cross-team dependency mapping so a blocked release surfaces the blocking team, not just the delay",
      "Deployment evidence packaged for audit — what shipped, to where, approved by whom",
      "One-click rollback with the same approval, quota and audit as the original release",
    ]} />;
}
