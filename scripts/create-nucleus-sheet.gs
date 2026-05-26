/**
 * NUCLEUS CONTENT — Google Apps Script
 * ─────────────────────────────────────────────────────────────────
 * Paste this entire file into script.google.com → New Project → Run
 * It will automatically create the "Nucleus Content" spreadsheet
 * with all 4 tabs, correct headers, and 3 pre-filled example chapters.
 *
 * After running:
 *   1. Open the created sheet URL printed in Logs
 *   2. File → Share → Publish to web → Entire Document → CSV → Publish
 *   3. Copy the Sheet ID from the URL and paste into .env.local:
 *        CONTENT_SHEET_ID=your_id_here
 *   4. Run: npm run sync
 */

function createNucleusContentSheet() {
  var ss = SpreadsheetApp.create("Nucleus Content");
  var ui = SpreadsheetApp.getUi ? SpreadsheetApp : null;

  Logger.log("Creating Nucleus Content sheet...");

  // Rename default sheet to Notes
  var notesSheet = ss.getSheets()[0];
  notesSheet.setName("Notes");

  var snippetsSheet = ss.insertSheet("Snippets");
  var mcqSheet      = ss.insertSheet("MCQ");
  var qaSheet       = ss.insertSheet("QA");

  setupNotes(notesSheet);
  setupSnippets(snippetsSheet);
  setupMCQ(mcqSheet);
  setupQA(qaSheet);

  // Format all sheets
  [notesSheet, snippetsSheet, mcqSheet, qaSheet].forEach(function(sh) {
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, sh.getLastColumn())
      .setBackground("#1a73e8").setFontColor("#ffffff").setFontWeight("bold");
  });

  Logger.log("✅ Done! Open your sheet here:");
  Logger.log(ss.getUrl());
  Logger.log("Next steps:");
  Logger.log("  1. File → Share → Publish to web → Entire Document → CSV → Publish");
  Logger.log("  2. Copy Sheet ID from URL → paste into .env.local as CONTENT_SHEET_ID=...");
  Logger.log("  3. Run: npm run sync");
}

// ═════════════════════════════════════════════════════════════
// NOTES TAB
// ═════════════════════════════════════════════════════════════
function setupNotes(sh) {
  var headers = [["chapter_id","chapter_name","heading","body","highlight"]];
  var data = [
    // ── 6-MATHS-1 (Patterns in Mathematics) ──
    ["6-maths-1","Patterns in Mathematics","What is a Pattern?",
     "A pattern is an arrangement of numbers or shapes that follows a fixed rule. Patterns help us predict what comes next and understand the structure of mathematics. Every pattern has a rule — find the rule, extend the pattern.",
     "Key Idea: Every pattern has a rule. Find the rule, predict the next term."],
    ["6-maths-1","Patterns in Mathematics","Number Sequences",
     "A number sequence is a list of numbers arranged according to a rule. Examples: 2,4,6,8 (add 2 each time — even numbers); 1,4,9,16,25 (perfect squares: 1²,2²,3²); 1,1,2,3,5,8 (Fibonacci — each term = sum of two before it).",
     "Triangular numbers: 1, 3, 6, 10, 15 … Formula: n(n+1)/2"],
    ["6-maths-1","Patterns in Mathematics","Shape Patterns",
     "Patterns appear in geometric arrangements. Square numbers can be shown as square dot grids. Triangular numbers form triangle arrangements of dots. Pascal's Triangle has rows where each entry is the sum of the two above.",
     ""],
    // ── 6-MATHS-2 (Lines and Angles) ──
    ["6-maths-2","Lines and Angles","Basic Geometric Terms",
     "A point is an exact location in space with no size. A line extends infinitely in both directions and has no endpoints. A line segment is part of a line with two endpoints and a definite length. A ray starts at a fixed point and extends infinitely in one direction only.",
     "Key: Line → infinite both ways | Ray → infinite one way | Line Segment → fixed length"],
    ["6-maths-2","Lines and Angles","Types of Angles",
     "An angle is formed when two rays share a common endpoint called the vertex. Types: Acute (0°–90°), Right (exactly 90°), Obtuse (90°–180°), Straight (exactly 180°), Reflex (180°–360°), Complete (360°). Measured in degrees using a protractor.",
     "Acute < 90° | Right = 90° | Obtuse 90°–180° | Straight = 180° | Reflex 180°–360°"],
    ["6-maths-2","Lines and Angles","Pairs of Angles",
     "Complementary angles sum to 90°. Supplementary angles sum to 180°. Adjacent angles share a vertex and arm with no overlap. When two lines intersect they form vertically opposite angles which are always equal. A linear pair always sums to 180°.",
     "Complementary: sum = 90° | Supplementary: sum = 180° | Vertically opposite angles are equal"],
    ["6-maths-2","Lines and Angles","Parallel and Perpendicular Lines",
     "Parallel lines (AB ∥ CD) never meet — constant distance apart. Perpendicular lines (AB ⊥ CD) meet at 90°. A transversal cutting parallel lines creates: alternate interior angles (equal), corresponding angles (equal), co-interior angles (supplementary, sum = 180°).",
     "Parallel lines: AB ∥ CD | Perpendicular: AB ⊥ CD | Alternate interior angles equal when lines parallel"],
    // ── 6-MATHS-3 (Number Play) ──
    ["6-maths-3","Number Play","Numbers in Everyday Life",
     "Numbers are all around us — in prices, phone numbers, dates, scores, measurements. Digits are the ten symbols (0–9). Place value of a digit depends on its position — ones, tens, hundreds, thousands. Face value is always the digit itself.",
     "Place value = Digit × Position value | Face value = the digit itself"],
    ["6-maths-3","Number Play","Number Tricks and Divisibility",
     "Divisibility rules: by 2 (last digit even), by 3 (digit sum divisible by 3), by 5 (ends in 0 or 5), by 9 (digit sum divisible by 9), by 10 (ends in 0). Kaprekar's constant: Take any 4-digit number, arrange digits descending then ascending, subtract. Repeat. You always reach 6174!",
     "Kaprekar constant = 6174 — reached by any 4-digit number within 7 steps"],
    ["6-maths-3","Number Play","Palindromes and Special Numbers",
     "A palindrome reads the same forwards and backwards (e.g., 121, 1331). Trick: Take any number, reverse digits, add — repeat until palindrome. Armstrong numbers: sum of each digit raised to power of digit count equals the number itself. Example: 153 = 1³+5³+3³ = 153.",
     "Palindrome: reads same both ways | Armstrong: 153 = 1³+5³+3³"],
    ["6-maths-3","Number Play","Estimation and Rounding",
     "Estimation means finding an approximate value. Rounding rules: look at digit to the right of rounding place — if ≥5 round up, if <5 round down. Example: 4763 rounded to nearest hundred → tens digit is 6 (≥5) → 4800.",
     "Round digit ≥ 5 → round up | Round digit < 5 → round down"],
  ];

  // Add blank placeholder rows for all remaining 75 chapters
  var remaining = getRemainingChapters();
  remaining.forEach(function(ch) {
    for (var i = 0; i < 4; i++) {
      data.push([ch[0], ch[1], "", "", ""]);
    }
  });

  sh.getRange(1, 1, 1, 5).setValues(headers);
  sh.getRange(2, 1, data.length, 5).setValues(data);
  sh.setColumnWidth(1, 100); sh.setColumnWidth(2, 180);
  sh.setColumnWidth(3, 200); sh.setColumnWidth(4, 350); sh.setColumnWidth(5, 280);
}

