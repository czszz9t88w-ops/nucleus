"""
Builds Nucleus Content.xlsx — a fully formatted Excel file with 2 sheets:
  MCQ | QA

Columns:
  MCQ: chapter_id | chapter_name | worksheet | level | question |
       option_a | option_b | option_c | option_d | answer | explanation
  QA:  chapter_id | chapter_name | worksheet | level | question | answer | type

Worksheet 1 → level = Elementary
Worksheet 2 → level = Advanced

Run: python3 scripts/build-nucleus-excel.py
Output: templates/Nucleus Content.xlsx
"""

import openpyxl
from openpyxl.styles import PatternFill, Font, Alignment, Border, Side
from openpyxl.utils import get_column_letter

# ── Colours ────────────────────────────────────────────────
BLUE_HEADER  = "1A73E8"
WHITE        = "FFFFFF"
FILLED_MATHS = "EAF1FB"
FILLED_SCI   = "E6F4EA"
BLANK_BG     = "FFFDE7"
BORDER_COLOR = "DADCE0"
ANSWER_GREEN = "188038"
ELEM_COLOR   = "1A73E8"   # blue for Elementary
ADV_COLOR    = "D93025"   # red for Advanced
ELEM_BG      = "E8F0FE"
ADV_BG       = "FCE8E6"

def ws_to_level(ws_num):
    return "Elementary" if str(ws_num) == "1" else "Advanced"

def level_color(level):
    return (ELEM_COLOR, ELEM_BG) if level == "Elementary" else (ADV_COLOR, ADV_BG)

# ── Style helpers ──────────────────────────────────────────
def hdr_font():  return Font(bold=True, color=WHITE, size=11)
def hdr_fill():  return PatternFill("solid", fgColor=BLUE_HEADER)
def thin_border():
    s = Side(style="thin", color=BORDER_COLOR)
    return Border(left=s, right=s, top=s, bottom=s)
def wrap(): return Alignment(wrap_text=True, vertical="top")
def center(): return Alignment(horizontal="center", vertical="center")

def style_header_row(ws, col_count):
    for c in range(1, col_count + 1):
        cell = ws.cell(row=1, column=c)
        cell.font = hdr_font()
        cell.fill = hdr_fill()
        cell.alignment = center()
        cell.border = thin_border()

def style_cell(cell, fill=None, bold=False, color="202124",
               center_align=False, italic=False):
    cell.font = Font(bold=bold, color=color, size=10, italic=italic)
    if fill:
        cell.fill = fill
    cell.alignment = (Alignment(horizontal="center", vertical="top")
                      if center_align else Alignment(wrap_text=True, vertical="top"))
    cell.border = thin_border()

def row_fill(chapter_id):
    return (PatternFill("solid", fgColor=FILLED_SCI) if "science" in chapter_id
            else PatternFill("solid", fgColor=FILLED_MATHS))

def blank_fill(): return PatternFill("solid", fgColor=BLANK_BG)
def blank_style(cell):
    cell.fill = blank_fill()
    cell.font = Font(color="BDBDBD", size=10, italic=True)
    cell.alignment = wrap()
    cell.border = thin_border()

# ══════════════════════════════════════════════════════════
# DATA  (chapter_id | chapter_name | worksheet | question | ...)
# level is derived from worksheet at write time
# ══════════════════════════════════════════════════════════

