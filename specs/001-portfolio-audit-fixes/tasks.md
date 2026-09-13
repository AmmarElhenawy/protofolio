---

description: "Task list for Portfolio Audit Fixes (Phase 1)"
---

# Tasks: Portfolio Audit Fixes (Phase 1)

**Input**: Design documents from `/specs/001-portfolio-audit-fixes/`

**Prerequisites**: plan.md, spec.md, research.md (R-01…R-16), data-model.md, contracts/ (routes.md, ui-components.md, audit-script.md), quickstart.md

**Tests**: No unit-test suite was requested. Verification is the committed Playwright sweep (`scripts/audit.mjs`, contract in `contracts/audit-script.md`) plus lint / type-check / build / Lighthouse, run in the final phase and per-story checkpoints.

**Organization**: Tasks are grouped by user story (US1–US7 from spec.md). Foundational tasks (shared components, asset move, CSS/config) block every story because almost every page file imports them.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies on incomplete tasks)
- **[Story]**: US1…US7 from spec.md
- Paths are repository-relative; the project is a single Next.js app under `src/`

## Path Conventions

- Routes: `src/app/**/page.tsx`; layout chrome: `src/components/layout/`; home sections: `src/components/sections/`; shared UI: `src/components/ui/`; shared types: `src/lib/`; images: `src/assets/images/` (new)

---

## Phase 1: Setup (branch, baseline, verification harness)

**Purpose**: Make the work reversible and measurable before any file changes.

- [X] T001 Create and switch to git branch `001-portfolio-audit-fixes` from `main`; commit the untracked `docs/`, `specs/`, `.specify/`, `.claude/` folders and the pending `src/components/profile.jpeg` / `profile10.jpeg` decision (keep `profile.jpeg` change, delete `profile10.jpeg` per ISS-032) so `git status` is clean
- [X] T002 Record Lighthouse mobile baseline per quickstart.md § 0 into `specs/001-portfolio-audit-fixes/lighthouse-baseline-home.json` and `lighthouse-baseline-dana.json` (run `rm -rf .next && npx next dev -p 3000` first); note the four category scores in a `## Baseline` section appended to `specs/001-portfolio-audit-fixes/quickstart.md`
- [X] T003 [P] Create `scripts/audit.mjs` implementing every assertion in `contracts/audit-script.md` (A1–A10, H1–H3, M1–M4, contrast) as a `playwright-cli run-code` module (`export default async page => {…}`), reading the route table from a `ROUTES` constant that mirrors `contracts/routes.md`; it must throw on the first failing assertion and otherwise print a per-route/viewport table
- [X] T004 [P] Add to `package.json`: `"clean": "rimraf .next"`, `"check": "eslint src && tsc --noEmit"`, `"audit:ui": "playwright-cli run-code --filename=scripts/audit.mjs"`; add `rimraf` as a devDependency (`npm i -D rimraf`)

---

## Phase 2: Foundational (blocking prerequisites)

**Purpose**: Shared types, components, assets and global config that every page file will import. **No user-story work starts until this phase is complete.**