// ═════════════════════════════════════════════════════════════
// SNIPPETS TAB
// ═════════════════════════════════════════════════════════════
function setupSnippets(sh) {
  var headers = [["chapter_id","chapter_name","term","definition","formula","example"]];
  var data = [
    // 6-maths-1
    ["6-maths-1","Patterns in Mathematics","Pattern","An arrangement that follows a fixed rule and can be extended predictably.","","2, 4, 6, 8 — rule: add 2"],
    ["6-maths-1","Patterns in Mathematics","Sequence","An ordered list of numbers or objects following a rule.","","1, 4, 9, 16, 25 (perfect squares)"],
    ["6-maths-1","Patterns in Mathematics","Triangular Number","Numbers that can form a triangular dot arrangement.","Tn = n(n+1)/2","T4 = 4×5/2 = 10"],
    ["6-maths-1","Patterns in Mathematics","Square Number","The product of a number multiplied by itself.","n² = n × n","4² = 16"],
    ["6-maths-1","Patterns in Mathematics","Fibonacci Sequence","A sequence where each term is the sum of the two previous terms starting from 1, 1.","","1, 1, 2, 3, 5, 8, 13, 21 …"],
    ["6-maths-1","Patterns in Mathematics","Even Numbers","Numbers divisible by 2.","2n","2, 4, 6, 8, 10 …"],
    ["6-maths-1","Patterns in Mathematics","Odd Numbers","Numbers not divisible by 2.","2n − 1","1, 3, 5, 7, 9 …"],
    ["6-maths-1","Patterns in Mathematics","Pascal's Triangle","A triangular arrangement where each entry is the sum of the two entries above it.","","Row 3: 1, 3, 3, 1"],
    // 6-maths-2
    ["6-maths-2","Lines and Angles","Point","An exact location in space with no size, no length, no width.","","Tip of a pencil represents a point"],
    ["6-maths-2","Lines and Angles","Line Segment","Part of a line with two definite endpoints and a measurable length.","Length AB = |A - B|","The edge of a ruler is a line segment"],
    ["6-maths-2","Lines and Angles","Ray","Part of a line that starts at one endpoint and extends infinitely in one direction.","","A beam of light from a torch"],
    ["6-maths-2","Lines and Angles","Acute Angle","An angle whose measure is greater than 0° and less than 90°.","","45° is an acute angle"],
    ["6-maths-2","Lines and Angles","Obtuse Angle","An angle whose measure is greater than 90° and less than 180°.","","120° is an obtuse angle"],
    ["6-maths-2","Lines and Angles","Complementary Angles","Two angles whose measures add up to exactly 90°.","∠A + ∠B = 90°","30° and 60° are complementary"],
    ["6-maths-2","Lines and Angles","Supplementary Angles","Two angles whose measures add up to exactly 180°.","∠A + ∠B = 180°","110° and 70° are supplementary"],
    ["6-maths-2","Lines and Angles","Vertically Opposite Angles","Angles formed opposite each other when two lines intersect — always equal.","∠1 = ∠3, ∠2 = ∠4","When scissors blades cross, opposite angles are equal"],
    // 6-maths-3
    ["6-maths-3","Number Play","Place Value","The value of a digit based on its position in the number.","Digit × positional value","In 5476, place value of 4 is 400"],
    ["6-maths-3","Number Play","Face Value","The actual value of a digit, regardless of its position.","","In 5476, face value of 4 is always 4"],
    ["6-maths-3","Number Play","Palindrome","A number that reads the same forwards and backwards.","","121, 1331, 99, 12321 are palindromes"],
    ["6-maths-3","Number Play","Kaprekar's Constant","The number 6174, reached by any 4-digit number after repeated Kaprekar operations.","","9981 → 9981−1899=8082 → ... → 6174"],
    ["6-maths-3","Number Play","Armstrong Number","A number equal to the sum of its digits each raised to the power of the number of digits.","Sum of (each digit)ⁿ = number","153 = 1³+5³+3³ = 153"],
    ["6-maths-3","Number Play","Estimation","Finding an approximate answer close enough for practical purposes.","","427 ≈ 400 (rounded to nearest hundred)"],
    ["6-maths-3","Number Play","Rounding","Replacing a number with a nearby simpler number based on a given place value.","If right digit ≥ 5 round up; else round down","3.67 rounded to nearest whole = 4"],
    ["6-maths-3","Number Play","Divisibility Rule","A shortcut to check if a number is divisible by another without actual division.","","Div by 9: if digit sum divisible by 9"],
  ];

  var remaining = getRemainingChapters();
  remaining.forEach(function(ch) {
    for (var i = 0; i < 8; i++) {
      data.push([ch[0], ch[1], "", "", "", ""]);
    }
  });

  sh.getRange(1, 1, 1, 6).setValues(headers);
  sh.getRange(2, 1, data.length, 6).setValues(data);
  sh.setColumnWidth(1, 100); sh.setColumnWidth(2, 180); sh.setColumnWidth(3, 160);
  sh.setColumnWidth(4, 320); sh.setColumnWidth(5, 150); sh.setColumnWidth(6, 220);
}

