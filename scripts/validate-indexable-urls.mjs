import { existsSync } from 'node:fs';
import { join } from 'node:path';
import {
  attr,
  builtPages,
  distDir,
  ensureDir,
  isSelfCanonical,
  readCurrentSitemapEntries,
  reportsDir,
  siteOrigin,
  urlPath,
  writeJson,
  writeText,
} from './seo-indexing-utils.mjs';

if (!existsSync(distDir)) {
  console.error('dist/ is missing. Run npm run build first.');
  process.exit(1);
}

ensureDir(reportsDir);

const sitemapEntries = readCurrentSitemapEntries();
const sitemapUrls = new Set(sitemapEntries.map((entry) => entry.loc));
const pages = builtPages();
const pageByUrl = new Map(pages.map((page) => [page.loc, page]));
const categoryAndHomeFiles = pages
  .filter((page) => page.route === '/' || /^\/(?:en\/)?category\//.test(page.route))
  .map((page) => page.html);

function isLinkedFromHomeOrCategory(url) {
  const pathname = urlPath(url);
  for (const html of categoryAndHomeFiles) {
    for (const match of html.matchAll(/<a\b[^>]*>/gi)) {
      const href = attr(match[0], 'href');
      if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) continue;
      let linkedPath = '';
      if (href.startsWith('/')) {
        linkedPath = href.split('#')[0].split('?')[0];
      } else if (href.startsWith(siteOrigin)) {
        linkedPath = new URL(href).pathname;
      }
      if (linkedPath === pathname) return true;
    }
  }
  return pathname === '/';
}

const checked = sitemapEntries.map((entry) => {
  const page = pageByUrl.get(entry.loc);
  const checks = {
    httpStatus200: Boolean(page),
    noindex: page ? page.noindex : null,
    canonicalExists: page ? Boolean(page.canonical) : false,
    canonicalSelf: page ? isSelfCanonical(page) : false,
    title: page ? Boolean(page.title) : false,
    metaDescription: page ? Boolean(page.description) : false,
    h1: page ? Boolean(page.h1) : false,
    inSitemap: sitemapUrls.has(entry.loc),
    linkedFromHomeOrCategory: isLinkedFromHomeOrCategory(entry.loc),
  };
  const failures = Object.entries(checks)
    .filter(([key, value]) => {
      if (key === 'linkedFromHomeOrCategory') return false;
      if (key === 'noindex') return value === true;
      return value !== true;
    })
    .map(([key]) => key);
  const warnings = checks.linkedFromHomeOrCategory ? [] : ['linkedFromHomeOrCategory'];
  return {
    url: entry.loc,
    sitemap: entry.sitemap,
    lastmod: entry.lastmod,
    canonical: page?.canonical ?? '',
    title: page?.title ?? '',
    descriptionLength: page?.description?.length ?? 0,
    h1: page?.h1 ?? '',
    checks,
    status: failures.length ? 'fail' : 'pass',
    failures,
    warnings,
  };
});

const duplicateUrls = [...sitemapUrls].filter((url) => sitemapEntries.filter((entry) => entry.loc === url).length > 1);
const failures = checked.filter((entry) => entry.status === 'fail');
const warnings = checked.filter((entry) => entry.warnings.length);
const report = {
  generatedAt: new Date().toISOString(),
  totalSitemapUrls: sitemapEntries.length,
  uniqueSitemapUrls: sitemapUrls.size,
  duplicateUrls,
  passCount: checked.length - failures.length,
  failCount: failures.length,
  warningCount: warnings.length,
  urls: checked,
};

const md = [
  '# Indexable URL Report',
  '',
  `Generated: ${report.generatedAt}`,
  '',
  `- Sitemap URLs: ${report.totalSitemapUrls}`,
  `- Unique URLs: ${report.uniqueSitemapUrls}`,
  `- Passed: ${report.passCount}`,
  `- Failed: ${report.failCount}`,
  `- Warnings: ${report.warningCount}`,
  `- Duplicate URLs: ${duplicateUrls.length}`,
  '',
  failures.length ? '## Failures' : '## Failures',
  '',
  failures.length
    ? failures.map((entry) => `- ${entry.url} - ${entry.failures.join(', ')}`).join('\n')
    : '- None',
  '',
  warnings.length ? '## Warnings' : '## Warnings',
  '',
  warnings.length
    ? warnings.map((entry) => `- ${entry.url} - ${entry.warnings.join(', ')}`).join('\n')
    : '- None',
  '',
  '## Sitemap Counts',
  '',
  ...Object.entries(sitemapEntries.reduce((acc, entry) => {
    acc[entry.sitemap] = (acc[entry.sitemap] ?? 0) + 1;
    return acc;
  }, {})).map(([sitemap, count]) => `- ${sitemap}: ${count}`),
  '',
].join('\n');

writeJson(join(reportsDir, 'indexable-url-report.json'), report);
writeText(join(reportsDir, 'indexable-url-report.md'), md);

console.log(JSON.stringify({
  totalSitemapUrls: report.totalSitemapUrls,
  passCount: report.passCount,
  failCount: report.failCount,
  warningCount: report.warningCount,
  duplicateUrls: duplicateUrls.length,
}, null, 2));

if (failures.length || duplicateUrls.length) {
  process.exitCode = 1;
}