MCQ_DATA = [
    # ── 6-maths-1 WS1 (Elementary) ────────────────────────
    ["6-maths-1","Patterns in Mathematics","1","What is the next number: 1, 4, 9, 16, __?","20","25","24","21","B","Perfect squares: 1²,2²,3²,4²,5² = 25"],
    ["6-maths-1","Patterns in Mathematics","1","The 5th triangular number is:","10","12","15","8","C","T5 = 5×6/2 = 15"],
    ["6-maths-1","Patterns in Mathematics","1","Which is a Fibonacci number?","14","13","11","16","B","Fibonacci: 1,1,2,3,5,8,13,21 — 13 is Fibonacci"],
    ["6-maths-1","Patterns in Mathematics","1","Digit sums of multiples of 9 are always:","Equal to 9","Divisible by 9","Odd","Even","B","Sum of digits of any multiple of 9 is always divisible by 9"],
    ["6-maths-1","Patterns in Mathematics","1","Square numbers are also called:","Triangular numbers","Perfect squares","Prime numbers","Fibonacci numbers","B","Numbers like 1,4,9,16 formed by n×n are called perfect squares"],
    ["6-maths-1","Patterns in Mathematics","1","What is the 4th triangular number?","6","8","10","12","C","T4 = 4×5/2 = 10"],
    ["6-maths-1","Patterns in Mathematics","1","After 1,1,2,3,5,8 in Fibonacci, what comes next?","12","11","13","14","C","8+5 = 13"],
    ["6-maths-1","Patterns in Mathematics","1","Triangular arrangement with 4 rows has how many dots?","8","10","12","6","B","1+2+3+4 = 10 dots = T4"],
    ["6-maths-1","Patterns in Mathematics","1","What is 2n−1 when n=5?","8","9","10","11","B","2(5)−1 = 9"],
    ["6-maths-1","Patterns in Mathematics","1","Which is the sequence of square numbers?","1,2,3,4,5","1,3,6,10,15","1,4,9,16,25","2,4,6,8,10","C","1²=1, 2²=4, 3²=9, 4²=16, 5²=25"],
    # ── 6-maths-1 WS2 (Advanced / Assertion-Reason) ───────
    ["6-maths-1","Patterns in Mathematics","2","A: Square numbers always end in 0,1,4,5,6,9. R: These are the only possible units digits of n².","Both A&R true, R explains A","Both true, R doesn't explain A","A true, R false","Both false","A","Correct — squaring any digit 0-9 gives only these units digits."],
    ["6-maths-1","Patterns in Mathematics","2","A: 0 is a triangular number. R: T0 = 0×1/2 = 0.","Both A&R true, R explains A","A false, R true","A true, R false","Both false","A","Both correct. T0 = 0 is valid."],
    ["6-maths-1","Patterns in Mathematics","2","A: Sum of first n odd numbers = n². R: 1+3+5+...+(2n-1) = n².","Both A&R true, R explains A","Both true, R doesn't explain A","A true, R false","Both false","A","Both correct and R is the mathematical proof of A."],
    ["6-maths-1","Patterns in Mathematics","2","A: Pascal's triangle has only odd numbers. R: Each entry is sum of two previous entries.","A false, R true","Both true","Both false","A true, R false","A","Pascal's triangle contains even numbers too. R is true but A is false."],
    ["6-maths-1","Patterns in Mathematics","2","A: Fibonacci numbers grow by ratio ≈1.618. R: This ratio is the Golden Ratio.","Both A&R true, R explains A","A true, R false","A false, R true","Both false","A","Both correct. Consecutive Fibonacci numbers approach φ ≈ 1.618."],
    ["6-maths-1","Patterns in Mathematics","2","A: Every even number is a triangular number. R: Triangular numbers include 6, 10, 28.","A false, R true","Both true","A true, R false","Both false","A","Not every even number is triangular (e.g. 8 is not). R lists some triangular numbers correctly."],
    ["6-maths-1","Patterns in Mathematics","2","A: Sequence 2,6,12,20,30 is related to triangular numbers. R: Each term = n(n+1).","Both A&R true, R explains A","A false, R true","A true, R false","Both false","A","Both correct. n(n+1) = 2×Tn, so each term is twice a triangular number."],
    ["6-maths-1","Patterns in Mathematics","2","A: 100 is both a perfect square and a triangular number. R: T13=91, T14=105.","A false, R true","Both true, R explains A","A true, R false","Both false","A","100 is a perfect square (10²) but NOT a triangular number — it falls between T13 and T14."],
    ["6-maths-1","Patterns in Mathematics","2","A: In 1,4,9,16 each term differs from next by consecutive odd numbers. R: 4-1=3, 9-4=5, 16-9=7.","Both A&R true, R explains A","A false, R true","A true, R false","Both false","A","Both correct. Differences between consecutive perfect squares are 3,5,7,9..."],
    ["6-maths-1","Patterns in Mathematics","2","A: The sequence 2,4,8,16 is a Fibonacci sequence. R: Each term doubles.","A false, R true","Both true","A true, R false","Both false","A","This is a geometric sequence (×2), not Fibonacci. R about doubling is correct but it is not Fibonacci."],
    # ── 6-maths-2 WS1 ─────────────────────────────────────
    ["6-maths-2","Lines and Angles","1","An angle measuring 145° is called:","Acute","Right","Obtuse","Reflex","C","Angles between 90° and 180° are obtuse. 145° lies in this range."],
    ["6-maths-2","Lines and Angles","1","The complement of 37° is:","143°","53°","63°","47°","B","Complement = 90° − 37° = 53°"],
    ["6-maths-2","Lines and Angles","1","Two lines that never meet are called:","Perpendicular","Intersecting","Parallel","Concurrent","C","Parallel lines are coplanar lines that never intersect."],
    ["6-maths-2","Lines and Angles","1","Vertically opposite angles are always:","Supplementary","Complementary","Equal","Adjacent","C","When two lines intersect, vertically opposite angles are always equal."],
    ["6-maths-2","Lines and Angles","1","The supplement of 75° is:","15°","105°","285°","95°","B","Supplement = 180° − 75° = 105°"],
    ["6-maths-2","Lines and Angles","1","A ray has:","Two endpoints","One endpoint","No endpoints","Three endpoints","B","A ray starts at one fixed endpoint and extends infinitely."],
    ["6-maths-2","Lines and Angles","1","A straight angle measures:","90°","270°","360°","180°","D","A straight angle = 180° — it forms a straight line."],
    ["6-maths-2","Lines and Angles","1","Alternate interior angles on parallel lines are:","Supplementary","Complementary","Equal","Reflex","C","Alternate interior angles formed by a transversal on parallel lines are always equal."],
    ["6-maths-2","Lines and Angles","1","A linear pair of angles always sums to:","90°","180°","270°","360°","B","A linear pair lies on a straight line, so angles sum to 180°."],
    ["6-maths-2","Lines and Angles","1","Which is NOT a type of angle?","Acute","Obtuse","Diagonal","Reflex","C","Diagonal is a line segment, not a type of angle."],
    # ── 6-maths-2 WS2 ─────────────────────────────────────
    ["6-maths-2","Lines and Angles","2","A: A right angle is 90°. R: Formed when two perpendicular lines meet.","Both A&R true, R explains A","Both true, R doesn't explain A","A true, R false","A false, R true","A","Both correct. Perpendicular lines meet at 90°."],
    ["6-maths-2","Lines and Angles","2","A: Complementary angles must be adjacent. R: Their sum = 90°.","Both A&R true, R explains A","A false, R true","Both false","A true, R false","B","Complementary angles need NOT be adjacent. The reason is the correct definition."],
    ["6-maths-2","Lines and Angles","2","A: Vertically opposite angles are supplementary. R: Formed by two intersecting lines.","Both true, R explains A","A false, R true","Both false","A true, R false","B","Vertically opposite angles are EQUAL, not supplementary. R is correct but A is false."],
    ["6-maths-2","Lines and Angles","2","A: A reflex angle is between 180° and 360°. R: Angles greater than a straight angle are reflex.","Both A&R true, R explains A","A true, R false","A false, R true","Both false","A","Both correct. Reflex angles exceed 180°."],
    ["6-maths-2","Lines and Angles","2","A: Two parallel lines can meet at infinity. R: Parallel lines have no common point.","A true, R false","A false, R true","Both true","Both false","B","Parallel lines NEVER meet. The reason is the correct definition."],
    ["6-maths-2","Lines and Angles","2","A: Co-interior angles on parallel lines are supplementary. R: They are on the same side of the transversal.","Both A&R true, R explains A","Both true, R doesn't explain A","A true, R false","A false, R true","B","Both true but being on same side is a description, not the reason they are supplementary."],
    ["6-maths-2","Lines and Angles","2","A: All right angles are equal. R: Every right angle measures 90°.","Both A&R true, R explains A","A true, R false","A false, R true","Both false","A","All right angles = 90°, so they are all equal. R correctly explains A."],
    ["6-maths-2","Lines and Angles","2","A: A straight angle is also a reflex angle. R: 180° is less than 360°.","Both true, R explains A","A false, R true","Both false","A true, R false","B","Straight angle (180°) is NOT reflex (must exceed 180°). R is true but irrelevant."],
    ["6-maths-2","Lines and Angles","2","A: Infinitely many lines pass through one point. R: Through one point, any number of lines can be drawn.","Both A&R true, R explains A","Both true, R doesn't explain A","A true, R false","A false, R true","A","Both correct. R correctly states the reason."],
    ["6-maths-2","Lines and Angles","2","A: Corresponding angles are equal when lines are parallel. R: They are on same side in matching positions.","Both A&R true, R explains A","A true, R false","A false, R true","Both false","A","Corresponding angles are equal for parallel lines and occupy matching positions."],
    # ── 6-maths-3 WS1 ─────────────────────────────────────
    ["6-maths-3","Number Play","1","Place value of 7 in 47,835?","7","700","7000","70","C","7 is in thousands place. Place value = 7×1000 = 7000."],
    ["6-maths-3","Number Play","1","Which number is a palindrome?","1234","1221","1342","1023","B","1221 reads the same forwards and backwards."],
    ["6-maths-3","Number Play","1","Round 6,847 to the nearest thousand:","6000","7000","6800","6900","B","Hundreds digit = 8 (≥5) → round up: 7000."],
    ["6-maths-3","Number Play","1","Kaprekar's constant for 4-digit numbers:","1729","6174","9801","4321","B","6174 — any 4-digit number reaches it."],
    ["6-maths-3","Number Play","1","Which is an Armstrong number?","123","153","200","321","B","153 = 1³+5³+3³ = 153 ✓"],
    ["6-maths-3","Number Play","1","A number is divisible by 9 if:","It is even","Ends in 0","Digit sum divisible by 9","Divisible by 3","C","Divisibility rule for 9: digit sum must be divisible by 9."],
    ["6-maths-3","Number Play","1","Face value of 6 in 76,432?","6000","600","60","6","D","Face value is always the digit itself."],
    ["6-maths-3","Number Play","1","Which is NOT a divisibility rule for 5?","Ends in 0","Ends in 5","Digit sum div by 5","Both A and B are correct","C","Divisibility by 5: ends in 0 or 5. Digit sum is NOT the rule."],
    ["6-maths-3","Number Play","1","Round 3.74 to the nearest whole number:","3","4","3.7","3.8","B","Digit after decimal is 7 (≥5) → round up: 4."],
    ["6-maths-3","Number Play","1","After 57+75=132, what is the next step in the palindrome trick?","132+231=363","132+123=255","132+321=453","132+213=345","A","Reverse 132 → 231. Add: 132+231=363 — a palindrome!"],
    # ── 6-maths-3 WS2 ─────────────────────────────────────
    ["6-maths-3","Number Play","2","A: 1729 is smallest number expressible as sum of two cubes in two ways. R: 1729 = 1³+12³ = 9³+10³.","Both A&R true, R explains A","Both true, R doesn't explain A","A true, R false","A false, R true","A","1729 is Hardy-Ramanujan number. Both correct and R explains A."],
    ["6-maths-3","Number Play","2","A: Rounding always gives the exact answer. R: Rounded numbers are approximations.","A true, R false","A false, R true","Both true","Both false","B","Rounding gives APPROXIMATE value, not exact. R is correct."],
    ["6-maths-3","Number Play","2","A: 371 is an Armstrong number. R: 3³+7³+1³ = 27+343+1 = 371.","Both A&R true, R explains A","A false, R true","A true, R false","Both false","A","Both correct. 371 is indeed an Armstrong number."],
    ["6-maths-3","Number Play","2","A: Every palindrome is divisible by 11. R: 121 ÷ 11 = 11.","A false, R true","Both true","A true, R false","Both false","A","Not every palindrome is divisible by 11. R is one specific case only."],
    ["6-maths-3","Number Play","2","A: Estimated sum of 248 and 352 is 600. R: 248≈250 and 352≈350; 250+350=600.","Both A&R true, R explains A","A true, R false","A false, R true","Both false","A","Both correct. Rounding to nearest 50 gives 250+350=600."],
    ["6-maths-3","Number Play","2","A: 0 is neither odd nor even. R: 0 is divisible by 2, giving remainder 0.","A false, R true","Both true, R explains A","A true, R false","Both false","A","0 IS even (divisible by 2, remainder 0). Assertion is false; R is true."],
    ["6-maths-3","Number Play","2","A: 100 is a perfect square. R: 100 = 10 × 10.","Both A&R true, R explains A","Both true, R doesn't explain A","A true, R false","A false, R true","A","100 is a perfect square (10²), and R correctly explains why."],
    ["6-maths-3","Number Play","2","A: Place value and face value of 0 are always the same. R: Zero × any positional value = 0.","Both A&R true, R explains A","A false, R true","A true, R false","Both false","A","Both correct. 0×any place = 0, so both values are always 0."],
    ["6-maths-3","Number Play","2","A: Kaprekar's operation on 1111 never reaches 6174. R: 1111 has all identical digits — gives 0000.","Both A&R true, R explains A","A true, R false","A false, R true","Both false","A","1111→0→0. Needs at least 2 different digits to reach 6174."],
    ["6-maths-3","Number Play","2","A: A 3-digit palindrome is always divisible by 11. R: ABA = 101A+10B, always divisible by 11.","A false, R true","Both true, R explains A","A true, R false","Both false","A","Not every 3-digit palindrome is divisible by 11 — this is a common misconception."],
]

