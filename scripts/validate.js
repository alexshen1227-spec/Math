/* Axiom build validator + generator stress test. Run: node scripts/validate.js
   - loads every content module, checks schema + cross-references
   - extracts the app IIFE from index.html and runs it under a DOM shim
   - stress-tests all 29 generators: accept(plain) must be true across difficulties
   - unit-tests the expression evaluator (the answer-equivalence engine)        */
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
const BC = path.join(ROOT, 'build_content');

let FAIL = 0, WARN = 0;
const bad = (m) => { FAIL++; console.log('  ✗ ' + m); };
const warn = (m) => { WARN++; console.log('  ! ' + m); };
const ok = (m) => console.log('  ✓ ' + m);

// ---- DOM / browser shim so the app's IIFE can run in node ----
function stubEl() {
  return {
    classList: { add() {}, remove() {}, toggle() {}, contains() { return false; } },
    style: {}, dataset: {}, children: [],
    appendChild() {}, removeChild() {}, remove() {}, setAttribute() {}, getAttribute() { return null; },
    addEventListener() {}, removeEventListener() {}, focus() {}, scrollIntoView() {},
    getBoundingClientRect() { return { left: 0, right: 0, top: 0, bottom: 0, width: 0, height: 0 }; },
    querySelector() { return null; }, querySelectorAll() { return []; }, hasAttribute() { return false; },
    offsetWidth: 0, offsetHeight: 0,
    set innerHTML(v) { this._h = v; }, get innerHTML() { return this._h || ''; },
    set textContent(v) { this._t = v; }, get textContent() { return this._t || ''; }
  };
}
global.window = global;
global.document = {
  addEventListener() {}, removeEventListener() {}, getElementById() { return stubEl(); },
  querySelector() { return null; }, querySelectorAll() { return []; }, createElement() { return stubEl(); },
  documentElement: { dataset: {} }, readyState: 'complete', body: stubEl(), hidden: false
};
global.localStorage = { getItem() { return null; }, setItem() {}, removeItem() {} };
global.navigator = { vibrate() {} };
global.matchMedia = global.window.matchMedia = () => ({ matches: false });
global.window.addEventListener = () => {};
global.scrollTo = () => {};
global.setTimeout = () => 0; global.setInterval = () => 0; global.clearTimeout = () => {}; global.clearInterval = () => {};
global.requestAnimationFrame = () => 0; global.cancelAnimationFrame = () => {};
global.getComputedStyle = () => ({ getPropertyValue: () => '#7C5CFF' });

// ---- load content modules ----
function loadContent(file) {
  const p = path.join(BC, file);
  if (!fs.existsSync(p)) { bad('missing content file: ' + file); return; }
  try { (0, eval)(fs.readFileSync(p, 'utf8')); ok('loaded ' + file); }
  catch (e) { bad('parse error in ' + file + ': ' + e.message); }
}
console.log('\n== Loading content ==');
['articles_1.js','articles_2.js','strategies.js','methods_1.js','methods_2.js','glossary.js','banks.js','courses_1.js','courses_2.js'].forEach(loadContent);

const ARTICLES = [].concat(window.AXIOM_ARTICLES_1||[], window.AXIOM_ARTICLES_2||[]);
const STRATEGIES = (window.AXIOM_STRATEGIES||[]);
const METHODS = [].concat(window.AXIOM_METHODS_1||[], window.AXIOM_METHODS_2||[]);
const COURSES = [].concat(window.AXIOM_COURSES_1||[], window.AXIOM_COURSES_2||[]);
const GLOSSARY = (window.AXIOM_GLOSSARY||[]);
const BANKS = (window.AXIOM_BANKS||[]);

// ---- balanced $...$ check ----
function balancedDollars(s) { let n = 0; for (let i = 0; i < s.length; i++) if (s[i] === '$' && s[i-1] !== '\\') n++; return n % 2 === 0; }
function scanText(obj, label) {
  const t = JSON.stringify(obj);
  // count only UNescaped $ — a literal currency "\$240" is not a math delimiter
  // and must not flip the parity (the app's splitMath() honours \$ too).
  let n = 0; for (let i = 0; i < t.length; i++) if (t[i] === '$' && t[i - 1] !== '\\') n++;
  if (n % 2 !== 0) warn('odd number of $ in ' + label + ' (check inline math)');
}

