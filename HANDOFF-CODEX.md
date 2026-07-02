# FunnyTools SEO 優化任務交接書（給 Codex 指揮者）

> 產生日期：2026-07-02
> 交接來源：Claude Code 雲端 session（分支 `claude/funnytools-optimization-review-tr685u`）
> 用途：在本機開新對話，由該對話指揮 Codex 依本文件執行。執行前先讀完「三、關鍵地雷」。

---

## 一、目前狀態（已完成、已推送）

分支 `claude/funnytools-optimization-review-tr685u`（commit `22e869f`）已包含一輪全站優化，**尚未合併到 main**：

- 效能：首頁 158KB→114KB、hover 預載（BaseLayout 內，刻意不用 Astro 內建 prefetch，因為會注入 219 個純轉址頁）、ToolLayout MutationObserver 修復、廣告位預留高度防 CLS、SW 快取上限 120 筆
- 深色模式：約 80 處硬編碼白底改為主題變數（畫布類工具的白底是匯出功能需要，**刻意保留**：Sketchpad/Cad2dBoard/FlowchartMaker/ChartMaker/ImageCrop/QrCodeGenerator 的 canvas 規則）
- 工具卡片：`<a>` 包 `<button>` 的無效 HTML 改為 div + stretched link（`ToolCard.astro` + `global.css` 的 `.tile-linked`/`.tool-card__link`）
- SEO：Consent Mode v2（EEA/UK/CH 預設拒絕）、sitemap lastmod 改真實內容日期、WebApplication 加 dateModified、移除 meta keywords、新增 `/llms.txt`、robots.txt 明列 AI 爬蟲
- 驗證：`npm run preflight` 六項稽核全過 + Playwright 16 項端到端測試通過

**第一步：本機先 `git fetch origin && git checkout claude/funnytools-optimization-review-tr685u`，在這個分支上繼續（或先合併進 main 再開新分支）。**

---

## 二、研究結論摘要（2025-2026 最新規則，已查證）

1. **Helpful Content 是站台級信號**：弱 blog 會拖累強工具頁。寧留 80 篇強文不留 100 篇混雜。
2. **整併優先於刪除**：主題重疊 >60% → 301 合併到主文；零曝光 + 無外鏈 → noindex 觀察，勿直接刪。
3. **FAQ rich results 已於 2026/5/7 停止顯示**（HowTo 2023 已停、Sitelinks Searchbox 2024/11 退役）。FAQPage schema 保留無妨但別再投資源；轉向 Article/SoftwareApplication schema 完整性（作者、日期）。
4. **llms.txt 無實證效果**（Google 已確認不支援；本站已做，不用再花時間）。真正有效的 GEO：每個 H2 下第一句直接給答案、內容 30 天內有更新、允許 OAI-SearchBot（robots.txt 已允許）。
5. **Discover 資格**：首圖 ≥1200px 寬 + `max-image-preview:large`。本站 blog 目前無圖，這是最大缺口。
6. **GSC 高曝光低 CTR**：曝光 >500 且 CTR <3% 的頁面優先重寫 title/description，一次只改一個變因。
7. **AdSense「低價值內容」拒件主因是資訊冗餘**：留存頁面需 ≥30% 獨特資訊（獨特案例、數據、方法論），不是操作說明複製貼上。
8. **~700 頁完全不用擔心 crawl budget**。
9. **E-E-A-T**：工具頁加「計算原理/公式來源」、統計文章文末附引用來源、全站作者/關於頁。

---

## 三、關鍵地雷（Codex 動手前必讀）

1. **實際上線的 blog 只有 100 篇，不是 165**。唯一內容來源是 `src/data/usefulBlogPosts.ts` → `allBlogPosts.ts`。以下檔案是**死碼**（不產生任何頁面，勿花時間逐篇評估，但可清理）：
   - `importedEducationBlogPosts.ts`（150 篇，1.4MB）
   - `importedSeoBlogPosts.ts`（18 篇）
   - `seoResourcePosts.ts`（80 篇動態生成）
   - `blogPosts.ts` 的 `rawBlogPosts`（27 篇）——**注意：此檔的型別與輔助函式（`viewBlogPost`、`isPostAvailableInLocale` 等）被大量 import，只能清 rawBlogPosts 資料，不能刪檔案**
