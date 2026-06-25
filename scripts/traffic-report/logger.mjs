import { mkdirSync, appendFileSync } from 'node:fs';
import { join } from 'node:path';
import { config } from './config.mjs';

const logDir = join(config.root, 'logs', 'traffic-report');
mkdirSync(logDir, { recursive: true });

const today = new Intl.DateTimeFormat('en-CA', {
  timeZone: config.timezone,
  year: 'numeric', month: '2-digit', day: '2-digit',
}).format(new Date());

const logPath = join(logDir, `${today}.log`);

export function log(level, message) {
  const ts = new Date().toISOString();
  const line = `[${ts}] [${level}] ${message}\n`;
  process.stdout.write(line);
  appendFileSync(logPath, line, 'utf8');
}

export function info(msg) { log('INFO', msg); }
export function error(msg) { log('ERROR', msg); }
export function warn(msg) { log('WARN', msg); }

export { logPath };
