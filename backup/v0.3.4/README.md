# v0.3.4 - Language switch regression guard

Date: 2026-06-21

## What changed

- Added a post-build audit that scans every rendered language switch link.
- The audit fails when a switch points to a static page that does not exist.
- Added the audit to the standard `preflight` release check.
- Updated the project version to 0.3.4.

The pre-release site state is preserved by Git tag
`backup-pre-v0.3.4-lang-switch-2026-06-21` at commit
`486a81dee3b120f0b328e5fa6606d23df75acb8c`.

## Verification

```powershell
npm.cmd run preflight
```

## Restore this release snapshot

```powershell
Copy-Item -Recurse -Force backup\v0.3.4\files\* .
npm.cmd run preflight
```

To restore the exact pre-release code instead, use the backup tag above.
