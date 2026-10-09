/* Service Worker – Malle 2026 (Cala d'Or)
   Strategie: NETWORK-FIRST (online immer aktuell, offline aus Cache).
   Beim Aktivieren werden alte Caches geloescht und offene Seiten neu geladen,
   damit eine neue Version sofort sichtbar ist. */
const CACHE = "malle-2026-v16";
const ASSETS = [
  "./",
  "index.html",
  "assets/css/style.css?v=16",
  "assets/js/data.js?v=16",
  "assets/js/app.js?v=16",
  "assets/vendor/leaflet/leaflet.css",
  "assets/vendor/leaflet/leaflet.js",
  "manifest.webmanifest"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE)
      .then((cache) => cache.addAll(ASSETS))
      .catch(() => {})
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    // Alte Caches entfernen
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
    // Sofort die Kontrolle uebernehmen -> loest in der Seite 'controllerchange' aus,
    // die sich daraufhin genau einmal neu laedt (siehe app.js).
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return; // externe Requests unangetastet

  // Network-first: immer versuchen, die aktuelle Version zu holen
  event.respondWith(
    fetch(req)
      .then((res) => {
        const copy = res.clone();
        caches.open(CACHE).then((cache) => cache.put(req, copy)).catch(() => {});
        return res;
      })
      .catch(() =>
        caches.match(req).then((cached) => cached || caches.match("index.html"))
      )
  );
});