QA_DATA = [
    # ── 6-maths-1 WS1 (Elementary) ────────────────────────
    ["6-maths-1","Patterns in Mathematics","1","What is a pattern? Give two examples from daily life.",
     "A pattern is an arrangement that follows a fixed rule.\nExamples:\n"
     "(1) Days of the week repeat: Mon, Tue, Wed…\n"
     "(2) Traffic lights follow: Red → Green → Yellow → Red.","short"],
    ["6-maths-1","Patterns in Mathematics","1","Write the first 6 triangular numbers and show how they are formed.",
     "Triangular numbers: 1, 3, 6, 10, 15, 21.\n"
     "Formed by: T1=1, T2=1+2=3, T3=1+2+3=6, T4=10, T5=15, T6=21.\nFormula: Tn = n(n+1)/2.","short"],
    ["6-maths-1","Patterns in Mathematics","1","Define square numbers. Find the 7th square number.",
     "Square numbers are products of a number multiplied by itself: n².\n"
     "First 7: 1, 4, 9, 16, 25, 36, 49.\nThe 7th square number = 7² = 49.","short"],
    ["6-maths-1","Patterns in Mathematics","1","What is the Fibonacci sequence? Write its first 10 terms.",
     "Fibonacci: each term = sum of two previous terms.\n"
     "First 10: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55.\nRule: F(n) = F(n-1) + F(n-2).","short"],
    ["6-maths-1","Patterns in Mathematics","1","How are patterns used in everyday life? Give three examples.",
     "(1) Music: rhythmic patterns in beats.\n(2) Nature: petal count in flowers follows Fibonacci.\n"
     "(3) Architecture: repeating tile designs.\nPatterns help predict, plan, and create efficiently.","short"],
    # ── 6-maths-1 WS2 (Advanced) ──────────────────────────
    ["6-maths-1","Patterns in Mathematics","2","What is Pascal's Triangle? Write the first 5 rows and explain one pattern you notice.",
     "Pascal's Triangle: each entry = sum of two entries above it.\n"
     "Rows: 1 / 1,1 / 1,2,1 / 1,3,3,1 / 1,4,6,4,1\n\n"
     "Pattern: Row sums are powers of 2 (1,2,4,8,16).\nDiagonal 3 gives triangular numbers.","long"],
    ["6-maths-1","Patterns in Mathematics","2","Explain why the digit sum of every multiple of 9 is divisible by 9. Use three examples.",
     "Because in base-10, 10 ≡ 1 (mod 9), so any number ≡ digit sum (mod 9).\n"
     "Examples:\n• 18 → 1+8=9 ✓\n• 81 → 8+1=9 ✓\n• 162 → 1+6+2=9 ✓","long"],
    ["6-maths-1","Patterns in Mathematics","2","Create your own pattern with at least 8 terms. State the rule and find the 12th term.",
     "Example: 3, 7, 11, 15, 19, 23, 27, 31…\nRule: start at 3, add 4 each time.\n"
     "Formula: T(n) = 4n − 1.\n12th term = 4(12)−1 = 47.","long"],
    ["6-maths-1","Patterns in Mathematics","2","Prove that the sum of first n odd numbers equals n².",
     "Proof by pattern:\n• 1 = 1²\n• 1+3 = 4 = 2²\n• 1+3+5 = 9 = 3²\n• 1+3+5+7 = 16 = 4²\n\n"
     "By induction: 1+3+5+...+(2n-1) = n²\n"
     "Visually shown by building square dot grids from L-shaped odd-number borders.","long"],
    ["6-maths-1","Patterns in Mathematics","2","Describe three real-world applications of mathematical patterns.",
     "1. Weather: temperature patterns through seasons help forecast future weather.\n"
     "2. Population growth: if population doubles every 10 years, the pattern predicts future growth.\n"
     "3. Finance: compound interest A=P(1+r)ⁿ — used to calculate savings growth.\n\n"
     "Patterns save time, reduce errors, and allow generalising from specific observations.","long"],
    # ── 6-maths-2 WS1 ─────────────────────────────────────
    ["6-maths-2","Lines and Angles","1","Define a line segment and a ray. How are they different from a line?",
     "Line segment: two endpoints, fixed measurable length (e.g., AB).\n"
     "Ray: one endpoint, extends infinitely in one direction.\n"
     "Line: no endpoints, extends infinitely in both directions.","short"],
    ["6-maths-2","Lines and Angles","1","What are complementary and supplementary angles? Give one example of each.",
     "Complementary: two angles whose sum is 90°. Example: 40° and 50°.\n\n"
     "Supplementary: two angles whose sum is 180°. Example: 120° and 60°.","short"],
    ["6-maths-2","Lines and Angles","1","Find x if angles (3x+10)° and (2x+5)° form a linear pair.",
     "Linear pair sum = 180°\n(3x+10)+(2x+5)=180\n5x+15=180\nx=33°\n"
     "Angles: 109° and 71°. Check: 109+71=180° ✓","short"],
    ["6-maths-2","Lines and Angles","1","What are vertically opposite angles? Are they always equal?",
     "When two lines intersect, angles formed directly opposite each other are vertically opposite.\n"
     "Yes, they are ALWAYS equal. If one angle is 65°, the angle opposite is also 65°.","short"],
    ["6-maths-2","Lines and Angles","1","State three angle relationships when a transversal cuts two parallel lines.",
     "1. Corresponding angles are EQUAL.\n"
     "2. Alternate interior angles are EQUAL.\n"
     "3. Co-interior angles are SUPPLEMENTARY (sum to 180°).","short"],
    # ── 6-maths-2 WS2 ─────────────────────────────────────
    ["6-maths-2","Lines and Angles","2","Explain the angles formed when a transversal cuts two parallel lines.",
     "When a transversal crosses two parallel lines, 8 angles form (4 at each intersection).\n\n"
     "• Corresponding angles: same position → EQUAL\n"
     "• Alternate interior angles: between lines, opposite sides → EQUAL\n"
     "• Co-interior angles: same side → SUPPLEMENTARY (sum=180°)\n\n"
     "Used to find unknown angles in geometry problems.","long"],
    ["6-maths-2","Lines and Angles","2","Triangle angles are in ratio 2:3:5. Find each angle and identify the triangle type.",
     "Sum = 180°. Ratio 2:3:5, total parts=10. Each part = 18°\n"
     "Angles: 36°, 54°, 90°\n\n"
     "Since one angle = 90°, it is a RIGHT-ANGLED TRIANGLE.","long"],
    ["6-maths-2","Lines and Angles","2","Give three real-life examples each of parallel lines and perpendicular lines.",
     "Parallel: (1) Railway tracks. (2) Opposite edges of a door frame. (3) Lines on a ruled notebook.\n\n"
     "Perpendicular: (1) A wall meeting the floor. (2) Clock hands at 3:00. (3) Corner of a book.","long"],
    ["6-maths-2","Lines and Angles","2","Two adjacent angles form a straight line. One angle is 3 times the other. Find both angles.",
     "Let smaller = x°. Larger = 3x°.\nx+3x=180°\n4x=180° → x=45°\n\n"
     "Angles: 45° and 135°. Check: 45+135=180° ✓","short"],
    ["6-maths-2","Lines and Angles","2","Write two properties each of a line, ray, and line segment.",
     "Line: (1) No endpoints; extends infinitely both ways. (2) Cannot be measured.\n\n"
     "Ray: (1) One fixed starting point. (2) Named from starting point (Ray AB starts at A).\n\n"
     "Line Segment: (1) Two endpoints; definite measurable length. (2) Shortest distance between two points.","short"],
    # ── 6-maths-3 WS1 ─────────────────────────────────────
    ["6-maths-3","Number Play","1","What is place value? Find place value and face value of 8 in 38,542.",
     "Place value: value based on position. In 38,542: 8 is in thousands place.\n"
     "Place value of 8 = 8 × 1000 = 8000\nFace value of 8 = 8 (always the digit itself).","short"],
    ["6-maths-3","Number Play","1","What is Kaprekar's constant? Show steps for any 4-digit number.",
     "Kaprekar's constant is 6174.\nExample for 5321:\n"
     "5321−1235=4086 → 8640−0468=8172 → 8721−1278=7443\n"
     "→ 7443−3447=3996 → 9963−3699=6264 → 6642−2466=4176 → 7641−1467=6174 ✓","long"],
    ["6-maths-3","Number Play","1","Verify that 153 is an Armstrong number. Also check if 123 is.",
     "153: 1³+5³+3³ = 1+125+27 = 153 ✓ IS Armstrong.\n"
     "123: 1³+2³+3³ = 1+8+27 = 36 ≠ 123 ✗ NOT Armstrong.","short"],
    ["6-maths-3","Number Play","1","Round 47,836 to nearest (a) ten, (b) hundred, (c) thousand.",
     "(a) Nearest ten: units=6 (≥5) → 47,840\n"
     "(b) Nearest hundred: tens=3 (<5) → 47,800\n"
     "(c) Nearest thousand: hundreds=8 (≥5) → 48,000","short"],
    ["6-maths-3","Number Play","1","Check if 8,142 reaches 6174 using Kaprekar's operation (show 2 steps).",
     "Step 1: 8421−1248=7173\n"
     "Step 2: 7731−1377=6354\n"
     "Step 3: 6543−3456=3087\nContinue until reaching 6174.","short"],
    # ── 6-maths-3 WS2 ─────────────────────────────────────
    ["6-maths-3","Number Play","2","Explain how rounding is used in everyday life. When is overestimation better?",
     "Rounding in daily life:\n"
     "(1) Shopping — rounding prices to nearest ₹10 for quick budgeting.\n"
     "(2) Time — saying 'about 2 hours' instead of 1h 47m.\n"
     "(3) Population — 'about 12 lakh' instead of 11,84,327.\n\n"
     "Overestimation is better when planning expenses, estimating construction materials, or medical safety margins.","long"],
    ["6-maths-3","Number Play","2","Why is 0 considered an even number? Explain using the divisibility rule.",
     "A number is even if divisible by 2 with remainder 0.\n"
     "0 ÷ 2 = 0 with remainder 0 → 0 IS EVEN.\n\n"
     "Even numbers: …−4,−2,0,2,4… — 0 fits between −2 and 2.","short"],
    ["6-maths-3","Number Play","2","Write the palindrome trick for 89. Show at least 3 steps.",
     "89+98=187 → 187+781=968 → 968+869=1837 → 1837+7381=9218…\n\n"
     "89 is a 'delayed palindrome' — it takes 24 steps to reach one!","long"],
    ["6-maths-3","Number Play","2","State and explain four divisibility rules with examples.",
     "1. By 2: last digit 0,2,4,6,8. Example: 348 ✓\n"
     "2. By 3: digit sum div by 3. Example: 453 → 12 ✓\n"
     "3. By 9: digit sum div by 9. Example: 729 → 18 ✓\n"
     "4. By 11: alternating digit sum diff is 0 or div by 11. Example: 121 → 0 ✓","long"],
    ["6-maths-3","Number Play","2","Explain the difference between estimation and approximation with one example each.",
     "Estimation: rough calculation using rounding. Example: 23×48 ≈ 23×50 = ₹1150.\n\n"
     "Approximation: value close to exact answer to a stated accuracy.\n"
     "Example: Exact = 1104; approximated to nearest hundred = 1100.\n\n"
     "Estimation is a PROCESS; approximation is the RESULT.","long"],
]

