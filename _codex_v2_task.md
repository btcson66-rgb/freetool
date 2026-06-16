# TASK: Free Tools Hub v2 — architecture + monetization-scaffold upgrade

You are working IN-PLACE on an existing, working Astro static site located at the current
working directory (`_tools_hub/`). This site is ALREADY built and good: 33 live tools, 96 HTML
pages, bilingual (zh + en), data-driven. **DO NOT rewrite it. DO NOT delete tools or content.
DO NOT break the existing build.** This is an ADDITIVE upgrade — a v2 "traffic-asset platform"
scaffold layered on top of the existing v1.

After you finish, `npm run build` MUST succeed and the total HTML page count MUST be >= the
current count (it should grow because embed pages are added). Keep bilingual parity (every new
user-facing string needs both `zh` and `en`).

## Existing architecture you must respect (do not change conventions)
- `src/config/site.ts` — `SITE` config + `Locale` type. `adsenseEnabled=false`.
- `src/data/tools.ts` — central `ToolMeta[]` registry. Fields today: slug, category, icon,
  status('live'|'planned'), featured?, isNew?, updated?, name{zh,en}, short{zh,en}.
  Helpers: `liveTools`, `getToolBySlug`, `getToolsByCategory`.
- `src/data/categories.ts` — 7 categories: money, time, random, text, image, fun, study.
- `src/i18n/tools/<slug>.ts` — per-tool bilingual `ToolContent` (name, short, long, seoTitle,
  seoDescription, keywords, instructions[], examples[], faq[], labels, disclaimer?).
- `src/i18n/ui.ts` (chrome strings, `t(lang)`), `src/i18n/pages.ts` (home + legal copy).
- `src/components/tools/<Name>.astro` — one vanilla-JS widget per tool (no UI framework).
- `src/components/` — AdSlot, Breadcrumb, Faq, Footer, LangSwitch, Nav, RelatedTools,
  ShareButtons, ToolCard.
- `src/layouts/` — BaseLayout, PageLayout, ToolLayout.
- Routes in `src/pages/`: `index.astro` (root redirect), `404.astro`, `sitemap.xml.ts`,
  `[lang]/index.astro`, `[lang]/{about,contact,privacy,terms,disclaimer}.astro`,
  `[lang]/tools/index.astro`, `[lang]/tools/[slug].astro`, `[lang]/category/[category].astro`.
- `src/lib/url.ts` (localePath, toolUrl, categoryUrl, absoluteUrl, altLinks, path/asset helpers),
  `src/lib/seo.ts`.
- The slug→widget-component mapping currently lives inside `[lang]/tools/[slug].astro`.

## HARD CONSTRAINTS
- No new heavy dependencies. Only existing deps allowed: `astro`, `qrcode`. No new npm installs.
- No backend, no database, no paid APIs, no analytics scripts.
- Keep ALL monetization OFF: `adsenseEnabled` stays `false`; every new monetization block
  defaults to DISABLED via flags. Build the slots, do not activate them.
- Do not change the existing `base: '/freetools'` / `trailingSlash: 'always'` config.
- Do not remove or rename existing tools, routes, or i18n files.
- Use the existing centralized `lib/url.ts` for all URL building — never hardcode paths.

---

## DELIVERABLE A — Extend the asset registry (`src/data/tools.ts`)
Add these OPTIONAL fields to the `ToolMeta` interface (optional so nothing breaks), and backfill
ALL existing tool entries (live and planned):
- `assetType?: 'tool' | 'calculator' | 'generator' | 'quiz' | 'template' | 'database' | 'game' | 'widget' | 'guide'` (default 'tool')
- `searchIntent?: 'high' | 'medium' | 'low'`
- `shareIntent?: 'high' | 'medium' | 'low'`
- `embedPotential?: 'high' | 'medium' | 'low'`
- `maintenanceRisk?: 'low' | 'medium' | 'high'`
- `monetizationTags?: string[]`  (e.g. ['adsense','sponsor','affiliate'])

Backfill guidance (use judgment, these are defaults):
- assetType: mbti-test/love-type-test/work-personality-test/stress-level-test → 'quiz';
  compound-interest/mortgage-payment/savings-goal/gpa-calculator/grade-average/age-calculator/
  date-difference/business-days/inflation/net-salary/overtime-pay → 'calculator';
  password-generator/color-generator/qr-code-generator → 'generator'; everything else → 'tool'.
- embedPotential 'high' for: random-number-picker, random-name-picker, random-group-generator,
  random-wheel, dice-roller, word-counter, character-counter, countdown-timer, stopwatch,
  random-student-picker, qr-code-generator. 'medium' for most other widgets. 'low' for
  multi-step quizzes (mbti/love/etc.) and tools that need lots of typing.