2. **`scripts/content-quality-audit.mjs` 硬性檢查 usefulBlogPosts 必須恰好 100 篇**，數量變動會 fail。合併/下架文章時必須同步更新該檢查的預期值。
3. **退役文章的標準做法已存在**：`src/data/blogRedirects.ts`（現有 64 筆），轉址殼頁是 noindex + meta refresh。合併文章時照這個模板加 redirect，並確認 sitemap 排除（現有機制會處理，`content:audit` 會驗證）。
4. **repo 內沒有真實 GSC 資料**（`seo-gsc-sample.csv` 只有 3 筆示範）。任何「零曝光」判斷目前都只是代理指標。使用者需先從 GSC 匯出 90 天資料，用 `node scripts/gsc-import.mjs <csv>` 匯入後重跑 `npm run seo:audit`。
5. 每次改動後的驗證閘門：`npm run build && npm run content:audit && npm run seo:check && npm run audit:security`（或直接 `npm run preflight`）。
6. 畫布類工具的 `background: #fff` 是功能性的（匯出圖片需白底），**不要**改成變數。

---

## 四、任務清單（依優先序，交給 Codex 執行）

### P0-1：處理行銷類錯位文章（9 篇）
`marketing` 分類 9 篇談的是「站長如何做 SEO/GA4」，與本站受眾（學生/老師/一般用戶）錯位，且 toolSlugs 是硬湊的。其中 5 篇同時「未被任何工具頁引用」，優先處理：
```
sitemap-checklist-guide, slug-generator-seo-guide, tool-page-content-guide,
url-encode-decode-guide, utm-link-guide
```
做法：這 5 篇加入 `blogRedirects.ts` 轉址到 `/blog/`（或合併成單一「站長資源」頁），從 `usefulBlogPosts.ts` 移除，同步更新 content:audit 的 100 篇預期值。其餘 4 篇（`ad-block-safe-layout-guide, ga4-basic-traffic-guide, gsc-indexing-guide, internal-linking-guide, seo-title-description-guide, thin-content-cleanup-guide` 中留下的）待真實 GSC 數據進來再決定。

### P0-2：清理死碼內容檔
移除 `importedEducationBlogPosts.ts`、`importedSeoBlogPosts.ts`、`seoResourcePosts.ts` 與 `blogPosts.ts` 的 `rawBlogPosts` 資料（保留被 import 的型別/函式）。清掉所有殘留 import。驗證 build 與 694 頁數量不變。這消除未來誤上線 348 篇規模化內容的風險，repo 減 3MB。

### P1-1：主題重疊合併（高信心度 5 組，30 篇 → 約 8-10 篇）
| 組 | 主題 | 篇數 | 目標 |
|---|---|---|---|
| ① | T/Z/PR 標準化分數 | 7 | 合併為 1-2 篇深度指南 |
| ② | 教師甄試/加權成績 | 8 | 合併為 2 篇 |
| ③ | PDF 疑難排解 | 4 | 合併為 1 篇 |
| ④ | PDF 合併/拆分/頁面整理 | 5 | 合併為 1-2 篇 |
| ⑤ | 圖片格式/壓縮 | 6 | 合併為 2 篇 |

具體 slug 清單見 `reports/` 內數據報告（或本文件附錄）。做法：挑每組被工具頁引用最多的那篇當主文，把其他篇的獨特內容（案例、FAQ）併入，其餘 slug 加入 `blogRedirects.ts` 指向主文。**一組一個 commit**，每組完成跑一次驗證閘門。⑥⑦（決策類 5 篇、課堂隨機類 9 篇）**先不要合併**，等真實 GSC 數據。

