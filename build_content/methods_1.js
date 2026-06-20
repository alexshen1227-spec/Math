window.AXIOM_METHODS_1 = [
  {
    id: 'left-to-right-addition',
    name: 'Left-to-right addition',
    category: 'Arithmetic & Mental Math',
    difficulty: 'beg',
    trains: 'adding big numbers in your head without writing carries',
    idea: 'You read numbers left-to-right, so add them that way too — start with the big chunks (the place values that matter most) and fold in the small ones.',
    steps: [
      'Take $4628 + 2745$. Line up the place values in your head: thousands, hundreds, tens, ones.',
      'Add the biggest place first: $4000 + 2000 = 6000$. Hold that running total.',
      'Add the hundreds: $600 + 700 = 1300$, so $6000 + 1300 = 7300$.',
      'Add the tens: $20 + 40 = 60$, so $7300 + 60 = 7360$.',
      'Add the ones last: $8 + 5 = 13$, so $7360 + 13 = 7373$.',
      'Answer: $4628 + 2745 = 7373$. Notice you always knew the rough size early — you had "about 7000" after one step.'
    ],
    mistakes: [
      'Losing the running total. Say it out loud or hold it firmly before you grab the next chunk: "seven thousand three hundred...".',
      'Misaligning place values, e.g. adding $700$ as if it were $70$. Name each chunk by its size as you go.',
      'Trying to track too many digits at once. Add one place per step; never juggle more than two numbers in your head.'
    ],
    source: { label: 'Arthur Benjamin & Michael Shermer, Secrets of Mental Math', url: 'https://www.penguinrandomhouse.com/books/293152/secrets-of-mental-math-by-arthur-benjamin-and-michael-shermer/' }
  },
  {
    id: 'subtract-by-adding',
    name: 'Subtract by adding (complements)',
    category: 'Arithmetic & Mental Math',
    difficulty: 'beg',
    trains: 'subtracting by counting up, like making change',
    idea: 'Subtraction is just the distance between two numbers — instead of taking away, count up from the smaller to the larger, exactly like a cashier counting out change.',
    steps: [
      'Take $1000 - 486$. Forget borrowing — ask "how far is it from $486$ up to $1000$?"',
      'Count up to the next round number: from $486$ to $500$ is $+14$.',
      'Count up to the target: from $500$ to $1000$ is $+500$.',
      'Add your jumps: $14 + 500 = 514$.',
      'Answer: $1000 - 486 = 514$. Check by adding back: $486 + 514 = 1000$. ✓',
      'For everyday change on $83 - 27$: from $27$ to $30$ is $+3$, then $30$ to $83$ is $+53$, so $3 + 53 = 56$.'
    ],
    mistakes: [
      'Forgetting to add up all your jumps. Keep a running tally of each step ($+14$, then $+500$).',
      'Counting up past the target. Stop exactly at the larger number; check by adding your answer back to the smaller one.',
      'Jumping by awkward amounts. Always hop to the nearest round number first ($486 \\to 500$), then to the target.'
    ],
    source: { label: 'Arthur Benjamin & Michael Shermer, Secrets of Mental Math', url: 'https://www.penguinrandomhouse.com/books/293152/secrets-of-mental-math-by-arthur-benjamin-and-michael-shermer/' }
  },
  {
    id: 'doubling-halving',
    name: 'Doubling and halving',
    category: 'Arithmetic & Mental Math',
    difficulty: 'beg',
    trains: 'reshaping a product into an easier one',
    idea: 'A product does not change if you double one factor and halve the other — so keep trading until one factor becomes something easy to multiply, like 100.',
    steps: [
      'Take $16 \\times 25$. The $25$ is the annoying one — but doubling it gives $50$, then $100$.',
      'Halve $16$, double $25$: $16 \\times 25 = 8 \\times 50$.',
      'Do it again: $8 \\times 50 = 4 \\times 100$.',
      'Now it is trivial: $4 \\times 100 = 400$.',
      'Answer: $16 \\times 25 = 400$. You traded a hard product for an obvious one without changing its value.',
      'It also works the other way: $14 \\times 5 = 7 \\times 10 = 70$.'
    ],
    mistakes: [
      'Doubling both factors (or halving both). You must do the opposite to each, so the product stays the same.',
      'Halving an odd number and getting stuck. If a factor is odd, double the other one first or stop — only halve when it stays whole.',
      'Trading in the wrong direction. Steer toward $10$, $50$, or $100$; if a move makes things uglier, go the other way.'
    ],
    source: { label: 'Arthur Benjamin & Michael Shermer, Secrets of Mental Math', url: 'https://www.penguinrandomhouse.com/books/293152/secrets-of-mental-math-by-arthur-benjamin-and-michael-shermer/' }
  },
  {
    id: 'multiply-by-11',
    name: 'Multiply by 11',
    category: 'Arithmetic & Mental Math',
    difficulty: 'beg',
    trains: 'instant multiplication by 11',
    idea: 'Multiplying by 11 is "multiply by 10 and add one more copy", which lands as: keep the outer digits and slot the sum of neighbors between them.',
    steps: [
      'Take $11 \\times 73$. Write the two digits with a gap: $7\\,\\_\\,3$.',
      'Add the neighbors to fill the gap: $7 + 3 = 10$.',
      'Since $10$ is two digits, write the $0$ in the gap and carry the $1$ to the left digit: $7 + 1 = 8$.',
      'Read it off: $8$, then $0$, then $3$ gives $803$.',
      'Answer: $11 \\times 73 = 803$. (Why it works: $11 \\times 73 = 730 + 73 = 803$.)',
      'No-carry case is even faster: $11 \\times 36 \\Rightarrow 3\\,(3{+}6)\\,6 = 396$.'
    ],
    mistakes: [
      'Forgetting to carry when the middle sum is $10$ or more. $11 \\times 86$: $8 + 6 = 14$, so write $4$, carry $1$ to get $946$ — not $8146$.',
      'Carrying into the wrong digit. The carry always moves left, into the leading digit.',
      'Thinking it only works for two-digit numbers. For $11 \\times 532$ add each adjacent pair: $5\\,(5{+}3)\\,(3{+}2)\\,2 = 5852$.'
    ],
    source: { label: 'Arthur Benjamin & Michael Shermer, Secrets of Mental Math', url: 'https://www.penguinrandomhouse.com/books/293152/secrets-of-mental-math-by-arthur-benjamin-and-michael-shermer/' }
  },
  {
    id: 'square-ending-5',
    name: 'Squaring numbers ending in 5',
    category: 'Arithmetic & Mental Math',
    difficulty: 'int',
    trains: 'instantly squaring any number ending in 5',
    idea: 'For $(10n+5)^2$ the algebra collapses to $100\\,n(n+1) + 25$ — so the answer is always "$n$ times the next number" with a $25$ stuck on the end.',
    steps: [
      'Take $35^2$. The tens digit is $n = 3$.',
      'Multiply $n$ by the next whole number: $3 \\times 4 = 12$.',
      'Append $25$ to that result: $12$ then $25$ gives $1225$.',
      'Answer: $35^2 = 1225$.',
      'Check the algebra: $(10n+5)^2 = 100n^2 + 100n + 25 = 100\\,n(n+1) + 25$, so $100(12) + 25 = 1225$. ✓',
      'Same recipe for $85^2$: $8 \\times 9 = 72$, append $25$, giving $7225$.'
    ],
    mistakes: [
      'Appending only a single $5$ or a $5$ instead of the full $25$. The constant tail is always exactly $25$.',
      'Using $n \\times n$ instead of $n \\times (n+1)$. It is $n$ times the NEXT number: for $65^2$ use $6 \\times 7 = 42 \\Rightarrow 4225$.',
      'Trying it on numbers that do not end in 5. This shortcut is only valid because the last digit is $5$.'
    ],
    source: { label: 'Arthur Benjamin & Michael Shermer, Secrets of Mental Math', url: 'https://www.penguinrandomhouse.com/books/293152/secrets-of-mental-math-by-arthur-benjamin-and-michael-shermer/' }
  },
  {
    id: 'multiply-near-base',
    name: 'Multiplying numbers near 100',
    category: 'Arithmetic & Mental Math',
    difficulty: 'adv',
    trains: 'multiplying two numbers just below (or above) 100',
    idea: 'Write each number as a small distance from 100; the algebra $(100-a)(100-b)$ splits cleanly into "subtract a deficit, then tack on the product of the deficits".',
    steps: [
      'Take $97 \\times 96$. Their deficits from $100$ are $a = 3$ and $b = 4$.',
      'Left part: subtract one deficit from the OTHER number — $97 - 4 = 93$ (equivalently $96 - 3 = 93$). This is the hundreds.',
      'Right part: multiply the two deficits — $3 \\times 4 = 12$. This is the last two digits.',
      'Stitch them: $93$ then $12$ gives $9312$.',
      'Answer: $97 \\times 96 = 9312$.',
      'Why: $(100-3)(100-4) = 10000 - 100(3+4) + 12 = 9300 + 12 = 9312$. ✓'
    ],
    mistakes: [
      'Forgetting to pad the deficit product to two digits. If $a \\times b < 10$ (e.g. $98 \\times 97$ gives $2 \\times 3 = 6$), write it as $06$.',
      'Adding instead of cross-subtracting for the left part. Use $97 - 4$ or $96 - 3$ — both give $93$, never $97 - 3$.',
      'Mixing up which deficit goes where. The two deficits multiply together; either one subtracts from the other number.'
    ],
    source: { label: 'Arthur Benjamin & Michael Shermer, Secrets of Mental Math', url: 'https://www.penguinrandomhouse.com/books/293152/secrets-of-mental-math-by-arthur-benjamin-and-michael-shermer/' }
  },
  {
    id: 'casting-out-nines',
    name: 'Casting out nines',
    category: 'Arithmetic & Mental Math',
    difficulty: 'int',
    trains: 'catching arithmetic errors with a quick digit-sum check',
    idea: 'A number and its digit sum leave the same remainder when divided by 9, so digit sums must "balance" across a correct calculation — if they do not, you made a mistake.',
    steps: [
      'Suppose you computed $457 \\times 38 = 17366$ and want to check it.',
      'Reduce each factor by summing digits down to one digit: $457 \\to 4{+}5{+}7 = 16 \\to 1{+}6 = 7$.',
      'And $38 \\to 3{+}8 = 11 \\to 1{+}1 = 2$.',
      'Multiply the check digits and reduce: $7 \\times 2 = 14 \\to 1{+}4 = 5$.',
      'Now reduce the answer: $17366 \\to 1{+}7{+}3{+}6{+}6 = 23 \\to 2{+}3 = 5$.',
      'Both sides reduce to $5$, so $17366$ passes the check. ✓ (It really does equal $457 \\times 38$.)'
    ],
    mistakes: [
      'Treating a pass as proof. Matching check digits only catch most errors; a result can still be wrong (e.g. transposed digits) yet pass. A MISMATCH, however, guarantees an error.',
      'Forgetting that 9s reduce to 0. When summing digits you can drop any $9$ (or digits summing to $9$) — that is the "casting out".',
      'Applying the wrong operation to the check digits. Add the check digits for a sum, multiply them for a product — mirror the original operation.'
    ],
    source: { label: 'Wikipedia, Casting out nines', url: 'https://en.wikipedia.org/wiki/Casting_out_nines' }
  },
  {
    id: 'divisibility-rules',
    name: 'Divisibility rules',
    category: 'Arithmetic & Mental Math',
    difficulty: 'beg',
    trains: 'telling at a glance whether a number divides evenly',
    idea: 'Our base-10 number system makes each divisor leave a fingerprint — in the last digit, the digit sum, or an alternating sum — so you can test divisibility without dividing.',
    steps: [
      '**By 2:** last digit is even ($0,2,4,6,8$). $7120$ ends in $0$, so divisible by 2.',
      '**By 5 and 10:** ends in $0$ or $5$ (for 5); ends in $0$ (for 10). $7120$ works for both 5 and 10.',
      '**By 4:** last two digits form a multiple of 4. $7120 \\to 20$, and $20 = 4 \\times 5$, so yes.',
      '**By 8:** last three digits form a multiple of 8. $7120 \\to 120 = 8 \\times 15$, so yes.',
      '**By 3 and 9:** digit sum divisible by 3 (or 9). $918 \\to 9{+}1{+}8 = 18$, divisible by both 3 and 9 — indeed $918 = 9 \\times 102$.',
      '**By 6:** passes BOTH the 2-test and the 3-test. $918$ is even and its digits sum to $18$, so it is divisible by 6.',
      '**By 11:** alternating digit sum is a multiple of 11 (including 0). $2728 \\to 2 - 7 + 2 - 8 = -11$, a multiple of 11, so $2728 = 11 \\times 248$.'
    ],
    mistakes: [
      'Using the digit-sum trick for 2, 4, or 8. Digit sums only test 3 and 9; the powers of 2 are tested by the last 1, 2, or 3 digits.',
      'Forgetting the 6 rule needs BOTH 2 and 3. A number divisible by 3 but odd (like $15$) is not divisible by 6.',
      'Adding instead of alternating for the 11 test. You must alternate signs: $+,-,+,-$ from one end.'
    ],
    source: { label: 'Khan Academy, Divisibility tests', url: 'https://www.khanacademy.org/math/cc-fourth-grade-math/imp-factors-multiples-and-patterns/imp-divisibility-tests/a/divisibility-tests-review' }
  },
  {
    id: 'long-division',
    name: 'Long division',
    category: 'Arithmetic & Mental Math',
    difficulty: 'int',
    trains: 'the standard pencil-and-paper division algorithm',
    idea: 'Long division is just repeated "how many fit?" applied one digit at a time from the left, carrying whatever is left over into the next place.',
    steps: [
      'Compute $4736 \\div 4$. Work left to right through the digits of $4736$.',
      'First digit: $4 \\div 4 = 1$ remainder $0$. Write $1$ above the $4$.',
      'Bring down the $7$: $7 \\div 4 = 1$ remainder $3$. Write $1$; carry the remainder $3$.',
      'Combine remainder with the next digit: $3$ and $3$ make $33$. $33 \\div 4 = 8$ remainder $1$. Write $8$; carry $1$.',
      'Combine: $1$ and the last digit $6$ make $16$. $16 \\div 4 = 4$ remainder $0$. Write $4$.',
      'Read the quotient off the top: $1184$, remainder $0$.',
      'Answer: $4736 \\div 4 = 1184$. Check by multiplying back: $1184 \\times 4 = 4736$. ✓'
    ],
    mistakes: [
      'Dropping a digit when bringing down. Process every digit of the dividend in order — never skip one.',
      'Forgetting to carry the remainder into the next step. The leftover always joins the next brought-down digit.',
      'Misplacing quotient digits. Each quotient digit sits directly above the dividend digit you are currently dividing into.'
    ],
    source: { label: 'Khan Academy, Long division', url: 'https://www.khanacademy.org/math/arithmetic/arith-review-multiply-divide/arith-review-long-division/a/long-division-review' }
  },
  {
    id: 'common-denominators',
    name: 'Common denominators (LCD)',
    category: 'Fractions & Percents',
    difficulty: 'beg',
    trains: 'adding and subtracting fractions',
    idea: 'You can only add things measured in the same unit, so before adding fractions you rewrite them over one shared denominator — the same "slice size" for both.',
    steps: [
      'Add $\\frac{2}{3} + \\frac{1}{4}$. The denominators are $3$ and $4$.',
      'Find a common denominator (their LCD is $12$, since $12$ is the smallest multiple of both).',
      'Rescale each fraction to twelfths: $\\frac{2}{3} = \\frac{2 \\times 4}{3 \\times 4} = \\frac{8}{12}$.',
      'And $\\frac{1}{4} = \\frac{1 \\times 3}{4 \\times 3} = \\frac{3}{12}$.',
      'Now the units match, so add the numerators: $\\frac{8}{12} + \\frac{3}{12} = \\frac{11}{12}$.',
      'Answer: $\\frac{2}{3} + \\frac{1}{4} = \\frac{11}{12}$ — already in lowest terms.'
    ],
    mistakes: [
      'Adding the denominators too: $\\frac{2}{3} + \\frac{1}{4} \\ne \\frac{3}{7}$. Once denominators match, add ONLY the numerators; keep the shared denominator.',
      'Rescaling only the bottom of a fraction. Whatever you multiply the denominator by, multiply the numerator by the same amount.',
      'Forgetting to simplify at the end. Always reduce the result to lowest terms.'
    ],
    source: { label: 'Khan Academy, Adding and subtracting fractions with unlike denominators', url: 'https://www.khanacademy.org/math/arithmetic/fraction-arithmetic/arith-review-add-sub-fractions-unlike-denom/a/adding-and-subtracting-fractions-with-unlike-denominators' }
  },
  {
    id: 'cross-multiplication',
    name: 'Cross-multiplication',
    category: 'Fractions & Percents',
    difficulty: 'int',
    trains: 'comparing and solving fraction equations',
    idea: 'Two fractions are equal exactly when their cross-products are equal — multiplying both sides by both denominators clears the fractions and leaves a clean comparison.',
    steps: [
      'Compare $\\frac{3}{5}$ and $\\frac{4}{7}$: which is bigger?',
      'Cross-multiply UP each diagonal: numerator of the first times denominator of the second, $3 \\times 7 = 21$.',
      'And the other diagonal: $5 \\times 4 = 20$.',
      'Compare the cross-products: $21 > 20$, and $21$ came from the $\\frac{3}{5}$ side, so $\\frac{3}{5} > \\frac{4}{7}$.',
      'To SOLVE an equation like $\\frac{x}{6} = \\frac{4}{3}$, set the cross-products equal: $3x = 6 \\times 4 = 24$.',
      'Divide: $x = \\frac{24}{3} = 8$. Check: $\\frac{8}{6} = \\frac{4}{3}$. ✓'
    ],
    mistakes: [
      'Attaching the cross-product to the wrong fraction. Each product belongs to the fraction whose NUMERATOR fed into it ($3 \\times 7$ belongs to $\\frac{3}{5}$).',
      'Cross-multiplying when the relation is not an equation or a comparison — it only works for $\\frac{a}{b} = \\frac{c}{d}$ or comparing two single fractions, not for adding them.',
      'Forgetting it can fail signs with negatives. With negative fractions, reason about signs first or use a common denominator instead.'
    ],
    source: { label: 'Khan Academy, Comparing fractions', url: 'https://www.khanacademy.org/math/arithmetic/fraction-arithmetic/arith-review-comparing-fractions/a/comparing-fractions-review' }
  },
  {
    id: 'of-means-times',
    name: '"Of" means times',
    category: 'Fractions & Percents',
    difficulty: 'beg',
    trains: 'turning "a fraction/percent of a number" into multiplication',
    idea: 'In math the word "of" is multiplication in disguise — taking a part OF a whole is the same as multiplying the whole by that fraction.',
    steps: [
      'Read "$\\frac{1}{3}$ of $12$" as "$\\frac{1}{3} \\times 12$".',
      'Multiply: $\\frac{1}{3} \\times 12 = \\frac{12}{3} = 4$.',
      'So $\\frac{1}{3}$ of $12$ is $4$.',
      'For percents, first turn the percent into a fraction or decimal: $20\\% = \\frac{20}{100} = 0.2$.',
      'Then "$20\\%$ of $80$" becomes $0.2 \\times 80 = 16$.',
      'Answer: $20\\%$ of $80 = 16$. Same recipe every time: convert, then multiply.'
    ],
    mistakes: [
      'Forgetting to convert a percent before multiplying: $20\\%$ of $80$ is NOT $20 \\times 80$. Turn $20\\%$ into $0.2$ first.',
      'Reading "of" as division or subtraction. "Of" always signals multiplication of the part by the whole.',
      'Dropping the percent sign and treating $20\\%$ as $20$. A percent is $\\div 100$ baked in.'
    ],
    source: { label: 'Khan Academy, Percent word problems', url: 'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-rates-and-percentages/cc-6th-percent-problems/a/solving-percent-problems' }
  },
  {
    id: 'percent-conversions',
    name: 'Percent / fraction / decimal conversions',
    category: 'Fractions & Percents',
    difficulty: 'beg',
    trains: 'converting between percents, fractions, and decimals',
    idea: 'Percent literally means "per hundred", so a percent is just a fraction over 100 — and a decimal is that same fraction written in place-value form, so all three are one number in three costumes.',
    steps: [
      'Percent to decimal: drop the $\\%$ and divide by $100$ (move the point two places left). $37.5\\% = 0.375$.',
      'Decimal to percent: reverse it — multiply by $100$ (move the point two places right). $0.375 = 37.5\\%$.',
      'Percent to fraction: put it over $100$ and simplify. $37.5\\% = \\frac{37.5}{100} = \\frac{375}{1000} = \\frac{3}{8}$.',
      'Fraction to decimal: divide top by bottom. $\\frac{3}{8} = 3 \\div 8 = 0.375$.',
      'Fraction to percent: convert to a decimal, then multiply by $100$. $\\frac{3}{8} = 0.375 = 37.5\\%$.',
      'So $\\frac{3}{8}$, $0.375$, and $37.5\\%$ are the SAME number. Verify: $0.375 \\times 8 = 3$. ✓'
    ],
    mistakes: [
      'Moving the decimal the wrong way. Percent-to-decimal moves LEFT (smaller); decimal-to-percent moves RIGHT (bigger).',
      'Confusing $0.5$ with $5\\%$. $0.5 = 50\\%$, while $5\\% = 0.05$. Always count two places.',
      'Forgetting to simplify a percent-to-fraction result. $\\frac{375}{1000}$ should reduce to $\\frac{3}{8}$.'
    ],
    source: { label: 'Khan Academy, Converting percents to decimals and fractions', url: 'https://www.khanacademy.org/math/cc-sixth-grade-math/cc-6th-rates-and-percentages/cc-6th-percent-decimal-fraction/a/percents-and-decimals-review' }
  },
  {
    id: 'percent-change',
    name: 'Percent change',
    category: 'Fractions & Percents',
    difficulty: 'int',
    trains: 'computing percent increase and decrease',
    idea: 'Percent change measures the size of a change RELATIVE to where you started, so you divide the actual change by the original value — not by the new one.',
    steps: [
      'A value goes from $80$ up to $100$. First find the raw change: $\\text{new} - \\text{old} = 100 - 80 = 20$.',
      'Divide by the ORIGINAL value: $\\frac{20}{80} = 0.25$.',
      'Convert to a percent: $0.25 = 25\\%$. A positive result means an increase.',
      'Answer: $80 \\to 100$ is a $+25\\%$ change.',
      'For a decrease, $75 \\to 60$: change is $60 - 75 = -15$, then $\\frac{-15}{75} = -0.2 = -20\\%$ (a $20\\%$ drop).'
    ],
    mistakes: [
      'Dividing by the new value instead of the old. The denominator is always the ORIGINAL: $80 \\to 100$ is $\\frac{20}{80} = 25\\%$, not $\\frac{20}{100} = 20\\%$.',
      'Assuming a $25\\%$ rise then a $25\\%$ fall returns you to the start. $80 \\to 100$ ($+25\\%$) then $-25\\%$ of $100$ lands at $75$, not $80$.',
      'Mixing up percentage POINTS with percent change. Going from $40\\%$ to $50\\%$ is $+10$ points but a $+25\\%$ change.'
    ],
    source: { label: 'Khan Academy, Percent word problems (percent change)', url: 'https://www.khanacademy.org/math/cc-seventh-grade-math/cc-7th-fractions-decimals/cc-7th-percent-change/a/percent-word-problems-review' }
  }
];
