import type { Metadata } from "next";
import { Hero, CtaBand, Section } from "@/components/sections";
import UseCaseSwitcher from "@/components/use-case-switcher";

export const metadata: Metadata = { title: "Use cases", description: "How telecom, healthcare, finance, public sector, AI research and service providers deploy Realm9." };

export default function Page() {
  return (
    <>
      <Hero eyebrow="Enterprise · Use cases" accent="#7c3aed"
        title="Six industries, one recurring problem"
        sub="Scarce infrastructure, contended by multiple teams, consumed increasingly by machines, and answerable to somebody. The details differ. The shape does not."
        ctas={[{ label: "Talk to an engineer", href: "/enterprise/contact" }]} />
      <Section><UseCaseSwitcher /></Section>
      <CtaBand title="Not sure which of these you are?"
        sub="Most organisations are two of them at once. Tell us what you run and we will be direct about fit."
        primary={{ label: "Contact us", href: "/enterprise/contact" }} secondary={{ label: "See pricing", href: "/pricing" }} />
    </>
  );
}
