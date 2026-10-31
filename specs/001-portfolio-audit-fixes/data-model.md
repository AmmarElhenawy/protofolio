# Data Model: Portfolio Audit Fixes (Phase 1)

The site has no database; "data" is the set of typed inline arrays that drive each page. This document fixes the shapes those arrays must have after Phase 1 so copy fixes, link rules and rendering rules are enforced by type, not by review.

## PageMeta (every `page.tsx` export)

| Field | Type | Rule |
|-------|------|------|
| `title` | `string` | Short page name, plain English, unique across routes (root layout template appends ` · Ammar Elhenawy`) |
| `description` | `string` | 60–160 chars, page-specific, no unverifiable claims |

Root layout additionally sets `metadataBase`, `openGraph { type, siteName, images }`, `twitter { card }`, `title.default`, and `viewport.themeColor = "#0c0e10"`.

## Project (`src/app/projects/page.tsx`)

| Field | Type | Rule |
|-------|------|------|
| `slug` | `"abg" \| "clinic" \| "invoices" \| "kafka" \| "e-commerce" \| "devops" \| "dana"` | Folder name under `src/app/projects/`; `href` is derived (`/projects/${slug}`) — no free-text hrefs |
| `name` | `string` | Title Case; official brand casing |
| `summary` | `string` | ≤ 140 chars so it never needs truncation at 2 lines |
| `stack` | `Tech[]` | Values from the `Tech` union below (guarantees casing) |
| `category` | `"Laravel MVC" \| "REST API" \| "Microservices" \| "DevOps" \| "NestJS API"` | Replaces the mixed `BE_00x`/`Legacy_Support`/`Priority_A1` badges — one scheme |
| `image` | `StaticImageData` | From `src/assets/images/` |
| `icon` | `IconName` | Must match subject (medical → `activity`, commerce → `cart`, …) |
| `featured` | `boolean` | Only DANA `true` |
| `repo` | `string \| null` | `https://` URL or `null` (then `privateNote` required) |
| `privateNote` | `string?` | Required when `repo === null`; e.g. "Client project — source not public" |
| `docs` | `string?` | Postman/API docs URL |

`tag` field (never rendered) is **removed**.

## ProjectPage content (each `projects/*/page.tsx`)

| Block | Type | Rule |
|-------|------|------|
| `heading` | `{ title: string; tag: string; eyebrow: string }` | `PageHeading` props; `title` plain English |
| `id` | `string` | Same scheme as `Project.category`; no fake IDs like `DANA-0922` unless the scheme is applied everywhere |
| `stats` | `{ label; value }[3]` | Labels accurate (no "Orchestration: Portainer") |
| `problem`, `solution` | `string` | Box labels must be "Problem" / "Solution" (no "Technical Constraint" holding a solution) |
| `features` | `string[]` | Rendered as `<ul>`; never joined into a paragraph |
| `highlights` | `Feature[]` | `{ icon: IconName; title; desc; tags: string[]; wide?: boolean }`; count and `wide` flags must fill the grid (6 items → 2 wide + 4 narrow in a 4-col grid; 5 items → 1 wide + 4 narrow, or switch to 3-col) |
| `architecture` | `{ title; intro; items: { n; title; desc }[]; schematicLabel; rows: { name; note }[] }` | `desc` trimmed; schematic label describes content |
| `links` | `{ label; value; href; kind: "repo" \| "docs" \| "task" }[]` | External → `https`, `target=_blank`, `rel="noopener noreferrer"` |
| `banner` | `StaticImageData` | Rendered via `<Image fill sizes="100vw">` under a `bg-gradient-to-t from-surface via-surface/70` overlay |

## Experience (`src/app/experience/page.tsx`)

| Field | Type | Rule |
|-------|------|------|
| `type` | `"work" \| "internship"` | Badge text derived: "Full-time" / "Internship" — value must match reality (owner confirms MegaDev = full-time) |
| `role`, `company`, `companyType`, `location` | `string` | |
| `period` | `{ from: "YYYY-MM"; to: "YYYY-MM" \| "present" }` | Rendered "June 2025 – November 2025"; stats ("N positions") computed from array length, not hard-coded |
| `highlights` | `string[]` | |
| `tags` | `Tech[]` | |
| `images` | `StaticImageData[]` | Each rendered `fill` + `sizes` |

