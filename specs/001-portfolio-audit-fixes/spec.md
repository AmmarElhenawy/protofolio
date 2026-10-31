# Feature Specification: Portfolio Audit Fixes (Phase 1)

**Feature Branch**: `001-portfolio-audit-fixes`

**Created**: 2026-09-13

**Status**: Draft

**Input**: User description: "docs/portfolio-audit.md - create a specification for phase 1"

**Source audit**: `docs/portfolio-audit.md` — 45 findings (ISS-001 … ISS-045) gathered by a browser sweep of every page at desktop and phone sizes, plus lint/type/build checks and a read-through of all visible text. Issue IDs below are traceability references to that document; this specification describes the *outcome* each fix must deliver, not how to implement it.

## Overview

The portfolio site is the owner's primary self-presentation to recruiters and hiring managers. The audit found defects that undermine that goal in four ways: (1) the first screen a visitor sees has a layout collision and a headline that periodically vanishes; (2) visible text contains typos, broken sentences, contradictory claims and fabricated "live" statistics that damage credibility; (3) images, small text and the mobile menu behave poorly on phones and for assistive technology; (4) every page shares one browser title and the codebase carries warnings, dead code and unused assets that make the site harder to maintain and share.

Phase 1 is a **single delivery** that resolves all 45 findings. Five findings were style decisions; the owner's choices are recorded under *Clarifications* and *Assumptions*. Everything else has an unambiguous correct state.

## User Scenarios & Testing *(mandatory)*

### User Story 1 - A recruiter's first impression is clean and credible (Priority: P1)

A recruiter opens the home page on a laptop. The introduction ("Hello, I'm Ammar — Backend & DevOps Engineer") is fully readable, nothing overlaps it, and it stays on screen. The page presents only claims the recruiter could verify elsewhere on the site: no invented uptime numbers, no "live" logs, no skill percentages for tools that appear in no project or job.

**Why this priority**: The home page decides whether a visitor keeps reading. Today the social icons sit on top of the headline, the specialization line fades to invisible every six seconds, and the page shows fake telemetry ("Uptime 99.9%", "Active Sessions: 04", "v2.4.0-stable") plus 85–98% proficiency bars for Terraform and Kubernetes that the rest of the site never mentions. (ISS-011, ISS-012, ISS-042, ISS-043)

**Independent Test**: Load the home page at 1280, 1440 and 1920 px widths; confirm the social-link column does not intersect any text, the headline remains visible after 10 seconds, and every statistic or skill on the page can be traced to a project or job page.

**Acceptance Scenarios**:

1. **Given** the home page at any desktop width ≥ 1280 px, **When** it finishes loading, **Then** the social-link column and the introduction headline occupy non-overlapping areas.
2. **Given** the home page has been open for 10 seconds, **When** a visitor looks at the specialization headline, **Then** it is fully opaque and legible (no looping fade).
3. **Given** a visitor who prefers reduced motion (OS setting), **When** the home page loads, **Then** no element animates.
4. **Given** the home page, sidebar, header and footer, **When** the visitor looks for uptime, load, latency, session counts, logs, version numbers or "online" status, **Then** none are present.
5. **Given** the skills section, **When** a visitor reads a listed skill, **Then** it sits under an evidence group ("Used at work", "Used in projects", "Learning"), carries no percentage, and links to a project or experience entry that mentions it.

---

### User Story 2 - Every project and experience page reads as professionally written (Priority: P1)

A hiring manager clicks through to a project page. Names, brands and technical terms are spelled and capitalised correctly, feature lists are real lists (not one run-on sentence), labels describe what sits under them, and facts on one page do not contradict facts on another.

**Why this priority**: Misspelled technologies ("kubarnetes", "nodeJs", "mongoDB", "paymob"), a stray " . " in a sentence, a feature list rendered as a paragraph, a "Technical Constraint" box that contains a solution, and "2+ years" experience beside a five-month first job are the kind of details a technical reader notices immediately. (ISS-036, ISS-037, ISS-038, ISS-039, ISS-040, ISS-044)

