// IELTS Listening · Practice Test 2 — content only. The exam engine is assets/listening-exam.js.
(() => {
  'use strict';
  // Speakers: label for the transcript, voice for tools/make_listening_audio.py
  const ROLES = {
    narrator: { label: 'Narrator', voice: 'bm_george', speed: 0.92, lang: 'en-gb' },
    anna:     { label: 'Anna', voice: 'bf_isabella', speed: 1.0, lang: 'en-gb' },
    david:    { label: 'David', voice: 'am_michael', speed: 0.98, lang: 'en-us' },
    presenter:{ label: 'Presenter', voice: 'bm_daniel', speed: 0.97, lang: 'en-gb' },
    moore:    { label: 'Dr Moore', voice: 'bf_emma', speed: 0.95, lang: 'en-gb' },
    leo:      { label: 'Leo', voice: 'am_puck', speed: 1.0, lang: 'en-us' },
    priya:    { label: 'Priya', voice: 'af_heart', speed: 0.98, lang: 'en-us' },
    lecturer: { label: 'Lecturer', voice: 'bm_fable', speed: 0.95, lang: 'en-gb' },
  };

  // Script: [role, text] lines, or ['pause', seconds, label], or ['focus', part]
  // {{text|n}} marks where the answer to question n is heard.
  const SCRIPT = [
    ['focus', 1],
    ['narrator', 'IELTS Listening. Practice Test 2.'],
    ['narrator', 'In the test, you will hear a number of different recordings and you will have to answer questions on what you hear. There will be time for you to read the instructions and questions, and you will have a chance to check your work. All the recordings will be played once only. The test is in four parts.'],
    ['narrator', 'Now turn to Part 1.'],
    ['narrator', 'Part 1. You will hear a man phoning a holiday company to book a cottage. First, you have some time to look at questions 1 to 5.'],
    ['pause', 30, 'Reading time · Questions 1–5'],
    ['narrator', 'You will see that there is an example that has been done for you. On this occasion only, the conversation relating to this will be played first.'],
    ['anna', 'Good morning, Country Cottage Holidays, Anna speaking. How can I help you?'],
    ['david', "Hello. I'd like to book a cottage for a week in the summer, if you still have anything available. There'll be four of us."],
    ['anna', "Four people. That's fine, most of our cottages sleep four or more."],
    ['narrator', "The man wants to book for four people, so 'four' has been written in the space. Now we shall begin. You should answer the questions as you listen, because you will not hear the recording a second time. Listen carefully and answer questions 1 to 5."],
    ['anna', 'Good morning, Country Cottage Holidays, Anna speaking. How can I help you?'],
    ['david', "Hello. I'd like to book a cottage for a week in the summer, if you still have anything available. There'll be four of us."],
    ['anna', "Four people. That's fine, most of our cottages sleep four or more. Can I start with your name, please?"],
    ['david', "Yes, it's David Hargreaves."],
    ['anna', 'Could you spell your surname for me?'],
    ['david', "Of course. It's {{H, A, R, G, R, E, A, V, E, S|1}}."],
    ['anna', 'Thank you. Now, did you have a particular cottage in mind?'],
    ['david', "We were looking at the Old Barn on your website, the one with the big kitchen."],
    ['anna', "I'm afraid the Old Barn is already fully booked for August. But we have a very similar property nearby called the Old {{Mill|2}}. It's next to the river and it has the same number of bedrooms."],
    ['david', 'The Old Mill. That sounds lovely. Could we have that one?'],
    ['anna', 'Certainly. And what date would you like to arrive?'],
    ['david', "We were thinking of the fifteenth of August. Oh, wait, no, that's a Sunday. Let's say the {{fourteenth|3}}, the Saturday."],
    ['anna', 'Saturday the fourteenth of August. And how long would you like to stay? You mentioned a week.'],
    ['david', "We did say a week, but my wife has to be back at work earlier than we thought, so just {{five|4}} nights, please."],
    ['anna', "Five nights. That's no problem. The price for the Old Mill is usually ninety-five pounds a night in August, but because you're staying fewer than seven nights, there's a short-break rate of {{eighty-five|5}} pounds a night."],
    ['david', 'Eighty-five. Good, that helps.'],
    ['narrator', 'Before you hear the rest of the conversation, you have some time to look at questions 6 to 10.'],
    ['pause', 30, 'Reading time · Questions 6–10'],
    ['narrator', 'Now listen and answer questions 6 to 10.'],
    ['david', 'Can you tell me a bit about the cottage? Does it have any outdoor space?'],
    ['anna', "Yes, there's a private garden with a table and chairs, and there's a {{barbecue|6}} as well, which guests really enjoy. There's no swimming pool, I'm afraid, but you can swim in the river in good weather."],
    ['david', 'That sounds fine. And we have a dog. Are pets allowed?'],
    ['anna', "They are. Most of our cottages only allow one dog, but the Old Mill takes a maximum of {{two|7}}, so that's no problem."],
    ['david', "Great. What about shops? We'd like to buy food when we arrive."],
    ['anna', "The nearest supermarket is about eight miles away, in the town. But there's a small shop in the {{village|8}}, just ten minutes' walk from the cottage, which sells most things you'll need."],
    ['david', 'And how do we get the key?'],
    ['anna', "The owners live in the {{farmhouse|9}} next door. Just knock on their door when you arrive, and they'll give you the key and show you round."],
    ['david', 'Perfect. And how do I pay?'],
    ['anna', "We'll need a deposit of a hundred pounds to confirm the booking. Normally we ask for it by Thursday, but as our office is closed this Thursday, you can pay it any time before {{Friday|10}}. The rest is due two weeks before you arrive."],
    ['david', "That's fine. Thank you very much for your help."],
    ['narrator', 'That is the end of Part 1. You now have half a minute to check your answers to Part 1.'],
    ['pause', 30, 'Checking time · Part 1'],

    ['focus', 2],
    ['narrator', 'Now turn to Part 2.'],
    ['narrator', 'Part 2. You will hear a radio presenter talking about a summer festival in the town of Ashford. First, you have some time to look at questions 11 to 15.'],
    ['pause', 30, 'Reading time · Questions 11–15'],
    ['narrator', 'Now listen carefully and answer questions 11 to 15.'],
    ['presenter', "Good afternoon, and welcome to What's On. Today I want to tell you about the Ashford Summer Festival, which takes place this coming weekend. Many listeners will remember the very first festival, which was a small event in the town square. Twenty years later, it has grown enormously, although it's actually the {{tenth|11}} festival, because for several years it was only held every other year."],
    ['presenter', "There's one big change this year. For a long time, the main stage was in the town square, and last year it moved to the old market hall because of the rain. This year, though, the organisers have decided to put it in {{Riverside Park|12}}, where there is far more space for the audience."],
    ['presenter', "Now, tickets. Entry to the festival site during the day is free, as always, and you don't need to book. However, for the evening concerts, numbers are limited, and tickets {{must be booked online|13}} in advance. They won't be sold at the gate."],
    ['presenter', "As for getting there, parking in the town centre will be very limited, so please don't come by car. Some people will cycle, of course, but the organisers' main advice is to use the {{park-and-ride buses|14}}, which will run every ten minutes from the edge of town."],
    ['presenter', "And what's new? Well, the food market and the fireworks are both back, as popular as ever. But for the first time there will be a special {{area just for children|15}}, with games, face painting and a small stage for young performers."],
    ['narrator', 'Before you hear the rest of the talk, you have some time to look at questions 16 to 20.'],
    ['pause', 30, 'Reading time · Questions 16–20'],
    ['narrator', 'Now listen and answer questions 16 to 20.'],
    ['presenter', "So, let's look at the programme day by day. The festival opens on {{Friday evening with a jazz concert|17}} on the main stage. Then {{on Saturday morning, the highlight for many families will be the street parade|16}}, which starts at ten o'clock and goes along the high street."],
    ['presenter', "The food market, which last year was held on Sunday, has moved to {{Friday|19}} this time, so you can enjoy dinner from the stalls before the jazz concert. {{On Sunday afternoon, there's a craft workshop|18}} in the library, where you can learn to make pottery and jewellery."],
    ['presenter', "And finally, the festival will close {{on Sunday night with the fireworks|20}} over the river. Don't miss it."],
    ['narrator', 'That is the end of Part 2. You now have half a minute to check your answers to Part 2.'],
    ['pause', 30, 'Checking time · Part 2'],

    ['focus', 3],
    ['narrator', 'Now turn to Part 3.'],
    ['narrator', 'Part 3. You will hear two students, Leo and Priya, talking to their tutor about a research project on how students use the university library. First, you have some time to look at questions 21 to 26.'],
    ['pause', 30, 'Reading time · Questions 21–26'],
    ['narrator', 'Now listen carefully and answer questions 21 to 26.'],
    ['moore', 'So, Leo, Priya, how is the library project going?'],
    ['leo', "Pretty well, thanks, Dr Moore. We've finished collecting our data, and a couple of things really surprised us."],
    ['priya', "The first was {{how many students work in groups|21}}. We expected most people to study alone, but nearly half of the people we counted were sitting with others."],
    ['leo', "And the other was {{how early the library fills up|22}}. By nine in the morning, most of the desks on the ground floor are already taken."],
    ['moore', 'What about printed books? Are people still using them?'],
    ['priya', "Less than we expected, but we'd read that borrowing has gone down, so that wasn't really a surprise. And online journals are used a lot, as you'd imagine."],
    ['moore', 'Remind me why you chose this topic.'],
    ['leo', "Well, we'd read a few articles about libraries, but the real reason is that {{we both work part-time at the library|23}}, so we see the problems every day."],
    ['moore', 'And how did you collect your data?'],
    ['priya', "We used observation. We walked round the library every hour and counted how many people were doing different things. The trouble was that {{when students noticed us watching, they started behaving differently|24}}, for example putting their phones away. The staff were very helpful, and it didn't take too long, but that was a real weakness."],
    ['moore', "It's a common problem, and you should discuss it in your report. I'd also suggest {{interviewing some of the librarians|25}}. They'll have a long-term view that your observations can't give you. A comparison with another university would be interesting, but it's too much work at this stage."],
    ['leo', "OK. And we've divided up the writing. I'm doing the introduction and the charts."],
    ['priya', "And I'll {{write the recommendations|26}}, since I've done most of the interviews with students."],
    ['narrator', 'Before you hear the rest of the discussion, you have some time to look at questions 27 to 30.'],
    ['pause', 30, 'Reading time · Questions 27–30'],
    ['narrator', 'Now listen and answer questions 27 to 30.'],
    ['moore', 'So, what are you going to recommend for each part of the library?'],
    ['priya', "For the main study area on the ground floor, the biggest complaint was that there's nowhere to charge laptops, so we'll recommend that they {{install more power sockets|27}}. People also asked for longer opening hours, but the library already opens until midnight, so we don't think that's necessary."],
    ['leo', "The third floor is the silent study area. It's quiet enough, but it's quite dark, especially in winter, so we'll suggest they {{improve the lighting|28}}."],
    ['priya', "In the basement, there are lots of students trying to work in groups and disturbing each other, so we'll recommend that they {{create more group study rooms|29}} down there."],
    ['leo', "And finally, the twenty-four-hour room. Some people wanted to be allowed to eat there, but the cleaners were strongly against it. What it really needs is {{more computers|30}}, because there are only six for the whole room."],
    ['moore', 'Those all sound sensible. Well done, both of you.'],
    ['narrator', 'That is the end of Part 3. You now have half a minute to check your answers to Part 3.'],
    ['pause', 30, 'Checking time · Part 3'],

    ['focus', 4],
    ['narrator', 'Now turn to Part 4.'],
    ['narrator', 'Part 4. You will hear a lecture about the history of glass. First, you have some time to look at questions 31 to 40.'],
    ['pause', 45, 'Reading time · Questions 31–40'],
    ['narrator', 'Now listen carefully and answer questions 31 to 40.'],
    ['lecturer', "Good morning. Today we're going to look at a material that we see and use every day without thinking about it, and that's glass."],
    ['lecturer', 'The first glass objects were made about four and a half thousand years ago in Mesopotamia, in what is now Iraq. These were not windows or bottles, but small {{beads|31}}, probably used as jewellery. Early glass was usually brightly coloured and very difficult to make, so it was treated as a {{luxury|32}} item that only the wealthy could afford.'],
    ['lecturer', 'This changed with the invention of glassblowing, probably around fifty BC. By blowing air through a tube into molten glass, craftsmen could make vessels quickly and in large numbers. For the first time, glass became {{cheap|33}} enough for everyday use, and drinking cups and storage jars became common.'],
    ['lecturer', 'The Romans also used glass in windows, especially in public baths. However, Roman window glass was thick and cloudy. It let light in, but it was not fully {{transparent|34}}, so people could not see clearly through it.'],
    ['lecturer', 'In the Middle Ages, the most famous centre of glassmaking was Venice. In twelve ninety-one, the city ordered all its glassmakers to move to the nearby island of Murano. The official reason was the danger of {{fire|35}}, since the furnaces could easily set the city’s wooden buildings alight. But there was another reason: the government wanted to protect the secrets of the industry. Glassmakers enjoyed high status, but they were not allowed to {{leave|36}} the republic, and those who did could be severely punished.'],
    ['lecturer', 'Let’s jump forward to the twentieth century. For hundreds of years, making large, flat sheets of glass was slow and expensive, because the glass had to be ground and polished by hand. Then, in the nineteen fifties, the British engineer Alastair Pilkington developed the float glass process. In this method, molten glass is poured onto a bed of liquid {{tin|37}}. The glass floats on the surface and spreads out evenly, producing a sheet with a perfectly {{flat|38}} surface that needs no polishing. Almost all window glass today is still made this way.'],
    ['lecturer', "Finally, what does the future hold? One development is so-called smart glass, which can change its colour or darkness when an electric current is applied. In office buildings, this can reduce the amount of {{heat|39}} that comes in through the windows in summer, which saves energy on air conditioning. And researchers are now working on glass that can repair small {{cracks|40}} by itself, which could make phone screens and car windscreens last much longer."],
    ['lecturer', "So, glass has come a long way from those first beads. Next week, we'll look at another ancient material: concrete."],
    ['narrator', 'That is the end of Part 4. That is the end of the listening test.'],
  ];

  // Questions. kind: gap | mcq | two | match
  const LIMIT_WN = 'ONE WORD AND/OR A NUMBER';
  const Q = {
    1:  { kind: 'gap', ans: ['hargreaves'], limit: 'wn' },
    2:  { kind: 'gap', ans: ['mill'], limit: 'wn' },
    3:  { kind: 'gap', ans: ['14', '14th', 'fourteenth'], limit: 'wn' },
    4:  { kind: 'gap', ans: ['5', 'five'], limit: 'wn' },
    5:  { kind: 'gap', ans: ['85', 'eighty-five', 'eighty five'], limit: 'wn' },
    6:  { kind: 'gap', ans: ['barbecue', 'barbeque', 'bbq'], limit: 'wn' },
    7:  { kind: 'gap', ans: ['2', 'two'], limit: 'wn' },
    8:  { kind: 'gap', ans: ['village'], limit: 'wn' },
    9:  { kind: 'gap', ans: ['farmhouse'], limit: 'wn' },
    10: { kind: 'gap', ans: ['friday'], limit: 'wn' },
    11: { kind: 'mcq', q: 'This year’s festival is the', opts: { A: 'first.', B: 'tenth.', C: 'twentieth.' }, ans: 'B' },
    12: { kind: 'mcq', q: 'This year the main stage will be in', opts: { A: 'the town square.', B: 'the old market hall.', C: 'Riverside Park.' }, ans: 'C' },
    13: { kind: 'mcq', q: 'Tickets for the evening concerts', opts: { A: 'are free.', B: 'must be booked online.', C: 'can be bought at the gate.' }, ans: 'B' },
    14: { kind: 'mcq', q: 'The organisers advise visitors to travel by', opts: { A: 'car.', B: 'bicycle.', C: 'bus.' }, ans: 'C' },
    15: { kind: 'mcq', q: 'What is new at this year’s festival?', opts: { A: 'a children’s area', B: 'a food market', C: 'a fireworks display' }, ans: 'A' },
    16: { kind: 'match', label: 'Street parade', ans: 'B' },
    17: { kind: 'match', label: 'Jazz concert', ans: 'A' },
    18: { kind: 'match', label: 'Craft workshop', ans: 'C' },
    19: { kind: 'match', label: 'Food market', ans: 'A' },
    20: { kind: 'match', label: 'Fireworks', ans: 'C' },
    21: { kind: 'two', pair: [21, 22], ans: ['A', 'C'] },
    22: { kind: 'two', pair: [21, 22], ans: ['A', 'C'] },
    23: { kind: 'mcq', q: 'Why did the students choose this topic?', opts: { A: 'Their tutor suggested it.', B: 'They both work in the library.', C: 'They read an article about it.' }, ans: 'B' },
    24: { kind: 'mcq', q: 'What was the main problem with their observation method?', opts: { A: 'It took too much time.', B: 'Library staff objected to it.', C: 'Students behaved differently when watched.' }, ans: 'C' },
    25: { kind: 'mcq', q: 'The tutor suggests that the students should', opts: { A: 'interview some librarians.', B: 'compare their results with another university.', C: 'include more statistics.' }, ans: 'A' },
    26: { kind: 'mcq', q: 'Priya will be responsible for', opts: { A: 'the charts.', B: 'the introduction.', C: 'the recommendations.' }, ans: 'C' },
    27: { kind: 'match', label: 'ground-floor study area', ans: 'A' },
    28: { kind: 'match', label: 'third floor', ans: 'D' },
    29: { kind: 'match', label: 'basement', ans: 'C' },
    30: { kind: 'match', label: '24-hour room', ans: 'E' },
    31: { kind: 'gap', ans: ['beads'], limit: 'w' },
    32: { kind: 'gap', ans: ['luxury'], limit: 'w' },
    33: { kind: 'gap', ans: ['cheap'], limit: 'w' },
    34: { kind: 'gap', ans: ['transparent'], limit: 'w' },
    35: { kind: 'gap', ans: ['fire', 'fires'], limit: 'w' },
    36: { kind: 'gap', ans: ['leave'], limit: 'w' },
    37: { kind: 'gap', ans: ['tin'], limit: 'w' },
    38: { kind: 'gap', ans: ['flat'], limit: 'w' },
    39: { kind: 'gap', ans: ['heat'], limit: 'w' },
    40: { kind: 'gap', ans: ['cracks'], limit: 'w' },
  };
  const DAYS = { A: 'Friday', B: 'Saturday', C: 'Sunday' };
  const TWO_OPTS = { A: 'how many students work in groups', B: 'how popular printed books still are', C: 'how early the library becomes busy', D: 'how few students use online journals', E: 'how many students eat in the library' };
  const RECS = { A: 'install more power sockets', B: 'extend the opening hours', C: 'provide more group study rooms', D: 'improve the lighting', E: 'add more computers', F: 'allow food and drink' };

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
        <h4>Country Cottage Holidays · Booking form</h4>
        <div class="line"><span>Number of people:</span><span class="example">Example: <u>four</u></span></div>
        <div class="line"><span>Name:</span><span>David ${gap(1)}</span></div>
        <div class="line"><span>Cottage:</span><span>The Old ${gap(2)}</span></div>
        <div class="line"><span>Arrival date:</span><span>Saturday ${gap(3)} August</span></div>
        <div class="line"><span>Length of stay:</span><span>${gap(4)} nights</span></div>
        <div class="line"><span>Price per night:</span><span>£ ${gap(5)}</span></div>
        <div class="sub">The cottage</div>
        <div class="line"><span>Outdoor facilities:</span><span>private garden and a ${gap(6)}</span></div>
        <div class="line"><span>Pets:</span><span>a maximum of ${gap(7)} dogs</span></div>
        <div class="line"><span>Nearest shop:</span><span>in the ${gap(8)}</span></div>
        <div class="line"><span>Key:</span><span>collect from the ${gap(9)} next door</span></div>
        <div class="line"><span>Deposit of £100:</span><span>pay before ${gap(10)}</span></div>
      </div>
    </div>
  </section>

  <section class="part" id="part-2" data-part="2" hidden>
    <div class="part-head"><h2>Part 2</h2><span class="label">Questions 11–20</span></div>
    <div class="qblock">
      <h3>Questions 11–15</h3>
      <p class="instr">Choose the correct letter, <b>A, B or C</b>.</p>
      ${[11, 12, 13, 14, 15].map(mcq).join('')}
    </div>
    <div class="qblock">
      <h3>Questions 16–20</h3>
      <p class="instr">On which day will each event take place? Choose the correct letter, <b>A, B or C</b>, next to Questions 16–20. <b>NB</b> You may use any letter more than once.</p>
      ${box('Days', DAYS)}
      ${matchRows([16, 17, 18, 19, 20], DAYS)}
    </div>
  </section>

  <section class="part" id="part-3" data-part="3" hidden>
    <div class="part-head"><h2>Part 3</h2><span class="label">Questions 21–30</span></div>
    <div class="qblock">
      <h3>Questions 21 and 22</h3>
      <p class="instr">Choose <b>TWO</b> letters, <b>A–E</b>.</p>
      <div class="mcq" data-q="21" data-two="1">
        <div class="q"><span class="qn">21–22</span><span>Which <b>TWO</b> findings surprised the students?</span></div>
        ${Object.entries(TWO_OPTS).map(([k, v]) => `<label data-opt="${k}"><input type="checkbox" value="${k}" data-two="1"><b>${k}</b><span>${v}</span></label>`).join('')}
      </div>
    </div>
    <div class="qblock">
      <h3>Questions 23–26</h3>
      <p class="instr">Choose the correct letter, <b>A, B or C</b>.</p>
      ${[23, 24, 25, 26].map(mcq).join('')}
    </div>
    <div class="qblock">
      <h3>Questions 27–30</h3>
      <p class="instr">What do the students recommend for each part of the library? Choose <b>FOUR</b> answers from the box and write the correct letter, <b>A–F</b>, next to Questions 27–30.</p>
      ${box('Recommendations', RECS)}
      ${matchRows([27, 28, 29, 30], RECS)}
    </div>
  </section>

  <section class="part" id="part-4" data-part="4" hidden>
    <div class="part-head"><h2>Part 4</h2><span class="label">Questions 31–40</span></div>
    <div class="qblock">
      <h3>Questions 31–40</h3>
      <p class="instr">Complete the notes below. Write <b>ONE WORD ONLY</b> for each answer.</p>
      <div class="notes">
        <h4>The history of glass</h4>
        <span class="h">Early glass</span>
        <ul>
          <li>The first glass objects, made in Mesopotamia, were probably ${gap(31)}.</li>
          <li>Glass was a ${gap(32)} item that only the rich could buy.</li>
        </ul>
        <span class="h">Glassblowing (about 50 BC)</span>
        <ul>
          <li>Made glass ${gap(33)} enough for everyday objects.</li>
          <li>Roman window glass was thick and not fully ${gap(34)}.</li>
        </ul>
        <span class="h">Venice</span>
        <ul>
          <li>Glassmakers moved to Murano because of the danger of ${gap(35)}.</li>
          <li>They were not permitted to ${gap(36)} the republic.</li>
        </ul>
        <span class="h">Float glass (1950s)</span>
        <ul>
          <li>Molten glass is poured onto liquid ${gap(37)}.</li>
          <li>The result is a perfectly ${gap(38)} surface.</li>
        </ul>
        <span class="h">The future</span>
        <ul>
          <li>Smart glass can reduce the ${gap(39)} entering buildings.</li>
          <li>New glass may repair small ${gap(40)} by itself.</li>
        </ul>
      </div>
    </div>
  </section>`;

  // Part changes and reading/checking pauses in the recording (seconds) — filled in by the audio generator
  const TIMELINE = [{"t":1.0,"focus":1},{"t":35.43,"pause":30,"label":"Reading time · Questions 1–5"},{"t":65.43,"speech":1,"part":1},{"t":203.79,"pause":30,"label":"Reading time · Questions 6–10"},{"t":233.79,"speech":1,"part":1},{"t":313.29,"pause":30,"label":"Checking time · Part 1"},{"t":343.29,"focus":2},{"t":343.29,"speech":1,"part":2},{"t":357.02,"pause":30,"label":"Reading time · Questions 11–15"},{"t":387.02,"speech":1,"part":2},{"t":473.0,"pause":30,"label":"Reading time · Questions 16–20"},{"t":503.0,"speech":1,"part":2},{"t":548.78,"pause":30,"label":"Checking time · Part 2"},{"t":578.78,"focus":3},{"t":578.78,"speech":1,"part":3},{"t":596.8,"pause":30,"label":"Reading time · Questions 21–26"},{"t":626.8,"speech":1,"part":3},{"t":740.7,"pause":30,"label":"Reading time · Questions 27–30"},{"t":770.7,"speech":1,"part":3},{"t":838.59,"pause":30,"label":"Checking time · Part 3"},{"t":868.59,"focus":4},{"t":868.59,"speech":1,"part":4},{"t":879.99,"pause":45,"label":"Reading time · Questions 31–40"},{"t":924.99,"speech":1,"part":4}];
  const partNames = { 1: 'Part 1 · Booking a holiday cottage', 2: 'Part 2 · Ashford Summer Festival', 3: 'Part 3 · Library research project', 4: 'Part 4 · The history of glass' };
  window.LISTENING_TEST = { num: 2, audio: 'audio/listening-test2.mp3', minutes: 18, mb: 9, roles: ROLES, script: SCRIPT, Q, paper: PAPER, timeline: TIMELINE, partNames };
})();