- [X] T005 [P] Create `src/lib/tech.ts` exporting the `Tech` string-literal union and a `TECH` array exactly as listed in data-model.md § Tech (official casing for every technology name)
- [X] T006 [P] Create `src/lib/routes.ts` exporting the `Route` union and a `ROUTES` const (11 public routes) exactly as listed in data-model.md § Route, plus `projectHref(slug)` helper
- [X] T007 [P] Create `src/components/ui/icon.tsx` per `contracts/ui-components.md` § Icon: an `IconName` union (data-model.md § IconName) mapping each name to the corresponding Bootstrap-icon `<path>` data currently pasted inline in the codebase; renders `<svg aria-hidden="true" focusable="false" fill="currentColor" viewBox="0 0 16 16">`, adds a `<span className="sr-only">` sibling when `label` is passed
- [X] T008 [P] Create `src/components/ui/page-heading.tsx` per `contracts/ui-components.md` § PageHeading: renders `eyebrow` badge, `<h1>{title}</h1>`, `tag` as an `aria-hidden` mono sub-label with ≥ 4.5:1 contrast (`text-slate-400` on `#0c0e10`, not `text-slate-600`), optional `intro` paragraph and right-aligned `actions` slot; responsive `flex-col md:flex-row md:items-end`
- [X] T009 Create `src/assets/images/` and move every *used* image there with clean names (research.md R-06): `profile.jpeg→portrait-hero.jpg`, `ME.jpg→portrait-about.jpg`, `dana1.jpeg→dana-team.jpg`, `dana2.jpeg→dana-card.jpg`, `dana3.jpg→dana-hackathon.jpg`, `dana6.jpeg→dana-banner.jpg`, `ABG.jpg→abg-card.jpg`, `ABG_REGISTER2.jpg→abg-banner.jpg`, `darElsokar.jpg→clinic-card.jpg`, `invoices.jpg→invoices-card.jpg`, `kafka.jpg→kafka-card.jpg`, `kafka2.jpeg→kafka-banner.jpg`, `eCommerce.jpg→ecommerce-card.jpg`, `devops2.jpg→devops-card.jpg`, `depi.jpg→devops-banner.jpg`, `devopsDepi.jpg→course-depi.jpg`, `Gemini_Generated_Image_zd0lv3zd0lv3zd0l (1)_11zon.jpg→course-backend.jpg`, `auc.jpg→course-english.jpg`, `mega.jpg→megadev-1.jpg`, `mega4.jpg→megadev-2.jpg`, `marakez2.jpg→marakez-1.jpg`, `marakez.jpg→marakez-2.jpg`; delete the 14 unused files listed in docs/portfolio-audit.md ISS-032 and `src/app/projects/abg/ABG.jpg`; re-encode `portrait-hero.jpg` (656 KB) and `dana-hackathon.jpg` if > 300 KB to ≤ 300 KB at ≤ 1600 px wide; update every import path in `src/` (`grep -rn "components/.*\.\(jpe\?g\|png\)" src`)
- [X] T010 Rewrite `src/app/globals.css` per research.md R-07/R-10/ISS-033: delete both Google-Fonts `@import url(...)` lines; replace literal `'Inter'`/`'Space Grotesk'` in `html`, `body`, `h1–h6`, `.font-headline`, `.font-label`, `.font-body` with `var(--font-inter)` / `var(--font-space-grotesk)`; delete the `.material-symbols-outlined` rule; delete unused utilities `.glitch-overlay`, `.git-line`, `.registry-item`, `.glass-panel`, `.text-glow-tertiary`, keyframes `pulse-dot`, `slide-up`, `fade-in`, `slideLoop` and their `.animate-*` classes; change `.aura-glow` shadow to `rgba(255,141,141,0.25)`; add `@media (prefers-reduced-motion: reduce) { *, ::before, ::after { animation-duration: 0.01ms !important; animation-iteration-count: 1 !important; transition-duration: 0.01ms !important; scroll-behavior: auto !important; } }`; add `:focus-visible { outline: 2px solid #ff8d8d; outline-offset: 2px; }` and a `.sr-only`-safe `.skip-link` rule (visually hidden until `:focus`)
- [X] T011 Update `src/app/layout.tsx`: delete the orphan `<html …></html>` expression at line 5; export `metadata` with `metadataBase: new URL("https://ammarelhenawy.dev")` [owner to confirm domain], `title: { template: "%s · Ammar Elhenawy", default: "Ammar Elhenawy — Backend & DevOps Engineer" }`, an honest `description` (no "architect"/"high-concurrency"), `keywords` without `golang`, `openGraph { type: "website", siteName, locale }`, `twitter { card: "summary_large_image" }`; export `viewport: Viewport = { themeColor: "#0c0e10" }`; keep `next/font` setup
- [X] T012 [P] Update `next.config.ts`: add `turbopack: { root: path.resolve(__dirname) }` and `async redirects() { return [{ source: "/projects/clinc", destination: "/projects/clinic", permanent: true }] }` (research.md R-04, R-11)
- [X] T013 [P] Add `src/app/robots.ts` (allow all, `sitemap` URL) and `src/app/sitemap.ts` iterating `ROUTES` from `src/lib/routes.ts`
- [X] T014 [P] Add share/favicon assets: `src/app/opengraph-image.png` (1200×630, dark background, name + title) with `src/app/opengraph-image.alt.txt`; replace `src/app/favicon.ico` and add `src/app/icon.png` (512×512) + `src/app/apple-icon.png` (180×180) using the site's primary colour; delete `public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/vercel.svg`, `public/window.svg`
- [X] T015 Run `npx eslint src --fix` then `npm run check` and `npx next build`; fix any residual import errors from T009; commit "foundation: shared ui, assets, config"

**Checkpoint**: site builds with new assets/components available; zero lint errors from `prefer-const`; no font double-load; no workspace-root warning.

---

## Phase 3: User Story 1 — A recruiter's first impression is clean and credible (Priority: P1) 🎯 MVP

**Goal**: Home page hero has no overlap and a stable headline; no fabricated widgets or unverifiable skill bars anywhere in the shell or home page.