### P1-2：E-E-A-T 補強
- 統計/教育類文章（statistics 15 篇 + study 17 篇）文末加「參考來源」區塊（教育部、測驗標準文獻等真實來源）
- 全站加作者資訊（About 頁已存在，文章 Article schema 加 author 連到 About）
- 工具頁的 formula 區塊已存在，補「公式來源/依據」一句

### P1-3：Discover 資格
- 為保留的 blog 文章產生 ≥1200px 寬首圖（可用 build-time 產圖：標題 + 品牌色，滿足尺寸即可起步）
- blog 文章頁加 `<meta name="robots" content="max-image-preview:large">`（BaseLayout 有 `robots` prop 可用）
- Article schema 加 `image` 欄位

### P2-1：高曝光低 CTR 的 title/description 重寫
已知三個工具頁（真實數據）：`image-compressor`（曝光 2200、CTR 0.91%）、`merge-pdf`（1800、1.67%）、`teacher-exam-score-converter`（800、1.5%）。重寫原則：40-60 字元、含「免費/線上/2026」等吸引詞、一次一變因。其餘頁面等 GSC 匯入後篩「曝光>500 且 CTR<3%」。

### P2-2：GEO 答案優先結構
保留文章逐步改寫：每個 H2 下第一句直接給結論（可先從 A 級被工具頁引用最多的 20 篇開始）。

---

## 五、需要使用者本人做的事（Codex 做不了）

1. **GSC 匯出 90 天成效資料**（涵蓋 /blog/ 與 /tools/），`node scripts/gsc-import.mjs <csv>` 匯入 → 這是 P1-1 ⑥⑦ 組與 P2-1 全面展開的前提
2. **AdSense 後台發布 GDPR 訊息**：填隱私權政策網址 `https://funnytools.win/privacy/`（在「樣式設定」內）+「不同意」選項選「開啟」→ 發布按鈕就會亮
3. **把 `claude/funnytools-optimization-review-tr685u` 合併到 main** 部署第一輪優化
4. Cloudflare：對 `/_astro/*` 設 Cache-Control immutable、CSP 改 HTTP header（參考 `reports/cloudflare-security-hardening.md`）

---

## 附錄：合併群組完整 slug

```
① t-score-complete-guide, z-score-standardization-guide, percentile-rank-guide,
   pr-z-t-score-comparison, exam-score-normalization-mistakes,
   teacher-exam-t-score-fairness, ranking-percentile-class-guide
② teacher-exam-score-checklist, teacher-exam-weighted-score-guide,
   teacher-score-spreadsheet-check, rubric-score-guide, score-appeal-record-guide,
   semester-grade-calculator-guide, grade-average-weighted-gpa-guide,
   weighted-average-common-cases
③ pdf-too-large-upload-guide, pdf-troubleshooting-guide, mobile-pdf-guide,
   pdf-offline-browser-safety
④ pdf-merge-split-compress-workflow, pdf-split-extract-delete-guide,
   pdf-blank-page-removal-guide, pdf-page-order-checklist,
   application-pdf-package-guide
⑤ image-compress-resize-format-guide, jpg-png-webp-difference-guide,
   webp-compatibility-guide, photo-before-after-compress-guide,
   transparent-background-guide, logo-image-format-guide
```

未被任何工具頁引用的 21 篇（處理 B 級合併時交叉檢視）：
```
countdown-timer-productivity-guide, group-role-assignment-guide, pdf-offline-browser-safety,
pdf-signature-workflow, pdf-too-large-upload-guide, pdf-troubleshooting-guide,
photo-before-after-compress-guide, resume-pdf-preparation-guide, scan-to-pdf-quality-guide,
sitemap-checklist-guide, slug-generator-seo-guide, social-media-image-size-guide,
teacher-activity-flow-guide, teacher-admin-toolkit-guide, teacher-exam-t-score-fairness,
teacher-exam-weighted-score-guide, teacher-score-spreadsheet-check, tool-page-content-guide,
url-encode-decode-guide, utm-link-guide, weighted-average-common-cases
```