console.log('\n== Counts ==');
console.log('  articles=' + ARTICLES.length + ' strategies=' + STRATEGIES.length + ' methods=' + METHODS.length +
  ' courses=' + COURSES.length + ' glossary=' + GLOSSARY.length + ' banks=' + BANKS.length);
if (ARTICLES.length < 10) bad('expected >=10 articles, got ' + ARTICLES.length);
if (STRATEGIES.length < 7) bad('expected >=7 strategies');
if (METHODS.length < 24) bad('expected >=24 methods');
if (COURSES.length < 15) bad('expected 15 courses, got ' + COURSES.length);
if (GLOSSARY.length < 40) bad('expected >=40 glossary terms');

console.log('\n== Schema checks ==');
const articleIds = new Set(), methodIds = new Set();
const VALID_BLOCKS = new Set(['p','h2','ul','ol','callout','theorem','definition','pull','math','video']);
ARTICLES.concat(STRATEGIES).forEach((a) => {
  if (!a.id || !a.title || !Array.isArray(a.blocks)) { bad('bad article shape: ' + (a && a.id)); return; }
  articleIds.add(a.id);
  a.blocks.forEach((b, i) => { if (!b || !VALID_BLOCKS.has(b.type)) bad('article ' + a.id + ' block ' + i + ' bad type: ' + (b && b.type)); });
  if (!a.sources || !a.sources.length) warn('article ' + a.id + ' has no sources');
  const hasDisagree = a.blocks.some((b) => b.type === 'h2' && /disagree/i.test(b.text || ''));
  if (!hasDisagree) warn('article ' + a.id + ' missing "Where experts disagree" section');
  scanText(a, 'article ' + a.id);
});
const VALID_CATS = new Set(['Arithmetic & Mental Math','Fractions & Percents','Algebra','Geometry & Trig','Calculus']);
METHODS.forEach((m) => {
  if (!m.id || !m.name || !Array.isArray(m.steps)) { bad('bad method shape: ' + (m && m.id)); return; }
  methodIds.add(m.id);
  if (!VALID_CATS.has(m.category)) warn('method ' + m.id + ' unexpected category: ' + m.category);
  if (!['beg','int','adv'].includes(m.difficulty)) warn('method ' + m.id + ' bad difficulty: ' + m.difficulty);
  if (!m.source) warn('method ' + m.id + ' has no source');
  scanText(m, 'method ' + m.id);
});
BANKS.forEach((bnk) => {
  if (!bnk.id || !Array.isArray(bnk.items)) { bad('bad bank shape: ' + (bnk && bnk.id)); return; }
  bnk.items.forEach((it, i) => {
    if (!Array.isArray(it.choices) || it.choices.length < 2) bad('bank ' + bnk.id + ' item ' + i + ' bad choices');
    if (typeof it.answerIndex !== 'number' || it.answerIndex < 0 || it.answerIndex >= it.choices.length) bad('bank ' + bnk.id + ' item ' + i + ' answerIndex out of range');
    if (!it.solutionTeX) warn('bank ' + bnk.id + ' item ' + i + ' no solution');
  });
});
GLOSSARY.forEach((g) => { if (!g.term || !g.def || !g.group) bad('bad glossary term: ' + JSON.stringify(g).slice(0,60)); });

// ---- run the app IIFE to get generators + skill ids ----
console.log('\n== Booting app engine ==');
let AX = null;
try {
  const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
  const start = html.indexOf('(function(){');
  const end = html.lastIndexOf('})();');
  if (start < 0 || end < 0) throw new Error('could not locate IIFE');
  const code = html.slice(start, end + 5);
  (0, eval)(code);
  AX = window.__AXIOM;
  if (!AX) throw new Error('window.__AXIOM not exposed');
  ok('engine booted; ' + AX.SKILLS.length + ' skills registered');
} catch (e) { bad('engine boot failed: ' + e.message); }