**Independent Test**: Load `/` at 1280/1440/1920 — social rail and "Hello, I'm Ammar" boxes disjoint; headline opacity 1 after 10 s; reduced-motion shows no animation; grep the DOM for `Uptime|Active Sessions|v2.4.0|System Online|Status: Online|%` → 0 hits; every skill chip links to a page that names it. (`scripts/audit.mjs` H1–H3, A9, A10.)

- [X] T016 [US1] Fix `src/components/sections/HeroSection.tsx`: (a) move the social rail out of the text column — render it as the first flex item of the hero row (`hidden md:flex flex-col gap-4 self-center mr-6 lg:mr-10`) instead of `absolute left-…`, so it can never intersect text; (b) replace `animate-[slideLoop_…_infinite]` on the specialization `<h2>` with `animate-[fadeUp_0.8s_ease-out_forwards]`; (c) replace every `delay-200` with `[animation-delay:200ms]`; (d) change the desktop "HELLO, I'M AMMAR" `<h2>` to `<h1>` and the mobile duplicate to `<p aria-hidden>` so exactly one `<h1>` exists (contracts/routes.md); (e) portrait `<Image>`: drop `unoptimized`, add `sizes="(max-width: 640px) 208px, (max-width: 1024px) 256px, 384px"`, `loading="eager"`, `fetchPriority="high"`; (f) social `<a>`s use `<Icon name="github" label="GitHub profile" />` / `<Icon name="linkedin" label="LinkedIn profile" />` and drop the `material-symbols-outlined` wrappers
- [X] T017 [US1] Rewrite `src/components/sections/TechStackSection.tsx` as a skills-by-evidence section: delete Live_Logs, LIVE_METRICS, EVENT_LOG blocks, the `events` array and "Active Sessions: 04"; replace `skills` with `skillGroups` typed per data-model.md § SkillGroup using the initial mapping there (Terraform/Kubernetes removed); render three columns titled "Used at work" / "Used in projects" / "Learning", each skill as a `<Link href>` chip using shadcn `Badge` from `src/components/ui/badge.tsx`; no `%`, no progress bars; section `<h2>` "Skills"
- [X] T018 [P] [US1] Update `src/components/sections/FeaturedProjectSection.tsx`: remove "Released: 2026" and "sub-100ms latency"; image slot → `relative min-h-[220px] sm:min-h-[300px]` with `<Image src={danaTeam} alt="The DANA team at the Delta Hackathon 2025 prize ceremony" fill sizes="(max-width: 1024px) 100vw, 40vw" className="object-cover" />` (drop `unoptimized`, `opacity-80`, `mix-blend-screen`); tag chips `text-[8px]` → `text-[11px]`
- [X] T019 [P] [US1] Update `src/components/layout/Sidebar.tsx`: remove the "System Online"/`v2.4.0-stable` block; brand `<h1>` → `<p>`; nav icons via `<Icon>` (no `material-symbols-outlined` span, no `fontVariationSettings`); version label removed (a11y/mobile work continues in US3/US5)
- [X] T020 [P] [US1] Update `src/components/layout/TopNav.tsx`: remove the "Active" badge and its `sensors` icon; delete the `"/about"` entry from `pageTitles`; change titles to nav labels per contracts/routes.md (`Home`, `Projects`, `Experience`, `Code`, `Project` for `/projects/*`, `Not found` fallback); type `pageTitles` as `Partial<Record<Route, string>>` from `src/lib/routes.ts`
- [X] T021 [P] [US1] Update `src/components/layout/Footer.tsx`: remove "Status: Online"; year → `{new Date().getFullYear()}`; external links become `<a href target="_blank" rel="noopener noreferrer">`
- [X] T022 [P] [US1] Update `src/app/projects/dana/page.tsx` header only: remove "Production Ready" badge text (replace with "NestJS API" per contracts/routes.md) and change the "Response Time / 42ms avg" stat to a verifiable one (`{ label: "Real-time", value: "Socket.io" }`)
- [X] T023 [US1] Run `npm run check && npx next build`, then `npm run audit:ui` and confirm H1, H2, H3, A9, A10 pass on `/`; commit "US1: credible hero and shell"

**Checkpoint**: Home page first screen is correct and honest; MVP demoable.

---

## Phase 4: User Story 2 — Every project and experience page reads as professionally written (Priority: P1)

**Goal**: All copy is correctly spelled and cased, lists are lists, labels are accurate, cross-page facts agree, identifiers follow one scheme, every project has a repo link or a private note, and primary headings are plain English with the stylised tag as sub-label.

