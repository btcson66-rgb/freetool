const FAVORITES_KEY = 'freetools:favorites';
const RECENT_TOOLS_KEY = 'freetools:recentTools';
const RECENT_LIMIT = 10;

function readToolList(key: string): string[] {
  try {
    const raw = localStorage.getItem(key);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];
    return parsed.filter((item): item is string => typeof item === 'string' && item.length > 0);
  } catch {
    return [];
  }
}

function writeToolList(key: string, value: string[]): boolean {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  } catch {
    // localStorage can be unavailable in private mode or locked-down browsers.
    return false;
  }
}

export function getFavoriteTools(): string[] {
  return readToolList(FAVORITES_KEY);
}

export function isFavoriteTool(toolId: string): boolean {
  if (!toolId) return false;
  return getFavoriteTools().includes(toolId);
}

export function toggleFavoriteTool(toolId: string): boolean {
  if (!toolId) return false;
  const favorites = getFavoriteTools();
  const isFavorite = favorites.includes(toolId);
  const next = isFavorite ? favorites.filter((item) => item !== toolId) : [toolId, ...favorites];
  if (!writeToolList(FAVORITES_KEY, next)) return isFavorite;
  return !isFavorite;
}

export function recordRecentlyUsedTool(toolId: string): void {
  if (!toolId) return;
  const recent = readToolList(RECENT_TOOLS_KEY).filter((item) => item !== toolId);
  writeToolList(RECENT_TOOLS_KEY, [toolId, ...recent].slice(0, RECENT_LIMIT));
}

export function getRecentlyUsedTools(): string[] {
  return readToolList(RECENT_TOOLS_KEY);
}
