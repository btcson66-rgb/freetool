Implemented v2 scaffold in place. `npm run build` passes.

**Created**
- `README.md`
- `src/lib/toolWidgets.ts`
- `src/lib/toolContent.ts`
- `src/layouts/EmbedLayout.astro`
- `src/pages/[lang]/embed/[slug].astro`
- `src/components/EmbedCode.astro`
- `src/components/AffiliateBlock.astro`
- `src/components/SponsorBlock.astro`
- `src/components/RelatedResources.astro`
- `src/components/NewsletterSignup.astro`

**Modified**
- `src/data/tools.ts`
- `src/config/site.ts`
- `src/lib/url.ts`
- `src/pages/[lang]/tools/[slug].astro`
- `src/layouts/ToolLayout.astro`
- `src/layouts/BaseLayout.astro`
- `src/components/AdSlot.astro`
- `src/components/ToolCard.astro`
- `src/i18n/ui.ts`
- `src/styles/global.css`
- all 33 files under `src/i18n/tools/*.ts` to add optional `privacyNote?: string`

**Verification**
- Build: `npm run build` succeeded.
- HTML pages: `150` total, up from `96`.
- Embed pages added: `54`.
- Sample embed page includes `noindex,follow`.
- Sitemap has no `/embed/` URLs.
- Built output contains no AdSense script/slot markup or reserved monetization copy while flags are false.

Deviations from brief: none.