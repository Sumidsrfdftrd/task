self.addEventListener('install', e => e.waitUntil(caches.open('v1-cache').then(cache => cache.addAll(['/']))));
self.addEventListener('fetch', e => e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(res => {caches.open('v1-cache').then(cache =>cache.put(e.request, res.clone()));return res;}))));
