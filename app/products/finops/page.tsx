import type { Metadata } from "next";
import { Hero, FeatureRow, Term, SectionHead, CtaBand, Section } from "@/components/sections";

export const metadata: Metadata = {
  title: "FinOps",
  description: "Attribute every dollar to the request that caused it — cloud, on-prem and tokens.",
};

export default function Page() {
  return (
    <>
      <Hero eyebrow="FinOps" accent="#b45309"
        title="Cost you can explain down to the request that caused it"
        sub="Billing APIs tell you what a resource cost. They cannot tell you who asked for it, why, or under whose approval. Realm9 sits at the request boundary, so it knows intent — not just tags."
        ctas={[{ label: "Start free", href: "/pricing" }, { label: "See the ledger", href: "/enterprise/contact" }]} />

      <Section>
        <SectionHead center title="The attribution gap"
          sub="Ninety-eight percent of FinOps teams now manage AI spend. Almost none of them can answer the question their CFO actually asks." />
        <div className="grid g2" style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="card card-accent" style={{ ["--acc" as string]: "var(--fg-3)" }}>
            <h4>What most tools answer</h4>
            <p style={{ marginBottom: 12 }}>&ldquo;We spent $412,000 on EC2 last month, of which $180,000 was untagged.&rdquo;</p>
            <p className="mono" style={{ color: "var(--fg-4)" }}>Useful for a budget review. Useless for a decision.</p>
          </div>
          <div className="card card-accent" style={{ ["--acc" as string]: "var(--amber)" }}>
            <h4>What Realm9 answers</h4>
            <p style={{ marginBottom: 12 }}>&ldquo;The migration agent held 8×H100 for 61 hours across 14 leases, approved by platform-eng under policy gpu-standard, at a cost of $4,118 charged to the data-platform budget.&rdquo;</p>
            <p className="mono" style={{ color: "var(--amber)" }}>Actionable, attributable, auditable.</p>
          </div>
        </div>
      </Section>

      <section className="pad alt"><div className="wrap stack-24" style={{ gap: 80 }}>
        <FeatureRow accent="#b45309"
          title="One ledger for cloud, data centre and tokens"
          body="Public cloud invoices, on-prem amortisation and model provider spend normalised into a single consumption record, keyed by the principal that requested it."
          bullets={["AWS, Azure, GCP and OCI billing ingested and normalised", "On-prem capacity amortised per lease so private infrastructure is comparable", "LLM and inference spend attributed to the agent and the task", "Exportable to your data warehouse, or queried in place"]}
          media={<Term title="realm9 ledger --group-by team --window 30d" html={`TEAM              CLOUD      ON-PREM    TOKENS     TOTAL
platform-eng    <span class="c-num">$41,220</span>   <span class="c-num">$12,800</span>    <span class="c-num">$1,940</span>   <span class="c-num">$55,960</span>
data-platform   <span class="c-num">$88,410</span>   <span class="c-num">$61,200</span>   <span class="c-num">$34,880</span>  <span class="c-num">$184,490</span>
payments        <span class="c-num">$22,100</span>    <span class="c-num">$4,400</span>      <span class="c-num">$310</span>   <span class="c-num">$26,810</span>
qa-automation   <span class="c-num">$14,890</span>    <span class="c-num">$8,100</span>      <span class="c-num">$620</span>   <span class="c-num">$23,610</span>

<span class="c-dim">unattributed</span>                                  <span class="c-ok">$0</span>
<span class="c-dim">every dollar traced to a lease and a principal</span>`} />} />

        <FeatureRow flip accent="#b45309"
          title="Anomalies with a cause attached"
          body="A spend alert that says GPU costs rose 41% starts an investigation. An alert that names the lease, the agent, the missing TTL and the policy that would have prevented it ends one."
          bullets={["Detection tied to the originating request, not just the resource", "Budget ceilings enforced at request time, before the spend happens", "Idle and orphan detection across environments, volumes and reservations", "Recommended policy changes generated from what actually went wrong"]}
          media={<Term title="anomaly r9-anm-221" html={`<span class="c-warn">▲ 41%</span>  data-science GPU spend, 7d

<span class="c-dim">root cause</span>   lease r9-lse-8102
<span class="c-dim">principal</span>    agent/hyperparam-sweep
<span class="c-dim">owner</span>        <span class="c-fn">@l.okafor</span>
<span class="c-dim">shape</span>        8 × H100, <span class="c-warn">no TTL set</span>
<span class="c-dim">held</span>         <span class="c-warn">61h</span> (median for this agent: 4h)
<span class="c-dim">overspend</span>    <span class="c-num">$3,940</span>

<span class="c-ok">suggested policy</span>  gpu-max-ttl: 12h, require_budget
<span class="c-dim">would have prevented</span> <span class="c-num">$3,110</span> <span class="c-dim">of this</span>`} />} />

        <FeatureRow accent="#b45309"
          title="Rightsizing you can actually action"
          body="Recommendations are only useful if someone can act on them without a two-week change process. Realm9 turns each one into a reviewable plan inside the same approval workflow you already use."
          bullets={["Rightsizing and idle-reclaim proposals as reviewable plans", "One-click apply, fully audited, with rollback", "Savings tracked as realised, not just identified", "Showback and chargeback reports finance will accept"]}
          media={<Term title="realm9 optimise --window 30d" html={`RECOMMENDATION                SAVING    STATUS
rightsize 14 × m5.2xlarge   <span class="c-num">$4,120</span>/mo  <span class="c-ok">applied</span>
reclaim 9 idle environments <span class="c-num">$2,840</span>/mo  <span class="c-warn">in review</span>
delete 31 orphaned volumes    <span class="c-num">$610</span>/mo  <span class="c-ok">applied</span>
shift build to proxmox      <span class="c-num">$3,300</span>/mo  <span class="c-dim">proposed</span>

<span class="c-dim">identified</span>  <span class="c-num">$10,870</span>/mo
<span class="c-dim">realised</span>    <span class="c-ok">$4,730</span>/mo  <span class="c-dim">(tracked, not projected)</span>`} />} />
      </div></section>

      <CtaBand title="Find out what your agents are actually spending"
        sub="FinOps is included from the Team plan up — not reserved for the top tier."
        primary={{ label: "See pricing", href: "/pricing" }} secondary={{ label: "Talk to us", href: "/enterprise/contact" }} />
    </>
  );
}
