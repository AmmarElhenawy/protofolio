# Contract: `scripts/audit.mjs` (verification sweep)

Run with the dev server on port 3000 and a playwright-cli browser session already open (`playwright-cli open <url>`): `playwright-cli run-code --filename=scripts/audit.mjs`. The file must be a single function expression (no import/export - playwright-cli constraint). Throws on any failed assertion; otherwise returns a per-route table.

Inputs: route list from `contracts/routes.md` (plus `/projects/clinc`, `/about`, `/definitely-missing`); viewports `1440×900` and `390×844` (plus `1280×800` and `1920×1080` for the hero-overlap check only).

## Assertions per route × viewport

| ID | Check | Maps to |
|----|-------|---------|
| A1 | HTTP 200 for table routes; `/projects/clinc` ends on `/projects/clinic` with 200; 404 for `/about` and unknown | FR-007, FR-034, FR-035 |
| A2 | `document.title` matches Routes contract and is unique across routes | FR-033, SC-004 |
| A3 | exactly one `<h1>`, text matches contract | FR-029, SC-004 |
| A4 | zero console errors; warnings (after filtering DevTools/HMR/Fast Refresh notices) are zero — in particular no `sizes`, LCP or `priority` warnings | FR-027, FR-038 |
| A5 | `scrollWidth === clientWidth` | regression guard |
| A6 | after scrolling every `<img>` into view: `naturalWidth > 0` | FR-023, FR-024 |
| A7 | minimum computed `font-size` of any text leaf ≥ 11 px at 390, ≥ 10 px at 1440 | FR-018, SC-005 |
| A8 | no element with `text-overflow: ellipsis` whose `scrollWidth > clientWidth` | FR-019, SC-005 |
| A9 | `document.body.innerText` contains none of: `kubarnetes`, `nodeJs`, `mongoDB`, `paymob`, `Analytic Service`, ` . `, `  b+`, `Legacy_Support`, `Priority_A1`, `Uptime`, `Active Sessions`, `v2.4.0`, `System Online`, `Status: Online`, `42ms`, `sub-100ms`, `Released: 2026`, `Career Timeline` | FR-004, FR-006, FR-008, FR-020, SC-003, SC-011 |
| A10 | no `%` character inside the skills section | FR-005 |

## Home-page only

| ID | Check | Maps to |
|----|-------|---------|
| H1 | at 1280/1440/1920: bounding boxes of the social-rail links and the "Hello, I'm Ammar" `<h1>` do not intersect | FR-001, SC-002 |
| H2 | after 8 s: computed `opacity` of the specialization heading is `1` and its `animation-iteration-count` is not `infinite` | FR-002, SC-002 |
| H3 | with `prefers-reduced-motion: reduce` emulated: every `opacity-0 animate-*` target reaches opacity 1 within 100 ms | FR-003 |

## Mobile only (390 px)

| ID | Check | Maps to |
|----|-------|---------|
| M1 | `aside#site-nav` has `inert` when closed; hamburger `aria-expanded="false"` | FR-017 |
| M2 | click hamburger → `aria-expanded="true"`; brand `<p>` fully inside the viewport and not overlapped by `<header>` | FR-016 |
| M3 | press `Escape` → closed; open again, click overlay → closed; open again, click close button → closed | FR-017, SC-010 |
| M4 | Tab from the hamburger with the drawer closed never focuses an element inside `aside` | FR-017 |

## Contrast (both viewports)

Sample every text leaf, compute contrast against its effective background; fail if < 4.5:1 (or < 3:1 when font-size ≥ 18.7 px and weight ≥ 700). Maps to FR-031, SC-006.