**Independent Test**: `grep -rn "kubarnetes\|nodeJs\|mongoDB\|paymob\|Analytic Service\| \. \|  b+\|desc: \" \|Legacy_Support\|Priority_A1" src` → empty; open each page and check the routes-contract `<h1>`/sub-label; compare "positions", "programs", "experience since" across `/` and `/experience`. (`scripts/audit.mjs` A2, A3, A9.)

- [X] T024 [US2] Refactor `src/app/projects/page.tsx` data to the `Project` shape in data-model.md: `slug` (derive `href`), `category` replacing `status` (`"Laravel MVC" | "REST API" | "Microservices" | "DevOps" | "NestJS API"`), `stack: Tech[]` (fixes `nodeJs`/`mongoDB`/`kubarnetes` → `Node.js`/`MongoDB`; drop Kubernetes, it is not covered), `name: "devops"` → `"DevOps Task Suite"`, `href: "/projects/clinc"` → `slug: "clinic"`, `repo`/`privateNote`/`docs`, DANA `icon: "activity"`; delete the never-rendered `tag` field, the unused `book` icon and `APG_IMG_REG` import; replace header with `<PageHeading title="Projects" tag="PROJECT_VAULT_02" intro="…" />` (rewrite intro without "mission-critical"/"infrastructure-as-code"); add `export const metadata = { title: "Projects", description: "…" }`
- [X] T025 [US2] Rename directory `src/app/projects/clinc` → `src/app/projects/clinic` (`git mv`); verify the redirect from T012 with `curl -I /projects/clinc` → 308
- [X] T026 [P] [US2] Fix copy in `src/app/projects/abg/page.tsx`: features paragraph → `<ul>` of real Laravel features (remove `ChatGateway`, `MailerModule`, the stray ` . ` and trailing space; "real-time pusher" → "Real-time notifications (Pusher)"); resolve the JWT/Sanctum contradiction (use "Sanctum token auth" everywhere); resolve real-time contradiction (hero stat "Real-time: Pusher" only if implemented, else "Real-time ready: Laravel Echo"); `value: "Pusher "` trailing space; replace header with `<PageHeading title="ABG Social App" eyebrow="Laravel API" tag="ABG-0001" actions={…} />`; "View Task Requirement" link gets `target="_blank" rel="noopener noreferrer"`; add `metadata`
- [X] T027 [P] [US2] Fix copy in `src/app/projects/dana/page.tsx`: "Core Features" paragraph → `<ul>` (one `<li>` per feature); `paymob` → `Paymob` (both occurrences); `"Redis-Caching"` → `"Redis Caching"`; `desc: " Scalable design…"` leading space; schematic label `nest-cli.json // schematic_view` → `module graph`; box label "Technical Constraint" → "Solution"; remove the unexplained "Real-time Telemetry"/"Predictive Analysis" checkmarks or replace with features that exist ("Real-time chat", "Growth tracking"); "Demo" button → "API Docs"; rewrite the achievement paragraph in portfolio voice without the raw `"…"` quote and keep the 🏆 inline (`whitespace-nowrap` span); normalise `-&gt;` spacing in the schematic rows; add a `repo` link or a "Private project — API documentation only" note in the header actions and bottom links; add `metadata`
- [X] T028 [P] [US2] Fix copy in `src/app/projects/kafka/page.tsx`: `Analytic Service` → `Analytics Service` (both); `<PageHeading title="Kafka Microservices" eyebrow="Microservices" tag="KFK-0006" />`; add `metadata`
- [X] T029 [P] [US2] Fix copy in `src/app/projects/devops/page.tsx`: stat "Orchestration: Portainer" → "Management UI: Portainer"; mention the DEPI programme in the intro (consistency with `/experience`); add a repo link or "Training tasks — no public repository" note in header actions; task-ID labels `text-[8px]` → `text-[11px]`; `<PageHeading title="DevOps Task Suite" eyebrow="DevOps" tag="DOMAIN: OPS-TASKS" />`; add `metadata`
- [X] T030 [P] [US2] Fix `src/app/projects/clinic/page.tsx`: `<PageHeading title="Clinic & Patient System" eyebrow="Healthcare MVC" tag="CLN-0005" />`; remove the 20+ unused icon constants (use `<Icon>`); add `metadata`
- [X] T031 [P] [US2] Fix `src/app/projects/e-commerce/page.tsx`: delete `import { error } from "console"`; remove unused icon constants; `<PageHeading title="E-Commerce API Platform" eyebrow="RESTful API" tag="ECO-0004" />`; add `metadata`
- [X] T032 [P] [US2] Fix `src/app/projects/invoices/page.tsx`: `http://github.com/…` → `https://` (both); escape the `'local'` quotes (`&apos;`) or move the string to data; `<PageHeading title="Invoice ERP System" eyebrow="ERP Module" tag="INV-0003" />`; add `metadata`
- [X] T033 [P] [US2] Fix `src/app/code/page.tsx`: `<PageHeading title="Code Samples" tag="SOURCE_ARCHIVE" intro="Real code snippets from personal and training projects." />`; add `metadata`
- [X] T034 [US2] Fix `src/app/experience/page.tsx` copy/consistency: `type` badge derived from data (confirm MegaDev "Full-time" with owner, else "Contract"); stats banner values computed from array lengths (`${experiences.length} positions`, `${courses.length} programs`) and "Stack: Laravel · NestJS · Docker"; `<PageHeading title="Experience & Training" eyebrow="Career" tag="DOMAIN: EXP-RECORD" intro="…" />`; add `metadata` (structural fixes continue in US3/US4)
- [X] T035 [US2] Fix `src/components/sections/AboutSection.tsx` copy: `"FCI - senior student -  b+ average"` → `"Faculty of Computers & Information — senior student, B+ GPA"`; `experience: "2+ Years"` → value derived from the earliest experience date ("Since 2024"); rename the component `AboutPage` → `AboutSection`, remove the unused `AppShell` import; make `trainings` import the shared `courses` array from `src/app/experience/page.tsx` (move that array to `src/lib/content/training.ts` and import in both places) so counts cannot drift
- [X] T036 [US2] Run `npm run check`, `npx next build`, `npm run audit:ui` (A2, A3, A9 on all routes) and the grep from quickstart.md § 3; commit "US2: copy, consistency, headings"

