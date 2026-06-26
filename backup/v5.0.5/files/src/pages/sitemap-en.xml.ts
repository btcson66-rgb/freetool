import type { APIRoute } from 'astro';
import { englishEntries, sitemapUrlSet } from '../lib/sitemap';

export const GET: APIRoute = () => new Response(sitemapUrlSet(englishEntries()), {
  headers: {
    'Content-Type': 'application/xml; charset=utf-8',
  },
});

