/* Post-assembly smoke test: evaluate the inline <script> blocks of the
   FINAL index.html in order under a DOM shim, and confirm the app boots
   with all content present. Run: node scripts/check-built.js            */
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');

function stubEl(){return{classList:{add(){},remove(){},toggle(){},contains(){return false;}},style:{},dataset:{},children:[],appendChild(){},removeChild(){},remove(){},setAttribute(){},getAttribute(){return null;},addEventListener(){},removeEventListener(){},focus(){},scrollIntoView(){},getBoundingClientRect(){return{left:0,right:0,top:0,bottom:0,width:0,height:0};},querySelector(){return null;},querySelectorAll(){return[];},hasAttribute(){return false;},offsetWidth:0,offsetHeight:0,set innerHTML(v){this._h=v;},get innerHTML(){return this._h||'';},set textContent(v){this._t=v;},get textContent(){return this._t||'';}};}
global.window = global;
global.tailwind = {};
global.document = { addEventListener(){}, removeEventListener(){}, getElementById(){return stubEl();}, querySelector(){return null;}, querySelectorAll(){return[];}, createElement(){return stubEl();}, documentElement:{dataset:{}}, readyState:'complete', body:stubEl(), hidden:false };
global.localStorage = { getItem(){return null;}, setItem(){}, removeItem(){} };
global.navigator = { vibrate(){} };
global.matchMedia = global.window.matchMedia = () => ({ matches:false });
global.window.addEventListener = () => {};
global.scrollTo = () => {};
global.setTimeout = () => 0; global.setInterval = () => 0; global.clearTimeout = () => {}; global.clearInterval = () => {};
global.requestAnimationFrame = () => 0; global.cancelAnimationFrame = () => {};
global.getComputedStyle = () => ({ getPropertyValue: () => '#7C5CFF' });

const html = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
const re = /<script>([\s\S]*?)<\/script>/g;
let m, n = 0, fail = 0;
while ((m = re.exec(html))) {
  const code = m[1];
  n++;
  try { (0, eval)(code); }
  catch (e) { fail++; console.log('  ✗ inline script #' + n + ' failed: ' + e.message); }
}
console.log('evaluated ' + n + ' inline <script> blocks, ' + fail + ' failed');

const AX = window.__AXIOM;
if (!AX) { console.log('  ✗ app did not boot (window.__AXIOM missing)'); process.exit(1); }
const counts = {
  articles: (window.AXIOM_ARTICLES_1||[]).length + (window.AXIOM_ARTICLES_2||[]).length,
  strategies: (window.AXIOM_STRATEGIES||[]).length,
  methods: (window.AXIOM_METHODS_1||[]).length + (window.AXIOM_METHODS_2||[]).length,
  courses: (window.AXIOM_COURSES_1||[]).length + (window.AXIOM_COURSES_2||[]).length,
  glossary: (window.AXIOM_GLOSSARY||[]).length,
  banks: (window.AXIOM_BANKS||[]).length,
  skills: AX.SKILLS.length
};
console.log('  content present:', JSON.stringify(counts));
const okBoot = counts.articles>=10 && counts.courses===15 && counts.skills>=39 && fail===0;
console.log(okBoot ? '\nBUILT FILE OK ✓\n' : '\nBUILT FILE PROBLEM ✗\n');
process.exit(okBoot ? 0 : 1);
