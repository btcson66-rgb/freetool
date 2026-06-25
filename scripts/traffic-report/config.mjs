import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..', '..');
const secretDir = join(root, 'api token');

const serviceAccount = JSON.parse(readFileSync(join(secretDir, 'ga4-service-account.json'), 'utf8'));
const analyticsConfig = JSON.parse(readFileSync(join(secretDir, 'ga4-config.json'), 'utf8'));

const cloudflareText = readFileSync(join(secretDir, 'cloudflare api.txt'), 'utf8');
const cfLines = Object.fromEntries(
  cloudflareText
    .split(/\r?\n/)
    .map((l) => l.match(/^\s*(token|zone_id|account_id)\s*=\s*(.+?)\s*$/))
    .filter(Boolean)
    .map((m) => [m[1], m[2]]),
);

let discordToken = '';
let discordGuildId = '';
try {
  const envText = readFileSync('D:\\notify-bot\\.env', 'utf8');
  for (const line of envText.split(/\r?\n/)) {
    const m = line.match(/^(\w+)\s*=\s*(.+?)\s*$/);
    if (m) {
      if (m[1] === 'DISCORD_TOKEN') discordToken = m[2];
      if (m[1] === 'GUILD_ID') discordGuildId = m[2];
    }
  }
} catch { /* Discord config optional */ }

export const config = {
  root,
  secretDir,
  serviceAccount,
  ga4PropertyId: String(analyticsConfig.property_id || '').replace(/^properties\//, ''),
  cloudflare: {
    token: cfLines.token || '',
    zoneId: cfLines.zone_id || '',
    accountId: cfLines.account_id || '',
  },
  discord: {
    token: discordToken,
    guildId: discordGuildId,
    ownerUserId: '822832480133840918',
    channelName: 'funnytools-analytics',
  },
  timezone: 'Asia/Taipei',
  domain: 'funnytools.win',
};
