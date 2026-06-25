import { existsSync } from 'node:fs';
import { join } from 'node:path';
import {
  changedUrlsPath,
  currentState,
  distDir,
  filterSubmitCandidates,
  previousState,
  priorityUrlsPath,
  publicDir,
  readCurrentSitemapEntries,
  readJson,
  readPriorityUrls,
  reportsDir,
  siteOrigin,
  statePath,
  writeJson,
  writeText,
} from './seo-indexing-utils.mjs';

const key = process.env.INDEXNOW_KEY?.trim();
const sitemapEntries = readCurrentSitemapEntries();
const changed = readJson(changedUrlsPath, null);
const diffUrls = changed?.changed ?? [];
const priorityUrls = readPriorityUrls(priorityUrlsPath);
const desired = [...new Set([...diffUrls, ...priorityUrls])];
const { submitted: urls, skipped } = filterSubmitCandidates(desired);

const report = {
  generatedAt: new Date().toISOString(),
  provider: 'IndexNow',
  attempted: 0,
  success: [],
  failed: [],
  skipped,
};

if (!key) {
  report.skipped.push({ url: '*', reason: 'missing-INDEXNOW_KEY' });
  writeJson(join(reportsDir, 'indexnow-submission-report.json'), report);
  console.log(JSON.stringify(report, null, 2));
  process.exit(0);
}

const keyFile = `${key}.txt`;
const keyLocation = `${siteOrigin}/${keyFile}`;
writeText(join(publicDir, keyFile), key);
if (existsSync(distDir)) writeText(join(distDir, keyFile), key);

if (!urls.length) {
  report.skipped.push({ url: '*', reason: 'no-new-modified-or-priority-urls' });
  writeJson(join(reportsDir, 'indexnow-submission-report.json'), report);
  console.log(JSON.stringify(report, null, 2));
  process.exit(0);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function waitForKeyLocation(url) {
  const attempts = process.env.CI ? 12 : 1;
  for (let attempt = 1; attempt <= attempts; attempt += 1) {
    try {
      const response = await fetch(url, { cache: 'no-store' });
      const body = await response.text();
      if (response.ok && body.trim() === key) return true;
      report.skipped.push({
        url,
        reason: `indexnow-key-not-live-attempt-${attempt}`,
        status: response.status,
      });
    } catch (error) {
      report.skipped.push({
        url,
        reason: `indexnow-key-check-failed-attempt-${attempt}`,
        error: error.message,
      });
    }
    if (attempt < attempts) await sleep(15000);
  }
  return false;
}

async function submitToIndexNow() {
  return fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: 'funnytools.win',
      key,
      keyLocation,
      urlList: urls,
    }),
  });
}

try {
  await waitForKeyLocation(keyLocation);
  report.attempted = urls.length;

  let response;
  let body = '';
  for (let attempt = 1; attempt <= 4; attempt += 1) {
    response = await submitToIndexNow();
    body = await response.text();
    if (response.ok) break;
    if (!body.includes('SiteVerificationNotCompleted') || attempt === 4) break;
    await sleep(30000 * attempt);
  }

  if (response.ok) {
    report.success = urls;
    writeJson(statePath, currentState(sitemapEntries));
  } else {
    report.failed = urls.map((url) => ({ url, status: response.status, body: body.slice(0, 500) }));
    process.exitCode = 1;
  }
} catch (error) {
  report.attempted = urls.length;
  report.failed = urls.map((url) => ({ url, error: error.message }));
  process.exitCode = 1;
}

writeJson(join(reportsDir, 'indexnow-submission-report.json'), report);
console.log(JSON.stringify({
  attempted: report.attempted,
  success: report.success.length,
  failed: report.failed.length,
  skipped: report.skipped.length,
}, null, 2));
