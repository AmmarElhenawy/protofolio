# Research: Portfolio Audit Fixes (Phase 1)

**Date**: 2026-09-13 | **Feature**: `specs/001-portfolio-audit-fixes/spec.md`

All technical unknowns were resolved against the docs bundled with the installed Next.js (`node_modules/next/dist/docs/`, v16.2.3) — per `AGENTS.md`, those docs override training-data assumptions. No `NEEDS CLARIFICATION` remains.

## R-01 Per-page titles, descriptions and share previews (FR-033)

- **Decision**: Root `layout.tsx` exports `metadata` with `title: { template: "%s · Ammar Elhenawy", default: "Ammar Elhenawy — Backend & DevOps Engineer" }`, `metadataBase`, `description`, `openGraph`, `twitter`. Every `page.tsx` exports its own `metadata = { title, description }`. A single `src/app/opengraph-image.png` (1200×630) plus `opengraph-image.alt.txt` provides the share image site-wide; `src/app/robots.ts` and `src/app/sitemap.ts` list the 11 public routes.
- **Rationale**: `title.template` in the root layout applies to child segments (docs: generate-metadata.md § template) so each page only supplies its short name; metadata objects shallow-merge root→page so per-page description overrides cleanly. File-convention `opengraph-image` auto-injects `og:image`/`twitter:image` (docs: opengraph-image.md).
- **Alternatives**: `generateMetadata()` per page — unnecessary, all pages are static; a hand-rolled `<Head>` — not supported in App Router.

## R-02 Theme colour (FR-036)

- **Decision**: `export const viewport: Viewport = { themeColor: "#0c0e10" }` in `layout.tsx`.
- **Rationale**: `metadata.themeColor` is deprecated since Next 14 (docs: generate-metadata.md § themeColor); `viewport` is the supported location.

## R-03 Custom 404 (FR-034)

- **Decision**: `src/app/not-found.tsx` rendering inside `AppShell` with a plain-English heading, one sentence, and a link to `/`.
- **Rationale**: docs not-found.md — root `not-found.js` handles all unmatched URLs and returns HTTP 404 for non-streamed responses. No `global-not-found` (experimental) needed.

## R-04 `clinc` → `clinic` route rename with redirect (FR-007)

- **Decision**: Rename folder `src/app/projects/clinc` → `src/app/projects/clinic`; add to `next.config.ts`:
  `async redirects() { return [{ source: "/projects/clinc", destination: "/projects/clinic", permanent: true }] }`.
- **Rationale**: docs redirects.md — `redirects` are checked before the filesystem and `permanent: true` issues 308, which search engines cache. Zero runtime code.

## R-05 Image rendering: `fill`, `sizes`, LCP priority (FR-023, FR-027, FR-031)

- **Decision**:
  - Every framed image uses `fill` + `sizes` inside a `relative` parent with an explicit aspect/height; `className="object-cover"`. Remove all `unoptimized`.
  - Above-the-fold images (hero portrait, About portrait, first project thumbnail, project-page banner) get `loading="eager"` **plus** `fetchPriority="high"` — **not** `priority`.
  - Hero banners on abg/devops/kafka/dana switch from inline `background-image` to a `fill` `<Image>` behind a dark gradient overlay (docs image.md § Background Image).
- **Rationale**: docs image.md § Responsive image with `fill`: `fill` requires the parent to be `position: relative` and `sizes` avoids the dev warning and over-fetching. Version history v16.0.0: "`priority` prop deprecated in favor of `preload`"; § Known browser bugs recommends `loading="eager"` for above-the-fold. `fetchPriority="high"` is the documented way to prioritise without preloading two candidates.
- **Alternatives**: explicit `width`/`height` from the static import — works for fixed-ratio slots but the card/banner slots are ratio-driven, so `fill` is the uniform choice.

## R-06 Image storage location & pruning (FR-040, FR-041)

- **Decision**: Move all *used* images to `src/assets/images/` (static imports keep working and give width/height + blur placeholders); delete the 14 unused files; rename `Gemini_Generated_Image_… (1)_11zon.jpg` → `laravel-nestjs.jpg`; delete `src/app/projects/abg/ABG.jpg`; re-encode any image > 300 KB (`dana3.jpg` OK; `profile.jpeg` 656 KB and `ME.jpg` need re-export ≤ 300 KB). Add `opengraph-image.png` under `src/app/`.
- **Rationale**: static imports through `next/image` are optimised at build; `public/` would lose automatic dimensions. Keeping images out of `src/components/` separates assets from code.
- **Alternatives**: `public/` — rejected (no intrinsic size, no blur placeholder).

## R-07 Fonts (FR-040 / ISS-030)

- **Decision**: Delete both `@import url(https://fonts.googleapis.com/…)` lines from `globals.css` (Inter/Space Grotesk and Material Symbols). Keep `next/font/google` in `layout.tsx`. In `globals.css`, replace literal `'Inter'` / `'Space Grotesk'` with `var(--font-inter)` / `var(--font-space-grotesk)` (already exposed as `--font-body`, `--font-headline`, `--font-label` in `@theme inline`). Remove the `.material-symbols-outlined` rule.
- **Rationale**: `next/font` self-hosts and sets the CSS variables; the CSS `@import` is a second, render-blocking download of the same faces.

## R-08 Icons & accessibility (FR-030)

