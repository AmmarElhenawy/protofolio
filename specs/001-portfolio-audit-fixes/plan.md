# Implementation Plan: Portfolio Audit Fixes (Phase 1)

**Branch**: `001-portfolio-audit-fixes` | **Date**: 2026-09-13 | **Spec**: [spec.md](spec.md)

**Input**: Feature specification from `specs/001-portfolio-audit-fixes/spec.md` (45 audit findings from `docs/portfolio-audit.md`, 4 owner clarifications recorded)

## Summary

Resolve all 45 findings of the portfolio audit in one delivery: fix the hero overlap and vanishing headline, remove fabricated status widgets and unverifiable skill bars, correct every copy/consistency defect, make images fill their frames with proper LCP handling, make the mobile drawer and icons accessible, give every page its own metadata and a branded 404, and bring lint/type-check/build to zero warnings. Approach: small targeted edits to the 13 existing route/section files plus three new shared components (`Icon`, `PageHeading`, `not-found`), a config touch (`turbopack.root`, `redirects`), an asset relocation/prune, and a committed Playwright verification script that re-runs the audit checks.

## Technical Context

**Language/Version**: TypeScript 5 / React 19.2 / Next.js 16.2.3 (App Router, Turbopack default; docs at `node_modules/next/dist/docs/`)

**Primary Dependencies**: Tailwind CSS 4 (`@tailwindcss/postcss`), `next/font/google`, `next/image`, `lucide-react` (installed, unused), shadcn ui primitives in `src/components/ui/` (installed, unused), `clsx`/`tailwind-merge` via `cn()` in `src/lib/utils.ts`

**Storage**: N/A — fully static site; all content is inline data arrays in page/section files; images are static imports

**Testing**: `npm run lint` (ESLint 9 + `eslint-config-next`), `npx tsc --noEmit`, `npx next build`, Playwright sweep via `playwright-cli run-code --filename=scripts/audit.mjs`, Lighthouse (mobile) before/after

**Target Platform**: Static web (prerendered at build); browsers: evergreen desktop + mobile Safari/Chrome; viewports 390–1920 px

**Project Type**: Web front-end (single Next.js app, no backend)

**Performance Goals**: Lighthouse mobile Performance and Best Practices improve over the recorded baseline; Accessibility ≥ 95; SEO ≥ 95; LCP image eager-loaded on every page

**Constraints**: No new content beyond defect fixes; dark "terminal" theme retained (plain-English `<h1>` + stylised sub-label); no percentages in skills; no fabricated metrics; working tree clean at end; largest committed image ≤ 300 KB; min text 11 px mobile / 10 px desktop; contrast ≥ 4.5:1 (3:1 large)

**Scale/Scope**: 12 routes (11 public + not-found), 4 layout components, 4 section components, ~40 image assets → ~26 after prune; ~45 discrete fixes

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

`.specify/memory/constitution.md` is still the unfilled template — **no principles are ratified**, so there are no constitution gates to evaluate. Recorded as a note: run `/speckit-constitution` at some point so future features have governance. This plan self-imposes the following gates derived from the spec:

| Gate | Status (pre-design) | Status (post-design) |
|------|---------------------|----------------------|
| No new pages/features beyond spec scope | PASS — only `not-found.tsx`, `robots.ts`, `sitemap.ts`, `opengraph-image.png` added, all required by FR-033/FR-034 | PASS |
| No new runtime dependencies | PASS — only `rimraf` (dev) for the `clean` script | PASS |
| Existing utilities reused before new code | PASS — `cn()`, shadcn `badge`/`button`, `next/font` already present | PASS |
| Every change traceable to an FR / ISS id | PASS — see Structure → File map | PASS |

## Project Structure

### Documentation (this feature)

```text
specs/001-portfolio-audit-fixes/
├── plan.md              # This file
├── research.md          # Phase 0 — 16 decisions (R-01…R-16)
├── data-model.md        # Phase 1 — content data shapes
├── quickstart.md        # Phase 1 — how to verify end-to-end
├── contracts/
│   ├── routes.md        # Route ↔ title ↔ h1 ↔ metadata contract
│   ├── audit-script.md  # Contract for scripts/audit.mjs assertions
│   └── ui-components.md # Props contracts for Icon, PageHeading, Sidebar/TopNav
├── checklists/requirements.md
└── tasks.md             # Phase 2 — created by /speckit-tasks
```

