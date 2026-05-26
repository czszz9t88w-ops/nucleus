"""
Builds Nucleus Content.xlsx — a fully formatted Excel file
with 4 sheets matching the Google Sheets tab structure:
  Notes | Snippets | MCQ | QA

Run: python3 scripts/build-nucleus-excel.py
Output: templates/Nucleus Content.xlsx
"""

import openpyxl
from openpyxl.styles import (
    PatternFill, Font, Alignment, Border, Side, numbers
)
from openpyxl.utils import get_column_letter

# ── Colours ────────────────────────────────────────────────
BLUE_HEADER   = "1A73E8"   # Google blue — column headers
WHITE         = "FFFFFF"
FILLED_BG     = "FFFFFF"   # Filled data rows
FILLED_MATHS  = "EAF1FB"   # Maths chapter tint
FILLED_SCI    = "E6F4EA"   # Science chapter tint
BLANK_BG      = "FFFDE7"   # Blank placeholder rows
BORDER_COLOR  = "DADCE0"
ANSWER_GREEN  = "188038"   # MCQ answer column
CHAP_LABEL    = "FCE8B2"   # Chapter label fill

# ── Font / Fill helpers ────────────────────────────────────
def hdr_font():  return Font(bold=True, color=WHITE, size=11)
def hdr_fill():  return PatternFill("solid", fgColor=BLUE_HEADER)
def filled_font(bold=False, color="202124"):
    return Font(bold=bold, color=color, size=10)
def blank_fill():  return PatternFill("solid", fgColor=BLANK_BG)
def maths_fill():  return PatternFill("solid", fgColor=FILLED_MATHS)
def sci_fill():    return PatternFill("solid", fgColor=FILLED_SCI)
def wrap():        return Alignment(wrap_text=True, vertical="top")
def center():      return Alignment(horizontal="center", vertical="center")
def thin_border():
    s = Side(style="thin", color=BORDER_COLOR)
    return Border(left=s, right=s, top=s, bottom=s)

def style_header_row(ws, col_count):
    for c in range(1, col_count + 1):
        cell = ws.cell(row=1, column=c)
        cell.font = hdr_font()
        cell.fill = hdr_fill()
        cell.alignment = center()
        cell.border = thin_border()

def style_data_cell(cell, fill=None, bold=False, color="202124",
                    center_align=False, wrap_text=True):
    cell.font = filled_font(bold=bold, color=color)
    if fill:
        cell.fill = fill
    if center_align:
        cell.alignment = Alignment(horizontal="center", vertical="top")
    else:
        cell.alignment = wrap() if wrap_text else Alignment(vertical="top")
    cell.border = thin_border()

def row_fill(chapter_id):
    """Return fill based on subject."""
    if "science" in chapter_id:
        return sci_fill()
    return maths_fill()

def blank_row_style(cell):
    cell.fill = blank_fill()
    cell.font = Font(color="BDBDBD", size=10, italic=True)
    cell.alignment = wrap()
    cell.border = thin_border()

# ══════════════════════════════════════════════════════════
# DATA
# ══════════════════════════════════════════════════════════

