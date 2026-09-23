import { Hero, StatBand, Cards, FeatureRow, Term, SectionHead, CtaBand, Section } from "@/components/sections";
import { Icons } from "@/components/icons";

const LOGOS = ["BT", "Verizon", "Harman", "Vodafone", "Orange", "Telefónica"];

export default function Home() {
  return (
    <>
      <Hero
        badge="New"
        eyebrow="Realm9 MCP Server is generally available"
        title="Realm9 handles the ecosystem for software and hardware, leveraged by humans and by agents."
        sub="One control plane for the environments, infrastructure and compute your teams contend over — with the approvals, quotas and cost attribution that make it safe to hand any of it to an agent."
        ctas={[{ label: "Start free", href: "/pricing" }, { label: "Talk to an engineer", href: "/enterprise/contact" }]}
      />

      <Section className="pad-sm">
        <p className="small center" style={{ marginBottom: 30 }}>Running in production at</p>
        <div className="logos">{LOGOS.map((l) => <span key={l}>{l}</span>)}</div>
      </Section>

      <StatBand stats={[
        { n: "4 clouds", l: "AWS, Azure, GCP and OCI alongside vCenter, Proxmox and bare metal" },
        { n: "13+", l: "Audit categories captured on every request, human or machine" },
        { n: "< 10 min", l: "From docker run to your first governed environment" },
        { n: "Self-hosted", l: "Runs in your VPC, your data centre, or fully air-gapped" },
      ]} />

      <Section>
        <SectionHead center
          title="Infrastructure has a new majority user"
          sub="Agents now open pull requests, run test suites, hold environments and burn GPU hours around the clock. Realm9 gives them the same thing you give a new engineer: an identity, a budget, a scope, and a record of what they did." />
        <Cards items={[
          { icon: Icons.agent, accent: "var(--purple)", title: "Every actor has a name", desc: "Humans, service accounts and agents are all first-class principals with an owner, a quota and a budget ceiling. No more shared credentials with unlimited blast radius." },
          { icon: Icons.clock, accent: "var(--cyan)", title: "Every grant expires", desc: "Capacity is issued as a lease with a TTL, not a permanent assignment. Idle environments and forgotten GPU reservations reclaim themselves." },
          { icon: Icons.ledger, accent: "var(--amber)", title: "Every action is on the ledger", desc: "Because Realm9 sits at the request boundary, it knows intent — who asked, why, under which approval, and what it cost. Tags cannot tell you that." },
        ]} />
      </Section>

      <section className="pad alt"><div className="wrap stack-24" style={{ gap: 88 }}>
        <FeatureRow
          accent="var(--cyan)"
          title="Stop losing days to environment contention"
          body="Six teams, one integration environment, and a spreadsheet nobody trusts. Realm9 replaces it with a real booking system — requests, priority queues, approval chains, and a calendar that reflects what is actually happening."
          bullets={[
            "Priority-ordered queues with conflict detection before the clash, not after",
            "Approval workflows that route by environment class, cost or blast radius",
            "Automatic reclaim when a booking lapses, with owner notification",
            "A shared calendar your release manager and your CI system both read",
          ]}
          media={<Term title="realm9 env book --interactive" html={`<span class="c-com"># request the shared integration environment</span>
$ realm9 env book int-01 <span class="c-str">--until</span> <span class="c-num">"2026-09-15T18:00Z"</span>

  <span class="c-dim">queue position</span>   <span class="c-ok">1 of 3</span>
  <span class="c-dim">conflicts</span>        <span class="c-ok">none detected</span>
  <span class="c-dim">approval</span>         auto <span class="c-dim">(policy: team-owned, &lt; 48h)</span>
  <span class="c-dim">lease expires</span>    2026-09-15 18:00 UTC
  <span class="c-dim">est. cost</span>        <span class="c-num">$41.20</span> <span class="c-dim">→ billed to platform-eng</span>

<span class="c-ok">✓ lease r9-lse-8814 granted</span>`} />}
        />
        <FeatureRow
          flip accent="var(--blue)"
          title="One control plane for infrastructure you own and infrastructure you rent"
          body="Terraform and OpenTofu runs, state locking, drift detection and policy scanning — across AWS, Azure, GCP and OCI, and across the vCenter and Proxmox estates most modern tools quietly ignore."
          bullets={[
            "Plan, apply and destroy with policy gates from Checkov, Trivy and TruffleHog",
            "Drift detection with remediation plans you review before they run",
            "Remote state with locking, versioning and per-workspace RBAC",
            "On-prem parity: the same workflow for a VM in your rack and an instance in us-east-1",
          ]}
          media={<Term title="realm9 plan · production-vpc" html={`$ realm9 plan production-vpc

  <span class="c-ok">+</span> aws_subnet.private[2]
  <span class="c-warn">~</span> aws_security_group.api        <span class="c-dim">1 rule changed</span>
  <span class="c-ok">+</span> proxmox_vm.build-runner-04

  <span class="c-dim">policy</span>   <span class="c-ok">checkov  32 passed</span>  <span class="c-warn">1 warn</span>
  <span class="c-dim">secrets</span>  <span class="c-ok">trufflehog clean</span>
  <span class="c-dim">drift</span>    <span class="c-warn">2 resources diverged since 09-11</span>
  <span class="c-dim">cost</span>    <span class="c-num">+$318/mo</span>  <span class="c-dim">→ requires approval (&gt; $250)</span>

<span class="c-dim">awaiting review from</span> <span class="c-fn">@platform-leads</span>`} />}
        />
        <FeatureRow
          accent="var(--amber)"
          title="Cost you can explain, not just cost you can see"
          body="Every FinOps tool can tell you what AWS charged. Realm9 can tell you which agent, running which task, on behalf of which team, under whose approval, caused the charge — across cloud, on-prem and model tokens."
          bullets={[
            "Unified spend across public cloud, private data centre and LLM providers",
            "Anomaly detection tied to the request that triggered it",
            "Rightsizing and idle-reclaim recommendations with one-click, audited action",
            "Chargeback and showback reports finance will actually accept",
          ]}
          media={<Term title="realm9 ledger --group-by principal --window 7d" html={`PRINCIPAL              TYPE     LEASES   SPEND
<span class="c-fn">agent/ci-migrator</span>      agent      1,204  <span class="c-num">$4,118</span>
<span class="c-fn">agent/pr-reviewer</span>      agent        892  <span class="c-num">$1,244</span>
<span class="c-fn">team/platform-eng</span>      human        141  <span class="c-num">$9,860</span>
<span class="c-fn">team/data-science</span>      human         38  <span class="c-num">$22,410</span>  <span class="c-warn">▲ 41%</span>

<span class="c-warn">! anomaly</span>  data-science exceeded GPU budget on 09-11
          <span class="c-dim">cause: lease r9-lse-8102, 8×H100, no TTL set</span>
          <span class="c-dim">policy 'gpu-max-ttl' now enforced</span>`} />}
        />
      </div></section>

      <Section>
        <SectionHead center
          title="Built for the way infrastructure is actually requested now"
          sub="Five surfaces, one policy engine. Whether the request arrives from a person, a pipeline or a coding agent, it is evaluated the same way and written to the same ledger." />
        <Cards items={[
          { icon: Icons.mcp, tag: "new", accent: "var(--purple)", title: "MCP Server", desc: "Claude Code, Cursor and your own agent pipelines request infrastructure through one protocol — and get leases, not credentials.", href: "/products/mcp-server" },
          { icon: Icons.r9, tag: "beta", accent: "var(--pink)", title: "R9", desc: "Describe what you need in plain language. R9 returns reviewable Terraform, a policy report and a cost estimate before anything runs.", href: "/products/r9" },
          { icon: Icons.sandbox, tag: "soon", accent: "var(--cyan)", title: "Sandbox", desc: "Sub-second isolated environments for agent work, running on hardware you already own and already trust.", href: "/products/sandbox" },
          { icon: Icons.env, accent: "var(--blue)", title: "Web console", desc: "Calendars, queues, approvals and dashboards for the humans who own the estate.", href: "/products/environment-management" },
          { icon: Icons.infra, accent: "var(--blue)", title: "CLI and API", desc: "Everything the console does, scriptable — with the same policy checks and the same audit trail.", href: "/products/infrastructure-management" },
          { icon: Icons.shield, accent: "var(--green)", title: "Policy engine", desc: "One place to express who may consume what, for how long, at what cost, and who has to say yes.", href: "/enterprise" },
        ]} />
      </Section>

      <CtaBand
        title="Deploy it on your own hardware in ten minutes"
        sub="Free forever, self-hosted, with audit logging included — not gated behind a sales call."
        primary={{ label: "Start free", href: "/pricing" }}
        secondary={{ label: "See enterprise", href: "/enterprise" }}
      />
    </>
  );
}
