/**
 * NUCLEUS CONTENT — Google Apps Script
 * ─────────────────────────────────────────────────────────────────
 * Creates 3 separate spreadsheets, one per class:
 *   • Nucleus Class 6 Content
 *   • Nucleus Class 7 Content
 *   • Nucleus Class 8 Content
 *
 * Each spreadsheet has 2 tabs: MCQ | QA
 *
 * Columns:
 *   MCQ: chapter_id | chapter_name | worksheet | level |
 *        question | option_a | option_b | option_c | option_d | image_url
 *   QA:  chapter_id | chapter_name | worksheet | level | question | image_url
 *
 * Worksheet 1 → level = Elementary
 * Worksheet 2 → level = Advanced
 *
 * HOW TO RUN:
 *   Paste this file into script.google.com → New Project
 *   Run createAllNucleusSheets() to create all 3 at once,
 *   or run createClass6Sheet() / createClass7Sheet() / createClass8Sheet() individually.
 *
 * FILTER VIEWS (Option 3):
 *   Each sheet has auto-filter enabled on all columns.
 *   To save a named filter view per chapter:
 *     1. Click the chapter_id column dropdown → select one chapter
 *     2. Data → Filter views → Save as filter view
 *     3. Name it e.g. "Class 7 - Maths Ch 3 - Elementary"
 *   Switch between saved views instantly from the Filter views menu.
 *
 * AFTER RUNNING:
 *   1. Open the created sheet URL printed in Logs
 *   2. File → Share → Publish to web → Entire Document → CSV → Publish
 *   3. Copy the Sheet ID from the URL → paste into .env.local:
 *        CONTENT_SHEET_ID=your_id_here
 *   4. Run: npm run sync
 */

// ─── Entry points ────────────────────────────────────────────────

function createAllNucleusSheets() {
  createClass6Sheet();
  createClass7Sheet();
  createClass8Sheet();
  Logger.log("✅ All 3 class sheets created!");
}

function createClass6Sheet() {
  var ss = SpreadsheetApp.create("Nucleus Class 6 Content");
  Logger.log("Creating Class 6 sheet...");
  _buildSheet(ss, "6", getMCQPrefilledData(), getQAPrefilledData(),
              getClass6RemainingChapters());
  Logger.log("✅ Class 6 → " + ss.getUrl());
}

function createClass7Sheet() {
  var ss = SpreadsheetApp.create("Nucleus Class 7 Content");
  Logger.log("Creating Class 7 sheet...");
  _buildSheet(ss, "7", [], [], getClass7Chapters());
  Logger.log("✅ Class 7 → " + ss.getUrl());
}

function createClass8Sheet() {
  var ss = SpreadsheetApp.create("Nucleus Class 8 Content");
  Logger.log("Creating Class 8 sheet...");
  _buildSheet(ss, "8", [], [], getClass8Chapters());
  Logger.log("✅ Class 8 → " + ss.getUrl());
}

// ─── Sheet builder ───────────────────────────────────────────────

function _buildSheet(ss, classNum, mcqPrefilled, qaPrefilled, remaining) {
  var mcqSheet = ss.getSheets()[0];
  mcqSheet.setName("MCQ");
  var qaSheet = ss.insertSheet("QA");

  setupMCQ(mcqSheet, mcqPrefilled, remaining);
  setupQA(qaSheet, qaPrefilled, remaining);

  // Blue header row on both tabs
  [mcqSheet, qaSheet].forEach(function(sh) {
    sh.setFrozenRows(1);
    sh.getRange(1, 1, 1, sh.getLastColumn())
      .setBackground("#1a73e8").setFontColor("#ffffff").setFontWeight("bold");
    // Purple tint on image_url header (last column)
    sh.getRange(1, sh.getLastColumn()).setBackground("#7b1fa2");
  });
}

function wsToLevel(ws) { return ws === "1" ? "Elementary" : "Advanced"; }

