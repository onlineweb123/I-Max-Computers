const CACHE_NAME = 'imax-cache-v1';
const assetsToCache = [
  'index.html',
  'store.html',
  'service.html',
  'my_cart.html',
  'notifications.html',
  'profile.html',
  'manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(assetsToCache);
    })
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
