export interface Note {
  heading: string;
  body: string;
  highlight?: string;
}

export interface Snippet {
  term: string;
  definition: string;
  formula?: string;
  example?: string;
}

export interface MCQQuestion {
  q: string;
  options: string[];
  answer: number;
  explanation: string;
}

export interface QAQuestion {
  q: string;
  a: string;
  type: "short" | "long";
}

export interface ChapterContent {
  notes: Note[];
  snippets: Snippet[];
  mcq: MCQQuestion[][];   // [worksheet1[], worksheet2[]]
  qa: QAQuestion[][];     // [worksheet1[], worksheet2[]]
}

// Full content for 6-maths-1: Patterns in Mathematics
const content: Record<string, ChapterContent> = {
  "6-maths-1": {
    notes: [
      {
        heading: "What is a Pattern?",
        body: "A pattern is an arrangement of numbers, shapes, or colours that follows a specific rule. Patterns help us predict what comes next and understand the structure of mathematics.",
        highlight: "Key Idea: Every pattern has a rule. Find the rule, predict the next term.",
      },
      {
        heading: "Number Sequences",
        body: "A number sequence is a list of numbers arranged according to a rule.\n\nExamples:\n• 2, 4, 6, 8, 10 … (add 2 each time — even numbers)\n• 1, 4, 9, 16, 25 … (perfect squares: 1², 2², 3², 4², 5²)\n• 1, 1, 2, 3, 5, 8, 13 … (Fibonacci: each term = sum of two before it)",
        highlight: "Triangular numbers: 1, 3, 6, 10, 15 … Formula: n(n+1)/2",
      },
      {
        heading: "Shape Patterns",
        body: "Patterns appear in geometric arrangements too:\n\n• Square numbers can be shown as square dot grids (1, 4, 9, 16…)\n• Triangular numbers form triangle arrangements of dots\n• Pascal's Triangle contains rows of numbers where each is the sum of the two above it",
      },
      {
        heading: "Patterns in Operations",
        body: "Patterns help simplify calculations:\n\n• 9 × 1 = 9\n• 9 × 2 = 18\n• 9 × 3 = 27\n(The tens digit increases by 1, units digit decreases by 1)\n\nMultiples of 11: 11, 22, 33, 44 … (both digits are same)\n\nDivisibility rule for 9: if sum of digits is divisible by 9, the number is divisible by 9.",
        highlight: "Observation skill is the most important math tool — patterns train your eyes to see structure.",
      },
    ],
    snippets: [
      { term: "Pattern", definition: "An arrangement that follows a fixed rule and can be extended predictably.", example: "2, 4, 6, 8 — rule: add 2" },
      { term: "Sequence", definition: "An ordered list of numbers or objects following a rule.", example: "1, 4, 9, 16, 25 (perfect squares)" },
      { term: "Triangular Number", definition: "Numbers that can form a triangular dot arrangement.", formula: "Tₙ = n(n+1)/2", example: "T₄ = 4×5/2 = 10" },
      { term: "Square Number", definition: "The product of a number multiplied by itself.", formula: "n² = n × n", example: "4² = 16" },
      { term: "Fibonacci Sequence", definition: "A sequence where each term is the sum of the two previous terms starting from 1, 1.", example: "1, 1, 2, 3, 5, 8, 13, 21 …" },
      { term: "Pascal's Triangle", definition: "A triangular arrangement of numbers where each entry is the sum of the two entries above it.", example: "Row 3: 1, 3, 3, 1" },
      { term: "Even Numbers", definition: "Numbers divisible by 2.", formula: "2n (for any whole number n)", example: "2, 4, 6, 8, 10 …" },
      { term: "Odd Numbers", definition: "Numbers not divisible by 2.", formula: "2n − 1", example: "1, 3, 5, 7, 9 …" },
    ],
    mcq: [
      [
        { q: "What is the next number in the sequence: 1, 4, 9, 16, __?", options: ["20", "25", "24", "21"], answer: 1, explanation: "This is the sequence of perfect squares: 1², 2², 3², 4², 5² = 25" },
        { q: "The 5th triangular number is:", options: ["10", "12", "15", "8"], answer: 2, explanation: "T₅ = 5×6/2 = 15. Triangular numbers: 1, 3, 6, 10, 15" },
        { q: "Which of these is a Fibonacci number?", options: ["14", "13", "11", "16"], answer: 1, explanation: "Fibonacci: 1,1,2,3,5,8,13,21… 13 is a Fibonacci number" },
        { q: "What pattern do multiples of 9 follow in their digit sums?", options: ["Always equal 9", "Always divisible by 9", "Always odd", "Always even"], answer: 1, explanation: "Sum of digits of any multiple of 9 is always divisible by 9 (e.g. 18→1+8=9, 27→2+7=9)" },
        { q: "Square numbers are also called:", options: ["Triangular numbers", "Perfect squares", "Prime numbers", "Fibonacci numbers"], answer: 1, explanation: "Numbers like 1, 4, 9, 16 formed by n×n are called perfect squares" },
        { q: "What is the 4th triangular number?", options: ["6", "8", "10", "12"], answer: 2, explanation: "T₄ = 4×5/2 = 10" },
        { q: "In the Fibonacci sequence 1, 1, 2, 3, 5, 8, what comes next?", options: ["12", "11", "13", "14"], answer: 2, explanation: "8 + 5 = 13" },
        { q: "How many dots are in a triangular arrangement with 4 rows?", options: ["8", "10", "12", "6"], answer: 1, explanation: "Row 1+2+3+4 = 10 dots = T₄" },
        { q: "What is 2n − 1 when n = 5?", options: ["8", "9", "10", "11"], answer: 1, explanation: "2(5)−1 = 10−1 = 9. This gives the 5th odd number." },
        { q: "Which sequence represents square numbers?", options: ["1,2,3,4,5", "1,3,6,10,15", "1,4,9,16,25", "2,4,6,8,10"], answer: 2, explanation: "1²=1, 2²=4, 3²=9, 4²=16, 5²=25 are perfect squares" },
      ],
      [
        { q: "Assertion: 36 is a perfect square. Reason: 36 = 6 × 6.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], answer: 0, explanation: "36 = 6² is correct and the reason correctly explains why it is a perfect square" },
        { q: "Assertion: The sum of first n odd numbers = n². Reason: 1+3+5 = 9 = 3².", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false, R true"], answer: 0, explanation: "The pattern holds: sum of first n odd numbers is always n²" },
        { q: "Assertion: Every even number is a triangular number. Reason: 2, 4, 6 are even.", options: ["A true, R false", "Both true", "A false, R true", "Both false"], answer: 2, explanation: "Not every even number is triangular. Triangular numbers are 1,3,6,10,15… not all even" },
        { q: "Assertion: Fibonacci numbers grow exponentially. Reason: Each term is the product of the two before it.", options: ["A true, R false", "Both A and R true, R explains A", "Both false", "A false, R true"], answer: 0, explanation: "Fibonacci does grow roughly exponentially, but the reason is wrong — each term is the SUM, not product, of the two before" },
        { q: "Assertion: The number 0 is even. Reason: 0 = 2 × 0.", options: ["Both A and R true, R explains A", "A true, R false", "A false, R true", "Both false"], answer: 0, explanation: "0 is even because it is divisible by 2, and 0 = 2×0 correctly shows this" },
        { q: "Assertion: Pascal's triangle rows sum to powers of 2. Reason: Row 3 sums to 8 = 2³.", options: ["Both A and R true, R explains A", "A false, R true", "Both false", "A true, R false"], answer: 0, explanation: "Row sums: 1,2,4,8,16… = 2⁰,2¹,2²,2³… Row 3 (1+3+3+1)=8=2³ ✓" },
        { q: "Assertion: 100 is both a perfect square and even. Reason: 100 = 10 × 10 and ends in 0.", options: ["Both A and R true, R explains A", "Both true, R doesn't explain A", "A true, R false", "A false"], answer: 1, explanation: "Both are true. It is a perfect square (10²=100) and even. But ending in 0 only partially explains evenness" },
        { q: "Assertion: Triangular numbers are always odd. Reason: T₃ = 6 which is even.", options: ["A false, R true", "Both true", "A true, R false", "Both false"], answer: 0, explanation: "Triangular numbers are NOT always odd (T₃=6 is even), so the assertion is false" },
        { q: "Assertion: Adding two odd numbers always gives an even number. Reason: 3 + 5 = 8.", options: ["Both A and R true, R explains A", "A false, R true", "Both false", "A true, R false"], answer: 0, explanation: "Odd + Odd = Even always. 3+5=8 correctly supports this" },
        { q: "Assertion: The sequence 2,4,8,16 is a Fibonacci sequence. Reason: Each term doubles.", options: ["A false, R true", "Both true", "A true, R false", "Both false"], answer: 0, explanation: "This is a geometric sequence (each term ×2), not Fibonacci. The reason about doubling is correct but it doesn't make it Fibonacci" },
      ],
    ],
    qa: [
      [
        { q: "What is a pattern? Give two examples from daily life.", a: "A pattern is an arrangement that follows a fixed rule and can be extended. Examples: (1) Days of the week repeat in the pattern Mon, Tue, Wed… (2) Traffic lights follow the pattern: Red → Green → Yellow → Red.", type: "short" },
        { q: "Write the first 6 triangular numbers and show how they are formed.", a: "Triangular numbers: 1, 3, 6, 10, 15, 21.\nFormed by: T₁=1, T₂=1+2=3, T₃=1+2+3=6, T₄=1+2+3+4=10, T₅=15, T₆=21.\nFormula: Tₙ = n(n+1)/2.", type: "short" },
        { q: "What is the Fibonacci sequence? Write its first 10 terms.", a: "The Fibonacci sequence starts with 1, 1 and each next term is the sum of the two previous terms.\nFirst 10 terms: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55.\nRule: Fₙ = Fₙ₋₁ + Fₙ₋₂", type: "short" },
        { q: "Find the sum of the first 5 odd numbers. Is there a pattern?", a: "First 5 odd numbers: 1, 3, 5, 7, 9.\nSum = 1+3+5+7+9 = 25 = 5².\nPattern: The sum of the first n odd numbers is always n². This is the connection between odd numbers and perfect squares.", type: "short" },
        { q: "Complete the pattern and state the rule: 3, 6, 12, 24, __, __", a: "Next terms: 48, 96.\nRule: Each term is multiplied by 2. This is a geometric sequence with common ratio 2.\n3×2=6, 6×2=12, 12×2=24, 24×2=48, 48×2=96.", type: "short" },
        { q: "Look at this pattern: 1×1=1, 11×11=121, 111×111=12321. What is 1111×1111?", a: "1111×1111 = 1234321.\nPattern: The digits go up from 1 to n then back down.\n1111² has 4 ones, so: 1, 2, 3, 4, 3, 2, 1 → 1234321.", type: "short" },
        { q: "What is Pascal's Triangle? Draw the first 5 rows.", a: "Pascal's Triangle is a triangular arrangement of numbers where each number is the sum of the two numbers directly above it.\n\nRow 0:          1\nRow 1:        1   1\nRow 2:      1   2   1\nRow 3:    1   3   3   1\nRow 4:  1   4   6   4   1\n\nProperty: Each row sums to a power of 2.", type: "long" },
        { q: "Explain with example how patterns help in multiplication tables.", a: "Patterns make multiplication easier to remember and extend:\n\n9 × table: 9, 18, 27, 36, 45, 54, 63, 72, 81, 90\nPatterns: (1) Tens digit increases by 1 each time. (2) Units digit decreases by 1. (3) Sum of digits always equals 9.\n\n11 × table: 11, 22, 33 … 99 (both digits same)\n\n5 × table: always ends in 0 or 5.\n\nThese patterns help us verify and quickly calculate without memorising each fact.", type: "long" },
        { q: "The square numbers are 1, 4, 9, 16, 25. Find the differences between consecutive square numbers. What pattern do you see?", a: "Differences between consecutive square numbers:\n4−1=3, 9−4=5, 16−9=7, 25−16=9.\nDifferences: 3, 5, 7, 9 … (consecutive odd numbers)\n\nExplanation: (n+1)² − n² = n²+2n+1−n² = 2n+1, which is always an odd number.\n\nSo the differences between consecutive perfect squares are always consecutive odd numbers.", type: "long" },
        { q: "Identify and describe two mathematical patterns you observe in nature.", a: "Pattern 1 — Fibonacci in Flowers: Sunflower seeds are arranged in spirals. Counting the spirals going clockwise and anticlockwise gives consecutive Fibonacci numbers (e.g., 21 and 34). The same pattern appears in pine cones and pineapples.\n\nPattern 2 — Symmetry in Snowflakes: Every snowflake has six-fold rotational symmetry — rotating it by 60° gives the same shape. This geometric pattern appears because of the hexagonal crystal structure of ice molecules.", type: "long" },
      ],
      [
        { q: "Define: (a) Even number (b) Odd number (c) Square number", a: "(a) Even number: A whole number divisible by 2. Examples: 2, 4, 6, 8, 10. Formula: 2n.\n(b) Odd number: A whole number not divisible by 2. Examples: 1, 3, 5, 7, 9. Formula: 2n−1.\n(c) Square number: A number obtained by multiplying a whole number by itself. Examples: 1, 4, 9, 16. Formula: n².", type: "short" },
        { q: "Is 45 a triangular number? Verify using the formula.", a: "Using Tₙ = n(n+1)/2, we need n(n+1) = 90.\nTry n=9: 9×10=90. ✓\nSo T₉ = 90/2 = 45.\nYes, 45 is the 9th triangular number.", type: "short" },
        { q: "Write the rule for each: (a) 5, 10, 20, 40 (b) 100, 90, 80, 70", a: "(a) 5, 10, 20, 40 — Rule: multiply by 2 (geometric sequence, ratio = 2). Next: 80, 160.\n(b) 100, 90, 80, 70 — Rule: subtract 10 (arithmetic sequence, difference = −10). Next: 60, 50.", type: "short" },
        { q: "Using patterns, calculate 999 × 999 without a calculator.", a: "999 = 1000 − 1\n999 × 999 = (1000−1)² = 1000² − 2×1000×1 + 1²\n= 1,000,000 − 2,000 + 1 = 998,001\n\nAlternatively, using the palindrome pattern:\n9² = 81\n99² = 9801\n999² = 998001 ✓", type: "short" },
        { q: "A hall has seats arranged in rows: 1st row has 3 seats, 2nd has 5, 3rd has 7. How many seats in the 10th row? Total seats in 10 rows?", a: "Row pattern: 3, 5, 7, 9 … (arithmetic, difference = 2)\nRow n: aₙ = 3 + (n−1)×2 = 2n+1\nRow 10: 2(10)+1 = 21 seats.\n\nTotal in 10 rows = sum of 3+5+7+…+21\n= 10 terms of arithmetic series\n= (10/2)(3+21) = 5×24 = 120 seats.", type: "long" },
        { q: "Draw Pascal's Triangle to 6 rows. List 3 patterns you can find in it.", a: "Pascal's Triangle (6 rows):\n         1\n        1 1\n       1 2 1\n      1 3 3 1\n     1 4 6 4 1\n    1 5 10 10 5 1\n\nPatterns:\n1. Symmetry: Each row reads the same left to right and right to left.\n2. Row sums are powers of 2: 1, 2, 4, 8, 16, 32 (Row n sums to 2ⁿ).\n3. Triangular numbers appear in the 3rd diagonal: 1, 3, 6, 10, 15 …\n(Bonus: Fibonacci numbers appear as diagonal sums)", type: "long" },
        { q: "Explain the connection between square numbers and sums of odd numbers.", a: "Connection: The sum of the first n odd numbers always equals n².\n\nProof by pattern:\n1 = 1 = 1²\n1+3 = 4 = 2²\n1+3+5 = 9 = 3²\n1+3+5+7 = 16 = 4²\n1+3+5+7+9 = 25 = 5²\n\nVisual proof: Each square number can be built by adding an L-shaped border of odd dots around the previous square. The L-shape always has an odd number of dots.\n\nAlgebraic proof: (n+1)² = n² + (2n+1), and 2n+1 is the (n+1)th odd number.", type: "long" },
        { q: "What number comes next in the sequence: 1, 2, 4, 7, 11, 16, __? Explain the pattern.", a: "Next term: 22.\nDifferences between terms: 1, 2, 3, 4, 5 (increasing by 1 each time).\n16 + 6 = 22.\nThis is a second-order arithmetic sequence — the differences themselves form an arithmetic sequence.", type: "short" },
        { q: "Two patterns: A = 1, 3, 5, 7 … and B = 0, 1, 4, 9, 16 … What is the 50th term of each?", a: "Pattern A (odd numbers): aₙ = 2n−1\n50th term = 2(50)−1 = 99.\n\nPattern B (square numbers, starting n=0): bₙ = n²\n50th term (n=49): 49² = 2401.", type: "short" },
        { q: "How does understanding patterns help in real-life problem solving? Give two examples.", a: "Understanding patterns helps us predict, organise, and solve problems efficiently:\n\nExample 1 — EMI Calculation: If a shopkeeper sells goods in months: ₹500, ₹1000, ₹1500… (arithmetic pattern adding ₹500), we can calculate any month's sale without listing all months.\n\nExample 2 — Population Growth: If a town's population doubles every 10 years (1000, 2000, 4000…), recognising the geometric pattern helps predict future population and plan infrastructure.\n\nPatterns save time, reduce errors, and allow us to generalise from specific observations — the core of mathematical thinking.", type: "long" },
        { q: "Create your own pattern using shapes or numbers. Write its rule and first 6 terms.", a: "Sample answer:\nPattern: 3, 7, 13, 21, 31, 43\nRule: Differences are consecutive even numbers: +4, +6, +8, +10, +12\nSo each term increases by 2 more than the previous increase.\n\n(Accept any valid pattern with a clear rule. Award marks for: correct rule identification, correct extension, and explanation.)", type: "long" },
      ],
    ],
  },
};

import { class6Content } from "./class6Content";
import { class7Content } from "./class7content";
import { generatedContent } from "./generatedContent";

const allContent: Record<string, ChapterContent> = {
  ...content,
  ...class6Content,
  ...class7Content,
  ...generatedContent, // sheet data wins — always highest priority
};

export function getChapterContent(id: string): ChapterContent | null {
  return allContent[id] ?? null;
}

// Fallback content for chapters without full content
export function getDefaultContent(chapterTitle: string): ChapterContent {
  return {
    notes: [
      {
        heading: `Introduction to ${chapterTitle}`,
        body: `This chapter introduces the key concepts of ${chapterTitle} as per the NCERT 2026 curriculum. Study the definitions carefully and attempt the practice worksheets to test your understanding.`,
        highlight: "Read the NCERT textbook alongside these notes for best results.",
      },
      {
        heading: "Key Concepts",
        body: "Detailed notes for this chapter are being prepared by your teacher and will be available shortly. In the meantime, watch the video explanation and attempt the worksheets.",
      },
      {
        heading: "Important Points to Remember",
        body: "• Always read the chapter from your NCERT textbook first\n• Make your own notes while watching the video\n• Attempt all practice questions\n• Use the Ask Doubt chatbot if you get stuck",
        highlight: "Practice is the key to mastering any concept in Mathematics and Science.",
      },
    ],
    snippets: [
      { term: "Key Term 1", definition: `Core definition related to ${chapterTitle}. Refer to NCERT textbook for complete explanation.`, example: "See NCERT examples" },
      { term: "Key Term 2", definition: "Important concept from this chapter. Note the precise scientific/mathematical definition.", formula: "Refer textbook for formula" },
      { term: "Key Term 3", definition: "Another important definition. Understanding these terms is essential for answering exam questions correctly." },
    ],
    mcq: [
      [
        { q: `Which chapter covers ${chapterTitle}?`, options: ["Chapter 1", "Chapter 2", "Depends on class", "Not in syllabus"], answer: 2, explanation: "Chapter placement depends on the class. Refer to your NCERT textbook." },
        { q: "Where can you find detailed NCERT solutions?", options: ["Only in school", "Ask Doubt chatbot", "Both textbook and chatbot", "Not available"], answer: 2, explanation: "Use the textbook for primary study and the Ask Doubt chatbot for help when stuck." },
      ],
      [
        { q: `Assertion: ${chapterTitle} is part of NCERT 2026 syllabus. Reason: NCERT revised books in 2026.`, options: ["Both A and R true, R explains A", "A true, R false", "A false, R true", "Both false"], answer: 0, explanation: "Both statements are correct." },
      ],
    ],
    qa: [
      [
        { q: `What is the main topic of the chapter "${chapterTitle}"?`, a: `This chapter deals with the fundamental concepts of ${chapterTitle} as defined in the NCERT 2026 curriculum. Please refer to your textbook for detailed explanations and examples.`, type: "short" },
        { q: "How should you prepare for this chapter?", a: "Step 1: Read the NCERT chapter thoroughly.\nStep 2: Watch the video explanation provided.\nStep 3: Study the chapter notes and snippets.\nStep 4: Attempt both MCQ and Q&A worksheets.\nStep 5: Use the Ask Doubt chatbot for any confusion.", type: "short" },
      ],
      [
        { q: `Why is ${chapterTitle} important for future studies?`, a: `The concepts in ${chapterTitle} form the foundation for higher-level topics in Classes 9-10 and are also important for competitive exam preparation (JEE/NEET foundation). Understanding these basics thoroughly now will save significant effort later.`, type: "long" },
      ],
    ],
  };
}
