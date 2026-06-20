window.AXIOM_COURSES_2 = [
  {
    id: 'algebra-1-linear',
    category: 'Algebra',
    level: 'Intermediate',
    tags: ['Algebra', 'Linear equations', 'Graphs', 'Slope'],
    title: 'Algebra 1: Lines & Equations',
    subtitle: 'Variables, balancing, and the geometry of straight lines',
    blurb: 'Learn what a variable really is, then master the one move that solves almost every linear equation: do the same thing to both sides. Finish able to solve, graph, and read straight lines fluently.',
    prereqs: ['pre-algebra-bridge'],
    days: [
      {
        n: 1,
        title: 'What a variable actually is',
        gist: 'A letter is not a mystery box — it is a placeholder for a number you have not pinned down yet. Settle this idea before touching a single equation.',
        article: 'what-is-a-variable',
        methods: [],
        practice: null,
        focus: "Today's focus: understand that a variable is a stand-in for an unknown quantity, not a code to crack.",
        action: 'Read the article slowly. Write one sentence in your own words: "A variable is..."'
      },
      {
        n: 2,
        title: 'The one move: balance both sides',
        gist: 'Every linear equation is a balance scale. Whatever you do to one side, you do to the other — that is the whole game.',
        article: null,
        methods: ['isolating-a-variable'],
        practice: 'two-step-equation',
        focus: "Today's focus: isolate the variable by undoing operations in reverse order, keeping the scale balanced.",
        action: 'Study the method, then grind 8 two-step equations. Narrate each move out loud.'
      },
      {
        n: 3,
        title: 'Solve linear equations until they are reflex',
        gist: 'You understood the balance idea yesterday. Now drill it until solving for $x$ feels automatic.',
        article: null,
        methods: ['isolating-a-variable'],
        practice: 'solve-linear',
        focus: "Today's focus: solve one-variable linear equations quickly and without panic, even with fractions or negatives.",
        action: 'Do 12 problems. Slow is smooth, smooth is fast — accuracy first, speed follows.'
      },
      {
        n: 4,
        title: 'Plugging in: evaluate expressions',
        gist: 'Before you can graph a line, you need to be ruthless about substitution: replace the letter with the number and simplify.',
        article: null,
        methods: [],
        practice: 'evaluate-expr',
        focus: "Today's focus: evaluate an expression by substituting a value and following order of operations exactly.",
        action: 'Do 10 evaluations. Watch the negatives — that is where everyone slips.'
      },
      {
        n: 5,
        title: 'Functions: the input-output machine',
        gist: 'A line is just a function: feed it an $x$, it hands back a $y$. Meet the idea that powers all of algebra and calculus.',
        article: 'what-is-a-function',
        methods: [],
        practice: 'evaluate-expr',
        focus: "Today's focus: see a function as a reliable machine — same input, same output, every time.",
        action: 'Read, then evaluate 6 expressions thinking of each as "the machine eating x".'
      },
      {
        n: 6,
        title: 'Slope: how steep, which way',
        gist: 'Slope is rise over run — the single number that captures a line’s steepness and direction. Build it from two points.',
        article: null,
        methods: [],
        practice: 'slope-two-points',
        focus: "Today's focus: compute slope as $\\frac{\\text{change in }y}{\\text{change in }x}$ and feel what positive, negative, and zero mean.",
        action: 'Find slope from 10 point-pairs. Sketch two of them so the number means something.'
      },
      {
        n: 7,
        title: 'Two equations, two unknowns',
        gist: 'When one equation is not enough, you stack two and find where the lines cross. Learn substitution and elimination.',
        article: null,
        methods: ['solving-linear-systems'],
        practice: 'linear-systems',
        focus: "Today's focus: solve a linear system and understand that the solution is the point both lines share.",
        action: 'Read the method, then solve 6 systems. Check each by plugging the point into both equations.'
      },
      {
        n: 8,
        title: 'Mixed review: prove it stuck',
        gist: 'Interleaving beats blocked practice. Today everything from the course shows up out of order — the real test of fluency.',
        article: null,
        methods: ['isolating-a-variable', 'solving-linear-systems'],
        practice: 'solve-linear',
        focus: "Today's focus: handle any linear problem without knowing in advance which type it is.",
        action: 'Do a mixed set of 12. Getting some wrong is the work, not the failure — fix and retry.'
      }
    ]
  },
  {
    id: 'quadratics-factoring',
    category: 'Algebra',
    level: 'Intermediate',
    tags: ['Algebra', 'Quadratics', 'Factoring', 'Roots'],
    title: 'Quadratics & Factoring',
    subtitle: 'From FOIL to the quadratic formula, derived not memorized',
    blurb: 'Quadratics are products of two linear factors in disguise. Learn to multiply them out, factor them back, and when factoring fails, complete the square — which is exactly where the quadratic formula comes from.',
    prereqs: ['algebra-1-linear'],
    days: [
      {
        n: 1,
        title: 'Multiplying binomials (FOIL)',
        gist: 'Before you can factor, you have to see how two binomials become a trinomial. FOIL is just the distributive law applied twice.',
        article: null,
        methods: ['foil-distributing'],
        practice: 'expand-foil',
        focus: "Today's focus: expand $(x+a)(x+b)$ confidently and notice the pattern in the middle term.",
        action: 'Read the method, then expand 8 products. Say "first, outer, inner, last" until it is reflex.'
      },
      {
        n: 2,
        title: 'Pull out what is shared (GCF)',
        gist: 'The first factoring move is always the easiest one: take out the greatest common factor. Never skip this step.',
        article: null,
        methods: ['factoring-gcf'],
        practice: null,
        focus: "Today's focus: spot and extract the greatest common factor before trying anything fancier.",
        action: 'Work the examples, then factor the GCF from 6 expressions by hand.'
      },
      {
        n: 3,
        title: 'Factoring trinomials: reverse the FOIL',
        gist: 'Factoring $x^2+bx+c$ is FOIL run backward: find two numbers that multiply to $c$ and add to $b$.',
        article: null,
        methods: ['factoring-trinomials'],
        practice: 'factor-trinomial',
        focus: "Today's focus: factor a trinomial by finding the two numbers that multiply to the constant and add to the middle.",
        action: 'Read, then factor 10 trinomials. Check each by FOILing it back out.'
      },
      {
        n: 4,
        title: 'The difference of squares',
        gist: '$a^2-b^2$ always factors into $(a+b)(a-b)$. Learn to recognize it instantly — it is the most common shortcut on tests.',
        article: null,
        methods: ['difference-of-squares'],
        practice: 'diff-of-squares',
        focus: "Today's focus: recognize a difference of two squares on sight and factor it in one step.",
        action: 'Factor 8 difference-of-squares problems. Spot the pattern before you write anything.'
      },
      {
        n: 5,
        title: 'Completing the square',
        gist: 'When a quadratic will not factor nicely, you can force it into a perfect square. This is the deep move that unlocks the formula.',
        article: null,
        methods: ['completing-the-square'],
        practice: null,
        focus: "Today's focus: rewrite $x^2+bx$ as $(x+\\frac{b}{2})^2$ minus a correction, and see why it works geometrically.",
        action: 'Work through 4 examples slowly by hand. Do not rush — this one rewards patience.'
      },
      {
        n: 6,
        title: 'Solve quadratics by factoring',
        gist: 'A product is zero only when a factor is zero. That single fact turns factoring into a root-finding machine.',
        article: null,
        methods: ['factoring-trinomials', 'difference-of-squares'],
        practice: 'solve-quadratic',
        focus: "Today's focus: use the zero-product property to turn a factored quadratic into its two solutions.",
        action: 'Solve 10 quadratics by factoring. State both roots and sanity-check one by substitution.'
      },
      {
        n: 7,
        title: 'The quadratic formula (where it comes from)',
        gist: 'The formula is just completing the square done once, in general. Knowing the derivation means you never have to fear forgetting it.',
        article: null,
        methods: ['quadratic-formula', 'completing-the-square'],
        practice: 'solve-quadratic',
        focus: "Today's focus: apply $x=\\frac{-b\\pm\\sqrt{b^2-4ac}}{2a}$ and read the discriminant to predict the number of roots.",
        action: 'Solve 8 quadratics with the formula, including some that do not factor. Compute the discriminant first.'
      },
      {
        n: 8,
        title: 'Mixed quadratics review',
        gist: 'Real problems do not tell you which method to use. Today you choose: GCF, factor, difference of squares, or formula.',
        article: null,
        methods: ['quadratic-formula', 'factoring-trinomials'],
        practice: 'solve-quadratic',
        focus: "Today's focus: pick the fastest correct method for each quadratic without being told which one.",
        action: 'Do a mixed set of 12. For each, decide the method in one breath, then solve.'
      }
    ]
  },
  {
    id: 'functions-graphs',
    category: 'Algebra',
    level: 'Intermediate',
    tags: ['Algebra', 'Functions', 'Graphs', 'Slope'],
    title: 'Functions & Graphs',
    subtitle: 'Reading meaning off a picture',
    blurb: 'A graph is a function made visible. Learn to read inputs, outputs, slope, and behavior straight off the curve, and to translate fluently between the equation, the table, and the picture.',
    prereqs: ['algebra-1-linear'],
    days: [
      {
        n: 1,
        title: 'What a function is',
        gist: 'A function is a rule that gives exactly one output for each input. Lock in this idea before you graph anything.',
        article: 'what-is-a-function',
        methods: [],
        practice: null,
        focus: "Today's focus: internalize the one-input-one-output rule and why it matters.",
        action: 'Read the article. Then name three functions from everyday life (e.g. price as a function of weight).'
      },
      {
        n: 2,
        title: 'Evaluating functions',
        gist: 'Reading a function means feeding it inputs. Get fast at computing $f(x)$ for a given $x$.',
        article: null,
        methods: [],
        practice: 'evaluate-expr',
        focus: "Today's focus: evaluate $f(x)$ cleanly, respecting order of operations and signs.",
        action: 'Evaluate 10 expressions. Treat each as "what does the machine return for this input?"'
      },
      {
        n: 3,
        title: 'The four representations',
        gist: 'Every function shows up four ways: words, equation, table, graph. Fluency is moving between them without friction.',
        article: 'what-is-a-function',
        methods: [],
        practice: 'function-reading-bank',
        focus: "Today's focus: translate the same function between an equation, a table, and a graph.",
        action: 'Reread the article, then work the function-reading bank. Explain one item to an imaginary student.'
      },
      {
        n: 4,
        title: 'Slope as rate of change',
        gist: 'Slope is not just steepness — it is how fast the output changes per unit of input. That reframing matters for calculus later.',
        article: null,
        methods: [],
        practice: 'slope-two-points',
        focus: "Today's focus: compute slope from two points and read it as a rate (output per input).",
        action: 'Find slope for 10 point-pairs. For two of them, state the rate in words.'
      },
      {
        n: 5,
        title: 'Reading graphs: intercepts & behavior',
        gist: 'Where does the curve cross the axes? Where does it rise, fall, flatten? Reading a graph is a skill you can drill.',
        article: null,
        methods: [],
        practice: 'function-reading-bank',
        focus: "Today's focus: identify intercepts, increasing and decreasing regions, and maximums straight off a graph.",
        action: 'Work the function-reading bank again, this time focusing on graph-reading items.'
      },
      {
        n: 6,
        title: 'From graph to equation',
        gist: 'Go the hard direction: see a line and write its equation. Slope plus a point is all you need.',
        article: null,
        methods: [],
        practice: 'slope-two-points',
        focus: "Today's focus: build the equation $y=mx+b$ from a picture by reading slope and intercept.",
        action: 'For 6 graphs, read off the slope and intercept and write the equation. Verify with one point.'
      },
      {
        n: 7,
        title: 'Mixed review: read, translate, build',
        gist: 'Bring it together: evaluate, read graphs, and move between representations under one mixed set.',
        article: null,
        methods: [],
        practice: 'function-reading-bank',
        focus: "Today's focus: handle any function question regardless of which representation it starts in.",
        action: 'Do a mixed set from the bank plus 4 evaluations. Reflect on which representation you trust most.'
      }
    ]
  },
  {
    id: 'geometry-essentials',
    category: 'Geometry & Trig',
    level: 'Beginner',
    tags: ['Geometry', 'Angles', 'Area', 'Proof'],
    title: 'Geometry Essentials',
    subtitle: 'Angles, area, the Pythagorean theorem, and why proof matters',
    blurb: 'Geometry is where math becomes visible. Start with angles and area you can see, build to the Pythagorean theorem you can derive, and finish understanding why mathematicians insist on proof.',
    prereqs: [],
    days: [
      {
        n: 1,
        title: 'Why proof matters',
        gist: 'Geometry is the oldest place math demands proof. Before measuring anything, understand why "it looks true" is never enough.',
        article: 'why-proof-matters',
        methods: [],
        practice: null,
        focus: "Today's focus: grasp the difference between noticing a pattern and proving it always holds.",
        action: 'Read the article. Write down one thing that "looks obviously true" but might not always be.'
      },
      {
        n: 2,
        title: 'Angles: the vocabulary of shape',
        gist: 'Right, acute, obtuse, straight, supplementary, complementary. Get comfortable with the words and the pictures behind them.',
        article: null,
        methods: [],
        practice: null,
        focus: "Today's focus: name angle types and use the fact that angles on a line sum to $180^\\circ$.",
        action: 'Sketch each angle type yourself. No drilling today — just see and name them.'
      },
      {
        n: 3,
        title: 'Area you can decompose',
        gist: 'Any area problem becomes easy when you chop the shape into rectangles and triangles you already know.',
        article: null,
        methods: ['area-decomposition'],
        practice: 'area-basic',
        focus: "Today's focus: find areas of rectangles and triangles, and break compound shapes into those pieces.",
        action: 'Read the method, then find 8 areas. For one compound shape, draw your decomposition.'
      },
      {
        n: 4,
        title: 'Drilling area',
        gist: 'You understand decomposition. Now make the basic area formulas automatic so they free up your attention for the hard part.',
        article: null,
        methods: ['area-decomposition'],
        practice: 'area-basic',
        focus: "Today's focus: apply area formulas quickly without re-deriving them each time.",
        action: 'Do 10 area problems. Keep the formula for a triangle ($\\frac{1}{2}bh$) on the tip of your tongue.'
      },
      {
        n: 5,
        title: 'The Pythagorean theorem',
        gist: 'In a right triangle, $a^2+b^2=c^2$. This is not a rule to memorize — it is a statement about areas you can see in a picture.',
        article: null,
        methods: ['pythagoras'],
        practice: null,
        focus: "Today's focus: understand $a^2+b^2=c^2$ as a relationship between the squares on the three sides.",
        action: 'Study the method and its proof-by-picture. Do not drill yet — make sure you believe it first.'
      },
      {
        n: 6,
        title: 'Finding the missing side',
        gist: 'Now use Pythagoras as a tool: given two sides of a right triangle, find the third.',
        article: null,
        methods: ['pythagoras'],
        practice: 'pythagoras-find',
        focus: "Today's focus: solve for the missing side, being careful which side is the hypotenuse.",
        action: 'Do 10 problems. Label the hypotenuse first every single time — that is the classic trap.'
      },
      {
        n: 7,
        title: 'A first real proof',
        gist: 'Tie it together: revisit why proof matters now that you have a theorem worth proving, and see one clean argument end to end.',
        article: 'why-proof-matters',
        methods: ['pythagoras'],
        practice: null,
        focus: "Today's focus: follow a complete geometric argument and see how each step is justified.",
        action: 'Reread the proof section. Then explain the Pythagorean picture proof to someone in two minutes.'
      },
      {
        n: 8,
        title: 'Mixed geometry review',
        gist: 'Angles, area, and Pythagoras together. Real geometry problems mix them, so your practice should too.',
        article: null,
        methods: ['area-decomposition', 'pythagoras'],
        practice: 'pythagoras-find',
        focus: "Today's focus: solve mixed problems that combine area and the Pythagorean theorem.",
        action: 'Do a mixed set of area and Pythagoras problems. Draw a picture for every one.'
      }
    ]
  },
  {
    id: 'intro-trig',
    category: 'Geometry & Trig',
    level: 'Intermediate',
    tags: ['Trigonometry', 'Triangles', 'Unit circle', 'SOH-CAH-TOA'],
    title: 'Intro to Trigonometry',
    subtitle: 'Triangles, ratios, and the circle that ties them together',
    blurb: 'Trig is the study of how angles and side lengths relate. Start with SOH-CAH-TOA in right triangles, then climb onto the unit circle, where sine and cosine become coordinates and everything connects.',
    prereqs: ['geometry-essentials'],
    days: [
      {
        n: 1,
        title: 'What trig even is',
        gist: 'Trigonometry answers one question: given an angle, what are the side ratios of the triangle it lives in? Settle the big picture first.',
        article: null,
        methods: ['soh-cah-toa'],
        practice: null,
        focus: "Today's focus: understand sine, cosine, and tangent as ratios of triangle sides, not magic buttons.",
        action: 'Read the method. Draw a right triangle and label opposite, adjacent, and hypotenuse for one angle.'
      },
      {
        n: 2,
        title: 'SOH-CAH-TOA',
        gist: 'Sine = opposite/hypotenuse, cosine = adjacent/hypotenuse, tangent = opposite/adjacent. The mnemonic encodes three definitions.',
        article: null,
        methods: ['soh-cah-toa'],
        practice: 'soh-cah-toa-bank',
        focus: "Today's focus: pick the correct ratio for what you are given and what you want to find.",
        action: 'Study the method, then work the SOH-CAH-TOA bank. Label the triangle before choosing a ratio.'
      },
      {
        n: 3,
        title: 'Solving right triangles',
        gist: 'With one angle and one side, you can find every other part of a right triangle. Drill that until it is fluent.',
        article: null,
        methods: ['soh-cah-toa', 'pythagoras'],
        practice: 'soh-cah-toa-bank',
        focus: "Today's focus: combine SOH-CAH-TOA with Pythagoras to fully solve a right triangle.",
        action: 'Work the bank again, this time finishing each triangle completely. Use Pythagoras to check.'
      },
      {
        n: 4,
        title: 'Onto the unit circle',
        gist: 'Put a right triangle inside a circle of radius 1 and something beautiful happens: cosine and sine become the $x$ and $y$ of a point.',
        article: null,
        methods: ['unit-circle'],
        practice: null,
        focus: "Today's focus: see a point on the unit circle as $(\\cos\\theta, \\sin\\theta)$.",
        action: 'Read the method slowly. Draw the unit circle and mark where $\\theta=0$ and $\\theta=90^\\circ$ land.'
      },
      {
        n: 5,
        title: 'Key angles on the circle',
        gist: 'The angles $0, 30, 45, 60, 90$ degrees show up everywhere. Learn to rebuild their values, not just recall them.',
        article: null,
        methods: ['unit-circle'],
        practice: 'unit-circle-bank',
        focus: "Today's focus: produce sine and cosine of the common angles from the circle, not from rote memory.",
        action: 'Work the unit-circle bank. For each, picture where the point sits before answering.'
      },
      {
        n: 6,
        title: 'Why sine and cosine repeat',
        gist: 'Walk around the circle and you come back to where you started — that is why trig functions are periodic. The picture explains the wave.',
        article: null,
        methods: ['unit-circle'],
        practice: 'unit-circle-bank',
        focus: "Today's focus: connect going around the circle to the repeating up-and-down of the sine wave.",
        action: 'Work more unit-circle items. Sketch the sine curve from the circle for one full turn.'
      },
      {
        n: 7,
        title: 'Mixed trig review',
        gist: 'Right-triangle trig and the unit circle are one subject seen two ways. Today they show up together.',
        article: null,
        methods: ['soh-cah-toa', 'unit-circle'],
        practice: 'soh-cah-toa-bank',
        focus: "Today's focus: move between the triangle view and the circle view without losing the thread.",
        action: 'Do a mixed set from both banks. Reflect: when is the triangle easier, when is the circle?'
      }
    ]
  },
  {
    id: 'what-calculus-is',
    category: 'Calculus',
    level: 'Advanced',
    tags: ['Calculus', 'Limits', 'Derivatives', 'Rate of change'],
    title: 'What Calculus Is',
    subtitle: 'Limits and the derivative as a rate of change',
    blurb: 'Calculus is the mathematics of change. Build the idea of a limit from intuition, meet the derivative as an instantaneous rate of change, and learn the power and chain rules so the machinery does not scare you.',
    prereqs: ['functions-graphs'],
    days: [
      {
        n: 1,
        title: 'The big idea: zooming in',
        gist: 'Calculus is what you get when you ask what happens as you zoom in forever. Today is conceptual — no drilling, just the idea.',
        article: 'what-is-a-function',
        methods: [],
        practice: null,
        focus: "Today's focus: understand that calculus studies change by looking at smaller and smaller intervals.",
        action: 'Reread what a function is through a calculus lens. Picture zooming into a curve until it looks straight.'
      },
      {
        n: 2,
        title: 'Limits, intuitively',
        gist: 'A limit is the value a function heads toward, even if it never quite arrives. This is the foundation everything else stands on.',
        article: null,
        methods: [],
        practice: 'simple-limit',
        focus: "Today's focus: read a limit as 'where the output is going' as the input approaches a value.",
        action: 'Work 8 simple limits. For each, ask "what is it heading toward?" before computing.'
      },
      {
        n: 3,
        title: 'The derivative as rate of change',
        gist: 'The derivative is the slope of a curve at a single point — the instantaneous rate of change. This is the heart of calculus.',
        article: 'what-is-a-derivative',
        methods: [],
        practice: null,
        focus: "Today's focus: see the derivative as the limit of slope as the two points slide together.",
        action: 'Read the article carefully. Connect it to slope-of-a-line from your functions course.'
      },
      {
        n: 4,
        title: 'The power rule',
        gist: 'For powers of $x$, the derivative has a clean pattern: bring the exponent down, drop it by one. Learn why, then use it.',
        article: 'what-is-a-derivative',
        methods: ['power-rule'],
        practice: 'power-rule',
        focus: "Today's focus: differentiate $x^n$ to get $nx^{n-1}$ and understand where the pattern comes from.",
        action: 'Read the method, then differentiate 10 power functions. Check the easy ones against the slope idea.'
      },
      {
        n: 5,
        title: 'Drilling the power rule',
        gist: 'You understand the pattern. Now make it automatic across polynomials, including negative and fractional powers.',
        article: null,
        methods: ['power-rule'],
        practice: 'power-rule',
        focus: "Today's focus: differentiate any polynomial term by term without hesitation.",
        action: 'Do 12 derivatives, mixing in negative and fractional exponents. Speed comes after accuracy.'
      },
      {
        n: 6,
        title: 'The chain rule',
        gist: 'When one function sits inside another, you differentiate the outside, then multiply by the derivative of the inside. Functions of functions.',
        article: null,
        methods: ['chain-rule', 'power-rule'],
        practice: 'power-rule',
        focus: "Today's focus: peel a composite function outside-in and multiply by the inner derivative.",
        action: 'Read the method, then practice power-rule derivatives while watching for inner functions to chain.'
      },
      {
        n: 7,
        title: 'Limits revisited',
        gist: 'Now that you have seen derivatives, return to limits with fresh eyes — the derivative was a limit all along.',
        article: 'what-is-a-derivative',
        methods: [],
        practice: 'simple-limit',
        focus: "Today's focus: recognize the derivative definition as a particular kind of limit.",
        action: 'Do 8 more limits. For one, write the slope-between-two-points limit that defines a derivative.'
      },
      {
        n: 8,
        title: 'Mixed calculus review',
        gist: 'Limits, the meaning of the derivative, and the power and chain rules together. The whole conceptual core in one set.',
        article: null,
        methods: ['power-rule', 'chain-rule'],
        practice: 'power-rule',
        focus: "Today's focus: differentiate confidently and explain in words what the derivative means.",
        action: 'Do a mixed set of limits and derivatives. End by explaining "derivative" to a kid in one sentence.'
      }
    ]
  },
  {
    id: 'intro-integration',
    category: 'Calculus',
    level: 'Advanced',
    tags: ['Calculus', 'Integration', 'Antiderivatives', 'Area'],
    title: 'Intro to Integration',
    subtitle: 'Undoing the derivative and adding up the infinitely small',
    blurb: 'Integration is the derivative run backward, and also the way to add up infinitely many tiny pieces to get area. Learn the reverse power rule, master u-substitution, and see why the two ideas are the same.',
    prereqs: ['what-calculus-is'],
    days: [
      {
        n: 1,
        title: 'Integration as the reverse',
        gist: 'An integral is the question "what function has this derivative?" Today is conceptual: meet the antiderivative, no heavy drilling.',
        article: null,
        methods: [],
        practice: null,
        focus: "Today's focus: understand integration as undoing differentiation — finding the function behind the rate.",
        action: 'Think back to the power rule. Ask "what would I differentiate to get $x^2$?" and chase that idea.'
      },
      {
        n: 2,
        title: 'Integration as accumulated area',
        gist: 'The other face of the integral: add up infinitely many thin strips under a curve to get the area. Two ideas, one operation.',
        article: null,
        methods: [],
        practice: null,
        focus: "Today's focus: see the integral as the total accumulated from many infinitely small pieces.",
        action: 'Picture slicing the area under a curve into thin rectangles. No drilling — just build the image.'
      },
      {
        n: 3,
        title: 'The reverse power rule',
        gist: 'To integrate $x^n$, raise the exponent by one and divide by the new exponent. It is the power rule played in reverse.',
        article: null,
        methods: ['power-rule'],
        practice: 'basic-integral',
        focus: "Today's focus: integrate $x^n$ to $\\frac{x^{n+1}}{n+1}$ and never forget the $+C$.",
        action: 'Review the power rule, then integrate 10 basic terms. Differentiate one back to check it.'
      },
      {
        n: 4,
        title: 'Drilling basic integrals',
        gist: 'You understand the reverse pattern. Now make integrating polynomials term by term automatic.',
        article: null,
        methods: ['power-rule'],
        practice: 'basic-integral',
        focus: "Today's focus: integrate any polynomial term by term, including constants, without slipping.",
        action: 'Do 12 integrals. Always write $+C$ — forgetting it is the universal beginner mistake.'
      },
      {
        n: 5,
        title: 'u-substitution',
        gist: 'When the integrand hides a chain rule, u-substitution unwinds it. It is the chain rule run backward.',
        article: null,
        methods: ['u-substitution'],
        practice: 'basic-integral',
        focus: "Today's focus: choose a $u$ whose derivative also appears, substitute, and integrate the simpler form.",
        action: 'Read the method, then practice integrals while hunting for an inner function to call $u$.'
      },
      {
        n: 6,
        title: 'Choosing u well',
        gist: 'The whole skill of u-substitution is picking the right $u$. Build judgment by trying, failing, and adjusting.',
        article: null,
        methods: ['u-substitution'],
        practice: 'basic-integral',
        focus: "Today's focus: develop intuition for which part of an integrand to substitute.",
        action: 'Work more integrals. When a choice of $u$ stalls, that is information — pick differently and retry.'
      },
      {
        n: 7,
        title: 'Mixed integration review',
        gist: 'Reverse power rule and u-substitution together. Real integrals do not announce which technique they want.',
        article: null,
        methods: ['power-rule', 'u-substitution'],
        practice: 'basic-integral',
        focus: "Today's focus: decide whether an integral needs a plain reverse power rule or a substitution.",
        action: 'Do a mixed set of 12. For each, decide the approach before you write, then verify by differentiating.'
      }
    ]
  }
];
