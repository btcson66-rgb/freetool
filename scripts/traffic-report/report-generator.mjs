import { config } from './config.mjs';

const pct = (n, d) => d ? `${(100 * n / d).toFixed(1)}%` : 'n/a';
const change = (curr, prev) => {
  if (!prev) return 'n/a';
  const diff = ((curr - prev) / prev * 100).toFixed(1);
  return diff > 0 ? `+${diff}%` : `${diff}%`;
};
const fmtBytes = (b) => {
  if (b > 1e9) return `${(b / 1e9).toFixed(2)} GB`;
  if (b > 1e6) return `${(b / 1e6).toFixed(2)} MB`;
  if (b > 1e3) return `${(b / 1e3).toFixed(1)} KB`;
  return `${b} B`;
};
const fmtSec = (s) => {
  if (s >= 60) return `${Math.floor(s / 60)}m ${Math.round(s % 60)}s`;
  return `${Math.round(s)}s`;
};

function table(items, columns) {
  if (!items?.length) return '_（無資料）_';
  return [
    `| ${columns.map(([l]) => l).join(' | ')} |`,
    `| ${columns.map(() => '---').join(' | ')} |`,
    ...items.map((item) => `| ${columns.map(([, k, fn]) => fn ? fn(item[k], item) : (item[k] ?? '')).join(' | ')} |`),
  ].join('\n');
}

function ga4Val(data, key, rangeName) {
  if (!data) return 0;
  const row = Array.isArray(data) ? data.find((r) => r.dateRange === rangeName) : data;
  if (Array.isArray(data) && data.length >= 2) {
    return data[rangeName === 'yesterday' || rangeName === 'last7' || rangeName === 'last28' ? 0 : 1]?.[key] || 0;
  }
  return row?.[key] || 0;
}