**Independent Test**: Read every visible string on all 13 pages against the exact-string list in audit section H; confirm none of the listed defects remain and that cross-page facts (years of experience, real-time capability, authentication method, counts of positions/programs) agree.

**Acceptance Scenarios**:

1. **Given** any page, **When** its text is searched for the misspellings/casing errors listed in ISS-036, **Then** none are found and every technology name uses its official spelling.
2. **Given** the DANA project page, **When** the "Core Features" block is read, **Then** each feature is a separate list item.
3. **Given** any labelled box or button, **When** compared with its content or destination, **Then** the label is accurate (e.g. a button that opens API documentation is not called "Demo").
4. **Given** the About and Experience pages, **When** the stated years of experience, number of positions and number of training programs are compared, **Then** they agree.
5. **Given** any project page, **When** a visitor looks for the source code, **Then** they find either a working repository link or an explicit note that the code is private/client-owned.
6. **Given** the project list and each project page, **When** their identifier/badge schemes are compared, **Then** one consistent scheme is used (or pseudo-identifiers are removed).

---

### User Story 3 - A phone visitor can navigate and read comfortably (Priority: P2)

A visitor on a 390 px-wide phone opens the menu, sees the full brand name, can close the menu with the back-gesture-equivalent (Escape / tap outside / close button), and reads every label without squinting or hitting "…" truncation. The Experience page no longer ends with a redundant timeline that lost its dates on phones.

**Why this priority**: Roughly half of portfolio traffic arrives from a phone via LinkedIn. Today the fixed header hides the first line of the brand when the drawer is open, several labels render at 8–9 px, training names are cut off, and the redundant Career Timeline loses its dates entirely on small screens. (ISS-008, ISS-020, ISS-022, ISS-023, ISS-025)

**Independent Test**: At 390 × 844 px, open and close the menu by each supported method; measure the smallest rendered font size on every page; confirm no text is ellipsised and the Career Timeline section is gone.

**Acceptance Scenarios**:

1. **Given** the phone layout with the menu open, **When** the visitor looks at the drawer, **Then** the full brand name is visible and a close control is present.
2. **Given** the menu is open, **When** the visitor presses Escape or taps outside, **Then** the menu closes.
3. **Given** any page at 390 px, **When** rendered font sizes are measured, **Then** none is below 11 px.
4. **Given** the training list at 390 px, **When** a name is longer than one line, **Then** it wraps rather than truncating.
5. **Given** the Experience page at any width, **When** the visitor scrolls to the end, **Then** no "Career Timeline" section is present and every job/course appears exactly once.

---

### User Story 4 - Images look intentional on every screen (Priority: P2)

Project thumbnails fill their frames edge-to-edge and all cards in a row line up; the featured project image is visible rather than a black box; hero banners on project pages are dark enough that the statistics printed over them are readable; every image's alternative text describes the picture.

**Why this priority**: Half-filled thumbnail frames, a featured image that renders almost black, and white screenshots under dark text look like bugs to a visitor and hide the owner's actual work. (ISS-013, ISS-014, ISS-015, ISS-019, ISS-021, ISS-031)

**Independent Test**: Screenshot every page at 390, 768 and 1440 px; confirm each image fills its frame, card buttons align per row, overlaid text meets a 4.5:1 contrast ratio, and alt text matches the picture.

**Acceptance Scenarios**:

1. **Given** the project list at any width, **When** thumbnails are inspected, **Then** each fills its frame with no empty band and the "View" buttons in a row share one baseline.
2. **Given** the featured project block on the home page, **When** loaded, **Then** the image is visibly rendered and its alternative text describes what is shown.
3. **Given** any project page hero banner, **When** contrast is measured between the overlaid statistics and the banner behind them, **Then** it is at least 4.5:1.
4. **Given** the above-the-fold image on any page, **When** the page loads on a phone, **Then** the image is prioritised so the first meaningful paint is not delayed by lower images.

