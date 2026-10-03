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
    "limit": "w"
  },
  "2": {
    "kind": "gap",
    "ans": [
      "course"
    ],
    "limit": "w"
  },
  "3": {
    "kind": "gap",
    "ans": [
      "tuesday"
    ],
    "limit": "w"
  },
  "4": {
    "kind": "gap",
    "ans": [
      "classroom"
    ],
    "limit": "w"
  },
  "5": {
    "kind": "gap",
    "ans": [
      "deposit"
    ],
    "limit": "w"
  },
  "6": {
    "kind": "gap",
    "ans": [
      "evening"
    ],
    "limit": "w"
  },
  "7": {
    "kind": "gap",
    "ans": [
      "teacher"
    ],
    "limit": "w"
  },
  "8": {
    "kind": "gap",
    "ans": [
      "level"
    ],
    "limit": "w"
  },
  "9": {
    "kind": "gap",
    "ans": [
      "online"
    ],
    "limit": "w"
  },
  "10": {
    "kind": "gap",
    "ans": [
      "registration"
    ],
    "limit": "w"
  },
  "11": {
    "kind": "gap",
    "ans": [
      "helmet"
    ],
    "limit": "w"
  },
  "12": {
    "kind": "gap",
    "ans": [
      "station"
    ],
    "limit": "w"
  },
  "13": {
    "kind": "gap",
    "ans": [
      "monthly"
    ],
    "limit": "w"
  },
  "14": {
    "kind": "gap",
    "ans": [
      "route"
    ],
    "limit": "w"
  },
  "15": {
    "kind": "gap",
    "ans": [
      "bicycle"
    ],
    "limit": "w"
  },
  "16": {
    "kind": "gap",
    "ans": [
      "lights"
    ],
    "limit": "w"
  },
  "17": {
    "kind": "gap",
    "ans": [
      "map"
    ],
    "limit": "w"
  },
  "18": {
    "kind": "gap",
    "ans": [
      "repair"
    ],
    "limit": "w"
  },
  "19": {
    "kind": "gap",
    "ans": [
      "traffic"
    ],
    "limit": "w"
  },
  "20": {
    "kind": "gap",
    "ans": [
      "helmet"
    ],
    "limit": "w"
  },
  "21": {
    "kind": "gap",
    "ans": [
      "interviews"
    ],
    "limit": "w"
  },
  "22": {
    "kind": "gap",
    "ans": [
      "visitors"
    ],
    "limit": "w"
  },
  "23": {
    "kind": "gap",
    "ans": [
      "photographs"
    ],
    "limit": "w"
  },
  "24": {
    "kind": "gap",
    "ans": [
      "budget"
    ],
    "limit": "w"
  },
  "25": {
    "kind": "gap",
    "ans": [
      "survey"
    ],
    "limit": "w"
  },
  "26": {
    "kind": "gap",
    "ans": [
      "accommodation"
    ],
    "limit": "w"
  },
  "27": {
    "kind": "gap",
    "ans": [
      "questionnaire"
    ],
    "limit": "w"
  },
  "28": {
    "kind": "gap",
    "ans": [
      "language"
    ],
    "limit": "w"
  },
  "29": {
    "kind": "gap",
    "ans": [
      "website"
    ],
    "limit": "w"
  },
  "30": {
    "kind": "gap",
    "ans": [
      "recommendation"
    ],
    "limit": "w"
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
  const PAPER = `<section class="part" id="part-1" data-part="1"><div class="part-head"><h2>Part 1</h2><span class="label">Questions 1–10</span></div><div class="qblock"><h3>Language school enrolment</h3><p class="instr">Complete the notes. Write <b>ONE WORD ONLY</b> for each answer.</p><div class="form"><div class="line"><span>1. Language school enrolment — answer:</span><span>\${gap(1)}</span></div><div class="line"><span>2. Language school enrolment — answer:</span><span>\${gap(2)}</span></div><div class="line"><span>3. Language school enrolment — answer:</span><span>\${gap(3)}</span></div><div class="line"><span>4. Language school enrolment — answer:</span><span>\${gap(4)}</span></div><div class="line"><span>5. Language school enrolment — answer:</span><span>\${gap(5)}</span></div><div class="line"><span>6. Language school enrolment — answer:</span><span>\${gap(6)}</span></div><div class="line"><span>7. Language school enrolment — answer:</span><span>\${gap(7)}</span></div><div class="line"><span>8. Language school enrolment — answer:</span><span>\${gap(8)}</span></div><div class="line"><span>9. Language school enrolment — answer:</span><span>\${gap(9)}</span></div><div class="line"><span>10. Language school enrolment — answer:</span><span>\${gap(10)}</span></div></div></div></section>
<section class="part" id="part-2" data-part="2" hidden><div class="part-head"><h2>Part 2</h2><span class="label">Questions 11–20</span></div><div class="qblock"><h3>City cycling scheme</h3><p class="instr">Complete the notes. Write <b>ONE WORD ONLY</b> for each answer.</p><div class="form"><div class="line"><span>11. City cycling scheme — answer:</span><span>\${gap(11)}</span></div><div class="line"><span>12. City cycling scheme — answer:</span><span>\${gap(12)}</span></div><div class="line"><span>13. City cycling scheme — answer:</span><span>\${gap(13)}</span></div><div class="line"><span>14. City cycling scheme — answer:</span><span>\${gap(14)}</span></div><div class="line"><span>15. City cycling scheme — answer:</span><span>\${gap(15)}</span></div><div class="line"><span>16. City cycling scheme — answer:</span><span>\${gap(16)}</span></div><div class="line"><span>17. City cycling scheme — answer:</span><span>\${gap(17)}</span></div><div class="line"><span>18. City cycling scheme — answer:</span><span>\${gap(18)}</span></div><div class="line"><span>19. City cycling scheme — answer:</span><span>\${gap(19)}</span></div><div class="line"><span>20. City cycling scheme — answer:</span><span>\${gap(20)}</span></div></div></div></section>
<section class="part" id="part-3" data-part="3" hidden><div class="part-head"><h2>Part 3</h2><span class="label">Questions 21–30</span></div><div class="qblock"><h3>Group project on tourism</h3><p class="instr">Complete the notes. Write <b>ONE WORD ONLY</b> for each answer.</p><div class="form"><div class="line"><span>21. Group project on tourism — answer:</span><span>\${gap(21)}</span></div><div class="line"><span>22. Group project on tourism — answer:</span><span>\${gap(22)}</span></div><div class="line"><span>23. Group project on tourism — answer:</span><span>\${gap(23)}</span></div><div class="line"><span>24. Group project on tourism — answer:</span><span>\${gap(24)}</span></div><div class="line"><span>25. Group project on tourism — answer:</span><span>\${gap(25)}</span></div><div class="line"><span>26. Group project on tourism — answer:</span><span>\${gap(26)}</span></div><div class="line"><span>27. Group project on tourism — answer:</span><span>\${gap(27)}</span></div><div class="line"><span>28. Group project on tourism — answer:</span><span>\${gap(28)}</span></div><div class="line"><span>29. Group project on tourism — answer:</span><span>\${gap(29)}</span></div><div class="line"><span>30. Group project on tourism — answer:</span><span>\${gap(30)}</span></div></div></div></section>
<section class="part" id="part-4" data-part="4" hidden><div class="part-head"><h2>Part 4</h2><span class="label">Questions 31–40</span></div><div class="qblock"><h3>History of paper</h3><p class="instr">Complete the notes. Write <b>ONE WORD ONLY</b> for each answer.</p><div class="form"><div class="line"><span>31. History of paper — answer:</span><span>\${gap(31)}</span></div><div class="line"><span>32. History of paper — answer:</span><span>\${gap(32)}</span></div><div class="line"><span>33. History of paper — answer:</span><span>\${gap(33)}</span></div><div class="line"><span>34. History of paper — answer:</span><span>\${gap(34)}</span></div><div class="line"><span>35. History of paper — answer:</span><span>\${gap(35)}</span></div><div class="line"><span>36. History of paper — answer:</span><span>\${gap(36)}</span></div><div class="line"><span>37. History of paper — answer:</span><span>\${gap(37)}</span></div><div class="line"><span>38. History of paper — answer:</span><span>\${gap(38)}</span></div><div class="line"><span>39. History of paper — answer:</span><span>\${gap(39)}</span></div><div class="line"><span>40. History of paper — answer:</span><span>\${gap(40)}</span></div></div></div></section>`;
  const TIMELINE = [{"t":0,"focus":1},{"t":0,"pause":3,"label":"Reading time \u00b7 Questions 1\u201310"},{"t":3,"speech":1,"part":1},{"t":68.28,"pause":3,"label":"Checking time \u00b7 Part 1"},{"t":71.28,"focus":2},{"t":71.28,"pause":3,"label":"Reading time \u00b7 Questions 11\u201320"},{"t":74.28,"speech":1,"part":2},{"t":130.99,"pause":2,"label":"Checking time \u00b7 Part 2"},{"t":132.99,"focus":3},{"t":132.99,"pause":3,"label":"Reading time \u00b7 Questions 21\u201330"},{"t":135.99,"speech":1,"part":3},{"t":196.78,"pause":2,"label":"Checking time \u00b7 Part 3"},{"t":198.78,"focus":4},{"t":198.78,"pause":4,"label":"Reading time \u00b7 Questions 31\u201340"},{"t":202.78,"speech":1,"part":4}];
  const partNames = {1:'Part 1 · Language school enrolment', 2:'Part 2 · City cycling scheme', 3:'Part 3 · Group project on tourism', 4:'Part 4 · History of paper'};
  window.LISTENING_TEST = { num: 4, audio: 'audio/listening-test4.mp3', minutes: 4, mb: 2, roles: ROLES, script: SCRIPT, Q, paper: PAPER, timeline: TIMELINE, partNames };
})();
