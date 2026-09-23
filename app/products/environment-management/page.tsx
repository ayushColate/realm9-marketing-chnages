import type { Metadata } from "next";
import { Hero, Cards, FeatureRow, Term, SectionHead, CtaBand, Section } from "@/components/sections";

export const metadata: Metadata = {
  title: "Environment Booking & Lifecycle",
  description: "Self-service environments with booking, priority queues, approval workflows, TTL-based auto-reclaim, and shared calendars. Prevents contention before it happens.",
};

export default function Page() {
  return (
    <>
      <Hero eyebrow="Environment Management" accent="#0d9488"
        title="The environment queue that everybody trusts"
        sub="Shared environments are the scarcest resource in most engineering organisations and the least governed. Realm9 gives them a booking system, an approval chain, an expiry, and an owner."
        ctas={[{ label: "Start free", href: "/pricing" }, { label: "Book a walkthrough", href: "/enterprise/contact" }]} />

      <Section className="pad">
        <SectionHead center title="Environments as a service" sub="Booking, approval, ownership, expiry, and cost — all in one system" />

        <FeatureRow accent="#0d9488" title="Self-service booking with approval" body="Teams book environments from a shared pool. Approval workflows prevent contention before it happens." bullets={[
          "Calendar view: see what's booked, who owns it, when it expires",
          "Priority queues: urgent work can jump the line with approval",
          "Approval workflows: check cost, availability and compliance before granting",
          "Conflicts detected BEFORE clash: booking system knows the environment is already taken",
        ]} />

        <FeatureRow accent="#0d9488" title="Automatic reclaim on expiry" body="Every booking has a TTL. When it expires, the environment is reclaimed �� unless the owner extends it." bullets={[
          "TTL-based auto-reclaim prevents dead bookings",
          "Owners notified before expiry, can request extension",
          "Cost accumulates only while owned, resetting on reclaim",
          "Audit trail shows who had it, when, why, what they changed",
        ]} flip />

        <FeatureRow accent="#0d9488" title="Shared ownership and escalation" body="When an owner can't release an environment, the booking can be escalated without losing history." bullets={[
          "Environment accessible only to current owner, plus admins",
          "Owner reassignment without losing booking context",
          "Escalation notifies on-call when booking can't be released",
          "All access logged for audit and troubleshooting",
        ]} />
      </Section>

      <CtaBand title="Stop contending over environments. Start governing them." sub="Booking + approval + expiry + cost, all in one system." primary={{ label: "Start free", href: "/pricing" }} secondary={{ label: "Talk to an engineer", href: "/enterprise/contact" }} />
    </>
  );
}