**Checkpoint**: Every page is text-clean, consistently labelled, and has a plain-English `<h1>` with its tag.

---

## Phase 5: User Story 3 — A phone visitor can navigate and read comfortably (Priority: P2)

**Goal**: Mobile drawer shows the full brand, closes by Escape/outside tap/close button, exposes ARIA state and is inert when closed; no text under 11 px on phones; nothing truncated; Career Timeline removed; decorative blobs within viewport.

**Independent Test**: At 390×844 run `scripts/audit.mjs` M1–M4, A7, A8; visually confirm the Experience page ends after "Courses & Training".

- [X] T037 [US3] Update `src/components/layout/AppShell.tsx`: add `useEffect` keydown listener closing the drawer on `Escape`; add `<a href="#main" className="skip-link">Skip to content</a>` as the first child; `<main id="main" …>`; pass `open`/`onToggle` to `TopNav` and `open`/`onClose` to `Sidebar` per contracts/ui-components.md
- [X] T038 [US3] Update `src/components/layout/Sidebar.tsx`: props `{ open, onClose }`; `<aside id="site-nav" aria-label="Main navigation" inert={!open && !isDesktop}>` where `isDesktop` comes from a `matchMedia("(min-width: 1024px)")` hook; add a close `<button aria-label="Close menu" className="lg:hidden …"><Icon name="x" /></button>` at the top; add `pt-20 lg:pt-8` so the brand clears the 64 px fixed header on mobile; keep `translate-x` transition
- [X] T039 [US3] Update `src/components/layout/TopNav.tsx`: props `{ open, onToggle }`; hamburger gets `aria-expanded={open}` `aria-controls="site-nav"`; remove the `any` type; `<Icon name="menu" />`
- [X] T040 [P] [US3] Fix small text and truncation in `src/components/sections/AboutSection.tsx`: remove `truncate` from training names and quick-fact values (allow wrap); `text-[9px] sm:text-[10px]` → `text-[11px]`; contact links get `aria-label`s
- [X] T041 [P] [US3] Fix small text in `src/components/sections/HeroSection.tsx` (`text-[9px]` HUD label → `text-[11px]`) and shrink the mobile ambient blob to `w-[min(400px,100vw)]`
- [X] T042 [P] [US3] Fix `src/app/experience/page.tsx` structure: delete the "Career Timeline" `<section>` and its inline array; delete the commented-out `timeline.map` block and the `// content` comment; remove the empty `branch` field and its label markup; remove the duplicate `key={exp.company}` on the inner div; add `mt-6` before "Technologies Used"; replace `pb-16` on the last entry with `pb-0` (`last:pb-0`)
- [X] T043 [P] [US3] Fix small text in `src/app/projects/devops/page.tsx` (already `text-[11px]` from T029 — verify) and any remaining `text-[8px]`/`text-[9px]`/`text-[10px]` on phones across `src/app/**/page.tsx` and `src/components/**` (`grep -rn "text-\[\(8\|9\|10\)px\]" src`) → minimum `text-[11px]` on mobile (desktop labels may use `md:text-[10px]`)
- [X] T044 [US3] Run `npm run audit:ui` at 390 px (M1–M4, A7, A8) and commit "US3: mobile drawer, text size, timeline"

