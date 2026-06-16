Implemented the 10 Phase 3 tools and site polish inside `_tools_hub/`.

**Files created:** 10 widgets, 10 i18n files, `src/pages/404.astro`  
**Files modified:** `src/data/tools.ts`, `src/pages/[lang]/tools/[slug].astro`, `src/pages/[lang]/index.astro`, `src/i18n/pages.ts`

**Final `npm run build` last 20 lines:**
```text
/en/tools/case-converter/index.html (+1ms)
/en/tools/json-formatter/index.html (+1ms)
/en/tools/base64/index.html (+1ms)
/en/tools/url-encoder/index.html (+1ms)
/en/tools/qr-code-generator/index.html (+1ms)
/en/tools/mbti-test/index.html (+1ms)
/en/tools/love-type-test/index.html (+1ms)
/en/tools/random-student-picker/index.html (+1ms)
/en/tools/grade-average/index.html (+3ms)
/en/tools/gpa-calculator/index.html (+2ms)
/zh/tools/index.html (+2ms)
/en/tools/index.html (+2ms)
/zh/index.html (+2ms)
/en/index.html (+2ms)
/index.html (+2ms)
✓ Completed in 177ms.

[build] ✓ Completed in 1.90s.
[build] 74 page(s) built in 1.99s
[build] Complete!
```

**Acceptance results:**
- `npm run build`: exit code `0`
- New tool HTML files: `20/20`; missing: none
- `dist/404.html`: present
- `adsbygoogle` in `dist`: `0` matches
- FAQPage JSON-LD on every new tool page: present; missing: none
- Dependencies unchanged by this work: `astro=latest`, `qrcode=^1.5.4`; dev deps `@types/qrcode=^1.5.5`, `typescript=latest`
- New/changed source hardcoded `/freetools/`: `0` matches