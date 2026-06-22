# v0.4.0 - Claude Design UI handoff

Date: 2026-06-22

## What changed

- Reworked the shared navigation, footer, home page, category cards, tool cards, and tool-page shell to follow the supplied Claude Design template.
- Added reusable category icons and responsive desktop, tablet, and mobile layouts.
- Added coherent light and dark design tokens, including category colors and legacy tool-widget surface overrides.
- Preserved existing routes, tools, localized Traditional Chinese and English content, analytics, and AdSense-safe layout behavior.
- Updated the visible footer and package version to v0.4.0.

The previous live release is preserved by Git tag `backup-pre-v0.4.0-ui-2026-06-22`, pointing to commit `992959c`.

## Verification

```powershell
npm.cmd run preflight
git diff --check
```

The `files/` directory contains the complete v0.4.0 release file set modified by this UI handoff.
