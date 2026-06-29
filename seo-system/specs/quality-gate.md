# SEO Resource Quality Gate

Before any new tool page, category page, or article is published, all checks below must pass.

## Required Checks

- Clear search intent is documented in `seo-system/keywords/tools-keywords.json` or the article draft.
- The page solves a real user task with original steps, examples, mistakes, and FAQ.
- The page is not a keyword-swapped duplicate or thin content.
- Title and meta description are unique across the built site.
- Internal links include at least one primary tool or category link, plus relevant supporting links.
- Canonical URL exists and points to the intended public route.
- Sitemap includes the public route.
- Sitemap URLs do not include query strings, filters, sort states, UTM parameters, draft/test/staging paths, or duplicate canonical variants.
- Visible FAQ exists before `FAQPage` schema is added.
- JSON-LD matches visible page content.
- Rendered text has no mojibake or placeholder corruption such as `????`, `�`, or common broken Traditional Chinese encoding fragments.
- All internal links resolve to built routes or intentional static assets.
- `human_reviewed` is true in the draft or release checklist.

## Blockers

- No visible content beyond a tool widget and generic intro.
- FAQ schema exists but visible FAQ does not.
- Article is created only because a keyword exists.
- Page targets a tool that has no live route and is not explicitly marked as planned.
- User input, file names, generated passwords, or private contents are sent to analytics.
- Search, sort, filter, UTM, low-quality, draft, duplicate, embed, and redirect-only pages are indexable or present in the sitemap.
