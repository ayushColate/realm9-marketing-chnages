import type { Metadata } from "next";
import { Hero, FeatureRow, SectionHead, CtaBand, Section } from "@/components/sections";

export const metadata: Metadata = {
  title: "Environment Management",
  description: "Request, book, approve and retire shared environments through governed workflows — with multi-level approvals, information requests, booking controls and a full audit history.",
};

export default function Page() {
  return (
    <>
      <Hero eyebrow="Environment Management" accent="#0d9488"
        title="Shared environments, managed from request to retirement"
        sub="Dev, test and staging environments are usually tracked in spreadsheets and chat threads. Environment Management gives each one an owner, a status, and a governed path for requesting, booking and decommissioning it."
        ctas={[{ label: "Get started", href: "/" }, { label: "Book a walkthrough", href: "/enterprise/contact" }]} />

      <Section className="pad">
        <SectionHead center title="Four journeys, one record"
          sub="Every environment request, booking and decommission follows defined states, runs through an approval workflow, and is written to the audit log." />

        <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
        <FeatureRow accent="#0d9488" title="Request new environments with the right details up front"
          body="Teams ask for a new environment through a form your administrators design. Choosing an environment type selects the approval workflow, so the request goes to the right people from the start."
          bullets={[
            "Custom field groups for network, compliance or software requirements, with required fields and file attachments",
            "Business justification and supporting documents stored with the request",
            "Unique, validated environment names checked before submission",
            "Status, comments, history and workflow progress on one request page",
          ]} />

        <FeatureRow flip accent="#0d9488" title="Approvals that match how your organisation decides"
          body="Workflows run in ordered levels. Each level can require a named person or anyone holding a role, and approvers can ask for missing information instead of rejecting outright."
          bullets={[
            "Sequential levels with parallel steps and a configurable number of required approvals",
            "Information Requests pause the workflow until the requester or an assigned colleague answers",
            "Workflow timeouts expire stalled requests instead of leaving them open indefinitely",
            "Type-specific workflows, an organisation-wide default, or direct admin decisions",
          ]} />

        <FeatureRow accent="#0d9488" title="Book existing environments without double-booking"
          body="Each environment carries its own booking rules. Exclusive environments allow one active booking at a time; shared environments accept concurrent bookings from several teams."
          bullets={[
            "Per-environment settings for booking availability, approval and maximum duration",
            "Live status — Available, Occupied, Preparing, Under Maintenance — before anyone books",
            "Organisation-wide monthly booking limits that administrators can adjust",
            "Terraform workspaces can be attached so provisioning follows the booking lifecycle",
          ]} />

        <FeatureRow flip accent="#0d9488" title="Retire environments on the record, and keep it connected"
          body="Decommissioning is a request in its own right, with approval and history, so environments are retired deliberately rather than quietly forgotten."
          bullets={[
            "Governed decommission requests with the same approval model as new environments",
            "Access details, ownership, labels and custom fields recorded on each environment",
            "ServiceNow CMDB configuration-item data linked to environments",
            "Side-by-side environment comparison and email and in-app notifications at each step",
          ]} />
        </div>
      </Section>

      <CtaBand title="Give every shared environment an owner and a process"
        sub="Environment Management works alongside Infrastructure Management and FinOps, so the environments you book can be provisioned and costed in the same platform."
        primary={{ label: "Get started", href: "/" }} secondary={{ label: "Talk to the team", href: "/enterprise/contact" }} />
    </>
  );
}
