export type Locale = 'zh' | 'en';

export const SITE = {
  url: 'https://btcson66-rgb.github.io',
  // base path WITHOUT trailing slash; keep in sync with astro.config base
  basePath: '/freetools',
  locales: ['zh', 'en'] as Locale[],
  defaultLocale: 'zh' as Locale,
  name: { zh: '免費工具箱', en: 'Free Tools Hub' },
  tagline: {
    zh: '免費線上工具大全，打開網頁即可使用，免下載 App。',
    en: 'Free online tools for everyday use. No installation required.',
  },
  adsenseClient: 'ca-pub-7052036786750044',
  adsenseEnabled: false,
  features: {
    adsense: false,
    affiliate: false,
    sponsor: false,
    relatedResources: false,
    newsletter: false,
  },
  email: 'btcson66@gmail.com',
  htmlLang: { zh: 'zh-Hant', en: 'en' } as Record<Locale, string>,
  hreflang: { zh: 'zh-TW', en: 'en' } as Record<Locale, string>,
};
