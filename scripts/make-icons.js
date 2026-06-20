/* Generates Axiom's placeholder icons with zero dependencies.
   The mark is the glyph "∴" (therefore) rendered as three glowing
   violet dots on the near-black brand background. Pure-JS PNG encoder
   using Node's built-in zlib. Run: node scripts/make-icons.js        */
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const OUT = path.join(__dirname, '..', 'icons');
fs.mkdirSync(OUT, { recursive: true });

// --- minimal PNG writer ---
function crc32(buf) {
  let c, table = crc32.t || (crc32.t = (() => {
    const t = [];
    for (let n = 0; n < 256; n++) { c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xEDB88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; }
    return t;
  })());
  c = 0xFFFFFFFF;
  for (let i = 0; i < buf.length; i++) c = table[(c ^ buf[i]) & 0xFF] ^ (c >>> 8);
  return (c ^ 0xFFFFFFFF) >>> 0;
}
function chunk(type, data) {
  const len = Buffer.alloc(4); len.writeUInt32BE(data.length, 0);
  const t = Buffer.from(type, 'ascii');
  const body = Buffer.concat([t, data]);
  const crc = Buffer.alloc(4); crc.writeUInt32BE(crc32(body), 0);
  return Buffer.concat([len, body, crc]);
}
function png(width, height, rgba) {
  const sig = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]);
  const ihdr = Buffer.alloc(13);
  ihdr.writeUInt32BE(width, 0); ihdr.writeUInt32BE(height, 4);
  ihdr[8] = 8; ihdr[9] = 6; ihdr[10] = 0; ihdr[11] = 0; ihdr[12] = 0; // 8-bit RGBA
  // raw scanlines with filter byte 0
  const stride = width * 4;
  const raw = Buffer.alloc((stride + 1) * height);
  for (let y = 0; y < height; y++) {
    raw[y * (stride + 1)] = 0;
    rgba.copy(raw, y * (stride + 1) + 1, y * stride, y * stride + stride);
  }
  const idat = zlib.deflateSync(raw, { level: 9 });
  return Buffer.concat([sig, chunk('IHDR', ihdr), chunk('IDAT', idat), chunk('IEND', Buffer.alloc(0))]);
}

// --- draw ∴ : three filled dots, with soft violet glow ---
function makeIcon(size, pad) {
  pad = pad || 0; // extra safe-zone for maskable
  const buf = Buffer.alloc(size * size * 4);
  const bg = [10, 10, 10];           // #0A0A0A
  const dot = [124, 92, 255];        // #7C5CFF
  // dot centers (fractional), arranged as the "therefore" triangle
  const inset = pad;
  const span = 1 - 2 * inset;
  const cx = size / 2;
  const pts = [
    [0.5, 0.32], [0.34, 0.66], [0.66, 0.66]
  ].map(([fx, fy]) => [ (inset + fx * span) * size, (inset + fy * span) * size ]);
  const r = size * 0.085 * span;
  const glow = r * 2.4;
  for (let y = 0; y < size; y++) {
    for (let x = 0; x < size; x++) {
      let rr = bg[0], gg = bg[1], bb = bg[2];
      // subtle radial vignette toward center
      for (let p = 0; p < pts.length; p++) {
        const dx = x - pts[p][0], dy = y - pts[p][1];
        const d = Math.sqrt(dx * dx + dy * dy);
        if (d < r) { rr = dot[0]; gg = dot[1]; bb = dot[2]; }
        else if (d < glow) {
          const a = Math.max(0, 1 - (d - r) / (glow - r)) * 0.5;
          rr = rr + (dot[0] - rr) * a; gg = gg + (dot[1] - gg) * a; bb = bb + (dot[2] - bb) * a;
        }
      }
      const i = (y * size + x) * 4;
      buf[i] = rr | 0; buf[i + 1] = gg | 0; buf[i + 2] = bb | 0; buf[i + 3] = 255;
    }
  }
  return png(size, size, buf);
}

const targets = [
  ['icon-192.png', 192, 0.04],
  ['icon-512.png', 512, 0.04],
  ['maskable-512.png', 512, 0.14],   // generous safe zone
  ['apple-touch-icon.png', 180, 0.06],
  ['favicon-32.png', 32, 0.02],
  ['favicon-16.png', 16, 0.0]
];
targets.forEach(([name, size, pad]) => {
  fs.writeFileSync(path.join(OUT, name), makeIcon(size, pad));
  console.log('wrote icons/' + name + ' (' + size + 'x' + size + ')');
});
console.log('done.');
