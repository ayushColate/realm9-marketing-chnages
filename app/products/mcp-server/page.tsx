import type { Metadata } from "next";
import { Hero, Cards, Term, SectionHead, CtaBand, Section } from "@/components/sections";

export const metadata: Metadata = {
  title: "AI Agent Context for Terraform",
  description: "Connect Claude Code, Cursor, Windsurf, and GitHub Copilot agents to your infrastructure with policy control and cost attribution. Agents see your real infrastructure through one protocol. Grants, not credentials.",
};

export default function Page() {
  return (
    <>
      <Hero badge="New" eyebrow="Generally available today" accent="#7c3aed"
        title="Your agents already have capability. Give them permission."
        sub="The Realm9 MCP Server lets any coding agent request infrastructure the way a person does — through an approval, against a quota, under a budget, with a lease that expires. It hands out grants, never credentials."
        ctas={[{ label: "Read the quickstart", href: "/pricing" }, { label: "Talk to an engineer", href: "/enterprise/contact" }]} />

      <Section className="pad-sm">
        <div className="grid g3">
          <div><h4 style={{ marginBottom: 8 }}>Works with what you already run</h4><p className="small">Claude Code, Cursor, Windsurf, GitHub Copilot agents, and any custom pipeline that speaks the Model Context Protocol.</p></div>
          <div><h4 style={{ marginBottom: 8 }}>No static credentials</h4><p className="small">An agent never holds a long-lived key. It holds a lease with a scope, a ceiling and an expiry that Realm9 can revoke in one call.</p></div>
          <div><h4 style={{ marginBottom: 8 }}>One line to install</h4><p className="small">Point your agent at your own Realm9 control plane. Nothing leaves your network unless you decide it should.</p></div>
        </div>
      </Section>

      <section className="pad alt"><div className="wrap">
        <div className="feature-row">
          <div>
            <h3 style={{ marginBottom: 14 }}>The problem nobody has solved yet</h3>
            <p className="lede" style={{ fontSize: 16 }}>Every vendor is racing to give agents more capability — sandboxes, code generation, autonomous remediation. Almost nobody is giving organisations control over what those agents are allowed to consume.</p>
            <p className="lede" style={{ fontSize: 16, marginTop: 16 }}>Today an agent runs as a service account with a static credential and an unlimited blast radius. Tomorrow you will have hundreds of them. Realm9 makes each one a named principal with a quota, a budget, a scope and an audit trail — enforced at the moment of request.</p>
            <ul className="bullets" style={{ ["--acc" as string]: "var(--purple)", marginTop: 26 }}>
              <li>Policy evaluated in milliseconds, so the agent is not waiting on a human for routine work</li>
              <li>Budget ceilings that stop spend before it happens, not alert on it afterwards</li>
              <li>Human escalation only where the policy says it is warranted</li>
              <li>Every tool call written to the same ledger as every human request</li>
            </ul>
          </div>
          <div className="fr-media">
            <Term title="~/.claude/mcp.json" html={`{
  <span class="c-key">"mcpServers"</span>: {
    <span class="c-key">"realm9"</span>: {
      <span class="c-key">"url"</span>: <span class="c-str">"https://r9.acme.internal/mcp"</span>,
      <span class="c-key">"auth"</span>: <span class="c-str">"oidc"</span>,
      <span class="c-key">"principal"</span>: <span class="c-str">"agent/pr-reviewer"</span>
    }
  }
}

<span class="c-com"># tools exposed to the agent</span>
  <span class="c-fn">env.request</span>        <span class="c-dim">book an environment</span>
  <span class="c-fn">env.extend</span>         <span class="c-dim">renew within budget</span>
  <span class="c-fn">env.release</span>        <span class="c-dim">hand capacity back</span>
  <span class="c-fn">infra.plan</span>         <span class="c-dim">dry-run, never applies</span>
  <span class="c-fn">infra.apply</span>        <span class="c-dim">policy-gated</span>
  <span class="c-fn">gpu.lease</span>          <span class="c-dim">fair-share queue</span>
  <span class="c-fn">cost.query</span>         <span class="c-dim">read own spend</span>
  <span class="c-fn">ledger.write</span>       <span class="c-dim">automatic</span>`} />
          </div>
        </div>
      </div></section>

      <Section>
        <SectionHead title="A request, end to end" />
        <Term title="agent/pr-reviewer → realm9 mcp" html={`<span class="c-fn">→ env.request</span> { <span class="c-key">"class"</span>: <span class="c-str">"ephemeral"</span>, <span class="c-key">"ttl"</span>: <span class="c-str">"2h"</span>, <span class="c-key">"reason"</span>: <span class="c-str">"verify PR #4412"</span> }

  <span class="c-dim">identity</span>     agent/pr-reviewer  <span class="c-dim">owner:</span> <span class="c-fn">@t.nakamura</span>
  <span class="c-dim">quota</span>        <span class="c-ok">14 of 40 concurrent leases used</span>
  <span class="c-dim">budget</span>       <span class="c-ok">$212 of $2,000 monthly ceiling</span>
  <span class="c-dim">policy</span>       <span class="c-ok">ephemeral-auto</span> <span class="c-dim">→ approved without human review</span>
  <span class="c-dim">scope</span>        eu-west-1 · non-production · no data-class-A

<span class="c-ok">✓ lease r9-lse-9271</span>  expires <span class="c-num">14:22 UTC</span>  est <span class="c-num">$3.80</span>

<span class="c-fn">→ infra.apply</span> { <span class="c-key">"workspace"</span>: <span class="c-str">"prod-db"</span> }
<span class="c-warn">✗ denied</span>  policy <span class="c-str">"agent-no-production"</span>
       <span class="c-dim">escalate to</span> <span class="c-fn">@platform-leads</span> <span class="c-dim">to override</span>
       <span class="c-dim">logged: r9-aud-55190</span>`} />
        <div style={{ marginTop: 36 }}>
          <Cards items={[
            { title: "Deny is a feature", desc: "The denial is as valuable as the grant. It is recorded, attributable, and tells you exactly which policy fired and who can override it." },
            { title: "Revoke in one call", desc: "An agent behaving badly is not a credential rotation exercise. Suspend the principal and every active lease it holds is reclaimed." },
            { title: "Runs where you run", desc: "Self-hosted by default. Your policy, your ledger, your network. Nothing about your estate is sent anywhere you did not choose." },
          ]} />
        </div>
      </Section>

      <CtaBand title="Put a policy engine between your agents and your infrastructure"
        sub="The MCP Server ships with every Realm9 plan, including the free self-hosted tier."
        primary={{ label: "Start free", href: "/pricing" }} secondary={{ label: "Read the docs", href: "/enterprise/contact" }} />
    </>
  );
}
