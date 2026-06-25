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
writeText(join(publicDir, keyFile), key);
if (existsSync(distDir)) writeText(join(distDir, keyFile), key);

if (!urls.length) {
  report.skipped.push({ url: '*', reason: 'no-new-modified-or-priority-urls' });
  writeJson(join(reportsDir, 'indexnow-submission-report.json'), report);
  console.log(JSON.stringify(report, null, 2));
  process.exit(0);
}

try {
  const response = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: 'funnytools.win',
      key,
      keyLocation: `${siteOrigin}/${keyFile}`,
      urlList: urls,
    }),
  });
  report.attempted = urls.length;
  if (response.ok) {
    report.success = urls;
    writeJson(statePath, currentState(sitemapEntries));
  } else {
    const body = await response.text();
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
