window.AXIOM_METHODS_2 = [
  {
    id: 'foil-distributing',
    name: 'Distributing & FOIL',
    category: 'Algebra',
    difficulty: 'beg',
    trains: 'multiplying out two binomials',
    idea: 'Multiplication distributes over addition, so every term in the first bracket must meet every term in the second.',
    steps: [
      'FOIL is just bookkeeping for the distributive law: every term in the left bracket multiplies every term in the right. The letters stand for **F**irst, **O**uter, **I**nner, **L**ast — the four pairings.',
      'Worked example: expand $(x+3)(x+5)$. **First**: $x\\cdot x = x^2$.',
      '**Outer**: $x\\cdot 5 = 5x$. **Inner**: $3\\cdot x = 3x$.',
      '**Last**: $3\\cdot 5 = 15$.',
      'Add the four pieces and combine like terms: $x^2 + 5x + 3x + 15 = x^2 + 8x + 15$.',
      'Sanity check by picking a number: at $x=1$, the left side is $(4)(6)=24$ and the right side is $1+8+15=24$. They match, so the expansion is right.'
    ],
    mistakes: [
      'Forgetting the two middle terms — writing $(x+3)(x+5)=x^2+15$. You must add the Outer and Inner products too.',
      'Sign slips with negatives: $(x-3)(x+5)$ has Inner $-3\\cdot x=-3x$ and Last $-3\\cdot 5=-15$, giving $x^2+2x-15$. Track the sign as part of each term.',
      'Thinking FOIL is a separate rule. It only works for binomial-times-binomial; for bigger products, just distribute every term carefully.'
    ],
    source: { label: 'Khan Academy — Multiplying binomials', url: 'https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:quadratics-multiplying-factoring' }
  },
  {
    id: 'factoring-gcf',
    name: 'Factoring out the GCF',
    category: 'Algebra',
    difficulty: 'beg',
    trains: 'pulling a common factor out of an expression',
    idea: 'Distribution run in reverse: if every term shares a factor, you can lift it outside a bracket.',
    steps: [
      'Find the greatest common factor of all terms — the biggest number and the highest power of each variable that divides every term.',
      'Worked example: factor $6x^3 + 9x^2$. The number GCF of $6$ and $9$ is $3$; the variable GCF of $x^3$ and $x^2$ is $x^2$. So the GCF is $3x^2$.',
      'Divide each term by the GCF: $6x^3 \\div 3x^2 = 2x$ and $9x^2 \\div 3x^2 = 3$.',
      'Write the GCF outside, the quotients inside: $6x^3 + 9x^2 = 3x^2(2x + 3)$.',
      'Check by distributing back: $3x^2\\cdot 2x = 6x^3$ and $3x^2\\cdot 3 = 9x^2$. You recover the original, so it is correct.'
    ],
    mistakes: [
      'Pulling out only part of the GCF, e.g. writing $3(2x^3+3x^2)$ and stopping — there is still an $x^2$ to factor out. Take the *greatest* common factor.',
      'Dropping a term to $0$ instead of $1$: factoring $5x+5$ as $5(x)$ loses the constant. $5x+5=5(x+1)$, because $5\\div 5 = 1$, not nothing.',
      'Forgetting to factor the negative when the leading term is negative — for $-4x-8$ it is often cleanest to pull out $-4$ to get $-4(x+2)$.'
    ],
    source: { label: 'Paul’s Online Math Notes — Factoring polynomials', url: 'https://tutorial.math.lamar.edu/classes/alg/factoring.aspx' }
  },
  {
    id: 'factoring-trinomials',
    name: 'Factoring trinomials',
    category: 'Algebra',
    difficulty: 'int',
    trains: 'reversing FOIL on $x^2+bx+c$',
    idea: 'Because $(x+m)(x+n)=x^2+(m+n)x+mn$, factoring is a search for two numbers that multiply to $c$ and add to $b$.',
    steps: [
      'Set the target: for $x^2+bx+c$ you need two numbers $m$ and $n$ with $m\\cdot n = c$ and $m+n=b$.',
      'Worked example: factor $x^2 + 7x + 12$. So $c=12$, $b=7$. List factor pairs of $12$: $1\\times 12$, $2\\times 6$, $3\\times 4$.',
      'Pick the pair that adds to $7$: $3+4=7$. So $m=3$, $n=4$.',
      'Write the factors: $x^2 + 7x + 12 = (x+3)(x+4)$.',
      'Verify by FOIL: $(x+3)(x+4)=x^2+4x+3x+12=x^2+7x+12$. Matches the original.'
    ],
    mistakes: [
      'Ignoring signs. If $c$ is positive but $b$ is negative, both numbers are negative (e.g. $x^2-7x+12=(x-3)(x-4)$). If $c$ is negative, the two numbers have opposite signs.',
      'Confusing the roles of sum and product — make sure your pair *multiplies* to $c$ AND *adds* to $b$; only the pair satisfying both works.',
      'Assuming everything factors over the integers. If no integer pair fits, the trinomial may need the quadratic formula instead.'
    ],
    source: { label: 'Art of Problem Solving — Factoring quadratics', url: 'https://artofproblemsolving.com/wiki/index.php/Factoring' }
  },
  {
    id: 'difference-of-squares',
    name: 'Difference of squares',
    category: 'Algebra',
    difficulty: 'beg',
    trains: 'factoring $a^2-b^2$ on sight',
    idea: 'In $(a-b)(a+b)$ the cross terms $-ab$ and $+ab$ cancel, leaving only $a^2-b^2$ — so the pattern runs both ways.',
    steps: [
      'Recognize the pattern: two perfect squares separated by a minus sign, $a^2 - b^2$. (A *plus* sign does not factor this way over the reals.)',
      'Identify $a$ and $b$ as the square roots of each piece, then write $a^2 - b^2 = (a-b)(a+b)$.',
      'Worked example: factor $x^2 - 25$. Here $a^2=x^2$ so $a=x$, and $b^2=25$ so $b=5$.',
      'Apply the pattern: $x^2 - 25 = (x-5)(x+5)$.',
      'Check by FOIL: $(x-5)(x+5)=x^2+5x-5x-25=x^2-25$. The middle terms cancel exactly as promised.'
    ],
    mistakes: [
      'Trying to factor a *sum* of squares: $x^2+25$ does not factor over the real numbers. Only the difference does.',
      'Missing a hidden GCF first: $2x^2-50 = 2(x^2-25) = 2(x-5)(x+5)$. Pull common factors out before pattern-matching.',
      'Forgetting coefficients are squares too: $9x^2-16=(3x-4)(3x+4)$, since $9x^2=(3x)^2$ and $16=4^2$.'
    ],
    source: { label: 'Khan Academy — Difference of squares', url: 'https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:quadratics-multiplying-factoring/x2f8bb11595b61c86:factor-difference-of-squares/a/factoring-difference-of-squares' }
  },
  {
    id: 'completing-the-square',
    name: 'Completing the square',
    category: 'Algebra',
    difficulty: 'int',
    trains: 'rewriting $x^2+bx+c$ as a perfect square plus a constant',
    idea: 'A perfect square $(x+k)^2$ expands to $x^2+2kx+k^2$, so the constant you need is always $(b/2)^2$ — half the middle coefficient, squared.',
    steps: [
      'Take the coefficient of $x$, halve it, and square it. That number, $(b/2)^2$, is the missing piece of a perfect square.',
      'Worked example: rewrite $x^2 + 6x + 5$. Half of $6$ is $3$, and $3^2 = 9$. So $9$ completes the square.',
      'Add and subtract that number so you change nothing: $x^2+6x+5 = (x^2+6x+9) - 9 + 5$.',
      'The bracket is now a perfect square: $x^2+6x+9 = (x+3)^2$. So the expression becomes $(x+3)^2 - 9 + 5 = (x+3)^2 - 4$.',
      'Verify by expanding back: $(x+3)^2 - 4 = x^2+6x+9-4 = x^2+6x+5$. It matches the original.'
    ],
    mistakes: [
      'Forgetting to subtract what you added. You must keep the expression equal — add $(b/2)^2$ and immediately subtract it.',
      'Using $b$ instead of $b/2$ inside the bracket: the square is $(x+b/2)^2$, not $(x+b)^2$. Halve first.',
      'Mishandling a leading coefficient. If the $x^2$ term is not $1$ (e.g. $2x^2+\\dots$), factor the $2$ out of the $x$ terms before completing the square.'
    ],
    source: { label: 'Paul’s Online Math Notes — Quadratic equations (completing the square)', url: 'https://tutorial.math.lamar.edu/classes/alg/solvequadraticii.aspx' }
  },
  {
    id: 'quadratic-formula',
    name: 'The quadratic formula',
    category: 'Algebra',
    difficulty: 'adv',
    trains: 'solving any quadratic equation, and seeing where the formula comes from',
    idea: 'The formula is not a magic spell — it is completing the square done once, in general, so you never have to redo the work.',
    steps: [
      'Start from the general quadratic $ax^2+bx+c=0$ with $a\\ne 0$. Divide every term by $a$: $x^2 + \\frac{b}{a}x + \\frac{c}{a} = 0$, then move the constant: $x^2 + \\frac{b}{a}x = -\\frac{c}{a}$.',
      'Complete the square: half of $\\frac{b}{a}$ is $\\frac{b}{2a}$, squared is $\\frac{b^2}{4a^2}$. Add it to both sides: $x^2 + \\frac{b}{a}x + \\frac{b^2}{4a^2} = -\\frac{c}{a} + \\frac{b^2}{4a^2}$.',
      'The left side is now a perfect square; combine the right over $4a^2$: $\\left(x+\\frac{b}{2a}\\right)^2 = \\frac{b^2-4ac}{4a^2}$.',
      'Take the square root of both sides (keeping $\\pm$): $x+\\frac{b}{2a} = \\pm\\frac{\\sqrt{b^2-4ac}}{2a}$.',
      'Isolate $x$ and combine the fractions to get the formula: $x = \\dfrac{-b \\pm \\sqrt{b^2-4ac}}{2a}$.',
      'Worked example: solve $x^2 - 5x + 6 = 0$ ($a=1,b=-5,c=6$). The discriminant is $(-5)^2 - 4(1)(6) = 25-24 = 1$, so $x = \\frac{5 \\pm 1}{2}$, giving $x=3$ or $x=2$. Check: $3^2-5(3)+6 = 9-15+6 = 0$. ✓'
    ],
    mistakes: [
      'Sign errors on $-b$: with $b=-5$ the formula uses $-(-5)=+5$. Substitute $b$ with its sign carefully.',
      'Dividing only the radical by $2a$ but forgetting that $-b$ is over $2a$ too. The whole numerator $-b\\pm\\sqrt{\\dots}$ sits over $2a$.',
      'Forgetting the $\\pm$, which throws away one of the two solutions a quadratic generally has.',
      'A negative discriminant ($b^2-4ac<0$) means no real solutions — don’t force a real square root of a negative number.'
    ],
    source: { label: 'Wikipedia — Quadratic formula (derivation)', url: 'https://en.wikipedia.org/wiki/Quadratic_formula' },
    video: { title: 'Quadratic Formula Song (Pop Goes the Weasel)', channel: 'Khan Academy', duration: '2:01', url: 'https://www.youtube.com/watch?v=O8ezDEk3qCg' }
  },
  {
    id: 'solving-linear-systems',
    name: 'Solving linear systems',
    category: 'Algebra',
    difficulty: 'int',
    trains: 'finding the point where two lines meet',
    idea: 'Two equations in two unknowns pin down the single point both lines share — substitution and elimination are two routes to that crossing.',
    steps: [
      'Set up the system. Worked example: $\\begin{cases} x + y = 7 \\\\ 2x - y = 2 \\end{cases}$. We will solve it both ways.',
      '**Substitution**: from the first equation $y = 7 - x$. Put that into the second: $2x - (7 - x) = 2$, which is $3x - 7 = 2$, so $3x = 9$ and $x = 3$.',
      'Back-substitute: $y = 7 - 3 = 4$. Solution $(x,y) = (3,4)$.',
      '**Elimination**: add the two equations to cancel $y$: $(x+y)+(2x-y) = 7+2$ gives $3x = 9$, so $x = 3$, then $y = 4$ as before — same answer, confirming the method.',
      'Check in BOTH original equations: $3+4 = 7$ ✓ and $2(3)-4 = 6-4 = 2$ ✓.'
    ],
    mistakes: [
      'In elimination, forgetting to multiply an *entire* equation when scaling it to line up coefficients — every term must be scaled.',
      'Distributing the minus sign wrong in substitution: $-(7-x) = -7+x$, not $-7-x$.',
      'Checking only one equation. A correct solution must satisfy both — verify in each.',
      'Panicking at $0=0$ (infinitely many solutions, same line) or $0=5$ (no solution, parallel lines). These outcomes are meaningful, not errors.'
    ],
    source: { label: 'Khan Academy — Systems of equations', url: 'https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:systems-of-equations' }
  },
  {
    id: 'isolating-a-variable',
    name: 'Isolating a variable',
    category: 'Algebra',
    difficulty: 'beg',
    trains: 'solving for an unknown with inverse operations',
    idea: 'An equation is a balanced scale; undo what was done to the variable, last-operation-first, doing the same thing to both sides.',
    steps: [
      'Identify the operations wrapped around the variable and plan to undo them in reverse order (like taking off shoes then socks).',
      'Worked example: solve $3x + 4 = 19$. The variable was multiplied by $3$, then $4$ was added. Undo the addition first.',
      'Subtract $4$ from both sides: $3x + 4 - 4 = 19 - 4$, giving $3x = 15$.',
      'Now undo the multiplication — divide both sides by $3$: $\\frac{3x}{3} = \\frac{15}{3}$, so $x = 5$.',
      'Check by substituting back: $3(5) + 4 = 15 + 4 = 19$ ✓. The solution is verified.'
    ],
    mistakes: [
      'Operating on only one side. Whatever you do to one side you must do to the other, or the balance breaks.',
      'Undoing in the wrong order — dividing before subtracting here would force you to divide the $4$ too. Reverse the order of operations.',
      'Sign errors when moving terms: moving $+4$ across the equals sign makes it $-4$. Subtract carefully rather than just flipping symbols.'
    ],
    source: { label: 'Khan Academy — Solving equations', url: 'https://www.khanacademy.org/math/algebra/x2f8bb11595b61c86:solve-equations-inequalities' }
  },
  {
    id: 'pythagoras',
    name: 'The Pythagorean theorem',
    category: 'Geometry & Trig',
    difficulty: 'beg',
    trains: 'finding a side of a right triangle',
    idea: 'In a right triangle the square built on the longest side equals the two smaller squares combined — area is conserved.',
    steps: [
      'The theorem applies only to right triangles: $a^2 + b^2 = c^2$, where $c$ is the hypotenuse (the side opposite the right angle) and $a,b$ are the two legs.',
      'Worked example: a right triangle has legs $a = 3$ and $b = 4$. Find the hypotenuse $c$.',
      'Square the legs: $3^2 = 9$ and $4^2 = 16$.',
      'Add them: $9 + 16 = 25$. This equals $c^2$.',
      'Take the square root: $c = \\sqrt{25} = 5$. So the hypotenuse is $5$ — the classic 3-4-5 right triangle.',
      'Verify: $3^2 + 4^2 = 9 + 16 = 25 = 5^2$ ✓.'
    ],
    mistakes: [
      'Putting a leg where the hypotenuse goes. $c$ is always the longest side, opposite the right angle — never one of the legs.',
      'Adding before squaring: $(3+4)^2 = 49 \\ne 25$. You must square *each* side first, then add.',
      'Using it on a non-right triangle. Without a right angle the relationship does not hold; use the Law of Cosines instead.'
    ],
    source: { label: 'Wikipedia — Pythagorean theorem', url: 'https://en.wikipedia.org/wiki/Pythagorean_theorem' }
  },
  {
    id: 'area-decomposition',
    name: 'Area by decomposition',
    category: 'Geometry & Trig',
    difficulty: 'beg',
    trains: 'finding the area of irregular shapes',
    idea: 'Any flat shape can be cut into rectangles and triangles whose areas you know, then the pieces add up to the whole.',
    steps: [
      'Slice the shape into simple pieces — rectangles (area $= \\text{base}\\times\\text{height}$) and triangles (area $= \\tfrac{1}{2}\\,\\text{base}\\times\\text{height}$).',
      'Worked example: an L-shape that is a $6\\times 4$ rectangle with a $2\\times 2$ square bite removed from one corner. Two valid strategies follow.',
      '**Subtract**: full rectangle area is $6 \\times 4 = 24$; the missing square is $2 \\times 2 = 4$. So the L-shape is $24 - 4 = 20$.',
      '**Add**: cut the L into a $6 \\times 2$ strip (area $12$) and a $4 \\times 2$ strip (area $8$). Total $12 + 8 = 20$ — same answer, which confirms it.',
      'Sum (or subtract) the piece areas to get the total: $20$ square units.'
    ],
    mistakes: [
      'Mixing up units or forgetting the $\\tfrac{1}{2}$ for triangles — a triangle is half its bounding rectangle.',
      'Double-counting an overlap when adding pieces, or leaving a gap. Make the cuts meet edge-to-edge with no overlap.',
      'Using a slanted side as the height of a triangle. Height must be the perpendicular distance to the base, not the slanted edge.'
    ],
    source: { label: 'NCTM — Measurement and area reasoning', url: 'https://www.nctm.org/' }
  },
  {
    id: 'soh-cah-toa',
    name: 'SOH-CAH-TOA',
    category: 'Geometry & Trig',
    difficulty: 'int',
    trains: 'relating angles and sides in a right triangle',
    idea: 'In a right triangle the ratios of sides depend only on the angle, and the three names just label which two sides each ratio uses.',
    steps: [
      'Memorize the labels: relative to an angle $\\theta$, the **opposite** side faces it, the **adjacent** side touches it, and the **hypotenuse** is the longest side opposite the right angle.',
      'The three ratios: $\\sin\\theta = \\frac{\\text{opp}}{\\text{hyp}}$ (**SOH**), $\\cos\\theta = \\frac{\\text{adj}}{\\text{hyp}}$ (**CAH**), $\\tan\\theta = \\frac{\\text{opp}}{\\text{adj}}$ (**TOA**).',
      'Worked example: a right triangle has opposite $= 3$, adjacent $= 4$, hypotenuse $= 5$ (a 3-4-5 triangle). Find $\\sin\\theta$, $\\cos\\theta$, $\\tan\\theta$ for the angle $\\theta$ opposite the side of length $3$.',
      'Plug into the ratios: $\\sin\\theta = \\frac{3}{5} = 0.6$, $\\cos\\theta = \\frac{4}{5} = 0.8$, $\\tan\\theta = \\frac{3}{4} = 0.75$.',
      'Check with the identity $\\sin^2\\theta+\\cos^2\\theta=1$: $0.6^2 + 0.8^2 = 0.36 + 0.64 = 1$ ✓.'
    ],
    mistakes: [
      'Swapping opposite and adjacent — they switch depending on *which* angle you choose, so re-label for each angle.',
      'Using SOH-CAH-TOA on a non-right triangle. These ratios are defined for right triangles; otherwise use the Law of Sines or Cosines.',
      'Calculator in the wrong mode (degrees vs radians). Decide which the problem uses and set the calculator to match.'
    ],
    source: { label: 'Khan Academy — Trigonometric ratios in right triangles', url: 'https://www.khanacademy.org/math/trigonometry/trigonometry-right-triangles' }
  },
  {
    id: 'unit-circle',
    name: 'The unit circle',
    category: 'Geometry & Trig',
    difficulty: 'int',
    trains: 'reading sine and cosine as coordinates',
    idea: 'On a circle of radius $1$, the point at angle $\\theta$ has coordinates $(\\cos\\theta,\\ \\sin\\theta)$ — so cosine is the across, sine is the up.',
    steps: [
      'Draw the circle of radius $1$ centred at the origin. For an angle $\\theta$ measured counterclockwise from the positive $x$-axis, the point on the circle is $(\\cos\\theta,\\ \\sin\\theta)$.',
      'So cosine is always the $x$-coordinate and sine is always the $y$-coordinate. The whole table follows from this one fact.',
      'Key angles — read coordinates straight off: at $0^\\circ$ the point is $(1,0)$ so $\\cos 0=1,\\ \\sin 0=0$; at $90^\\circ$ it is $(0,1)$ so $\\cos 90^\\circ=0,\\ \\sin 90^\\circ=1$.',
      'The in-between angles: $\\sin 30^\\circ = \\tfrac{1}{2}$, $\\sin 45^\\circ = \\tfrac{\\sqrt 2}{2}$, $\\sin 60^\\circ = \\tfrac{\\sqrt 3}{2}$, and the cosines are the mirror image: $\\cos 30^\\circ = \\tfrac{\\sqrt 3}{2}$, $\\cos 45^\\circ = \\tfrac{\\sqrt 2}{2}$, $\\cos 60^\\circ = \\tfrac{1}{2}$.',
      'Worked check at $45^\\circ$: the point is $\\left(\\tfrac{\\sqrt 2}{2},\\ \\tfrac{\\sqrt 2}{2}\\right)$, and $\\left(\\tfrac{\\sqrt 2}{2}\\right)^2 + \\left(\\tfrac{\\sqrt 2}{2}\\right)^2 = \\tfrac{1}{2}+\\tfrac{1}{2} = 1$, so it really sits on the unit circle. ✓'
    ],
    mistakes: [
      'Swapping which coordinate is which — remember alphabetical order matches axis order: cosine $\\to x$, sine $\\to y$.',
      'Memorizing the table blind. Anchor it: $\\sin$ runs $0,\\tfrac12,\\tfrac{\\sqrt2}{2},\\tfrac{\\sqrt3}{2},1$ across $0^\\circ,30^\\circ,45^\\circ,60^\\circ,90^\\circ$, and $\\cos$ runs the same list backwards.',
      'Mixing degrees and radians: $90^\\circ = \\tfrac{\\pi}{2}$. Keep one unit system within a problem.'
    ],
    source: { label: 'Khan Academy — The unit circle definition of sine and cosine', url: 'https://www.khanacademy.org/math/trigonometry/unit-circle-trig-func' }
  },
  {
    id: 'power-rule',
    name: 'The power rule',
    category: 'Calculus',
    difficulty: 'int',
    trains: 'differentiating powers of $x$',
    idea: 'For $x^n$ the slope grows in proportion to how steeply the power stacks — bring the exponent down as a multiplier and drop the power by one.',
    steps: [
      'The rule: $\\frac{d}{dx}\\,x^n = n\\,x^{n-1}$. Multiply by the old exponent, then subtract $1$ from it.',
      'Worked example: differentiate $f(x) = x^3$. Here $n = 3$.',
      'Bring the $3$ down as a coefficient and reduce the exponent by one: $\\frac{d}{dx}\\,x^3 = 3x^{3-1} = 3x^2$.',
      'Constants multiply through, and derivatives add term by term. For $g(x) = 5x^2$: $\\frac{d}{dx}\\,5x^2 = 5\\cdot 2x = 10x$. A constant alone has slope $0$.',
      'Sanity check $\\frac{d}{dx}x^3 = 3x^2$ against the limit definition idea: $(x+h)^3 = x^3 + 3x^2h + 3xh^2 + h^3$, so the average rate $\\frac{(x+h)^3 - x^3}{h} = 3x^2 + 3xh + h^2 \\to 3x^2$ as $h\\to 0$. ✓'
    ],
    mistakes: [
      'Forgetting to multiply by the exponent — writing $\\frac{d}{dx}x^3 = x^2$ instead of $3x^2$.',
      'Mishandling negative or fractional powers. The rule still holds: $\\frac{d}{dx}x^{-1} = -1\\cdot x^{-2}$, and $\\frac{d}{dx}\\sqrt{x} = \\frac{d}{dx}x^{1/2} = \\tfrac12 x^{-1/2}$.',
      'Differentiating a constant to something nonzero — the derivative of any constant is $0$, since a flat line has no slope.'
    ],
    source: { label: 'Paul’s Online Math Notes — Differentiation formulas', url: 'https://tutorial.math.lamar.edu/classes/calci/diffformulas.aspx' },
    video: { title: 'Essence of calculus, chapter 3: Derivative formulas through geometry', channel: '3Blue1Brown', duration: '18:43', url: 'https://www.youtube.com/watch?v=S0_qX4VJhMQ' }
  },
  {
    id: 'chain-rule',
    name: 'The chain rule',
    category: 'Calculus',
    difficulty: 'adv',
    trains: 'differentiating a function inside a function',
    idea: 'When functions are nested, their rates of change multiply — if the outer changes 2x as fast as the inner, and the inner 3x as fast as $x$, the whole changes 6x as fast.',
    steps: [
      'Intuition: for a composition, $\\frac{d}{dx}f(g(x)) = f’(g(x))\\cdot g’(x)$ — the outer derivative (with the inside left alone) times the inner derivative. Rates multiply.',
      'Worked example: differentiate $(3x+1)^2$. The outer function is $(\\ )^2$; the inner is $g(x) = 3x+1$.',
      'Differentiate the outer, keeping the inside untouched: $\\frac{d}{du}u^2 = 2u$, so this gives $2(3x+1)$.',
      'Multiply by the inner derivative: $g’(x) = \\frac{d}{dx}(3x+1) = 3$. So the answer is $2(3x+1)\\cdot 3 = 6(3x+1) = 18x + 6$.',
      'Check by expanding first: $(3x+1)^2 = 9x^2 + 6x + 1$, and the power rule gives $\\frac{d}{dx}(9x^2+6x+1) = 18x + 6$ — exactly the same. ✓'
    ],
    mistakes: [
      'Forgetting the inner derivative — writing $\\frac{d}{dx}(3x+1)^2 = 2(3x+1)$ and stopping. You must still multiply by $3$.',
      'Differentiating the inside too early. Leave $g(x)$ untouched while you differentiate the outer shell, then multiply by $g’(x)$.',
      'Misidentifying inner vs outer in a deeper nest like $\\sin(x^2)$. The outer is $\\sin(\\ )$, the inner is $x^2$, giving $\\cos(x^2)\\cdot 2x$.'
    ],
    source: { label: 'Paul’s Online Math Notes — Chain rule', url: 'https://tutorial.math.lamar.edu/classes/calci/chainrule.aspx' },
    video: { title: 'Essence of calculus, chapter 4: Visualizing the chain rule and product rule', channel: '3Blue1Brown', duration: '12:31', url: 'https://www.youtube.com/watch?v=YG15m2VwSjA' }
  },
  {
    id: 'u-substitution',
    name: 'U-substitution',
    category: 'Calculus',
    difficulty: 'adv',
    trains: 'integrating by reversing the chain rule',
    idea: 'Integration by substitution is the chain rule run backwards: spot an inner function whose derivative is also sitting in the integrand, and rename it $u$.',
    steps: [
      'Scan the integrand for an inner function $u$ whose derivative $\\frac{du}{dx}$ also appears (up to a constant). Worked example: $\\displaystyle\\int 2x\\,(x^2+1)^3\\,dx$.',
      'Choose $u = x^2 + 1$. Then $\\frac{du}{dx} = 2x$, so $du = 2x\\,dx$ — and that $2x\\,dx$ is exactly the rest of the integrand.',
      'Rewrite the integral entirely in $u$: $\\displaystyle\\int (x^2+1)^3\\,(2x\\,dx) = \\int u^3\\,du$.',
      'Integrate in $u$ with the power rule for integrals: $\\displaystyle\\int u^3\\,du = \\frac{u^4}{4} + C$.',
      'Substitute back $u = x^2+1$: the answer is $\\dfrac{(x^2+1)^4}{4} + C$.',
      'Check by differentiating with the chain rule: $\\frac{d}{dx}\\frac{(x^2+1)^4}{4} = \\frac{4(x^2+1)^3}{4}\\cdot 2x = 2x(x^2+1)^3$ — the original integrand. ✓'
    ],
    mistakes: [
      'Forgetting to convert $dx$ into $du$. You cannot leave a stray $dx$ or $x$ — the whole integral must be in terms of $u$ before you integrate.',
      'Picking a $u$ whose derivative is not present. Choose the inside function whose derivative (times a constant) is already a factor.',
      'Leaving the answer in $u$. Always substitute back to $x$ for an indefinite integral (or change the limits for a definite one).',
      'Dropping the $+C$ on an indefinite integral.'
    ],
    source: { label: 'Paul’s Online Math Notes — Substitution rule for indefinite integrals', url: 'https://tutorial.math.lamar.edu/classes/calci/substitutionruleindefinite.aspx' }
  }
];
