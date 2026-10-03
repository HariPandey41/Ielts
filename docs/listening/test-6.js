// IELTS Listening · Practice Test 6 — content only. The exam engine is assets/listening-exam.js.
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
    "IELTS Listening. Practice Test 6."
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
    "Part 1. You will hear a recording about hotel reservation. First, look at questions 1 to 10."
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
    "The answer to question 2 is {{arrival|2}}. Please write it clearly."
  ],
  [
    "speaker",
    "The answer to question 3 is {{breakfast|3}}. Please write it clearly."
  ],
  [
    "speaker",
    "The answer to question 4 is {{passport|4}}. Please write it clearly."
  ],
  [
    "speaker",
    "The answer to question 5 is {{deposit|5}}. Please write it clearly."
  ],
  [
    "speaker",
    "The additional answer to question 6 is {{room|6}}."
  ],
  [
    "speaker",
    "The additional answer to question 7 is {{single|7}}."
  ],
  [
    "speaker",
    "The additional answer to question 8 is {{arrival|8}}."
  ],
  [
    "speaker",
    "The additional answer to question 9 is {{card|9}}."
  ],
  [
    "speaker",
    "The additional answer to question 10 is {{breakfast|10}}."
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
    "Part 2. You will hear a recording about farmers market announcement. First, look at questions 11 to 20."
  ],
  [
    "pause",
    3,
    "Reading time · Questions 11–20"
  ],
  [
    "presenter",
    "The answer to question 11 is {{organic|11}}. Please write it clearly."
  ],
  [
    "presenter",
    "The answer to question 12 is {{Saturday|12}}. Please write it clearly."
  ],
  [
    "presenter",
    "The answer to question 13 is {{cheese|13}}. Please write it clearly."
  ],
  [
    "presenter",
    "The answer to question 14 is {{parking|14}}. Please write it clearly."
  ],
  [
    "presenter",
    "The answer to question 15 is {{cash|15}}. Please write it clearly."
  ],
  [
    "presenter",
    "The additional answer to question 16 is {{stall|16}}."
  ],
  [
    "presenter",
    "The additional answer to question 17 is {{produce|17}}."
  ],
  [
    "presenter",
    "The additional answer to question 18 is {{sauce|18}}."
  ],
  [
    "presenter",
    "The additional answer to question 19 is {{children|19}}."
  ],
  [
    "presenter",
    "The additional answer to question 20 is {{festival|20}}."
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
    "Part 3. You will hear a recording about library research meeting. First, look at questions 21 to 30."
  ],
  [
    "pause",
    3,
    "Reading time · Questions 21–30"
  ],
  [
    "tutor",
    "The answer to question 21 is {{database|21}}. Please write it clearly."
  ],
  [
    "tutor",
    "The answer to question 22 is {{deadline|22}}. Please write it clearly."
  ],
  [
    "tutor",
    "The answer to question 23 is {{references|23}}. Please write it clearly."
  ],
  [
    "tutor",
    "The answer to question 24 is {{chapter|24}}. Please write it clearly."
  ],
  [
    "tutor",
    "The answer to question 25 is {{supervisor|25}}. Please write it clearly."
  ],
  [
    "tutor",
    "The additional answer to question 26 is {{catalogue|26}}."
  ],
  [
    "tutor",
    "The additional answer to question 27 is {{meeting|27}}."
  ],
  [
    "tutor",
    "The additional answer to question 28 is {{footnotes|28}}."
  ],
  [
    "tutor",
    "The additional answer to question 29 is {{library|29}}."
  ],
  [
    "tutor",
    "The additional answer to question 30 is {{outline|30}}."
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
    "Part 4. You will hear a recording about development of solar power. First, look at questions 31 to 40."
  ],
  [
    "pause",
    3,
    "Reading time · Questions 31–40"
  ],
  [
    "lecturer",
    "The answer to question 31 is {{panels|31}}. Please write it clearly."
  ],
  [
    "lecturer",
    "The answer to question 32 is {{sunlight|32}}. Please write it clearly."
  ],
  [
    "lecturer",
    "The answer to question 33 is {{silicon|33}}. Please write it clearly."
  ],
  [
    "lecturer",
    "The answer to question 34 is {{storage|34}}. Please write it clearly."
  ],
  [
    "lecturer",
    "The answer to question 35 is {{rooftop|35}}. Please write it clearly."
  ],
  [
    "lecturer",
    "The additional answer to question 36 is {{electricity|36}}."
  ],
  [
    "lecturer",
    "The additional answer to question 37 is {{cells|37}}."
  ],
  [
    "lecturer",
    "The additional answer to question 38 is {{inverter|38}}."
  ],
  [
    "lecturer",
    "The additional answer to question 39 is {{efficiency|39}}."
  ],
  [
    "lecturer",
    "The additional answer to question 40 is {{grid|40}}."
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
      "arrival"
    ],
    "limit": "w"
  },
  "3": {
    "kind": "gap",
    "ans": [
      "breakfast"
    ],
    "limit": "w"
  },
  "4": {
    "kind": "gap",
    "ans": [
      "passport"
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
      "room"
    ],
    "limit": "w"
  },
  "7": {
    "kind": "gap",
    "ans": [
      "single"
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
      "card"
    ],
    "limit": "w"
  },
  "10": {
    "kind": "gap",
    "ans": [
      "breakfast"
    ],
    "limit": "w"
  },
  "11": {
    "kind": "gap",
    "ans": [
      "organic"
    ],
    "limit": "w"
  },
  "12": {
    "kind": "gap",
    "ans": [
      "saturday"
    ],
    "limit": "w"
  },
  "13": {
    "kind": "gap",
    "ans": [
      "cheese"
    ],
    "limit": "w"
  },
  "14": {
    "kind": "gap",
    "ans": [
      "parking"
    ],
    "limit": "w"
  },
  "15": {
    "kind": "gap",
    "ans": [
      "cash"
    ],
    "limit": "w"
  },
  "16": {
    "kind": "gap",
    "ans": [
      "stall"
    ],
    "limit": "w"
  },
  "17": {
    "kind": "gap",
    "ans": [
      "produce"
    ],
    "limit": "w"
  },
  "18": {
    "kind": "gap",
    "ans": [
      "sauce"
    ],
    "limit": "w"
  },
  "19": {
    "kind": "gap",
    "ans": [
      "children"
    ],
    "limit": "w"
  },
  "20": {
    "kind": "gap",
    "ans": [
      "festival"
    ],
    "limit": "w"
  },
  "21": {
    "kind": "gap",
    "ans": [
      "database"
    ],
    "limit": "w"
  },
  "22": {
    "kind": "gap",
    "ans": [
      "deadline"
    ],
    "limit": "w"
  },
  "23": {
    "kind": "gap",
    "ans": [
      "references"
    ],
    "limit": "w"
  },
  "24": {
    "kind": "gap",
    "ans": [
      "chapter"
    ],
    "limit": "w"
  },
  "25": {
    "kind": "gap",
    "ans": [
      "supervisor"
    ],
    "limit": "w"
  },
  "26": {
    "kind": "gap",
    "ans": [
      "catalogue"
    ],
    "limit": "w"
  },
  "27": {
    "kind": "gap",
    "ans": [
      "meeting"
    ],
    "limit": "w"
  },
  "28": {
    "kind": "gap",
    "ans": [
      "footnotes"
    ],
    "limit": "w"
  },
  "29": {
    "kind": "gap",
    "ans": [
      "library"
    ],
    "limit": "w"
  },
  "30": {
    "kind": "gap",
    "ans": [
      "outline"
    ],
    "limit": "w"
  },
  "31": {
    "kind": "gap",
    "ans": [
      "panels"
    ],
    "limit": "w"
  },
  "32": {
    "kind": "gap",
    "ans": [
      "sunlight"
    ],
    "limit": "w"
  },
  "33": {
    "kind": "gap",
    "ans": [
      "silicon"
    ],
    "limit": "w"
  },
  "34": {
    "kind": "gap",
    "ans": [
      "storage"
    ],
    "limit": "w"
  },
  "35": {
    "kind": "gap",
    "ans": [
      "rooftop"
    ],
    "limit": "w"
  },
  "36": {
    "kind": "gap",
    "ans": [
      "electricity"
    ],
    "limit": "w"
  },
  "37": {
    "kind": "gap",
    "ans": [
      "cells"
    ],
    "limit": "w"
  },
  "38": {
    "kind": "gap",
    "ans": [
      "inverter"
    ],
    "limit": "w"
  },
  "39": {
    "kind": "gap",
    "ans": [
      "efficiency"
    ],
    "limit": "w"
  },
  "40": {
    "kind": "gap",
    "ans": [
      "grid"
    ],
    "limit": "w"
  }
};
  const LIMIT_WN = 'ONE WORD ONLY';
  const gap = n => `<span class="gap" data-q="${n}"><span class="n">${n}</span><input type="text" id="q${n}" data-q="${n}" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Question ${n}"></span>`;
  const PAPER = `<section class="part" id="part-1" data-part="1"><div class="part-head"><h2>Part 1</h2><span class="label">Questions 1–10</span></div><div class="qblock"><h3>Hotel reservation</h3><p class="instr">Complete the notes. Write <b>ONE WORD ONLY</b> for each answer.</p><div class="form"><div class="line"><span>1. Hotel reservation — answer:</span><span>\${gap(1)}</span></div><div class="line"><span>2. Hotel reservation — answer:</span><span>\${gap(2)}</span></div><div class="line"><span>3. Hotel reservation — answer:</span><span>\${gap(3)}</span></div><div class="line"><span>4. Hotel reservation — answer:</span><span>\${gap(4)}</span></div><div class="line"><span>5. Hotel reservation — answer:</span><span>\${gap(5)}</span></div><div class="line"><span>6. Hotel reservation — answer:</span><span>\${gap(6)}</span></div><div class="line"><span>7. Hotel reservation — answer:</span><span>\${gap(7)}</span></div><div class="line"><span>8. Hotel reservation — answer:</span><span>\${gap(8)}</span></div><div class="line"><span>9. Hotel reservation — answer:</span><span>\${gap(9)}</span></div><div class="line"><span>10. Hotel reservation — answer:</span><span>\${gap(10)}</span></div></div></div></section>
<section class="part" id="part-2" data-part="2" hidden><div class="part-head"><h2>Part 2</h2><span class="label">Questions 11–20</span></div><div class="qblock"><h3>Farmers market announcement</h3><p class="instr">Complete the notes. Write <b>ONE WORD ONLY</b> for each answer.</p><div class="form"><div class="line"><span>11. Farmers market announcement — answer:</span><span>\${gap(11)}</span></div><div class="line"><span>12. Farmers market announcement — answer:</span><span>\${gap(12)}</span></div><div class="line"><span>13. Farmers market announcement — answer:</span><span>\${gap(13)}</span></div><div class="line"><span>14. Farmers market announcement — answer:</span><span>\${gap(14)}</span></div><div class="line"><span>15. Farmers market announcement — answer:</span><span>\${gap(15)}</span></div><div class="line"><span>16. Farmers market announcement — answer:</span><span>\${gap(16)}</span></div><div class="line"><span>17. Farmers market announcement — answer:</span><span>\${gap(17)}</span></div><div class="line"><span>18. Farmers market announcement — answer:</span><span>\${gap(18)}</span></div><div class="line"><span>19. Farmers market announcement — answer:</span><span>\${gap(19)}</span></div><div class="line"><span>20. Farmers market announcement — answer:</span><span>\${gap(20)}</span></div></div></div></section>
<section class="part" id="part-3" data-part="3" hidden><div class="part-head"><h2>Part 3</h2><span class="label">Questions 21–30</span></div><div class="qblock"><h3>Library research meeting</h3><p class="instr">Complete the notes. Write <b>ONE WORD ONLY</b> for each answer.</p><div class="form"><div class="line"><span>21. Library research meeting — answer:</span><span>\${gap(21)}</span></div><div class="line"><span>22. Library research meeting — answer:</span><span>\${gap(22)}</span></div><div class="line"><span>23. Library research meeting — answer:</span><span>\${gap(23)}</span></div><div class="line"><span>24. Library research meeting — answer:</span><span>\${gap(24)}</span></div><div class="line"><span>25. Library research meeting — answer:</span><span>\${gap(25)}</span></div><div class="line"><span>26. Library research meeting — answer:</span><span>\${gap(26)}</span></div><div class="line"><span>27. Library research meeting — answer:</span><span>\${gap(27)}</span></div><div class="line"><span>28. Library research meeting — answer:</span><span>\${gap(28)}</span></div><div class="line"><span>29. Library research meeting — answer:</span><span>\${gap(29)}</span></div><div class="line"><span>30. Library research meeting — answer:</span><span>\${gap(30)}</span></div></div></div></section>
<section class="part" id="part-4" data-part="4" hidden><div class="part-head"><h2>Part 4</h2><span class="label">Questions 31–40</span></div><div class="qblock"><h3>Development of solar power</h3><p class="instr">Complete the notes. Write <b>ONE WORD ONLY</b> for each answer.</p><div class="form"><div class="line"><span>31. Development of solar power — answer:</span><span>\${gap(31)}</span></div><div class="line"><span>32. Development of solar power — answer:</span><span>\${gap(32)}</span></div><div class="line"><span>33. Development of solar power — answer:</span><span>\${gap(33)}</span></div><div class="line"><span>34. Development of solar power — answer:</span><span>\${gap(34)}</span></div><div class="line"><span>35. Development of solar power — answer:</span><span>\${gap(35)}</span></div><div class="line"><span>36. Development of solar power — answer:</span><span>\${gap(36)}</span></div><div class="line"><span>37. Development of solar power — answer:</span><span>\${gap(37)}</span></div><div class="line"><span>38. Development of solar power — answer:</span><span>\${gap(38)}</span></div><div class="line"><span>39. Development of solar power — answer:</span><span>\${gap(39)}</span></div><div class="line"><span>40. Development of solar power — answer:</span><span>\${gap(40)}</span></div></div></div></section>`;
  const TIMELINE = [{"t":0,"focus":1},{"t":0,"pause":3,"label":"Reading time \u00b7 Questions 1\u201310"},{"t":3,"speech":1,"part":1},{"t":68.5,"pause":3,"label":"Checking time \u00b7 Part 1"},{"t":71.5,"focus":2},{"t":71.5,"pause":3,"label":"Reading time \u00b7 Questions 11\u201320"},{"t":74.5,"speech":1,"part":2},{"t":131.81,"pause":2,"label":"Checking time \u00b7 Part 2"},{"t":133.81,"focus":3},{"t":133.81,"pause":3,"label":"Reading time \u00b7 Questions 21\u201330"},{"t":136.81,"speech":1,"part":3},{"t":197.12,"pause":2,"label":"Checking time \u00b7 Part 3"},{"t":199.12,"focus":4},{"t":199.12,"pause":4,"label":"Reading time \u00b7 Questions 31\u201340"},{"t":203.12,"speech":1,"part":4}];
  const partNames = {1:'Part 1 · Hotel reservation', 2:'Part 2 · Farmers market announcement', 3:'Part 3 · Library research meeting', 4:'Part 4 · Development of solar power'};
  window.LISTENING_TEST = { num: 6, audio: 'audio/listening-test6.mp3', minutes: 4, mb: 2, roles: ROLES, script: SCRIPT, Q, paper: PAPER, timeline: TIMELINE, partNames };
})();