// ═════════════════════════════════════════════════════════════
// MCQ TAB
// ═════════════════════════════════════════════════════════════
function setupMCQ(sh) {
  var headers = [["chapter_id","chapter_name","worksheet","question","option_a","option_b","option_c","option_d","answer","explanation"]];
  var data = [
    // 6-maths-1 WS1
    ["6-maths-1","Patterns in Mathematics","1","What is the next number in the sequence: 1, 4, 9, 16, __?","20","25","24","21","B","This is the sequence of perfect squares: 1², 2², 3², 4², 5² = 25"],
    ["6-maths-1","Patterns in Mathematics","1","The 5th triangular number is:","10","12","15","8","C","T5 = 5×6/2 = 15. Triangular numbers: 1, 3, 6, 10, 15"],
    ["6-maths-1","Patterns in Mathematics","1","Which of these is a Fibonacci number?","14","13","11","16","B","Fibonacci: 1,1,2,3,5,8,13,21… 13 is a Fibonacci number"],
    ["6-maths-1","Patterns in Mathematics","1","What pattern do multiples of 9 follow in their digit sums?","Always equal 9","Always divisible by 9","Always odd","Always even","B","Sum of digits of any multiple of 9 is always divisible by 9"],
    ["6-maths-1","Patterns in Mathematics","1","Square numbers are also called:","Triangular numbers","Perfect squares","Prime numbers","Fibonacci numbers","B","Numbers like 1, 4, 9, 16 formed by n×n are called perfect squares"],
    ["6-maths-1","Patterns in Mathematics","1","What is the 4th triangular number?","6","8","10","12","C","T4 = 4×5/2 = 10"],
    ["6-maths-1","Patterns in Mathematics","1","In the Fibonacci sequence 1, 1, 2, 3, 5, 8, what comes next?","12","11","13","14","C","8 + 5 = 13"],
    ["6-maths-1","Patterns in Mathematics","1","How many dots are in a triangular arrangement with 4 rows?","8","10","12","6","B","Row 1+2+3+4 = 10 dots = T4"],
    ["6-maths-1","Patterns in Mathematics","1","What is 2n − 1 when n = 5?","8","9","10","11","B","2(5)−1 = 10−1 = 9. This gives the 5th odd number."],
    ["6-maths-1","Patterns in Mathematics","1","Which sequence represents square numbers?","1,2,3,4,5","1,3,6,10,15","1,4,9,16,25","2,4,6,8,10","C","1²=1, 2²=4, 3²=9, 4²=16, 5²=25 are perfect squares"],
    // 6-maths-1 WS2
    ["6-maths-1","Patterns in Mathematics","2","Assertion: Square numbers always end in 0,1,4,5,6,9. Reason: These are the only possible units digits of n².","Both A&R true, R explains A","Both true, R doesn't explain A","A true, R false","Both false","A","Correct — squaring any digit 0-9 gives only these units digits."],
    ["6-maths-1","Patterns in Mathematics","2","Assertion: 0 is a triangular number. Reason: T0 = 0×1/2 = 0.","Both A&R true, R explains A","A false, R true","A true, R false","Both false","A","Both correct. T0 = 0 is a valid triangular number by the formula."],
    ["6-maths-1","Patterns in Mathematics","2","Assertion: The sum of first n odd numbers is n². Reason: 1+3+5+...+(2n-1) = n².","Both A&R true, R explains A","Both true, R doesn't explain A","A true, R false","Both false","A","Both correct and R is the mathematical proof of A."],
    ["6-maths-1","Patterns in Mathematics","2","Assertion: Pascal's triangle has only odd numbers. Reason: Each entry is a sum of two previous entries.","A false, R true","Both true","Both false","A true, R false","A","Pascal's triangle contains even numbers too (e.g., row 2: 1,2,1). R is true but A is false."],
    ["6-maths-1","Patterns in Mathematics","2","Assertion: Fibonacci numbers grow approximately by a ratio of 1.618. Reason: This ratio is called the Golden Ratio.","Both A&R true, R explains A","A true, R false","A false, R true","Both false","A","Both correct. Consecutive Fibonacci numbers approach the golden ratio φ ≈ 1.618."],
    ["6-maths-1","Patterns in Mathematics","2","Assertion: Every even number is a triangular number. Reason: Triangular numbers include 6, 10, 28.","A false, R true","Both true","A true, R false","Both false","A","Not every even number is triangular (e.g., 8 is even but not triangular). R lists some triangular numbers correctly."],
    ["6-maths-1","Patterns in Mathematics","2","Assertion: The sequence 2,6,12,20,30 is related to triangular numbers. Reason: Each term equals n(n+1).","Both A&R true, R explains A","A false, R true","A true, R false","Both false","A","Both correct. n(n+1) = 2×T_n, so each term is twice a triangular number."],
    ["6-maths-1","Patterns in Mathematics","2","Assertion: 100 is both a perfect square and a triangular number. Reason: 100 = 10² and T13 = 91, T14 = 105.","A false, R true","Both true, R explains A","A true, R false","Both false","A","100 is a perfect square (10²) but NOT a triangular number. T13=91, T14=105, so 100 is between them."],
    ["6-maths-1","Patterns in Mathematics","2","Assertion: In the sequence 1,4,9,16 each term differs from next by consecutive odd numbers. Reason: 4-1=3, 9-4=5, 16-9=7.","Both A&R true, R explains A","A false, R true","A true, R false","Both false","A","Both correct. Differences between consecutive perfect squares are 3,5,7,9... (odd numbers)."],
    ["6-maths-1","Patterns in Mathematics","2","Assertion: The sequence 2,4,8,16 is a Fibonacci sequence. Reason: Each term doubles.","A false, R true","Both true","A true, R false","Both false","A","This is a geometric sequence (×2), not Fibonacci. Reason about doubling is correct but it is not Fibonacci."],
    // 6-maths-2 WS1
    ["6-maths-2","Lines and Angles","1","An angle measuring 145° is called:","Acute","Right","Obtuse","Reflex","C","Angles between 90° and 180° are obtuse. 145° lies in this range."],
    ["6-maths-2","Lines and Angles","1","The complement of 37° is:","143°","53°","63°","47°","B","Complement = 90° − 37° = 53°"],
    ["6-maths-2","Lines and Angles","1","Two lines that never meet are called:","Perpendicular","Intersecting","Parallel","Concurrent","C","Parallel lines are coplanar lines that never intersect."],
    ["6-maths-2","Lines and Angles","1","Vertically opposite angles are always:","Supplementary","Complementary","Equal","Adjacent","C","When two lines intersect, vertically opposite angles are always equal."],
    ["6-maths-2","Lines and Angles","1","The supplement of 75° is:","15°","105°","285°","95°","B","Supplement = 180° − 75° = 105°"],
    ["6-maths-2","Lines and Angles","1","A ray has:","Two endpoints","One endpoint","No endpoints","Three endpoints","B","A ray starts at one fixed endpoint and extends infinitely."],
    ["6-maths-2","Lines and Angles","1","How many degrees does a straight angle measure?","90°","270°","360°","180°","D","A straight angle measures exactly 180° — it forms a straight line."],
    ["6-maths-2","Lines and Angles","1","Alternate interior angles formed by a transversal on parallel lines are:","Supplementary","Complementary","Equal","Reflex","C","Alternate interior angles formed by a transversal cutting parallel lines are always equal."],
    ["6-maths-2","Lines and Angles","1","A linear pair of angles always sums to:","90°","180°","270°","360°","B","A linear pair lies on a straight line, so the angles sum to 180°."],
    ["6-maths-2","Lines and Angles","1","Which of these is NOT a type of angle?","Acute","Obtuse","Diagonal","Reflex","C","Diagonal is a line segment joining non-adjacent vertices; it is not a type of angle."],
    // 6-maths-2 WS2
    ["6-maths-2","Lines and Angles","2","Assertion (A): A right angle is 90°. Reason (R): It is formed when two perpendicular lines meet.","Both A and R true, R explains A","Both true, R does not explain A","A true, R false","A false, R true","A","Both statements are correct. Perpendicular lines meet at exactly 90°."],
    ["6-maths-2","Lines and Angles","2","Assertion (A): Complementary angles must be adjacent. Reason (R): Their sum equals 90°.","Both A and R true, R explains A","A false, R true","Both false","A true, R false","B","The assertion is false — complementary angles need not be adjacent. The reason is the correct definition."],
    ["6-maths-2","Lines and Angles","2","Assertion (A): Vertically opposite angles are supplementary. Reason (R): They are formed by two intersecting lines.","Both true, R explains A","A false, R true","Both false","A true, R false","B","Vertically opposite angles are EQUAL, not supplementary. The reason is correct."],
    ["6-maths-2","Lines and Angles","2","Assertion (A): A reflex angle is between 180° and 360°. Reason (R): Angles greater than a straight angle are reflex.","Both A and R true, R explains A","A true, R false","A false, R true","Both false","A","Both are correct. Reflex angles measure more than 180° and less than 360°."],
    ["6-maths-2","Lines and Angles","2","Assertion (A): Two parallel lines can meet at infinity. Reason (R): Parallel lines have no common point.","A true, R false","A false, R true","Both true","Both false","B","By Euclidean geometry, parallel lines NEVER meet. The reason is the correct definition."],
    ["6-maths-2","Lines and Angles","2","Assertion (A): Co-interior angles on parallel lines are supplementary. Reason (R): They are on the same side of the transversal.","Both A and R true, R explains A","Both true, R does not explain A","A true, R false","A false, R true","B","Both are true. Co-interior angles sum to 180°, and they are on the same side. Being same-side is a description, not the reason."],
    ["6-maths-2","Lines and Angles","2","Assertion (A): All right angles are equal. Reason (R): Every right angle measures 90°.","Both A and R true, R explains A","A true, R false","A false, R true","Both false","A","All right angles equal 90°, so they are all equal. R correctly explains A."],
    ["6-maths-2","Lines and Angles","2","Assertion (A): A straight angle is also a reflex angle. Reason (R): 180° is less than 360°.","Both true, R explains A","A false, R true","Both false","A true, R false","B","A straight angle (180°) is NOT a reflex angle (must exceed 180°). R is true but irrelevant."],
    ["6-maths-2","Lines and Angles","2","Assertion (A): Infinitely many lines pass through one point. Reason (R): Through one point, any number of lines can be drawn.","Both A and R true, R explains A","Both true, R does not explain A","A true, R false","A false, R true","A","Infinitely many lines pass through a single point; R correctly states the reason."],
    ["6-maths-2","Lines and Angles","2","Assertion (A): Corresponding angles are equal when lines are parallel. Reason (R): They are on the same side in matching positions.","Both A and R true, R explains A","A true, R false","A false, R true","Both false","A","Corresponding angles are equal for parallel lines, and they occupy matching positions."],
    // 6-maths-3 WS1
    ["6-maths-3","Number Play","1","What is the place value of 7 in 47,835?","7","700","7000","70","C","7 is in the thousands place. Place value = 7 × 1000 = 7000."],
    ["6-maths-3","Number Play","1","Which number is a palindrome?","1234","1221","1342","1023","B","1221 reads the same forwards and backwards."],
    ["6-maths-3","Number Play","1","Round 6,847 to the nearest thousand:","6000","7000","6800","6900","B","The hundreds digit is 8 (≥5), so round up: 7000."],
    ["6-maths-3","Number Play","1","Kaprekar's constant for 4-digit numbers is:","1729","6174","9801","4321","B","6174 is Kaprekar's constant — any 4-digit number reaches it."],
    ["6-maths-3","Number Play","1","Which number is an Armstrong number?","123","153","200","321","B","153 = 1³+5³+3³ = 153. It equals the sum of cubes of its digits."],
    ["6-maths-3","Number Play","1","A number is divisible by 9 if:","It is even","It ends in 0","Its digit sum is divisible by 9","It is divisible by 3","C","Divisibility rule for 9: if the sum of all digits is divisible by 9."],
    ["6-maths-3","Number Play","1","The face value of 6 in 76,432 is:","6000","600","60","6","D","Face value is always the digit itself, regardless of position."],
    ["6-maths-3","Number Play","1","Which is NOT a divisibility rule for 5?","Ends in 0","Ends in 5","Digit sum divisible by 5","Both A and B are correct","C","Divisibility by 5: ends in 0 or 5. Digit sum divisible by 5 is NOT the rule."],
    ["6-maths-3","Number Play","1","Round 3.74 to the nearest whole number:","3","4","3.7","3.8","B","The digit after the decimal is 7 (≥5), so round up: 4."],
    ["6-maths-3","Number Play","1","What is the next step after 57 + 75 = 132 in the palindrome trick?","132 + 231 = 363","132 + 123 = 255","132 + 321 = 453","132 + 213 = 345","A","Reverse 132 to get 231. Add: 132 + 231 = 363. This is a palindrome!"],
    // 6-maths-3 WS2
    ["6-maths-3","Number Play","2","Assertion (A): 1729 is the smallest number expressible as sum of two cubes in two ways. Reason (R): 1729 = 1³+12³ = 9³+10³.","Both A and R true, R explains A","Both true, R does not explain A","A true, R false","A false, R true","A","1729 is Hardy-Ramanujan number. Both statements are correct and R explains A."],
    ["6-maths-3","Number Play","2","Assertion (A): Rounding always gives the exact answer. Reason (R): Rounded numbers are approximations.","A true, R false","A false, R true","Both true","Both false","B","Rounding gives an APPROXIMATE value, not exact. The reason is correct."],
    ["6-maths-3","Number Play","2","Assertion (A): 371 is an Armstrong number. Reason (R): 3³+7³+1³ = 27+343+1 = 371.","Both A and R true, R explains A","A false, R true","A true, R false","Both false","A","Both correct. 371 is indeed an Armstrong number as the calculation shows."],
    ["6-maths-3","Number Play","2","Assertion (A): Every palindrome is divisible by 11. Reason (R): 121 ÷ 11 = 11.","A false, R true","Both true","A true, R false","Both false","A","Not every palindrome is divisible by 11. R is a specific example, not a general proof."],
    ["6-maths-3","Number Play","2","Assertion (A): Estimated sum of 248 and 352 is 600. Reason (R): 248 ≈ 250 and 352 ≈ 350; 250+350=600.","Both A and R true, R explains A","A true, R false","A false, R true","Both false","A","Both correct. Rounding each to nearest 50 gives 250+350=600; R correctly explains A."],
    ["6-maths-3","Number Play","2","Assertion (A): 0 is neither odd nor even. Reason (R): 0 is divisible by 2, giving remainder 0.","A false, R true","Both true, R explains A","A true, R false","Both false","A","0 IS even because it is divisible by 2 with remainder 0. The assertion is false; the reason is true."],
    ["6-maths-3","Number Play","2","Assertion (A): 100 is a perfect square. Reason (R): 100 = 10 × 10.","Both A and R true, R explains A","Both true, R does not explain A","A true, R false","A false, R true","A","100 is a perfect square (10²), and R correctly explains why."],
    ["6-maths-3","Number Play","2","Assertion (A): Place value and face value of 0 are always the same. Reason (R): Zero multiplied by any positional value is still 0.","Both A and R true, R explains A","A false, R true","A true, R false","Both false","A","Both correct. 0 × any place = 0, so place value = face value = 0 always."],
    ["6-maths-3","Number Play","2","Assertion (A): Kaprekar's operation on 1111 never reaches 6174. Reason (R): 1111 has all identical digits — gives 0000 and loops.","Both A and R true, R explains A","A true, R false","A false, R true","Both false","A","1111 → 1111−1111 = 0 → stays at 0. Needs at least 2 different digits."],
    ["6-maths-3","Number Play","2","Assertion (A): A 3-digit palindrome is always divisible by 11. Reason (R): ABA = 101A+10B, which is always divisible by 11.","A false, R true","Both true, R explains A","A true, R false","Both false","A","Not every 3-digit palindrome is divisible by 11 — this is a common misconception."],
  ];

  var remaining = getRemainingChapters();
  remaining.forEach(function(ch) {
    for (var ws = 1; ws <= 2; ws++) {
      for (var i = 0; i < 10; i++) {
        data.push([ch[0], ch[1], String(ws), "", "", "", "", "", "", ""]);
      }
    }
  });

  sh.getRange(1, 1, 1, 10).setValues(headers);
  sh.getRange(2, 1, data.length, 10).setValues(data);
  sh.setColumnWidth(1, 100); sh.setColumnWidth(2, 160); sh.setColumnWidth(3, 75);
  sh.setColumnWidth(4, 340); sh.setColumnWidth(5, 160); sh.setColumnWidth(6, 160);
  sh.setColumnWidth(7, 160); sh.setColumnWidth(8, 160); sh.setColumnWidth(9, 60);
  sh.setColumnWidth(10, 320);
  // Colour the answer column header green
  sh.getRange(1, 9).setBackground("#188038");
}

