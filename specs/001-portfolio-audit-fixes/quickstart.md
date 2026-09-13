# Quickstart: verifying Portfolio Audit Fixes (Phase 1)

How to prove the feature is done, end-to-end. Every step maps to a success criterion in [spec.md](spec.md).

## Prerequisites

- Node 20+, npm; `playwright-cli` on PATH (`npm i -g @playwright/cli`); Chrome for Lighthouse (`npx lighthouse` downloads nothing else)
- Branch `001-portfolio-audit-fixes` checked out

## 0. Record the baseline (once, BEFORE the first code change) — SC-007

```bash
npm run clean 2>/dev/null || rm -rf .next
npx next dev -p 3000 &            # leave running
npx lighthouse http://localhost:3000/ --preset=perf --form-factor=mobile --output=json --output-path=specs/001-portfolio-audit-fixes/lighthouse-baseline-home.json --quiet
npx lighthouse http://localhost:3000/projects/dana --form-factor=mobile --output=json --output-path=specs/001-portfolio-audit-fixes/lighthouse-baseline-dana.json --quiet
```

Note the four category scores from each JSON (`categories.*.score`).

## 1. Static checks — SC-008

```bash
npm run clean
npm run check              # = eslint src && tsc --noEmit  → expect "0 problems", no TS output
npx next build             # expect 12 routes listed, no "inferred your workspace root" warning, no metadata warnings
```

Expected: all three exit 0 with zero warnings.

## 2. Route / title / heading / redirect sweep — SC-001, SC-002, SC-003, SC-004, SC-005, SC-010, SC-011

```bash
npx next dev -p 3000 &
playwright-cli open http://localhost:3000/
playwright-cli run-code --filename=scripts/audit.mjs      # asserts contracts/audit-script.md A1–A10, H1–H3, M1–M4
playwright-cli close
```

Expected: script prints a table with every cell `OK` and does not throw. Spot-check manually:

- `curl -sI http://localhost:3000/projects/clinc | head -1` → `HTTP/1.1 308`
- `curl -s -o /dev/null -w "%{http_code}" http://localhost:3000/about` → `404` and the page shows the site's own "Page not found" with the sidebar
- Resize to 390 px: open menu → full name "Ammar Elhenawy" visible under the header; press Escape → closes

## 3. Copy read-through — SC-003 (manual)

Open each of the 11 public pages and read every visible string against `docs/portfolio-audit.md` § H (ISS-036…ISS-041). Additionally:

```bash
grep -rn "kubarnetes\|nodeJs\|mongoDB\|paymob\|Analytic Service\| \. \|  b+\|desc: \" \|Legacy_Support\|Priority_A1\|material-symbols\|unoptimized\|priority" src   # expect no output
```

## 4. Accessibility — SC-006

```bash
npx lighthouse http://localhost:3000/ --only-categories=accessibility,seo --form-factor=mobile --output=json --output-path=/tmp/a11y-home.json --quiet
npx lighthouse http://localhost:3000/projects/dana --only-categories=accessibility,seo --form-factor=mobile --output=json --output-path=/tmp/a11y-dana.json --quiet
```

Expected: `accessibility.score ≥ 0.95`, `seo.score ≥ 0.95` on both; zero "Links do not have a discernible name", "Background and foreground colors do not have a sufficient contrast ratio", or heading-order audits failing. Keyboard: Tab once from page load → visible "Skip to content" link.

## 5. Images & assets — SC-009

```bash
for f in src/assets/images/*; do b=$(basename "$f"); grep -rq "$b" src --include=*.tsx || echo "UNUSED: $b"; done   # expect no output
find src/assets/images -size +300k                                                                                  # expect no output
ls src/components/*.jp* src/components/*.png 2>/dev/null                                                            # expect no output
git status --short                                                                                                  # expect clean
```

## 6. Performance after — SC-007

Re-run the two Lighthouse commands from step 0 into `lighthouse-after-*.json`; Performance and Best Practices must be ≥ the baseline values, Accessibility and SEO ≥ 0.95.

## 7. Visual review (owner)

Open `/`, `/projects`, `/experience`, `/projects/dana` at 1440 and 390 px and confirm: no overlap in the hero; headline stays; thumbnails fill their frames and buttons align; banners readable; project-page feature grids have no holes; skills show three evidence groups with no percentages; no live logs/metrics/status badges anywhere.

## Definition of done

All of steps 1–6 pass and step 7 is signed off; `docs/portfolio-audit.md` items are each annotated `✔ fixed` with the commit; PR opened from `001-portfolio-audit-fixes` to `main`.

## Baseline (captured 2026-09-13, before any Phase 1 code change)

Command: `npx lighthouse <url> --form-factor=mobile --screenEmulation.mobile=true --chrome-flags="--headless=new"`

| Page | Performance | Accessibility | Best Practices | SEO |
|------|-------------|----------------|-----------------|-----|
| `/` | 0.46–0.54 | 0.91 | 1.00 | 1.00 |
| `/projects/dana` | 0.58 | 0.96 | 1.00 | 1.00 |

Raw reports: `lighthouse-baseline-home.json`, `lighthouse-baseline-dana.json` (this directory). Performance varied slightly (0.46/0.54) across two home-page runs due to normal Lighthouse lab-data variance; both are recorded as the floor to beat. Post-implementation values are captured in T063 as `lighthouse-after-*.json` and must be ≥ these Performance/Best-Practices numbers, with Accessibility and SEO ≥ 0.95.
