self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('taskpulse-smart-v1').then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './icon-192.png',
        './icon-512.png',
        './maskable-512.png',
        './taskpulse-splash-hex.jpg'
      ]);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => {
        if(!k.startsWith('taskpulse-smart-v1')){
          return caches.delete(k);
        }
      }))
    )
  );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  if(req.method !== 'GET') return;
  event.respondWith(
    caches.match(req).then(cached => {
      if(cached) return cached;
      return fetch(req).then(resp => {
        const copy = resp.clone();
        caches.open('taskpulse-smart-v1').then(cache => cache.put(req, copy));
        return resp;
      }).catch(() => cached);
    })
  );
});