NOTES_DATA = [
    # ── 6-MATHS-1 ─────────────────────────────────────────
    ["6-maths-1","Patterns in Mathematics","What is a Pattern?",
     "A pattern is an arrangement of numbers or shapes that follows a fixed rule. "
     "Patterns help us predict what comes next and understand the structure of mathematics. "
     "Every pattern has a rule — find the rule, extend the pattern.",
     "Key Idea: Every pattern has a rule. Find the rule, predict the next term."],
    ["6-maths-1","Patterns in Mathematics","Number Sequences",
     "A number sequence is a list of numbers arranged according to a rule.\n"
     "• 2,4,6,8 → add 2 each time (even numbers)\n"
     "• 1,4,9,16,25 → perfect squares (1²,2²,3²...)\n"
     "• 1,1,2,3,5,8 → Fibonacci (each term = sum of two before it)",
     "Triangular numbers: 1, 3, 6, 10, 15 … Formula: n(n+1)/2"],
    ["6-maths-1","Patterns in Mathematics","Shape Patterns",
     "Patterns appear in geometric arrangements.\n"
     "• Square numbers shown as square dot grids\n"
     "• Triangular numbers form triangle arrangements of dots\n"
     "• Pascal's Triangle: each entry = sum of two entries above it",
     ""],
    ["6-maths-1","Patterns in Mathematics","Patterns in Operations",
     "Patterns help simplify calculations.\n"
     "• 9×1=9, 9×2=18, 9×3=27 (tens digit ↑, units digit ↓)\n"
     "• Multiples of 11: 11,22,33,44 (both digits are same)\n"
     "• Divisibility by 9: if digit sum is divisible by 9",
     "Observation skill is the most important maths tool — patterns train your eyes to see structure."],
    # ── 6-MATHS-2 ─────────────────────────────────────────
    ["6-maths-2","Lines and Angles","Basic Geometric Terms",
     "A point is an exact location in space with no size. A line extends infinitely in both directions "
     "with no endpoints. A line segment has two endpoints and a definite length. "
     "A ray starts at one fixed point and extends infinitely in one direction only.",
     "Key: Line → infinite both ways | Ray → infinite one way | Line Segment → fixed length"],
    ["6-maths-2","Lines and Angles","Types of Angles",
     "An angle is formed when two rays share a common endpoint (vertex).\n"
     "• Acute: 0°–90°\n• Right: exactly 90°\n• Obtuse: 90°–180°\n"
     "• Straight: exactly 180°\n• Reflex: 180°–360°\n• Complete: 360°\n"
     "Measured in degrees using a protractor.",
     "Acute < 90° | Right = 90° | Obtuse 90°–180° | Straight = 180° | Reflex 180°–360°"],
    ["6-maths-2","Lines and Angles","Pairs of Angles",
     "Complementary angles sum to 90°. Supplementary angles sum to 180°.\n"
     "Adjacent angles share a vertex and arm with no overlap.\n"
     "When two lines intersect they form vertically opposite angles — always equal.\n"
     "Linear pair: two adjacent angles on a straight line — always sums to 180°.",
     "Complementary: sum = 90° | Supplementary: sum = 180° | Vertically opposite angles are equal"],
    ["6-maths-2","Lines and Angles","Parallel and Perpendicular Lines",
     "Parallel lines (AB ∥ CD) never meet — constant distance apart.\n"
     "Perpendicular lines (AB ⊥ CD) meet at exactly 90°.\n"
     "A transversal cutting two parallel lines creates:\n"
     "• Alternate interior angles → equal\n"
     "• Corresponding angles → equal\n"
     "• Co-interior (same-side interior) angles → supplementary (sum = 180°)",
     "Parallel: AB ∥ CD | Perpendicular: AB ⊥ CD | Alternate interior angles equal when lines parallel"],
    # ── 6-MATHS-3 ─────────────────────────────────────────
    ["6-maths-3","Number Play","Numbers in Everyday Life",
     "Numbers are all around us — in prices, phone numbers, dates, scores, measurements.\n"
     "Digits: the ten symbols 0–9 used to write every number.\n"
     "Place value: value of a digit based on its position (ones, tens, hundreds…)\n"
     "Face value: always the digit itself, regardless of position.",
     "Place value = Digit × Position value | Face value = the digit itself"],
    ["6-maths-3","Number Play","Number Tricks and Divisibility",
     "Divisibility rules:\n"
     "• By 2: last digit is 0,2,4,6 or 8\n• By 3: digit sum divisible by 3\n"
     "• By 5: ends in 0 or 5\n• By 9: digit sum divisible by 9\n• By 10: ends in 0\n\n"
     "Kaprekar's constant: Take any 4-digit number, arrange digits descending then ascending, subtract. "
     "Repeat. You always reach 6174!",
     "Kaprekar constant = 6174 — reached by any 4-digit number within 7 steps"],
    ["6-maths-3","Number Play","Palindromes and Special Numbers",
     "A palindrome reads the same forwards and backwards (e.g., 121, 1331).\n"
     "Palindrome trick: Take any number, reverse digits, add — repeat until palindrome.\n\n"
     "Armstrong numbers: sum of each digit raised to power of digit-count = the number.\n"
     "Example: 153 = 1³+5³+3³ = 1+125+27 = 153 ✓",
     "Palindrome: reads same both ways | Armstrong: 153 = 1³+5³+3³"],
    ["6-maths-3","Number Play","Estimation and Rounding",
     "Estimation: finding an approximate value close enough for practical use.\n\n"
     "Rounding rules:\n"
     "• Look at digit to the RIGHT of the rounding place\n"
     "• If ≥ 5 → round up (add 1 to rounding digit)\n"
     "• If < 5 → round down (keep rounding digit as is)\n\n"
     "Example: 4763 rounded to nearest hundred → tens digit = 6 (≥5) → 4800",
     "Round digit ≥ 5 → round up | Round digit < 5 → round down"],
]

