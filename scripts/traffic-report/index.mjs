import { mkdirSync, writeFileSync, readFileSync, existsSync, appendFileSync } from 'node:fs';
import { join } from 'node:path';
import { config } from './config.mjs';
import { getGoogleAccessToken } from './auth.mjs';
import { collectGA4 } from './ga4-client.mjs';
import { collectGSC } from './gsc-client.mjs';
import { collectCloudflare } from './cloudflare-client.mjs';
import { generateMarkdown, generateDiscordSummary } from './report-generator.mjs';
import { sendDiscordNotification } from './discord-notifier.mjs';
import { info, error as logError, logPath } from './logger.mjs';

const reportDir = join(config.root, 'reports', 'daily');
const dataDir = join(config.root, 'data', 'traffic', 'daily');
const historyPath = join(config.root, 'data', 'traffic', 'traffic-history.csv');

mkdirSync(reportDir, { recursive: true });
mkdirSync(dataDir, { recursive: true });

const reportDate = new Intl.DateTimeFormat('en-CA', {
  timeZone: config.timezone,
  year: 'numeric', month: '2-digit', day: '2-digit',
}).format(new Date());

info(`========== Daily Traffic Report: ${reportDate} ==========`);
info(`Log file: ${logPath}`);

const startTime = Date.now();
let ga4Result = { status: 'skipped', data: {}, errors: {} };
let gscResult = { status: 'skipped', data: {} };
let cfResult = { status: 'skipped', data: {} };
let discordStatus = 'skipped';

try {
  // 1. Authenticate with Google
  info('Authenticating with Google...');
  let googleToken;
  try {
    googleToken = await getGoogleAccessToken();
    info('Google authentication successful');
  } catch (err) {
    logError(`Google auth failed: ${err.message}`);
  }

  // 2. Collect data from all sources (continue even if one fails)
  const tasks = [];

  if (googleToken) {
    tasks.push(
      collectGA4(googleToken).then((r) => { ga4Result = r; }).catch((e) => {
        logError(`GA4 collection failed: ${e.message}`);
        ga4Result = { status: 'error', message: e.message, data: {}, errors: {} };
      }),
      collectGSC(googleToken).then((r) => { gscResult = r; }).catch((e) => {
        logError(`GSC collection failed: ${e.message}`);
        gscResult = { status: 'error', message: e.message, data: {} };
      }),
    );
  } else {
    ga4Result = { status: 'error', message: 'Google authentication failed', data: {}, errors: {} };
    gscResult = { status: 'error', message: 'Google authentication failed', data: {} };
  }

  tasks.push(
    collectCloudflare().then((r) => { cfResult = r; }).catch((e) => {
      logError(`Cloudflare collection failed: ${e.message}`);
      cfResult = { status: 'error', message: e.message, data: {} };
    }),
  );

  await Promise.all(tasks);

  // 3. Save raw data
  info('Saving raw data...');
  const saveJson = (name, data) => {
    const path = join(dataDir, `${reportDate}-${name}.json`);
    writeFileSync(path, JSON.stringify(data, null, 2) + '\n', 'utf8');
    info(`Saved: ${path}`);
  };

  saveJson('ga4', ga4Result);
  saveJson('gsc', gscResult);
  saveJson('cloudflare', cfResult);

  // 4. Generate report
  info('Generating report...');
  const markdown = generateMarkdown(ga4Result, gscResult, cfResult, reportDate);
  const reportPath = join(reportDir, `${reportDate}-traffic-report.md`);
  writeFileSync(reportPath, markdown, 'utf8');
  info(`Report saved: ${reportPath}`);

  // 5. Save summary data
  const summary = {
    date: reportDate,
    generatedAt: new Date().toISOString(),
    ga4Status: ga4Result.status,
    gscStatus: gscResult.status,
    cfStatus: cfResult.status,
    ga4Yesterday: ga4Result.data?.yesterday?.[0] || null,
    gscLast7: gscResult.data?.last7Summary?.[0] || null,
    cfYesterday: cfResult.data?.yesterday || null,
  };
  saveJson('summary', summary);

  // 6. Append to history CSV
  try {
    const csvHeader = 'date,ga4_users,ga4_sessions,ga4_views,ga4_engagement_rate,gsc_clicks,gsc_impressions,gsc_ctr,cf_requests,cf_pageviews,cf_visitors';
    if (!existsSync(historyPath)) {
      writeFileSync(historyPath, csvHeader + '\n', 'utf8');
    }
    const y = ga4Result.data?.yesterday?.[0] || {};
    const s = gscResult.data?.last7Summary?.[0] || {};
    const c = cfResult.data?.yesterday || {};
    const csvRow = [
      reportDate,
      y.activeUsers || 0,
      y.sessions || 0,
      y.screenPageViews || 0,
      y.engagementRate != null ? (y.engagementRate * 100).toFixed(1) : '',
      s.clicks || 0,
      s.impressions || 0,
      s.impressions ? (s.clicks / s.impressions * 100).toFixed(1) : '',
      c.requests || 0,
      c.pageViews || 0,
      c.uniqueVisitors || 0,
    ].join(',');
    appendFileSync(historyPath, csvRow + '\n', 'utf8');
    info(`History appended: ${historyPath}`);
  } catch (e) {
    logError(`History CSV error: ${e.message}`);
  }

  // 7. Send Discord notification
  info('Sending Discord notification...');
  const discordMessage = generateDiscordSummary(ga4Result, gscResult, cfResult, reportDate, reportPath);
  const sent = await sendDiscordNotification(discordMessage);
  discordStatus = sent ? 'sent' : 'failed';

} catch (err) {
  logError(`Fatal error: ${err.message}\n${err.stack}`);
}

const elapsed = ((Date.now() - startTime) / 1000).toFixed(1);
info(`========== Report complete in ${elapsed}s ==========`);
info(`GA4: ${ga4Result.status} | GSC: ${gscResult.status} | CF: ${cfResult.status} | Discord: ${discordStatus}`);

process.exit(0);
