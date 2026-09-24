import type { Metadata } from "next";
import { Hero, Cards, Term, SectionHead, CtaBand, Section } from "@/components/sections";

export const metadata: Metadata = {
  title: "MCP Server — Governed Tool Access for Realm9's Terraform Assistant",
  description: "Realm9's Model Context Protocol server gives the Terraform assistant structured tools for reading projects, searching and editing code, requesting plans and reading run logs — inside your Realm9 deployment.",
};

export default function Page() {
  return (
    <>
      <Hero badge="New" eyebrow="Model Context Protocol" accent="#7c3aed"
        title="AI assistance that works through Realm9, not around it"
        sub="The Realm9 MCP Server is the tool layer behind the Terraform assistant. Instead of pasting code into a chat window, the assistant reads your project, searches files, proposes edits and runs plans through defined tools — using the same projects, connections and runs your team already manages."
        ctas={[{ label: "Start free", href: "/pricing" }, { label: "Talk to the team", href: "/enterprise/contact" }]} />

      <Section className="pad-sm">
        <div className="grid g3">
          <div><h4 style={{ marginBottom: 8 }}>Context from your real projects</h4><p className="small">The assistant works from project, workspace and cloud connection details held in Realm9, not from whatever a user remembers to paste.</p></div>
          <div><h4 style={{ marginBottom: 8 }}>Defined tools, not open access</h4><p className="small">Every action goes through a named tool — read a file, search code, edit a file, run a plan — so what the assistant can do is explicit.</p></div>
          <div><h4 style={{ marginBottom: 8 }}>Runs with your deployment</h4><p className="small">The MCP server runs alongside the Realm9 application. If it is unreachable, the editor keeps working without assisted tool calls.</p></div>
        </div>
      </Section>

      <section className="pad alt"><div className="wrap">
        <div className="feature-row">
          <div>
            <h3 style={{ marginBottom: 14 }}>Why the assistant needs a protocol</h3>
            <p className="lede" style={{ fontSize: 16 }}>General chat assistants can write Terraform, but they cannot see your repository, your workspaces or the results of your last run. The output then has to be checked, copied and corrected by hand.</p>
            <p className="lede" style={{ fontSize: 16, marginTop: 16 }}>Model Context Protocol gives the Realm9 assistant a structured way to ask for exactly what it needs. It can inspect the project, find the relevant resources, make targeted edits and check its work with a plan — while changes still go through your normal review, policy and approval process.</p>
            <ul className="bullets" style={{ ["--acc" as string]: "var(--purple)", marginTop: 26 }}>
              <li>Project, workspace and cloud connection details available as context</li>
              <li>Semantic, regex and file-pattern search across the project&apos;s Terraform</li>
              <li>Targeted edits: find-and-replace, insert, append, prepend or several at once</li>
              <li>Plans, run logs and AWS role-permission checks the assistant can read</li>
            </ul>
          </div>
          <div className="fr-media">
            <Term title="realm9 mcp · tools available to the assistant" html={`<span class="c-com"># context</span>
  <span class="c-fn">getProjectDetailsById</span>    <span class="c-dim">project and repository settings</span>
  <span class="c-fn">getWorkspaceById</span>         <span class="c-dim">workspace and variables</span>
  <span class="c-fn">getCloudConnections</span>      <span class="c-dim">connected accounts</span>

<span class="c-com"># code</span>
  <span class="c-fn">searchTerraformCode</span>      <span class="c-dim">semantic search</span>
  <span class="c-fn">grepSearch</span> · <span class="c-fn">globSearch</span>   <span class="c-dim">pattern search</span>
  <span class="c-fn">editFileWithFindReplace</span>  <span class="c-dim">targeted edits</span>

<span class="c-com"># verification</span>
  <span class="c-fn">runTerraformPlan</span>         <span class="c-dim">plan in the editor, user-run</span>
  <span class="c-fn">getRunLogs</span>               <span class="c-dim">read run output</span>
  <span class="c-fn">checkAWSRolePermissions</span>  <span class="c-dim">role coverage</span>`} />
          </div>
        </div>
      </div></section>

      <Section>
        <SectionHead title="Assistance that stays inside your controls" sub="The MCP server extends what the assistant can see and do. It does not bypass the checks that apply to everyone else." />
        <Cards items={[
          { title: "Plan, not apply", desc: "The assistant can ask for a Terraform plan in the editor, which the user runs, to check its work. Applying a change still happens through a normal run, with policy checks and any approval your project requires." },
          { title: "Reversible edits", desc: "Edits made by the assistant are logged in the editor, and individual changes can be undone before anything is committed to Git." },
          { title: "Your repository, your review", desc: "Changes reach your repository only when a user commits them from the editor, using the project's own Git connection." },
        ]} />
      </Section>

      <CtaBand title="Give your Terraform assistant real context"
        sub="The MCP Server provides structured project and code context inside Infrastructure Management."
        primary={{ label: "Start free", href: "/pricing" }} secondary={{ label: "Infrastructure Management", href: "/products/infrastructure-management" }} />
    </>
  );
}
