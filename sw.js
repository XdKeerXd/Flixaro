const CACHE_NAME='flixaro-v1';
const ASSETS=['/','/index.html','/login.html','/register.html','/manifest.json','https://unpkg.com/lucide@latest/dist/umd/lucide.js','https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE_NAME).then(c=>c.addAll(ASSETS)))});
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request)).catch(()=>caches.match('/index.html')))});