---

### User Story 5 - Assistive-technology and keyboard users can use the site (Priority: P2)

A screen-reader user lands on any page and hears one main heading that names the page; every link has a name; decorative icons are skipped; text is readable at standard contrast; a keyboard user sees where focus is and can skip straight to content.

**Why this priority**: Today the only top-level heading on every page is the brand name, social links have no accessible name, dozens of icons carry a dead icon-font class, and several labels fall below contrast thresholds. (ISS-026, ISS-027, ISS-028, ISS-029)

**Independent Test**: Run an automated accessibility audit on all pages and a manual keyboard walk-through.

**Acceptance Scenarios**:

1. **Given** any page, **When** headings are listed, **Then** exactly one top-level heading exists and it names the page's content.
2. **Given** any link or button, **When** read by a screen reader, **Then** it announces a meaningful name.
3. **Given** any text, **When** contrast is measured against its background, **Then** small text meets 4.5:1 and large/bold text meets 3:1.
4. **Given** a keyboard user pressing Tab from page load, **When** focus moves, **Then** a visible focus ring is shown and the first stop offers "skip to content".

---

### User Story 6 - Pages are correctly titled, shareable and never dead-end (Priority: P2)

A visitor who shares a project link sees a page-specific title and preview; a visitor who mistypes a URL sees the site's own "not found" page with navigation, not a bare error.

**Why this priority**: All 13 pages currently share the title "Ammar Portfolio" and a description the content does not support; there is a menu-title mapping for a page that no longer exists; unknown URLs show an unbranded error. (ISS-006, ISS-007, ISS-034, ISS-035)

**Independent Test**: Collect the browser title and share preview of every page; visit an unknown URL.

**Acceptance Scenarios**:

1. **Given** any page, **When** its browser tab title is read, **Then** it is unique and names that page.
2. **Given** a page link pasted into a chat/social tool, **When** the preview renders, **Then** it shows a page-specific title, description and image.
3. **Given** an unknown URL, **When** visited, **Then** the site's own "not found" page appears with working navigation.
4. **Given** every page name the header can display, **When** its route is visited, **Then** it resolves to a real page.

---

### User Story 7 - The owner can maintain the site without noise (Priority: P3)

The owner runs the standard check, build and lint commands and sees zero errors and zero warnings; the repository contains no unused images, dead styles, duplicated font downloads or leftover placeholder files; a fresh clone works first time and the README explains how to run it.

**Why this priority**: Not visitor-facing, but 43 lint errors, ~4.5 MB of unused images, a duplicated font download and boilerplate README/favicon slow every future change. (ISS-001, ISS-002, ISS-003, ISS-004, ISS-005, ISS-009, ISS-010, ISS-016, ISS-017, ISS-018, ISS-030, ISS-032, ISS-033, ISS-045)

**Independent Test**: Run lint, type-check and build from a clean checkout; list unreferenced assets.

**Acceptance Scenarios**:

1. **Given** a clean checkout, **When** lint, type-check and production build are run, **Then** all pass with zero errors and zero warnings.
2. **Given** the repository, **When** image files are checked for references, **Then** every image is used by at least one page and the largest source image is under 300 KB.
3. **Given** the README, **When** a new contributor reads it, **Then** it describes the portfolio and how to run, build and clean it.
4. **Given** the footer, **When** the year changes, **Then** the copyright year updates without a code change.

---

### Edge Cases

- A visitor with "reduce motion" enabled must see a static hero; entrance animations must not leave elements permanently invisible if the animation is suppressed.
- A project without a public repository must still satisfy US2 scenario 5 via an explicit "private/client work" note rather than a missing link.
- Renaming the "clinc" route to "clinic" must keep old links working (redirect) so previously shared URLs do not 404.
- The mobile drawer, when closed, must not be reachable by keyboard even though it is visually off-screen.
- Very long project or training names must wrap at every width without pushing sibling cards out of alignment.

