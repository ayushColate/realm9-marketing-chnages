import type { Metadata } from "next";
import { Hero, Section } from "@/components/sections";
import ContactForm from "@/components/contact-form";

export const metadata: Metadata = { title: "Contact", description: "Talk to an engineer about your estate." };

export default function Page() {
  return (
    <>
      <Hero eyebrow="Enterprise · Contact" accent="#0070f3"
        title="Talk to an engineer, not a form router"
        sub="Tell us what you run and what is hurting. If Realm9 is not the right fit we will say so on the call rather than after the pilot." />

      <Section>
        <div className="feature-row">
          <ContactForm />
          <div>
            <div className="callout">
              <h4 style={{ marginBottom: 14 }}>What happens next</h4>
              <ul className="bullets check" style={{ ["--acc" as string]: "var(--cyan)" }}>
                <li>An engineer reads this, not a routing queue</li>
                <li>A 30-minute call about your estate, with no deck</li>
                <li>If it fits, a scoped pilot on your own hardware</li>
                <li>If it does not, we tell you what would fit better</li>
              </ul>
            </div>
            <div className="callout" style={{ marginTop: 16 }}>
              <h4 style={{ marginBottom: 10 }}>Direct</h4>
              <p className="small">General — <span className="mono" style={{ color: "var(--blue)" }}>hello@realm9.app</span></p>
              <p className="small">Security — <span className="mono" style={{ color: "var(--blue)" }}>security@realm9.app</span></p>
              <p className="small">Startup program — <span className="mono" style={{ color: "var(--blue)" }}>startups@realm9.app</span></p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
