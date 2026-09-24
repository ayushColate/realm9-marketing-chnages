import type { Metadata } from "next";
import { Hero, CtaBand, Section } from "@/components/sections";
import UseCaseSwitcher from "@/components/use-case-switcher";

export const metadata: Metadata = { title: "Use Cases", description: "How platform engineering, financial services, healthcare, telecommunications and manufacturing teams use Realm9 environment request, booking, Terraform and FinOps workflows." };

export default function Page() {
  return (
    <>
      <Hero eyebrow="Enterprise · Use cases" accent="#7c3aed"
        title="Different industries, the same operational questions"
        sub="Who can have this environment, who approved the change, and what is it costing? Each use case below shows how Realm9 environment request, booking, Terraform and FinOps workflows answer those questions for a particular kind of team."
        ctas={[{ label: "Talk to the team", href: "/enterprise/contact" }]} />
      <Section><UseCaseSwitcher /></Section>
      <CtaBand title="Recognise your situation in more than one of these?"
        sub="Most organisations do. Tell us how your teams request, change and pay for infrastructure today, and we will show where Realm9 fits."
        primary={{ label: "Contact us", href: "/enterprise/contact" }} secondary={{ label: "See pricing", href: "/pricing" }} />
    </>
  );
}
