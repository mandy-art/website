// Speichert die App für die Offline-Nutzung. Bei Änderungen die Versionsnummer erhöhen.
const CACHE = "koerpersignale-v1";
const FILES = [
  "./", "./index.html", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png", "./favicon.png",
  "../../source-serif-4-latin-400-normal.woff2", "../../source-serif-4-latin-600-normal.woff2",
  "../../work-sans-latin-400-normal.woff2", "../../work-sans-latin-500-normal.woff2"
];
self.addEventListener("install", e => { e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))); self.skipWaiting(); });
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))));
  self.clients.claim();
});
// Erst aus dem Netz laden, bei fehlender Verbindung aus dem Speicher
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    fetch(e.request).then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r; })
      .catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
