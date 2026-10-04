// IELTS Listening · Full Mock Test 2 — content only. The exam engine is assets/listening-exam.js.
// Kept for the mock test: this test is not listed with the practice tests.
(() => {
  'use strict';
  // Speakers: label for the transcript, voice for tools/make_listening_audio.py
  const ROLES = {
    narrator: { label: 'Narrator', voice: 'bm_george', speed: 0.92, lang: 'en-gb' },
    agent:    { label: 'Agent', voice: 'bf_lily', speed: 0.98, lang: 'en-gb' },
    daniel:   { label: 'Daniel', voice: 'am_michael', speed: 0.98, lang: 'en-us' },
    jan:      { label: 'Jan', voice: 'bf_alice', speed: 0.96, lang: 'en-gb' },
    hannah:   { label: 'Hannah', voice: 'af_nicole', speed: 0.98, lang: 'en-us' },
    raj:      { label: 'Raj', voice: 'bm_lewis', speed: 0.98, lang: 'en-gb' },
    webb:     { label: 'Professor Webb', voice: 'bm_daniel', speed: 0.96, lang: 'en-gb' },
    lecturer: { label: 'Lecturer', voice: 'af_sky', speed: 0.95, lang: 'en-us' },
  };

  // Script: [role, text] lines, or ['pause', seconds, label], or ['focus', part]
  // {{text|n}} marks where the answer to question n is heard.
  const SCRIPT = [
    ['focus', 1],
    ['narrator', 'IELTS Listening. Full Mock Test 2.'],
    ['narrator', 'In the test, you will hear a number of different recordings and you will have to answer questions on what you hear. There will be time for you to read the instructions and questions, and you will have a chance to check your work. All the recordings will be played once only. The test is in four parts.'],
    ['narrator', 'Now turn to Part 1.'],
    ['narrator', 'Part 1. You will hear a man phoning a removal company to ask for a quotation. First, you have some time to look at questions 1 to 5.'],
    ['pause', 30, 'Reading time · Questions 1–5'],
    ['narrator', 'You will see that there is an example that has been done for you. On this occasion only, the conversation relating to this will be played first.'],
    ['agent', 'Good afternoon, Swift Removals. How can I help you?'],
    ['daniel', "Hi. I'm moving house soon, and I'd like a quote, please."],
    ['agent', "Certainly. Can I start with your name?"],
    ['daniel', "Yes, it's Daniel Walsh."],
    ['narrator', "The customer's name is Daniel Walsh, so 'Daniel Walsh' has been written in the space. Now we shall begin. You should answer the questions as you listen, because you will not hear the recording a second time. Listen carefully and answer questions 1 to 5."],
    ['agent', 'Good afternoon, Swift Removals. How can I help you?'],
    ['daniel', "Hi. I'm moving house soon, and I'd like a quote, please."],
    ['agent', "Certainly. Can I start with your name?"],
    ['daniel', "Yes, it's Daniel Walsh."],
    ['agent', 'And where are you moving from?'],
    ['daniel', "Twenty-three {{Kenwood|1}} Road. That's K, E, N, W, O, O, D. It's in Leicester."],
    ['agent', 'And where are you moving to?'],
    ['daniel', "To {{Norwich|2}}. I've got a new job there. It's about three hours' drive."],
    ['agent', 'And when would you like to move?'],
    ['daniel', "We were going to move on the seventh of June, but the new flat isn't ready, so it'll be the {{fourteenth|3}} of June now. That's a Saturday."],
    ['agent', "Saturdays are popular, but we still have a van free. How big is your current home?"],
    ['daniel', "It's a house with {{three|4}} bedrooms, although one of them is very small. We use it as an office."],
    ['agent', 'Are there any very large or heavy items?'],
    ['daniel', "Well, there's a sofa, but we're selling that before we go. The main thing is a {{piano|5}}. It belonged to my grandmother, so it's quite old."],
    ['narrator', 'Before you hear the rest of the conversation, you have some time to look at questions 6 to 10.'],
    ['pause', 30, 'Reading time · Questions 6–10'],
    ['narrator', 'Now listen and answer questions 6 to 10.'],
    ['agent', "We'll need special equipment for that, but it's no problem. Would you like any extra services? We can take furniture apart, or store things for you."],
    ['daniel', "We'll manage the furniture ourselves, and we don't need storage. But we'd like you to do the {{packing|6}}, please. We're both working full time, so we just won't have time to do it."],
    ['agent', "That's fine. Now, is there anything about the new flat that might cause problems?"],
    ['daniel', "Yes. It's on the third floor, and there's no {{lift|7}}, so everything will have to be carried up the stairs."],
    ['agent', "I'll make a note, because we'll need an extra member of staff. What about parking? Our vans are quite large."],
    ['daniel', "There's a car park behind the building, but the van won't fit under the barrier. So you'll have to park on the street, and I've been told we need a permit from the {{council|8}} for that."],
    ['agent', "Yes, you'll need to apply for that yourself. Now, to book the date, we ask for a deposit of {{one hundred|9}} pounds. That's taken off the final price."],
    ['daniel', 'Fine. And how will I get the quote?'],
    ['agent', "We usually send it by post, but it's quicker by {{email|10}}, if you prefer."],
    ['daniel', "Email would be great. Thanks."],
    ['narrator', 'That is the end of Part 1. You now have half a minute to check your answers to Part 1.'],
    ['pause', 30, 'Checking time · Part 1'],

    ['focus', 2],
    ['narrator', 'Now turn to Part 2.'],
    ['narrator', 'Part 2. You will hear the manager of a boatyard giving a briefing to people who are about to start a canal boat holiday. First, you have some time to look at questions 11 to 16.'],
    ['pause', 30, 'Reading time · Questions 11–16'],
    ['narrator', 'Now listen carefully and answer questions 11 to 16.'],
    ['jan', "Good morning, everyone, and welcome to Ashby Wharf. My name's Jan, and before you set off, I'd like to go through a few important points."],
    ['jan', "First, speed. These boats are not built to go fast, and the wash from a fast boat damages the canal banks. The speed limit on the canal is {{four|11}} miles an hour, which is about walking pace. If you can walk along the towpath faster than your boat, you're going at the right speed."],
    ['jan', "Your boat has a large water tank, but you'll be surprised how quickly you use it, with showers and washing up. So please fill it up every {{two|12}} days. There are taps at most of the marinas, and they're marked on your map."],
    ['jan', "If anything goes wrong, don't worry. We have an emergency number that you can call at any time, day or night. You'll find it on the {{sticker|13}} inside the door of the cabin, and it's also in your handbook."],
    ['jan', "When you stop for the night, you can moor almost anywhere along the towpath. But please don't moor close to {{bridges|14}}, because other boats need to be able to see round them."],
    ['jan', "You'll go through quite a few locks. They're perfectly safe if you follow the rules, and the main rule is that one person must always stay on the {{boat|15}}, while the others work the lock gates."],
    ['jan', "And finally, on your last day, please bring the boat back here by {{nine|16}} o'clock in the morning. We used to say ten, but we need the extra hour to clean the boats for the next customers."],
    ['narrator', 'Before you hear the rest of the briefing, you have some time to look at questions 17 to 20.'],
    ['pause', 30, 'Reading time · Questions 17–20'],
    ['narrator', 'Now listen and answer questions 17 to 20.'],
    ['jan', "Now, a few tips about the route. Your first night will probably be near the village of Little Haddon. The pub there is very popular, so you'll need to book a table. The market only takes place on Thursdays, so you'll miss it. But {{do go and see the church|17}}, which has some wonderful medieval paintings on the walls."],
    ['jan', "On the second day, you'll reach the Fenton tunnel. It's open as usual, and it's quite safe. But on Saturdays {{there's a long queue of boats waiting to go through|18}}, so if you can, try to go through it on another day."],
    ['jan', "You'll be using diesel for the engine. Your tank is full now, and it should last the whole week. But if you need more, {{you can only buy it at Fenton Marina|19}}. The shops in the villages don't sell it, and nor do the pubs."],
    ['jan', "And just to remind you what's included in the price. Bicycles can be hired from us, but there's an extra charge. Fishing permits are also extra. But {{we do the cleaning at the end|20}}, so you don't need to worry about that. Right, if there are no questions, let's go and look at your boats."],
    ['narrator', 'That is the end of Part 2. You now have half a minute to check your answers to Part 2.'],
    ['pause', 30, 'Checking time · Part 2'],

    ['focus', 3],
    ['narrator', 'Now turn to Part 3.'],
    ['narrator', 'Part 3. You will hear two education students, Hannah and Raj, talking to their tutor, Professor Webb, about their research into why students drop out of online courses. First, you have some time to look at questions 21 to 25.'],
    ['pause', 30, 'Reading time · Questions 21–25'],
    ['narrator', 'Now listen carefully and answer questions 21 to 25.'],
    ['webb', "So, you've decided to research online courses. What gave you the idea?"],
    ['hannah', "Well, we've both taken online courses, and we didn't finish them either. But what really started it was {{an article we read saying that only about one in ten people who start a free online course complete it|21}}. We couldn't believe the figure was so low."],
    ['webb', "It is striking. Which courses will you look at?"],
    ['raj', "We wanted to compare several universities, but that would take too long. And we'd thought about language courses, but there are too many different types. So {{we're going to focus on the university's own short courses|22}}, the ones it offers to the public."],
    ['webb', "Sensible. And what do you expect to find?"],
    ['hannah', "Most people assume students drop out because the courses are too difficult. But {{we think the main reason is that people simply don't have enough time|23}}, because most of them are working."],
    ['webb', "That's a reasonable hypothesis. I've read your draft plan, by the way. The literature review is fine, and the timetable is realistic. My only concern is {{the ethics section|24}}. You need to explain how you'll protect people's personal information."],
    ['raj', "Okay, we'll work on that. Is there anything else we should read?"],
    ['webb', "Yes. There's a recent study from Canada that I'd recommend. Its sample was small, and it's a little old-fashioned in its methods, but {{its questionnaire is very well designed|25}}, so you could adapt it for your own research."],
    ['narrator', 'Before you hear the rest of the discussion, you have some time to look at questions 26 to 30.'],
    ['pause', 30, 'Reading time · Questions 26–30'],
    ['narrator', 'Now listen and answer questions 26 to 30.'],
    ['webb', "Let's talk about your methods. How will you collect your data?"],
    ['hannah', "We'll start with an online questionnaire. The problem is that {{people who've dropped out might not tell the truth|26}}. They might say the course was badly designed, rather than admit they gave up."],
    ['raj', "We'd also like to do some interviews. They'd give us much more detail, but they'll {{take a long time|27}}, so we can probably only do five or six."],
    ['webb', "What about a focus group?"],
    ['hannah', "We thought about that, but someone in the department {{did a focus group on exactly this topic|28}} last year, so we don't want to repeat it."],
    ['raj', "Then there are the course statistics, which show when each student stopped logging in. We think {{those will give us the most reliable information|29}}, because they show what people actually did."],
    ['webb', "And you mentioned asking some students to keep a diary?"],
    ['hannah', "Yes, but we'd have to pay people to do it for several weeks, and {{we just can't afford it|30}}. So we've decided not to."],
    ['webb', "That all sounds sensible. Send me the revised plan by Friday."],
    ['narrator', 'That is the end of Part 3. You now have half a minute to check your answers to Part 3.'],
    ['pause', 30, 'Checking time · Part 3'],

    ['focus', 4],
    ['narrator', 'Now turn to Part 4.'],
    ['narrator', 'Part 4. You will hear a lecture about the history of salt. First, you have some time to look at questions 31 to 40.'],
    ['pause', 45, 'Reading time · Questions 31–40'],
    ['narrator', 'Now listen carefully and answer questions 31 to 40.'],
    ['lecturer', "Good morning. Today we're going to look at a substance that most of us take completely for granted: salt. For most of human history, it was one of the most valuable things a person could own."],
    ['lecturer', "The main reason was food. Before refrigeration, salt was the most important way of preserving food. It was used for meat, but above all for {{fish|31}}, which could be salted and dried and then transported long distances. Whole economies were built on salted fish."],
    ['lecturer', "Salt was so valuable that it's often said that Roman soldiers were sometimes paid in it, and that the English word {{salary|32}} comes from the Latin word for salt. Historians aren't sure that the story is true, but the connection between the words certainly is."],
    ['lecturer', "How was salt produced? Near the coast, the simplest method was to let seawater flow into shallow {{pans|33}}, and allow the sun and wind to evaporate the water, leaving the salt behind. In China, people went much further. Around two thousand years ago, they were drilling wells hundreds of metres deep to reach underground salt water, using pipes made of {{bamboo|34}}."],
    ['lecturer', "Because everyone needed salt, governments found it very easy to tax. In France, the salt tax, known as the gabelle, was one of the most hated taxes in the country, and it's seen as one of the causes of the French {{Revolution|35}}. Much later, in nineteen thirty, Gandhi led thousands of people on a march of nearly four hundred kilometres to the {{sea|36}}, where they made their own salt, in protest against the British tax on salt in India."],
    ['lecturer', "Today, salt is cheap, and only a small part of it is used in food. Most of the salt produced in the world goes to industry, where it's used to make {{chemicals|37}}, such as chlorine. And in cold countries, huge amounts are spread on {{roads|38}} in winter to stop ice from forming."],
    ['lecturer', "Of course, the salt we do eat can be a problem. Most people eat far more than they need, and too much salt raises blood {{pressure|39}}, which increases the risk of heart disease and stroke."],
    ['lecturer', "Finally, an example of how important salt mining once was. The Wieliczka mine in Poland was worked for over seven hundred years. Its miners carved statues out of the salt, and even an entire {{chapel|40}}, where people still hold weddings today."],
    ['lecturer', "Next week, we'll look at the history of sugar."],
    ['narrator', 'That is the end of Part 4. That is the end of the listening test.'],
  ];

  // Questions. kind: gap | mcq | two | match
  const LIMIT_WN = 'ONE WORD AND/OR A NUMBER';
  const LIMIT_W = 'ONE WORD ONLY';
  const Q = {
    1:  { kind: 'gap', ans: ['kenwood'], limit: 'wn', key: 'Kenwood' },
    2:  { kind: 'gap', ans: ['norwich'], limit: 'wn', key: 'Norwich' },
    3:  { kind: 'gap', ans: ['14', '14th', 'fourteenth'], limit: 'wn' },
    4:  { kind: 'gap', ans: ['3', 'three'], limit: 'wn' },
    5:  { kind: 'gap', ans: ['piano'], limit: 'wn' },
    6:  { kind: 'gap', ans: ['packing'], limit: 'wn' },
    7:  { kind: 'gap', ans: ['lift', 'elevator'], limit: 'wn' },
    8:  { kind: 'gap', ans: ['council'], limit: 'wn' },
    9:  { kind: 'gap', ans: ['100', 'one hundred'], limit: 'wn' },
    10: { kind: 'gap', ans: ['email', 'e-mail'], limit: 'wn' },
    11: { kind: 'gap', ans: ['4', 'four'], limit: 'wn' },
    12: { kind: 'gap', ans: ['2', 'two'], limit: 'wn' },
    13: { kind: 'gap', ans: ['sticker'], limit: 'wn' },
    14: { kind: 'gap', ans: ['bridges'], limit: 'wn' },
    15: { kind: 'gap', ans: ['boat'], limit: 'wn' },
    16: { kind: 'gap', ans: ['9', 'nine', '9am', '9.00'], limit: 'wn' },
    17: { kind: 'mcq', q: 'What does Jan recommend doing in Little Haddon?', opts: { A: 'eating at the pub', B: 'visiting the church', C: 'going to the market' }, ans: 'B' },
    18: { kind: 'mcq', q: 'Why should people avoid the Fenton tunnel on Saturdays?', opts: { A: 'It is closed for repairs.', B: 'It can be dangerous.', C: 'There is a lot of waiting.' }, ans: 'C' },
    19: { kind: 'mcq', q: 'Where can people buy diesel?', opts: { A: 'at village shops', B: 'at Fenton Marina', C: 'at some pubs' }, ans: 'B' },
    20: { kind: 'mcq', q: 'What is included in the price of the holiday?', opts: { A: 'cleaning the boat', B: 'bicycle hire', C: 'a fishing permit' }, ans: 'A' },
    21: { kind: 'mcq', q: 'What first gave the students the idea for their research?', opts: { A: 'their own experience of online courses', B: 'a figure they read in an article', C: 'a suggestion from their tutor' }, ans: 'B' },
    22: { kind: 'mcq', q: 'Which courses will the students study?', opts: { A: 'courses at several universities', B: 'online language courses', C: 'short courses run by their own university' }, ans: 'C' },
    23: { kind: 'mcq', q: 'What do the students think is the main reason why people drop out?', opts: { A: 'The courses are too difficult.', B: 'People have too little time.', C: 'People lose interest in the subject.' }, ans: 'B' },
    24: { kind: 'mcq', q: 'Which part of the draft plan does Professor Webb think needs more work?', opts: { A: 'the literature review', B: 'the timetable', C: 'the section on ethics' }, ans: 'C' },
    25: { kind: 'mcq', q: 'Why does Professor Webb recommend the Canadian study?', opts: { A: 'It has a useful questionnaire.', B: 'It used a large sample.', C: 'It uses modern methods.' }, ans: 'A' },
    26: { kind: 'match', label: 'online questionnaire', ans: 'D' },
    27: { kind: 'match', label: 'interviews', ans: 'B' },
    28: { kind: 'match', label: 'focus group', ans: 'E' },
    29: { kind: 'match', label: 'course statistics', ans: 'C' },
    30: { kind: 'match', label: 'student diaries', ans: 'A' },
    31: { kind: 'gap', ans: ['fish'], limit: 'w' },
    32: { kind: 'gap', ans: ['salary'], limit: 'w' },
    33: { kind: 'gap', ans: ['pans', 'ponds'], limit: 'w' },
    34: { kind: 'gap', ans: ['bamboo'], limit: 'w' },
    35: { kind: 'gap', ans: ['revolution'], limit: 'w', key: 'Revolution' },
    36: { kind: 'gap', ans: ['sea', 'coast'], limit: 'w' },
    37: { kind: 'gap', ans: ['chemicals'], limit: 'w' },
    38: { kind: 'gap', ans: ['roads'], limit: 'w' },
    39: { kind: 'gap', ans: ['pressure'], limit: 'w' },
    40: { kind: 'gap', ans: ['chapel'], limit: 'w' },
  };
  const METHODS = { A: 'It would cost too much.', B: 'It will take a lot of time.', C: 'It will give the most reliable data.', D: 'Students may not answer honestly.', E: 'It has already been done.', F: 'Few students would take part.', G: 'It needs special software.' };

  const gap = n => `<span class="gap" data-q="${n}"><span class="n">${n}</span><input type="text" id="q${n}" data-q="${n}" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Question ${n}"></span>`;
  const mcq = n => { const q = Q[n]; return `<div class="mcq" data-q="${n}" role="radiogroup" aria-labelledby="ql${n}"><div class="q"><span class="qn">${n}</span><span id="ql${n}">${q.q}</span></div>${Object.entries(q.opts).map(([k, v]) => `<label data-opt="${k}"><input type="radio" name="q${n}" value="${k}" data-q="${n}"><b>${k}</b><span>${v}</span></label>`).join('')}</div>`; };
  const sel = (n, letters) => `<select id="q${n}" data-q="${n}" aria-label="Question ${n}"><option value="">–</option>${letters.map(l => `<option>${l}</option>`).join('')}</select>`;
  const box = (title, obj) => `<div class="boxlist"><span class="label" style="grid-column:1/-1">${title}</span>${Object.entries(obj).map(([k, v]) => `<b>${k}</b><span>${v}</span>`).join('')}</div>`;
  const matchRows = (nums, opts) => nums.map(n => `<div class="match-row" data-q="${n}"><span class="qn">${n}</span><span class="who">${Q[n].label}</span>${sel(n, Object.keys(opts))}</div>`).join('');

  const PAPER = `
  <section class="part" id="part-1" data-part="1">
    <div class="part-head"><h2>Part 1</h2><span class="label">Questions 1–10</span></div>
    <div class="qblock">
      <h3>Questions 1–10</h3>
      <p class="instr">Complete the form below. Write <b>${LIMIT_WN}</b> for each answer.</p>
      <div class="form">
        <h4>Swift Removals · Quotation request</h4>
        <div class="line"><span>Name:</span><span class="example">Example: <u>Daniel Walsh</u></span></div>
        <div class="line"><span>Current address:</span><span>23 ${gap(1)} Road, Leicester</span></div>
        <div class="line"><span>Moving to:</span><span>${gap(2)}</span></div>
        <div class="line"><span>Date of move:</span><span>${gap(3)} June</span></div>
        <div class="line"><span>Size of house:</span><span>${gap(4)} bedrooms</span></div>
        <div class="line"><span>Large item:</span><span>an old ${gap(5)}</span></div>
        <div class="sub">Other details</div>
        <div class="line"><span>Extra service:</span><span>${gap(6)}</span></div>
        <div class="line"><span>New flat:</span><span>third floor, no ${gap(7)}</span></div>
        <div class="line"><span>Parking:</span><span>street permit needed from the ${gap(8)}</span></div>
        <div class="line"><span>Deposit:</span><span>£ ${gap(9)}</span></div>
        <div class="line"><span>Send quote by:</span><span>${gap(10)}</span></div>
      </div>
    </div>
  </section>

  <section class="part" id="part-2" data-part="2" hidden>
    <div class="part-head"><h2>Part 2</h2><span class="label">Questions 11–20</span></div>
    <div class="qblock">
      <h3>Questions 11–16</h3>
      <p class="instr">Complete the notes below. Write <b>${LIMIT_WN}</b> for each answer.</p>
      <div class="notes">
        <h4>Ashby Wharf · Before you set off</h4>
        <ul>
          <li>Speed limit: ${gap(11)} miles per hour</li>
          <li>Fill the water tank every ${gap(12)} days.</li>
          <li>Emergency number: on the ${gap(13)} inside the cabin door</li>
          <li>Do not moor near ${gap(14)}.</li>
          <li>Locks: one person must stay on the ${gap(15)}.</li>
          <li>Return the boat by ${gap(16)} a.m. on the last day.</li>
        </ul>
      </div>
    </div>
    <div class="qblock">
      <h3>Questions 17–20</h3>
      <p class="instr">Choose the correct letter, <b>A, B or C</b>.</p>
      ${[17, 18, 19, 20].map(mcq).join('')}
    </div>
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
      <p class="instr">What do the students say about each research method? Choose <b>FIVE</b> answers from the box and write the correct letter, <b>A–G</b>, next to Questions 26–30.</p>
      ${box('Comments', METHODS)}
      ${matchRows([26, 27, 28, 29, 30], METHODS)}
    </div>
  </section>

  <section class="part" id="part-4" data-part="4" hidden>
    <div class="part-head"><h2>Part 4</h2><span class="label">Questions 31–40</span></div>
    <div class="qblock">
      <h3>Questions 31–40</h3>
      <p class="instr">Complete the notes below. Write <b>${LIMIT_W}</b> for each answer.</p>
      <div class="notes">
        <h4>The history of salt</h4>
        <span class="h">Why salt was valuable</span>
        <ul>
          <li>Used to preserve meat and especially ${gap(31)}.</li>
          <li>The English word ${gap(32)} may come from the Latin for salt.</li>
        </ul>
        <span class="h">Production</span>
        <ul>
          <li>Seawater evaporated in shallow ${gap(33)} near the coast.</li>
          <li>China: deep wells drilled using ${gap(34)} pipes.</li>
        </ul>
        <span class="h">Salt and taxes</span>
        <ul>
          <li>France: the salt tax was a cause of the ${gap(35)}.</li>
          <li>India, 1930: Gandhi marched to the ${gap(36)} to make salt.</li>
        </ul>
        <span class="h">Salt today</span>
        <ul>
          <li>Mostly used by industry to make ${gap(37)}.</li>
          <li>Spread on ${gap(38)} in winter.</li>
          <li>Too much in food raises blood ${gap(39)}.</li>
          <li>Wieliczka mine, Poland: contains a ${gap(40)} carved from salt.</li>
        </ul>
      </div>
    </div>
  </section>`;

  // Part changes and reading/checking pauses in the recording (seconds) — filled in by tools/make_listening_audio.py
  const TIMELINE = [{"t":1.0,"focus":1},{"t":36.17,"pause":30,"label":"Reading time · Questions 1–5"},{"t":66.17,"speech":1,"part":1},{"t":177.51,"pause":30,"label":"Reading time · Questions 6–10"},{"t":207.51,"speech":1,"part":1},{"t":286.14,"pause":30,"label":"Checking time · Part 1"},{"t":316.14,"focus":2},{"t":316.14,"speech":1,"part":2},{"t":331.15,"pause":30,"label":"Reading time · Questions 11–16"},{"t":361.15,"speech":1,"part":2},{"t":453.75,"pause":30,"label":"Reading time · Questions 17–20"},{"t":483.75,"speech":1,"part":2},{"t":553.31,"pause":30,"label":"Checking time · Part 2"},{"t":583.31,"focus":3},{"t":583.31,"speech":1,"part":3},{"t":602.84,"pause":30,"label":"Reading time · Questions 21–25"},{"t":632.84,"speech":1,"part":3},{"t":743.5,"pause":30,"label":"Reading time · Questions 26–30"},{"t":773.5,"speech":1,"part":3},{"t":860.3,"pause":30,"label":"Checking time · Part 3"},{"t":890.3,"focus":4},{"t":890.3,"speech":1,"part":4},{"t":901.66,"pause":45,"label":"Reading time · Questions 31–40"},{"t":946.66,"speech":1,"part":4}];
  const partNames = { 1: 'Part 1 · A quote for moving house', 2: 'Part 2 · A canal boat holiday', 3: 'Part 3 · Why students drop out of online courses', 4: 'Part 4 · The history of salt' };
  window.LISTENING_TEST = { num: 12, name: 'Full Mock Test 2', audio: 'audio/listening-test12.mp3', minutes: 18, mb: 9, roles: ROLES, script: SCRIPT, Q, paper: PAPER, timeline: TIMELINE, partNames };
})();
