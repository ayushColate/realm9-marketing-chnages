import type { Metadata } from "next";
import { Hero, Cards, SectionHead, CtaBand, Section } from "@/components/sections";
import { Icons } from "@/components/icons";
import R9Demo from "@/components/r9-demo";

export const metadata: Metadata = {
  title: "AI Terraform Editor",
  description: "Generate, edit and explain Terraform with AI — scanned by Checkov and Trivy, reviewed before commit, approved before apply. Never applies on its own. Bring your own LLM key on every plan.",
};

export default function Page() {
  return (
    <>
      <Hero badge="Beta" eyebrow="R9 — infrastructure from a sentence" accent="#e5007a"
        title="Describe what you need. Review what it would do. Then decide."
        sub="R9 is an AI model that understands infrastructure intent. Describe an environment in plain language and get Terraform. Every plan is reviewable, every apply needs approval, every change is audited."
        ctas={[{ label: "Start free", href: "/pricing" }, { label: "See it in action", href: "/enterprise/contact" }]} />

      <Section className="pad">
        <SectionHead center title="R9 workflow" sub="Describe infrastructure, get code, review before commit" />
        <R9Demo />
      </Section>

      <CtaBand title="Ready to describe your infrastructure in plain language?" sub="R9 is beta on Realm9 SaaS. Bring your own LLM key." primary={{ label: "Start free", href: "/pricing" }} secondary={{ label: "Talk to an engineer", href: "/enterprise/contact" }} />
    </>
  );
}