SNIPPETS_DATA = [
    ["6-maths-1","Patterns in Mathematics","Pattern","An arrangement that follows a fixed rule and can be extended predictably.","","2, 4, 6, 8 — rule: add 2"],
    ["6-maths-1","Patterns in Mathematics","Sequence","An ordered list of numbers or objects following a rule.","","1, 4, 9, 16, 25 (perfect squares)"],
    ["6-maths-1","Patterns in Mathematics","Triangular Number","Numbers that can form a triangular dot arrangement.","Tn = n(n+1)/2","T4 = 4×5/2 = 10"],
    ["6-maths-1","Patterns in Mathematics","Square Number","The product of a number multiplied by itself.","n² = n × n","4² = 16"],
    ["6-maths-1","Patterns in Mathematics","Fibonacci Sequence","A sequence where each term is the sum of the two previous terms starting from 1, 1.","","1, 1, 2, 3, 5, 8, 13, 21 …"],
    ["6-maths-1","Patterns in Mathematics","Even Numbers","Numbers divisible by 2.","2n","2, 4, 6, 8, 10 …"],
    ["6-maths-1","Patterns in Mathematics","Odd Numbers","Numbers not divisible by 2.","2n − 1","1, 3, 5, 7, 9 …"],
    ["6-maths-1","Patterns in Mathematics","Pascal's Triangle","A triangular arrangement where each entry is the sum of the two entries above it.","","Row 3: 1, 3, 3, 1"],
    ["6-maths-2","Lines and Angles","Point","An exact location in space with no size, no length, no width.","","Tip of a pencil represents a point"],
    ["6-maths-2","Lines and Angles","Line Segment","Part of a line with two definite endpoints and a measurable length.","Length AB = |A - B|","The edge of a ruler is a line segment"],
    ["6-maths-2","Lines and Angles","Ray","Part of a line that starts at one endpoint and extends infinitely in one direction.","","A beam of light from a torch"],
    ["6-maths-2","Lines and Angles","Acute Angle","An angle whose measure is greater than 0° and less than 90°.","","45° is an acute angle"],
    ["6-maths-2","Lines and Angles","Obtuse Angle","An angle whose measure is greater than 90° and less than 180°.","","120° is an obtuse angle"],
    ["6-maths-2","Lines and Angles","Complementary Angles","Two angles whose measures add up to exactly 90°.","∠A + ∠B = 90°","30° and 60° are complementary"],
    ["6-maths-2","Lines and Angles","Supplementary Angles","Two angles whose measures add up to exactly 180°.","∠A + ∠B = 180°","110° and 70° are supplementary"],
    ["6-maths-2","Lines and Angles","Vertically Opposite Angles","Angles formed opposite each other when two lines intersect — always equal.","∠1 = ∠3, ∠2 = ∠4","When scissors blades cross, opposite angles are equal"],
    ["6-maths-3","Number Play","Place Value","The value of a digit based on its position in the number.","Digit × positional value","In 5476, place value of 4 is 400"],
    ["6-maths-3","Number Play","Face Value","The actual value of a digit, regardless of its position.","","In 5476, face value of 4 is always 4"],
    ["6-maths-3","Number Play","Palindrome","A number that reads the same forwards and backwards.","","121, 1331, 99, 12321 are palindromes"],
    ["6-maths-3","Number Play","Kaprekar's Constant","The number 6174, reached by any 4-digit number after repeated Kaprekar operations.","","9981 → … → 6174"],
    ["6-maths-3","Number Play","Armstrong Number","A number equal to the sum of its digits each raised to the power of digit count.","Sum of (each digit)ⁿ = number","153 = 1³+5³+3³ = 153"],
    ["6-maths-3","Number Play","Estimation","Finding an approximate answer close enough for practical purposes.","","427 ≈ 400 (to nearest hundred)"],
    ["6-maths-3","Number Play","Rounding","Replacing a number with a nearby simpler number based on a given place value.","If right digit ≥5 round up; else round down","3.67 rounded to whole = 4"],
    ["6-maths-3","Number Play","Divisibility Rule","A shortcut to check if a number is divisible by another without actual division.","","Div by 9: digit sum divisible by 9"],
]

