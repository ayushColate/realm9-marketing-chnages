import type { ReactElement } from "react";
import { Icons } from "@/components/icons";

export type Tag = "new" | "soon" | "beta";

export interface NavLink {
  title: string;
  desc: string;
  href: string;
  icon: ReactElement;
  tag?: Tag;
}
export interface NavGroup { head: string; items: NavLink[] }
export interface NavEntry { label: string; href?: string; wide?: boolean; groups?: NavGroup[] }

export const NAV: NavEntry[] = [
  {
    label: "Products",
    wide: true,
    groups: [
      {
        head: "Manage",
        items: [
          { title: "Environment Management", desc: "Book, approve and reclaim every environment your teams contend over.", href: "/products/environment-management", icon: Icons.env },
          { title: "Infrastructure Management", desc: "Terraform, Kubernetes, VMware and Proxmox from one governed control plane.", href: "/products/infrastructure-management", icon: Icons.infra },
          { title: "FinOps", desc: "Attribute every dollar to the request that caused it — cloud, on-prem and tokens.", href: "/products/finops", icon: Icons.finops },
          { title: "Release Management", desc: "Coordinate releases across environments, teams and change windows.", href: "/products/release-management", icon: Icons.release, tag: "soon" },
        ],
      },
      {
        head: "Build with agents",
        items: [
          { title: "MCP Server", desc: "Give coding agents governed infrastructure through one protocol.", href: "/products/mcp-server", icon: Icons.mcp, tag: "new" },
          { title: "R9", desc: "Describe infrastructure in plain language. Get reviewable, policy-checked code.", href: "/products/r9", icon: Icons.r9, tag: "beta" },
          { title: "Realm9 Sandbox", desc: "Sub-second isolated environments for agent work, on your own hardware.", href: "/products/sandbox", icon: Icons.sandbox, tag: "soon" },
        ],
      },
    ],
  },
  { label: "Startups", href: "/startups" },
  {
    label: "Enterprise",
    groups: [{
      head: "Enterprise",
      items: [
        { title: "Overview", desc: "Governance, residency and scale for regulated organisations.", href: "/enterprise", icon: Icons.shield },
        { title: "Data Centers", desc: "vCenter, Proxmox and bare metal as first-class bookable capacity.", href: "/enterprise/data-centers", icon: Icons.dc },
        { title: "GPU", desc: "Fair-share, quota and chargeback for accelerated compute.", href: "/enterprise/gpu", icon: Icons.gpu },
        { title: "Use cases", desc: "How telecom, healthcare, finance and public sector deploy Realm9.", href: "/enterprise/use-cases", icon: Icons.cases },
        { title: "Trust Center", desc: "Certifications, sub-processors, architecture and security posture.", href: "/enterprise/trust-center", icon: Icons.lock },
        { title: "Contact us", desc: "Talk to an engineer, not a form router.", href: "/enterprise/contact", icon: Icons.mail },
      ],
    }],
  },
  {
    label: "Agents",
    groups: [{
      head: "Agents",
      items: [
        { title: "Realm9 Agents", desc: "Named, budgeted, revocable identities for every non-human actor.", href: "/agents/realm9-agents", icon: Icons.agent, tag: "soon" },
        { title: "AIOps", desc: "Detect, explain and remediate infrastructure incidents under policy.", href: "/agents/aiops", icon: Icons.aiops, tag: "soon" },
      ],
    }],
  },
  { label: "Pricing", href: "/pricing" },
];
