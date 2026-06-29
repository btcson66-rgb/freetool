import type { APIRoute } from 'astro';
import { defaultExampleEntries, sitemapUrlSet } from '../lib/sitemap';

export const GET: APIRoute = () => new Response(sitemapUrlSet(defaultExampleEntries()), {
  headers: {
    'Content-Type': 'application/xml; charset=utf-8',
  },
});
