// IELTS Listening · Practice Test 8 — content only. The exam engine is assets/listening-exam.js.
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
    "IELTS Listening. Practice Test 8."
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
    "Part 1. You will hear a recording about photography course enquiry. First, look at questions 1 to 10."
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
    "The answer to question 2 is {{camera|2}}. Please write it clearly."
  ],
  [
    "speaker",
    "The answer to question 3 is {{Wednesday|3}}. Please write it clearly."
  ],
  [
    "speaker",
    "The answer to question 4 is {{equipment|4}}. Please write it clearly."
  ],
  [
    "speaker",
    "The answer to question 5 is {{fee|5}}. Please write it clearly."
  ],
  [
    "speaker",
    "The additional answer to question 6 is {{address|6}}."
  ],
  [
    "speaker",
    "The additional answer to question 7 is {{beginner|7}}."
  ],
  [
    "speaker",
    "The additional answer to question 8 is {{Thursday|8}}."
  ],
  [
    "speaker",
    "The additional answer to question 9 is {{lens|9}}."
  ],
  [
    "speaker",
    "The additional answer to question 10 is {{receipt|10}}."
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
    "Part 2. You will hear a recording about public transport announcement. First, look at questions 11 to 20."
  ],
  [
    "pause",
    3,
    "Reading time · Questions 11–20"
  ],
  [
    "presenter",
    "The answer to question 11 is {{platform|11}}. Please write it clearly."
  ],
  [
    "presenter",
    "The answer to question 12 is {{delay|12}}. Please write it clearly."
  ],
  [
    "presenter",
    "The answer to question 13 is {{passengers|13}}. Please write it clearly."
  ],
  [
    "presenter",
    "The answer to question 14 is {{terminal|14}}. Please write it clearly."
  ],
  [
    "presenter",
    "The answer to question 15 is {{express|15}}. Please write it clearly."
  ],
  [
    "presenter",
    "The additional answer to question 16 is {{ticket|16}}."
  ],
  [
    "presenter",
    "The additional answer to question 17 is {{station|17}}."
  ],
  [
    "presenter",
    "The additional answer to question 18 is {{connection|18}}."
  ],
  [
    "presenter",
    "The additional answer to question 19 is {{airport|19}}."
  ],
  [
    "presenter",
    "The additional answer to question 20 is {{notice|20}}."
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
    "Part 3. You will hear a recording about students discussing a film project. First, look at questions 21 to 30."
  ],
  [
    "pause",
    3,
    "Reading time · Questions 21–30"
  ],
  [
    "tutor",
    "The answer to question 21 is {{script|21}}. Please write it clearly."
  ],
  [
    "tutor",
    "The answer to question 22 is {{director|22}}. Please write it clearly."
  ],
  [
    "tutor",
    "The answer to question 23 is {{Friday|23}}. Please write it clearly."
  ],
  [
    "tutor",
    "The answer to question 24 is {{location|24}}. Please write it clearly."
  ],
  [
    "tutor",
    "The answer to question 25 is {{festival|25}}. Please write it clearly."
  ],
  [
    "tutor",
    "The additional answer to question 26 is {{actors|26}}."
  ],
  [
    "tutor",
    "The additional answer to question 27 is {{camera|27}}."
  ],
  [
    "tutor",
    "The additional answer to question 28 is {{Tuesday|28}}."
  ],
  [
    "tutor",
    "The additional answer to question 29 is {{costume|29}}."
  ],
  [
    "tutor",
    "The additional answer to question 30 is {{premiere|30}}."
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
    "Part 4. You will hear a recording about psychology of colour. First, look at questions 31 to 40."
  ],
  [
    "pause",
    3,
    "Reading time · Questions 31–40"
  ],
  [
    "lecturer",
    "The answer to question 31 is {{memory|31}}. Please write it clearly."
  ],
  [
    "lecturer",
    "The answer to question 32 is {{blue|32}}. Please write it clearly."
  ],
  [
    "lecturer",
    "The answer to question 33 is {{contrast|33}}. Please write it clearly."
  ],
  [
    "lecturer",
    "The answer to question 34 is {{emotion|34}}. Please write it clearly."
  ],
  [
    "lecturer",
    "The answer to question 35 is {{lighting|35}}. Please write it clearly."
  ],
  [
    "lecturer",
    "The additional answer to question 36 is {{green|36}}."
  ],
  [
    "lecturer",
    "The additional answer to question 37 is {{warmth|37}}."
  ],
  [
    "lecturer",
    "The additional answer to question 38 is {{culture|38}}."
  ],
  [
    "lecturer",
    "The additional answer to question 39 is {{painting|39}}."
  ],
  [
    "lecturer",
    "The additional answer to question 40 is {{balance|40}}."
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
      "camera"
    ],
    "limit": "w"
  },
  "3": {
    "kind": "gap",
    "ans": [
      "wednesday"
    ],
    "limit": "w"
  },
  "4": {
    "kind": "gap",
    "ans": [
      "equipment"
    ],
    "limit": "w"
  },
  "5": {
    "kind": "gap",
    "ans": [
      "fee"
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
      "beginner"
    ],
    "limit": "w"
  },
  "8": {
    "kind": "gap",
    "ans": [
      "thursday"
    ],
    "limit": "w"
  },
  "9": {
    "kind": "gap",
    "ans": [
      "lens"
    ],
    "limit": "w"
  },
  "10": {
    "kind": "gap",
    "ans": [
      "receipt"
    ],
    "limit": "w"
  },
  "11": {
    "kind": "gap",
    "ans": [
      "platform"
    ],
    "limit": "w"
  },
  "12": {
    "kind": "gap",
    "ans": [
      "delay"
    ],
    "limit": "w"
  },
  "13": {
    "kind": "gap",
    "ans": [
      "passengers"
    ],
    "limit": "w"
  },
  "14": {
    "kind": "gap",
    "ans": [
      "terminal"
    ],
    "limit": "w"
  },
  "15": {
    "kind": "gap",
    "ans": [
      "express"
    ],
    "limit": "w"
  },
  "16": {
    "kind": "gap",
    "ans": [
      "ticket"
    ],
    "limit": "w"
  },
  "17": {
    "kind": "gap",
    "ans": [
      "station"
    ],
    "limit": "w"
  },
  "18": {
    "kind": "gap",
    "ans": [
      "connection"
    ],
    "limit": "w"
  },
  "19": {
    "kind": "gap",
    "ans": [
      "airport"
    ],
    "limit": "w"
  },
  "20": {
    "kind": "gap",
    "ans": [
      "notice"
    ],
    "limit": "w"
  },
  "21": {
    "kind": "gap",
    "ans": [
      "script"
    ],
    "limit": "w"
  },
  "22": {
    "kind": "gap",
    "ans": [
      "director"
    ],
    "limit": "w"
  },
  "23": {
    "kind": "gap",
    "ans": [
      "friday"
    ],
    "limit": "w"
  },
  "24": {
    "kind": "gap",
    "ans": [
      "location"
    ],
    "limit": "w"
  },
  "25": {
    "kind": "gap",
    "ans": [
      "festival"
    ],
    "limit": "w"
  },
  "26": {
    "kind": "gap",
    "ans": [
      "actors"
    ],
    "limit": "w"
  },
  "27": {
    "kind": "gap",
    "ans": [
      "camera"
    ],
    "limit": "w"
  },
  "28": {
    "kind": "gap",
    "ans": [
      "tuesday"
    ],
    "limit": "w"
  },
  "29": {
    "kind": "gap",
    "ans": [
      "costume"
    ],
    "limit": "w"
  },
  "30": {
    "kind": "gap",
    "ans": [
      "premiere"
    ],
    "limit": "w"
  },
  "31": {
    "kind": "gap",
    "ans": [
      "memory"
    ],
    "limit": "w"
  },
  "32": {
    "kind": "gap",
    "ans": [
      "blue"
    ],
    "limit": "w"
  },
  "33": {
    "kind": "gap",
    "ans": [
      "contrast"
    ],
    "limit": "w"
  },
  "34": {
    "kind": "gap",
    "ans": [
      "emotion"
    ],
    "limit": "w"
  },
  "35": {
    "kind": "gap",
    "ans": [
      "lighting"
    ],
    "limit": "w"
  },
  "36": {
    "kind": "gap",
    "ans": [
      "green"
    ],
    "limit": "w"
  },
  "37": {
    "kind": "gap",
    "ans": [
      "warmth"
    ],
    "limit": "w"
  },
  "38": {
    "kind": "gap",
    "ans": [
      "culture"
    ],
    "limit": "w"
  },
  "39": {
    "kind": "gap",
    "ans": [
      "painting"
    ],
    "limit": "w"
  },
  "40": {
    "kind": "gap",
    "ans": [
      "balance"
    ],
    "limit": "w"
  }
};
  const LIMIT_WN = 'ONE WORD ONLY';
  const gap = n => `<span class="gap" data-q="${n}"><span class="n">${n}</span><input type="text" id="q${n}" data-q="${n}" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Question ${n}"></span>`;
  const PAPER = `<section class="part" id="part-1" data-part="1"><div class="part-head"><h2>Part 1</h2><span class="label">Questions 1–10</span></div><div class="qblock"><h3>Photography course enquiry</h3><p class="instr">Complete the notes. Write <b>ONE WORD ONLY</b> for each answer.</p><div class="form"><div class="line"><span>1. Photography course enquiry — answer:</span><span>\${gap(1)}</span></div><div class="line"><span>2. Photography course enquiry — answer:</span><span>\${gap(2)}</span></div><div class="line"><span>3. Photography course enquiry — answer:</span><span>\${gap(3)}</span></div><div class="line"><span>4. Photography course enquiry — answer:</span><span>\${gap(4)}</span></div><div class="line"><span>5. Photography course enquiry — answer:</span><span>\${gap(5)}</span></div><div class="line"><span>6. Photography course enquiry — answer:</span><span>\${gap(6)}</span></div><div class="line"><span>7. Photography course enquiry — answer:</span><span>\${gap(7)}</span></div><div class="line"><span>8. Photography course enquiry — answer:</span><span>\${gap(8)}</span></div><div class="line"><span>9. Photography course enquiry — answer:</span><span>\${gap(9)}</span></div><div class="line"><span>10. Photography course enquiry — answer:</span><span>\${gap(10)}</span></div></div></div></section>
<section class="part" id="part-2" data-part="2" hidden><div class="part-head"><h2>Part 2</h2><span class="label">Questions 11–20</span></div><div class="qblock"><h3>Public transport announcement</h3><p class="instr">Complete the notes. Write <b>ONE WORD ONLY</b> for each answer.</p><div class="form"><div class="line"><span>11. Public transport announcement — answer:</span><span>\${gap(11)}</span></div><div class="line"><span>12. Public transport announcement — answer:</span><span>\${gap(12)}</span></div><div class="line"><span>13. Public transport announcement — answer:</span><span>\${gap(13)}</span></div><div class="line"><span>14. Public transport announcement — answer:</span><span>\${gap(14)}</span></div><div class="line"><span>15. Public transport announcement — answer:</span><span>\${gap(15)}</span></div><div class="line"><span>16. Public transport announcement — answer:</span><span>\${gap(16)}</span></div><div class="line"><span>17. Public transport announcement — answer:</span><span>\${gap(17)}</span></div><div class="line"><span>18. Public transport announcement — answer:</span><span>\${gap(18)}</span></div><div class="line"><span>19. Public transport announcement — answer:</span><span>\${gap(19)}</span></div><div class="line"><span>20. Public transport announcement — answer:</span><span>\${gap(20)}</span></div></div></div></section>
<section class="part" id="part-3" data-part="3" hidden><div class="part-head"><h2>Part 3</h2><span class="label">Questions 21–30</span></div><div class="qblock"><h3>Students discussing a film project</h3><p class="instr">Complete the notes. Write <b>ONE WORD ONLY</b> for each answer.</p><div class="form"><div class="line"><span>21. Students discussing a film project — answer:</span><span>\${gap(21)}</span></div><div class="line"><span>22. Students discussing a film project — answer:</span><span>\${gap(22)}</span></div><div class="line"><span>23. Students discussing a film project — answer:</span><span>\${gap(23)}</span></div><div class="line"><span>24. Students discussing a film project — answer:</span><span>\${gap(24)}</span></div><div class="line"><span>25. Students discussing a film project — answer:</span><span>\${gap(25)}</span></div><div class="line"><span>26. Students discussing a film project — answer:</span><span>\${gap(26)}</span></div><div class="line"><span>27. Students discussing a film project — answer:</span><span>\${gap(27)}</span></div><div class="line"><span>28. Students discussing a film project — answer:</span><span>\${gap(28)}</span></div><div class="line"><span>29. Students discussing a film project — answer:</span><span>\${gap(29)}</span></div><div class="line"><span>30. Students discussing a film project — answer:</span><span>\${gap(30)}</span></div></div></div></section>
<section class="part" id="part-4" data-part="4" hidden><div class="part-head"><h2>Part 4</h2><span class="label">Questions 31–40</span></div><div class="qblock"><h3>Psychology of colour</h3><p class="instr">Complete the notes. Write <b>ONE WORD ONLY</b> for each answer.</p><div class="form"><div class="line"><span>31. Psychology of colour — answer:</span><span>\${gap(31)}</span></div><div class="line"><span>32. Psychology of colour — answer:</span><span>\${gap(32)}</span></div><div class="line"><span>33. Psychology of colour — answer:</span><span>\${gap(33)}</span></div><div class="line"><span>34. Psychology of colour — answer:</span><span>\${gap(34)}</span></div><div class="line"><span>35. Psychology of colour — answer:</span><span>\${gap(35)}</span></div><div class="line"><span>36. Psychology of colour — answer:</span><span>\${gap(36)}</span></div><div class="line"><span>37. Psychology of colour — answer:</span><span>\${gap(37)}</span></div><div class="line"><span>38. Psychology of colour — answer:</span><span>\${gap(38)}</span></div><div class="line"><span>39. Psychology of colour — answer:</span><span>\${gap(39)}</span></div><div class="line"><span>40. Psychology of colour — answer:</span><span>\${gap(40)}</span></div></div></div></section>`;
  const TIMELINE = [{"t":0,"focus":1},{"t":0,"pause":3,"label":"Reading time \u00b7 Questions 1\u201310"},{"t":3,"speech":1,"part":1},{"t":68.35,"pause":3,"label":"Checking time \u00b7 Part 1"},{"t":71.35,"focus":2},{"t":71.35,"pause":3,"label":"Reading time \u00b7 Questions 11\u201320"},{"t":74.35,"speech":1,"part":2},{"t":132.34,"pause":2,"label":"Checking time \u00b7 Part 2"},{"t":134.34,"focus":3},{"t":134.34,"pause":3,"label":"Reading time \u00b7 Questions 21\u201330"},{"t":137.34,"speech":1,"part":3},{"t":197.58,"pause":2,"label":"Checking time \u00b7 Part 3"},{"t":199.58,"focus":4},{"t":199.58,"pause":4,"label":"Reading time \u00b7 Questions 31\u201340"},{"t":203.58,"speech":1,"part":4}];
  const partNames = {1:'Part 1 · Photography course enquiry', 2:'Part 2 · Public transport announcement', 3:'Part 3 · Students discussing a film project', 4:'Part 4 · Psychology of colour'};
  window.LISTENING_TEST = { num: 8, audio: 'audio/listening-test8.mp3', minutes: 4, mb: 2, roles: ROLES, script: SCRIPT, Q, paper: PAPER, timeline: TIMELINE, partNames };
})();
