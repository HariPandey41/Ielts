// IELTS Listening · Practice Test 7 — content only. The exam engine is assets/listening-exam.js.
(() => {
  'use strict';
  // Speakers: label for the transcript, voice for tools/make_listening_audio.py
  const ROLES = {
    narrator:  { label: 'Narrator', voice: 'bm_george', speed: 0.92, lang: 'en-gb' },
    reception: { label: 'Receptionist', voice: 'bm_daniel', speed: 0.98, lang: 'en-gb' },
    elena:     { label: 'Elena', voice: 'af_jessica', speed: 0.98, lang: 'en-us' },
    guide:     { label: 'Guide', voice: 'bm_lewis', speed: 0.96, lang: 'en-gb' },
    priya:     { label: 'Priya', voice: 'af_river', speed: 0.98, lang: 'en-us' },
    sam:       { label: 'Sam', voice: 'am_puck', speed: 1.0, lang: 'en-us' },
    lecturer:  { label: 'Lecturer', voice: 'bf_alice', speed: 0.95, lang: 'en-gb' },
  };

  // Script: [role, text] lines, or ['pause', seconds, label], or ['focus', part]
  // {{text|n}} marks where the answer to question n is heard.
  const SCRIPT = [
    ['focus', 1],
    ['narrator', 'IELTS Listening. Practice Test 7.'],
    ['narrator', 'In the test, you will hear a number of different recordings and you will have to answer questions on what you hear. There will be time for you to read the instructions and questions, and you will have a chance to check your work. All the recordings will be played once only. The test is in four parts.'],
    ['narrator', 'Now turn to Part 1.'],
    ['narrator', 'Part 1. You will hear a woman joining a sports centre. First, you have some time to look at questions 1 to 5.'],
    ['pause', 30, 'Reading time · Questions 1–5'],
    ['narrator', 'You will see that there is an example that has been done for you. On this occasion only, the conversation relating to this will be played first.'],
    ['reception', 'Hello, welcome to Parkside Sports Centre. How can I help?'],
    ['elena', "Hi. I'd like to become a member, please."],
    ['reception', "Great. I'll fill in the form for you. What's your first name?"],
    ['elena', "It's Elena."],
    ['narrator', "The woman's first name is Elena, so 'Elena' has been written in the space. Now we shall begin. You should answer the questions as you listen, because you will not hear the recording a second time. Listen carefully and answer questions 1 to 5."],
    ['reception', 'Hello, welcome to Parkside Sports Centre. How can I help?'],
    ['elena', "Hi. I'd like to become a member, please."],
    ['reception', "Great. I'll fill in the form for you. What's your first name?"],
    ['elena', "It's Elena."],
    ['reception', 'And your surname?'],
    ['elena', "Kowalski. I'll spell it for you. {{K, O, W, A, L, S, K, I|1}}."],
    ['reception', "Thank you. And could I ask your occupation? We offer discounts for some jobs."],
    ['elena', "I used to be a teacher, but I retrained a couple of years ago, and now I'm a {{nurse|2}} at the City Hospital."],
    ['reception', "Then you'll get our health worker discount. Now, what type of membership are you interested in? Full membership lets you come at any time."],
    ['elena', "I work night shifts, so I'd only come during the day."],
    ['reception', "In that case, the {{daytime|3}} membership would suit you. It covers everything until four in the afternoon, and it's cheaper."],
    ['elena', 'How much is it?'],
    ['reception', "It's normally thirty-two pounds a month, but with your discount, it's {{twenty-eight|4}}."],
    ['elena', "That's good."],
    ['reception', "And all new members get a free session with a {{trainer|5}}, who'll show you how to use the equipment safely and plan a programme for you."],
    ['narrator', 'Before you hear the rest of the conversation, you have some time to look at questions 6 to 10.'],
    ['pause', 30, 'Reading time · Questions 6–10'],
    ['narrator', 'Now listen and answer questions 6 to 10.'],
    ['elena', "I'm mainly interested in swimming. Is the pool open all day?"],
    ['reception', "It is, but there are times when lane swimming isn't available. It used to be Wednesday mornings, but now the local schools have their lessons on {{Thursdays|6}}, so there's no lane swimming then."],
    ['elena', "Okay. What about classes? I'd like to try yoga."],
    ['reception', "You need to book classes in advance. You can't book by phone any more. Everything is done on our {{website|7}}, and you can book up to a week ahead."],
    ['elena', 'And are there lockers in the changing rooms?'],
    ['reception', "Yes, but they don't have keys, so you'll need to bring your own {{padlock|8}}. You can buy one at reception if you forget."],
    ['elena', "Good to know. And is the car park free?"],
    ['reception', "For members, yes. It used to be two hours, but now members can park for free for up to {{three|9}} hours."],
    ['elena', "That's plenty. Oh, one more thing. My son wants to learn to swim. When are the children's lessons?"],
    ['reception', "The Sunday classes are all full, I'm afraid, but there are still places on {{Saturday|10}}, at ten o'clock."],
    ['elena', "Saturday is fine. I'll book him in. Thanks."],
    ['narrator', 'That is the end of Part 1. You now have half a minute to check your answers to Part 1.'],
    ['pause', 30, 'Checking time · Part 1'],

    ['focus', 2],
    ['narrator', 'Now turn to Part 2.'],
    ['narrator', 'Part 2. You will hear a guide talking to a group of visitors at the start of a walking tour of a town. First, you have some time to look at questions 11 to 14.'],
    ['pause', 30, 'Reading time · Questions 11–14'],
    ['narrator', 'Now listen carefully and answer questions 11 to 14.'],
    ['guide', "Good morning, everyone, and welcome to the Ashbury history walk. My name's Peter, and I'll be your guide today."],
    ['guide', "The leaflet says the walk takes an hour, but that was the old route. We've added a few more stops, so {{it'll take about an hour and a half|11}}. We'll finish well before two hours, I promise."],
    ['guide', "A bit of background first. Ashbury is near the coast, so people often assume it was a fishing town, and there was some coal mining nearby in the nineteenth century. But the town's wealth really came from {{the wool trade|12}}, in the Middle Ages, and you'll see evidence of that in many of the buildings."],
    ['guide', "A couple of rules. You're welcome to go inside the church, and you can climb the church tower if you'd like a view of the town. You can take photographs anywhere, except that {{photography isn't allowed inside the Guildhall|13}}, because of the old paintings."],
    ['guide', "And we'll finish at {{the old harbour|14}}, where there are some good cafés. Some people ask about the castle, but it's too far out of town for this walk."],
    ['narrator', 'Before you hear the rest of the talk, you have some time to look at questions 15 to 20.'],
    ['pause', 30, 'Reading time · Questions 15–20'],
    ['narrator', 'Now listen and answer questions 15 to 20.'],
    ['guide', "Let me give you an idea of what we'll see. Our first stop is the Guildhall, where the wool merchants used to meet. It was used as offices until the nineteen eighties, but {{today it's a museum|15}}, with a wonderful collection of paintings."],
    ['guide', "Next is St Mary's Church. Most of what you see is from the fifteenth century, but parts of the tower are much older, and {{it's actually the oldest building in Ashbury|16}}."],
    ['guide', "Then the Corn Exchange, where farmers sold their grain. It was empty for many years, but {{it's been converted into a cinema|17}}, and it still has its original glass roof."],
    ['guide', "After that, we'll pass the Red Lion Inn. You may hear stories about a secret tunnel under it, but there's no evidence of that, I'm afraid. What we do know is that {{the novelist Charles Dickens stayed there|18}} in eighteen sixty."],
    ['guide', "The Old Grammar School is a private house now, but it's interesting because {{it was badly damaged by fire|19}} in nineteen twelve, and only the front wall is original."],
    ['guide', "And finally, Bridge House, by the river. When the castle fell into ruin, local people took the stone to use in their own buildings, and {{Bridge House was built with stone from the castle|20}}. You can still see some carved stones in the walls."],
    ['guide', "Right, let's start walking."],
    ['narrator', 'That is the end of Part 2. You now have half a minute to check your answers to Part 2.'],
    ['pause', 30, 'Checking time · Part 2'],

    ['focus', 3],
    ['narrator', 'Now turn to Part 3.'],
    ['narrator', 'Part 3. You will hear two students, Priya and Sam, discussing a survey they are designing. First, you have some time to look at questions 21 to 26.'],
    ['pause', 30, 'Reading time · Questions 21–26'],
    ['narrator', 'Now listen carefully and answer questions 21 to 26.'],
    ['priya', "So, Sam, we need to finish the survey design this week. Let's start with the aim. I know we talked about comparing our university with others."],
    ['sam', "But we don't have the data for that. And we're not trying to measure how fit people are. The point is {{to find out why so many students don't use the sports centre|21}}."],
    ['priya', "Right. How many responses should we aim for? Our tutor said five hundred would be ideal."],
    ['sam', "That's not realistic in three weeks. But a hundred would be too few to compare different groups of students. {{Let's aim for two hundred|22}}."],
    ['priya', "Agreed. And how do we reach people? Emailing all students isn't allowed, and standing in the canteen would take forever."],
    ['sam', "So {{posters with a QR code|23}}, around the campus. People can scan it and do the survey on their phones."],
    ['priya', "Good. Now, the pilot study. We tested it on ten people. Nobody said it was too long, and they answered the open questions, which surprised me. But {{several people misunderstood question five|24}}, about how far they live from campus."],
    ['sam', "We'll rewrite that one. What about encouraging people to take part? The sports centre said they can't give us free gym passes."],
    ['priya', "No, and we're not allowed to offer course credit. But the student union will fund {{a prize draw|25}} for a tablet."],
    ['sam', "And the café has offered {{a voucher for a free coffee|26}} for everyone who finishes the survey. That should help."],
    ['narrator', 'Before you hear the rest of the discussion, you have some time to look at questions 27 to 30.'],
    ['pause', 30, 'Reading time · Questions 27–30'],
    ['narrator', 'Now listen and answer questions 27 to 30.'],
    ['priya', "Let's go through each section of the questionnaire. First, personal details: age, course and so on."],
    ['sam', "I read that people are more likely to give up if they have to start with personal questions. So {{let's move that section to the end|27}}."],
    ['priya', "Good idea. Next, the section on how often people exercise. At the moment, people have to write in a number."],
    ['sam', "And people wrote all kinds of things, like 'sometimes'. {{We should change it to multiple choice|28}}, with options like 'once a week' or 'never'."],
    ['priya', "Then the section on opinions about the facilities. It's got fifteen questions."],
    ['sam', "That's where people got bored in the pilot. {{Let's cut it down to about six questions|29}}, on the things that matter most."],
    ['priya', "And finally, the open question asking for suggestions. I wondered about removing it, because it'll take ages to analyse."],
    ['sam', "But it's the most useful part. The problem is that people didn't know what kind of answer we wanted. So {{we'll add an example|30}}, like 'longer opening hours'."],
    ['priya', "Okay. Let's make those changes today."],
    ['narrator', 'That is the end of Part 3. You now have half a minute to check your answers to Part 3.'],
    ['pause', 30, 'Checking time · Part 3'],

    ['focus', 4],
    ['narrator', 'Now turn to Part 4.'],
    ['narrator', 'Part 4. You will hear a lecture about the life of honeybees. First, you have some time to look at questions 31 to 40.'],
    ['pause', 45, 'Reading time · Questions 31–40'],
    ['narrator', 'Now listen carefully and answer questions 31 to 40.'],
    ['lecturer', "Good morning. Today we're going to look at one of the most remarkable insects on the planet: the honeybee. I'll talk about how a colony is organised, how bees communicate, and some of the threats they face."],
    ['lecturer', "A honeybee colony can contain up to fifty thousand bees, but there are only three types. There is a single queen. There are thousands of female worker bees. And in summer, there are a few hundred males, which are called {{drones|31}}. Their only job is to mate with a queen from another colony."],
    ['lecturer', "The queen's role is to lay eggs, and in early summer she can lay as many as two thousand eggs a {{day|32}}. All female larvae are fed the same food at first. But a few are chosen to become new queens, and these are fed only on a special food called royal {{jelly|33}}, which makes them develop differently."],
    ['lecturer', "Worker bees are not all the same either. Their jobs change with {{age|34}}. Young bees stay inside the hive, cleaning cells and feeding larvae. Older bees build combs, using wax that is produced by their own {{bodies|35}}. And in the last few weeks of their lives, they become foragers, flying out to collect nectar and pollen."],
    ['lecturer', "One of the most fascinating things about honeybees is how they communicate. When a forager finds a good source of food, she returns to the hive and performs what's called the waggle dance. The angle of the dance shows other bees which direction to fly, in relation to the position of the {{sun|36}}. And the length of the dance tells them the {{distance|37}}. The longer the dance, the further away the food is."],
    ['lecturer', "How do bees survive the winter? Unlike many insects, they don't hibernate. Instead, they form a tight cluster around the queen, and they {{shiver|38}}, using their flight muscles to produce heat. They can keep the centre of the cluster at around thirty-five degrees, even when it's freezing outside."],
    ['lecturer', "Unfortunately, honeybees face serious threats. The most damaging is a parasite called the varroa {{mite|39}}, which feeds on bees and spreads viruses through the colony. Pesticides are another concern. Even small doses of some pesticides seem to affect bees' {{memory|40}}, so foragers have difficulty finding their way back to the hive."],
    ['lecturer', "Next time, we'll look at what farmers and gardeners can do to help bees."],
    ['narrator', 'That is the end of Part 4. That is the end of the listening test.'],
  ];

  // Questions. kind: gap | mcq | two | match
  const LIMIT_WN = 'ONE WORD AND/OR A NUMBER';
  const Q = {
    1:  { kind: 'gap', ans: ['kowalski'], limit: 'wn', key: 'Kowalski' },
    2:  { kind: 'gap', ans: ['nurse'], limit: 'wn' },
    3:  { kind: 'gap', ans: ['daytime', 'day-time'], limit: 'wn' },
    4:  { kind: 'gap', ans: ['28'], limit: 'wn' },
    5:  { kind: 'gap', ans: ['trainer'], limit: 'wn' },
    6:  { kind: 'gap', ans: ['thursdays', 'thursday'], limit: 'wn', key: 'Thursdays' },
    7:  { kind: 'gap', ans: ['website'], limit: 'wn' },
    8:  { kind: 'gap', ans: ['padlock'], limit: 'wn' },
    9:  { kind: 'gap', ans: ['3', 'three'], limit: 'wn' },
    10: { kind: 'gap', ans: ['saturday', 'saturdays'], limit: 'wn', key: 'Saturday' },
    11: { kind: 'mcq', q: 'How long will the walk take?', opts: { A: 'one hour', B: 'an hour and a half', C: 'two hours' }, ans: 'B' },
    12: { kind: 'mcq', q: 'Ashbury became wealthy because of', opts: { A: 'fishing.', B: 'coal mining.', C: 'the wool trade.' }, ans: 'C' },
    13: { kind: 'mcq', q: 'Visitors are not allowed to', opts: { A: 'climb the church tower.', B: 'take photographs inside the Guildhall.', C: 'go inside the church.' }, ans: 'B' },
    14: { kind: 'mcq', q: 'Where does the walk finish?', opts: { A: 'at the old harbour', B: 'at the castle', C: 'in the market square' }, ans: 'A' },
    15: { kind: 'match', label: 'Guildhall', ans: 'B' },
    16: { kind: 'match', label: 'St Mary’s Church', ans: 'E' },
    17: { kind: 'match', label: 'Corn Exchange', ans: 'F' },
    18: { kind: 'match', label: 'Red Lion Inn', ans: 'C' },
    19: { kind: 'match', label: 'Old Grammar School', ans: 'A' },
    20: { kind: 'match', label: 'Bridge House', ans: 'D' },
    21: { kind: 'mcq', q: 'What is the main aim of the students’ survey?', opts: { A: 'to compare their university with others', B: 'to measure how fit students are', C: 'to find out why students do not use the sports centre' }, ans: 'C' },
    22: { kind: 'mcq', q: 'How many responses do they hope to get?', opts: { A: '100', B: '200', C: '500' }, ans: 'B' },
    23: { kind: 'mcq', q: 'How will they ask students to take part?', opts: { A: 'with posters', B: 'by email', C: 'in the canteen' }, ans: 'A' },
    24: { kind: 'mcq', q: 'What did the pilot study show?', opts: { A: 'The survey was too long.', B: 'People did not answer the open questions.', C: 'One question was misunderstood.' }, ans: 'C' },
    25: { kind: 'two', pair: [25, 26], ans: ['A', 'D'] },
    26: { kind: 'two', pair: [25, 26], ans: ['A', 'D'] },
    27: { kind: 'match', label: 'personal details', ans: 'C' },
    28: { kind: 'match', label: 'how often people exercise', ans: 'E' },
    29: { kind: 'match', label: 'opinions about the facilities', ans: 'B' },
    30: { kind: 'match', label: 'suggestions', ans: 'D' },
    31: { kind: 'gap', ans: ['drones'], limit: 'w' },
    32: { kind: 'gap', ans: ['day'], limit: 'w' },
    33: { kind: 'gap', ans: ['jelly'], limit: 'w' },
    34: { kind: 'gap', ans: ['age'], limit: 'w' },
    35: { kind: 'gap', ans: ['bodies', 'body'], limit: 'w' },
    36: { kind: 'gap', ans: ['sun'], limit: 'w' },
    37: { kind: 'gap', ans: ['distance'], limit: 'w' },
    38: { kind: 'gap', ans: ['shiver'], limit: 'w' },
    39: { kind: 'gap', ans: ['mite'], limit: 'w' },
    40: { kind: 'gap', ans: ['memory'], limit: 'w' },
  };
  const BUILDINGS = { A: 'was damaged by fire', B: 'is now a museum', C: 'was visited by a famous writer', D: 'was built with stone from another building', E: 'is the oldest building in the town', F: 'is now a cinema', G: 'has a secret tunnel', H: 'was once a school for girls' };
  const TWO_OPTS = { A: 'a prize draw', B: 'free gym passes', C: 'course credit', D: 'a free drink', E: 'a discount at the sports shop' };
  const ACTIONS = { A: 'remove it', B: 'shorten it', C: 'move it to the end', D: 'add an example', E: 'change it to multiple choice', F: 'translate it' };

  const gap = n => `<span class="gap" data-q="${n}"><span class="n">${n}</span><input type="text" id="q${n}" data-q="${n}" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Question ${n}"></span>`;
  const mcq = n => { const q = Q[n]; return `<div class="mcq" data-q="${n}" role="radiogroup" aria-labelledby="ql${n}"><div class="q"><span class="qn">${n}</span><span id="ql${n}">${q.q}</span></div>${Object.entries(q.opts).map(([k, v]) => `<label data-opt="${k}"><input type="radio" name="q${n}" value="${k}" data-q="${n}"><b>${k}</b><span>${v}</span></label>`).join('')}</div>`; };
  const sel = (n, letters) => `<select id="q${n}" data-q="${n}" aria-label="Question ${n}"><option value="">–</option>${letters.map(l => `<option>${l}</option>`).join('')}</select>`;
  const box = (title, obj) => `<div class="boxlist"><span class="label" style="grid-column:1/-1">${title}</span>${Object.entries(obj).map(([k, v]) => `<b>${k}</b><span>${v}</span>`).join('')}</div>`;
  const matchRows = (nums, opts) => nums.map(n => `<div class="match-row" data-q="${n}"><span class="qn">${n}</span><span class="who">${Q[n].label}</span>${sel(n, Object.keys(opts))}</div>`).join('');
  const twoBlock = (first, question, opts) => `<div class="mcq" data-q="${first}" data-two="1"><div class="q"><span class="qn">${first}–${first + 1}</span><span>${question}</span></div>${Object.entries(opts).map(([k, v]) => `<label data-opt="${k}"><input type="checkbox" value="${k}" data-two="1"><b>${k}</b><span>${v}</span></label>`).join('')}</div>`;

  const PAPER = `
  <section class="part" id="part-1" data-part="1">
    <div class="part-head"><h2>Part 1</h2><span class="label">Questions 1–10</span></div>
    <div class="qblock">
      <h3>Questions 1–10</h3>
      <p class="instr">Complete the form below. Write <b>${LIMIT_WN}</b> for each answer.</p>
      <div class="form">
        <h4>Parkside Sports Centre · Membership form</h4>
        <div class="line"><span>First name:</span><span class="example">Example: <u>Elena</u></span></div>
        <div class="line"><span>Surname:</span><span>${gap(1)}</span></div>
        <div class="line"><span>Occupation:</span><span>${gap(2)}</span></div>
        <div class="line"><span>Type of membership:</span><span>${gap(3)} (until 4 pm)</span></div>
        <div class="line"><span>Monthly fee:</span><span>£ ${gap(4)}</span></div>
        <div class="line"><span>Free for new members:</span><span>one session with a ${gap(5)}</span></div>
        <div class="sub">Other information</div>
        <div class="line"><span>Pool:</span><span>no lane swimming on ${gap(6)}</span></div>
        <div class="line"><span>Classes:</span><span>book on the ${gap(7)}</span></div>
        <div class="line"><span>Lockers:</span><span>bring a ${gap(8)}</span></div>
        <div class="line"><span>Car park:</span><span>free for up to ${gap(9)} hours</span></div>
        <div class="line"><span>Son’s swimming lessons:</span><span>${gap(10)}, 10 am</span></div>
      </div>
    </div>
  </section>

  <section class="part" id="part-2" data-part="2" hidden>
    <div class="part-head"><h2>Part 2</h2><span class="label">Questions 11–20</span></div>
    <div class="qblock">
      <h3>Questions 11–14</h3>
      <p class="instr">Choose the correct letter, <b>A, B or C</b>.</p>
      <p class="instr"><b>Ashbury history walk</b></p>
      ${[11, 12, 13, 14].map(mcq).join('')}
    </div>
    <div class="qblock">
      <h3>Questions 15–20</h3>
      <p class="instr">What does the guide say about each building? Choose <b>SIX</b> answers from the box and write the correct letter, <b>A–H</b>, next to Questions 15–20.</p>
      ${box('Buildings', BUILDINGS)}
      ${matchRows([15, 16, 17, 18, 19, 20], BUILDINGS)}
    </div>
  </section>

  <section class="part" id="part-3" data-part="3" hidden>
    <div class="part-head"><h2>Part 3</h2><span class="label">Questions 21–30</span></div>
    <div class="qblock">
      <h3>Questions 21–24</h3>
      <p class="instr">Choose the correct letter, <b>A, B or C</b>.</p>
      ${[21, 22, 23, 24].map(mcq).join('')}
    </div>
    <div class="qblock">
      <h3>Questions 25 and 26</h3>
      <p class="instr">Choose <b>TWO</b> letters, <b>A–E</b>.</p>
      ${twoBlock(25, 'Which <b>TWO</b> rewards will the students offer people who complete the survey?', TWO_OPTS)}
    </div>
    <div class="qblock">
      <h3>Questions 27–30</h3>
      <p class="instr">What will the students do with each section of the questionnaire? Choose <b>FOUR</b> answers from the box and write the correct letter, <b>A–F</b>, next to Questions 27–30.</p>
      ${box('Actions', ACTIONS)}
      ${matchRows([27, 28, 29, 30], ACTIONS)}
    </div>
  </section>

  <section class="part" id="part-4" data-part="4" hidden>
    <div class="part-head"><h2>Part 4</h2><span class="label">Questions 31–40</span></div>
    <div class="qblock">
      <h3>Questions 31–40</h3>
      <p class="instr">Complete the notes below. Write <b>ONE WORD ONLY</b> for each answer.</p>
      <div class="notes">
        <h4>The life of honeybees</h4>
        <span class="h">The colony</span>
        <ul>
          <li>One queen, thousands of female workers, and males called ${gap(31)}.</li>
          <li>The queen can lay up to 2,000 eggs a ${gap(32)}.</li>
          <li>Future queens are fed only on royal ${gap(33)}.</li>
        </ul>
        <span class="h">Worker bees</span>
        <ul>
          <li>Their jobs change with ${gap(34)}.</li>
          <li>Wax for the combs is produced by their own ${gap(35)}.</li>
        </ul>
        <span class="h">The waggle dance</span>
        <ul>
          <li>The angle shows direction in relation to the ${gap(36)}.</li>
          <li>The length shows the ${gap(37)} to the food.</li>
        </ul>
        <span class="h">Winter</span>
        <ul>
          <li>Bees cluster together and ${gap(38)} to produce heat.</li>
        </ul>
        <span class="h">Threats</span>
        <ul>
          <li>The varroa ${gap(39)} spreads viruses.</li>
          <li>Pesticides can affect bees’ ${gap(40)}.</li>
        </ul>
      </div>
    </div>
  </section>`;

  // Part changes and reading/checking pauses in the recording (seconds) — filled in by tools/make_listening_audio.py
  const TIMELINE = [{"t":1.0,"focus":1},{"t":34.25,"pause":30,"label":"Reading time · Questions 1–5"},{"t":64.25,"speech":1,"part":1},{"t":171.92,"pause":30,"label":"Reading time · Questions 6–10"},{"t":201.92,"speech":1,"part":1},{"t":270.33,"pause":30,"label":"Checking time · Part 1"},{"t":300.33,"focus":2},{"t":300.33,"speech":1,"part":2},{"t":314.72,"pause":30,"label":"Reading time · Questions 11–14"},{"t":344.72,"speech":1,"part":2},{"t":420.45,"pause":30,"label":"Reading time · Questions 15–20"},{"t":450.45,"speech":1,"part":2},{"t":539.29,"pause":30,"label":"Checking time · Part 2"},{"t":569.29,"focus":3},{"t":569.29,"speech":1,"part":3},{"t":583.4,"pause":30,"label":"Reading time · Questions 21–26"},{"t":613.4,"speech":1,"part":3},{"t":705.11,"pause":30,"label":"Reading time · Questions 27–30"},{"t":735.11,"speech":1,"part":3},{"t":808.08,"pause":30,"label":"Checking time · Part 3"},{"t":838.08,"focus":4},{"t":838.08,"speech":1,"part":4},{"t":849.4,"pause":45,"label":"Reading time · Questions 31–40"},{"t":894.4,"speech":1,"part":4}];
  const partNames = { 1: 'Part 1 · Joining a sports centre', 2: 'Part 2 · Ashbury history walk', 3: 'Part 3 · Designing a student survey', 4: 'Part 4 · The life of honeybees' };
  window.LISTENING_TEST = { num: 7, audio: 'audio/listening-test7.mp3', minutes: 17, mb: 8, roles: ROLES, script: SCRIPT, Q, paper: PAPER, timeline: TIMELINE, partNames };
})();
