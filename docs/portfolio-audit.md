# Portfolio Audit — Single-Phase Fix Plan (input for spec-kit)

## Context

The portfolio (Next.js 16.2.3 / React 19 / Tailwind 4, `src/app` + `src/components`) was audited with **playwright-cli** (all 12 routes + `/about` + a bogus URL, at 1440×900 and 390×844, full-page screenshots, console/network capture, DOM checks), plus `eslint`, `tsc`, `next build`, and a source grep pass. Nothing in the repo was modified; only the gitignored `.next/` cache was cleared to isolate a routing problem.

Goal of this document: one flat, complete list of every defect (functional, visual, responsive, accessibility, performance, code-quality, grammar/copy, and content-credibility) so it can be turned into a spec-kit feature (`/speckit-specify` → `/speckit-plan` → `/speckit-tasks` → `/speckit-implement`) in **a single phase**. Each item has a stable ID, severity, exact file(s), and a testable acceptance criterion (AC).

Severity: **P1** = broken/misleading for visitors, **P2** = clearly visible quality defect, **P3** = polish / hygiene.

Things the audit proved are *not* bugs (don't file them): no horizontal overflow on any route (scrollWidth == clientWidth everywhere; the decorative `-right-16 … blur-3xl` blobs are clipped by `overflow-hidden`); images reported "broken" by the sweep were lazy-loaded below the fold and load fine when scrolled.

---

## Phase 1 — All fixes (single phase)

### A. Build / routing / tooling

- **ISS-001 (P3) Stale local `.next` cache made every `/projects/*` route 404 in `next dev` and broke `tsc` — dev-environment only, not a shipping defect.**
  **Status**: Fixed — `turbopack.root` set, `npm run clean` script added; the dev-cache 404s were resolved by clearing `.next/` (T004, T012).
  Evidence: with the April `.next/` present, Turbopack served only `/`, `/code`, `/experience`, `/projects` (generated `routes.d.ts`), all seven detail pages returned 404, and `tsc` failed on `.next/types/validator.ts` → `src/app/about/page.js` (a deleted route). After `rm -rf .next` everything serves; `next build` exits 0 and emits all 12 routes, and `.next/` is gitignored so a fresh clone is unaffected.
  Fix: add a `"clean"` script (`rimraf .next`) to `package.json` and note in README that `tsc --noEmit` must run after a build/dev start (do **not** remove `.next/types/**` from `tsconfig.json` `include` — it's Next's default and provides `PageProps` types). AC: `npm run clean && npm run dev` → `curl /projects/dana` = 200; `npx tsc --noEmit` passes after `next build`.

- **ISS-002 (P2) Workspace-root warning on every dev/build run.** `next.config.ts` — a stray `C:\Users\Ammar\package-lock.json` makes Next pick the wrong root ("We detected multiple lockfiles…"). Fix: set `turbopack.root: path.resolve(__dirname)` (see `node_modules/next/dist/docs/01-app/03-api-reference/05-config/01-next-config-js/turbopack.md`). AC: no root warning in `next dev`/`next build` output.
  **Status**: Fixed — `turbopack.root: path.resolve(__dirname)` in `next.config.ts`; no root warning in dev or build (T012).

- **ISS-003 (P2) 43 ESLint errors / 60 warnings; `npm run lint` fails.** Categories: `prefer-const` on ~34 icon `let`s (`TechStackSection.tsx`, `AboutSection.tsx`, `Sidebar.tsx`, `TopNav.tsx`, `experience/page.tsx`, `e-commerce/page.tsx`, `kafka/page.tsx`), `react/no-unescaped-entities` (`projects/dana/page.tsx:200`, `projects/invoices/page.tsx:327-335`), `@typescript-eslint/no-explicit-any` (`TopNav.tsx:19`), dozens of unused SVG constants and unused imports (`AppShell` in `AboutSection.tsx`, `APG_IMG_REG`/`book` in `projects/page.tsx`, `import { error } from "console"` in `e-commerce/page.tsx:2`). AC: `npx eslint src` → 0 errors, 0 warnings.
  **Status**: Fixed — `npx eslint src` reports 0 errors/0 warnings after the component rewrites (T015).

- **ISS-004 (P2) Orphan JSX expression at module scope.** `src/app/layout.tsx:5` — `<html lang="en" data-scroll-behavior="smooth"></html>` sits outside the component and does nothing. Remove it (and move `data-scroll-behavior` onto the real `<html>` if wanted). AC: line removed; layout renders identically.
  **Status**: Fixed — orphan `<html>` expression removed from `layout.tsx` (T011).

- **ISS-005 (P3) Dirty working tree / stray assets.** `src/components/profile.jpeg` modified but uncommitted; `src/components/profile10.jpeg` untracked; `src/app/projects/abg/ABG.jpg` (55 KB, tracked, never imported) is a second copy of `src/components/ABG.jpg` (28 KB) living inside the route folder. AC: `git status` clean after an intentional commit; no image files under `src/app/`.
  **Status**: Fixed — working tree clean; `abg/ABG.jpg` duplicate removed; images relocated to `src/assets/images/` (T001, T009).

### B. Functional / navigation

- **ISS-006 (P2) Dead `/about` route referenced in nav code.** `src/components/layout/TopNav.tsx:15` maps `"/about": "ABOUT_OPERATOR"` but no `src/app/about` exists (404). `AboutSection.tsx` still exports `AboutPage()` and imports `AppShell`. Decide: either add `/about` (re-using `AboutSection`) or drop the mapping. AC: every key in `pageTitles` resolves to a 200 route.
  **Status**: Fixed — owner decision (Clarification Q3 = D): home page unchanged, so the dangling `/about` header mapping was removed rather than adding an About page (T020).

- **ISS-007 (P2) No custom 404 page.** `/about`, `/nope-404` render the bare Next default "404: This page could not be found." with no sidebar/nav. Add `src/app/not-found.tsx` inside `AppShell` with a link home. AC: unknown URL shows branded 404 with navigation.
  **Status**: Fixed — `src/app/not-found.tsx` renders inside `AppShell` with navigation (T055).

- **ISS-008 (P2) Mobile drawer: header covers the brand, no close affordance, no a11y state.** `Sidebar.tsx` / `TopNav.tsx` / `AppShell.tsx` — with the drawer open at 390px the fixed `TopNav` (z-50) overlaps the sidebar's first brand line ("AMMAR" hidden, only "ELHENAWY" visible; see `mob_menu_open.png`). Hamburger lacks `aria-expanded`/`aria-controls`; drawer has no `inert`/`aria-hidden` when closed (links remain tabbable while `pointer-events-none`); no Escape-to-close; no close (X) button inside the drawer. AC: brand fully visible when open; Escape closes; closed drawer is not focusable; `aria-expanded` toggles.
  **Status**: Fixed — brand fully visible when open, in-drawer close button, `aria-expanded`/`aria-controls`, `inert` when closed (T037-T039).

- **ISS-009 (P3) External links hygiene.** `Footer.tsx:11-24` use `next/link` for external URLs and `target="_blank"` without `rel="noopener noreferrer"`; `projects/dana/page.tsx:68-71` ("Demo") and `:356-360` ("API Docs") also lack `rel`; `projects/invoices/page.tsx:117` and `:329` use `http://github.com/...` (insecure scheme); `projects/abg/page.tsx:226` "View Task Requirement" (Google Drive) opens in the same tab. AC: all external `<a>` use `https`, `target="_blank"`, `rel="noopener noreferrer"`; plain `<a>` not `Link`.
  **Status**: Fixed — every external link uses `<a target="_blank" rel="noopener noreferrer">` and `https` (across all page rewrites).

- **ISS-010 (P3) Project `tag` field never rendered.** `projects/page.tsx` every project has `tag: "mvc-restApi" | "mvc" | "microservices" | "restApi"` that no JSX reads. Either render it (filter chips) or delete. AC: no dead data fields.
  **Status**: Fixed — the unrendered `tag` field was dropped from the `Project` type (T024).

### C. Layout / visual (desktop)

- **ISS-011 (P1) Social rail overlaps the hero headline at 1440px.** `HeroSection.tsx:17` rail is `absolute left-4 lg:left-12` inside the section; measured: heading x-range 302–555, rail 304–352 → GitHub/LinkedIn buttons sit on top of "HELLO, I'M" (see `home-desktop.png`). AC: at 1280/1440/1920 no intersection between rail and any text; verified via bounding boxes.
  **Status**: Fixed — social rail moved into normal flex flow; verified disjoint from the `<h1>` at 1280/1440/1920 by `scripts/audit.mjs` (T016).

- **ISS-012 (P1) Main headline animates to invisible every 6 s.** `HeroSection.tsx:97` uses `animate-[slideLoop_6s_ease-in-out_infinite]` (`globals.css:315-340` goes to `opacity:0`). "BACKEND & DEVOPS ENGINEER" — the most important line on the page — disappears for ~30% of each cycle. Also `delay-200` on lines 17/48/59/82 is a *transition* delay and does nothing for animations. Replace with a single entrance animation; add `@media (prefers-reduced-motion: reduce)` handling (none exists in `globals.css`). AC: headline opacity stays 1 after load; reduced-motion users get no motion.
  **Status**: Fixed — looping `slideLoop` replaced with a one-shot `fadeUp`; global `prefers-reduced-motion` rule added; verified by `scripts/audit.mjs` (T016, T010).

- **ISS-013 (P2) `next/image` used without `fill` or dimensions → `object-cover` is inert, boxes don't fill.** Pattern in `projects/page.tsx:136-142` (card thumbnails — visible gray bands under images in row 1 of `desk_projects.png`, inconsistent card heights), `FeaturedProjectSection.tsx:46-52`, `AboutSection.tsx:56-62`, `experience/page.tsx:334-338` (course images), `projects/dana/page.tsx:215-219`. Fix: `fill` + `sizes` inside a sized `relative` parent (or explicit `width/height`). AC: every image fills its container edge-to-edge at 390/768/1440; no dev warning about `fill` without `sizes` (`experience/page.tsx:296-301` currently warns 4×).
  **Status**: Fixed — every framed image uses `fill` + `sizes` + `object-cover` (T045-T048).

- **ISS-014 (P2) Featured DANA image is unreadable.** `FeaturedProjectSection.tsx:46-52` — `mix-blend-screen opacity-80` on a dark team photo over `#0c0e10` renders as a near-black box (see bottom of `desk_.png`); `alt="Architecture Diagram"` is false (it's the hackathon prize photo). Use a real diagram/screenshot, drop the blend, fix alt. AC: image visibly renders; alt describes the picture.
  **Status**: Fixed — featured image blend mode removed, now clearly visible, truthful alt text (T018).

- **ISS-015 (P2) Light-mode screenshots used as hero banners clash with the dark theme and make overlaid stats unreadable.** `projects/devops/page.tsx:150-155` (white DEPI/MCIT banner), `projects/kafka/page.tsx:208-213` (white Kafka UI screenshot), `projects/abg/page.tsx:134-139`, `projects/dana/page.tsx:86-93` (grayscale group photo). These bypass `next/image` via inline `background-image`. AC: banners use `next/image` with a dark overlay strong enough that stat text passes 4.5:1 contrast.
  **Status**: Fixed — all project banners render via `next/image` with a dark gradient overlay (T048).

- **ISS-016 (P2) Kafka architecture section doesn't sit side-by-side at `lg`.** `projects/kafka/page.tsx:361` — right column is `lg:col-span-12 xl:col-span-7` next to a `lg:col-span-5` left column, so at 1024–1279px the schematic drops below. Every other project page uses `lg:col-span-7`. AC: consistent `lg:col-span-7`.
  **Status**: Fixed — Kafka architecture column changed to `lg:col-span-7`, consistent with other project pages (T028).

- **ISS-017 (P2) [PROPOSAL — needs owner decision on layout] Bento feature grids are uneven / leave large empty cells.** All 6 project pages use `md:grid-cols-4` with `span: "md:col-span-2"` on items 1 and 5 → row 2 has a wide cell holding one short sentence (e.g. "Payment Integration", "Real-time Ready", "Mongoose ODM"). `clinc` has 5 items so row 2 is 2+1 with a hole. AC: grid rows are visually balanced at md/lg; no empty cells.
  **Status**: Fixed — owner decision (default accepted): feature grids rebalanced to equal-width 2-3 column layouts, no spanning cells (T049).

- **ISS-018 (P2) Experience timeline spacing/markup defects.** `experience/page.tsx`: `exp.branch` is `""` for both entries → renders an empty label + a stray 24px dash (lines 207-213); "Technologies Used" block has no top margin from the bullet list (line 273); `pb-16` + `space-y-6` + trailing line leaves a large dead gap under the last card; duplicate `key={exp.company}` on the nested div (line 216); commented-out `timeline.map` block (189-193) and `// content` comment (310). AC: no empty labels; consistent 24–32px rhythm; no dead code.
  **Status**: Fixed — empty `branch` label, duplicate key, and dead commented-out code removed; spacing corrected (T042).

- **ISS-019 (P2) Project card grid: buttons misaligned, descriptions cut mid-word.** `projects/page.tsx`: `line-clamp-2` truncates ("secure documen…", "order…"); the devops card has 4 tags that wrap, pushing its button lower than siblings; DANA "featured" card is `md:col-span-3` but the grid is `md:grid-cols-2` at md. AC: card buttons align on one baseline per row; descriptions ≤ 2 lines without truncation or use `line-clamp` with full text on detail page only.
  **Status**: Fixed — cards are `flex flex-col` with buttons pinned to `mt-auto`; `line-clamp` removed in favour of shorter copy (T045).

- **ISS-020 (P3) [PROPOSAL — needs owner decision: keep or remove] Experience "Career Timeline" is redundant and mis-ordered.** `experience/page.tsx:387-419` repeats the two jobs + two courses already listed above; order is 2025–Now, Jun–Nov 2025, Jul–Aug 2024, Ongoing (not chronological); dates are `hidden lg:block` so on mobile the timeline has **no dates at all**. AC: either remove the section or make it the single source of truth, chronological, with dates visible at every breakpoint.
  **Status**: Fixed — owner decision (Clarification Q3 = D): the "Career Timeline" section was removed from the Experience page (T042).

- **ISS-021 (P3) Course card image placeholder "No Image" is unstyled fallback and `h-32` crops group photos badly.** `experience/page.tsx:332-344`. AC: consistent aspect ratio with `object-cover` via `fill`.
  **Status**: Fixed — course images use `fill` + `sizes` with a consistent aspect ratio (T047).

### D. Responsive (390px)

- **ISS-022 (P2) Text below 10px on mobile.** Home: 12 leaf nodes < 10px (`text-[8px]`/`[9px]` in `FeaturedProjectSection.tsx:58`, `TechStackSection.tsx:44,161`, `AboutSection.tsx:198`), devops page: 8 (`text-[8px]` task IDs `projects/devops/page.tsx:187,240`), experience: 5. AC: minimum rendered font-size 11px on mobile, 10px on desktop for labels.
  **Status**: Fixed — minimum text size raised to 11px everywhere on mobile; verified by `scripts/audit.mjs` (T040, T041, T043, follow-up global sweep).

- **ISS-023 (P2) Truncated training names on mobile.** `AboutSection.tsx:173` `truncate` cuts "Backend Development – Larave…" and "English Language Training – AU…" at 390px (see `mob_.png`). AC: names wrap, never ellipsize.
  **Status**: Fixed — `truncate` removed from training names and quick-fact values; they wrap instead (T040).

- **ISS-024 (P3) [PROPOSAL — needs owner decision on home-page structure] Mobile home is ~4,700px tall with duplicated "About" content.** `page.tsx` renders `HeroSection` + `AboutSection` (portrait, bio, training, contact) + `TechStackSection` + `FeaturedProjectSection`; the About block repeats the hero portrait and repeats training already on `/experience`. AC: home ≤ ~3,000px at 390px; no content appears twice on the same page.
  **Status**: Owner decision (Clarification Q3 = D): home page structure is kept as-is; only in-section defects were corrected, per FR-021.

- **ISS-025 (P3) Hero ambient blob exceeds viewport on mobile.** `HeroSection.tsx:12` `w-[400px]` blob on a 390px viewport (clipped by `overflow-hidden`, harmless but wasteful). AC: `max-w-full`.
  **Status**: Fixed — ambient blob capped at `w-[min(400px,100vw)]` (T041).

### E. Accessibility

- **ISS-026 (P2) No content `<h1>` on any page.** The only `<h1>` is the sidebar brand (`Sidebar.tsx:69`); every page title is an `<h2>` (`projects/page.tsx:118`, `experience/page.tsx:142`, all project pages, `HeroSection.tsx:52/88/97`). AC: exactly one `<h1>` per page = the page's main title; brand becomes a `<p>`/`<span>`.
  **Status**: Fixed — every page has exactly one `<h1>` via the shared `PageHeading` component; verified by `scripts/audit.mjs` (T008, T016).

- **ISS-027 (P2) Dead Material-Symbols wrappers + wasted font download.** Every icon is an inline SVG wrapped in `<span className="material-symbols-outlined">` (48 occurrences across 13 files) while `globals.css:3` downloads the Material Symbols variable font that never renders a glyph; `style={{ fontVariationSettings: "'FILL' 1" }}` props are no-ops. Fix: remove the class/CSS/import; give decorative SVGs `aria-hidden="true"`; give meaning-bearing ones (`Toggle menu`, social links) accessible names (social `<a>`s in `HeroSection.tsx:18-41,120-139` and `AboutSection` have no text/label). AC: no `material-symbols` in bundle; axe reports 0 "link has no discernible text".
  **Status**: Fixed — all 48 inline `<svg>`/`material-symbols-outlined` occurrences replaced by the shared `Icon` component (`aria-hidden` by default); dead font CSS removed (T007, T010, T051).

- **ISS-028 (P2) Low-contrast text.** `text-slate-600` (#475569) and `text-outline` (#747578) on `#0c0e10`/`#111416` backgrounds for labels like "PROJECT_ID: …", timestamps in Live_Logs, "DOMAIN: EXP-RECORD", version label — below 4.5:1 for small text. Files: `TopNav.tsx`, `Sidebar.tsx:72`, `TechStackSection.tsx:50-70`, all project page headers. AC: all text ≥ 4.5:1 (or ≥ 3:1 for ≥ 18.7px bold).
  **Status**: Fixed — `text-slate-600`/`text-outline` replaced by `text-slate-400`/`text-on-surface-variant` site-wide (T052).

- **ISS-029 (P3) Focus styles / skip link.** No visible `:focus-visible` treatment on buttons/links beyond browser default (overridden by `outline-ring/50` on `*`); no skip-to-content link. AC: keyboard tab order shows a visible ring; skip link present.
  **Status**: Fixed — visible `:focus-visible` ring added; skip-to-content link is the first focusable element (T010, T037).

### F. Performance / assets

- **ISS-030 (P2) Duplicate font loading.** `layout.tsx` loads Inter + Space Grotesk via `next/font/google` **and** `globals.css:2` `@import`s the same families from Google Fonts (render-blocking, double download). `globals.css:139,148,153,193-201` hard-code `'Inter'`/`'Space Grotesk'` instead of the `--font-*` variables. AC: single font source (`next/font`), CSS uses the variables.
  **Status**: Fixed — Google Fonts `@import` removed from `globals.css`; fonts load only via `next/font` (T010).

- **ISS-031 (P2) `unoptimized` on most images + no `priority` on LCP.** `unoptimized` in `HeroSection.tsx:67`, `AboutSection.tsx:61`, `FeaturedProjectSection.tsx:51`, `projects/page.tsx:141,207` disables Next image optimization; dev console warns LCP images (`profile.jpeg`, `ME.jpg`, `ABG.jpg`, `darElsokar.jpg`, `dana2.jpeg`) lack `priority`. AC: no `unoptimized`; above-the-fold images have `priority`; Lighthouse LCP < 2.5 s on mobile.
  **Status**: Fixed — `unoptimized` removed everywhere; above-the-fold images use `loading="eager" fetchPriority="high"` (`priority` is deprecated in Next 16) (T045-T048).

- **ISS-032 (P3) 14 unused images (~4.5 MB) committed under `src/components/`.** Unused: `profile2/3/4/5/6/7/8/10`, `dana3.jpeg` (680 KB, note `dana3.jpg` *is* used), `dana4.jpg`, `devops1.jpg`, `marakez3.jpg`, `mega2.jpg`, `mega3.jpg`; `profile6.png`/`profile8.png` are 1.5 MB each. Also `Gemini_Generated_Image_zd0lv3zd0lv3zd0l (1)_11zon.jpg` (spaces/parentheses in filename). Move used images to `src/assets/images/` (or `public/`), delete the rest, rename sanely. AC: no unreferenced image files; largest source image < 300 KB.
  **Status**: Fixed — 15 unused images deleted (~3MB); the 670KB hero portrait re-encoded to 133KB; all remaining images are under 300KB (T009).

- **ISS-033 (P3) Unused CSS.** `globals.css` utilities `.glitch-overlay`, `.git-line`, `.registry-item`, `.glass-panel`, `.text-glow-tertiary`, keyframes `pulse-dot`, `slide-up`, `fade-in` and their `.animate-*` classes are unused; `.aura-glow` is purple (`rgba(168,85,247)`) — off-palette. AC: remove dead rules; glow uses palette token.
  **Status**: Fixed — unused CSS utilities and keyframes removed from `globals.css` (T010).

### G. Metadata / SEO

- **ISS-034 (P2) Every page has the same `<title>` "Ammar Portfolio" and description.** Only `layout.tsx` exports `metadata`; no page exports `metadata`; no Open Graph / Twitter tags, no canonical, no `metadataBase`, no `robots`/`sitemap`. Description claims "Backend architect … high-concurrency systems and automated infrastructure" which the content doesn't support. AC: each route has a unique title (`"DANA — Ammar Elhenawy"` etc.) + description; OG image set; `npx next build` shows no metadata warnings.
  **Status**: Fixed — every route exports unique `metadata` (title + description); root layout provides the `%s · Ammar Elhenawy` template and OG/Twitter defaults (T011, T024-T034).

- **ISS-035 (P3) No `theme-color`; favicon and `public/` are still the create-next-app defaults.** `src/app/favicon.ico` is the scaffold file (25,931 bytes, dated with the initial scaffold, never replaced); `public/{file,globe,next,vercel,window}.svg` are the Next boilerplate and unused. AC: custom favicon (+ `apple-icon`), boilerplate SVGs removed, `theme-color` set to `#0c0e10`.
  **Status**: Fixed — custom `icon.png`/`apple-icon.png`/`opengraph-image.png` generated; `theme-color` set via `viewport`; create-next-app boilerplate SVGs and favicon removed (T011, T014).

### H. Copy — grammar, spelling, casing (exact strings)

- **ISS-036 (P1) Typos / brand casing.**
  **Status**: Fixed — casing corrected site-wide (Kubernetes removed as unevidenced, Node.js, MongoDB, Paymob, Analytics Service); `/projects/clinc` renamed to `/projects/clinic` with a redirect (T024-T032, T012).
  - `projects/page.tsx:93` `"kubarnetes"` → "Kubernetes" (and see ISS-043: Kubernetes isn't actually covered).
  - `projects/page.tsx:79` `"nodeJs", "mongoDB"` → "Node.js", "MongoDB".
  - `projects/page.tsx:91` project name `"devops"` → "DevOps Task Suite" (matches its page).
  - `projects/dana/page.tsx:145,331` `paymob` → "Paymob"; `:16` `"Redis-Caching"` → "Redis Caching".
  - `projects/kafka/page.tsx:267,343` `"Analytic Service"` → "Analytics Service".
  - Route/folder `src/app/projects/clinc` and `href="/projects/clinc"` → `clinic` (add redirect from old slug).
  - `layout.tsx:26` keyword `"devops"` fine, but `"golang"` is listed as a keyword while Go appears nowhere on the site.
- **ISS-037 (P1) Broken sentences / stray punctuation.**
  **Status**: Fixed — stray punctuation and run-on paragraphs corrected; feature lists render as real `<ul>`s; the hackathon paragraph rewritten in portfolio voice (T026, T027, T035).
  - `projects/abg/page.tsx:190-191` `"… ChatGateway · MailerModule . real-time pusher "` — stray " . ", trailing space, lowercase, and `ChatGateway`/`MailerModule` are NestJS class names copy-pasted from DANA into a Laravel project.
  - `projects/dana/page.tsx:138-150` "Core Features" is written with `- ` line breaks inside a `<p>`, so it renders as one run-on paragraph ("…Refresh Token) - Role-Based Access Control (RBAC) - Full CRUD…"). Render as `<ul>`.
  - `projects/dana/page.tsx:287` `desc: " Scalable design…"` leading space; `:319,335` `-&gt;Profile` (no space) vs `-&gt;  Mailer - Queue` (two spaces).
  - `AboutSection.tsx:31` `"FCI - senior student -  b+ average"` → double space, lowercase "b+", unexplained acronym → "Faculty of Computers & Information — senior student, B+ GPA".
  - `projects/abg/page.tsx:145` `value: "Pusher "` trailing space.
  - `projects/dana/page.tsx:184` trophy emoji wraps onto its own line; `:188-201` "Proud to announce that our team…" is LinkedIn-post tone with a raw `"…"` quote (also the lint error). Rewrite in portfolio voice.
- **ISS-038 (P2) Inconsistent naming systems.** Card badges `BE_002 · Laravel`, `BE_005 · Laravel MVC`, `BE_006 · Microservices`, `BE_004 · Express`, `Legacy_Support` ×2, `Priority_A1` vs page IDs `ABG-0001`, `CLN-0005`, `INV-0003`, `ECO-0004`, `KFK-0006`, `DANA-0922`; numbering has gaps (no BE_001/003) and "Legacy_Support" is meaningless for the invoices/devops projects. Page headers use "PROJECT_REGISTRY" / "DEPLOYMENT_HISTORY" / "HOME_DASHBOARD" while the nav says Projects / Experience / Home. AC: one consistent scheme (or drop the pseudo-IDs); TopNav titles match nav labels.
  **Status**: Fixed — one consistent category scheme (`Laravel MVC` / `REST API` / `Microservices` / `DevOps` / `NestJS API`) replaces the mixed `BE_00x`/`Legacy_Support`/pseudo-ID badges; header labels match nav labels (T024-T032, T020).
- **ISS-039 (P2) Label/content mismatches.** `projects/dana/page.tsx:125-130` box labelled "Technical Constraint" contains the solution statement; `:152` checkmarks "Real-time Telemetry" / "Predictive Analysis" are features never described; `:313` schematic is labelled `nest-cli.json` but shows a module tree; DANA button says "Demo" but links to Postman docs (`:68-79`); `projects/page.tsx:236-247` DANA button icon is a shopping-bag (`bi-bag-plus`) for a medical project; `experience/page.tsx:168` "Stack: Laravel · NestJS · DevOps" (DevOps is not a stack item); `projects/devops/page.tsx:160` "Orchestration: Portainer" (Portainer is a UI, not an orchestrator); `FeaturedProjectSection.tsx:48` alt "Architecture Diagram" on a photo. AC: every label describes its content; every icon matches its subject.
  **Status**: Fixed — mismatched labels and icons corrected ("Technical Constraint" → "Solution", DANA icon → activity, DevOps "Orchestration" → "Management UI", etc.) (T026, T027, T029).
- **ISS-040 (P2) Contradictions between pages.**
  **Status**: Fixed — cross-page facts now come from shared `src/lib/content/{experience,training}.ts` so position/program counts and the ABG real-time/auth claims cannot drift (T034, T035, T026).
  - `AboutSection.tsx:24` "2+ Years" experience vs `experience/page.tsx` showing one 5-month job (Jun–Nov 2025) + one 2-month internship; badge says "Full-time" (`:234`) for a role listed in a "Tech Company" in Tanta — confirm.
  - ABG: hero stat "Real-time: Pusher" and "real-time interactions" vs feature card "Real-time Ready — *designed for easy* Laravel Echo integration" (i.e. not built).
  - ABG "Authentication (JWT + Sanctum)" — Sanctum tokens are not JWT; pick one.
  - `experience` hero counts "2 Positions" (one is an internship) and "3 Programs" while `AboutSection` lists 4 trainings.
  - Timeline says "DEPI DevOps Program 2025 – Now" but `AboutSection` says "Current" and the courses card says "Current" — fine — yet the DevOps project page never mentions DEPI.
- **ISS-041 (P3) [PROPOSAL — needs owner decision; this is the site's deliberate "terminal" voice] Jargon headings hurt readability for recruiters.** `System_Prototypes`, `Project_Vault_02`, `Source_Archive`, `Code_Modules`, `Initiate_Contact`, `Send_Signal`, `System_Description`, `Training_&_Courses`, `READY_FOR_CODE`, `ROOT_ACCESS_GRANTED`, `VIEW_SPECS`. Keep the theme but make primary headings plain English ("Projects", "Contact", "About me"); keep the stylised strings for small labels only. AC: every `<h1>/<h2>` is plain English.
  **Status**: Fixed — owner decision (Clarification Q2 = C): every primary heading is plain English via `PageHeading`, with the stylised terminal string kept as a small sub-label (T008 + all pages).

### I. Content credibility ("unreliable" items)

- **ISS-042 (P1) Fabricated live data presented as real.** `TechStackSection.tsx:24-28,44-77,130-133` — "Live_Logs" with fake timestamps (`git push origin master… SUCCESS`, `terraform apply`), "Active Sessions: 04", "LIVE_METRICS" Uptime 99.9% / Node Load 42% / Latency 24ms, "EVENT_LOG" (`DEPLOY_PROD_SUCCESS 2m ago • cluster-v4`); `Sidebar.tsx:73,111-116` "v2.4.0-stable", "System Online" 75% bar; `Footer.tsx:26` "Status: Online"; `TopNav.tsx:65` "Active"; `FeaturedProjectSection.tsx:19,29` "Released: 2026", "sub-100ms latency"; `projects/dana/page.tsx:53,98` "Production Ready", "42ms avg". None of this is measured. AC: remove, or replace with truthful data (real GitHub activity via API, real project dates), or clearly label as decorative.
  **Status**: Fixed — owner decision (Clarification Q4 = A): Live Logs, Live Metrics, Event Log, Active Sessions, version/online badges, and unverifiable stat claims removed outright, no replacement widget (T017, T019-T022).
- **ISS-043 (P1) Skill percentages contradict the evidence.** `TechStackSection.tsx:9-16` Docker 98%, TypeScript 95%, Linux 92%, Terraform 90%, Kubernetes 85%, PHP 88% — Terraform and Kubernetes appear in **no** project or experience entry; percentages are unverifiable and read as inflated next to a 5-month first job. Options (owner decides): (a) remove percentages and group skills by evidence (used at work / in projects / learning); (b) keep the bar UI but only for tools that appear elsewhere on the site and label the bar "confidence", not "proficiency"; (c) replace Terraform/Kubernetes with tools actually used (Jenkins, Redis, MongoDB, Laravel). AC: every listed skill is backed by at least one project or job on the site; no unexplained numeric claims.
  **Status**: Fixed — owner decision (Clarification Q1 = A): skills section rewritten with no percentages, grouped by evidence, every skill linked to the page that proves it; Terraform/Kubernetes removed (T017).
- **ISS-044 (P2) Missing source links where the page promises them.** `projects/page.tsx:121-125` says "source code repository" but DANA (`projects/dana`) has only a Postman link, DevOps (`projects/devops`) has no link at all; project cards have no repo link. AC: every project page has a GitHub link or an explicit "private/client project" note.
  **Status**: Fixed — every project page has a GitHub link or an explicit private/client-project note (T024-T032).
- **ISS-045 (P3) Hard-coded / boilerplate defaults.** `Footer.tsx:7` "© 2026" hard-coded — use `new Date().getFullYear()`; `README.md` is the unmodified create-next-app boilerplate ("This is a Next.js project bootstrapped with create-next-app…"). AC: dynamic year; README describes the portfolio, how to run it, and the `clean` script from ISS-001.
  **Status**: Fixed — footer year is `new Date().getFullYear()`; README rewritten to describe the actual project (T021, T059).

---

## Files to touch (summary)

- `next.config.ts`, `package.json` (scripts), `tsconfig.json`, `README.md`, `.gitignore` (unchanged), `public/` (remove boilerplate SVGs, add favicon/OG)
- `src/app/layout.tsx`, `src/app/globals.css`, new `src/app/not-found.tsx`, per-page `metadata` exports
- `src/app/page.tsx`, `src/app/projects/page.tsx`, `src/app/experience/page.tsx`, `src/app/code/page.tsx`
- `src/app/projects/{abg,clinc→clinic,dana,devops,e-commerce,invoices,kafka}/page.tsx`
- `src/components/layout/{AppShell,Sidebar,TopNav,Footer}.tsx`
- `src/components/sections/{HeroSection,AboutSection,TechStackSection,FeaturedProjectSection}.tsx`
- `src/components/*.jpg|jpeg|png` → relocate/prune (ISS-032)
- Reuse: `cn()` in `src/lib/utils.ts`; shadcn `badge`/`button`/`card` in `src/components/ui/` are installed but unused — use them instead of the hand-rolled chip/button classes to de-duplicate (ISS-017/019/038).

## Verification (run after implementation)

1. `rm -rf .next && npm run dev` → `curl` all 12 routes = 200; `/about` handled per ISS-006; unknown URL → branded 404.
2. `npx eslint src` → 0 problems; `npx tsc --noEmit` → clean; `npx next build` → 12 routes, no warnings (font, root, image `sizes`, LCP `priority`).
3. Re-run the Playwright sweep with `playwright-cli run-code` (13 routes × {1440×900, 390×844}, full-page screenshots + console) → 0 console **errors**; 0 warnings excluding the React DevTools / HMR / Fast Refresh notices that dev mode always prints. DOM checks: hero rail ∩ headline = ∅ (bounding boxes), headline opacity == 1 after 8 s, every `img` `naturalWidth>0` after `scrollIntoView`, min font-size ≥ 11px at 390px, exactly one `h1` per page, unique `document.title` per route.
4. Mobile drawer: open → brand fully visible; `Escape` closes; `Tab` from hamburger never lands inside the closed drawer.
5. Copy check: `grep -rn "kubarnetes\|nodeJs\|mongoDB\|paymob\|Analytic Service\| \. \|  b+\|desc: \" " src` returns nothing; manual read-through of every string listed in section H.
6. Lighthouse (mobile) on `/` and `/projects/dana`: record a **baseline before** implementation, then require Performance, Accessibility, Best Practices and SEO to all improve, with Accessibility and SEO ≥ 95 (those are deterministic from ISS-026/027/028/034). Don't gate on a fixed Performance number until the baseline is known.
