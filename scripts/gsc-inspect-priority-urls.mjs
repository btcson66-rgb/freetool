import { join } from 'node:path';
import {
  filterSubmitCandidates,
  googleAccessToken,
  gscPriorityUrlsPath,
  priorityUrlsPath,
  readPriorityUrls,
  reportsDir,
  siteUrl,
  writeJson,
  writeText,
} from './seo-indexing-utils.mjs';

const priorityUrls = readPriorityUrls(gscPriorityUrlsPath, priorityUrlsPath);
const { submitted: urls, skipped } = filterSubmitCandidates(priorityUrls);
const report = {
  generatedAt: new Date().toISOString(),
  siteUrl,
  inspected: [],
  skipped,
  errors: [],
};

try {
  const token = await googleAccessToken();
  for (const url of urls) {
    try {
      const response = await fetch('https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify({
          inspectionUrl: url,
          siteUrl,
          languageCode: 'zh-TW',
        }),
      });
      const data = await response.json().catch(() => ({}));
      const result = data.inspectionResult?.indexStatusResult ?? {};
      if (!response.ok) {
        report.errors.push({ url, status: response.status, message: data.error?.message ?? 'URL Inspection request failed' });
        continue;
      }
      report.inspected.push({
        url,
        googleKnown: Boolean(result.verdict || result.coverageState || result.indexingState),
        indexed: result.verdict === 'PASS',
        verdict: result.verdict ?? '',
        crawlState: result.lastCrawlTime ? `Last crawled ${result.lastCrawlTime}` : (result.coverageState ?? ''),
        indexingState: result.indexingState ?? '',
        canonicalState: {
          googleCanonical: result.googleCanonical ?? '',
          userCanonical: result.userCanonical ?? '',
        },
        robotsState: result.robotsTxtState ?? '',
        sitemapDiscovery: result.sitemap ? result.sitemap.join(', ') : '',
      });
    } catch (error) {
      report.errors.push({ url, message: error.message });
    }
  }
} catch (error) {
  report.errors.push({ url: '*', message: error.message });
}

const md = [
  '# Weekly Indexing Report',
  '',
  `Generated: ${report.generatedAt}`,
  `Site URL: ${siteUrl}`,
  '',
  `- Priority URLs configured: ${priorityUrls.length}`,
  `- Inspected: ${report.inspected.length}`,
  `- Skipped before inspection: ${report.skipped.length}`,
  `- Errors: ${report.errors.length}`,
  '',
  '## URL Inspection Results',
  '',
  report.inspected.length
    ? report.inspected.map((item) => [
      `### ${item.url}`,
      `- Google knows URL: ${item.googleKnown ? 'yes' : 'no'}`,
      `- Indexed: ${item.indexed ? 'yes' : 'no'}`,
      `- Crawl status: ${item.crawlState || 'unknown'}`,
      `- Indexing status: ${item.indexingState || item.verdict || 'unknown'}`,
      `- Canonical: Google=${item.canonicalState.googleCanonical || 'unknown'}; User=${item.canonicalState.userCanonical || 'unknown'}`,
      `- Robots: ${item.robotsState || 'unknown'}`,
      `- Sitemap discovery: ${item.sitemapDiscovery || 'unknown'}`,
    ].join('\n')).join('\n\n')
    : '- None',
  '',
  '## Errors',
  '',
  report.errors.length ? report.errors.map((item) => `- ${item.url} - ${item.status ?? ''} ${item.message}`).join('\n') : '- None',
  '',
  '## Skipped URLs',
  '',
  report.skipped.length ? report.skipped.map((item) => `- ${item.url} - ${item.reason}`).join('\n') : '- None',
  '',
].join('\n');

writeJson(join(reportsDir, 'gsc-url-inspection-report.json'), report);
writeText(join(reportsDir, 'weekly-indexing-report.md'), md);
console.log(JSON.stringify({
  inspected: report.inspected.length,
  skipped: report.skipped.length,
  errors: report.errors.length,
}, null, 2));

if (report.errors.length && !report.errors.every((item) => /Missing GSC/.test(item.message))) {
  process.exitCode = 1;
}
