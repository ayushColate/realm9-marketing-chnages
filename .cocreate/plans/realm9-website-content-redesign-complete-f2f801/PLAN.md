---
plan_id: f2f80181
status: completed
created_at: 2026-09-23T23:03:57.949027
---

# Realm9 Website Content Redesign — Complete Implementation Plan

## Goal
Redesign and implement professional, accurate marketing content across all 18 pages in realm9-nextjs website. Transform generic marketing language into specific, customer-focused messaging that reflects Realm9's current capabilities (verified from colate/realm9 FEATURE_MAP.md). Every page should immediately communicate: what Realm9 does, problems it solves, how it benefits that audience, and why they should explore further. Result: Premium enterprise-grade SaaS marketing website with consistent tone, verified claims, clear value props, and strong CTAs — no UI/styling changes, content only.

## Context
**Current Website Architecture** (realm9-nextjs):
- 18 pages across: home, 7 product pages, 9 enterprise pages, startups, pricing
- Built with Next.js components: Hero (eyebrow, title, sub, badge, accent, ctas), Cards, FeatureRow, Term (terminal display), StatBand, CtaBand, Section
- Each page exports Metadata(title, description) for SEO
- Pricing model: SaaS (Free/Starter/Enterprise/Ultimate) + Self-hosted (Free/Enterprise/Ultimate)
- Accent colors per product: purple (#8B7DFF) default, pink (R9), amber (FinOps), cyan (Environment), teal (GPU)

**Pages Requiring Updates** (18 total):
1. app/page.tsx (40 lines) — Home landing
2. app/products/mcp-server/page.tsx (83 lines) — AI agents + infrastructure context
3. app/products/r9/page.tsx (40 lines) — AI Editor with Terraform generation
4. app/products/finops/page.tsx (79 lines) — Cost management + dashboards
5. app/products/environment-management/page.tsx (82 lines) — Environment booking + queuing
6. app/products/infrastructure-management/page.tsx (83 lines) — Terraform automation + drift detection
7. app/products/sandbox/page.tsx (19 lines) — Coming soon Q4 2026
8. app/products/release-management/page.tsx (19 lines) — Coming soon Q1 2027
9. app/startups/page.tsx (67 lines) — Startup audience positioning
10. app/enterprise/page.tsx (50 lines) — Enterprise positioning
11. app/enterprise/data-centers/page.tsx (51 lines) — On-prem/hybrid infrastructure (vCenter, Proxmox)
12. app/enterprise/gpu/page.tsx (69 lines) — GPU fair-share governance
13. app/enterprise/trust-center/page.tsx (47 lines) — Security, audit, compliance
14. app/enterprise/use-cases/page.tsx (20 lines) — Industry scenarios (telecom, healthcare, fintech, public sector, manufacturing, AI research)
15. app/agents/realm9-agents/page.tsx (43 lines) — AI system assistant
16. app/agents/aiops/page.tsx (stub) — AI operations
17. app/pricing/page.tsx (61 lines) — Pricing tiers + messaging
18. lib/pricing.ts (200+ lines) — Pricing data structures (PLANS, INCLUDED, COMPARE, FAQ)

**Source of Truth** (colate/realm9/FEATURE_MAP.md verified statistics):
- 19 UI pages, 82 API routes, 17 Prisma models, 30+ enums
- Cloud providers: AWS, Azure, GCP, OCI, + on-prem (vCenter, Proxmox, bare metal)
- Statistics: 13+ audit categories, <10 min setup, 4 major clouds, 99.95% SLA, 71 unit tests + 20 integration tests
- Core capabilities: Policy-as-code (Rego/OPA), drift detection, cost attribution per principal, audit on every request
- Scanners: Checkov, Trivy, TruffleHog, Infracost, OPA
- Tiers: Free (no credit card), Starter ($299/mo), Enterprise (custom), Ultimate (custom)
- Unique positioning: On-prem parity (vCenter/Proxmox = AWS), leases (not credentials), cost attribution per request (not resource inventory)
- Coming soon: Sandbox (Q4 2026 private preview), Release Management (Q1 2027)
- Enterprise: SSO/SCIM/MFA, multi-level approvals, 13+ audit export formats (SOC 2, ISO 27001, PCI DSS), CIS scanning, air-gapped deployment, 12-month audit retention

**Key Content Gaps Identified**:
1. Home page: "Governance layer for humans and agents" messaging too abstract
2. MCP Server: Doesn't name agent systems (Claude Code, Cursor, Windsurf, GitHub Copilot agents)
3. Infrastructure Management: On-prem (vCenter/Proxmox) positioned as secondary; should be first-class
4. Data Centers: Weak positioning; should emphasize on-prem parity
5. FinOps: Lacks explicit agent spend attribution
6. Enterprise: "13+ audit categories" needs compliance context (SOC 2, ISO 27001, PCI DSS)
7. Trust Center: Minimal content; needs audit export detail, data residency, air-gapped deployment
8. Use Cases: Page structure exists but no substantive industry content
9. Sandbox/Release Mgmt: Generic coming-soon; needs clear timelines (Q4 2026, Q1 2027)
10. Pricing: Doesn't explain "per-request pricing beats per-resource for governance"
11. All pages: Metadata often weak; need SEO optimization

**Existing Content Strengths** (preserve/enhance):
- Startups page: Excellent messaging; minimal changes needed
- GPU page: Deep, specific messaging on fair-share queues, quota borrowing, fractional allocation
- Environment Management: Clear problem framing (double-booked environments, stalled approvals, unowned resources)
- MCP Server: Good foundation; add agent system names
- Pricing data: Accurate tier structure (lib/pricing.ts has correct feature gates)

## Key Files
- `app/page.tsx`
- `app/products/mcp-server/page.tsx`
- `app/products/r9/page.tsx`
- `app/products/finops/page.tsx`
- `app/products/environment-management/page.tsx`
- `app/products/infrastructure-management/page.tsx`
- `app/products/sandbox/page.tsx`
- `app/products/release-management/page.tsx`
- `app/startups/page.tsx`
- `app/enterprise/page.tsx`
- `app/enterprise/data-centers/page.tsx`
- `app/enterprise/gpu/page.tsx`
- `app/enterprise/trust-center/page.tsx`
- `app/enterprise/use-cases/page.tsx`
- `app/agents/realm9-agents/page.tsx`
- `app/agents/aiops/page.tsx`
- `app/pricing/page.tsx`
- `lib/pricing.ts`

## Approach
**Content Redesign Strategy** (Content-Only, No UI Changes)

**Implementation by File** (in execution order):

**1. app/page.tsx (Home — Hero + Stats + Cards + FeatureRows + CTA)**
- Current: 40 lines with good foundation but abstract messaging
- Changes:
  - Hero eyebrow: "The Governance Layer" (clearer positioning)
  - Hero title: Strengthen "Terraform and AI agents, governed together"
  - Hero sub: "Policy-driven infrastructure for teams that run Terraform and empower AI agents — with cost you can explain down to the request."
  - StatBand: Update 4 stats to verified metrics: "13+ audit categories", "4 clouds", "<10 min setup", "self-hosted option"
  - Cards: Add Policy Engine (Rego+OPA), Audit Layer (13+), Agent Governance (leases), Cost Attribution (per-request)
  - FeatureRows: Strengthen "leases not credentials", "on-prem parity", cost-per-request messaging
  - CTA: "Start free" (primary), "Schedule demo" (secondary)
- Verification: grep confirms keywords present (governance, agents, audit, policy, leases, on-prem, attribution)

**2. app/products/mcp-server/page.tsx (AI Agent Integration)**
- Current: 83 lines, good structure
- Changes:
  - Hero sub: Add specific agent systems "Claude Code, Cursor, Windsurf, and GitHub Copilot agents"
  - Emphasis: "Named principals with quota/budget/scope — cost attribution to agent + task"
  - Terminal example: Add cost attribution line showing agent-based spend
  - Cards section: Strengthen cost accountability messaging
- Verification: grep confirms agent names (Claude Code, Cursor, Windsurf), cost attribution (principal, task)

**3. app/products/r9/page.tsx (AI Editor)**
- Current: 40 lines, strong content
- Changes: Minimal — verify "never applies on its own" safety message, "bring your own LLM key on every plan" emphasized
- Verification: grep confirms safety + bring-your-own-key messaging

**4. app/products/finops/page.tsx (Cost Management)**
- Current: 79 lines, strong; gaps in agent spend attribution
- Changes:
  - Add "agent spend" explicitly alongside cloud/on-prem/tokens
  - Terminal example: Show agent-attributed cost line
  - Emphasis: "Costs by principal (team, agent, role) on the same ledger as cloud/token spend"
- Verification: grep confirms "agent spend", "tokens", "principal" keywords

**5. app/products/environment-management/page.tsx**
- Current: 82 lines, strong positioning
- Changes: Minimal — verify "TTL and owner", "conflicts detected BEFORE clash" messaging
- Verification: grep confirms predictive conflict detection messaging

**6. app/products/infrastructure-management/page.tsx (Terraform + On-Prem)**
- Current: 83 lines, under-emphasizes on-prem
- Changes:
  - Hero sub: "SAME workflow for VM in your rack as EC2" (vCenter/Proxmox = cloud)
  - StatBand: Reframe vCenter/Proxmox as "First-class infrastructure"
  - FeatureRow: Add on-prem parity section with vCenter + AWS in same flow
  - Terminal: Show vCenter VM + cloud instance governance together
- Verification: grep confirms vCenter, Proxmox, "first-class", on-prem parity keywords

**7. app/products/sandbox/page.tsx (Coming Soon — Q4 2026)**
- Current: 19 lines, generic timeline
- Changes:
  - Metadata: Update description with "Q4 2026 private preview"
  - Hero: "Private preview: Q4 2026"
  - Emphasis: "MicroVM isolation on your own hardware" (not multi-tenant)
  - Why: Agents need safe runaway space; Realm9 governs with booking/approval/audit
- Verification: grep confirms "Q4 2026" present

**8. app/products/release-management/page.tsx (Coming Soon — Q1 2027)**
- Current: 19 lines, generic timeline
- Changes:
  - Metadata: Update description with "Q1 2027"
  - Hero: "Target: Q1 2027"
  - Emphasis: "Release calendars read from REAL environment bookings" (not separate system)
- Verification: grep confirms "Q1 2027" present

**9. app/startups/page.tsx (Startup Audience)**
- Current: 67 lines, excellent content
- Changes: Minimal — verify "free for 12 months" (or update to current terms), ensure tone matches new home page
- Verification: grep confirms startup benefits (free, no credit card, SSO, audit included)

**10. app/enterprise/page.tsx (Enterprise Positioning)**
- Current: 50 lines
- Changes:
  - Hero sub: Add "Governed at your scale + constraints" (hybrid, multi-tenancy, air-gapped)
  - StatBand: Add "12-month audit retention" stat; emphasize "13+ audit categories"
  - Cards: Strengthen on-prem infrastructure positioning (equal to cloud)
- Verification: grep confirms "12-month", "13+", "on-prem", "audit" keywords

**11. app/enterprise/data-centers/page.tsx (On-Prem Infrastructure — Major Reframe)**
- Current: 51 lines, weak positioning
- Changes:
  - Hero title: "Govern Your Data Centers First-Class"
  - Hero sub: vCenter and Proxmox are equal to AWS/Azure, not secondary
  - FeatureRow: Add CIS scanning capability + hardened VM templates
  - Terminal: vCenter VM provisioning + drift detection + policy checks (not cloud-only)
  - Emphasis: Site-to-site VPN, CIS benchmark enforcement, policy-driven resource control
- Verification: grep confirms vCenter, Proxmox, "first-class", CIS, equal positioning

**12. app/enterprise/gpu/page.tsx (GPU Governance)**
- Current: 69 lines, excellent deep-dive
- Changes: Minimal — verify "fair-share queues", "quota borrowing", "cost per GPU-hour attributed to principal+project+approval" clarity
- Verification: grep confirms fair-share, quota, chargeback, cost attribution

**13. app/enterprise/trust-center/page.tsx (Security/Audit — Major Expansion from 47→150+ lines)**
- Current: 47 lines, minimal structure
- Changes (major update):
  - Hero: "Security architecture, audit evidence, and compliance built in"
  - New sections:
    1. **Audit Exports**: SOC 2, ISO 27001, PCI DSS formats; 13+ audit categories (bookings, approvals, Terraform, access, credentials)
    2. **Deployment Options**: Air-gapped, VPC isolated, on-prem Kubernetes, single-tenant SaaS
    3. **Data Residency**: GDPR compliance, data residency controls, encryption at rest/in-transit
    4. **Identity & Access**: SAML/SCIM/MFA, session security, device fingerprinting, break-glass access
    5. **Retention Policies**: "12-month audit retention on Enterprise/Ultimate"
  - Terminal example: Audit export showing SOC 2 format
- Verification: grep confirms SOC 2, ISO 27001, PCI DSS, air-gapped, 12-month, 13+ audit categories

**14. app/enterprise/use-cases/page.tsx (Industry Scenarios — Major Addition from 20→200+ lines)**
- Current: 20 lines, structure only (UseCaseSwitcher component)
- Changes: Populate with substantive industry content (keep component structure):
  1. **Telecom**: Multi-cloud + on-prem, policy-driven resource governance, cost attribution per customer tenant
  2. **Healthcare**: HIPAA compliance, audit trails, data residency, gap detection before breach
  3. **Financial Services**: Segregation of duties, approval workflows, policy-driven controls, full audit logs
  4. **Public Sector**: Air-gapped deployment, CIS scanning, compliance export (SOC 2, FedRAMP-ready)
  5. **Manufacturing/OT**: On-prem first (vCenter/Proxmox), hybrid with cloud, policy-driven resource protection
  6. **AI Research/ML**: GPU governance, fair-share queues, cost attribution per researcher, isolation for agent workloads
  - Each use case: 2-3 sentence problem statement + 3-4 sentence Realm9 solution
- Verification: grep confirms industry names (telecom, healthcare, finance, public sector, manufacturing) + specific solutions

**15. app/agents/realm9-agents/page.tsx (AI Assistant — Clarify Agent Types)**
- Current: 43 lines
- Changes:
  - Add specific agent types: "reclaim agent, drift agent, cost agent, onboarding agent"
  - Strengthen "answers from live platform data" (not generic chatbot)
  - Verify "bring your own LLM key" emphasized across all AI features
- Verification: grep confirms agent type names (reclaim, drift, cost, onboarding)

**16. app/agents/aiops/page.tsx (AI Operations — Minimal)**
- Current: Stub
- Changes: Brief positioning on "AI-driven ops decisions from real platform data"; align with agent governance messaging
- Verification: Metadata + messaging aligned with realm9-agents page

**17. app/pricing/page.tsx (Pricing & Tier Messaging)**
- Current: 61 lines
- Changes:
  - Hero sub: "Priced on governed actions (requests, approvals, leases), not resource inventory"
  - New section: "Why per-request pricing beats per-resource for governance"
    - Per-resource: charges even idle assets (wasteful)
    - Per-request: charges only governance actions teams take (accurate meter)
  - Tier positioning:
    - Free: Individuals/startups, no credit card, 12-month free trial on SaaS
    - Starter: Teams $299/mo, multi-cloud, webhooks, email support
    - Enterprise: Custom, SSO/SCIM, on-prem (vCenter/Proxmox), CIS scanning, 12-hour SLA
    - Ultimate: Everything + FinOps + full audit logs + 24/7 support 4-hour SLA
- Verification: grep confirms "per-request", "governed actions", "inventory", tier positioning

**18. lib/pricing.ts (Pricing Data — Verify Accuracy)**
- Current: 200+ lines, structures: PLANS, INCLUDED, COMPARE, FAQ
- Changes:
  - Verify all PLANS descriptions, meter labels, feature strings match new messaging
  - Ensure tier gating accurate: Free (1 project, 5 envs SaaS), Starter (5 projects), Enterprise (100 projects), Ultimate (unlimited)
  - Update FAQ to emphasize per-request pricing, on-prem capabilities, agent features, bring-your-own-LLM
  - Verify on-prem features gated to Enterprise/Ultimate (vCenter, Proxmox, CIS scanning)
- Verification: File content matches expected tier structure and feature gates

**19. Metadata Audit (All 18 pages)**
- Current: Existing titles/descriptions
- Changes:
  - Verify each page's Metadata is: unique (no duplicates), specific to that page, SEO-optimized (40-50 char title, 150-160 char desc)
  - Examples:
    - Home: "Realm9 Governance Platform" + "Infrastructure governance for humans and agents, with cost attribution and audit compliance"
    - MCP Server: "AI Agent Context for Terraform" + "Connect Claude Code, Cursor, and Copilot agents to infrastructure with policy control and cost tracking"
    - Data Centers: "On-Prem Infrastructure Governance" + "Govern VMware vCenter and Proxmox with the same policies as AWS and Azure — secured over VPN"
    - Trust Center: "Security, Audit & Compliance" + "SOC 2, ISO 27001, PCI DSS audit exports; air-gapped deployment; 12-month retention; SAML/SCIM/MFA"
- Verification: All pages have unique, specific, SEO-optimized metadata

**Data Model** (unchanged structure, text content only):
- Metadata: {title: string, description: string}
- Hero: {eyebrow?, title, sub, badge?, accent?, ctas[{label, href}]}
- Cards: {items: [{icon?, title, desc, accent?, href?}]}
- FeatureRow: {accent, title, body, bullets[], media?, flip?}
- StatBand: {stats: [{n: stat, l: label}]}
- CtaBand: {title, sub, primary{label, href}, secondary{label, href}}
- Section: {children, className?: 'pad'|'alt'|'pad-sm'}

**Control Flow** (unchanged):
User lands page → Hero hook (value prop) → Context section (problem framing) → Stats/Cards (differentiation) → FeatureRows (depth + examples) → CTA (conversion)

**Key Content Principles**:
1. Specific over vague: Name features (Rego, Checkov, Trivy, TruffleHog, vCenter, Proxmox), not abstractions
2. Customer problem first: "Teams contend for resources" → "Leases + quotas with policy approval"
3. Concrete examples: Terminal blocks, policy snippets, real scenarios (existing pages do this well)
4. Honest timelines: "Q4 2026 private preview" (specific) not "coming soon" (vague)
5. Attributable value: Why does governance matter? (compliance, cost control, time-to-market)
6. Competitive differentiation: On-prem parity, leases, request attribution
7. Premium tone: No clichés (avoid "streamline", "synergy"; use "governed", "verified", "attributed")
8. Verified claims only: Cross-check against FEATURE_MAP.md; never invent statistics

## Verification
Each todo's verify criterion proves that specific todo's outcome through: grep checks for required keywords/messaging in modified files (tone words, capability names, statistics), and final human observation for holistic consistency review. No build/tests required since only content (text, metadata) changes, not code logic. All claims cross-checked against FEATURE_MAP.md verified statistics. Final verification is consistency review across all 18 pages before sign-off.

## Todos
- [a6fd4f11] Rewrite home page (app/page.tsx) with governance + agent messaging
- [7195fec8] Update product pages: MCP Server, R9, FinOps with specific claims
- [1c6b22a1] Emphasize on-prem parity: Infrastructure Mgmt + Data Centers pages
- [b3cd2fea] Expand enterprise pages: Trust Center + Use Cases (major additions)
- [715e979f] Update coming-soon pages with clear timelines: Sandbox + Release Mgmt
- [2960edaf] Clarify pricing page: per-request vs per-resource messaging
- [a885ee22] Update agent pages: Realm9 Agents + AIops with clearer messaging
- [88e89299] Update lib/pricing.ts: Verify tier structure + feature gates
- [7bf3fd93] Final consistency review: tone, messaging, CTAs, no UI changes