// ═════════════════════════════════════════════════════════════════
// MCQ TAB
// columns: chapter_id | chapter_name | worksheet | level |
//          question | option_a | option_b | option_c | option_d | image_url
// ═════════════════════════════════════════════════════════════════

function setupMCQ(sh, prefilledData, remainingChapters) {
  var headers = [["chapter_id","chapter_name","worksheet","level",
                  "question","option_a","option_b","option_c","option_d","image_url"]];
  var data = prefilledData.slice();

  remainingChapters.forEach(function(ch) {
    ["1","2"].forEach(function(ws) {
      var level = wsToLevel(ws);
      for (var i = 0; i < 10; i++) {
        data.push([ch[0], ch[1], ws, level, "", "", "", "", "", ""]);
      }
    });
  });

  sh.getRange(1, 1, 1, 10).setValues(headers);
  if (data.length > 0) {
    sh.getRange(2, 1, data.length, 10).setValues(data);
  }

  // Column widths: A=100, B=180, C=75, D=100, E=340, F–I=160, J=200
  [100,180,75,100,340,160,160,160,160,200].forEach(function(w, i) {
    sh.setColumnWidth(i + 1, w);
  });

  // Freeze first 4 columns so chapter info stays visible when scrolling right
  sh.setFrozenColumns(4);

  // Auto-filter: enables dropdown arrows on all column headers
  // Teacher can then: Data → Filter views → Save as filter view
  sh.getDataRange().createFilter();
}

// ═════════════════════════════════════════════════════════════════
// QA TAB
// columns: chapter_id | chapter_name | worksheet | level | question | image_url
// ═════════════════════════════════════════════════════════════════

function setupQA(sh, prefilledData, remainingChapters) {
  var headers = [["chapter_id","chapter_name","worksheet","level","question","image_url"]];
  var data = prefilledData.slice();

  remainingChapters.forEach(function(ch) {
    ["1","2"].forEach(function(ws) {
      var level = wsToLevel(ws);
      for (var i = 0; i < 5; i++) {
        data.push([ch[0], ch[1], ws, level, "", ""]);
      }
    });
  });

  sh.getRange(1, 1, 1, 6).setValues(headers);
  if (data.length > 0) {
    sh.getRange(2, 1, data.length, 6).setValues(data);
  }

  // Column widths: A=100, B=180, C=75, D=100, E=400, F=200
  [100,180,75,100,400,200].forEach(function(w, i) {
    sh.setColumnWidth(i + 1, w);
  });

  sh.setFrozenColumns(4);
  sh.getDataRange().createFilter();
}

// ═════════════════════════════════════════════════════════════════
// PRE-FILLED DATA (Class 6 — 3 chapters)
// MCQ: [chapter_id, chapter_name, ws, level, question, opt_a..d, image_url]
// QA:  [chapter_id, chapter_name, ws, level, question, image_url]
// answer / explanation / type intentionally removed
// ═════════════════════════════════════════════════════════════════

