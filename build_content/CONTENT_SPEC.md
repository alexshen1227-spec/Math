# AXIOM — CONTENT SPEC (read this fully before writing anything)

You are writing CONTENT DATA for **Axiom**, a single-file offline math-learning PWA.
Name: **Axiom**. Byline: **By Alex Shen**. Glyph: **∴**. Accent: electric violet.

Your output is a single `.js` file that assigns a global, e.g. `window.AXIOM_METHODS = [...]`.
It must be valid vanilla JS (ES2018), no imports, no trailing-comma-before-bracket errors,
no template-literal backticks that contain unescaped `${`, no `require`. Pure data literals
plus (only for skill banks) plain objects. Use double quotes for strings; if a string contains
a double quote, escape it `\"` or use single quotes for that string. Prefer `'` for strings
that contain `$...$` math so backslashes are literal.

## THE PHILOSOPHY SPINE (thread this through EVERYTHING you write)
> "Understand it once, and you never have to memorize it. Then practice until it's automatic."
Math is a small set of ideas you can rebuild from scratch, not a pile of rules. Intuition first,
then derive the rule, then drill it with spaced practice until reflex. Mistakes are how you learn;
productive struggle IS the work. Anchor claims in real sources: Pólya *How to Solve It*; Jo Boaler
*Mathematical Mindsets*; Carol Dweck (growth mindset); *Make It Stick* (Brown/Roediger/McDaniel) for
retrieval/spacing/interleaving; K. Anders Ericsson (deliberate practice); Kalid Azad / BetterExplained
(intuition-first); Feynman ("explain it simply"); Stanislas Dehaene *The Number Sense*; NCTM; AoPS;
Khan Academy; Wikipedia.

## VOICE
Confident, opinionated, warm tough-love teacher. Never dumbed-down, never condescending.
Mistakes-are-good framing. Terse encouraging imperatives as texture: "Don't memorize this — rebuild it."
"Getting it wrong is the work, not the failure." "If you can explain it to a kid, you understand it."
"Slow is smooth, smooth is fast." Use these sparingly and vary them; don't repeat the same line everywhere.

## MATH CORRECTNESS IS SACRED
Every number, every worked example, every definition must be exactly correct. Recompute every
arithmetic step before you write it. A single wrong answer destroys the app's credibility. When you
state a worked example, verify the final answer by independent recomputation.

## KaTeX / MATH NOTATION
- Inline math inside prose: wrap in single `$...$`. e.g. `'The slope is $m=2$ here.'`
- Display math block: a block of type `math` with a `tex` field (no surrounding `$`).
- Use LaTeX: `\frac{a}{b}`, `\sqrt{x}`, `x^2`, `\times`, `\div`, `\cdot`, `\pi`, `\theta`,
  `\Rightarrow`, `\Leftrightarrow`, `\le`, `\ge`, `\ne`, `\approx`, `\int`, `\lim_{x\to 0}`,
  `\frac{dy}{dx}`, `\sin`, `\cos`, `\tan`. Because these sit in JS single-quoted strings the
  single backslash is preserved (good). Do NOT double the backslashes.
- Keep `$...$` balanced. Never leave a stray `$`.

## MARKDOWN-LITE IN PROSE TEXT
Inside `text` and list `items`, you may use `**bold**` for emphasis (renders as <strong>). Do not use
other markdown. Do not use raw HTML. Inline `$math$` is allowed and encouraged.

