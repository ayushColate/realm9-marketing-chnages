import type { Metadata } from "next";
import { Hero, FeatureRow, Term, SectionHead, CtaBand, Section } from "@/components/sections";

export const metadata: Metadata = {
  title: "FinOps — Cloud Cost Visibility and Control",
  description: "AWS and Azure cost data synced into Realm9, with a filterable cost explorer, custom dashboards, statistical anomaly detection, rightsizing analysis and cost thresholds on Terraform runs.",
};

export default function Page() {
  return (
    <>
      <Hero eyebrow="FinOps" accent="#b45309"
        title="See what your cloud costs — and catch cost changes before they ship"
        sub="FinOps pulls AWS and Azure cost data into the same platform your teams use to request environments and run Terraform. Engineers and finance work from one view of spend, and cost limits apply at the point where infrastructure changes are approved."
        ctas={[{ label: "View plans", href: "/pricing" }, { label: "Talk to the team", href: "/enterprise/contact" }]} />

      <Section className="pad">
        <SectionHead center title="From billing data to decisions"
          sub="Cost data is synced from your connected cloud accounts every night, then organised for exploring, monitoring and acting on spend." />

        <FeatureRow accent="#b45309" title="One view of spend across accounts"
          body="Enable FinOps on an AWS or Azure cloud connection and Realm9 brings its cost data into a multi-cloud overview, broken down by provider, account and top services."
          bullets={[
            "Cost trends and distribution across every connected account",
            "Top services by cost for each cloud connection",
            "Manual sync when you need figures refreshed before the nightly run",
            "Cost data kept alongside the environments and workspaces that generate it",
          ]}
          media={<Term title="cost explorer · last 30 days" html={`<span class="c-com"># filter and group spend</span>

  <span class="c-dim">group by</span>         service
  <span class="c-dim">provider</span>         AWS, Azure
  <span class="c-dim">filters</span>          region · environment · cost center · tags
  <span class="c-dim">view</span>             daily trend + breakdown

<span class="c-ok">✓ saved to team dashboard</span>`} />} />

        <FeatureRow flip accent="#b45309" title="Explore costs the way your organisation is structured"
          body="The cost explorer lets you filter and group spend by the dimensions your teams already use, so the question “what is this costing us?” has a direct answer."
          bullets={[
            "Filter by provider, connection, region, service, environment, namespace, cost center and tags",
            "Average daily cost and burn rate to see where spend is heading",
            "Custom dashboards, created from scratch or from a template",
            "Usage and utilisation analysis with rightsizing views for running resources",
          ]} />

        <FeatureRow accent="#b45309" title="Unusual spend, surfaced with context"
          body="Statistical anomaly detection compares actual cost against expected cost and flags significant variances, so a runaway resource is noticed in days rather than at month end."
          bullets={[
            "Anomalies graded low, medium, high and critical",
            "Expected versus actual cost, variance and the affected period",
            "Contributing services and a possible cause recorded for each anomaly",
            "Filter anomalies by cloud connection to find the owning team quickly",
          ]} />

        <FeatureRow flip accent="#b45309" title="Cost limits inside the change process"
          body="When a Terraform policy profile includes Infracost, every plan carries an estimated monthly cost and cost increase. Thresholds you set turn that estimate into a check that runs before apply."
          bullets={[
            "Estimated monthly cost and cost increase recorded on each Terraform run",
            "Thresholds for cost increase and total monthly cost in the policy profile",
            "Advisory or blocking enforcement, matching the rest of your policy checks",
            "Cost-related approvals kept on the run alongside security findings",
          ]} />
      </Section>

      <CtaBand title="Make cost part of how infrastructure gets approved"
        sub="FinOps is available on the Ultimate plan and works with Infrastructure Management, so spend is visible after deployment and checked before it."
        primary={{ label: "View plans", href: "/pricing" }} secondary={{ label: "Talk to the team", href: "/enterprise/contact" }} />
    </>
  );
}
