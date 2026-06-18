# Backup v0.2.1

Date: 2026-06-19

Patch release addressing audit findings from dual-agent (Claude + Codex) comprehensive review.

## Recovery points

- `v0.2.0` is the previous release tag.
- `v0.2.1` is the tag for this release.

To restore the previous version:

```powershell
git switch --detach v0.2.0
npm.cmd ci
npm.cmd run build
```

To restore this release:

```powershell
git switch --detach v0.2.1
npm.cmd ci
npm.cmd run build
```

## Changes

- **Pin dependency versions**: `astro` pinned to `^6.4.7`, `typescript` to `^6.0.3` (were `"latest"`, risking silent breakage on major bumps)
- **Fix apple-touch-icon**: Replace SVG reference (ignored by iOS) with proper 180x180 PNG
- **Add apple-touch-icon.png**: Generated from favicon.svg design for iOS home-screen bookmarks

## Changed files

- `package.json`
- `src/layouts/BaseLayout.astro`
- `public/apple-touch-icon.png` (new)
- `backup/v0.2.1/README.md` (new)

The Git tag `v0.2.1` is the authoritative complete backup.
