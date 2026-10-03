// IELTS Listening · Practice Test 7 — content only. The exam engine is assets/listening-exam.js.
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
    "IELTS Listening. Practice Test 7."
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
    "Part 1. You will hear a recording about sports centre membership. First, look at questions 1 to 10."
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
    "The answer to question 2 is {{membership|2}}. Please write it clearly."
  ],
  [
    "speaker",
    "The answer to question 3 is {{morning|3}}. Please write it clearly."
  ],
  [
    "speaker",
    "The answer to question 4 is {{locker|4}}. Please write it clearly."
  ],
  [
    "speaker",
    "The answer to question 5 is {{trainer|5}}. Please write it clearly."
  ],
  [
    "speaker",
    "The additional answer to question 6 is {{address|6}}."
  ],
  [
    "speaker",
    "The additional answer to question 7 is {{fitness|7}}."
  ],
  [
    "speaker",
    "The additional answer to question 8 is {{evening|8}}."
  ],
  [
    "speaker",
    "The additional answer to question 9 is {{membership|9}}."
  ],
  [
    "speaker",
    "The additional answer to question 10 is {{coach|10}}."
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
    "Part 2. You will hear a recording about local history walking tour. First, look at questions 11 to 20."
  ],
  [
    "pause",
    3,
    "Reading time · Questions 11–20"
  ],
  [
    "presenter",
    "The answer to question 11 is {{bridge|11}}. Please write it clearly."
  ],
  [
    "presenter",
    "The answer to question 12 is {{statue|12}}. Please write it clearly."
  ],
  [
    "presenter",
    "The answer to question 13 is {{tickets|13}}. Please write it clearly."
  ],
  [
    "presenter",
    "The answer to question 14 is {{river|14}}. Please write it clearly."
  ],
  [
    "presenter",
    "The answer to question 15 is {{fountain|15}}. Please write it clearly."
  ],
  [
    "presenter",
    "The additional answer to question 16 is {{museum|16}}."
  ],
  [
    "presenter",
    "The additional answer to question 17 is {{clock|17}}."
  ],
  [
    "presenter",
    "The additional answer to question 18 is {{market|18}}."
  ],
  [
    "presenter",
    "The additional answer to question 19 is {{church|19}}."
  ],
  [
    "presenter",
    "The additional answer to question 20 is {{station|20}}."
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
    "Part 3. You will hear a recording about students designing a survey. First, look at questions 21 to 30."
  ],
  [
    "pause",
    3,
    "Reading time · Questions 21–30"
  ],
  [
    "tutor",
    "The answer to question 21 is {{sample|21}}. Please write it clearly."
  ],
  [
    "tutor",
    "The answer to question 22 is {{responses|22}}. Please write it clearly."
  ],
  [
    "tutor",
    "The answer to question 23 is {{online|23}}. Please write it clearly."
  ],
  [
    "tutor",
    "The answer to question 24 is {{pilot|24}}. Please write it clearly."
  ],
  [
    "tutor",
    "The answer to question 25 is {{bias|25}}. Please write it clearly."
  ],
  [
    "tutor",
    "The additional answer to question 26 is {{questions|26}}."
  ],
  [
    "tutor",
    "The additional answer to question 27 is {{telephone|27}}."
  ],
  [
    "tutor",
    "The additional answer to question 28 is {{consent|28}}."
  ],
  [
    "tutor",
    "The additional answer to question 29 is {{data|29}}."
  ],
  [
    "tutor",
    "The additional answer to question 30 is {{analysis|30}}."
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
    "Part 4. You will hear a recording about life of honeybees. First, look at questions 31 to 40."
  ],
  [
    "pause",
    3,
    "Reading time · Questions 31–40"
  ],
  [
    "lecturer",
    "The answer to question 31 is {{queen|31}}. Please write it clearly."
  ],
  [
    "lecturer",
    "The answer to question 32 is {{nectar|32}}. Please write it clearly."
  ],
  [
    "lecturer",
    "The answer to question 33 is {{hive|33}}. Please write it clearly."
  ],
  [
    "lecturer",
    "The answer to question 34 is {{wax|34}}. Please write it clearly."
  ],
  [
    "lecturer",
    "The answer to question 35 is {{colony|35}}. Please write it clearly."
  ],
  [
    "lecturer",
    "The additional answer to question 36 is {{worker|36}}."
  ],
  [
    "lecturer",
    "The additional answer to question 37 is {{pollen|37}}."
  ],
  [
    "lecturer",
    "The additional answer to question 38 is {{winter|38}}."
  ],
  [
    "lecturer",
    "The additional answer to question 39 is {{dance|39}}."
  ],
  [
    "lecturer",
    "The additional answer to question 40 is {{queen|40}}."
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
      "membership"
    ],
    "limit": "w"
  },
  "3": {
    "kind": "gap",
    "ans": [
      "morning"
    ],
    "limit": "w"
  },
  "4": {
    "kind": "gap",
    "ans": [
      "locker"
    ],
    "limit": "w"
  },
  "5": {
    "kind": "gap",
    "ans": [
      "trainer"
    ],
    "limit": "w"
  },
  "6": {
    "kind": "gap",
    "ans": [
      "address"
    ],
    "limit": "w"
  },
  "7": {
    "kind": "gap",
    "ans": [
      "fitness"
    ],
    "limit": "w"
  },
  "8": {
    "kind": "gap",
    "ans": [
      "evening"
    ],
    "limit": "w"
  },
  "9": {
    "kind": "gap",
    "ans": [
      "membership"
    ],
    "limit": "w"
  },
  "10": {
    "kind": "gap",
    "ans": [
      "coach"
    ],
    "limit": "w"
  },
  "11": {
    "kind": "gap",
    "ans": [
      "bridge"
    ],
    "limit": "w"
  },
  "12": {
    "kind": "gap",
    "ans": [
      "statue"
    ],
    "limit": "w"
  },
  "13": {
    "kind": "gap",
    "ans": [
      "tickets"
    ],
    "limit": "w"
  },
  "14": {
    "kind": "gap",
    "ans": [
      "river"
    ],
    "limit": "w"
  },
  "15": {
    "kind": "gap",
    "ans": [
      "fountain"
    ],
    "limit": "w"
  },
  "16": {
    "kind": "gap",
    "ans": [
      "museum"
    ],
    "limit": "w"
  },
  "17": {
    "kind": "gap",
    "ans": [
      "clock"
    ],
    "limit": "w"
  },
  "18": {
    "kind": "gap",
    "ans": [
      "market"
    ],
    "limit": "w"
  },
  "19": {
    "kind": "gap",
    "ans": [
      "church"
    ],
    "limit": "w"
  },
  "20": {
    "kind": "gap",
    "ans": [
      "station"
    ],
    "limit": "w"
  },
  "21": {
    "kind": "gap",
    "ans": [
      "sample"
    ],
    "limit": "w"
  },
  "22": {
    "kind": "gap",
    "ans": [
      "responses"
    ],
    "limit": "w"
  },
  "23": {
    "kind": "gap",
    "ans": [
      "online"
    ],
    "limit": "w"
  },
  "24": {
    "kind": "gap",
    "ans": [
      "pilot"
    ],
    "limit": "w"
  },
  "25": {
    "kind": "gap",
    "ans": [
      "bias"
    ],
    "limit": "w"
  },
  "26": {
    "kind": "gap",
    "ans": [
      "questions"
    ],
    "limit": "w"
  },
  "27": {
    "kind": "gap",
    "ans": [
      "telephone"
    ],
    "limit": "w"
  },
  "28": {
    "kind": "gap",
    "ans": [
      "consent"
    ],
    "limit": "w"
  },
  "29": {
    "kind": "gap",
    "ans": [
      "data"
    ],
    "limit": "w"
  },
  "30": {
    "kind": "gap",
    "ans": [
      "analysis"
    ],
    "limit": "w"
  },
  "31": {
    "kind": "gap",
    "ans": [
      "queen"
    ],
    "limit": "w"
  },
  "32": {
    "kind": "gap",
    "ans": [
      "nectar"
    ],
    "limit": "w"
  },
  "33": {
    "kind": "gap",
    "ans": [
      "hive"
    ],
    "limit": "w"
  },
  "34": {
    "kind": "gap",
    "ans": [
      "wax"
    ],
    "limit": "w"
  },
  "35": {
    "kind": "gap",
    "ans": [
      "colony"
    ],
    "limit": "w"
  },
  "36": {
    "kind": "gap",
    "ans": [
      "worker"
    ],
    "limit": "w"
  },
  "37": {
    "kind": "gap",
    "ans": [
      "pollen"
    ],
    "limit": "w"
  },
  "38": {
    "kind": "gap",
    "ans": [
      "winter"
    ],
    "limit": "w"
  },
  "39": {
    "kind": "gap",
    "ans": [
      "dance"
    ],
    "limit": "w"
  },
  "40": {
    "kind": "gap",
    "ans": [
      "queen"
    ],
    "limit": "w"
  }
};
  const LIMIT_WN = 'ONE WORD ONLY';
  const gap = n => `<span class="gap" data-q="${n}"><span class="n">${n}</span><input type="text" id="q${n}" data-q="${n}" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Question ${n}"></span>`;
  const PAPER = `<section class="part" id="part-1" data-part="1"><div class="part-head"><h2>Part 1</h2><span class="label">Questions 1–10</span></div><div class="qblock"><h3>Sports centre membership</h3><p class="instr">Complete the notes. Write <b>ONE WORD ONLY</b> for each answer.</p><div class="form"><div class="line"><span>1. Sports centre membership — answer:</span><span>\${gap(1)}</span></div><div class="line"><span>2. Sports centre membership — answer:</span><span>\${gap(2)}</span></div><div class="line"><span>3. Sports centre membership — answer:</span><span>\${gap(3)}</span></div><div class="line"><span>4. Sports centre membership — answer:</span><span>\${gap(4)}</span></div><div class="line"><span>5. Sports centre membership — answer:</span><span>\${gap(5)}</span></div><div class="line"><span>6. Sports centre membership — answer:</span><span>\${gap(6)}</span></div><div class="line"><span>7. Sports centre membership — answer:</span><span>\${gap(7)}</span></div><div class="line"><span>8. Sports centre membership — answer:</span><span>\${gap(8)}</span></div><div class="line"><span>9. Sports centre membership — answer:</span><span>\${gap(9)}</span></div><div class="line"><span>10. Sports centre membership — answer:</span><span>\${gap(10)}</span></div></div></div></section>
<section class="part" id="part-2" data-part="2" hidden><div class="part-head"><h2>Part 2</h2><span class="label">Questions 11–20</span></div><div class="qblock"><h3>Local history walking tour</h3><p class="instr">Complete the notes. Write <b>ONE WORD ONLY</b> for each answer.</p><div class="form"><div class="line"><span>11. Local history walking tour — answer:</span><span>\${gap(11)}</span></div><div class="line"><span>12. Local history walking tour — answer:</span><span>\${gap(12)}</span></div><div class="line"><span>13. Local history walking tour — answer:</span><span>\${gap(13)}</span></div><div class="line"><span>14. Local history walking tour — answer:</span><span>\${gap(14)}</span></div><div class="line"><span>15. Local history walking tour — answer:</span><span>\${gap(15)}</span></div><div class="line"><span>16. Local history walking tour — answer:</span><span>\${gap(16)}</span></div><div class="line"><span>17. Local history walking tour — answer:</span><span>\${gap(17)}</span></div><div class="line"><span>18. Local history walking tour — answer:</span><span>\${gap(18)}</span></div><div class="line"><span>19. Local history walking tour — answer:</span><span>\${gap(19)}</span></div><div class="line"><span>20. Local history walking tour — answer:</span><span>\${gap(20)}</span></div></div></div></section>
<section class="part" id="part-3" data-part="3" hidden><div class="part-head"><h2>Part 3</h2><span class="label">Questions 21–30</span></div><div class="qblock"><h3>Students designing a survey</h3><p class="instr">Complete the notes. Write <b>ONE WORD ONLY</b> for each answer.</p><div class="form"><div class="line"><span>21. Students designing a survey — answer:</span><span>\${gap(21)}</span></div><div class="line"><span>22. Students designing a survey — answer:</span><span>\${gap(22)}</span></div><div class="line"><span>23. Students designing a survey — answer:</span><span>\${gap(23)}</span></div><div class="line"><span>24. Students designing a survey — answer:</span><span>\${gap(24)}</span></div><div class="line"><span>25. Students designing a survey — answer:</span><span>\${gap(25)}</span></div><div class="line"><span>26. Students designing a survey — answer:</span><span>\${gap(26)}</span></div><div class="line"><span>27. Students designing a survey — answer:</span><span>\${gap(27)}</span></div><div class="line"><span>28. Students designing a survey — answer:</span><span>\${gap(28)}</span></div><div class="line"><span>29. Students designing a survey — answer:</span><span>\${gap(29)}</span></div><div class="line"><span>30. Students designing a survey — answer:</span><span>\${gap(30)}</span></div></div></div></section>
<section class="part" id="part-4" data-part="4" hidden><div class="part-head"><h2>Part 4</h2><span class="label">Questions 31–40</span></div><div class="qblock"><h3>Life of honeybees</h3><p class="instr">Complete the notes. Write <b>ONE WORD ONLY</b> for each answer.</p><div class="form"><div class="line"><span>31. Life of honeybees — answer:</span><span>\${gap(31)}</span></div><div class="line"><span>32. Life of honeybees — answer:</span><span>\${gap(32)}</span></div><div class="line"><span>33. Life of honeybees — answer:</span><span>\${gap(33)}</span></div><div class="line"><span>34. Life of honeybees — answer:</span><span>\${gap(34)}</span></div><div class="line"><span>35. Life of honeybees — answer:</span><span>\${gap(35)}</span></div><div class="line"><span>36. Life of honeybees — answer:</span><span>\${gap(36)}</span></div><div class="line"><span>37. Life of honeybees — answer:</span><span>\${gap(37)}</span></div><div class="line"><span>38. Life of honeybees — answer:</span><span>\${gap(38)}</span></div><div class="line"><span>39. Life of honeybees — answer:</span><span>\${gap(39)}</span></div><div class="line"><span>40. Life of honeybees — answer:</span><span>\${gap(40)}</span></div></div></div></section>`;
  const TIMELINE = [{"t":0,"focus":1},{"t":0,"pause":3,"label":"Reading time \u00b7 Questions 1\u201310"},{"t":3,"speech":1,"part":1},{"t":68.09,"pause":3,"label":"Checking time \u00b7 Part 1"},{"t":71.09,"focus":2},{"t":71.09,"pause":3,"label":"Reading time \u00b7 Questions 11\u201320"},{"t":74.09,"speech":1,"part":2},{"t":131.11,"pause":2,"label":"Checking time \u00b7 Part 2"},{"t":133.11,"focus":3},{"t":133.11,"pause":3,"label":"Reading time \u00b7 Questions 21\u201330"},{"t":136.11,"speech":1,"part":3},{"t":196.35,"pause":2,"label":"Checking time \u00b7 Part 3"},{"t":198.35,"focus":4},{"t":198.35,"pause":4,"label":"Reading time \u00b7 Questions 31\u201340"},{"t":202.35,"speech":1,"part":4}];
  const partNames = {1:'Part 1 · Sports centre membership', 2:'Part 2 · Local history walking tour', 3:'Part 3 · Students designing a survey', 4:'Part 4 · Life of honeybees'};
  window.LISTENING_TEST = { num: 7, audio: 'audio/listening-test7.mp3', minutes: 4, mb: 2, roles: ROLES, script: SCRIPT, Q, paper: PAPER, timeline: TIMELINE, partNames };
})();
