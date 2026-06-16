# TASK: Build out ALL 12 remaining `planned` tools → flip to `live`

You are working IN-PLACE on the existing, working Astro static site at the current working
directory (`_tools_hub/`). It currently has 33 live tools / 150 built pages and a clean build.
This task implements the 12 tools currently marked `status: 'planned'` so they become fully
working `live` tools. **DO NOT rewrite anything. DO NOT break the existing build. ADDITIVE only.**

Read `README.md` first — it documents the exact "how to add a tool" workflow. Follow it precisely.

## The 12 planned tools to implement (slug — category — suggested assetType)
1. `business-days` — time — calculator (workdays between two dates, optional skip weekends + custom holiday list)
2. `break-reminder` — time — tool (interval reminder timer; gentle on-screen + optional sound beep via WebAudio, no external files)
3. `remove-empty-lines` — text — tool (strip blank/whitespace-only lines; option: collapse multiple blanks)
4. `remove-duplicate-lines` — text — tool (keep unique lines; options: case-insensitive, keep order vs sort, trim)
5. `sort-lines` — text — tool (sort lines A→Z / Z→A / numeric / by length; options: case-insensitive, remove dups)
6. `net-salary` — money — calculator — **REGULATION-SENSITIVE** (see special rules below)
7. `overtime-pay` — money — calculator — **REGULATION-SENSITIVE** (see special rules below)
8. `inflation` — money — calculator (future/past purchasing power from amount, annual rate %, years; show formula)
9. `work-personality-test` — fun — quiz (model on existing MbtiTest/LoveTypeTest: stepped questions → result + share)
10. `stress-level-test` — fun — quiz — **HEALTH-ADJACENT** (see special rules below)
11. `seating-chart` — study — tool/generator (paste student list → arrange into a rows×cols grid; shuffle; copy/print)
12. `group-generator` — study — tool (class group generator: paste list → split into N groups or fixed size; distinct from the existing `random-group-generator` — use a different component name like `ClassGroupGenerator`)

## Per-tool workflow (do ALL 5 steps for EACH tool)
1. In `src/data/tools.ts`: change that tool's `status` to `'live'` and fill the v2 metadata fields:
   `assetType`, `searchIntent`, `shareIntent`, `embedPotential`, `maintenanceRisk`,
   `monetizationTags: ['adsense']` (add 'sponsor'/'affiliate' where natural), `featured: true`,
   `isNew: true`, `updated: '2026-06-16'`. Keep the existing zh/en `name`/`short`.
2. Create `src/i18n/tools/<slug>.ts` — FULL bilingual `ToolContent` (zh + en), matching the shape
   used by existing files: name, short, long, seoTitle, seoDescription, keywords[], instructions[],
   examples[] (>=3 real use cases), faq[] (3-5 Q&A), labels{} (all UI strings the widget needs),
   optional `privacyNote`, and `disclaimer` where money/health. Copy the structure of an existing
   similar tool's i18n file. NO English-only stubs — both languages must be complete and natural.
3. Create `src/components/tools/<PascalCaseName>.astro` — a self-contained vanilla-JS widget
   (NO UI framework, NO new npm deps). All computation LOCAL in the browser. Pull all visible text
   from the tool's `labels` via props (follow how existing widgets receive `labels`). Include
   Reset and (where a textual result exists) Copy. Mobile-friendly. Match existing widget styling
   conventions / CSS classes.
4. Register the widget in `src/lib/toolWidgets.ts`: add the import + an entry in `widgetBySlug`.
5. Routes + embed pages are automatic via the registry + widget map — no route edits needed.

## Reference tools to copy structure from (match these patterns)
- Text utilities (remove-empty-lines, remove-duplicate-lines, sort-lines): `WordCounter` / `CaseConverter`.
- Calculators (business-days, inflation, net-salary, overtime-pay): `CompoundInterest` / `MortgagePayment` — show the formula/logic in the content per v2 §8.
- Quizzes (work-personality-test, stress-level-test): `MbtiTest` / `LoveTypeTest` — stepped questions, result state, share. Each quiz needs a result + disclaimer.
- Class helpers (seating-chart, group-generator): `RandomGroupGenerator` / `RandomStudentPicker`.
- Interval timer (break-reminder): `PomodoroTimer` / `CountdownTimer`.

## SPECIAL RULES — regulation-sensitive & health tools (v2 §4.1, §8, §19)
- `net-salary` and `overtime-pay`: DO NOT hardcode current-year statutory rates as authoritative.
  Make all rates (e.g. labor-insurance %, health-insurance %, tax/withholding %, overtime
  multipliers) USER-EDITABLE inputs with clearly-labeled, sensible default values. Add a visible
  "費率為預設假設值，請依當年度法規自行調整 / Rates are editable assumptions — verify against
  current regulations" note near the result, plus a `disclaimer` in the i18n content. Set
  `maintenanceRisk: 'high'` for net-salary, `'medium'` for overtime-pay. Show the calculation
  formula in the content. Do not claim official/legal accuracy.
- `stress-level-test`: HEALTH-ADJACENT. It is a light self-reflection quiz, NOT a clinical or
  diagnostic tool. The result and `disclaimer` MUST clearly state it is not medical advice and
  encourage seeking a professional if distressed. `assetType: 'quiz'`, `embedPotential: 'low'`.

## embedPotential guidance for the new tools
- High: remove-empty-lines, remove-duplicate-lines, sort-lines, business-days, inflation, group-generator.
- Medium: break-reminder, overtime-pay, net-salary, seating-chart.
- Low (NO embed): work-personality-test, stress-level-test (multi-step quizzes).
(The embed system already auto-includes any live tool with embedPotential !== 'low'.)

## HARD CONSTRAINTS
- No new npm dependencies (only `astro`, `qrcode` allowed). No backend, DB, paid APIs, analytics.
- Keep ALL monetization OFF — do NOT change `adsenseEnabled` or any `SITE.features` flag.
- Do not modify/remove existing live tools, routes, layouts beyond what's needed to register new ones.
- Bilingual parity required for every new string.

## FINISH
1. Run `npm run build` — it MUST pass with zero errors.
2. Confirm 0 tools remain `status: 'planned'` (all 45 tools live) and the HTML page count grew
   (24 new tool pages + new embed pages for the embeddable ones).
3. Output a concise summary: each new tool, its assetType/embedPotential, files created, the new
   total page count, and any deviations.
