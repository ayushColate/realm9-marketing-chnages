import type { Metadata } from "next";
import { Hero, Section } from "@/components/sections";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = { title: "Contact", description: "Talk to the Realm9 team about your environments, Terraform workflows, approvals, cost visibility and deployment requirements." };

export default function Page() {
  return (
    <>
      <Hero eyebrow="Enterprise · Contact" accent="#0070f3"
        title="Tell us how your teams work today"
        sub="Share how your teams request environments, change infrastructure and track cost. We will use that to show the parts of Realm9 that are relevant to you — and be clear about the parts that are not." />

      <Section>
        <div className="feature-row">
          <ContactForm />
          <div>
            <div className="callout">
              <h4 style={{ marginBottom: 14 }}>What happens next</h4>
              <ul className="bullets check" style={{ ["--acc" as string]: "var(--cyan)" }}>
                <li>The team reviews what you have shared</li>
                <li>A conversation about your environments and workflows</li>
                <li>A walkthrough of the Realm9 modules that match your needs</li>
                <li>Guidance on plans and deployment options that fit</li>
              </ul>
            </div>
            <div className="callout" style={{ marginTop: 16 }}>
              <h4 style={{ marginBottom: 10 }}>Direct</h4>
              <p className="small">Enterprise — <span className="mono" style={{ color: "var(--blue)" }}>enterprise@realm9.app</span></p>
              <p className="small">Support — <span className="mono" style={{ color: "var(--blue)" }}>support@realm9.app</span></p>
              <p className="small">Security — <span className="mono" style={{ color: "var(--blue)" }}>security@realm9.app</span></p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