### Source Code (repository root)

```text
next.config.ts                  # + turbopack.root, redirects()
package.json                    # + "clean", "check" scripts; + rimraf (dev)
README.md                       # rewritten (project, run, build, clean)
public/                         # boilerplate SVGs removed; favicon assets
scripts/
└── audit.mjs                   # NEW — Playwright verification sweep (R-16)

src/
├── assets/images/              # NEW — all *used* images moved here, renamed
├── app/
│   ├── layout.tsx              # metadata template, viewport.themeColor, remove orphan JSX
│   ├── globals.css             # remove font @imports & material CSS; reduced-motion; dead rules
│   ├── not-found.tsx           # NEW
│   ├── robots.ts, sitemap.ts   # NEW
│   ├── opengraph-image.png (+ .alt.txt)  # NEW
│   ├── favicon.ico, icon.png, apple-icon.png   # replaced
│   ├── page.tsx                # unchanged composition (Q3 = D)
│   ├── code/page.tsx           # PageHeading, metadata
│   ├── experience/page.tsx     # remove Career Timeline; fix timeline markup; fill images; metadata
│   └── projects/
│       ├── page.tsx            # copy fixes, fill thumbnails, button alignment, badge scheme, metadata
│       ├── abg/, clinic/ (renamed from clinc), dana/, devops/, e-commerce/, invoices/, kafka/
│       │   └── page.tsx        # copy fixes, banner <Image fill>, grid balance, links, metadata
├── components/
│   ├── layout/
│   │   ├── AppShell.tsx        # Escape handler, skip link, main id
│   │   ├── Sidebar.tsx         # brand <p>, close button, inert, offset under header, no status widget
│   │   ├── TopNav.tsx          # aria-expanded/controls, typed props, titles = nav labels, no "Active"
│   │   └── Footer.tsx          # <a> external links w/ rel, dynamic year, no "Status: Online"
│   ├── sections/
│   │   ├── HeroSection.tsx     # rail placement, one-shot animation, eager LCP, labelled links
│   │   ├── AboutSection.tsx    # fill portrait, wrap names, copy fixes, contrast, labelled links
│   │   ├── TechStackSection.tsx# → skills by evidence only (widgets removed)
│   │   └── FeaturedProjectSection.tsx # fill image, drop blend, real alt, no fake claims
│   └── ui/
│       ├── icon.tsx            # NEW — shared SVG icon components (aria-hidden)
│       └── page-heading.tsx    # NEW — plain-English h1 + stylised tag
└── lib/utils.ts                # unchanged
```

**Structure Decision**: Single Next.js app (Option 1 web front-end); no `tests/` directory is introduced — verification is the committed Playwright sweep plus lint/type/build, per the spec's success criteria.

### File map: requirement → file(s)

| FR | Files |
|----|-------|
| FR-001, FR-002, FR-003 | `HeroSection.tsx`, `globals.css` |
| FR-004 | `TechStackSection.tsx`, `Sidebar.tsx`, `TopNav.tsx`, `Footer.tsx`, `FeaturedProjectSection.tsx`, `projects/dana/page.tsx` |
| FR-005 | `TechStackSection.tsx` (skillGroups data) |
| FR-006 … FR-014 | `projects/page.tsx`, all 7 `projects/*/page.tsx`, `AboutSection.tsx`, `experience/page.tsx`, `layout.tsx` (keywords) |
| FR-007 | rename `projects/clinc` → `projects/clinic`; `next.config.ts` redirect |
| FR-015, FR-029 | `ui/page-heading.tsx`, every page, `Sidebar.tsx` |
| FR-016, FR-017 | `Sidebar.tsx`, `TopNav.tsx`, `AppShell.tsx` |
| FR-018, FR-019, FR-022 | `FeaturedProjectSection.tsx`, `TechStackSection.tsx`, `AboutSection.tsx`, `projects/devops/page.tsx`, `experience/page.tsx`, `HeroSection.tsx` |
| FR-020, FR-021, FR-035 | `experience/page.tsx`, `TopNav.tsx` |
| FR-023 … FR-028 | `projects/page.tsx`, `FeaturedProjectSection.tsx`, `AboutSection.tsx`, `experience/page.tsx`, all 7 project pages, `HeroSection.tsx` |
| FR-030 | `ui/icon.tsx`, every file with an icon, `globals.css` |
| FR-031, FR-032 | `globals.css`, `AppShell.tsx`, `Sidebar.tsx`, `TopNav.tsx`, section files |
| FR-033, FR-036 | `layout.tsx`, every `page.tsx`, `opengraph-image.png`, `robots.ts`, `sitemap.ts`, icons |
| FR-034 | `not-found.tsx` |
| FR-037 | `Footer.tsx`, `projects/dana/page.tsx`, `projects/invoices/page.tsx`, `projects/abg/page.tsx` |
| FR-038, FR-039 | `next.config.ts`, `package.json`, `README.md`, all files (lint) |
| FR-040, FR-041, FR-042 | `src/assets/images/`, `globals.css`, `projects/page.tsx` (tag field), `Footer.tsx`, git |

