import { Hero, Cards, FeatureRow, Term, SectionHead, CtaBand, Section } from "@/components/sections";
import { Icons } from "@/components/icons";

const PARTNERS = ["BT", "Harman", "Blocktwin", "RefactoreQ", "OQ", "NextGen Tech"];

export default function Home() {
  return (
    <>
      <Hero
        badge="New"
        eyebrow="Infrastructure governance"
        title="Govern every infrastructure change from request to run"
        sub="Realm9 brings environment access, Terraform operations, policy checks and approvals into one workflow. Platform teams can give engineers a clearer path to provision infrastructure while keeping ownership, decisions and change history visible."
        ctas={[{ label: "Get started", href: "/" }, { label: "Talk to the team", href: "/enterprise/contact" }]}
      />

      <Section className="pad-sm">
        <p className="small center" style={{ marginBottom: 30 }}>Running in production at</p>
        <div className="logos">{PARTNERS.map((partner) => <span key={partner}>{partner}</span>)}</div>
      </Section>

      <Section>
        <SectionHead center
          title="One operating record for environments and infrastructure"
          sub="Realm9 connects environment requests and bookings with the projects, workspaces and Terraform runs that support them. Teams can see what was requested, what was approved, what changed and where to investigate when the planned state no longer matches the estate." />
      </Section>

      <section className="pad alt"><div className="wrap stack-24" style={{ gap: 88 }}>
        <FeatureRow
          accent="var(--cyan)"
          title="Make shared environments easier to request and safer to use"
          body="Environment Management replaces informal handoffs with a defined lifecycle. Teams submit the details an environment needs, follow the approval workflow for its type and book time against the environment once it is available."
          bullets={[
            "Custom request forms, business justification and attachments kept with the environment request",
            "Multi-level approval workflows, including requests for additional information when a decision needs more context",
            "Shared or exclusive bookings, with availability, approval and duration rules set per environment",
            "Environment status and booking records linked to the workspaces that provision the environment",
          ]}
          media={<Term title="environment booking · integration" html={`<span class="c-com"># request shared integration capacity</span>

  <span class="c-dim">environment</span>      integration
  <span class="c-dim">booking mode</span>     shared
  <span class="c-dim">approval</span>         pending review
  <span class="c-dim">workspace link</span>   integration-services

<span class="c-ok">✓ request recorded for the team</span>`} />}
        />
        <FeatureRow
          flip accent="var(--blue)"
          title="Keep Terraform changes inside a reviewable workflow"
          body="Connect a GitHub or GitLab repository, organise deployments into projects and workspaces, and run plans, applies, refreshes or destroys from Realm9. Policy results and approval decisions stay with the run rather than being spread across separate tools."
          bullets={[
            "Remote state locking, workspace variables and run logs managed with each Terraform workspace",
            "Policy profiles that combine security, secret, vulnerability and cost checks with advisory or mandatory enforcement",
            "Project approvals that hold an apply until the configured approvers have reviewed it",
            "AWS and Azure cloud connections alongside Proxmox and VMware vCenter for on-prem targets",
          ]}
          media={<Term title="workspace run · review required" html={`<span class="c-com"># planned infrastructure change</span>

  <span class="c-dim">workspace</span>        production-vpc
  <span class="c-dim">run type</span>          plan
  <span class="c-dim">policy profile</span>    results ready for review
  <span class="c-dim">state lock</span>        acquired
  <span class="c-dim">approval</span>         pending approver decision

<span class="c-ok">✓ run history and logs available</span>`} />}
        />
        <FeatureRow
          accent="var(--amber)"
          title="Bring cost into the decision before an apply"
          body="FinOps connects AWS and Azure cost data with Terraform policy checks. When a project uses Infracost, a plan can carry estimated monthly cost and cost-increase results into the same review that covers technical risk."
          bullets={[
            "AWS and Azure cost data available through the FinOps overview and cost explorer",
            "Cost views filtered by account, region, service, environment, cost center and tags",
            "Statistical anomaly detection and usage analysis to help teams investigate unusual spend",
            "Policy thresholds for estimated monthly cost and cost increase before an apply",
          ]}
          media={<Term title="policy check · cost review" html={`<span class="c-com"># estimated cost attached to a Terraform plan</span>

  <span class="c-dim">connection</span>       AWS production
  <span class="c-dim">estimate</span>         available in policy results
  <span class="c-dim">threshold</span>        evaluated before apply
  <span class="c-dim">decision</span>         recorded with the run

<span class="c-ok">✓ ready for approver review</span>`} />}
        />
      </div></section>

      <Section>
        <SectionHead center
          title="A governed entry point for every kind of infrastructure work"
          sub="Realm9 modules share the same projects, permissions, approvals and audit context. Teams can work through the browser, supported APIs or assisted tooling without creating a separate control model for each route." />
        <Cards items={[
          { icon: Icons.mcp, tag: "new", accent: "var(--purple)", title: "MCP Server", desc: "The Model Context Protocol tool layer used by Realm9’s Terraform assistant to inspect projects, search code, make targeted edits and request plan context.", href: "/products/mcp-server" },
          { icon: Icons.sandbox, tag: "soon", accent: "var(--purple)", title: "Sandbox", desc: "Planned isolated workspaces for experimental infrastructure work. This module is not yet available.", href: "/products/sandbox" },
          { icon: Icons.env, accent: "var(--purple)", title: "Environment Management", desc: "Request, approve, book and decommission environments while keeping workspace links and lifecycle activity in one record.", href: "/products/environment-management" },
          { icon: Icons.infra, accent: "var(--purple)", title: "Infrastructure Management", desc: "Manage Terraform projects, workspaces, runs, connections, policies and approvals across cloud and on-prem targets.", href: "/products/infrastructure-management" },
          { icon: Icons.finops, accent: "var(--purple)", title: "FinOps", desc: "Explore AWS and Azure spend, investigate anomalies and enforce cost thresholds on Terraform plans. Available on Ultimate.", href: "/products/finops" },
          { icon: Icons.release, tag: "soon", accent: "var(--purple)", title: "Release Management", desc: "Planned release coordination built on the environment bookings, approvals and change records Realm9 already maintains.", href: "/products/release-management" },
        ]} />
      </Section>

      <CtaBand
        title="Give platform teams one place to govern the work they support"
        sub="Start with the workflow that creates the most friction today, then connect environment access, Terraform operations and cost controls as your estate grows."
        primary={{ label: "Get started", href: "/" }}
        secondary={{ label: "See enterprise", href: "/enterprise" }}
      />
    </>
  );
}
