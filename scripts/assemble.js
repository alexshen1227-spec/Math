/* Inlines every content module into index.html between the
   CONTENT_DATA:BEGIN/END markers. Idempotent — safe to re-run after
   regenerating content. Run: node scripts/assemble.js                */
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const BC = path.join(ROOT, 'build_content');
const INDEX = path.join(ROOT, 'index.html');

const FILES = ['articles_1.js','articles_2.js','strategies.js','methods_1.js','methods_2.js','glossary.js','banks.js','courses_1.js','courses_2.js'];

const BEGIN = '<!-- CONTENT_DATA:BEGIN -->';
const END = '<!-- CONTENT_DATA:END -->';

let html = fs.readFileSync(INDEX, 'utf8');
const b = html.indexOf(BEGIN), e = html.indexOf(END);
if (b < 0 || e < 0) { console.error('injection markers not found in index.html'); process.exit(1); }

let blocks = '';
let total = 0;
FILES.forEach((f) => {
  const p = path.join(BC, f);
  let src = fs.readFileSync(p, 'utf8').trim();
  // never let a data string accidentally close the inline script tag
  src = src.replace(/<\/script>/gi, '<\\/script>');
  blocks += '\n<script>/* ' + f + ' */\n' + src + '\n</script>';
  total += src.length;
});

const injected = BEGIN + blocks + '\n' + END;
html = html.slice(0, b) + injected + html.slice(e + END.length);
fs.writeFileSync(INDEX, html, 'utf8');
console.log('assembled ' + FILES.length + ' content modules (' + Math.round(total / 1024) + ' KB of data) into index.html');
console.log('index.html is now ' + Math.round(html.length / 1024) + ' KB');
