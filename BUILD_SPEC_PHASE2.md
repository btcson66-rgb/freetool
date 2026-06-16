# BUILD SPEC — Free Tools Hub Phase 2 (9 new tools)

> Work INSIDE `_tools_hub/` only. The Astro project is already built and passing.
> Do NOT touch any file outside `_tools_hub/`. Do NOT modify existing live tools.
> After adding each tool, run `npm run build` and fix all errors before continuing.

## Architecture summary (already in place)

- `src/data/tools.ts` — central tool registry. Change `status` from `'planned'` → `'live'` for each new tool and add `updated: '2026-06-16'`, `featured: true`.
- `src/i18n/tools/<slug>.ts` — bilingual content file per tool (required).
- `src/components/tools/<ComponentName>.astro` — interactive widget per tool.
- `src/pages/[lang]/tools/[slug].astro` — already handles all live tools via a slug→component map. You MUST add each new slug to that map.
- `src/config/site.ts` — do NOT change.

## Step-by-step for EACH new tool

1. In `src/data/tools.ts`: set `status: 'live'`, add `updated: '2026-06-16'`, `featured: true` for the slug.
2. Create `src/i18n/tools/<slug>.ts` with full bilingual `ToolContent` (name, short, long, seoTitle, seoDescription, keywords, instructions, examples, faq ≥3 Q&A, labels, optional disclaimer).
3. Create `src/components/tools/<Component>.astro` — vanilla JS only (no external libs EXCEPT qrcode for QR Code generator — use `qrcode` npm package, import as `import QRCode from 'qrcode'` and call server-side in the Astro frontmatter to pre-render, then hydrate with `client:load`).
4. Add the slug → component mapping in `src/pages/[lang]/tools/[slug].astro`.
5. `npm run build` — fix all errors.

## The 9 tools to implement

---

### 1. `random-name-picker` (category: random, icon: 🎰)
**zh**: 抽籤工具 / **en**: Random Name Picker

Widget behaviour:
- Large textarea for names/items (one per line).
- Controls: Pick 1 (big button), Pick N (input + button), Reset list.
- Options: "Remove picked names from list" checkbox (default ON — no replacement).
- Output: large result display showing the picked name(s). Animate with a brief "spinning" text effect (cycle random names for 0.6s, then land on result — pure CSS/JS, no library).
- Copy button copies the result.

i18n labels: textarea placeholder, "Pick 1", "Pick N", "How many?", "Remove after picking", result empty state, error when list is empty, error when N > remaining items.

---

### 2. `random-group-generator` (category: random, icon: 👥)
**zh**: 隨機分組工具 / **en**: Random Group Generator

Widget behaviour:
- Textarea: one name per line.
- Input: Number of groups (default 2).
- Button: Generate Groups. Reset.
- Output: display groups as labelled cards (Group 1, Group 2, …), each listing its members. Members are shuffled and distributed as evenly as possible (round-robin after shuffle).
- Copy All button copies all groups as plain text.

Labels: textarea placeholder, "Number of groups", "Generate", group label prefix (e.g. "第 {n} 組" / "Group {n}"), copy all, empty/invalid error.

---

### 3. `countdown-timer` (category: time, icon: ⏳)
**zh**: 倒數計時器 / **en**: Countdown Timer

Widget behaviour:
- Mode A — Duration: input HH:MM:SS (or just MM:SS). Start/Pause/Reset.
- Mode B — Target datetime: date+time picker; display countdown to that moment in D days HH:MM:SS.
- Big display: DD:HH:MM:SS (hide leading zeros for days/hours if zero, but always show MM:SS).
- On reach zero: Web Audio beep, flash display, show "時間到！/ Time's up!" message.
- Update `document.title` with remaining time while running.
- Tab toggle between Duration and Target modes.

Labels: mode tabs, HH/MM/SS inputs, target date label, start/pause/reset, "Time's up", days/hours/mins/secs abbreviations.

---

### 4. `date-difference` (category: time, icon: 📅)
**zh**: 日期差計算器 / **en**: Date Difference Calculator

Widget behaviour:
- Two date pickers (Start date, End date). Default: today and today+30.
- On calculate: show difference in:
  - Total days (including / excluding end date, toggle)
  - Weeks and remaining days
  - Months and remaining days (approximate)
  - Years, months, days breakdown
- Also show: number of weekdays, number of weekends in the range.
- Copy result button.

Labels: start date, end date, calculate, include end date toggle, days/weeks/months/years labels, weekdays, weekends, copy result.

---

### 5. `age-calculator` (category: time, icon: 🎂)
**zh**: 年齡計算器 / **en**: Age Calculator