## "WHERE EXPERTS DISAGREE" — REQUIRED
Nearly every Foundations article and Strategy MUST contain a section presenting a real, live debate
honestly (both camps, no strawman). Implement it as an `h2` block titled "Where experts disagree"
followed by `p`/`ul` blocks. Real debates to draw on: memorization vs understanding; calculators in
class; timed tests & math anxiety (Boaler's critique); discovery/inquiry vs direct instruction;
Common Core / "new math"; order-of-operations ambiguity; rote times-tables vs number sense.

================================================================================
## SHARED BLOCK SCHEMA (used by Foundations articles AND Strategies)
A `blocks` array of typed blocks. Allowed blocks:
  { type:'p',  text:'paragraph; supports **bold** and $math$' }
  { type:'h2', text:'Section heading' }
  { type:'ul', items:['item $math$', 'item'] }
  { type:'ol', items:['step one', 'step two'] }
  { type:'callout', label:'INTUITION', text:'...' }              // accent callout (label = short UPPERCASE)
  { type:'callout', variant:'warn', label:'WATCH OUT', text:'...' } // red warn callout
  { type:'theorem', label:'THEOREM', text:'...' }                // math theorem callout
  { type:'definition', label:'DEFINITION', text:'...' }          // definition callout
  { type:'pull', text:'A memorable one-liner pull-quote.' }
  { type:'math', tex:'a^2+b^2=c^2' }                             // DISPLAY math (no $)
  { type:'video', title:'...', channel:'3Blue1Brown', duration:'17:04', url:'https://www.youtube.com/watch?v=...' }

Article/Strategy object:
  { id:'kebab-id', title:'Human Title', dek:'one-sentence subtitle/teaser',
    readMins: 7, blocks:[ ... ], sources:[ {label:'Pólya, How to Solve It', url:'https://...'} ] }

Use 8–16 blocks per Foundations article (long-form, intuition-first). Strategies 6–12 blocks.
Always start with a hook `p`, build intuition, then the rule, then a "Where experts disagree" h2,
then a `pull` near the end. Include 2–4 real `sources`. Include at least one `video` where a
genuinely famous relevant video exists (3Blue1Brown, Khan Academy, Numberphile, Veritasium, BetterExplained).
Use REAL working YouTube URLs you are confident exist (e.g. 3Blue1Brown "Essence of calculus"
https://www.youtube.com/watch?v=WUvTyaaNkzM ; "Essence of linear algebra" ; Khan Academy). If unsure a
specific video exists, omit the video block rather than inventing a fake URL.

================================================================================
## METHOD SCHEMA (window.AXIOM_METHODS)
  { id:'kebab-id', name:'Cross-multiplication', category:'Fractions & Percents',
    difficulty:'beg'|'int'|'adv',
    trains:'short phrase, e.g. comparing & solving fraction equations',
    idea:'one-sentence intuition for WHY it works',
    steps:[ 'Ordered step with a fully-worked, CORRECT example. Use $math$.', ... ],  // 3–7 steps
    mistakes:[ 'A common mistake and how to avoid it.', ... ],                         // 2–4 items
    source:{label:'Arthur Benjamin, Secrets of Mental Math', url:'https://...'},
    video:{title:'...', channel:'...', duration:'mm:ss', url:'https://...'}  // OPTIONAL, only if real
  }
The `steps` MUST contain one concrete fully-worked example whose arithmetic you have verified.
Categories (use EXACTLY these strings):
  'Arithmetic & Mental Math', 'Fractions & Percents', 'Algebra', 'Geometry & Trig', 'Calculus'

================================================================================
## GLOSSARY SCHEMA (window.AXIOM_GLOSSARY)
  { term:'numerator', group:'Fractions & Ratio', def:'one-or-two sentence plain definition',
    where:'where you meet it, e.g. "Top of a fraction; counts how many parts you have."',
    aliases:['...'],            // OPTIONAL extra strings that should also link to this term
    source:{label:'...', url:'...'}  // OPTIONAL
  }
Groups (use EXACTLY these strings): 'Arithmetic', 'Fractions & Ratio', 'Algebra',
'Geometry & Trig', 'Calculus', 'Logic & Proof', 'Estimation & Cognition'.
Definitions must be correct and beginner-readable. ~40 terms total.

================================================================================
## COURSE SCHEMA (window.AXIOM_COURSES)
  { id:'kebab-id', category:'Foundations'|'Algebra'|'Geometry & Trig'|'Calculus'|'Mental Math'|'Reasoning',
    level:'Beginner'|'Intermediate'|'Advanced', tags:['Arithmetic','Number sense', ...],
    title:'Numbers 101', subtitle:'short subtitle', blurb:'2-3 sentence what-you-will-learn',
    prereqs:['course-id', ...],   // [] if none
    days:[
      { n:1, title:'Day title', gist:'1-2 sentence what this day is about',
        article:'article-id'|null,      // a Foundations article id (see registry) or null
        methods:['method-id', ...],     // method ids (may be []) 
        practice:'skill-id'|null,       // a SKILL id from the registry (or null)
        focus:"Today's focus: a single sentence telling them the ONE thing to nail today.",
        action:'one short imperative line, e.g. "Read, then do 8 warm-up problems."' }
    ] }
6–10 days per course. Day 1 of a beginner course should be GENTLE & conceptual (read + settle, light
or no drilling). Each day should blend read → method → practice → reflect. Reference ONLY ids that
exist in the REGISTRY below. If a day has no good article/method/skill, use null / [].

================================================================================
## SKILL BANK SCHEMA (window.AXIOM_BANKS) — conceptual/multiple-choice skills only
  { id:'skill-id', name:'Identify the contrapositive', topic:'Logic & Proof', level:'Intermediate',
    items:[
      { promptTeX:'Question text. Math in $...$ is fine here too.',
        choices:['A','B','C','D'],     // 2–5 options, plain text (may contain $math$)
        answerIndex:2,                 // 0-based index of the correct choice
        solutionTeX:'Worked explanation of WHY, with $math$. 1–3 sentences.',
        hints:['progressive hint 1','hint 2'] }   // 1–3 hints
    ] }
8–14 items per bank. Every item must have exactly one unambiguously correct choice. Verify each.

================================================================================
# ID REGISTRY (the single source of truth — reference these exact ids)

## ARTICLE IDS (Foundations, 10)
what-is-a-number, negative-numbers, what-is-a-fraction, order-of-operations,
what-is-a-variable, what-is-a-function, what-is-a-derivative, why-proof-matters,
estimation-skill, how-to-study-math

## STRATEGY IDS (7)
polya-four-steps, when-stuck, reading-math-textbook, studying-for-test,
test-day-execution, beating-math-anxiety, sanity-checking

## METHOD IDS (28)
left-to-right-addition, subtract-by-adding, doubling-halving, multiply-by-11,
square-ending-5, multiply-near-base, casting-out-nines, divisibility-rules, long-division,
common-denominators, cross-multiplication, of-means-times, percent-conversions, percent-change,
foil-distributing, factoring-gcf, factoring-trinomials, difference-of-squares,
completing-the-square, quadratic-formula, solving-linear-systems, isolating-a-variable,
pythagoras, area-decomposition, soh-cah-toa, unit-circle, power-rule, chain-rule, u-substitution

## COURSE IDS (15)
numbers-101, fractions-decimals-percents, pre-algebra-bridge,
algebra-1-linear, quadratics-factoring, functions-graphs,
geometry-essentials, intro-trig, what-calculus-is, intro-integration,
mental-math-toolkit, estimation-fermi,
logic-proof-basics, probability-without-tears, problem-solving-polya

## SKILL IDS (the practice registry — use these exact ids for course `practice` fields)
# Generators (procedural — implemented in engine, you just reference the id):
add-multi, subtract-multi, times-tables, multiply-2digit, mult-by-11, square-5,
order-of-operations, negatives, simplify-fraction, add-fractions, multiply-fractions,
fdp-convert, percent-of, percent-change, solve-linear, two-step-equation, evaluate-expr,
expand-foil, factor-trinomial, diff-of-squares, solve-quadratic, linear-systems,
slope-two-points, pythagoras-find, area-basic, power-rule, simple-limit, basic-integral, rounding-estimate
# Banks (conceptual — YOU author these in AXIOM_BANKS):
unit-circle-bank, soh-cah-toa-bank, contrapositive-bank, logic-statements-bank,
probability-bank, polya-puzzles-bank, divisibility-bank, function-reading-bank,
order-ops-concept-bank, fraction-concept-bank

Each course `practice` field must reference one of the SKILL IDS above (generator or bank), or null.

================================================================================
# QUALITY BAR
- Correctness > everything. Recompute. 
- Cite real sources on every article/method/strategy and on glossary where natural.
- Intuition before rule. Derive, don't just state.
- "Where experts disagree" in articles & strategies.
- Warm tough-love voice; mistakes-are-good.
- Output ONLY the JS file content (the `window.AXIOM_X = [...]` assignment). No prose, no markdown fences.