export function generateMarkdown(ga4, gsc, cf, reportDate) {
  const ts = new Date().toISOString();
  const lines = [];
  const add = (s) => lines.push(s);

  add(`# FreeTools 每日流量分析報告`);
  add(`\n**報告日期：** ${reportDate}`);
  add(`**產生時間：** ${ts}`);
  add(`**時區：** ${config.timezone}\n`);

  // === API Status ===
  add(`## 資料來源狀態\n`);
  add(`| 來源 | 狀態 | 備註 |`);
  add(`| --- | --- | --- |`);
  add(`| GA4 | ${ga4.status === 'ok' ? '✅ 正常' : '❌ 錯誤'} | Property ${config.ga4PropertyId} |`);
  add(`| Search Console | ${gsc.status === 'ok' ? '✅ 正常' : gsc.status === 'missing_property_access' ? '⚠️ 缺少權限' : '❌ 錯誤'} | ${gsc.siteUrl || gsc.setupGuide || gsc.message || ''} |`);
  add(`| Cloudflare | ${cf.status === 'ok' ? '✅ 正常' : '❌ 錯誤'} | Zone ${config.cloudflare.zoneId?.slice(0, 8)}... |`);

  // === Executive Summary ===
  add(`\n## 摘要\n`);

  const ga4Y = ga4.data?.yesterday;
  const ga4Y0 = ga4Y?.[0] || {};
  const ga4Y1 = ga4Y?.[1] || {};

  if (ga4.status === 'ok' && ga4Y) {
    add(`### 昨日概覽\n`);
    add(`| 指標 | 昨日 | 前日 | 變化 |`);
    add(`| --- | --- | --- | --- |`);
    for (const [label, key] of [
      ['活躍使用者', 'activeUsers'], ['新使用者', 'newUsers'],
      ['工作階段', 'sessions'], ['互動工作階段', 'engagedSessions'],
      ['網頁瀏覽', 'screenPageViews'], ['事件數', 'eventCount'],
    ]) {
      add(`| ${label} | ${ga4Y0[key] || 0} | ${ga4Y1[key] || 0} | ${change(ga4Y0[key] || 0, ga4Y1[key] || 0)} |`);
    }
    const engRate0 = ga4Y0.engagementRate != null ? (ga4Y0.engagementRate * 100).toFixed(1) + '%' : 'n/a';
    const engRate1 = ga4Y1.engagementRate != null ? (ga4Y1.engagementRate * 100).toFixed(1) + '%' : 'n/a';
    add(`| 互動率 | ${engRate0} | ${engRate1} | — |`);
    const avgDur0 = ga4Y0.averageSessionDuration != null ? fmtSec(ga4Y0.averageSessionDuration) : 'n/a';
    const avgDur1 = ga4Y1.averageSessionDuration != null ? fmtSec(ga4Y1.averageSessionDuration) : 'n/a';
    add(`| 平均工作階段時長 | ${avgDur0} | ${avgDur1} | — |`);
  }

  // 7-day comparison
  const ga4W = ga4.data?.last7;
  const ga4WP = ga4W?.[1] || {};
  const ga4W0 = ga4W?.[0] || {};
  if (ga4.status === 'ok' && ga4W?.length >= 2) {
    add(`\n### 近 7 日 vs 前 7 日\n`);
    add(`| 指標 | 近 7 日 | 前 7 日 | 變化 |`);
    add(`| --- | --- | --- | --- |`);
    for (const [label, key] of [
      ['活躍使用者', 'activeUsers'], ['工作階段', 'sessions'],
      ['互動工作階段', 'engagedSessions'], ['網頁瀏覽', 'screenPageViews'],
    ]) {
      add(`| ${label} | ${ga4W0[key] || 0} | ${ga4WP[key] || 0} | ${change(ga4W0[key] || 0, ga4WP[key] || 0)} |`);
    }
  }

  // === GA4 Details ===
  if (ga4.status === 'ok') {
    add(`\n## GA4 詳細數據\n`);

    add(`### 每日趨勢（近 28 日）\n`);
    add(table((ga4.data?.daily || []).slice(-14), [
      ['日期', 'date'], ['使用者', 'activeUsers'], ['新使用者', 'newUsers'],
      ['工作階段', 'sessions'], ['互動', 'engagedSessions'],
      ['瀏覽', 'screenPageViews'], ['事件', 'eventCount'],
    ]));

    add(`\n### 熱門頁面（近 7 日）\n`);
    add(table((ga4.data?.topPages || []).slice(0, 15), [
      ['路徑', 'pagePath'], ['瀏覽', 'screenPageViews'],
      ['使用者', 'activeUsers'], ['互動工作階段', 'engagedSessions'],
      ['平均時長', 'averageSessionDuration', (v) => fmtSec(v || 0)],
    ]));

    add(`\n### 熱門到達頁面（近 7 日）\n`);
    add(table((ga4.data?.topLandingPages || []).slice(0, 15), [
      ['到達頁', 'landingPage'], ['工作階段', 'sessions'],
      ['使用者', 'activeUsers'], ['互動工作階段', 'engagedSessions'],
    ]));

    add(`\n### 流量來源（近 7 日）\n`);
    add(table((ga4.data?.sources || []).slice(0, 15), [
      ['來源 / 媒介', 'sessionSourceMedium'], ['工作階段', 'sessions'],
      ['使用者', 'activeUsers'], ['新使用者', 'newUsers'],
      ['互動工作階段', 'engagedSessions'],
    ]));

    const socialSources = (ga4.data?.sources || []).filter((r) =>
      /threads|instagram|facebook|line|twitter|x\.com/i.test(r.sessionSourceMedium));
    if (socialSources.length) {
      add(`\n### 社群流量分析\n`);
      add(table(socialSources, [
        ['來源', 'sessionSourceMedium'], ['工作階段', 'sessions'],
        ['使用者', 'activeUsers'], ['互動工作階段', 'engagedSessions'],
      ]));
      const totalSocialSessions = socialSources.reduce((t, r) => t + r.sessions, 0);
      const totalSessions = ga4W0.sessions || 1;
      add(`\n社群流量占比：${pct(totalSocialSessions, totalSessions)}（近 7 日）`);
    }

    add(`\n### 首次使用者來源（近 7 日）\n`);
    add(table((ga4.data?.firstUserSources || []).slice(0, 10), [
      ['首次來源', 'firstUserSourceMedium'], ['使用者', 'activeUsers'],
      ['新使用者', 'newUsers'], ['工作階段', 'sessions'],
    ]));

    add(`\n### 裝置分布（近 7 日）\n`);
    add(table(ga4.data?.devices || [], [
      ['裝置', 'deviceCategory'], ['使用者', 'activeUsers'],
      ['工作階段', 'sessions'], ['互動工作階段', 'engagedSessions'],
    ]));

    add(`\n### 國家 / 地區（近 7 日）\n`);
    add(table((ga4.data?.countries || []).slice(0, 10), [
      ['國家', 'country'], ['使用者', 'activeUsers'], ['工作階段', 'sessions'],
    ]));

    add(`\n### 事件（近 7 日）\n`);
    add(table((ga4.data?.events || []).slice(0, 20), [
      ['事件', 'eventName'], ['次數', 'eventCount'], ['使用者', 'totalUsers'],
    ]));

    if (Object.keys(ga4.errors || {}).length) {
      add(`\n### GA4 錯誤\n`);
      for (const [k, v] of Object.entries(ga4.errors)) {
        add(`- **${k}**: ${v.message} (HTTP ${v.status})`);
      }
    }
  }

  // === Search Console ===
  add(`\n## Google Search Console\n`);
  add(`> ⚠️ Search Console 僅代表 Google 搜尋流量，不包含 Threads、Instagram、Facebook、直接流量或 Cloudflare 總請求。\n`);

  if (gsc.status === 'ok') {
    const last7S = gsc.data?.last7Summary?.[0] || {};
    const prev7S = gsc.data?.prev7Summary?.[0] || {};
    const last28S = gsc.data?.last28Summary?.[0] || {};
    const prev28S = gsc.data?.prev28Summary?.[0] || {};

    add(`### 搜尋表現摘要\n`);
    add(`| 期間 | 點擊 | 曝光 | 平均 CTR | 平均排名 |`);
    add(`| --- | --- | --- | --- | --- |`);
    add(`| 近 7 日 | ${last7S.clicks || 0} | ${last7S.impressions || 0} | ${pct(last7S.clicks, last7S.impressions)} | ${(last7S.position || 0).toFixed(1)} |`);
    add(`| 前 7 日 | ${prev7S.clicks || 0} | ${prev7S.impressions || 0} | ${pct(prev7S.clicks, prev7S.impressions)} | ${(prev7S.position || 0).toFixed(1)} |`);
    add(`| 近 28 日 | ${last28S.clicks || 0} | ${last28S.impressions || 0} | ${pct(last28S.clicks, last28S.impressions)} | ${(last28S.position || 0).toFixed(1)} |`);
    add(`| 前 28 日 | ${prev28S.clicks || 0} | ${prev28S.impressions || 0} | ${pct(prev28S.clicks, prev28S.impressions)} | ${(prev28S.position || 0).toFixed(1)} |`);

    add(`\n### 熱門搜尋字詞\n`);
    add(table((gsc.data?.topQueries || []).slice(0, 20).map((r) => ({
      query: r.keys?.[0] || '',
      clicks: r.clicks,
      impressions: r.impressions,
      ctr: pct(r.clicks, r.impressions),
      position: (r.position || 0).toFixed(1),
    })), [
      ['搜尋字詞', 'query'], ['點擊', 'clicks'], ['曝光', 'impressions'],
      ['CTR', 'ctr'], ['排名', 'position'],
    ]));

    add(`\n### 熱門搜尋頁面\n`);
    add(table((gsc.data?.topPages || []).slice(0, 15).map((r) => ({
      page: r.keys?.[0]?.replace(`https://${config.domain}`, '') || '',
      clicks: r.clicks,
      impressions: r.impressions,
      ctr: pct(r.clicks, r.impressions),
      position: (r.position || 0).toFixed(1),
    })), [
      ['頁面', 'page'], ['點擊', 'clicks'], ['曝光', 'impressions'],
      ['CTR', 'ctr'], ['排名', 'position'],
    ]));

    if (gsc.data?.lowCtrQueries?.length) {
      add(`\n### 高曝光低 CTR 字詞（CTR < 3%，曝光 ≥ 10）\n`);
      add(`> 這些字詞有搜尋曝光但點擊率偏低，可優化標題和描述來提升點擊。\n`);
      add(table(gsc.data.lowCtrQueries.slice(0, 10).map((r) => ({
        query: r.keys?.[0] || '',
        impressions: r.impressions,
        clicks: r.clicks,
        ctr: pct(r.clicks, r.impressions),
        position: (r.position || 0).toFixed(1),
      })), [
        ['字詞', 'query'], ['曝光', 'impressions'], ['點擊', 'clicks'],
        ['CTR', 'ctr'], ['排名', 'position'],
      ]));
    }
  } else {
    add(`**狀態：** ${gsc.status === 'missing_property_access' ? '缺少 FreeTools.win 資源權限' : gsc.message || '錯誤'}`);
    if (gsc.setupGuide) add(`\n**設定指引：** ${gsc.setupGuide}`);
    if (gsc.available?.length) add(`\n目前可存取的資源：${gsc.available.join(', ')}`);
  }

  // === Cloudflare ===
  add(`\n## Cloudflare 基礎設施數據\n`);
  add(`> ⚠️ Cloudflare 請求數 ≠ 真實使用者。一次頁面瀏覽會觸發多個請求（HTML、CSS、JS、圖片、字體等），機器人和爬蟲也會產生大量請求。\n`);

  if (cf.status === 'ok') {
    const cfd = cf.data;
    const y = cfd.yesterday;
    const yb = cfd.dayBefore;

    if (y) {
      add(`### 昨日 vs 前日\n`);
      add(`| 指標 | 昨日 | 前日 | 變化 |`);
      add(`| --- | --- | --- | --- |`);
      add(`| 總請求 | ${y.requests} | ${yb?.requests || 0} | ${change(y.requests, yb?.requests)} |`);
      add(`| 頁面瀏覽 | ${y.pageViews} | ${yb?.pageViews || 0} | ${change(y.pageViews, yb?.pageViews)} |`);
      add(`| 獨立訪客 | ${y.uniqueVisitors} | ${yb?.uniqueVisitors || 0} | ${change(y.uniqueVisitors, yb?.uniqueVisitors)} |`);
      add(`| 流量 | ${fmtBytes(y.bytes)} | ${fmtBytes(yb?.bytes || 0)} | — |`);
      add(`| 快取命中率 | ${y.cacheHitRatio}% | ${yb?.cacheHitRatio || 0}% | — |`);
      add(`| 404 錯誤 | ${y.status404} | ${yb?.status404 || 0} | — |`);
      add(`| 5xx 錯誤 | ${y.status5xx} | ${yb?.status5xx || 0} | — |`);
      add(`| 安全威脅 | ${y.threats} | ${yb?.threats || 0} | — |`);
    }

    add(`\n### 近 7 日 vs 前 7 日\n`);
    const w = cfd.last7 || {};
    const wp = cfd.prev7 || {};
    add(`| 指標 | 近 7 日 | 前 7 日 | 變化 |`);
    add(`| --- | --- | --- | --- |`);
    add(`| 總請求 | ${w.requests} | ${wp.requests} | ${change(w.requests, wp.requests)} |`);
    add(`| 頁面瀏覽 | ${w.pageViews} | ${wp.pageViews} | ${change(w.pageViews, wp.pageViews)} |`);
    add(`| 獨立訪客 | ${w.uniqueVisitors} | ${wp.uniqueVisitors} | ${change(w.uniqueVisitors, wp.uniqueVisitors)} |`);
    add(`| 流量 | ${fmtBytes(w.bytes)} | ${fmtBytes(wp.bytes)} | — |`);
    add(`| 快取命中率 | ${w.cacheHitRatio}% | ${wp.cacheHitRatio}% | — |`);
    add(`| 404 錯誤 | ${w.status404} | ${wp.status404} | — |`);
    add(`| 5xx 錯誤 | ${w.status5xx} | ${wp.status5xx} | — |`);

    add(`\n### 每日趨勢（近 14 日）\n`);
    add(table((cfd.daily || []).slice(-14), [
      ['日期', 'date'], ['請求', 'requests'], ['頁面瀏覽', 'pageViews'],
      ['獨立訪客', 'uniqueVisitors'], ['404', 'status404'],
      ['台灣請求', 'taiwanRequests'], ['快取命中率', 'cacheHitRatio', (v) => `${v}%`],
    ]));

    if (cfd.topCountries?.length) {
      add(`\n### 請求來源國家（近 7 日）\n`);
      add(table(cfd.topCountries.map(([c, n]) => ({ country: c, requests: n })), [
        ['國家', 'country'], ['請求數', 'requests'],
      ]));
    }

    if (cfd.botIndicators) {
      const bi = cfd.botIndicators;
      add(`\n### 機器人 / 爬蟲流量\n`);
      add(`- 已知機器人頁面瀏覽：${bi.botPageViews} / ${bi.totalPageViews}（${bi.botRatio}%）`);
      add(`- 偵測方式：依 User-Agent 分類（Unknown、GoogleBot、BingBot、YandexBot、AppleBot、ChromeHeadless、Curl）`);
    }
  } else {
    add(`**狀態：** ${cf.message || '錯誤'}`);
  }

  // === Analysis & Recommendations ===
  add(`\n## 分析與建議\n`);

  const insights = [];

  if (cf.status === 'ok' && ga4.status === 'ok') {
    const cfReqs = cf.data?.yesterday?.requests || 0;
    const ga4Users = ga4.data?.yesterday?.[0]?.activeUsers || 0;
    if (cfReqs > 0 && ga4Users > 0 && cfReqs / ga4Users > 50) {
      insights.push(`Cloudflare 昨日請求 (${cfReqs}) 遠高於 GA4 使用者 (${ga4Users})。比值 ${(cfReqs / ga4Users).toFixed(0)}:1 偏高，表示大量請求來自靜態資源載入、機器人或爬蟲。`);
    }
  }

  if (gsc.status === 'ok') {
    const last7S = gsc.data?.last7Summary?.[0] || {};
    const prev7S = gsc.data?.prev7Summary?.[0] || {};
    if (last7S.impressions > (prev7S.impressions || 0) && (last7S.clicks || 0) <= (prev7S.clicks || 0)) {
      insights.push(`Search Console 曝光增加但點擊持平或下降 → SEO 可見度正在提升，但標題和描述可能需要優化以提高 CTR。`);
    }
    if ((last7S.clicks || 0) > (prev7S.clicks || 0) * 1.2) {
      insights.push(`Search Console 近 7 日點擊較前 7 日成長 ${change(last7S.clicks, prev7S.clicks)}，Google 搜尋流量正在上升。`);
    }
  }

  if (ga4.status === 'ok') {
    const directSessions = (ga4.data?.sources || [])
      .filter((r) => /direct/i.test(r.sessionSourceMedium))
      .reduce((t, r) => t + r.sessions, 0);
    const totalSessions = ga4W0?.sessions || 1;
    if (directSessions / totalSessions > 0.5) {
      insights.push(`直接流量占 ${pct(directSessions, totalSessions)}，偏高。部分可能是 Threads/LINE 等 app 內瀏覽器流量被歸類為直接流量（缺少 UTM 參數）。建議在社群貼文中加入 UTM 追蹤參數。`);
    }

    const mobileUsers = (ga4.data?.devices || []).find((r) => r.deviceCategory === 'mobile')?.activeUsers || 0;
    const totalUsers = (ga4.data?.devices || []).reduce((t, r) => t + r.activeUsers, 0);
    if (mobileUsers / totalUsers > 0.6) {
      insights.push(`行動裝置使用者占 ${pct(mobileUsers, totalUsers)}，需確保所有工具頁面在手機上的使用體驗良好。`);
    }

    const engRate = ga4Y?.[0]?.engagementRate;
    if (engRate != null && engRate < 0.4) {
      insights.push(`昨日互動率僅 ${(engRate * 100).toFixed(1)}%，偏低。可能原因：Threads 低意圖點擊、頁面載入過慢、首屏內容不夠吸引人。`);
    }
  }

  if (cf.status === 'ok') {
    const y404 = cf.data?.yesterday?.status404 || 0;
    if (y404 > 50) {
      insights.push(`昨日 404 錯誤 ${y404} 次偏高，建議檢查是否有失效連結或爬蟲在掃描不存在的路徑。`);
    }
    const y5xx = cf.data?.yesterday?.status5xx || 0;
    if (y5xx > 0) {
      insights.push(`⚠️ 昨日出現 ${y5xx} 次 5xx 伺服器錯誤，需立即調查原因。`);
    }
  }

  if (!insights.length) insights.push('各項指標正常，無特殊異常需注意。');
  for (const ins of insights) add(`- ${ins}`);

  add(`\n### 今日建議行動\n`);
  const actions = [];
  if (gsc.status === 'missing_property_access') {
    actions.push(`將 \`${config.serviceAccount.client_email}\` 加入 Google Search Console FreeTools.win 資源，設為「完整」權限，以啟用搜尋數據追蹤。`);
  }
  if (gsc.status === 'ok' && (gsc.data?.lowCtrQueries?.length || 0) > 3) {
    actions.push('優化低 CTR 搜尋字詞對應頁面的 title 和 meta description。');
  }
  if (ga4.status === 'ok') {
    const topPages = ga4.data?.topPages || [];
    const bestPage = topPages.find((p) => p.pagePath !== '/' && p.screenPageViews > 5);
    if (bestPage) {
      actions.push(`推廣熱門工具頁 \`${bestPage.pagePath}\`（${bestPage.screenPageViews} 次瀏覽），在 Threads 上再分享一次。`);
    }
    actions.push('確認所有社群貼文已加上 UTM 參數（?utm_source=threads&utm_medium=social&utm_campaign=daily）。');
  }
  if (!actions.length) actions.push('持續監控，保持每日發文節奏。');
  for (const act of actions) add(`1. ${act}`);

  add(`\n## 判讀限制\n`);
  add(`- Cloudflare 請求包含靜態資源、機器人、掃描器與 404，不等於真實使用者人數。`);
  add(`- GA4 每日活躍使用者不能直接加總，同一使用者跨日會重複計算。`);
  add(`- Search Console 數據有 2-3 天延遲，最新數據可能尚未完整。`);
  add(`- GA4 當日數據仍在處理時，不同維度的總數可能暫時不一致。`);
  add(`- 部分 Threads / LINE 流量可能被歸類為 direct（缺少 referrer），實際社群流量可能高於報告數字。`);

  return lines.join('\n');
}

