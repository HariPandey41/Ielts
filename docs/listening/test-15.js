// IELTS Listening · Full Mock Test 5 — content only. The exam engine is assets/listening-exam.js.
// Kept for the mock test: this test is not listed with the practice tests.
(() => {
  'use strict';
  // Speakers: label for the transcript, voice for tools/make_listening_audio.py
  const ROLES = {
    narrator:    { label: 'Narrator', voice: 'bm_george', speed: 0.92, lang: 'en-gb' },
    manager:     { label: 'Restaurant manager', voice: 'bm_fable', speed: 0.98, lang: 'en-gb' },
    karen:       { label: 'Karen', voice: 'af_heart', speed: 0.98, lang: 'en-us' },
    coordinator: { label: 'Coordinator', voice: 'bf_lily', speed: 0.97, lang: 'en-gb' },
    lucy:        { label: 'Lucy', voice: 'bf_isabella', speed: 0.98, lang: 'en-gb' },
    ahmed:       { label: 'Ahmed', voice: 'am_puck', speed: 0.98, lang: 'en-us' },
    price:       { label: 'Mr Price', voice: 'bm_daniel', speed: 0.96, lang: 'en-gb' },
    lecturer:    { label: 'Lecturer', voice: 'af_nova', speed: 0.95, lang: 'en-us' },
  };

  // Script: [role, text] lines, or ['pause', seconds, label], or ['focus', part]
  // {{text|n}} marks where the answer to question n is heard.
  const SCRIPT = [
    ['focus', 1],
    ['narrator', 'IELTS Listening. Full Mock Test 5.'],
    ['narrator', 'In the test, you will hear a number of different recordings and you will have to answer questions on what you hear. There will be time for you to read the instructions and questions, and you will have a chance to check your work. All the recordings will be played once only. The test is in four parts.'],
    ['narrator', 'Now turn to Part 1.'],
    ['narrator', 'Part 1. You will hear a woman phoning a restaurant to book a room for a party. First, you have some time to look at questions 1 to 5.'],
    ['pause', 30, 'Reading time · Questions 1–5'],
    ['narrator', 'You will see that there is an example that has been done for you. On this occasion only, the conversation relating to this will be played first.'],
    ['manager', 'Good afternoon, Bella Vista. How can I help you?'],
    ['karen', "Hi. I'd like to book a private room for a party, please. It's for a colleague who's retiring."],
    ['manager', "Lovely. So it's a retirement party."],
    ['narrator', "The occasion is a retirement party, so 'retirement' has been written in the space. Now we shall begin. You should answer the questions as you listen, because you will not hear the recording a second time. Listen carefully and answer questions 1 to 5."],
    ['manager', 'Good afternoon, Bella Vista. How can I help you?'],
    ['karen', "Hi. I'd like to book a private room for a party, please. It's for a colleague who's retiring."],
    ['manager', "Lovely. So it's a retirement party. Can I take your name?"],
    ['karen', "Yes, it's Karen {{Ashworth|1}}. A, S, H, W, O, R, T, H."],
    ['manager', 'And what date were you thinking of?'],
    ['karen', "His last day at work is Friday the twenty-first of March, but a lot of people are away that week. So we'd like Friday the {{twenty-eighth|2}}, if possible."],
    ['manager', "Yes, that's free. How many guests are you expecting?"],
    ['karen', "We've invited about sixty people, and so far {{forty-five|3}} have said they're coming. I don't think there'll be many more."],
    ['manager', "In that case, the Library Room would be too small. It only holds thirty. I'd suggest the {{Garden|4}} Room, which holds up to sixty, and it opens onto the terrace."],
    ['karen', 'That sounds lovely. And what time could we start?'],
    ['manager', "The room is available from six, but most people start at seven thirty. Would that suit you?"],
    ['karen', "Actually, a lot of people will come straight from work, so could we start at {{seven|5}}?"],
    ['manager', "Of course."],
    ['narrator', 'Before you hear the rest of the conversation, you have some time to look at questions 6 to 10.'],
    ['pause', 30, 'Reading time · Questions 6–10'],
    ['narrator', 'Now listen and answer questions 6 to 10.'],
    ['manager', "Now, food. We can do a three-course meal, served at the table, or a {{buffet|6}}."],
    ['karen', "We'd prefer the buffet, so that people can move around and talk."],
    ['manager', "Good choice. Are there any special requirements?"],
    ['karen', "We'd like a cake at the end. And one of our colleagues has a serious allergy, so please make sure the cake contains no {{nuts|7}}."],
    ['manager', "Of course. And would you like any entertainment? We can arrange a DJ, but some groups prefer something quieter."],
    ['karen', "I think something quieter. Our colleague loves jazz, so could you arrange a {{pianist|8}}?"],
    ['manager', "Yes, we work with a very good one. Now, to confirm the booking, we'll need a deposit of {{two hundred|9}} pounds."],
    ['karen', 'Fine. And when do you need the final numbers?'],
    ['manager', "Most restaurants ask for three days, but because it's a buffet, we need them {{seven|10}} days before the party."],
    ['karen', "Okay. Thanks for your help."],
    ['narrator', 'That is the end of Part 1. You now have half a minute to check your answers to Part 1.'],
    ['pause', 30, 'Checking time · Part 1'],

    ['focus', 2],
    ['narrator', 'Now turn to Part 2.'],
    ['narrator', 'Part 2. You will hear the coordinator of a community allotment scheme talking to new members. First, you have some time to look at questions 11 to 16.'],
    ['pause', 30, 'Reading time · Questions 11–16'],
    ['narrator', 'Now listen carefully and answer questions 11 to 16.'],
    ['coordinator', "Welcome, everyone, to Hillside Allotments. I'm the coordinator, and I'd like to explain how things work here before you start digging."],
    ['coordinator', "First, the rent. Each plot costs {{thirty-five|11}} pounds a year. That's for a full plot. Half plots are available too, at a lower price."],
    ['coordinator', "As you know, there's a waiting list. Some of you have waited a long time, but at the moment the wait is usually about {{six|12}} months, which is much shorter than it used to be."],
    ['coordinator', "There are no taps on the site, I'm afraid. Water comes from large {{tanks|13}} that collect rain from the roofs of the sheds, so please don't waste it."],
    ['coordinator', "You don't need to buy expensive equipment straight away. Spades, forks and wheelbarrows can be borrowed from the {{shed|14}} by the main gate. Just write your name in the book."],
    ['coordinator', "Bonfires are not allowed, because of the smoke. Instead, please put all your green waste in the {{compost|15}} bins at the end of each path."],
    ['coordinator', "And we hold a members' meeting on the first {{Sunday|16}} of every month, in the community hall, where we discuss any problems and share advice."],
    ['narrator', 'Before you hear the rest of the talk, you have some time to look at questions 17 to 20.'],
    ['pause', 30, 'Reading time · Questions 17–20'],
    ['narrator', 'Now listen and answer questions 17 to 20.'],
    ['coordinator', "There are a few rules that every new member must follow. You don't have to grow only vegetables; flowers are fine. And you can keep bees, but not other animals. What you must do is {{attend a short welcome session|17}}, where we'll show you around the site. And {{you must start working on your plot within one month|18}}. If a plot is left untouched, we give it to the next person on the list. You're welcome to sell any extra produce at our open day, but that's up to you."],
    ['coordinator', "People often ask what they'll get out of it. Most of our members don't save much money, to be honest, once they've paid for seeds and tools. And you can't make money from it either. But they say {{they've made friends with people they'd never have met otherwise|19}}. And {{they get plenty of exercise outdoors|20}}, which is good for both body and mind. Right, let's go and have a look at your plots."],
    ['narrator', 'That is the end of Part 2. You now have half a minute to check your answers to Part 2.'],
    ['pause', 30, 'Checking time · Part 2'],

    ['focus', 3],
    ['narrator', 'Now turn to Part 3.'],
    ['narrator', 'Part 3. You will hear two business students, Lucy and Ahmed, talking to their tutor, Mr Price, about the work placements they have just completed. First, you have some time to look at questions 21 to 25.'],
    ['pause', 30, 'Reading time · Questions 21–25'],
    ['narrator', 'Now listen carefully and answer questions 21 to 25.'],
    ['price', "Welcome back, both of you. How were your placements?"],
    ['lucy', "Mine was at a travel company. I expected to be making coffee, but they gave me real work from the first day. The thing that surprised me most was {{how much responsibility I was given|21}}. By the second week, I was dealing with customers on my own."],
    ['ahmed', "I was at an engineering firm, in the marketing department. My biggest problem was {{understanding all the technical language|22}}. The people were friendly, and the hours were fine, but I didn't understand half of what the engineers said at first."],
    ['price', "That's very common. Lucy, what did you find most useful?"],
    ['lucy', "My manager had a meeting with me every Friday. Some weeks we only talked for ten minutes, but {{the feedback she gave me was really helpful|23}}, because I always knew what I needed to improve."],
    ['price', "And Ahmed, would you go back to that company?"],
    ['ahmed', "Definitely. They've actually {{offered me a job for next summer|24}}, so I'll be going back in June."],
    ['price', "Congratulations. Now, for your placement report, the most important section is the reflection. The description of the company should be short. What I really want to see is {{what you learned about yourselves|25}}."],
    ['narrator', 'Before you hear the rest of the discussion, you have some time to look at questions 26 to 30.'],
    ['pause', 30, 'Reading time · Questions 26–30'],
    ['narrator', 'Now listen and answer questions 26 to 30.'],
    ['price', "Let's think about the skills you developed. Lucy, you said you answered customer emails?"],
    ['lucy', "Yes, dozens every day. Every email had to be checked carefully, because one wrong date could ruin someone's holiday. So {{it taught me to pay attention to detail|26}}."],
    ['ahmed', "I had to prepare a budget for a trade show. There were so many deadlines at the same time that {{I really had to learn to manage my time|27}}."],
    ['price', 'Did either of you give a presentation?'],
    ['lucy', "I did, to the senior managers, at the end of the placement. I was terrified beforehand, but it went well, and {{it gave me a lot more confidence|28}}."],
    ['ahmed', "I helped to organise a launch event for a new product. I couldn't have done it alone. {{I had to work closely with people from four different departments|29}}."],
    ['price', 'And Lucy, I heard you trained someone?'],
    ['lucy', "Yes, a new member of staff joined in my last week, and I showed her how the booking system worked. She kept making the same mistakes, so {{I learned to be very patient|30}}."],
    ['price', "Excellent. Put all of that in your reflections."],
    ['narrator', 'That is the end of Part 3. You now have half a minute to check your answers to Part 3.'],
    ['pause', 30, 'Checking time · Part 3'],

    ['focus', 4],
    ['narrator', 'Now turn to Part 4.'],
    ['narrator', 'Part 4. You will hear a lecture about endangered languages. First, you have some time to look at questions 31 to 40.'],
    ['pause', 45, 'Reading time · Questions 31–40'],
    ['narrator', 'Now listen carefully and answer questions 31 to 40.'],
    ['lecturer', "Good afternoon. Today's lecture is about languages that are in danger of disappearing."],
    ['lecturer', "There are around seven thousand languages spoken in the world today, but they are very unevenly distributed. Just a few dozen languages are spoken by most of the world's population, while thousands are spoken by small communities. Linguists estimate that about {{half|31}} of all the world's languages may no longer be spoken by the end of this century."],
    ['lecturer', "How does a language die? It rarely happens because all its speakers die. More often, parents stop passing it on, and children stop {{learning|32}} it as their first language. Usually this happens because another language is needed for work and for {{school|33}}, and parents believe their children will have better opportunities if they speak it."],
    ['lecturer', "Why does this matter? When a language disappears, we lose more than words. Many small languages contain detailed knowledge of the local environment, for example names and uses of {{plants|34}} that are not described anywhere else."],
    ['lecturer', "The good news is that languages can be revived. In Hawaii, the number of children speaking Hawaiian had fallen to just a few dozen by the nineteen eighties. Parents then set up what were called language {{nests|35}}, preschools where young children spend the whole day hearing only Hawaiian. Today, thousands of children are educated in the language."],
    ['lecturer', "In Wales, the Welsh language has been supported in several ways, including a {{television|36}} channel that broadcasts only in Welsh, which helped to make the language feel modern rather than old-fashioned."],
    ['lecturer', "Technology can also help. Speakers of endangered languages now record vocabulary and stories using {{apps|37}} on their phones, and linguists use these recordings to produce {{dictionaries|38}} and teaching materials."],
    ['lecturer', "But no technology can save a language on its own. Research suggests that the most important factor is the {{pride|39}} that young people feel in their language. If they see it as something to be proud of, they are much more likely to use it."],
    ['lecturer', "Finally, an example of how far a revival can go. The Cornish language, in the south-west of England, was thought to have died out in the {{eighteenth|40}} century. Today, after more than a century of work by enthusiasts, several hundred people can speak it, and a few children are once again growing up with it."],
    ['lecturer', "Next week, we'll look at how new languages come into being."],
    ['narrator', 'That is the end of Part 4. That is the end of the listening test.'],
  ];

  // Questions. kind: gap | mcq | two | match
  const LIMIT_WN = 'ONE WORD AND/OR A NUMBER';
  const LIMIT_W = 'ONE WORD ONLY';
  const Q = {
    1:  { kind: 'gap', ans: ['ashworth'], limit: 'wn', key: 'Ashworth' },
    2:  { kind: 'gap', ans: ['28', '28th', 'twenty-eighth'], limit: 'wn' },
    3:  { kind: 'gap', ans: ['45', 'forty-five'], limit: 'wn' },
    4:  { kind: 'gap', ans: ['garden'], limit: 'wn', key: 'Garden' },
    5:  { kind: 'gap', ans: ['7', 'seven', '7pm', '7.00'], limit: 'wn' },
    6:  { kind: 'gap', ans: ['buffet'], limit: 'wn' },
    7:  { kind: 'gap', ans: ['nuts'], limit: 'wn' },
    8:  { kind: 'gap', ans: ['pianist'], limit: 'wn' },
    9:  { kind: 'gap', ans: ['200'], limit: 'wn' },
    10: { kind: 'gap', ans: ['7', 'seven'], limit: 'wn' },
    11: { kind: 'gap', ans: ['35', 'thirty-five'], limit: 'wn' },
    12: { kind: 'gap', ans: ['6', 'six'], limit: 'wn' },
    13: { kind: 'gap', ans: ['tanks'], limit: 'wn' },
    14: { kind: 'gap', ans: ['shed'], limit: 'wn' },
    15: { kind: 'gap', ans: ['compost'], limit: 'wn' },
    16: { kind: 'gap', ans: ['sunday'], limit: 'wn', key: 'Sunday' },
    17: { kind: 'two', pair: [17, 18], ans: ['B', 'D'] },
    18: { kind: 'two', pair: [17, 18], ans: ['B', 'D'] },
    19: { kind: 'two', pair: [19, 20], ans: ['B', 'C'] },
    20: { kind: 'two', pair: [19, 20], ans: ['B', 'C'] },
    21: { kind: 'mcq', q: 'What surprised Lucy most about her placement?', opts: { A: 'the amount of responsibility she had', B: 'the number of customers', C: 'how friendly the staff were' }, ans: 'A' },
    22: { kind: 'mcq', q: 'What was Ahmed’s biggest difficulty?', opts: { A: 'the long working hours', B: 'the technical vocabulary', C: 'getting on with colleagues' }, ans: 'B' },
    23: { kind: 'mcq', q: 'What did Lucy find most useful about her weekly meetings?', opts: { A: 'They were short.', B: 'Her manager’s feedback helped her improve.', C: 'She could ask for different work.' }, ans: 'B' },
    24: { kind: 'mcq', q: 'What has happened since Ahmed’s placement?', opts: { A: 'He has been offered summer work.', B: 'He has decided to study engineering.', C: 'He has been asked to give a talk.' }, ans: 'A' },
    25: { kind: 'mcq', q: 'According to Mr Price, the most important part of the report is', opts: { A: 'the description of the company.', B: 'what the students learned about themselves.', C: 'the list of tasks they did.' }, ans: 'B' },
    26: { kind: 'match', label: 'answering customer emails', ans: 'D' },
    27: { kind: 'match', label: 'preparing a budget', ans: 'B' },
    28: { kind: 'match', label: 'presenting to senior managers', ans: 'C' },
    29: { kind: 'match', label: 'organising a launch event', ans: 'A' },
    30: { kind: 'match', label: 'training a new colleague', ans: 'E' },
    31: { kind: 'gap', ans: ['half'], limit: 'w' },
    32: { kind: 'gap', ans: ['learning'], limit: 'w' },
    33: { kind: 'gap', ans: ['school', 'education'], limit: 'w' },
    34: { kind: 'gap', ans: ['plants'], limit: 'w' },
    35: { kind: 'gap', ans: ['nests'], limit: 'w' },
    36: { kind: 'gap', ans: ['television', 'tv'], limit: 'w' },
    37: { kind: 'gap', ans: ['apps', 'phones'], limit: 'w' },
    38: { kind: 'gap', ans: ['dictionaries'], limit: 'w' },
    39: { kind: 'gap', ans: ['pride'], limit: 'w' },
    40: { kind: 'gap', ans: ['eighteenth', '18th'], limit: 'w' },
  };
  const SKILLS = { A: 'teamwork', B: 'time management', C: 'confidence', D: 'attention to detail', E: 'patience', F: 'negotiation', G: 'writing skills' };

  const gap = n => `<span class="gap" data-q="${n}"><span class="n">${n}</span><input type="text" id="q${n}" data-q="${n}" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Question ${n}"></span>`;
  const mcq = n => { const q = Q[n]; return `<div class="mcq" data-q="${n}" role="radiogroup" aria-labelledby="ql${n}"><div class="q"><span class="qn">${n}</span><span id="ql${n}">${q.q}</span></div>${Object.entries(q.opts).map(([k, v]) => `<label data-opt="${k}"><input type="radio" name="q${n}" value="${k}" data-q="${n}"><b>${k}</b><span>${v}</span></label>`).join('')}</div>`; };
  const sel = (n, letters) => `<select id="q${n}" data-q="${n}" aria-label="Question ${n}"><option value="">–</option>${letters.map(l => `<option>${l}</option>`).join('')}</select>`;
  const box = (title, obj) => `<div class="boxlist"><span class="label" style="grid-column:1/-1">${title}</span>${Object.entries(obj).map(([k, v]) => `<b>${k}</b><span>${v}</span>`).join('')}</div>`;
  const matchRows = (nums, opts) => nums.map(n => `<div class="match-row" data-q="${n}"><span class="qn">${n}</span><span class="who">${Q[n].label}</span>${sel(n, Object.keys(opts))}</div>`).join('');
  const twoBlock = (first, question, opts) => `<div class="mcq" data-q="${first}" data-two="1"><div class="q"><span class="qn">${first}–${first + 1}</span><span>${question}</span></div>${Object.entries(opts).map(([k, v]) => `<label data-opt="${k}"><input type="checkbox" value="${k}" data-two="1"><b>${k}</b><span>${v}</span></label>`).join('')}</div>`;
  const two = (first, question, opts) => `<div class="qblock"><h3>Questions ${first} and ${first + 1}</h3><p class="instr">Choose <b>TWO</b> letters, <b>A–E</b>.</p>${twoBlock(first, question, opts)}</div>`;

  const PAPER = `
  <section class="part" id="part-1" data-part="1">
    <div class="part-head"><h2>Part 1</h2><span class="label">Questions 1–10</span></div>
    <div class="qblock">
      <h3>Questions 1–10</h3>
      <p class="instr">Complete the form below. Write <b>${LIMIT_WN}</b> for each answer.</p>
      <div class="form">
        <h4>Bella Vista · Private party booking</h4>
        <div class="line"><span>Occasion:</span><span class="example">Example: <u>retirement</u> party</span></div>
        <div class="line"><span>Name:</span><span>Karen ${gap(1)}</span></div>
        <div class="line"><span>Date:</span><span>Friday ${gap(2)} March</span></div>
        <div class="line"><span>Number of guests:</span><span>${gap(3)}</span></div>
        <div class="line"><span>Room:</span><span>the ${gap(4)} Room</span></div>
        <div class="line"><span>Start time:</span><span>${gap(5)} p.m.</span></div>
        <div class="sub">Arrangements</div>
        <div class="line"><span>Food:</span><span>${gap(6)}</span></div>
        <div class="line"><span>Cake:</span><span>must contain no ${gap(7)}</span></div>
        <div class="line"><span>Entertainment:</span><span>a ${gap(8)}</span></div>
        <div class="line"><span>Deposit:</span><span>£ ${gap(9)}</span></div>
        <div class="line"><span>Final numbers:</span><span>${gap(10)} days before the party</span></div>
      </div>
    </div>
  </section>

  <section class="part" id="part-2" data-part="2" hidden>
    <div class="part-head"><h2>Part 2</h2><span class="label">Questions 11–20</span></div>
    <div class="qblock">
      <h3>Questions 11–16</h3>
      <p class="instr">Complete the notes below. Write <b>${LIMIT_WN}</b> for each answer.</p>
      <div class="notes">
        <h4>Hillside Allotments · Information for new members</h4>
        <ul>
          <li>Rent for a full plot: £ ${gap(11)} a year</li>
          <li>Current waiting time: about ${gap(12)} months</li>
          <li>Water comes from ${gap(13)} that collect rain.</li>
          <li>Tools can be borrowed from the ${gap(14)} by the main gate.</li>
          <li>Green waste: put in the ${gap(15)} bins.</li>
          <li>Members’ meeting: first ${gap(16)} of every month</li>
        </ul>
      </div>
    </div>
    ${two(17, 'Which <b>TWO</b> things must all new members do?', { A: 'grow only vegetables', B: 'attend a welcome session', C: 'keep bees', D: 'start work on their plot within a month', E: 'sell produce at the open day' })}
    ${two(19, 'Which <b>TWO</b> benefits of having an allotment does the coordinator mention?', { A: 'saving a lot of money', B: 'making new friends', C: 'getting exercise outdoors', D: 'earning extra income', E: 'learning about wildlife' })}
  </section>

  <section class="part" id="part-3" data-part="3" hidden>
    <div class="part-head"><h2>Part 3</h2><span class="label">Questions 21–30</span></div>
    <div class="qblock">
      <h3>Questions 21–25</h3>
      <p class="instr">Choose the correct letter, <b>A, B or C</b>.</p>
      ${[21, 22, 23, 24, 25].map(mcq).join('')}
    </div>
    <div class="qblock">
      <h3>Questions 26–30</h3>
      <p class="instr">Which skill did each activity help the students to develop? Choose <b>FIVE</b> answers from the box and write the correct letter, <b>A–G</b>, next to Questions 26–30.</p>
      ${box('Skills', SKILLS)}
      ${matchRows([26, 27, 28, 29, 30], SKILLS)}
    </div>
  </section>

  <section class="part" id="part-4" data-part="4" hidden>
    <div class="part-head"><h2>Part 4</h2><span class="label">Questions 31–40</span></div>
    <div class="qblock">
      <h3>Questions 31–40</h3>
      <p class="instr">Complete the notes below. Write <b>${LIMIT_W}</b> for each answer.</p>
      <div class="notes">
        <h4>Endangered languages</h4>
        <span class="h">The situation</span>
        <ul>
          <li>About ${gap(31)} of the world’s 7,000 languages may disappear this century.</li>
        </ul>
        <span class="h">Why languages die</span>
        <ul>
          <li>Children stop ${gap(32)} the language as their first language.</li>
          <li>Another language is needed for work and ${gap(33)}.</li>
          <li>Loss of knowledge, e.g. about local ${gap(34)}.</li>
        </ul>
        <span class="h">Revival</span>
        <ul>
          <li>Hawaii: language ${gap(35)} for young children.</li>
          <li>Wales: a Welsh-language ${gap(36)} channel.</li>
          <li>Speakers record words using ${gap(37)}.</li>
          <li>Linguists produce ${gap(38)} and teaching materials.</li>
          <li>Most important factor: young people’s ${gap(39)} in the language.</li>
          <li>Cornish was thought to have died out in the ${gap(40)} century.</li>
        </ul>
      </div>
    </div>
  </section>`;

  // Part changes and reading/checking pauses in the recording (seconds) — filled in by tools/make_listening_audio.py
  const TIMELINE = [{"t":1.0,"focus":1},{"t":35.87,"pause":30,"label":"Reading time · Questions 1–5"},{"t":65.87,"speech":1,"part":1},{"t":180.72,"pause":30,"label":"Reading time · Questions 6–10"},{"t":210.72,"speech":1,"part":1},{"t":272.93,"pause":30,"label":"Checking time · Part 1"},{"t":302.93,"focus":2},{"t":302.93,"speech":1,"part":2},{"t":316.62,"pause":30,"label":"Reading time · Questions 11–16"},{"t":346.62,"speech":1,"part":2},{"t":418.98,"pause":30,"label":"Reading time · Questions 17–20"},{"t":448.98,"speech":1,"part":2},{"t":502.1,"pause":30,"label":"Checking time · Part 2"},{"t":532.1,"focus":3},{"t":532.1,"speech":1,"part":3},{"t":549.78,"pause":30,"label":"Reading time · Questions 21–25"},{"t":579.78,"speech":1,"part":3},{"t":659.48,"pause":30,"label":"Reading time · Questions 26–30"},{"t":689.48,"speech":1,"part":3},{"t":761.04,"pause":30,"label":"Checking time · Part 3"},{"t":791.04,"focus":4},{"t":791.04,"speech":1,"part":4},{"t":802.65,"pause":45,"label":"Reading time · Questions 31–40"},{"t":847.65,"speech":1,"part":4}];
  const partNames = { 1: 'Part 1 · Booking a party room', 2: 'Part 2 · A community allotment scheme', 3: 'Part 3 · Reviewing work placements', 4: 'Part 4 · Endangered languages' };
  window.LISTENING_TEST = { num: 15, name: 'Full Mock Test 5', audio: 'audio/listening-test15.mp3', minutes: 17, mb: 8, roles: ROLES, script: SCRIPT, Q, paper: PAPER, timeline: TIMELINE, partNames };
})();