**Checkpoint**: Phone experience passes every mobile assertion.

---

## Phase 6: User Story 4 — Images look intentional on every screen (Priority: P2)

**Goal**: All framed images use `fill` + `sizes` + `object-cover`; no `unoptimized`; first image eager with high fetch priority; banners are `<Image>` under a dark overlay; card buttons align; grids balanced; alt text truthful.

**Independent Test**: Screenshot `/projects`, `/`, `/experience`, each project page at 390/768/1440 — no empty band under thumbnails, buttons on one baseline, overlaid stats ≥ 4.5:1; `scripts/audit.mjs` A4 (no `sizes`/LCP warnings) and A6.

- [X] T045 [US4] Fix thumbnails in `src/app/projects/page.tsx`: card image slot `relative aspect-video` with `<Image fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover" />` (drop `unoptimized`), first card `loading="eager" fetchPriority="high"`; make each card `flex flex-col` with the button container `mt-auto` so buttons align; `line-clamp-2` removed (summaries ≤ 140 chars per data-model); featured DANA card `md:col-span-2 lg:col-span-3`; DANA image `fill sizes="(max-width: 768px) 100vw, 50vw"`
- [X] T046 [P] [US4] Fix `src/components/sections/AboutSection.tsx` portrait: `relative aspect-square` + `<Image fill sizes="(max-width: 1024px) 100vw, 33vw" className="object-cover" loading="eager" fetchPriority="high" />`, drop `unoptimized`
- [X] T047 [P] [US4] Fix `src/app/experience/page.tsx` images: work-experience images already `fill` → add `sizes="(max-width: 1024px) 50vw, 15vw"`; course images → slot `relative aspect-[3/1] sm:aspect-[5/2]` with `fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover"`; style the "No Image" fallback tile as a dark gradient with the course icon instead of raw text
- [X] T048 [P] [US4] Fix banners in `src/app/projects/abg/page.tsx`, `src/app/projects/devops/page.tsx`, `src/app/projects/kafka/page.tsx`, `src/app/projects/dana/page.tsx`: replace inline `style={{ backgroundImage: url(...) }}` / grayscale `<Image>` with `<Image src={banner} alt="…" fill sizes="100vw" className="object-cover" loading="eager" fetchPriority="high" />` followed by `<div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/80 to-surface/40" />` so the stat text meets 4.5:1; DANA hackathon image → `relative aspect-[4/3] md:aspect-auto md:h-full` with `fill sizes="(max-width: 768px) 100vw, 50vw"`
- [X] T049 [P] [US4] Balance feature grids: in each of `src/app/projects/{abg,clinic,dana,devops,e-commerce,invoices,kafka}/page.tsx` set the highlights grid to `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` with no `md:col-span-2` spans (6 items → 2 rows of 3; `clinic` 5 items → add a sixth real highlight, e.g. "Custom Middleware", or use `lg:grid-cols-5`); remove the `span`/`border` fields from the `features` arrays; in `src/app/projects/kafka/page.tsx` change the schematic column to `lg:col-span-7` (drop `lg:col-span-12 xl:col-span-7`)
- [X] T050 [US4] Run `npx next dev` and confirm zero image warnings in the console on every route (`npm run audit:ui` A4, A6); commit "US4: images fill, banners, grids"

**Checkpoint**: No half-filled frames, no unreadable banners, no image warnings.

---

## Phase 7: User Story 5 — Assistive-technology and keyboard users can use the site (Priority: P2)

**Goal**: One `<h1>` per page (done via PageHeading), every icon `aria-hidden` or labelled, no dead icon-font class, contrast ≥ 4.5:1, visible focus ring, skip link.

**Independent Test**: Lighthouse accessibility ≥ 0.95 on `/` and `/projects/dana`; `grep -rn "material-symbols" src` → empty; Tab from load → "Skip to content" visible; `scripts/audit.mjs` contrast pass.

