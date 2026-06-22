# v0.3.9 - Cloudflare error and security hardening

Date: 2026-06-22

## What changed

- Added browser-compatible favicon and Apple touch icon aliases to remove legitimate icon 404 responses.
- Added CSP coverage to embeddable tools and a security preflight for CSP coverage, compatibility assets, script-free redirects, and sensitive-output detection.
- Documented the safe Cloudflare header, WAF, HSTS, and cache settings that still require dashboard permissions.
- Updated the project version to 0.3.9.

The previous release remains available at Git tags `v0.3.8` and `backup-pre-v0.3.9-security-2026-06-22`.

## Verification

```powershell
npm.cmd run preflight
npm.cmd audit --omit=dev
```
