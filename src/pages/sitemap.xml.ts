import type { APIRoute } from 'astro';
import { SITE, type Locale } from '../config/site';
import { categories } from '../data/categories';
import { getToolsByCategory, liveTools } from '../data/tools';
import { absoluteUrl, localePath } from '../lib/url';

const legalPages = ['about', 'about-tools', 'contact', 'privacy', 'terms', 'disclaimer'];

function escapeXml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function alternateLinks(segments: string[]): string {
  const localeLinks = SITE.locales
    .map((locale) => {
      const href = absoluteUrl(localePath(locale, ...segments));
      return `<xhtml:link rel="alternate" hreflang="${SITE.hreflang[locale]}" href="${escapeXml(href)}" />`;
    })
    .join('');
  const xDefault = absoluteUrl(localePath(SITE.defaultLocale, ...segments));

  return `${localeLinks}<xhtml:link rel="alternate" hreflang="x-default" href="${escapeXml(xDefault)}" />`;
}

function urlEntry(lang: Locale, segments: string[], lastmod?: string): string {
  const loc = absoluteUrl(localePath(lang, ...segments));
  const lastmodTag = lastmod ? `<lastmod>${escapeXml(lastmod)}</lastmod>` : '';

  return `<url><loc>${escapeXml(loc)}</loc>${lastmodTag}${alternateLinks(segments)}</url>`;
}

function latestDate(dates: (string | undefined)[]): string | undefined {
  return dates.filter((date): date is string => Boolean(date)).sort().pop();
}

export const GET: APIRoute = () => {
  const liveCategories = categories.filter((category) =>
    getToolsByCategory(category.id).some((tool) => tool.status === 'live'),
  );
  const siteLatest = latestDate(liveTools.map((tool) => tool.updated));

  // Each entry carries its own lastmod so search engines can prioritise recrawls.
  const segmentSets: { segments: string[]; lastmod?: string }[] = [
    { segments: [], lastmod: siteLatest },
    { segments: ['tools'], lastmod: siteLatest },
    ...liveCategories.map((category) => ({
      segments: ['category', category.id],
      lastmod: latestDate(getToolsByCategory(category.id).map((tool) => tool.updated)),
    })),
    ...liveTools.map((tool) => ({ segments: ['tools', tool.slug], lastmod: tool.updated })),
    ...legalPages.map((page) => ({ segments: [page] })),
  ];

  const entries = SITE.locales
    .flatMap((lang) => segmentSets.map(({ segments, lastmod }) => urlEntry(lang, segments, lastmod)))
    .join('');

  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${entries}</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
