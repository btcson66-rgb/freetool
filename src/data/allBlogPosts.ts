import { blogPosts, type BlogPost } from './blogPosts';
import { seoResourcePosts } from './seoResourcePosts';

const postMap = new Map<string, BlogPost>();

for (const post of [...seoResourcePosts, ...blogPosts]) {
  postMap.set(post.slug, post);
}

export const allBlogPosts = [...postMap.values()];

export function getAllBlogPost(slug: string): BlogPost | undefined {
  return allBlogPosts.find((post) => post.slug === slug);
}