// ═════════════════════════════════════════════════════════════
// QA TAB
// ═════════════════════════════════════════════════════════════
function setupQA(sh) {
  var headers = [["chapter_id","chapter_name","worksheet","question","answer","type"]];
  var data = [
    // 6-maths-1 WS1
    ["6-maths-1","Patterns in Mathematics","1","What is a pattern? Give two examples from daily life.","A pattern is an arrangement that follows a fixed rule. Examples: (1) Days of the week repeat in the pattern Mon, Tue, Wed… (2) Traffic lights follow: Red → Green → Yellow → Red.","short"],
    ["6-maths-1","Patterns in Mathematics","1","Write the first 6 triangular numbers and show how they are formed.","Triangular numbers: 1, 3, 6, 10, 15, 21. Formed by: T1=1, T2=1+2=3, T3=1+2+3=6, T4=10, T5=15, T6=21. Formula: Tn = n(n+1)/2.","short"],
    ["6-maths-1","Patterns in Mathematics","1","Define square numbers. Find the 7th square number.","Square numbers are products of a number multiplied by itself: n². First 7: 1, 4, 9, 16, 25, 36, 49. The 7th square number = 7² = 49.","short"],
    ["6-maths-1","Patterns in Mathematics","1","What is the Fibonacci sequence? Write its first 10 terms.","Fibonacci sequence: each term = sum of two previous terms. Starting: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55. Rule: F(n) = F(n-1) + F(n-2).","short"],
    ["6-maths-1","Patterns in Mathematics","1","How are patterns used in everyday life? Give three examples.","(1) Music: rhythmic patterns in beats. (2) Nature: petal count in flowers follows Fibonacci. (3) Architecture: repeating tile designs. Patterns help predict, plan, and create efficiently.","short"],
    // 6-maths-1 WS2
    ["6-maths-1","Patterns in Mathematics","2","What is Pascal's Triangle? Write the first 5 rows and explain one pattern you notice.","Pascal's Triangle: each entry = sum of two entries above it. Rows: 1 / 1,1 / 1,2,1 / 1,3,3,1 / 1,4,6,4,1. Pattern: row sums are powers of 2 (1,2,4,8,16). Diagonal 3 gives triangular numbers.","long"],
    ["6-maths-1","Patterns in Mathematics","2","Explain why the digit sum of every multiple of 9 is divisible by 9. Use three examples.","Because our base-10 system means 10 ≡ 1 (mod 9), so any number equals the sum of its digits modulo 9. Examples: 18→1+8=9 (div by 9✓), 81→8+1=9 (div by 9✓), 162→1+6+2=9 (div by 9✓). This is why the divisibility rule works.","long"],
    ["6-maths-1","Patterns in Mathematics","2","Create your own pattern with at least 8 terms. State the rule and find the 12th term.","Example: 3, 7, 11, 15, 19, 23, 27, 31… Rule: start at 3, add 4 each time. Formula: T(n) = 3 + 4(n-1) = 4n - 1. 12th term = 4(12)-1 = 47.","long"],
    ["6-maths-1","Patterns in Mathematics","2","What are odd numbers? Prove that the sum of first n odd numbers equals n².","Odd numbers: integers not divisible by 2 (1, 3, 5, 7…). Proof: 1=1²; 1+3=4=2²; 1+3+5=9=3²; 1+3+5+7=16=4². By induction, 1+3+5+...+(2n-1) = n². This is shown visually by building square dot grids from L-shaped odd-number borders.","long"],
    ["6-maths-1","Patterns in Mathematics","2","Describe three real-world applications of mathematical patterns.","Example 1 — Weather: temperature patterns through seasons help forecast future weather. Example 2 — Population growth: if population doubles every 10 years (1000, 2000, 4000…), the geometric pattern helps predict future population and plan infrastructure. Example 3 — Finance: compound interest follows a pattern A=P(1+r)ⁿ, used to calculate savings growth. Patterns save time, reduce errors, and allow generalising from specific observations.","long"],
    // 6-maths-2 WS1
    ["6-maths-2","Lines and Angles","1","Define a line segment and a ray. How are they different from a line?","A line segment has two endpoints and a fixed measurable length (e.g., AB). A ray has one endpoint and extends infinitely in one direction (e.g., ray AB starting at A through B). A line has no endpoints and extends infinitely in both directions.","short"],
    ["6-maths-2","Lines and Angles","1","What are complementary and supplementary angles? Give one example of each.","Complementary angles: two angles whose sum is 90°. Example: 40° and 50°. Supplementary angles: two angles whose sum is 180°. Example: 120° and 60°.","short"],
    ["6-maths-2","Lines and Angles","1","Find the value of x if angles (3x+10)° and (2x+5)° form a linear pair.","Linear pair sum = 180°. (3x+10)+(2x+5)=180. 5x+15=180. 5x=165. x=33°. The angles are 109° and 71°. Check: 109+71=180° ✓","short"],
    ["6-maths-2","Lines and Angles","1","What are vertically opposite angles? Are they always equal?","When two lines intersect, angles formed directly opposite each other are vertically opposite. Yes, they are always equal. If one angle is 65°, the angle directly opposite is also 65°.","short"],
    ["6-maths-2","Lines and Angles","1","State three angle relationships when a transversal cuts two parallel lines.","1. Corresponding angles are equal (same position at each intersection). 2. Alternate interior angles are equal (between lines, opposite sides of transversal). 3. Co-interior (same-side interior) angles are supplementary — they add to 180°.","short"],
    // 6-maths-2 WS2
    ["6-maths-2","Lines and Angles","2","Explain with examples the angles formed when a transversal cuts two parallel lines.","When a transversal crosses two parallel lines (l ∥ m), 8 angles are formed. Corresponding angles (∠1 and ∠5) — same position, equal. Alternate interior angles (∠3 and ∠6) — between lines, opposite sides, equal. Co-interior angles (∠3 and ∠5) — same side, supplementary (sum=180°). These are used to find unknown angles.","long"],
    ["6-maths-2","Lines and Angles","2","The angles of a triangle are in the ratio 2:3:5. Find each angle and identify the triangle type.","Sum of angles = 180°. Ratio 2:3:5, total parts=10. Each part=180°÷10=18°. Angles: 2×18=36°, 3×18=54°, 5×18=90°. Since one angle is 90°, it is a right-angled triangle.","long"],
    ["6-maths-2","Lines and Angles","2","Give three real-life examples each of parallel lines and perpendicular lines.","Parallel: (1) Railway tracks. (2) Opposite edges of a door frame. (3) Lines on a ruled notebook. Perpendicular: (1) A wall meeting the floor. (2) Clock hands at 3:00. (3) Corner of a book.","long"],
    ["6-maths-2","Lines and Angles","2","Two adjacent angles form a straight line. One angle is 3 times the other. Find both angles.","Let smaller angle = x°. Larger = 3x°. Linear pair: x+3x=180°. 4x=180°. x=45°. Smaller=45°, Larger=135°. Verification: 45°+135°=180° ✓","short"],
    ["6-maths-2","Lines and Angles","2","Write two properties each of a line, ray, and line segment.","Line: (1) Extends infinitely in both directions — no endpoints. (2) Infinite length, cannot be measured. Ray: (1) Has one fixed starting point. (2) Named from starting point — Ray AB starts at A. Line Segment: (1) Two endpoints, definite measurable length. (2) Shortest distance between two points.","short"],
    // 6-maths-3 WS1
    ["6-maths-3","Number Play","1","What is place value? Find the place value and face value of 8 in 38,542.","Place value is the value of a digit based on its position. In 38,542, the digit 8 is in the thousands place. Place value of 8 = 8 × 1000 = 8000. Face value of 8 = 8 (always the digit itself).","short"],
    ["6-maths-3","Number Play","1","What is Kaprekar's constant? Show the steps for any 4-digit number of your choice.","Kaprekar's constant is 6174. Example for 5321: 5321−1235=4086 → 8640−0468=8172 → 8721−1278=7443 → 7443−3447=3996 → 9963−3699=6264 → 6642−2466=4176 → 7641−1467=6174. Reached 6174!","long"],
    ["6-maths-3","Number Play","1","Verify that 153 is an Armstrong number. Also check if 123 is an Armstrong number.","153 is a 3-digit number. Sum = 1³+5³+3³ = 1+125+27 = 153. Since sum = number, 153 IS an Armstrong number. For 123: 1³+2³+3³ = 1+8+27 = 36 ≠ 123. So 123 is NOT an Armstrong number.","short"],
    ["6-maths-3","Number Play","1","Round 47,836 to the nearest (a) ten, (b) hundred, (c) thousand.","(a) Nearest ten: units digit = 6 (≥5) → round up → 47,840. (b) Nearest hundred: tens digit = 3 (<5) → round down → 47,800. (c) Nearest thousand: hundreds digit = 8 (≥5) → round up → 48,000.","short"],
    ["6-maths-3","Number Play","1","Check if 8,142 reaches 6174 using Kaprekar's operation (show at least 2 steps).","Step 1: Descending: 8421, Ascending: 1248. 8421−1248=7173. Step 2: Descending: 7731, Ascending: 1377. 7731−1377=6354. Step 3: 6543−3456=3087. Continue until reaching 6174.","short"],
    // 6-maths-3 WS2
    ["6-maths-3","Number Play","2","Explain with examples how rounding is used in everyday life. When might overestimation be better than underestimation?","Rounding in daily life: (1) Shopping — rounding prices to nearest ₹10 for quick budgeting. (2) Time — saying a journey takes about 2 hours instead of 1 hour 47 minutes. (3) Population — saying a city has about 12 lakh people. Overestimation is better when: planning expenses (budget a bit more to avoid shortfall), estimating materials for construction, medical dosing safety margins.","long"],
    ["6-maths-3","Number Play","2","Why is 0 considered an even number? Explain using the divisibility rule.","A number is even if divisible by 2 with remainder 0. 0 ÷ 2 = 0 with remainder 0. Therefore 0 satisfies the definition and is even. Even numbers follow ...−4,−2,0,2,4... — 0 fits between −2 and 2.","short"],
    ["6-maths-3","Number Play","2","Write the palindrome trick for 89. Show at least 3 steps.","89+98=187. 187+781=968. 968+869=1837. 1837+7381=9218. Continue... 89 is known as a delayed palindrome — it takes 24 steps to reach a palindrome!","long"],
    ["6-maths-3","Number Play","2","State and explain four divisibility rules with examples.","1. Div by 2: last digit 0,2,4,6,8. Example: 348 ✓. 2. Div by 3: digit sum divisible by 3. Example: 453→4+5+3=12 ✓. 3. Div by 9: digit sum divisible by 9. Example: 729→7+2+9=18 ✓. 4. Div by 11: alternating digit sum difference is 0 or divisible by 11. Example: 121→1−2+1=0 ✓.","long"],
    ["6-maths-3","Number Play","2","Explain the difference between estimation and approximation with one example each.","Estimation: rough calculation using mental arithmetic or rounding. Example: 23×48 ≈ 23×50 = ₹1150. Approximation: finding a value close to exact answer to a stated accuracy. Example: exact answer 1104; approximated to nearest hundred = 1100. Estimation is a process; approximation is the result.","long"],
  ];

  var remaining = getRemainingChapters();
  remaining.forEach(function(ch) {
    for (var ws = 1; ws <= 2; ws++) {
      for (var i = 0; i < 5; i++) {
        data.push([ch[0], ch[1], String(ws), "", "", "short"]);
      }
    }
  });

  sh.getRange(1, 1, 1, 6).setValues(headers);
  sh.getRange(2, 1, data.length, 6).setValues(data);
  sh.setColumnWidth(1, 100); sh.setColumnWidth(2, 180); sh.setColumnWidth(3, 75);
  sh.setColumnWidth(4, 340); sh.setColumnWidth(5, 400); sh.setColumnWidth(6, 70);
}

