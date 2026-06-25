import type { APIRoute } from 'astro';
import { defaultToolEntries, sitemapUrlSet } from '../lib/sitemap';

export const GET: APIRoute = () => new Response(sitemapUrlSet(defaultToolEntries()), {
  headers: {
    'Content-Type': 'application/xml; charset=utf-8',
  },
});