function getMCQPrefilledData() {
  return [
    // ── 6-maths-1 WS1 — Elementary ───────────────────────
    ["6-maths-1","Patterns in Mathematics","1","Elementary","What is the next number: 1, 4, 9, 16, __?","20","25","24","21",""],
    ["6-maths-1","Patterns in Mathematics","1","Elementary","The 5th triangular number is:","10","12","15","8",""],
    ["6-maths-1","Patterns in Mathematics","1","Elementary","Which is a Fibonacci number?","14","13","11","16",""],
    ["6-maths-1","Patterns in Mathematics","1","Elementary","Digit sums of multiples of 9 are always:","Equal to 9","Divisible by 9","Odd","Even",""],
    ["6-maths-1","Patterns in Mathematics","1","Elementary","Square numbers are also called:","Triangular numbers","Perfect squares","Prime numbers","Fibonacci numbers",""],
    ["6-maths-1","Patterns in Mathematics","1","Elementary","What is the 4th triangular number?","6","8","10","12",""],
    ["6-maths-1","Patterns in Mathematics","1","Elementary","After 1,1,2,3,5,8 in Fibonacci, what comes next?","12","11","13","14",""],
    ["6-maths-1","Patterns in Mathematics","1","Elementary","Triangular arrangement with 4 rows has how many dots?","8","10","12","6",""],
    ["6-maths-1","Patterns in Mathematics","1","Elementary","What is 2n−1 when n=5?","8","9","10","11",""],
    ["6-maths-1","Patterns in Mathematics","1","Elementary","Which is the sequence of square numbers?","1,2,3,4,5","1,3,6,10,15","1,4,9,16,25","2,4,6,8,10",""],
    // ── 6-maths-1 WS2 — Advanced ─────────────────────────
    ["6-maths-1","Patterns in Mathematics","2","Advanced","A: Square numbers always end in 0,1,4,5,6,9. R: These are the only possible units digits of n².","Both A&R true, R explains A","Both true, R doesn't explain A","A true, R false","Both false",""],
    ["6-maths-1","Patterns in Mathematics","2","Advanced","A: 0 is a triangular number. R: T0 = 0×1/2 = 0.","Both A&R true, R explains A","A false, R true","A true, R false","Both false",""],
    ["6-maths-1","Patterns in Mathematics","2","Advanced","A: Sum of first n odd numbers = n². R: 1+3+5+...+(2n-1) = n².","Both A&R true, R explains A","Both true, R doesn't explain A","A true, R false","Both false",""],
    ["6-maths-1","Patterns in Mathematics","2","Advanced","A: Pascal's triangle has only odd numbers. R: Each entry is sum of two previous entries.","A false, R true","Both true","Both false","A true, R false",""],
    ["6-maths-1","Patterns in Mathematics","2","Advanced","A: Fibonacci numbers grow by ratio ≈1.618. R: This ratio is the Golden Ratio.","Both A&R true, R explains A","A true, R false","A false, R true","Both false",""],
    ["6-maths-1","Patterns in Mathematics","2","Advanced","A: Every even number is a triangular number. R: Triangular numbers include 6, 10, 28.","A false, R true","Both true","A true, R false","Both false",""],
    ["6-maths-1","Patterns in Mathematics","2","Advanced","A: Sequence 2,6,12,20,30 is related to triangular numbers. R: Each term = n(n+1).","Both A&R true, R explains A","A false, R true","A true, R false","Both false",""],
    ["6-maths-1","Patterns in Mathematics","2","Advanced","A: 100 is both a perfect square and a triangular number. R: T13=91, T14=105.","A false, R true","Both true, R explains A","A true, R false","Both false",""],
    ["6-maths-1","Patterns in Mathematics","2","Advanced","A: In 1,4,9,16 each term differs from next by consecutive odd numbers. R: 4-1=3, 9-4=5, 16-9=7.","Both A&R true, R explains A","A false, R true","A true, R false","Both false",""],
    ["6-maths-1","Patterns in Mathematics","2","Advanced","A: The sequence 2,4,8,16 is a Fibonacci sequence. R: Each term doubles.","A false, R true","Both true","A true, R false","Both false",""],
    // ── 6-maths-2 WS1 — Elementary ───────────────────────
    ["6-maths-2","Lines and Angles","1","Elementary","An angle measuring 145° is called:","Acute","Right","Obtuse","Reflex",""],
    ["6-maths-2","Lines and Angles","1","Elementary","The complement of 37° is:","143°","53°","63°","47°",""],
    ["6-maths-2","Lines and Angles","1","Elementary","Two lines that never meet are called:","Perpendicular","Intersecting","Parallel","Concurrent",""],
    ["6-maths-2","Lines and Angles","1","Elementary","Vertically opposite angles are always:","Supplementary","Complementary","Equal","Adjacent",""],
    ["6-maths-2","Lines and Angles","1","Elementary","The supplement of 75° is:","15°","105°","285°","95°",""],
    ["6-maths-2","Lines and Angles","1","Elementary","A ray has:","Two endpoints","One endpoint","No endpoints","Three endpoints",""],
    ["6-maths-2","Lines and Angles","1","Elementary","A straight angle measures:","90°","270°","360°","180°",""],
    ["6-maths-2","Lines and Angles","1","Elementary","Alternate interior angles on parallel lines are:","Supplementary","Complementary","Equal","Reflex",""],
    ["6-maths-2","Lines and Angles","1","Elementary","A linear pair of angles always sums to:","90°","180°","270°","360°",""],
    ["6-maths-2","Lines and Angles","1","Elementary","Which is NOT a type of angle?","Acute","Obtuse","Diagonal","Reflex",""],
    // ── 6-maths-2 WS2 — Advanced ─────────────────────────
    ["6-maths-2","Lines and Angles","2","Advanced","A: A right angle is 90°. R: Formed when two perpendicular lines meet.","Both A&R true, R explains A","Both true, R doesn't explain A","A true, R false","A false, R true",""],
    ["6-maths-2","Lines and Angles","2","Advanced","A: Complementary angles must be adjacent. R: Their sum = 90°.","Both A&R true, R explains A","A false, R true","Both false","A true, R false",""],
    ["6-maths-2","Lines and Angles","2","Advanced","A: Vertically opposite angles are supplementary. R: Formed by two intersecting lines.","Both true, R explains A","A false, R true","Both false","A true, R false",""],
    ["6-maths-2","Lines and Angles","2","Advanced","A: A reflex angle is between 180° and 360°. R: Angles greater than a straight angle are reflex.","Both A&R true, R explains A","A true, R false","A false, R true","Both false",""],
    ["6-maths-2","Lines and Angles","2","Advanced","A: Two parallel lines can meet at infinity. R: Parallel lines have no common point.","A true, R false","A false, R true","Both true","Both false",""],
    ["6-maths-2","Lines and Angles","2","Advanced","A: Co-interior angles on parallel lines are supplementary. R: They are on the same side of the transversal.","Both A&R true, R explains A","Both true, R doesn't explain A","A true, R false","A false, R true",""],
    ["6-maths-2","Lines and Angles","2","Advanced","A: All right angles are equal. R: Every right angle measures 90°.","Both A&R true, R explains A","A true, R false","A false, R true","Both false",""],
    ["6-maths-2","Lines and Angles","2","Advanced","A: A straight angle is also a reflex angle. R: 180° is less than 360°.","Both true, R explains A","A false, R true","Both false","A true, R false",""],
    ["6-maths-2","Lines and Angles","2","Advanced","A: Infinitely many lines pass through one point. R: Through one point, any number of lines can be drawn.","Both A&R true, R explains A","Both true, R doesn't explain A","A true, R false","A false, R true",""],
    ["6-maths-2","Lines and Angles","2","Advanced","A: Corresponding angles are equal when lines are parallel. R: They are on same side in matching positions.","Both A&R true, R explains A","A true, R false","A false, R true","Both false",""],
    // ── 6-maths-3 WS1 — Elementary ───────────────────────
    ["6-maths-3","Number Play","1","Elementary","Place value of 7 in 47,835?","7","700","7000","70",""],
    ["6-maths-3","Number Play","1","Elementary","Which number is a palindrome?","1234","1221","1342","1023",""],
    ["6-maths-3","Number Play","1","Elementary","Round 6,847 to the nearest thousand:","6000","7000","6800","6900",""],
    ["6-maths-3","Number Play","1","Elementary","Kaprekar's constant for 4-digit numbers:","1729","6174","9801","4321",""],
    ["6-maths-3","Number Play","1","Elementary","Which is an Armstrong number?","123","153","200","321",""],
    ["6-maths-3","Number Play","1","Elementary","A number is divisible by 9 if:","It is even","Ends in 0","Digit sum divisible by 9","Divisible by 3",""],
    ["6-maths-3","Number Play","1","Elementary","Face value of 6 in 76,432?","6000","600","60","6",""],
    ["6-maths-3","Number Play","1","Elementary","Which is NOT a divisibility rule for 5?","Ends in 0","Ends in 5","Digit sum div by 5","Both A and B are correct",""],
    ["6-maths-3","Number Play","1","Elementary","Round 3.74 to the nearest whole number:","3","4","3.7","3.8",""],
    ["6-maths-3","Number Play","1","Elementary","After 57+75=132, what is the next step in the palindrome trick?","132+231=363","132+123=255","132+321=453","132+213=345",""],
    // ── 6-maths-3 WS2 — Advanced ─────────────────────────
    ["6-maths-3","Number Play","2","Advanced","A: 1729 is smallest number expressible as sum of two cubes in two ways. R: 1729 = 1³+12³ = 9³+10³.","Both A&R true, R explains A","Both true, R doesn't explain A","A true, R false","A false, R true",""],
    ["6-maths-3","Number Play","2","Advanced","A: Rounding always gives the exact answer. R: Rounded numbers are approximations.","A true, R false","A false, R true","Both true","Both false",""],
    ["6-maths-3","Number Play","2","Advanced","A: 371 is an Armstrong number. R: 3³+7³+1³ = 27+343+1 = 371.","Both A&R true, R explains A","A false, R true","A true, R false","Both false",""],
    ["6-maths-3","Number Play","2","Advanced","A: Every palindrome is divisible by 11. R: 121 ÷ 11 = 11.","A false, R true","Both true","A true, R false","Both false",""],
    ["6-maths-3","Number Play","2","Advanced","A: Estimated sum of 248 and 352 is 600. R: 248≈250 and 352≈350; 250+350=600.","Both A&R true, R explains A","A true, R false","A false, R true","Both false",""],
    ["6-maths-3","Number Play","2","Advanced","A: 0 is neither odd nor even. R: 0 is divisible by 2, giving remainder 0.","A false, R true","Both true, R explains A","A true, R false","Both false",""],
    ["6-maths-3","Number Play","2","Advanced","A: 100 is a perfect square. R: 100 = 10 × 10.","Both A&R true, R explains A","Both true, R doesn't explain A","A true, R false","A false, R true",""],
    ["6-maths-3","Number Play","2","Advanced","A: Place value and face value of 0 are always the same. R: Zero × any positional value = 0.","Both A&R true, R explains A","A false, R true","A true, R false","Both false",""],
    ["6-maths-3","Number Play","2","Advanced","A: Kaprekar's operation on 1111 never reaches 6174. R: 1111 has all identical digits — gives 0000.","Both A&R true, R explains A","A true, R false","A false, R true","Both false",""],
    ["6-maths-3","Number Play","2","Advanced","A: A 3-digit palindrome is always divisible by 11. R: ABA = 101A+10B, always divisible by 11.","A false, R true","Both true, R explains A","A true, R false","Both false",""],
  ];
}

