import type { Metadata } from "next";
import Link from "next/link";
import { Hero, Cards, Term, SectionHead, CtaBand, Section } from "@/components/sections";
import { Icons } from "@/components/icons";

export const metadata: Metadata = { title: "Startups", description: "Realm9 for startups — free forever, self-hosted, with SSO and audit logging from day one." };

export default function Page() {
  return (
    <>
      <Hero eyebrow="Realm9 for Startups" accent="#0d9488"
        title="You do not have a platform team. Realm9 is the one you would have hired."
        sub="Free forever, self-hosted, with audit logging and SSO included from day one — so the governance conversation with your first enterprise customer is a demo instead of a delay."
        ctas={[{ label: "Start free", href: "/pricing" }, { label: "Apply for credits", href: "/enterprise/contact" }]} />

      <Section>
        <SectionHead center title="How a startup actually uses Realm9"
          sub="Four things that hurt at fifteen engineers and become existential at fifty." />
        <Cards items={[
          { icon: Icons.env, accent: "var(--cyan)", title: "Stop paying for environments nobody is using", desc: "Non-production is routinely a third of an early cloud bill. Give every environment a TTL and an owner, and watch the bill fall without anyone changing how they work." },
          { icon: Icons.agent, accent: "var(--purple)", title: "Let agents work without giving them the keys", desc: "Your coding agents need to run things. Give them a lease with a two-hour expiry and a $50 ceiling instead of an admin credential and a hope." },
          { icon: Icons.shield, accent: "var(--green)", title: "Pass your first security review", desc: "SSO, RBAC, audit logs and CIS scanning are in the free tier. When a prospect sends a 200-row security questionnaire, you have answers rather than a project." },
          { icon: Icons.finops, accent: "var(--amber)", title: "Know your cost per customer before your board asks", desc: "Attribute spend to features, teams and customers from the beginning, so unit economics are a report rather than an archaeology exercise." },
          { icon: Icons.infra, accent: "var(--blue)", title: "Keep the option to leave the cloud", desc: "When the bill makes owning hardware sensible, the workflow does not change. The same catalogue provisions a Proxmox VM and an EC2 instance." },
          { icon: Icons.rocket, accent: "var(--pink)", title: "Onboard engineer number twenty in an hour", desc: "A new joiner requests what they need from a catalogue instead of asking in Slack and waiting for whoever has the credentials." },
        ]} />
      </Section>

      <Section alt>
        <div className="feature-row">
          <div>
            <h3 style={{ marginBottom: 14 }}>The Realm9 Startup Program</h3>
            <p className="lede" style={{ fontSize: 16 }}>For companies under 50 people and under $5M raised. Apply in five minutes; we review weekly.</p>
            <ul className="bullets check" style={{ ["--acc" as string]: "var(--cyan)", marginTop: 24 }}>
              <li>Team plan free for 12 months, including FinOps and the MCP Server</li>
              <li>A two-hour architecture session with a Realm9 engineer, not a sales engineer</li>
              <li>Migration help if you are moving off a spreadsheet, Atlantis or Terraform Cloud</li>
              <li>Direct Slack channel with the people who build the product</li>
              <li>No credit card, no commitment, and no automatic conversion at the end</li>
            </ul>
            <div className="btn-row" style={{ marginTop: 28 }}>
              <Link className="btn btn-primary" href="/enterprise/contact">Apply to the program</Link>
              <Link className="btn btn-secondary" href="/pricing">Or just start free</Link>
            </div>
          </div>
          <div className="fr-media">
            <Term title="day one" html={`$ docker run -d -p 8080:8080 realm9/control-plane

  <span class="c-ok">✓</span> control plane up          <span class="c-dim">0:12</span>
  <span class="c-ok">✓</span> connected aws-sandbox     <span class="c-dim">0:48</span>
  <span class="c-ok">✓</span> imported 3 terraform ws   <span class="c-dim">1:31</span>
  <span class="c-ok">✓</span> policy: default-startup   <span class="c-dim">1:44</span>
  <span class="c-ok">✓</span> audit log enabled         <span class="c-dim">1:44</span>

$ realm9 env book staging <span class="c-str">--ttl 4h</span>
<span class="c-ok">✓ lease r9-lse-0001 granted</span>

<span class="c-com"># total elapsed: 2m 06s</span>`} />
          </div>
        </div>
      </Section>

      <CtaBand title="Start with the free tier. Grow into the rest."
        sub="Nothing you build on the free plan needs rebuilding when you move up."
        primary={{ label: "Start free", href: "/pricing" }} secondary={{ label: "Apply for credits", href: "/enterprise/contact" }} />
    </>
  );
}
