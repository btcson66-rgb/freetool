# Architecture — funnytools.win

## Application type
Static multi-language utility website built with **Astro** (`output: 'static'`),
deployed to GitHub Pages (origin) and proxied by Cloudflare. Site:
`https://funnytools.win`. ~85 client-side "tools" (PDF utilities, image
converters, calculators, text utilities, generators) that run **entirely in the
browser** — no application backend, no database, no user accounts, no auth.

## Who uses it / trust model
- **End users**: anonymous visitors. All tool processing is client-side; data
  never leaves the browser. There is no server to attack at runtime — the
  "server" is a CDN serving static files.
- **Operators/CI**: GitHub Actions builds and deploys, and runs SEO/indexing
  scripts that hold third-party API secrets (IndexNow, Bing, GSC, GA4,
  Cloudflare, Discord).
- There is **no authentication or authorization model** — by design, this is a
  public static site.

## Tech stack
- Astro static site generator; `.astro` components with inline `<script>` for
  tool logic. TypeScript data modules under `src/data`, `src/i18n`.
- Build-time content from in-repo data files (trusted, author-controlled).
- Node ESM scripts under `scripts/` for SEO/analytics automation (run in CI).
- Client assets in `public/` incl. a **service worker** (`public/sw.js`),
  `home-search.js`, `support-products.js`, `install-prompt.js`.
- GitHub Actions: `deploy.yml`, `seo-indexing.yml`.

## Trust boundaries / input surfaces
Because there is no backend, the meaningful trust boundaries are:

1. **Browser DOM sinks fed by user input** — the primary attack surface.
   ~30 `innerHTML`/`set:html`/`insertAdjacentHTML` occurrences across 24 files.
   User input arrives via text fields, file uploads (images, PDFs, JSON,
   markdown), and URL/query params. Risk: **DOM-based / self-XSS**, and
   **stored-via-URL XSS** if any tool reflects `location`/query params into HTML.
   High-interest tools: `MarkdownPreviewer`, `JsonFormatter`, `DataConverter`,
   `Apa7ReportGenerator`, `SpssResultInterpreter`, `ChartMaker`, `CaseConverter`,
   `Base64Tool`, `UrlEncoder`, `QrCodeGenerator`, `EmbedCode`.

2. **Build-time `set:html`** in layouts/pages (`BaseLayout.astro`,
   `[...locale]/index.astro`, `blog/[slug].astro`, `Faq.astro`) — content comes
   from in-repo data (trusted), but verify none of it interpolates runtime input.

3. **Service worker** (`public/sw.js`) — cache poisoning / scope abuse / stale
   content / interception bugs.

4. **CI secrets handling** — `scripts/*` and workflows. Risk: secret leakage in
   logs/artifacts, script injection via untrusted workflow context, over-broad
   token permissions. Note: workflows trigger only on `push`/`schedule`/
   `workflow_dispatch` (no `pull_request_target`).

5. **Third-party embeds** — AdSense (`AdSlot`), affiliate/sponsor blocks,
   analytics. Risk: injection points, referrer/PII leakage, CSP gaps.

6. **External links / share buttons** (`ShareButtons`, `Footer`, affiliate) —
   `target="_blank"` reverse tabnabbing, open-redirect-style URL building.

## Baseline comparable
Comparable to other static client-side tool collections (e.g. it-tools,
cyberchef-style single-page utilities, online PDF/image tool sites). The
accepted tradeoff for these is that all processing is client-side and self-XSS
is generally not a vulnerability — UNLESS input can be delivered by a third
party (URL params, shared links, file a victim is tricked into opening) and
reaches an HTML sink, which elevates it to real XSS.

## Key files (Phase 2 starting points)
- Tool components: `src/components/tools/*.astro` (esp. the high-interest list)
- Shared components: `src/components/{EmbedCode,ShareButtons,Faq,AdSlot,Footer,NewsletterSignup}.astro`
- Layouts/pages: `src/layouts/BaseLayout.astro`, `src/pages/[...locale]/**`
- Client scripts: `public/{sw.js,home-search.js,support-products.js,install-prompt.js}`
- CI: `.github/workflows/{deploy,seo-indexing}.yml`, `scripts/**`
- Config: `astro.config.mjs`, `src/config/site.ts`, `package.json`

## No prior runs (this is run-1). Coverage improves with repeat runs.
