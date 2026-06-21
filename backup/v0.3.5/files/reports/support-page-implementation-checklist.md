# FunnyTools 支持本站頁面實作檢查

檢查日期：2026-06-21（Asia/Taipei）

- [x] `/support/` 頁面存在。
- [x] 頁尾具有低調的「支持本站」連結。
- [x] 繁中主導覽在「分類」旁提供清楚但不具侵略性的「支持本站」按鈕。
- [x] 分潤透明說明位於商品／資源卡片之前。
- [x] 商品資料集中於公開資料檔 `/data/support-products.json`。
- [x] 僅讀取 `status = active` 的項目，每批最多顯示 8 項。
- [x] 「換一批」按鈕可在不重新載入頁面的情況下更新卡片。
- [x] 頁面不顯示固定價格。
- [x] 頁面不使用「必買」、「限時搶購」、「立即下單」、「超殺優惠」或「爆款」。
- [x] 頁面不顯示虛假評論、評分、折扣、倒數計時或急迫性標籤。
- [x] 動態建立的外部分潤連結皆使用 `rel="sponsored nofollow noopener"`。
- [x] 「使用推薦資源連結」卡片包含酷澎首頁分潤入口，讓使用者自行選品；連結同樣標記為 sponsored/nofollow。
- [x] 未在工具頁加入商品卡片，免費工具仍是工具頁主體。
- [x] 版面支援桌機 4 欄、平板 2 欄、手機 1 欄。
- [x] 未加入外部追蹤腳本、API 金鑰或其他秘密。
- [x] 支援頁具有 canonical、`index, follow`、H1/H2 與 WebPage/BreadcrumbList 結構化資料。

## 資料與選品

- 商品由酷澎台灣 Partners `bestcategories` API 依 FunnyTools 使用情境篩選；此端點提供可驗證的官方 CDN 商品圖片。
- API 呼叫使用獨立的 `subId=funnytools-support`。
- JSON 只保留商品名稱、分潤網址及頁面顯示所需欄位；不包含 API 憑證、價格、折扣或分潤率。
- 30/30 商品包含酷澎 Partners API 回傳的真實商品圖片；圖片已轉成網站本機 WebP，瀏覽器僅延遲載入目前顯示的卡片。
- 商品說明為 FunnyTools 原創的中性用途說明，未複製平台商品描述。

## 建置驗證

- `npm.cmd run build`：成功，輸出 466 個靜態頁面。
- 商品資料：30 筆 active、30 個唯一 ID、30 個唯一分潤網址、5 個使用情境分類。
- 商品圖片：30/30 由酷澎官方 CDN 取得並轉為本機 WebP，不需放寬外部圖片 CSP。
- 圖片總量：30 張，合計約 451 KB；卡片使用 `loading="lazy"` 與固定尺寸避免版面位移。
- 分潤網址格式：30/30 使用 HTTPS 酷澎 Partners 網址，並包含 `subId=funnytools-support`。
- 瀏覽器首次載入：顯示 8 張卡片，8 個商品名稱皆不重複。
- 點擊「換一批」：維持 8 張卡片，顯示批次與點擊前不同，且不重新載入頁面。
- CTA 屬性：瀏覽器渲染出的 8/8 外部連結皆為 `rel="sponsored nofollow noopener"`。
- SEO：canonical、`index, follow`、單一 H1、WebPage 與 BreadcrumbList JSON-LD 均已輸出。
- sitemap：包含 `https://funnytools.win/support/`。
- 禁用詞掃描：0 筆。
