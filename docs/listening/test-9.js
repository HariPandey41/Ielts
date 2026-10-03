// IELTS Listening · Practice Test 9 — content only. The exam engine is assets/listening-exam.js.
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
    "IELTS Listening. Practice Test 9."
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
    "Part 1. You will hear a recording about campsite booking. First, look at questions 1 to 10."
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
    "The answer to question 2 is {{tent|2}}. Please write it clearly."
  ],
  [
    "speaker",
    "The answer to question 3 is {{August|3}}. Please write it clearly."
  ],
  [
    "speaker",
    "The answer to question 4 is {{showers|4}}. Please write it clearly."
  ],
  [
    "speaker",
    "The answer to question 5 is {{firewood|5}}. Please write it clearly."
  ],
  [
    "speaker",
    "The additional answer to question 6 is {{address|6}}."
  ],
  [
    "speaker",
    "The additional answer to question 7 is {{pitch|7}}."
  ],
  [
    "speaker",
    "The additional answer to question 8 is {{arrival|8}}."
  ],
  [
    "speaker",
    "The additional answer to question 9 is {{kitchen|9}}."
  ],
  [
    "speaker",
    "The additional answer to question 10 is {{booking|10}}."
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
    "Part 2. You will hear a recording about botanical garden talk. First, look at questions 11 to 20."
  ],
  [
    "pause",
    3,
    "Reading time · Questions 11–20"
  ],
  [
    "presenter",
    "The answer to question 11 is {{orchid|11}}. Please write it clearly."
  ],
  [
    "presenter",
    "The answer to question 12 is {{greenhouse|12}}. Please write it clearly."
  ],
  [
    "presenter",
    "The answer to question 13 is {{seeds|13}}. Please write it clearly."
  ],
  [
    "presenter",
    "The answer to question 14 is {{pond|14}}. Please write it clearly."
  ],
  [
    "presenter",
    "The answer to question 15 is {{entrance|15}}. Please write it clearly."
  ],
  [
    "presenter",
    "The additional answer to question 16 is {{rare|16}}."
  ],
  [
    "presenter",
    "The additional answer to question 17 is {{climate|17}}."
  ],
  [
    "presenter",
    "The additional answer to question 18 is {{botanist|18}}."
  ],
  [
    "presenter",
    "The additional answer to question 19 is {{water|19}}."
  ],
  [
    "presenter",
    "The additional answer to question 20 is {{path|20}}."
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
    "Part 3. You will hear a recording about students planning a recycling study. First, look at questions 21 to 30."
  ],
  [
    "pause",
    3,
    "Reading time · Questions 21–30"
  ],
  [
    "tutor",
    "The answer to question 21 is {{bins|21}}. Please write it clearly."
  ],
  [
    "tutor",
    "The answer to question 22 is {{households|22}}. Please write it clearly."
  ],
  [
    "tutor",
    "The answer to question 23 is {{weight|23}}. Please write it clearly."
  ],
  [
    "tutor",
    "The answer to question 24 is {{targets|24}}. Please write it clearly."
  ],
  [
    "tutor",
    "The answer to question 25 is {{report|25}}. Please write it clearly."
  ],
  [
    "tutor",
    "The additional answer to question 26 is {{plastic|26}}."
  ],
  [
    "tutor",
    "The additional answer to question 27 is {{collection|27}}."
  ],
  [
    "tutor",
    "The additional answer to question 28 is {{weighing|28}}."
  ],
  [
    "tutor",
    "The additional answer to question 29 is {{community|29}}."
  ],
  [
    "tutor",
    "The additional answer to question 30 is {{reduction|30}}."
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
    "Part 4. You will hear a recording about history of bridges. First, look at questions 31 to 40."
  ],
  [
    "pause",
    3,
    "Reading time · Questions 31–40"
  ],
  [
    "lecturer",
    "The answer to question 31 is {{stone|31}}. Please write it clearly."
  ],
  [
    "lecturer",
    "The answer to question 32 is {{arch|32}}. Please write it clearly."
  ],
  [
    "lecturer",
    "The answer to question 33 is {{steel|33}}. Please write it clearly."
  ],
  [
    "lecturer",
    "The answer to question 34 is {{suspension|34}}. Please write it clearly."
  ],
  [
    "lecturer",
    "The answer to question 35 is {{engineer|35}}. Please write it clearly."
  ],
  [
    "lecturer",
    "The additional answer to question 36 is {{wood|36}}."
  ],
  [
    "lecturer",
    "The additional answer to question 37 is {{cables|37}}."
  ],
  [
    "lecturer",
    "The additional answer to question 38 is {{river|38}}."
  ],
  [
    "lecturer",
    "The additional answer to question 39 is {{load|39}}."
  ],
  [
    "lecturer",
    "The additional answer to question 40 is {{design|40}}."
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
      "tent"
    ],
    "limit": "w"
  },
  "3": {
    "kind": "gap",
    "ans": [
      "august"
    ],
    "limit": "w"
  },
  "4": {
    "kind": "gap",
    "ans": [
      "showers"
    ],
    "limit": "w"
  },
  "5": {
    "kind": "gap",
    "ans": [
      "firewood"
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
      "pitch"
    ],
    "limit": "w"
  },
  "8": {
    "kind": "gap",
    "ans": [
      "arrival"
    ],
    "limit": "w"
  },
  "9": {
    "kind": "gap",
    "ans": [
      "kitchen"
    ],
    "limit": "w"
  },
  "10": {
    "kind": "gap",
    "ans": [
      "booking"
    ],
    "limit": "w"
  },
  "11": {
    "kind": "gap",
    "ans": [
      "orchid"
    ],
    "limit": "w"
  },
  "12": {
    "kind": "gap",
    "ans": [
      "greenhouse"
    ],
    "limit": "w"
  },
  "13": {
    "kind": "gap",
    "ans": [
      "seeds"
    ],
    "limit": "w"
  },
  "14": {
    "kind": "gap",
    "ans": [
      "pond"
    ],
    "limit": "w"
  },
  "15": {
    "kind": "gap",
    "ans": [
      "entrance"
    ],
    "limit": "w"
  },
  "16": {
    "kind": "gap",
    "ans": [
      "rare"
    ],
    "limit": "w"
  },
  "17": {
    "kind": "gap",
    "ans": [
      "climate"
    ],
    "limit": "w"
  },
  "18": {
    "kind": "gap",
    "ans": [
      "botanist"
    ],
    "limit": "w"
  },
  "19": {
    "kind": "gap",
    "ans": [
      "water"
    ],
    "limit": "w"
  },
  "20": {
    "kind": "gap",
    "ans": [
      "path"
    ],
    "limit": "w"
  },
  "21": {
    "kind": "gap",
    "ans": [
      "bins"
    ],
    "limit": "w"
  },
  "22": {
    "kind": "gap",
    "ans": [
      "households"
    ],
    "limit": "w"
  },
  "23": {
    "kind": "gap",
    "ans": [
      "weight"
    ],
    "limit": "w"
  },
  "24": {
    "kind": "gap",
    "ans": [
      "targets"
    ],
    "limit": "w"
  },
  "25": {
    "kind": "gap",
    "ans": [
      "report"
    ],
    "limit": "w"
  },
  "26": {
    "kind": "gap",
    "ans": [
      "plastic"
    ],
    "limit": "w"
  },
  "27": {
    "kind": "gap",
    "ans": [
      "collection"
    ],
    "limit": "w"
  },
  "28": {
    "kind": "gap",
    "ans": [
      "weighing"
    ],
    "limit": "w"
  },
  "29": {
    "kind": "gap",
    "ans": [
      "community"
    ],
    "limit": "w"
  },
  "30": {
    "kind": "gap",
    "ans": [
      "reduction"
    ],
    "limit": "w"
  },
  "31": {
    "kind": "gap",
    "ans": [
      "stone"
    ],
    "limit": "w"
  },
  "32": {
    "kind": "gap",
    "ans": [
      "arch"
    ],
    "limit": "w"
  },
  "33": {
    "kind": "gap",
    "ans": [
      "steel"
    ],
    "limit": "w"
  },
  "34": {
    "kind": "gap",
    "ans": [
      "suspension"
    ],
    "limit": "w"
  },
  "35": {
    "kind": "gap",
    "ans": [
      "engineer"
    ],
    "limit": "w"
  },
  "36": {
    "kind": "gap",
    "ans": [
      "wood"
    ],
    "limit": "w"
  },
  "37": {
    "kind": "gap",
    "ans": [
      "cables"
    ],
    "limit": "w"
  },
  "38": {
    "kind": "gap",
    "ans": [
      "river"
    ],
    "limit": "w"
  },
  "39": {
    "kind": "gap",
    "ans": [
      "load"
    ],
    "limit": "w"
  },
  "40": {
    "kind": "gap",
    "ans": [
      "design"
    ],
    "limit": "w"
  }
};
  const LIMIT_WN = 'ONE WORD ONLY';
  const gap = n => `<span class="gap" data-q="${n}"><span class="n">${n}</span><input type="text" id="q${n}" data-q="${n}" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Question ${n}"></span>`;
  const PAPER = `<section class="part" id="part-1" data-part="1"><div class="part-head"><h2>Part 1</h2><span class="label">Questions 1–10</span></div><div class="qblock"><h3>Campsite booking</h3><p class="instr">Complete the notes. Write <b>ONE WORD ONLY</b> for each answer.</p><div class="form"><div class="line"><span>1. Campsite booking — answer:</span><span>\${gap(1)}</span></div><div class="line"><span>2. Campsite booking — answer:</span><span>\${gap(2)}</span></div><div class="line"><span>3. Campsite booking — answer:</span><span>\${gap(3)}</span></div><div class="line"><span>4. Campsite booking — answer:</span><span>\${gap(4)}</span></div><div class="line"><span>5. Campsite booking — answer:</span><span>\${gap(5)}</span></div><div class="line"><span>6. Campsite booking — answer:</span><span>\${gap(6)}</span></div><div class="line"><span>7. Campsite booking — answer:</span><span>\${gap(7)}</span></div><div class="line"><span>8. Campsite booking — answer:</span><span>\${gap(8)}</span></div><div class="line"><span>9. Campsite booking — answer:</span><span>\${gap(9)}</span></div><div class="line"><span>10. Campsite booking — answer:</span><span>\${gap(10)}</span></div></div></div></section>
<section class="part" id="part-2" data-part="2" hidden><div class="part-head"><h2>Part 2</h2><span class="label">Questions 11–20</span></div><div class="qblock"><h3>Botanical garden talk</h3><p class="instr">Complete the notes. Write <b>ONE WORD ONLY</b> for each answer.</p><div class="form"><div class="line"><span>11. Botanical garden talk — answer:</span><span>\${gap(11)}</span></div><div class="line"><span>12. Botanical garden talk — answer:</span><span>\${gap(12)}</span></div><div class="line"><span>13. Botanical garden talk — answer:</span><span>\${gap(13)}</span></div><div class="line"><span>14. Botanical garden talk — answer:</span><span>\${gap(14)}</span></div><div class="line"><span>15. Botanical garden talk — answer:</span><span>\${gap(15)}</span></div><div class="line"><span>16. Botanical garden talk — answer:</span><span>\${gap(16)}</span></div><div class="line"><span>17. Botanical garden talk — answer:</span><span>\${gap(17)}</span></div><div class="line"><span>18. Botanical garden talk — answer:</span><span>\${gap(18)}</span></div><div class="line"><span>19. Botanical garden talk — answer:</span><span>\${gap(19)}</span></div><div class="line"><span>20. Botanical garden talk — answer:</span><span>\${gap(20)}</span></div></div></div></section>
<section class="part" id="part-3" data-part="3" hidden><div class="part-head"><h2>Part 3</h2><span class="label">Questions 21–30</span></div><div class="qblock"><h3>Students planning a recycling study</h3><p class="instr">Complete the notes. Write <b>ONE WORD ONLY</b> for each answer.</p><div class="form"><div class="line"><span>21. Students planning a recycling study — answer:</span><span>\${gap(21)}</span></div><div class="line"><span>22. Students planning a recycling study — answer:</span><span>\${gap(22)}</span></div><div class="line"><span>23. Students planning a recycling study — answer:</span><span>\${gap(23)}</span></div><div class="line"><span>24. Students planning a recycling study — answer:</span><span>\${gap(24)}</span></div><div class="line"><span>25. Students planning a recycling study — answer:</span><span>\${gap(25)}</span></div><div class="line"><span>26. Students planning a recycling study — answer:</span><span>\${gap(26)}</span></div><div class="line"><span>27. Students planning a recycling study — answer:</span><span>\${gap(27)}</span></div><div class="line"><span>28. Students planning a recycling study — answer:</span><span>\${gap(28)}</span></div><div class="line"><span>29. Students planning a recycling study — answer:</span><span>\${gap(29)}</span></div><div class="line"><span>30. Students planning a recycling study — answer:</span><span>\${gap(30)}</span></div></div></div></section>
<section class="part" id="part-4" data-part="4" hidden><div class="part-head"><h2>Part 4</h2><span class="label">Questions 31–40</span></div><div class="qblock"><h3>History of bridges</h3><p class="instr">Complete the notes. Write <b>ONE WORD ONLY</b> for each answer.</p><div class="form"><div class="line"><span>31. History of bridges — answer:</span><span>\${gap(31)}</span></div><div class="line"><span>32. History of bridges — answer:</span><span>\${gap(32)}</span></div><div class="line"><span>33. History of bridges — answer:</span><span>\${gap(33)}</span></div><div class="line"><span>34. History of bridges — answer:</span><span>\${gap(34)}</span></div><div class="line"><span>35. History of bridges — answer:</span><span>\${gap(35)}</span></div><div class="line"><span>36. History of bridges — answer:</span><span>\${gap(36)}</span></div><div class="line"><span>37. History of bridges — answer:</span><span>\${gap(37)}</span></div><div class="line"><span>38. History of bridges — answer:</span><span>\${gap(38)}</span></div><div class="line"><span>39. History of bridges — answer:</span><span>\${gap(39)}</span></div><div class="line"><span>40. History of bridges — answer:</span><span>\${gap(40)}</span></div></div></div></section>`;
  const TIMELINE = [{"t":0,"focus":1},{"t":0,"pause":3,"label":"Reading time \u00b7 Questions 1\u201310"},{"t":3,"speech":1,"part":1},{"t":67.56,"pause":3,"label":"Checking time \u00b7 Part 1"},{"t":70.56,"focus":2},{"t":70.56,"pause":3,"label":"Reading time \u00b7 Questions 11\u201320"},{"t":73.56,"speech":1,"part":2},{"t":130.8,"pause":2,"label":"Checking time \u00b7 Part 2"},{"t":132.8,"focus":3},{"t":132.8,"pause":3,"label":"Reading time \u00b7 Questions 21\u201330"},{"t":135.8,"speech":1,"part":3},{"t":196.18,"pause":2,"label":"Checking time \u00b7 Part 3"},{"t":198.18,"focus":4},{"t":198.18,"pause":4,"label":"Reading time \u00b7 Questions 31\u201340"},{"t":202.18,"speech":1,"part":4}];
  const partNames = {1:'Part 1 · Campsite booking', 2:'Part 2 · Botanical garden talk', 3:'Part 3 · Students planning a recycling study', 4:'Part 4 · History of bridges'};
  window.LISTENING_TEST = { num: 9, audio: 'audio/listening-test9.mp3', minutes: 4, mb: 2, roles: ROLES, script: SCRIPT, Q, paper: PAPER, timeline: TIMELINE, partNames };
})();
