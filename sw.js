const CACHE='sparkly-v3';
const FILES=['./','./index.html','./styles.css','./app.js','./manifest.webmanifest',
'./assets/logo.jpg','./assets/sparkly.jpg','./assets/chespitas.jpg','./assets/chespita1.jpg','./assets/chespita2.jpg'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)));self.skipWaiting()});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x))))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
