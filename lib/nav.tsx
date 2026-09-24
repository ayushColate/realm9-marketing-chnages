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
          { title: "Environment Management", desc: "Requests, bookings, approvals and decommissioning for shared environments.", href: "/products/environment-management", icon: Icons.env },
          { title: "Infrastructure Management", desc: "Terraform runs with policy checks, approvals and state control — cloud and on-prem.", href: "/products/infrastructure-management", icon: Icons.infra },
          { title: "FinOps", desc: "AWS and Azure cost visibility, anomaly detection and cost gates on Terraform runs.", href: "/products/finops", icon: Icons.finops },
          { title: "Release Management", desc: "Planned: release coordination built on bookings and approval workflows.", href: "/products/release-management", icon: Icons.release, tag: "soon" },
        ],
      },
      {
        head: "Build with agents",
        items: [
          { title: "MCP Server", desc: "The Model Context Protocol tool layer behind Realm9's Terraform assistant.", href: "/products/mcp-server", icon: Icons.mcp, tag: "new" },
          { title: "R9", desc: "An AI assistant for your Terraform projects, using your own model provider key.", href: "/products/r9", icon: Icons.r9, tag: "beta" },
          { title: "Realm9 Sandbox", desc: "Planned: isolated workspaces for experimental infrastructure work.", href: "/products/sandbox", icon: Icons.sandbox, tag: "soon" },
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
        { title: "Overview", desc: "Identity, audit and deployment options for larger organisations.", href: "/enterprise", icon: Icons.shield },
        { title: "Data Centers", desc: "Proxmox and VMware vCenter under the same governed workflow as cloud.", href: "/enterprise/data-centers", icon: Icons.dc },
        { title: "GPU", desc: "Govern access to accelerated compute with bookings and approvals.", href: "/enterprise/gpu", icon: Icons.gpu },
        { title: "Use cases", desc: "Common problems platform and operations teams solve with Realm9.", href: "/enterprise/use-cases", icon: Icons.cases },
        { title: "Trust Center", desc: "Deployment security, identity, data protection and audit.", href: "/enterprise/trust-center", icon: Icons.lock },
        { title: "Contact us", desc: "Talk to the team about your environments and requirements.", href: "/enterprise/contact", icon: Icons.mail },
      ],
    }],
  },
  {
    label: "Agents",
    groups: [{
      head: "Agents",
      items: [
        { title: "Realm9 Agents", desc: "Planned: governed identities for automated and AI actors.", href: "/agents/realm9-agents", icon: Icons.agent, tag: "soon" },
        { title: "AIOps", desc: "Planned: assisted incident investigation built on Realm9 observability.", href: "/agents/aiops", icon: Icons.aiops, tag: "soon" },
      ],
    }],
  },
  { label: "Pricing", href: "/pricing" },
];
