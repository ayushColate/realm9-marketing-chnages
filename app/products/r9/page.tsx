import type { Metadata } from "next";
import { Hero, Cards, SectionHead, CtaBand, Section } from "@/components/sections";
import { Icons } from "@/components/icons";
import R9Demo from "@/components/r9-demo";

export const metadata: Metadata = {
  title: "R9",
  description: "Describe infrastructure in plain language. Get reviewable, policy-checked code.",
};

export default function Page() {
  return (
    <>
      <Hero badge="Beta" eyebrow="R9 — infrastructure from a sentence" accent="#e5007a"
        title="Describe what you need. Review what it would do. Then decide."
        sub="R9 turns plain language into reviewable Terraform, a policy report and a cost estimate. It never applies anything. What comes back is a proposal your team approves, edits, or throws away."
        ctas={[{ label: "Join the beta", href: "/enterprise/contact" }, { label: "See pricing", href: "/pricing" }]} />

      <Section><R9Demo /></Section>

      <Section alt>
        <SectionHead center title="Generation is the easy part"
          sub="Any model can write Terraform. The value is in what happens between the generation and the apply." />
        <Cards items={[
          { icon: Icons.infra, accent: "var(--pink)", title: "Grounded in your catalogue", desc: "R9 composes from your approved modules, your naming conventions and your tagging standards — not from whatever it saw on the internet." },
          { icon: Icons.shield, accent: "var(--pink)", title: "Checked before you read it", desc: "Every proposal arrives with Checkov, Trivy and TruffleHog already run against it, and the failures explained in plain language." },
          { icon: Icons.finops, accent: "var(--pink)", title: "Priced before you approve it", desc: "A monthly and a lifetime cost estimate, checked against the requesting team's remaining budget." },
          { icon: Icons.lock, accent: "var(--pink)", title: "Never applies on its own", desc: "R9 produces a plan and stops. A human or a policy decides whether it runs. There is no autonomous mode and there will not be one." },
          { icon: Icons.ledger, accent: "var(--pink)", title: "Diffable and reviewable", desc: "Output lands as a pull request against your infrastructure repository, reviewed the same way any other change is." },
          { icon: Icons.mcp, accent: "var(--pink)", title: "Available to agents too", desc: "The same generation endpoint is exposed over MCP, so an agent can propose infrastructure and still be governed by your policy." },
        ]} />
      </Section>

      <CtaBand title="Get infrastructure proposals your team can actually review"
        sub="R9 is in open beta on the Team plan and above."
        primary={{ label: "See pricing", href: "/pricing" }} secondary={{ label: "Join the beta", href: "/enterprise/contact" }} />
    </>
  );
}