MCQ_DATA = [
    # 6-maths-1 WS1
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
    # 6-maths-1 WS2 (Assertion-Reason)
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
    # 6-maths-2 WS1
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
    # 6-maths-2 WS2
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
    # 6-maths-3 WS1
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
    # 6-maths-3 WS2
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
    # 6-maths-1 WS1
    ["6-maths-1","Patterns in Mathematics","1","What is a pattern? Give two examples from daily life.",
     "A pattern is an arrangement that follows a fixed rule.\n"
     "Examples:\n(1) Days of the week repeat: Mon, Tue, Wed…\n"
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
    # 6-maths-1 WS2
    ["6-maths-1","Patterns in Mathematics","2","What is Pascal's Triangle? Write the first 5 rows and explain one pattern you notice.",
     "Pascal's Triangle: each entry = sum of two entries above it.\n"
     "Rows: 1 / 1,1 / 1,2,1 / 1,3,3,1 / 1,4,6,4,1\n\n"
     "Pattern: Row sums are powers of 2 (1,2,4,8,16).\nDiagonal 3 gives triangular numbers.","long"],
    ["6-maths-1","Patterns in Mathematics","2","Explain why the digit sum of every multiple of 9 is divisible by 9. Use three examples.",
     "Because in base-10, 10 ≡ 1 (mod 9), so any number ≡ digit sum (mod 9).\n"
     "Examples:\n• 18 → 1+8=9 (divisible by 9 ✓)\n• 81 → 8+1=9 (✓)\n• 162 → 1+6+2=9 (✓)\n"
     "This is why the divisibility rule works.","long"],
    ["6-maths-1","Patterns in Mathematics","2","Create your own pattern with at least 8 terms. State the rule and find the 12th term.",
     "Example: 3, 7, 11, 15, 19, 23, 27, 31…\nRule: start at 3, add 4 each time.\n"
     "Formula: T(n) = 3 + 4(n-1) = 4n − 1.\n12th term = 4(12)−1 = 47.","long"],
    ["6-maths-1","Patterns in Mathematics","2","Prove that the sum of first n odd numbers equals n².",
     "Odd numbers: 1, 3, 5, 7…\nProof by pattern:\n• 1 = 1²\n• 1+3 = 4 = 2²\n"
     "• 1+3+5 = 9 = 3²\n• 1+3+5+7 = 16 = 4²\n\n"
     "By induction: 1+3+5+...+(2n-1) = n²\nVisually shown by building square dot grids from L-shaped odd-number borders.","long"],
    ["6-maths-1","Patterns in Mathematics","2","Describe three real-world applications of mathematical patterns.",
     "1. Weather: temperature patterns through seasons help forecast future weather.\n"
     "2. Population growth: if population doubles every 10 years (1000,2000,4000…), the pattern predicts future population.\n"
     "3. Finance: compound interest A=P(1+r)ⁿ — used to calculate savings growth.\n\n"
     "Patterns save time, reduce errors, and allow generalising from specific observations.","long"],
    # 6-maths-2 WS1
    ["6-maths-2","Lines and Angles","1","Define a line segment and a ray. How are they different from a line?",
     "Line segment: two endpoints, fixed measurable length (e.g., AB).\n"
     "Ray: one endpoint, extends infinitely in one direction (e.g., ray AB from A through B).\n"
     "Line: no endpoints, extends infinitely in both directions.\nLine segments and rays are parts of a line.","short"],
    ["6-maths-2","Lines and Angles","1","What are complementary and supplementary angles? Give one example of each.",
     "Complementary: two angles whose sum is 90°.\nExample: 40° and 50° (40+50=90°).\n\n"
     "Supplementary: two angles whose sum is 180°.\nExample: 120° and 60° (120+60=180°).","short"],
    ["6-maths-2","Lines and Angles","1","Find x if angles (3x+10)° and (2x+5)° form a linear pair.",
     "Linear pair sum = 180°\n(3x+10)+(2x+5)=180\n5x+15=180\n5x=165\nx=33°\n"
     "Angles: 3(33)+10=109° and 2(33)+5=71°\nCheck: 109+71=180° ✓","short"],
    ["6-maths-2","Lines and Angles","1","What are vertically opposite angles? Are they always equal?",
     "When two lines intersect, angles formed directly opposite each other are vertically opposite.\n"
     "Yes, they are ALWAYS equal.\nIf one angle is 65°, the angle directly opposite is also 65°.","short"],
    ["6-maths-2","Lines and Angles","1","State three angle relationships when a transversal cuts two parallel lines.",
     "1. Corresponding angles are EQUAL (same position at each intersection).\n"
     "2. Alternate interior angles are EQUAL (between lines, opposite sides of transversal).\n"
     "3. Co-interior angles are SUPPLEMENTARY — they add to 180° (same side of transversal).","short"],
    # 6-maths-2 WS2
    ["6-maths-2","Lines and Angles","2","Explain the angles formed when a transversal cuts two parallel lines.",
     "When a transversal crosses two parallel lines (l ∥ m), 8 angles form (4 at each intersection).\n\n"
     "• Corresponding angles (∠1 & ∠5): same position → EQUAL\n"
     "• Alternate interior angles (∠3 & ∠6): between lines, opposite sides → EQUAL\n"
     "• Alternate exterior angles: outside lines, opposite sides → EQUAL\n"
     "• Co-interior angles (∠3 & ∠5): same side → SUPPLEMENTARY (sum=180°)\n\n"
     "Used to find unknown angles in geometry problems.","long"],
    ["6-maths-2","Lines and Angles","2","Triangle angles are in ratio 2:3:5. Find each angle and identify the triangle type.",
     "Sum of angles = 180°. Ratio 2:3:5, total parts=10.\n"
     "Each part = 180°÷10 = 18°\n"
     "Angles: 2×18=36°, 3×18=54°, 5×18=90°\n\n"
     "Since one angle = 90°, it is a RIGHT-ANGLED TRIANGLE.\n"
     "The other two (36° and 54°) are complementary (36+54=90°).","long"],
    ["6-maths-2","Lines and Angles","2","Give three real-life examples each of parallel lines and perpendicular lines.",
     "Parallel lines:\n(1) Railway tracks — two rails never meet.\n"
     "(2) Opposite edges of a door frame.\n(3) Lines on a ruled notebook page.\n\n"
     "Perpendicular lines:\n(1) A wall meeting the floor — 90° angle.\n"
     "(2) Clock hands at 3:00.\n(3) Corner of a book — edges meet at right angles.","long"],
    ["6-maths-2","Lines and Angles","2","Two adjacent angles form a straight line. One angle is 3 times the other. Find both angles.",
     "Let smaller angle = x°. Larger = 3x°.\nLinear pair: x+3x=180°\n4x=180°\nx=45°\n\n"
     "Smaller=45°, Larger=135°\nVerification: 45+135=180° ✓","short"],
    ["6-maths-2","Lines and Angles","2","Write two properties each of a line, ray, and line segment.",
     "Line: (1) Extends infinitely in both directions — no endpoints.\n"
     "(2) Infinite length; cannot be measured.\n\n"
     "Ray: (1) Has one fixed starting point; extends infinitely one way.\n"
     "(2) Named from starting point — Ray AB starts at A.\n\n"
     "Line Segment: (1) Two endpoints; definite measurable length.\n"
     "(2) Shortest distance between two points.","short"],
    # 6-maths-3 WS1
    ["6-maths-3","Number Play","1","What is place value? Find place value and face value of 8 in 38,542.",
     "Place value: value of a digit based on its position.\n"
     "In 38,542: digit 8 is in the thousands place.\n"
     "Place value of 8 = 8 × 1000 = 8000\nFace value of 8 = 8 (always the digit itself).","short"],
    ["6-maths-3","Number Play","1","What is Kaprekar's constant? Show steps for any 4-digit number.",
     "Kaprekar's constant is 6174.\nExample for 5321:\n"
     "5321−1235=4086 → 8640−0468=8172 → 8721−1278=7443\n"
     "→ 7443−3447=3996 → 9963−3699=6264 → 6642−2466=4176\n"
     "→ 7641−1467=6174 ✓ Reached in 7 steps!","long"],
    ["6-maths-3","Number Play","1","Verify that 153 is an Armstrong number. Also check if 123 is.",
     "153 (3-digit number): 1³+5³+3³ = 1+125+27 = 153 = the number ✓ IS Armstrong.\n\n"
     "123: 1³+2³+3³ = 1+8+27 = 36 ≠ 123 ✗ NOT an Armstrong number.","short"],
    ["6-maths-3","Number Play","1","Round 47,836 to nearest (a) ten, (b) hundred, (c) thousand.",
     "(a) Nearest ten: units digit=6 (≥5) → round up → 47,840\n"
     "(b) Nearest hundred: tens digit=3 (<5) → round down → 47,800\n"
     "(c) Nearest thousand: hundreds digit=8 (≥5) → round up → 48,000","short"],
    ["6-maths-3","Number Play","1","Check if 8,142 reaches 6174 using Kaprekar's operation (show 2 steps).",
     "Step 1: Descending: 8421, Ascending: 1248. 8421−1248=7173\n"
     "Step 2: Descending: 7731, Ascending: 1377. 7731−1377=6354\n"
     "Step 3: 6543−3456=3087\nContinue until reaching 6174.","short"],
    # 6-maths-3 WS2
    ["6-maths-3","Number Play","2","Explain how rounding is used in everyday life. When is overestimation better?",
     "Rounding in daily life:\n"
     "(1) Shopping — rounding prices to nearest ₹10 for quick budgeting.\n"
     "(2) Time — saying a journey takes 'about 2 hours' instead of 1h 47m.\n"
     "(3) Population — 'about 12 lakh people' instead of 11,84,327.\n\n"
     "Overestimation is better when:\n• Planning expenses (budget more to avoid shortfall)\n"
     "• Estimating materials for construction\n• Medical dosing safety margins.","long"],
    ["6-maths-3","Number Play","2","Why is 0 considered an even number? Explain using the divisibility rule.",
     "A number is even if divisible by 2 with remainder 0.\n"
     "0 ÷ 2 = 0 with remainder 0.\nTherefore 0 satisfies the definition → 0 is EVEN.\n\n"
     "Even numbers follow the pattern: …−4,−2,0,2,4… — 0 fits between −2 and 2.","short"],
    ["6-maths-3","Number Play","2","Write the palindrome trick for 89. Show at least 3 steps.",
     "89+98=187 → 187+781=968 → 968+869=1837 → 1837+7381=9218\n"
     "→ 9218+8129=17347 → 17347+74371=91718 → …\n\n"
     "89 is known as a 'delayed palindrome' — it takes 24 steps to reach one!","long"],
    ["6-maths-3","Number Play","2","State and explain four divisibility rules with examples.",
     "1. By 2: last digit is 0,2,4,6 or 8. Example: 348 (last digit 8) ✓\n"
     "2. By 3: digit sum divisible by 3. Example: 453 → 4+5+3=12 → divisible by 3 ✓\n"
     "3. By 9: digit sum divisible by 9. Example: 729 → 7+2+9=18 → divisible by 9 ✓\n"
     "4. By 11: alternating digit sum difference is 0 or divisible by 11.\n"
     "   Example: 121 → 1−2+1=0 → divisible by 11 ✓","long"],
    ["6-maths-3","Number Play","2","Explain the difference between estimation and approximation with one example each.",
     "Estimation: rough calculation using mental arithmetic or rounding.\n"
     "Example: 23×48 ≈ 23×50 = ₹1150 (quick mental estimate).\n\n"
     "Approximation: finding a value close to exact answer to a stated accuracy.\n"
     "Example: Exact answer = 1104; approximated to nearest hundred = 1100.\n\n"
     "Estimation is a PROCESS; approximation is the RESULT of that process.","long"],
]

# Read chapter list directly from curriculum.ts — always in sync with the app.
# Pre-filled chapters (have sample content already): skip them from blank rows.
PREFILLED_IDS = {"6-maths-1", "6-maths-2", "6-maths-3"}

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

ALL_CHAPTERS          = load_chapters_from_curriculum()
ALL_REMAINING_CHAPTERS = [(cid, title) for cid, title in ALL_CHAPTERS
                          if cid not in PREFILLED_IDS]

# ══════════════════════════════════════════════════════════
# BUILD EXCEL
# ══════════════════════════════════════════════════════════

def build_notes_sheet(wb):
    ws = wb.create_sheet("Notes")
    headers = ["chapter_id","chapter_name","heading","body","highlight"]
    ws.append(headers)
    style_header_row(ws, len(headers))
    ws.row_dimensions[1].height = 22

    for row_data in NOTES_DATA:
        ws.append(row_data)
        r = ws.max_row
        ws.row_dimensions[r].height = 70
        fill = row_fill(row_data[0])
        for c in range(1, len(headers) + 1):
            cell = ws.cell(row=r, column=c)
            bold = (c == 3)  # heading column bold
            style_data_cell(cell, fill=fill, bold=bold)

    # Blank rows for remaining chapters
    for chid, chname in ALL_REMAINING_CHAPTERS:
        for _ in range(4):
            ws.append([chid, chname, "", "", ""])
            r = ws.max_row
            ws.row_dimensions[r].height = 50
            for c in range(1, len(headers) + 1):
                cell = ws.cell(row=r, column=c)
                if c <= 2:
                    style_data_cell(cell, fill=row_fill(chid), bold=(c==1), color="666666")
                else:
                    blank_row_style(cell)

    ws.column_dimensions["A"].width = 14
    ws.column_dimensions["B"].width = 24
    ws.column_dimensions["C"].width = 26
    ws.column_dimensions["D"].width = 52
    ws.column_dimensions["E"].width = 40
    ws.freeze_panes = "A2"


def build_snippets_sheet(wb):
    ws = wb.create_sheet("Snippets")
    headers = ["chapter_id","chapter_name","term","definition","formula","example"]
    ws.append(headers)
    style_header_row(ws, len(headers))
    ws.row_dimensions[1].height = 22

    for row_data in SNIPPETS_DATA:
        ws.append(row_data)
        r = ws.max_row
        ws.row_dimensions[r].height = 55
        fill = row_fill(row_data[0])
        for c in range(1, len(headers) + 1):
            bold = (c == 3)  # term column bold
            style_data_cell(ws.cell(row=r, column=c), fill=fill, bold=bold)

    for chid, chname in ALL_REMAINING_CHAPTERS:
        for _ in range(8):
            ws.append([chid, chname, "", "", "", ""])
            r = ws.max_row
            ws.row_dimensions[r].height = 40
            for c in range(1, len(headers) + 1):
                cell = ws.cell(row=r, column=c)
                if c <= 2:
                    style_data_cell(cell, fill=row_fill(chid), bold=(c==1), color="666666")
                else:
                    blank_row_style(cell)

    ws.column_dimensions["A"].width = 14
    ws.column_dimensions["B"].width = 24
    ws.column_dimensions["C"].width = 22
    ws.column_dimensions["D"].width = 46
    ws.column_dimensions["E"].width = 22
    ws.column_dimensions["F"].width = 30
    ws.freeze_panes = "A2"


def build_mcq_sheet(wb):
    ws = wb.create_sheet("MCQ")
    headers = ["chapter_id","chapter_name","worksheet","question",
               "option_a","option_b","option_c","option_d","answer","explanation"]
    ws.append(headers)
    style_header_row(ws, len(headers))
    # Answer column header — green
    ws.cell(row=1, column=9).fill = PatternFill("solid", fgColor=ANSWER_GREEN)
    ws.row_dimensions[1].height = 22

    for row_data in MCQ_DATA:
        ws.append(row_data)
        r = ws.max_row
        ws.row_dimensions[r].height = 55
        fill = row_fill(row_data[0])
        for c in range(1, len(headers) + 1):
            cell = ws.cell(row=r, column=c)
            if c == 9:  # answer
                style_data_cell(cell, fill=PatternFill("solid", fgColor="E6F4EA"),
                                bold=True, color=ANSWER_GREEN, center_align=True)
            elif c == 3:  # worksheet number
                style_data_cell(cell, fill=fill, center_align=True)
            else:
                style_data_cell(cell, fill=fill)

    for chid, chname in ALL_REMAINING_CHAPTERS:
        for ws_num in ["1", "2"]:
            for _ in range(10):
                ws.append([chid, chname, ws_num, "", "", "", "", "", "", ""])
                r = ws.max_row
                ws.row_dimensions[r].height = 40
                for c in range(1, len(headers) + 1):
                    cell = ws.cell(row=r, column=c)
                    if c <= 3:
                        style_data_cell(cell, fill=row_fill(chid), bold=(c==1), color="666666",
                                        center_align=(c==3))
                    else:
                        blank_row_style(cell)

    ws.column_dimensions["A"].width = 14
    ws.column_dimensions["B"].width = 22
    ws.column_dimensions["C"].width = 10
    ws.column_dimensions["D"].width = 44
    ws.column_dimensions["E"].width = 20
    ws.column_dimensions["F"].width = 20
    ws.column_dimensions["G"].width = 20
    ws.column_dimensions["H"].width = 20
    ws.column_dimensions["I"].width = 9
    ws.column_dimensions["J"].width = 44
    ws.freeze_panes = "A2"


def build_qa_sheet(wb):
    ws = wb.create_sheet("QA")
    headers = ["chapter_id","chapter_name","worksheet","question","answer","type"]
    ws.append(headers)
    style_header_row(ws, len(headers))
    ws.row_dimensions[1].height = 22

    for row_data in QA_DATA:
        ws.append(row_data)
        r = ws.max_row
        ws.row_dimensions[r].height = 80
        fill = row_fill(row_data[0])
        for c in range(1, len(headers) + 1):
            cell = ws.cell(row=r, column=c)
            if c == 6:  # type column
                type_color = "1A73E8" if row_data[5] == "short" else "F59E0B"
                style_data_cell(cell, fill=PatternFill("solid", fgColor="EAF1FB"),
                                bold=True, color=type_color, center_align=True)
            elif c == 3:
                style_data_cell(cell, fill=fill, center_align=True)
            else:
                style_data_cell(cell, fill=fill)

    for chid, chname in ALL_REMAINING_CHAPTERS:
        for ws_num in ["1", "2"]:
            for _ in range(5):
                ws.append([chid, chname, ws_num, "", "", "short"])
                r = ws.max_row
                ws.row_dimensions[r].height = 50
                for c in range(1, len(headers) + 1):
                    cell = ws.cell(row=r, column=c)
                    if c <= 3:
                        style_data_cell(cell, fill=row_fill(chid), bold=(c==1), color="666666",
                                        center_align=(c==3))
                    elif c == 6:
                        style_data_cell(cell, fill=blank_fill(), color="BDBDBD",
                                        center_align=True)
                    else:
                        blank_row_style(cell)

    ws.column_dimensions["A"].width = 14
    ws.column_dimensions["B"].width = 24
    ws.column_dimensions["C"].width = 10
    ws.column_dimensions["D"].width = 44
    ws.column_dimensions["E"].width = 50
    ws.column_dimensions["F"].width = 10
    ws.freeze_panes = "A2"


def main():
    wb = openpyxl.Workbook()
    wb.remove(wb.active)  # remove default empty sheet

    print("Building Notes tab...")
    build_notes_sheet(wb)
    print("Building Snippets tab...")
    build_snippets_sheet(wb)
    print("Building MCQ tab...")
    build_mcq_sheet(wb)
    print("Building QA tab...")
    build_qa_sheet(wb)

    out_path = "templates/Nucleus Content.xlsx"
    wb.save(out_path)

    import os
    size_kb = os.path.getsize(out_path) // 1024
    print(f"\n✅  Saved → {out_path}  ({size_kb} KB)")
    print(f"    Tabs: Notes | Snippets | MCQ | QA")
    print(f"    Chapters pre-filled: 6-maths-1, 6-maths-2, 6-maths-3")
    print(f"    Blank rows ready: {len(ALL_REMAINING_CHAPTERS)} more chapters")
    print(f"\n    → Upload to Google Drive → open with Google Sheets")
    print(f"    → Or import directly at sheets.google.com")

if __name__ == "__main__":
    main()
