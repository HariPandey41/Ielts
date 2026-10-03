// IELTS Listening · Practice Test 3 — content only. The exam engine is assets/listening-exam.js.
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
    "IELTS Listening. Practice Test 3."
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
    "Part 1. You will hear a recording about community garden project. First, look at questions 1 to 10."
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
    "The answer to question 2 is {{address|2}}. Please write it clearly."
  ],
  [
    "speaker",
    "The answer to question 3 is {{postcode|3}}. Please write it clearly."
  ],
  [
    "speaker",
    "The answer to question 4 is {{occupation|4}}. Please write it clearly."
  ],
  [
    "speaker",
    "The answer to question 5 is {{membership|5}}. Please write it clearly."
  ],
  [
    "speaker",
    "The additional answer to question 6 is {{garden|6}}."
  ],
  [
    "speaker",
    "The additional answer to question 7 is {{postcode|7}}."
  ],
  [
    "speaker",
    "The additional answer to question 8 is {{manager|8}}."
  ],
  [
    "speaker",
    "The additional answer to question 9 is {{Monday|9}}."
  ],
  [
    "speaker",
    "The additional answer to question 10 is {{harvest|10}}."
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
    "Part 2. You will hear a recording about museum open day. First, look at questions 11 to 20."
  ],
  [
    "pause",
    3,
    "Reading time · Questions 11–20"
  ],
  [
    "presenter",
    "The answer to question 11 is {{Saturday|11}}. Please write it clearly."
  ],
  [
    "presenter",
    "The answer to question 12 is {{entrance|12}}. Please write it clearly."
  ],
  [
    "presenter",
    "The answer to question 13 is {{volunteers|13}}. Please write it clearly."
  ],
  [
    "presenter",
    "The answer to question 14 is {{workshop|14}}. Please write it clearly."
  ],
  [
    "presenter",
    "The answer to question 15 is {{tickets|15}}. Please write it clearly."
  ],
  [
    "presenter",
    "The additional answer to question 16 is {{gallery|16}}."
  ],
  [
    "presenter",
    "The additional answer to question 17 is {{guide|17}}."
  ],
  [
    "presenter",
    "The additional answer to question 18 is {{children|18}}."
  ],
  [
    "presenter",
    "The additional answer to question 19 is {{programme|19}}."
  ],
  [
    "presenter",
    "The additional answer to question 20 is {{refreshments|20}}."
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
    "Part 3. You will hear a recording about student presentation about sleep. First, look at questions 21 to 30."
  ],
  [
    "pause",
    3,
    "Reading time · Questions 21–30"
  ],
  [
    "tutor",
    "The answer to question 21 is {{questionnaire|21}}. Please write it clearly."
  ],
  [
    "tutor",
    "The answer to question 22 is {{bedtime|22}}. Please write it clearly."
  ],
  [
    "tutor",
    "The answer to question 23 is {{screen|23}}. Please write it clearly."
  ],
  [
    "tutor",
    "The answer to question 24 is {{diary|24}}. Please write it clearly."
  ],
  [
    "tutor",
    "The answer to question 25 is {{sample|25}}. Please write it clearly."
  ],
  [
    "tutor",
    "The additional answer to question 26 is {{routine|26}}."
  ],
  [
    "tutor",
    "The additional answer to question 27 is {{participants|27}}."
  ],
  [
    "tutor",
    "The additional answer to question 28 is {{results|28}}."
  ],
  [
    "tutor",
    "The additional answer to question 29 is {{weekend|29}}."
  ],
  [
    "tutor",
    "The additional answer to question 30 is {{conclusion|30}}."
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
    "Part 4. You will hear a recording about science of urban trees. First, look at questions 31 to 40."
  ],
  [
    "pause",
    3,
    "Reading time · Questions 31–40"
  ],
  [
    "lecturer",
    "The answer to question 31 is {{roots|31}}. Please write it clearly."
  ],
  [
    "lecturer",
    "The answer to question 32 is {{shade|32}}. Please write it clearly."
  ],
  [
    "lecturer",
    "The answer to question 33 is {{carbon|33}}. Please write it clearly."
  ],
  [
    "lecturer",
    "The answer to question 34 is {{species|34}}. Please write it clearly."
  ],
  [
    "lecturer",
    "The answer to question 35 is {{canopy|35}}. Please write it clearly."
  ],
  [
    "lecturer",
    "The additional answer to question 36 is {{trunk|36}}."
  ],
  [
    "lecturer",
    "The additional answer to question 37 is {{leaves|37}}."
  ],
  [
    "lecturer",
    "The additional answer to question 38 is {{temperature|38}}."
  ],
  [
    "lecturer",
    "The additional answer to question 39 is {{wildlife|39}}."
  ],
  [
    "lecturer",
    "The additional answer to question 40 is {{branches|40}}."
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
      "address"
    ],
    "limit": "w"
  },
  "3": {
    "kind": "gap",
    "ans": [
      "postcode"
    ],
    "limit": "w"
  },
  "4": {
    "kind": "gap",
    "ans": [
      "occupation"
    ],
    "limit": "w"
  },
  "5": {
    "kind": "gap",
    "ans": [
      "membership"
    ],
    "limit": "w"
  },
  "6": {
    "kind": "gap",
    "ans": [
      "garden"
    ],
    "limit": "w"
  },
  "7": {
    "kind": "gap",
    "ans": [
      "postcode"
    ],
    "limit": "w"
  },
  "8": {
    "kind": "gap",
    "ans": [
      "manager"
    ],
    "limit": "w"
  },
  "9": {
    "kind": "gap",
    "ans": [
      "monday"
    ],
    "limit": "w"
  },
  "10": {
    "kind": "gap",
    "ans": [
      "harvest"
    ],
    "limit": "w"
  },
  "11": {
    "kind": "gap",
    "ans": [
      "saturday"
    ],
    "limit": "w"
  },
  "12": {
    "kind": "gap",
    "ans": [
      "entrance"
    ],
    "limit": "w"
  },
  "13": {
    "kind": "gap",
    "ans": [
      "volunteers"
    ],
    "limit": "w"
  },
  "14": {
    "kind": "gap",
    "ans": [
      "workshop"
    ],
    "limit": "w"
  },
  "15": {
    "kind": "gap",
    "ans": [
      "tickets"
    ],
    "limit": "w"
  },
  "16": {
    "kind": "gap",
    "ans": [
      "gallery"
    ],
    "limit": "w"
  },
  "17": {
    "kind": "gap",
    "ans": [
      "guide"
    ],
    "limit": "w"
  },
  "18": {
    "kind": "gap",
    "ans": [
      "children"
    ],
    "limit": "w"
  },
  "19": {
    "kind": "gap",
    "ans": [
      "programme"
    ],
    "limit": "w"
  },
  "20": {
    "kind": "gap",
    "ans": [
      "refreshments"
    ],
    "limit": "w"
  },
  "21": {
    "kind": "gap",
    "ans": [
      "questionnaire"
    ],
    "limit": "w"
  },
  "22": {
    "kind": "gap",
    "ans": [
      "bedtime"
    ],
    "limit": "w"
  },
  "23": {
    "kind": "gap",
    "ans": [
      "screen"
    ],
    "limit": "w"
  },
  "24": {
    "kind": "gap",
    "ans": [
      "diary"
    ],
    "limit": "w"
  },
  "25": {
    "kind": "gap",
    "ans": [
      "sample"
    ],
    "limit": "w"
  },
  "26": {
    "kind": "gap",
    "ans": [
      "routine"
    ],
    "limit": "w"
  },
  "27": {
    "kind": "gap",
    "ans": [
      "participants"
    ],
    "limit": "w"
  },
  "28": {
    "kind": "gap",
    "ans": [
      "results"
    ],
    "limit": "w"
  },
  "29": {
    "kind": "gap",
    "ans": [
      "weekend"
    ],
    "limit": "w"
  },
  "30": {
    "kind": "gap",
    "ans": [
      "conclusion"
    ],
    "limit": "w"
  },
  "31": {
    "kind": "gap",
    "ans": [
      "roots"
    ],
    "limit": "w"
  },
  "32": {
    "kind": "gap",
    "ans": [
      "shade"
    ],
    "limit": "w"
  },
  "33": {
    "kind": "gap",
    "ans": [
      "carbon"
    ],
    "limit": "w"
  },
  "34": {
    "kind": "gap",
    "ans": [
      "species"
    ],
    "limit": "w"
  },
  "35": {
    "kind": "gap",
    "ans": [
      "canopy"
    ],
    "limit": "w"
  },
  "36": {
    "kind": "gap",
    "ans": [
      "trunk"
    ],
    "limit": "w"
  },
  "37": {
    "kind": "gap",
    "ans": [
      "leaves"
    ],
    "limit": "w"
  },
  "38": {
    "kind": "gap",
    "ans": [
      "temperature"
    ],
    "limit": "w"
  },
  "39": {
    "kind": "gap",
    "ans": [
      "wildlife"
    ],
    "limit": "w"
  },
  "40": {
    "kind": "gap",
    "ans": [
      "branches"
    ],
    "limit": "w"
  }
};
  const LIMIT_WN = 'ONE WORD ONLY';
  const gap = n => `<span class="gap" data-q="${n}"><span class="n">${n}</span><input type="text" id="q${n}" data-q="${n}" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Question ${n}"></span>`;
  const PAPER = `<section class="part" id="part-1" data-part="1"><div class="part-head"><h2>Part 1</h2><span class="label">Questions 1–10</span></div><div class="qblock"><h3>Community garden project</h3><p class="instr">Complete the notes. Write <b>ONE WORD ONLY</b> for each answer.</p><div class="form"><div class="line"><span>1. Community garden project — answer:</span><span>\${gap(1)}</span></div><div class="line"><span>2. Community garden project — answer:</span><span>\${gap(2)}</span></div><div class="line"><span>3. Community garden project — answer:</span><span>\${gap(3)}</span></div><div class="line"><span>4. Community garden project — answer:</span><span>\${gap(4)}</span></div><div class="line"><span>5. Community garden project — answer:</span><span>\${gap(5)}</span></div><div class="line"><span>6. Community garden project — answer:</span><span>\${gap(6)}</span></div><div class="line"><span>7. Community garden project — answer:</span><span>\${gap(7)}</span></div><div class="line"><span>8. Community garden project — answer:</span><span>\${gap(8)}</span></div><div class="line"><span>9. Community garden project — answer:</span><span>\${gap(9)}</span></div><div class="line"><span>10. Community garden project — answer:</span><span>\${gap(10)}</span></div></div></div></section>
<section class="part" id="part-2" data-part="2" hidden><div class="part-head"><h2>Part 2</h2><span class="label">Questions 11–20</span></div><div class="qblock"><h3>Museum open day</h3><p class="instr">Complete the notes. Write <b>ONE WORD ONLY</b> for each answer.</p><div class="form"><div class="line"><span>11. Museum open day — answer:</span><span>\${gap(11)}</span></div><div class="line"><span>12. Museum open day — answer:</span><span>\${gap(12)}</span></div><div class="line"><span>13. Museum open day — answer:</span><span>\${gap(13)}</span></div><div class="line"><span>14. Museum open day — answer:</span><span>\${gap(14)}</span></div><div class="line"><span>15. Museum open day — answer:</span><span>\${gap(15)}</span></div><div class="line"><span>16. Museum open day — answer:</span><span>\${gap(16)}</span></div><div class="line"><span>17. Museum open day — answer:</span><span>\${gap(17)}</span></div><div class="line"><span>18. Museum open day — answer:</span><span>\${gap(18)}</span></div><div class="line"><span>19. Museum open day — answer:</span><span>\${gap(19)}</span></div><div class="line"><span>20. Museum open day — answer:</span><span>\${gap(20)}</span></div></div></div></section>
<section class="part" id="part-3" data-part="3" hidden><div class="part-head"><h2>Part 3</h2><span class="label">Questions 21–30</span></div><div class="qblock"><h3>Student presentation about sleep</h3><p class="instr">Complete the notes. Write <b>ONE WORD ONLY</b> for each answer.</p><div class="form"><div class="line"><span>21. Student presentation about sleep — answer:</span><span>\${gap(21)}</span></div><div class="line"><span>22. Student presentation about sleep — answer:</span><span>\${gap(22)}</span></div><div class="line"><span>23. Student presentation about sleep — answer:</span><span>\${gap(23)}</span></div><div class="line"><span>24. Student presentation about sleep — answer:</span><span>\${gap(24)}</span></div><div class="line"><span>25. Student presentation about sleep — answer:</span><span>\${gap(25)}</span></div><div class="line"><span>26. Student presentation about sleep — answer:</span><span>\${gap(26)}</span></div><div class="line"><span>27. Student presentation about sleep — answer:</span><span>\${gap(27)}</span></div><div class="line"><span>28. Student presentation about sleep — answer:</span><span>\${gap(28)}</span></div><div class="line"><span>29. Student presentation about sleep — answer:</span><span>\${gap(29)}</span></div><div class="line"><span>30. Student presentation about sleep — answer:</span><span>\${gap(30)}</span></div></div></div></section>
<section class="part" id="part-4" data-part="4" hidden><div class="part-head"><h2>Part 4</h2><span class="label">Questions 31–40</span></div><div class="qblock"><h3>Science of urban trees</h3><p class="instr">Complete the notes. Write <b>ONE WORD ONLY</b> for each answer.</p><div class="form"><div class="line"><span>31. Science of urban trees — answer:</span><span>\${gap(31)}</span></div><div class="line"><span>32. Science of urban trees — answer:</span><span>\${gap(32)}</span></div><div class="line"><span>33. Science of urban trees — answer:</span><span>\${gap(33)}</span></div><div class="line"><span>34. Science of urban trees — answer:</span><span>\${gap(34)}</span></div><div class="line"><span>35. Science of urban trees — answer:</span><span>\${gap(35)}</span></div><div class="line"><span>36. Science of urban trees — answer:</span><span>\${gap(36)}</span></div><div class="line"><span>37. Science of urban trees — answer:</span><span>\${gap(37)}</span></div><div class="line"><span>38. Science of urban trees — answer:</span><span>\${gap(38)}</span></div><div class="line"><span>39. Science of urban trees — answer:</span><span>\${gap(39)}</span></div><div class="line"><span>40. Science of urban trees — answer:</span><span>\${gap(40)}</span></div></div></div></section>`;
  const TIMELINE = [{"t":0,"focus":1},{"t":0,"pause":3,"label":"Reading time \u00b7 Questions 1\u201310"},{"t":3,"speech":1,"part":1},{"t":69.14,"pause":3,"label":"Checking time \u00b7 Part 1"},{"t":72.14,"focus":2},{"t":72.14,"pause":3,"label":"Reading time \u00b7 Questions 11\u201320"},{"t":75.14,"speech":1,"part":2},{"t":132.67,"pause":2,"label":"Checking time \u00b7 Part 2"},{"t":134.67,"focus":3},{"t":134.67,"pause":3,"label":"Reading time \u00b7 Questions 21\u201330"},{"t":137.67,"speech":1,"part":3},{"t":198.3,"pause":2,"label":"Checking time \u00b7 Part 3"},{"t":200.3,"focus":4},{"t":200.3,"pause":4,"label":"Reading time \u00b7 Questions 31\u201340"},{"t":204.3,"speech":1,"part":4}];
  const partNames = {1:'Part 1 · Community garden project', 2:'Part 2 · Museum open day', 3:'Part 3 · Student presentation about sleep', 4:'Part 4 · Science of urban trees'};
  window.LISTENING_TEST = { num: 3, audio: 'audio/listening-test3.mp3', minutes: 4, mb: 2, roles: ROLES, script: SCRIPT, Q, paper: PAPER, timeline: TIMELINE, partNames };
})();