export function generateDiscordSummary(ga4, gsc, cf, reportDate, reportPath) {
  const lines = [];
  lines.push(`📊 **FreeTools 每日流量報告 — ${reportDate}**\n`);

  if (ga4.status === 'ok') {
    const y = ga4.data?.yesterday?.[0] || {};
    lines.push(`**GA4 昨日：** 使用者 ${y.activeUsers || 0} ｜工作階段 ${y.sessions || 0} ｜瀏覽 ${y.screenPageViews || 0} ｜互動率 ${y.engagementRate != null ? (y.engagementRate * 100).toFixed(1) + '%' : 'n/a'}`);
  } else {
    lines.push(`**GA4：** ❌ 資料收集失敗`);
  }

  if (gsc.status === 'ok') {
    const s = gsc.data?.last7Summary?.[0] || {};
    lines.push(`**Search Console（近 7 日）：** 點擊 ${s.clicks || 0} ｜曝光 ${s.impressions || 0} ｜CTR ${pct(s.clicks, s.impressions)} ｜排名 ${(s.position || 0).toFixed(1)}`);
  } else {
    lines.push(`**Search Console：** ⚠️ ${gsc.status === 'missing_property_access' ? '尚未授權' : '錯誤'}`);
  }

  if (cf.status === 'ok') {
    const y = cf.data?.yesterday;
    if (y) {
      lines.push(`**Cloudflare 昨日：** 請求 ${y.requests} ｜頁面瀏覽 ${y.pageViews} ｜訪客 ${y.uniqueVisitors} ｜快取 ${y.cacheHitRatio}%`);
    }
  } else {
    lines.push(`**Cloudflare：** ❌ 資料收集失敗`);
  }

  // Top source
  if (ga4.status === 'ok' && ga4.data?.sources?.length) {
    const top = ga4.data.sources[0];
    lines.push(`\n🔝 **最大流量來源：** ${top.sessionSourceMedium}（${top.sessions} 工作階段）`);
  }

  // Top landing page
  if (ga4.status === 'ok' && ga4.data?.topLandingPages?.length) {
    const top = ga4.data.topLandingPages[0];
    lines.push(`📄 **最熱門到達頁：** ${top.landingPage}（${top.sessions} 工作階段）`);
  }

  // Biggest problem
  const problems = [];
  if (cf.status === 'ok' && (cf.data?.yesterday?.status404 || 0) > 50) problems.push(`404 錯誤 ${cf.data.yesterday.status404} 次`);
  if (cf.status === 'ok' && (cf.data?.yesterday?.status5xx || 0) > 0) problems.push(`5xx 錯誤 ${cf.data.yesterday.status5xx} 次`);
  if (ga4.status === 'ok' && (ga4.data?.yesterday?.[0]?.engagementRate || 0) < 0.3) problems.push(`互動率偏低`);
  if (gsc.status === 'missing_property_access') problems.push('Search Console 尚未授權');
  lines.push(`\n⚠️ **最大問題：** ${problems[0] || '無重大問題'}`);

  // Best opportunity
  if (gsc.status === 'ok' && gsc.data?.lowCtrQueries?.length) {
    const q = gsc.data.lowCtrQueries[0];
    lines.push(`💡 **最佳機會：** 字詞「${q.keys?.[0]}」有 ${q.impressions} 曝光但 CTR 僅 ${pct(q.clicks, q.impressions)}，優化標題可提升點擊`);
  } else if (ga4.status === 'ok' && ga4.data?.topPages?.length > 1) {
    const p = ga4.data.topPages.find((r) => r.pagePath !== '/');
    if (p) lines.push(`💡 **最佳機會：** 推廣 \`${p.pagePath}\`（${p.screenPageViews} 瀏覽）`);
  }

  lines.push(`\n📁 完整報告：\`${reportPath}\``);

  return lines.join('\n');
}
