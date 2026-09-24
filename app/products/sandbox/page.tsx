import type { Metadata } from "next";
import ComingSoon from "@/components/coming-soon";

export const metadata: Metadata = { title: "Realm9 Sandbox — On the roadmap", description: "Realm9 Sandbox is a planned module for isolated, short-lived workspaces for experimental infrastructure work. It is not yet available." };

export default function Page() {
  return <ComingSoon
    title="Realm9 Sandbox" accent="#0d9488" when="timeline not yet announced"
    sub="A planned module for isolated workspaces where teams and automated tools can try infrastructure changes without touching shared environments. It is not yet available. Today, teams can book dedicated environments and run Terraform plans for review before anything is applied."
    what={[
      "Short-lived, isolated workspaces requested through the same approval workflows as other environments",
      "A clear owner and an end date for every sandbox, so experiments do not linger",
      "Separation from shared and production environments by default",
      "Activity recorded in the same audit history as bookings and Terraform runs",
      "Access for AI-assisted tooling within the limits your organisation sets",
    ]}
    why="Experiments and automated tooling need somewhere to try changes safely. Realm9 already governs who can request an environment and what happens to it; Sandbox is planned to apply that same control to short-lived, isolated work." />;
}
