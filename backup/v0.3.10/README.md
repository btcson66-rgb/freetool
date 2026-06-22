# v0.3.10 - Site-wide SEO title and description improvements

Date: 2026-06-22

## What changed

- Standardized all page titles to a consistent `... - FunnyTools` suffix (previously a mix of `｜FunnyTools 免費線上工具箱` and `| FunnyTools` patterns across pages).
- Updated `toolSeoTitle()` in `src/lib/seo.ts` and `brandedTitle` in `src/layouts/BaseLayout.astro` to generate the unified suffix automatically.
- Simplified `brandedDescription` in `BaseLayout.astro` (removed the redundant site-name prefix from zh meta descriptions).
- Replaced generic seoTitles (`"[Name] | 免費線上工具"`) with keyword-rich, benefit-oriented titles for all 10 tools in `src/i18n/tools/new-utility-tools.ts`.
- Improved seoTitles across 33 individual tool i18n files (zh + en).
- Updated homepage, all 6 legal pages (zh + en), tools index page, 404 page, and category page fallback titles with descriptive keyword phrases.
- Updated the project version to 0.3.10.

The previous release remains available at Git tags `v0.3.9` and `backup-pre-v0.3.10-seo-2026-06-22`.

## Verification

```powershell
npm.cmd run build
npm.cmd run preflight
```

Build verified: 466 pages generated, no errors.
