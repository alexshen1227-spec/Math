window.AXIOM_STRATEGIES = [
  {
    id: 'polya-four-steps',
    title: 'Pólya’s four steps',
    dek: 'Understand, plan, execute, look back — the oldest reliable algorithm for problems you have never seen before.',
    readMins: 8,
    blocks: [
      { type: 'p', text: 'In 1945 the mathematician George Pólya wrote a thin book called **How to Solve It**. It is still the best thing ever written about doing math, because it is not about any one topic — it is about what to do when you have **no idea** what to do. His answer was four steps, in order, every time.' },
      { type: 'ol', items: [ '**Understand the problem.** What are you given? What are you asked? Can you restate it in your own words?', '**Devise a plan.** Find the connection between the data and the unknown. Have you seen a similar problem?', '**Carry out the plan.** Execute each step, checking that each one is correct as you go.', '**Look back.** Check the result. Can you see it at a glance? Can you use the method elsewhere?' ] },
      { type: 'callout', label: 'INTUITION', text: 'Most people fail at step 1, blame step 3, and skip step 4. The middle two get all the attention, but the bookends are where problems are won or lost.' },
      { type: 'h2', text: 'One problem, four steps' },
      { type: 'p', text: 'Here is a real problem. **A rectangular garden has a perimeter of 36 meters. Its length is twice its width. What is its area?** **Understand:** we are given a perimeter and that the length is twice the width, and we want the area. **Plan:** name the width $w$, so the length is $2w$; the perimeter of a rectangle is $2(\\text{length} + \\text{width})$, so write that equation, solve for $w$, then multiply to get area. The plan exists before any number is crunched.' },
      { type: 'math', tex: '2(2w + w) = 36' },
      { type: 'p', text: '**Execute.** Simplify the inside: $2w + w = 3w$, so $2(3w) = 6w = 36$, which gives $w = 6$. Then the length is $2w = 12$. Area is length times width: $12 \\times 6 = 72$. So the area is $72$ square meters.' },
      { type: 'p', text: '**Look back.** Sanity-check it. Width $6$, length $12$: perimeter is $2(12 + 6) = 2(18) = 36$. Correct. The length really is twice the width, and the answer is in square meters — right for area. Everything closes. Skipping this step is the single most expensive habit in math; the check above took ten seconds. And notice the **method** — name one unknown, express the rest in terms of it — will solve a hundred problems that look nothing like this one.' },
      { type: 'h2', text: 'Where experts disagree' },
      { type: 'p', text: 'Pólya’s steps are nearly universally admired — but there is a real argument about what they can actually teach.' },
      { type: 'ul', items: [ 'One camp (much of the **heuristics** tradition that grew out of Pólya, and educators like Alan Schoenfeld) says these strategies are genuinely teachable: name them, model them aloud, and students get measurably better at unfamiliar problems.', 'A skeptical camp argues the four steps are **descriptive, not prescriptive** — they describe what an expert already does, but telling a novice to "devise a plan" is like telling them to "be talented." On this view, real problem-solving power comes from deep domain knowledge and lots of worked examples, not from a generic checklist.', 'A middle position, supported by Schoenfeld’s own research, is that the steps help **only when paired with self-monitoring** — the habit of asking "is this working?" mid-solution. The framework is scaffolding for that metacognition, not a magic recipe.' ] },
      { type: 'pull', text: 'The four steps don’t solve the problem for you. They stop you from quitting before you’ve understood what the problem even is.' }
    ],
    sources: [
      { label: 'G. Pólya, How to Solve It (Princeton University Press)', url: 'https://press.princeton.edu/books/paperback/9780691164076/how-to-solve-it' },
      { label: 'Alan Schoenfeld, Mathematical Problem Solving', url: 'https://www.sciencedirect.com/book/9780126288704/mathematical-problem-solving' },
      { label: 'How to Solve It — Wikipedia', url: 'https://en.wikipedia.org/wiki/How_to_Solve_It' }
    ]
  },
  {
    id: 'when-stuck',
    title: 'When you’re stuck',
    dek: 'Five concrete moves to make when you have read the problem three times and still have nothing.',
    readMins: 8,
    blocks: [
      { type: 'p', text: 'Being stuck is not a sign you are bad at math. It is the **normal state** of doing math. The difference between people who solve hard problems and people who don’t is that the solvers have a menu of moves to try when the front door is locked. Here are five that almost always crack something open.' },
      { type: 'h2', text: 'Five moves to try' },
      { type: 'ul', items: [ '**Work backwards.** Start from what you want and ask what would produce it. "I doubled a number, added 4, and got 20." Run it in reverse: undo the $+4$ to get $20 - 4 = 16$, then undo the doubling to get $16 \\div 2 = 8$. Check forward: $8 \\times 2 + 4 = 20$. When the forward path is tangled, the backward path is often straight.', '**Try small cases.** If the number is big, shrink it. "What is $1 + 2 + \\cdots + 100$?" Try $n = 1,2,3,4$: the sums are $1, 3, 6, 10$. Notice $1 = \\frac{1\\cdot 2}{2}$, $3 = \\frac{2\\cdot 3}{2}$, $6 = \\frac{3\\cdot 4}{2}$ — the pattern is $\\frac{n(n+1)}{2}$, so the answer is $\\frac{100 \\cdot 101}{2} = 5050$.', '**Draw a picture.** A diagram offloads the problem onto paper. "Two trains leave stations 300 km apart, closing at 60 and 40 km/h. When do they meet?" Sketch it and it is obvious the gap closes at $60 + 40 = 100$ km/h, so they meet after $300 \\div 100 = 3$ hours.', '**Find a pattern.** Compute a few terms. Powers of $2$ end in $2, 4, 8, 6, 2, 4, 8, 6, \\ldots$ — a cycle of length $4$. For the last digit of $2^{10}$: since $10 = 4\\cdot 2 + 2$, it lands on the 2nd entry, $4$. (Check: $2^{10} = 1024$.)', '**Solve a simpler problem.** Strip the hard part, solve what remains, add it back. Stuck on $\\frac{3}{4} + \\frac{2}{5}$? Remind yourself with $\\frac{1}{4} + \\frac{1}{4} = \\frac{2}{4}$ that the rule is "same denominator, add the tops." Then rebuild: common denominator $20$ gives $\\frac{15}{20} + \\frac{8}{20} = \\frac{23}{20}$.' ] },
      { type: 'callout', label: 'TRY THIS', text: 'Stuck right now? Pick the move that fits least — if you’ve been staring at a big number, try small cases; if it’s abstract, draw it. The point is to change your relationship to the problem, not to find the "correct" tactic.' },
      { type: 'h2', text: 'Where experts disagree' },
      { type: 'p', text: 'Everyone agrees these tactics work for experts. The fight is over how to **get** them into a beginner’s hands.' },
      { type: 'ul', items: [ 'The **discovery / inquiry** camp says students should wrestle with rich problems and uncover these strategies themselves, because struggle is what makes the learning stick (Jo Boaler and much of the reform-math tradition lean this way).', 'The **direct-instruction** camp (and cognitive-load researchers like John Sweller) counters that novices flounder when left to discover, and learn faster from explicit worked examples that show the tactic in action, fading the support over time.', 'The honest synthesis: novices need worked examples first to build a base, but **productive struggle on the right-sized problem** is where fluency is forged. Too easy teaches nothing; too hard just frustrates. The skill is calibrating the difficulty.' ] },
      { type: 'pull', text: 'A stuck mathematician isn’t failing. They’re exactly where the interesting part begins.' }
    ],
    sources: [
      { label: 'G. Pólya, How to Solve It (Princeton University Press)', url: 'https://press.princeton.edu/books/paperback/9780691164076/how-to-solve-it' },
      { label: 'Jo Boaler, Mathematical Mindsets', url: 'https://www.youcubed.org/resource/mathematical-mindsets/' },
      { label: 'Sweller, Cognitive Load Theory (worked-example effect)', url: 'https://en.wikipedia.org/wiki/Cognitive_load' }
    ]
  },
  {
    id: 'reading-math-textbook',
    title: 'How to read a math textbook',
    dek: 'Math is the one subject you cannot read like a novel. Slow down, grab a pen, and re-derive everything.',
    readMins: 7,
    blocks: [
      { type: 'p', text: 'You can read a history chapter in an armchair with a cup of coffee. Try that with a math chapter and you will reach the end having absorbed **nothing**. Math prose is dense — a single sentence can carry a definition the next ten pages depend on, and every "clearly," "it follows that," and "we obtain" hides two or three steps the author left for you. Reading math is not reading. It is **rebuilding**, line by line, with a pen.' },
      { type: 'h2', text: 'Read with a pen, and re-derive everything' },
      { type: 'p', text: 'Never read a math example by watching the author do it. The instant you hit a worked example, **cover the solution** and try it yourself; only when stuck do you uncover the next line. When the book says "expanding, we get $(x+3)^2 = x^2 + 6x + 9$," do not nod and move on — do the expansion: $(x+3)(x+3) = x^2 + 3x + 3x + 9 = x^2 + 6x + 9$, and confirm it matches. Recognition is a trap; it feels like understanding and isn’t. If your line doesn’t match the book’s, you have found a gap **right now**, on your couch, instead of on the exam.' },
      { type: 'h2', text: 'Interrogate every "why"' },
      { type: 'ul', items: [ 'Why is this step allowed? (What rule licenses it?)', 'Why this approach and not another? (What made the author pick it?)', 'Where would this break? (Does it need $x \\ne 0$? A positive number under the root?)', 'Can I restate the definition in my own words without peeking? A definition you can’t restate is one you’ve only memorized, not understood.' ] },
      { type: 'h2', text: 'A reading loop that works' },
      { type: 'ol', items: [ 'Skim the section once fast — just the headings, theorems, and bold terms — to see the shape.', 'Read slowly with a pen, re-deriving every example and filling every "clearly."', 'Do 2–3 problems immediately, before the method cools.', 'Close the book and write, from memory, the one or two key ideas of the section.' ] },
      { type: 'callout', variant: 'warn', label: 'WATCH OUT', text: 'Highlighting is not reading. A page glowing with yellow marker is a page you have decorated, not learned. The pen should be writing math, not coloring sentences.' },
      { type: 'h2', text: 'Where experts disagree' },
      { type: 'p', text: 'There is a live debate about whether the textbook should even be the center of learning.' },
      { type: 'ul', items: [ 'The **traditional** view: a well-written text is the backbone. Read it carefully, work its problems, and you have a complete, coherent path — video and apps are supplements at best.', 'The **multimedia** view: many learners absorb a concept far faster from a great video (3Blue1Brown, Khan Academy) that animates the intuition, then use the book mainly as a problem source. Dense prose, they argue, is a needless bottleneck for the first exposure.', 'The reconciling point most educators accept: **intuition** can come from anywhere — video, a teacher, a picture — but **fluency** only comes from doing problems with a pen, and the textbook is still the richest, most reliable problem source you have.' ] },
      { type: 'pull', text: 'If your textbook still looks new at the end of the term, you didn’t read it. You looked at it.' }
    ],
    sources: [
      { label: 'Paul Halmos, How to write — and read — mathematics (advice tradition)', url: 'https://en.wikipedia.org/wiki/Paul_Halmos' },
      { label: 'Make It Stick (Brown, Roediger, McDaniel) — on the illusion of fluency', url: 'https://www.hup.harvard.edu/books/9780674729018' },
      { label: 'Kalid Azad, BetterExplained — intuition-first learning', url: 'https://betterexplained.com/' }
    ]
  },
  {
    id: 'studying-for-test',
    title: 'Studying for a math test',
    dek: 'Re-reading your notes feels productive and barely works. Retrieval and spacing feel hard and actually work.',
    readMins: 8,
    blocks: [
      { type: 'p', text: 'Most studying is a comfortable lie. You re-read the chapter, re-watch the lecture, look over the worked solutions, and feel a warm glow of familiarity. Then the test asks you to **produce** the answer from a blank page and the glow evaporates. The cognitive scientists behind **Make It Stick** have a name for this trap: fluency mistaken for mastery. The fix is to study in the way the test will ask.' },
      { type: 'h2', text: 'Retrieve, space, and interleave' },
      { type: 'p', text: 'The single most powerful study tool is **pulling the answer out of your own head** with the book closed. Re-reading lets you recognize the material; retrieval forces you to reconstruct it — and reconstruction is exactly what a test demands. Make It Stick puts it bluntly: the effort of recall is what builds durable memory. If it feels easy, it isn’t working.' },
      { type: 'ul', items: [ '**Space it out.** Four one-hour sessions across a week beat one four-hour cram, even at identical total time — a little forgetting between sessions, then re-retrieving the half-faded material, is what cements it. Test Friday? Study Monday, Tuesday, Thursday.', '**Interleave topics.** Don’t do twenty problems of one type in a row; mix factoring, the quadratic formula, and completing the square. That practices the harder skill of **choosing** the method — which the test won’t hand you either.' ] },
      { type: 'h2', text: 'Redo every problem you missed' },
      { type: 'p', text: 'Your wrong answers are a personalized map of exactly what you don’t know yet — the most valuable study material you own. Keep an **error log**: copy each missed problem, and a day or two later, redo it from scratch on a blank page. Not "read the solution again" — **solve it again**, cold. If you can’t, do it a third time later. Getting it wrong was never the failure. Not coming back to it is.' },
      { type: 'h2', text: 'Teach it aloud' },
      { type: 'p', text: 'Explain each topic out loud as if to a confused friend — the **Feynman technique**. The moment you stumble, mumble, or wave your hands, you have found the exact spot you don’t actually understand. Go back, patch it, and explain again cleanly. If you can explain it to a kid, you understand it. If you can’t, you only think you do. (And beware the three most popular study methods — highlighting, re-copying notes, re-watching lectures — which are three of the least effective: they feel productive precisely because they’re easy, and easy is the warning sign.)' },
      { type: 'h2', text: 'Where experts disagree' },
      { type: 'p', text: 'The evidence for retrieval and spacing is overwhelming. The disagreement is about how much **timed, high-stakes testing** should drive all this.' },
      { type: 'ul', items: [ 'The **testing-effect** researchers (the Make It Stick authors) emphasize that frequent low-stakes quizzing is itself one of the best ways to learn — testing isn’t just measurement, it’s practice.', 'Critics led by **Jo Boaler** argue that high-pressure, timed math tests induce anxiety that blocks working memory, so they measure speed-under-stress more than understanding — and can turn students off math entirely.', 'The reconciling view: the *format* matters. **Low-stakes, untimed retrieval** (self-quizzing, flashcards, redoing problems) captures the learning benefit without the anxiety cost. Use testing as a study tool, not as a stopwatch.' ] },
      { type: 'pull', text: 'If your studying feels easy and pleasant, you’re probably not learning. The discomfort of recall is the sound of memory being built.' }
    ],
    sources: [
      { label: 'Brown, Roediger & McDaniel, Make It Stick (Harvard University Press)', url: 'https://www.hup.harvard.edu/books/9780674729018' },
      { label: 'Jo Boaler, Mathematical Mindsets / youcubed', url: 'https://www.youcubed.org/resource/mathematical-mindsets/' },
      { label: 'The Feynman Technique — learning by explaining', url: 'https://en.wikipedia.org/wiki/Richard_Feynman' }
    ]
  },
  {
    id: 'test-day-execution',
    title: 'Test-day execution',
    dek: 'You already know the math. Now don’t lose points to panic, bad triage, or a careless minus sign.',
    readMins: 7,
    blocks: [
      { type: 'p', text: 'On test day your job changes. The learning is done; now it is about **converting** what you know into points with the least leakage. Most lost marks on a test you were ready for come not from ignorance but from execution: a question attacked in the wrong order, work that wasn’t shown, a sign dropped under time pressure. These are all fixable with a plan.' },
      { type: 'h2', text: 'Triage, then bank the easy points' },
      { type: 'p', text: 'Before writing a single solution, spend ninety seconds skimming the whole test and marking each question **easy**, **doable**, or **hard**. Then do the easy ones first. A point from question 1 is worth exactly as much as a point from question 10 and costs a fraction of the time — bank every guaranteed point before you gamble on a hard one. Points per minute is the only currency that matters: an easy question might pay 5 points in 2 minutes, a hard one 5 points in 15. A few quick wins early also calm your nerves for the hard ones.' },
      { type: 'h2', text: 'Show your work, and check by estimation' },
      { type: 'p', text: 'Write each step down, even ones you could do in your head. Most graders give **partial credit** for a correct method with a wrong final number, and your written steps are the only way to catch your own mistakes on the check pass — a naked wrong answer earns zero, while the same wrong answer with correct visible work often earns most of the marks. Then, after each answer, take five seconds to ask: is this even plausible? If a problem asks for the area of a small room and you got $4000$ square meters — the size of a soccer field — something is wrong. Estimation catches the catastrophic errors, a misplaced decimal or a wrong operation, that cost the most points.' },
      { type: 'h2', text: 'Manage time without panicking' },
      { type: 'ul', items: [ 'Divide total time by the number of questions to get a rough **budget** per question. Glance at the clock at the halfway mark, not constantly.', 'If a question runs over budget, **leave it** and come back. A half-finished hard problem is parked, not abandoned. Sinking fifteen minutes into the hardest problem out of pride, then running out of time on three easy ones, is the classic disaster.', 'When panic rises, stop and take one slow breath. Anxiety eats working memory — the very thing you need. Three seconds of calm buys back more than it costs.', 'Save the last five minutes to scan for blanks, dropped negatives, and questions you skipped. Never finish early and sit there — spend it checking.' ] },
      { type: 'h2', text: 'Where experts disagree' },
      { type: 'p', text: 'The sharpest live debate in math education touches test day directly: should math tests be **timed** at all?' },
      { type: 'ul', items: [ 'The **traditional** position: speed reflects fluency, timed conditions are fair and standardized, and the real world (and later exams) imposes deadlines, so students should practice under them.', 'The **critique**, led by Jo Boaler, holds that timed tests trigger anxiety that floods working memory and disproportionately harms capable students who think deeply rather than fast — measuring panic-resistance, not math.', 'A growing middle ground: keep classroom assessment **low-stakes and largely untimed** to measure understanding, while still teaching time-management skills for the timed exams students will inevitably face. You can reject the philosophy of timed tests and still prepare wisely for the ones that exist.' ] },
      { type: 'pull', text: 'You don’t rise to the occasion on test day — you fall back on your triage. Decide the plan before the clock starts.' }
    ],
    sources: [
      { label: 'Jo Boaler, "Fluency Without Fear" (youcubed)', url: 'https://www.youcubed.org/evidence/fluency-without-fear/' },
      { label: 'Brown, Roediger & McDaniel, Make It Stick', url: 'https://www.hup.harvard.edu/books/9780674729018' },
      { label: 'G. Pólya, How to Solve It (the "look back" check)', url: 'https://press.princeton.edu/books/paperback/9780691164076/how-to-solve-it' }
    ]
  },
  {
    id: 'beating-math-anxiety',
    title: 'Beating math anxiety',
    dek: 'The panic that wipes your mind blank is real, common, and beatable — starting with what you believe about your own brain.',
    readMins: 8,
    blocks: [
      { type: 'p', text: 'Math anxiety is not a character flaw and it is not rare — it is a measurable physiological response, and at its worst it hijacks the exact mental resource you need. When anxiety spikes, it floods **working memory**, the small mental scratchpad where you hold the numbers you’re juggling. That is why a capable person can go blank on $7 \\times 8$ under pressure: you haven’t forgotten the math, the anxiety is occupying the workspace where the math would happen. The good news — anxiety is learned, which means it can be unlearned.' },
      { type: 'callout', label: 'INTUITION', text: 'A blanked mind in a test is not an empty one. The fear is sitting in the chair the math needs. Your first job under pressure is not to compute — it is to settle.' },
      { type: 'h2', text: 'Your brain isn’t fixed, and mistakes grow it' },
      { type: 'p', text: 'Carol Dweck’s research separates two beliefs. A **fixed mindset** says ability is a fixed trait — you’re either a "math person" or you’re not. A **growth mindset** says ability grows with effort and practice. This is not just feel-good talk: students with a growth mindset persist longer on hard problems and improve more, because they read struggle as **growth in progress** rather than proof of inadequacy. Jo Boaler adds a striking finding from neuroscience — making a mistake, even one you don’t consciously notice, produces measurable synaptic growth that getting it right does not. The error is not the opposite of learning; it is a **moment of learning**. Getting it wrong is the work, not the failure. (A corollary: praising someone for being "so smart" quietly installs a fixed mindset — praise the effort and the strategy, not the trait.)' },
      { type: 'h2', text: 'The timed-test critique' },
      { type: 'p', text: 'Boaler argues that timed tests are a leading manufacturer of math anxiety, especially in young children: the stress of the clock floods working memory, the student blanks, concludes "I’m bad at math," and a lifelong aversion is born from a stopwatch. She notes that mathematicians are rarely the fastest — deep thinking is often slow — so training kids to equate math with speed teaches them the wrong thing about the subject entirely.' },
      { type: 'ul', items: [ 'Reframe the body’s signals: a racing heart before a test is **arousal**, not doom. Telling yourself "I’m excited" rather than "I’m terrified" measurably improves performance.', 'Try a brief **expressive writing** dump before the test — a few minutes writing out your worries has been shown to free up working memory.', 'Build a base of easy wins. Confidence is evidence-based; stack small successes so your brain has data that contradicts "I can’t do this."', 'Separate speed from skill. Practice untimed until the method is solid, then add a clock gradually only if you need one.' ] },
      { type: 'h2', text: 'Where experts disagree' },
      { type: 'p', text: 'Growth mindset and the anti-timed-test argument are influential — and genuinely contested.' },
      { type: 'ul', items: [ 'The **Boaler / Dweck** camp: mindset interventions and removing timed pressure reduce anxiety and open math to far more students.', 'A **skeptical** camp points to large replication studies showing growth-mindset interventions often produce **small** average effects, concentrated in the students who were struggling most — not the transformation early headlines promised. Some also defend timed fluency as a real, useful skill that frees working memory for harder thinking once basic facts are automatic.', 'The fair synthesis: **automaticity matters** — knowing $7 \\times 8 = 56$ instantly really does free your mind for the hard part — but it should be built through low-pressure spaced practice, not anxiety-inducing timed drills. You can chase fluency without the stopwatch.' ] },
      { type: 'pull', text: 'You are not a "math person" or not. You are a person who has, or hasn’t yet, practiced this particular thing.' }
    ],
    sources: [
      { label: 'Carol Dweck, Mindset: The New Psychology of Success', url: 'https://www.mindsetworks.com/science/' },
      { label: 'Jo Boaler, "Fluency Without Fear" (youcubed)', url: 'https://www.youcubed.org/evidence/fluency-without-fear/' },
      { label: 'Math anxiety and working memory — Wikipedia overview', url: 'https://en.wikipedia.org/wiki/Mathematical_anxiety' }
    ]
  },
  {
    id: 'sanity-checking',
    title: 'Sanity-checking answers',
    dek: 'Four fast ways to catch a wrong answer before it costs you — because the worst errors are the loud, obvious ones.',
    readMins: 7,
    blocks: [
      { type: 'p', text: 'The most damaging math errors are not the subtle ones — they are the absurd ones that a five-second glance would have caught. A negative length, an area smaller than one of its sides, a decimal in the wrong place turning $4.5$ into $45$. Sanity-checking is the cheap, fast habit of asking "does this answer even make sense?" before you trust it. Here are four checks that catch most disasters.' },
      { type: 'h2', text: 'Four fast checks' },
      { type: 'ul', items: [ '**Check the units.** They must come out right, and tracking them often reveals the mistake by itself. A speed ($\\text{km}/\\text{h}$) times a time ($\\text{h}$) cancels the hours and leaves $\\text{km}$ — a distance. If your "distance" came out in $\\text{km}/\\text{h}^2$, you multiplied where you should have divided. Area is square units; volume is cubic. Wrong units means wrong answer, full stop.', '**Check the order of magnitude.** Round every number to one significant figure and redo it roughly in your head for the **ballpark**. If you compute $19.8 \\times 4.9$ and get $9.7$, the estimate $20 \\times 5 = 100$ screams that you’re off by a factor of ten.', '**Cast out nines.** The repeated **digit sum** of a number must stay consistent across an operation. For $327 \\times 12 = 3924$: $327 \\to 3+2+7 = 12 \\to 3$, and $12 \\to 3$, so $3 \\times 3 = 9$. The answer: $3+9+2+4 = 18 \\to 9$. Both sides give $9$, so it passes. (It misses a swapped pair of digits — no single check is perfect.)', '**Ask: does this make sense?** The broadest and most powerful check. A probability above $1$ is impossible; a discount that raises the price is wrong; if $30$ people split a bill and each owes $\\$400$, reread the problem. Plug your answer back in and see if the story holds.' ] },
      { type: 'callout', label: 'WHY IT WORKS', text: 'Casting out nines works because a number and its digit sum leave the same remainder when divided by $9$. Operations preserve that remainder, so if the remainders don’t match, the arithmetic is wrong somewhere.' },
      { type: 'h2', text: 'A worked sanity check' },
      { type: 'p', text: 'Suppose you solve "a jacket is $\\$80$ after a $20\\%$ discount; what was the original price?" and you get $\\$64$. Run all four checks. **Units:** dollars, correct. **Make sense?** No — a discount should make the new price *lower* than the original, but $\\$64$ is lower than $\\$80$, so the original can’t be $\\$64$. That fails immediately. Redo: $80\\%$ of the original is $\\$80$, so the original is $80 \\div 0.8 = \\$100$. **Order of magnitude:** $\\$100$ is in the right ballpark for an $\\$80$ sale price. **Verify forward:** $20\\%$ off $\\$100$ is $\\$100 - \\$20 = \\$80$. It all closes. The sanity check caught a real error and pointed at the fix.' },
      { type: 'callout', variant: 'warn', label: 'WATCH OUT', text: 'A sanity check passing does not prove your answer is right — it only fails to prove it wrong. Use it to catch disasters fast, not as a substitute for solving carefully. It’s a smoke detector, not a guarantee.' },
      { type: 'h2', text: 'Where experts disagree' },
      { type: 'p', text: 'Sanity-checking is universally praised, but it sits inside a bigger fight: **calculators and number sense**.' },
      { type: 'ul', items: [ 'One camp argues calculators free students from tedious arithmetic to focus on real reasoning — and that estimation and sanity-checking are *more* important precisely because a calculator will happily display a wrong answer with total confidence.', 'The other camp warns that leaning on calculators too early erodes the mental number sense that makes sanity-checking possible in the first place — if you have no feel for what $19 \\times 5$ should be, you can’t catch the calculator when your finger slips.', 'Most educators land here: build genuine number sense and estimation first so a student can smell a wrong answer, *then* let the calculator handle the grinding. The calculator computes; only you can sanity-check.' ] },
      { type: 'pull', text: 'A calculator will give you a wrong answer with total confidence. Only you can ask whether it makes sense.' }
    ],
    sources: [
      { label: 'G. Pólya, How to Solve It (the "look back" stage)', url: 'https://press.princeton.edu/books/paperback/9780691164076/how-to-solve-it' },
      { label: 'Casting out nines — Wikipedia', url: 'https://en.wikipedia.org/wiki/Casting_out_nines' },
      { label: 'Stanislas Dehaene, The Number Sense', url: 'https://global.oup.com/academic/product/the-number-sense-9780199753871' }
    ]
  }
];
