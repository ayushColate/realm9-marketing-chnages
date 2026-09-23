import type { Metadata } from "next";
import { Hero, FeatureRow, Term, SectionHead, CtaBand, Section } from "@/components/sections";

export const metadata: Metadata = {
  title: "FinOps & Cost Attribution",
  description: "Multi-cloud cost visibility with cost attribution per principal (team, agent, role). Anomaly detection, forecasts, rightsizing — dashboards generated from natural-language requirements.",
};

export default function Page() {
  return (
    <>
      <Hero eyebrow="FinOps" accent="#b45309"
        title="Cost you can explain down to the request that caused it"
        sub="Billing APIs tell you what a resource cost. They cannot tell you who asked for it, why, or under whose approval. Realm9 sits at the request boundary, so it knows intent — not just tags."
        ctas={[{ label: "Start free", href: "/pricing" }, { label: "See the ledger", href: "/enterprise/contact" }]} />

      <Section className="pad">
        <SectionHead center title="Where every dollar came from" sub="Cost attribution per principal (team, agent, role) on the same ledger as cloud, on-prem and token spend" />

        <FeatureRow accent="#b45309" title="Attribution by principal" body="Every request carries the principal (team, agent, role) that initiated it. Costs flow into the ledger by principal, not by resource tag." bullets={[
          "Cloud spend, on-prem spend and token spend on one ledger",
          "Cost per team, cost per agent, cost per project",
          "Real cost data: no guessing, no proxies, no tags",
        ]} />

        <FeatureRow accent="#b45309" title="Anomalies with cause attached" body="When spend spikes, anomaly detection highlights the request that caused it — not just the resource." bullets={[
          "Anomalies named by principal: 'Agent X spent 3x usual in 1 hour'",
          "Spend by request type: 'Environment bookings cost 40%, infra changes cost 35%'",
          "Forecasts scoped by principal, not just aggregated",
        ]} flip />

        <FeatureRow accent="#b45309" title="Dashboards from plain language" body="Ask for a dashboard in plain language. Get a dashboard that answers your question." bullets={[
          "'Show me cost per team, filtered to environments created this month'",
          "'Which agents spent the most? Forecast next quarter.'",
          "'Cost by approval outcome: approved vs rejected vs timed-out'",
        ]} />
      </Section>

      <CtaBand title="See cost exactly where it comes from" sub="One ledger, every principal, every request." primary={{ label: "Start free", href: "/pricing" }} secondary={{ label: "Talk to an engineer", href: "/enterprise/contact" }} />
    </>
  );
}
