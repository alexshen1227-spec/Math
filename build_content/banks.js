window.AXIOM_BANKS = [
  {
    id: 'unit-circle-bank',
    name: 'Unit circle values',
    topic: 'Geometry & Trig',
    level: 'Intermediate',
    items: [
      {
        promptTeX: 'What is $\\cos 60^\\circ$?',
        choices: ['$\\frac{1}{2}$', '$\\frac{\\sqrt{3}}{2}$', '$\\frac{\\sqrt{2}}{2}$', '$1$'],
        answerIndex: 0,
        solutionTeX: 'On the unit circle the $x$-coordinate at $60^\\circ$ is $\\frac{1}{2}$, so $\\cos 60^\\circ=\\frac{1}{2}$. The big one, $\\frac{\\sqrt{3}}{2}$, belongs to $\\sin 60^\\circ$ instead.',
        hints: ['Cosine is the $x$-coordinate of the point on the unit circle.', 'Picture the 30-60-90 triangle: the side next to the $60^\\circ$ angle is the short one.']
      },
      {
        promptTeX: 'What is $\\sin 30^\\circ$?',
        choices: ['$\\frac{\\sqrt{3}}{2}$', '$\\frac{1}{2}$', '$0$', '$1$'],
        answerIndex: 1,
        solutionTeX: 'Sine is the $y$-coordinate, and at $30^\\circ$ that height is $\\frac{1}{2}$. Notice $\\sin 30^\\circ=\\cos 60^\\circ$ — that is no accident, the angles are complementary.',
        hints: ['Sine is the $y$-coordinate (the height).', '$30^\\circ$ is a low, shallow angle, so the height is small.']
      },
      {
        promptTeX: 'What is $\\cos 30^\\circ$?',
        choices: ['$\\frac{1}{2}$', '$\\frac{\\sqrt{2}}{2}$', '$\\frac{\\sqrt{3}}{2}$', '$\\sqrt{3}$'],
        answerIndex: 2,
        solutionTeX: 'At the shallow angle $30^\\circ$ the point is far to the right, so the $x$-coordinate is large: $\\cos 30^\\circ=\\frac{\\sqrt{3}}{2}\\approx 0.87$.',
        hints: ['Cosine is the $x$-coordinate.', 'A small angle means the point hugs the right side, so cosine is close to $1$.']
      },
      {
        promptTeX: 'What is $\\sin 45^\\circ$?',
        choices: ['$\\frac{1}{2}$', '$\\frac{\\sqrt{2}}{2}$', '$\\frac{\\sqrt{3}}{2}$', '$1$'],
        answerIndex: 1,
        solutionTeX: 'At $45^\\circ$ the $x$- and $y$-coordinates are equal, and since $x^2+y^2=1$ each equals $\\frac{\\sqrt{2}}{2}$. So $\\sin 45^\\circ=\\cos 45^\\circ=\\frac{\\sqrt{2}}{2}$.',
        hints: ['At $45^\\circ$ the height and width are the same.', 'Solve $2x^2=1$ to get the shared coordinate.']
      },
      {
        promptTeX: 'What is $\\tan 45^\\circ$?',
        choices: ['$0$', '$\\frac{\\sqrt{2}}{2}$', '$1$', 'undefined'],
        answerIndex: 2,
        solutionTeX: 'Since $\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}$ and $\\sin 45^\\circ=\\cos 45^\\circ$, the ratio is exactly $1$.',
        hints: ['$\\tan\\theta$ is sine divided by cosine.', 'When the height equals the width, the ratio is $1$.']
      },
      {
        promptTeX: 'What is $\\sin 90^\\circ$?',
        choices: ['$0$', '$\\frac{1}{2}$', '$1$', 'undefined'],
        answerIndex: 2,
        solutionTeX: 'At $90^\\circ$ the point on the unit circle is straight up at $(0,1)$, so its height — the sine — is $1$.',
        hints: ['Sine is the $y$-coordinate.', 'At $90^\\circ$ you are pointing straight up.']
      },
      {
        promptTeX: 'What is $\\cos 90^\\circ$?',
        choices: ['$0$', '$1$', '$-1$', '$\\frac{1}{2}$'],
        answerIndex: 0,
        solutionTeX: 'At $90^\\circ$ the point is $(0,1)$, so the $x$-coordinate — the cosine — is $0$.',
        hints: ['Cosine is the $x$-coordinate.', 'Straight up means no horizontal distance.']
      },
      {
        promptTeX: 'What is $\\cos 180^\\circ$?',
        choices: ['$0$', '$1$', '$-1$', '$\\frac{\\sqrt{3}}{2}$'],
        answerIndex: 2,
        solutionTeX: 'At $180^\\circ$ the point is all the way left at $(-1,0)$, so the $x$-coordinate is $-1$.',
        hints: ['Cosine is the $x$-coordinate.', 'At $180^\\circ$ you have swung to the far left of the circle.']
      },
      {
        promptTeX: 'What is $\\sin 180^\\circ$?',
        choices: ['$-1$', '$0$', '$1$', '$\\frac{1}{2}$'],
        answerIndex: 1,
        solutionTeX: 'At $180^\\circ$ the point is $(-1,0)$, sitting right on the $x$-axis, so its height is $0$.',
        hints: ['Sine is the $y$-coordinate.', 'On the horizontal axis the height is zero.']
      },
      {
        promptTeX: 'What is $\\sin 270^\\circ$?',
        choices: ['$1$', '$0$', '$-1$', '$-\\frac{1}{2}$'],
        answerIndex: 2,
        solutionTeX: 'At $270^\\circ$ the point is straight down at $(0,-1)$, so the height — the sine — is $-1$.',
        hints: ['Sine is the $y$-coordinate.', '$270^\\circ$ points straight down, below the axis.']
      },
      {
        promptTeX: 'What is $\\cos 270^\\circ$?',
        choices: ['$0$', '$-1$', '$1$', '$-\\frac{1}{2}$'],
        answerIndex: 0,
        solutionTeX: 'At $270^\\circ$ the point is $(0,-1)$, so the $x$-coordinate — the cosine — is $0$.',
        hints: ['Cosine is the $x$-coordinate.', 'Straight down means no horizontal distance.']
      },
      {
        promptTeX: 'What is $\\tan 0^\\circ$?',
        choices: ['$0$', '$1$', 'undefined', '$\\frac{1}{2}$'],
        answerIndex: 0,
        solutionTeX: 'At $0^\\circ$, $\\sin 0^\\circ=0$ and $\\cos 0^\\circ=1$, so $\\tan 0^\\circ=\\frac{0}{1}=0$.',
        hints: ['$\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}$.', 'A zero on top makes the whole fraction zero.']
      },
      {
        promptTeX: 'What is $\\tan 60^\\circ$?',
        choices: ['$\\frac{1}{\\sqrt{3}}$', '$1$', '$\\sqrt{3}$', '$\\frac{\\sqrt{3}}{2}$'],
        answerIndex: 2,
        solutionTeX: 'Divide: $\\tan 60^\\circ=\\frac{\\sin 60^\\circ}{\\cos 60^\\circ}=\\frac{\\sqrt{3}/2}{1/2}=\\sqrt{3}$.',
        hints: ['$\\tan\\theta=\\frac{\\sin\\theta}{\\cos\\theta}$.', 'Use $\\sin 60^\\circ=\\frac{\\sqrt{3}}{2}$ and $\\cos 60^\\circ=\\frac{1}{2}$.']
      },
      {
        promptTeX: 'What is $\\sin 60^\\circ$?',
        choices: ['$\\frac{1}{2}$', '$\\frac{\\sqrt{2}}{2}$', '$\\frac{\\sqrt{3}}{2}$', '$\\sqrt{3}$'],
        answerIndex: 2,
        solutionTeX: '$60^\\circ$ is a steep angle, so the height is large: $\\sin 60^\\circ=\\frac{\\sqrt{3}}{2}\\approx 0.87$. It is the mirror partner of $\\cos 30^\\circ$.',
        hints: ['Sine is the $y$-coordinate (the height).', 'A steep angle gives a tall height, close to $1$.']
      }
    ]
  },
  {
    id: 'soh-cah-toa-bank',
    name: 'SOH-CAH-TOA basics',
    topic: 'Geometry & Trig',
    level: 'Beginner',
    items: [
      {
        promptTeX: 'In a right triangle, which ratio defines $\\sin\\theta$?',
        choices: ['$\\frac{\\text{opposite}}{\\text{hypotenuse}}$', '$\\frac{\\text{adjacent}}{\\text{hypotenuse}}$', '$\\frac{\\text{opposite}}{\\text{adjacent}}$', '$\\frac{\\text{hypotenuse}}{\\text{opposite}}$'],
        answerIndex: 0,
        solutionTeX: 'SOH: Sine equals Opposite over Hypotenuse. Lock the mnemonic in and you never have to guess.',
        hints: ['Remember SOH-CAH-TOA.', 'The S stands for Sine and pairs with O over H.']
      },
      {
        promptTeX: 'In a right triangle, which ratio defines $\\cos\\theta$?',
        choices: ['$\\frac{\\text{opposite}}{\\text{hypotenuse}}$', '$\\frac{\\text{adjacent}}{\\text{hypotenuse}}$', '$\\frac{\\text{opposite}}{\\text{adjacent}}$', '$\\frac{\\text{adjacent}}{\\text{opposite}}$'],
        answerIndex: 1,
        solutionTeX: 'CAH: Cosine equals Adjacent over Hypotenuse.',
        hints: ['Remember SOH-CAH-TOA.', 'The C (Cosine) pairs with A over H.']
      },
      {
        promptTeX: 'In a right triangle, which ratio defines $\\tan\\theta$?',
        choices: ['$\\frac{\\text{adjacent}}{\\text{hypotenuse}}$', '$\\frac{\\text{opposite}}{\\text{hypotenuse}}$', '$\\frac{\\text{opposite}}{\\text{adjacent}}$', '$\\frac{\\text{hypotenuse}}{\\text{adjacent}}$'],
        answerIndex: 2,
        solutionTeX: 'TOA: Tangent equals Opposite over Adjacent. It never touches the hypotenuse.',
        hints: ['Remember SOH-CAH-TOA.', 'The T (Tangent) pairs with O over A.']
      },
      {
        promptTeX: 'A right triangle has the side opposite $\\theta$ equal to $3$ and hypotenuse equal to $5$. What is $\\sin\\theta$?',
        choices: ['$\\frac{3}{5}$', '$\\frac{4}{5}$', '$\\frac{3}{4}$', '$\\frac{5}{3}$'],
        answerIndex: 0,
        solutionTeX: 'Sine is opposite over hypotenuse: $\\sin\\theta=\\frac{3}{5}$. The numbers were handed to you — no need to find the third side.',
        hints: ['SOH: opposite over hypotenuse.', 'Opposite is $3$, hypotenuse is $5$.']
      },
      {
        promptTeX: 'A right triangle has the side adjacent to $\\theta$ equal to $4$ and hypotenuse equal to $5$. What is $\\cos\\theta$?',
        choices: ['$\\frac{3}{5}$', '$\\frac{4}{5}$', '$\\frac{4}{3}$', '$\\frac{5}{4}$'],
        answerIndex: 1,
        solutionTeX: 'Cosine is adjacent over hypotenuse: $\\cos\\theta=\\frac{4}{5}$.',
        hints: ['CAH: adjacent over hypotenuse.', 'Adjacent is $4$, hypotenuse is $5$.']
      },
      {
        promptTeX: 'A right triangle has the side opposite $\\theta$ equal to $3$ and the side adjacent to $\\theta$ equal to $4$. What is $\\tan\\theta$?',
        choices: ['$\\frac{4}{3}$', '$\\frac{3}{5}$', '$\\frac{3}{4}$', '$\\frac{4}{5}$'],
        answerIndex: 2,
        solutionTeX: 'Tangent is opposite over adjacent: $\\tan\\theta=\\frac{3}{4}$.',
        hints: ['TOA: opposite over adjacent.', 'Opposite is $3$, adjacent is $4$.']
      },
      {
        promptTeX: 'In a right triangle, the legs are $6$ (opposite $\\theta$) and $8$ (adjacent to $\\theta$), and the hypotenuse is $10$. What is $\\cos\\theta$?',
        choices: ['$\\frac{6}{10}$', '$\\frac{8}{10}$', '$\\frac{6}{8}$', '$\\frac{10}{8}$'],
        answerIndex: 1,
        solutionTeX: 'Cosine is adjacent over hypotenuse: $\\cos\\theta=\\frac{8}{10}=\\frac{4}{5}$.',
        hints: ['CAH: adjacent over hypotenuse.', 'Adjacent is $8$, hypotenuse is $10$.']
      },
      {
        promptTeX: 'Which side of a right triangle is always the longest?',
        choices: ['The opposite side', 'The adjacent side', 'The hypotenuse', 'It depends on the angle'],
        answerIndex: 2,
        solutionTeX: 'The hypotenuse sits across from the right angle and is always the longest side, so sine and cosine of an acute angle are always less than $1$.',
        hints: ['Which side faces the $90^\\circ$ corner?', 'The biggest angle always faces the biggest side.']
      },
      {
        promptTeX: 'A ramp rises $1$ unit for every $2$ units of horizontal run. Treating the horizontal run as adjacent and the rise as opposite, what is $\\tan\\theta$ of the incline?',
        choices: ['$2$', '$\\frac{1}{2}$', '$\\frac{1}{\\sqrt{5}}$', '$\\frac{\\sqrt{5}}{2}$'],
        answerIndex: 1,
        solutionTeX: 'Tangent is opposite (rise $=1$) over adjacent (run $=2$), so $\\tan\\theta=\\frac{1}{2}$. Tangent is literally the slope of the ramp.',
        hints: ['TOA: opposite over adjacent.', 'Rise is $1$, run is $2$.']
      },
      {
        promptTeX: 'For an acute angle $\\theta$ in a right triangle, why must $\\sin\\theta < 1$?',
        choices: ['Because the opposite side is shorter than the hypotenuse', 'Because sine can be negative', 'Because the adjacent side is the longest', 'Because $\\theta$ is less than $90^\\circ$ only by coincidence'],
        answerIndex: 0,
        solutionTeX: 'Sine is opposite over hypotenuse, and the hypotenuse is always the longest side, so the fraction is always less than $1$.',
        hints: ['Compare the opposite side to the hypotenuse.', 'A fraction with a smaller top than bottom is less than $1$.']
      },
      {
        promptTeX: 'A right triangle has the side adjacent to $\\theta$ equal to $5$ and the side opposite $\\theta$ equal to $5$. What is $\\tan\\theta$?',
        choices: ['$0$', '$\\frac{1}{2}$', '$1$', '$\\sqrt{2}$'],
        answerIndex: 2,
        solutionTeX: 'Tangent is opposite over adjacent: $\\frac{5}{5}=1$. Equal legs mean a $45^\\circ$ angle, and indeed $\\tan 45^\\circ=1$.',
        hints: ['TOA: opposite over adjacent.', 'When the two legs match, the ratio is $1$.']
      },
      {
        promptTeX: 'In SOH-CAH-TOA, which two ratios share the hypotenuse in their denominator?',
        choices: ['Sine and tangent', 'Cosine and tangent', 'Sine and cosine', 'All three'],
        answerIndex: 2,
        solutionTeX: 'SOH and CAH both divide by the hypotenuse; only TOA (tangent) uses opposite over adjacent with no hypotenuse.',
        hints: ['Write out all three: O/H, A/H, O/A.', 'Tangent is the odd one out.']
      }
    ]
  },
  {
    id: 'contrapositive-bank',
    name: 'Identify the contrapositive',
    topic: 'Logic & Proof',
    level: 'Intermediate',
    items: [
      {
        promptTeX: 'What is the contrapositive of "If it rains, then the ground is wet"?',
        choices: ['If the ground is wet, then it rains.', 'If the ground is not wet, then it does not rain.', 'If it does not rain, then the ground is not wet.', 'If the ground is wet, then it does not rain.'],
        answerIndex: 1,
        solutionTeX: 'The contrapositive of "if $P$ then $Q$" is "if not $Q$ then not $P$" — negate both parts and flip the order. Choice A is the converse; choice C is the inverse.',
        hints: ['Contrapositive: negate both, then swap them.', 'Start with "If the ground is NOT wet..." and finish with the conclusion.']
      },
      {
        promptTeX: 'What is the contrapositive of "If $n$ is even, then $n^2$ is even"?',
        choices: ['If $n^2$ is even, then $n$ is even.', 'If $n$ is odd, then $n^2$ is odd.', 'If $n^2$ is odd, then $n$ is odd.', 'If $n^2$ is even, then $n$ is odd.'],
        answerIndex: 2,
        solutionTeX: 'Negate both parts and swap: not "$n^2$ even" is "$n^2$ odd", and not "$n$ even" is "$n$ odd", giving "If $n^2$ is odd, then $n$ is odd." Choice B is the inverse.',
        hints: ['The contrapositive of "if $P$ then $Q$" is "if not $Q$ then not $P$".', 'Negate the conclusion first and make it the new hypothesis.']
      },
      {
        promptTeX: 'A theorem says "If a number is divisible by $6$, then it is divisible by $3$." Which statement is its contrapositive?',
        choices: ['If a number is not divisible by $3$, then it is not divisible by $6$.', 'If a number is divisible by $3$, then it is divisible by $6$.', 'If a number is not divisible by $6$, then it is not divisible by $3$.', 'If a number is divisible by $6$, then it is not divisible by $3$.'],
        answerIndex: 0,
        solutionTeX: 'Negate both and flip: "not divisible by $3$" implies "not divisible by $6$." This is true, just like the original — a statement and its contrapositive always share the same truth value.',
        hints: ['Contrapositive: negate both parts and reverse them.', 'The conclusion ("divisible by $3$") becomes the new hypothesis, negated.']
      },
      {
        promptTeX: 'Which of these is logically EQUIVALENT to "If $P$, then $Q$"?',
        choices: ['If $Q$, then $P$ (the converse)', 'If not $P$, then not $Q$ (the inverse)', 'If not $Q$, then not $P$ (the contrapositive)', 'If $P$, then not $Q$'],
        answerIndex: 2,
        solutionTeX: 'Only the contrapositive is logically equivalent to the original conditional. The converse and inverse are NOT equivalent — they can be false even when the original is true.',
        hints: ['Which transformation preserves the truth value?', 'It is the one that negates both parts AND swaps them.']
      },
      {
        promptTeX: 'What is the contrapositive of "If you study, then you pass"?',
        choices: ['If you pass, then you study.', 'If you do not study, then you do not pass.', 'If you do not pass, then you did not study.', 'If you pass, then you did not study.'],
        answerIndex: 2,
        solutionTeX: 'Negate both and swap: "If you do not pass, then you did not study." Choice A is the converse; choice B is the inverse.',
        hints: ['Negate both parts, then reverse the order.', 'Begin with "If you do not pass..."']
      },
      {
        promptTeX: 'The contrapositive of "If a shape is a square, then it has four sides" is:',
        choices: ['If a shape has four sides, then it is a square.', 'If a shape does not have four sides, then it is not a square.', 'If a shape is not a square, then it does not have four sides.', 'If a shape has four sides, then it is not a square.'],
        answerIndex: 1,
        solutionTeX: 'Negate both and flip: "no four sides" implies "not a square." This is true; note the converse (choice A) is false, since rectangles also have four sides.',
        hints: ['Contrapositive: not $Q$ implies not $P$.', 'The "four sides" part, negated, becomes the hypothesis.']
      },
      {
        promptTeX: 'Statement: "If a function is differentiable, then it is continuous." Its contrapositive is:',
        choices: ['If a function is continuous, then it is differentiable.', 'If a function is not differentiable, then it is not continuous.', 'If a function is not continuous, then it is not differentiable.', 'If a function is differentiable, then it is not continuous.'],
        answerIndex: 2,
        solutionTeX: 'Negate both and swap: "not continuous" implies "not differentiable." This is a genuinely useful true statement, while the converse (choice A) is false.',
        hints: ['Contrapositive: negate both parts and reverse them.', 'Start the new statement with "If a function is not continuous..."']
      },
      {
        promptTeX: 'Which transformation gives the CONTRAPOSITIVE, not the converse or inverse?',
        choices: ['Swap hypothesis and conclusion only', 'Negate hypothesis and conclusion only', 'Negate both AND swap them', 'Negate only the conclusion'],
        answerIndex: 2,
        solutionTeX: 'Converse = swap only; inverse = negate only; contrapositive = do both. That double move is exactly why it stays logically equivalent to the original.',
        hints: ['Converse swaps, inverse negates.', 'The contrapositive combines both operations.']
      },
      {
        promptTeX: 'What is the contrapositive of "If $x > 5$, then $x > 2$"?',
        choices: ['If $x > 2$, then $x > 5$.', 'If $x \\le 5$, then $x \\le 2$.', 'If $x \\le 2$, then $x \\le 5$.', 'If $x > 5$, then $x \\le 2$.'],
        answerIndex: 2,
        solutionTeX: 'The negation of "$x>2$" is "$x\\le 2$" and the negation of "$x>5$" is "$x\\le 5$"; swapping gives "If $x\\le 2$, then $x\\le 5$." This is true, matching the true original.',
        hints: ['The negation of "$>$" is "$\\le$", not "$<$".', 'Negate the conclusion to form the new hypothesis, then swap.']
      },
      {
        promptTeX: 'Given "If a creature is a dog, then it is a mammal," which is the contrapositive?',
        choices: ['If a creature is a mammal, then it is a dog.', 'If a creature is not a mammal, then it is not a dog.', 'If a creature is not a dog, then it is not a mammal.', 'If a creature is a dog, then it is not a mammal.'],
        answerIndex: 1,
        solutionTeX: 'Negate both and flip: "not a mammal" implies "not a dog" — clearly true. Choice A, the converse, is false (cats are mammals but not dogs).',
        hints: ['Contrapositive: not $Q$ implies not $P$.', 'Begin with "If a creature is not a mammal..."']
      },
      {
        promptTeX: 'A statement is FALSE. What can you conclude about its contrapositive?',
        choices: ['It must be true.', 'It must be false.', 'It could be either.', 'It has no contrapositive.'],
        answerIndex: 1,
        solutionTeX: 'A conditional and its contrapositive are logically equivalent, so they always share the same truth value. If the original is false, the contrapositive is false too.',
        hints: ['Contrapositive and original always agree in truth value.', 'Equivalent statements rise and fall together.']
      },
      {
        promptTeX: 'What is the contrapositive of "If the alarm sounds, then there is danger"?',
        choices: ['If there is danger, then the alarm sounds.', 'If the alarm does not sound, then there is no danger.', 'If there is no danger, then the alarm does not sound.', 'If there is danger, then the alarm does not sound.'],
        answerIndex: 2,
        solutionTeX: 'Negate both and swap: "If there is no danger, then the alarm does not sound." Choice A is the converse, choice B is the inverse.',
        hints: ['Negate both parts, then reverse the order.', 'Start with "If there is no danger..."']
      }
    ]
  },
  {
    id: 'logic-statements-bank',
    name: 'Converse, inverse, necessary & sufficient',
    topic: 'Logic & Proof',
    level: 'Intermediate',
    items: [
      {
        promptTeX: 'What is the CONVERSE of "If $P$, then $Q$"?',
        choices: ['If $Q$, then $P$.', 'If not $P$, then not $Q$.', 'If not $Q$, then not $P$.', 'If $P$, then not $Q$.'],
        answerIndex: 0,
        solutionTeX: 'The converse swaps hypothesis and conclusion: "If $Q$, then $P$." That is all — no negation involved.',
        hints: ['Converse = swap, no negation.', 'Just flip which part comes first.']
      },
      {
        promptTeX: 'What is the INVERSE of "If $P$, then $Q$"?',
        choices: ['If $Q$, then $P$.', 'If not $P$, then not $Q$.', 'If not $Q$, then not $P$.', 'If $Q$, then not $P$.'],
        answerIndex: 1,
        solutionTeX: 'The inverse negates both parts but keeps the order: "If not $P$, then not $Q$."',
        hints: ['Inverse = negate, no swap.', 'Put a "not" on each part but keep the order.']
      },
      {
        promptTeX: 'In "If $P$, then $Q$," the condition $P$ is ____ for $Q$.',
        choices: ['necessary', 'sufficient', 'both necessary and sufficient', 'neither'],
        answerIndex: 1,
        solutionTeX: 'If $P$ guarantees $Q$, then $P$ is sufficient for $Q$ — having $P$ is enough. (And $Q$ is necessary for $P$.)',
        hints: ['"$P$ is enough to force $Q$" describes sufficiency.', 'The hypothesis is the sufficient one.']
      },
      {
        promptTeX: 'In "If $P$, then $Q$," the condition $Q$ is ____ for $P$.',
        choices: ['sufficient', 'necessary', 'irrelevant', 'both necessary and sufficient'],
        answerIndex: 1,
        solutionTeX: 'Since $P$ cannot happen without $Q$, $Q$ is necessary for $P$ — you cannot have $P$ unless $Q$ also holds.',
        hints: ['"You cannot have $P$ without $Q$" describes necessity.', 'The conclusion is the necessary one.']
      },
      {
        promptTeX: 'What is the negation of "All cats are black"?',
        choices: ['All cats are not black.', 'No cats are black.', 'At least one cat is not black.', 'Some cats are black.'],
        answerIndex: 2,
        solutionTeX: 'The negation of "all are" is "at least one is not." A single non-black cat is enough to break the claim — you do not need every cat to be non-black.',
        hints: ['To break "all," you only need one counterexample.', 'The negation of "for all" is "there exists ... not."']
      },
      {
        promptTeX: 'What is the negation of "Some students passed"?',
        choices: ['Some students failed.', 'No students passed.', 'All students passed.', 'Not all students passed.'],
        answerIndex: 1,
        solutionTeX: 'The negation of "some passed" (at least one) is "none passed" — that is, no students passed.',
        hints: ['The negation of "there exists" is "for all ... not."', '"Some passed" is false exactly when zero passed.']
      },
      {
        promptTeX: '"Being a multiple of $4$ is ____ for being even."',
        choices: ['necessary but not sufficient', 'sufficient but not necessary', 'both necessary and sufficient', 'neither necessary nor sufficient'],
        answerIndex: 1,
        solutionTeX: 'Every multiple of $4$ is even (so it is sufficient), but plenty of even numbers like $6$ are not multiples of $4$ (so it is not necessary).',
        hints: ['Does being a multiple of $4$ guarantee even? Does even guarantee multiple of $4$?', 'Test $6$: even but not a multiple of $4$.']
      },
      {
        promptTeX: 'Which statement is the converse of "If a number is divisible by $10$, then it ends in $0$"?',
        choices: ['If a number ends in $0$, then it is divisible by $10$.', 'If a number does not end in $0$, then it is not divisible by $10$.', 'If a number is not divisible by $10$, then it does not end in $0$.', 'If a number is divisible by $10$, then it does not end in $0$.'],
        answerIndex: 0,
        solutionTeX: 'The converse swaps the two parts: "If it ends in $0$, then it is divisible by $10$." (Here it happens to be true, but converses are not guaranteed to be.)',
        hints: ['Converse = swap hypothesis and conclusion.', 'Put "ends in $0$" first.']
      },
      {
        promptTeX: '"A polygon is a square if and only if it is a rectangle with four equal sides." The phrase "if and only if" means each condition is:',
        choices: ['only necessary', 'only sufficient', 'both necessary and sufficient', 'neither'],
        answerIndex: 2,
        solutionTeX: '"If and only if" asserts the conditional both ways, so each side is both necessary and sufficient for the other — they are logically equivalent.',
        hints: ['"If and only if" packs two implications into one.', 'Both directions hold, so both roles apply.']
      },
      {
        promptTeX: 'What is the negation of "Every prime greater than $2$ is odd"?',
        choices: ['Every prime greater than $2$ is even.', 'There is a prime greater than $2$ that is not odd.', 'No prime greater than $2$ is odd.', 'Some prime greater than $2$ is odd.'],
        answerIndex: 1,
        solutionTeX: 'The negation of "every ... is odd" is "there exists one that is not odd." (The original is actually true, so this negation is false — but it is still the correct negation.)',
        hints: ['Negate "for all" into "there exists ... not."', 'One counterexample is all it takes.']
      },
      {
        promptTeX: 'If a statement is true but its converse is false, what does that tell you?',
        choices: ['The hypothesis is necessary for the conclusion.', 'The hypothesis is sufficient but not necessary for the conclusion.', 'The two conditions are equivalent.', 'The statement must be false.'],
        answerIndex: 1,
        solutionTeX: 'A true conditional with a false converse means the hypothesis guarantees the conclusion (sufficient) but the conclusion can occur without it (not necessary).',
        hints: ['A true converse would mean the conditions go both ways (equivalent).', 'A false converse breaks the "necessary" direction.']
      },
      {
        promptTeX: 'Which pair of statements is always logically equivalent?',
        choices: ['A statement and its converse', 'A statement and its inverse', 'A statement and its contrapositive', 'The converse and the inverse only by coincidence'],
        answerIndex: 2,
        solutionTeX: 'A statement and its contrapositive always share the same truth value. (As a bonus, the converse and inverse are also equivalent to each other, since each is the other\'s contrapositive.)',
        hints: ['Which transformation negates AND swaps?', 'That double move preserves truth.']
      }
    ]
  },
  {
    id: 'probability-bank',
    name: 'Simple probability',
    topic: 'Probability',
    level: 'Beginner',
    items: [
      {
        promptTeX: 'You roll one fair six-sided die. What is the probability of rolling an even number?',
        choices: ['$\\frac{1}{6}$', '$\\frac{1}{3}$', '$\\frac{1}{2}$', '$\\frac{2}{3}$'],
        answerIndex: 2,
        solutionTeX: 'The even faces are $2,4,6$ — that is $3$ of the $6$ equally likely outcomes, so $\\frac{3}{6}=\\frac{1}{2}$.',
        hints: ['Count the even faces: $2, 4, 6$.', 'Favorable outcomes over total outcomes.']
      },
      {
        promptTeX: 'You flip one fair coin. What is the probability of getting heads?',
        choices: ['$0$', '$\\frac{1}{4}$', '$\\frac{1}{2}$', '$1$'],
        answerIndex: 2,
        solutionTeX: 'There are two equally likely outcomes, heads and tails, so heads has probability $\\frac{1}{2}$.',
        hints: ['How many sides does a coin have?', 'One favorable outcome out of two.']
      },
      {
        promptTeX: 'You roll one fair six-sided die. What is the probability of rolling a $4$?',
        choices: ['$\\frac{1}{6}$', '$\\frac{1}{4}$', '$\\frac{1}{3}$', '$\\frac{1}{2}$'],
        answerIndex: 0,
        solutionTeX: 'Exactly one face shows $4$ out of six equally likely faces, so the probability is $\\frac{1}{6}$.',
        hints: ['How many faces show a $4$?', 'One favorable outcome over six total.']
      },
      {
        promptTeX: 'You draw one card from a standard $52$-card deck. What is the probability it is red?',
        choices: ['$\\frac{1}{4}$', '$\\frac{1}{2}$', '$\\frac{13}{52}$', '$\\frac{1}{13}$'],
        answerIndex: 1,
        solutionTeX: 'Half the deck is red (hearts and diamonds), $26$ of $52$ cards, so $\\frac{26}{52}=\\frac{1}{2}$.',
        hints: ['Two of the four suits are red.', '$26$ red cards out of $52$.']
      },
      {
        promptTeX: 'You roll one fair six-sided die. What is the probability of rolling a number greater than $4$?',
        choices: ['$\\frac{1}{6}$', '$\\frac{1}{3}$', '$\\frac{1}{2}$', '$\\frac{2}{3}$'],
        answerIndex: 1,
        solutionTeX: 'Greater than $4$ means $5$ or $6$ — two outcomes out of six, so $\\frac{2}{6}=\\frac{1}{3}$. Watch the wording: "greater than $4$" does not include $4$.',
        hints: ['Which faces are strictly greater than $4$?', 'That is $5$ and $6$ — two faces.']
      },
      {
        promptTeX: 'You draw one card from a standard $52$-card deck. What is the probability it is a heart?',
        choices: ['$\\frac{1}{2}$', '$\\frac{1}{4}$', '$\\frac{1}{13}$', '$\\frac{4}{52}$'],
        answerIndex: 1,
        solutionTeX: 'There are $13$ hearts out of $52$ cards, so $\\frac{13}{52}=\\frac{1}{4}$.',
        hints: ['How many hearts are in a deck?', '$13$ of one suit out of $52$.']
      },
      {
        promptTeX: 'You roll one fair six-sided die. What is the probability of rolling a $7$?',
        choices: ['$0$', '$\\frac{1}{6}$', '$\\frac{1}{7}$', '$1$'],
        answerIndex: 0,
        solutionTeX: 'A six-sided die has no $7$, so the event is impossible: probability $0$. An impossible event always has probability $0$.',
        hints: ['Can a die even show a $7$?', 'Impossible events have probability $0$.']
      },
      {
        promptTeX: 'You draw one card from a standard $52$-card deck. What is the probability it is an ace?',
        choices: ['$\\frac{1}{52}$', '$\\frac{1}{13}$', '$\\frac{1}{4}$', '$\\frac{4}{13}$'],
        answerIndex: 1,
        solutionTeX: 'There are $4$ aces out of $52$ cards, so $\\frac{4}{52}=\\frac{1}{13}$.',
        hints: ['How many aces are in a deck?', '$4$ aces out of $52$, then simplify.']
      },
      {
        promptTeX: 'The probability that it rains tomorrow is $0.3$. What is the probability that it does NOT rain?',
        choices: ['$0.3$', '$0.5$', '$0.7$', '$1.3$'],
        answerIndex: 2,
        solutionTeX: 'The probability of an event and its complement add to $1$, so $1-0.3=0.7$.',
        hints: ['All probabilities for an event and its opposite sum to $1$.', 'Subtract from $1$.']
      },
      {
        promptTeX: 'You roll one fair six-sided die. What is the probability of rolling a number from $1$ to $6$?',
        choices: ['$\\frac{1}{6}$', '$\\frac{1}{2}$', '$\\frac{5}{6}$', '$1$'],
        answerIndex: 3,
        solutionTeX: 'Every possible roll lands between $1$ and $6$, so the event is certain: probability $1$. A certain event always has probability $1$.',
        hints: ['Is there any roll that is NOT between $1$ and $6$?', 'Certain events have probability $1$.']
      },
      {
        promptTeX: 'A bag holds $3$ red marbles and $2$ blue marbles. You draw one at random. What is the probability it is red?',
        choices: ['$\\frac{2}{5}$', '$\\frac{3}{5}$', '$\\frac{1}{2}$', '$\\frac{3}{2}$'],
        answerIndex: 1,
        solutionTeX: 'There are $3$ red out of $5$ total marbles, so $\\frac{3}{5}$.',
        hints: ['Total marbles: $3+2=5$.', 'Red marbles over total marbles.']
      },
      {
        promptTeX: 'You flip a fair coin twice. What is the probability of getting two heads?',
        choices: ['$\\frac{1}{2}$', '$\\frac{1}{4}$', '$\\frac{1}{3}$', '$\\frac{3}{4}$'],
        answerIndex: 1,
        solutionTeX: 'The four equally likely outcomes are HH, HT, TH, TT; only HH is two heads, so $\\frac{1}{4}$. Equivalently, $\\frac{1}{2}\\times\\frac{1}{2}=\\frac{1}{4}$.',
        hints: ['List all outcomes of two flips: there are four.', 'For independent events, multiply the probabilities.']
      }
    ]
  },
  {
    id: 'polya-puzzles-bank',
    name: 'Polya reasoning puzzles',
    topic: 'Problem Solving',
    level: 'Intermediate',
    items: [
      {
        promptTeX: 'I think of a number, multiply it by $3$, then add $4$, and get $19$. What was my number? (Work backwards.)',
        choices: ['$3$', '$5$', '$7$', '$15$'],
        answerIndex: 1,
        solutionTeX: 'Undo the steps in reverse: $19-4=15$, then $15\\div 3=5$. Working backwards turns a puzzle into plain arithmetic.',
        hints: ['Reverse the operations: subtract before you divide.', 'Start from $19$ and peel off the "+4" first.']
      },
      {
        promptTeX: 'Each handshake involves two people. If $4$ people all shake hands once with each other, how many handshakes occur? (Try a smaller case.)',
        choices: ['$4$', '$6$', '$8$', '$12$'],
        answerIndex: 1,
        solutionTeX: 'Each of $4$ people shakes $3$ others\' hands, giving $4\\times 3=12$, but each handshake is counted twice, so $\\frac{12}{2}=6$.',
        hints: ['Try $3$ people first, then look for the pattern.', 'Count each handshake once, not once per person.']
      },
      {
        promptTeX: 'What is the sum $1+2+3+\\cdots+10$? (Look for a clever pairing.)',
        choices: ['$45$', '$50$', '$55$', '$100$'],
        answerIndex: 2,
        solutionTeX: 'Pair the ends: $1+10=11$, $2+9=11$, and so on — five pairs of $11$ give $55$. That is the young Gauss trick.',
        hints: ['Pair the first and last terms.', 'How many pairs are there, and what does each sum to?']
      },
      {
        promptTeX: 'A snail climbs a $5$-foot wall: each day it climbs $3$ feet, each night it slips back $2$ feet. On which day does it reach the top? (Watch the last day.)',
        choices: ['Day $2$', 'Day $3$', 'Day $4$', 'Day $5$'],
        answerIndex: 1,
        solutionTeX: 'Net gain is $1$ ft/day, but on day $3$ the snail starts at $2$ ft and climbs to $5$ ft — it reaches the top before the nightly slip. The final day is the trap most people miss.',
        hints: ['Track the height at the END of each day.', 'On the day it tops out, the night slip never happens.']
      },
      {
        promptTeX: 'Find the next number: $2, 6, 12, 20, 30, \\ldots$ (Look at the gaps.)',
        choices: ['$36$', '$40$', '$42$', '$50$'],
        answerIndex: 2,
        solutionTeX: 'The differences are $4, 6, 8, 10$, so the next gap is $12$: $30+12=42$. (These are $n(n+1)$.)',
        hints: ['Subtract consecutive terms to find the pattern.', 'The gaps grow by $2$ each time.']
      },
      {
        promptTeX: 'If $5$ machines make $5$ widgets in $5$ minutes, how long do $100$ machines take to make $100$ widgets? (Find the rate.)',
        choices: ['$5$ minutes', '$20$ minutes', '$100$ minutes', '$500$ minutes'],
        answerIndex: 0,
        solutionTeX: 'One machine makes one widget in $5$ minutes. With $100$ machines working in parallel, $100$ widgets still take just $5$ minutes.',
        hints: ['Find how long ONE machine takes for ONE widget.', 'More machines work at the same time, not in sequence.']
      },
      {
        promptTeX: 'A number doubles every step: $1, 2, 4, 8, \\ldots$. What is the $7$th term? (Build up step by step.)',
        choices: ['$32$', '$64$', '$128$', '$256$'],
        answerIndex: 1,
        solutionTeX: 'The terms are $2^{0},2^{1},\\ldots$, so the $7$th term is $2^{6}=64$. Counting carefully from the first term is what trips people up.',
        hints: ['The first term is $2^0=1$.', 'The $n$th term is $2^{n-1}$.']
      },
      {
        promptTeX: 'Two numbers add to $10$ and multiply to $21$. What are they? (Guess-and-check small cases.)',
        choices: ['$4$ and $6$', '$3$ and $7$', '$2$ and $8$', '$5$ and $5$'],
        answerIndex: 1,
        solutionTeX: 'Test pairs that sum to $10$: $3+7=10$ and $3\\times 7=21$. Done.',
        hints: ['List pairs that add to $10$, then check the products.', 'Look for the pair whose product is $21$.']
      },
      {
        promptTeX: 'How many squares are on a standard $8\\times 8$ chessboard, counting all sizes? (Try a $2\\times 2$ board first.)',
        choices: ['$64$', '$128$', '$204$', '$256$'],
        answerIndex: 2,
        solutionTeX: 'Sum the squares of each size: $1^2+2^2+\\cdots+8^2=204$. Starting with a $2\\times 2$ board ($4+1=5$) reveals the pattern.',
        hints: ['There are $8^2$ tiny squares, but also $7^2$ of the next size, and so on.', 'Add $1^2+2^2+\\cdots+8^2$.']
      },
      {
        promptTeX: 'I am thinking of a two-digit number. Reverse its digits and the new number is $9$ more than the original. The digits add to $7$. What is the number? (Work backwards from the clues.)',
        choices: ['$25$', '$34$', '$43$', '$16$'],
        answerIndex: 1,
        solutionTeX: 'Reversing increases the number, so the units digit beats the tens digit by $1$ (a reversal changes the value by $9$ per unit of digit difference). With digits summing to $7$, that is $3$ and $4$, giving $34$ (and $43=34+9$).',
        hints: ['A digit reversal changes the value by $9$ times the digit difference.', 'Which pair of digits sums to $7$ and differs by exactly $1$?']
      },
      {
        promptTeX: 'A frog is at the bottom of a well and jumps to lily pads numbered $1, 3, 6, 10, 15, \\ldots$ (triangular numbers). What is the $6$th number in this list? (Find the pattern in the gaps.)',
        choices: ['$18$', '$20$', '$21$', '$25$'],
        answerIndex: 2,
        solutionTeX: 'The gaps are $2, 3, 4, 5$, so the next gap is $6$: $15+6=21$. These are the triangular numbers $\\frac{n(n+1)}{2}$.',
        hints: ['Subtract consecutive terms to see the gaps.', 'Each gap is one bigger than the last.']
      },
      {
        promptTeX: 'You have a balance scale and $3$ coins; one is heavier. What is the minimum number of weighings that GUARANTEES finding the heavy one? (Think about what one weighing tells you.)',
        choices: ['$1$', '$2$', '$3$', 'You cannot guarantee it'],
        answerIndex: 0,
        solutionTeX: 'Weigh coin $1$ against coin $2$. If they balance, coin $3$ is heavy; otherwise the heavier pan reveals it. One weighing always suffices.',
        hints: ['A balance scale gives three results: left heavy, right heavy, or equal.', 'Leave one coin off the scale.']
      }
    ]
  },
  {
    id: 'divisibility-bank',
    name: 'Divisibility rules',
    topic: 'Arithmetic',
    level: 'Beginner',
    items: [
      {
        promptTeX: 'Which number is divisible by $3$?',
        choices: ['$124$', '$125$', '$126$', '$128$'],
        answerIndex: 2,
        solutionTeX: 'A number is divisible by $3$ when its digits sum to a multiple of $3$. For $126$: $1+2+6=9$, which is divisible by $3$.',
        hints: ['Add up the digits.', 'Check whether that digit sum is a multiple of $3$.']
      },
      {
        promptTeX: 'Which number is divisible by $4$?',
        choices: ['$114$', '$116$', '$118$', '$122$'],
        answerIndex: 1,
        solutionTeX: 'A number is divisible by $4$ when its last two digits form a multiple of $4$. Here $16$ is divisible by $4$, so $116$ is.',
        hints: ['Only the last two digits matter for divisibility by $4$.', 'Is $16$ a multiple of $4$?']
      },
      {
        promptTeX: 'Which number is divisible by $9$?',
        choices: ['$234$', '$235$', '$236$', '$238$'],
        answerIndex: 0,
        solutionTeX: 'A number is divisible by $9$ when its digits sum to a multiple of $9$. For $234$: $2+3+4=9$.',
        hints: ['Add the digits.', 'Check whether the sum is a multiple of $9$.']
      },
      {
        promptTeX: 'Which number is divisible by $11$?',
        choices: ['$121$', '$131$', '$141$', '$151$'],
        answerIndex: 0,
        solutionTeX: 'For divisibility by $11$, take the alternating digit sum. For $121$: $1-2+1=0$, and $0$ is a multiple of $11$. (Also $11\\times 11=121$.)',
        hints: ['Alternately add and subtract the digits.', 'If that result is $0$ or a multiple of $11$, it works.']
      },
      {
        promptTeX: 'Which number is divisible by $3$?',
        choices: ['$401$', '$402$', '$404$', '$407$'],
        answerIndex: 1,
        solutionTeX: 'For $402$: $4+0+2=6$, which is divisible by $3$. The others have digit sums $5, 8, 11$ — none divisible by $3$.',
        hints: ['Sum the digits of each.', 'Look for the digit sum that is a multiple of $3$.']
      },
      {
        promptTeX: 'Which number is divisible by $4$?',
        choices: ['$530$', '$532$', '$534$', '$538$'],
        answerIndex: 1,
        solutionTeX: 'Check the last two digits: $32$ is divisible by $4$, so $532$ is. The others end in $30, 34, 38$, none of which are multiples of $4$.',
        hints: ['Look only at the last two digits.', 'Is $32$ a multiple of $4$?']
      },
      {
        promptTeX: 'Which number is divisible by $9$?',
        choices: ['$522$', '$523$', '$524$', '$526$'],
        answerIndex: 0,
        solutionTeX: 'For $522$: $5+2+2=9$, divisible by $9$. The other digit sums are $10, 11, 13$.',
        hints: ['Add the digits.', 'Is the sum a multiple of $9$?']
      },
      {
        promptTeX: 'Which number is divisible by $11$?',
        choices: ['$253$', '$254$', '$255$', '$256$'],
        answerIndex: 0,
        solutionTeX: 'Alternating sum for $253$: $2-5+3=0$, a multiple of $11$ (indeed $11\\times 23=253$).',
        hints: ['Alternate adding and subtracting the digits.', 'A result of $0$ means yes.']
      },
      {
        promptTeX: 'What is the divisibility rule for $3$?',
        choices: ['The last digit is $0, 3, 6,$ or $9$.', 'The sum of the digits is divisible by $3$.', 'The last two digits are divisible by $3$.', 'The number is odd.'],
        answerIndex: 1,
        solutionTeX: 'The rule for $3$ is about the digit sum: if the digits add to a multiple of $3$, the whole number is divisible by $3$.',
        hints: ['The rule for $3$ involves adding digits.', 'It is not about the last digit alone.']
      },
      {
        promptTeX: 'Which number is divisible by BOTH $3$ and $4$ (hence by $12$)?',
        choices: ['$120$', '$124$', '$130$', '$134$'],
        answerIndex: 0,
        solutionTeX: 'For $120$: digits sum to $1+2+0=3$ (divisible by $3$) and the last two digits $20$ are divisible by $4$, so $120$ passes both — and $120=12\\times 10$.',
        hints: ['Apply the $3$ rule (digit sum) and the $4$ rule (last two digits).', 'A number divisible by both $3$ and $4$ is divisible by $12$.']
      },
      {
        promptTeX: 'Which number is divisible by $9$?',
        choices: ['$108$', '$110$', '$112$', '$115$'],
        answerIndex: 0,
        solutionTeX: 'For $108$: $1+0+8=9$, divisible by $9$ (and $9\\times 12=108$).',
        hints: ['Add the digits.', 'Is the sum a multiple of $9$?']
      },
      {
        promptTeX: 'A number is divisible by $9$. What can you also conclude?',
        choices: ['It is divisible by $3$.', 'It is even.', 'It ends in $9$.', 'It is divisible by $11$.'],
        answerIndex: 0,
        solutionTeX: 'Since $9=3\\times 3$, every multiple of $9$ is also a multiple of $3$. (The reverse is not true: $6$ is divisible by $3$ but not $9$.)',
        hints: ['What are the factors of $9$?', 'If $9$ divides it, so does any factor of $9$.']
      }
    ]
  },
  {
    id: 'function-reading-bank',
    name: 'Reading functions and graphs',
    topic: 'Algebra',
    level: 'Intermediate',
    items: [
      {
        promptTeX: 'For the function $f(x)=2x+1$, what is $f(2)$?',
        choices: ['$3$', '$4$', '$5$', '$6$'],
        answerIndex: 2,
        solutionTeX: 'Substitute $x=2$: $f(2)=2(2)+1=5$.',
        hints: ['Replace every $x$ with $2$.', 'Multiply first, then add.']
      },
      {
        promptTeX: 'A line has equation $y=-3x+7$. What is the sign of its slope?',
        choices: ['Positive', 'Negative', 'Zero', 'Undefined'],
        answerIndex: 1,
        solutionTeX: 'The slope is the coefficient of $x$, here $-3$, which is negative — the line falls as you move right.',
        hints: ['Slope is the number multiplying $x$.', 'A line that goes downhill left-to-right has negative slope.']
      },
      {
        promptTeX: 'For the line $y=4x-1$, as $x$ increases, the function is:',
        choices: ['increasing', 'decreasing', 'constant', 'first up then down'],
        answerIndex: 0,
        solutionTeX: 'The slope $4$ is positive, so $y$ rises as $x$ rises — the function is increasing everywhere.',
        hints: ['Look at the sign of the slope.', 'Positive slope means the graph climbs.']
      },
      {
        promptTeX: 'What is the domain of $f(x)=\\frac{1}{x}$?',
        choices: ['All real numbers', 'All real numbers except $0$', 'Only positive numbers', 'All real numbers except $1$'],
        answerIndex: 1,
        solutionTeX: 'Division by zero is undefined, so $x=0$ must be excluded; every other real number is allowed.',
        hints: ['Where would the denominator be zero?', 'You cannot divide by $0$.']
      },
      {
        promptTeX: 'A parabola opens upward and its lowest point (vertex) is at $(0,-4)$. Where does the function reach its minimum value?',
        choices: ['At $x=-4$', 'At $x=0$', 'At $x=4$', 'It has no minimum'],
        answerIndex: 1,
        solutionTeX: 'For an upward parabola the vertex is the minimum, and the vertex is at $x=0$. The minimum VALUE there is $-4$, but the minimum occurs at $x=0$.',
        hints: ['An upward parabola has its lowest point at the vertex.', 'The vertex here is at $x=0$.']
      },
      {
        promptTeX: 'For $f(x)=x^2$, compare $f(3)$ and $f(-3)$.',
        choices: ['$f(3)$ is larger', '$f(-3)$ is larger', 'They are equal', 'It is impossible to tell'],
        answerIndex: 2,
        solutionTeX: 'Squaring removes the sign: $f(3)=9$ and $f(-3)=9$, so they are equal. That symmetry is why $x^2$ is an even function.',
        hints: ['Compute both: $3^2$ and $(-3)^2$.', 'Squaring a negative gives a positive.']
      },
      {
        promptTeX: 'A line passes through $(0,5)$ and has slope $0$. What kind of line is it?',
        choices: ['A vertical line', 'A horizontal line at $y=5$', 'A line through the origin', 'A steep upward line'],
        answerIndex: 1,
        solutionTeX: 'Zero slope means no rise as $x$ changes, so the line is horizontal; passing through $(0,5)$ makes it $y=5$.',
        hints: ['Slope $0$ means the height never changes.', 'A flat line at height $5$.']
      },
      {
        promptTeX: 'For $f(x)=2x+1$, which is true?',
        choices: ['$f(0)=0$', '$f(0)=1$', '$f(0)=2$', '$f(0)$ is undefined'],
        answerIndex: 1,
        solutionTeX: 'Plug in $x=0$: $f(0)=2(0)+1=1$. This is the $y$-intercept of the line.',
        hints: ['Substitute $x=0$.', 'The constant term is the value at $x=0$.']
      },
      {
        promptTeX: 'A graph of $y=f(x)$ rises from left to right, then levels off flat. On the flat part the function is:',
        choices: ['increasing', 'decreasing', 'constant', 'negative'],
        answerIndex: 2,
        solutionTeX: 'A flat (horizontal) section means the output is not changing, so the function is constant there.',
        hints: ['What does a horizontal piece of a graph mean about the output?', 'No change in height = constant.']
      },
      {
        promptTeX: 'Line A has slope $2$ and line B has slope $5$. Which line is steeper?',
        choices: ['Line A', 'Line B', 'They are equally steep', 'Cannot be determined'],
        answerIndex: 1,
        solutionTeX: 'Steepness is the magnitude of the slope; $5 > 2$, so line B rises faster and is steeper.',
        hints: ['Bigger slope magnitude means steeper.', 'Compare $2$ and $5$.']
      },
      {
        promptTeX: 'For the function $f(x)=10-x$, as $x$ increases, $f(x)$:',
        choices: ['increases', 'decreases', 'stays the same', 'increases then decreases'],
        answerIndex: 1,
        solutionTeX: 'Rewriting as $f(x)=-x+10$ shows the slope is $-1$, which is negative, so $f$ decreases as $x$ grows.',
        hints: ['Find the coefficient of $x$.', 'A negative slope means the output drops.']
      },
      {
        promptTeX: 'What is the domain of $f(x)=\\sqrt{x}$ (real values only)?',
        choices: ['All real numbers', 'Only $x \\ge 0$', 'Only $x > 0$', 'Only $x \\le 0$'],
        answerIndex: 1,
        solutionTeX: 'The square root of a negative number is not real, so the domain is $x\\ge 0$. Note $\\sqrt{0}=0$ is allowed, so we include $0$.',
        hints: ['When is a square root not a real number?', 'Zero has a real square root, so include it.']
      }
    ]
  },
  {
    id: 'order-ops-concept-bank',
    name: 'PEMDAS pitfalls',
    topic: 'Arithmetic',
    level: 'Beginner',
    items: [
      {
        promptTeX: 'Evaluate $2+3\\times 4$.',
        choices: ['$14$', '$20$', '$24$', '$9$'],
        answerIndex: 0,
        solutionTeX: 'Multiplication comes before addition: $3\\times 4=12$, then $2+12=14$. Doing it left-to-right would wrongly give $20$.',
        hints: ['Do multiplication before addition.', 'Compute $3\\times 4$ first.']
      },
      {
        promptTeX: 'Evaluate $(2+3)\\times 4$.',
        choices: ['$14$', '$20$', '$24$', '$9$'],
        answerIndex: 1,
        solutionTeX: 'Parentheses come first: $2+3=5$, then $5\\times 4=20$. The brackets override the usual multiply-first rule.',
        hints: ['Always handle parentheses first.', 'Compute $2+3$ before multiplying.']
      },
      {
        promptTeX: 'Evaluate $10-2\\times 3$.',
        choices: ['$24$', '$4$', '$6$', '$8$'],
        answerIndex: 1,
        solutionTeX: 'Multiply first: $2\\times 3=6$, then $10-6=4$.',
        hints: ['Multiplication before subtraction.', 'Compute $2\\times 3$ first.']
      },
      {
        promptTeX: 'Evaluate $2^3+1$.',
        choices: ['$7$', '$9$', '$12$', '$16$'],
        answerIndex: 1,
        solutionTeX: 'Exponents come before addition: $2^3=8$, then $8+1=9$.',
        hints: ['Handle the exponent first.', '$2^3$ means $2\\times 2\\times 2$.']
      },
      {
        promptTeX: 'Evaluate $12\\div 2\\times 3$.',
        choices: ['$2$', '$18$', '$8$', '$72$'],
        answerIndex: 1,
        solutionTeX: 'Multiplication and division have equal priority, so go left to right: $12\\div 2=6$, then $6\\times 3=18$.',
        hints: ['Division and multiplication tie — work left to right.', 'Do $12\\div 2$ first.']
      },
      {
        promptTeX: 'Evaluate $6+4\\div 2$.',
        choices: ['$5$', '$8$', '$10$', '$2$'],
        answerIndex: 1,
        solutionTeX: 'Division before addition: $4\\div 2=2$, then $6+2=8$.',
        hints: ['Division comes before addition.', 'Compute $4\\div 2$ first.']
      },
      {
        promptTeX: 'Why do we agree that $2+3\\times 4$ equals $14$ and not $20$?',
        choices: ['Because we always read left to right', 'Because multiplication is a convention given higher priority than addition', 'Because $20$ is too large', 'Because addition is undefined here'],
        answerIndex: 1,
        solutionTeX: 'Order of operations is a shared convention that ranks multiplication above addition, so everyone gets the same answer. It is an agreement, not a law of nature — but a very useful one.',
        hints: ['The order of operations is a rule everyone agrees to use.', 'It exists so one expression has one meaning.']
      },
      {
        promptTeX: 'Evaluate $20-3\\times 2+1$.',
        choices: ['$15$', '$35$', '$33$', '$13$'],
        answerIndex: 0,
        solutionTeX: 'Multiply first: $3\\times 2=6$. Then add and subtract left to right: $20-6=14$, then $14+1=15$.',
        hints: ['Do the multiplication before adding or subtracting.', 'After that, work left to right.']
      },
      {
        promptTeX: 'Evaluate $2\\times(3+4)^2$.',
        choices: ['$50$', '$98$', '$196$', '$100$'],
        answerIndex: 1,
        solutionTeX: 'Parentheses first: $3+4=7$. Then the exponent: $7^2=49$. Finally multiply: $2\\times 49=98$.',
        hints: ['Parentheses, then exponent, then multiply.', '$(3+4)^2=7^2=49$.']
      },
      {
        promptTeX: 'In the expression $8-3-2$, what is the correct value?',
        choices: ['$3$', '$7$', '$-3$', '$13$'],
        answerIndex: 0,
        solutionTeX: 'Subtraction is done left to right: $8-3=5$, then $5-2=3$. Grouping the last two as $3-2$ first would wrongly give $7$.',
        hints: ['Subtraction is left-associative — go left to right.', 'Do $8-3$ before subtracting $2$.']
      },
      {
        promptTeX: 'Evaluate $1+2\\times 3-4$.',
        choices: ['$5$', '$3$', '$9$', '$-3$'],
        answerIndex: 1,
        solutionTeX: 'Multiply first: $2\\times 3=6$. Then left to right: $1+6=7$, then $7-4=3$.',
        hints: ['Handle the multiplication first.', 'Then add and subtract from left to right.']
      },
      {
        promptTeX: 'Evaluate $\\frac{12}{2+1}$.',
        choices: ['$7$', '$4$', '$6.5$', '$13$'],
        answerIndex: 1,
        solutionTeX: 'A fraction bar groups everything below it, so evaluate the denominator first: $2+1=3$, then $12\\div 3=4$.',
        hints: ['The fraction bar acts like parentheses around the bottom.', 'Add $2+1$ before dividing.']
      }
    ]
  },
  {
    id: 'fraction-concept-bank',
    name: 'Fraction concepts',
    topic: 'Fractions',
    level: 'Beginner',
    items: [
      {
        promptTeX: 'Which fraction is larger, $\\frac{1}{2}$ or $\\frac{1}{3}$?',
        choices: ['$\\frac{1}{2}$', '$\\frac{1}{3}$', 'They are equal', 'It depends'],
        answerIndex: 0,
        solutionTeX: 'With the same numerator, more pieces ($3$) means each piece is smaller, so $\\frac{1}{2}>\\frac{1}{3}$. Cutting a pizza into fewer slices makes each slice bigger.',
        hints: ['Same top, bigger bottom means smaller pieces.', 'Think of slices of one pizza.']
      },
      {
        promptTeX: 'Which fraction is equivalent to $\\frac{1}{2}$?',
        choices: ['$\\frac{2}{3}$', '$\\frac{3}{6}$', '$\\frac{2}{5}$', '$\\frac{3}{4}$'],
        answerIndex: 1,
        solutionTeX: '$\\frac{3}{6}$ simplifies to $\\frac{1}{2}$ (divide top and bottom by $3$). Multiplying or dividing top and bottom by the same number never changes a fraction\'s value.',
        hints: ['Simplify each option.', 'Does the top divide into the bottom exactly twice?']
      },
      {
        promptTeX: 'Dividing by a fraction is the same as:',
        choices: ['multiplying by the same fraction', 'multiplying by its reciprocal (flip it)', 'adding its reciprocal', 'subtracting it'],
        answerIndex: 1,
        solutionTeX: '"Invert and multiply": dividing by $\\frac{a}{b}$ equals multiplying by $\\frac{b}{a}$. Dividing asks "how many of these fit?", and flipping answers that.',
        hints: ['The trick is called "invert and multiply".', 'Flip the second fraction, then multiply.']
      },
      {
        promptTeX: 'What does "invert and multiply" do? It turns $\\frac{2}{3}\\div\\frac{4}{5}$ into:',
        choices: ['$\\frac{2}{3}\\times\\frac{4}{5}$', '$\\frac{2}{3}\\times\\frac{5}{4}$', '$\\frac{3}{2}\\times\\frac{4}{5}$', '$\\frac{3}{2}\\times\\frac{5}{4}$'],
        answerIndex: 1,
        solutionTeX: 'You flip the divisor (the second fraction) and multiply: $\\frac{2}{3}\\times\\frac{5}{4}$. Only the fraction you are dividing BY gets inverted.',
        hints: ['Flip only the second fraction.', 'Keep the first fraction as is.']
      },
      {
        promptTeX: 'Which fraction is larger, $\\frac{3}{4}$ or $\\frac{2}{3}$?',
        choices: ['$\\frac{3}{4}$', '$\\frac{2}{3}$', 'They are equal', 'Cannot compare'],
        answerIndex: 0,
        solutionTeX: 'Cross-multiply: $3\\times 3=9$ versus $2\\times 4=8$. Since $9>8$, $\\frac{3}{4}>\\frac{2}{3}$.',
        hints: ['Try a common denominator of $12$: $\\frac{9}{12}$ vs $\\frac{8}{12}$.', 'Or cross-multiply and compare.']
      },
      {
        promptTeX: 'What is $\\frac{4}{8}$ in simplest form?',
        choices: ['$\\frac{1}{2}$', '$\\frac{2}{3}$', '$\\frac{1}{4}$', '$\\frac{4}{8}$'],
        answerIndex: 0,
        solutionTeX: 'Divide top and bottom by their greatest common factor, $4$: $\\frac{4}{8}=\\frac{1}{2}$.',
        hints: ['Find a number that divides both $4$ and $8$.', 'Both are divisible by $4$.']
      },
      {
        promptTeX: 'A fraction equals $1$ exactly when:',
        choices: ['the numerator is larger than the denominator', 'the numerator equals the denominator', 'the denominator is $1$', 'the numerator is $0$'],
        answerIndex: 1,
        solutionTeX: 'When top and bottom are equal, like $\\frac{5}{5}$, you have all the parts of one whole, which equals $1$.',
        hints: ['When does a fraction represent one whole?', 'Think $\\frac{5}{5}$ or $\\frac{7}{7}$.']
      },
      {
        promptTeX: 'Which is larger, $\\frac{5}{8}$ or $\\frac{1}{2}$?',
        choices: ['$\\frac{5}{8}$', '$\\frac{1}{2}$', 'They are equal', 'Cannot tell'],
        answerIndex: 0,
        solutionTeX: 'Write $\\frac{1}{2}=\\frac{4}{8}$. Since $\\frac{5}{8}>\\frac{4}{8}$, the fraction $\\frac{5}{8}$ is larger.',
        hints: ['Rewrite $\\frac{1}{2}$ with denominator $8$.', 'Compare $\\frac{5}{8}$ to $\\frac{4}{8}$.']
      },
      {
        promptTeX: 'A fraction whose value is greater than $1$ must have:',
        choices: ['a numerator smaller than the denominator', 'a numerator equal to the denominator', 'a numerator larger than the denominator', 'a denominator of $0$'],
        answerIndex: 2,
        solutionTeX: 'If the top exceeds the bottom, like $\\frac{7}{4}$, you have more than one whole, so the value is greater than $1$.',
        hints: ['When is a fraction worth more than one whole?', 'The top must beat the bottom.']
      },
      {
        promptTeX: 'What is $\\frac{2}{3}+\\frac{2}{3}$?',
        choices: ['$\\frac{4}{6}$', '$\\frac{4}{3}$', '$\\frac{2}{6}$', '$\\frac{4}{9}$'],
        answerIndex: 1,
        solutionTeX: 'With the same denominator you add only the numerators: $\\frac{2+2}{3}=\\frac{4}{3}$. The denominator (the size of the pieces) stays the same.',
        hints: ['Same bottom: just add the tops.', 'Do not add the denominators.']
      },
      {
        promptTeX: 'Why does multiplying both the top and bottom of $\\frac{1}{2}$ by $3$ give an equal fraction?',
        choices: ['Because you multiplied by $\\frac{3}{3}$, which equals $1$', 'Because you added $3$ to each', 'Because bigger numbers are always equal', 'Because $\\frac{1}{2}$ has no value'],
        answerIndex: 0,
        solutionTeX: 'Multiplying top and bottom by $3$ is the same as multiplying by $\\frac{3}{3}=1$, and multiplying by $1$ never changes a value: $\\frac{1}{2}=\\frac{3}{6}$.',
        hints: ['What is $\\frac{3}{3}$ equal to?', 'Multiplying by $1$ leaves a number unchanged.']
      },
      {
        promptTeX: 'Which of these is closest to $1$?',
        choices: ['$\\frac{1}{2}$', '$\\frac{7}{8}$', '$\\frac{1}{4}$', '$\\frac{1}{3}$'],
        answerIndex: 1,
        solutionTeX: '$\\frac{7}{8}=0.875$ is just one-eighth short of a whole, much closer to $1$ than $\\frac{1}{2}$, $\\frac{1}{4}$, or $\\frac{1}{3}$.',
        hints: ['Which fraction is missing the least to reach a whole?', '$\\frac{7}{8}$ is only $\\frac{1}{8}$ away from $1$.']
      }
    ]
  }
];
