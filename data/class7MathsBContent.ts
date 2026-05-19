import type { ChapterContent } from "./content";

export const class7MathsBContent: Record<string, ChapterContent> = {
  "7-maths-9": {
    notes: [
      {
        heading: "Collecting and Organising Data",
        body: "Data is a collection of facts or information. Raw data needs to be organised to find patterns.\n\nTypes of Data:\n• Ungrouped data: individual values listed as collected\n• Grouped data: values arranged in classes or intervals\n\nFrequency: The number of times a value occurs in data.\nFrequency Distribution Table: A table showing each value and how often it occurs.\n\nExample: Marks of 10 students: 45, 62, 78, 45, 90, 62, 45, 78, 62, 90\nValue | Tally | Frequency\n45    | III   | 3\n62    | III   | 3\n78    | II    | 2\n90    | II    | 2",
        highlight: "Organising data into a frequency table is the first step in data analysis.",
      },
      {
        heading: "Measures of Central Tendency: Mean, Median, Mode",
        body: "These three values represent the \"centre\" of a data set.\n\nMEAN (Arithmetic Average):\nMean = Sum of all observations / Number of observations\nExample: Data = 4, 7, 2, 9, 3\nMean = (4+7+2+9+3) / 5 = 25/5 = 5\n\nMEDIAN (Middle Value):\nArrange data in ascending order, then:\n• Odd number of values: middle value is the median\n• Even number of values: median = average of two middle values\nExample (odd): 2, 3, 4, 7, 9 → Median = 4\nExample (even): 2, 3, 4, 7, 9, 11 → Median = (4+7)/2 = 5.5\n\nMODE (Most Frequent Value):\nThe value that appears most often. A data set can have one mode, more than one mode, or no mode.\nExample: 3, 5, 3, 7, 8, 3, 5 → Mode = 3 (appears 3 times)",
        highlight: "Mean uses all values. Median is the middle. Mode is the most common.",
      },
      {
        heading: "Bar Graphs",
        body: "A bar graph displays data using rectangular bars of equal width. The height (or length) of each bar represents the frequency or value.\n\nDrawing a Bar Graph:\n1. Draw horizontal (x-axis) and vertical (y-axis) axes.\n2. Label the x-axis with categories and y-axis with the scale.\n3. Choose a suitable scale for the y-axis.\n4. Draw bars of equal width with gaps between them.\n5. Title the graph.\n\nDouble Bar Graph: Compares two sets of data side by side using bars of different colours.\n\nExample: Favourite fruits of 30 students — Mango: 12, Apple: 8, Banana: 6, Grapes: 4",
        highlight: "Bars should be of equal width and equally spaced. Always label axes and give a title.",
      },
      {
        heading: "Pie Charts (Circle Graphs)",
        body: "A pie chart shows data as sectors of a circle. The whole circle = 360° = 100% of data.\n\nCalculating Sector Angle:\nAngle = (Frequency / Total) × 360°\n\nExample: 60 students were asked their favourite subject:\n• Maths: 20 → Angle = (20/60) × 360 = 120°\n• Science: 15 → Angle = (15/60) × 360 = 90°\n• English: 10 → Angle = (10/60) × 360 = 60°\n• History: 15 → Angle = (15/60) × 360 = 90°\nTotal = 120+90+60+90 = 360° ✓\n\nReading a pie chart: Compare sector sizes to understand proportions.",
        highlight: "Sum of all sector angles in a pie chart must equal 360°.",
      },
    ],
    snippets: [
      { term: "Mean", definition: "The arithmetic average of a set of values.", formula: "Mean = (Sum of all observations) / (Number of observations)", example: "Data: 5, 8, 3, 10, 4 → Mean = 30/5 = 6" },
      { term: "Median", definition: "The middle value of an ordered data set.", formula: "For odd n: middle term. For even n: average of two middle terms.", example: "Ordered data: 2, 5, 7, 10, 13 → Median = 7" },
      { term: "Mode", definition: "The value that appears most frequently in a data set.", example: "Data: 3, 7, 3, 9, 3, 7 → Mode = 3" },
      { term: "Frequency", definition: "The number of times a particular value occurs in a data set.", example: "In data 2, 3, 2, 5, 2: frequency of 2 is 3" },
      { term: "Bar Graph", definition: "A graph using rectangular bars to display categorical data, where bar height represents frequency.", example: "A bar graph comparing monthly rainfall across 6 months" },
      { term: "Pie Chart", definition: "A circular chart divided into sectors, each representing a proportion of the whole.", formula: "Sector angle = (value/total) × 360°", example: "If 15 out of 60 chose cricket: angle = (15/60) × 360 = 90°" },
      { term: "Range", definition: "The difference between the highest and lowest values in a data set.", formula: "Range = Maximum value - Minimum value", example: "Data: 3, 7, 12, 5, 9 → Range = 12 - 3 = 9" },
    ],
    mcq: [
      [
        {
          q: "The mean of 6, 8, 11, 14, 16 is:",
          options: ["11", "10", "12", "13"],
          answer: 0,
          explanation: "Sum = 6+8+11+14+16 = 55. Number of values = 5. Mean = 55/5 = 11."
        },
        {
          q: "The median of 3, 7, 2, 9, 5 is:",
          options: ["5", "7", "6", "4"],
          answer: 0,
          explanation: "Arranged in order: 2, 3, 5, 7, 9. There are 5 values, so the median is the 3rd value = 5."
        },
        {
          q: "The mode of 4, 6, 4, 8, 4, 6, 9 is:",
          options: ["4", "6", "9", "8"],
          answer: 0,
          explanation: "4 appears 3 times, 6 appears 2 times, 8 and 9 each appear once. Mode = 4 (most frequent)."
        },
        {
          q: "In a pie chart, the total of all sector angles equals:",
          options: ["180°", "270°", "360°", "90°"],
          answer: 2,
          explanation: "A pie chart represents the whole data set as a complete circle, and a circle has 360°."
        },
        {
          q: "If 25 out of 100 students prefer football, the sector angle in a pie chart is:",
          options: ["25°", "90°", "45°", "75°"],
          answer: 1,
          explanation: "Sector angle = (25/100) × 360° = 0.25 × 360° = 90°."
        },
        {
          q: "The median of 4, 8, 12, 16 is:",
          options: ["8", "12", "10", "11"],
          answer: 2,
          explanation: "Even number of values: median = average of 2nd and 3rd values = (8+12)/2 = 20/2 = 10."
        },
        {
          q: "Which measure of central tendency is most affected by an extremely large value?",
          options: ["Mode", "Median", "Mean", "Range"],
          answer: 2,
          explanation: "Mean uses all values in its calculation, so a very large or very small value significantly changes the mean."
        },
        {
          q: "A bar graph is best used when:",
          options: ["Showing proportions of a whole", "Comparing quantities across categories", "Showing temperature change over time", "Displaying very large data sets"],
          answer: 1,
          explanation: "Bar graphs are ideal for comparing discrete categories, such as favourite sports of students in different classes."
        },
        {
          q: "The mean of five numbers is 12. If four of the numbers are 10, 14, 11, 13, the fifth number is:",
          options: ["12", "10", "14", "15"],
          answer: 0,
          explanation: "Sum of all five = 12 × 5 = 60. Sum of four known = 10+14+11+13 = 48. Fifth = 60 - 48 = 12."
        },
        {
          q: "In a frequency distribution, the class with the highest frequency is called:",
          options: ["Modal class", "Median class", "Mean class", "Dominant class"],
          answer: 0,
          explanation: "The modal class is the class interval with the highest frequency, from which the mode is estimated."
        }
      ],
      [
        {
          q: "Assertion (A): The mean of 10, 20, 30 is 20. Reason (R): Mean is the middle value of ordered data.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 2,
          explanation: "A is true: (10+20+30)/3 = 60/3 = 20. R is false: the middle value of ordered data is the median, not the mean."
        },
        {
          q: "Assertion (A): Mode is the most appropriate measure when data has repeated values. Reason (R): Mode identifies the value that occurs most frequently.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 0,
          explanation: "Both are true. Mode is useful for identifying the most common value, which is precisely what the reason states."
        },
        {
          q: "Assertion (A): A pie chart can have sector angles summing to more than 360°. Reason (R): Each category can take up more than a quarter of the circle.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 3,
          explanation: "A is false: sector angles must sum to exactly 360°. R is true: individual sectors can exceed 90° (a quarter), but the total is still 360°."
        },
        {
          q: "Assertion (A): The median is not affected by extreme values. Reason (R): Median only depends on the middle value(s), not on the actual values at the extremes.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 0,
          explanation: "Both true. Unlike mean, the median is resistant to outliers because it only uses the position of the middle term."
        },
        {
          q: "Assertion (A): A double bar graph can represent only one type of data. Reason (R): Double bar graphs use two bars per category to compare two data sets.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 3,
          explanation: "A is false: a double bar graph is specifically used to compare two sets of data side by side. R correctly explains the purpose."
        },
        {
          q: "Assertion (A): If all values in a data set are equal, the mean, median and mode are all the same. Reason (R): When all values are equal, there is no variation in the data.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 1,
          explanation: "Both are true. If all values equal k, then mean = k, median = k, and mode = k. However, R (no variation) is a separate fact and does not directly explain why all three measures are equal."
        },
        {
          q: "Assertion (A): The range of 5, 10, 15, 20 is 15. Reason (R): Range = Maximum - Minimum.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 0,
          explanation: "Range = 20 - 5 = 15. The reason correctly defines range. Both are true and R explains A."
        },
        {
          q: "Assertion (A): A data set must always have exactly one mode. Reason (R): Mode is the value with the highest frequency.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 3,
          explanation: "A is false: a data set can be bimodal (two modes), multimodal, or have no mode if all values are equally frequent. R correctly defines mode."
        },
        {
          q: "Assertion (A): Pie charts are used to show how a whole is divided into parts. Reason (R): Each sector of the pie chart represents a fraction of 360°.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 0,
          explanation: "Both are true and logically connected. Pie charts show part-to-whole relationships, and each sector angle = (part/whole) × 360°."
        },
        {
          q: "Assertion (A): Bar graphs must always start the y-axis from 0. Reason (R): Starting from a non-zero value can make small differences appear visually large.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 1,
          explanation: "Both statements are true. Bar graphs should start from 0 for accurate visual comparison, and the reason (misleading differences) is also true, but it explains why rather than directly explaining the rule."
        },
        {
          q: "Assertion (A): The mean of the first 5 natural numbers is 3. Reason (R): The sum of first n natural numbers is n(n+1)/2.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 0,
          explanation: "Sum of first 5 natural numbers = 5×6/2 = 15. Mean = 15/5 = 3. Both are true and R provides the formula used to derive A."
        }
      ]
    ],
    qa: [
      [
        {
          q: "Find the mean, median and mode of: 15, 18, 12, 20, 15, 18, 15, 22.",
          a: "Arranging in order: 12, 15, 15, 15, 18, 18, 20, 22.\n\nMean = (12+15+15+15+18+18+20+22) / 8 = 135 / 8 = 16.875\n\nMedian: 8 values (even), so median = average of 4th and 5th values = (15+18)/2 = 33/2 = 16.5\n\nMode: 15 appears 3 times (most frequent). Mode = 15",
          type: "short"
        },
        {
          q: "In a class of 40 students, 10 like cricket, 15 like football, 8 like badminton, and 7 like chess. Draw a pie chart showing this data (calculate sector angles).",
          a: "Total students = 40\n\nCricket: (10/40) x 360 = 90 degrees\nFootball: (15/40) x 360 = 135 degrees\nBadminton: (8/40) x 360 = 72 degrees\nChess: (7/40) x 360 = 63 degrees\n\nCheck: 90 + 135 + 72 + 63 = 360 degrees. Correct!\n\nDraw a circle, use a protractor to mark each sector starting from the same radius, label each sector with the sport and percentage.",
          type: "short"
        },
        {
          q: "What is the difference between a bar graph and a pie chart? When would you use each?",
          a: "Bar Graph:\n- Uses rectangular bars to represent data\n- Best for comparing quantities across different categories\n- Easy to read exact values from the scale\n- Example: Comparing runs scored by 5 batsmen\n\nPie Chart:\n- Uses sectors of a circle to represent data\n- Best for showing how a whole is divided into parts (proportions/percentages)\n- Cannot easily read exact values\n- Example: Showing what fraction of the school day is spent on each subject\n\nUse a bar graph to compare; use a pie chart to show proportions.",
          type: "short"
        },
        {
          q: "The mean of 5 numbers is 16. Four of the numbers are 14, 20, 11, 18. Find the fifth number.",
          a: "Mean = Sum / Number of observations\nSum of all 5 numbers = Mean x 5 = 16 x 5 = 80\n\nSum of four known numbers = 14 + 20 + 11 + 18 = 63\n\nFifth number = 80 - 63 = 17\n\nVerification: (14+20+11+18+17)/5 = 80/5 = 16 ✓",
          type: "short"
        },
        {
          q: "Define frequency and frequency distribution table with an example.",
          a: "Frequency: The number of times a particular value or event occurs in a data set.\n\nFrequency Distribution Table: A table that organises data by listing each value (or class interval) along with its frequency.\n\nExample: Test scores of 10 students: 7, 8, 7, 9, 6, 8, 7, 9, 8, 6\n\nScore | Tally  | Frequency\n  6   | II     | 2\n  7   | III    | 3\n  8   | III    | 3\n  9   | II     | 2\nTotal            10\n\nThis table makes it easy to see that scores 7 and 8 are most common.",
          type: "short"
        }
      ],
      [
        {
          q: "Explain mean, median and mode with examples. When is median preferred over mean?",
          a: "MEAN: The arithmetic average of all values.\nFormula: Mean = Sum of all observations / Number of observations\nExample: Pocket money (Rs) of 5 friends: 20, 30, 25, 40, 35\nMean = (20+30+25+40+35)/5 = 150/5 = Rs 30\n\nMEDIAN: The middle value when data is arranged in order.\nArranged: 20, 25, 30, 35, 40. Middle (3rd) value = 30.\nFor even count: average of two middle values.\nExample: 10, 20, 30, 40 -> Median = (20+30)/2 = 25\n\nMODE: The value that occurs most often.\nExample: 3, 5, 3, 7, 3, 8 -> Mode = 3\n\nWhen median is preferred:\nMedian is preferred over mean when there are extreme values (outliers). For example, if 4 workers earn Rs 500/day and 1 manager earns Rs 5000/day, the mean salary = (500x4 + 5000)/5 = Rs 1400 (not representative). The median = Rs 500, which better reflects the typical worker's salary.",
          type: "long"
        },
        {
          q: "A survey of 50 people found: 20 watch cricket, 10 watch football, 15 watch tennis, 5 watch hockey. Find the sector angle for each sport and state which sport occupies the largest sector in a pie chart.",
          a: "Total = 50 people\n\nSector angle = (Frequency / Total) x 360 degrees\n\nCricket: (20/50) x 360 = 144 degrees\nFootball: (10/50) x 360 = 72 degrees\nTennis: (15/50) x 360 = 108 degrees\nHockey: (5/50) x 360 = 36 degrees\n\nVerification: 144 + 72 + 108 + 36 = 360 degrees ✓\n\nCricket occupies the largest sector (144 degrees), representing 40% of the total.",
          type: "short"
        },
        {
          q: "The ages of 10 members of a club are: 22, 35, 28, 40, 22, 31, 22, 45, 38, 27. Find mean, median and mode.",
          a: "Data: 22, 35, 28, 40, 22, 31, 22, 45, 38, 27\n\nMEAN:\nSum = 22+35+28+40+22+31+22+45+38+27 = 310\nMean = 310/10 = 31 years\n\nMEDIAN:\nArrange in order: 22, 22, 22, 27, 28, 31, 35, 38, 40, 45\nThere are 10 values (even), so median = average of 5th and 6th values\nMedian = (28+31)/2 = 59/2 = 29.5 years\n\nMODE:\n22 appears 3 times (most frequent)\nMode = 22 years",
          type: "short"
        },
        {
          q: "Describe the steps to draw a bar graph. What are the key points to remember?",
          a: "Steps to Draw a Bar Graph:\n1. Collect and organise data in a table (categories and frequencies).\n2. Draw two perpendicular lines: horizontal x-axis and vertical y-axis.\n3. Label the x-axis with the categories (e.g., subjects, months, sports).\n4. Choose a suitable scale for the y-axis (e.g., 1 cm = 5 students). Label the y-axis with numbers at equal intervals.\n5. For each category, draw a bar whose height equals its frequency. All bars must be of equal width.\n6. Leave equal gaps between bars.\n7. Write the title of the graph.\n8. Add a key/legend if drawing a double bar graph.\n\nKey Points to Remember:\n- All bars must be of EQUAL WIDTH\n- Gaps between bars must be EQUAL\n- The y-axis scale must be UNIFORM (equal intervals)\n- Always start the y-axis from 0\n- Give the graph a clear TITLE and label both axes",
          type: "long"
        },
        {
          q: "What is a double bar graph? Give one situation where it is more useful than a single bar graph.",
          a: "A double bar graph displays two sets of data side by side for comparison. For each category on the x-axis, two bars are drawn (usually in different colours) representing the two data sets. A legend/key is included to identify which bar represents which data set.\n\nExample situation: Comparing the performance of boys and girls in a class test across 5 subjects. A single bar graph can only show one group (e.g., only boys or only girls), but a double bar graph shows both groups together for each subject, making it easy to compare performance in each subject and see overall trends.",
          type: "short"
        }
      ]
    ]
  },

  "7-maths-10": {
    notes: [
      {
        heading: "Perimeter — Rectangles and Squares",
        body: "Perimeter is the total length of the boundary of a closed figure.\n\nRectangle:\n• Perimeter = 2 × (length + breadth) = 2(l + b)\n• Example: l = 8 cm, b = 5 cm → P = 2(8+5) = 2×13 = 26 cm\n\nSquare:\n• Perimeter = 4 × side = 4s\n• Example: s = 6 cm → P = 4×6 = 24 cm\n\nFinding unknown side from perimeter:\n• If perimeter of rectangle = 44 cm and l = 14 cm, find b\n• 2(14 + b) = 44 → 14 + b = 22 → b = 8 cm",
        highlight: "Perimeter of Rectangle = 2(l + b). Perimeter of Square = 4s.",
      },
      {
        heading: "Area — Rectangles, Squares, Triangles",
        body: "Area is the amount of surface enclosed within a boundary.\n\nRectangle:\n• Area = length × breadth = l × b\n• Example: l = 9 m, b = 4 m → Area = 36 m²\n\nSquare:\n• Area = side × side = s²\n• Example: s = 7 cm → Area = 49 cm²\n\nTriangle:\n• Area = (1/2) × base × height\n• Example: base = 10 cm, height = 6 cm → Area = (1/2)×10×6 = 30 cm²\n\nNote: The height must be perpendicular to the base.",
        highlight: "Area of Triangle = (1/2) × base × height. Height is always perpendicular to the base.",
      },
      {
        heading: "Circles — Circumference and Area",
        body: "A circle is a set of all points equidistant from the centre.\n\nKey terms:\n• Radius (r): distance from centre to any point on the circle\n• Diameter (d): d = 2r\n• π (pi) ≈ 22/7 ≈ 3.14159\n\nCircumference (perimeter of a circle):\n• C = 2πr = πd\n• Example: r = 7 cm → C = 2 × (22/7) × 7 = 44 cm\n\nArea of a circle:\n• A = πr²\n• Example: r = 7 cm → A = (22/7) × 7² = (22/7) × 49 = 154 cm²",
        highlight: "Circumference = 2πr. Area of circle = πr². Use π = 22/7 unless stated otherwise.",
      },
      {
        heading: "Composite Figures and Paths",
        body: "Many real-life shapes are combinations of basic shapes.\n\nExample 1: Area of a path around a garden\n• Outer rectangle: 20 m × 15 m, path width = 2 m\n• Inner rectangle: (20-4) × (15-4) = 16 m × 11 m\n• Area of path = Area of outer - Area of inner = (20×15) - (16×11) = 300 - 176 = 124 m²\n\nExample 2: Shaded region = large circle - small circle\n• Large circle radius = 10 cm, small circle radius = 7 cm\n• Shaded area = π(10²) - π(7²) = π(100-49) = 51π = 51 × 22/7 ≈ 160.29 cm²\n\nConversion: 1 m² = 10,000 cm². 1 hectare = 10,000 m².",
        highlight: "Area of composite shape = sum or difference of areas of its parts.",
      },
    ],
    snippets: [
      { term: "Perimeter", definition: "The total length of the boundary of a closed 2D shape.", formula: "Rectangle: 2(l+b). Square: 4s. Circle: 2πr.", example: "A rectangular field 12 m × 8 m has perimeter = 2(12+8) = 40 m" },
      { term: "Area", definition: "The measure of the surface enclosed within the boundary of a 2D shape.", formula: "Rectangle: l×b. Square: s². Triangle: (1/2)×b×h. Circle: πr².", example: "A square of side 5 cm has area = 25 cm²" },
      { term: "Circumference", definition: "The perimeter (boundary length) of a circle.", formula: "C = 2πr = πd", example: "Circle with radius 14 cm: C = 2 × (22/7) × 14 = 88 cm" },
      { term: "Pi (π)", definition: "A mathematical constant representing the ratio of a circle's circumference to its diameter.", formula: "π = Circumference / Diameter ≈ 22/7 ≈ 3.14", example: "Used in all circle calculations" },
      { term: "Height of a Triangle", definition: "The perpendicular distance from the base to the opposite vertex.", example: "In a triangle with base 8 cm, if height = 5 cm, then area = (1/2)(8)(5) = 20 cm²" },
      { term: "Composite Figure", definition: "A shape made by combining two or more basic shapes.", example: "An L-shaped room = two rectangles joined together" },
    ],
    mcq: [
      [
        {
          q: "The perimeter of a rectangle with length 13 cm and breadth 9 cm is:",
          options: ["44 cm", "117 cm", "22 cm", "40 cm"],
          answer: 0,
          explanation: "Perimeter = 2(l + b) = 2(13 + 9) = 2 × 22 = 44 cm."
        },
        {
          q: "The area of a triangle with base 12 cm and height 8 cm is:",
          options: ["96 cm²", "48 cm²", "24 cm²", "40 cm²"],
          answer: 1,
          explanation: "Area = (1/2) × base × height = (1/2) × 12 × 8 = 48 cm²."
        },
        {
          q: "The circumference of a circle with radius 14 cm is: (π = 22/7)",
          options: ["44 cm", "88 cm", "176 cm", "22 cm"],
          answer: 1,
          explanation: "Circumference = 2πr = 2 × (22/7) × 14 = 2 × 22 × 2 = 88 cm."
        },
        {
          q: "The area of a square with perimeter 36 cm is:",
          options: ["81 cm²", "36 cm²", "18 cm²", "72 cm²"],
          answer: 0,
          explanation: "Side = Perimeter/4 = 36/4 = 9 cm. Area = 9² = 81 cm²."
        },
        {
          q: "A circular garden has radius 7 m. Its area is: (π = 22/7)",
          options: ["44 m²", "154 m²", "22 m²", "308 m²"],
          answer: 1,
          explanation: "Area = πr² = (22/7) × 7² = (22/7) × 49 = 22 × 7 = 154 m²."
        },
        {
          q: "The length of a rectangle is 15 m and its area is 90 m². Its breadth is:",
          options: ["5 m", "6 m", "7 m", "8 m"],
          answer: 1,
          explanation: "Area = l × b → 90 = 15 × b → b = 90/15 = 6 m."
        },
        {
          q: "A path of width 2 m surrounds a rectangular garden 20 m × 10 m. The area of the path is:",
          options: ["240 m²", "136 m²", "200 m²", "64 m²"],
          answer: 1,
          explanation: "Outer area = (20+4)(10+4) = 24 × 14 = 336 m². Inner area = 20 × 10 = 200 m². Path area = 336 - 200 = 136 m²."
        },
        {
          q: "The diameter of a circle is 10 cm. Its circumference is approximately: (π = 3.14)",
          options: ["31.4 cm", "62.8 cm", "78.5 cm", "15.7 cm"],
          answer: 0,
          explanation: "Circumference = πd = 3.14 × 10 = 31.4 cm."
        },
        {
          q: "If the perimeter of a square is equal to the perimeter of a rectangle with sides 8 cm and 6 cm, the side of the square is:",
          options: ["7 cm", "6 cm", "8 cm", "14 cm"],
          answer: 0,
          explanation: "Perimeter of rectangle = 2(8+6) = 28 cm. Perimeter of square = 28 cm. Side = 28/4 = 7 cm."
        },
        {
          q: "1 hectare is equal to:",
          options: ["100 m²", "1000 m²", "10,000 m²", "1,00,000 m²"],
          answer: 2,
          explanation: "1 hectare = 100 m × 100 m = 10,000 m². It is a standard unit for measuring large land areas."
        }
      ],
      [
        {
          q: "Assertion (A): The area of a triangle is half the area of a rectangle with the same base and height. Reason (R): Area of triangle = (1/2) × base × height.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 0,
          explanation: "Area of rectangle = base × height. Area of triangle = (1/2) × base × height = half of rectangle. Both true, R explains A."
        },
        {
          q: "Assertion (A): Doubling the radius of a circle doubles its area. Reason (R): Area of circle = πr².",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 3,
          explanation: "A is false: doubling r gives area = π(2r)² = 4πr², which is 4 times (not 2 times) the original area. R correctly states the formula."
        },
        {
          q: "Assertion (A): The perimeter of a square with side 5 cm is 20 cm. Reason (R): A square has 4 equal sides.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 0,
          explanation: "Perimeter = 4 × 5 = 20 cm. True. Because a square has 4 equal sides, perimeter = 4s. R correctly explains A."
        },
        {
          q: "Assertion (A): π is a rational number. Reason (R): π = 22/7 exactly.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 3,
          explanation: "A is false: π is an irrational number. 22/7 is only an approximation of π, not the exact value. R is false."
        },
        {
          q: "Assertion (A): Two triangles with the same base and the same height have equal areas. Reason (R): Area of triangle depends only on base and height, not on shape.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 0,
          explanation: "Area = (1/2) × base × height. If base and height are same, areas are equal regardless of the triangle's shape. Both true, R explains A."
        },
        {
          q: "Assertion (A): The area of a rectangle is always greater than its perimeter. Reason (R): Area is measured in square units and perimeter in linear units.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 3,
          explanation: "A is false: for a 1 cm × 2 cm rectangle, area = 2 cm² and perimeter = 6 cm (numerically smaller area). R is true (they have different units) but doesn't fix A."
        },
        {
          q: "Assertion (A): Circumference of a circle increases linearly with radius. Reason (R): C = 2πr, which is directly proportional to r.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 0,
          explanation: "C = 2πr shows a linear (direct proportion) relationship with r. If r doubles, C doubles. Both true, R explains A."
        },
        {
          q: "Assertion (A): A path around a garden has area equal to the difference of areas of outer and inner rectangles. Reason (R): The path occupies the space between the two rectangles.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 0,
          explanation: "Both true and logically connected. The path area = outer area - inner area, because the path is the region between them."
        },
        {
          q: "Assertion (A): The area of a square with side a is always equal to the square of its perimeter divided by 16. Reason (R): Perimeter of a square = 4a, so a = P/4, and area = a² = P²/16.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 0,
          explanation: "P = 4a → a = P/4. Area = (P/4)² = P²/16. Both true, and R provides the correct algebraic derivation."
        },
        {
          q: "Assertion (A): The unit of area is the same as the unit of length. Reason (R): Both perimeter and area measure boundary of a shape.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 3,
          explanation: "A is false: area is measured in square units (cm², m²) while length/perimeter uses linear units (cm, m). R is also false: perimeter measures boundary length, area measures surface."
        }
      ]
    ],
    qa: [
      [
        {
          q: "Find the area and perimeter of a rectangle with length 18 cm and breadth 12 cm.",
          a: "Perimeter = 2(l + b) = 2(18 + 12) = 2 x 30 = 60 cm\n\nArea = l x b = 18 x 12 = 216 cm²",
          type: "short"
        },
        {
          q: "A circular park has a radius of 21 m. Find its circumference and area. (Use π = 22/7)",
          a: "Circumference = 2πr = 2 x (22/7) x 21 = 2 x 22 x 3 = 132 m\n\nArea = πr² = (22/7) x 21 x 21 = (22/7) x 441 = 22 x 63 = 1386 m²",
          type: "short"
        },
        {
          q: "The area of a triangle is 54 cm² and its base is 12 cm. Find its height.",
          a: "Area of triangle = (1/2) x base x height\n54 = (1/2) x 12 x height\n54 = 6 x height\nheight = 54/6 = 9 cm\n\nThe height of the triangle is 9 cm.",
          type: "short"
        },
        {
          q: "A square has a perimeter of 56 cm. Find its area.",
          a: "Perimeter of square = 4 x side\n56 = 4 x side\nside = 56/4 = 14 cm\n\nArea = side x side = 14 x 14 = 196 cm²",
          type: "short"
        },
        {
          q: "What is a composite figure? Give an example.",
          a: "A composite figure is a shape formed by combining two or more basic geometric shapes (like rectangles, triangles, and circles).\n\nExample: An L-shaped room is a composite figure made of two rectangles.\nIf one rectangle is 6 m x 4 m and the other is 3 m x 2 m, total area = (6x4) + (3x2) = 24 + 6 = 30 m².",
          type: "short"
        }
      ],
      [
        {
          q: "A rectangular field is 40 m long and 25 m wide. A path of 2 m width runs inside the field along its boundary. Find the area of the path.",
          a: "Outer rectangle (field): 40 m x 25 m\nArea of outer rectangle = 40 x 25 = 1000 m²\n\nThe path runs inside, so inner rectangle dimensions:\nLength = 40 - 2 - 2 = 36 m\nBreadth = 25 - 2 - 2 = 21 m\n\nArea of inner rectangle = 36 x 21 = 756 m²\n\nArea of path = Outer area - Inner area = 1000 - 756 = 244 m²",
          type: "long"
        },
        {
          q: "The circumference of a circle is 66 cm. Find its radius and area. (Use π = 22/7)",
          a: "Circumference = 2πr\n66 = 2 x (22/7) x r\n66 = 44r/7\nr = 66 x 7/44 = 462/44 = 10.5 cm\n\nArea = πr² = (22/7) x (10.5)² = (22/7) x 110.25 = 22 x 15.75 = 346.5 cm²",
          type: "short"
        },
        {
          q: "Explain the formula for area of a circle and how it is derived from dividing the circle into sectors.",
          a: "Formula: Area of circle = πr²\n\nDerivation using sectors:\n1. Imagine cutting a circle into a very large number of thin, equal sectors (like pizza slices).\n2. Rearrange these sectors alternately (one pointing up, next pointing down) to form a shape that looks like a rectangle.\n3. The length of this rectangle is approximately half the circumference = (2πr)/2 = πr.\n4. The height of this rectangle is the radius = r.\n5. Therefore, Area = length x height = πr x r = πr².\n\nThis shows that the area of a circle with radius r is always equal to pi times r squared.",
          type: "long"
        },
        {
          q: "A triangle has a base of 15 cm and a height of 10 cm. A rectangle has the same area as this triangle. If the rectangle's length is 15 cm, find its breadth.",
          a: "Area of triangle = (1/2) x base x height = (1/2) x 15 x 10 = 75 cm²\n\nArea of rectangle = Area of triangle = 75 cm²\n\nArea of rectangle = length x breadth\n75 = 15 x breadth\nbreadth = 75/15 = 5 cm\n\nThe breadth of the rectangle is 5 cm.",
          type: "short"
        },
        {
          q: "A farmer has a square field with perimeter 200 m. He wants to fence a circular portion inside it with the largest possible circle. Find the area of land NOT fenced. (Use π = 22/7)",
          a: "Perimeter of square = 4 x side = 200 m\nside = 200/4 = 50 m\nArea of square = 50 x 50 = 2500 m²\n\nLargest circle inside the square has diameter = side of square = 50 m\nRadius = 25 m\n\nArea of circle = πr² = (22/7) x 25 x 25 = (22/7) x 625 = 13750/7 ≈ 1964.3 m²\n\nArea NOT fenced = Area of square - Area of circle = 2500 - 1964.3 ≈ 535.7 m²",
          type: "long"
        }
      ]
    ]
  },

  "7-maths-11": {
    notes: [
      {
        heading: "Exponents — Meaning and Notation",
        body: "An exponent (or power) tells us how many times a base is multiplied by itself.\n\nNotation: aⁿ = a × a × a … (n times)\n• a is the base\n• n is the exponent (or index or power)\n\nExamples:\n• 2⁵ = 2×2×2×2×2 = 32\n• 3⁴ = 3×3×3×3 = 81\n• 10³ = 10×10×10 = 1000\n\nSpecial cases:\n• Any number to the power 1 = itself: a¹ = a\n• Any non-zero number to the power 0 = 1: a⁰ = 1\n• (-2)³ = (-2)×(-2)×(-2) = -8 (negative base, odd power = negative)\n• (-3)² = (-3)×(-3) = +9 (negative base, even power = positive)",
        highlight: "aⁿ means a is multiplied n times. a⁰ = 1 for any non-zero a.",
      },
      {
        heading: "Laws of Exponents",
        body: "Seven key laws govern operations with exponents (a, b ≠ 0):\n\n1. Product law: aᵐ × aⁿ = aᵐ⁺ⁿ\n   Example: 2³ × 2⁴ = 2⁷ = 128\n\n2. Quotient law: aᵐ ÷ aⁿ = aᵐ⁻ⁿ\n   Example: 3⁶ ÷ 3² = 3⁴ = 81\n\n3. Power of a power: (aᵐ)ⁿ = aᵐⁿ\n   Example: (2³)² = 2⁶ = 64\n\n4. Product raised to a power: (ab)ⁿ = aⁿbⁿ\n   Example: (2×3)² = 2²×3² = 4×9 = 36\n\n5. Quotient raised to a power: (a/b)ⁿ = aⁿ/bⁿ\n   Example: (2/3)³ = 8/27\n\n6. Zero exponent: a⁰ = 1\n\n7. Negative exponent: a⁻ⁿ = 1/aⁿ\n   Example: 2⁻³ = 1/2³ = 1/8",
        highlight: "Key: aᵐ × aⁿ = aᵐ⁺ⁿ (add powers when multiplying with same base).",
      },
      {
        heading: "Powers of 10 and Standard Form",
        body: "Powers of 10 are used to express very large and very small numbers.\n\n10¹ = 10\n10² = 100\n10³ = 1,000\n10⁴ = 10,000\n10⁵ = 1,00,000\n10⁶ = 10,00,000 (1 million)\n\nStandard Form (Scientific Notation):\nA number written as a × 10ⁿ where 1 ≤ a < 10 and n is an integer.\n\nExamples:\n• 3,00,00,000 = 3 × 10⁷\n• Speed of light = 3,00,000 km/s = 3 × 10⁵ km/s\n• Distance to Sun ≈ 1.5 × 10⁸ km\n• Size of a bacteria ≈ 0.0001 cm = 10⁻⁴ cm",
        highlight: "Standard form: a × 10ⁿ where 1 ≤ a < 10. Count digits moved to find the power of 10.",
      },
      {
        heading: "Expressing Numbers Using Exponents",
        body: "Prime factorisation with exponents:\n• 36 = 2² × 3²\n• 72 = 2³ × 3²\n• 360 = 2³ × 3² × 5\n\nComparing numbers in exponential form:\n• Which is greater: 2¹⁰ or 10³?\n• 2¹⁰ = 1024 and 10³ = 1000, so 2¹⁰ > 10³\n\nSimplifying expressions:\n• (2³ × 3²) / (2² × 3) = 2³⁻² × 3²⁻¹ = 2¹ × 3¹ = 6\n• 5⁴ × 5⁻² = 5⁴⁺⁽⁻²⁾ = 5² = 25",
        highlight: "Express numbers as products of prime powers to simplify calculations.",
      },
    ],
    snippets: [
      { term: "Exponent", definition: "A number that tells how many times the base is used as a factor.", formula: "aⁿ = a × a × a... (n times)", example: "2⁶ = 2×2×2×2×2×2 = 64" },
      { term: "Base", definition: "The number that is being raised to a power.", example: "In 5³, the base is 5" },
      { term: "Product Law", definition: "When multiplying two powers with the same base, add the exponents.", formula: "aᵐ × aⁿ = aᵐ⁺ⁿ", example: "3² × 3⁴ = 3⁶ = 729" },
      { term: "Quotient Law", definition: "When dividing two powers with the same base, subtract the exponents.", formula: "aᵐ ÷ aⁿ = aᵐ⁻ⁿ", example: "5⁷ ÷ 5³ = 5⁴ = 625" },
      { term: "Zero Exponent", definition: "Any non-zero number raised to the power 0 equals 1.", formula: "a⁰ = 1 (a ≠ 0)", example: "100⁰ = 1, (−5)⁰ = 1" },
      { term: "Standard Form", definition: "Writing a number as a × 10ⁿ where 1 ≤ a < 10 and n is an integer.", example: "4,50,000 = 4.5 × 10⁵" },
      { term: "Prime Factorisation", definition: "Expressing a number as a product of its prime factors, using exponents.", example: "180 = 2² × 3² × 5" },
    ],
    mcq: [
      [
        {
          q: "The value of 2⁸ is:",
          options: ["64", "128", "256", "512"],
          answer: 2,
          explanation: "2⁸ = 2×2×2×2×2×2×2×2 = 256."
        },
        {
          q: "Using the product law, 5³ × 5⁴ equals:",
          options: ["5¹²", "5⁷", "25⁷", "5¹"],
          answer: 1,
          explanation: "aᵐ × aⁿ = aᵐ⁺ⁿ. So 5³ × 5⁴ = 5³⁺⁴ = 5⁷."
        },
        {
          q: "7⁰ is equal to:",
          options: ["0", "7", "1", "49"],
          answer: 2,
          explanation: "Any non-zero number raised to the power 0 equals 1. So 7⁰ = 1."
        },
        {
          q: "Which of the following is the standard form of 4,70,00,000?",
          options: ["4.7 × 10⁶", "47 × 10⁶", "4.7 × 10⁷", "0.47 × 10⁸"],
          answer: 2,
          explanation: "4,70,00,000 = 4.7 × 1,00,00,000 = 4.7 × 10⁷. In standard form, 1 ≤ a < 10."
        },
        {
          q: "Simplify: 3⁵ ÷ 3²",
          options: ["3³", "3⁷", "9³", "1³"],
          answer: 0,
          explanation: "aᵐ ÷ aⁿ = aᵐ⁻ⁿ. So 3⁵ ÷ 3² = 3⁵⁻² = 3³ = 27."
        },
        {
          q: "The value of (-3)⁴ is:",
          options: ["-81", "+81", "-12", "+12"],
          answer: 1,
          explanation: "Negative base with even power gives positive result. (-3)⁴ = (-3)×(-3)×(-3)×(-3) = 81."
        },
        {
          q: "Express 72 as a product of prime factors with exponents:",
          options: ["8 × 9", "2³ × 3²", "2² × 3³", "6² × 2"],
          answer: 1,
          explanation: "72 = 8 × 9 = 2³ × 3². This is the prime factorisation using exponents."
        },
        {
          q: "(2²)³ is equal to:",
          options: ["2⁵", "2⁶", "4⁶", "8³"],
          answer: 1,
          explanation: "(aᵐ)ⁿ = aᵐⁿ. So (2²)³ = 2²ˣ³ = 2⁶ = 64."
        },
        {
          q: "The distance from Earth to the Moon is approximately 3,84,000 km. In standard form, this is:",
          options: ["3.84 × 10⁵ km", "38.4 × 10⁴ km", "3.84 × 10⁶ km", "0.384 × 10⁶ km"],
          answer: 0,
          explanation: "3,84,000 = 3.84 × 1,00,000 = 3.84 × 10⁵ km. In standard form, the coefficient must be between 1 and 10."
        },
        {
          q: "Which is greater: 2¹⁰ or 10³?",
          options: ["10³", "2¹⁰", "They are equal", "Cannot be determined"],
          answer: 1,
          explanation: "2¹⁰ = 1024 and 10³ = 1000. Since 1024 > 1000, 2¹⁰ is greater."
        }
      ],
      [
        {
          q: "Assertion (A): 2³ × 3³ = 6³. Reason (R): (ab)ⁿ = aⁿ × bⁿ.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 0,
          explanation: "2³ × 3³ = (2×3)³ = 6³ = 216. Law: (ab)ⁿ = aⁿbⁿ. Both true, R correctly justifies A."
        },
        {
          q: "Assertion (A): a⁰ = 0 for any value of a. Reason (R): Multiplying by zero gives zero.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 3,
          explanation: "A is false: a⁰ = 1 (not 0) for any non-zero a. R is true as a mathematical fact but irrelevant here."
        },
        {
          q: "Assertion (A): 10⁵ = 1,00,000. Reason (R): 10ⁿ has n zeros after 1.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 0,
          explanation: "10⁵ = 1,00,000 (one followed by 5 zeros). Both statements are true and R explains A."
        },
        {
          q: "Assertion (A): (-2)⁵ = 32. Reason (R): Negative number raised to an odd power gives a positive result.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 3,
          explanation: "A is false: (-2)⁵ = -32 (negative). R is false: negative base with odd power gives a negative result."
        },
        {
          q: "Assertion (A): In standard form, 560 is written as 56 × 10¹. Reason (R): Standard form requires the coefficient to be between 1 and 10.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 3,
          explanation: "A is false: 560 in standard form is 5.6 × 10², not 56 × 10¹ (56 is not between 1 and 10). R is the correct rule."
        },
        {
          q: "Assertion (A): 3² × 3³ = 9⁵. Reason (R): When multiplying powers with the same base, add the exponents.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 3,
          explanation: "A is false: 3² × 3³ = 3⁵ (not 9⁵). The base stays the same (3), only the exponents add. R is the correct law."
        },
        {
          q: "Assertion (A): (5²)³ = 5⁶. Reason (R): Power of a power: (aᵐ)ⁿ = aᵐⁿ.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 0,
          explanation: "(5²)³ = 5²ˣ³ = 5⁶ = 15625. R states the correct law. Both true, R explains A."
        },
        {
          q: "Assertion (A): 2⁻³ = -8. Reason (R): Negative exponent means the reciprocal of the positive power.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 3,
          explanation: "A is false: 2⁻³ = 1/2³ = 1/8 (not -8). R correctly defines negative exponents."
        },
        {
          q: "Assertion (A): The prime factorisation of 360 is 2³ × 3² × 5. Reason (R): 360 = 8 × 9 × 5 = 2³ × 3² × 5.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 0,
          explanation: "360 = 8 × 45 = 8 × 9 × 5 = 2³ × 3² × 5. Both A and R are true and R shows the working."
        },
        {
          q: "Assertion (A): (a/b)ⁿ = aⁿ/bⁿ. Reason (R): Each factor in the base gets raised to the power.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 0,
          explanation: "This is one of the laws of exponents. (a/b)ⁿ = aⁿ/bⁿ. Both numerator and denominator are raised to the power n. Both true, R explains A."
        }
      ]
    ],
    qa: [
      [
        {
          q: "State the product law of exponents and give an example.",
          a: "Product Law: When multiplying two powers with the same base, keep the base and add the exponents.\n\nFormula: aᵐ x aⁿ = aᵐ⁺ⁿ\n\nExample: 4³ x 4⁵ = 4³⁺⁵ = 4⁸\n\nVerification: 4³ = 64 and 4⁵ = 1024. 64 x 1024 = 65,536 = 4⁸ ✓",
          type: "short"
        },
        {
          q: "Simplify: (3² × 3⁴) ÷ 3³",
          a: "Step 1: Apply product law in the numerator.\n3² x 3⁴ = 3²⁺⁴ = 3⁶\n\nStep 2: Apply quotient law.\n3⁶ ÷ 3³ = 3⁶⁻³ = 3³ = 27\n\nAnswer: 27",
          type: "short"
        },
        {
          q: "Express 1,35,000 in standard form.",
          a: "1,35,000 = 1.35 x 1,00,000 = 1.35 x 10⁵\n\nThe decimal point is moved 5 places to the left, giving the exponent 5.\nThe coefficient 1.35 is between 1 and 10. ✓\n\nStandard form: 1.35 x 10⁵",
          type: "short"
        },
        {
          q: "Find the value of (-4)³ and explain the sign.",
          a: "(-4)³ = (-4) x (-4) x (-4)\n\nStep 1: (-4) x (-4) = +16 (negative x negative = positive)\nStep 2: +16 x (-4) = -64 (positive x negative = negative)\n\nAnswer: (-4)³ = -64\n\nRule: A negative number raised to an ODD power always gives a NEGATIVE result.\nA negative number raised to an EVEN power always gives a POSITIVE result.",
          type: "short"
        },
        {
          q: "Express 252 as a product of prime factors using exponents.",
          a: "252 ÷ 2 = 126\n126 ÷ 2 = 63\n63 ÷ 3 = 21\n21 ÷ 3 = 7\n7 ÷ 7 = 1\n\n252 = 2 x 2 x 3 x 3 x 7 = 2² x 3² x 7",
          type: "short"
        }
      ],
      [
        {
          q: "State all laws of exponents with one example each.",
          a: "Laws of Exponents (where a, b are non-zero numbers):\n\n1. Product Law: aᵐ x aⁿ = aᵐ⁺ⁿ\n   Example: 2⁴ x 2³ = 2⁷ = 128\n\n2. Quotient Law: aᵐ ÷ aⁿ = aᵐ⁻ⁿ\n   Example: 5⁶ ÷ 5² = 5⁴ = 625\n\n3. Power of a Power: (aᵐ)ⁿ = aᵐⁿ\n   Example: (3²)⁴ = 3⁸ = 6561\n\n4. Product of Powers: (ab)ⁿ = aⁿ x bⁿ\n   Example: (2 x 5)³ = 2³ x 5³ = 8 x 125 = 1000\n\n5. Quotient of Powers: (a/b)ⁿ = aⁿ/bⁿ\n   Example: (4/3)² = 16/9\n\n6. Zero Exponent: a⁰ = 1\n   Example: 99⁰ = 1\n\n7. Negative Exponent: a⁻ⁿ = 1/aⁿ\n   Example: 2⁻⁴ = 1/16",
          type: "long"
        },
        {
          q: "The speed of light is approximately 3 x 10⁸ m/s. How far does light travel in 500 seconds? Express in standard form.",
          a: "Distance = Speed x Time\nSpeed = 3 x 10⁸ m/s\nTime = 500 s = 5 x 10² s\n\nDistance = (3 x 10⁸) x (5 x 10²)\n= (3 x 5) x (10⁸ x 10²)\n= 15 x 10⁸⁺²\n= 15 x 10¹⁰\n\nConverting to standard form: 15 x 10¹⁰ = 1.5 x 10¹¹\n\nLight travels 1.5 x 10¹¹ metres in 500 seconds.",
          type: "long"
        },
        {
          q: "Simplify: (2³ × 3²) × (2² × 3⁴) ÷ (2⁴ × 3³)",
          a: "Grouping bases:\n= (2³ x 2² ÷ 2⁴) x (3² x 3⁴ ÷ 3³)\n\nFor base 2:\n2³ x 2² = 2⁵, then 2⁵ ÷ 2⁴ = 2¹ = 2\n\nFor base 3:\n3² x 3⁴ = 3⁶, then 3⁶ ÷ 3³ = 3³ = 27\n\nResult = 2 x 27 = 54",
          type: "short"
        },
        {
          q: "What is standard form (scientific notation)? Convert 0.0000048 to standard form.",
          a: "Standard form (scientific notation) expresses a number as a x 10ⁿ where:\n- a is a number such that 1 ≤ a < 10\n- n is an integer (can be positive, negative, or zero)\n\nConverting 0.0000048:\nMove the decimal point to the RIGHT until the coefficient is between 1 and 10.\n0.0000048 → 4.8 (moved 6 places to the right)\n\nEach place moved right gives a negative power of 10.\n\n0.0000048 = 4.8 x 10⁻⁶\n\nThis is used in science to write very small quantities like the size of atoms or bacteria.",
          type: "long"
        },
        {
          q: "Which is greater: 3⁴ or 4³? Show your working.",
          a: "Calculate both values:\n\n3⁴ = 3 x 3 x 3 x 3 = 9 x 9 = 81\n\n4³ = 4 x 4 x 4 = 16 x 4 = 64\n\nComparing: 81 > 64\n\nTherefore, 3⁴ > 4³.\n\nNote: This is a common source of confusion because students may think the larger base automatically gives the larger result. However, the exponent matters too.",
          type: "short"
        }
      ]
    ]
  },

  "7-maths-12": {
    notes: [
      {
        heading: "Line Symmetry",
        body: "A figure has line symmetry (or reflection symmetry) if it can be folded along a line so that the two halves match exactly.\n\nThe fold line is called the line of symmetry (or axis of symmetry).\n\nExamples:\n• Equilateral triangle: 3 lines of symmetry\n• Square: 4 lines of symmetry\n• Rectangle: 2 lines of symmetry (along mid-lines, not diagonals)\n• Circle: infinite lines of symmetry (any diameter)\n• Scalene triangle: 0 lines of symmetry\n• Regular pentagon: 5 lines of symmetry\n• Regular hexagon: 6 lines of symmetry\n\nFor a regular polygon with n sides: n lines of symmetry",
        highlight: "A regular polygon with n sides has exactly n lines of symmetry.",
      },
      {
        heading: "Rotational Symmetry",
        body: "A figure has rotational symmetry if it looks exactly the same after being rotated by some angle less than 360°.\n\nKey terms:\n• Order of rotational symmetry: the number of times a figure looks the same during one complete rotation (360°)\n• Angle of rotation = 360° ÷ order\n\nExamples:\n• Square: order 4 (looks same after 90°, 180°, 270°, 360°)\n• Equilateral triangle: order 3 (looks same after 120°, 240°, 360°)\n• Rectangle: order 2 (looks same after 180°, 360°)\n• Circle: infinite order\n• Scalene triangle: order 1 (only at 360°, no rotational symmetry)\n\nNote: Every figure has at least rotational symmetry of order 1.",
        highlight: "Order of rotational symmetry = 360° ÷ smallest angle of rotation.",
      },
      {
        heading: "Lines of Symmetry in Letters and Figures",
        body: "Symmetry in Alphabets:\n• Horizontal line of symmetry: B, C, D, E, H, I, K, O, X\n• Vertical line of symmetry: A, H, I, M, O, T, U, V, W, X, Y\n• No line of symmetry: F, G, J, L, N, P, Q, R, S, Z\n\nSymmetry in Shapes:\n• Isosceles triangle: 1 line (altitude from apex)\n• Rhombus: 2 lines (both diagonals)\n• Kite: 1 line (longer diagonal)\n• Parallelogram: 0 lines of symmetry\n\nNote: Rotational symmetry does NOT imply line symmetry. A parallelogram has rotational symmetry of order 2 but no line symmetry.",
        highlight: "A rectangle has 2 lines of symmetry and order 2 rotational symmetry. Diagonals of a rectangle are NOT lines of symmetry.",
      },
      {
        heading: "Symmetry in Art and Nature",
        body: "Symmetry appears everywhere:\n• Nature: butterfly wings, snowflakes, flowers, leaves\n• Architecture: Taj Mahal (bilateral symmetry)\n• Art: rangoli, mandalas\n• Science: molecular structures\n\nCreating Symmetric Figures:\n1. Mark the line of symmetry.\n2. For each point on one side, find its mirror image at equal distance on the other side.\n3. Connect the mirror points.\n\nKaleidoscope: Uses mirrors to create images with multiple lines of symmetry and high-order rotational symmetry.",
        highlight: "Nature is full of symmetry — from snowflakes (6-fold) to flowers to the human body (bilateral).",
      },
    ],
    snippets: [
      { term: "Line of Symmetry", definition: "A line that divides a figure into two mirror-image halves.", example: "A square has 4 lines of symmetry: 2 along midlines and 2 along diagonals." },
      { term: "Rotational Symmetry", definition: "A figure has rotational symmetry if it maps onto itself after being rotated by less than 360°.", formula: "Angle of rotation = 360° ÷ order", example: "An equilateral triangle has rotational symmetry of order 3 (rotates by 120°)." },
      { term: "Order of Rotational Symmetry", definition: "The number of times a figure looks identical to its original position during one full rotation.", example: "Square: order 4. Rectangle: order 2. Circle: infinite." },
      { term: "Axis of Symmetry", definition: "Another name for the line of symmetry — the line about which a figure is reflected.", example: "The vertical axis of symmetry of letter A passes through its apex." },
      { term: "Bilateral Symmetry", definition: "A special case of line symmetry where a figure has exactly one line of symmetry.", example: "An isosceles triangle, the letter A, and a butterfly have bilateral symmetry." },
    ],
    mcq: [
      [
        {
          q: "How many lines of symmetry does an equilateral triangle have?",
          options: ["1", "2", "3", "0"],
          answer: 2,
          explanation: "An equilateral triangle has 3 lines of symmetry, one through each vertex and the midpoint of the opposite side."
        },
        {
          q: "The order of rotational symmetry of a square is:",
          options: ["2", "4", "8", "1"],
          answer: 1,
          explanation: "A square looks the same after rotations of 90°, 180°, 270°, and 360°. So its order of rotational symmetry is 4."
        },
        {
          q: "Which of the following letters has a horizontal line of symmetry?",
          options: ["A", "M", "B", "V"],
          answer: 2,
          explanation: "B has a horizontal line of symmetry — the top half is the mirror image of the bottom half. A, M, V have vertical lines of symmetry."
        },
        {
          q: "A rectangle has how many lines of symmetry?",
          options: ["0", "2", "4", "1"],
          answer: 1,
          explanation: "A rectangle has 2 lines of symmetry: one connecting midpoints of opposite longer sides, and one connecting midpoints of shorter sides. Diagonals are NOT lines of symmetry."
        },
        {
          q: "The angle of rotation for a regular hexagon is:",
          options: ["45°", "60°", "90°", "72°"],
          answer: 1,
          explanation: "A regular hexagon has order 6 rotational symmetry. Angle = 360°/6 = 60°."
        },
        {
          q: "Which figure has infinite lines of symmetry?",
          options: ["Square", "Rectangle", "Equilateral triangle", "Circle"],
          answer: 3,
          explanation: "A circle has infinite lines of symmetry because any diameter of the circle is a line of symmetry."
        },
        {
          q: "A parallelogram (non-rectangular) has how many lines of symmetry?",
          options: ["0", "2", "1", "4"],
          answer: 0,
          explanation: "A parallelogram has no lines of symmetry. Its diagonals are NOT lines of symmetry. However, it does have rotational symmetry of order 2."
        },
        {
          q: "The order of rotational symmetry of the letter S is:",
          options: ["1", "2", "3", "0"],
          answer: 1,
          explanation: "The letter S has rotational symmetry of order 2 (it looks the same after 180° rotation). It has no line symmetry."
        },
        {
          q: "How many lines of symmetry does a regular pentagon have?",
          options: ["3", "4", "5", "10"],
          answer: 2,
          explanation: "A regular polygon with n sides has n lines of symmetry. A regular pentagon has 5 sides, so it has 5 lines of symmetry."
        },
        {
          q: "An isosceles triangle has:",
          options: ["No symmetry", "1 line of symmetry only", "Rotational symmetry only", "2 lines of symmetry"],
          answer: 1,
          explanation: "An isosceles triangle has exactly 1 line of symmetry — the perpendicular bisector of the base (or the altitude from the apex)."
        }
      ],
      [
        {
          q: "Assertion (A): A circle has infinite lines of symmetry. Reason (R): Every diameter of a circle is a line of symmetry.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 0,
          explanation: "Both are true. A circle has infinitely many diameters, each being a line of symmetry. R directly explains why A is true."
        },
        {
          q: "Assertion (A): A parallelogram has 2 lines of symmetry. Reason (R): The diagonals of a parallelogram bisect each other.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 3,
          explanation: "A is false: a parallelogram has 0 lines of symmetry (not 2). R is true: diagonals of a parallelogram do bisect each other, but this is unrelated to line symmetry."
        },
        {
          q: "Assertion (A): The order of rotational symmetry of an equilateral triangle is 3. Reason (R): The angle of rotation is 120°.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 0,
          explanation: "An equilateral triangle looks the same after every 120° rotation (120°, 240°, 360°). Order = 360°/120° = 3. Both true, R and A are consistent."
        },
        {
          q: "Assertion (A): A scalene triangle has no line of symmetry. Reason (R): All three sides of a scalene triangle are different.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 0,
          explanation: "A scalene triangle has all unequal sides and angles, so no line of symmetry exists. R correctly explains A."
        },
        {
          q: "Assertion (A): A square has more lines of symmetry than a rectangle. Reason (R): A square has 4 lines of symmetry, a rectangle has only 2.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 0,
          explanation: "Both true. A square has 4 lines of symmetry (2 through midpoints, 2 along diagonals). A rectangle has only 2 (through midpoints only). R correctly explains A."
        },
        {
          q: "Assertion (A): Every figure has rotational symmetry of at least order 1. Reason (R): Every figure coincides with itself after a rotation of 360°.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 0,
          explanation: "Every figure maps to itself after a full 360° rotation. That counts as order 1. Both true and logically connected."
        },
        {
          q: "Assertion (A): The letter H has both vertical and horizontal lines of symmetry. Reason (R): H looks the same when reflected left-right or top-bottom.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 0,
          explanation: "H is symmetric about a vertical axis (left-right) and a horizontal axis (top-bottom). Both A and R are true and logically connected."
        },
        {
          q: "Assertion (A): A rhombus has 4 lines of symmetry. Reason (R): A rhombus has all four sides equal.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 3,
          explanation: "A is false: a rhombus has only 2 lines of symmetry (along its two diagonals). R is true (equal sides) but does not fix A."
        },
        {
          q: "Assertion (A): A regular octagon has 8 lines of symmetry. Reason (R): A regular polygon with n sides has n lines of symmetry.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 0,
          explanation: "A regular octagon has 8 sides and hence 8 lines of symmetry. R states the general rule, which correctly explains A."
        },
        {
          q: "Assertion (A): Line symmetry and rotational symmetry always appear together in a figure. Reason (R): A figure with line symmetry must also have rotational symmetry.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 3,
          explanation: "A is false: a figure can have one without the other. For example, the letter S has rotational symmetry of order 2 but no line symmetry. R is false for the same reason."
        }
      ]
    ],
    qa: [
      [
        {
          q: "What is a line of symmetry? Draw and describe the lines of symmetry of a square.",
          a: "A line of symmetry is a line that divides a figure into two identical halves that are mirror images of each other. When the figure is folded along this line, the two halves match perfectly.\n\nLines of symmetry of a square (4 in total):\n1. Vertical line: through midpoints of top and bottom sides\n2. Horizontal line: through midpoints of left and right sides\n3. Diagonal 1: from top-left corner to bottom-right corner\n4. Diagonal 2: from top-right corner to bottom-left corner\n\nA square has 4 lines of symmetry.",
          type: "short"
        },
        {
          q: "Explain rotational symmetry. What is the order of rotational symmetry of a regular hexagon?",
          a: "Rotational symmetry: A figure has rotational symmetry if, when rotated about a fixed centre point by an angle less than 360 degrees, it looks exactly the same as before rotation.\n\nOrder of rotational symmetry = the number of times the figure looks identical during one full 360 degree rotation.\n\nFor a regular hexagon:\n- It has 6 equal sides and angles\n- It looks the same after rotations of 60 degrees, 120 degrees, 180 degrees, 240 degrees, 300 degrees, and 360 degrees\n- Order of rotational symmetry = 6\n- Angle of rotation = 360 degrees / 6 = 60 degrees",
          type: "short"
        },
        {
          q: "Which of these letters have a vertical line of symmetry: A, B, F, M, T, G?",
          a: "Vertical line of symmetry means the left half mirrors the right half.\n\nA - YES (the vertical centre divides it symmetrically)\nB - NO (B has a horizontal line of symmetry, not vertical)\nF - NO (no line of symmetry)\nM - YES (vertical centre line)\nT - YES (vertical centre line)\nG - NO (no line of symmetry)\n\nLetters with vertical line of symmetry: A, M, T",
          type: "short"
        },
        {
          q: "Does a parallelogram have line symmetry? Does it have rotational symmetry?",
          a: "Line Symmetry: NO. A parallelogram (non-rectangular) has NO lines of symmetry. Although the diagonals bisect each other, they are NOT lines of symmetry because folding along a diagonal does not give matching halves.\n\nRotational Symmetry: YES. A parallelogram has rotational symmetry of order 2. When rotated 180 degrees about its centre (intersection of diagonals), it maps exactly onto itself.\n\nThis is an example of a figure that has rotational symmetry but NO line symmetry.",
          type: "short"
        },
        {
          q: "List all 2D shapes you know and state their number of lines of symmetry.",
          a: "Shape                 | Lines of Symmetry\nScalene triangle      | 0\nIsosceles triangle    | 1\nEquilateral triangle  | 3\nRectangle             | 2\nSquare                | 4\nParallelogram         | 0\nRhombus               | 2\nKite                  | 1\nRegular pentagon      | 5\nRegular hexagon       | 6\nCircle                | Infinite\n\nRule: A regular polygon with n sides has n lines of symmetry.",
          type: "short"
        }
      ],
      [
        {
          q: "Distinguish between line symmetry and rotational symmetry with examples of shapes that have both, only one, or neither.",
          a: "LINE SYMMETRY: A figure has line symmetry when a line (axis) divides it into two identical mirror-image halves.\n\nROTATIONAL SYMMETRY: A figure has rotational symmetry when it looks exactly the same after rotation by some angle less than 360 degrees.\n\nShapes with BOTH:\n- Square: 4 lines of symmetry AND rotational order 4\n- Equilateral triangle: 3 lines AND rotational order 3\n- Regular hexagon: 6 lines AND rotational order 6\n\nShape with LINE SYMMETRY ONLY:\n- Isosceles triangle: 1 line of symmetry, but rotational order is only 1 (no true rotational symmetry below 360 degrees)\n\nShape with ROTATIONAL SYMMETRY ONLY:\n- Letter S: no line of symmetry, but rotational order 2 (180 degrees rotation)\n- Parallelogram: no line of symmetry, rotational order 2\n\nShape with NEITHER:\n- Scalene triangle: no line symmetry, rotational order only 1",
          type: "long"
        },
        {
          q: "A regular polygon has 8 sides (regular octagon). Find its number of lines of symmetry, order of rotational symmetry, and angle of rotation.",
          a: "Regular octagon: 8 equal sides and 8 equal angles.\n\nLines of symmetry:\nA regular polygon with n sides has n lines of symmetry.\nFor n = 8: Lines of symmetry = 8\n(4 lines through pairs of opposite vertices, and 4 lines through midpoints of opposite sides)\n\nOrder of rotational symmetry:\nA regular polygon with n sides has rotational symmetry of order n.\nOrder = 8\n(The octagon looks the same 8 times during a full rotation)\n\nAngle of rotation:\nAngle = 360 degrees / Order = 360 / 8 = 45 degrees\n\nSo the octagon looks the same after every 45-degree rotation.",
          type: "short"
        },
        {
          q: "Explain how you would check whether a figure has a line of symmetry using the paper folding method.",
          a: "Paper Folding Method to check Line of Symmetry:\n\n1. Draw or cut out the figure on paper.\n2. Fold the paper along what you think might be a line of symmetry.\n3. Observe if the two halves match perfectly (one half fits exactly over the other without overlapping or leaving gaps).\n4. If they match: the fold line IS a line of symmetry.\n5. If they do not match: the fold line is NOT a line of symmetry.\n\nImportant points:\n- You can test multiple fold lines to find ALL lines of symmetry.\n- A rectangle folds symmetrically along its mid-lines (joining midpoints of opposite sides), but NOT along its diagonals.\n- A square folds symmetrically along its mid-lines AND its diagonals.\n\nThis method works because line symmetry means one half is the mirror image (reflection) of the other.",
          type: "long"
        },
        {
          q: "State whether TRUE or FALSE: (a) A circle has no rotational symmetry. (b) A square has 4 lines of symmetry. (c) The letter Z has line symmetry. (d) An equilateral triangle has rotational symmetry of order 3.",
          a: "(a) FALSE. A circle has rotational symmetry of INFINITE order, as it looks the same at every angle of rotation.\n\n(b) TRUE. A square has 4 lines of symmetry: 2 through the midpoints of opposite sides, and 2 along the diagonals.\n\n(c) FALSE. The letter Z has NO line of symmetry. However, Z has rotational symmetry of order 2 (it looks the same after a 180-degree rotation).\n\n(d) TRUE. An equilateral triangle has rotational symmetry of order 3, coinciding with itself after rotations of 120 degrees, 240 degrees, and 360 degrees.",
          type: "short"
        },
        {
          q: "Describe symmetry in nature with three examples.",
          a: "Symmetry is found throughout nature in beautiful and functional ways:\n\n1. Butterfly wings: Bilateral (line) symmetry. The left wing is the mirror image of the right wing about a vertical axis through the body. This helps with camouflage and attracting mates.\n\n2. Snowflakes: Snowflakes have 6-fold rotational symmetry (order 6) and 6 lines of symmetry. The hexagonal crystal structure of ice causes this pattern. Every snowflake has the same symmetry structure, though no two are exactly alike.\n\n3. Flowers: Many flowers (like sunflowers, daisies) have rotational symmetry. A sunflower typically has rotational symmetry related to Fibonacci numbers. A simple 5-petal flower has order 5 rotational symmetry and 5 lines of symmetry.\n\nSymmetry in nature often serves a purpose — in animals, bilateral symmetry indicates healthy development; in plants, it helps in pollination.",
          type: "long"
        }
      ]
    ]
  },

  "7-maths-13": {
    notes: [
      {
        heading: "3D Shapes — Faces, Edges and Vertices",
        body: "Solid shapes (3D figures) have three dimensions: length, width, and height.\n\nKey terms:\n• Face: A flat surface of a 3D shape\n• Edge: A line where two faces meet\n• Vertex (Vertices): A point where edges meet (a corner)\n\nCommon 3D shapes:\nShape           | Faces | Edges | Vertices\nCube            |   6   |  12   |    8\nCuboid          |   6   |  12   |    8\nTriangular prism|   5   |   9   |    6\nSquare pyramid  |   5   |   8   |    5\nCone            |   2   |   1   |    1\nCylinder        |   3   |   2   |    0\nSphere          |   1   |   0   |    0",
        highlight: "Cube: 6 faces, 12 edges, 8 vertices. All faces of a cube are identical squares.",
      },
      {
        heading: "Euler's Formula for Polyhedra",
        body: "A polyhedron is a 3D shape with flat polygonal faces.\n\nEuler's Formula: F + V − E = 2\nWhere F = number of Faces, V = number of Vertices, E = number of Edges.\n\nVerification:\n• Cube: F=6, V=8, E=12 → 6+8−12 = 2 ✓\n• Triangular prism: F=5, V=6, E=9 → 5+6−9 = 2 ✓\n• Square pyramid: F=5, V=5, E=8 → 5+5−8 = 2 ✓\n\nNote: Euler's formula applies to polyhedra (shapes with only flat faces). It does NOT apply to cones, cylinders, or spheres (as they have curved surfaces).",
        highlight: "Euler's Formula: F + V - E = 2 (for any convex polyhedron).",
      },
      {
        heading: "Nets of 3D Shapes",
        body: "A net is a 2D flat shape that can be folded to form a 3D solid.\n\nCube: A net of a cube has 6 equal squares arranged so that when folded, they form all 6 faces. There are 11 different nets for a cube.\n\nCuboid: 6 rectangles (faces come in 3 pairs of equal rectangles).\n\nTriangular prism: 2 triangles + 3 rectangles.\n\nSquare pyramid: 1 square (base) + 4 triangles.\n\nCone: 1 circle (base) + 1 sector of a larger circle (curved surface).\n\nCylinder: 2 circles + 1 rectangle (when the curved surface is unrolled).\n\nTo check if a net is valid: mentally fold it and ensure all faces meet correctly without overlapping.",
        highlight: "A valid net for a cube has exactly 6 squares. There are 11 valid nets for a cube.",
      },
      {
        heading: "Oblique Sketches and Isometric Drawings",
        body: "Oblique Sketch:\n• Used to give a 3D impression on a 2D surface\n• Parallel lines on the object appear parallel in the sketch\n• Dimensions may not be to scale\n• Edges going into the page are drawn at an angle (usually 45°) and sometimes shorter\n\nIsometric Sketch:\n• Uses isometric (triangular) dot paper\n• All edges are drawn to scale\n• Three equal axes are drawn at 120° to each other\n• Gives a more accurate 3D representation\n\nFront, Side and Top Views:\nEvery 3D object can be viewed from three directions, each giving a 2D shape:\n• Front view (elevation)\n• Side view (side elevation)\n• Top view (plan)",
        highlight: "Isometric sketches are drawn to scale on dot paper. Oblique sketches show depth but are not to scale.",
      },
    ],
    snippets: [
      { term: "Polyhedron", definition: "A 3D solid with flat polygonal faces. Plural: polyhedra.", example: "Cube, cuboid, pyramid, and prism are polyhedra. Cone and sphere are not." },
      { term: "Face", definition: "A flat surface forming part of the boundary of a 3D solid.", example: "A cube has 6 square faces." },
      { term: "Edge", definition: "A line segment where two faces of a polyhedron meet.", example: "A cube has 12 edges." },
      { term: "Vertex", definition: "A point where three or more edges meet in a polyhedron. Plural: vertices.", example: "A cube has 8 vertices, a pyramid has 5." },
      { term: "Net", definition: "A 2D flat pattern that folds up to form a 3D solid.", example: "Six squares arranged in a cross pattern can fold into a cube." },
      { term: "Euler's Formula", definition: "For any convex polyhedron: F + V - E = 2, where F = faces, V = vertices, E = edges.", example: "Triangular prism: F=5, V=6, E=9 → 5+6-9 = 2 ✓" },
      { term: "Prism", definition: "A polyhedron with two identical parallel polygonal bases connected by rectangular lateral faces.", example: "Triangular prism, square prism (cuboid), pentagonal prism." },
      { term: "Pyramid", definition: "A polyhedron with a polygonal base and triangular faces that meet at a single apex.", example: "Square pyramid has a square base and 4 triangular faces." },
    ],
    mcq: [
      [
        {
          q: "A cube has how many faces, edges, and vertices respectively?",
          options: ["4, 6, 4", "6, 12, 8", "8, 12, 6", "5, 8, 5"],
          answer: 1,
          explanation: "A cube has 6 faces (all squares), 12 edges, and 8 vertices. Verify with Euler: 6+8-12 = 2 ✓."
        },
        {
          q: "Euler's formula for a polyhedron states:",
          options: ["F + E = V + 2", "F + V - E = 2", "F - V + E = 2", "F × V = E"],
          answer: 1,
          explanation: "Euler's formula: F + V - E = 2, where F = faces, V = vertices, E = edges. This applies to all convex polyhedra."
        },
        {
          q: "How many triangular faces does a triangular prism have?",
          options: ["3", "5", "2", "4"],
          answer: 2,
          explanation: "A triangular prism has 2 triangular faces (the two bases) and 3 rectangular faces (the lateral faces). Total faces = 5."
        },
        {
          q: "The net of a cube consists of:",
          options: ["4 squares", "5 squares", "6 squares", "8 squares"],
          answer: 2,
          explanation: "A cube has 6 faces, all of which are squares. Its net consists of exactly 6 squares arranged so they fold into a cube."
        },
        {
          q: "A square pyramid has:",
          options: ["4 faces and 4 vertices", "5 faces and 5 vertices", "5 faces and 8 vertices", "6 faces and 8 vertices"],
          answer: 1,
          explanation: "A square pyramid has 5 faces (1 square base + 4 triangular faces), 5 vertices (4 base corners + 1 apex), and 8 edges. Euler: 5+5-8 = 2 ✓."
        },
        {
          q: "Which of the following is NOT a polyhedron?",
          options: ["Cube", "Triangular prism", "Cylinder", "Square pyramid"],
          answer: 2,
          explanation: "A cylinder has a curved surface, so it is NOT a polyhedron. Polyhedra have only flat polygonal faces."
        },
        {
          q: "How many different nets can a cube have?",
          options: ["6", "8", "11", "12"],
          answer: 2,
          explanation: "There are exactly 11 distinct nets for a cube (11 different arrangements of 6 squares that each fold into a cube)."
        },
        {
          q: "If a polyhedron has 6 faces and 8 vertices, how many edges does it have? (Use Euler's formula)",
          options: ["10", "12", "14", "8"],
          answer: 1,
          explanation: "Euler: F + V - E = 2 → 6 + 8 - E = 2 → 14 - E = 2 → E = 12."
        },
        {
          q: "When we unfold a cylinder, the curved surface becomes:",
          options: ["A circle", "A square", "A rectangle", "A triangle"],
          answer: 2,
          explanation: "When the curved surface of a cylinder is unrolled, it forms a rectangle. Its length equals the circumference of the circular base, and its width equals the height of the cylinder."
        },
        {
          q: "Which view of a cube looks like a square from every direction?",
          options: ["Front view only", "Top view only", "Front, side, and top views", "Side view only"],
          answer: 2,
          explanation: "A cube looks like a square from the front, from the side, and from the top, because all faces are equal squares."
        }
      ],
      [
        {
          q: "Assertion (A): A sphere has no edges or vertices. Reason (R): A sphere has no flat surfaces or sharp corners.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 0,
          explanation: "A sphere is perfectly round with no flat faces, edges, or vertices. R correctly explains A — without flat faces and corners, there are no edges or vertices."
        },
        {
          q: "Assertion (A): Euler's formula (F + V - E = 2) applies to all 3D shapes. Reason (R): Euler's formula is valid for all convex polyhedra.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 3,
          explanation: "A is false: Euler's formula does NOT apply to all 3D shapes (e.g., sphere, cone, cylinder). R is correct: it applies specifically to convex polyhedra."
        },
        {
          q: "Assertion (A): A cube and a cuboid have the same number of faces, edges, and vertices. Reason (R): Both are rectangular prisms.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 0,
          explanation: "Both have 6 faces, 12 edges, and 8 vertices. A cube is a special cuboid where all sides are equal. Both A and R are true and R explains the relationship."
        },
        {
          q: "Assertion (A): A cone is a polyhedron. Reason (R): A cone has a flat circular base and a curved lateral surface.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 3,
          explanation: "A is false: a cone is NOT a polyhedron because it has a curved surface. R is true and actually explains why it is NOT a polyhedron."
        },
        {
          q: "Assertion (A): A net is a 2D representation that shows all faces of a 3D shape unfolded. Reason (R): Any arrangement of the right number of faces forms a valid net.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 2,
          explanation: "A is true: a net is a 2D flat pattern that folds into a 3D shape. R is false: not every arrangement of 6 squares is a valid net for a cube — the arrangement must allow correct folding."
        },
        {
          q: "Assertion (A): A triangular prism has 9 edges. Reason (R): It has 2 triangular faces and 3 rectangular faces.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 1,
          explanation: "A is true: a triangular prism has 9 edges. R is also true (2 triangular + 3 rectangular = 5 faces). However, R does not directly explain the edge count — to find edges you need to count (3+3+3=9). Both true, but R does not explain A."
        },
        {
          q: "Assertion (A): An isometric sketch is drawn to scale. Reason (R): Isometric paper has dots at equal distances, and edges are drawn along three axes at 120° to each other.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 0,
          explanation: "Both true. Isometric drawings preserve the actual lengths of edges (drawn to scale). R correctly describes the properties of isometric paper that enable this."
        },
        {
          q: "Assertion (A): The top view of a cylinder is a rectangle. Reason (R): A cylinder has a curved surface.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 3,
          explanation: "A is false: the top view of a cylinder is a circle (you see the circular face). The side view is a rectangle. R is true but does not fix A."
        },
        {
          q: "Assertion (A): For a square pyramid, F + V - E = 2. Reason (R): Square pyramid has F=5, V=5, E=8.",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 0,
          explanation: "F + V - E = 5 + 5 - 8 = 2. Both true, and R provides the specific values used to verify Euler's formula."
        },
        {
          q: "Assertion (A): The net of a triangular prism has 5 shapes. Reason (R): A triangular prism has 5 faces (2 triangles and 3 rectangles).",
          options: ["Both A and R are true, and R correctly explains A", "Both A and R are true, but R does not correctly explain A", "A is true, but R is false", "A is false, but R is true"],
          answer: 0,
          explanation: "A net of a triangular prism shows all 5 faces: 2 triangular and 3 rectangular. Both true and R directly explains why the net has 5 shapes."
        }
      ]
    ],
    qa: [
      [
        {
          q: "State Euler's formula and verify it for a cuboid.",
          a: "Euler's Formula: F + V - E = 2\nwhere F = number of faces, V = number of vertices, E = number of edges.\n\nFor a Cuboid:\nF = 6 (six rectangular faces)\nV = 8 (eight corners)\nE = 12 (twelve edges)\n\nVerification: F + V - E = 6 + 8 - 12 = 14 - 12 = 2 ✓\n\nEuler's formula is satisfied for the cuboid.",
          type: "short"
        },
        {
          q: "Draw the net of a triangular prism and label all its faces.",
          a: "A triangular prism has 5 faces:\n- 2 triangular faces (the two bases)\n- 3 rectangular faces (the lateral faces)\n\nNet description:\nPlace one rectangle in the centre. Attach two more rectangles on each side of it (forming a row of 3 rectangles). Attach one triangle to the top of the centre rectangle and one triangle to the bottom of the centre rectangle.\n\nWhen folded:\n- The 3 rectangles wrap around to form the three lateral faces.\n- The 2 triangles fold up to close the two ends.\n\nAll 5 faces are clearly visible in the flat net.",
          type: "short"
        },
        {
          q: "What are the differences between a prism and a pyramid?",
          a: "PRISM:\n- Has TWO identical parallel polygonal bases\n- The lateral faces are rectangles (or parallelograms)\n- Named after the shape of its base: triangular prism, square prism, etc.\n- Example: Triangular prism has 2 triangular bases and 3 rectangular lateral faces\n\nPYRAMID:\n- Has ONE polygonal base\n- The lateral faces are triangles that meet at a single point called the apex\n- Named after the shape of its base: square pyramid, triangular pyramid, etc.\n- Example: Square pyramid has 1 square base and 4 triangular faces meeting at the apex",
          type: "short"
        },
        {
          q: "A polyhedron has 8 faces and 12 vertices. Find the number of edges using Euler's formula.",
          a: "Euler's Formula: F + V - E = 2\n\nGiven: F = 8, V = 12\nSubstituting: 8 + 12 - E = 2\n20 - E = 2\nE = 20 - 2 = 18\n\nThe polyhedron has 18 edges.",
          type: "short"
        },
        {
          q: "What is the difference between an oblique sketch and an isometric sketch?",
          a: "Oblique Sketch:\n- A rough 3D drawing on plain paper\n- Parallel lines appear parallel\n- NOT drawn to scale (depth edges are usually shorter)\n- Used for quick, approximate representations\n- Edges going into the page drawn at 45 degrees\n\nIsometric Sketch:\n- A 3D drawing on isometric (triangular dot) paper\n- Drawn to SCALE — all edges have their actual lengths\n- Uses three axes at 120 degrees to each other\n- More accurate and precise\n- Better for engineering and design drawings",
          type: "short"
        }
      ],
      [
        {
          q: "List all faces, edges and vertices of: (a) a cube, (b) a square pyramid, (c) a triangular prism. Verify Euler's formula for each.",
          a: "(a) CUBE:\nFaces (F) = 6 (all squares)\nVertices (V) = 8\nEdges (E) = 12\nEuler: 6 + 8 - 12 = 2 ✓\n\n(b) SQUARE PYRAMID:\nFaces (F) = 5 (1 square + 4 triangles)\nVertices (V) = 5 (4 base + 1 apex)\nEdges (E) = 8 (4 base + 4 lateral)\nEuler: 5 + 5 - 8 = 2 ✓\n\n(c) TRIANGULAR PRISM:\nFaces (F) = 5 (2 triangles + 3 rectangles)\nVertices (V) = 6 (3 on each triangular base)\nEdges (E) = 9 (3 on each triangle + 3 connecting them)\nEuler: 5 + 6 - 9 = 2 ✓\n\nEuler's formula holds for all three polyhedra.",
          type: "long"
        },
        {
          q: "What is a net? Describe the net of a cube. How many distinct nets are possible for a cube?",
          a: "A NET is a 2-dimensional flat pattern that, when folded along its edges, forms a 3-dimensional solid. It shows all the faces of the solid laid out flat.\n\nNet of a Cube:\n- A cube has 6 identical square faces.\n- In a net, these 6 squares are arranged so that adjacent squares share an edge.\n- When the net is folded, the squares become the faces of the cube.\n- A common net looks like a plus (+) sign or a cross shape.\n\nNumber of valid nets:\nThere are exactly 11 distinct nets for a cube. Each is a different arrangement of 6 connected squares. Not all arrangements of 6 squares are valid — the arrangement must allow all faces to meet correctly when folded.\n\nValidating a net: Mentally fold each square. Opposite faces must not overlap and every face must be covered.",
          type: "long"
        },
        {
          q: "Describe the front view, side view and top view of a cylinder.",
          a: "A cylinder has a circular base and a curved lateral surface.\n\nFront view:\nLooking at the cylinder from the front, you see a RECTANGLE.\nThe width of the rectangle = diameter of the circle.\nThe height of the rectangle = height of the cylinder.\n\nSide view:\nLooking at the cylinder from the side also gives a RECTANGLE (same as front view, since the cylinder looks the same from all sides).\n\nTop view:\nLooking down at the cylinder from above, you see a CIRCLE.\nThe circle has the same radius as the base of the cylinder.\n\nSummary: Front view = Rectangle. Side view = Rectangle. Top view = Circle.",
          type: "short"
        },
        {
          q: "Name 5 three-dimensional shapes found in daily life and identify the 3D geometric shape they resemble.",
          a: "1. Dice or sugar cube - CUBE\n   (6 equal square faces, perfect symmetry)\n\n2. Brick or matchbox - CUBOID\n   (6 rectangular faces, opposite faces equal)\n\n3. Tent or Egyptian pyramid - SQUARE PYRAMID\n   (square base with 4 triangular faces meeting at a point)\n\n4. Birthday party hat - CONE\n   (circular base with a curved surface meeting at an apex)\n\n5. Tin can (food can) - CYLINDER\n   (two circular faces with a curved lateral surface)\n\nBonus: Football (soccer ball) resembles a SPHERE (curved surface, no edges or vertices).",
          type: "short"
        },
        {
          q: "Can you have a polyhedron with 10 faces and 6 vertices? Use Euler's formula to find the number of edges.",
          a: "Given: F = 10, V = 6\n\nUsing Euler's Formula: F + V - E = 2\n10 + 6 - E = 2\n16 - E = 2\nE = 14\n\nSo if such a polyhedron exists, it would have 14 edges.\n\nLet us verify this is geometrically possible:\nWe need a polyhedron with 10 flat faces, 6 vertices, and 14 edges.\n\nThis is mathematically consistent with Euler's formula, so it is theoretically possible.\n\nConclusion: Yes, it is possible. Such a polyhedron would have 14 edges.",
          type: "short"
        }
      ]
    ]
  }
};
