window.AXIOM_COURSES_1 = [
  {
    id: 'numbers-101',
    category: 'Foundations',
    level: 'Beginner',
    tags: ['Arithmetic', 'Number sense', 'Place value'],
    title: 'Numbers 101',
    subtitle: 'Place value, the number line, negatives, and order of operations',
    blurb: 'Rebuild the number system from the ground up: what digits really mean, how the number line organizes everything, why negatives behave the way they do, and how to read an expression without guessing. Understand it first, then drill it to reflex.',
    prereqs: [],
    days: [
      {
        n: 1,
        title: 'What a number actually is',
        gist: 'Settle in and meet numbers as ideas, not symbols. Place value is the whole game: the same digit means different things depending on where it sits.',
        article: 'what-is-a-number',
        methods: [],
        practice: null,
        focus: "Today's focus: understand that $327$ means $3$ hundreds, $2$ tens, and $7$ ones — position carries meaning.",
        action: 'Just read. No drilling today. Let it sink in.'
      },
      {
        n: 2,
        title: 'The number line',
        gist: 'Picture every number as a point on one infinite line. Bigger means further right; this single image will carry you through negatives, fractions, and beyond.',
        article: null,
        methods: [],
        practice: 'times-tables',
        focus: "Today's focus: see addition as moving right and recall your times tables without hesitation.",
        action: 'Warm up your times tables for 10 minutes. Speed comes from understanding, not panic.'
      },
      {
        n: 3,
        title: 'Adding and subtracting with confidence',
        gist: 'Stack the place values and carry. Once you see why carrying works, multi-digit addition stops being scary and becomes mechanical.',
        article: null,
        methods: ['left-to-right-addition'],
        practice: 'add-multi',
        focus: "Today's focus: add multi-digit numbers cleanly, knowing exactly why you carry.",
        action: 'Read the method, then do a set of multi-digit addition. Check your work.'
      },
      {
        n: 4,
        title: 'Subtraction without the dread',
        gist: 'Borrowing is just carrying in reverse. Or skip it entirely: subtract by adding up to the bigger number.',
        article: null,
        methods: ['subtract-by-adding'],
        practice: 'subtract-multi',
        focus: "Today's focus: subtract multi-digit numbers two ways and trust both.",
        action: 'Learn the add-up trick, then drill subtraction. Getting it wrong is the work, not the failure.'
      },
      {
        n: 5,
        title: 'Negative numbers',
        gist: 'The number line goes left too. Negatives are not weird — they are debts, drops, and directions. Two negatives multiply to a positive for a reason you can see.',
        article: 'negative-numbers',
        methods: [],
        practice: 'negatives',
        focus: "Today's focus: add, subtract, and multiply signed numbers and explain why $(-1)\\times(-1)=1$.",
        action: 'Read, then drill signed arithmetic until the signs stop tripping you.'
      },
      {
        n: 6,
        title: 'Order of operations',
        gist: 'PEMDAS is not arbitrary — it is the grammar of arithmetic. Multiplication binds tighter than addition because of what those operations mean.',
        article: 'order-of-operations',
        methods: [],
        practice: 'order-of-operations',
        focus: "Today's focus: evaluate a layered expression and never fall for the left-to-right trap.",
        action: 'Read the article, then work through ordered-operation problems carefully.'
      },
      {
        n: 7,
        title: 'Self-checking with divisibility and casting out nines',
        gist: 'Good mathematicians catch their own mistakes. Divisibility rules and casting out nines let you sanity-check answers in seconds.',
        article: null,
        methods: ['divisibility-rules', 'casting-out-nines'],
        practice: 'order-of-operations',
        focus: "Today's focus: build the habit of verifying every answer before you commit to it.",
        action: 'Learn both checking tricks, then re-do yesterday’s problems and catch any slips.'
      },
      {
        n: 8,
        title: 'Long division and consolidation',
        gist: 'Long division ties place value, multiplication, and subtraction together. Master it and you have closed the loop on whole-number arithmetic.',
        article: null,
        methods: ['long-division'],
        practice: 'add-multi',
        focus: "Today's focus: carry out long division step by step and feel how all four operations connect.",
        action: 'Work the long-division method, then mix in review problems. Slow is smooth, smooth is fast.'
      }
    ]
  },
  {
    id: 'fractions-decimals-percents',
    category: 'Foundations',
    level: 'Beginner',
    tags: ['Fractions', 'Decimals', 'Percents', 'Ratio'],
    title: 'Fractions, Decimals & Percents',
    subtitle: 'The three faces of the same idea',
    blurb: 'Fractions, decimals, and percents are one concept wearing three costumes. Learn to see the shared idea, convert fluidly between forms, and handle "of", change, and comparison without fear.',
    prereqs: ['numbers-101'],
    days: [
      {
        n: 1,
        title: 'What a fraction really means',
        gist: 'A fraction is a single number: parts of a whole, or one number divided by another. Get this picture and the rules stop feeling random.',
        article: 'what-is-a-fraction',
        methods: [],
        practice: null,
        focus: "Today's focus: read $\\frac{3}{4}$ as three of four equal parts — a number, not two numbers.",
        action: 'Read and let the idea settle. No drilling today.'
      },
      {
        n: 2,
        title: 'Simplifying fractions',
        gist: 'Same value, fewer parts. Dividing top and bottom by a common factor never changes the number — it just tidies it.',
        article: null,
        methods: [],
        practice: 'simplify-fraction',
        focus: "Today's focus: reduce a fraction to lowest terms and explain why the value is unchanged.",
        action: 'Drill simplifying. If you can explain it to a kid, you understand it.'
      },
      {
        n: 3,
        title: 'Adding fractions: common denominators',
        gist: 'You can only add parts of the same size. Common denominators just resize the pieces so they match.',
        article: null,
        methods: ['common-denominators'],
        practice: 'add-fractions',
        focus: "Today's focus: find a common denominator and add fractions without memorizing a chant.",
        action: 'Learn the method, then drill addition. Rebuild the rule, don’t memorize it.'
      },
      {
        n: 4,
        title: 'Multiplying fractions and comparing them',
        gist: 'Multiplying fractions is the easy one: top times top, bottom times bottom. Cross-multiplication lets you compare and solve in a flash.',
        article: null,
        methods: ['cross-multiplication'],
        practice: 'multiply-fractions',
        focus: "Today's focus: multiply fractions and use cross-multiplication to compare two of them.",
        action: 'Read cross-multiplication, then drill fraction multiplication.'
      },
      {
        n: 5,
        title: 'Decimals are just fractions in disguise',
        gist: 'Decimals are fractions whose denominators are powers of ten. That is the entire secret to converting between forms.',
        article: null,
        methods: ['percent-conversions'],
        practice: 'fdp-convert',
        focus: "Today's focus: convert fluidly among fractions, decimals, and percents.",
        action: 'Study the conversions, then drill switching between all three forms.'
      },
      {
        n: 6,
        title: 'Percent of a number',
        gist: 'Percent means "per hundred", and "of" means multiply. Those two facts dissolve most percent problems instantly.',
        article: null,
        methods: ['of-means-times'],
        practice: 'percent-of',
        focus: "Today's focus: compute a percent of a quantity by turning “of” into multiplication.",
        action: 'Learn the "of means times" idea, then drill percent-of problems.'
      },
      {
        n: 7,
        title: 'Percent change',
        gist: 'Increase and decrease, markups and discounts — all the same formula once you see change as a fraction of the original.',
        article: null,
        methods: ['percent-change'],
        practice: 'percent-change',
        focus: "Today's focus: compute percent increase and decrease and avoid the classic base-of-comparison trap.",
        action: 'Read the method, then drill percent change. Check whether each answer makes sense.'
      },
      {
        n: 8,
        title: 'Pulling it together',
        gist: 'Real problems mix all three forms at once. Today you interleave everything so the skills connect instead of sitting in silos.',
        article: null,
        methods: ['of-means-times'],
        practice: 'fdp-convert',
        focus: "Today's focus: move between fractions, decimals, and percents on demand in mixed problems.",
        action: 'Mix conversion and percent problems together. Interleaving builds durable memory.'
      }
    ]
  },
  {
    id: 'pre-algebra-bridge',
    category: 'Foundations',
    level: 'Beginner',
    tags: ['Pre-algebra', 'Variables', 'Equations'],
    title: 'Pre-Algebra Bridge',
    subtitle: 'From arithmetic to the language of algebra',
    blurb: 'A letter is just a number you do not know yet. This bridge takes you from numbers to variables, expressions, and solving simple equations — the doorway to all of algebra.',
    prereqs: ['fractions-decimals-percents'],
    days: [
      {
        n: 1,
        title: 'What a variable is',
        gist: 'A variable is a placeholder for a number — sometimes unknown, sometimes changing. It is not a new kind of math, just a new kind of name.',
        article: 'what-is-a-variable',
        methods: [],
        practice: null,
        focus: "Today's focus: read $x$ as “some number” and feel comfortable that it stands for a value.",
        action: 'Read and settle in. No drilling on day one.'
      },
      {
        n: 2,
        title: 'Reading and writing expressions',
        gist: 'An expression is a recipe: a combination of numbers and variables. Translating words into expressions is half the battle of algebra.',
        article: null,
        methods: [],
        practice: 'evaluate-expr',
        focus: "Today's focus: substitute a value for the variable and evaluate the expression correctly.",
        action: 'Drill evaluating expressions. Plug in, then follow order of operations.'
      },
      {
        n: 3,
        title: 'The balance idea',
        gist: 'An equation is a balanced scale. Whatever you do to one side you must do to the other — that is the one rule behind all equation solving.',
        article: null,
        methods: ['isolating-a-variable'],
        practice: null,
        focus: "Today's focus: see why keeping the equation balanced lets you isolate the unknown.",
        action: 'Read the method slowly. Picture the scale. Light day, no drill.'
      },
      {
        n: 4,
        title: 'Solving one-step equations',
        gist: 'Undo one operation to free the variable. Addition undoes subtraction; multiplication undoes division. Pure inverse thinking.',
        article: null,
        methods: ['isolating-a-variable'],
        practice: 'solve-linear',
        focus: "Today's focus: solve a one-step linear equation by applying the inverse operation.",
        action: 'Drill one-step equations until isolating $x$ feels automatic.'
      },
      {
        n: 5,
        title: 'Two-step equations',
        gist: 'Two operations to undo, in reverse order. Peel them off like layers — outermost first — and the variable falls out.',
        article: null,
        methods: ['isolating-a-variable'],
        practice: 'two-step-equation',
        focus: "Today's focus: solve a two-step equation by undoing operations in the right order.",
        action: 'Drill two-step equations. Getting it wrong is how you learn the order.'
      },
      {
        n: 6,
        title: 'Expressions and equations together',
        gist: 'Word problems become equations once you name the unknown. Today you translate, set up, and solve from start to finish.',
        article: null,
        methods: ['isolating-a-variable'],
        practice: 'evaluate-expr',
        focus: "Today's focus: turn a short word problem into an equation and check your solution by substituting back.",
        action: 'Mix evaluating and setting up equations. Always plug your answer back in.'
      },
      {
        n: 7,
        title: 'Consolidation and review',
        gist: 'Interleave one-step, two-step, and evaluation so they live in the same mental drawer. This is where fluency is forged.',
        article: 'what-is-a-variable',
        methods: ['isolating-a-variable'],
        practice: 'solve-linear',
        focus: "Today's focus: solve mixed linear equations without pausing to remember which type it is.",
        action: 'Reread the article, then drill mixed equations. Slow is smooth, smooth is fast.'
      }
    ]
  },
  {
    id: 'mental-math-toolkit',
    category: 'Mental Math',
    level: 'Intermediate',
    tags: ['Mental math', 'Arithmetic', 'Speed'],
    title: 'Mental Math Toolkit',
    subtitle: 'Calculate fast in your head, on purpose',
    blurb: 'A working set of mental-math techniques you can actually deploy: left-to-right addition, subtracting by adding, doubling and halving, and slick shortcuts for elevens, numbers ending in five, and figures near a round base. Understand each trick, then drill it to reflex.',
    prereqs: [],
    days: [
      {
        n: 1,
        title: 'Add left to right',
        gist: 'School taught you right-to-left because of paper. In your head, left-to-right is faster and you always know the rough size of the answer.',
        article: null,
        methods: ['left-to-right-addition'],
        practice: 'add-multi',
        focus: "Today's focus: add multi-digit numbers from the big place down, holding a running total.",
        action: 'Learn the method, then drill addition without reaching for a pen.'
      },
      {
        n: 2,
        title: 'Subtract by adding up',
        gist: 'Borrowing is painful in your head. Instead, count up from the smaller number to the larger one — same answer, no borrowing.',
        article: null,
        methods: ['subtract-by-adding'],
        practice: 'add-multi',
        focus: "Today's focus: turn every subtraction into an easy add-up.",
        action: 'Drill the add-up method on subtraction problems.'
      },
      {
        n: 3,
        title: 'Doubling and halving',
        gist: 'You can rebalance a product: halve one factor and double the other without changing the result. It turns ugly multiplications into friendly ones.',
        article: null,
        methods: ['doubling-halving'],
        practice: 'multiply-2digit',
        focus: "Today's focus: simplify a two-digit multiplication by doubling and halving into a rounder form.",
        action: 'Learn the trick, then drill two-digit multiplication.'
      },
      {
        n: 4,
        title: 'Multiplying by 11',
        gist: 'Multiplying by eleven is almost free: add neighboring digits. See why it works and you will never forget it.',
        article: null,
        methods: ['multiply-by-11'],
        practice: 'mult-by-11',
        focus: "Today's focus: multiply any two-digit number by $11$ in one pass.",
        action: 'Drill the elevens trick until it is instant.'
      },
      {
        n: 5,
        title: 'Squaring numbers ending in 5',
        gist: 'Any number ending in five squares with a two-step pattern that drops straight out of the algebra. One of the most satisfying shortcuts there is.',
        article: null,
        methods: ['square-ending-5'],
        practice: 'square-5',
        focus: "Today's focus: square numbers ending in $5$ instantly, e.g. $35^2=1225$.",
        action: 'Learn the pattern, derive why it works, then drill it.'
      },
      {
        n: 6,
        title: 'Multiplying near a base',
        gist: 'Numbers close to 100 (or 10, or 1000) multiply with a clean cross-and-product method. Distance from the base does the heavy lifting.',
        article: null,
        methods: ['multiply-near-base'],
        practice: 'multiply-2digit',
        focus: "Today's focus: multiply two numbers near $100$ using their distances from the base.",
        action: 'Study the near-base method, then drill two-digit products.'
      },
      {
        n: 7,
        title: 'Checking with casting out nines',
        gist: 'Fast math is worthless if it is wrong. Casting out nines catches most arithmetic slips in a couple of seconds.',
        article: null,
        methods: ['casting-out-nines'],
        practice: 'multiply-2digit',
        focus: "Today's focus: verify your mental products with casting out nines.",
        action: 'Learn the check, then re-verify a batch of your earlier answers.'
      },
      {
        n: 8,
        title: 'Toolkit under pressure',
        gist: 'Real speed comes from choosing the right tool fast. Today you interleave every technique so picking one becomes instinctive.',
        article: null,
        methods: ['doubling-halving', 'multiply-near-base'],
        practice: 'multiply-2digit',
        focus: "Today's focus: pick the fastest technique for each problem without hesitating.",
        action: 'Mixed drill across all techniques. Interleaving is what makes it stick.'
      }
    ]
  },
  {
    id: 'estimation-fermi',
    category: 'Mental Math',
    level: 'Intermediate',
    tags: ['Estimation', 'Order of magnitude', 'Fermi'],
    title: 'Estimation & Fermi Problems',
    subtitle: 'Get the right answer to one significant figure',
    blurb: 'Often the powerful answer is the approximate one. Learn to round smartly, reason in orders of magnitude, and crack Fermi problems — "how many piano tuners in Chicago?" — by chaining reasonable guesses into a defensible estimate.',
    prereqs: [],
    days: [
      {
        n: 1,
        title: 'Why estimation is a real skill',
        gist: 'Estimation is not lazy math — it is the skill that tells you whether an exact answer is even plausible. Settle into the mindset first.',
        article: 'estimation-skill',
        methods: [],
        practice: null,
        focus: "Today's focus: accept that a fast, roughly-right answer often beats a slow exact one.",
        action: 'Read the article. No drilling — just absorb the mindset.'
      },
      {
        n: 2,
        title: 'Rounding with intent',
        gist: 'Round to make the arithmetic easy, then track which way you pushed the error. Smart rounding keeps estimates honest.',
        article: null,
        methods: [],
        practice: 'rounding-estimate',
        focus: "Today's focus: round each number to make a calculation tractable while knowing your error direction.",
        action: 'Drill rounding-based estimation. Note whether each estimate is high or low.'
      },
      {
        n: 3,
        title: 'Thinking in orders of magnitude',
        gist: 'Powers of ten are the rungs of the estimation ladder. Getting the exponent right matters far more than the leading digit.',
        article: null,
        methods: [],
        practice: 'rounding-estimate',
        focus: "Today's focus: classify quantities by their power of ten and compare them quickly.",
        action: 'Estimate to the nearest order of magnitude. Aim for the right ballpark, not the right cent.'
      },
      {
        n: 4,
        title: 'Estimating percents and proportions',
        gist: 'Most everyday estimation is really percent reasoning: tips, taxes, discounts, shares. Anchor on easy percents and adjust.',
        article: null,
        methods: [],
        practice: 'percent-of',
        focus: "Today's focus: estimate a percent of a quantity using friendly anchors like $10\\%$ and $5\\%$.",
        action: 'Drill quick percent-of estimates in your head.'
      },
      {
        n: 5,
        title: 'Anatomy of a Fermi problem',
        gist: 'Fermi problems break an impossible question into a chain of guessable pieces. Each step is rough, but the errors largely cancel.',
        article: 'estimation-skill',
        methods: [],
        practice: 'rounding-estimate',
        focus: "Today's focus: decompose a big unknown into a product of smaller, estimable factors.",
        action: 'Reread the Fermi section, then practice decomposing one big question into parts.'
      },
      {
        n: 6,
        title: 'Sanity-checking with estimation',
        gist: 'Before you trust any exact calculation, estimate first. The estimate is your tripwire for catching gross errors.',
        article: null,
        methods: [],
        practice: 'rounding-estimate',
        focus: "Today's focus: produce a quick estimate as a guardrail before committing to an exact answer.",
        action: 'For each problem, estimate first, then compute, then compare.'
      },
      {
        n: 7,
        title: 'Fermi under fire',
        gist: 'Real Fermi practice is messy and that is the point. Make your assumptions explicit, defend each one, and own the uncertainty.',
        article: null,
        methods: [],
        practice: 'rounding-estimate',
        focus: "Today's focus: state every assumption out loud and produce a defensible single-figure estimate.",
        action: 'Tackle mixed estimation problems and justify each leap. Productive struggle is the work.'
      }
    ]
  },
  {
    id: 'logic-proof-basics',
    category: 'Reasoning',
    level: 'Intermediate',
    tags: ['Logic', 'Proof', 'Reasoning'],
    title: 'Logic & Proof Basics',
    subtitle: 'Statements, implication, and how to actually prove something',
    blurb: 'Proof is just careful, honest reasoning written down. Learn what makes a statement true or false, how implication really works, the power of the contrapositive, and the core proof techniques: direct, contradiction, and induction.',
    prereqs: [],
    days: [
      {
        n: 1,
        title: 'Why proof matters',
        gist: 'A proof is an argument so airtight that no counterexample can exist. Today you meet the idea and why mathematicians demand it.',
        article: 'why-proof-matters',
        methods: [],
        practice: null,
        focus: "Today's focus: understand the difference between “seems true” and “proven true”.",
        action: 'Read the article. No drilling — sit with the idea of certainty.'
      },
      {
        n: 2,
        title: 'Statements true and false',
        gist: 'A statement is a claim that is definitely true or definitely false. Logic begins by being ruthless about which is which.',
        article: null,
        methods: [],
        practice: 'logic-statements-bank',
        focus: "Today's focus: decide whether a statement is true or false and spot what would make it fail.",
        action: 'Work the statements bank. One counterexample is enough to sink a claim.'
      },
      {
        n: 3,
        title: 'Implication: if-then',
        gist: 'If P then Q is a promise that is broken only when P holds but Q fails. Most everyday confusion about logic lives right here.',
        article: 'why-proof-matters',
        methods: [],
        practice: 'logic-statements-bank',
        focus: "Today's focus: know exactly when an if-then statement is true and when it is false.",
        action: 'Reread the implication section, then drill the statements bank.'
      },
      {
        n: 4,
        title: 'The contrapositive',
        gist: 'Flip and negate both parts and the truth value is unchanged. The contrapositive is the single most useful logical move you will learn.',
        article: null,
        methods: [],
        practice: 'contrapositive-bank',
        focus: "Today's focus: rewrite “if P then Q” as “if not Q then not P” and see they say the same thing.",
        action: 'Drill the contrapositive bank. Do not confuse it with the converse.'
      },
      {
        n: 5,
        title: 'Direct proof',
        gist: 'Start from what you are given, take small justified steps, and arrive at the conclusion. The most natural proof there is.',
        article: null,
        methods: [],
        practice: 'logic-statements-bank',
        focus: "Today's focus: chain assumptions to a conclusion with each step justified.",
        action: 'Practice judging valid steps in the statements bank.'
      },
      {
        n: 6,
        title: 'Proof by contradiction',
        gist: 'Assume the opposite of what you want, then derive nonsense. The contradiction proves your original claim. This is how we know $\\sqrt{2}$ is irrational.',
        article: null,
        methods: [],
        practice: 'contrapositive-bank',
        focus: "Today's focus: see how assuming the negation and reaching absurdity establishes the truth.",
        action: 'Drill contrapositive-style reasoning, the close cousin of contradiction.'
      },
      {
        n: 7,
        title: 'Proof by induction',
        gist: 'Knock over the first domino, show each one topples the next, and the whole infinite line falls. Induction tames the infinite.',
        article: null,
        methods: [],
        practice: 'logic-statements-bank',
        focus: "Today's focus: understand the base case and inductive step as a chain of dominoes.",
        action: 'Reason through statements in the bank; identify base case versus step.'
      },
      {
        n: 8,
        title: 'Putting the techniques together',
        gist: 'Real proofs require choosing the right weapon. Today you mix direct, contrapositive, contradiction, and induction reasoning.',
        article: 'why-proof-matters',
        methods: [],
        practice: 'contrapositive-bank',
        focus: "Today's focus: pick the proof technique that fits the claim in front of you.",
        action: 'Mixed practice across both logic banks. Interleaving builds real judgment.'
      }
    ]
  },
  {
    id: 'probability-without-tears',
    category: 'Reasoning',
    level: 'Intermediate',
    tags: ['Probability', 'Counting', 'Reasoning'],
    title: 'Probability Without Tears',
    subtitle: 'Chance, made intuitive',
    blurb: 'Probability is just careful counting plus fractions. Learn to count outcomes, express chance as a fraction between zero and one, combine events, and avoid the famous traps that fool almost everyone.',
    prereqs: ['pre-algebra-bridge'],
    days: [
      {
        n: 1,
        title: 'What probability means',
        gist: 'Probability is a number from 0 to 1 measuring how likely something is. It is a fraction: favorable outcomes over all outcomes. Settle into that picture.',
        article: null,
        methods: [],
        practice: null,
        focus: "Today's focus: read a probability as “favorable over total”, a fraction between $0$ and $1$.",
        action: 'No drilling. Just internalize that probability is a fraction.'
      },
      {
        n: 2,
        title: 'Counting outcomes',
        gist: 'Most probability mistakes are counting mistakes. List the sample space carefully and the fraction writes itself.',
        article: null,
        methods: [],
        practice: 'probability-bank',
        focus: "Today's focus: enumerate the full set of equally likely outcomes before computing anything.",
        action: 'Work the probability bank. Count the denominator first, carefully.'
      },
      {
        n: 3,
        title: 'Probability as a simplified fraction',
        gist: 'Since probability is a fraction, simplifying it makes the answer readable. The fraction skills you already have apply directly.',
        article: null,
        methods: ['common-denominators'],
        practice: 'simplify-fraction',
        focus: "Today's focus: express a probability and reduce it to lowest terms.",
        action: 'Compute probabilities, then drill simplifying the resulting fractions.'
      },
      {
        n: 4,
        title: 'Probabilities as decimals and percents',
        gist: 'A 1-in-4 chance, 0.25, and 25% are the same statement. Switching forms makes probabilities easier to compare and communicate.',
        article: null,
        methods: ['percent-conversions'],
        practice: 'fdp-convert',
        focus: "Today's focus: convert a probability between fraction, decimal, and percent form.",
        action: 'Drill converting probabilities across all three forms.'
      },
      {
        n: 5,
        title: 'Combining events: AND and OR',
        gist: 'For independent events, AND multiplies and mutually exclusive OR adds. Knowing which is which prevents most blunders.',
        article: null,
        methods: [],
        practice: 'probability-bank',
        focus: "Today's focus: decide whether to multiply or add when combining two events.",
        action: 'Work combination problems in the probability bank.'
      },
      {
        n: 6,
        title: 'The complement trick',
        gist: 'Sometimes "at least one" is hard but "none" is easy. The probability of the complement is one minus the probability of the event.',
        article: null,
        methods: [],
        practice: 'probability-bank',
        focus: "Today's focus: compute “at least one” by subtracting the “none” case from $1$.",
        action: 'Drill complement-based problems. Look for the easier opposite event.'
      },
      {
        n: 7,
        title: 'Traps and intuition pumps',
        gist: 'Probability loves to fool us — gambler’s fallacy, conditional confusion, the birthday paradox. Building correct intuition is the whole point.',
        article: null,
        methods: [],
        practice: 'probability-bank',
        focus: "Today's focus: recognize and dismantle the classic probability fallacies.",
        action: 'Mixed probability practice. When intuition and the count disagree, trust the count.'
      }
    ]
  },
  {
    id: 'problem-solving-polya',
    category: 'Reasoning',
    level: 'Beginner',
    tags: ['Problem solving', 'Strategy', 'Puzzles'],
    title: "Problem Solving with Pólya",
    subtitle: "George Pólya's four steps, applied to real puzzles",
    blurb: "Pólya's How to Solve It distilled problem solving into four steps: understand, plan, carry out, look back. Learn each one and apply it to puzzles, so getting stuck becomes a process instead of a panic.",
    prereqs: [],
    days: [
      {
        n: 1,
        title: 'The four-step framework',
        gist: "Meet Pólya's four phases: understand the problem, devise a plan, carry it out, look back. A gentle first look at how good solvers actually think.",
        article: null,
        methods: [],
        practice: null,
        focus: "Today's focus: learn the four steps as a repeatable cycle, not a magic formula.",
        action: 'Just read and absorb the framework. No puzzles to grind yet.'
      },
      {
        n: 2,
        title: 'Step 1 — Understand the problem',
        gist: 'Most failed attempts skip understanding. Restate the problem in your own words, name the unknown, and list what you are given.',
        article: null,
        methods: [],
        practice: 'polya-puzzles-bank',
        focus: "Today's focus: never start solving until you can restate the problem and name the unknown.",
        action: 'Work puzzles, but spend most of your time just understanding each one.'
      },
      {
        n: 3,
        title: 'Step 2 — Devise a plan',
        gist: 'Reach for a strategy: try a smaller case, draw a picture, look for a pattern, work backward. A plan turns a wall into a path.',
        article: null,
        methods: [],
        practice: 'polya-puzzles-bank',
        focus: "Today's focus: choose a concrete strategy before touching the arithmetic.",
        action: 'For each puzzle, write your plan first, then execute it.'
      },
      {
        n: 4,
        title: 'Step 3 — Carry out the plan',
        gist: 'Execute carefully, checking each step as you go. Patience here is what separates a near-miss from a clean solve.',
        article: null,
        methods: [],
        practice: 'polya-puzzles-bank',
        focus: "Today's focus: execute your plan step by step, verifying each move before the next.",
        action: 'Carry your plans through to the end. If it fails, that is data — adjust and retry.'
      },
      {
        n: 5,
        title: 'Step 4 — Look back',
        gist: 'The step everyone skips and experts never do. Check the answer, ask if it makes sense, and look for a slicker route.',
        article: null,
        methods: [],
        practice: 'polya-puzzles-bank',
        focus: "Today's focus: verify every solution and ask whether a simpler method exists.",
        action: 'Solve, then deliberately look back on each one. Could you have done it faster?'
      },
      {
        n: 6,
        title: 'When you get stuck',
        gist: 'Being stuck is normal and useful. Specialize, generalize, change the representation, or solve a related easier problem to get unstuck.',
        article: null,
        methods: [],
        practice: 'polya-puzzles-bank',
        focus: "Today's focus: have a menu of moves ready for the moment you hit a wall.",
        action: 'Pick deliberately hard puzzles. Getting stuck and recovering is the real skill.'
      },
      {
        n: 7,
        title: 'The full cycle on harder puzzles',
        gist: 'Now run all four steps end to end on richer problems, consciously naming which phase you are in.',
        article: null,
        methods: [],
        practice: 'polya-puzzles-bank',
        focus: "Today's focus: move through all four phases deliberately on a single hard puzzle.",
        action: 'Full-cycle practice. Narrate your phase out loud as you go.'
      },
      {
        n: 8,
        title: 'Making it a habit',
        gist: 'The four steps only help if they become automatic. Interleave varied puzzles so the framework runs without you thinking about it.',
        article: null,
        methods: [],
        practice: 'polya-puzzles-bank',
        focus: "Today's focus: apply the cycle fluently across unfamiliar puzzle types.",
        action: 'Mixed puzzle set. The goal is for the method to feel like reflex.'
      }
    ]
  }
];