- maintenanceRisk 'low' for all current tools (planned salary/tax tools 'high').
- monetizationTags: include 'adsense' for all; add 'sponsor'/'affiliate' where natural.
Add a helper `getEmbeddableTools()` returning live tools with `embedPotential !== 'low'`.

## DELIVERABLE B — Embed widget system (the biggest new piece)
1. Extract the slug→widget-component map out of `[lang]/tools/[slug].astro` into a single shared
   module (e.g. `src/lib/toolWidgets.ts`) and have BOTH the tool page and the new embed page
   import it (DRY — no duplicated map).
2. New layout `src/layouts/EmbedLayout.astro`: minimal chrome — NO Nav, NO Footer, NO breadcrumbs,
   NO ads. Just a clean white/transparent container with the widget, the tool H1 (small), and a
   bottom "Powered by Free Tools Hub" link back to the full tool page (use absoluteUrl).
   The page `<head>` MUST include `<meta name="robots" content="noindex,follow">` so embed pages
   never compete with the canonical tool pages in search. Allow framing (do not set
   X-Frame-Options; this is a static site so just don't add framebusting JS).
3. New route `src/pages/[lang]/embed/[slug].astro` with `getStaticPaths` over
   `getEmbeddableTools()` × locales. It renders EmbedLayout + the mapped widget.
4. Add `embedUrl(lang, slug)` to `src/lib/url.ts`.
5. New component `src/components/EmbedCode.astro` ("Embed this tool" block): shows a copy-ready
   `<iframe src="<absolute embedUrl>" ...>` snippet in a read-only code box with a "copy" button
   (vanilla JS). Bilingual heading/labels via ui.ts. Add it to `ToolLayout.astro` (e.g. near
   ShareButtons), rendered ONLY when `tool.embedPotential !== 'low'`.
6. EXCLUDE embed routes from `sitemap.xml.ts` (they are noindex).

## DELIVERABLE C — Reserved monetization components (ALL disabled by default)
Add a `features` object to `SITE` in `site.ts`, e.g.:
`features: { adsense:false, affiliate:false, sponsor:false, relatedResources:false, newsletter:false }`
(Keep the existing `adsenseEnabled` working — you may make AdSlot read either; keep it false.)
Create these components, each returning NOTHING when its flag is false:
- `src/components/AffiliateBlock.astro` — "Recommended resources" affiliate slot.
- `src/components/SponsorBlock.astro` — single sponsor slot.
- `src/components/RelatedResources.astro` — curated external/related links list.
- `src/components/NewsletterSignup.astro` — email capture form (no real submission; just markup,
  disabled). 
All copy bilingual via ui.ts. Place them (disabled, so invisible) in ToolLayout in sensible spots
so future activation is one flag flip. Do NOT add real ad/affiliate scripts.

## DELIVERABLE D — Standard privacy block + 2nd ad position
- Add optional `privacyNote?: string` to the ToolContent shape (both the local interface in
  `ToolLayout.astro` and the per-tool i18n interface). In `ToolLayout`, render a standard
  "Privacy & local processing" section: use `content.privacyNote` if present, else a sensible
  bilingual default pulled from ui.ts (most tools run locally and send nothing to the server).
  Add the default strings to ui.ts. You do NOT need to fill privacyNote in all 33 i18n files —
  the default covers them; optionally add it to a few where the nuance matters.
- Add a second `<AdSlot />` placement just before `<RelatedTools />` (in addition to the existing
  one after the widget), matching v2 ad-placement rules (below tool / before related). Never place
  an ad above the tool interaction area.

## DELIVERABLE E — README
Create `README.md` at the project root documenting: project purpose, stack, the data-driven
architecture, **how to add a new tool** (set status:'live' in tools.ts → create i18n/tools/<slug>.ts
→ create components/tools/<Name>.astro → register in the shared widget map → npm run build),
how the embed system works, how to enable monetization (flip flags in site.ts/features), and the
assetType taxonomy. Keep it concise and accurate to the real code.

## DELIVERABLE F — assetType plumbing (metadata only, NO new heavy content)
Make sure the new `assetType` field is wired so future quiz/template/guide assets can be added
without rework (e.g. the tool listing/cards can read assetType). Do NOT build any new template,
database, or game content — v2 explicitly reserves those for later due to maintenance cost.

---

## FINISH
1. Run `npm run build` and ensure it passes with zero errors.
2. Confirm the HTML page count grew (embed pages added) and existing pages still build.
3. At the end of your run, OUTPUT a concise summary of: files created, files modified, the new
   page count, and any deviations from this brief.
