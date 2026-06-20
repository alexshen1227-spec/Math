/* ============================================================
   Axiom service worker.
   BUMP CACHE_VERSION on every meaningful push — changing this
   string is what makes the browser see a "new" worker, install
   it in the background, and trigger the in-app update banner.

   As of v1.2 Axiom is fully self-hosted: KaTeX (js/css/fonts) and
   the UI webfonts live under ./assets, so the entire app — math
   glyphs and all — works offline on a cold first launch with zero
   third-party runtime dependencies.
   ============================================================ */
const CACHE_VERSION = 'axiom-v1.5.0';
const CACHE = CACHE_VERSION;

// Complete app shell — everything needed to render fully offline.
const CORE = [
  './',
  './index.html',
  './manifest.json',
  './assets/katex.min.css',
  './assets/katex.min.js',
  './assets/auto-render.min.js',
  './assets/fonts.css',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/maskable-512.png',
  './icons/apple-touch-icon.png',
  './icons/favicon-16.png',
  './icons/favicon-32.png',
  // UI webfonts (Space Grotesk + JetBrains Mono, latin + latin-ext)
  './assets/fonts/gf-0.woff2','./assets/fonts/gf-1.woff2','./assets/fonts/gf-2.woff2',
  './assets/fonts/gf-3.woff2','./assets/fonts/gf-4.woff2','./assets/fonts/gf-5.woff2',
  './assets/fonts/gf-6.woff2','./assets/fonts/gf-7.woff2','./assets/fonts/gf-8.woff2',
  './assets/fonts/gf-9.woff2','./assets/fonts/gf-10.woff2','./assets/fonts/gf-11.woff2',
  './assets/fonts/gf-12.woff2','./assets/fonts/gf-13.woff2',
  // KaTeX glyph fonts
  './assets/fonts/KaTeX_AMS-Regular.woff2',
  './assets/fonts/KaTeX_Caligraphic-Bold.woff2','./assets/fonts/KaTeX_Caligraphic-Regular.woff2',
  './assets/fonts/KaTeX_Fraktur-Bold.woff2','./assets/fonts/KaTeX_Fraktur-Regular.woff2',
  './assets/fonts/KaTeX_Main-Bold.woff2','./assets/fonts/KaTeX_Main-BoldItalic.woff2',
  './assets/fonts/KaTeX_Main-Italic.woff2','./assets/fonts/KaTeX_Main-Regular.woff2',
  './assets/fonts/KaTeX_Math-BoldItalic.woff2','./assets/fonts/KaTeX_Math-Italic.woff2',
  './assets/fonts/KaTeX_SansSerif-Bold.woff2','./assets/fonts/KaTeX_SansSerif-Italic.woff2',
  './assets/fonts/KaTeX_SansSerif-Regular.woff2','./assets/fonts/KaTeX_Script-Regular.woff2',
  './assets/fonts/KaTeX_Size1-Regular.woff2','./assets/fonts/KaTeX_Size2-Regular.woff2',
  './assets/fonts/KaTeX_Size3-Regular.woff2','./assets/fonts/KaTeX_Size4-Regular.woff2',
  './assets/fonts/KaTeX_Typewriter-Regular.woff2'
];

self.addEventListener('install', (e) => {
  // NOTE: no skipWaiting() here — the page asks the user before updating.
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    // best-effort per-file so one failed fetch can't abort the whole install
    await Promise.allSettled(CORE.map((u) => cache.add(u).catch(() => {})));
  })());
});

self.addEventListener('activate', (e) => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)));
    await self.clients.claim();
  })());
});

self.addEventListener('message', (e) => {
  if (e.data && e.data.type === 'SKIP_WAITING') self.skipWaiting();
});

function cacheable(resp) {
  // cache only real, complete 200s (skip opaque/range/partial)
  return resp && resp.status === 200 && resp.type !== 'opaque';
}

// race a fetch against a timeout so a flaky network can't hang a navigation
function fetchWithTimeout(req, ms) {
  return new Promise((resolve, reject) => {
    const t = setTimeout(() => reject(new Error('timeout')), ms);
    fetch(req).then((r) => { clearTimeout(t); resolve(r); }, (e) => { clearTimeout(t); reject(e); });
  });
}

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);

  // Navigations: try the network briefly (so a deployed update is seen), but
  // fall back fast to the cached shell — keeps cold/slow launches instant.
  if (req.mode === 'navigate') {
    e.respondWith((async () => {
      try {
        const fresh = await fetchWithTimeout(req, 3000);
        const cache = await caches.open(CACHE);
        cache.put('./', fresh.clone()).catch(() => {});
        return fresh;
      } catch (err) {
        return (await caches.match('./')) || (await caches.match('./index.html')) || Response.error();
      }
    })());
    return;
  }

  // Everything else is same-origin now: cache-first (versioned by the shell),
  // falling back to the network and caching anything new on the way through.
  e.respondWith((async () => {
    const hit = await caches.match(req);
    if (hit) return hit;
    try {
      const resp = await fetch(req);
      if (cacheable(resp)) { const c = await caches.open(CACHE); c.put(req, resp.clone()); }
      return resp;
    } catch (err) { return hit || Response.error(); }
  })());
});
