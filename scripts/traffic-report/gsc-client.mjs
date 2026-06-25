import { config } from './config.mjs';
import { jsonRequest } from './http.mjs';
import { info, error as logError, warn } from './logger.mjs';

function dateStr(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export async function collectGSC(token) {
  info('GSC: starting data collection');
  const result = { status: 'ok', data: {} };

  try {
    const inventory = await jsonRequest(
      'https://www.googleapis.com/webmasters/v3/sites',
      { headers: { authorization: `Bearer ${token}` } },
    );

    const expected = [`sc-domain:${config.domain}`, `https://${config.domain}/`];
    const matched = inventory.siteEntry?.find(({ siteUrl }) => expected.includes(siteUrl));

    if (!matched) {
      warn('GSC: service account does not have access to funnytools.win');
      return {
        status: 'missing_property_access',
        expected,
        available: (inventory.siteEntry || []).map((s) => s.siteUrl),
        data: {},
        setupGuide: `在 Google Search Console → 設定 → 使用者和權限 中，將 ${config.serviceAccount.client_email} 新增為完整權限使用者。`,
      };
    }

    const siteUrl = matched.siteUrl;
    info(`GSC: using site ${siteUrl}`);

    const utcMs = Date.now() + new Date().getTimezoneOffset() * 60000;
    const tp = new Date(utcMs + 8 * 3600000);
    const today = new Date(tp.getFullYear(), tp.getMonth(), tp.getDate());

    const endDate = new Date(today); endDate.setDate(today.getDate() - 3);
    const yesterdayStart = new Date(today); yesterdayStart.setDate(today.getDate() - 3);
    const dayBeforeStart = new Date(today); dayBeforeStart.setDate(today.getDate() - 4);

    const last7End = endDate;
    const last7Start = new Date(today); last7Start.setDate(today.getDate() - 9);
    const prev7End = new Date(today); prev7End.setDate(today.getDate() - 10);
    const prev7Start = new Date(today); prev7Start.setDate(today.getDate() - 16);

    const last28End = endDate;
    const last28Start = new Date(today); last28Start.setDate(today.getDate() - 30);
    const prev28End = new Date(today); prev28End.setDate(today.getDate() - 31);
    const prev28Start = new Date(today); prev28Start.setDate(today.getDate() - 58);

    const endpoint = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/searchAnalytics/query`;

    async function query(startDate, endDateVal, dimensions, rowLimit = 50) {
      return jsonRequest(endpoint, {
        method: 'POST',
        headers: { authorization: `Bearer ${token}`, 'content-type': 'application/json' },
        body: JSON.stringify({
          startDate: dateStr(startDate),
          endDate: dateStr(endDateVal),
          dimensions,
          rowLimit,
        }),
      });
    }

    result.siteUrl = siteUrl;
    result.data.ranges = {
      yesterday: { start: dateStr(yesterdayStart), end: dateStr(yesterdayStart) },
      dayBefore: { start: dateStr(dayBeforeStart), end: dateStr(dayBeforeStart) },
      last7: { start: dateStr(last7Start), end: dateStr(last7End) },
      prev7: { start: dateStr(prev7Start), end: dateStr(prev7End) },
      last28: { start: dateStr(last28Start), end: dateStr(last28End) },
      prev28: { start: dateStr(prev28Start), end: dateStr(prev28End) },
    };

    const queries = [
      { name: 'topQueries', start: last7Start, end: last7End, dims: ['query'], limit: 50 },
      { name: 'topPages', start: last7Start, end: last7End, dims: ['page'], limit: 50 },
      { name: 'daily', start: last28Start, end: last28End, dims: ['date'], limit: 60 },
      { name: 'last7Summary', start: last7Start, end: last7End, dims: [], limit: 1 },
      { name: 'prev7Summary', start: prev7Start, end: prev7End, dims: [], limit: 1 },
      { name: 'last28Summary', start: last28Start, end: last28End, dims: [], limit: 1 },
      { name: 'prev28Summary', start: prev28Start, end: prev28End, dims: [], limit: 1 },
    ];

    for (const q of queries) {
      try {
        const resp = await query(q.start, q.end, q.dims, q.limit);
        result.data[q.name] = resp.rows || [];
        info(`GSC: ${q.name} collected (${(resp.rows || []).length} rows)`);
      } catch (err) {
        result.data[q.name] = [];
        logError(`GSC: ${q.name} failed: ${err.message}`);
      }
    }

    const allQueries = result.data.topQueries || [];
    result.data.lowCtrQueries = allQueries
      .filter((r) => r.impressions >= 10 && r.ctr < 0.03)
      .sort((a, b) => b.impressions - a.impressions)
      .slice(0, 15);

    result.data.lowCtrPages = (result.data.topPages || [])
      .filter((r) => r.impressions >= 10 && r.ctr < 0.03)
      .sort((a, b) => b.impressions - a.impressions)
      .slice(0, 15);

  } catch (err) {
    logError(`GSC: fatal error: ${err.message}`);
    return { status: 'error', message: err.message, data: {} };
  }

  return result;
}
