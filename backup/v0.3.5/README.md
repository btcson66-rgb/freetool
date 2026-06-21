# v0.3.5 - Support page and curated resources

Date: 2026-06-21

## What changed

- Added the Chinese-only `/support/` page with sharing, feedback, and transparent affiliate-resource sections.
- Added 30 curated active resources with local WebP thumbnails and client-side batch rotation.
- Added navigation, footer, sitemap, metadata, structured data, and responsive presentation for the support page.
- Added `api token/` to `.gitignore` so local credentials cannot be committed.
- Updated the project version to 0.3.5.

The previous release remains available at Git tag `v0.3.4`.

## Verification

```powershell
npm.cmd run preflight
```

## Restore this release snapshot

```powershell
Copy-Item -Recurse -Force backup\v0.3.5\files\* .
npm.cmd run preflight
```
