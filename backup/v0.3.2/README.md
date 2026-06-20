# v0.3.2 — AdSense/SEO QA polish

Date: 2026-06-20

## What changed

Patch release from a full AdSense-readiness QA pass (preflight + headless
runtime audit, desktop + mobile). No bugs were found in the live site; these
are small, additive quality/perf improvements only. No new dependencies, no
behaviour changes to any tool.

### Files

- `src/layouts/BaseLayout.astro`
  - Added an AdSense-origin resource hint (`preconnect` + `dns-prefetch` to
    `https://pagead2.googlesyndication.com`), gated on `adsenseEnabled` and
    placed just before the existing async `adsbygoogle.js` script. Speeds up ad
    script + ad serving connection setup (helps LCP). Resource hints only — no
    rendering or policy impact.
- `src/lib/seo.ts`
  - `endSentence` is now locale-aware: English meta descriptions end with `.`
    instead of a stray Chinese `。`.
  - New `cleanSentenceFragment` trims a dangling preposition/article left by
    truncating English descriptions, so they read cleanly.
- `src/components/tools/MarkdownPreviewer.astro`
  - Default sample text starts at `##` instead of `#`, so the client-rendered
    preview no longer injects a second `<h1>` into the tool page at runtime.
- `src/pages/zh/[...path].astro`
  - Added a favicon `<link>` to the zh redirect stub for consistency.
- `package.json` / `package-lock.json` — version bumped to 0.3.2.

## Verification

- `npm run preflight` passes: build (465 pages) + AdSense preflight, 197
  indexable URLs, zero errors and zero warnings.
- Headless runtime audit: homepage, `/tools/json-formatter/`,
  `/tools/qr-code-generator/`, search, and 404 — zero console errors; single
  H1 per page; no duplicate IDs; 0px horizontal overflow at 375px (mobile) and
  on desktop.
- Confirmed the `preconnect`/`dns-prefetch` hints ship in the built `zh` and
  `en` HTML and the `adsbygoogle.js` script is unchanged.
- `/en/` tool and category meta descriptions now end with a clean English
  period (no stray `。`, no dangling preposition).

## Restore

```powershell
Copy-Item -Recurse -Force backup\v0.3.2\files\* .
npm.cmd run build
```
