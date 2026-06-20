# v0.3.1 — Mobile responsive fixes

Date: 2026-06-20

## What changed

Patch release focused entirely on mobile (≤760px) layout polish. No desktop
behaviour changes — every rule is scoped to `@media (max-width: 760px)` or is a
safe overflow guard. Audited all 76 tool pages + homepage at 375px width; no
page-level horizontal scrolling was found, and these widgets were tightened so
controls no longer feel cramped on phones.

### Files

- `src/styles/global.css`
  - Added overflow guards for `.tool-widget`/`.prose-page` `table`, `pre`, `code`
    (tables/pre scroll horizontally instead of overflowing; long inline code wraps).
  - Smoother mobile nav: `overscroll-behavior-x: contain`, thin scrollbar, nav
    links no longer shrink (`flex: 0 0 auto`) so they scroll cleanly.
  - Runtime-generated `.chart-row` collapses to a single column on mobile.
- `src/components/tools/Cad2dBoard.astro` — toolbar buttons wrap into a 2-column
  grid, snap toggles go full width, dynamic input overlay constrained, dynamic
  fields single column on mobile.
- `src/components/tools/ChartMaker.astro` — chart data rows stack to one column;
  remove button full width on mobile.
- `src/components/tools/DiceRoller.astro` — dice controls collapse to one column.
- `src/components/tools/FlowchartMaker.astro` — toolbar buttons flex to 2 columns.
- `src/components/tools/ImagesToPdf.astro` / `MergePdf.astro` — row action buttons
  raised to 44px touch targets.
- `src/components/tools/PdfPageReorder.astro` / `SplitPdf.astro` — generated file/
  download rows stack and prevent filename/button overflow on mobile.
- `package.json` / `package-lock.json` — version bumped to 0.3.1.

## Verification

- `npm run build` passes (465 pages).
- Mobile (375px): dice / CAD / flowchart controls collapse to one column,
  toolbars become 2-column full-width touch targets, no page horizontal scroll.
- Desktop (961px): dice stays 2-column, CAD status stays 4-column, flowchart
  buttons keep natural width — no regression.

## Restore

```powershell
Copy-Item -Recurse -Force backup\v0.3.1\files\* .
npm.cmd run build
```
