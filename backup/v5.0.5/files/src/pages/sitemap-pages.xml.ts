import type { APIRoute } from 'astro';
import { defaultPageEntries, sitemapUrlSet } from '../lib/sitemap';

export const GET: APIRoute = () => new Response(sitemapUrlSet(defaultPageEntries()), {
  headers: {
    'Content-Type': 'application/xml; charset=utf-8',
  },
});

