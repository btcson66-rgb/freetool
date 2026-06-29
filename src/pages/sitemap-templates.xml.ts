import type { APIRoute } from 'astro';
import { defaultTemplateEntries, sitemapUrlSet } from '../lib/sitemap';

export const GET: APIRoute = () => new Response(sitemapUrlSet(defaultTemplateEntries()), {
  headers: {
    'Content-Type': 'application/xml; charset=utf-8',
  },
});
