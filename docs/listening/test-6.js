// IELTS Listening · Practice Test 6 — content only. The exam engine is assets/listening-exam.js.
(() => {
  'use strict';
  // Speakers: label for the transcript, voice for tools/make_listening_audio.py
  const ROLES = {
    narrator:  { label: 'Narrator', voice: 'bm_george', speed: 0.92, lang: 'en-gb' },
    reception: { label: 'Receptionist', voice: 'bf_isabella', speed: 0.98, lang: 'en-gb' },
    david:     { label: 'David', voice: 'am_adam', speed: 0.98, lang: 'en-us' },
    sarah:     { label: 'Sarah', voice: 'af_nova', speed: 0.96, lang: 'en-us' },
    kate:      { label: 'Kate', voice: 'bf_emma', speed: 0.98, lang: 'en-gb' },
    raj:       { label: 'Librarian', voice: 'bm_fable', speed: 0.96, lang: 'en-gb' },
    lecturer:  { label: 'Lecturer', voice: 'am_onyx', speed: 0.95, lang: 'en-us' },
  };

  // Script: [role, text] lines, or ['pause', seconds, label], or ['focus', part]
  // {{text|n}} marks where the answer to question n is heard.
  const SCRIPT = [
    ['focus', 1],
    ['narrator', 'IELTS Listening. Practice Test 6.'],
    ['narrator', 'In the test, you will hear a number of different recordings and you will have to answer questions on what you hear. There will be time for you to read the instructions and questions, and you will have a chance to check your work. All the recordings will be played once only. The test is in four parts.'],
    ['narrator', 'Now turn to Part 1.'],
    ['narrator', 'Part 1. You will hear a man phoning a hotel to make a reservation. First, you have some time to look at questions 1 to 5.'],
    ['pause', 30, 'Reading time · Questions 1–5'],
    ['narrator', 'You will see that there is an example that has been done for you. On this occasion only, the conversation relating to this will be played first.'],
    ['reception', 'Good morning, Harbour View Hotel. How can I help you?'],
    ['david', "Hi. I'd like to book a room for next month, please. We'll be arriving on Friday the fourteenth of June."],
    ['reception', "Friday the fourteenth. Let me check what we have."],
    ['narrator', "The man will arrive on Friday the fourteenth of June, so 'Friday 14 June' has been written in the space. Now we shall begin. You should answer the questions as you listen, because you will not hear the recording a second time. Listen carefully and answer questions 1 to 5."],
    ['reception', 'Good morning, Harbour View Hotel. How can I help you?'],
    ['david', "Hi. I'd like to book a room for next month, please. We'll be arriving on Friday the fourteenth of June."],
    ['reception', "Friday the fourteenth. Let me check what we have. And how many nights will you be staying?"],
    ['david', "We were planning on three nights. Actually, no. We've decided to stay until the Tuesday morning, so that's {{four|1}} nights."],
    ['reception', 'Four nights. And what kind of room would you like?'],
    ['david', "There are two of us, plus our baby. We had a twin room last time, but this time we'd prefer a {{double|2}}."],
    ['reception', "No problem. Would you like a sea view? Those rooms are on the third floor and the top floor. The third floor is fully booked that weekend, but there's a lovely room on the {{top|3}} floor."],
    ['david', "That sounds perfect. Is there a lift?"],
    ['reception', "Yes, there is. Now, the sea view rooms are normally one hundred and sixty pounds a night. But for stays of four nights or more, we offer a lower rate, so it would be {{one hundred and forty-five|4}} pounds a night."],
    ['david', "Great. Does that include breakfast?"],
    ['reception', "It does. Breakfast is normally served in the restaurant, but the restaurant is being redecorated in June, so it'll be in the {{conservatory|5}}, which actually has a better view."],
    ['narrator', 'Before you hear the rest of the conversation, you have some time to look at questions 6 to 10.'],
    ['pause', 30, 'Reading time · Questions 6–10'],
    ['narrator', 'Now listen and answer questions 6 to 10.'],
    ['reception', 'Can I take your name, please?'],
    ['david', "Yes, it's David Ashworth. That's {{A, S, H, W, O, R, T, H|6}}."],
    ['reception', "Thank you, Mr Ashworth. What time do you expect to arrive? Our reception desk closes at ten in the evening."],
    ['david', "We're driving down after work, so we probably won't get there until about {{nine|7}}. Is that okay?"],
    ['reception', "That's fine. Is there anything you'll need for the baby?"],
    ['david', "Yes, could we have a {{cot|8}} in the room, please? We'll bring our own bedding for it."],
    ['reception', "Of course. I'll make a note of that. Will you need parking?"],
    ['david', 'Yes, we will. Does the hotel have a car park?'],
    ['reception', "We do, but it's very small, and it's kept for guests with disabilities. Most guests use the {{garage|9}} on Mill Street. It's just round the corner, and we can give you a discount ticket."],
    ['david', "Good. And finally, can you recommend anything to do while we're there?"],
    ['reception', "Well, many guests like to visit the castle, but it's closed on Mondays in June. I'd really recommend the boat trip to the {{island|10}}. You can see seals there, and the boats leave every hour from the harbour."],
    ['david', "That sounds great. Thank you very much."],
    ['narrator', 'That is the end of Part 1. You now have half a minute to check your answers to Part 1.'],
    ['pause', 30, 'Checking time · Part 1'],

    ['focus', 2],
    ['narrator', 'Now turn to Part 2.'],
    ['narrator', 'Part 2. You will hear the manager of a farmers market talking on local radio. First, you have some time to look at questions 11 to 15.'],
    ['pause', 30, 'Reading time · Questions 11–15'],
    ['narrator', 'Now listen carefully and answer questions 11 to 15.'],
    ['sarah', "Thanks for inviting me in. I'm Sarah, and I manage the Oakfield Farmers Market. I've got some news for listeners about the changes we're making this summer."],
    ['sarah', "First of all, we're moving. From next month, the market will be held on the playing field behind the town hall. Some people have assumed it's because we've outgrown the old site, and it's true we've grown a lot. But actually, {{the old car park is going to be turned into housing|11}}, so we had no choice."],
    ['sarah', "We're also changing our hours. We used to open from eight until one, which was too early for many families. {{From next month, we'll open at nine and close at two|12}}."],
    ['sarah', "Now, there's no cash machine at the new site, I'm afraid, and although most stalls now take cards, not all of them do, so do bring some cash. What is new is that {{there'll be a free bus|13}} running from the railway station every twenty minutes."],
    ['sarah', "And there's plenty going on this month. Last month we had face painting for the children, which was very popular, and we're planning a tasting competition for next month. But this month, {{a local chef will be giving cookery demonstrations|14}} using ingredients from the stalls, and {{there'll be live music|15}} from the town brass band throughout the morning."],
    ['narrator', 'Before you hear the rest of the talk, you have some time to look at questions 16 to 20.'],
    ['pause', 30, 'Reading time · Questions 16–20'],
    ['narrator', 'Now listen and answer questions 16 to 20.'],
    ['sarah', "Let me tell you about some of our stallholders. Hill Farm Dairy have been with us since the start, and this spring {{their blue cheese won a national award|16}}, so do try it."],
    ['sarah', "Green Valley Bakery used to give out free samples, but they've had to stop that, I'm afraid. However, {{they now offer home delivery|17}}, so if you can't get to the market, you can still order their bread."],
    ['sarah', "Orchard Fruits grow apples, pears and plums just outside town. {{Everything they sell is organic|18}}, and they're one of the few stalls that can say that."],
    ['sarah', "Coastline Fish {{only joined the market a few weeks ago|19}}. They bring fish straight from the boats at Westport every Saturday morning."],
    ['sarah', "And finally, Meadow Honey. Sadly, the owner, Mr Price, is retiring, so {{this summer will be their last at the market|20}}. Make sure you stock up while you can."],
    ['sarah', "So, I hope to see lots of you at our new site."],
    ['narrator', 'That is the end of Part 2. You now have half a minute to check your answers to Part 2.'],
    ['pause', 30, 'Checking time · Part 2'],

    ['focus', 3],
    ['narrator', 'Now turn to Part 3.'],
    ['narrator', 'Part 3. You will hear a student, Kate, talking to a university librarian about the research for her dissertation. First, you have some time to look at questions 21 to 25.'],
    ['pause', 30, 'Reading time · Questions 21–25'],
    ['narrator', 'Now listen carefully and answer questions 21 to 25.'],
    ['raj', "Hello, Kate. Come and sit down. Your dissertation is on green spaces in cities, isn't it? How's it going?"],
    ['kate', "Quite well. I've managed to narrow the topic down to the effect of parks on people's mental health, and I'm fine with referencing. The main problem is that {{most of the books I've found are quite old|21}}. I need more recent research."],
    ['raj', "That's very common. The main library catalogue is good for books, and some students start with Google Scholar, but it gives you far too many results. For recent research, I'd recommend you begin with {{the specialist database for environmental studies|22}}. It covers journal articles from the last few years."],
    ['kate', "And if the library doesn't have an article?"],
    ['raj', "You can order it through the interlibrary loan service. It's free for students now, and the limit used to be three requests, but it's been raised to ten. The only problem is that {{it can take up to two weeks|23}} to arrive, so don't leave it too late."],
    ['kate', "Okay. I'm also finding it hard to get through all the articles. Some of them are forty pages long."],
    ['raj', "You don't need to read every article from beginning to end. {{Read the abstract and the conclusion first|24}}, and then decide whether the whole thing is worth reading."],
    ['kate', "That makes sense. Is there any training I could do?"],
    ['raj', "There's a workshop on academic writing, but you said you're fine with that. I think you'd get most from {{the session on reference management software|25}}. It'll save you a lot of time."],
    ['kate', "Great, I'll book that."],
    ['narrator', 'Before you hear the rest of the discussion, you have some time to look at questions 26 to 30.'],
    ['pause', 30, 'Reading time · Questions 26–30'],
    ['narrator', 'Now listen and answer questions 26 to 30.'],
    ['raj', "Let me go through the steps for a good literature search. First, before you start searching, make a list of {{keywords|26}}, including different words with the same meaning, like park and green space."],
    ['kate', 'Okay.'],
    ['raj', "Then, when you get your results, use the filters on the left. Most students filter by subject, but the most useful thing for you is to limit the results by {{date|27}}, so you only see recent work."],
    ['kate', "Right. And what if new research comes out while I'm writing?"],
    ['raj', "Good question. Save your search, and the database will send you email {{alerts|28}} whenever something new matches it."],
    ['kate', "That's useful."],
    ['raj', "Another tip. Keep a {{record|29}} of every search you do, with the date and the keywords you used. You'll need to describe your method in the dissertation, and it's very hard to remember later."],
    ['kate', "I wish I'd done that already. Should we meet again?"],
    ['raj', "Yes. February is very busy for me, so let's meet again in early {{March|30}}, when you've done some more searching."],
    ['kate', "Great. Thank you."],
    ['narrator', 'That is the end of Part 3. You now have half a minute to check your answers to Part 3.'],
    ['pause', 30, 'Checking time · Part 3'],

    ['focus', 4],
    ['narrator', 'Now turn to Part 4.'],
    ['narrator', 'Part 4. You will hear a lecture about the development of solar power. First, you have some time to look at questions 31 to 40.'],
    ['pause', 45, 'Reading time · Questions 31–40'],
    ['narrator', 'Now listen carefully and answer questions 31 to 40.'],
    ['lecturer', "Good morning, everyone. Today I want to look at the history of solar power: how a scientific curiosity became one of the cheapest ways of producing electricity in the world."],
    ['lecturer', "The story begins in eighteen thirty-nine, in France. A young physicist called Edmond Becquerel, who was only {{nineteen|31}} years old at the time, was experimenting in his father's laboratory. He noticed that certain materials produced a small electric current when they were exposed to light. This is called the photovoltaic effect."],
    ['lecturer', "It took several decades before anyone made a practical device. In the eighteen eighties, an American inventor, Charles Fritts, made the first solar cells by coating a material called {{selenium|32}} with a thin layer of gold. They worked, but they were very inefficient. Only about {{one|33}} per cent of the sunlight was converted into electricity."],
    ['lecturer', "The real breakthrough came in nineteen fifty-four, at Bell Laboratories in the United States. Researchers there made a cell from {{silicon|34}}, which was far more efficient, and silicon is still used in most solar panels today. However, the cells were extremely expensive. So the first major use was not on Earth, but in space. From nineteen fifty-eight, solar cells were used to power {{satellites|35}}, where cost mattered much less than reliability."],
    ['lecturer', "In the nineteen seventies, the oil crisis led to new interest in solar energy, and prices began to fall. Solar panels became the obvious choice in remote places that weren't connected to the electricity network. For example, they were used on {{lighthouses|36}} and on offshore oil platforms."],
    ['lecturer', "But the biggest changes came in this century, and they were driven largely by government policy. In two thousand, Germany introduced a system in which households with solar panels were paid a fixed {{price|37}} for the electricity they sold to the grid. This created a huge market. Then manufacturers in China began producing panels on an enormous scale, and over the following decade, the cost of solar panels fell by around {{ninety|38}} per cent."],
    ['lecturer', "Of course, solar power still has limitations. The most obvious is that panels produce no power at {{night|39}}, and less on cloudy days. That's why so much research today is focused on storage, especially batteries."],
    ['lecturer', "And researchers are also developing new kinds of panels. One exciting area is panels that are {{transparent|40}}, which could replace ordinary windows, so that whole office buildings could generate their own electricity."],
    ['lecturer', "In the next lecture, we'll look at wind power."],
    ['narrator', 'That is the end of Part 4. That is the end of the listening test.'],
  ];

  // Questions. kind: gap | mcq | two | match
  const LIMIT_WN = 'ONE WORD AND/OR A NUMBER';
  const Q = {
    1:  { kind: 'gap', ans: ['4', 'four'], limit: 'wn' },
    2:  { kind: 'gap', ans: ['double'], limit: 'wn' },
    3:  { kind: 'gap', ans: ['top'], limit: 'wn' },
    4:  { kind: 'gap', ans: ['145'], limit: 'wn' },
    5:  { kind: 'gap', ans: ['conservatory'], limit: 'wn' },
    6:  { kind: 'gap', ans: ['ashworth'], limit: 'wn', key: 'Ashworth' },
    7:  { kind: 'gap', ans: ['9', 'nine', '9pm', '9.00', '21.00'], limit: 'wn', key: '9' },
    8:  { kind: 'gap', ans: ['cot'], limit: 'wn' },
    9:  { kind: 'gap', ans: ['garage'], limit: 'wn' },
    10: { kind: 'gap', ans: ['island'], limit: 'wn' },
    11: { kind: 'mcq', q: 'Why is the market moving to a new site?', opts: { A: 'It needs more space.', B: 'The old site will be used for housing.', C: 'Local residents complained.' }, ans: 'B' },
    12: { kind: 'mcq', q: 'The new opening hours will be', opts: { A: '8 am to 1 pm.', B: '9 am to 1 pm.', C: '9 am to 2 pm.' }, ans: 'C' },
    13: { kind: 'mcq', q: 'What is new at the market this summer?', opts: { A: 'a free bus service', B: 'a cash machine', C: 'card payment at every stall' }, ans: 'A' },
    14: { kind: 'two', pair: [14, 15], ans: ['B', 'D'] },
    15: { kind: 'two', pair: [14, 15], ans: ['B', 'D'] },
    16: { kind: 'match', label: 'Hill Farm Dairy', ans: 'A' },
    17: { kind: 'match', label: 'Green Valley Bakery', ans: 'D' },
    18: { kind: 'match', label: 'Orchard Fruits', ans: 'C' },
    19: { kind: 'match', label: 'Coastline Fish', ans: 'B' },
    20: { kind: 'match', label: 'Meadow Honey', ans: 'F' },
    21: { kind: 'mcq', q: 'What problem does Kate have with her research?', opts: { A: 'Her topic is too broad.', B: 'Many of her sources are not recent.', C: 'She finds referencing difficult.' }, ans: 'B' },
    22: { kind: 'mcq', q: 'Where does the librarian suggest Kate should start searching?', opts: { A: 'the main library catalogue', B: 'Google Scholar', C: 'a specialist database' }, ans: 'C' },
    23: { kind: 'mcq', q: 'What is the problem with the interlibrary loan service?', opts: { A: 'It can be slow.', B: 'Students have to pay for it.', C: 'Only three requests are allowed.' }, ans: 'A' },
    24: { kind: 'mcq', q: 'What does the librarian advise Kate to do with long articles?', opts: { A: 'divide them between several days', B: 'read selected sections first', C: 'make notes on every page' }, ans: 'B' },
    25: { kind: 'mcq', q: 'Kate will book a training session on', opts: { A: 'academic writing.', B: 'using the database.', C: 'reference management software.' }, ans: 'C' },
    26: { kind: 'gap', ans: ['keywords', 'key words'], limit: null, key: 'keywords' },
    27: { kind: 'gap', ans: ['date', 'dates'], limit: 'w' },
    28: { kind: 'gap', ans: ['alerts'], limit: 'w' },
    29: { kind: 'gap', ans: ['record'], limit: 'w' },
    30: { kind: 'gap', ans: ['march'], limit: 'w', key: 'March' },
    31: { kind: 'gap', ans: ['19', 'nineteen'], limit: 'wn' },
    32: { kind: 'gap', ans: ['selenium'], limit: 'wn' },
    33: { kind: 'gap', ans: ['1', 'one'], limit: 'wn' },
    34: { kind: 'gap', ans: ['silicon'], limit: 'wn' },
    35: { kind: 'gap', ans: ['satellites'], limit: 'wn' },
    36: { kind: 'gap', ans: ['lighthouses'], limit: 'wn' },
    37: { kind: 'gap', ans: ['price'], limit: 'wn' },
    38: { kind: 'gap', ans: ['90', 'ninety'], limit: 'wn' },
    39: { kind: 'gap', ans: ['night'], limit: 'wn' },
    40: { kind: 'gap', ans: ['transparent'], limit: 'wn' },
  };
  const TWO_OPTS = { A: 'face painting', B: 'cookery demonstrations', C: 'a tasting competition', D: 'live music', E: 'farm tours' };
  const STALLS = { A: 'has won a prize', B: 'is new to the market', C: 'sells only organic produce', D: 'delivers to customers’ homes', E: 'gives away free samples', F: 'will soon stop coming to the market' };

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
      <p class="instr">Complete the notes below. Write <b>${LIMIT_WN}</b> for each answer.</p>
      <div class="notes">
        <h4>Harbour View Hotel · Reservation</h4>
        <ul>
          <li>Arrival: <span class="example">Example: <u>Friday 14 June</u></span></li>
          <li>Length of stay: ${gap(1)} nights</li>
          <li>Room: a ${gap(2)} room with a sea view</li>
          <li>Floor: the ${gap(3)} floor</li>
          <li>Price per night: £ ${gap(4)}</li>
          <li>Breakfast served in the ${gap(5)}</li>
        </ul>
        <span class="h">Guest details</span>
        <ul>
          <li>Name: David ${gap(6)}</li>
          <li>Expected arrival time: about ${gap(7)} pm</li>
          <li>Request: a ${gap(8)} for the baby</li>
          <li>Parking: use the ${gap(9)} on Mill Street</li>
          <li>Recommended trip: boat trip to the ${gap(10)}</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="part" id="part-2" data-part="2" hidden>
    <div class="part-head"><h2>Part 2</h2><span class="label">Questions 11–20</span></div>
    <div class="qblock">
      <h3>Questions 11–13</h3>
      <p class="instr">Choose the correct letter, <b>A, B or C</b>.</p>
      <p class="instr"><b>Oakfield Farmers Market</b></p>
      ${[11, 12, 13].map(mcq).join('')}
    </div>
    <div class="qblock">
      <h3>Questions 14 and 15</h3>
      <p class="instr">Choose <b>TWO</b> letters, <b>A–E</b>.</p>
      ${twoBlock(14, 'Which <b>TWO</b> activities will take place at the market this month?', TWO_OPTS)}
    </div>
    <div class="qblock">
      <h3>Questions 16–20</h3>
      <p class="instr">What does Sarah say about each stall? Choose <b>FIVE</b> answers from the box and write the correct letter, <b>A–F</b>, next to Questions 16–20.</p>
      ${box('Stalls', STALLS)}
      ${matchRows([16, 17, 18, 19, 20], STALLS)}
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
      <p class="instr">Complete the notes below. Write <b>ONE WORD ONLY</b> for each answer.</p>
      <div class="notes">
        <h4>Steps for a literature search</h4>
        <ul>
          <li>Before searching, make a list of ${gap(26)}.</li>
          <li>Use the filters to limit results by ${gap(27)}.</li>
          <li>Save the search to receive email ${gap(28)}.</li>
          <li>Keep a ${gap(29)} of every search.</li>
          <li>Next meeting: early ${gap(30)}.</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="part" id="part-4" data-part="4" hidden>
    <div class="part-head"><h2>Part 4</h2><span class="label">Questions 31–40</span></div>
    <div class="qblock">
      <h3>Questions 31–40</h3>
      <p class="instr">Complete the notes below. Write <b>${LIMIT_WN}</b> for each answer.</p>
      <div class="notes">
        <h4>The development of solar power</h4>
        <span class="h">Early discoveries</span>
        <ul>
          <li>1839: Becquerel, aged ${gap(31)}, discovered the photovoltaic effect.</li>
          <li>1880s: Fritts made cells from ${gap(32)} coated with gold.</li>
          <li>Efficiency: only about ${gap(33)} per cent.</li>
        </ul>
        <span class="h">20th century</span>
        <ul>
          <li>1954: Bell Laboratories made a cell from ${gap(34)}.</li>
          <li>From 1958: used to power ${gap(35)}.</li>
          <li>1970s: used in remote places, e.g. on ${gap(36)} and oil platforms.</li>
        </ul>
        <span class="h">21st century</span>
        <ul>
          <li>Germany: households paid a fixed ${gap(37)} for electricity sold to the grid.</li>
          <li>Chinese manufacturing: cost of panels fell by about ${gap(38)} per cent.</li>
        </ul>
        <span class="h">Challenges and the future</span>
        <ul>
          <li>No power is produced at ${gap(39)}, so storage is needed.</li>
          <li>New panels that are ${gap(40)} could replace windows.</li>
        </ul>
      </div>
    </div>
  </section>`;

  // Part changes and reading/checking pauses in the recording (seconds) — filled in by tools/make_listening_audio.py
  const TIMELINE = [{"t":1.0,"focus":1},{"t":35.3,"pause":30,"label":"Reading time · Questions 1–5"},{"t":65.3,"speech":1,"part":1},{"t":180.89,"pause":30,"label":"Reading time · Questions 6–10"},{"t":210.89,"speech":1,"part":1},{"t":283.88,"pause":30,"label":"Checking time · Part 1"},{"t":313.88,"focus":2},{"t":313.88,"speech":1,"part":2},{"t":326.84,"pause":30,"label":"Reading time · Questions 11–15"},{"t":356.84,"speech":1,"part":2},{"t":434.13,"pause":30,"label":"Reading time · Questions 16–20"},{"t":464.13,"speech":1,"part":2},{"t":525.39,"pause":30,"label":"Checking time · Part 2"},{"t":555.39,"focus":3},{"t":555.39,"speech":1,"part":3},{"t":571.17,"pause":30,"label":"Reading time · Questions 21–25"},{"t":601.17,"speech":1,"part":3},{"t":697.22,"pause":30,"label":"Reading time · Questions 26–30"},{"t":727.22,"speech":1,"part":3},{"t":797.03,"pause":30,"label":"Checking time · Part 3"},{"t":827.03,"focus":4},{"t":827.03,"speech":1,"part":4},{"t":839.07,"pause":45,"label":"Reading time · Questions 31–40"},{"t":884.07,"speech":1,"part":4}];
  const partNames = { 1: 'Part 1 · Booking a hotel room', 2: 'Part 2 · Oakfield Farmers Market', 3: 'Part 3 · Meeting a librarian', 4: 'Part 4 · The development of solar power' };
  window.LISTENING_TEST = { num: 6, audio: 'audio/listening-test6.mp3', minutes: 17, mb: 8, roles: ROLES, script: SCRIPT, Q, paper: PAPER, timeline: TIMELINE, partNames };
})();
