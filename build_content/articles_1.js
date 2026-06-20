window.AXIOM_ARTICLES_1 = [
  {
    id: 'what-is-a-number',
    title: 'What a number even is',
    dek: 'Before the number line, before place value, there is one quiet idea: "how many." Everything else is bookkeeping on top of it.',
    readMins: 8,
    blocks: [
      { type: 'p', text: 'Hold up three fingers. Now think of three apples, three knocks on a door, three days. What do all of these share? Not their color, not their sound, not their weight. They share a **threeness** — a property that survives no matter what you are counting. That invisible shared thing is a **number**. A number is the answer to the question "how many," stripped of everything else.' },
      { type: 'callout', label: 'INTUITION', text: 'A number is not a symbol and not a word. It is the thing that "three apples" and "three knocks" have in common. The symbol $3$ is just a name we agreed to give it.' },
      { type: 'p', text: 'Counting like this is older than writing. We have tally bones from tens of thousands of years ago — notches scratched one-per-thing. Tallying is the rawest form of counting: you do not even need names for the numbers, you just match one scratch to one sheep. The cognitive scientist Stanislas Dehaene argues in **The Number Sense** that humans (and even some animals and infants) are born with an approximate feel for quantity — a built-in "number organ" — long before anyone teaches them the word "seven."' },
      { type: 'h2', text: 'From tally marks to the number line' },
      { type: 'p', text: 'Tally marks answer "how many," but they are clumsy. The leap is to lay the numbers out in **order**, each one step past the last: $1, 2, 3, 4, \\dots$ Stretch that into a line and you get the **number line** — arguably the single most useful picture in all of mathematics. On the number line, a number stops being only "how many" and becomes "how far." $5$ is the point five steps to the right of $0$. Suddenly addition is just walking: $3 + 4$ means start at $3$, take $4$ steps right, land on $7$. Subtraction is walking left. This one picture will later absorb negatives, fractions, decimals, and even the irrationals like $\\pi$ — every kind of number gets a home as a point on this line. Counting answers "how many"; the line upgrades that to "how far," and "how far" is what lets numbers do geometry, measurement, and motion.' },
      { type: 'h2', text: 'Place value: the idea that runs the world' },
      { type: 'p', text: 'Here is the genuinely brilliant trick. We have only ten symbols — $0,1,2,3,4,5,6,7,8,9$ — yet we can write any number, no matter how huge. How? A symbol\'s **position** tells you what it is worth. In $327$ the $3$ does not mean three; it means three **hundreds**.' },
      { type: 'math', tex: '327 = 3\\times 100 + 2\\times 10 + 7\\times 1' },
      { type: 'p', text: 'Each step left multiplies the value by ten: ones, tens, hundreds, thousands. That is **base-10**, or the decimal system. The hero of the story is $0$ — it is a placeholder that lets you write $307$ and mean "three hundreds, no tens, seven ones." Without a zero you cannot tell $37$ from $307$. Cultures that lacked a true zero (like the Romans, with their $\\text{CCCVII}$) could not compute nearly as fluently; the Hindu-Arabic system that gave us positional zero is one of the most consequential inventions in human history.' },
      { type: 'p', text: 'There is nothing sacred about ten — we use base-10 almost certainly because we have ten fingers. Computers use **base-2** (binary), where the only symbols are $0$ and $1$ and each step left doubles the value. The Babylonians used base-60, which is why an hour has $60$ minutes and a circle has $360$ degrees. In general, a **place-value system** in base $b$ uses $b$ symbols, with each position worth $b$ times the one to its right. Same idea, different number of fingers.' },
      { type: 'h2', text: 'Where experts disagree' },
      { type: 'p', text: 'A live, decades-old fight in math education: should children first **memorize** number facts (rote times-tables, flashcards, timed drills) or first build **number sense** (understanding that $7\\times 8$ is $7\\times 8$, decomposable as $7\\times 4$ doubled)?' },
      { type: 'ul', items: [
        'The **number-sense** camp (e.g. Jo Boaler, **Mathematical Mindsets**) argues that drilling facts under time pressure breeds math anxiety and a brittle, rule-following relationship with numbers. Dehaene\'s work on the innate "number sense" is often cited here: build on the intuition first.',
        'The **fluency** camp counters that you cannot reason flexibly about numbers you have to laboriously reconstruct every time. If recalling $6\\times 7$ eats up your working memory, you have nothing left for the actual problem. Cognitive-load research backs the value of automaticity.'
      ] },
      { type: 'p', text: 'The honest synthesis — and the spine of this app — is that it is not either/or. Understand **why** $7\\times 8 = 56$ once, so you can rebuild it if you forget; then practice until recall is instant, so it never costs you anything. Intuition first, then automaticity.' },
      { type: 'pull', text: 'A number is the threeness that "three apples" and "three knocks" share. Everything else — symbols, the line, place value — is bookkeeping we invented to handle it.' },
      { type: 'p', text: 'So when you see $327$, do not see a squiggle to memorize. See three hundreds, two tens, and seven ones — a compact, position-powered answer to "how many."' }
    ],
    sources: [
      { label: 'Stanislas Dehaene, The Number Sense', url: 'https://www.unicog.org/main/pages.php?page=NumberSense' },
      { label: 'Jo Boaler, Mathematical Mindsets', url: 'https://www.youcubed.org/resource/mathematical-mindsets/' },
      { label: 'Wikipedia: Positional notation', url: 'https://en.wikipedia.org/wiki/Positional_notation' }
    ]
  },

  {
    id: 'negative-numbers',
    title: 'Why minus-times-minus is plus',
    dek: 'You were told "two negatives make a positive" and asked to take it on faith. You should not. Here is why it is forced on us — three ways.',
    readMins: 9,
    blocks: [
      { type: 'p', text: 'Almost everyone is handed the rule "a negative times a negative is a positive" as a commandment. Memorize it, move on. But a rule you cannot explain is a rule you will eventually misremember. The good news: $(-)\\times(-) = (+)$ is not arbitrary. Once you accept that arithmetic should stay **consistent**, this result is forced — you have no choice. Let us see it three ways, but first nail down what a negative even is.' },
      { type: 'p', text: 'Extend the number line to the left of $0$. Positives are steps to the right; negatives are steps to the left. So $-3$ is "three steps left of zero," and the **negative sign means "flip direction."** Negatives let us answer questions like $3 - 5$ that the counting numbers could not. The cleanest mental model is **debt**: $+5$ is five dollars you own, $-5$ is five dollars you owe.' },
      { type: 'callout', label: 'INTUITION', text: 'Multiplying by $-1$ is a $180^\\circ$ flip on the number line: it reflects a point to the other side of zero. Flip twice and you are back where you started — that is the whole secret.' },
      { type: 'h2', text: 'Way 1: The flip / number-line picture' },
      { type: 'p', text: 'Multiplying by a positive number scales an arrow. Multiplying by $-1$ does something more dramatic: it **reverses the arrow\'s direction**. $-1 \\times 5 = -5$: the arrow pointing right at $5$ now points left to $-5$. Now multiply by $-1$ again — you flip the direction a second time, and two flips cancel: $(-1)\\times(-1)\\times 5 = (-1)\\times(-5) = 5$. Turn around, then turn around again, and you face the original way. That is why $(-1)\\times(-1) = +1$. Every "negative times negative" is this double flip in disguise.' },
      { type: 'h2', text: 'Way 2: The distributive law forces it' },
      { type: 'p', text: 'This is the airtight argument — the one a mathematician trusts. We insist on keeping the **distributive law**, $a(b+c) = ab + ac$, because it is what makes algebra hang together. Start from something we definitely agree on, $(-3)\\times 0 = 0$, then rewrite that harmless $0$ as $4 + (-4)$ and distribute the $-3$:' },
      { type: 'math', tex: '0 = (-3)\\big(4 + (-4)\\big) = (-3)(4) + (-3)(-4) = -12 + (-3)(-4)' },
      { type: 'p', text: 'We agree $(-3)(4) = -12$ (a negative times a positive is negative). So the line reads $0 = -12 + (-3)(-4)$. For that to be true, $(-3)(-4)$ must be the number that cancels $-12$ — it must equal $+12$. There is no wiggle room. **If** we want the distributive law to hold, **then** negative times negative is positive. It is a consequence, not a choice — and breaking it would collapse all of algebra.' },
      { type: 'h2', text: 'Way 3: The debt story model' },
      { type: 'p', text: 'Read $-3$ as "remove a debt of $3$" and multiplication as repetition. Then $(-3)\\times(-4)$ means "remove four debts of three dollars each." Removing a $\\$12$ debt makes you $\\$12$ richer — so the result is $+12$. Taking away something bad is good; the story and the algebra agree, as they must. (Do not confuse this with addition: $(-3)+(-4) = -7$, since the two debts pile up.)' },
      { type: 'h2', text: 'Where experts disagree' },
      { type: 'p', text: 'The disagreement here is not about whether $(-)\\times(-)=(+)$ — that is settled. It is about **how to teach it**, and it is a sharp split.' },
      { type: 'ul', items: [
        'The **rule-first** camp: just give students "same signs positive, different signs negative," drill it, and let understanding come later (or never). It is fast and it works on tests.',
        'The **meaning-first** camp (intuition-first educators like Kalid Azad of BetterExplained, and constructivists generally): a rule with no story is forgotten and misapplied. Better to derive it from the distributive law or the flip model so the student owns it.',
        'There is even historical disagreement among **mathematicians**. Negative numbers were distrusted for centuries — called "absurd" and "fictitious" by serious 17th- and 18th-century thinkers, accepted only once the algebra became impossible to argue with. The intuition lagged the logic by a long time.'
      ] },
      { type: 'pull', text: 'Minus-times-minus is plus not because a teacher said so, but because the alternative would break the distributive law — and that price is too high to pay.' },
      { type: 'p', text: 'Pick whichever picture you like — the double flip, the distributive proof, the cancelled debt — and rebuild one of them the next time you doubt the rule.' }
    ],
    sources: [
      { label: 'BetterExplained: Negative numbers (Kalid Azad)', url: 'https://betterexplained.com/articles/understanding-why-negative-numbers/' },
      { label: 'Khan Academy: Multiplying & dividing negative numbers', url: 'https://www.khanacademy.org/math/arithmetic/arith-review-negative-numbers' },
      { label: 'Wikipedia: Negative number (history)', url: 'https://en.wikipedia.org/wiki/Negative_number' }
    ]
  },

  {
    id: 'what-is-a-fraction',
    title: 'What a fraction really is',
    dek: 'A fraction is not two numbers stacked. It is a single number — a recipe for cutting and gathering. And "invert and multiply" is not magic; we will derive it.',
    readMins: 9,
    blocks: [
      { type: 'p', text: 'People treat $\\frac{3}{4}$ as if it were two separate numbers glued together with a line. It is not. $\\frac{3}{4}$ is **one number**, a single point on the number line sitting between $0$ and $1$. The two parts are instructions: the bottom says how to cut, the top says how much to take.' },
      { type: 'definition', label: 'DEFINITION', text: 'In $\\frac{a}{b}$, the **denominator** $b$ tells you how many equal pieces to cut the whole into, and the **numerator** $a$ tells you how many of those pieces to grab. So $\\frac{3}{4}$ means: cut into $4$ equal parts, take $3$. Cut, then count.' },
      { type: 'p', text: 'A fraction is also a **division**: $\\frac{3}{4}$ literally **is** $3 \\div 4$. Share $3$ pizzas equally among $4$ people and each person gets $\\frac{3}{4}$ of a pizza. This is why every fraction is a number — it is the answer to a division. And it is why $\\frac{a}{b}$ can also mean "$a$ out of $b$," a ratio. Same symbol, three views: cut-and-take, division, ratio, all the same number.' },
      { type: 'h2', text: 'Why $\\frac{2}{4}$ and $\\frac{1}{2}$ are the same number' },
      { type: 'p', text: 'Cut a pie into $4$ and take $2$, or cut it into $2$ and take $1$ — your plate holds the same amount. Multiplying top and bottom by the same number just re-slices the same quantity into finer pieces; it does not change the amount, because you are really multiplying by $\\frac{2}{2} = 1$, as in $\\frac{1}{2} = \\frac{1}{2}\\times\\frac{2}{2} = \\frac{2}{4}$. That is the whole logic of equivalent fractions, and of reducing them.' },
      { type: 'h2', text: 'Now the real question: why "invert and multiply"?' },
      { type: 'p', text: 'You were told that to divide by a fraction, you flip the second one and multiply: $\\frac{a}{b}\\div\\frac{c}{d} = \\frac{a}{b}\\times\\frac{d}{c}$. Almost nobody is told **why**, so it feels like a trick. First, what does dividing **by** a fraction even mean? Ask the question division always asks: "how many of *this* fit into *that*?" So $\\frac{1}{2}\\div\\frac{1}{4}$ asks "how many quarters fit in a half?" The answer is $2$ — and indeed $\\frac{1}{2}\\times\\frac{4}{1} = \\frac{4}{2} = 2$. The flip already works. But intuition is not proof, so here is the derivation.' },
      { type: 'p', text: 'The key fact: the **reciprocal** $\\frac{d}{c}$ is the number you multiply $\\frac{c}{d}$ by to get $1$, because $\\frac{c}{d}\\times\\frac{d}{c} = \\frac{cd}{dc} = 1$. So write the division as a single tall fraction and multiply top and bottom by that reciprocal (multiplying by $1$ changes nothing). The bottom was engineered to become $1$ and vanish, leaving exactly the top:' },
      { type: 'math', tex: '\\frac{a}{b}\\div\\frac{c}{d} = \\frac{\\;\\dfrac{a}{b}\\;}{\\;\\dfrac{c}{d}\\;} = \\frac{\\dfrac{a}{b}\\times\\dfrac{d}{c}}{\\dfrac{c}{d}\\times\\dfrac{d}{c}} = \\frac{\\dfrac{a}{b}\\times\\dfrac{d}{c}}{1} = \\frac{a}{b}\\times\\frac{d}{c}' },
      { type: 'theorem', label: 'DERIVED, NOT DECREED', text: '"Invert and multiply" is just "multiply top and bottom by the reciprocal to clear the denominator." The flip is the move that turns the bottom into $1$ and makes it disappear — not magic, mechanics.' },
      { type: 'p', text: 'Check it on real numbers: $\\frac{3}{4}\\div\\frac{2}{3} = \\frac{3}{4}\\times\\frac{3}{2} = \\frac{9}{8}$. Sanity check: $\\frac{2}{3}$ is a bit less than $\\frac{3}{4}$, so $\\frac{3}{4}$ should contain a little more than one of them, and $\\frac{9}{8} = 1\\tfrac{1}{8}$ is indeed just over $1$. Note you flip the **divisor** (the second fraction), never the first.' },
      { type: 'h2', text: 'Where experts disagree' },
      { type: 'p', text: 'Fraction division is one of the most-fought topics in elementary math education, and the camps split sharply.' },
      { type: 'ul', items: [
        'The **procedural** camp says: teach "invert and multiply" cleanly, drill it to fluency, and do not drown six-year-olds in derivations they are not ready for. The algorithm is reliable and fast.',
        'The **conceptual / "new math" / Common Core** camp says: students who only know the trick cannot tell you whether $\\frac{1}{2}\\div\\frac{1}{4}$ should be bigger or smaller than $\\frac{1}{2}$, and they routinely flip the wrong fraction. They push the "how many fit?" picture and area models first. Critics of this approach complain it is slow and confuses parents who learned it the old way — a real flashpoint in the "math wars."',
        'Researchers like Hung-Hsi Wu argue both are needed in sequence: meaning to know what you are doing, then the algorithm so you can do it without thinking.'
      ] },
      { type: 'p', text: 'So when you flip and multiply, do not feel like you are doing a magic trick — you are multiplying by a cleverly disguised $1$ to make a denominator disappear. Understand that once and you will never flip the wrong fraction again.' },
      { type: 'pull', text: 'A fraction is one number wearing three masks: a cut-and-take, a division, and a ratio. "Invert and multiply" is just the reciprocal clearing the denominator to one.' }
    ],
    sources: [
      { label: 'BetterExplained: A fresh look at fractions / division (Kalid Azad)', url: 'https://betterexplained.com/articles/learning-how-to-count-avoiding-the-fence-post-problem/' },
      { label: 'Khan Academy: Dividing fractions', url: 'https://www.khanacademy.org/math/arithmetic/fraction-arithmetic' },
      { label: 'H. Wu, Teaching Fractions According to the Mathematics Standards', url: 'https://math.berkeley.edu/~wu/' }
    ]
  },

  {
    id: 'order-of-operations',
    title: 'The order-of-operations controversy',
    dek: 'PEMDAS is a convention, not a law of nature — and the viral $6\\div 2(1+2)$ fights prove the convention has a genuine gap.',
    readMins: 8,
    blocks: [
      { type: 'p', text: 'Every few months a single arithmetic expression tears the internet apart. $8\\div 2(2+2)$. $6\\div 2(1+2)$. Half the comments say $16$, the other half say $1$, and both sides are certain the other side failed third grade. Here is the uncomfortable truth: **they are arguing about a convention, not a fact** — and the convention really is ambiguous on these specific expressions.' },
      { type: 'h2', text: 'What PEMDAS actually is' },
      { type: 'p', text: 'Math notation would be chaos if $2 + 3 \\times 4$ could mean either $20$ or $14$. So we agreed on a reading order, taught in English-speaking schools as **PEMDAS** (Parentheses, Exponents, Multiplication/Division, Addition/Subtraction) — elsewhere **BODMAS** or **BIDMAS**. It is punctuation, not physics: a grammar for math, like agreeing to read left-to-right. It is not discovered; it is **agreed upon**.' },
      { type: 'callout', label: 'INTUITION', text: 'The single most-missed point: **multiplication and division share one tier**, and so do addition and subtraction. You do not do all multiplication before all division — you do M and D together, **left to right**. So $8 - 3 + 2 = (8-3)+2 = 7$, not $8-(3+2)=3$.' },
      { type: 'p', text: 'Let us do a clean one with no controversy. Evaluate $2 + 3 \\times 4^2 - (5 - 1)$ by the tiers:' },
      { type: 'ol', items: [
        'Parentheses: $5 - 1 = 4$, giving $2 + 3\\times 4^2 - 4$.',
        'Exponents: $4^2 = 16$, giving $2 + 3\\times 16 - 4$.',
        'Multiply: $3\\times 16 = 48$, giving $2 + 48 - 4$.',
        'Add and subtract left to right: $2 + 48 = 50$, then $50 - 4 = 46$. The answer is $46$, and nobody will fight you over it, because nothing in it is ambiguous.'
      ] },
      { type: 'h2', text: 'Why $6\\div 2(1+2)$ breaks people' },
      { type: 'p', text: 'Now the troublemaker. First do the parentheses: $1 + 2 = 3$. We are left with $6\\div 2(3)$. Here is the fork.' },
      { type: 'ul', items: [
        '**Strict PEMDAS reading:** division and multiplication share a tier, so go left to right: $6\\div 2 = 3$, then $3\\times 3 = 9$. **Answer: $9$.** This is what almost every calculator and the literal PEMDAS rule give.',
        '**Implied-multiplication reading:** many people (and many physicists and mathematicians) treat a number jammed against a parenthesis — **juxtaposition**, like $2(3)$ — as binding tighter than $\\div$, almost like an invisible grouping. Then $2(3) = 6$ first, and $6\\div 6 = 1$. **Answer: $1$.**'
      ] },
      { type: 'callout', variant: 'warn', label: 'THE REAL ANSWER', text: 'The honest answer is that $6\\div 2(1+2)$ is **badly written**. A working mathematician would never publish it; they would write $\\frac{6}{2}(1+2)$ or $\\frac{6}{2(1+2)}$ and remove all doubt. The expression has no single correct value because the notation is genuinely ambiguous.' },
      { type: 'h2', text: 'What mathematicians actually do' },
      { type: 'p', text: 'Professionals largely sidestep the whole fight. They use the **horizontal fraction bar**, which groups everything above and below it automatically — no $\\div$ symbol, no ambiguity. The $\\div$ ("obelus") is essentially an elementary-school symbol; you will rarely see it in a research paper. When mathematicians do write inline, many honor the implied-multiplication-binds-tighter convention precisely because the alternative is so error-prone.' },
      { type: 'pull', text: 'The viral problems are not testing whether you know math. They are exposing that the notation $\\div$ with implied multiplication is broken — and the fix is to write a clear fraction instead of starting a fight.' },
      { type: 'h2', text: 'Where experts disagree' },
      { type: 'ul', items: [
        '**Strict left-to-right:** treats $\\times$ and $\\div$ as identical-priority and evaluates left to right, so $6\\div 2(1+2) = 9$. This is how most calculators, programming languages, and the textbook PEMDAS rule operate. Clean, mechanical, defensible.',
        '**Implied multiplication first:** holds that juxtaposition (a coefficient touching a parenthesis or variable) binds tighter than explicit $\\div$. Under this convention $6\\div 2(1+2) = 1$. This convention is common in physics and in expressions like $1/2\\pi$ meaning $\\frac{1}{2\\pi}$.',
        '**Both, plus a shrug:** organizations like the **American Mathematical Society** style guidance and many educators say the expression is simply **ill-formed** and should be rewritten. There is no universal standard that settles it, which is exactly why the fight never dies.'
      ] },
      { type: 'p', text: 'So who is right? Everyone — about a different convention. The skill is not picking a side; it is recognizing ambiguous notation and refusing to write it. The moment you reach for a clear fraction bar, the controversy evaporates.' }
    ],
    sources: [
      { label: 'Numberphile / Steve Mould discussions of the ambiguity', url: 'https://www.youtube.com/watch?v=4x-BcYCiKCk' },
      { label: 'Wikipedia: Order of operations (including ambiguity)', url: 'https://en.wikipedia.org/wiki/Order_of_operations' },
      { label: 'Khan Academy: Order of operations', url: 'https://www.khanacademy.org/math/arithmetic-home/arith-review-order-of-operations' }
    ],
    video: { title: 'The Order of Operations is Wrong', channel: 'minutephysics / explainer', duration: '4:25', url: 'https://www.youtube.com/watch?v=y9h1oqv21Vs' }
  },

  {
    id: 'what-is-a-variable',
    title: 'What a variable is',
    dek: 'A letter in math is not a mystery to "solve for." It is arithmetic with the specific number left blank on purpose. Algebra is just generalized counting.',
    readMins: 8,
    blocks: [
      { type: 'p', text: 'The first time a letter shows up in math class, something breaks for a lot of people. Numbers felt safe; now there is an $x$, and $x$ is "unknown," and the whole thing feels like a riddle. But a variable is not a riddle. **A variable is a number whose specific value we have deliberately left blank** — so that one statement can speak about many numbers at once. Algebra is not a new subject; it is arithmetic with the particular number erased on purpose.' },
      { type: 'callout', label: 'INTUITION', text: 'A variable is a box you can drop any number into. $x + 3$ is not a puzzle — it is a machine: "whatever you put in, add three." The letter is a placeholder for the input.' },
      { type: 'h2', text: 'From a specific fact to a general one' },
      { type: 'p', text: 'You already know $2 + 3 = 3 + 2$, and $7 + 4 = 4 + 7$, and a thousand more like them — order does not matter when you add. But writing out infinitely many examples is hopeless, so we say it **once**, with letters:' },
      { type: 'math', tex: 'a + b = b + a' },
      { type: 'p', text: 'That single line means "for **any** numbers $a$ and $b$." The letters are not hiding a value — they stand in for *every* value at once. That is the superpower of algebra: stating a pattern that holds for all numbers in one stroke. A formula with letters is a reusable machine; "area of a rectangle is length times width" becomes $A = \\ell w$, and now you can compute the area of *every* rectangle that will ever exist with one expression. **Generality** is the entire point.' },
      { type: 'h2', text: 'Two jobs a letter can do' },
      { type: 'ul', items: [
        'It helps enormously to notice that letters do two genuinely different jobs, even though they look identical. **The unknown (one hidden number):** in $x + 3 = 10$, the letter $x$ is one specific number we have not figured out yet. "Solving for $x$" means undoing the arithmetic to uncover it: subtract $3$ from both sides, $x = 7$. Here the letter is a question.',
        '**The variable (a number that varies):** in $y = 2x + 1$, $x$ is not one hidden value — it slides through all numbers, and $y$ responds. Feed in $x = 0$ and $y = 1$; feed in $x = 5$ and $y = 11$. Here the letter is a dial you can turn.'
      ] },
      { type: 'callout', variant: 'warn', label: 'WATCH OUT', text: 'Beginners often think "$x$ always means one secret number to find." Sometimes it does (an equation to solve). But in a formula or function, $x$ is meant to roam over many values. Read the context to know which job the letter is doing.' },
      { type: 'h2', text: 'Solving is just undoing' },
      { type: 'p', text: 'Because algebra is arithmetic in disguise, "solving" is nothing exotic. An equation is a balance scale: whatever you do to one side you must do to the other to keep it level. To uncover $x$ in $2x + 1 = 11$, peel off the operations in reverse:' },
      { type: 'ol', items: [
        'Subtract $1$ from both sides: $2x = 10$.',
        'Divide both sides by $2$: $x = 5$.',
        'Check by substituting back: $2(5) + 1 = 11$. True — so $x = 5$ is correct. That check is not optional politeness; it is how you catch your own mistakes.'
      ] },
      { type: 'theorem', label: 'THE BIG IDEA', text: 'Algebra is generalized arithmetic — one statement standing for infinitely many numerical facts, with solving just the arithmetic run backward to reveal a hidden value.' },
      { type: 'h2', text: 'Where experts disagree' },
      { type: 'ul', items: [
        'There is a long-running argument about **when and how** to introduce symbols. The **early-and-abstract** camp argues kids can handle "thinking about thinking" sooner than we assume; some push "early algebra" — patterns and the equals-sign-as-balance — into elementary grades so symbols feel natural by middle school.',
        'The **concrete-first** camp (in the spirit of constructivists and educators like Jo Boaler) warns that rushing to symbols before the underlying arithmetic is solid produces students who push letters around mechanically with no idea what they mean — the classic "$x$ is just a thing you do magic to" trap.',
        'A specific, well-documented hazard both camps acknowledge: many students misread the **equals sign** as "now write the answer" (an action) rather than "the two sides are the same" (a balance). That single misconception sabotages algebra, and fixing it is a shared goal even where the camps disagree on pacing.'
      ] },
      { type: 'pull', text: 'A variable is not a mystery to fear. It is arithmetic with the number left blank on purpose — a box, a dial, or a question, depending on the job you have given it. So next time a letter appears, do not freeze: ask whether it is a hidden number to uncover or a dial that varies, and algebra becomes what it always was — arithmetic, said in general.' }
    ],
    sources: [
      { label: 'BetterExplained: Developing intuition for algebra (Kalid Azad)', url: 'https://betterexplained.com/articles/learning-to-learn-intuition-isnt-optional/' },
      { label: 'Khan Academy: Introduction to variables', url: 'https://www.khanacademy.org/math/algebra-basics/alg-basics-algebraic-expressions' },
      { label: 'Jo Boaler, Mathematical Mindsets', url: 'https://www.youcubed.org/resource/mathematical-mindsets/' }
    ]
  }
];
