import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://btcson66-rgb.github.io',
  base: '/freetool',
  output: 'static',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
