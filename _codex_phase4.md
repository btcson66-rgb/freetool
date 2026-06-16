Implemented all 11 Phase 4 tools and verified the build.

Files modified: `src/data/tools.ts`, `src/pages/[lang]/tools/[slug].astro`.

Files created: 11 widgets in `src/components/tools/` and 11 i18n files in `src/i18n/tools/` for image compressor/resizer, PNG/JPG converters, random wheel, food picker, this-or-that, compound interest, savings goal, mortgage payment, and character counter.

Final `npm run build` last 20 lines:

```text
/en/tools/image-compressor/index.html (+1ms)
/en/tools/image-resizer/index.html (+2ms)
/en/tools/png-to-jpg/index.html (+1ms)
/en/tools/jpg-to-png/index.html (+1ms)
/en/tools/qr-code-generator/index.html (+1ms)
/en/tools/mbti-test/index.html (+1ms)
/en/tools/love-type-test/index.html (+1ms)
/en/tools/random-student-picker/index.html (+1ms)
/en/tools/grade-average/index.html (+1ms)
/en/tools/gpa-calculator/index.html (+1ms)
/zh/tools/index.html (+1ms)
/en/tools/index.html (+1ms)
/zh/index.html (+2ms)
/en/index.html (+2ms)
/index.html (+3ms)
✓ Completed in 195ms.

[build] ✓ Completed in 1.96s.
[build] 96 page(s) built in 2.03s
[build] Complete!
```

Acceptance results: build exit code `0`; 22 new tool HTML files generated; `adsbygoogle` matches `0`; `FAQPage` JSON-LD present on every new tool page; dependencies unchanged (`astro`, `qrcode`); all image pages state local processing / never uploaded. Preview server is running at `http://127.0.0.1:4322/freetools/en/tools/image-compressor/` and returned `200`.