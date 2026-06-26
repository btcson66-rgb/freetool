import type { APIRoute } from 'astro';
import { defaultCategoryEntries, sitemapUrlSet } from '../lib/sitemap';

export const GET: APIRoute = () => new Response(sitemapUrlSet(defaultCategoryEntries()), {
  headers: {
    'Content-Type': 'application/xml; charset=utf-8',
  },
});
