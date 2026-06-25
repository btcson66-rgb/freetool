# FreeTools SEO Resource System

This system is intentionally draft-first. It supports white-hat SEO work through structured keyword data, content briefs, internal linking checks, schema checks, technical SEO checks, and Search Console feedback. It does not auto-publish bulk article pages.

## Structure

- `keywords/tools-keywords.json`: priority tool keyword database.
- `drafts/article-plans.json`: reviewed-before-publish long-tail article plans.
- `drafts/tool-page-enhancements.json`: tool-page content enhancement briefs.
- `specs/ga4-events.md`: privacy-safe GA4 event contract.
- `specs/quality-gate.md`: publishing quality gate.
- `gsc/`: private Search Console CSV import folder.
- `reports/`: generated audit reports.

## Run Audit

```powershell
npm.cmd run build
npm.cmd run seo:audit
```

Generated reports:

- `seo-system/reports/seo-audit-report.md`
- `seo-system/reports/internal-link-report.md`
- `seo-system/reports/technical-seo-report.md`
- `seo-system/reports/schema-validation-report.md`
- `seo-system/reports/gsc-action-plan.md`

## Add One Tool SEO Resource Pack

1. Add one object to `keywords/tools-keywords.json`.
2. Add article drafts to `drafts/article-plans.json` with `human_reviewed: false`.
3. Add or update a content brief in `drafts/tool-page-enhancements.json`.
4. Run `npm.cmd run build` and `npm.cmd run seo:audit`.
5. Review generated reports before moving any draft into live routes.