`branch` field (always empty) is **removed**; the `timeline` array and the Career Timeline section are **removed**.

## Training (`experience/page.tsx` and `AboutSection.tsx` share one source)

| Field | Type | Rule |
|-------|------|------|
| `title`, `provider` | `string` | "FCI" spelled out once: "Faculty of Computers & Information — senior student, B+ GPA" |
| `status` | `"Current" \| "Completed"` | |
| `desc` | `string` | |
| `tags` | `string[]` | |
| `image` | `StaticImageData?` | `fill` + `sizes`; fallback tile styled, not raw "No Image" text |

The About page's `trainings` list is derived from this same array so the "3 Programs" vs 4-items mismatch cannot recur.

## Profile (`AboutSection.tsx`)

| Field | Rule |
|-------|------|
| `experience` | Derived: earliest `Experience.period.from` → now, rendered honestly (e.g. "Since 2024") — not "2+ Years" |
| `status` | "Open to opportunities" |
| `links` | `{ label; href; icon; aria }[]` — mail, GitHub, LinkedIn, CV; each with `aria-label` |

## SkillGroup (`TechStackSection.tsx`)

| Field | Type | Rule |
|-------|------|------|
| `group` | `"Used at work" \| "Used in projects" \| "Learning"` | Exactly these three, in this order |
| `skills` | `{ name: Tech; href: Route }[]` | `href` must be a page on which `name` appears; no `proficiency` field exists |

Initial mapping: Used at work — NestJS, Express.js, Prisma, Node.js, Laravel, PHP, SQL Server, Power BI (→ `/experience`); Used in projects — Docker, Docker Compose, Jenkins, Kafka, Redis, MongoDB, MySQL, Socket.io, Pusher, TypeScript, Linux (→ respective `/projects/*`); Learning — CI/CD & DevOps (DEPI) (→ `/experience`). Terraform and Kubernetes are removed.

## Tech (shared union, `src/lib/tech.ts`)

`"TypeScript" | "JavaScript" | "PHP" | "Node.js" | "NestJS" | "Express.js" | "Laravel" | "Prisma" | "MongoDB" | "MySQL" | "SQL Server" | "Redis" | "Kafka" | "Docker" | "Docker Compose" | "Jenkins" | "Portainer" | "Nginx" | "MariaDB" | "Linux" | "Socket.io" | "Pusher" | "JWT" | "Sanctum" | "Blade" | "Power BI" | "Excel" | "Paymob" | "Cloudinary"`

A single source of truth for casing makes ISS-036 unrepeatable.

## IconName (`src/components/ui/icon.tsx`)

Union of the Bootstrap-icon shapes currently pasted inline (`github`, `linkedin`, `terminal`, `code`, `home`, `history`, `building`, `translate`, `file-code`, `people`, `plus-square`, `receipt`, `columns-gap`, `cart`, `terminal-fill`, `shield`, `lightning`, `cloud-upload`, `chat`, `cash-stack`, `envelope`, `book`, `code-square`, `check-all`, `database`, `folder`, `download`, `patch-check`, `palette`, `speedometer`, `bar-graph`, `activity`, `terminal-split`, `reception`, `archive`, `asterisk`, `briefcase`, `person`, `x-diamond`, `arrow-right`, `menu`, `x`). Each renders `<svg aria-hidden="true" focusable="false">`.

## Route (shared union, `src/lib/routes.ts`)

`"/" | "/projects" | "/experience" | "/code" | "/projects/abg" | "/projects/clinic" | "/projects/dana" | "/projects/devops" | "/projects/e-commerce" | "/projects/invoices" | "/projects/kafka"` — used by `Sidebar`, `TopNav.pageTitles`, `SkillGroup.href`, `sitemap.ts`, so a dangling `/about` mapping is a type error.

## State transitions

Only one piece of UI state exists: the mobile drawer `open: boolean` in `AppShell`. Transitions: hamburger click → toggle; overlay click, Escape key, close button, nav-link click → `false`. When `false` on `< lg`, the `<aside>` has `inert`.