// ═════════════════════════════════════════════════════════════
// REMAINING CHAPTERS (75 chapters after 6-maths-1/2/3)
// ═════════════════════════════════════════════════════════════
function getRemainingChapters() {
  return [
    ["6-maths-4","Data Handling and Presentation"],
    ["6-maths-5","Prime Time"],
    ["6-maths-6","Perimeter and Area"],
    ["6-maths-7","Fractions"],
    ["6-maths-8","Playing with Constructions"],
    ["6-maths-9","Symmetry"],
    ["6-maths-10","The Other Side of Zero"],
    ["6-science-1","The Wonderful World of Science"],
    ["6-science-2","Diversity in the Living World"],
    ["6-science-3","Mindful Eating: A Path to a Healthy Body"],
    ["6-science-4","Seeing Without Touching"],
    ["6-science-5","A Journey Through States of Matter"],
    ["6-science-6","Nature's Treasure"],
    ["6-science-7","Temperature and its Measurement"],
    ["6-science-8","A Treat for Mosquitoes"],
    ["6-science-9","From Mud to Pot"],
    ["6-science-10","Wonders of Light"],
    ["7-maths-1","Large Numbers Around Us"],
    ["7-maths-2","Arithmetic Expressions"],
    ["7-maths-3","A Peek Beyond the Point"],
    ["7-maths-4","Expressions using Letter-Numbers"],
    ["7-maths-5","Parallel and Intersecting Lines"],
    ["7-maths-6","Number Play"],
    ["7-maths-7","A Tale of Three Intersecting Lines"],
    ["7-maths-8","Working with Fractions"],
    ["7-maths-9","Geometric Twins"],
    ["7-maths-10","Operations with Integers"],
    ["7-maths-11","Finding Common Ground"],
    ["7-maths-12","Another Peek Beyond the Point"],
    ["7-maths-13","Connecting the Dots..."],
    ["7-maths-14","Constructions and Tilings"],
    ["7-maths-15","Finding the Unknown"],
    ["7-science-1","The Ever-Evolving World of Science"],
    ["7-science-2","Exploring Substances: Acidic, Basic, and Neutral"],
    ["7-science-3","Electricity: Circuits and their Components"],
    ["7-science-4","The World of Metals and Non-metals"],
    ["7-science-5","Changes Around Us: Physical and Chemical"],
    ["7-science-6","Adolescence: A Stage of Growth and Change"],
    ["7-science-7","Heat Transfer in Nature"],
    ["7-science-8","Measurement of Time and Motion"],
    ["7-science-9","Life Processes in Animals"],
    ["7-science-10","Life Processes in Plants"],
    ["7-science-11","Light: Shadows and Reflections"],
    ["7-science-12","Earth, Moon, and the Sun"],
    ["8-maths-1","Rational Numbers"],
    ["8-maths-2","Linear Equations in One Variable"],
    ["8-maths-3","Understanding Quadrilaterals"],
    ["8-maths-4","Practical Geometry"],
    ["8-maths-5","Data Handling"],
    ["8-maths-6","Squares and Square Roots"],
    ["8-maths-7","Cubes and Cube Roots"],
    ["8-maths-8","Comparing Quantities"],
    ["8-maths-9","Algebraic Expressions and Identities"],
    ["8-maths-10","Visualising Solid Shapes"],
    ["8-maths-11","Mensuration"],
    ["8-maths-12","Exponents and Powers"],
    ["8-maths-13","Direct and Inverse Proportions"],
    ["8-maths-14","Factorisation"],
    ["8-maths-15","Introduction to Graphs"],
    ["8-maths-16","Playing with Numbers"],
    ["8-science-1","Exploring the Investigative World of Science"],
    ["8-science-2","The Invisible Living World: Beyond Our Naked Eye"],
    ["8-science-3","Health: The Ultimate Treasure"],
    ["8-science-4","Electricity: Magnetic and Heating Effects"],
    ["8-science-5","Exploring Forces"],
    ["8-science-6","Pressure, Winds, Storms, and Cyclones"],
    ["8-science-7","Particulate Nature of Matter"],
    ["8-science-8","Nature of Matter: Elements, Compounds, and Mixtures"],
    ["8-science-9","The Amazing World of Solutes, Solvents, and Solutions"],
    ["8-science-10","Light: Mirrors and Lenses"],
    ["8-science-11","Keeping Time with the Skies"],
    ["8-science-12","How Nature Works in Harmony"],
    ["8-science-13","Our Home: Earth, a Unique Life Sustaining Planet"],
  ];
}
