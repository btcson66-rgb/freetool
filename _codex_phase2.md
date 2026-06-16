Done. Implemented all 9 Phase 2 tools and kept changes inside `_tools_hub/`.

**Files Created**
```text
src/i18n/tools/random-name-picker.ts
src/i18n/tools/random-group-generator.ts
src/i18n/tools/countdown-timer.ts
src/i18n/tools/date-difference.ts
src/i18n/tools/age-calculator.ts
src/i18n/tools/case-converter.ts
src/i18n/tools/qr-code-generator.ts
src/i18n/tools/mbti-test.ts
src/i18n/tools/love-type-test.ts
src/components/tools/RandomNamePicker.astro
src/components/tools/RandomGroupGenerator.astro
src/components/tools/CountdownTimer.astro
src/components/tools/DateDifference.astro
src/components/tools/AgeCalculator.astro
src/components/tools/CaseConverter.astro
src/components/tools/QrCodeGenerator.astro
src/components/tools/MbtiTest.astro
src/components/tools/LoveTypeTest.astro
```

Also modified: `src/data/tools.ts`, `src/pages/[lang]/tools/[slug].astro`, `package.json`, `package-lock.json`.

**Last 20 Lines Of Final `npm run build`**
```text
17:09:17   ├─ /en/tools/word-counter/index.html (+1ms)
17:09:17   ├─ /en/tools/random-name-picker/index.html (+1ms)
17:09:17   ├─ /en/tools/random-group-generator/index.html (+1ms)
17:09:17   ├─ /en/tools/countdown-timer/index.html (+1ms)
17:09:17   ├─ /en/tools/date-difference/index.html (+1ms)
17:09:17   ├─ /en/tools/age-calculator/index.html (+1ms)
17:09:17   ├─ /en/tools/case-converter/index.html (+1ms)
17:09:17   ├─ /en/tools/qr-code-generator/index.html (+1ms)
17:09:17   ├─ /en/tools/mbti-test/index.html (+2ms)
17:09:17   ├─ /en/tools/love-type-test/index.html (+1ms)
17:09:17   ├─ /zh/tools/index.html (+1ms)
17:09:17   ├─ /en/tools/index.html (+1ms)
17:09:17   ├─ /zh/index.html (+2ms)
17:09:17   ├─ /en/index.html (+1ms)
17:09:17   ├─ /index.html (+2ms)
17:09:17 ✓ Completed in 113ms.

17:09:17 [build] ✓ Completed in 1.41s.
17:09:17 [build] 53 page(s) built in 1.48s
17:09:17 [build] Complete!
```

**Acceptance Checks**
```text
npm run build exit code: 0
18 new zh/en tool HTML files: pass, missing_count=0
adsbygoogle in dist HTML: pass, matches=0
FAQPage JSON-LD on every new tool page: pass, missing_count=0
qrcode installed in node_modules: pass
MBTI all 16 result types defined for both locales: pass, missing_or_single_locale_count=0
```

Note: `npm install` succeeded; npm reported 3 high-severity audit findings, but I did not run `npm audit fix` because that would be outside the requested QR dependency install.