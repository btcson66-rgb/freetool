import { join } from 'node:path';
import {
  googleAccessToken,
  reportsDir,
  sitemapIndexUrl,
  siteUrl,
  writeJson,
  writeText,
} from './seo-indexing-utils.mjs';

const report = {
  generatedAt: new Date().toISOString(),
  sitemap: sitemapIndexUrl,
  siteUrl,
  status: 'skipped',
  message: '',
};

try {
  const token = await googleAccessToken();
  const endpoint = `https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(siteUrl)}/sitemaps/${encodeURIComponent(sitemapIndexUrl)}`;
  const response = await fetch(endpoint, {
    method: 'PUT',
    headers: { Authorization: `Bearer ${token}` },
  });
  const body = await response.text();
  report.status = response.ok ? 'submitted' : 'failed';
  report.message = response.ok ? 'Sitemap index submitted to Google Search Console.' : `${response.status} ${body.slice(0, 500)}`;
  if (!response.ok) process.exitCode = 1;
} catch (error) {
  report.status = /Missing GSC/.test(error.message) ? 'skipped' : 'failed';
  report.message = error.message;
  if (report.status === 'failed') process.exitCode = 1;
}

writeJson(join(reportsDir, 'gsc-sitemap-submit-report.json'), report);
writeText(join(reportsDir, 'gsc-sitemap-submit-report.md'), [
  '# GSC Sitemap Submit Report',
  '',
  `Generated: ${report.generatedAt}`,
  `Sitemap: ${report.sitemap}`,
  `Status: ${report.status}`,
  '',
  report.message,
  '',
].join('\n'));
console.log(JSON.stringify(report, null, 2));
