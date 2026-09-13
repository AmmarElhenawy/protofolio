# Contract: Routes, titles and headings

Every public route MUST satisfy this table. `scripts/audit.mjs` asserts columns 2–4 at runtime; `sitemap.ts` and `TopNav.pageTitles` are typed against the `Route` union (see data-model.md).

| Route | `<title>` (before ` · Ammar Elhenawy` suffix) | Single `<h1>` text | Header label | Stylised sub-label (kept per Q2 = C) |
|-------|-----------------------------------------------|--------------------|--------------|--------------------------------------|
| `/` | `Ammar Elhenawy — Backend & DevOps Engineer` (root default, no suffix) | `Hello, I'm Ammar` | `Home` | `HOME_DASHBOARD` |
| `/projects` | `Projects` | `Projects` | `Projects` | `PROJECT_VAULT_02` |
| `/experience` | `Experience & Training` | `Experience & Training` | `Experience` | `DOMAIN: EXP-RECORD` |
| `/code` | `Code Samples` | `Code Samples` | `Code` | `SOURCE_ARCHIVE` |
| `/projects/abg` | `ABG Social App` | `ABG Social App` | `Project` | `LARAVEL API` |
| `/projects/clinic` | `Clinic & Patient System` | `Clinic & Patient System` | `Project` | `HEALTHCARE MVC` |
| `/projects/dana` | `DANA — Pediatric Health Platform` | `Project: DANA` | `Project` | `NESTJS API` |
| `/projects/devops` | `DevOps Task Suite` | `DevOps Task Suite` | `Project` | `DOMAIN: OPS-TASKS` |
| `/projects/e-commerce` | `E-Commerce API` | `E-Commerce API Platform` | `Project` | `RESTFUL API` |
| `/projects/invoices` | `Invoice ERP System` | `Invoice ERP System` | `Project` | `ERP MODULE` |
| `/projects/kafka` | `Kafka Microservices` | `Kafka Microservices` | `Project` | `MICROSERVICES` |
| *(unknown)* | `Page not found` | `Page not found` | `Not found` | `404` |

Redirects (`next.config.ts`): `/projects/clinc` → `/projects/clinic` (308, permanent).

Removed: `/about` header mapping (FR-035). No route may be referenced from code that is not in this table.

Each route's `metadata.description` is unique, 60–160 characters, and contains no fabricated metric. Share preview: `src/app/opengraph-image.png` (1200×630) + `opengraph-image.alt.txt` applies to all routes.