Widget behaviour:
- Birthday date picker (default blank, show placeholder).
- Calculate as of: today (default) or custom date.
- Output: Age in years / months / days / hours (approximate). Also: next birthday countdown (days until). Days lived total.
- Fun facts: what day of the week they were born, approximate heartbeats lived (70 bpm * days * 1440 minutes — note as approximate fun fact).
- Copy result button.

Labels: birthday label, "as of" label, age result labels (years/months/days/hours lived), next birthday label, born on weekday, heartbeats fun fact label.

---

### 6. `case-converter` (category: text, icon: 🔡)
**zh**: 大小寫轉換 / **en**: Case Converter

Widget behaviour:
- Textarea input.
- Conversion buttons (each immediately replaces/shows result):
  - UPPERCASE
  - lowercase
  - Title Case (capitalize first letter of each word)
  - Sentence case (capitalize first letter of each sentence)
  - camelCase
  - snake_case
  - kebab-case
  - CONSTANT_CASE
- Result shown in a read-only output textarea (or same textarea updates in place — pick the cleanest UX).
- Copy and Clear buttons.

Note: CJK characters pass through unchanged for all conversions. Only affect ASCII letters.

Labels: input placeholder, each conversion button label, copy, clear.

---

### 7. `qr-code-generator` (category: image, icon: 📷)
**zh**: QR Code 產生器 / **en**: QR Code Generator

Implementation note: Use the `qrcode` npm package (already in many Astro projects).
- Install: add `"qrcode": "^1.5.4"` to package.json dependencies and `"@types/qrcode": "^1.5.5"` to devDependencies. Run npm install.
- Generate QR code client-side in browser using `import('qrcode').then(QRCode => QRCode.toCanvas(...))`.
- DO NOT try to pre-render the QR in Astro frontmatter (it's dynamic/user input).

Widget behaviour:
- Text input: URL or any text (placeholder: https://example.com).
- Options: Error correction level (L/M/Q/H dropdown, default M), Size (128/256/512px, default 256).
- QR renders live (debounce 300ms) into a `<canvas>` element.
- Download PNG button: uses canvas.toDataURL() → anchor download.
- Copy Image button: uses Clipboard API to copy canvas as blob (with fallback message if unsupported).

Labels: text input label/placeholder, error correction label, size label, download PNG, copy image, copy unsupported message.

---

### 8. `mbti-test` (category: fun, icon: 🧩)
**zh**: MBTI 測驗 / **en**: MBTI Personality Test

Widget behaviour (quiz flow):
- 24 questions total (3 per dimension × 4 dimensions: E/I, S/N, T/F, J/P).
- Each question: show statement, two option buttons (A / B). No skipping.
- Progress bar showing X/24.
- After all 24: show result card with:
  - 4-letter type (e.g. INTJ)
  - Type name (zh: 建築師 / en: The Architect — use standard MBTI type names)
  - Score breakdown bar for each dimension (e.g. I 68% / E 32%)
  - 3-sentence description
  - Famous people with this type (2-3 names)
  - Strengths list (3 items)
- Share buttons. Retake button.

Write GENUINE questions (not placeholder text). Each question must clearly map to one dimension. Use everyday scenarios, not abstract statements.

All 16 type results must be defined in the i18n file with: typeName, description (3 sentences), strengths (3 items), famousPeople (2-3 names).

Labels: question X of 24, option A/B, progress, result title, score labels, retake, share.

---

### 9. `love-type-test` (category: fun, icon: 💘)
**zh**: 戀愛類型測驗 / **en**: Love Type Test

Widget behaviour (quiz flow):
- 12 questions, each with 4 options (A/B/C/D).
- Each option maps to one of 4 love types: 主動型(Initiator)/慢熱型(Slow-burn)/守護型(Guardian)/自由型(Free-spirit).
- Tally votes per type; the type with most votes wins.
- Result card: type name + icon, 2-sentence description, how you behave in relationships, compatible type, share buttons, retake.

4 result types:
- 主動型 / Initiator: takes initiative, expressive, leads in romance
- 慢熱型 / Slow-burn: needs time to open up, deep bonds, loyal
- 守護型 / Guardian: protective, stable, prioritises partner's wellbeing
- 自由型 / Free-spirit: values independence, fun-loving, avoids pressure

Write 12 genuine scenario-based questions with 4 options each clearly mapping to a type.

Labels: question X of 12, options A-D, result type, description, compatible type label, retake, share.

---

## Acceptance (run before reporting done)

1. `npm run build` exits code 0, zero errors.
2. All 9 new tools appear in `dist/` for both `/zh/` and `/en/` → 18 new HTML files.
3. `adsbygoogle` → 0 matches in dist.
4. Each new tool page has FAQPage JSON-LD (grep `FAQPage`).
5. QR Code: `qrcode` package installed in node_modules.
6. MBTI: all 16 type results defined in the i18n file.

Report: (a) files created, (b) last 20 lines of final `npm run build`, (c) acceptance check results.