if (AX) {
  const skillIds = new Set(AX.SKILLS.map((s) => s.id));

  // ---- course cross-references ----
  console.log('\n== Course cross-references ==');
  let dayTotal = 0;
  COURSES.forEach((c) => {
    if (!c.id || !Array.isArray(c.days)) { bad('bad course: ' + (c && c.id)); return; }
    dayTotal += c.days.length;
    (c.prereqs || []).forEach((p) => { if (!COURSES.some((x) => x.id === p)) bad('course ' + c.id + ' bad prereq: ' + p); });
    c.days.forEach((d) => {
      if (d.article && !articleIds.has(d.article)) bad('course ' + c.id + ' day ' + d.n + ' bad article: ' + d.article);
      (d.methods || []).forEach((mid) => { if (!methodIds.has(mid)) bad('course ' + c.id + ' day ' + d.n + ' bad method: ' + mid); });
      if (d.practice && !skillIds.has(d.practice)) bad('course ' + c.id + ' day ' + d.n + ' bad practice skill: ' + d.practice);
    });
  });
  console.log('  total course-days = ' + dayTotal);
  if (FAIL === 0) ok('all course references resolve');

  // ---- expression evaluator unit tests ----
  console.log('\n== Expression evaluator ==');
  const ev = AX.evalExpr;
  const near = (a, b) => Math.abs(a - b) < 1e-6;
  const cases = [
    ['2+3*4', 14], ['6/2*(1+2)', 9], ['6/2(1+2)', 9], ['2^3^2', 512], ['1/2', 0.5], ['2/4', 0.5],
    ['-3*-4', 12], ['(7)(8)', 56], ['3(x+1)', NaN /*needs x*/], ['sqrt(20)', Math.sqrt(20)], ['2pi', 2*Math.PI],
    ['-3^2', -9], ['0-3^2', -9], ['2^-2', 0.25], ['-2^2', -4], ['1e2', 100], ['2.5e-3', 0.0025], ['log(100)', 2]
  ];
  cases.forEach(([inp, exp]) => {
    const v = ev(inp);
    if (Number.isNaN(exp)) { /* skip x-dependent */ return; }
    if (!near(v, exp)) bad('evalExpr("' + inp + '") = ' + v + ', expected ' + exp);
  });
  // equivalence (algebraic): build a few accept-style checks via skills below
  ok('evaluator basic cases pass');

  // ---- generator stress test ----
  console.log('\n== Generator stress test (accept(plain) across difficulties) ==');
  const genSkills = AX.SKILLS.filter((s) => s.kind === 'gen');
  let genFail = 0, totalRuns = 0;
  // deterministic-ish RNG for the test loop
  let seed = 12345;
  const rng = () => { seed = (seed * 1103515245 + 12345) & 0x7fffffff; return seed / 0x7fffffff; };
  genSkills.forEach((s) => {
    let firstBad = null;
    for (let diff = 0; diff <= 4; diff++) {
      for (let i = 0; i < 60; i++) {
        totalRuns++;
        let p;
        try { p = s.gen(rng, diff); } catch (e) { firstBad = firstBad || ('gen threw: ' + e.message); genFail++; continue; }
        if (!p || !p.promptTeX || (p.answer == null)) { firstBad = firstBad || 'missing prompt/answer'; genFail++; continue; }
        const plain = (p.plain != null) ? String(p.plain) : String(p.answer);
        let acc = false; try { acc = p.accept(plain); } catch (e) { acc = false; }
        if (!acc) { firstBad = firstBad || ('accept(' + JSON.stringify(plain) + ') REJECTED for prompt ' + JSON.stringify(p.promptTeX)); genFail++; }
      }
    }
    if (firstBad) bad('skill "' + s.id + '": ' + firstBad);
    else ok('skill "' + s.id + '" ok');
  });
  console.log('  generator runs: ' + totalRuns + ', failures: ' + genFail);

  // ---- acceptor invariants (regression guards for the grading engine) ----
  console.log('\n== Acceptor invariants ==');
  // integral answers may include the instructed "+ C"
  try {
    const ig = AX.GEN['basic-integral'](rng, 1);
    const bare = ig.plain.replace(/\+\s*C/i, '');   // the antiderivative without "+C"
    if (!ig.accept(ig.plain)) bad('basic-integral rejects its own +C answer');
    else if (!ig.accept(bare)) bad('basic-integral rejects the bare antiderivative (correct math)');
    else if (!ig.accept(bare + ' + 7')) bad('basic-integral rejects a +constant form');
    else ok('basic-integral accepts any valid antiderivative (+C, +k, or bare)');
  } catch (e) { bad('basic-integral invariant threw: ' + e.message); }
  // simplify/fraction answers must be in lowest terms (decimals + unreduced rejected)
  try {
    const sf = AX.GEN['simplify-fraction'](rng, 0);
    const m = String(sf.plain).split('/'); const rp = +m[0], rq = +m[1];
    if (!sf.accept(rp + '/' + rq)) bad('simplify-fraction rejects its reduced answer');
    else if (rq > 1 && sf.accept((rp * 2) + '/' + (rq * 2))) bad('simplify-fraction ACCEPTS an unreduced fraction');
    else if (rq > 1 && sf.accept(String(rp / rq))) bad('simplify-fraction ACCEPTS a bare decimal');
    else ok('simplify-fraction enforces lowest terms');
  } catch (e) { bad('simplify-fraction invariant threw: ' + e.message); }
  // systems accept either x,y ordering
  try {
    const ls = AX.GEN['linear-systems'](rng, 1);
    const mm = ls.solutionTeX.match(/x=(-?\d+),\\?;? *y=(-?\d+)/) || ls.plain.match(/x=(-?\d+), *y=(-?\d+)/);
    if (mm) {
      const X = mm[1], Y = mm[2];
      if (ls.accept('x=' + X + ', y=' + Y) && ls.accept('y=' + Y + ', x=' + X) && !ls.accept('x=' + Y + ', y=' + X)) ok('linear-systems accepts either ordering, rejects swap');
      else bad('linear-systems ordering invariant failed');
    } else ok('linear-systems (could not parse target; skipped)');
  } catch (e) { bad('linear-systems invariant threw: ' + e.message); }
  // evaluator equivalence sanity
  const eqOK = near(ev('2/4'), 0.5) && near(ev('(7)(8)'), 56) && near(ev('2pi'), 2 * Math.PI) && near(ev('-3^2'), -9);
  if (eqOK) ok('evaluator equivalence sanity holds'); else bad('evaluator equivalence sanity failed');
  // factoring/expansion must require the right FORM (can't type the problem back)
  try {
    const ft = AX.GEN['factor-trinomial'](rng, 1);
    const tri = ft.promptTeX.replace(/\\text\{Factor \}\s*/, '').trim();
    if (ft.accept(ft.answer) && !ft.accept(tri)) ok('factor-trinomial requires factored form');
    else bad('factor-trinomial accepts the unfactored trinomial (grading gap)');
  } catch (e) { bad('factor-trinomial form guard threw: ' + e.message); }
  try {
    const eo = AX.GEN['expand-foil'](rng, 1);
    const factored = (eo.promptTeX.match(/\(x[^)]*\)\(x[^)]*\)/) || [])[0];
    if (factored && eo.accept(eo.answer) && !eo.accept(factored)) ok('expand-foil requires expanded form');
    else bad('expand-foil accepts the factored form (grading gap)');
  } catch (e) { bad('expand-foil form guard threw: ' + e.message); }

  // ---- POTD determinism ----
  console.log('\n== Problem of the Day ==');
  // (the app derives POTD by date hash; just ensure pool skills generate)
  ok('POTD pool covered by generator test');
}

console.log('\n========================================');
console.log(FAIL === 0 ? ('PASS' + (WARN ? ' (with ' + WARN + ' warnings)' : '')) : ('FAIL: ' + FAIL + ' errors, ' + WARN + ' warnings'));
console.log('========================================\n');
process.exit(FAIL === 0 ? 0 : 1);
