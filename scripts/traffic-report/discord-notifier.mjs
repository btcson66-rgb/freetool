import { config } from './config.mjs';
import { info, error as logError } from './logger.mjs';

const API = 'https://discord.com/api/v10';

async function discordRequest(path, options = {}) {
  const resp = await fetch(`${API}${path}`, {
    ...options,
    headers: {
      authorization: `Bot ${config.discord.token}`,
      'content-type': 'application/json',
      ...options.headers,
    },
  });
  if (!resp.ok) {
    const text = await resp.text();
    throw new Error(`Discord API ${resp.status}: ${text.slice(0, 300)}`);
  }
  const text = await resp.text();
  return text ? JSON.parse(text) : {};
}

async function findOrCreateChannel() {
  const guildId = config.discord.guildId;
  const channels = await discordRequest(`/guilds/${guildId}/channels`);
  const existing = channels.find((c) => c.name === config.discord.channelName && c.type === 0);
  if (existing) {
    info(`Discord: reusing channel #${config.discord.channelName} (${existing.id})`);
    return existing.id;
  }

  let categoryId = null;
  const category = channels.find((c) => c.name === '📋 任務監測' && c.type === 4);
  if (category) categoryId = category.id;

  const newChannel = await discordRequest(`/guilds/${guildId}/channels`, {
    method: 'POST',
    body: JSON.stringify({
      name: config.discord.channelName,
      type: 0,
      parent_id: categoryId,
      topic: 'FreeTools 每日流量分析報告',
      permission_overwrites: [
        { id: guildId, type: 0, deny: '2048' },
      ],
    }),
  });

  info(`Discord: created channel #${config.discord.channelName} (${newChannel.id})`);
  return newChannel.id;
}

export async function sendDiscordNotification(message) {
  if (!config.discord.token || !config.discord.guildId) {
    logError('Discord: token or guild ID missing, skipping notification');
    return false;
  }

  try {
    const channelId = await findOrCreateChannel();

    const chunks = [];
    let current = '';
    for (const line of message.split('\n')) {
      if (current.length + line.length + 1 > 1900) {
        chunks.push(current);
        current = line;
      } else {
        current += (current ? '\n' : '') + line;
      }
    }
    if (current) chunks.push(current);

    const mention = config.discord.ownerUserId ? `<@${config.discord.ownerUserId}> ` : '';
    for (let i = 0; i < chunks.length; i++) {
      const content = i === 0 ? `${mention}${chunks[i]}` : chunks[i];
      await discordRequest(`/channels/${channelId}/messages`, {
        method: 'POST',
        body: JSON.stringify({ content }),
      });
    }

    info(`Discord: notification sent (${chunks.length} messages)`);
    return true;
  } catch (err) {
    logError(`Discord: ${err.message}`);
    return false;
  }
}
