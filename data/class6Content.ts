import type { ChapterContent } from "./content";

export const class6Content: Record<string, ChapterContent> = {
  // ─────────────────────────────────────────────────────────────
  // 6-MATHS-2 : Lines and Angles
  // ─────────────────────────────────────────────────────────────
  "6-maths-2": {
    notes: [
      {
        heading: "Basic Geometric Terms",
        body: "A point is an exact location in space with no size. A line extends infinitely in both directions and has no endpoints. A line segment is part of a line with two endpoints and a definite length. A ray starts at a fixed point (called the initial point) and extends infinitely in one direction only.\n\nTwo distinct points determine exactly one line. When we name a line, we use any two points on it (e.g., line AB or line BA). A line segment AB has a fixed length, while ray AB starts at A and passes through B going on forever.",
        highlight: "Key: Line → infinite both ways | Ray → infinite one way | Line Segment → fixed length",
      },
      {
        heading: "Types of Angles",
        body: "An angle is formed when two rays share a common endpoint called the vertex. The two rays are called the arms of the angle.\n\n• Acute angle: greater than 0° and less than 90°\n• Right angle: exactly 90°\n• Obtuse angle: greater than 90° and less than 180°\n• Straight angle: exactly 180° (forms a straight line)\n• Reflex angle: greater than 180° and less than 360°\n• Complete angle: exactly 360°\n\nAn angle is measured in degrees using a protractor. The symbol for degrees is °.",
        highlight: "Acute < 90° | Right = 90° | Obtuse 90°–180° | Straight = 180° | Reflex 180°–360°",
      },
      {
        heading: "Pairs of Angles",
        body: "Complementary angles are two angles whose sum is 90°. For example, 35° and 55° are complementary.\n\nSupplementary angles are two angles whose sum is 180°. For example, 110° and 70° are supplementary.\n\nAdjacent angles share a common vertex and a common arm, with no overlap between them. When two lines intersect, they form two pairs of vertically opposite angles, which are always equal.\n\nLinear pair: Two adjacent angles formed on a straight line. Their sum is always 180°.",
        highlight: "Complementary: sum = 90° | Supplementary: sum = 180° | Vertically opposite angles are equal",
      },
      {
        heading: "Parallel and Perpendicular Lines",
        body: "Two lines in the same plane that never meet are called parallel lines. The distance between them is always constant. We write AB ∥ CD to denote that line AB is parallel to line CD.\n\nTwo lines that meet at a right angle (90°) are called perpendicular lines. We write AB ⊥ CD.\n\nA transversal is a line that intersects two or more lines at distinct points. When a transversal cuts two parallel lines, it forms pairs of angles with special properties: alternate interior angles are equal, corresponding angles are equal, and co-interior (same-side interior) angles are supplementary (sum = 180°).",
        highlight: "Parallel lines: AB ∥ CD (never meet) | Perpendicular lines: AB ⊥ CD (meet at 90°)",
      },
    ],
    snippets: [
      { term: "Point", definition: "An exact location in space with no size, no length, no width.", example: "Tip of a pencil represents a point" },
      { term: "Line Segment", definition: "Part of a line with two definite endpoints and a measurable length.", formula: "Length AB = |A - B|", example: "The edge of a ruler is a line segment" },
      { term: "Ray", definition: "Part of a line that starts at one endpoint and extends infinitely in one direction.", example: "A beam of light from a torch" },
      { term: "Acute Angle", definition: "An angle whose measure is greater than 0° and less than 90°.", example: "45° is an acute angle" },
      { term: "Obtuse Angle", definition: "An angle whose measure is greater than 90° and less than 180°.", example: "120° is an obtuse angle" },
      { term: "Complementary Angles", definition: "Two angles whose measures add up to exactly 90°.", formula: "∠A + ∠B = 90°", example: "30° and 60° are complementary" },
      { term: "Supplementary Angles", definition: "Two angles whose measures add up to exactly 180°.", formula: "∠A + ∠B = 180°", example: "110° and 70° are supplementary" },
      { term: "Vertically Opposite Angles", definition: "Angles formed opposite each other when two lines intersect; they are always equal.", formula: "∠1 = ∠3, ∠2 = ∠4", example: "When scissors blades cross, opposite angles are equal" },
    ],
    mcq: [
      [
        { q: "An angle measuring 145° is called:", options: ["Acute", "Right", "Obtuse", "Reflex"], answer: 2, explanation: "Angles between 90° and 180° are obtuse. 145° lies in this range." },
        { q: "The complement of 37° is:", options: ["143°", "53°", "63°", "47°"], answer: 1, explanation: "Complement = 90° − 37° = 53°" },
        { q: "Two lines that never meet are called:", options: ["Perpendicular", "Intersecting", "Parallel", "Concurrent"], answer: 2, explanation: "Parallel lines are coplanar lines that never intersect." },
        { q: "Vertically opposite angles are always:", options: ["Supplementary", "Complementary", "Equal", "Adjacent"], answer: 2, explanation: "When two lines intersect, vertically opposite angles are always equal." },
        { q: "The supplement of 75° is:", options: ["15°", "105°", "285°", "95°"], answer: 1, explanation: "Supplement = 180° − 75° = 105°" },
        { q: "A ray has:", options: ["Two endpoints", "One endpoint", "No endpoints", "Three endpoints"], answer: 1, explanation: "A ray starts at one fixed endpoint (initial point) and extends infinitely." },
        { q: "How many degrees does a straight angle measure?", options: ["90°", "270°", "360°", "180°"], answer: 3, explanation: "A straight angle measures exactly 180° — it forms a straight line." },
        { q: "When a transversal cuts two parallel lines, alternate interior angles are:", options: ["Supplementary", "Complementary", "Equal", "Reflex"], answer: 2, explanation: "Alternate interior angles formed by a transversal cutting parallel lines are always equal." },
        { q: "A linear pair of angles always sums to:", options: ["90°", "180°", "270°", "360°"], answer: 1, explanation: "A linear pair lies on a straight line, so the angles sum to 180°." },
        { q: "Which of these is NOT a type of angle?", options: ["Acute", "Obtuse", "Diagonal", "Reflex"], answer: 2, explanation: "Diagonal is a line segment joining non-adjacent vertices; it is not a type of angle." },
      ],
      [
        { q: "Assertion (A): A right angle is 90°. Reason (R): It is formed when two perpendicular lines meet.", options: ["Both A and R are true, and R explains A", "Both true, R does not explain A", "A is true, R is false", "A is false, R is true"], answer: 0, explanation: "Both statements are correct. Perpendicular lines meet at exactly 90° forming a right angle." },
        { q: "Assertion (A): Complementary angles must be adjacent. Reason (R): Their sum equals 90°.", options: ["Both A and R are true, and R explains A", "A is false, R is true", "Both false", "A is true, R is false"], answer: 1, explanation: "The assertion is false — complementary angles need not be adjacent. The reason (sum = 90°) is the correct definition." },
        { q: "Assertion (A): Vertically opposite angles are supplementary. Reason (R): They are formed by two intersecting lines.", options: ["Both true, R explains A", "A is false, R is true", "Both false", "A is true, R is false"], answer: 1, explanation: "Vertically opposite angles are EQUAL, not supplementary. The reason about intersecting lines is correct." },
        { q: "Assertion (A): A reflex angle is between 180° and 360°. Reason (R): Angles greater than a straight angle are reflex.", options: ["Both A and R are true, and R explains A", "A true, R false", "A false, R true", "Both false"], answer: 0, explanation: "Both are correct. Reflex angles measure more than 180° (a straight angle) and less than 360°." },
        { q: "Assertion (A): Two parallel lines can meet at infinity. Reason (R): Parallel lines have no common point.", options: ["A is true, R is false", "A is false, R is true", "Both true", "Both false"], answer: 1, explanation: "By Euclidean geometry, parallel lines NEVER meet. The reason is the correct definition." },
        { q: "Assertion (A): Co-interior angles formed by a transversal on parallel lines are supplementary. Reason (R): They are on the same side of the transversal.", options: ["Both A and R are true, and R explains A", "Both true, R does not explain A", "A true, R false", "A false, R true"], answer: 1, explanation: "Both are true. Co-interior angles do sum to 180°, and they are on the same side. However, being on the same side is a description, not the reason they are supplementary." },
        { q: "Assertion (A): A straight angle is also a reflex angle. Reason (R): 180° is less than 360°.", options: ["Both true, R explains A", "A false, R true", "Both false", "A true, R false"], answer: 1, explanation: "A straight angle (180°) is NOT a reflex angle (which must exceed 180°). The reason is mathematically true but irrelevant." },
        { q: "Assertion (A): All right angles are equal. Reason (R): Every right angle measures 90°.", options: ["Both A and R are true, and R explains A", "A true, R false", "A false, R true", "Both false"], answer: 0, explanation: "All right angles equal 90°, so they are all equal. R correctly explains A." },
        { q: "Assertion (A): The number of lines passing through one point is infinite. Reason (R): Through one point, any number of lines can be drawn.", options: ["Both A and R are true, and R explains A", "Both true, R does not explain A", "A true, R false", "A false, R true"], answer: 0, explanation: "Infinitely many lines can pass through a single point; R correctly states the reason." },
        { q: "Assertion (A): Corresponding angles are equal when lines are parallel. Reason (R): They are on the same side of the transversal and in matching positions.", options: ["Both A and R are true, and R explains A", "A true, R false", "A false, R true", "Both false"], answer: 0, explanation: "Corresponding angles are equal for parallel lines, and they occupy matching positions on the same side of the transversal." },
      ],
    ],
    qa: [
      [
        { q: "Define a line segment and a ray. How are they different from a line?", a: "A line segment has two endpoints and a fixed, measurable length (e.g., AB). A ray has one endpoint and extends infinitely in one direction (e.g., ray AB starting at A through B). A line has no endpoints and extends infinitely in both directions. Line segments and rays are parts of a line.", type: "short" },
        { q: "What are complementary and supplementary angles? Give one example of each.", a: "Complementary angles: two angles whose sum is 90°. Example: 40° and 50° (40+50=90°).\nSupplementary angles: two angles whose sum is 180°. Example: 120° and 60° (120+60=180°).", type: "short" },
        { q: "Find the value of x if two angles (3x + 10)° and (2x + 5)° form a linear pair.", a: "Linear pair sum = 180°\n(3x + 10) + (2x + 5) = 180\n5x + 15 = 180\n5x = 165\nx = 33°\nThe angles are 3(33)+10 = 109° and 2(33)+5 = 71°. Check: 109+71=180° ✓", type: "short" },
        { q: "What are vertically opposite angles? Are they always equal?", a: "When two lines intersect, they form two pairs of vertically opposite angles — angles that are across from each other at the point of intersection. Yes, vertically opposite angles are always equal. For example, if two lines cross and one angle is 65°, the angle directly opposite it is also 65°.", type: "short" },
        { q: "Draw and label all angle types on a clock face at 3:00, 6:00, 9:00 and 12:00 positions.", a: "3:00 position: The hour hand at 3 and minute hand at 12 form a right angle (90°).\n6:00 position: Hour hand at 6 and minute at 12 form a straight angle (180°).\n9:00 position: Hour hand at 9 and minute at 12 form a right angle (90°) on the left.\n12:00 position: Both hands overlap — the angle between them is 0° (zero angle).", type: "short" },
      ],
      [
        { q: "Explain with diagrams the angles formed when a transversal cuts two parallel lines.", a: "When a transversal crosses two parallel lines (l ∥ m), it creates 8 angles (4 at each intersection).\n\n1. Corresponding angles (e.g., ∠1 and ∠5): Same position at each intersection — EQUAL.\n2. Alternate interior angles (e.g., ∠3 and ∠6): Between the parallel lines, on opposite sides of transversal — EQUAL.\n3. Alternate exterior angles (e.g., ∠1 and ∠8): Outside the parallel lines, on opposite sides — EQUAL.\n4. Co-interior / Co-angles (e.g., ∠3 and ∠5): Between the parallel lines, same side — SUPPLEMENTARY (sum = 180°).\n\nThese properties are used to find unknown angles in geometry problems.", type: "long" },
        { q: "The angles of a triangle are in the ratio 2:3:5. Find each angle and identify the type of triangle.", a: "Sum of angles in a triangle = 180°\nRatio 2:3:5, total parts = 10\nEach part = 180°/10 = 18°\nAngles: 2×18=36°, 3×18=54°, 5×18=90°\n\nThe triangle has angles 36°, 54°, 90°.\nSince one angle is exactly 90°, it is a right-angled triangle.\nThe other two angles (36° and 54°) are acute, and they are complementary (36+54=90°).", type: "long" },
        { q: "Give three real-life examples each of parallel lines and perpendicular lines.", a: "Parallel Lines in real life:\n1. Railway tracks — two rails run side by side without meeting.\n2. Opposite edges of a door or window frame.\n3. Lines on a ruled notebook page.\n\nPerpendicular Lines in real life:\n1. A wall meeting the floor — they form a 90° angle.\n2. The hands of a clock at 3:00 (or 9:00).\n3. The corner of a book or table — edges meet at right angles.\n\nUnderstanding these helps in construction, architecture, and everyday measurements.", type: "long" },
        { q: "Two adjacent angles form a straight line. One angle is 3 times the other. Find both angles.", a: "Let the smaller angle = x°\nThe larger angle = 3x°\nLinear pair: x + 3x = 180°\n4x = 180°\nx = 45°\n\nSmaller angle = 45°, Larger angle = 3×45 = 135°\nVerification: 45° + 135° = 180° ✓\n\nThe angles are 45° (acute) and 135° (obtuse).", type: "short" },
        { q: "What is the difference between a line, a ray, and a line segment? Write two properties of each.", a: "Line:\n• Extends infinitely in both directions — no endpoints.\n• Has infinite length; cannot be measured.\n\nRay:\n• Has one fixed starting point (initial point), extends infinitely in one direction only.\n• Named from its starting point: Ray AB starts at A, passes through B.\n\nLine Segment:\n• Has two endpoints; length is definite and measurable.\n• The shortest distance between two points is a line segment.", type: "short" },
      ],
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 6-MATHS-3 : Number Play
  // ─────────────────────────────────────────────────────────────
  "6-maths-3": {
    notes: [
      {
        heading: "Numbers in Everyday Life",
        body: "Numbers are all around us — in prices, phone numbers, dates, scores, and measurements. This chapter explores the fun and playful side of numbers. We look at numbers from different perspectives: how they can be broken apart, rearranged, and used to create surprising results.\n\nDigits are the ten symbols (0–9) used to write every number. A numeral is the written form of a number. The place value of a digit depends on its position — ones, tens, hundreds, thousands, and so on. The face value of a digit is always the digit itself regardless of position.",
        highlight: "Place value = Digit × Position value | Face value = the digit itself",
      },
      {
        heading: "Number Tricks and Divisibility",
        body: "Several interesting properties make numbers fun to explore:\n\n• A number is divisible by 2 if its last digit is 0, 2, 4, 6, or 8.\n• Divisible by 3 if the sum of its digits is divisible by 3.\n• Divisible by 5 if it ends in 0 or 5.\n• Divisible by 9 if the sum of digits is divisible by 9.\n• Divisible by 10 if it ends in 0.\n\nKaprekar's constant: Take any 4-digit number (not all digits same), arrange digits in descending and ascending order, subtract. Repeat. You always reach 6174!",
        highlight: "Kaprekar constant = 6174 (reached by any 4-digit number within 7 steps)",
      },
      {
        heading: "Palindromes and Special Numbers",
        body: "A palindrome reads the same forwards and backwards. For example, 121, 1331, and 12321 are numeric palindromes. An interesting trick: Take any number, reverse its digits, add the two. Repeat until you get a palindrome.\n\nExample: 57 → 57+75=132 → 132+231=363 (palindrome, done in 2 steps).\n\nArmstrong numbers (also called narcissistic numbers): A number is an Armstrong number if the sum of its digits each raised to the power of the number of digits equals the number itself. Example: 153 = 1³ + 5³ + 3³ = 1 + 125 + 27 = 153.",
        highlight: "Palindrome: reads same both ways | Armstrong: 153 = 1³+5³+3³",
      },
      {
        heading: "Estimation and Rounding",
        body: "Estimation means finding an approximate value close to the exact answer. This is useful when an exact answer is not needed and a quick calculation suffices.\n\nRounding rules:\n• Look at the digit to the right of the rounding place.\n• If it is 5 or more, round up (add 1 to the rounding digit).\n• If it is less than 5, round down (keep the rounding digit as is).\n\nExample: 4763 rounded to the nearest hundred → look at tens digit (6 ≥ 5) → round up → 4800.\n\nOverestimation and underestimation: knowing whether your estimate is too high or too low is important in practical situations like budgeting.",
        highlight: "Round digit ≥ 5 → round up | Round digit < 5 → round down",
      },
    ],
    snippets: [
      { term: "Place Value", definition: "The value of a digit based on its position in the number.", formula: "Place value = digit × positional value", example: "In 5476, place value of 4 is 4 × 100 = 400" },
      { term: "Face Value", definition: "The actual value of a digit, regardless of its position.", example: "In 5476, face value of 4 is always 4" },
      { term: "Palindrome", definition: "A number that reads the same forwards and backwards.", example: "121, 1331, 99, 12321 are palindromes" },
      { term: "Kaprekar's Constant", definition: "The number 6174, reached by any 4-digit number (with at least 2 distinct digits) after repeatedly applying the Kaprekar operation.", example: "9981 → 9981−1899=8082 → 8820−0288=8532 → 8532−2358=6174" },
      { term: "Estimation", definition: "Finding an approximate answer that is close enough to the exact answer for practical purposes.", example: "427 ≈ 400 (rounded to nearest hundred)" },
      { term: "Rounding", definition: "Replacing a number with a nearby, simpler number based on a given place value.", formula: "If right digit ≥ 5, round up; else round down", example: "3.67 rounded to nearest whole = 4" },
      { term: "Armstrong Number", definition: "A number equal to the sum of its own digits each raised to the power of the count of digits.", formula: "For n-digit number: sum of (each digit)ⁿ = the number", example: "153 = 1³+5³+3³ = 153" },
      { term: "Divisibility Rule", definition: "A shortcut to determine if a number is divisible by another without actual division.", example: "Div by 3: if digit sum divisible by 3 (e.g., 333: 3+3+3=9, divisible by 3)" },
    ],
    mcq: [
      [
        { q: "What is the place value of 7 in 47,835?", options: ["7", "700", "7000", "70"], answer: 2, explanation: "7 is in the thousands place. Place value = 7 × 1000 = 7000." },
        { q: "Which number is a palindrome?", options: ["1234", "1221", "1342", "1023"], answer: 1, explanation: "1221 reads the same forwards (1221) and backwards (1221)." },
        { q: "Round 6,847 to the nearest thousand:", options: ["6000", "7000", "6800", "6900"], answer: 1, explanation: "The hundreds digit is 8 (≥5), so round up: 7000." },
        { q: "Kaprekar's constant for 4-digit numbers is:", options: ["1729", "6174", "9801", "4321"], answer: 1, explanation: "6174 is Kaprekar's constant — any 4-digit number reaches it by repeated subtraction." },
        { q: "Which number is an Armstrong number?", options: ["123", "153", "200", "321"], answer: 1, explanation: "153 = 1³+5³+3³ = 1+125+27 = 153. It equals the sum of cubes of its digits." },
        { q: "The divisibility rule for 9 states:", options: ["Last digit is 9", "Sum of digits divisible by 9", "Number ends in 0", "Last two digits divisible by 9"], answer: 1, explanation: "A number is divisible by 9 if the sum of its digits is divisible by 9." },
        { q: "The face value of 6 in 7,628 is:", options: ["600", "60", "6", "6000"], answer: 2, explanation: "Face value is always the digit itself, regardless of position. Face value of 6 = 6." },
        { q: "Which of these is divisible by both 2 and 3?", options: ["121", "124", "126", "125"], answer: 2, explanation: "126: last digit 6 (even, so divisible by 2); digit sum=1+2+6=9 (divisible by 3). Both conditions met." },
        { q: "Estimate 493 + 312 by rounding to the nearest hundred:", options: ["800", "805", "700", "900"], answer: 0, explanation: "493 ≈ 500, 312 ≈ 300. Estimated sum = 500 + 300 = 800." },
        { q: "What comes after 9,999 in the number system?", options: ["9,000", "10,000", "9,990", "100,00"], answer: 1, explanation: "9,999 + 1 = 10,000 (ten thousand — a 5-digit number)." },
      ],
      [
        { q: "Assertion (A): 9 is an Armstrong number. Reason (R): 9 = 9¹.", options: ["Both A and R true, R explains A", "Both true, R does not explain A", "A true, R false", "A false, R true"], answer: 0, explanation: "9 is a 1-digit number. 9¹ = 9, so it equals the sum of its digits raised to the power of digit count. Both correct." },
        { q: "Assertion (A): 10,000 has 5 digits. Reason (R): It is the smallest 5-digit number.", options: ["Both A and R true, R explains A", "Both true, R does not explain A", "A false, R true", "A true, R false"], answer: 0, explanation: "10,000 = ten thousand has 5 digits and is indeed the smallest 5-digit number." },
        { q: "Assertion (A): The face value and place value of 0 are always equal. Reason (R): Both are 0 regardless of position.", options: ["Both A and R true, R explains A", "A true, R false", "A false, R true", "Both false"], answer: 0, explanation: "For 0, face value = 0 and place value = 0 × any position = 0. Both statements are correct." },
        { q: "Assertion (A): 4-digit palindromes are always divisible by 11. Reason (R): Numbers of the form abba are divisible by 11.", options: ["Both A and R true, R explains A", "A false, R true", "Both false", "A true, R false"], answer: 0, explanation: "A 4-digit palindrome abba = 1001a + 110b = 11(91a+10b), so it is always divisible by 11." },
        { q: "Assertion (A): Rounding always gives the exact answer. Reason (R): Rounding reduces precision.", options: ["A false, R true", "Both true", "A true, R false", "Both false"], answer: 0, explanation: "Rounding gives an APPROXIMATE answer. The reason (it reduces precision) is correct." },
        { q: "Assertion (A): Every number is divisible by 1. Reason (R): Dividing by 1 gives the number itself.", options: ["Both A and R true, R explains A", "A true, R false", "A false, R true", "Both false"], answer: 0, explanation: "Every number ÷ 1 = the number itself with remainder 0. Both correct." },
        { q: "Assertion (A): 1000 rounded to the nearest thousand is 1000. Reason (R): 1000 is already a multiple of 1000.", options: ["Both A and R true, R explains A", "A false, R true", "Both true, R does not explain A", "Both false"], answer: 0, explanation: "1000 is already a multiple of 1000, so rounding it to the nearest thousand gives 1000." },
        { q: "Assertion (A): Adding a number and its reverse always gives a palindrome. Reason (R): Palindromes are symmetric.", options: ["A false, R true", "Both true", "Both false", "A true, R false"], answer: 0, explanation: "Adding a number and its reverse does NOT always immediately give a palindrome — you may need multiple steps. The reason about symmetry is true but doesn't fix the assertion." },
        { q: "Assertion (A): The sum of digits of 999 is 27. Reason (R): 9+9+9 = 27.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "9+9+9=27. Both the assertion and the reason are correct." },
        { q: "Assertion (A): Estimation is always less accurate than exact calculation. Reason (R): Estimation introduces error.", options: ["Both true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "Estimation is less accurate (it introduces error), but that is its purpose — speed over precision. Both statements are correct." },
      ],
    ],
    qa: [
      [
        { q: "What is Kaprekar's constant? Illustrate with the number 3456.", a: "Kaprekar's constant is 6174. To reach it: arrange digits in descending and ascending order, then subtract.\n3456 → descending: 6543, ascending: 3456 → 6543−3456=3087\n3087 → 8730−0378=8352\n8352 → 8532−2358=6174 ✓\nThe process reaches 6174 within a few steps for any valid 4-digit number.", type: "short" },
        { q: "Check if 7,326 is divisible by 2, 3, and 9.", a: "Divisible by 2? Last digit is 6 (even). YES.\nDivisible by 3? Digit sum = 7+3+2+6=18. 18÷3=6. YES.\nDivisible by 9? Digit sum = 18. 18÷9=2. YES.\nSo 7,326 is divisible by 2, 3, and 9.", type: "short" },
        { q: "Write the greatest and smallest 5-digit palindromes.", a: "Greatest 5-digit palindrome: 99999 (all 9s — reads same both ways).\nSmallest 5-digit palindrome: 10001 (1, 0, 0, 0, 1 — reads same both ways).", type: "short" },
        { q: "Round 78,456 to (a) nearest ten (b) nearest hundred (c) nearest thousand.", a: "(a) Nearest ten: look at units digit (6≥5) → round up → 78,460\n(b) Nearest hundred: look at tens digit (5≥5) → round up → 78,500\n(c) Nearest thousand: look at hundreds digit (4<5) → round down → 78,000", type: "short" },
        { q: "What is the difference between face value and place value? Give an example.", a: "Face value is the value of the digit itself, regardless of its position. Place value is the value of the digit based on its position in the number.\nExample: In 5,834:\nDigit 8 → Face value = 8, Place value = 8 × 100 = 800\nDigit 5 → Face value = 5, Place value = 5 × 1000 = 5000", type: "short" },
      ],
      [
        { q: "Explain the Kaprekar operation and why it is interesting. Try it with 2025.", a: "The Kaprekar operation: Take a 4-digit number, arrange its digits in descending and ascending order, subtract smaller from larger. Repeat. Any valid 4-digit number will reach 6174 (Kaprekar's constant).\n\n2025 → descending: 5220, ascending: 0225\n5220−0225=4995\n9954−4599=5355\n5553−3555=1998\n9981−1899=8082\n8820−0288=8532\n8532−2358=6174 ✓ (reached in 6 steps)\n\nThis is remarkable because no matter where you start, you always converge to 6174 — it is a mathematical fixed point.", type: "long" },
        { q: "A shopkeeper has ₹4,675. He needs to buy goods worth ₹8,120. Estimate how much more money he needs by rounding to the nearest thousand.", a: "Round ₹4,675 to nearest thousand: hundreds digit = 6 ≥ 5 → round up → ₹5,000\nRound ₹8,120 to nearest thousand: hundreds digit = 1 < 5 → round down → ₹8,000\n\nEstimated amount needed = ₹8,000 − ₹5,000 = ₹3,000\n\nActual amount needed = ₹8,120 − ₹4,675 = ₹3,445\n\nThe estimate (₹3,000) is an underestimate because we rounded down the cost and up the amount he has.", type: "long" },
        { q: "Which numbers from 1 to 500 are Armstrong numbers? Show the verification for each.", a: "Armstrong numbers from 1 to 500:\n1-digit: 1,2,3,4,5,6,7,8,9 (each digit¹ = itself)\n3-digit Armstrong numbers: 153, 370, 371, 407\n\nVerification:\n153: 1³+5³+3³ = 1+125+27 = 153 ✓\n370: 3³+7³+0³ = 27+343+0 = 370 ✓\n371: 3³+7³+1³ = 27+343+1 = 371 ✓\n407: 4³+0³+7³ = 64+0+343 = 407 ✓\n\nThese numbers have the special property of being equal to the sum of cubes of their digits.", type: "long" },
        { q: "Use estimation to check if 487 × 12 is approximately 6000. Is this an overestimate or underestimate?", a: "Estimate: 487 ≈ 500, 12 ≈ 10\nEstimated product = 500 × 10 = 5,000\n\nActual product = 487 × 12 = 5,844\n\nThe rough estimate gives 5,000, which is less than the actual 5,844, so this is an underestimate (we rounded 487 up but rounded 12 down, and the net effect underestimates).\n\nA better estimate: 490 × 12 = 5,880 ≈ 5,900 is closer to the actual answer.", type: "short" },
        { q: "Find a 3-digit number that becomes a palindrome after one step of adding reverse. Verify.", a: "Take 237: Reverse = 732\n237 + 732 = 969\n969 is a palindrome (reads same both ways). ✓\n\nTake 143: Reverse = 341\n143 + 341 = 484\n484 is a palindrome ✓\n\nThese numbers produce palindromes in a single step of adding the reverse, but not all numbers work in one step — some need multiple rounds.", type: "short" },
      ],
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 6-MATHS-4 : Data Handling and Presentation
  // ─────────────────────────────────────────────────────────────
  "6-maths-4": {
    notes: [
      {
        heading: "What is Data?",
        body: "Data is a collection of facts, numbers, or information gathered by observation or survey. Raw data is data collected but not yet organised. When data is organised into a table or list, it becomes easier to understand.\n\nTypes of data:\n• Ungrouped data: individual data values listed separately (e.g., marks of 10 students)\n• Grouped data: data organised into intervals or groups (e.g., marks 0–20, 21–40)\n\nFrequency refers to how many times a value or category appears in the data. A frequency distribution table organises data and shows frequencies.",
        highlight: "Data → collect → organise → analyse → interpret → conclude",
      },
      {
        heading: "Tally Marks and Frequency Tables",
        body: "Tally marks are a quick way to count and record data as it is collected. Each mark represents one item: four vertical marks with a fifth diagonal mark through them represents 5.\n\nTo make a frequency table:\n1. List all categories or values.\n2. Go through the data one item at a time.\n3. Put a tally mark next to the appropriate category.\n4. Count the tally marks to find the frequency of each category.\n\nExample: Favourite colours of 20 students\nRed: |||| || → 7\nBlue: |||| |||| → 9\nGreen: |||| → 4",
        highlight: "Tally group of 5: four marks + one diagonal cross. Always total tallies to verify.",
      },
      {
        heading: "Pictographs and Bar Graphs",
        body: "A pictograph uses pictures or symbols to represent data. A key (or legend) tells us what each symbol represents. If one symbol = 5 items, then 3 symbols = 15 items.\n\nA bar graph uses rectangular bars to show data:\n• Bars can be horizontal or vertical.\n• All bars have the same width.\n• The length/height of each bar represents the frequency or value.\n• The scale on the axis must be uniform.\n• Always include a title, labels on both axes, and a scale.\n\nBar graphs are better than pictographs when quantities are large or don't divide evenly into the picture unit.",
        highlight: "Bar graph essentials: title, axis labels, uniform scale, same-width bars",
      },
      {
        heading: "Interpreting and Comparing Data",
        body: "Once data is displayed in a graph or table, we can interpret (read and understand) it:\n• Identify the highest and lowest values\n• Find the difference between the maximum and minimum (called the range)\n• Identify trends or patterns\n\nMeasures of central tendency help summarise data with a single value:\n• Mean (average) = Sum of all values ÷ Number of values\n• Median = Middle value when data is arranged in order\n• Mode = Most frequently occurring value\n\nExample: Data: 4, 6, 8, 4, 10 → Mean = 32/5 = 6.4 | Median = 6 | Mode = 4",
        highlight: "Mean = Sum/Count | Median = middle value | Mode = most frequent value",
      },
    ],
    snippets: [
      { term: "Data", definition: "A collection of facts, numbers, or observations gathered for analysis.", example: "Heights of students in cm: 142, 155, 148, 160, 152" },
      { term: "Frequency", definition: "The number of times a particular value or category appears in a data set.", example: "If 5 students scored 80 marks, the frequency of 80 is 5" },
      { term: "Tally Marks", definition: "Marks used to count items as they are recorded. Groups of 5 are shown as four vertical marks crossed by a diagonal.", example: "|||| = 5, |||| || = 7" },
      { term: "Pictograph", definition: "A graph that uses pictures or symbols to represent data, with a key showing the value of each symbol.", example: "🍎 = 10 apples; three apples 🍎🍎🍎 = 30 apples" },
      { term: "Bar Graph", definition: "A graph using rectangular bars of equal width where bar height/length represents the frequency or value of each category.", example: "A bar graph comparing monthly rainfall across 6 months" },
      { term: "Mean (Average)", definition: "The sum of all data values divided by the number of values.", formula: "Mean = (Sum of all values) / (Number of values)", example: "Mean of 4,6,8,10 = 28/4 = 7" },
      { term: "Median", definition: "The middle value of a data set arranged in ascending or descending order.", example: "Median of 3,5,7,9,11 = 7 (middle value)" },
      { term: "Mode", definition: "The value that appears most frequently in a data set.", example: "Mode of 2,4,4,5,6,4 = 4 (appears 3 times)" },
    ],
    mcq: [
      [
        { q: "Which measure represents the most frequently occurring value in data?", options: ["Mean", "Median", "Mode", "Range"], answer: 2, explanation: "Mode is the value that appears most often in a data set." },
        { q: "The mean of 5, 10, 15, 20, 25 is:", options: ["15", "14", "16", "13"], answer: 0, explanation: "Mean = (5+10+15+20+25)/5 = 75/5 = 15" },
        { q: "In a tally mark system, how is the number 8 represented?", options: ["|||||||| ", "|||| |||", "|||| ||||", "|||| |||| "], answer: 1, explanation: "8 = one complete group of 5 (|||| with diagonal) plus 3 individual marks: |||| |||" },
        { q: "What must all bars in a bar graph have?", options: ["Different widths", "Different colours only", "Same width", "No labels"], answer: 2, explanation: "All bars in a bar graph must have the same width; only their heights vary to show data values." },
        { q: "The median of 3, 7, 9, 12, 15 is:", options: ["9", "7", "12", "3"], answer: 0, explanation: "Data is already in order. Middle value (3rd of 5) = 9." },
        { q: "A pictograph key shows ★ = 4 students. If there are 6 stars, how many students does this represent?", options: ["10", "24", "16", "6"], answer: 1, explanation: "6 stars × 4 students per star = 24 students." },
        { q: "Which of the following is RAW data?", options: ["A bar graph of test scores", "Heights: 142, 155, 148, 160, 152 cm", "A frequency table", "A pie chart"], answer: 1, explanation: "Raw data is unorganised data — the list of heights as collected is raw data." },
        { q: "The range of the data 12, 7, 19, 3, 25 is:", options: ["22", "25", "12", "3"], answer: 0, explanation: "Range = Maximum − Minimum = 25 − 3 = 22." },
        { q: "Which type of graph uses pictures or symbols to show data?", options: ["Bar graph", "Pictograph", "Line graph", "Histogram"], answer: 1, explanation: "A pictograph uses pictures or symbols, with a key to indicate the value of each symbol." },
        { q: "Mean of a data set is 12 and there are 6 values. What is the sum of all values?", options: ["2", "18", "72", "6"], answer: 2, explanation: "Sum = Mean × Count = 12 × 6 = 72." },
      ],
      [
        { q: "Assertion (A): The mode of 3,3,3,4,5 is 3. Reason (R): 3 appears most frequently.", options: ["Both A and R true, R explains A", "A true, R false", "A false, R true", "Both false"], answer: 0, explanation: "3 appears 3 times (more than any other value), so mode = 3. Both correct." },
        { q: "Assertion (A): A data set can have more than one mode. Reason (R): If two values appear equally often and most frequently, both are modes.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "A bimodal data set has two modes. Both the assertion and reason are correct." },
        { q: "Assertion (A): The mean is always one of the data values. Reason (R): Mean is calculated from the data.", options: ["A false, R true", "Both true", "A true, R false", "Both false"], answer: 0, explanation: "The mean need NOT be one of the data values (e.g., mean of 1,2 = 1.5). The reason is true but doesn't fix the assertion." },
        { q: "Assertion (A): Bar graphs require a uniform scale on the axis. Reason (R): A non-uniform scale would make bars misleading.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "A uniform scale ensures bars are comparable and not visually distorted. Both correct." },
        { q: "Assertion (A): The median of an even number of values is always one of the data values. Reason (R): You take the average of the two middle values.", options: ["A false, R true", "Both true", "A true, R false", "Both false"], answer: 0, explanation: "When there's an even count, the median = average of two middle values, which may not be a data value." },
        { q: "Assertion (A): A frequency distribution makes data easier to interpret. Reason (R): It organises data into categories with counts.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "Both statements are correct — organising data into categories with counts aids interpretation." },
        { q: "Assertion (A): In a pictograph, half a symbol represents half the value in the key. Reason (R): Symbols can be split proportionally.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "Half symbols are used in pictographs to represent half the key value." },
        { q: "Assertion (A): The mode is the best measure of central tendency for numerical data. Reason (R): Mode tells us the most common value.", options: ["A false, R true", "Both true, R explains A", "Both false", "A true, R false"], answer: 0, explanation: "Mode is most useful for categorical data. For numerical analysis, mean or median is typically better. The reason is correctly defining mode but doesn't make it the 'best' for numerical data." },
        { q: "Assertion (A): Collected data should always be organised before analysis. Reason (R): Organised data is easier to read and interpret.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "Organising data (into tables, graphs) is an essential step before analysis for clarity." },
        { q: "Assertion (A): Tally marks always group in sets of 5. Reason (R): This makes counting easier.", options: ["Both A and R true, R explains A", "A false, R true", "Both false", "A true, R false"], answer: 0, explanation: "Tally marks group in 5s with a crossing diagonal. This makes counting large totals much faster." },
      ],
    ],
    qa: [
      [
        { q: "What is a frequency table? Create one for the following data: A, B, A, C, B, A, B, C, A, B.", a: "A frequency table shows each category and the number of times it occurs.\n\nData: A,B,A,C,B,A,B,C,A,B\n\n| Category | Tally | Frequency |\n|----------|-------|-----------|\n| A | |||| | 4 |\n| B | |||| | 4 |\n| C | || | 2 |\n| Total | | 10 |\n\nBoth A and B have frequency 4; C has frequency 2.", type: "short" },
        { q: "Find the mean, median, and mode of: 8, 3, 7, 5, 8, 4, 8, 6.", a: "Data sorted: 3, 4, 5, 6, 7, 8, 8, 8 (8 values)\nMean = (3+4+5+6+7+8+8+8)/8 = 49/8 = 6.125\nMedian = average of 4th and 5th values = (6+7)/2 = 6.5\nMode = 8 (appears 3 times — most frequent)", type: "short" },
        { q: "What is a pictograph? List any two limitations of using pictographs.", a: "A pictograph is a graph that represents data using pictures or symbols, with a key stating the value of each symbol.\n\nTwo limitations:\n1. Difficult to represent values that don't divide evenly by the key value (e.g., showing 17 when each symbol = 5).\n2. Pictographs become impractical with very large numbers — too many symbols to draw clearly.", type: "short" },
        { q: "The mean of 5 numbers is 18. Four of the numbers are 14, 22, 16, and 20. Find the fifth number.", a: "Sum of all 5 numbers = Mean × Count = 18 × 5 = 90\nSum of 4 known numbers = 14+22+16+20 = 72\nFifth number = 90 − 72 = 18\nVerification: (14+22+16+20+18)/5 = 90/5 = 18 ✓", type: "short" },
        { q: "Describe two differences between a pictograph and a bar graph.", a: "1. Representation: A pictograph uses pictures/symbols to show data; a bar graph uses rectangular bars.\n2. Precision: Bar graphs can show exact values on a numerical scale; pictographs struggle with odd numbers that don't fit the key value neatly.\n(Bar graphs are preferred for precise numerical data; pictographs are more visually engaging and easy for young learners.)", type: "short" },
      ],
      [
        { q: "The following data shows marks scored by 10 students: 45, 72, 55, 45, 88, 72, 55, 45, 60, 63. Find the mean, median, and mode. Which measure best represents this data?", a: "Sorted data: 45, 45, 45, 55, 55, 60, 63, 72, 72, 88 (10 values)\n\nMean = (45+45+45+55+55+60+63+72+72+88)/10 = 600/10 = 60\n\nMedian = average of 5th and 6th values = (55+60)/2 = 57.5\n\nMode = 45 (appears 3 times)\n\nBest measure: The mean (60) best represents this data because it uses all values. The mode (45) is the lowest score and would underrepresent the group. The median (57.5) is reasonable but the mean accounts for the high score of 88.", type: "long" },
        { q: "Draw a bar graph for the following data about favourite sports of 50 students: Cricket-18, Football-12, Badminton-10, Hockey-6, Basketball-4. What conclusions can you draw?", a: "Bar Graph Details:\nTitle: Favourite Sports of 50 Students\nX-axis: Sports (Cricket, Football, Badminton, Hockey, Basketball)\nY-axis: Number of students (scale: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20)\nBars: Cricket(18), Football(12), Badminton(10), Hockey(6), Basketball(4)\n\nConclusions:\n1. Cricket is the most popular sport (18 students = 36% of all).\n2. Basketball is the least popular (4 students = 8%).\n3. The top two sports (Cricket + Football) account for 60% of students.\n4. Hockey and Basketball together have fewer students (10) than Badminton alone is close to.\n5. Total = 18+12+10+6+4 = 50 ✓", type: "long" },
        { q: "Collect and organise data about the number of family members of students in your class (use: 1-2, 3-4, 5-6, 7+). Explain how you would present this data.", a: "Steps to collect, organise, and present data:\n\n1. Collection: Ask each student how many people are in their family. Record each answer.\n\n2. Organisation: Create a tally table with intervals:\n| Family Size | Tally | Frequency |\n|-------------|-------|-----------|\n| 1–2 | | |\n| 3–4 | | |\n| 5–6 | | |\n| 7+ | | |\n\n3. Presentation options:\n• Bar graph: Best for comparing frequencies across categories.\n• Pictograph: Use a symbol (e.g., 👪 = 2 students) for visual appeal.\n\n4. Analysis: Identify which family size is most common (mode), find mean family size, note if large families (7+) are rare.\n\n5. Conclusion: This data can help a school plan activities — e.g., if most families have 3–4 members, family day events can be planned accordingly.", type: "long" },
        { q: "Why is it important to choose the correct scale when drawing a bar graph? Give an example of how a wrong scale can be misleading.", a: "A scale determines how data values map to bar heights. An incorrect scale distorts the visual comparison between bars.\n\nExample of misleading scale:\nData: Shop A sales ₹500, Shop B sales ₹550\n\nCorrect scale (0–600 in steps of 100): Bar B is only slightly taller than A — accurate picture.\n\nMisleading scale (starting at 490): Bar A height appears tiny, Bar B appears huge — falsely suggests B sells much more.\n\nImportance:\n1. Uniform intervals make bars fairly comparable.\n2. Starting from 0 avoids exaggerating differences.\n3. Too small a scale makes differences indistinguishable.\n4. Too large a scale compresses differences unfairly.\n\nAlways choose a scale where the highest value fits and differences are clearly visible.", type: "long" },
        { q: "The temperature (°C) recorded at noon for a week: Mon-28, Tue-31, Wed-29, Thu-33, Fri-30, Sat-35, Sun-27. Find the mean and range.", a: "Data: 28, 31, 29, 33, 30, 35, 27\nMean = (28+31+29+33+30+35+27)/7 = 213/7 = 30.43°C (approximately 30.4°C)\n\nRange = Maximum − Minimum = 35 − 27 = 8°C\n\nObservations:\n• The hottest day was Saturday (35°C).\n• The coolest day was Sunday (27°C).\n• The average temperature for the week was about 30.4°C.\n• A range of 8°C shows moderate variation through the week.", type: "short" },
      ],
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 6-MATHS-5 : Prime Time
  // ─────────────────────────────────────────────────────────────
  "6-maths-5": {
    notes: [
      {
        heading: "Prime and Composite Numbers",
        body: "A prime number is a natural number greater than 1 that has exactly two factors: 1 and itself. Examples: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29.\n\n2 is the only even prime number. All other even numbers are composite.\n\nA composite number has more than two factors. Examples: 4, 6, 8, 9, 10, 12.\n\n1 is neither prime nor composite — it has only one factor (itself).\n\nThe Sieve of Eratosthenes is a method to find all primes up to a given number: list all numbers, start with 2, cross out all multiples of 2 (except 2 itself), then multiples of 3, then 5, and so on. Numbers remaining are prime.",
        highlight: "Prime: exactly 2 factors | Composite: more than 2 factors | 1: neither | 2: only even prime",
      },
      {
        heading: "Factors and Multiples",
        body: "A factor of a number divides it exactly (no remainder). Every number has at least two factors: 1 and itself (except 1, which has only itself).\n\nA multiple of a number is obtained by multiplying it by 1, 2, 3, … Multiples of 6: 6, 12, 18, 24, 30 …\n\nProperties:\n• 1 is a factor of every number.\n• Every number is a factor of itself.\n• Every number is a multiple of itself.\n• Factors of a number are always less than or equal to the number.\n• Multiples of a number are always greater than or equal to the number.",
        highlight: "Factor divides the number exactly | Multiple is the number × any natural number",
      },
      {
        heading: "HCF and LCM",
        body: "Highest Common Factor (HCF) is the greatest number that divides two or more numbers exactly. Also called Greatest Common Divisor (GCD).\n\nFinding HCF: List all factors of each number; the largest common one is the HCF.\nExample: HCF(12, 18) → Factors of 12: 1,2,3,4,6,12; Factors of 18: 1,2,3,6,9,18. Common: 1,2,3,6. HCF = 6.\n\nLowest Common Multiple (LCM) is the smallest number that is a multiple of two or more numbers.\nFinding LCM: List multiples of each number; the smallest one common to both is the LCM.\nExample: LCM(4, 6) → Multiples of 4: 4,8,12,16,20; Multiples of 6: 6,12,18,24. LCM = 12.\n\nImportant relationship: HCF × LCM = Product of the two numbers",
        highlight: "HCF × LCM = Product of two numbers | HCF divides LCM always",
      },
      {
        heading: "Prime Factorisation",
        body: "Prime factorisation is expressing a number as a product of its prime factors. Every composite number can be uniquely written as a product of primes (Fundamental Theorem of Arithmetic).\n\nMethod 1 — Factor Tree: Break the number into factor pairs, continuing until all factors are prime.\nExample: 60 = 2 × 30 = 2 × 2 × 15 = 2 × 2 × 3 × 5 = 2² × 3 × 5\n\nMethod 2 — Division by Primes: Divide by smallest prime, continue with quotient.\n60 ÷ 2 = 30 ÷ 2 = 15 ÷ 3 = 5 ÷ 5 = 1 → 60 = 2² × 3 × 5\n\nUsing prime factorisation to find HCF and LCM:\n• HCF = product of common prime factors with smallest powers\n• LCM = product of all prime factors with highest powers",
        highlight: "60 = 2² × 3 × 5 | HCF = smallest powers of common primes | LCM = highest powers of all primes",
      },
    ],
    snippets: [
      { term: "Prime Number", definition: "A natural number greater than 1 with exactly two factors: 1 and itself.", example: "2, 3, 5, 7, 11, 13 are primes" },
      { term: "Composite Number", definition: "A natural number with more than two factors.", example: "12 is composite: factors 1,2,3,4,6,12" },
      { term: "Factor", definition: "A number that divides another number exactly (without a remainder).", example: "Factors of 18: 1, 2, 3, 6, 9, 18" },
      { term: "Multiple", definition: "The result of multiplying a number by a natural number.", formula: "Multiples of n: n, 2n, 3n, 4n, …", example: "Multiples of 7: 7, 14, 21, 28, 35 …" },
      { term: "HCF (Highest Common Factor)", definition: "The greatest number that divides two or more given numbers exactly.", formula: "HCF × LCM = Product of two numbers", example: "HCF(12, 18) = 6" },
      { term: "LCM (Lowest Common Multiple)", definition: "The smallest number that is a multiple of two or more given numbers.", example: "LCM(4, 6) = 12" },
      { term: "Prime Factorisation", definition: "Expressing a number as a product of its prime factors.", formula: "60 = 2² × 3 × 5", example: "Factor tree or repeated division method" },
      { term: "Sieve of Eratosthenes", definition: "An ancient algorithm to find all prime numbers up to a given limit by progressively eliminating multiples of each prime.", example: "Eliminates multiples of 2, then 3, then 5 … leaving only primes" },
    ],
    mcq: [
      [
        { q: "Which of the following is a prime number?", options: ["1", "9", "17", "21"], answer: 2, explanation: "17 has exactly two factors (1 and 17). 1 is neither prime nor composite; 9=3×3; 21=3×7." },
        { q: "The HCF of 24 and 36 is:", options: ["4", "6", "12", "72"], answer: 2, explanation: "Factors of 24: 1,2,3,4,6,8,12,24; Factors of 36: 1,2,3,4,6,9,12,18,36. HCF = 12." },
        { q: "The LCM of 8 and 12 is:", options: ["4", "24", "48", "96"], answer: 1, explanation: "Multiples of 8: 8,16,24…; Multiples of 12: 12,24…. Smallest common = 24." },
        { q: "Prime factorisation of 72 is:", options: ["2³ × 3²", "2² × 3³", "2 × 36", "8 × 9"], answer: 0, explanation: "72 = 8 × 9 = 2³ × 3². The prime factorisation uses only prime factors." },
        { q: "Which number is neither prime nor composite?", options: ["0", "1", "2", "4"], answer: 1, explanation: "1 has only one factor (itself). By convention, 1 is neither prime nor composite." },
        { q: "If HCF(a,b) = 6 and LCM(a,b) = 60, find a × b:", options: ["360", "66", "10", "54"], answer: 0, explanation: "a × b = HCF × LCM = 6 × 60 = 360." },
        { q: "How many prime numbers are there between 1 and 20?", options: ["6", "7", "8", "9"], answer: 2, explanation: "Primes between 1 and 20: 2,3,5,7,11,13,17,19 — that's 8 primes." },
        { q: "The smallest prime number is:", options: ["0", "1", "2", "3"], answer: 2, explanation: "2 is the smallest (and only even) prime number." },
        { q: "Which pair has HCF = 1 (co-prime)?", options: ["4 and 8", "6 and 9", "8 and 15", "12 and 18"], answer: 2, explanation: "8 = 2³ and 15 = 3×5 share no common factor other than 1, so HCF = 1. They are co-prime." },
        { q: "The number of factors of 36 is:", options: ["6", "7", "8", "9"], answer: 3, explanation: "Factors of 36: 1,2,3,4,6,9,12,18,36 — 9 factors total." },
      ],
      [
        { q: "Assertion (A): 2 is the only even prime number. Reason (R): All other even numbers are divisible by 2, giving them more than 2 factors.", options: ["Both A and R true, R explains A", "Both true, R does not explain A", "A true, R false", "A false, R true"], answer: 0, explanation: "2 is even and prime. Every other even number has 2 as a factor (besides 1 and itself), so has >2 factors, making it composite." },
        { q: "Assertion (A): HCF of two prime numbers is always 1. Reason (R): Prime numbers have no common factors other than 1.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "Two different primes share only the factor 1 (they have no other common factors), so their HCF = 1." },
        { q: "Assertion (A): LCM of two numbers is always greater than or equal to each of the numbers. Reason (R): LCM is a multiple of both numbers.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "LCM must be a multiple of each number, so it can't be smaller than either. Both correct." },
        { q: "Assertion (A): Every prime number is odd. Reason (R): 2 is an even prime number.", options: ["A false, R true", "Both true", "A true, R false", "Both false"], answer: 0, explanation: "The assertion is false because 2 is an even prime. The reason correctly states the counterexample." },
        { q: "Assertion (A): 1 is a factor of every number. Reason (R): Every number divided by 1 equals itself.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "1 divides every number exactly (any n ÷ 1 = n with remainder 0). Both correct." },
        { q: "Assertion (A): The LCM of two co-prime numbers equals their product. Reason (R): Co-prime numbers share no common factor other than 1.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "For co-primes, HCF=1, so LCM = product/HCF = product/1 = product. Both correct." },
        { q: "Assertion (A): Prime factorisation of a number is unique. Reason (R): This is stated by the Fundamental Theorem of Arithmetic.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "Every number has one unique prime factorisation (order aside), per the Fundamental Theorem of Arithmetic." },
        { q: "Assertion (A): HCF is always less than or equal to the smaller of the two numbers. Reason (R): HCF is a factor (divisor) of both numbers.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "HCF divides both numbers, so it can't exceed either of them. It is ≤ the smaller number." },
        { q: "Assertion (A): 91 is a prime number. Reason (R): 91 is not divisible by 2, 3, or 5.", options: ["A false, R true", "Both true", "A true, R false", "Both false"], answer: 0, explanation: "91 = 7 × 13, so it IS composite. The reason is true (91 is not divisible by 2,3,5) but incomplete — it is divisible by 7." },
        { q: "Assertion (A): Twin primes are pairs of primes that differ by 2. Reason (R): (3,5), (5,7), (11,13) are examples of twin primes.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "Twin primes differ by exactly 2, and the examples given are all valid twin prime pairs." },
      ],
    ],
    qa: [
      [
        { q: "Find all factors of 48 using the factor pair method.", a: "Factor pairs of 48 (a × b = 48):\n1 × 48, 2 × 24, 3 × 16, 4 × 12, 6 × 8\nAll factors of 48: 1, 2, 3, 4, 6, 8, 12, 16, 24, 48 (10 factors total)", type: "short" },
        { q: "Find HCF and LCM of 18 and 24 using prime factorisation.", a: "18 = 2 × 3²\n24 = 2³ × 3\nHCF = product of common primes with smallest powers = 2¹ × 3¹ = 6\nLCM = product of all primes with highest powers = 2³ × 3² = 8 × 9 = 72\nVerification: HCF × LCM = 6 × 72 = 432 = 18 × 24 ✓", type: "short" },
        { q: "Use the Sieve of Eratosthenes to find all primes up to 30.", a: "List: 2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30\nCross out multiples of 2 (≠2): 4,6,8,10,12,14,16,18,20,22,24,26,28,30\nCross out multiples of 3 (≠3): 9,15,21,27\nCross out multiples of 5 (≠5): 25\nCross out multiples of 7 (≠7): (49>30, none new)\nPrimes up to 30: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29", type: "short" },
        { q: "Are 35 and 36 co-prime? Justify.", a: "35 = 5 × 7 → Factors: 1, 5, 7, 35\n36 = 2² × 3² → Factors: 1, 2, 3, 4, 6, 9, 12, 18, 36\nCommon factors of 35 and 36: only 1\nHCF(35, 36) = 1\nYes, 35 and 36 are co-prime because their HCF is 1.", type: "short" },
        { q: "Two bells ring at intervals of 12 minutes and 18 minutes. If they ring together at 8:00 AM, when will they next ring together?", a: "They will next ring together after LCM(12, 18) minutes.\nLCM(12, 18): 12 = 2² × 3; 18 = 2 × 3²\nLCM = 2² × 3² = 4 × 9 = 36 minutes\nNext together: 8:00 AM + 36 minutes = 8:36 AM", type: "short" },
      ],
      [
        { q: "Explain the Sieve of Eratosthenes. What is its significance in mathematics?", a: "The Sieve of Eratosthenes is an ancient algorithm devised by the Greek mathematician Eratosthenes (~240 BCE) to find all prime numbers up to a given limit.\n\nProcedure:\n1. Write all natural numbers from 2 to the limit.\n2. Starting with 2 (first prime), cross out all its multiples greater than 2.\n3. Move to the next uncrossed number (3), cross out its multiples > 3.\n4. Continue until you've processed numbers up to √(limit).\n5. All remaining uncrossed numbers are prime.\n\nSignificance:\n• Demonstrates that there are infinitely many prime numbers.\n• Efficient for finding primes in small ranges.\n• Foundation for understanding number theory.\n• Used in modern computing for cryptography and security algorithms.\n• Primes are the 'atoms' of arithmetic — all whole numbers are products of primes.", type: "long" },
        { q: "A rectangular room measures 16 m × 12 m. Square tiles of the largest possible size must be used to cover the floor without cutting. Find the tile size, and how many tiles are needed.", a: "The largest square tile that fits exactly must have side length = HCF(16, 12).\n16 = 2⁴; 12 = 2² × 3\nHCF = 2² = 4 m\n\nTile size = 4 m × 4 m\nArea of room = 16 × 12 = 192 m²\nArea of one tile = 4 × 4 = 16 m²\nNumber of tiles = 192 ÷ 16 = 12 tiles\n\nVerification: Along length = 16/4 = 4 tiles; along width = 12/4 = 3 tiles; total = 4 × 3 = 12 tiles ✓", type: "long" },
        { q: "Why is 1 considered neither prime nor composite? Explain using the definition.", a: "Definition of prime: a number with EXACTLY 2 distinct factors — 1 and itself.\nDefinition of composite: a number with MORE THAN 2 factors.\n\n1 has only ONE factor: itself (1).\n• It doesn't satisfy the prime definition (needs exactly 2 factors).\n• It doesn't satisfy the composite definition (needs more than 2 factors).\n\nHistorical reason: If 1 were prime, the Fundamental Theorem of Arithmetic (unique prime factorisation) would fail. For example, 6 = 2 × 3 = 1 × 2 × 3 = 1 × 1 × 2 × 3 … giving infinitely many factorisations. To preserve uniqueness, 1 is excluded from the primes.\n\nSo 1 is a special number in its own category.", type: "long" },
        { q: "Find the LCM and HCF of 36, 48, and 72 using prime factorisation.", a: "Prime factorisations:\n36 = 2² × 3²\n48 = 2⁴ × 3\n72 = 2³ × 3²\n\nHCF = smallest power of each common prime factor:\nCommon primes: 2 and 3\nHCF = 2² × 3¹ = 4 × 3 = 12\n\nLCM = highest power of each prime factor:\nLCM = 2⁴ × 3² = 16 × 9 = 144\n\nVerification:\nHCF divides all three: 36÷12=3✓, 48÷12=4✓, 72÷12=6✓\n144 is divisible by all: 144÷36=4✓, 144÷48=3✓, 144÷72=2✓", type: "long" },
        { q: "Goldbach's conjecture states every even number greater than 2 is the sum of two primes. Verify this for 20, 28, and 36.", a: "Goldbach's Conjecture verification:\n\n20 = 3 + 17 (both prime ✓) or 7 + 13 ✓\n28 = 5 + 23 (both prime ✓) or 11 + 17 ✓\n36 = 5 + 31 (both prime ✓) or 7 + 29 ✓ or 13 + 23 ✓\n\nNote: Goldbach's conjecture has been verified for all even numbers up to very large values but has never been formally proved for ALL even numbers. It remains one of the oldest unsolved problems in mathematics.", type: "short" },
      ],
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 6-MATHS-6 : Perimeter and Area
  // ─────────────────────────────────────────────────────────────
  "6-maths-6": {
    notes: [
      {
        heading: "Perimeter — The Boundary Length",
        body: "Perimeter is the total length of the boundary of a closed figure. To find the perimeter, add up the lengths of all sides.\n\nFormulas:\n• Rectangle: P = 2(l + b), where l = length and b = breadth\n• Square: P = 4s, where s = side length\n• Triangle: P = a + b + c (sum of all three sides)\n• Regular polygon with n sides of length s: P = n × s\n\nExample: A rectangle 8 cm long and 5 cm wide has P = 2(8+5) = 2×13 = 26 cm.\n\nPerimeter is always measured in units of length: cm, m, km, etc.",
        highlight: "Rectangle: P = 2(l+b) | Square: P = 4s | Triangle: P = a+b+c",
      },
      {
        heading: "Area — The Space Inside",
        body: "Area is the amount of surface enclosed within the boundary of a flat (2D) figure. Area is measured in square units: cm², m², km².\n\nFormulas:\n• Rectangle: A = l × b\n• Square: A = s²\n• Triangle: A = ½ × base × height\n• Parallelogram: A = base × height\n\nExample: A rectangle 6 cm × 4 cm has Area = 6 × 4 = 24 cm².\n\nImportant: Two figures can have the same perimeter but different areas, and vice versa. For example, a 5×3 rectangle and a 4×4 square both have perimeter 16, but areas 15 and 16 respectively.",
        highlight: "Rectangle: A = l×b | Square: A = s² | Triangle: A = ½×b×h",
      },
      {
        heading: "Units of Measurement and Conversion",
        body: "Metric units of length: 1 km = 1000 m | 1 m = 100 cm | 1 cm = 10 mm\n\nMetric units of area:\n1 m² = 10,000 cm² (= 100 cm × 100 cm)\n1 km² = 1,000,000 m²\n1 hectare (ha) = 10,000 m²\n1 are = 100 m²\n\nLand area in India is often measured in hectares. One hectare is the area of a square with side 100 m.\n\nWhen converting area units, always square the length conversion factor. For example: since 1 m = 100 cm, we have 1 m² = 100² cm² = 10,000 cm².",
        highlight: "1 m² = 10,000 cm² | 1 hectare = 10,000 m² | 1 km² = 1,000,000 m²",
      },
      {
        heading: "Perimeter and Area in Real Life",
        body: "Perimeter is used when we need to know the length of a boundary — fencing a garden, putting a frame around a picture, or measuring the circumference of a running track.\n\nArea is used when we need to know the surface — tiling a floor, painting a wall, carpeting a room, or estimating land.\n\nPractical problems often involve both: for example, finding how many square tiles (area) are needed to cover a rectangular floor (area of floor ÷ area of one tile), or how much wire is needed to fence a field (perimeter).\n\nThe distinction between perimeter and area is crucial: buying enough carpet requires area; buying enough skirting board requires perimeter.",
        highlight: "Perimeter → boundary (fencing, framing) | Area → surface (tiling, painting)",
      },
    ],
    snippets: [
      { term: "Perimeter", definition: "The total length of the boundary of a closed 2D figure.", formula: "Rectangle: P = 2(l+b); Square: P = 4s", example: "Perimeter of a 5m × 3m room = 2(5+3) = 16 m" },
      { term: "Area", definition: "The amount of surface enclosed within the boundary of a 2D figure, measured in square units.", formula: "Rectangle: A = l×b; Square: A = s²; Triangle: A = ½bh", example: "Area of a 5m × 3m room = 15 m²" },
      { term: "Square Unit", definition: "The unit used to measure area, representing a square with each side measuring one unit.", example: "1 cm² is a square with sides of 1 cm each" },
      { term: "Hectare", definition: "A unit of area equal to 10,000 m², used mainly for measuring land.", formula: "1 hectare = 10,000 m² = 100 m × 100 m", example: "A football pitch is about 0.7 hectares" },
      { term: "Triangle Area", definition: "Half the product of base and corresponding height (altitude).", formula: "A = ½ × base × height", example: "Triangle with base 8 cm, height 5 cm: A = ½ × 8 × 5 = 20 cm²" },
      { term: "Altitude (Height)", definition: "The perpendicular distance from a vertex to the opposite side (base) of a triangle or parallelogram.", example: "In a right triangle, the two legs serve as base and height" },
      { term: "Parallelogram Area", definition: "Product of base and the perpendicular height (not the slant side).", formula: "A = base × height", example: "Parallelogram: base 10 cm, height 6 cm → A = 60 cm²" },
      { term: "Perimeter vs Area", definition: "Perimeter measures the boundary length (1D); area measures the enclosed surface (2D). Same perimeter does not guarantee same area.", example: "Rectangle 6×2: P=16, A=12 vs Square 4×4: P=16, A=16" },
    ],
    mcq: [
      [
        { q: "The perimeter of a square with side 9 cm is:", options: ["18 cm", "81 cm", "36 cm", "27 cm"], answer: 2, explanation: "P = 4s = 4 × 9 = 36 cm." },
        { q: "Area of a rectangle with length 12 cm and breadth 7 cm:", options: ["38 cm²", "84 cm²", "19 cm²", "42 cm²"], answer: 1, explanation: "A = l × b = 12 × 7 = 84 cm²." },
        { q: "The area of a triangle with base 10 cm and height 6 cm is:", options: ["60 cm²", "16 cm²", "30 cm²", "12 cm²"], answer: 2, explanation: "A = ½ × base × height = ½ × 10 × 6 = 30 cm²." },
        { q: "1 hectare is equal to:", options: ["100 m²", "1000 m²", "10,000 m²", "1,00,000 m²"], answer: 2, explanation: "1 hectare = 10,000 m² (a square with side 100 m)." },
        { q: "A rectangle has perimeter 40 cm and length 12 cm. Its breadth is:", options: ["8 cm", "16 cm", "28 cm", "4 cm"], answer: 0, explanation: "P = 2(l+b) → 40 = 2(12+b) → 20 = 12+b → b = 8 cm." },
        { q: "A square garden has area 144 m². Its perimeter is:", options: ["12 m", "48 m", "72 m", "36 m"], answer: 1, explanation: "Side = √144 = 12 m. Perimeter = 4 × 12 = 48 m." },
        { q: "How many square tiles of side 2 m each are needed to tile a floor of 8 m × 6 m?", options: ["48", "12", "14", "24"], answer: 1, explanation: "Floor area = 48 m². Tile area = 4 m². Number = 48/4 = 12 tiles." },
        { q: "If the length of a rectangle is doubled and breadth is halved, the area:", options: ["Doubles", "Halves", "Stays the same", "Quadruples"], answer: 2, explanation: "New area = (2l) × (b/2) = lb = original area. The area remains the same." },
        { q: "The perimeter of a triangle with sides 7 cm, 8 cm, and 5 cm:", options: ["20 cm", "21 cm", "280 cm", "56 cm"], answer: 0, explanation: "P = 7 + 8 + 5 = 20 cm." },
        { q: "1 m² = ? cm²", options: ["100", "1000", "10,000", "1,00,000"], answer: 2, explanation: "1 m = 100 cm, so 1 m² = 100 × 100 = 10,000 cm²." },
      ],
      [
        { q: "Assertion (A): Two rectangles with the same perimeter always have the same area. Reason (R): Perimeter and area both depend on dimensions.", options: ["A false, R true", "Both true", "A true, R false", "Both false"], answer: 0, explanation: "Same perimeter does NOT mean same area. E.g., 6×2 (P=16, A=12) vs 4×4 (P=16, A=16). Reason is true but insufficient." },
        { q: "Assertion (A): The area of a triangle is half the area of a rectangle with the same base and height. Reason (R): A = ½ × b × h for triangles.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "Rectangle area = b×h; triangle area = ½×b×h = half. Both correct." },
        { q: "Assertion (A): Perimeter is measured in square units. Reason (R): Perimeter measures a length boundary.", options: ["A false, R true", "Both true", "A true, R false", "Both false"], answer: 0, explanation: "Perimeter is a length, measured in linear units (cm, m), NOT square units. The reason correctly states perimeter measures boundary length." },
        { q: "Assertion (A): The area of a square of side 5 cm is 25 cm². Reason (R): A = s² = 5² = 25.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "5² = 25 cm². Both correct." },
        { q: "Assertion (A): When a rectangle is cut into two triangles, each triangle has half the area of the rectangle. Reason (R): A diagonal divides a rectangle into two equal triangles.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "A diagonal divides a rectangle into two congruent triangles, each with area = ½ × l × b." },
        { q: "Assertion (A): A larger perimeter always means a larger area. Reason (R): Perimeter and area are directly proportional.", options: ["A false, R false", "Both true", "A true, R false", "A false, R true"], answer: 0, explanation: "Both are false. A thin rectangle can have a huge perimeter but tiny area. They are not directly proportional." },
        { q: "Assertion (A): A farmer uses perimeter to decide how much fencing to buy. Reason (R): Fencing covers the boundary of the field.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "Fencing goes around the boundary — that is the perimeter. Both correct." },
        { q: "Assertion (A): The unit of area is always m². Reason (R): Metric system uses metres for length.", options: ["A false, R true", "Both true", "A true, R false", "Both false"], answer: 0, explanation: "Area can be measured in cm², mm², km², hectares, etc. — not always m². The reason is partially true but limited." },
        { q: "Assertion (A): A parallelogram and a rectangle with the same base and height have equal areas. Reason (R): Both use A = base × height.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "Yes — both parallelogram and rectangle with same base and height have equal area (base × height)." },
        { q: "Assertion (A): The area of India is measured in km². Reason (R): Very large areas use km² because 1 km² = 1,000,000 m².", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "India's area (≈3.28 million km²) is quoted in km². Using m² would give an unwieldy number. Both correct." },
      ],
    ],
    qa: [
      [
        { q: "A rectangular park is 80 m long and 60 m wide. Find: (a) perimeter, (b) area, (c) cost of fencing at ₹15 per metre.", a: "(a) Perimeter = 2(l+b) = 2(80+60) = 2×140 = 280 m\n(b) Area = l × b = 80 × 60 = 4800 m²\n(c) Cost of fencing = 280 × 15 = ₹4,200", type: "short" },
        { q: "Find the area of a triangle with base 14 cm and height 9 cm.", a: "Area = ½ × base × height = ½ × 14 × 9 = ½ × 126 = 63 cm²", type: "short" },
        { q: "A square has perimeter 52 m. Find its side length and area.", a: "Perimeter = 4s → 52 = 4s → s = 13 m\nArea = s² = 13² = 169 m²", type: "short" },
        { q: "Convert 5 hectares into m² and km².", a: "1 hectare = 10,000 m²\n5 hectares = 5 × 10,000 = 50,000 m²\n\n1 km² = 1,000,000 m²\n5 hectares = 50,000/1,000,000 = 0.05 km²", type: "short" },
        { q: "Which has greater area: a square of side 6 cm, or a rectangle 8 cm × 5 cm?", a: "Square area = 6² = 36 cm²\nRectangle area = 8 × 5 = 40 cm²\nThe rectangle has greater area (40 cm² > 36 cm²).", type: "short" },
      ],
      [
        { q: "A room is 9 m × 7 m. It has two doors (2 m × 1 m each) and three windows (1.5 m × 1 m each). Find the area of the walls to be painted (assume ceiling height 3 m).", a: "Perimeter of room = 2(9+7) = 32 m\nTotal wall area (4 walls) = Perimeter × Height = 32 × 3 = 96 m²\n\nArea of 2 doors = 2 × (2 × 1) = 4 m²\nArea of 3 windows = 3 × (1.5 × 1) = 4.5 m²\nArea not to paint = 4 + 4.5 = 8.5 m²\n\nPaintable wall area = 96 − 8.5 = 87.5 m²", type: "long" },
        { q: "A farmer has a rectangular field 120 m × 90 m. He fences it with 3 rows of wire. Cost of wire is ₹8 per metre. Find total cost.", a: "Perimeter of field = 2(120 + 90) = 2 × 210 = 420 m\nLength of wire for 3 rows = 3 × 420 = 1260 m\nCost = 1260 × ₹8 = ₹10,080", type: "long" },
        { q: "Explain with examples why two figures with the same perimeter can have different areas.", a: "This important concept shows perimeter and area are independent measurements.\n\nExample: Both figures have perimeter 24 cm:\n• Rectangle A: 10 cm × 2 cm → Area = 20 cm²\n• Rectangle B: 8 cm × 4 cm → Area = 32 cm²\n• Square: 6 cm × 6 cm → Area = 36 cm²\n\nObservation: As the shape becomes more 'square-like', the area increases while perimeter stays the same. The square encloses the MAXIMUM area for a given perimeter.\n\nPractical implication: A square garden fence encloses more space than a thin rectangular fence of the same length. This is why natural shapes (like bubbles) tend to be spherical — maximum volume for minimum surface area.", type: "long" },
        { q: "A square field has the same area as a rectangle 18 m × 8 m. Find the side of the square and compare their perimeters.", a: "Rectangle area = 18 × 8 = 144 m²\nSquare area = 144 m² → side = √144 = 12 m\n\nPerimeter of rectangle = 2(18+8) = 2×26 = 52 m\nPerimeter of square = 4×12 = 48 m\n\nThe square has smaller perimeter (48 m < 52 m) for the same area. This illustrates that among all rectangles with a given area, the square has the smallest perimeter.", type: "long" },
        { q: "A path 2 m wide surrounds a rectangular garden 20 m × 15 m. Find the area of the path.", a: "Outer rectangle dimensions (garden + path on all sides):\nLength = 20 + 2×2 = 24 m\nBreadth = 15 + 2×2 = 19 m\nOuter area = 24 × 19 = 456 m²\nGarden area = 20 × 15 = 300 m²\nArea of path = 456 − 300 = 156 m²", type: "short" },
      ],
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 6-MATHS-7 : Fractions
  // ─────────────────────────────────────────────────────────────
  "6-maths-7": {
    notes: [
      {
        heading: "Understanding Fractions",
        body: "A fraction represents a part of a whole. It is written as p/q where p is the numerator (number of parts taken) and q is the denominator (total equal parts the whole is divided into). The denominator can never be zero.\n\nTypes of fractions:\n• Proper fraction: numerator < denominator (e.g., 3/5). Value is less than 1.\n• Improper fraction: numerator ≥ denominator (e.g., 7/4). Value is ≥ 1.\n• Mixed number: a whole number and a proper fraction (e.g., 1¾). Same as an improper fraction.\n• Like fractions: same denominator (e.g., 2/7, 5/7).\n• Unlike fractions: different denominators (e.g., 1/3, 2/5).",
        highlight: "Proper: p < q | Improper: p ≥ q | Mixed: whole + fraction part",
      },
      {
        heading: "Equivalent Fractions and Simplification",
        body: "Equivalent fractions represent the same value but are written differently. You can create equivalent fractions by multiplying or dividing both numerator and denominator by the same non-zero number.\n\nExample: 1/2 = 2/4 = 3/6 = 4/8 (all equal)\n\nSimplifying (reducing) a fraction: divide both numerator and denominator by their HCF.\nExample: 18/24 → HCF(18,24) = 6 → 18÷6 / 24÷6 = 3/4\n\nA fraction is in its simplest form (lowest terms) when the HCF of numerator and denominator is 1 (they are co-prime).",
        highlight: "Equivalent fractions: multiply/divide top and bottom by same number | Simplest form: HCF = 1",
      },
      {
        heading: "Comparison and Operations",
        body: "Comparing fractions:\n• Same denominator: compare numerators (e.g., 3/7 > 2/7)\n• Different denominators: convert to same denominator using LCM, then compare.\n\nAdding and subtracting fractions:\n• Like fractions: add/subtract numerators, keep denominator.\n• Unlike fractions: find LCM of denominators, convert, then add/subtract.\n\nExample: 1/3 + 1/4 → LCM(3,4) = 12 → 4/12 + 3/12 = 7/12\n\nMultiplying fractions: multiply numerators and denominators separately.\n(a/b) × (c/d) = (a×c)/(b×d)\n\nDividing fractions: multiply by the reciprocal.\n(a/b) ÷ (c/d) = (a/b) × (d/c)",
        highlight: "Unlike fractions → find LCM → convert → operate | Division: multiply by reciprocal",
      },
      {
        heading: "Fractions on the Number Line and Real Life",
        body: "Fractions can be placed on a number line. To show 3/4, divide the segment from 0 to 1 into 4 equal parts and mark the 3rd point.\n\nFractions in real life:\n• ½ kg of sugar\n• ¾ of a pizza\n• 2/5 of the class are boys\n\nDecimal fractions: fractions with denominators that are powers of 10.\n1/10 = 0.1, 1/100 = 0.01, 3/4 = 75/100 = 0.75\n\nFractions, decimals, and percentages are three ways of expressing the same part-whole relationship:\n3/4 = 0.75 = 75%",
        highlight: "3/4 = 0.75 = 75% | Number line: divide unit segment into equal parts",
      },
    ],
    snippets: [
      { term: "Fraction", definition: "A number of the form p/q representing p parts out of q equal parts of a whole. q ≠ 0.", example: "3/8 means 3 out of 8 equal parts" },
      { term: "Numerator", definition: "The top number in a fraction — tells how many parts are taken.", example: "In 5/9, numerator = 5" },
      { term: "Denominator", definition: "The bottom number in a fraction — tells into how many equal parts the whole is divided.", example: "In 5/9, denominator = 9" },
      { term: "Equivalent Fractions", definition: "Fractions that represent the same value despite having different numerators and denominators.", formula: "a/b = (a×k)/(b×k) for any non-zero k", example: "1/2 = 2/4 = 3/6" },
      { term: "Mixed Number", definition: "A number consisting of a whole number and a proper fraction.", formula: "a b/c = (a×c + b)/c", example: "2⅓ = 7/3" },
      { term: "Reciprocal", definition: "The reciprocal of a/b is b/a. Multiplying a fraction by its reciprocal gives 1.", formula: "Reciprocal of p/q = q/p", example: "Reciprocal of 3/5 = 5/3; 3/5 × 5/3 = 1" },
      { term: "Simplest Form", definition: "A fraction where the HCF of numerator and denominator is 1 (co-prime).", example: "18/24 simplifies to 3/4 (HCF = 6)" },
      { term: "Like Fractions", definition: "Fractions with the same denominator.", example: "2/9, 5/9, 7/9 are like fractions" },
    ],
    mcq: [
      [
        { q: "Which fraction is in its simplest form?", options: ["6/9", "4/10", "5/7", "8/12"], answer: 2, explanation: "5 and 7 are co-prime (HCF=1). Others can be simplified: 6/9=2/3, 4/10=2/5, 8/12=2/3." },
        { q: "Convert 2⅗ to an improper fraction:", options: ["7/5", "13/5", "11/5", "12/5"], answer: 1, explanation: "2⅗ = (2×5+3)/5 = 13/5." },
        { q: "1/3 + 1/4 =", options: ["2/7", "7/12", "5/12", "2/12"], answer: 1, explanation: "LCM(3,4)=12. 4/12 + 3/12 = 7/12." },
        { q: "Which is the largest fraction? 3/5, 2/3, 7/10, 4/6", options: ["3/5", "2/3", "7/10", "4/6"], answer: 1, explanation: "LCM of 5,3,10,6=30. Equivalent: 18/30, 20/30, 21/30, 20/30. Largest = 21/30 = 7/10... Wait: 20/30 for 2/3, 21/30 for 7/10. Largest = 7/10." },
        { q: "3/4 ÷ 9/8 =", options: ["27/32", "2/3", "9/32", "4/3"], answer: 1, explanation: "3/4 ÷ 9/8 = 3/4 × 8/9 = 24/36 = 2/3." },
        { q: "Which fraction is equivalent to 2/5?", options: ["4/15", "6/15", "8/20", "6/25"], answer: 2, explanation: "8/20 = 8÷4 / 20÷4 = 2/5. ✓" },
        { q: "The reciprocal of 4/7 is:", options: ["4/7", "7/4", "1/4", "7/1"], answer: 1, explanation: "Reciprocal = flip numerator and denominator = 7/4." },
        { q: "5/6 − 1/4 =", options: ["4/2", "7/12", "4/6", "1/2"], answer: 1, explanation: "LCM(6,4)=12. 10/12 − 3/12 = 7/12." },
        { q: "A proper fraction is one where:", options: ["Numerator > Denominator", "Numerator = Denominator", "Numerator < Denominator", "Denominator = 0"], answer: 2, explanation: "A proper fraction has numerator strictly less than denominator, giving a value between 0 and 1." },
        { q: "2/3 × 3/4 × 4/5 =", options: ["24/60", "2/5", "6/12", "1/2"], answer: 1, explanation: "2/3 × 3/4 × 4/5 = (2×3×4)/(3×4×5) = 24/60 = 2/5." },
      ],
      [
        { q: "Assertion (A): 0/5 = 0. Reason (R): Zero divided by any non-zero number is 0.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "0/5 = 0. Zero divided by any non-zero number is indeed 0. Both correct." },
        { q: "Assertion (A): 5/0 is undefined. Reason (R): Division by zero is not defined in mathematics.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "Division by zero has no meaning in standard mathematics. Both correct." },
        { q: "Assertion (A): 1/2 + 1/3 = 2/5. Reason (R): Add numerators and denominators separately.", options: ["A false, R false", "Both true", "A true, R false", "A false, R true"], answer: 0, explanation: "Both are wrong. 1/2+1/3 = 5/6 (LCM method). Adding numerators/denominators separately is incorrect." },
        { q: "Assertion (A): Every improper fraction can be written as a mixed number. Reason (R): The numerator is divided by the denominator to get the whole and remainder.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "7/4 = 1¾; numerator 7 ÷ denominator 4 = quotient 1, remainder 3. Both correct." },
        { q: "Assertion (A): Equivalent fractions are always equal in value. Reason (R): Multiplying numerator and denominator by the same number doesn't change the value.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "Equivalent fractions represent the same value. Multiplying both top and bottom by k = multiplying by k/k = 1. Both correct." },
        { q: "Assertion (A): The product of a fraction and its reciprocal is always 1. Reason (R): (a/b) × (b/a) = ab/ab = 1.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "a/b × b/a = 1 (provided a≠0, b≠0). Both correct." },
        { q: "Assertion (A): 3/5 > 2/3. Reason (R): 3 > 2.", options: ["A false, R true", "Both true", "A true, R false", "Both false"], answer: 0, explanation: "3/5 = 0.6 and 2/3 ≈ 0.667, so 3/5 < 2/3. Assertion is false. The reason (3>2) is true but irrelevant to comparing fractions with different denominators." },
        { q: "Assertion (A): To divide by a fraction, multiply by its reciprocal. Reason (R): Division is the inverse operation of multiplication.", options: ["Both A and R true, R explains A", "Both true, R does not explain A", "A true, R false", "A false, R true"], answer: 1, explanation: "Both are true, but the reason (division is inverse of multiplication) is a general fact that partially explains why we use the reciprocal." },
        { q: "Assertion (A): Like fractions can be added by simply adding the numerators. Reason (R): Like fractions have the same denominator.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "For like fractions, add numerators and keep the denominator: a/c + b/c = (a+b)/c. Both correct." },
        { q: "Assertion (A): A fraction with denominator 1 is always a whole number. Reason (R): n/1 = n.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "Any fraction with denominator 1 equals its numerator, which is a whole number. Both correct." },
      ],
    ],
    qa: [
      [
        { q: "Simplify 84/112 to its lowest terms.", a: "Find HCF(84, 112):\n84 = 2² × 3 × 7\n112 = 2⁴ × 7\nHCF = 2² × 7 = 28\n84 ÷ 28 = 3\n112 ÷ 28 = 4\nSimplest form = 3/4", type: "short" },
        { q: "Add: 2/3 + 3/4 + 1/6. Express as a mixed number.", a: "LCM(3, 4, 6) = 12\n2/3 = 8/12, 3/4 = 9/12, 1/6 = 2/12\nSum = (8+9+2)/12 = 19/12 = 1 7/12", type: "short" },
        { q: "Riya finished 3/8 of her homework. What fraction is left?", a: "Fraction left = 1 − 3/8 = 8/8 − 3/8 = 5/8\nRiya has 5/8 of her homework remaining.", type: "short" },
        { q: "Arrange in ascending order: 5/6, 3/4, 7/9, 2/3.", a: "LCM(6,4,9,3) = 36\n5/6 = 30/36, 3/4 = 27/36, 7/9 = 28/36, 2/3 = 24/36\nAscending: 24/36, 27/36, 28/36, 30/36\n= 2/3 < 3/4 < 7/9 < 5/6", type: "short" },
        { q: "A recipe needs 2½ cups of flour. Ravi has 1¾ cups. How much more does he need?", a: "Convert to improper fractions:\n2½ = 5/2, 1¾ = 7/4\nDifference = 5/2 − 7/4 = 10/4 − 7/4 = 3/4\nRavi needs 3/4 cup more flour.", type: "short" },
      ],
      [
        { q: "Explain with diagrams the difference between proper, improper, and mixed fractions. Give two examples of each.", a: "Proper Fraction (value < 1):\nNumerator < denominator. Represents less than one whole.\nExamples: 2/5 (2 parts of 5), 7/10 (7 parts of 10)\nDiagram: shade 2 out of 5 equal boxes.\n\nImproper Fraction (value ≥ 1):\nNumerator ≥ denominator. Represents one whole or more.\nExamples: 7/4 (= 1¾), 11/3 (= 3⅔)\nDiagram: shade all 4 boxes + 3 more = 7/4.\n\nMixed Number (whole + fraction):\nA whole number combined with a proper fraction.\nExamples: 1¾, 3⅔\nConversion: 7/4 = 1 remainder 3 = 1¾\nConversion formula: improper p/q → quotient is whole part, remainder/q is fractional part.", type: "long" },
        { q: "A field is 4½ km long and 2¾ km wide. Find its perimeter and area.", a: "Convert to improper fractions:\nLength = 4½ = 9/2 km\nWidth = 2¾ = 11/4 km\n\nPerimeter = 2(l + w) = 2(9/2 + 11/4)\n= 2(18/4 + 11/4) = 2 × 29/4 = 29/2 = 14½ km\n\nArea = l × w = 9/2 × 11/4 = 99/8 = 12⅜ km²", type: "long" },
        { q: "Show that 1/2, 2/4, 3/6, 4/8 are all equivalent. How do equivalent fractions help in comparing unlike fractions?", a: "Equivalence check:\n2/4 = 2÷2/4÷2 = 1/2 ✓\n3/6 = 3÷3/6÷3 = 1/2 ✓\n4/8 = 4÷4/8÷4 = 1/2 ✓\nAll simplify to 1/2, confirming equivalence.\n\nHow they help in comparison:\nTo compare unlike fractions (e.g., 3/4 and 5/7), we convert both to equivalent fractions with the LCM as the common denominator.\nLCM(4,7)=28\n3/4 = 21/28, 5/7 = 20/28\nNow comparing is simple: 21/28 > 20/28, so 3/4 > 5/7.\n\nWithout equivalent fractions, comparing unlike fractions would require decimal conversion or other methods.", type: "long" },
        { q: "Solve: (3/4 + 1/3) ÷ (5/6 − 1/4). Simplify your answer.", a: "Step 1: 3/4 + 1/3\nLCM(4,3)=12: 9/12 + 4/12 = 13/12\n\nStep 2: 5/6 − 1/4\nLCM(6,4)=12: 10/12 − 3/12 = 7/12\n\nStep 3: (13/12) ÷ (7/12)\n= 13/12 × 12/7 = 156/84 = 13/7 = 1 6/7", type: "short" },
        { q: "A tank is 2/3 full. After adding 1/4 of its capacity more water, what fraction is filled? If the tank holds 240 litres, how many litres are in it now?", a: "Water already = 2/3\nWater added = 1/4\nTotal = 2/3 + 1/4 = 8/12 + 3/12 = 11/12\n\nThe tank is now 11/12 full.\nIf capacity = 240 litres:\nWater present = 11/12 × 240 = 11 × 20 = 220 litres", type: "short" },
      ],
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 6-MATHS-8 : Playing with Constructions
  // ─────────────────────────────────────────────────────────────
  "6-maths-8": {
    notes: [
      {
        heading: "Geometric Construction Tools",
        body: "Geometric constructions are drawings made using only two tools: a ruler (straight edge) and a compass. A protractor is used to measure and draw angles. A set square helps draw perpendicular and parallel lines.\n\n• Ruler: draws straight lines and measures lengths.\n• Compass: draws circles and arcs; copies lengths.\n• Protractor: measures and constructs angles.\n\nConstruction differs from drawing: a construction is precise and uses defined geometric methods, while a drawing is an approximate sketch. In constructions, we never estimate — every step is based on a geometric property.",
        highlight: "Construction tools: ruler, compass, protractor, set square — precision, not estimation",
      },
      {
        heading: "Basic Constructions",
        body: "Key basic constructions:\n\n1. Drawing a circle: set compass to desired radius, place point at centre, rotate full circle.\n\n2. Bisecting a line segment: with compass set >½ length, draw arcs from each endpoint above and below the segment. Join the two arc intersections — this line is the perpendicular bisector and crosses the segment at its midpoint.\n\n3. Bisecting an angle: with compass at vertex, draw an arc cutting both arms. From the two arm-intersections, draw equal arcs that meet — this point with the vertex gives the angle bisector.\n\n4. Drawing a perpendicular from a point: from the external point, draw arcs cutting the line at two points; bisect the resulting segment.",
        highlight: "Perpendicular bisector: equidistant from both endpoints | Angle bisector: equal angles on both sides",
      },
      {
        heading: "Constructing Triangles",
        body: "A triangle can be uniquely constructed given:\n• Three sides (SSS) — uses compass to mark off lengths\n• Two sides and included angle (SAS)\n• Two angles and included side (ASA)\n• Right angle, hypotenuse and one side (RHS)\n\nSSS Construction (e.g., triangle with sides 4, 5, 6 cm):\n1. Draw base BC = 6 cm.\n2. With B as centre, draw arc of radius 4 cm.\n3. With C as centre, draw arc of radius 5 cm.\n4. Both arcs intersect at A. Join AB and AC.\n\nFor triangle inequality: the sum of any two sides must exceed the third side. If this fails, no triangle is possible.",
        highlight: "Triangle inequality: a+b > c | SSS, SAS, ASA, RHS — four congruence conditions",
      },
      {
        heading: "Constructing Angles and Parallel Lines",
        body: "Constructing 60°: Draw a line segment. From one endpoint, draw an arc. Without changing compass width, put point at arc-line intersection and mark another arc. The angle between the arcs at the point is 60° (equilateral triangle property).\n\nConstructing 90°: bisect a straight angle (180°).\nConstructing 30°: bisect 60°.\nConstructing 45°: bisect 90°.\n\nDrawing a parallel line through a point:\n1. Draw a transversal through the point crossing the given line.\n2. Copy the angle at the intersection to the point above.\n3. The line through the point making the same corresponding angle is parallel.\n\nSet square method: slide a set square along a ruler to draw parallel lines quickly.",
        highlight: "60° from equilateral triangle | 90° = bisect 180° | 30° = bisect 60° | 45° = bisect 90°",
      },
    ],
    snippets: [
      { term: "Compass (Geometrical)", definition: "A drawing instrument used to draw circles and arcs, and to transfer lengths in geometric constructions.", example: "Used to draw a circle of radius 5 cm" },
      { term: "Perpendicular Bisector", definition: "A line that cuts a line segment into two equal halves at a right angle.", example: "The perpendicular bisector of a chord passes through the centre of the circle" },
      { term: "Angle Bisector", definition: "A ray that divides an angle into two equal angles.", example: "The bisector of a 70° angle creates two 35° angles" },
      { term: "Equilateral Triangle", definition: "A triangle where all three sides are equal in length and all angles are 60°.", example: "Used to construct 60° angles without a protractor" },
      { term: "Triangle Inequality", definition: "The sum of any two sides of a triangle must be greater than the third side.", formula: "a + b > c, b + c > a, a + c > b", example: "Sides 3,4,5: 3+4=7>5 ✓; but 2,3,8: 2+3=5<8 ✗ (not a triangle)" },
      { term: "SSS Congruence", definition: "Two triangles are congruent if all three sides of one equal all three sides of the other.", example: "Triangles with sides (3,4,5) cm are congruent regardless of orientation" },
      { term: "SAS Congruence", definition: "Two triangles are congruent if two sides and the included angle of one equal those of the other.", example: "Sides 5cm, 6cm with included angle 60° uniquely define a triangle" },
      { term: "Arc", definition: "A portion of the circumference of a circle, drawn using a compass.", example: "Drawing arcs from both endpoints to find the midpoint of a segment" },
    ],
    mcq: [
      [
        { q: "To bisect a line segment, which tool is primarily used?", options: ["Ruler only", "Protractor only", "Compass and ruler", "Set square only"], answer: 2, explanation: "A compass and ruler are used to construct the perpendicular bisector, which bisects the line segment." },
        { q: "The perpendicular bisector of a segment always passes through:", options: ["One endpoint", "The midpoint", "Both endpoints", "An external point"], answer: 1, explanation: "The perpendicular bisector crosses the segment at its exact midpoint at a 90° angle." },
        { q: "Constructing a 60° angle uses the property of:", options: ["Right-angled triangle", "Equilateral triangle", "Isosceles triangle", "Scalene triangle"], answer: 1, explanation: "An equilateral triangle has all angles equal to 60°. Arcs of equal radius create this triangle, giving the 60° angle." },
        { q: "Can a triangle be formed with sides 4 cm, 7 cm, and 2 cm?", options: ["Yes", "No, sum of two sides less than third", "No, sides are unequal", "Yes, it's isosceles"], answer: 1, explanation: "Check: 4+2=6 < 7. The triangle inequality is violated, so no triangle is possible." },
        { q: "To draw a parallel line through an external point, you copy:", options: ["The length of the line", "An angle made by a transversal", "The midpoint", "The perpendicular"], answer: 1, explanation: "You draw a transversal and copy the corresponding angle at the external point to create a parallel line." },
        { q: "The angle bisector divides an angle into:", options: ["Two right angles", "Two equal halves", "Two supplementary parts", "Two complementary parts"], answer: 1, explanation: "The angle bisector splits an angle into two equal angles." },
        { q: "How do you construct a 30° angle?", options: ["Directly with compass", "By bisecting 90°", "By bisecting 60°", "By trisecting 90°"], answer: 2, explanation: "Construct 60°, then bisect it: 60° ÷ 2 = 30°." },
        { q: "Which construction gives a 90° angle?", options: ["Bisecting 60°", "Drawing any two lines", "Bisecting a straight angle (180°)", "Using a triangle"], answer: 2, explanation: "Bisecting a straight angle (180°) gives two 90° angles on either side." },
        { q: "In SSS construction, the number of sides given is:", options: ["1", "2", "3", "0"], answer: 2, explanation: "SSS stands for Side-Side-Side — all three sides of the triangle are given." },
        { q: "A circle has radius 6 cm. What is the compass set to when drawing it?", options: ["12 cm (diameter)", "6 cm (radius)", "3 cm (half radius)", "18 cm (circumference)"], answer: 1, explanation: "The compass is set to the radius (6 cm) to draw the circle." },
      ],
      [
        { q: "Assertion (A): A perpendicular bisector is equidistant from both endpoints of the segment. Reason (R): Any point on the perpendicular bisector is at equal distance from the two endpoints.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "This is a fundamental property of the perpendicular bisector. Both correct." },
        { q: "Assertion (A): A 45° angle can be constructed using only a compass and ruler without a protractor. Reason (R): 45° = half of 90° = half of half of 180°.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "We construct 90° (bisect 180°) then bisect it to get 45°. Both correct." },
        { q: "Assertion (A): Three sides 5, 12, 13 form a right-angled triangle. Reason (R): 5² + 12² = 13².", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "25 + 144 = 169 = 13². It satisfies Pythagoras' theorem, so it is a right-angled triangle." },
        { q: "Assertion (A): Any three line segments can form a triangle. Reason (R): Triangle inequality must be satisfied.", options: ["A false, R true", "Both true", "A true, R false", "Both false"], answer: 0, explanation: "NOT any three segments form a triangle — triangle inequality (sum of any two > third) must hold. Assertion is false; reason is the correct condition." },
        { q: "Assertion (A): The angle bisector of a 90° angle creates two 45° angles. Reason (R): 90° ÷ 2 = 45°.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "Bisecting 90° gives two 45° angles. Both correct." },
        { q: "Assertion (A): A compass can be used to measure lengths. Reason (R): Compass can transfer a length by keeping it set to that width.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "A compass can transfer (copy) a length by setting its opening to that distance. Both correct." },
        { q: "Assertion (A): Geometric construction requires a protractor to draw all angles. Reason (R): Special angles like 60° can be drawn using compass only.", options: ["A false, R true", "Both true", "A true, R false", "Both false"], answer: 0, explanation: "Many standard angles can be constructed using just compass and ruler, without a protractor. The assertion is false; the reason explains why." },
        { q: "Assertion (A): In a construction, the arcs used to bisect a segment must be drawn with equal radius from both endpoints. Reason (R): If radii differ, the arcs may not intersect to give the midpoint.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "Equal radii (each greater than half the segment) are needed to ensure arcs intersect symmetrically, giving the true midpoint." },
        { q: "Assertion (A): Two circles with the same radius and centres on a line segment's endpoints always intersect at the midpoint. Reason (R): The intersection points lie on the perpendicular bisector.", options: ["A false, R true", "Both true, R explains A", "A true, R false", "Both false"], answer: 1, explanation: "The two arcs (same radius from each endpoint) intersect at points on the perpendicular bisector. Joining these points crosses the segment at its midpoint." },
        { q: "Assertion (A): SAS construction uniquely determines a triangle. Reason (R): Two sides and their included angle fix all three vertices.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "Given two sides and the angle between them, there is exactly one triangle (up to congruence). Both correct." },
      ],
    ],
    qa: [
      [
        { q: "State the steps to bisect a given line segment AB of length 8 cm.", a: "Step 1: Draw line segment AB = 8 cm.\nStep 2: Open compass to more than half of AB (more than 4 cm — say 5 cm).\nStep 3: With A as centre, draw arcs above and below the segment.\nStep 4: Without changing compass width, with B as centre, draw arcs above and below.\nStep 5: The arcs intersect at two points P (above) and Q (below).\nStep 6: Join PQ. PQ is the perpendicular bisector of AB and crosses AB at its midpoint M.\nAM = MB = 4 cm.", type: "short" },
        { q: "Explain how to construct a 60° angle without using a protractor.", a: "Step 1: Draw a ray OA.\nStep 2: With O as centre, draw an arc of any radius r cutting OA at point P.\nStep 3: With P as centre and the SAME radius r, draw another arc cutting the first arc at Q.\nStep 4: Draw ray OQ.\nAngle AOQ = 60°.\nReason: OP = OQ = PQ = r, so triangle OPQ is equilateral, and each angle = 60°.", type: "short" },
        { q: "Can a triangle be formed with sides 6 cm, 4 cm, and 10 cm? Give reason.", a: "Check triangle inequality:\n6 + 4 = 10, which is NOT greater than 10 (must be strictly greater).\nSince 6 + 4 = 10 (equal, not greater), no triangle can be formed.\nThe three points would be collinear — they form a straight line, not a triangle.", type: "short" },
        { q: "Name the four standard conditions (congruence criteria) for constructing unique triangles.", a: "1. SSS (Side-Side-Side): All three sides are given.\n2. SAS (Side-Angle-Side): Two sides and the included angle are given.\n3. ASA (Angle-Side-Angle): Two angles and the included side are given.\n4. RHS (Right angle-Hypotenuse-Side): A right angle, hypotenuse, and one side are given.\nEach of these gives a unique triangle (all triangles satisfying the condition are congruent).", type: "short" },
        { q: "What is the purpose of a compass in geometric constructions?", a: "A compass serves two purposes in geometric constructions:\n1. Drawing circles and arcs: By fixing the compass width (radius) and rotating around a centre point.\n2. Transferring lengths: By setting the compass to a particular length and marking that exact same length elsewhere — this ensures precision without measuring.\nThe compass ensures constructions are exact, using geometric properties rather than estimation.", type: "short" },
      ],
      [
        { q: "Construct a triangle with sides 5 cm, 6 cm, and 7 cm. Verify using the triangle inequality.", a: "Triangle Inequality check:\n5 + 6 = 11 > 7 ✓\n6 + 7 = 13 > 5 ✓\n5 + 7 = 12 > 6 ✓\nAll conditions satisfied, so a triangle is possible.\n\nSSS Construction steps:\n1. Draw base BC = 7 cm.\n2. With B as centre, draw an arc of radius 5 cm.\n3. With C as centre, draw an arc of radius 6 cm.\n4. The arcs intersect at point A.\n5. Join AB (= 5 cm) and AC (= 6 cm).\nTriangle ABC with sides 5, 6, 7 cm is complete.", type: "long" },
        { q: "Explain the construction of a perpendicular bisector and list three practical uses of this construction.", a: "Construction of Perpendicular Bisector of AB:\n1. Draw segment AB.\n2. Open compass to more than half of AB.\n3. Draw arcs from A (above and below AB).\n4. With same radius, draw arcs from B (above and below AB).\n5. Join the two arc intersections — this is the perpendicular bisector.\n\nKey properties:\n• Passes through the midpoint of AB.\n• Is perpendicular (90°) to AB.\n• Every point on it is equidistant from A and B.\n\nPractical Uses:\n1. Finding the centre of a circle: The perpendicular bisectors of two chords intersect at the centre.\n2. Locating a fairground stall equidistant from two entrances.\n3. In architecture: ensuring walls or pillars are placed equidistant from two reference points.", type: "long" },
        { q: "Construct a 90° angle at a given point on a line. Describe all steps.", a: "Method: Bisecting a straight angle.\n\n1. Draw a ray PA (the line on which to construct 90°).\n2. Extend PA to the other side: draw ray PB (so APB is a straight angle = 180°).\n3. With P as centre, draw an arc cutting PA at X and PB at Y.\n4. Open compass slightly wider. With X as centre, draw an arc above the line.\n5. With Y as centre (same radius), draw an arc above the line.\n6. The two arcs meet at Q.\n7. Draw ray PQ.\nAngle QPА = 90° (PQ bisects the straight angle APB).", type: "long" },
        { q: "Why can't we use a pencil markings to verify geometric constructions? What is the correct approach?", a: "Pencil markings and visual estimation are prone to error — even a small slant in a line or inaccuracy in arc radius changes the result. Verification of constructions must use geometric reasoning, not measurement:\n\n1. To verify midpoint: check that both halves measure equal with the compass (same compass setting fits both halves).\n2. To verify 90°: place a set square or protractor — but better: check that the constructed line makes both sides equal (perpendicular bisector property).\n3. To verify angle bisector: fold the paper — if both arms coincide perfectly, the bisector is accurate.\n\nThe correct approach is to verify using the geometric properties that were used in the construction, not by re-measuring with a ruler (which introduces its own errors).", type: "long" },
        { q: "How is an equilateral triangle related to the construction of a 60° angle?", a: "In an equilateral triangle, all three sides are equal AND all three angles are exactly 60°.\n\nConstruction connection:\nWhen we draw two arcs of equal radius r — one from point O, one from where the first arc meets a line — the three relevant points (O, and the two arc intersections) form an equilateral triangle:\n• OA = r (first arc radius)\n• AP = r (second arc, same radius)\n• OP = r (same radius used throughout)\n\nSince all sides are equal (all = r), triangle OAP is equilateral, and angle AOP = 60°.\n\nThis is the geometric proof that the compass-and-ruler construction gives exactly 60°, not approximately.", type: "long" },
      ],
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 6-MATHS-9 : Symmetry
  // ─────────────────────────────────────────────────────────────
  "6-maths-9": {
    notes: [
      {
        heading: "What is Symmetry?",
        body: "Symmetry is the quality of a figure where one part is a mirror image of another part. A figure is symmetrical if it can be divided into two identical halves that are mirror images of each other.\n\nLine of symmetry (axis of symmetry): The line that divides a figure into two mirror-image halves. When a figure is folded along its line of symmetry, both halves coincide exactly.\n\nExamples: The letter A has one vertical line of symmetry. The letter H has two lines of symmetry (vertical and horizontal). A circle has infinitely many lines of symmetry.",
        highlight: "Line of symmetry: fold the figure — both halves must match exactly",
      },
      {
        heading: "Lines of Symmetry in Regular Polygons",
        body: "A regular polygon has all sides equal and all angles equal. A regular polygon with n sides has exactly n lines of symmetry.\n\n• Equilateral triangle (3 sides): 3 lines of symmetry\n• Square (4 sides): 4 lines of symmetry\n• Regular pentagon (5 sides): 5 lines of symmetry\n• Regular hexagon (6 sides): 6 lines of symmetry\n• Circle: infinite lines of symmetry\n\nFor a regular polygon, the lines of symmetry pass through each vertex and the midpoint of the opposite side (if n is even) or each vertex and the midpoint of the non-adjacent side (if n is odd).",
        highlight: "Regular n-gon has exactly n lines of symmetry",
      },
      {
        heading: "Rotational Symmetry",
        body: "A figure has rotational symmetry if it looks the same after being rotated by less than 360° about a central point (the centre of rotation).\n\nOrder of rotational symmetry: the number of times a figure looks the same during one full rotation (360°).\n\nAngle of rotation = 360° ÷ order\n\nExamples:\n• Square: order 4 (looks same at 90°, 180°, 270°, 360°)\n• Equilateral triangle: order 3 (at 120°, 240°, 360°)\n• Regular hexagon: order 6 (at 60°, 120°, 180°, 240°, 300°, 360°)\n• Circle: infinite order\n\nEvery figure has at least order 1 (at 360°).",
        highlight: "Order = 360° ÷ rotation angle | Square: order 4 | Triangle: order 3 | Hexagon: order 6",
      },
      {
        heading: "Symmetry in Nature, Art, and Letters",
        body: "Symmetry is everywhere in nature: butterfly wings, flower petals, snowflakes, and human faces all show symmetry. Snowflakes have 6-fold rotational symmetry.\n\nIn alphabets: Letters with a vertical line of symmetry: A, H, I, M, O, T, U, V, W, X, Y. Letters with a horizontal line: B, C, D, E, K.\n\nIn art and architecture: The Taj Mahal has a vertical axis of symmetry. Rangoli patterns often have multiple lines of symmetry and rotational symmetry.\n\nKaleidoscope: creates patterns using multiple reflections — the images have both line and rotational symmetry.",
        highlight: "Nature: butterflies, snowflakes | Letters: A,H,M have vertical symmetry | Taj Mahal: bilateral symmetry",
      },
    ],
    snippets: [
      { term: "Line of Symmetry", definition: "A line that divides a figure into two congruent mirror-image halves. Also called axis of symmetry.", example: "A rectangle has 2 lines of symmetry (horizontal and vertical through the centre)" },
      { term: "Bilateral Symmetry", definition: "Symmetry where a single line divides a figure into two equal mirror halves.", example: "Human body: a vertical line down the middle gives bilateral symmetry" },
      { term: "Rotational Symmetry", definition: "A figure has rotational symmetry if it appears identical after rotation by less than 360°.", formula: "Angle of rotation = 360° ÷ order", example: "A square looks the same every 90° — order 4" },
      { term: "Order of Rotational Symmetry", definition: "The number of positions in one full rotation (360°) at which a figure looks identical.", example: "Equilateral triangle: order 3 (identical at 120°, 240°, 360°)" },
      { term: "Centre of Rotation", definition: "The fixed point about which a figure is rotated to check rotational symmetry.", example: "The centre of a regular polygon is its centre of rotation" },
      { term: "Mirror Image", definition: "The reflection of a figure about a line, where each point is at equal distance from the line on the opposite side.", example: "Your reflection in a mirror is a mirror image" },
      { term: "Regular Polygon", definition: "A polygon with all sides equal in length and all interior angles equal.", example: "Equilateral triangle, square, regular hexagon are regular polygons" },
      { term: "Point Symmetry", definition: "A figure has point symmetry if every part has a matching part at equal distance on the opposite side of a central point.", example: "The letter S and the number 8 have point symmetry" },
    ],
    mcq: [
      [
        { q: "How many lines of symmetry does a regular hexagon have?", options: ["3", "4", "6", "8"], answer: 2, explanation: "A regular polygon with n sides has n lines of symmetry. Hexagon: n=6, so 6 lines." },
        { q: "Which letter has both horizontal and vertical lines of symmetry?", options: ["A", "B", "H", "F"], answer: 2, explanation: "H has a vertical line (left/right halves mirror each other) and a horizontal line (top/bottom halves mirror each other)." },
        { q: "The order of rotational symmetry of an equilateral triangle is:", options: ["2", "3", "6", "1"], answer: 1, explanation: "An equilateral triangle looks the same at 120°, 240°, and 360° — that's 3 times, so order 3." },
        { q: "A square has how many lines of symmetry?", options: ["2", "3", "4", "8"], answer: 2, explanation: "A square (regular 4-gon) has 4 lines of symmetry: 2 through opposite vertices, 2 through midpoints of opposite sides." },
        { q: "The angle of rotation for a figure with rotational symmetry of order 6 is:", options: ["30°", "45°", "60°", "90°"], answer: 2, explanation: "Angle = 360° ÷ order = 360° ÷ 6 = 60°." },
        { q: "Which has NO line of symmetry?", options: ["Circle", "Isosceles triangle", "Scalene triangle", "Square"], answer: 2, explanation: "A scalene triangle has no equal sides or angles, so it has no line of symmetry." },
        { q: "How many lines of symmetry does a circle have?", options: ["1", "4", "0", "Infinite"], answer: 3, explanation: "Any diameter of a circle is a line of symmetry, and there are infinitely many diameters." },
        { q: "A figure that looks the same after rotating 90° has order:", options: ["2", "3", "4", "6"], answer: 2, explanation: "If it repeats every 90°, then in 360° it repeats 360/90 = 4 times. Order = 4." },
        { q: "Which shape has 5 lines of symmetry?", options: ["Regular hexagon", "Pentagon", "Regular pentagon", "Rhombus"], answer: 2, explanation: "A REGULAR pentagon has 5 equal sides and 5 lines of symmetry." },
        { q: "The number of lines of symmetry of the letter 'X' is:", options: ["1", "2", "4", "0"], answer: 1, explanation: "X has a vertical AND a horizontal line of symmetry — 2 lines." },
      ],
      [
        { q: "Assertion (A): A rectangle has 4 lines of symmetry. Reason (R): A rectangle has 4 equal sides.", options: ["A false, R false", "Both true", "A true, R false", "A false, R true"], answer: 0, explanation: "A rectangle has only 2 lines of symmetry (horizontal and vertical). It does NOT have 4 equal sides (that's a square). Both assertions are false." },
        { q: "Assertion (A): Every regular polygon has both line and rotational symmetry. Reason (R): Regular polygons have equal sides and equal angles.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "Regular polygons have n lines of symmetry and rotational symmetry of order n, due to their equal sides and angles." },
        { q: "Assertion (A): A scalene triangle has no line of symmetry. Reason (R): All three sides of a scalene triangle are of different lengths.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "No line can fold a scalene triangle onto itself because all sides (and angles) are different." },
        { q: "Assertion (A): The letter 'O' has infinite lines of symmetry. Reason (R): 'O' is a circle.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "If O is treated as a perfect circle, any diameter is a line of symmetry — infinitely many. Both correct." },
        { q: "Assertion (A): Rotational symmetry of order 1 means a figure has no rotational symmetry. Reason (R): Every figure returns to itself after a full 360° rotation.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "Order 1 means the figure only looks the same after a full 360° (trivial). By convention, we say it has NO rotational symmetry (or order 1 = none). Both statements are correct." },
        { q: "Assertion (A): An isosceles triangle has exactly 1 line of symmetry. Reason (R): The perpendicular bisector of the unequal side is the axis.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "The perpendicular bisector of the base (unequal side) bisects the triangle into two mirror halves — exactly 1 line." },
        { q: "Assertion (A): A figure can have rotational symmetry but no line of symmetry. Reason (R): The letter Z has rotational symmetry of order 2 but no line of symmetry.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "Z rotated 180° looks the same, but no straight line can fold Z onto itself. Both correct." },
        { q: "Assertion (A): Snowflakes have 6-fold rotational symmetry. Reason (R): Water molecules form hexagonal crystal lattices.", options: ["Both A and R true, R explains A", "Both true, R does not explain A", "A true, R false", "A false, R true"], answer: 0, explanation: "Snowflakes do have 6-fold (order 6) symmetry because of the hexagonal structure of ice crystals. R explains A." },
        { q: "Assertion (A): A rhombus has 4 lines of symmetry. Reason (R): A rhombus has 4 equal sides.", options: ["A false, R true", "Both true", "A true, R false", "Both false"], answer: 0, explanation: "A rhombus has only 2 lines of symmetry (the two diagonals). Having 4 equal sides doesn't give 4 lines of symmetry." },
        { q: "Assertion (A): A figure with order of rotational symmetry 4 looks the same every 90°. Reason (R): 360° ÷ 4 = 90°.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "Order 4 means 360°/4 = 90° between identical positions. Both correct." },
      ],
    ],
    qa: [
      [
        { q: "List all alphabets (capital letters) that have at least one line of symmetry.", a: "Vertical line of symmetry: A, H, I, M, O, T, U, V, W, X, Y\nHorizontal line of symmetry: B, C, D, E, K\nBoth horizontal and vertical: H, I, O, X\n\nLetters with NO line of symmetry: F, G, J, L, N, P, Q, R, S, Z", type: "short" },
        { q: "Find the order of rotational symmetry for: (a) Square (b) Regular pentagon (c) Equilateral triangle", a: "(a) Square: Looks same at 90°, 180°, 270°, 360° → Order = 4\n(b) Regular pentagon: Looks same at 72°, 144°, 216°, 288°, 360° → Order = 5\n(c) Equilateral triangle: Looks same at 120°, 240°, 360° → Order = 3", type: "short" },
        { q: "Draw the lines of symmetry in a rectangle. How many does it have?", a: "A rectangle has exactly 2 lines of symmetry:\n1. A horizontal line through the midpoints of the longer sides (top and bottom).\n2. A vertical line through the midpoints of the shorter sides (left and right).\nNote: A rectangle does NOT have diagonal lines of symmetry (unlike a square).", type: "short" },
        { q: "Give two examples of symmetry from nature and two from everyday objects.", a: "From Nature:\n1. Butterfly wings: left and right wings are mirror images (bilateral symmetry).\n2. Flower petals: many flowers have multiple lines of symmetry (e.g., a 5-petal flower has 5 lines).\n\nFrom Everyday Objects:\n1. A wheel: circular, with many lines of symmetry and high rotational symmetry.\n2. A playing card (Ace of spades): has vertical line of symmetry.", type: "short" },
        { q: "What is the angle of rotation for a figure with rotational symmetry of order 8?", a: "Angle of rotation = 360° ÷ order = 360° ÷ 8 = 45°\nThe figure looks identical every 45° of rotation.", type: "short" },
      ],
      [
        { q: "Compare line symmetry and rotational symmetry. Can a figure have one without the other? Give examples.", a: "Line Symmetry: A figure is folded along a line and both halves coincide. Measured by the number of lines of symmetry.\n\nRotational Symmetry: A figure is rotated and looks identical before completing 360°. Measured by order.\n\nFigure with BOTH:\n• Square: 4 lines of symmetry AND rotational order 4.\n• Equilateral triangle: 3 lines AND order 3.\n\nFigure with ROTATIONAL but NO LINE symmetry:\n• The letter S, Z, or the swastika: 180° rotation gives same shape, but no fold line works.\n\nFigure with LINE but NO ROTATIONAL symmetry (order >1):\n• Isosceles triangle: 1 line of symmetry, but rotational symmetry order = 1 (trivial).\n• The letter A has 1 line but no non-trivial rotational symmetry.\n\nConclusion: The two types of symmetry are independent — a figure can have either, both, or neither.", type: "long" },
        { q: "Explain why a circle has infinite lines of symmetry.", a: "A circle is the set of all points equidistant from a fixed centre point.\n\nWhy infinite lines of symmetry:\nAny line through the centre of a circle is a diameter. A diameter divides the circle into two semicircles. Each semicircle is the exact mirror image of the other (because every point on one semicircle has a corresponding point at equal distance on the other side).\n\nSince there are infinitely many different diameters we can draw (every angle from 0° to 180° gives a different diameter), there are infinitely many lines of symmetry.\n\nSimilarly, the circle has infinite rotational symmetry — it looks the same after rotation by any angle. This is why circles and spheres are used in wheels, coins, and many engineering applications.", type: "long" },
        { q: "Design a symmetric Rangoli pattern with at least 4 lines of symmetry. Describe your design.", a: "Rangoli Design Description:\n\nShape: Start with a square as the base unit.\n\nConstruction:\n1. Draw a large square with its two diagonals and the two lines joining midpoints of opposite sides — this creates 8 triangular sections.\n2. In each section, draw the same petal pattern (mirror images in adjacent sections).\n3. Add a circle at the centre.\n4. Colour alternating triangles with two contrasting colours.\n\nLines of symmetry: The design has 4 lines of symmetry (2 through opposite vertices, 2 through midpoints of sides).\n\nRotational symmetry: Order 4 (looks same every 90°).\n\nThis type of pattern is common in traditional Indian art and demonstrates mathematical symmetry in cultural contexts.", type: "long" },
        { q: "A figure has rotational symmetry of order 6. (a) What is the angle of rotation? (b) How many lines of symmetry might it have? Give an example.", a: "(a) Angle of rotation = 360° ÷ 6 = 60°\nThe figure looks the same every 60°.\n\n(b) If the figure is a REGULAR hexagon, it has 6 lines of symmetry (matching its order of 6).\nHowever, a figure with rotational order 6 does not NECESSARILY have 6 lines — but for regular polygons, the number of lines equals the order.\n\nExample: Regular hexagon\n• Order of rotational symmetry: 6\n• Lines of symmetry: 6 (3 through opposite vertices + 3 through midpoints of opposite sides)\n• Angle of rotation: 60°\n\nThe snowflake is another example — order 6, with 6 lines of symmetry.", type: "long" },
        { q: "Find the number of lines of symmetry and order of rotational symmetry for: parallelogram, rhombus, kite.", a: "Parallelogram:\n• Lines of symmetry: 0 (no fold line makes halves coincide, unless it's a rectangle or rhombus)\n• Rotational symmetry: order 2 (looks same after 180° rotation)\n\nRhombus:\n• Lines of symmetry: 2 (both diagonals are lines of symmetry)\n• Rotational symmetry: order 2 (same after 180° rotation)\n\nKite:\n• Lines of symmetry: 1 (the main diagonal — the axis joining the vertices where equal sides meet)\n• Rotational symmetry: order 1 (no non-trivial rotational symmetry)", type: "short" },
      ],
    ],
  },

  // ─────────────────────────────────────────────────────────────
  // 6-MATHS-10 : The Other Side of Zero
  // ─────────────────────────────────────────────────────────────
  "6-maths-10": {
    notes: [
      {
        heading: "Introduction to Integers",
        body: "The natural numbers 1, 2, 3, … are used for counting. When we include zero, we get whole numbers: 0, 1, 2, 3, … But in real life, we need numbers less than zero: temperatures below freezing, bank overdrafts, floors below ground level, and altitudes below sea level.\n\nIntegers are the set of all whole numbers and their negatives:\n… −4, −3, −2, −1, 0, 1, 2, 3, 4 …\n\nPositive integers: 1, 2, 3, … (natural numbers)\nNegative integers: −1, −2, −3, …\nZero (0) is an integer, but it is neither positive nor negative.",
        highlight: "Integers: {…, −3, −2, −1, 0, 1, 2, 3, …} | 0 is neither positive nor negative",
      },
      {
        heading: "Number Line and Ordering of Integers",
        body: "Integers are placed on the number line with negative integers to the left of zero and positive integers to the right. As we move right, numbers increase; as we move left, numbers decrease.\n\nComparing integers:\n• A positive integer is always greater than a negative integer.\n• Among two negative integers, the one closer to zero is greater.\n  Example: −3 > −7 (−3 is to the right of −7 on the number line)\n• Any integer to the right of another is greater.\n\nAbsolute value: The distance of a number from zero on the number line, always non-negative.\n|−5| = 5, |5| = 5, |0| = 0",
        highlight: "Number line: left is smaller | −3 > −7 | |−5| = 5 (absolute value = distance from 0)",
      },
      {
        heading: "Addition and Subtraction of Integers",
        body: "Addition rules:\n• Positive + Positive = Positive (e.g., 4 + 3 = 7)\n• Negative + Negative = Negative (e.g., −4 + (−3) = −7)\n• Positive + Negative: subtract absolute values, take sign of the larger absolute value.\n  e.g., 5 + (−8) = −3 (since |8| > |5|, answer is negative)\n\nSubtraction: a − b = a + (−b). Convert subtraction to adding the opposite.\nExample: 3 − (−5) = 3 + 5 = 8\n\nOn the number line: adding a positive integer → move right; adding a negative integer → move left.",
        highlight: "Subtraction: a − b = a + (−b) | Adding negative → move left on number line",
      },
      {
        heading: "Multiplication and Division of Integers",
        body: "Multiplication rules:\n• Positive × Positive = Positive (e.g., 4 × 3 = 12)\n• Negative × Negative = Positive (e.g., −4 × −3 = 12)\n• Positive × Negative = Negative (e.g., 4 × −3 = −12)\n• Negative × Positive = Negative (e.g., −4 × 3 = −12)\n\nMemory trick: Same signs → Positive | Different signs → Negative\n\nDivision follows the same sign rules:\n• (+) ÷ (+) = + | (−) ÷ (−) = + | (+) ÷ (−) = − | (−) ÷ (+) = −\n\nProperties: (−1) × n = −n | (−1) × (−1) = 1",
        highlight: "Same signs → Positive product | Different signs → Negative product",
      },
    ],
    snippets: [
      { term: "Integer", definition: "Any whole number, its negative, or zero: {…, −3, −2, −1, 0, 1, 2, 3, …}", example: "−7, 0, 15, −100 are all integers" },
      { term: "Negative Integer", definition: "A whole number less than zero, written with a minus sign.", example: "Temperature −5°C is 5 degrees below zero" },
      { term: "Absolute Value", definition: "The non-negative distance of a number from zero on the number line.", formula: "|n| = n if n≥0; |n| = −n if n<0", example: "|−8| = 8, |8| = 8" },
      { term: "Number Line", definition: "A line with a scale showing integers equally spaced, with positive numbers to the right of 0 and negative to the left.", example: "−3 is 3 units to the left of 0" },
      { term: "Additive Inverse", definition: "The additive inverse of an integer n is −n. Their sum is zero.", formula: "n + (−n) = 0", example: "Additive inverse of 7 is −7; 7+(−7)=0" },
      { term: "Opposite Integers", definition: "Two integers that are the same distance from zero but on opposite sides of the number line.", example: "+5 and −5 are opposites" },
      { term: "Sign Rules (Multiplication)", definition: "Same signs give positive product; different signs give negative product.", formula: "(+)(+)=+ | (−)(−)=+ | (+)(−)=− | (−)(+)=−", example: "(−6)×(−4)=+24; (−6)×4=−24" },
      { term: "Successor and Predecessor", definition: "The successor of an integer n is n+1; the predecessor is n−1.", example: "Successor of −3 is −2; predecessor of −3 is −4" },
    ],
    mcq: [
      [
        { q: "Which integer is neither positive nor negative?", options: ["1", "−1", "0", "100"], answer: 2, explanation: "0 is the only integer that is neither positive nor negative." },
        { q: "The absolute value of −18 is:", options: ["−18", "18", "0", "−1"], answer: 1, explanation: "|−18| = 18. Absolute value is always non-negative." },
        { q: "Which is greater: −12 or −4?", options: ["−12", "−4", "They are equal", "Cannot compare"], answer: 1, explanation: "On the number line, −4 is to the right of −12. So −4 > −12." },
        { q: "−8 + 5 =", options: ["−13", "13", "−3", "3"], answer: 2, explanation: "Signs differ; |8|>|5|; answer takes negative sign: −8+5 = −3." },
        { q: "(−6) × (−7) =", options: ["−42", "42", "−13", "13"], answer: 1, explanation: "Negative × Negative = Positive. (−6) × (−7) = +42." },
        { q: "3 − (−9) =", options: ["−6", "6", "12", "−12"], answer: 2, explanation: "3 − (−9) = 3 + 9 = 12." },
        { q: "The additive inverse of −15 is:", options: ["−15", "15", "1/15", "0"], answer: 1, explanation: "Additive inverse of n is −n. Additive inverse of −15 is −(−15) = 15." },
        { q: "(−48) ÷ (−6) =", options: ["−8", "8", "−42", "42"], answer: 1, explanation: "Same signs → positive. 48÷6=8. So (−48)÷(−6) = +8." },
        { q: "The predecessor of −7 is:", options: ["−6", "−8", "6", "8"], answer: 1, explanation: "Predecessor = n−1 = −7−1 = −8." },
        { q: "Which set represents integers in ascending order?", options: ["−5, −3, 0, −1, 2", "−5, −3, −1, 0, 2", "2, 0, −1, −3, −5", "0, −1, −3, −5, 2"], answer: 1, explanation: "Ascending = smallest to largest: −5 < −3 < −1 < 0 < 2." },
      ],
      [
        { q: "Assertion (A): −99 is less than −9. Reason (R): On the number line, −99 is to the left of −9.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "−99 < −9 because −99 is 99 units left of 0 while −9 is only 9 units left. Left = smaller. Both correct." },
        { q: "Assertion (A): The sum of an integer and its additive inverse is 1. Reason (R): n + (−n) = 0.", options: ["A false, R true", "Both true", "A true, R false", "Both false"], answer: 0, explanation: "n + (−n) = 0, not 1. The assertion is false; the reason correctly states the rule." },
        { q: "Assertion (A): Multiplying two negative integers always gives a positive integer. Reason (R): (−a) × (−b) = ab.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "(−a)(−b) = ab > 0 for positive a and b. Both correct." },
        { q: "Assertion (A): All negative numbers are integers. Reason (R): The set of integers includes all positive and negative whole numbers.", options: ["A false, R true", "Both true, R explains A", "A true, R false", "Both false"], answer: 0, explanation: "−½ is negative but NOT an integer. Integers are only whole numbers (negative, zero, positive whole). Assertion is false." },
        { q: "Assertion (A): 0 is the smallest non-negative integer. Reason (R): All positive integers are greater than 0.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "0 is the smallest non-negative integer; all positive integers (1,2,3…) are greater than 0. Both correct." },
        { q: "Assertion (A): |−7| > |−4|. Reason (R): −7 < −4.", options: ["Both A and R true, R explains A", "Both true, R does not explain A", "A true, R false", "A false, R true"], answer: 1, explanation: "|−7|=7 > |−4|=4 ✓. Also −7 < −4 ✓. But the reason (ordering of negatives) doesn't directly explain why the absolute values compare that way — it's a different comparison." },
        { q: "Assertion (A): (−3)³ is negative. Reason (R): An odd number of negative factors gives a negative product.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "(−3)³ = (−3)(−3)(−3) = 9×(−3) = −27. Odd number of negatives → negative product. Both correct." },
        { q: "Assertion (A): Subtracting a negative integer from a positive integer always gives a larger positive integer. Reason (R): a − (−b) = a + b.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "Positive − (negative) = positive + positive = larger positive. Both correct." },
        { q: "Assertion (A): Integers are closed under subtraction. Reason (R): Subtracting any integer from another gives an integer.", options: ["Both A and R true, R explains A", "A false, R true", "A true, R false", "Both false"], answer: 0, explanation: "Integers are closed under subtraction — subtracting two integers always gives an integer. Both correct." },
        { q: "Assertion (A): The product of zero and any integer is zero. Reason (R): Zero has no additive inverse.", options: ["A true, R false", "Both true, R explains A", "A false, R true", "Both false"], answer: 0, explanation: "0 × n = 0 for any integer n (correct). But the reason is wrong — 0 DOES have an additive inverse: 0 + 0 = 0, so 0 is its own additive inverse." },
      ],
    ],
    qa: [
      [
        { q: "Represent the following on a number line: −5, −2, 0, 3, 7.", a: "Number line (−7 to +7):\n←−7−−6−−5−−4−−3−−2−−1−0−1−2−3−4−5−6−7→\n                ●           ●     ●        ●              ●\n               −5          −2     0         3               7\nThe dots mark the position of each integer. Numbers increase from left to right.", type: "short" },
        { q: "Calculate: (−14) + 9 + (−6) + 15", a: "(−14) + 9 = −5\n−5 + (−6) = −11\n−11 + 15 = 4\nAnswer: 4\n\nAlternative: Sum positives: 9+15=24; Sum negatives: 14+6=20; Result: 24−20 = +4", type: "short" },
        { q: "A submarine is at −320 m. It rises 125 m. What is its new depth?", a: "New depth = −320 + 125 = −195 m\nThe submarine is now at 195 m below sea level.", type: "short" },
        { q: "Find the product: (−3) × 4 × (−2) × (−5)", a: "(−3) × 4 = −12\n−12 × (−2) = +24\n24 × (−5) = −120\nAnswer: −120\nCount negative factors: 3 (odd number) → result is negative ✓", type: "short" },
        { q: "The temperature was −8°C at 6 AM. By noon it rose by 13°C. What is the noon temperature?", a: "Noon temperature = −8 + 13 = +5°C\nThe temperature at noon is 5°C above zero.", type: "short" },
      ],
      [
        { q: "Explain why the product of two negative numbers is positive, using the pattern method.", a: "Pattern Method:\nLook at this pattern with (−3) as multiplier:\n3 × 4 = 12\n3 × 3 = 9\n3 × 2 = 6\n3 × 1 = 3\n3 × 0 = 0\n3 × (−1) = −3  (pattern: decreasing by 3)\n3 × (−2) = −6\nSo positive × negative = negative. ✓\n\nNow continue with (−3):\n(−3) × 3 = −9\n(−3) × 2 = −6\n(−3) × 1 = −3\n(−3) × 0 = 0\n(−3) × (−1) = +3  (pattern: increasing by 3)\n(−3) × (−2) = +6\n(−3) × (−3) = +9\n\nThe pattern forces negative × negative = positive for consistency. This is not just a rule — it follows necessarily from maintaining the pattern of integer arithmetic.", type: "long" },
        { q: "A lift starts at floor 0. It goes down 5 floors, then up 8 floors, then down 3 floors, then up 10 floors. Where does it end up?", a: "Starting floor: 0\nAfter going down 5: 0 + (−5) = −5 (floor 5 below ground)\nAfter going up 8: −5 + 8 = +3 (floor 3)\nAfter going down 3: 3 + (−3) = 0 (ground floor)\nAfter going up 10: 0 + 10 = +10 (floor 10)\n\nThe lift ends at floor 10.\n\nSummary: −5 + 8 − 3 + 10 = 10", type: "long" },
        { q: "Compare: Using absolute values, arrange these integers from greatest absolute value to least: 7, −12, 0, −3, 9, −15.", a: "Absolute values:\n|7| = 7\n|−12| = 12\n|0| = 0\n|−3| = 3\n|9| = 9\n|−15| = 15\n\nArranged from greatest to least absolute value:\n15, 12, 9, 7, 3, 0\n(i.e., −15, −12, 9, 7, −3, 0)\n\nNote: On the actual number line, from least to greatest:\n−15 < −12 < −3 < 0 < 7 < 9", type: "short" },
        { q: "A bank account has ₹500. Over 5 days, transactions are: −₹200, +₹350, −₹600, +₹150, −₹100. Find the final balance. Is the account overdrawn?", a: "Starting balance: ₹500\nAfter −₹200: 500 − 200 = ₹300\nAfter +₹350: 300 + 350 = ₹650\nAfter −₹600: 650 − 600 = ₹50\nAfter +₹150: 50 + 150 = ₹200\nAfter −₹100: 200 − 100 = ₹100\n\nFinal balance = ₹100\nThe account is NOT overdrawn (balance > 0).\n\nAlternative: Net = 500 + (−200+350−600+150−100) = 500 + (−400) = ₹100", type: "long" },
        { q: "State and verify three properties of integers with examples: (a) Commutativity of addition (b) Associativity of multiplication (c) Distributive property.", a: "(a) Commutativity of Addition: a + b = b + a\nVerification: (−7) + 4 = −3\n4 + (−7) = −3 ✓\nIntegers are commutative under addition.\n\n(b) Associativity of Multiplication: (a × b) × c = a × (b × c)\nVerification: [(−2) × 3] × (−4) = (−6) × (−4) = 24\n(−2) × [3 × (−4)] = (−2) × (−12) = 24 ✓\nIntegers are associative under multiplication.\n\n(c) Distributive Property: a × (b + c) = a×b + a×c\nVerification: (−3) × (5 + (−2)) = (−3) × 3 = −9\n(−3)×5 + (−3)×(−2) = −15 + 6 = −9 ✓\nDistributive law holds for integers.", type: "long" },
      ],
    ],
  },
};
