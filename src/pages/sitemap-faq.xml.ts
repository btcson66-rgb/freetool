import type { APIRoute } from 'astro';
import { defaultFaqEntries, sitemapUrlSet } from '../lib/sitemap';

export const GET: APIRoute = () => new Response(sitemapUrlSet(defaultFaqEntries()), {
  headers: {
    'Content-Type': 'application/xml; charset=utf-8',
  },
});
