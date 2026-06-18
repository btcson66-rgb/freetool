# Backup v0.2.0

Date: 2026-06-18

This release adds ten local-only browser tools and publishes the existing platform, SEO, and related-tool improvements that were present in the working tree.

## Recovery points

- `v0.1.1` is the exact Git tag for the previously deployed site before this release.
- `v0.2.0` is the exact Git tag for this release.

To restore the previous deployed version:

```powershell
git switch --detach v0.1.1
npm.cmd ci
npm.cmd run build
```

To restore this release:

```powershell
git switch --detach v0.2.0
npm.cmd ci
npm.cmd run build
```

## New tools

- Timestamp Converter
- UUID Generator
- CSV to JSON
- JSON to CSV
- Markdown Previewer
- JPG to WebP
- WebP to JPG
- PDF Page Reorder
- PDF to Image
- PDF Compressor

## Main release files

- `package.json`
- `package-lock.json`
- `src/data/tools.ts`
- `src/lib/toolContent.ts`
- `src/lib/toolWidgets.ts`
- `src/i18n/tools/new-utility-tools.ts`
- `src/components/tools/DataConverter.astro`
- `src/components/tools/ImageFormatConverter.astro`
- `src/components/tools/MarkdownPreviewer.astro`
- `src/components/tools/PdfCompressor.astro`
- `src/components/tools/PdfPageReorder.astro`
- `src/components/tools/PdfToImage.astro`
- `src/components/tools/TimestampConverter.astro`
- `src/components/tools/UuidGenerator.astro`

The Git tags are the authoritative complete backups; they include every tracked project file rather than only the files listed above.
