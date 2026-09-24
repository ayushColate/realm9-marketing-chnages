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
        <SectionHead center title="Cost visibility that informs each change"
          sub="FinOps brings AWS and Azure cost data into Realm9, where teams can explore spend, investigate unusual changes and apply cost thresholds to Terraform plans." />

        <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
        <FeatureRow accent="#b45309" title="Start with a clear view of connected cloud spend"
          body="Enable FinOps on an AWS or Azure connection to see cost trends, account distribution and the services responsible for the largest share of spend."
          bullets={[
            "Cost trends and service breakdowns for each connected cloud account",
            "Manual sync when figures need refreshing before the scheduled cost sync",
            "Cost data shown alongside the environment and workspace context held in Realm9",
          ]}
          media={<Term title="cost explorer · connected accounts" html={`<span class="c-com"># filter and group spend</span>

  <span class="c-dim">group by</span>         service
  <span class="c-dim">provider</span>         AWS, Azure
  <span class="c-dim">filters</span>          region · environment · cost center · tags
  <span class="c-dim">view</span>             trend + breakdown

<span class="c-ok">✓ saved to team dashboard</span>`} />} />

        <FeatureRow flip accent="#b45309" title="Answer cost questions with the dimensions your team uses"
          body="The cost explorer filters and groups spend by the same connection, environment and organisational details your teams use to manage infrastructure."
          bullets={[
            "Filter by provider, connection, region, service, environment, namespace, cost center and tags",
            "Review average daily cost and burn rate alongside the selected period",
            "Create dashboards from scratch or begin with a template",
            "Use usage and rightsizing views to review running resources",
          ]} />

        <FeatureRow accent="#b45309" title="Investigate unusual spend without losing the context"
          body="Statistical anomaly detection compares actual cost with expected cost and records the variance, period and contributing services for review."
          bullets={[
            "Anomalies categorised as low, medium, high or critical",
            "Expected and actual cost shown together with the recorded variance",
            "Contributing services and possible causes available on the anomaly record",
            "Filter by cloud connection to route investigation to the responsible team",
          ]} />

        <FeatureRow flip accent="#b45309" title="Use cost thresholds before infrastructure is applied"
          body="When a Terraform policy profile includes Infracost, Realm9 records the estimated monthly cost and increase from the plan, then evaluates the thresholds configured for that profile."
          bullets={[
            "Estimated monthly cost and increase stored with the Terraform run policy check",
            "Maximum monthly cost and increase thresholds configured per policy profile",
            "Advisory or blocking enforcement applied with the rest of the policy checks",
            "Approval decisions stay with the same run as its cost and security results",
          ]} />
        </div>
      </Section>

      <CtaBand title="Make cost part of how infrastructure gets approved"
        sub="FinOps is available on the Ultimate plan and works with Infrastructure Management, so spend is visible after deployment and checked before it."
        primary={{ label: "View plans", href: "/pricing" }} secondary={{ label: "Talk to the team", href: "/enterprise/contact" }} />
    </>
  );
}
