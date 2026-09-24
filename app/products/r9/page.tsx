import type { Metadata } from "next";
import { Hero, Cards, SectionHead, CtaBand, Section } from "@/components/sections";
import R9Demo from "@/components/r9-demo";

export const metadata: Metadata = {
  title: "R9 — AI Assistant for Terraform",
  description: "R9 is the AI assistant in Realm9's Terraform editor. It reads your project, proposes and makes edits, validates code and helps you commit — with your choice of OpenAI, Azure OpenAI, Anthropic or a custom endpoint.",
};

export default function Page() {
  return (
    <>
      <Hero badge="Beta" eyebrow="R9 — Terraform assistant" accent="#e5007a"
        title="An assistant that works on your Terraform, in your project"
        sub="R9 sits inside the Realm9 Terraform editor. Ask it to explain a module, change a resource or fix a validation error, and it works directly on the project's files — with every edit visible, reversible and committed only when you choose."
        ctas={[{ label: "Start free", href: "/pricing" }, { label: "Talk to the team", href: "/enterprise/contact" }]} />

      <Section className="pad">
        <SectionHead center title="What R9 does in the editor"
          sub="R9 uses the Realm9 MCP Server to read and change the project, so its answers are based on your code rather than a pasted snippet." />
        <Cards items={[
          { title: "Understands the project", desc: "Searches the repository, reads files and pulls in project, workspace and cloud connection details. Use @mentions to point it at a specific project, run, connection, workspace or role." },
          { title: "Edits you can undo", desc: "Makes targeted file edits and keeps a log of what it changed. Any individual change can be reverted, and deleted files can be restored." },
          { title: "Checks before you commit", desc: "Validate the code or run a plan from the editor, then review the diff and commit to your branch using the project's Git connection." },
        ]} />
      </Section>

      <Section className="pad alt">
        <SectionHead center title="See the workflow" sub="Describe a change, review what comes back, and decide what happens next." />
        <R9Demo />
      </Section>

      <Section>
        <SectionHead center title="Your model provider, your key" />
        <Cards items={[
          { title: "Choose a provider", desc: "Connect OpenAI, Azure OpenAI, Anthropic or a custom endpoint from your Realm9 settings." },
          { title: "Bring your own key", desc: "On the Free and Starter plans you bring your own provider API key. AI usage is included on Enterprise and Ultimate." },
          { title: "Governed like any change", desc: "Code R9 writes still goes through commits, policy checks and any approval your project requires before it is applied." },
        ]} />
      </Section>

      <CtaBand title="Write and review Terraform with an assistant that knows your project"
        sub="R9 is in beta and is part of Infrastructure Management."
        primary={{ label: "Start free", href: "/pricing" }} secondary={{ label: "About the MCP Server", href: "/products/mcp-server" }} />
    </>
  );
}
