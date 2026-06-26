import type { APIRoute } from 'astro';
import { defaultBlogEntries, sitemapUrlSet } from '../lib/sitemap';

export const GET: APIRoute = () => new Response(sitemapUrlSet(defaultBlogEntries()), {
  headers: {
    'Content-Type': 'application/xml; charset=utf-8',
  },
});

