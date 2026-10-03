// IELTS Listening · Practice Test 4 — content only. The exam engine is assets/listening-exam.js.
(() => {
  'use strict';
  const ROLES = {"narrator": {"label": "Narrator", "voice": "en-GB"}, "speaker": {"label": "Speaker", "voice": "en-GB"}, "presenter": {"label": "Presenter", "voice": "en-GB"}, "tutor": {"label": "Tutor", "voice": "en-US"}, "lecturer": {"label": "Lecturer", "voice": "en-GB"}};
  const SCRIPT = [
  [
    "focus",
    1
  ],
  [
    "narrator",
    "IELTS Listening. Practice Test 4."
  ],
  [
    "narrator",
    "You will hear four recordings and answer forty questions. Each recording is played once only."
  ],
  [
    "focus",
    1
  ],
  [
    "narrator",
    "Now turn to Part 1."
  ],
  [
    "narrator",
    "Part 1. You will hear a recording about language school enrolment. First, look at questions 1 to 10."
  ],
  [
    "pause",
    3,
    "Reading time · Questions 1–10"
  ],
  [
    "speaker",
    "The answer to question 1 is {{surname|1}}. Please write it clearly."
  ],
  [
    "speaker",
    "The answer to question 2 is {{course|2}}. Please write it clearly."
  ],
  [
    "speaker",
    "The answer to question 3 is {{Tuesday|3}}. Please write it clearly."
  ],
  [
    "speaker",
    "The answer to question 4 is {{classroom|4}}. Please write it clearly."
  ],
  [
    "speaker",
    "The answer to question 5 is {{deposit|5}}. Please write it clearly."
  ],
  [
    "speaker",
    "The additional answer to question 6 is {{evening|6}}."
  ],
  [
    "speaker",
    "The additional answer to question 7 is {{teacher|7}}."
  ],
  [
    "speaker",
    "The additional answer to question 8 is {{level|8}}."
  ],
  [
    "speaker",
    "The additional answer to question 9 is {{online|9}}."
  ],
  [
    "speaker",
    "The additional answer to question 10 is {{registration|10}}."
  ],
  [
    "narrator",
    "That is the end of Part 1. Check your answers."
  ],
  [
    "pause",
    2,
    "Checking time · Part 1"
  ],
  [
    "focus",
    2
  ],
  [
    "narrator",
    "Now turn to Part 2."
  ],
  [
    "narrator",
    "Part 2. You will hear a recording about city cycling scheme. First, look at questions 11 to 20."
  ],
  [
    "pause",
    3,
    "Reading time · Questions 11–20"
  ],
  [
    "presenter",
    "The answer to question 11 is {{helmet|11}}. Please write it clearly."
  ],
  [
    "presenter",
    "The answer to question 12 is {{station|12}}. Please write it clearly."
  ],
  [
    "presenter",
    "The answer to question 13 is {{monthly|13}}. Please write it clearly."
  ],
  [
    "presenter",
    "The answer to question 14 is {{route|14}}. Please write it clearly."
  ],
  [
    "presenter",
    "The answer to question 15 is {{bicycle|15}}. Please write it clearly."
  ],
  [
    "presenter",
    "The additional answer to question 16 is {{lights|16}}."
  ],
  [
    "presenter",
    "The additional answer to question 17 is {{map|17}}."
  ],
  [
    "presenter",
    "The additional answer to question 18 is {{repair|18}}."
  ],
  [
    "presenter",
    "The additional answer to question 19 is {{traffic|19}}."
  ],
  [
    "presenter",
    "The additional answer to question 20 is {{helmet|20}}."
  ],
  [
    "narrator",
    "That is the end of Part 2. Check your answers."
  ],
  [
    "pause",
    2,
    "Checking time · Part 2"
  ],
  [
    "focus",
    3
  ],
  [
    "narrator",
    "Now turn to Part 3."
  ],
  [
    "narrator",
    "Part 3. You will hear a recording about group project on tourism. First, look at questions 21 to 30."
  ],
  [
    "pause",
    3,
    "Reading time · Questions 21–30"
  ],
  [
    "tutor",
    "The answer to question 21 is {{interviews|21}}. Please write it clearly."
  ],
  [
    "tutor",
    "The answer to question 22 is {{visitors|22}}. Please write it clearly."
  ],
  [
    "tutor",
    "The answer to question 23 is {{photographs|23}}. Please write it clearly."
  ],
  [
    "tutor",
    "The answer to question 24 is {{budget|24}}. Please write it clearly."
  ],
  [
    "tutor",
    "The answer to question 25 is {{survey|25}}. Please write it clearly."
  ],
  [
    "tutor",
    "The additional answer to question 26 is {{accommodation|26}}."
  ],
  [
    "tutor",
    "The additional answer to question 27 is {{questionnaire|27}}."
  ],
  [
    "tutor",
    "The additional answer to question 28 is {{language|28}}."
  ],
  [
    "tutor",
    "The additional answer to question 29 is {{website|29}}."
  ],
  [
    "tutor",
    "The additional answer to question 30 is {{recommendation|30}}."
  ],
  [
    "narrator",
    "That is the end of Part 3. Check your answers."
  ],
  [
    "pause",
    2,
    "Checking time · Part 3"
  ],
  [
    "focus",
    4
  ],
  [
    "narrator",
    "Now turn to Part 4."
  ],
  [
    "narrator",
    "Part 4. You will hear a recording about history of paper. First, look at questions 31 to 40."
  ],
  [
    "pause",
    3,
    "Reading time · Questions 31–40"
  ],
  [
    "lecturer",
    "The answer to question 31 is {{China|31}}. Please write it clearly."
  ],
  [
    "lecturer",
    "The answer to question 32 is {{bark|32}}. Please write it clearly."
  ],
  [
    "lecturer",
    "The answer to question 33 is {{cotton|33}}. Please write it clearly."
  ],
  [
    "lecturer",
    "The answer to question 34 is {{printing|34}}. Please write it clearly."
  ],
  [
    "lecturer",
    "The answer to question 35 is {{recycling|35}}. Please write it clearly."
  ],
  [
    "lecturer",
    "The additional answer to question 36 is {{Egypt|36}}."
  ],
  [
    "lecturer",
    "The additional answer to question 37 is {{fibres|37}}."
  ],
  [
    "lecturer",
    "The additional answer to question 38 is {{press|38}}."
  ],
  [
    "lecturer",
    "The additional answer to question 39 is {{books|39}}."
  ],
  [
    "lecturer",
    "The additional answer to question 40 is {{pulp|40}}."
  ],
  [
    "narrator",
    "That is the end of Part 4. That is the end of the listening test."
  ]
];
  const Q = {
  "1": {
    "kind": "gap",
    "ans": [
      "surname"
    ],
    "limit": "wn"
  },
  "2": {
    "kind": "gap",
    "ans": [
      "course"
    ],
    "limit": "wn"
  },
  "3": {
    "kind": "gap",
    "ans": [
      "tuesday"
    ],
    "limit": "wn"
  },
  "4": {
    "kind": "gap",
    "ans": [
      "classroom"
    ],
    "limit": "wn"
  },
  "5": {
    "kind": "gap",
    "ans": [
      "deposit"
    ],
    "limit": "wn"
  },
  "6": {
    "kind": "gap",
    "ans": [
      "evening"
    ],
    "limit": "wn"
  },
  "7": {
    "kind": "gap",
    "ans": [
      "teacher"
    ],
    "limit": "wn"
  },
  "8": {
    "kind": "gap",
    "ans": [
      "level"
    ],
    "limit": "wn"
  },
  "9": {
    "kind": "gap",
    "ans": [
      "online"
    ],
    "limit": "wn"
  },
  "10": {
    "kind": "gap",
    "ans": [
      "registration"
    ],
    "limit": "wn"
  },
  "11": {
    "kind": "mcq",
    "q": "Which detail is mentioned about city cycling scheme?",
    "opts": {
      "A": "helmet",
      "B": "the original arrangement",
      "C": "a later alternative"
    },
    "ans": "A"
  },
  "12": {
    "kind": "mcq",
    "q": "Which detail is mentioned about city cycling scheme?",
    "opts": {
      "A": "station",
      "B": "the original arrangement",
      "C": "a later alternative"
    },
    "ans": "A"
  },
  "13": {
    "kind": "mcq",
    "q": "Which detail is mentioned about city cycling scheme?",
    "opts": {
      "A": "monthly",
      "B": "the original arrangement",
      "C": "a later alternative"
    },
    "ans": "A"
  },
  "14": {
    "kind": "mcq",
    "q": "Which detail is mentioned about city cycling scheme?",
    "opts": {
      "A": "route",
      "B": "the original arrangement",
      "C": "a later alternative"
    },
    "ans": "A"
  },
  "15": {
    "kind": "mcq",
    "q": "Which detail is mentioned about city cycling scheme?",
    "opts": {
      "A": "bicycle",
      "B": "the original arrangement",
      "C": "a later alternative"
    },
    "ans": "A"
  },
  "16": {
    "kind": "match",
    "label": "Information point 16",
    "ans": "A"
  },
  "17": {
    "kind": "match",
    "label": "Information point 17",
    "ans": "B"
  },
  "18": {
    "kind": "match",
    "label": "Information point 18",
    "ans": "C"
  },
  "19": {
    "kind": "match",
    "label": "Information point 19",
    "ans": "D"
  },
  "20": {
    "kind": "match",
    "label": "Information point 20",
    "ans": "E"
  },
  "21": {
    "kind": "two",
    "pair": [
      21,
      22
    ],
    "ans": [
      "A",
      "C"
    ]
  },
  "22": {
    "kind": "two",
    "pair": [
      21,
      22
    ],
    "ans": [
      "A",
      "C"
    ]
  },
  "23": {
    "kind": "mcq",
    "q": "What did the speakers say about point 23?",
    "opts": {
      "A": "It was unexpected.",
      "B": "photographs",
      "C": "It was postponed."
    },
    "ans": "B"
  },
  "24": {
    "kind": "mcq",
    "q": "What did the speakers say about point 24?",
    "opts": {
      "A": "It was unexpected.",
      "B": "budget",
      "C": "It was postponed."
    },
    "ans": "B"
  },
  "25": {
    "kind": "mcq",
    "q": "What did the speakers say about point 25?",
    "opts": {
      "A": "It was unexpected.",
      "B": "survey",
      "C": "It was postponed."
    },
    "ans": "B"
  },
  "26": {
    "kind": "mcq",
    "q": "What did the speakers say about point 26?",
    "opts": {
      "A": "It was unexpected.",
      "B": "accommodation",
      "C": "It was postponed."
    },
    "ans": "B"
  },
  "27": {
    "kind": "match",
    "label": "Recommendation 27",
    "ans": "A"
  },
  "28": {
    "kind": "match",
    "label": "Recommendation 28",
    "ans": "B"
  },
  "29": {
    "kind": "match",
    "label": "Recommendation 29",
    "ans": "C"
  },
  "30": {
    "kind": "match",
    "label": "Recommendation 30",
    "ans": "D"
  },
  "31": {
    "kind": "gap",
    "ans": [
      "china"
    ],
    "limit": "w"
  },
  "32": {
    "kind": "gap",
    "ans": [
      "bark"
    ],
    "limit": "w"
  },
  "33": {
    "kind": "gap",
    "ans": [
      "cotton"
    ],
    "limit": "w"
  },
  "34": {
    "kind": "gap",
    "ans": [
      "printing"
    ],
    "limit": "w"
  },
  "35": {
    "kind": "gap",
    "ans": [
      "recycling"
    ],
    "limit": "w"
  },
  "36": {
    "kind": "gap",
    "ans": [
      "egypt"
    ],
    "limit": "w"
  },
  "37": {
    "kind": "gap",
    "ans": [
      "fibres"
    ],
    "limit": "w"
  },
  "38": {
    "kind": "gap",
    "ans": [
      "press"
    ],
    "limit": "w"
  },
  "39": {
    "kind": "gap",
    "ans": [
      "books"
    ],
    "limit": "w"
  },
  "40": {
    "kind": "gap",
    "ans": [
      "pulp"
    ],
    "limit": "w"
  }
};
  const LIMIT_WN = 'ONE WORD ONLY';
  const gap = n => `<span class="gap" data-q="${n}"><span class="n">${n}</span><input type="text" id="q${n}" data-q="${n}" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Question ${n}"></span>`;
  const PAPER = `<section class="part" id="part-1" data-part="1"><div class="part-head"><h2>Part 1</h2><span class="label">Questions 1–10</span></div><div class="qblock"><h3>Questions 1–10</h3><p class="instr">Complete the form. Write <b>ONE WORD AND/OR A NUMBER</b> for each answer.</p><div class="form"><div class="line"><span>Information 1:</span><span><span class="gap" data-q="1"><span class="n">1</span><input type="text" id="q1" data-q="1" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Question 1"></span></span></div><div class="line"><span>Information 2:</span><span><span class="gap" data-q="2"><span class="n">2</span><input type="text" id="q2" data-q="2" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Question 2"></span></span></div><div class="line"><span>Information 3:</span><span><span class="gap" data-q="3"><span class="n">3</span><input type="text" id="q3" data-q="3" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Question 3"></span></span></div><div class="line"><span>Information 4:</span><span><span class="gap" data-q="4"><span class="n">4</span><input type="text" id="q4" data-q="4" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Question 4"></span></span></div><div class="line"><span>Information 5:</span><span><span class="gap" data-q="5"><span class="n">5</span><input type="text" id="q5" data-q="5" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Question 5"></span></span></div><div class="line"><span>Information 6:</span><span><span class="gap" data-q="6"><span class="n">6</span><input type="text" id="q6" data-q="6" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Question 6"></span></span></div><div class="line"><span>Information 7:</span><span><span class="gap" data-q="7"><span class="n">7</span><input type="text" id="q7" data-q="7" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Question 7"></span></span></div><div class="line"><span>Information 8:</span><span><span class="gap" data-q="8"><span class="n">8</span><input type="text" id="q8" data-q="8" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Question 8"></span></span></div><div class="line"><span>Information 9:</span><span><span class="gap" data-q="9"><span class="n">9</span><input type="text" id="q9" data-q="9" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Question 9"></span></span></div><div class="line"><span>Information 10:</span><span><span class="gap" data-q="10"><span class="n">10</span><input type="text" id="q10" data-q="10" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Question 10"></span></span></div></div></div></section>
<section class="part" id="part-2" data-part="2" hidden><div class="part-head"><h2>Part 2</h2><span class="label">Questions 11–20</span></div><div class="qblock"><h3>Questions 11–15</h3><p class="instr">Choose the correct letter, <b>A, B or C</b>.</p><div class="mcq" data-q="11" role="radiogroup"><div class="q"><span class="qn">11</span><span>Which detail is mentioned about city cycling scheme?</span></div><label data-opt="A"><input type="radio" name="q11" value="A" data-q="11"><b>A</b><span>helmet</span></label><label data-opt="B"><input type="radio" name="q11" value="B" data-q="11"><b>B</b><span>the original arrangement</span></label><label data-opt="C"><input type="radio" name="q11" value="C" data-q="11"><b>C</b><span>a later alternative</span></label></div><div class="mcq" data-q="12" role="radiogroup"><div class="q"><span class="qn">12</span><span>Which detail is mentioned about city cycling scheme?</span></div><label data-opt="A"><input type="radio" name="q12" value="A" data-q="12"><b>A</b><span>station</span></label><label data-opt="B"><input type="radio" name="q12" value="B" data-q="12"><b>B</b><span>the original arrangement</span></label><label data-opt="C"><input type="radio" name="q12" value="C" data-q="12"><b>C</b><span>a later alternative</span></label></div><div class="mcq" data-q="13" role="radiogroup"><div class="q"><span class="qn">13</span><span>Which detail is mentioned about city cycling scheme?</span></div><label data-opt="A"><input type="radio" name="q13" value="A" data-q="13"><b>A</b><span>monthly</span></label><label data-opt="B"><input type="radio" name="q13" value="B" data-q="13"><b>B</b><span>the original arrangement</span></label><label data-opt="C"><input type="radio" name="q13" value="C" data-q="13"><b>C</b><span>a later alternative</span></label></div><div class="mcq" data-q="14" role="radiogroup"><div class="q"><span class="qn">14</span><span>Which detail is mentioned about city cycling scheme?</span></div><label data-opt="A"><input type="radio" name="q14" value="A" data-q="14"><b>A</b><span>route</span></label><label data-opt="B"><input type="radio" name="q14" value="B" data-q="14"><b>B</b><span>the original arrangement</span></label><label data-opt="C"><input type="radio" name="q14" value="C" data-q="14"><b>C</b><span>a later alternative</span></label></div><div class="mcq" data-q="15" role="radiogroup"><div class="q"><span class="qn">15</span><span>Which detail is mentioned about city cycling scheme?</span></div><label data-opt="A"><input type="radio" name="q15" value="A" data-q="15"><b>A</b><span>bicycle</span></label><label data-opt="B"><input type="radio" name="q15" value="B" data-q="15"><b>B</b><span>the original arrangement</span></label><label data-opt="C"><input type="radio" name="q15" value="C" data-q="15"><b>C</b><span>a later alternative</span></label></div><div class="boxlist"><span class="label" style="grid-column:1/-1">Stages</span><b>A</b><span>First stage</span><b>B</b><span>Second stage</span><b>C</b><span>Final stage</span><b>D</b><span>Optional stage</span><b>E</b><span>Additional stage</span></div><div class="match-row" data-q="16"><span class="qn">16</span><span class="who">Information point 16</span><select id="q16" data-q="16" aria-label="Question 16"><option value="">–</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option></select></div><div class="match-row" data-q="17"><span class="qn">17</span><span class="who">Information point 17</span><select id="q17" data-q="17" aria-label="Question 17"><option value="">–</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option></select></div><div class="match-row" data-q="18"><span class="qn">18</span><span class="who">Information point 18</span><select id="q18" data-q="18" aria-label="Question 18"><option value="">–</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option></select></div><div class="match-row" data-q="19"><span class="qn">19</span><span class="who">Information point 19</span><select id="q19" data-q="19" aria-label="Question 19"><option value="">–</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option></select></div><div class="match-row" data-q="20"><span class="qn">20</span><span class="who">Information point 20</span><select id="q20" data-q="20" aria-label="Question 20"><option value="">–</option><option>A</option><option>B</option><option>C</option><option>D</option><option>E</option></select></div></div></section>
<section class="part" id="part-3" data-part="3" hidden><div class="part-head"><h2>Part 3</h2><span class="label">Questions 21–30</span></div><div class="qblock"><h3>Questions 21 and 22</h3><p class="instr">Choose <b>TWO</b> letters, <b>A–E</b>.</p><div class="mcq" data-q="21" data-two="1"><div class="q"><span class="qn">21–22</span><span>Which TWO points were identified in the discussion?</span></div><label data-opt="A"><input type="checkbox" value="A" data-two="1"><b>A</b><span>interviews</span></label><label data-opt="B"><input type="checkbox" value="B" data-two="1"><b>B</b><span>the number of participants</span></label><label data-opt="C"><input type="checkbox" value="C" data-two="1"><b>C</b><span>visitors</span></label><label data-opt="D"><input type="checkbox" value="D" data-two="1"><b>D</b><span>the length of the recording</span></label><label data-opt="E"><input type="checkbox" value="E" data-two="1"><b>E</b><span>the cost of the project</span></label></div><div class="mcq" data-q="23" role="radiogroup"><div class="q"><span class="qn">23</span><span>What did the speakers say about point 23?</span></div><label data-opt="A"><input type="radio" name="q23" value="A" data-q="23"><b>A</b><span>It was unexpected.</span></label><label data-opt="B"><input type="radio" name="q23" value="B" data-q="23"><b>B</b><span>photographs</span></label><label data-opt="C"><input type="radio" name="q23" value="C" data-q="23"><b>C</b><span>It was postponed.</span></label></div><div class="mcq" data-q="24" role="radiogroup"><div class="q"><span class="qn">24</span><span>What did the speakers say about point 24?</span></div><label data-opt="A"><input type="radio" name="q24" value="A" data-q="24"><b>A</b><span>It was unexpected.</span></label><label data-opt="B"><input type="radio" name="q24" value="B" data-q="24"><b>B</b><span>budget</span></label><label data-opt="C"><input type="radio" name="q24" value="C" data-q="24"><b>C</b><span>It was postponed.</span></label></div><div class="mcq" data-q="25" role="radiogroup"><div class="q"><span class="qn">25</span><span>What did the speakers say about point 25?</span></div><label data-opt="A"><input type="radio" name="q25" value="A" data-q="25"><b>A</b><span>It was unexpected.</span></label><label data-opt="B"><input type="radio" name="q25" value="B" data-q="25"><b>B</b><span>survey</span></label><label data-opt="C"><input type="radio" name="q25" value="C" data-q="25"><b>C</b><span>It was postponed.</span></label></div><div class="mcq" data-q="26" role="radiogroup"><div class="q"><span class="qn">26</span><span>What did the speakers say about point 26?</span></div><label data-opt="A"><input type="radio" name="q26" value="A" data-q="26"><b>A</b><span>It was unexpected.</span></label><label data-opt="B"><input type="radio" name="q26" value="B" data-q="26"><b>B</b><span>accommodation</span></label><label data-opt="C"><input type="radio" name="q26" value="C" data-q="26"><b>C</b><span>It was postponed.</span></label></div><div class="boxlist"><span class="label" style="grid-column:1/-1">Recommendations</span><b>A</b><span>questionnaire</span><b>B</b><span>language</span><b>C</b><span>website</span><b>D</b><span>recommendation</span></div><div class="match-row" data-q="27"><span class="qn">27</span><span class="who">Recommendation 27</span><select id="q27" data-q="27" aria-label="Question 27"><option value="">–</option><option>A</option><option>B</option><option>C</option><option>D</option></select></div><div class="match-row" data-q="28"><span class="qn">28</span><span class="who">Recommendation 28</span><select id="q28" data-q="28" aria-label="Question 28"><option value="">–</option><option>A</option><option>B</option><option>C</option><option>D</option></select></div><div class="match-row" data-q="29"><span class="qn">29</span><span class="who">Recommendation 29</span><select id="q29" data-q="29" aria-label="Question 29"><option value="">–</option><option>A</option><option>B</option><option>C</option><option>D</option></select></div><div class="match-row" data-q="30"><span class="qn">30</span><span class="who">Recommendation 30</span><select id="q30" data-q="30" aria-label="Question 30"><option value="">–</option><option>A</option><option>B</option><option>C</option><option>D</option></select></div></div></section>
<section class="part" id="part-4" data-part="4" hidden><div class="part-head"><h2>Part 4</h2><span class="label">Questions 31–40</span></div><div class="qblock"><h3>Questions 31–40</h3><p class="instr">Complete the notes. Write <b>ONE WORD ONLY</b> for each answer.</p><div class="notes"><h4>History of paper</h4><ul><li>Key term 31: <span class="gap" data-q="31"><span class="n">31</span><input type="text" id="q31" data-q="31" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Question 31"></span>.</li><li>Key term 32: <span class="gap" data-q="32"><span class="n">32</span><input type="text" id="q32" data-q="32" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Question 32"></span>.</li><li>Key term 33: <span class="gap" data-q="33"><span class="n">33</span><input type="text" id="q33" data-q="33" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Question 33"></span>.</li><li>Key term 34: <span class="gap" data-q="34"><span class="n">34</span><input type="text" id="q34" data-q="34" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Question 34"></span>.</li><li>Key term 35: <span class="gap" data-q="35"><span class="n">35</span><input type="text" id="q35" data-q="35" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Question 35"></span>.</li><li>Key term 36: <span class="gap" data-q="36"><span class="n">36</span><input type="text" id="q36" data-q="36" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Question 36"></span>.</li><li>Key term 37: <span class="gap" data-q="37"><span class="n">37</span><input type="text" id="q37" data-q="37" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Question 37"></span>.</li><li>Key term 38: <span class="gap" data-q="38"><span class="n">38</span><input type="text" id="q38" data-q="38" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Question 38"></span>.</li><li>Key term 39: <span class="gap" data-q="39"><span class="n">39</span><input type="text" id="q39" data-q="39" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Question 39"></span>.</li><li>Key term 40: <span class="gap" data-q="40"><span class="n">40</span><input type="text" id="q40" data-q="40" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Question 40"></span>.</li></ul></div></div></section>`;
  const TIMELINE = [{"t":0,"focus":1},{"t":0,"pause":3,"label":"Reading time \u00b7 Questions 1\u201310"},{"t":3,"speech":1,"part":1},{"t":68.28,"pause":3,"label":"Checking time \u00b7 Part 1"},{"t":71.28,"focus":2},{"t":71.28,"pause":3,"label":"Reading time \u00b7 Questions 11\u201320"},{"t":74.28,"speech":1,"part":2},{"t":130.99,"pause":2,"label":"Checking time \u00b7 Part 2"},{"t":132.99,"focus":3},{"t":132.99,"pause":3,"label":"Reading time \u00b7 Questions 21\u201330"},{"t":135.99,"speech":1,"part":3},{"t":196.78,"pause":2,"label":"Checking time \u00b7 Part 3"},{"t":198.78,"focus":4},{"t":198.78,"pause":4,"label":"Reading time \u00b7 Questions 31\u201340"},{"t":202.78,"speech":1,"part":4}];
  const partNames = {1:'Part 1 · Language school enrolment', 2:'Part 2 · City cycling scheme', 3:'Part 3 · Group project on tourism', 4:'Part 4 · History of paper'};
  window.LISTENING_TEST = { num: 4, audio: 'audio/listening-test4.mp3', minutes: 4, mb: 2, roles: ROLES, script: SCRIPT, Q, paper: PAPER, timeline: TIMELINE, partNames };
})();
