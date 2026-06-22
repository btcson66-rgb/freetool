import { readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const root = new URL('..', import.meta.url).pathname.replace(/^\/(.:)/, '$1');
const dist = join(root, 'dist');
const requiredEvents = [
  'tool_view',
  'tool_started',
  'tool_action',
  'tool_completed',
  'result_action',
  'file_download',
  'tool_error',
];
const forbiddenPayloadNames = [
  'input_value',
  'file_name',
  'result_text',
  'error_message',
  'user_input',
];

function toolPages(localePrefix = '') {
  const directory = join(dist, localePrefix, 'tools');
  return readdirSync(directory, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => join(directory, entry.name, 'index.html'));
}

const pages = [...toolPages(), ...toolPages('en')];
const failures = [];

for (const page of pages) {
  const html = readFileSync(page, 'utf8');
  for (const eventName of requiredEvents) {
    if (!html.includes(eventName)) failures.push(`${page}: missing ${eventName}`);
  }
  for (const payloadName of forbiddenPayloadNames) {
    if (html.includes(payloadName)) failures.push(`${page}: forbidden analytics payload ${payloadName}`);
  }
}

const supportHtml = readFileSync(join(dist, 'support', 'index.html'), 'utf8');
const supportScript = readFileSync(join(dist, 'support-products.js'), 'utf8');
if (!supportHtml.includes('G-SV027MPXK4')) failures.push('support page: GA4 measurement ID missing');
if (!supportScript.includes('affiliate_click')) failures.push('support-products.js: affiliate_click missing');

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Analytics audit passed: ${pages.length} localized tool pages, ${requiredEvents.length} required events, 0 forbidden payload names.`);