# ══════════════════════════════════════════════════════════
# CHAPTER LIST
# ══════════════════════════════════════════════════════════
PREFILLED_IDS = {"6-maths-1", "6-maths-2", "6-maths-3"}
EXCLUDED_IDS  = {"6-science-1", "7-science-1", "8-science-1"}

def load_chapters_from_curriculum():
    import re, os
    curriculum_path = os.path.join(os.path.dirname(__file__), "..", "data", "curriculum.ts")
    with open(curriculum_path, encoding="utf-8") as f:
        content = f.read()
    chapters = []
    for line in content.splitlines():
        id_m    = re.search(r'id:\s*"([^"]+)"', line)
        title_m = re.search(r'title:\s*"([^"]+)"', line)
        if id_m and title_m:
            chapters.append((id_m.group(1), title_m.group(1)))
    return chapters

ALL_CHAPTERS           = load_chapters_from_curriculum()
ALL_REMAINING_CHAPTERS = [(cid, title) for cid, title in ALL_CHAPTERS
                          if cid not in PREFILLED_IDS and cid not in EXCLUDED_IDS]

# ══════════════════════════════════════════════════════════
# BUILD SHEETS
# ══════════════════════════════════════════════════════════

def build_mcq_sheet(wb):
    ws = wb.create_sheet("MCQ")
    headers = ["chapter_id","chapter_name","worksheet","level",
               "question","option_a","option_b","option_c","option_d","answer","explanation"]
    ws.append(headers)
    style_header_row(ws, len(headers))
    # Green tint on answer column header
    ws.cell(row=1, column=10).fill = PatternFill("solid", fgColor=ANSWER_GREEN)
    ws.row_dimensions[1].height = 22

    for row_data in MCQ_DATA:
        cid, cname, ws_num = row_data[0], row_data[1], row_data[2]
        level = ws_to_level(ws_num)
        full_row = [cid, cname, ws_num, level] + row_data[3:]
        ws.append(full_row)
        r = ws.max_row
        ws.row_dimensions[r].height = 55
        fill = row_fill(cid)
        fg, bg = level_color(level)
        for c in range(1, len(headers) + 1):
            cell = ws.cell(row=r, column=c)
            if c == 4:   # level
                style_cell(cell, fill=PatternFill("solid", fgColor=bg),
                           bold=True, color=fg, center_align=True)
            elif c == 10:  # answer
                style_cell(cell, fill=PatternFill("solid", fgColor="E6F4EA"),
                           bold=True, color=ANSWER_GREEN, center_align=True)
            elif c in (3,):  # worksheet
                style_cell(cell, fill=fill, center_align=True)
            else:
                style_cell(cell, fill=fill)

    for chid, chname in ALL_REMAINING_CHAPTERS:
        for ws_num in ["1", "2"]:
            level = ws_to_level(ws_num)
            fg, bg = level_color(level)
            for _ in range(10):
                ws.append([chid, chname, ws_num, level, "", "", "", "", "", "", ""])
                r = ws.max_row
                ws.row_dimensions[r].height = 40
                for c in range(1, len(headers) + 1):
                    cell = ws.cell(row=r, column=c)
                    if c == 1:
                        style_cell(cell, fill=row_fill(chid), bold=True, color="666666")
                    elif c == 2:
                        style_cell(cell, fill=row_fill(chid), color="666666")
                    elif c == 3:
                        style_cell(cell, fill=row_fill(chid), color="666666", center_align=True)
                    elif c == 4:
                        style_cell(cell, fill=PatternFill("solid", fgColor=bg),
                                   bold=True, color=fg, center_align=True)
                    else:
                        blank_style(cell)

    ws.column_dimensions["A"].width = 14
    ws.column_dimensions["B"].width = 22
    ws.column_dimensions["C"].width = 10
    ws.column_dimensions["D"].width = 14
    ws.column_dimensions["E"].width = 44
    ws.column_dimensions["F"].width = 20
    ws.column_dimensions["G"].width = 20
    ws.column_dimensions["H"].width = 20
    ws.column_dimensions["I"].width = 20
    ws.column_dimensions["J"].width = 9
    ws.column_dimensions["K"].width = 44
    ws.freeze_panes = "A2"