## Requirements *(mandatory)*

### Functional Requirements

**Home page & credibility**

- **FR-001**: The home-page introduction and social-link column MUST NOT overlap at any viewport width of 1280 px or more. (ISS-011)
- **FR-002**: The specialization headline MUST remain fully visible after its entrance; no looping fade may hide primary text. (ISS-012)
- **FR-003**: All motion MUST be suppressed when the visitor's system requests reduced motion. (ISS-012)
- **FR-004**: The site MUST NOT display fabricated operational data. The Live Logs, Live Metrics, Event Log and "Active Sessions" blocks on the home page, the version label and "System Online" bar in the sidebar, the "Active" badge in the header, the "Status: Online" footer text, and the "Released: 2026" / "sub-100ms latency" / "Production Ready" / "42ms avg" claims MUST be removed. No replacement widget is added. (ISS-042)
- **FR-005**: The skills section MUST show no numeric proficiency values. Skills MUST be grouped by evidence — "Used at work", "Used in projects", "Learning" — and every skill MUST correspond to a technology named in at least one project or experience entry, with a link to that page. Tools with no such evidence (currently Terraform, Kubernetes) MUST be removed or placed under "Learning" without a rating. (ISS-043)

**Copy & consistency**

- **FR-006**: All technology, product and company names MUST use their official spelling and capitalisation (e.g. Kubernetes, Node.js, MongoDB, Paymob, Analytics Service, DevOps). (ISS-036)
- **FR-007**: The clinic project route MUST be spelled "clinic" and the previous "clinc" address MUST redirect to it. (ISS-036)
- **FR-008**: No visible string MAY contain stray punctuation, leading/trailing/double spaces, or copy pasted from another project that does not apply. (ISS-037)
- **FR-009**: Multi-item feature lists MUST render as lists, one item per line. (ISS-037)
- **FR-010**: The hackathon achievement text MUST be written in the portfolio's descriptive voice (third-person-neutral, no social-media announcement phrasing). (ISS-037)
- **FR-011**: Project identifiers/badges MUST follow one consistent scheme across the project list and project pages, or be removed. Header page titles MUST match the navigation labels. (ISS-038)
- **FR-012**: Every label, heading and icon MUST accurately describe the content or destination it accompanies. (ISS-039)
- **FR-013**: Facts stated on more than one page (years of experience, count of positions and programs, real-time capability of ABG, authentication method of ABG, training status) MUST agree. (ISS-040)
- **FR-014**: Every project page MUST offer a repository link or an explicit statement that the code is private. (ISS-044)
- **FR-015**: Every primary page heading MUST be plain English (e.g. "Projects", "Experience & Training", "Contact"); the existing stylised "terminal" string (e.g. "PROJECT_VAULT_02", "INITIATE_CONTACT") MUST be retained as a small sub-label beneath or beside that heading, never as the heading itself. Button labels follow the same rule ("View project" with an optional stylised hint). (ISS-041)

**Mobile & navigation**

- **FR-016**: With the mobile menu open, the full brand name MUST be visible and a close control MUST be present inside the menu. (ISS-008)
- **FR-017**: The mobile menu MUST close on Escape and on tapping outside it; it MUST expose its open/closed state to assistive technology; when closed it MUST NOT receive keyboard focus. (ISS-008)
- **FR-018**: No text MAY render smaller than 11 px on phones or 10 px on desktop. (ISS-022)
- **FR-019**: Text MUST wrap rather than truncate with an ellipsis, on every page and width. (ISS-023, ISS-019)
- **FR-020**: The "Career Timeline" section MUST be removed from the Experience page; the Work Experience and Courses & Training sections above it remain the single listing of career entries. (ISS-020)
- **FR-021**: The home page keeps its current sections (hero, about block, skills, featured project). Its length is accepted; only the defects inside those sections (FR-001…FR-005, FR-018, FR-019, FR-022–FR-024) are corrected. (ISS-024 — owner decision: no restructuring)
- **FR-022**: Decorative background shapes MUST NOT exceed the viewport width. (ISS-025)

