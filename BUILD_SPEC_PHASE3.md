# BUILD SPEC — Free Tools Hub Phase 3 (10 tools + site polish)

> Work INSIDE `_tools_hub/` only. The Astro project already has 12 live tools and
> passes `npm run build`. Do NOT touch any file outside `_tools_hub/`. Do NOT modify
> the 12 existing live tools' behaviour. After each tool, run `npm run build` and fix
> errors before continuing.

## Established architecture (follow exactly — same as Phase 1/2)

For each new tool:
1. `src/data/tools.ts` — set the slug's `status: 'live'`, add `updated: '2026-06-16'`, `featured: true`.
2. `src/i18n/tools/<slug>.ts` — full bilingual `ToolContent` (name, short, long, seoTitle, seoDescription, keywords, instructions, examples, faq ≥3, labels, optional disclaimer). EN must be genuine content, not a translation of the title.
3. `src/components/tools/<Component>.astro` — vanilla JS only, NO external libraries, NO UI frameworks.
4. Add slug → component to the map in `src/pages/[lang]/tools/[slug].astro`.
5. `npm run build` until exit 0.

Read these existing files first to match conventions exactly:
- `src/components/tools/WordCounter.astro` (live-update text widget pattern)
- `src/components/tools/RandomNumberPicker.astro` (input + generate + copy pattern)
- `src/i18n/tools/word-counter.ts` (content file shape)

## The 10 tools

### 1. `password-generator` (random, 🔐)
zh 隨機密碼產生器 / en Password Generator. Options: length slider (4–64, default 16),
checkboxes: uppercase / lowercase / numbers / symbols (default all on), "exclude
ambiguous chars (O0l1I)" toggle. Generate button + auto-regenerate on option change.
Show a simple strength meter (weak/fair/strong/very strong based on length + variety).
Copy button. At least one character class must be selected (error otherwise).

### 2. `color-generator` (random, 🎨)
zh 隨機顏色產生器 / en Random Color Generator. Generate a random color; show large
swatch + HEX + RGB + HSL values, each with its own copy button. "Generate" + optional
"generate palette of 5" that shows 5 swatches. Spacebar also generates (with hint).

### 3. `dice-roller` (random, 🎲)
zh 擲骰子工具 / en Dice Roller. Choose dice type (d4/d6/d8/d10/d12/d20, default d6) and
count (1–10). Roll button. Show each die result + the total. Brief roll animation
(cycle numbers ~0.5s). Copy results.

### 4. `stopwatch` (time, ⏲️)
zh 碼錶 / en Stopwatch. Start/Stop/Reset + Lap. Display HH:MM:SS.cs (centiseconds).
Lap list with split + total times. Uses performance.now() for accuracy (do NOT rely
on setInterval drift — compute elapsed from a start timestamp). Copy laps.

### 5. `base64` (text, 🔤)
zh Base64 編碼解碼 / en Base64 Encoder / Decoder. Two-way: textarea input, Encode and
Decode buttons, output area. UTF-8 safe (use TextEncoder/TextDecoder + btoa/atob
correctly so CJK works). Show clear error on invalid Base64 when decoding. Copy + Clear.

### 6. `url-encoder` (text, 🔗)
zh URL 編碼解碼 / en URL Encoder / Decoder. Two-way encode/decode using
encodeURIComponent / decodeURIComponent. Textarea in, output out, Encode/Decode/Copy/
Clear. Handle decode errors gracefully.

### 7. `json-formatter` (text, 🧩)
zh JSON 格式化 / en JSON Formatter / Validator. Textarea input. Buttons: Format
(pretty, 2-space indent), Minify, Validate. On invalid JSON show the parser error
message and (if available) line/position. Output in a read-only area. Copy + Clear.
Pure `JSON.parse`/`JSON.stringify` only.

### 8. `random-student-picker` (study, 🎯)
zh 隨機點名器 / en Random Student Picker. Textarea: one student name per line (or a
quick "fill 1–N numbers" helper input). Big "Pick" button picks one at random with a
short spin animation. Option "don't repeat until all picked" (tracks already-picked,
shows remaining count, resets when exhausted). Copy current pick. Reset.

### 9. `grade-average` (study, 📊)
zh 成績平均計算器 / en Grade Average Calculator. Dynamic rows: each row = score +
optional weight. Add/remove rows. Compute simple average AND weighted average (if any
weights given). Show total items, sum, average to 2 decimals. Copy result. Handle
empty/invalid rows by ignoring them.

### 10. `gpa-calculator` (study, 🎓)
zh GPA 計算器 / en GPA Calculator. Dynamic rows: course name (optional) + credits +
letter grade dropdown (A+,A,A-,B+,B,B-,C+,C,C-,D,F). Use the common 4.3 scale (A+=4.3,
A=4.0, A-=3.7, B+=3.3, B=3.0, B-=2.7, C+=2.3, C=2.0, C-=1.7, D=1.0, F=0). Add/remove
rows. Output GPA to 2 decimals + total credits. Note the scale used. Copy result.

## Site polish (do these too)

### A. 404 page
Create `src/pages/404.astro` — a simple bilingual "Page not found / 找不到頁面" page
using BaseLayout (default to zh, with a line in en too), linking back to `/zh/` and
`/en/` homepages and `/zh/tools/`. Must build into `dist/404.html`.

### B. Homepage completeness
Check `src/pages/[lang]/index.astro`. Ensure the homepage contains ALL of: hero,
category entry grid, popular tools (featured), newest tools (isNew), a "Why use this
site" section (from ui.ts), and a short FAQ. If any are missing, add them (pull copy
from `src/i18n/ui.ts` / `src/i18n/pages.ts`; extend those files if needed). Do not
break existing sections.

## Acceptance (run before reporting)
1. `npm run build` exit 0, zero errors.
2. 10 new tools × 2 locales = 20 new tool HTML files in dist (+ `dist/404.html`).
3. `adsbygoogle` → 0 matches in dist.
4. FAQPage JSON-LD present on every new tool page.
5. No external runtime libraries added (package.json deps unchanged except nothing new;
   qrcode from Phase 2 stays). Confirm no new dependency was added.
6. Grep dist for the literal `/freetools/` is fine (built output), but confirm no NEW
   source file hardcodes `/freetools/` — all links via BASE_URL/helpers.

Report: (a) files created/modified, (b) last 20 lines of final `npm run build`,
(c) acceptance results.
