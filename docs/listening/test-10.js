// IELTS Listening · Practice Test 10 — content only. The exam engine is assets/listening-exam.js.
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
    "IELTS Listening. Practice Test 10."
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
    "Part 1. You will hear a recording about dental appointment. First, look at questions 1 to 10."
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
    "The answer to question 2 is {{appointment|2}}. Please write it clearly."
  ],
  [
    "speaker",
    "The answer to question 3 is {{Friday|3}}. Please write it clearly."
  ],
  [
    "speaker",
    "The answer to question 4 is {{dentist|4}}. Please write it clearly."
  ],
  [
    "speaker",
    "The answer to question 5 is {{insurance|5}}. Please write it clearly."
  ],
  [
    "speaker",
    "The additional answer to question 6 is {{address|6}}."
  ],
  [
    "speaker",
    "The additional answer to question 7 is {{morning|7}}."
  ],
  [
    "speaker",
    "The additional answer to question 8 is {{check-up|8}}."
  ],
  [
    "speaker",
    "The additional answer to question 9 is {{clinic|9}}."
  ],
  [
    "speaker",
    "The additional answer to question 10 is {{card|10}}."
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
    "Part 2. You will hear a recording about food festival radio programme. First, look at questions 11 to 20."
  ],
  [
    "pause",
    3,
    "Reading time · Questions 11–20"
  ],
  [
    "presenter",
    "The answer to question 11 is {{festival|11}}. Please write it clearly."
  ],
  [
    "presenter",
    "The answer to question 12 is {{Sunday|12}}. Please write it clearly."
  ],
  [
    "presenter",
    "The answer to question 13 is {{chefs|13}}. Please write it clearly."
  ],
  [
    "presenter",
    "The answer to question 14 is {{tickets|14}}. Please write it clearly."
  ],
  [
    "presenter",
    "The answer to question 15 is {{vegetarian|15}}. Please write it clearly."
  ],
  [
    "presenter",
    "The additional answer to question 16 is {{music|16}}."
  ],
  [
    "presenter",
    "The additional answer to question 17 is {{market|17}}."
  ],
  [
    "presenter",
    "The additional answer to question 18 is {{local|18}}."
  ],
  [
    "presenter",
    "The additional answer to question 19 is {{chefs|19}}."
  ],
  [
    "presenter",
    "The additional answer to question 20 is {{entrance|20}}."
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
    "Part 3. You will hear a recording about students discussing a climate project. First, look at questions 21 to 30."
  ],
  [
    "pause",
    3,
    "Reading time · Questions 21–30"
  ],
  [
    "tutor",
    "The answer to question 21 is {{temperature|21}}. Please write it clearly."
  ],
  [
    "tutor",
    "The answer to question 22 is {{rainfall|22}}. Please write it clearly."
  ],
  [
    "tutor",
    "The answer to question 23 is {{satellite|23}}. Please write it clearly."
  ],
  [
    "tutor",
    "The answer to question 24 is {{graphs|24}}. Please write it clearly."
  ],
  [
    "tutor",
    "The answer to question 25 is {{presentation|25}}. Please write it clearly."
  ],
  [
    "tutor",
    "The additional answer to question 26 is {{drought|26}}."
  ],
  [
    "tutor",
    "The additional answer to question 27 is {{data|27}}."
  ],
  [
    "tutor",
    "The additional answer to question 28 is {{forecast|28}}."
  ],
  [
    "tutor",
    "The additional answer to question 29 is {{model|29}}."
  ],
  [
    "tutor",
    "The additional answer to question 30 is {{evidence|30}}."
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
    "Part 4. You will hear a recording about future of electric vehicles. First, look at questions 31 to 40."
  ],
  [
    "pause",
    3,
    "Reading time · Questions 31–40"
  ],
  [
    "lecturer",
    "The answer to question 31 is {{battery|31}}. Please write it clearly."
  ],
  [
    "lecturer",
    "The answer to question 32 is {{charging|32}}. Please write it clearly."
  ],
  [
    "lecturer",
    "The answer to question 33 is {{range|33}}. Please write it clearly."
  ],
  [
    "lecturer",
    "The answer to question 34 is {{lithium|34}}. Please write it clearly."
  ],
  [
    "lecturer",
    "The answer to question 35 is {{emissions|35}}. Please write it clearly."
  ],
  [
    "lecturer",
    "The additional answer to question 36 is {{motor|36}}."
  ],
  [
    "lecturer",
    "The additional answer to question 37 is {{stations|37}}."
  ],
  [
    "lecturer",
    "The additional answer to question 38 is {{journey|38}}."
  ],
  [
    "lecturer",
    "The additional answer to question 39 is {{recharge|39}}."
  ],
  [
    "lecturer",
    "The additional answer to question 40 is {{pollution|40}}."
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
      "appointment"
    ],
    "limit": "w"
  },
  "3": {
    "kind": "gap",
    "ans": [
      "friday"
    ],
    "limit": "w"
  },
  "4": {
    "kind": "gap",
    "ans": [
      "dentist"
    ],
    "limit": "w"
  },
  "5": {
    "kind": "gap",
    "ans": [
      "insurance"
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
      "morning"
    ],
    "limit": "w"
  },
  "8": {
    "kind": "gap",
    "ans": [
      "check-up"
    ],
    "limit": "w"
  },
  "9": {
    "kind": "gap",
    "ans": [
      "clinic"
    ],
    "limit": "w"
  },
  "10": {
    "kind": "gap",
    "ans": [
      "card"
    ],
    "limit": "w"
  },
  "11": {
    "kind": "gap",
    "ans": [
      "festival"
    ],
    "limit": "w"
  },
  "12": {
    "kind": "gap",
    "ans": [
      "sunday"
    ],
    "limit": "w"
  },
  "13": {
    "kind": "gap",
    "ans": [
      "chefs"
    ],
    "limit": "w"
  },
  "14": {
    "kind": "gap",
    "ans": [
      "tickets"
    ],
    "limit": "w"
  },
  "15": {
    "kind": "gap",
    "ans": [
      "vegetarian"
    ],
    "limit": "w"
  },
  "16": {
    "kind": "gap",
    "ans": [
      "music"
    ],
    "limit": "w"
  },
  "17": {
    "kind": "gap",
    "ans": [
      "market"
    ],
    "limit": "w"
  },
  "18": {
    "kind": "gap",
    "ans": [
      "local"
    ],
    "limit": "w"
  },
  "19": {
    "kind": "gap",
    "ans": [
      "chefs"
    ],
    "limit": "w"
  },
  "20": {
    "kind": "gap",
    "ans": [
      "entrance"
    ],
    "limit": "w"
  },
  "21": {
    "kind": "gap",
    "ans": [
      "temperature"
    ],
    "limit": "w"
  },
  "22": {
    "kind": "gap",
    "ans": [
      "rainfall"
    ],
    "limit": "w"
  },
  "23": {
    "kind": "gap",
    "ans": [
      "satellite"
    ],
    "limit": "w"
  },
  "24": {
    "kind": "gap",
    "ans": [
      "graphs"
    ],
    "limit": "w"
  },
  "25": {
    "kind": "gap",
    "ans": [
      "presentation"
    ],
    "limit": "w"
  },
  "26": {
    "kind": "gap",
    "ans": [
      "drought"
    ],
    "limit": "w"
  },
  "27": {
    "kind": "gap",
    "ans": [
      "data"
    ],
    "limit": "w"
  },
  "28": {
    "kind": "gap",
    "ans": [
      "forecast"
    ],
    "limit": "w"
  },
  "29": {
    "kind": "gap",
    "ans": [
      "model"
    ],
    "limit": "w"
  },
  "30": {
    "kind": "gap",
    "ans": [
      "evidence"
    ],
    "limit": "w"
  },
  "31": {
    "kind": "gap",
    "ans": [
      "battery"
    ],
    "limit": "w"
  },
  "32": {
    "kind": "gap",
    "ans": [
      "charging"
    ],
    "limit": "w"
  },
  "33": {
    "kind": "gap",
    "ans": [
      "range"
    ],
    "limit": "w"
  },
  "34": {
    "kind": "gap",
    "ans": [
      "lithium"
    ],
    "limit": "w"
  },
  "35": {
    "kind": "gap",
    "ans": [
      "emissions"
    ],
    "limit": "w"
  },
  "36": {
    "kind": "gap",
    "ans": [
      "motor"
    ],
    "limit": "w"
  },
  "37": {
    "kind": "gap",
    "ans": [
      "stations"
    ],
    "limit": "w"
  },
  "38": {
    "kind": "gap",
    "ans": [
      "journey"
    ],
    "limit": "w"
  },
  "39": {
    "kind": "gap",
    "ans": [
      "recharge"
    ],
    "limit": "w"
  },
  "40": {
    "kind": "gap",
    "ans": [
      "pollution"
    ],
    "limit": "w"
  }
};
  const LIMIT_WN = 'ONE WORD ONLY';
  const gap = n => `<span class="gap" data-q="${n}"><span class="n">${n}</span><input type="text" id="q${n}" data-q="${n}" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Question ${n}"></span>`;
  const PAPER = `<section class="part" id="part-1" data-part="1"><div class="part-head"><h2>Part 1</h2><span class="label">Questions 1–10</span></div><div class="qblock"><h3>Dental appointment</h3><p class="instr">Complete the notes. Write <b>ONE WORD ONLY</b> for each answer.</p><div class="form"><div class="line"><span>1. Dental appointment — answer:</span><span>\${gap(1)}</span></div><div class="line"><span>2. Dental appointment — answer:</span><span>\${gap(2)}</span></div><div class="line"><span>3. Dental appointment — answer:</span><span>\${gap(3)}</span></div><div class="line"><span>4. Dental appointment — answer:</span><span>\${gap(4)}</span></div><div class="line"><span>5. Dental appointment — answer:</span><span>\${gap(5)}</span></div><div class="line"><span>6. Dental appointment — answer:</span><span>\${gap(6)}</span></div><div class="line"><span>7. Dental appointment — answer:</span><span>\${gap(7)}</span></div><div class="line"><span>8. Dental appointment — answer:</span><span>\${gap(8)}</span></div><div class="line"><span>9. Dental appointment — answer:</span><span>\${gap(9)}</span></div><div class="line"><span>10. Dental appointment — answer:</span><span>\${gap(10)}</span></div></div></div></section>
<section class="part" id="part-2" data-part="2" hidden><div class="part-head"><h2>Part 2</h2><span class="label">Questions 11–20</span></div><div class="qblock"><h3>Food festival radio programme</h3><p class="instr">Complete the notes. Write <b>ONE WORD ONLY</b> for each answer.</p><div class="form"><div class="line"><span>11. Food festival radio programme — answer:</span><span>\${gap(11)}</span></div><div class="line"><span>12. Food festival radio programme — answer:</span><span>\${gap(12)}</span></div><div class="line"><span>13. Food festival radio programme — answer:</span><span>\${gap(13)}</span></div><div class="line"><span>14. Food festival radio programme — answer:</span><span>\${gap(14)}</span></div><div class="line"><span>15. Food festival radio programme — answer:</span><span>\${gap(15)}</span></div><div class="line"><span>16. Food festival radio programme — answer:</span><span>\${gap(16)}</span></div><div class="line"><span>17. Food festival radio programme — answer:</span><span>\${gap(17)}</span></div><div class="line"><span>18. Food festival radio programme — answer:</span><span>\${gap(18)}</span></div><div class="line"><span>19. Food festival radio programme — answer:</span><span>\${gap(19)}</span></div><div class="line"><span>20. Food festival radio programme — answer:</span><span>\${gap(20)}</span></div></div></div></section>
<section class="part" id="part-3" data-part="3" hidden><div class="part-head"><h2>Part 3</h2><span class="label">Questions 21–30</span></div><div class="qblock"><h3>Students discussing a climate project</h3><p class="instr">Complete the notes. Write <b>ONE WORD ONLY</b> for each answer.</p><div class="form"><div class="line"><span>21. Students discussing a climate project — answer:</span><span>\${gap(21)}</span></div><div class="line"><span>22. Students discussing a climate project — answer:</span><span>\${gap(22)}</span></div><div class="line"><span>23. Students discussing a climate project — answer:</span><span>\${gap(23)}</span></div><div class="line"><span>24. Students discussing a climate project — answer:</span><span>\${gap(24)}</span></div><div class="line"><span>25. Students discussing a climate project — answer:</span><span>\${gap(25)}</span></div><div class="line"><span>26. Students discussing a climate project — answer:</span><span>\${gap(26)}</span></div><div class="line"><span>27. Students discussing a climate project — answer:</span><span>\${gap(27)}</span></div><div class="line"><span>28. Students discussing a climate project — answer:</span><span>\${gap(28)}</span></div><div class="line"><span>29. Students discussing a climate project — answer:</span><span>\${gap(29)}</span></div><div class="line"><span>30. Students discussing a climate project — answer:</span><span>\${gap(30)}</span></div></div></div></section>
<section class="part" id="part-4" data-part="4" hidden><div class="part-head"><h2>Part 4</h2><span class="label">Questions 31–40</span></div><div class="qblock"><h3>Future of electric vehicles</h3><p class="instr">Complete the notes. Write <b>ONE WORD ONLY</b> for each answer.</p><div class="form"><div class="line"><span>31. Future of electric vehicles — answer:</span><span>\${gap(31)}</span></div><div class="line"><span>32. Future of electric vehicles — answer:</span><span>\${gap(32)}</span></div><div class="line"><span>33. Future of electric vehicles — answer:</span><span>\${gap(33)}</span></div><div class="line"><span>34. Future of electric vehicles — answer:</span><span>\${gap(34)}</span></div><div class="line"><span>35. Future of electric vehicles — answer:</span><span>\${gap(35)}</span></div><div class="line"><span>36. Future of electric vehicles — answer:</span><span>\${gap(36)}</span></div><div class="line"><span>37. Future of electric vehicles — answer:</span><span>\${gap(37)}</span></div><div class="line"><span>38. Future of electric vehicles — answer:</span><span>\${gap(38)}</span></div><div class="line"><span>39. Future of electric vehicles — answer:</span><span>\${gap(39)}</span></div><div class="line"><span>40. Future of electric vehicles — answer:</span><span>\${gap(40)}</span></div></div></div></section>`;
  const TIMELINE = [{"t":0,"focus":1},{"t":0,"pause":3,"label":"Reading time \u00b7 Questions 1\u201310"},{"t":3,"speech":1,"part":1},{"t":68.33,"pause":3,"label":"Checking time \u00b7 Part 1"},{"t":71.33,"focus":2},{"t":71.33,"pause":3,"label":"Reading time \u00b7 Questions 11\u201320"},{"t":74.33,"speech":1,"part":2},{"t":132.24,"pause":2,"label":"Checking time \u00b7 Part 2"},{"t":134.24,"focus":3},{"t":134.24,"pause":3,"label":"Reading time \u00b7 Questions 21\u201330"},{"t":137.24,"speech":1,"part":3},{"t":197.96,"pause":2,"label":"Checking time \u00b7 Part 3"},{"t":199.96,"focus":4},{"t":199.96,"pause":4,"label":"Reading time \u00b7 Questions 31\u201340"},{"t":203.96,"speech":1,"part":4}];
  const partNames = {1:'Part 1 · Dental appointment', 2:'Part 2 · Food festival radio programme', 3:'Part 3 · Students discussing a climate project', 4:'Part 4 · Future of electric vehicles'};
  window.LISTENING_TEST = { num: 10, audio: 'audio/listening-test10.mp3', minutes: 4, mb: 2, roles: ROLES, script: SCRIPT, Q, paper: PAPER, timeline: TIMELINE, partNames };
})();
