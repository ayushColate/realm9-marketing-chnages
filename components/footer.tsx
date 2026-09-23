import Link from "next/link";
import { Logo } from "./icons";

const COLS: [string, [string, string][]][] = [
  ["Products", [
    ["Environment Management", "/products/environment-management"],
    ["Infrastructure Management", "/products/infrastructure-management"],
    ["FinOps", "/products/finops"],
    ["MCP Server", "/products/mcp-server"],
    ["R9", "/products/r9"],
    ["Sandbox", "/products/sandbox"],
  ]],
  ["Solutions", [
    ["Startups", "/startups"],
    ["Enterprise", "/enterprise"],
    ["Data Centers", "/enterprise/data-centers"],
    ["GPU", "/enterprise/gpu"],
    ["Use cases", "/enterprise/use-cases"],
  ]],
  ["Company", [
    ["Pricing", "/pricing"],
    ["Trust Center", "/enterprise/trust-center"],
    ["Contact", "/enterprise/contact"],
    ["Realm9 Agents", "/agents/realm9-agents"],
    ["AIOps", "/agents/aiops"],
  ]],
  ["Resources", [
    ["Documentation", "/"],
    ["Changelog", "/"],
    ["Open source", "/"],
    ["Status", "/"],
    ["Community", "/"],
  ]],
];

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-col">
            <Link className="logo" href="/" style={{ marginBottom: 14 }}><Logo />Realm9</Link>
            <p className="small" style={{ maxWidth: "30ch" }}>
              The ecosystem layer for software and hardware, leveraged by humans and by agents.
            </p>
          </div>
          {COLS.map(([head, links]) => (
            <div className="foot-col" key={head}>
              <h5>{head}</h5>
              {links.map(([label, href], i) => <Link key={label + i} href={href}>{label}</Link>)}
            </div>
          ))}
        </div>
        <div className="foot-bottom">
          <span>© {new Date().getFullYear()} Realm9. All rights reserved.</span>
          <span>Self-hostable · SOC 2 Type II · Deployable air-gapped</span>
        </div>
      </div>
    </footer>
  );
}
