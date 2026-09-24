import type { Metadata } from "next";
import ComingSoon from "@/components/coming-soon";

export const metadata: Metadata = { title: "Realm9 Agents — On the roadmap", description: "Realm9 Agents is a planned capability for running automated and AI-driven operational tasks under the same roles, approvals and audit history as people. It is not yet available." };

export default function Page() {
  return <ComingSoon
    title="Realm9 Agents" accent="#7c3aed" when="timeline not yet announced"
    sub="A planned capability for running automated operational tasks inside Realm9's existing controls. It is not yet available. Today, automation can use Realm9 API keys, and users can work with the in-app assistant and R9 in the Terraform editor."
    what={[
      "Automated tasks that act under a defined Realm9 role, rather than a shared administrator account",
      "Proposed changes routed through the same approval workflows your teams already use",
      "Terraform changes held for review and policy checks before anything is applied",
      "Every action recorded in the audit history alongside human activity",
      "Access that an administrator can limit, expire or revoke at any time",
    ]}
    why="Realm9 already provides the controls automation needs: each API key has a role, optional scopes and expiry, can be revoked, and records when it was last used. Approval workflows, policy checks and audit apply to every change. Agents are planned to build on those controls rather than add a separate permission system." />;
}
