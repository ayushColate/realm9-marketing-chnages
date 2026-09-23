import type { Metadata } from "next";
import { Hero, Cards, FeatureRow, Term, SectionHead, CtaBand, Section } from "@/components/sections";

export const metadata: Metadata = {
  title: "Environment Management",
  description: "Book, approve and reclaim every environment your teams contend over.",
};

export default function Page() {
  return (
    <>
      <Hero eyebrow="Environment Management" accent="#0d9488"
        title="The environment queue that everybody trusts"
        sub="Shared environments are the scarcest resource in most engineering organisations and the least governed. Realm9 gives them a booking system, an approval chain, an expiry, and an owner."
        ctas={[{ label: "Start free", href: "/pricing" }, { label: "Book a walkthrough", href: "/enterprise/contact" }]} />

      <Section>
        <SectionHead title="What breaks without it" />
        <Cards items={[
          { title: "The spreadsheet", desc: "Someone owns a tab nobody updates. Two teams deploy to the same environment within an hour and spend the afternoon working out whose change broke it." },
          { title: "The forgotten reservation", desc: "An environment booked for a two-day test is still held six weeks later. Nobody remembers who owns it and nobody wants to be the one who tears it down." },
          { title: "The invisible bill", desc: "Non-production is routinely a third of cloud spend, and almost none of it is attributed to the team or the test run that caused it." },
        ]} />
      </Section>

      <section className="pad alt"><div className="wrap stack-24" style={{ gap: 80 }}>
        <FeatureRow accent="#0d9488"
          title="Requests, queues and conflict detection"
          body="A request is checked against every other booking before it is granted. Overlaps surface as a queue position, not as a production incident on Thursday afternoon."
          bullets={["Priority tiers so a release candidate outranks an exploratory test", "Automatic conflict detection across environments, services and data sets", "Requesters see their queue position and estimated start immediately", "Escalation paths when a high-priority booking needs to pre-empt"]}
          media={<Term title="int-01 · September" html={`  MON 14   <span class="c-ok">████████</span> payments-team    <span class="c-dim">release candidate</span>
  TUE 15   <span class="c-ok">████████</span> payments-team
  WED 16   <span class="c-str">████</span>     qa-automation    <span class="c-dim">regression suite</span>
           <span class="c-warn">░░░░</span>     <span class="c-warn">queued: data-platform (2nd)</span>
  THU 17   <span class="c-str">████████</span> qa-automation
  FRI 18   <span class="c-dim">────────</span> <span class="c-dim">available</span>

  <span class="c-dim">held by</span> 2 teams   <span class="c-dim">utilisation</span> <span class="c-num">78%</span>   <span class="c-dim">reclaimed</span> <span class="c-num">11</span>`} />} />

        <FeatureRow flip accent="#0d9488"
          title="Approvals that match the risk"
          body="A developer taking a sandbox for four hours should not need a change advisory board. A team holding pre-production across a release freeze should. Policy decides which is which."
          bullets={["Route by environment class, duration, cost or blast radius", "Auto-approve the routine so reviewers only see what matters", "Standing approvals for recurring bookings such as nightly regression", "Every decision recorded with who, when, and on what grounds"]}
          media={<Term title="policy · environment-approvals.rego" html={`<span class="c-key">allow</span> <span class="c-dim">if</span> {
  input.class == <span class="c-str">"ephemeral"</span>
  input.duration_hours &lt; <span class="c-num">8</span>
  input.cost_estimate &lt; <span class="c-num">100</span>
}                          <span class="c-ok">→ auto-approved</span>

<span class="c-key">require_review</span> <span class="c-dim">if</span> {
  input.class == <span class="c-str">"pre-production"</span>
  input.overlaps_freeze == <span class="c-key">true</span>
}                          <span class="c-warn">→ @release-board</span>

<span class="c-key">deny</span> <span class="c-dim">if</span> {
  input.requester == input.approver
}                          <span class="c-fn">→ separation of duties</span>`} />} />

        <FeatureRow accent="#0d9488"
          title="Leases expire. Capacity comes back."
          body="Nothing is held forever. Every booking carries a TTL, warns its owner before it lapses, and returns the environment to the pool automatically if nobody renews it."
          bullets={["Configurable warning windows and self-service extension", "Automatic teardown for ephemeral environments, hand-back for shared ones", "Idle detection so an environment nobody is using is flagged early", "Reclaim history so you can prove the capacity was actually recovered"]}
          media={<Term title="realm9 reclaim --dry-run" html={`LEASE          ENVIRONMENT   OWNER          IDLE
r9-lse-4410    perf-02       @a.silva       <span class="c-warn">9d</span>
r9-lse-4188    int-03        @qa-bot        <span class="c-warn">14d</span>
r9-lse-3902    sandbox-11    <span class="c-dim">(unowned)</span>     <span class="c-warn">31d</span>

<span class="c-dim">would reclaim</span>   3 environments
<span class="c-dim">would recover</span>   <span class="c-num">$2,840</span>/mo
<span class="c-dim">owners notified</span> 48h before teardown

<span class="c-ok">run without --dry-run to queue for approval</span>`} />} />
      </div></section>

      <CtaBand title="Give your shared environments an owner"
        sub="Deploy Realm9 free and book your first environment in under ten minutes."
        primary={{ label: "Start free", href: "/pricing" }} secondary={{ label: "See pricing", href: "/pricing" }} />
    </>
  );
}
