import { readdir, readFile, stat } from 'node:fs/promises';
import { join, relative, resolve, sep } from 'node:path';

const distDir = resolve('dist');
const switchPattern = /<a\b[^>]*class="[^"]*\blang-switch\b[^"]*"[^>]*href="([^"]+)"/g;

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = await Promise.all(entries.map(async (entry) => {
    const path = join(directory, entry.name);
    return entry.isDirectory() ? htmlFiles(path) : entry.name.endsWith('.html') ? [path] : [];
  }));
  return files.flat();
}

function decodeHtml(value) {
  return value.replaceAll('&amp;', '&').replaceAll('&#x2F;', '/').replaceAll('&#47;', '/');
}

function targetFile(href) {
  const url = new URL(decodeHtml(href), 'https://funnytools.win/');
  const pathname = decodeURIComponent(url.pathname);
  const relativePath = pathname.replace(/^\/+|\/+$/g, '');
  return relativePath ? join(distDir, relativePath, 'index.html') : join(distDir, 'index.html');
}

const files = await htmlFiles(distDir);
const failures = [];
let switches = 0;

for (const file of files) {
  const html = await readFile(file, 'utf8');
  for (const match of html.matchAll(switchPattern)) {
    switches += 1;
    const target = targetFile(match[1]);
    try {
      if (!(await stat(target)).isFile()) throw new Error('not a file');
    } catch {
      failures.push({
        page: `/${relative(distDir, file).split(sep).join('/')}`,
        href: match[1],
      });
    }
  }
}

if (switches === 0) {
  throw new Error('No language switch links were found in dist.');
}

if (failures.length > 0) {
  console.error('Language switch links with missing static targets:');
  for (const failure of failures) console.error(`- ${failure.page} -> ${failure.href}`);
  process.exitCode = 1;
} else {
  console.log(`Language switch audit passed: ${switches} links, 0 missing targets.`);
}
