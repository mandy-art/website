// Die Meeting Kostenuhr ist nach /tools/meeting/ umgezogen. Dieser Service Worker räumt die alte Installation auf.
self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith("kostenuhr-v1")).map(k => caches.delete(k))))
      .then(() => self.registration.unregister())
      .then(() => self.clients.matchAll()).then(cs => cs.forEach(c => c.navigate("/tools/meeting/")))
  );
});
