// IELTS Listening · Full Mock Test 10 — content only. The exam engine is assets/listening-exam.js.
// Kept for the mock test: this test is not listed with the practice tests.
(() => {
  'use strict';
  // Speakers: label for the transcript, voice for tools/make_listening_audio.py
  const ROLES = {
    narrator: { label: 'Narrator', voice: 'bm_george', speed: 0.92, lang: 'en-gb' },
    agent:    { label: 'Agent', voice: 'bm_fable', speed: 0.98, lang: 'en-gb' },
    yuki:     { label: 'Yuki', voice: 'af_kore', speed: 0.98, lang: 'en-us' },
    guide:    { label: 'Guide', voice: 'bm_daniel', speed: 0.97, lang: 'en-gb' },
    priya:    { label: 'Priya', voice: 'bf_lily', speed: 0.98, lang: 'en-gb' },
    sam:      { label: 'Sam', voice: 'am_adam', speed: 0.98, lang: 'en-us' },
    evans:    { label: 'Dr Evans', voice: 'af_river', speed: 0.96, lang: 'en-us' },
    lecturer: { label: 'Lecturer', voice: 'bf_emma', speed: 0.95, lang: 'en-gb' },
  };

  // Script: [role, text] lines, or ['pause', seconds, label], or ['focus', part]
  // {{text|n}} marks where the answer to question n is heard.
  const SCRIPT = [
    ['focus', 1],
    ['narrator', 'IELTS Listening. Full Mock Test 10.'],
    ['narrator', 'In the test, you will hear a number of different recordings and you will have to answer questions on what you hear. There will be time for you to read the instructions and questions, and you will have a chance to check your work. All the recordings will be played once only. The test is in four parts.'],
    ['narrator', 'Now turn to Part 1.'],
    ['narrator', 'Part 1. You will hear a student phoning an agency to arrange a homestay with a local family. First, you have some time to look at questions 1 to 5.'],
    ['pause', 30, 'Reading time · Questions 1–5'],
    ['narrator', 'You will see that there is an example that has been done for you. On this occasion only, the conversation relating to this will be played first.'],
    ['agent', 'Good afternoon, Brightwater Homestay Agency.'],
    ['yuki', "Hello. I'm coming to study here next year, and I'd like to stay with a family. Is that something you can arrange?"],
    ['agent', "Certainly. How long would you like to stay?"],
    ['yuki', "My course is three months long, so for three months, please."],
    ['narrator', "The student wants to stay for three months, so '3 months' has been written in the space. Now we shall begin. You should answer the questions as you listen, because you will not hear the recording a second time. Listen carefully and answer questions 1 to 5."],
    ['agent', 'Good afternoon, Brightwater Homestay Agency.'],
    ['yuki', "Hello. I'm coming to study here next year, and I'd like to stay with a family. Is that something you can arrange?"],
    ['agent', "Certainly. How long would you like to stay?"],
    ['yuki', "My course is three months long, so for three months, please."],
    ['agent', "Fine. Can I have your name?"],
    ['yuki', "Yes, it's Yuki {{Tanabe|1}}. That's T, A, N, A, B, E."],
    ['agent', 'And how old are you, Yuki?'],
    ['yuki', "I'm {{nineteen|2}}. I'll be twenty in March, while I'm there."],
    ['agent', "And what will you be studying?"],
    ['yuki', "At home I study business, but here I'm doing a short course in {{design|3}} at Kingsley College."],
    ['agent', 'And when do you arrive?'],
    ['yuki', "I was going to arrive on the eighth of January, but the flights were cheaper earlier, so I'll arrive on the {{sixth|4}}."],
    ['agent', "Okay. Do you have any special requirements for food?"],
    ['yuki', "I'm vegetarian, so I don't eat meat. But I do eat {{fish|5}}, so that makes it a bit easier."],
    ['narrator', 'Before you hear the rest of the conversation, you have some time to look at questions 6 to 10.'],
    ['pause', 30, 'Reading time · Questions 6–10'],
    ['narrator', 'Now listen and answer questions 6 to 10.'],
    ['agent', "Is there anything else we should know when we choose a family for you?"],
    ['yuki', "Yes. I don't mind dogs at all, but I'm allergic to {{cats|6}}, so I'd need a family that doesn't have one."],
    ['agent', "That's important, thank you. And how far would you be happy to travel to the college?"],
    ['yuki', "I'd prefer not to travel for more than twenty minutes, but I suppose up to {{thirty|7}} minutes by bus would be all right."],
    ['agent', "Most of our families are within that distance. Now, the price. It's one hundred and ninety pounds a week if you have all your meals with the family. But students usually eat lunch at college, so with just breakfast and an evening meal, it's {{one hundred and sixty-five|8}} pounds a week."],
    ['yuki', "I'll have breakfast and dinner, then. Can you help me to get from the airport?"],
    ['agent', "Yes, we can arrange a {{transfer|9}} from the airport for forty pounds. A driver will meet you when you arrive."],
    ['yuki', "That would be great. Do you need anything else from me?"],
    ['agent', "Yes. Could you email us a {{photograph|10}} of yourself? We pass it on to the family, so they can recognise you."],
    ['yuki', "Of course. Thank you very much."],
    ['narrator', 'That is the end of Part 1. You now have half a minute to check your answers to Part 1.'],
    ['pause', 30, 'Checking time · Part 1'],

    ['focus', 2],
    ['narrator', 'Now turn to Part 2.'],
    ['narrator', 'Part 2. You will hear a guide talking to visitors on board an old sailing ship that is now a museum. First, you have some time to look at questions 11 to 16.'],
    ['pause', 30, 'Reading time · Questions 11–16'],
    ['narrator', 'Now listen carefully and answer questions 11 to 16.'],
    ['guide', "Welcome aboard the Mary Ellen. Before you explore, let me tell you a little about this remarkable ship."],
    ['guide', "The Mary Ellen was built here in the city in {{eighteen sixty-nine|11}}, the same year that the Suez Canal opened. She was one of the fastest sailing ships of her day."],
    ['guide', "Many ships like her were built to carry tea from China. But the Mary Ellen spent most of her working life sailing to Australia, and on the way back her main cargo was {{wool|12}}."],
    ['guide', "Life on board was hard. There were six officers, and a crew of {{twenty-eight|13}} sailors, who slept in a single cabin at the front of the ship."],
    ['guide', "Her fastest voyage to Australia took just {{seventy-two|14}} days, which was a record at the time. Most ships took well over a hundred."],
    ['guide', "When steam ships took over the trade, she was sold, and from the nineteen twenties she was used as a {{training|15}} ship, where hundreds of boys learned to be sailors."],
    ['guide', "By the nineteen eighties she was in very poor condition. A charity was set up to save her, and the restoration took {{eleven|16}} years. She opened as a museum in two thousand and two."],
    ['narrator', 'Before you hear the rest of the talk, you have some time to look at questions 17 to 20.'],
    ['pause', 30, 'Reading time · Questions 17–20'],
    ['narrator', 'Now listen and answer questions 17 to 20.'],
    ['guide', "Now, some things to look out for. Start with the captain's cabin. Most of the furniture there is a copy, I'm afraid, but {{you can see the captain's original logbook|17}}, in which he recorded every day of the record voyage."],
    ['guide', "You're welcome to go down to the main deck below us. But please don't go any further down, to the lower deck. It's perfectly safe, and it's quite dry. But {{the ceilings there are very low|18}}, and too many visitors have hit their heads."],
    ['guide', "On your way out, have a look at the figurehead, the carved woman at the front of the ship. People often think it's original, but {{it's a copy. The original is in the city museum|19}}, where it's protected from the weather."],
    ['guide', "Finally, before you leave, {{I'd really recommend the short film in the visitor centre|20}}, which uses the crew's letters to tell the story of a voyage to Australia. The gift shop is there too, of course. Enjoy your visit."],
    ['narrator', 'That is the end of Part 2. You now have half a minute to check your answers to Part 2.'],
    ['pause', 30, 'Checking time · Part 2'],

    ['focus', 3],
    ['narrator', 'Now turn to Part 3.'],
    ['narrator', 'Part 3. You will hear two psychology students, Priya and Sam, talking to their tutor, Dr Evans, about an experiment on left-handedness. First, you have some time to look at questions 21 to 25.'],
    ['pause', 30, 'Reading time · Questions 21–25'],
    ['narrator', 'Now listen carefully and answer questions 21 to 25.'],
    ['evans', "So, tell me about your experiment. What made you choose left-handedness?"],
    ['priya', "People assume it's because Sam is left-handed, but he isn't! It was actually {{an article we read about left-handed tennis players, and why they seem to have an advantage|21}}."],
    ['evans', "And how many of your participants were left-handed?"],
    ['sam', "We tested a hundred people, and fourteen of them were left-handed. That's {{more than we'd expected|22}}, because the usual figure is about ten per cent."],
    ['evans', "Did everything go to plan?"],
    ['priya', "Mostly. Nobody dropped out, and the tests didn't take long. The main problem was that {{some people didn't understand our instructions|23}}, so they used the wrong hand for some of the tasks, and we had to test them again."],
    ['evans', "I've looked at your results. One thing: you've included people who use both hands in the left-handed group. {{You should really analyse them as a separate group|24}}, because they may behave quite differently."],
    ['sam', "Okay, we'll do that."],
    ['evans', "And what are you planning next?"],
    ['priya', "We'd like to present it at the student conference eventually. But first, {{we're going to compare our results with data from a similar study at another university|25}}."],
    ['narrator', 'Before you hear the rest of the discussion, you have some time to look at questions 26 to 30.'],
    ['pause', 30, 'Reading time · Questions 26–30'],
    ['narrator', 'Now listen and answer questions 26 to 30.'],
    ['evans', "Let's go through your tasks. What happened in the writing test?"],
    ['sam', "It certainly wasn't too easy, because nobody finished all the sentences. But {{the right-handed people wrote faster|26}}, probably because left-handers have to avoid smudging the ink."],
    ['evans', 'And the throwing task?'],
    ['priya', "We thought left-handers might be more accurate, because of the tennis article. But in fact {{there was no clear difference between the two groups|27}}."],
    ['evans', 'What about reaction times?'],
    ['sam', "That was interesting. {{The left-handed people reacted faster|28}}, on average. We'd expected older people to be slower too, but age didn't seem to matter."],
    ['evans', 'And drawing circles?'],
    ['priya', "Left-handers mostly drew their circles clockwise, and right-handers anticlockwise. {{That's exactly what an earlier study found|29}}, so it was good to confirm it."],
    ['evans', 'And finally, cutting with scissors?'],
    ['sam', "The left-handers did badly with ordinary scissors, but when we gave them left-handed scissors, they were just as good. So {{it really depended on the scissors we gave them|30}}."],
    ['evans', "Very good. Some useful findings there."],
    ['narrator', 'That is the end of Part 3. You now have half a minute to check your answers to Part 3.'],
    ['pause', 30, 'Checking time · Part 3'],

    ['focus', 4],
    ['narrator', 'Now turn to Part 4.'],
    ['narrator', 'Part 4. You will hear a lecture about bamboo as a building material. First, you have some time to look at questions 31 to 40.'],
    ['pause', 45, 'Reading time · Questions 31–40'],
    ['narrator', 'Now listen carefully and answer questions 31 to 40.'],
    ['lecturer', "Good morning. Today we're looking at a material that has been used for building for thousands of years, and which many architects believe has a great future: bamboo."],
    ['lecturer', "Although it looks like a tree, bamboo is actually a type of {{grass|31}}, and it's one of the fastest-growing plants on Earth. Some species can grow by almost a metre in a single {{day|32}}, and stems can be harvested after only three to five years, compared with several decades for most trees."],
    ['lecturer', "Bamboo is also remarkably strong. Its strength when it is pulled, which engineers call tensile strength, has been compared to that of {{steel|33}}, although it weighs far less. And because it grows so quickly, it absorbs large amounts of {{carbon|34}} from the atmosphere, which makes it attractive at a time when the construction industry is a major source of emissions."],
    ['lecturer', "In Asia, bamboo has been used for centuries. In Hong Kong, for example, it's still used for {{scaffolding|35}}, even on the tallest skyscrapers, because it's light, flexible and cheap."],
    ['lecturer', "So why isn't it used more widely? There are several problems. Untreated bamboo is easily attacked by {{insects|36}}, especially beetles and termites, so it must be treated with chemicals. It also rots if it stays {{wet|37}} for long periods, so buildings need wide roofs and must be raised above the ground. And because every stem is different, varying in {{diameter|38}} and strength, engineers find it hard to calculate how much weight a structure can carry, and building regulations in many countries don't allow it."],
    ['lecturer', "One solution is engineered bamboo. The stems are cut into thin strips, which are then pressed and glued together to make {{panels|39}} and beams of a standard size and strength, which can be used much like timber."],
    ['lecturer', "Some architects have also shown what natural bamboo can do. One famous example is the Green School in {{Bali|40}}, where almost every building, including a three-storey central hall, is made of bamboo."],
    ['lecturer', "Next week, we'll look at another traditional material that is coming back into use: earth."],
    ['narrator', 'That is the end of Part 4. That is the end of the listening test.'],
  ];

  // Questions. kind: gap | mcq | two | match
  const LIMIT_WN = 'ONE WORD AND/OR A NUMBER';
  const LIMIT_W = 'ONE WORD ONLY';
  const Q = {
    1:  { kind: 'gap', ans: ['tanabe'], limit: 'wn', key: 'Tanabe' },
    2:  { kind: 'gap', ans: ['19', 'nineteen'], limit: 'wn' },
    3:  { kind: 'gap', ans: ['design'], limit: 'wn' },
    4:  { kind: 'gap', ans: ['6', '6th', 'sixth'], limit: 'wn' },
    5:  { kind: 'gap', ans: ['fish'], limit: 'wn' },
    6:  { kind: 'gap', ans: ['cats', 'cat'], limit: 'wn' },
    7:  { kind: 'gap', ans: ['30', 'thirty'], limit: 'wn' },
    8:  { kind: 'gap', ans: ['165'], limit: 'wn' },
    9:  { kind: 'gap', ans: ['transfer'], limit: 'wn' },
    10: { kind: 'gap', ans: ['photograph', 'photo'], limit: 'wn' },
    11: { kind: 'gap', ans: ['1869'], limit: 'wn' },
    12: { kind: 'gap', ans: ['wool'], limit: 'wn' },
    13: { kind: 'gap', ans: ['28', 'twenty-eight'], limit: 'wn' },
    14: { kind: 'gap', ans: ['72', 'seventy-two'], limit: 'wn' },
    15: { kind: 'gap', ans: ['training'], limit: 'wn' },
    16: { kind: 'gap', ans: ['11', 'eleven'], limit: 'wn' },
    17: { kind: 'mcq', q: 'What can visitors see in the captain’s cabin?', opts: { A: 'the original furniture', B: 'the captain’s logbook', C: 'a model of the ship' }, ans: 'B' },
    18: { kind: 'mcq', q: 'Why should visitors not go down to the lower deck?', opts: { A: 'It is unsafe.', B: 'It is often flooded.', C: 'The ceilings are low.' }, ans: 'C' },
    19: { kind: 'mcq', q: 'What does the guide say about the figurehead?', opts: { A: 'It was carved by a famous artist.', B: 'It is not the original one.', C: 'It was found in the sea.' }, ans: 'B' },
    20: { kind: 'mcq', q: 'What does the guide recommend at the end of the visit?', opts: { A: 'climbing one of the masts', B: 'visiting the gift shop', C: 'watching a film' }, ans: 'C' },
    21: { kind: 'mcq', q: 'Why did the students choose left-handedness as their topic?', opts: { A: 'Sam is left-handed.', B: 'Their tutor suggested it.', C: 'They had read an article about it.' }, ans: 'C' },
    22: { kind: 'mcq', q: 'What did the students find about the number of left-handed participants?', opts: { A: 'It was higher than expected.', B: 'It matched the national average.', C: 'It was lower than expected.' }, ans: 'A' },
    23: { kind: 'mcq', q: 'What was the main problem with the experiment?', opts: { A: 'Some participants dropped out.', B: 'The tests took too long.', C: 'Some instructions were misunderstood.' }, ans: 'C' },
    24: { kind: 'mcq', q: 'What does Dr Evans advise the students to do?', opts: { A: 'test more people', B: 'treat people who use both hands as a separate group', C: 'repeat all the tests' }, ans: 'B' },
    25: { kind: 'mcq', q: 'What will the students do next?', opts: { A: 'present their results at a conference', B: 'compare their results with another study', C: 'write a report for the department' }, ans: 'B' },
    26: { kind: 'match', label: 'writing', ans: 'C' },
    27: { kind: 'match', label: 'throwing', ans: 'B' },
    28: { kind: 'match', label: 'reaction time', ans: 'A' },
    29: { kind: 'match', label: 'drawing circles', ans: 'G' },
    30: { kind: 'match', label: 'using scissors', ans: 'F' },
    31: { kind: 'gap', ans: ['grass'], limit: 'w' },
    32: { kind: 'gap', ans: ['day'], limit: 'w' },
    33: { kind: 'gap', ans: ['steel'], limit: 'w' },
    34: { kind: 'gap', ans: ['carbon'], limit: 'w' },
    35: { kind: 'gap', ans: ['scaffolding'], limit: 'w' },
    36: { kind: 'gap', ans: ['insects'], limit: 'w' },
    37: { kind: 'gap', ans: ['wet'], limit: 'w' },
    38: { kind: 'gap', ans: ['diameter'], limit: 'w' },
    39: { kind: 'gap', ans: ['panels'], limit: 'w' },
    40: { kind: 'gap', ans: ['bali'], limit: 'w', key: 'Bali' },
  };
  const RESULTS = { A: 'left-handed people did better', B: 'there was no clear difference', C: 'right-handed people did better', D: 'the results varied with age', E: 'the task was too easy for everyone', F: 'the equipment affected the results', G: 'the results matched a previous study' };

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
        <h4>Brightwater Homestay Agency · Application</h4>
        <div class="line"><span>Length of stay:</span><span class="example">Example: <u>3 months</u></span></div>
        <div class="line"><span>Name:</span><span>Yuki ${gap(1)}</span></div>
        <div class="line"><span>Age:</span><span>${gap(2)}</span></div>
        <div class="line"><span>Course:</span><span>${gap(3)} at Kingsley College</span></div>
        <div class="line"><span>Arrival date:</span><span>${gap(4)} January</span></div>
        <div class="line"><span>Diet:</span><span>vegetarian, but eats ${gap(5)}</span></div>
        <div class="sub">Requirements and costs</div>
        <div class="line"><span>Family:</span><span>must not have ${gap(6)}</span></div>
        <div class="line"><span>Journey to college:</span><span>no more than ${gap(7)} minutes by bus</span></div>
        <div class="line"><span>Price:</span><span>£ ${gap(8)} per week (breakfast and evening meal)</span></div>
        <div class="line"><span>Airport:</span><span>${gap(9)} costs £40</span></div>
        <div class="line"><span>Send by email:</span><span>a ${gap(10)}</span></div>
      </div>
    </div>
  </section>

  <section class="part" id="part-2" data-part="2" hidden>
    <div class="part-head"><h2>Part 2</h2><span class="label">Questions 11–20</span></div>
    <div class="qblock">
      <h3>Questions 11–16</h3>
      <p class="instr">Complete the notes below. Write <b>${LIMIT_WN}</b> for each answer.</p>
      <div class="notes">
        <h4>The Mary Ellen</h4>
        <ul>
          <li>Built in ${gap(11)}</li>
          <li>Main cargo on the way back from Australia: ${gap(12)}</li>
          <li>Crew: six officers and ${gap(13)} sailors</li>
          <li>Fastest voyage to Australia: ${gap(14)} days</li>
          <li>From the 1920s, used as a ${gap(15)} ship</li>
          <li>Restoration took ${gap(16)} years.</li>
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
      <p class="instr">What did the students find in each task? Choose <b>FIVE</b> answers from the box and write the correct letter, <b>A–G</b>, next to Questions 26–30.</p>
      ${box('Results', RESULTS)}
      ${matchRows([26, 27, 28, 29, 30], RESULTS)}
    </div>
  </section>

  <section class="part" id="part-4" data-part="4" hidden>
    <div class="part-head"><h2>Part 4</h2><span class="label">Questions 31–40</span></div>
    <div class="qblock">
      <h3>Questions 31–40</h3>
      <p class="instr">Complete the notes below. Write <b>${LIMIT_W}</b> for each answer.</p>
      <div class="notes">
        <h4>Bamboo as a building material</h4>
        <span class="h">Advantages</span>
        <ul>
          <li>Bamboo is a kind of ${gap(31)}.</li>
          <li>Some species grow almost a metre in a ${gap(32)}.</li>
          <li>Its tensile strength is compared to that of ${gap(33)}.</li>
          <li>It absorbs a lot of ${gap(34)}.</li>
          <li>Used in Hong Kong for ${gap(35)}.</li>
        </ul>
        <span class="h">Problems</span>
        <ul>
          <li>It can be damaged by ${gap(36)}.</li>
          <li>It rots if it is ${gap(37)} for a long time.</li>
          <li>Stems vary in ${gap(38)} and strength.</li>
        </ul>
        <span class="h">Solutions</span>
        <ul>
          <li>Engineered bamboo: strips glued into ${gap(39)} and beams</li>
          <li>The Green School in ${gap(40)}</li>
        </ul>
      </div>
    </div>
  </section>`;

  // Part changes and reading/checking pauses in the recording (seconds) — filled in by tools/make_listening_audio.py
  const TIMELINE = [{"t":1.0,"focus":1},{"t":37.13,"pause":30,"label":"Reading time · Questions 1–5"},{"t":67.13,"speech":1,"part":1},{"t":179.41,"pause":30,"label":"Reading time · Questions 6–10"},{"t":209.41,"speech":1,"part":1},{"t":282.36,"pause":30,"label":"Checking time · Part 1"},{"t":312.36,"focus":2},{"t":312.36,"speech":1,"part":2},{"t":326.67,"pause":30,"label":"Reading time · Questions 11–16"},{"t":356.67,"speech":1,"part":2},{"t":429.22,"pause":30,"label":"Reading time · Questions 17–20"},{"t":459.22,"speech":1,"part":2},{"t":517.96,"pause":30,"label":"Checking time · Part 2"},{"t":547.96,"focus":3},{"t":547.96,"speech":1,"part":3},{"t":565.38,"pause":30,"label":"Reading time · Questions 21–25"},{"t":595.38,"speech":1,"part":3},{"t":674.0,"pause":30,"label":"Reading time · Questions 26–30"},{"t":704.0,"speech":1,"part":3},{"t":778.98,"pause":30,"label":"Checking time · Part 3"},{"t":808.98,"focus":4},{"t":808.98,"speech":1,"part":4},{"t":821.09,"pause":45,"label":"Reading time · Questions 31–40"},{"t":866.09,"speech":1,"part":4}];
  const partNames = { 1: 'Part 1 · Arranging a homestay', 2: 'Part 2 · A historic sailing ship', 3: 'Part 3 · An experiment on left-handedness', 4: 'Part 4 · Building with bamboo' };
  window.LISTENING_TEST = { num: 20, name: 'Full Mock Test 10', audio: 'audio/listening-test20.mp3', minutes: 17, mb: 8, roles: ROLES, script: SCRIPT, Q, paper: PAPER, timeline: TIMELINE, partNames };
})();