- [X] T051 [US5] Replace every remaining inline `<svg>` and `material-symbols-outlined` wrapper with `<Icon name=… />` across `src/app/projects/*/page.tsx`, `src/app/experience/page.tsx`, `src/components/sections/AboutSection.tsx`, `src/components/sections/TechStackSection.tsx` (delete the now-unused `const … = <svg…>` constants; `grep -rn "material-symbols\|<svg" src` → only `src/components/ui/icon.tsx`)
- [X] T052 [P] [US5] Raise low-contrast text: replace `text-slate-600` used for readable labels with `text-slate-400`, and `text-outline` (#747578) text on dark surfaces with `text-on-surface-variant` (#aaabad), in `src/components/layout/TopNav.tsx`, `src/components/layout/Sidebar.tsx`, `src/app/projects/*/page.tsx` (PROJECT_ID / schematic notes), `src/app/experience/page.tsx`, `src/components/sections/*.tsx`; keep `text-slate-600` only for purely decorative separators (`·`)
- [X] T053 [P] [US5] Ensure every link/button has an accessible name: audit `src/components/sections/AboutSection.tsx` contact links, `src/components/sections/HeroSection.tsx` social links (done in T016), project-page action buttons (icon + text already), `src/components/layout/TopNav.tsx` hamburger (`aria-label="Open menu"` / `"Close menu"` toggled by `open`)
- [X] T054 [US5] Run Lighthouse accessibility on `/` and `/projects/dana` (quickstart.md § 4) and `npm run audit:ui` contrast; fix any reported item; commit "US5: icons, contrast, focus"

**Checkpoint**: Accessibility ≥ 95 with zero name/contrast/heading audits failing.

---

## Phase 8: User Story 6 — Pages are correctly titled, shareable and never dead-end (Priority: P2)

**Goal**: Unique title + description per route, OG/Twitter preview, custom 404, no dangling header mapping, real favicon, `theme-color`.

**Independent Test**: `scripts/audit.mjs` A1, A2; `curl -s -o /dev/null -w "%{http_code}" /about` → 404 with branded page; paste a project URL into a link-preview tool → page title + image.

- [X] T055 [US6] Create `src/app/not-found.tsx` rendering `<AppShell>` + `<PageHeading title="Page not found" tag="404" intro="The address you followed does not exist." />` + a `Link` to `/` ("Back to home") styled like the hero button; export `metadata = { title: "Page not found" }`
- [X] T056 [P] [US6] Verify each `page.tsx` under `src/app/` exports `metadata` with the exact `title` from `contracts/routes.md` and a unique 60–160-char `description` (added in T024–T034; fill any gap, e.g. `src/app/page.tsx` needs none — root default applies)
- [X] T057 [P] [US6] Verify T013/T014 outputs: `curl /robots.txt`, `curl /sitemap.xml` list the 11 public routes; `curl -I /opengraph-image` returns `image/png`; `<link rel="icon">` points to the new icon
- [X] T058 [US6] Run `npm run audit:ui` A1/A2 and `npx next build` (check for metadata warnings); commit "US6: metadata, 404, sharing"

**Checkpoint**: Every route titled and shareable; unknown URLs branded.

---

## Phase 9: User Story 7 — The owner can maintain the site without noise (Priority: P3)

**Goal**: Zero lint/type/build warnings; README describes the project; no unused assets/styles/data; clean working tree.

**Independent Test**: quickstart.md § 1 and § 5 all produce empty/zero output; `git status --short` empty.

- [X] T059 [US7] Rewrite `README.md`: what the site is, stack (Next 16 / React 19 / Tailwind 4), `npm run dev|build|start|lint|check|clean|audit:ui`, the stale-`.next` note (ISS-001), where content lives (`src/app/**`, `src/lib/content/`, `src/assets/images/`), how to run the Playwright audit
- [X] T060 [P] [US7] Delete dead code: unused icon constants remaining anywhere (`npx eslint src` warnings → 0), the `dimond` misspelling (rename to `xDiamond` icon), commented-out buttons in `src/app/projects/page.tsx` (SOURCE/DOCS/Task_Manager blocks) and `src/app/projects/dana/page.tsx` ("Explore Project" button)
- [X] T061 [P] [US7] Confirm assets: `for f in src/assets/images/*; do grep -rq "$(basename "$f")" src --include=*.tsx || echo UNUSED $f; done` → empty; `find src/assets/images -size +300k` → empty; `ls src/components/*.{jpg,jpeg,png}` → none
- [X] T062 [US7] Run `npm run clean && npm run check && npx next build` → 0 errors, 0 warnings (including no "inferred your workspace root"); `git status --short` → empty after commit "US7: maintainability"

**Checkpoint**: Owner tooling is silent and documented.

---

## Phase 10: Polish & Cross-Cutting Verification

**Purpose**: Prove SC-001…SC-011 end-to-end and close the audit.

- [X] T063 Run the full `quickstart.md` §1–§6 sequence; capture `lighthouse-after-home.json` / `lighthouse-after-dana.json` in `specs/001-portfolio-audit-fixes/` and confirm Performance & Best Practices ≥ baseline, Accessibility & SEO ≥ 0.95
- [X] T064 [P] Owner visual review per quickstart.md § 7 at 1440 and 390 px; record sign-off (date + initials) at the bottom of `specs/001-portfolio-audit-fixes/quickstart.md`
- [X] T065 [P] Annotate every ISS-001…ISS-045 line in `docs/portfolio-audit.md` with `✔ fixed (T0xx)` or `— owner decision: …` (ISS-017/020/024/041/043 reference the clarification session)
- [ ] T066 Mark `specs/001-portfolio-audit-fixes/checklists/requirements.md` reviewed; open a pull request `001-portfolio-audit-fixes → main` whose description links spec.md, lists the 11 success criteria with their measured values, and ends with the session attribution lines

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: none — start immediately (T002 must precede any source change)
- **Foundational (Phase 2)**: after Setup — **blocks all stories** (every page imports `Icon`, `PageHeading`, `tech.ts`, `routes.ts`, moved images; `globals.css`/`layout.tsx` affect every route)
- **US1 (Phase 3)**: after Phase 2 — MVP
- **US2 (Phase 4)**: after Phase 2; touches the same page files as US4/US5, so run US2 before US4/US5 to avoid merge conflicts if done by one person
- **US3 (Phase 5)**: after Phase 2; depends on T019/T020 (Sidebar/TopNav widget removal) only for file-conflict reasons
- **US4 (Phase 6)**: after US2 (same project-page files)
- **US5 (Phase 7)**: after US4 (T051 removes the last inline SVGs from files US2/US4 edited)
- **US6 (Phase 8)**: after US2 (metadata exports added there); independent of US3–US5
- **US7 (Phase 9)**: after all other stories (lint zero requires every dead constant gone)
- **Polish (Phase 10)**: last

### User Story Dependencies

- US1 → none (independently testable on `/`)
- US2 → none functionally; sequencing recommendation above
- US3 → none functionally
- US4 → US2 (file overlap only)
- US5 → US4 (file overlap only)
- US6 → US2 (metadata exports)
- US7 → all

### Parallel Opportunities

- Phase 1: T003 ∥ T004
- Phase 2: T005 ∥ T006 ∥ T007 ∥ T008; then T009 (imports) → T010/T011 sequential; T012 ∥ T013 ∥ T014
- US1: T018 ∥ T019 ∥ T020 ∥ T021 ∥ T022 after T016/T017
- US2: T026 ∥ T027 ∥ T028 ∥ T029 ∥ T030 ∥ T031 ∥ T032 ∥ T033 (one file each) after T024/T025
- US3: T040 ∥ T041 ∥ T042 ∥ T043 after T037–T039
- US4: T046 ∥ T047 ∥ T048 ∥ T049 after T045
- US5: T052 ∥ T053 after T051
- US6: T056 ∥ T057 after T055
- US7: T060 ∥ T061 after T059

---

## Parallel Example: User Story 2

```bash
# After T024 and T025 land, fan out one task per project page:
Task: "T026 Fix copy in src/app/projects/abg/page.tsx"
Task: "T027 Fix copy in src/app/projects/dana/page.tsx"
Task: "T028 Fix copy in src/app/projects/kafka/page.tsx"
Task: "T029 Fix copy in src/app/projects/devops/page.tsx"
Task: "T030 Fix src/app/projects/clinic/page.tsx"
Task: "T031 Fix src/app/projects/e-commerce/page.tsx"
Task: "T032 Fix src/app/projects/invoices/page.tsx"
Task: "T033 Fix src/app/code/page.tsx"
```

---

## Implementation Strategy

### MVP First (User Story 1 only)

1. Phase 1 (branch, baseline, audit script) → Phase 2 (foundation)
2. Phase 3 (US1) → run `npm run audit:ui` on `/` → demo: honest, non-overlapping home page

### Incremental Delivery

1. + US2 → every page text-clean with plain headings → demo
2. + US3 → phone drawer/text → demo on a phone
3. + US4 → images → demo
4. + US5, US6 → a11y + metadata → Lighthouse
5. + US7 → silent tooling → PR

### Single-developer order

Follow phases 1 → 10 in sequence; within a phase, do the non-[P] tasks first, then the [P] tasks in any order; commit at each checkpoint.

---

## Notes

- Every task cites the exact file(s); FR/ISS traceability is in plan.md § File map and docs/portfolio-audit.md
- `[P]` tasks touch disjoint files; tasks without `[P]` either touch a shared file or depend on an earlier task in the same phase
- Two owner confirmations are embedded: the public domain for `metadataBase` (T011) and the MegaDev employment type (T034) — proceed with the stated defaults if unanswered
- Do not run `eslint --fix` after T015 blindly on hand-edited files; review diffs
- 66 tasks total
