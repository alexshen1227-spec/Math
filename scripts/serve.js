/* Minimal zero-dependency static server for previewing Axiom locally.
   Serves the project root so the PWA (sw.js, manifest, icons) works
   same-origin. Run via .claude/launch.json. */
const http = require('http');
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const PORT = 5577;
const TYPES = { '.html':'text/html; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.json':'application/json; charset=utf-8', '.png':'image/png', '.svg':'image/svg+xml', '.css':'text/css; charset=utf-8', '.ico':'image/x-icon', '.woff2':'font/woff2' };

http.createServer((req, res) => {
  try {
    let urlPath = decodeURIComponent(req.url.split('?')[0]);
    if (urlPath === '/' || urlPath === '') urlPath = '/index.html';
    const filePath = path.join(ROOT, path.normalize(urlPath));
    if (!filePath.startsWith(ROOT)) { res.writeHead(403); res.end('forbidden'); return; }
    fs.readFile(filePath, (err, data) => {
      if (err) { res.writeHead(404, { 'Content-Type': 'text/plain' }); res.end('not found'); return; }
      const ext = path.extname(filePath).toLowerCase();
      res.writeHead(200, { 'Content-Type': TYPES[ext] || 'application/octet-stream', 'Service-Worker-Allowed': '/' });
      res.end(data);
    });
  } catch (e) { res.writeHead(500); res.end('error'); }
}).listen(PORT, () => console.log('Axiom preview at http://localhost:' + PORT));