def build_qa_sheet(wb):
    ws = wb.create_sheet("QA")
    headers = ["chapter_id","chapter_name","worksheet","level","question","answer","type"]
    ws.append(headers)
    style_header_row(ws, len(headers))
    ws.row_dimensions[1].height = 22

    for row_data in QA_DATA:
        cid, cname, ws_num = row_data[0], row_data[1], row_data[2]
        level = ws_to_level(ws_num)
        full_row = [cid, cname, ws_num, level] + row_data[3:]
        ws.append(full_row)
        r = ws.max_row
        ws.row_dimensions[r].height = 80
        fill = row_fill(cid)
        fg, bg = level_color(level)
        qtype = row_data[5]
        for c in range(1, len(headers) + 1):
            cell = ws.cell(row=r, column=c)
            if c == 4:   # level
                style_cell(cell, fill=PatternFill("solid", fgColor=bg),
                           bold=True, color=fg, center_align=True)
            elif c == 7:  # type
                type_color = "1A73E8" if qtype == "short" else "F59E0B"
                style_cell(cell, fill=PatternFill("solid", fgColor="EAF1FB"),
                           bold=True, color=type_color, center_align=True)
            elif c == 3:
                style_cell(cell, fill=fill, center_align=True)
            else:
                style_cell(cell, fill=fill)

    for chid, chname in ALL_REMAINING_CHAPTERS:
        for ws_num in ["1", "2"]:
            level = ws_to_level(ws_num)
            fg, bg = level_color(level)
            for _ in range(5):
                ws.append([chid, chname, ws_num, level, "", "", "short"])
                r = ws.max_row
                ws.row_dimensions[r].height = 50
                for c in range(1, len(headers) + 1):
                    cell = ws.cell(row=r, column=c)
                    if c == 1:
                        style_cell(cell, fill=row_fill(chid), bold=True, color="666666")
                    elif c == 2:
                        style_cell(cell, fill=row_fill(chid), color="666666")
                    elif c == 3:
                        style_cell(cell, fill=row_fill(chid), color="666666", center_align=True)
                    elif c == 4:
                        style_cell(cell, fill=PatternFill("solid", fgColor=bg),
                                   bold=True, color=fg, center_align=True)
                    elif c == 7:
                        style_cell(cell, fill=blank_fill(), color="BDBDBD", center_align=True)
                    else:
                        blank_style(cell)

    ws.column_dimensions["A"].width = 14
    ws.column_dimensions["B"].width = 24
    ws.column_dimensions["C"].width = 10
    ws.column_dimensions["D"].width = 14
    ws.column_dimensions["E"].width = 44
    ws.column_dimensions["F"].width = 50
    ws.column_dimensions["G"].width = 10
    ws.freeze_panes = "A2"


def main():
    wb = openpyxl.Workbook()
    wb.remove(wb.active)

    print("Building MCQ tab...")
    build_mcq_sheet(wb)
    print("Building QA tab...")
    build_qa_sheet(wb)

    out_path = "templates/Nucleus Content.xlsx"
    wb.save(out_path)

    import os
    size_kb = os.path.getsize(out_path) // 1024
    print(f"\n✅  Saved → {out_path}  ({size_kb} KB)")
    print(f"    Tabs: MCQ | QA")
    print(f"    Level: Worksheet 1 = Elementary | Worksheet 2 = Advanced")
    print(f"    Chapters pre-filled: 6-maths-1, 6-maths-2, 6-maths-3")
    print(f"    Blank rows ready: {len(ALL_REMAINING_CHAPTERS)} more chapters")
    print(f"\n    → Upload to Google Drive → open with Google Sheets")
    print(f"    → Or import directly at sheets.google.com")

if __name__ == "__main__":
    main()
