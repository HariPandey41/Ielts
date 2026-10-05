// IELTS Listening · Full Mock Test 4 — content only. The exam engine is assets/listening-exam.js.
// Kept for the mock test: this test is not listed with the practice tests.
(() => {
  'use strict';
  // Speakers: label for the transcript, voice for tools/make_listening_audio.py
  const ROLES = {
    narrator: { label: 'Narrator', voice: 'bm_george', speed: 0.92, lang: 'en-gb' },
    clerk:    { label: 'Agent', voice: 'am_adam', speed: 0.98, lang: 'en-us' },
    laura:    { label: 'Laura', voice: 'bf_emma', speed: 0.98, lang: 'en-gb' },
    director: { label: 'Camp director', voice: 'bm_lewis', speed: 0.97, lang: 'en-gb' },
    mia:      { label: 'Mia', voice: 'af_jessica', speed: 0.98, lang: 'en-us' },
    kofi:     { label: 'Kofi', voice: 'bm_daniel', speed: 0.98, lang: 'en-gb' },
    hart:     { label: 'Dr Hart', voice: 'bf_alice', speed: 0.96, lang: 'en-gb' },
    lecturer: { label: 'Lecturer', voice: 'am_michael', speed: 0.95, lang: 'en-us' },
  };

  // Script: [role, text] lines, or ['pause', seconds, label], or ['focus', part]
  // {{text|n}} marks where the answer to question n is heard.
  const SCRIPT = [
    ['focus', 1],
    ['narrator', 'IELTS Listening. Full Mock Test 4.'],
    ['narrator', 'In the test, you will hear a number of different recordings and you will have to answer questions on what you hear. There will be time for you to read the instructions and questions, and you will have a chance to check your work. All the recordings will be played once only. The test is in four parts.'],
    ['narrator', 'Now turn to Part 1.'],
    ['narrator', 'Part 1. You will hear a woman phoning a car hire company. First, you have some time to look at questions 1 to 5.'],
    ['pause', 30, 'Reading time · Questions 1–5'],
    ['narrator', 'You will see that there is an example that has been done for you. On this occasion only, the conversation relating to this will be played first.'],
    ['clerk', 'Good morning, Coastline Car Hire. How can I help?'],
    ['laura', "Hello. I'd like to hire a car for a holiday, please. We're flying into Faro, so we'd like to pick it up at the airport."],
    ['clerk', "No problem. So that's collection from the airport."],
    ['narrator', "The car will be collected from the airport, so 'airport' has been written in the space. Now we shall begin. You should answer the questions as you listen, because you will not hear the recording a second time. Listen carefully and answer questions 1 to 5."],
    ['clerk', 'Good morning, Coastline Car Hire. How can I help?'],
    ['laura', "Hello. I'd like to hire a car for a holiday, please. We're flying into Faro, so we'd like to pick it up at the airport."],
    ['clerk', "No problem. So that's collection from the airport. Can I have your name?"],
    ['laura', "Laura {{Fielding|1}}. That's F, I, E, L, D, I, N, G."],
    ['clerk', 'And when would you like to collect the car?'],
    ['laura', "Our flight leaves on the twentieth of July, but it doesn't land until after midnight. So we'll pick the car up on the morning of the {{twenty-first|2}}."],
    ['clerk', 'And how long will you need it for?'],
    ['laura', "We were going to go for a week, but we've decided to stay longer, so it'll be {{ten|3}} days."],
    ['clerk', 'What size of car are you looking for?'],
    ['laura', "There are four of us, two adults and two children, and we'll have quite a lot of luggage. A small car won't be big enough. I think an {{estate|4}} car would be best."],
    ['clerk', "Good idea. And do you need any extras?"],
    ['laura', "We'll need a child {{seat|5}} for our younger son. He's only five. Our daughter is twelve, so she doesn't need one."],
    ['narrator', 'Before you hear the rest of the conversation, you have some time to look at questions 6 to 10.'],
    ['pause', 30, 'Reading time · Questions 6–10'],
    ['narrator', 'Now listen and answer questions 6 to 10.'],
    ['laura', 'How much will that cost?'],
    ['clerk', "The normal price for an estate car is forty-two pounds a day, but because you're hiring it for more than a week, it comes down to {{thirty-eight|6}} pounds a day, and that includes the child seat."],
    ['laura', "That's good. What do I need to bring with me?"],
    ['clerk', "You'll need your driving licence and your passport, and a {{credit|7}} card in the driver's name. We can't accept debit cards, I'm afraid."],
    ['laura', 'And what about fuel?'],
    ['clerk', "The car will have a full tank when you collect it, and you need to return it with a full {{tank|8}} too. If you don't, we charge for the fuel, and it's much more expensive than at a petrol station."],
    ['laura', 'Where exactly is your desk at the airport?'],
    ['clerk', "Most of the car hire companies are outside, in the car park building. But our desk is inside the arrivals hall, right next to the {{pharmacy|9}}."],
    ['laura', 'And will I get a confirmation?'],
    ['clerk', "Yes. We'll send you an email with all the details, and on the day before you travel, we'll send you a {{text|10}} message with the desk's phone number."],
    ['laura', "Perfect. Thank you."],
    ['narrator', 'That is the end of Part 1. You now have half a minute to check your answers to Part 1.'],
    ['pause', 30, 'Checking time · Part 1'],

    ['focus', 2],
    ['narrator', 'Now turn to Part 2.'],
    ['narrator', 'Part 2. You will hear the director of a summer camp for children talking to a group of parents. First, you have some time to look at questions 11 to 16.'],
    ['pause', 30, 'Reading time · Questions 11–16'],
    ['narrator', 'Now listen carefully and answer questions 11 to 16.'],
    ['director', "Good evening, everyone, and thank you for coming. I'm the director of the Brookfield Summer Camp, and I'd like to tell you a little about what we do."],
    ['director', "The camp runs during the school holidays. In the past it lasted for two weeks, but because it's been so popular, this year it'll run for {{three|11}} weeks, from the end of July."],
    ['director', "It's open to children aged eight to {{fourteen|12}}. We used to take children up to sixteen, but we found the older ones wanted quite different activities."],
    ['director', "Each day, you can drop your children off from {{eight thirty|13}} in the morning, and activities start at nine. Please collect them by four."],
    ['director', "We provide a hot lunch, so you don't need to send food. But please make sure your child brings a {{hat|14}} every day, because we spend a lot of time outdoors, and there isn't much shade on the playing fields."],
    ['director', "Every Friday, we take the children on a trip. Last year we went to the zoo, but this year all the trips will be to the {{beach|15}}, where we'll do things like building sandcastles and rock-pooling."],
    ['director', "And the price. It's {{one hundred and twenty|16}} pounds per week, which includes lunch and the Friday trips. There's a discount if you book for brothers or sisters."],
    ['narrator', 'Before you hear the rest of the talk, you have some time to look at questions 17 to 20.'],
    ['pause', 30, 'Reading time · Questions 17–20'],
    ['narrator', 'Now listen and answer questions 17 to 20.'],
    ['director', "As some of you know, we've moved from the old school building to Brookfield Park. The rent is actually a little higher, and it's further from the station. But {{we needed much more space|17}}, especially for outdoor games."],
    ['director', "We've also added a new activity. We already do climbing, and we'd love to do sailing, but the lake isn't suitable. So this year, for the first time, {{the children will be making their own short films|18}}, with help from a local film school."],
    ['director', "A lot of parents have asked about mobile phones. We don't want to ban them, because many of you like to be able to contact your children. So {{phones will be kept safely in the office during the day|19}}, and children can use them at the end of the afternoon."],
    ['director', "Finally, booking. We used to take bookings over the phone and at the school office, but this year {{you can only book through our website|20}}, which makes it much easier for us to manage the places. Thank you very much."],
    ['narrator', 'That is the end of Part 2. You now have half a minute to check your answers to Part 2.'],
    ['pause', 30, 'Checking time · Part 2'],

    ['focus', 3],
    ['narrator', 'Now turn to Part 3.'],
    ['narrator', 'Part 3. You will hear two media students, Mia and Kofi, talking to their tutor, Dr Hart, about their presentation on the history of advertising. First, you have some time to look at questions 21 to 25.'],
    ['pause', 30, 'Reading time · Questions 21–25'],
    ['narrator', 'Now listen carefully and answer questions 21 to 25.'],
    ['hart', "So, how's the presentation on advertising coming along?"],
    ['mia', "Quite well, thanks. At first we wanted to focus only on television adverts, but there's so much material that we couldn't decide what to leave out. So {{we've decided to look at how advertising has changed over a very long period|21}}, right back to ancient times."],
    ['hart', "That's ambitious. What's the main point you want to make?"],
    ['kofi', "Most people assume advertising has become much more clever over time. But {{we want to show that the basic techniques have hardly changed|22}}. Only the technology is different."],
    ['hart', "That's an interesting argument. I looked at your outline. The structure is clear, and you've found good examples. But {{it's too long|23}}. You've only got fifteen minutes, and at the moment it would take at least twenty-five."],
    ['mia', "We were worried about that. We'll cut some of the twentieth-century material."],
    ['hart', "Good. And how are you going to present it?"],
    ['kofi', "We thought about acting out some old adverts, but we're not very good actors. So {{we'll show pictures of real adverts and ask the audience to guess their date|24}}. We think that will keep people interested."],
    ['hart', "Nice idea. And where did you find most of your information?"],
    ['mia', "The library has some books, but they're quite old. {{Most of it came from an online archive run by a museum|25}}, which has thousands of adverts you can search."],
    ['narrator', 'Before you hear the rest of the discussion, you have some time to look at questions 26 to 30.'],
    ['pause', 30, 'Reading time · Questions 26–30'],
    ['narrator', 'Now listen and answer questions 26 to 30.'],
    ['hart', "So which example will you use for each period?"],
    ['kofi', "For the ancient world, we'll show {{the painted shop signs from Pompeii|26}}. Some of them are still on the walls, advertising wine and bread."],
    ['mia', "For the seventeenth century, when newspapers first appeared, we're using {{a notice in a London newspaper|27}}. It's selling a new drink called coffee."],
    ['kofi', "Then for the nineteenth century, {{a huge poster for a travelling circus|28}}. The colours are amazing."],
    ['hart', 'And the twentieth century?'],
    ['mia', "We thought about a soap advert, but there are so many. Instead, for the nineteen thirties, we'll play {{a radio jingle for breakfast cereal|29}}. It's very catchy."],
    ['kofi', "And to finish, for the two thousands, {{a pop-up advert on a website|30}}, because everyone hated them. We're leaving out television completely, because it would need too much time."],
    ['hart', "That sounds like a good selection. Well done."],
    ['narrator', 'That is the end of Part 3. You now have half a minute to check your answers to Part 3.'],
    ['pause', 30, 'Checking time · Part 3'],

    ['focus', 4],
    ['narrator', 'Now turn to Part 4.'],
    ['narrator', 'Part 4. You will hear a lecture about the roads built by the ancient Romans. First, you have some time to look at questions 31 to 40.'],
    ['pause', 45, 'Reading time · Questions 31–40'],
    ['narrator', 'Now listen carefully and answer questions 31 to 40.'],
    ['lecturer', "Good morning. Today we're looking at one of the greatest engineering achievements of the ancient world: the Roman road network."],
    ['lecturer', "At its height, the Roman Empire had more than eighty thousand kilometres of paved roads, stretching from Britain to the Middle East. They were used by traders and ordinary travellers, but they were built mainly for the {{army|31}}, so that soldiers could move quickly to any part of the empire where there was trouble."],
    ['lecturer', "Roman roads were built in layers. The builders first dug a trench, and then filled the bottom with large {{stones|32}}. On top of these came smaller stones and gravel, and finally the surface, which was often made of flat paving slabs. The surface was slightly curved, higher in the middle than at the sides, so that {{water|33}} would run off into ditches at the edges, instead of soaking into the road."],
    ['lecturer', "Roman roads are famous for being {{straight|34}}. Surveyors planned them by lining up poles, sometimes using fires on hilltops, and they usually went around obstacles only when there was no alternative, such as a very steep hill."],
    ['lecturer', "Along the roads, stone milestones showed the distance to the next town. A Roman mile was a thousand {{paces|35}}, with each pace counted as two steps. At regular intervals there were official stations, where government messengers could rest and change {{horses|36}}. Using this system, an urgent message could travel about {{eighty|37}} kilometres in a single day."],
    ['lecturer', "The roads had effects far beyond the army. They made it much easier for merchants to move goods, so they helped the growth of {{trade|38}} across the empire, and with it the spread of Roman culture, language and ideas."],
    ['lecturer', "When the Western Empire collapsed in the fifth century, the roads slowly began to fall apart, because there was no central {{government|39}} to pay for repairs. Even so, many of them remained in use for centuries, and in Britain and France, quite a few modern {{motorways|40}} still follow the routes that Roman surveyors chose two thousand years ago."],
    ['lecturer', "Next time, we'll look at Roman bridges and aqueducts."],
    ['narrator', 'That is the end of Part 4. That is the end of the listening test.'],
  ];

  // Questions. kind: gap | mcq | two | match
  const LIMIT_WN = 'ONE WORD AND/OR A NUMBER';
  const Q = {
    1:  { kind: 'gap', ans: ['fielding'], limit: 'wn', key: 'Fielding' },
    2:  { kind: 'gap', ans: ['21', '21st', 'twenty-first'], limit: 'wn' },
    3:  { kind: 'gap', ans: ['10', 'ten'], limit: 'wn' },
    4:  { kind: 'gap', ans: ['estate'], limit: 'wn' },
    5:  { kind: 'gap', ans: ['seat'], limit: 'wn' },
    6:  { kind: 'gap', ans: ['38', 'thirty-eight'], limit: 'wn' },
    7:  { kind: 'gap', ans: ['credit'], limit: 'wn' },
    8:  { kind: 'gap', ans: ['tank'], limit: 'wn' },
    9:  { kind: 'gap', ans: ['pharmacy', 'chemist'], limit: 'wn' },
    10: { kind: 'gap', ans: ['text'], limit: 'wn' },
    11: { kind: 'gap', ans: ['3', 'three'], limit: 'wn' },
    12: { kind: 'gap', ans: ['14', 'fourteen'], limit: 'wn' },
    13: { kind: 'gap', ans: ['8.30', '8.30am'], limit: 'wn' },
    14: { kind: 'gap', ans: ['hat'], limit: 'wn' },
    15: { kind: 'gap', ans: ['beach', 'seaside'], limit: 'wn' },
    16: { kind: 'gap', ans: ['120'], limit: 'wn' },
    17: { kind: 'mcq', q: 'Why has the camp moved to Brookfield Park?', opts: { A: 'It is cheaper.', B: 'It has more space.', C: 'It is nearer the station.' }, ans: 'B' },
    18: { kind: 'mcq', q: 'What new activity will the camp offer this year?', opts: { A: 'climbing', B: 'sailing', C: 'film-making' }, ans: 'C' },
    19: { kind: 'mcq', q: 'What is the camp’s rule about mobile phones?', opts: { A: 'Children may not bring them.', B: 'They are kept in the office during the day.', C: 'They may only be used at lunchtime.' }, ans: 'B' },
    20: { kind: 'mcq', q: 'How can parents book places this year?', opts: { A: 'by phone', B: 'at the school office', C: 'online' }, ans: 'C' },
    21: { kind: 'mcq', q: 'What is the focus of the students’ presentation?', opts: { A: 'television advertising', B: 'the history of advertising over a long period', C: 'advertising in the twentieth century' }, ans: 'B' },
    22: { kind: 'mcq', q: 'What is the main point the students want to make?', opts: { A: 'Advertising techniques have changed very little.', B: 'Advertising has become much more clever.', C: 'Technology has made advertising less effective.' }, ans: 'A' },
    23: { kind: 'mcq', q: 'What problem does Dr Hart find with the outline?', opts: { A: 'The structure is unclear.', B: 'It needs better examples.', C: 'It is too long for the time available.' }, ans: 'C' },
    24: { kind: 'mcq', q: 'How will the students involve the audience?', opts: { A: 'by acting out old adverts', B: 'by asking them to guess the dates of adverts', C: 'by asking them to design an advert' }, ans: 'B' },
    25: { kind: 'mcq', q: 'Where did the students find most of their information?', opts: { A: 'in library books', B: 'in an online archive', C: 'in a museum they visited' }, ans: 'B' },
    26: { kind: 'match', label: 'the ancient world', ans: 'C' },
    27: { kind: 'match', label: 'the seventeenth century', ans: 'D' },
    28: { kind: 'match', label: 'the nineteenth century', ans: 'G' },
    29: { kind: 'match', label: 'the 1930s', ans: 'B' },
    30: { kind: 'match', label: 'the 2000s', ans: 'F' },
    31: { kind: 'gap', ans: ['army', 'military', 'soldiers'], limit: 'wn' },
    32: { kind: 'gap', ans: ['stones'], limit: 'wn' },
    33: { kind: 'gap', ans: ['water', 'rain', 'rainwater'], limit: 'wn' },
    34: { kind: 'gap', ans: ['straight'], limit: 'wn' },
    35: { kind: 'gap', ans: ['paces'], limit: 'wn' },
    36: { kind: 'gap', ans: ['horses'], limit: 'wn' },
    37: { kind: 'gap', ans: ['80', 'eighty'], limit: 'wn' },
    38: { kind: 'gap', ans: ['trade', 'commerce'], limit: 'wn' },
    39: { kind: 'gap', ans: ['government'], limit: 'wn' },
    40: { kind: 'gap', ans: ['motorways', 'highways'], limit: 'wn' },
  };
  const EXAMPLES = { A: 'an advert for soap', B: 'a radio jingle', C: 'painted shop signs', D: 'a newspaper notice', E: 'a television commercial', F: 'a pop-up advert', G: 'a circus poster' };

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
        <h4>Coastline Car Hire · Booking</h4>
        <div class="line"><span>Collect from:</span><span class="example">Example: <u>airport</u></span></div>
        <div class="line"><span>Name:</span><span>Laura ${gap(1)}</span></div>
        <div class="line"><span>Collection date:</span><span>${gap(2)} July</span></div>
        <div class="line"><span>Length of hire:</span><span>${gap(3)} days</span></div>
        <div class="line"><span>Type of car:</span><span>${gap(4)} car</span></div>
        <div class="line"><span>Extra:</span><span>child ${gap(5)}</span></div>
        <div class="sub">Other details</div>
        <div class="line"><span>Price:</span><span>£ ${gap(6)} per day</span></div>
        <div class="line"><span>Bring:</span><span>licence, passport and a ${gap(7)} card</span></div>
        <div class="line"><span>Fuel:</span><span>return with a full ${gap(8)}</span></div>
        <div class="line"><span>Desk:</span><span>arrivals hall, next to the ${gap(9)}</span></div>
        <div class="line"><span>Day before travel:</span><span>${gap(10)} message with phone number</span></div>
      </div>
    </div>
  </section>

  <section class="part" id="part-2" data-part="2" hidden>
    <div class="part-head"><h2>Part 2</h2><span class="label">Questions 11–20</span></div>
    <div class="qblock">
      <h3>Questions 11–16</h3>
      <p class="instr">Complete the notes below. Write <b>${LIMIT_WN}</b> for each answer.</p>
      <div class="notes">
        <h4>Brookfield Summer Camp</h4>
        <ul>
          <li>Length of camp this year: ${gap(11)} weeks</li>
          <li>Ages: 8 to ${gap(12)}</li>
          <li>Drop children off from ${gap(13)} a.m.</li>
          <li>Children should bring a ${gap(14)} every day.</li>
          <li>Friday trips: to the ${gap(15)}</li>
          <li>Cost: £ ${gap(16)} per week</li>
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
      <p class="instr">Which example will the students use for each period? Choose <b>FIVE</b> answers from the box and write the correct letter, <b>A–G</b>, next to Questions 26–30.</p>
      ${box('Examples', EXAMPLES)}
      ${matchRows([26, 27, 28, 29, 30], EXAMPLES)}
    </div>
  </section>

  <section class="part" id="part-4" data-part="4" hidden>
    <div class="part-head"><h2>Part 4</h2><span class="label">Questions 31–40</span></div>
    <div class="qblock">
      <h3>Questions 31–40</h3>
      <p class="instr">Complete the notes below. Write <b>${LIMIT_WN}</b> for each answer.</p>
      <div class="notes">
        <h4>Roman roads</h4>
        <span class="h">Purpose and construction</span>
        <ul>
          <li>Built mainly for the ${gap(31)}.</li>
          <li>Bottom layer of large ${gap(32)}, then gravel and paving.</li>
          <li>Curved surface so that ${gap(33)} ran off into ditches.</li>
          <li>Famous for being ${gap(34)}.</li>
        </ul>
        <span class="h">Travel</span>
        <ul>
          <li>A Roman mile = 1,000 ${gap(35)}.</li>
          <li>Messengers could change ${gap(36)} at official stations.</li>
          <li>Urgent messages travelled about ${gap(37)} km a day.</li>
        </ul>
        <span class="h">Effects and decline</span>
        <ul>
          <li>Roads encouraged the growth of ${gap(38)}.</li>
          <li>Decline: no central ${gap(39)} to pay for repairs.</li>
          <li>Some modern ${gap(40)} follow Roman routes.</li>
        </ul>
      </div>
    </div>
  </section>`;

  // Part changes and reading/checking pauses in the recording (seconds) — filled in by tools/make_listening_audio.py
  const TIMELINE = [{"t":1.0,"focus":1},{"t":34.4,"pause":30,"label":"Reading time · Questions 1–5"},{"t":64.4,"speech":1,"part":1},{"t":167.6,"pause":30,"label":"Reading time · Questions 6–10"},{"t":197.6,"speech":1,"part":1},{"t":268.47,"pause":30,"label":"Checking time · Part 1"},{"t":298.47,"focus":2},{"t":298.47,"speech":1,"part":2},{"t":311.97,"pause":30,"label":"Reading time · Questions 11–16"},{"t":341.97,"speech":1,"part":2},{"t":426.98,"pause":30,"label":"Reading time · Questions 17–20"},{"t":456.98,"speech":1,"part":2},{"t":525.11,"pause":30,"label":"Checking time · Part 2"},{"t":555.11,"focus":3},{"t":555.11,"speech":1,"part":3},{"t":573.51,"pause":30,"label":"Reading time · Questions 21–25"},{"t":603.51,"speech":1,"part":3},{"t":690.95,"pause":30,"label":"Reading time · Questions 26–30"},{"t":720.95,"speech":1,"part":3},{"t":781.76,"pause":30,"label":"Checking time · Part 3"},{"t":811.76,"focus":4},{"t":811.76,"speech":1,"part":4},{"t":824.38,"pause":45,"label":"Reading time · Questions 31–40"},{"t":869.38,"speech":1,"part":4}];
  const partNames = { 1: 'Part 1 · Hiring a car', 2: 'Part 2 · A summer camp for children', 3: 'Part 3 · The history of advertising', 4: 'Part 4 · Roman roads' };
  window.LISTENING_TEST = { num: 14, name: 'Full Mock Test 4', audio: 'audio/listening-test14.mp3', minutes: 17, mb: 8, roles: ROLES, script: SCRIPT, Q, paper: PAPER, timeline: TIMELINE, partNames };
})();
