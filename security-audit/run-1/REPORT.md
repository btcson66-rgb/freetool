# Security Audit Report — funnytools.win (run-1)

**Date:** 2026-06-29
**Method:** Cloudflare `security-audit` skill — 6-phase pipeline (recon → parallel
hunting across 5 attack-class agents → validation → reporting).
**Scope:** Full repository (`src/`, `public/`, `scripts/`, `.github/workflows/`,
config). Excluded the tracked `backup/` snapshots from deep analysis (old copies of
source; confirmed to contain no secrets).

## Executive summary

**No exploitable security vulnerabilities were found.** funnytools.win is a static,
fully client-side Astro site with **no backend, no authentication, no database, and
no server-side state** — which removes entire classes of vulnerabilities (SQLi,
auth bypass, IDOR, SSRF-to-internal, server RCE) by architecture. The remaining
realistic attack surface — DOM-based XSS in the in-browser tools, the service
worker, and the CI/CD secret handling — is **handled correctly**. User input that
reaches HTML sinks is either sanitized (DOMPurify for Markdown), HTML-entity-escaped
(an `esc()` helper for the report-generator tools), or written through safe DOM APIs
(`textContent`, canvas `fillText`, input `.value`). Critically, **no tool reflects
URL/query/hash parameters into an HTML sink**, so there is no delivery vector to
turn self-XSS into a real cross-user attack. The CI pipeline keeps secrets in
GitHub Secrets, never logs them or writes them into uploaded artifacts, and has no
script-injection or `pull_request_target` exposure.

The findings below are **all hardening / hygiene notes** — defense-in-depth, not
exploitable issues.

## Baseline comparable

Comparable to other static client-side tool collections (it-tools, CyberChef-style
single-page utilities, online PDF/image converters). The accepted tradeoff for this
class is that all processing is client-side and **self-XSS is not treated as a
vulnerability** — it only matters if a third party can deliver the payload to a
victim. funnytools.win meets or exceeds the security posture of typical peers in
this category (it ships a real CSP and uses DOMPurify, which many such sites do not).

## Findings

| Severity | Title |
|----------|-------|
| — | **No exploitable vulnerabilities found** |

## Hardening notes (defense-in-depth — not vulnerabilities)

These do not have a concrete attack today. They reduce the blast radius of *future*
changes (e.g. if a tool ever starts pre-filling fields from a shared link or import).

1. **Unescaped numeric interpolation in two tools.** `src/components/tools/EducationStatisticsCalculator.astro:138,145,155` and `src/components/tools/GpaCalculator.astro:97,100` build `innerHTML` from template literals without an escaper. Safe **today** because the interpolated values are computed numbers (`Number()`/`.toFixed()`/`format()`) and i18n labels — no free-text user input reaches them. **Recommendation:** route values through the same `esc()` helper used by `Apa7ReportGenerator.astro` / `SpssResultInterpreter.astro`, or use `document.createElement` + `textContent`, so a future feature that pre-fills rows from imported/shared data can't introduce XSS.

2. **JSON-LD `set:html` doesn't neutralize `<`.** `src/layouts/BaseLayout.astro:108` and `src/components/Faq.astro:39` serialize trusted i18n/site data with `JSON.stringify` but don't apply the `.replace(/</g, '\\u003c')` treatment that `src/pages/[...locale]/index.astro:161` already uses. Not exploitable (input is author-controlled repo data). **Recommendation:** apply the same `<`-escaping for consistency, so external/user content can never break out of the `<script type="application/ld+json">` block later.

3. **CSP relies on `'unsafe-inline'` and is delivered via `<meta>`.** A real CSP exists (`BaseLayout.astro:69`, `EmbedLayout.astro`) with `object-src 'none'`, `base-uri 'self'`, `form-action 'self'`, and scoped Google ad/analytics allowlists — good posture. It requires `script-src/style-src 'unsafe-inline'` (Astro inline scripts + AdSense). **Recommendation (long-term):** move toward nonce/hash-based CSP, and serve the CSP as an HTTP response header via a Cloudflare header rule (or a `public/_headers` file) rather than `<meta>` — a meta CSP is applied slightly later and cannot enforce `frame-ancestors`.

4. **No `frame-ancestors` / `X-Frame-Options`.** Clickjacking risk is negligible (static site, no auth, no state-changing actions; embed pages are intentionally frameable). **Recommendation:** if desired, set `frame-ancestors` on non-embed pages via the same HTTP header rule.

5. **Pin GitHub Actions to commit SHAs.** Workflows use mutable major-version tags (`actions/checkout@v4`, etc.). All are first-party `actions/*` (low risk), but **pinning to full commit SHAs** removes the compromised-tag supply-chain risk.

6. **Repo hygiene: `backup/` is still tracked.** Commit `3f17731` ("remove backup from repo") added `backup/` to `.gitignore` but never ran `git rm --cached`, so **464 `backup/**` files remain tracked**. They contain **no secrets** (verified), so this is bloat/hygiene, not a security issue — but the `.gitignore` entry gives a false impression that backups are untracked. **Recommendation:** `git rm -r --cached backup/` and commit. (Also: `_codex_pdf_out.md` is ~3.3 MB of generated output — bloat only.)

7. **Artifact retention.** SEO `reports/` artifacts are non-sensitive; consider a short `retention-days` on the `upload-artifact` steps as general hygiene.

## What the codebase does well (calibrates trust in this audit)

- **Architecture eliminates server-side risk** — fully static, no backend/auth/DB.
- **Markdown is sanitized with DOMPurify** (`MarkdownPreviewer.astro:14`).
- **Report-generator tools use an `esc()` HTML-entity escaper** for user text (`Apa7ReportGenerator.astro:82`, `SpssResultInterpreter.astro:96`).
- **No URL/param/hash reflection into HTML anywhere** — the `?q=` search param is assigned to an input `.value`, not innerHTML (`tools/index.astro:222`).
- **Service worker only caches same-origin, `response.ok`, allow-listed assets**; documents are network-first; no `postMessage` handler (`public/sw.js`).
- **External links carry correct `rel`** (`noopener noreferrer` / `sponsored nofollow noopener`); affiliate URLs forced to `https:`, affiliate images restricted to same-origin (`public/support-products.js`).
- **localStorage is never trusted into a dangerous sink** — only known tool-slugs survive a `toolMap.get()` + `filter(Boolean)` round trip (`src/lib/userTools.client.ts`, `index.astro`).
- **CI keeps secrets in GitHub Secrets**, never echoes them, never writes them into uploaded artifacts; least-privilege `GITHUB_TOKEN`; no `pull_request_target`/script injection.
- **No `eval` / `new Function` / string-arg timers / wildcard `postMessage`** anywhere; dynamic `import()` uses static literal module names.
- **A real CSP ships by default.**

## Coverage note

Per the skill's methodology, a single audit run typically surfaces ~50% of issues a
codebase contains; coverage improves with repeated runs that weight different attack
classes. This run weighted heavily toward client-side XSS, the service worker, and
CI secrets — the areas that actually matter for a static site. A future run could
re-examine the PDF/image processing libraries' handling of malformed files
(memory/DoS in `pdf-lib`/`pdfjs` paths) and the third-party ad/analytics integration
boundary in more depth. Given the architecture, no high-impact surface is expected to
remain unexamined.
