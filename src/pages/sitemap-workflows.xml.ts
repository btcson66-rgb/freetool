import type { APIRoute } from 'astro';
import { defaultWorkflowEntries, sitemapUrlSet } from '../lib/sitemap';

export const GET: APIRoute = () => new Response(sitemapUrlSet(defaultWorkflowEntries()), {
  headers: {
    'Content-Type': 'application/xml; charset=utf-8',
  },
});
