# SEO Content Models

FunnyTools can scale only when every public route belongs to a known model. New pages must be useful, unique, internally linked, and quality-gated before indexing.

## Indexable Models

- `ToolPage`: one live browser tool, one canonical URL, visible instructions, FAQ, privacy note, related tools, and WebApplication schema.
- `GuideArticle`: educational or workflow article with original explanation, steps, examples, FAQ, related tools, and Article or BlogPosting schema.
- `ExamplePage`: concrete worked example for a live tool. It must use sample data only and link back to the primary tool.
- `TemplatePage`: reusable text/checklist/file template. It must explain when to use the template, limits, and a safe download or copy flow.
- `FAQPage`: narrow question page with a direct answer, context, related tool, visible FAQ, and FAQPage schema only when matching visible content exists.
- `WorkflowPage`: multi-step job flow connecting tools, guides, and checks. It must not be just a list of links.
- `GlossaryPage`: definition page for one term with examples, related terms, and at least one practical tool or guide link.

## Noindex Models

- Search results, sort views, filtered views, query or UTM variants.
- Draft, low-quality, duplicate, test, staging, embed, and redirect-only pages.
- Any page whose canonical does not point to itself.

## Sitemap Buckets

The sitemap index is split into:

- `sitemap-tools.xml`
- `sitemap-guides.xml`
- `sitemap-examples.xml`
- `sitemap-templates.xml`
- `sitemap-workflows.xml`
- `sitemap-faq.xml`
- `sitemap-en.xml`

Empty buckets are allowed during early phases so the architecture is stable before bulk publishing.
