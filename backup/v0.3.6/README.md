# v0.3.6 - Analytics measurement foundation

Date: 2026-06-22

## What changed

- Added privacy-safe tool start, action, completion, download, copy, and error measurement.
- Added share and affiliate-resource click measurement.
- Added a durable analytics event and KPI plan.
- Added analytics coverage and sensitive-payload checks to the release preflight.
- Updated the project version to 0.3.6.

The previous release remains available at Git tag `v0.3.5`.

## Verification

```powershell
npm.cmd run preflight
```

## Restore this release snapshot

```powershell
Copy-Item -Recurse -Force backup\v0.3.6\files\* .
npm.cmd run preflight
```
