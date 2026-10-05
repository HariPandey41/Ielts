// IELTS Listening · Full Mock Test 8 — content only. The exam engine is assets/listening-exam.js.
// Kept for the mock test: this test is not listed with the practice tests.
(() => {
  'use strict';
  // Speakers: label for the transcript, voice for tools/make_listening_audio.py
  const ROLES = {
    narrator:     { label: 'Narrator', voice: 'bm_george', speed: 0.92, lang: 'en-gb' },
    receptionist: { label: 'Receptionist', voice: 'bf_lily', speed: 0.98, lang: 'en-gb' },
    linda:        { label: 'Linda', voice: 'af_heart', speed: 0.98, lang: 'en-us' },
    guide:        { label: 'Guide', voice: 'bm_fable', speed: 0.97, lang: 'en-gb' },
    leah:         { label: 'Leah', voice: 'bf_isabella', speed: 0.98, lang: 'en-gb' },
    tom:          { label: 'Tom', voice: 'am_michael', speed: 0.98, lang: 'en-us' },
    patel:        { label: 'Dr Patel', voice: 'af_bella', speed: 0.96, lang: 'en-us' },
    lecturer:     { label: 'Lecturer', voice: 'bm_daniel', speed: 0.95, lang: 'en-gb' },
  };

  // Script: [role, text] lines, or ['pause', seconds, label], or ['focus', part]
  // {{text|n}} marks where the answer to question n is heard.
  const SCRIPT = [
    ['focus', 1],
    ['narrator', 'IELTS Listening. Full Mock Test 8.'],
    ['narrator', 'In the test, you will hear a number of different recordings and you will have to answer questions on what you hear. There will be time for you to read the instructions and questions, and you will have a chance to check your work. All the recordings will be played once only. The test is in four parts.'],
    ['narrator', 'Now turn to Part 1.'],
    ['narrator', 'Part 1. You will hear a woman phoning a hotel for dogs to book a stay for her pet. First, you have some time to look at questions 1 to 5.'],
    ['pause', 30, 'Reading time · Questions 1–5'],
    ['narrator', 'You will see that there is an example that has been done for you. On this occasion only, the conversation relating to this will be played first.'],
    ['receptionist', 'Good morning, Hilltop Pet Hotel. How can I help?'],
    ['linda', "Hello. I'm going away next month, and I'd like to book a place for my dog, please."],
    ['receptionist', "Of course. We only take dogs at the moment, so that's no problem."],
    ['narrator', "The woman wants to book a place for a dog, so 'dog' has been written in the space. Now we shall begin. You should answer the questions as you listen, because you will not hear the recording a second time. Listen carefully and answer questions 1 to 5."],
    ['receptionist', 'Good morning, Hilltop Pet Hotel. How can I help?'],
    ['linda', "Hello. I'm going away next month, and I'd like to book a place for my dog, please."],
    ['receptionist', "Of course. We only take dogs at the moment, so that's no problem. Can I start with your name?"],
    ['linda', "Yes, it's Linda {{Garside|1}}. That's G, A, R, S, I, D, E."],
    ['receptionist', 'Thank you. And what kind of dog is it?'],
    ['linda', "People often think he's a Labrador, because he's quite big and golden. But he's actually a {{spaniel|2}}."],
    ['receptionist', 'Lovely. And how old is he?'],
    ['linda', "He's {{seven|3}}. He'll be eight in the spring, but he's still very lively."],
    ['receptionist', 'And which dates do you need?'],
    ['linda', "From the fourteenth of July. I was going to come back on the twentieth, but I've changed my flight, so it'll be until the {{twenty-first|4}}."],
    ['receptionist', "That's fine, we have space. Does he have any special needs with food? Most owners bring their dog's usual food."],
    ['linda', "I'll bring his dry food. The only thing is, he mustn't have any {{chicken|5}}, because he's allergic to it. Beef and fish are fine."],
    ['narrator', 'Before you hear the rest of the conversation, you have some time to look at questions 6 to 10.'],
    ['pause', 30, 'Reading time · Questions 6–10'],
    ['narrator', 'Now listen and answer questions 6 to 10.'],
    ['linda', 'Can I ask how much it costs?'],
    ['receptionist', "It depends on the size of the dog. For a large dog it's thirty-two pounds a night, but a spaniel counts as medium, so for him it's {{twenty-eight|6}} pounds a night."],
    ['linda', "That's fine. Should I bring anything for him to sleep on?"],
    ['receptionist', "Every room has its own bed, so you don't need to bring that. And we don't allow toys, because dogs sometimes fight over them. But please do bring his own {{blanket|7}}. Something that smells of home helps them to settle."],
    ['linda', "Okay. How much exercise do the dogs get? He's used to long walks."],
    ['receptionist', "They have two walks a day. We used to walk them in the field next to the car park, but now we take them into the {{forest|8}} behind the hotel, which they love."],
    ['linda', "That sounds perfect. And what time can I collect him on the last day?"],
    ['receptionist', "The office is open until six, but collections have to be before {{four|9}} p.m., because that's when the dogs have their evening meal."],
    ['linda', "Right. And will I be able to see how he's getting on?"],
    ['receptionist', "Yes. We take a photo of every dog each day. We used to send them by text message, but now we send them by {{email|10}}, so you can see them in a better size."],
    ['linda', "Wonderful. Thank you so much."],
    ['narrator', 'That is the end of Part 1. You now have half a minute to check your answers to Part 1.'],
    ['pause', 30, 'Checking time · Part 1'],

    ['focus', 2],
    ['narrator', 'Now turn to Part 2.'],
    ['narrator', 'Part 2. You will hear a guide talking to visitors at the start of a tour of some caves. First, you have some time to look at questions 11 to 16.'],
    ['pause', 30, 'Reading time · Questions 11–16'],
    ['narrator', 'Now listen carefully and answer questions 11 to 16.'],
    ['guide', "Good afternoon, everyone, and welcome to Ashdale Caves. Before we go underground, I'll tell you a little about the caves and what you'll see today."],
    ['guide', "The caves were opened to the public in nineteen twenty-eight, but they were discovered much earlier, in {{eighteen sixty-three|11}}. The story often told is that a dog fell into a hole in the hillside. But according to the records, it was a farmer who found the entrance while he was searching for a lost {{goat|12}}."],
    ['guide', "Some people expect it to be very cold underground. In fact, the temperature inside stays at about {{nine|13}} degrees all year round. That means it feels cold in summer, but quite warm in winter."],
    ['guide', "You'll see hundreds of stalactites hanging from the roof. They're formed by water dripping through the rock, and they grow very slowly: about one centimetre every {{hundred|14}} years. So some of the longest are many thousands of years old."],
    ['guide', "The largest cave is known as the {{Ballroom|15}}, because in the nineteen thirties, dances were held there. Today, it's sometimes used for concerts, because the sound is wonderful."],
    ['guide', "The tour used to take an hour and a half, but some of the passages are now closed, so it lasts about {{fifty|16}} minutes."],
    ['narrator', 'Before you hear the rest of the talk, you have some time to look at questions 17 to 20.'],
    ['pause', 30, 'Reading time · Questions 17–20'],
    ['narrator', 'Now listen and answer questions 17 to 20.'],
    ['guide', "Now, a few pieces of advice before we start. You don't need a torch, because the whole route is lit. And the paths are concrete, so ordinary trainers are fine; you don't need walking boots. But {{you should put on a warm jacket|17}}, because you'll be underground for quite a while, and it's also damp. And please {{don't touch the rock formations|18}}. The oil on our skin stops them from growing, and some of them have been damaged by visitors in the past."],
    ['guide', "There are also a couple of new things this year. The café has been here for years, of course, but {{we've just started underground boat trips|19}} along the river at the bottom of the caves, which take about fifteen minutes. And {{there's a new exhibition in the visitor centre that explains how the caves were formed|20}}. People often ask about bats, but you won't see any on this tour, I'm afraid. We're also planning a trail for children, but that won't be ready until next year. Right, follow me, please."],
    ['narrator', 'That is the end of Part 2. You now have half a minute to check your answers to Part 2.'],
    ['pause', 30, 'Checking time · Part 2'],

    ['focus', 3],
    ['narrator', 'Now turn to Part 3.'],
    ['narrator', 'Part 3. You will hear two environmental science students, Leah and Tom, talking to their tutor, Dr Patel, about a project on the water quality of a local river. First, you have some time to look at questions 21 to 25.'],
    ['pause', 30, 'Reading time · Questions 21–25'],
    ['narrator', 'Now listen carefully and answer questions 21 to 25.'],
    ['patel', "So, tell me how the river project is going. Why did you decide on the River Wend in the end?"],
    ['leah', "Well, we first thought about the Avon, because there was a pollution incident there last year. But it isn't really any further away. We chose the Wend because {{there's data on its water quality going back twenty years|21}}, so we could compare our results with the earlier figures."],
    ['patel', "Sensible. And how did you measure the water quality?"],
    ['tom', "We took some chemical readings with testing kits, but they weren't very reliable. So {{we mainly counted the small creatures living in the river|22}}, like insect larvae and snails. Some of them can only survive in clean water, so they're a good sign of quality. We looked at how clear the water was, too, but that's not a very accurate measure."],
    ['patel', "Did the fieldwork go smoothly?"],
    ['leah', "Mostly. The farmers were happy for us to go on their land, and we didn't lose any equipment, although Tom nearly dropped the net in the river! The real problem was {{the rain on the second day. The river was too deep and fast to go into|23}}, so we had to go back a week later."],
    ['patel', "I've read your draft. Your comparison with the earlier data is excellent. But {{there's no map|24}}. You describe the five sites, but a reader can't picture where they are."],
    ['tom', "Oh, of course. We'll add one."],
    ['patel', "And what will happen to your findings when the project's finished?"],
    ['leah', "We thought about writing an article for the student newspaper, but {{the local wildlife trust has asked us to send them our results|25}}, because they're planning to improve parts of the river."],
    ['narrator', 'Before you hear the rest of the discussion, you have some time to look at questions 26 to 30.'],
    ['pause', 30, 'Reading time · Questions 26–30'],
    ['narrator', 'Now listen and answer questions 26 to 30.'],
    ['patel', "Let's go through your sites. What did you find at the source, up on the moor?"],
    ['tom', "We assumed it would be the cleanest place, with the most life. But the water's quite acidic up there, because of the peat, so {{there were fewer species than we'd expected|26}}."],
    ['patel', 'And below the farms?'],
    ['leah', "We thought the water might be cloudy, from soil washing off the fields, but it was actually quite clear. The problem was {{thick green algae everywhere, which is a sign of fertiliser running into the river|27}}."],
    ['patel', 'What about the town park?'],
    ['tom', "{{That was the worst for rubbish|28}}. We found plastic bottles, bags, even a shopping trolley."],
    ['patel', 'And below the water treatment works?'],
    ['leah', "People expect that to be the most polluted site. But the works were modernised ten years ago, and {{the water quality is much better than it was in the earlier study|29}}. We checked the water temperature there too, but it was no different from the other sites."],
    ['patel', 'And finally, the nature reserve?'],
    ['tom', "{{That's where we found the greatest variety of species|30}}. Over thirty different kinds of creature."],
    ['patel', "Very good. You've done a lot of work."],
    ['narrator', 'That is the end of Part 3. You now have half a minute to check your answers to Part 3.'],
    ['pause', 30, 'Checking time · Part 3'],

    ['focus', 4],
    ['narrator', 'Now turn to Part 4.'],
    ['narrator', 'Part 4. You will hear a lecture about sand as a natural resource. First, you have some time to look at questions 31 to 40.'],
    ['pause', 45, 'Reading time · Questions 31–40'],
    ['narrator', 'Now listen carefully and answer questions 31 to 40.'],
    ['lecturer', "Good morning. Today I want to talk about a resource that most of us never think about: sand. It may seem unlimited, but in fact sand is the most widely used natural resource on Earth after {{water|31}}, and in some parts of the world it's starting to run out."],
    ['lecturer', "So what do we use it for? Sand is needed to make glass and computer chips, but by far the largest amount goes into {{concrete|32}}, for buildings and roads. Every new city, motorway and airport depends on it."],
    ['lecturer', "You might think there's no shortage, given the size of the world's deserts. Unfortunately, desert sand is almost useless for building. Its grains have been shaped by the wind for thousands of years, which makes them too {{smooth|33}} to lock together. This is why, surprisingly, {{Dubai|34}}, which is surrounded by desert, imported sand from Australia to build the world's tallest building."],
    ['lecturer', "Instead, most building sand is taken from rivers and lakes, and increasingly, it's pumped up from the {{seabed|35}} by ships."],
    ['lecturer', "This has serious consequences. When large amounts of sand are removed from a river, the level of the water falls, and nearby {{wells|36}} can dry up, leaving villages without drinking water. Sand mining also destroys habitats. In parts of Asia, it threatens rare species such as river {{dolphins|37}}, which depend on the shallow areas where sand builds up. In Indonesia, it's been reported that around two dozen small {{islands|38}} disappeared after their sand was dug up and sold abroad."],
    ['lecturer', "And because sand is so valuable, there's a large illegal trade. In several countries, it's controlled by criminal gangs, who are often referred to as the sand {{mafia|39}}."],
    ['lecturer', "So what are the alternatives? Engineers are developing concrete that uses crushed rock instead of natural sand, and old concrete from demolished buildings can be ground up and reused. Another promising material is recycled {{glass|40}}, which can be crushed into particles very similar to natural sand."],
    ['lecturer', "Next week, we'll look at another resource that is running short: phosphorus."],
    ['narrator', 'That is the end of Part 4. That is the end of the listening test.'],
  ];

  // Questions. kind: gap | mcq | two | match
  const LIMIT_WN = 'ONE WORD AND/OR A NUMBER';
  const LIMIT_W = 'ONE WORD ONLY';
  const Q = {
    1:  { kind: 'gap', ans: ['garside'], limit: 'wn', key: 'Garside' },
    2:  { kind: 'gap', ans: ['spaniel'], limit: 'wn' },
    3:  { kind: 'gap', ans: ['7', 'seven'], limit: 'wn' },
    4:  { kind: 'gap', ans: ['21', '21st', 'twenty-first'], limit: 'wn' },
    5:  { kind: 'gap', ans: ['chicken'], limit: 'wn' },
    6:  { kind: 'gap', ans: ['28', 'twenty-eight'], limit: 'wn' },
    7:  { kind: 'gap', ans: ['blanket'], limit: 'wn' },
    8:  { kind: 'gap', ans: ['forest'], limit: 'wn' },
    9:  { kind: 'gap', ans: ['4', 'four', '4pm', '4.00', '4.00pm'], limit: 'wn', key: '4' },
    10: { kind: 'gap', ans: ['email', 'e-mail'], limit: 'wn' },
    11: { kind: 'gap', ans: ['1863'], limit: 'wn' },
    12: { kind: 'gap', ans: ['goat'], limit: 'wn' },
    13: { kind: 'gap', ans: ['9', 'nine'], limit: 'wn' },
    14: { kind: 'gap', ans: ['100', 'hundred'], limit: 'wn', key: '100' },
    15: { kind: 'gap', ans: ['ballroom'], limit: 'wn', key: 'Ballroom' },
    16: { kind: 'gap', ans: ['50', 'fifty'], limit: 'wn' },
    17: { kind: 'two', pair: [17, 18], ans: ['B', 'D'] },
    18: { kind: 'two', pair: [17, 18], ans: ['B', 'D'] },
    19: { kind: 'two', pair: [19, 20], ans: ['A', 'E'] },
    20: { kind: 'two', pair: [19, 20], ans: ['A', 'E'] },
    21: { kind: 'mcq', q: 'Why did the students choose the River Wend?', opts: { A: 'It was closer to the university.', B: 'Earlier data on the river was available.', C: 'There had been a recent pollution incident.' }, ans: 'B' },
    22: { kind: 'mcq', q: 'How did the students mainly measure water quality?', opts: { A: 'by using chemical testing kits', B: 'by counting small creatures in the river', C: 'by measuring how clear the water was' }, ans: 'B' },
    23: { kind: 'mcq', q: 'What problem did the students have during the fieldwork?', opts: { A: 'A farmer refused to let them onto his land.', B: 'Some of their equipment was lost.', C: 'The river was too high after rain.' }, ans: 'C' },
    24: { kind: 'mcq', q: 'What does Dr Patel say is missing from the draft?', opts: { A: 'a map of the sites', B: 'a comparison with the earlier data', C: 'a list of references' }, ans: 'A' },
    25: { kind: 'mcq', q: 'What will happen to the students’ findings?', opts: { A: 'They will be published in the student newspaper.', B: 'They will be sent to a local wildlife organisation.', C: 'They will be presented at a conference.' }, ans: 'B' },
    26: { kind: 'match', label: 'the source', ans: 'E' },
    27: { kind: 'match', label: 'below the farms', ans: 'D' },
    28: { kind: 'match', label: 'the town park', ans: 'C' },
    29: { kind: 'match', label: 'below the water treatment works', ans: 'G' },
    30: { kind: 'match', label: 'the nature reserve', ans: 'A' },
    31: { kind: 'gap', ans: ['water'], limit: 'w' },
    32: { kind: 'gap', ans: ['concrete'], limit: 'w' },
    33: { kind: 'gap', ans: ['smooth'], limit: 'w' },
    34: { kind: 'gap', ans: ['dubai'], limit: 'w', key: 'Dubai' },
    35: { kind: 'gap', ans: ['seabed', 'sea-bed'], limit: 'w' },
    36: { kind: 'gap', ans: ['wells'], limit: 'w' },
    37: { kind: 'gap', ans: ['dolphins'], limit: 'w' },
    38: { kind: 'gap', ans: ['islands'], limit: 'w' },
    39: { kind: 'gap', ans: ['mafia'], limit: 'w' },
    40: { kind: 'gap', ans: ['glass'], limit: 'w' },
  };
  const FINDINGS = { A: 'the greatest variety of species', B: 'very cloudy water', C: 'a large amount of litter', D: 'signs of fertiliser pollution', E: 'fewer species than expected', F: 'higher water temperature', G: 'an improvement since the earlier study' };

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
        <h4>Hilltop Pet Hotel · Booking form</h4>
        <div class="line"><span>Animal:</span><span class="example">Example: <u>dog</u></span></div>
        <div class="line"><span>Owner’s name:</span><span>Linda ${gap(1)}</span></div>
        <div class="line"><span>Breed:</span><span>${gap(2)}</span></div>
        <div class="line"><span>Age:</span><span>${gap(3)} years</span></div>
        <div class="line"><span>Dates:</span><span>14 July to ${gap(4)} July</span></div>
        <div class="line"><span>Food:</span><span>owner brings dry food; no ${gap(5)}</span></div>
        <div class="sub">Hotel information</div>
        <div class="line"><span>Price:</span><span>£ ${gap(6)} per night</span></div>
        <div class="line"><span>Bring:</span><span>the dog’s own ${gap(7)}</span></div>
        <div class="line"><span>Exercise:</span><span>two walks a day in the ${gap(8)}</span></div>
        <div class="line"><span>Collection:</span><span>before ${gap(9)} p.m. on the last day</span></div>
        <div class="line"><span>Daily photos:</span><span>sent by ${gap(10)}</span></div>
      </div>
    </div>
  </section>

  <section class="part" id="part-2" data-part="2" hidden>
    <div class="part-head"><h2>Part 2</h2><span class="label">Questions 11–20</span></div>
    <div class="qblock">
      <h3>Questions 11–16</h3>
      <p class="instr">Complete the notes below. Write <b>${LIMIT_WN}</b> for each answer.</p>
      <div class="notes">
        <h4>Ashdale Caves</h4>
        <ul>
          <li>Discovered in ${gap(11)}</li>
          <li>Found by a farmer looking for a lost ${gap(12)}</li>
          <li>Temperature all year: about ${gap(13)} degrees</li>
          <li>Stalactites grow about 1 cm every ${gap(14)} years.</li>
          <li>The largest cave is called the ${gap(15)}.</li>
          <li>Length of the tour: about ${gap(16)} minutes</li>
        </ul>
      </div>
    </div>
    ${two(17, 'Which <b>TWO</b> things does the guide advise visitors to do?', { A: 'bring a torch', B: 'wear warm clothing', C: 'wear walking boots', D: 'avoid touching the rock', E: 'keep children close to them' })}
    ${two(19, 'Which <b>TWO</b> things are new at the caves this year?', { A: 'boat trips', B: 'a café', C: 'a children’s trail', D: 'a chance to see bats', E: 'an exhibition about how the caves formed' })}
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
      <p class="instr">What did the students find at each site on the river? Choose <b>FIVE</b> answers from the box and write the correct letter, <b>A–G</b>, next to Questions 26–30.</p>
      ${box('Findings', FINDINGS)}
      ${matchRows([26, 27, 28, 29, 30], FINDINGS)}
    </div>
  </section>

  <section class="part" id="part-4" data-part="4" hidden>
    <div class="part-head"><h2>Part 4</h2><span class="label">Questions 31–40</span></div>
    <div class="qblock">
      <h3>Questions 31–40</h3>
      <p class="instr">Complete the notes below. Write <b>${LIMIT_W}</b> for each answer.</p>
      <div class="notes">
        <h4>Sand: a disappearing resource</h4>
        <span class="h">Uses</span>
        <ul>
          <li>The most used natural resource after ${gap(31)}.</li>
          <li>Most sand is used to make ${gap(32)}.</li>
        </ul>
        <span class="h">Sources</span>
        <ul>
          <li>Desert sand grains are too ${gap(33)} for building.</li>
          <li>${gap(34)} imported sand from Australia.</li>
          <li>Building sand comes from rivers, lakes and the ${gap(35)}.</li>
        </ul>
        <span class="h">Effects of sand mining</span>
        <ul>
          <li>Lower river levels can cause ${gap(36)} to dry up.</li>
          <li>Threatens species such as river ${gap(37)}.</li>
          <li>Small ${gap(38)} have disappeared in Indonesia.</li>
          <li>Illegal trade run by the sand ${gap(39)}.</li>
        </ul>
        <span class="h">Alternatives</span>
        <ul>
          <li>crushed rock, old concrete and recycled ${gap(40)}</li>
        </ul>
      </div>
    </div>
  </section>`;

  // Part changes and reading/checking pauses in the recording (seconds) — filled in by tools/make_listening_audio.py
  const TIMELINE = [{"t":1.0,"focus":1},{"t":36.3,"pause":30,"label":"Reading time · Questions 1–5"},{"t":66.3,"speech":1,"part":1},{"t":173.02,"pause":30,"label":"Reading time · Questions 6–10"},{"t":203.02,"speech":1,"part":1},{"t":281.55,"pause":30,"label":"Checking time · Part 1"},{"t":311.55,"focus":2},{"t":311.55,"speech":1,"part":2},{"t":324.81,"pause":30,"label":"Reading time · Questions 11–16"},{"t":354.81,"speech":1,"part":2},{"t":432.91,"pause":30,"label":"Reading time · Questions 17–20"},{"t":462.91,"speech":1,"part":2},{"t":520.34,"pause":30,"label":"Checking time · Part 2"},{"t":550.34,"focus":3},{"t":550.34,"speech":1,"part":3},{"t":569.55,"pause":30,"label":"Reading time · Questions 21–25"},{"t":599.55,"speech":1,"part":3},{"t":703.18,"pause":30,"label":"Reading time · Questions 26–30"},{"t":733.18,"speech":1,"part":3},{"t":808.42,"pause":30,"label":"Checking time · Part 3"},{"t":838.42,"focus":4},{"t":838.42,"speech":1,"part":4},{"t":850.51,"pause":45,"label":"Reading time · Questions 31–40"},{"t":895.51,"speech":1,"part":4}];
  const partNames = { 1: 'Part 1 · Booking a pet hotel', 2: 'Part 2 · A tour of Ashdale Caves', 3: 'Part 3 · A river water-quality project', 4: 'Part 4 · Sand as a resource' };
  window.LISTENING_TEST = { num: 18, name: 'Full Mock Test 8', audio: 'audio/listening-test18.mp3', minutes: 17, mb: 8, roles: ROLES, script: SCRIPT, Q, paper: PAPER, timeline: TIMELINE, partNames };
})();