## Implementation Approach (for `/speckit-tasks`)

Ordered so that each step leaves the site building and each user story is independently verifiable:

1. **Baseline & branch** — create branch `001-portfolio-audit-fixes` from `main` (no git hook installed); record Lighthouse baseline (R-16); commit `scripts/audit.mjs`.
2. **Tooling (US7)** — `turbopack.root`, `clean`/`check` scripts, README, remove orphan JSX in `layout.tsx`, `eslint --fix`, commit stray images decision (FR-041).
3. **Shared components** — `ui/icon.tsx`, `ui/page-heading.tsx`; `not-found.tsx`; metadata template + `viewport` in `layout.tsx`; `robots.ts`, `sitemap.ts`, OG image, favicon.
4. **Assets** — move used images to `src/assets/images/`, rename, re-encode > 300 KB, delete unused, delete `abg/ABG.jpg`; update imports.
5. **Global CSS** — drop font/material `@import`s, use font variables, reduced-motion rule, delete dead utilities/keyframes, palette-token glow, focus-visible ring.
6. **Layout shell (US3, US5)** — `AppShell` (Escape, skip link), `Sidebar` (brand `<p>`, close button, `inert`, offset, widget removal), `TopNav` (a11y attrs, typed props, plain titles, no badge), `Footer` (`<a>`+rel, dynamic year, no status).
7. **Home sections (US1)** — `HeroSection` (rail, animation, eager image, labelled links), `TechStackSection` (skills by evidence, widgets removed), `FeaturedProjectSection` (fill, alt, no claims), `AboutSection` (fill, wrap, copy, contrast).
8. **Projects list (US2, US4)** — copy/casing, badge scheme, `tag` field removal, `fill` thumbnails + eager first, button alignment, repo links.
9. **Project pages (US2, US4)** — rename `clinc→clinic` + redirect; per page: `PageHeading`, metadata, copy fixes, list markup, label accuracy, banner `<Image fill>` + overlay, grid balance, `lg:col-span-7` (kafka), links/rel/https, repo-or-private note.
10. **Experience page (US2, US3)** — remove Career Timeline, fix timeline markup/spacing, fill course images with `sizes`, count/consistency fixes, `PageHeading`, metadata.
11. **Verification** — `npm run check`, `npx next build`, `playwright-cli run-code --filename=scripts/audit.mjs` at both viewports, Lighthouse after, manual copy read-through against audit § H; update `docs/portfolio-audit.md` status column.

## Complexity Tracking

No constitution violations to justify (constitution not ratified). Two small additions worth noting rather than justifying:

| Addition | Why Needed | Simpler Alternative Rejected Because |
|----------|------------|-------------------------------------|
| `src/components/ui/icon.tsx` (new shared module) | 48 pasted `<svg>` blocks across 13 files with a dead font class; FR-030 needs `aria-hidden` on all of them | Editing each inline SVG in place would touch the same 48 sites with no de-duplication and re-introduce drift |
| `scripts/audit.mjs` (committed verification) | SC-001 requires the audit to be reproducible; the sweep already exists as a scratch script | Manual re-testing of 13 routes × 2 viewports is error-prone and not repeatable by the owner |
