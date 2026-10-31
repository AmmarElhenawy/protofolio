# Ammar Elhenawy — Portfolio

A personal portfolio site built with Next.js (App Router), React 19, TypeScript, and Tailwind CSS 4. It presents backend and DevOps projects, work experience, and training in a dark "terminal/HUD" visual theme.

## Stack

- **Framework**: Next.js 16 (Turbopack)
- **UI**: React 19, Tailwind CSS 4, shadcn UI primitives (`src/components/ui/`)
- **Fonts**: Inter and Space Grotesk via `next/font/google`
- **Images**: static imports under `src/assets/images/`, rendered through `next/image`

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script | What it does |
|--------|---------------|
| `npm run dev` | Start the Turbopack dev server |
| `npm run build` | Production build (static-exports every route) |
| `npm run start` | Serve the production build |
| `npm run lint` | ESLint over `src/` |
| `npm run check` | `eslint src && tsc --noEmit` — run this before committing |
| `npm run clean` | Remove the local `.next/` build cache |
| `npm run audit:ui` | Run the Playwright verification sweep (`scripts/audit.mjs`) against a running dev server — checks every route's title/heading, the home-page hero layout, the mobile navigation drawer, and text-size/contrast rules. Requires a `playwright-cli` browser session to already be open (`playwright-cli open http://localhost:3000/`) and the dev server running on port 3000. |

### If routes 404 unexpectedly in dev

Turbopack's dev cache under `.next/` occasionally goes stale after a branch switch or a large refactor and serves only a subset of routes. If a route that should exist 404s, run `npm run clean` and restart `npm run dev`.

## Project structure

- `src/app/` — routes (App Router). Each page owns its `metadata` export.
- `src/components/layout/` — the persistent shell: sidebar, top bar, footer.
- `src/components/sections/` — home-page sections (hero, about, skills, featured project).
- `src/components/ui/` — shared primitives: the icon set (`icon.tsx`), the page heading component (`page-heading.tsx`), and shadcn components.
- `src/lib/` — shared types and content data (`tech.ts`, `routes.ts`, `content/experience.ts`, `content/training.ts`) that keep facts (job dates, program counts, technology names) consistent across pages.
- `src/assets/images/` — every image the site actually renders, as static imports.
- `docs/portfolio-audit.md` — the source audit this codebase was brought in line with.
- `specs/001-portfolio-audit-fixes/` — the spec-kit feature (spec, plan, tasks, contracts) that implemented the audit's fixes.

## Content data

Copy that must stay consistent across pages (job dates, training programs, skills) lives in `src/lib/content/` rather than being duplicated in each component — update it there and every page that reads it stays in sync.
