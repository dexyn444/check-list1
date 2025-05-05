const CACHE_NAME = "checklist-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/manifest.json",
  "/serviceWorker.js",
  "/icon-192.png",
  "/icon-512.png"
];

// Instala e armazena arquivos no cache
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Recupera do cache quando offline
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
