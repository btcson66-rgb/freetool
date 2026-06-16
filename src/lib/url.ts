import { SITE, type Locale } from '../config/site';

function cleanSegment(segment: string): string {
  return segment.replace(/^\/+|\/+$/g, '');
}

function basePrefix(): string {
  const base = import.meta.env.BASE_URL || '/';
  return base.endsWith('/') ? base : `${base}/`;
}

export function pathWithBase(...segments: string[]): string {
  const joined = segments.map(cleanSegment).filter(Boolean).join('/');
  return joined ? `${basePrefix()}${joined}/` : basePrefix();
}

export function assetPath(...segments: string[]): string {
  const joined = segments.map(cleanSegment).filter(Boolean).join('/');
  return joined ? `${basePrefix()}${joined}` : basePrefix();
}

export function localePath(lang: Locale, ...segments: string[]): string {
  return pathWithBase(lang, ...segments);
}

export function toolUrl(lang: Locale, slug: string): string {
  return localePath(lang, 'tools', slug);
}

export function embedUrl(lang: Locale, slug: string): string {
  return localePath(lang, 'embed', slug);
}

export function categoryUrl(lang: Locale, category: string): string {
  return localePath(lang, 'category', category);
}

export function absoluteUrl(path: string): string {
  if (/^https?:\/\//.test(path)) {
    return path;
  }

  return `${SITE.url}${path.startsWith('/') ? path : `/${path}`}`;
}

export function altLinks(segments: string[] = []) {
  const links = SITE.locales.map((lang) => ({
    lang,
    href: localePath(lang, ...segments),
  }));

  return {
    links,
    xDefault: localePath(SITE.defaultLocale, ...segments),
  };
}
