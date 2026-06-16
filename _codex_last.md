Implemented Phase 1 in `_tools_hub` and verified the build.

**Files Created**
- `package.json`, `package-lock.json`, `astro.config.mjs`, `tsconfig.json`, `.gitignore`
- `public/robots.txt`, `public/.nojekyll`, `public/assets/.gitkeep`
- `.github/workflows/deploy.yml`
- `src/config/site.ts`
- `src/data/categories.ts`, `src/data/tools.ts`
- `src/i18n/ui.ts`, `src/i18n/pages.ts`
- `src/i18n/tools/random-number-picker.ts`, `pomodoro-timer.ts`, `word-counter.ts`
- `src/lib/url.ts`, `src/lib/seo.ts`
- `src/layouts/BaseLayout.astro`, `ToolLayout.astro`, `PageLayout.astro`
- `src/components/AdSlot.astro`, `Breadcrumb.astro`, `Faq.astro`, `Footer.astro`, `LangSwitch.astro`, `Nav.astro`, `RelatedTools.astro`, `ShareButtons.astro`, `ToolCard.astro`
- `src/components/tools/RandomNumberPicker.astro`, `PomodoroTimer.astro`, `WordCounter.astro`
- `src/pages/index.astro`, `src/pages/sitemap.xml.ts`
- `src/pages/[lang]/index.astro`, `about.astro`, `contact.astro`, `privacy.astro`, `terms.astro`, `disclaimer.astro`
- `src/pages/[lang]/tools/index.astro`, `src/pages/[lang]/tools/[slug].astro`
- `src/pages/[lang]/category/[category].astro`
- `src/styles/global.css`

**Last Build Tail**
```text
15:33:41 ├─ /zh/tools/random-number-picker/index.html
15:33:41 ├─ /zh/tools/pomodoro-timer/index.html
15:33:41 ├─ /zh/tools/word-counter/index.html
15:33:41 ├─ /en/tools/random-number-picker/index.html
15:33:41 ├─ /en/tools/pomodoro-timer/index.html
15:33:41 ├─ /en/tools/word-counter/index.html
15:33:41 ├─ /zh/tools/index.html
15:33:41 ├─ /en/tools/index.html
15:33:41 ├─ /zh/index.html
15:33:41 ├─ /en/index.html
15:33:41 ├─ /index.html
15:33:41 ✓ Completed in 88ms.
15:33:41 [build] ✓ Completed in 1.12s.
15:33:41 [build] 35 page(s) built in 1.18s
15:33:41 [build] Complete!
```

**Acceptance Checks**
- `npm install`: passed.
- `npm run build`: passed with exit code `0`.
- Required `dist/` files missing: `0`.
- `rg adsbygoogle dist`: `0` matches.
- Live tool pages with `hreflang`: `6/6`.
- `rg '/freetools/' src`: `0` matches.
- Planned tool pages generated: `0`.
- Live tool page structure markers: `6/6` have H1, intro, widget, instructions, examples, FAQPage JSON-LD, related tools, last updated, and share buttons.