# Realm9 — website

Next.js 16 (App Router) · React 19 · TypeScript · self-hosted Geist · zero UI dependencies.

## Setup

**Requires Node 20.9 or newer.** Check with `node -v`. If you are below that, Next 16 will not run —
install Node 22 LTS from nodejs.org or via `nvm install 22 && nvm use 22`.

```bash
unzip realm9-nextjs.zip -d realm9-web
cd realm9-web
npm install          # ~20s, 34 packages
npm run dev          # http://localhost:3000
```

For a production build: `npm run build` then `npm start`.

### If it does not run

| Symptom | Cause | Fix |
|---|---|---|
| `Could not read package.json` | You are in the wrong directory, or only some files were downloaded | `ls` should show `package.json`, `app/`, `components/`, `lib/`. If not, re-extract the zip |
| `Unsupported engine` / syntax errors on install | Node older than 20.9 | Upgrade Node, delete `node_modules` and `package-lock.json`, `npm install` again |
| `next: command not found` | `npm install` did not complete | Re-run `npm install` and read the output for the real error |
| `EACCES` during install | npm permissions | Do not use `sudo`. Use nvm-managed Node instead |
| Port already in use | Something else on 3000 | `npm run dev -- -p 3001` |
| Fonts look wrong offline | Nothing — Geist is bundled locally via the `geist` package, no network needed | — |

Deploy: push to GitHub and import at vercel.com/new, or `npx vercel --prod`.
Every route is static, so it also exports to any CDN.

## Why these choices

- **Next.js App Router** — every page is a server component and prerenders to static HTML at
  build time. Fast, cheap to host, and good for SEO, which matters when you are trying to be
  found for "environment booking" and "GPU quota management".
- **`geist` package, not `next/font/google`** — Vercel publishes Geist as an npm package. Using
  it removes a build-time network call to Google Fonts, so CI never fails because fonts.googleapis.com
  had a bad minute. Same typeface Vercel uses.
- **No Tailwind** — the design system is ~40 CSS custom properties in `app/globals.css`. Changing
  the brand is editing tokens, not find-and-replacing utility classes across 30 files. Add Tailwind
  later if the team prefers it; nothing here blocks that.
- **Client components only where needed** — nav, R9 demo, pricing toggle, use-case switcher and the
  two forms. Everything else ships as zero JS.

## Structure

```
app/
  layout.tsx              root layout, fonts, metadata
  globals.css             the entire design system
  page.tsx                home
  products/…              7 product routes
  enterprise/…            6 enterprise routes
  agents/…                2 agent routes
  pricing/page.tsx
  not-found.tsx
components/
  sections.tsx            Hero, Cards, FeatureRow, Term, StatBand, CtaBand, Section, SectionHead
  nav.tsx        (client)  mega menu + mobile drawer
  footer.tsx
  coming-soon.tsx          shared roadmap page shell
  r9-demo.tsx    (client)  the interactive generator
  pricing-plans.tsx (client)
  use-case-switcher.tsx (client)
  contact-form.tsx (client)
  waitlist.tsx   (client)
  icons.tsx
lib/
  nav.tsx                 navigation model — edit this to change menus
  pricing.ts              plans, meters, comparison table, FAQ
  use-cases.ts            the six industry narratives
  r9-templates.ts         R9 demo output
```

## Design tokens (light)

| Token | Value |
|---|---|
| `--bg` / `--bg-1` / `--bg-2` / `--bg-3` | `#fff` `#fafafa` `#f5f5f5` `#ebebeb` |
| `--line` / `--line-2` / `--line-3` | `rgba(0,0,0,.08 / .145 / .26)` |
| `--fg` / `--fg-2` / `--fg-3` / `--fg-4` | `#0a0a0a` `#5c5c5c` `#8f8f8f` `#a8a8a8` |
| Radii | 6 / 10 / 14 / 20px |

Product accents: Environment `#0d9488` · Infrastructure `#0070f3` · FinOps `#b45309` ·
MCP `#7c3aed` · R9 `#e5007a` · AIOps `#15803d`. These are darkened from the dark-mode
Geist palette so they hold contrast on white.

## Wire these up before launch

1. `components/contact-form.tsx` and `components/waitlist.tsx` — both have a `// TODO` where the
   POST to your CRM belongs. They validate client-side and show confirmation, nothing more.
2. `components/r9-demo.tsx` — `generate()` matches keywords against `lib/r9-templates.ts`.
   Replace with a call to your real endpoint.
3. Signup and sign-in CTAs currently point at `/pricing`.
4. Replace the text placeholders in the home page `LOGOS` array with real customer SVGs.

## Verify before launch

- **Pricing is a proposal, not your current pricing.** $32/$40 per seat, $45,000 enterprise floor,
  $0.004 per governed action. Confirm all of it.
- **The Trust Center asserts SOC 2 Type II, ISO 27001 and a 99.95% SLA.** If any of those are
  aspirational, delete the row. That page gets read more carefully than any other, and one
  unearned claim there costs more than the whole site gains.
- The `13+ audit categories` and `< 10 min` figures on the home page come from the current
  realm9.app copy. Re-confirm them.
