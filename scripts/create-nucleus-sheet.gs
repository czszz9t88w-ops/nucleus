/**
 * NUCLEUS CONTENT — Google Apps Script
 * ─────────────────────────────────────────────────────────────────
 * Paste this entire file into script.google.com → New Project → Run
 * It will automatically create the "Nucleus Content" spreadsheet
 * with 2 tabs (MCQ | QA), correct headers, level column, and
 * 3 pre-filled example chapters.
 *
 * Worksheet 1 → level = Elementary
 * Worksheet 2 → level = Advanced
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

  Logger.log("Creating Nucleus Content sheet...");

  // Use the default sheet for MCQ, add QA
  var mcqSheet = ss.getSheets()[0];
  mcqSheet.setName("MCQ");
  var qaSheet = ss.insertSheet("QA");

  setupMCQ(mcqSheet);
  setupQA(qaSheet);

  // Freeze header row and style it blue on both sheets
  [mcqSheet, qaSheet].forEach(function(sh) {
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

function wsToLevel(ws) { return ws === "1" ? "Elementary" : "Advanced"; }

// ═════════════════════════════════════════════════════════════
// MCQ TAB
// columns: chapter_id | chapter_name | worksheet | level |
//          question | option_a | option_b | option_c | option_d | answer | explanation
// ═════════════════════════════════════════════════════════════
function setupMCQ(sh) {
  var headers = [["chapter_id","chapter_name","worksheet","level",
                  "question","option_a","option_b","option_c","option_d","answer","explanation"]];
  var data = [
    // 6-maths-1 WS1 — Elementary
    ["6-maths-1","Patterns in Mathematics","1","Elementary","What is the next number: 1, 4, 9, 16, __?","20","25","24","21","B","Perfect squares: 1²,2²,3²,4²,5² = 25"],
    ["6-maths-1","Patterns in Mathematics","1","Elementary","The 5th triangular number is:","10","12","15","8","C","T5 = 5×6/2 = 15"],
    ["6-maths-1","Patterns in Mathematics","1","Elementary","Which is a Fibonacci number?","14","13","11","16","B","Fibonacci: 1,1,2,3,5,8,13,21 — 13 is Fibonacci"],
    ["6-maths-1","Patterns in Mathematics","1","Elementary","Digit sums of multiples of 9 are always:","Equal to 9","Divisible by 9","Odd","Even","B","Sum of digits of any multiple of 9 is always divisible by 9"],
    ["6-maths-1","Patterns in Mathematics","1","Elementary","Square numbers are also called:","Triangular numbers","Perfect squares","Prime numbers","Fibonacci numbers","B","Numbers like 1,4,9,16 formed by n×n are called perfect squares"],
    ["6-maths-1","Patterns in Mathematics","1","Elementary","What is the 4th triangular number?","6","8","10","12","C","T4 = 4×5/2 = 10"],
    ["6-maths-1","Patterns in Mathematics","1","Elementary","After 1,1,2,3,5,8 in Fibonacci, what comes next?","12","11","13","14","C","8+5 = 13"],
    ["6-maths-1","Patterns in Mathematics","1","Elementary","Triangular arrangement with 4 rows has how many dots?","8","10","12","6","B","1+2+3+4 = 10 dots = T4"],
    ["6-maths-1","Patterns in Mathematics","1","Elementary","What is 2n−1 when n=5?","8","9","10","11","B","2(5)−1 = 9"],
    ["6-maths-1","Patterns in Mathematics","1","Elementary","Which is the sequence of square numbers?","1,2,3,4,5","1,3,6,10,15","1,4,9,16,25","2,4,6,8,10","C","1²=1, 2²=4, 3²=9, 4²=16, 5²=25"],
    // 6-maths-1 WS2 — Advanced
    ["6-maths-1","Patterns in Mathematics","2","Advanced","A: Square numbers always end in 0,1,4,5,6,9. R: These are the only possible units digits of n².","Both A&R true, R explains A","Both true, R doesn't explain A","A true, R false","Both false","A","Correct — squaring any digit 0-9 gives only these units digits."],
    ["6-maths-1","Patterns in Mathematics","2","Advanced","A: 0 is a triangular number. R: T0 = 0×1/2 = 0.","Both A&R true, R explains A","A false, R true","A true, R false","Both false","A","Both correct. T0 = 0 is valid."],
    ["6-maths-1","Patterns in Mathematics","2","Advanced","A: Sum of first n odd numbers = n². R: 1+3+5+...+(2n-1) = n².","Both A&R true, R explains A","Both true, R doesn't explain A","A true, R false","Both false","A","Both correct and R is the mathematical proof of A."],
    ["6-maths-1","Patterns in Mathematics","2","Advanced","A: Pascal's triangle has only odd numbers. R: Each entry is sum of two previous entries.","A false, R true","Both true","Both false","A true, R false","A","Pascal's triangle contains even numbers too. R is true but A is false."],
    ["6-maths-1","Patterns in Mathematics","2","Advanced","A: Fibonacci numbers grow by ratio ≈1.618. R: This ratio is the Golden Ratio.","Both A&R true, R explains A","A true, R false","A false, R true","Both false","A","Both correct. Consecutive Fibonacci numbers approach φ ≈ 1.618."],
    ["6-maths-1","Patterns in Mathematics","2","Advanced","A: Every even number is a triangular number. R: Triangular numbers include 6, 10, 28.","A false, R true","Both true","A true, R false","Both false","A","Not every even number is triangular (e.g. 8 is not). R lists some correctly."],
    ["6-maths-1","Patterns in Mathematics","2","Advanced","A: Sequence 2,6,12,20,30 relates to triangular numbers. R: Each term = n(n+1).","Both A&R true, R explains A","A false, R true","A true, R false","Both false","A","Both correct. n(n+1) = 2×Tn."],
    ["6-maths-1","Patterns in Mathematics","2","Advanced","A: 100 is both a perfect square and a triangular number. R: T13=91, T14=105.","A false, R true","Both true, R explains A","A true, R false","Both false","A","100 is a perfect square but NOT a triangular number — falls between T13 and T14."],
    ["6-maths-1","Patterns in Mathematics","2","Advanced","A: In 1,4,9,16 each term differs from next by consecutive odd numbers. R: 4-1=3, 9-4=5, 16-9=7.","Both A&R true, R explains A","A false, R true","A true, R false","Both false","A","Both correct. Differences between consecutive perfect squares are 3,5,7,9..."],
    ["6-maths-1","Patterns in Mathematics","2","Advanced","A: The sequence 2,4,8,16 is a Fibonacci sequence. R: Each term doubles.","A false, R true","Both true","A true, R false","Both false","A","This is a geometric sequence, not Fibonacci. R about doubling is correct."],
    // 6-maths-2 WS1 — Elementary
    ["6-maths-2","Lines and Angles","1","Elementary","An angle measuring 145° is called:","Acute","Right","Obtuse","Reflex","C","Angles between 90° and 180° are obtuse."],
    ["6-maths-2","Lines and Angles","1","Elementary","The complement of 37° is:","143°","53°","63°","47°","B","90° − 37° = 53°"],
    ["6-maths-2","Lines and Angles","1","Elementary","Two lines that never meet are called:","Perpendicular","Intersecting","Parallel","Concurrent","C","Parallel lines never intersect."],
    ["6-maths-2","Lines and Angles","1","Elementary","Vertically opposite angles are always:","Supplementary","Complementary","Equal","Adjacent","C","When two lines intersect, vertically opposite angles are always equal."],
    ["6-maths-2","Lines and Angles","1","Elementary","The supplement of 75° is:","15°","105°","285°","95°","B","180° − 75° = 105°"],
    ["6-maths-2","Lines and Angles","1","Elementary","A ray has:","Two endpoints","One endpoint","No endpoints","Three endpoints","B","A ray starts at one fixed endpoint and extends infinitely."],
    ["6-maths-2","Lines and Angles","1","Elementary","A straight angle measures:","90°","270°","360°","180°","D","A straight angle = 180°."],
    ["6-maths-2","Lines and Angles","1","Elementary","Alternate interior angles on parallel lines are:","Supplementary","Complementary","Equal","Reflex","C","Always equal when lines are parallel."],
    ["6-maths-2","Lines and Angles","1","Elementary","A linear pair of angles always sums to:","90°","180°","270°","360°","B","Linear pair lies on a straight line → 180°."],
    ["6-maths-2","Lines and Angles","1","Elementary","Which is NOT a type of angle?","Acute","Obtuse","Diagonal","Reflex","C","Diagonal is a line segment, not an angle type."],
    // 6-maths-2 WS2 — Advanced
    ["6-maths-2","Lines and Angles","2","Advanced","A: A right angle is 90°. R: Formed when two perpendicular lines meet.","Both A&R true, R explains A","Both true, R doesn't explain A","A true, R false","A false, R true","A","Both correct. Perpendicular lines meet at 90°."],
    ["6-maths-2","Lines and Angles","2","Advanced","A: Complementary angles must be adjacent. R: Their sum = 90°.","Both A&R true, R explains A","A false, R true","Both false","A true, R false","B","Complementary angles need NOT be adjacent. The reason is the correct definition."],
    ["6-maths-2","Lines and Angles","2","Advanced","A: Vertically opposite angles are supplementary. R: Formed by two intersecting lines.","Both true, R explains A","A false, R true","Both false","A true, R false","B","Vertically opposite angles are EQUAL, not supplementary."],
    ["6-maths-2","Lines and Angles","2","Advanced","A: A reflex angle is between 180° and 360°. R: Angles greater than a straight angle are reflex.","Both A&R true, R explains A","A true, R false","A false, R true","Both false","A","Both correct. Reflex angles exceed 180°."],
    ["6-maths-2","Lines and Angles","2","Advanced","A: Two parallel lines can meet at infinity. R: Parallel lines have no common point.","A true, R false","A false, R true","Both true","Both false","B","Parallel lines NEVER meet. The reason is the correct definition."],
    ["6-maths-2","Lines and Angles","2","Advanced","A: Co-interior angles on parallel lines are supplementary. R: They are on the same side of the transversal.","Both A&R true, R explains A","Both true, R doesn't explain A","A true, R false","A false, R true","B","Both true but same-side is a description, not the reason they sum to 180°."],
    ["6-maths-2","Lines and Angles","2","Advanced","A: All right angles are equal. R: Every right angle measures 90°.","Both A&R true, R explains A","A true, R false","A false, R true","Both false","A","All right angles = 90°, so they are all equal. R correctly explains A."],
    ["6-maths-2","Lines and Angles","2","Advanced","A: A straight angle is also a reflex angle. R: 180° is less than 360°.","Both true, R explains A","A false, R true","Both false","A true, R false","B","Straight angle (180°) is NOT reflex (must exceed 180°)."],
    ["6-maths-2","Lines and Angles","2","Advanced","A: Infinitely many lines pass through one point. R: Through one point, any number of lines can be drawn.","Both A&R true, R explains A","Both true, R doesn't explain A","A true, R false","A false, R true","A","Both correct. R correctly states the reason."],
    ["6-maths-2","Lines and Angles","2","Advanced","A: Corresponding angles are equal when lines are parallel. R: They are on same side in matching positions.","Both A&R true, R explains A","A true, R false","A false, R true","Both false","A","Corresponding angles are equal for parallel lines."],
    // 6-maths-3 WS1 — Elementary
    ["6-maths-3","Number Play","1","Elementary","Place value of 7 in 47,835?","7","700","7000","70","C","7 is in thousands place. Place value = 7×1000 = 7000."],
    ["6-maths-3","Number Play","1","Elementary","Which number is a palindrome?","1234","1221","1342","1023","B","1221 reads the same forwards and backwards."],
    ["6-maths-3","Number Play","1","Elementary","Round 6,847 to the nearest thousand:","6000","7000","6800","6900","B","Hundreds digit = 8 (≥5) → round up: 7000."],
    ["6-maths-3","Number Play","1","Elementary","Kaprekar's constant for 4-digit numbers:","1729","6174","9801","4321","B","6174 — any 4-digit number reaches it."],
    ["6-maths-3","Number Play","1","Elementary","Which is an Armstrong number?","123","153","200","321","B","153 = 1³+5³+3³ = 153 ✓"],
    ["6-maths-3","Number Play","1","Elementary","A number is divisible by 9 if:","It is even","Ends in 0","Digit sum divisible by 9","Divisible by 3","C","Digit sum must be divisible by 9."],
    ["6-maths-3","Number Play","1","Elementary","Face value of 6 in 76,432?","6000","600","60","6","D","Face value is always the digit itself."],
    ["6-maths-3","Number Play","1","Elementary","Which is NOT a divisibility rule for 5?","Ends in 0","Ends in 5","Digit sum div by 5","Both A and B are correct","C","Divisibility by 5: ends in 0 or 5."],
    ["6-maths-3","Number Play","1","Elementary","Round 3.74 to the nearest whole number:","3","4","3.7","3.8","B","7 ≥ 5 → round up: 4."],
    ["6-maths-3","Number Play","1","Elementary","After 57+75=132, what is the next step in the palindrome trick?","132+231=363","132+123=255","132+321=453","132+213=345","A","Reverse 132 → 231. Add: 132+231=363 — a palindrome!"],
    // 6-maths-3 WS2 — Advanced
    ["6-maths-3","Number Play","2","Advanced","A: 1729 is smallest number expressible as sum of two cubes in two ways. R: 1729 = 1³+12³ = 9³+10³.","Both A&R true, R explains A","Both true, R doesn't explain A","A true, R false","A false, R true","A","1729 is Hardy-Ramanujan number. Both correct and R explains A."],
    ["6-maths-3","Number Play","2","Advanced","A: Rounding always gives the exact answer. R: Rounded numbers are approximations.","A true, R false","A false, R true","Both true","Both false","B","Rounding gives APPROXIMATE value, not exact."],
    ["6-maths-3","Number Play","2","Advanced","A: 371 is an Armstrong number. R: 3³+7³+1³ = 27+343+1 = 371.","Both A&R true, R explains A","A false, R true","A true, R false","Both false","A","Both correct. 371 is indeed an Armstrong number."],
    ["6-maths-3","Number Play","2","Advanced","A: Every palindrome is divisible by 11. R: 121 ÷ 11 = 11.","A false, R true","Both true","A true, R false","Both false","A","Not every palindrome is divisible by 11. R is one specific case only."],
    ["6-maths-3","Number Play","2","Advanced","A: Estimated sum of 248 and 352 is 600. R: 248≈250 and 352≈350; 250+350=600.","Both A&R true, R explains A","A true, R false","A false, R true","Both false","A","Both correct. Rounding to nearest 50 gives 250+350=600."],
    ["6-maths-3","Number Play","2","Advanced","A: 0 is neither odd nor even. R: 0 is divisible by 2, giving remainder 0.","A false, R true","Both true, R explains A","A true, R false","Both false","A","0 IS even. Assertion is false; R is true."],
    ["6-maths-3","Number Play","2","Advanced","A: 100 is a perfect square. R: 100 = 10 × 10.","Both A&R true, R explains A","Both true, R doesn't explain A","A true, R false","A false, R true","A","100 is a perfect square and R explains why."],
    ["6-maths-3","Number Play","2","Advanced","A: Place value and face value of 0 are always the same. R: Zero × any positional value = 0.","Both A&R true, R explains A","A false, R true","A true, R false","Both false","A","Both correct. 0×any place = 0."],
    ["6-maths-3","Number Play","2","Advanced","A: Kaprekar's operation on 1111 never reaches 6174. R: 1111 has all identical digits — gives 0000.","Both A&R true, R explains A","A true, R false","A false, R true","Both false","A","1111→0→0. Needs at least 2 different digits."],
    ["6-maths-3","Number Play","2","Advanced","A: A 3-digit palindrome is always divisible by 11. R: ABA = 101A+10B, always divisible by 11.","A false, R true","Both true, R explains A","A true, R false","Both false","A","Not every 3-digit palindrome is divisible by 11 — common misconception."],
  ];

  var remaining = getRemainingChapters();
  remaining.forEach(function(ch) {
    ["1","2"].forEach(function(ws) {
      var level = wsToLevel(ws);
      for (var i = 0; i < 10; i++) {
        data.push([ch[0], ch[1], ws, level, "", "", "", "", "", "", ""]);
      }
    });
  });

  sh.getRange(1, 1, 1, 11).setValues(headers);
  sh.getRange(2, 1, data.length, 11).setValues(data);
  // Column widths: A=100, B=180, C=75, D=100, E=340, F-I=160, J=60, K=320
  [100,180,75,100,340,160,160,160,160,60,320].forEach(function(w,i){sh.setColumnWidth(i+1,w);});
  // Green header on answer column (col 10)
  sh.getRange(1, 10).setBackground("#188038");
}

// ═════════════════════════════════════════════════════════════
// QA TAB
// columns: chapter_id | chapter_name | worksheet | level | question | answer | type
// ═════════════════════════════════════════════════════════════
function setupQA(sh) {
  var headers = [["chapter_id","chapter_name","worksheet","level","question","answer","type"]];
  var data = [
    // 6-maths-1 WS1 — Elementary
    ["6-maths-1","Patterns in Mathematics","1","Elementary","What is a pattern? Give two examples from daily life.","A pattern follows a fixed rule. (1) Days of the week repeat: Mon,Tue,Wed… (2) Traffic lights: Red→Green→Yellow→Red.","short"],
    ["6-maths-1","Patterns in Mathematics","1","Elementary","Write the first 6 triangular numbers and show how they are formed.","1,3,6,10,15,21. Formed by adding consecutive numbers. Tn = n(n+1)/2.","short"],
    ["6-maths-1","Patterns in Mathematics","1","Elementary","Define square numbers. Find the 7th square number.","Square numbers = n². First 7: 1,4,9,16,25,36,49. 7th = 7² = 49.","short"],
    ["6-maths-1","Patterns in Mathematics","1","Elementary","What is the Fibonacci sequence? Write its first 10 terms.","Each term = sum of two previous. First 10: 1,1,2,3,5,8,13,21,34,55.","short"],
    ["6-maths-1","Patterns in Mathematics","1","Elementary","How are patterns used in everyday life? Give three examples.","(1) Music: rhythmic beats. (2) Nature: flower petals follow Fibonacci. (3) Architecture: repeating tile designs.","short"],
    // 6-maths-1 WS2 — Advanced
    ["6-maths-1","Patterns in Mathematics","2","Advanced","What is Pascal's Triangle? Write the first 5 rows and explain one pattern you notice.","Each entry = sum of two entries above it. Rows: 1/1,1/1,2,1/1,3,3,1/1,4,6,4,1. Pattern: Row sums are powers of 2 (1,2,4,8,16).","long"],
    ["6-maths-1","Patterns in Mathematics","2","Advanced","Explain why the digit sum of every multiple of 9 is divisible by 9. Use three examples.","In base-10, 10≡1(mod 9), so number≡digit sum(mod 9). Examples: 18→9✓, 81→9✓, 162→9✓.","long"],
    ["6-maths-1","Patterns in Mathematics","2","Advanced","Create your own pattern with at least 8 terms. State the rule and find the 12th term.","Example: 3,7,11,15,19,23,27,31… Rule: add 4. Formula: T(n)=4n−1. 12th term=47.","long"],
    ["6-maths-1","Patterns in Mathematics","2","Advanced","Prove that the sum of first n odd numbers equals n².","1=1², 1+3=4=2², 1+3+5=9=3², 1+3+5+7=16=4². By induction: 1+3+…+(2n-1)=n².","long"],
    ["6-maths-1","Patterns in Mathematics","2","Advanced","Describe three real-world applications of mathematical patterns.","1. Weather forecasting from seasonal patterns. 2. Population growth prediction. 3. Compound interest A=P(1+r)ⁿ.","long"],
    // 6-maths-2 WS1 — Elementary
    ["6-maths-2","Lines and Angles","1","Elementary","Define a line segment and a ray. How are they different from a line?","Line segment: two endpoints, fixed length. Ray: one endpoint, extends one way infinitely. Line: no endpoints, extends both ways infinitely.","short"],
    ["6-maths-2","Lines and Angles","1","Elementary","What are complementary and supplementary angles? Give one example of each.","Complementary: sum=90°. Example: 40°+50°. Supplementary: sum=180°. Example: 120°+60°.","short"],
    ["6-maths-2","Lines and Angles","1","Elementary","Find x if angles (3x+10)° and (2x+5)° form a linear pair.","(3x+10)+(2x+5)=180 → 5x+15=180 → x=33°. Angles: 109° and 71°. Check: 109+71=180° ✓","short"],
    ["6-maths-2","Lines and Angles","1","Elementary","What are vertically opposite angles? Are they always equal?","Angles formed opposite each other when two lines intersect. Yes, always equal.","short"],
    ["6-maths-2","Lines and Angles","1","Elementary","State three angle relationships when a transversal cuts two parallel lines.","1. Corresponding angles = Equal. 2. Alternate interior angles = Equal. 3. Co-interior angles = Supplementary (180°).","short"],
    // 6-maths-2 WS2 — Advanced
    ["6-maths-2","Lines and Angles","2","Advanced","Explain the angles formed when a transversal cuts two parallel lines.","8 angles form. Corresponding angles: equal. Alternate interior: equal. Co-interior: supplementary (180°). Used to find unknown angles.","long"],
    ["6-maths-2","Lines and Angles","2","Advanced","Triangle angles are in ratio 2:3:5. Find each angle and identify the triangle type.","Sum=180°, parts=10, each part=18°. Angles: 36°,54°,90°. Since one angle=90°, it is a right-angled triangle.","long"],
    ["6-maths-2","Lines and Angles","2","Advanced","Give three real-life examples each of parallel lines and perpendicular lines.","Parallel: railway tracks, door frame edges, ruled notebook lines. Perpendicular: wall meets floor, clock hands at 3:00, book corner.","long"],
    ["6-maths-2","Lines and Angles","2","Advanced","Two adjacent angles form a straight line. One angle is 3 times the other. Find both angles.","x+3x=180° → 4x=180° → x=45°. Angles: 45° and 135°. Check: 45+135=180° ✓","short"],
    ["6-maths-2","Lines and Angles","2","Advanced","Write two properties each of a line, ray, and line segment.","Line: no endpoints; infinite length. Ray: one endpoint; extends one way. Line Segment: two endpoints; definite measurable length.","short"],
    // 6-maths-3 WS1 — Elementary
    ["6-maths-3","Number Play","1","Elementary","What is place value? Find place value and face value of 8 in 38,542.","Place value: value based on position. 8 is in thousands place. Place value=8000. Face value=8 (always the digit itself).","short"],
    ["6-maths-3","Number Play","1","Elementary","What is Kaprekar's constant? Show steps for any 4-digit number.","Kaprekar's constant=6174. Example 5321: 5321−1235=4086 → 8640−0468=8172 → …→6174 ✓","long"],
    ["6-maths-3","Number Play","1","Elementary","Verify that 153 is an Armstrong number. Also check if 123 is.","153: 1³+5³+3³=1+125+27=153 ✓ IS Armstrong. 123: 1³+2³+3³=36≠123 ✗ NOT Armstrong.","short"],
    ["6-maths-3","Number Play","1","Elementary","Round 47,836 to nearest (a) ten, (b) hundred, (c) thousand.","(a) 47,840 (b) 47,800 (c) 48,000","short"],
    ["6-maths-3","Number Play","1","Elementary","Check if 8,142 reaches 6174 using Kaprekar's operation (show 2 steps).","Step 1: 8421−1248=7173. Step 2: 7731−1377=6354. Step 3: 6543−3456=3087. Continue until 6174.","short"],
    // 6-maths-3 WS2 — Advanced
    ["6-maths-3","Number Play","2","Advanced","Explain how rounding is used in everyday life. When is overestimation better?","Rounding: shopping budgets, time estimates, population figures. Overestimation better when: planning expenses, construction materials, medical safety margins.","long"],
    ["6-maths-3","Number Play","2","Advanced","Why is 0 considered an even number? Explain using the divisibility rule.","Even: divisible by 2 with remainder 0. 0÷2=0 remainder 0. Therefore 0 IS even. Even numbers: …-4,-2,0,2,4…","short"],
    ["6-maths-3","Number Play","2","Advanced","Write the palindrome trick for 89. Show at least 3 steps.","89+98=187 → 187+781=968 → 968+869=1837 → … 89 is a 'delayed palindrome' — takes 24 steps!","long"],
    ["6-maths-3","Number Play","2","Advanced","State and explain four divisibility rules with examples.","1. By 2: last digit 0,2,4,6,8. 2. By 3: digit sum div by 3. 3. By 9: digit sum div by 9. 4. By 11: alternating digit sum diff=0 or div by 11.","long"],
    ["6-maths-3","Number Play","2","Advanced","Explain the difference between estimation and approximation with one example each.","Estimation: rough calc. 23×48≈23×50=1150. Approximation: close to exact to stated accuracy. 1104→1100 (nearest 100). Estimation is a process; approximation is the result.","long"],
  ];

  var remaining = getRemainingChapters();
  remaining.forEach(function(ch) {
    ["1","2"].forEach(function(ws) {
      var level = wsToLevel(ws);
      for (var i = 0; i < 5; i++) {
        data.push([ch[0], ch[1], ws, level, "", "", "short"]);
      }
    });
  });

  sh.getRange(1, 1, 1, 7).setValues(headers);
  sh.getRange(2, 1, data.length, 7).setValues(data);
  [100,180,75,100,340,400,70].forEach(function(w,i){sh.setColumnWidth(i+1,w);});
}

// ═════════════════════════════════════════════════════════════
// REMAINING CHAPTERS (all except pre-filled 6-maths-1/2/3
// and excluded introductory science ch-1 for each class)
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
    ["6-science-2","Diversity in the Living World"],
    ["6-science-3","Mindful Eating: A Path to a Healthy Body"],
    ["6-science-4","Exploring Magnets"],
    ["6-science-5","Measurement of Length and Motion"],
    ["6-science-6","Materials Around Us"],
    ["6-science-7","Temperature and its Measurement"],
    ["6-science-8","A Journey through States of Water"],
    ["6-science-9","Methods of Separation in Everyday Life"],
    ["6-science-10","Living Creatures: Exploring their Characteristics"],
    ["6-science-11","Nature's Treasures"],
    ["6-science-12","Beyond Earth"],
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
    ["8-maths-1","A Square and A Cube"],
    ["8-maths-2","Power Play"],
    ["8-maths-3","A Story of Numbers"],
    ["8-maths-4","Quadrilaterals"],
    ["8-maths-5","Number Play"],
    ["8-maths-6","We Distribute, Yet Things Multiply"],
    ["8-maths-7","Proportional Reasoning-1"],
    ["8-maths-8","Fractions in Disguise"],
    ["8-maths-9","The Baudhayana-Pythagoras Theorem"],
    ["8-maths-10","Proportional Reasoning-2"],
    ["8-maths-11","Exploring Some Geometric Themes"],
    ["8-maths-12","Tales by Dots and Lines"],
    ["8-maths-13","Algebra Play"],
    ["8-maths-14","Area"],
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
