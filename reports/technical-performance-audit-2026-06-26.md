# Technical Performance Audit - 2026-06-26

## Scope

Checked the homepage, shared layouts, tool-page rendering path, PWA cache policy, and heavy PDF/image operation risk while implementing the UX/SEO/PWA pass.

## Findings

- Homepage uses metadata, cards, and lightweight search data from `src/data/tools.ts` and `src/lib/toolContent.ts`; it does not import the interactive tool widget registry.
- Tool pages still use `src/lib/toolWidgets.ts` to map slugs to Astro components. Astro renders the selected widget per route, but the registry remains the main place to watch if client bundles grow.
- PDF and image tools remain browser-local. The new service worker does not cache uploaded files, blob URLs, API calls, or support product JSON.
- The new PWA cache is limited to static app shell pages, icons, manifest, and successful same-origin static assets.

## Follow-up TODO

- Add a Web Worker wrapper for one representative PDF tool, preferably `merge-pdf`, then reuse the pattern for split/reorder/compress where it reduces main-thread blocking.
- Add a Web Worker wrapper for one representative image tool, preferably `image-compressor`, before expanding to resize/crop/format conversion.
- Add bundle-size inspection to preflight if homepage JS grows unexpectedly.
- Keep tool-specific libraries out of homepage imports; shared homepage search should continue using metadata only.
