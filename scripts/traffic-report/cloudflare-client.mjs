import { config } from './config.mjs';
import { jsonRequest } from './http.mjs';
import { info, error as logError } from './logger.mjs';

function dateStr(d) {
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

const DAILY_QUERY = `query($zone:String!,$from:Date!,$to:Date!){
  viewer{zones(filter:{zoneTag:$zone}){
    httpRequests1dGroups(limit:60,filter:{date_geq:$from,date_lt:$to},orderBy:[date_ASC]){
      dimensions{date}
      sum{
        requests pageViews bytes cachedRequests cachedBytes threats
        responseStatusMap{edgeResponseStatus requests}
        countryMap{clientCountryName requests}
        browserMap{pageViews uaBrowserFamily}
        contentTypeMap{bytes requests edgeResponseContentTypeName}
      }
      uniq{uniques}
    }
  }}
}`;

export async function collectCloudflare() {
  info('Cloudflare: starting data collection');
  const cf = config.cloudflare;
  if (!cf.token || !cf.zoneId) {
    return { status: 'error', message: 'Cloudflare token or zone_id missing', data: {} };
  }

  const utcMs = Date.now() + new Date().getTimezoneOffset() * 60000;
  const tp = new Date(utcMs + 8 * 3600000);
  const today = new Date(tp.getFullYear(), tp.getMonth(), tp.getDate());

  const yesterday = new Date(today); yesterday.setDate(today.getDate() - 1);
  const dayBefore = new Date(today); dayBefore.setDate(today.getDate() - 2);
  const last7Start = new Date(today); last7Start.setDate(today.getDate() - 7);
  const last28Start = new Date(today); last28Start.setDate(today.getDate() - 28);

  const headers = {
    authorization: `Bearer ${cf.token}`,
    'content-type': 'application/json',
  };

  try {
    const resp = await jsonRequest('https://api.cloudflare.com/client/v4/graphql', {
      method: 'POST',
      headers,
      body: JSON.stringify({
        query: DAILY_QUERY,
        variables: { zone: cf.zoneId, from: dateStr(last28Start), to: dateStr(today) },
      }),
    });

    if (resp.errors?.length) throw new Error(resp.errors[0].message);
    const groups = resp.data?.viewer?.zones?.[0]?.httpRequests1dGroups || [];
    info(`Cloudflare: ${groups.length} daily records fetched`);

    const daily = groups.map((g) => {
      const s = g.sum;
      const statusMap = {};
      for (const entry of s.responseStatusMap || []) statusMap[entry.edgeResponseStatus] = entry.requests;
      const countryMap = {};
      for (const entry of s.countryMap || []) countryMap[entry.clientCountryName] = entry.requests;
      const browserMap = {};
      for (const entry of s.browserMap || []) browserMap[entry.uaBrowserFamily] = entry.pageViews;

      return {
        date: g.dimensions.date,
        requests: s.requests,
        pageViews: s.pageViews,
        uniqueVisitors: g.uniq.uniques,
        bytes: s.bytes,
        cachedRequests: s.cachedRequests,
        cachedBytes: s.cachedBytes,
        cacheHitRatio: s.requests ? (s.cachedRequests / s.requests * 100).toFixed(1) : '0',
        threats: s.threats,
        status404: statusMap[404] || 0,
        status5xx: (statusMap[500] || 0) + (statusMap[502] || 0) + (statusMap[503] || 0) + (statusMap[504] || 0) + (statusMap[522] || 0),
        statusMap,
        countryMap,
        browserMap,
        taiwanRequests: countryMap.TW || 0,
      };
    });

    const sum = (arr, key) => arr.reduce((t, r) => t + (r[key] || 0), 0);
    const yesterdayData = daily.find((d) => d.date === dateStr(yesterday));
    const dayBeforeData = daily.find((d) => d.date === dateStr(dayBefore));

    const last7Data = daily.filter((d) => d.date >= dateStr(last7Start) && d.date < dateStr(today));
    const prev7Start = new Date(today); prev7Start.setDate(today.getDate() - 14);
    const prev7End = new Date(today); prev7End.setDate(today.getDate() - 7);
    const prev7Data = daily.filter((d) => d.date >= dateStr(prev7Start) && d.date < dateStr(prev7End));

    function aggregate(arr) {
      return {
        requests: sum(arr, 'requests'),
        pageViews: sum(arr, 'pageViews'),
        uniqueVisitors: sum(arr, 'uniqueVisitors'),
        bytes: sum(arr, 'bytes'),
        cachedRequests: sum(arr, 'cachedRequests'),
        threats: sum(arr, 'threats'),
        status404: sum(arr, 'status404'),
        status5xx: sum(arr, 'status5xx'),
        cacheHitRatio: sum(arr, 'requests') ? (sum(arr, 'cachedRequests') / sum(arr, 'requests') * 100).toFixed(1) : '0',
      };
    }

    const allCountries = {};
    const allBrowsers = {};
    for (const d of last7Data) {
      for (const [k, v] of Object.entries(d.countryMap)) allCountries[k] = (allCountries[k] || 0) + v;
      for (const [k, v] of Object.entries(d.browserMap)) allBrowsers[k] = (allBrowsers[k] || 0) + v;
    }
    const topCountries = Object.entries(allCountries).sort((a, b) => b[1] - a[1]).slice(0, 15);
    const topBrowsers = Object.entries(allBrowsers).sort((a, b) => b[1] - a[1]).slice(0, 15);

    const botBrowsers = ['Unknown', 'GoogleBot', 'BingBot', 'YandexBot', 'AppleBot', 'ChromeHeadless', 'Curl'];
    const botPageViews = topBrowsers.filter(([name]) => botBrowsers.includes(name)).reduce((t, [, v]) => t + v, 0);
    const totalPageViews = topBrowsers.reduce((t, [, v]) => t + v, 0);

    return {
      status: 'ok',
      data: {
        daily,
        yesterday: yesterdayData || null,
        dayBefore: dayBeforeData || null,
        last7: aggregate(last7Data),
        prev7: aggregate(prev7Data),
        last28: aggregate(daily),
        topCountries,
        topBrowsers,
        botIndicators: {
          botPageViews,
          totalPageViews,
          botRatio: totalPageViews ? (botPageViews / totalPageViews * 100).toFixed(1) : '0',
        },
      },
    };
  } catch (err) {
    logError(`Cloudflare: ${err.message}`);
    return { status: 'error', message: err.message, data: {} };
  }
}