**Images**

- **FR-023**: Every image MUST fill its designated frame edge-to-edge at 390, 768 and 1440 px. (ISS-013, ISS-021)
- **FR-024**: The featured project image MUST be visibly rendered and its alternative text MUST describe the picture. (ISS-014)
- **FR-025**: Text overlaid on project-page banners MUST achieve at least 4.5:1 contrast against the banner. (ISS-015)
- **FR-026**: Cards in the same row of the project list MUST align their action buttons on one baseline. (ISS-019)
- **FR-027**: The first visible image on each page MUST be prioritised for loading; below-the-fold images MUST be optimised and lazy-loaded. (ISS-031)
- **FR-028**: Feature grids on project pages MUST be visually balanced with no empty cells at tablet and desktop widths. (ISS-017 — default: rebalance to equal-width cards; owner may override)

**Accessibility**

- **FR-029**: Each page MUST have exactly one top-level heading that names the page content. (ISS-026)
- **FR-030**: Every link and button MUST have an accessible name; purely decorative icons MUST be hidden from assistive technology; the unused icon-font must not be downloaded. (ISS-027)
- **FR-031**: All text MUST meet 4.5:1 contrast (3:1 for large/bold text). (ISS-028)
- **FR-032**: Keyboard focus MUST be visibly indicated and a "skip to content" link MUST be the first focusable element. (ISS-029)

**Titles, sharing, errors**

- **FR-033**: Every page MUST have a unique browser title and description, and a share-preview image. (ISS-034)
- **FR-034**: Unknown URLs MUST show the site's own "not found" page with navigation. (ISS-007)
- **FR-035**: Every page name the header can display MUST correspond to a real page. Because the About block stays on the home page (FR-021), the dangling "/about" header mapping MUST be removed rather than a new page added. (ISS-006)
- **FR-036**: The site MUST ship its own favicon and theme colour; scaffold placeholder files MUST be removed. (ISS-035)
- **FR-037**: External links MUST open in a new tab safely (no access to the opener) and use secure addresses. (ISS-009)

**Maintainability**

- **FR-038**: Lint, type-check and production build MUST complete with zero errors and zero warnings, including the workspace-root warning. (ISS-001, ISS-002, ISS-003, ISS-004, ISS-016, ISS-018)
- **FR-039**: A documented "clean" command MUST reset local build caches; the README MUST describe the project and how to run it. (ISS-001, ISS-045)
- **FR-040**: Fonts MUST be loaded from a single source; unused styles, unused data fields and unreferenced image files MUST be removed; remaining images MUST each be under 300 KB and have clean file names. (ISS-010, ISS-030, ISS-032, ISS-033)
- **FR-041**: The working tree MUST be clean after delivery: no untracked stray images, no duplicate image inside route folders. (ISS-005)
- **FR-042**: The footer copyright year MUST be derived from the current date. (ISS-045)

### Key Entities