- **Decision**: Drop every `<span className="material-symbols-outlined">` wrapper (48 occurrences). Introduce `src/components/ui/icon.tsx` exporting named SVG components (`IconGithub`, `IconLinkedin`, `IconTerminal`, …) with `aria-hidden="true"` and `focusable="false"` by default, and an `Icon` prop `label` that renders a visually-hidden `<span>` when the icon is the only content of a link/button. Social links get `aria-label="GitHub profile"` etc.
- **Rationale**: de-duplicates ~2,000 lines of pasted `<svg>` markup across 13 files, fixes "link has no discernible text", and removes a dead font-family.
- **Alternatives**: `lucide-react` is already a dependency and could replace most Bootstrap icons — acceptable, but the existing Bootstrap-icon shapes are part of the look; keep them as local components.

## R-09 Mobile drawer accessibility (FR-016, FR-017)

- **Decision**: In `AppShell.tsx`: `useEffect` keydown listener closing on `Escape`; overlay click closes (exists). `Sidebar.tsx`: `<aside id="site-nav" inert={!open && !isDesktop}>` — React 19 supports the boolean `inert` attribute — plus a visible close button (`aria-label="Close menu"`) at the top of the drawer on `lg:hidden`; add `pt-16` (header height) to the drawer so the brand clears the fixed header on mobile, or render the brand below the header offset. `TopNav.tsx` hamburger gets `aria-expanded={open}` `aria-controls="site-nav"` (so `TopNav` receives `open` as a prop, not just `setOpen`), and `any` is replaced with `Dispatch<SetStateAction<boolean>>`.
- **Rationale**: `inert` is the only attribute that removes an off-screen region from both tab order and the accessibility tree without unmounting it; `pointer-events-none` alone leaves links tabbable (measured in the audit).

## R-10 Motion (FR-002, FR-003)

- **Decision**: Replace `slideLoop` on the specialization headline with the same one-shot `fadeUp` used by its siblings; delete the `slideLoop` keyframes. Replace the no-op `delay-200` (a *transition* delay) with Tailwind's `[animation-delay:200ms]`. Add to `globals.css`:
  `@media (prefers-reduced-motion: reduce) { *, ::before, ::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; } }` and make sure every `opacity-0 animate-*` element has `forwards` fill so it ends visible.
- **Rationale**: a global reduced-motion rule is simpler and safer than per-element `motion-reduce:` variants across 5 files; the 0.01 ms trick keeps `forwards` end-states so nothing stays invisible.

## R-11 Workspace root warning & stale cache (FR-038, FR-039)

- **Decision**: `next.config.ts` → `turbopack: { root: path.resolve(__dirname) }` (docs turbopack.md § Root directory: Next infers root from the nearest lockfile, which is `C:\Users\Ammar\package-lock.json`). Add `"clean": "rimraf .next"` (dev-dependency `rimraf`) and `"check": "npm run lint && tsc --noEmit"` scripts.
- **Rationale**: silences the warning in both `dev` and `build`; `clean` documents the fix for the stale-cache 404 the audit hit.

## R-12 Lint zeroing (FR-038)

- **Decision**: `eslint --fix` for the 34 auto-fixable `prefer-const`; hand-remove unused icon constants/imports (largely eliminated by R-08); escape quotes with `&quot;`/`&apos;` or move copy into data arrays; type `TopNav` props properly.
- **Rationale**: `next build` does not run ESLint in Next 16, so `npm run lint` must be part of the definition of done.

## R-13 Skills section data model (FR-005)

- **Decision**: Replace the `skills` array (name/proficiency/color) with `skillGroups: { group: "Used at work" | "Used in projects" | "Learning"; skills: { name; href }[] }[]`, rendered as three columns of chips linking to the evidence page (`/experience`, `/projects/kafka`, …). Terraform and Kubernetes are dropped (nothing on the site evidences them); Jenkins, Redis, MongoDB, Prisma, Laravel, NestJS, Express, Docker, Linux, PHP, TypeScript are kept and mapped.
- **Rationale**: matches clarification Q1 = A; every chip is verifiable by clicking it.

## R-14 Heading voice (FR-015)

- **Decision**: New `src/components/ui/page-heading.tsx` `<PageHeading title="Projects" tag="PROJECT_VAULT_02" eyebrow="Career" />` rendering `<h1>` (plain English) with the stylised tag as a small mono sub-label. Used on Projects, Experience, Code, all 7 project pages and Not-found. Home's hero keeps "Hello, I'm Ammar" as its `<h1>`. Sidebar brand becomes a `<p>`.
- **Rationale**: matches clarification Q2 = C and gives exactly one `<h1>` per page (FR-029) via one component.

## R-15 Fabricated widgets (FR-004)

- **Decision**: Delete `TechStackSection`'s Live_Logs, LIVE_METRICS and EVENT_LOG blocks and the "Active Sessions" label; delete the sidebar version/System Online block, the header "Active" badge and the footer "Status: Online" span; drop "Released: 2026", "sub-100ms latency", "Production Ready", "42ms avg". `TechStackSection` becomes the skills-by-evidence section (R-13) only.
- **Rationale**: clarification Q4 = A.

## R-16 Verification tooling (SC-001…SC-011)

- **Decision**: Commit the audit sweep as `scripts/audit.mjs` (runs under `playwright-cli run-code --filename`), asserting per route: HTTP 200, unique title, one `h1`, no `<10px` text at 390 px, all images `naturalWidth>0` after scroll, hero rail/headline boxes disjoint at 1280/1440/1920, headline opacity 1 after 8 s, drawer `inert` when closed. Lighthouse baseline captured with `npx lighthouse` before the first code change and stored as `specs/001-portfolio-audit-fixes/lighthouse-baseline.json`.
- **Rationale**: the spec's success criteria are already expressed as these measurements; committing the script makes SC-001 reproducible.
