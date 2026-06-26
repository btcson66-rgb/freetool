const CACHE_VERSION = 'freetools-static-v5.0.5';
const APP_SHELL = [
  '/',
  '/tools/',
  '/education-statistics/',
  '/privacy/',
  '/support/',
  '/favicon.svg',
  '/favicon.ico',
  '/apple-touch-icon.png',
  '/manifest.webmanifest'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((key) => key !== CACHE_VERSION).map((key) => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

function shouldHandle(request) {
  if (request.method !== 'GET') return false;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return false;
  if (url.pathname.startsWith('/api/') || url.pathname.startsWith('/data/support-products')) return false;
  return true;
}

self.addEventListener('fetch', (event) => {
  if (!shouldHandle(event.request)) return;

  const request = event.request;
  const url = new URL(request.url);
  const isDocument = request.mode === 'navigate' || request.destination === 'document';

  event.respondWith(
    caches.match(request).then((cached) => {
      const network = fetch(request).then((response) => {
        if (response && response.ok && (isDocument || url.pathname.match(/\.(css|js|svg|ico|png|jpg|jpeg|webp|woff2?)$/))) {
          const copy = response.clone();
          caches.open(CACHE_VERSION).then((cache) => cache.put(request, copy));
        }
        return response;
      });

      if (isDocument) {
        return network.catch(() => cached || caches.match('/'));
      }

      return cached || network;
    })
  );
});
