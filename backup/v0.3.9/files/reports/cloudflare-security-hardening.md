# Cloudflare security hardening

Date: 2026-06-22

## Applied in v0.3.9

- Added static compatibility responses for `/favicon.ico` and the three Apple touch icon aliases that appeared in Cloudflare 404 analytics.
- Added CSP coverage to embeddable tools and a build-time security audit covering compatibility icons, CSP coverage, unsafe-eval rejection, script-free redirects, and accidental secret-file publication.
- Kept exploit probes such as WordPress, `.env`, Docker, and framework API paths as real 404 responses. The site does not expose those services.

## Deployment finding

The live response currently contains GitHub Pages/Fastly origin headers (`X-GitHub-Request-Id`, `X-Served-By`, and `Via: 1.1 varnish`) behind Cloudflare. Cloudflare Pages `_headers` and `_redirects` files therefore cannot be treated as active production controls.

The configured API tokens can read HTTP analytics but return `403` for Zone Settings, Rulesets, Firewall Events, Pages projects, and Workers. The controls below must be applied from the Cloudflare dashboard or through a token with narrowly scoped edit access.

## Recommended Cloudflare controls

### 1. Response header transform

Apply to `http.host eq "funnytools.win"`:

```text
X-Content-Type-Options: nosniff
X-Frame-Options: DENY
Content-Security-Policy: frame-ancestors 'none'
Referrer-Policy: strict-origin-when-cross-origin
Permissions-Policy: camera=(), microphone=(), geolocation=()
```

Use the dedicated SSL/TLS HSTS setting with `max-age=31536000`. Do not enable `includeSubDomains` or `preload` until every current and future subdomain is confirmed HTTPS-only.

### 2. Narrow exploit-probe block rule

Action: `Block`

```text
(http.request.uri.path eq "/wp-login.php") or
(http.request.uri.path eq "/xmlrpc.php") or
(starts_with(http.request.uri.path, "/wp-admin/")) or
(starts_with(http.request.uri.path, "/.env")) or
(http.request.uri.path in {"/Dockerfile" "/docker-compose.yml"})
```

Do not block broad prefixes such as `/api`, `/blog`, or `/.well-known`, and do not add country-wide blocks based on the current sample.

### 3. Conservative HTML cache rule

Apply only to GET/HEAD requests whose path extension is empty or `html`. Mark them eligible for cache with an edge TTL of 10 minutes. Keep deployment cache purging enabled. Do not ignore all query parameters until tool URL behavior has been regression-tested.

## Verification

After applying the dashboard controls:

1. Confirm the five response headers on `/`, `/en/`, and one tool page.
2. Confirm the exploit-probe rule blocks only the listed paths.
3. Confirm Googlebot and normal browsers can still load the homepage and tools.
4. Compare 404, 403, 5xx, and cache-hit rates over at least seven days.
