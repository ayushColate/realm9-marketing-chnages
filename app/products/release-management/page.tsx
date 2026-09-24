import type { Metadata } from "next";
import ComingSoon from "@/components/coming-soon";

export const metadata: Metadata = { title: "Release Management — On the roadmap", description: "Release Management is a planned Realm9 module for coordinating releases on top of the environment bookings, approval workflows and change history teams already use. It is not yet available." };

export default function Page() {
  return <ComingSoon
    title="Release Management" accent="#0070f3" when="timeline not yet announced"
    sub="A planned module for coordinating releases across shared environments. It is not yet available. Today, teams use Realm9 Environment Management to book release environments, route approvals, and keep a change history for each environment."
    what={[
      "Plan releases against the environment bookings already in Realm9, rather than a separate calendar",
      "Reuse the existing multi-level approval workflows for release sign-off",
      "Link a release to the Terraform runs and environment changes it depends on",
      "Give release, platform and application teams one shared view of what is scheduled where",
      "Keep release decisions in the same audit history as bookings and infrastructure changes",
    ]}
    why="Release coordination depends on information Realm9 already holds: who has booked which environment, which approvals are pending, and what changed on each environment. Building release planning on those records avoids a second tool that has to be kept in sync by hand." />;
}