function getQAPrefilledData() {
  return [
    // ── 6-maths-1 WS1 — Elementary ───────────────────────
    ["6-maths-1","Patterns in Mathematics","1","Elementary","What is a pattern? Give two examples from daily life.",""],
    ["6-maths-1","Patterns in Mathematics","1","Elementary","Write the first 6 triangular numbers and show how they are formed.",""],
    ["6-maths-1","Patterns in Mathematics","1","Elementary","Define square numbers. Find the 7th square number.",""],
    ["6-maths-1","Patterns in Mathematics","1","Elementary","What is the Fibonacci sequence? Write its first 10 terms.",""],
    ["6-maths-1","Patterns in Mathematics","1","Elementary","How are patterns used in everyday life? Give three examples.",""],
    // ── 6-maths-1 WS2 — Advanced ──────────────────────────
    ["6-maths-1","Patterns in Mathematics","2","Advanced","What is Pascal's Triangle? Write the first 5 rows and explain one pattern you notice.",""],
    ["6-maths-1","Patterns in Mathematics","2","Advanced","Explain why the digit sum of every multiple of 9 is divisible by 9. Use three examples.",""],
    ["6-maths-1","Patterns in Mathematics","2","Advanced","Create your own pattern with at least 8 terms. State the rule and find the 12th term.",""],
    ["6-maths-1","Patterns in Mathematics","2","Advanced","Prove that the sum of first n odd numbers equals n².",""],
    ["6-maths-1","Patterns in Mathematics","2","Advanced","Describe three real-world applications of mathematical patterns.",""],
    // ── 6-maths-2 WS1 — Elementary ───────────────────────
    ["6-maths-2","Lines and Angles","1","Elementary","Define a line segment and a ray. How are they different from a line?",""],
    ["6-maths-2","Lines and Angles","1","Elementary","What are complementary and supplementary angles? Give one example of each.",""],
    ["6-maths-2","Lines and Angles","1","Elementary","Find x if angles (3x+10)° and (2x+5)° form a linear pair.",""],
    ["6-maths-2","Lines and Angles","1","Elementary","What are vertically opposite angles? Are they always equal?",""],
    ["6-maths-2","Lines and Angles","1","Elementary","State three angle relationships when a transversal cuts two parallel lines.",""],
    // ── 6-maths-2 WS2 — Advanced ─────────────────────────
    ["6-maths-2","Lines and Angles","2","Advanced","Explain the angles formed when a transversal cuts two parallel lines.",""],
    ["6-maths-2","Lines and Angles","2","Advanced","Triangle angles are in ratio 2:3:5. Find each angle and identify the triangle type.",""],
    ["6-maths-2","Lines and Angles","2","Advanced","Give three real-life examples each of parallel lines and perpendicular lines.",""],
    ["6-maths-2","Lines and Angles","2","Advanced","Two adjacent angles form a straight line. One angle is 3 times the other. Find both angles.",""],
    ["6-maths-2","Lines and Angles","2","Advanced","Write two properties each of a line, ray, and line segment.",""],
    // ── 6-maths-3 WS1 — Elementary ───────────────────────
    ["6-maths-3","Number Play","1","Elementary","What is place value? Find place value and face value of 8 in 38,542.",""],
    ["6-maths-3","Number Play","1","Elementary","What is Kaprekar's constant? Show steps for any 4-digit number.",""],
    ["6-maths-3","Number Play","1","Elementary","Verify that 153 is an Armstrong number. Also check if 123 is.",""],
    ["6-maths-3","Number Play","1","Elementary","Round 47,836 to nearest (a) ten, (b) hundred, (c) thousand.",""],
    ["6-maths-3","Number Play","1","Elementary","Check if 8,142 reaches 6174 using Kaprekar's operation (show 2 steps).",""],
    // ── 6-maths-3 WS2 — Advanced ─────────────────────────
    ["6-maths-3","Number Play","2","Advanced","Explain how rounding is used in everyday life. When is overestimation better?",""],
    ["6-maths-3","Number Play","2","Advanced","Why is 0 considered an even number? Explain using the divisibility rule.",""],
    ["6-maths-3","Number Play","2","Advanced","Write the palindrome trick for 89. Show at least 3 steps.",""],
    ["6-maths-3","Number Play","2","Advanced","State and explain four divisibility rules with examples.",""],
    ["6-maths-3","Number Play","2","Advanced","Explain the difference between estimation and approximation with one example each.",""],
  ];
}

// ═════════════════════════════════════════════════════════════════
// CHAPTER LISTS (remaining blank-row chapters per class)
// ═════════════════════════════════════════════════════════════════

function getClass6RemainingChapters() {
  // Excludes pre-filled (6-maths-1/2/3) and introductory science ch1
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
  ];
}

function getClass7Chapters() {
  // All Class 7 chapters — no pre-filled; introductory 7-science-1 excluded
  return [
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
  ];
}

function getClass8Chapters() {
  // All Class 8 chapters — no pre-filled; introductory 8-science-1 excluded
  return [
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
