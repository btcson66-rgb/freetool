# BUILD SPEC — Free Tools Hub Phase 4 (11 tools)

> Work INSIDE `_tools_hub/` only. Project has 22 live tools and builds clean.
> Do NOT touch existing live tools. Do NOT modify anything outside `_tools_hub/`.
> NO external libraries, NO UI frameworks — vanilla JS only (canvas, FileReader,
> SVG are all native). Do NOT add any npm dependency. After each tool run
> `npm run build` and fix errors before continuing.

## Established pattern (identical to Phase 1–3)
For each tool: (1) set `status:'live'` + `updated:'2026-06-16'` + `featured:true` in
`src/data/tools.ts`; (2) create `src/i18n/tools/<slug>.ts` with full bilingual
ToolContent; (3) create `src/components/tools/<Name>.astro` (vanilla JS widget);
(4) add slug→component to `src/pages/[lang]/tools/[slug].astro`; (5) build.

Read `src/components/tools/QrCodeGenerator.astro` and `WordCounter.astro` first to
match conventions (canvas usage, copy/clear, label injection via data-attrs).

---

## IMAGE TOOLS (category: image) — ALL processing 100% client-side in the browser.
Use `<input type="file" accept="image/*">` → FileReader/createImageBitmap → draw to
`<canvas>` → `canvas.toBlob()` → object URL for download. NEVER upload to any server.
Each MUST state in its content (long + a FAQ) that files stay on the device / never
uploaded — this is a privacy selling point. Show a preview of input + output. Provide
a "Download" button and a "Clear/Reset" to drop the image. Handle non-image / huge
files gracefully with a localized error. Revoke object URLs to avoid leaks.

### 1. `image-compressor` (🗜️)
zh 圖片壓縮 / en Image Compressor. Upload JPG/PNG/WebP. Quality slider (10–100%,
default 80). Output format select: keep / JPEG / WebP. Show original size vs
compressed size (KB) + % saved. Live re-encode on slider change (debounced). Download.

### 2. `image-resizer` (📐)
zh 圖片尺寸調整 / en Image Resizer. Upload. Width + Height inputs, "lock aspect ratio"
toggle (default on — editing one updates the other). Optional preset buttons (e.g.
1080, 800, 500 px wide). Resize via canvas, keep format. Show new dimensions + size.
Download.

### 3. `png-to-jpg` (🖼️)
zh PNG 轉 JPG / en PNG to JPG Converter. Upload PNG (accept any image). Fill
transparent areas with a background color (color picker, default white). Quality
slider. Output JPG. Download as `<name>.jpg`.

### 4. `jpg-to-png` (🏞️)
zh JPG 轉 PNG / en JPG to PNG Converter. Upload JPG/any image → output lossless PNG.
Download as `<name>.png`. Note PNG supports transparency but JPG has none (so output
is opaque).

---

## RANDOM / DECISION (category: random)

### 5. `random-wheel` (🎡)
zh 轉盤抽籤 / en Random Wheel Picker. Textarea: one option per line (default a few
sample options). Draw a colored wheel on `<canvas>` with each option as a labelled
segment. "Spin" button → animate rotation (requestAnimationFrame, ease-out over
~3–4s) → lands on a random segment → highlight winner + show result text. Re-spin
re-uses the list. Handle 1 option / empty list. Copy winner.

### 6. `what-to-eat` (🍽️)
zh 午餐吃什麼 / en What Should I Eat. Provide built-in bilingual food suggestion lists
(e.g. categories: 中式/日式/西式/小吃/健康 — for en: Chinese/Japanese/Western/Fast
food/Healthy), each with ~8 items. User can pick categories (checkboxes) and/or add
custom items in a textarea. "Decide" button picks one at random with a brief shuffle
animation. Copy result. Reset.

### 7. `this-or-that` (🤔)
zh 二選一決策器 / en This or That Picker. Two text inputs (Option A / Option B). Big
"Decide" button → brief suspense animation alternating A/B → lands on one at 50/50.
Show the chosen option prominently. Allow re-deciding. Validate both filled.

---

## FINANCE — universal math only (NOT Taiwan salary/tax/insurance, which we hold).
(category: money). Each: clear inputs, computed result, copy result, and a disclaimer
("estimate only / 僅供參考，實際以金融機構為準").

### 8. `compound-interest` (📈)
zh 複利計算器 / en Compound Interest Calculator. Inputs: initial principal, monthly
contribution, annual interest rate %, years, compounding (monthly default). Output:
future value, total contributed, total interest earned. Add a SIMPLE inline-SVG bar
or line visualization of balance growth per year (hand-drawn SVG, NO chart library).
Numbers formatted with thousands separators.

### 9. `savings-goal` (🎯)
zh 存錢目標計算器 / en Savings Goal Calculator. Two modes (tabs):
(a) "How long?" — target amount, current savings, monthly deposit, annual rate →
months/years to reach goal.
(b) "How much per month?" — target amount, current savings, target date (or months),
annual rate → required monthly deposit.
Output the answer clearly. Copy result.

### 10. `mortgage-payment` (🏠)
zh 房貸月付試算 / en Mortgage Payment Calculator. Inputs: loan amount, annual interest
rate %, term (years). Standard amortization (equal monthly payment). Output: monthly
payment, total of payments, total interest. Disclaimer that real loans may have grace
periods / tiered or floating rates / fees → consult the bank. Numbers with separators.

---

## TEXT (category: text)

### 11. `character-counter` (🔢)
zh 字元統計 / en Character Counter. Live textarea. Show: characters (with spaces),
characters (no spaces), byte length (UTF-8, via TextEncoder), words, lines. Show
remaining-count indicators for common limits: Twitter/X 280, SMS 160, meta description
~160 — display "X / limit" with an over-limit warning color when exceeded. Copy stats,
Clear.

---

## Acceptance (run before reporting)
1. `npm run build` exit 0, zero errors.
2. 11 new tools × 2 locales = 22 new tool HTML files in dist.
3. `adsbygoogle` → 0 matches in dist.
4. FAQPage JSON-LD present on every new tool page.
5. No new npm dependency added (package.json deps still only `qrcode`).
6. Image tools' content explicitly states files are processed locally / never uploaded.

Report: (a) files created/modified, (b) last 20 lines of final `npm run build`,
(c) acceptance results.