- **Page**: one of 12 routes (Home, Projects, Experience, Code, 7 project detail pages, Not-found). Attributes: title, description, share image, single top-level heading.
- **Project**: name, identifier/badge, summary, technologies, links (repository / documentation / private-note), thumbnail, banner, feature list, architecture notes.
- **Experience entry**: role, organisation, type (job / internship), location, date range, highlights, technologies, images.
- **Training entry**: title, provider, status, description, tags, image.
- **Skill**: name, evidence group ("Used at work" / "Used in projects" / "Learning"), link to the project or experience entry that proves it. No numeric rating.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: 0 of the 45 audit findings remain reproducible when the audit's verification steps are re-run (browser sweep at 1440 × 900 and 390 × 844, lint, type-check, build, text grep).
- **SC-002**: On every page, the home-page headline and social column do not intersect at 1280/1440/1920 px, and the headline opacity is 1.0 ten seconds after load.
- **SC-003**: A text search of all pages for the 12 exact defective strings listed in audit section H returns zero matches.
- **SC-004**: 100% of pages have a unique browser title; 100% of pages have exactly one top-level heading.
- **SC-005**: Smallest rendered text on any page is ≥ 11 px at 390 px width; no element is truncated with an ellipsis.
- **SC-006**: Automated accessibility audit reports zero "link has no discernible text", zero contrast failures and zero missing-heading issues on all pages; Accessibility and SEO scores ≥ 95 on the home page and one project page.
- **SC-007**: Lighthouse Performance and Best Practices scores on the home page and one project page improve over the pre-change baseline recorded before work starts.
- **SC-008**: Lint, type-check and production build each exit with 0 errors and 0 warnings on a clean checkout.
- **SC-009**: Total size of committed image assets drops by at least 4 MB; zero unreferenced image files remain.
- **SC-010**: The mobile menu can be opened and closed by tap, close button, outside tap and Escape in 100% of attempts, with the full brand name visible while open.
- **SC-011**: Zero fabricated operational figures remain anywhere on the site (manual review of every page, header, sidebar and footer: 0 unexplained numbers, timestamps, versions or status badges).

## Clarifications

### Session 2026-09-13

- Q: How should the skills section on the home page present skills, given that Terraform and Kubernetes currently show 85–90% bars but appear in no project or job? → A: Option A — remove percentages; group skills by evidence ("Used at work", "Used in projects", "Learning"), each skill linking to the page that proves it.
- Q: Should the site's primary page headings stay in the stylised "terminal" voice or become plain English? → A: Option C — plain-English primary heading, with the current stylised string kept as a small sub-label beneath it.
- Q: Which copies of the duplicated career content should survive (home-page About block vs Experience page vs Career Timeline)? → A: Option D — keep the home page as it is; remove only the "Career Timeline" section from the Experience page.
- Q: What should happen to the decorative "system status" widgets (Live Logs, Live Metrics, Event Log, sessions/version/online badges)? → A: Option A — remove all fabricated widgets; keep the terminal aesthetic through colour, type and labels only.

## Assumptions

- The site remains a static, single-owner portfolio with no authentication, forms or backend; all changes are to content, presentation and project hygiene.
- The dark "terminal/HUD" visual theme is intentional and is kept; only defects and credibility problems are corrected, not the aesthetic. Stylised strings survive as sub-labels under plain-English headings (FR-015).
- Fabricated operational widgets are removed outright (owner decision, FR-004); the space they occupied on the home page is reclaimed by the remaining sections rather than filled with a new widget.
- Feature grids (FR-028) default to equal-width cards with no spanning cells; the owner may keep the "bento" spans if every row is filled.
- The home page structure is unchanged (owner decision); ISS-024's page-length concern is accepted as-is and only in-section defects are fixed. The "/about" header mapping is removed (FR-035).
- Redirecting the old "clinc" URL is required because the link may already have been shared.
- Minimum-font-size targets (11 px phone / 10 px desktop) and contrast targets (4.5:1 / 3:1) follow common accessibility guidance and are not negotiable.
- Lighthouse Performance is judged as "improved over baseline" rather than a fixed score because no baseline exists yet; Accessibility and SEO are gated at ≥ 95 because those outcomes are deterministic from the requirements.
- No new content is written beyond what is needed to fix defects (e.g. a "private/client project" note, a plain-English heading, an About-page title); the owner reviews any rewritten sentences before merge.
- Phase 1 is delivered as one branch/PR; there is no Phase 2 in scope of this specification.
