// IELTS Listening · Full Mock Test 3 — content only. The exam engine is assets/listening-exam.js.
// Kept for the mock test: this test is not listed with the practice tests.
(() => {
  'use strict';
  // Speakers: label for the transcript, voice for tools/make_listening_audio.py
  const ROLES = {
    narrator: { label: 'Narrator', voice: 'bm_george', speed: 0.92, lang: 'en-gb' },
    agent:    { label: 'Letting agent', voice: 'bm_fable', speed: 0.98, lang: 'en-gb' },
    anna:     { label: 'Anna', voice: 'af_bella', speed: 0.98, lang: 'en-us' },
    supervisor: { label: 'Supervisor', voice: 'bf_emma', speed: 0.97, lang: 'en-gb' },
    nadia:    { label: 'Nadia', voice: 'bf_isabella', speed: 0.98, lang: 'en-gb' },
    owen:     { label: 'Owen', voice: 'am_liam', speed: 0.98, lang: 'en-us' },
    clarke:   { label: 'Dr Clarke', voice: 'af_sarah', speed: 0.96, lang: 'en-us' },
    lecturer: { label: 'Lecturer', voice: 'bm_daniel', speed: 0.95, lang: 'en-gb' },
  };

  // Script: [role, text] lines, or ['pause', seconds, label], or ['focus', part]
  // {{text|n}} marks where the answer to question n is heard.
  const SCRIPT = [
    ['focus', 1],
    ['narrator', 'IELTS Listening. Full Mock Test 3.'],
    ['narrator', 'In the test, you will hear a number of different recordings and you will have to answer questions on what you hear. There will be time for you to read the instructions and questions, and you will have a chance to check your work. All the recordings will be played once only. The test is in four parts.'],
    ['narrator', 'Now turn to Part 1.'],
    ['narrator', 'Part 1. You will hear a woman talking to a letting agent about renting a flat. First, you have some time to look at questions 1 to 5.'],
    ['pause', 30, 'Reading time · Questions 1–5'],
    ['narrator', 'You will see that there is an example that has been done for you. On this occasion only, the conversation relating to this will be played first.'],
    ['agent', 'Good morning, Parkside Lettings.'],
    ['anna', "Hello. I'm looking for a flat to rent, and I saw your advertisement online."],
    ['agent', "Lovely. Are you looking for a one-bedroom or two-bedroom flat?"],
    ['anna', "Just one bedroom. It's only for me."],
    ['narrator', "The woman wants a flat with one bedroom, so 'one' has been written in the space. Now we shall begin. You should answer the questions as you listen, because you will not hear the recording a second time. Listen carefully and answer questions 1 to 5."],
    ['agent', 'Good morning, Parkside Lettings.'],
    ['anna', "Hello. I'm looking for a flat to rent, and I saw your advertisement online."],
    ['agent', "Lovely. Are you looking for a one-bedroom or two-bedroom flat?"],
    ['anna', "Just one bedroom. It's only for me."],
    ['agent', "I'll take some details. What's your name?"],
    ['anna', "Anna {{Novak|1}}. That's N, O, V, A, K."],
    ['agent', 'And what do you do, Anna?'],
    ['anna', "I've just finished my studies, actually, and I've started work as a {{nurse|2}} at the City Hospital."],
    ['agent', "Congratulations. And what's your budget?"],
    ['anna', "I'd prefer not to pay more than nine hundred a month. Actually, let's say {{eight hundred and fifty|3}} pounds, because I'll have bills to pay as well."],
    ['agent', 'Any particular area?'],
    ['anna', "The hospital runs a bus from the city centre, so I don't need to live close to it. But I'd like to be near the {{station|4}}, because I often visit my parents at weekends."],
    ['agent', "Is there anything the flat must have?"],
    ['anna', "Yes. I have a small dog, so I'd need a {{garden|5}}, or at least some outdoor space. Parking isn't important, because I don't have a car."],
    ['narrator', 'Before you hear the rest of the conversation, you have some time to look at questions 6 to 10.'],
    ['pause', 30, 'Reading time · Questions 6–10'],
    ['narrator', 'Now listen and answer questions 6 to 10.'],
    ['agent', "I think I have something for you. It's a ground-floor flat at number two, {{Mill|6}} Street. That's just five minutes' walk from the station, and it has a small garden at the back. The landlord is happy to accept pets."],
    ['anna', 'That sounds perfect. What does the rent include?'],
    ['agent', "It's eight hundred and twenty a month, and that includes {{water|7}}. You'd pay for electricity and the internet yourself."],
    ['anna', 'And is there a deposit?'],
    ['agent', "Yes. The deposit is {{five|8}} weeks' rent. You get it back at the end, as long as the flat is in good condition."],
    ['anna', 'Can I come and see it?'],
    ['agent', "Of course. The current tenant is there on Tuesday, so it would be better to go on {{Wednesday|9}}. Shall we say eleven o'clock?"],
    ['anna', "Yes, that's fine. Do I need to bring anything?"],
    ['agent', "If you'd like to apply, please bring some identification and proof of {{income|10}}, such as a letter from your employer."],
    ['anna', "Okay. Thanks very much."],
    ['narrator', 'That is the end of Part 1. You now have half a minute to check your answers to Part 1.'],
    ['pause', 30, 'Checking time · Part 1'],

    ['focus', 2],
    ['narrator', 'Now turn to Part 2.'],
    ['narrator', 'Part 2. You will hear a supervisor giving a safety talk to new staff at a supermarket distribution centre. First, you have some time to look at questions 11 to 16.'],
    ['pause', 30, 'Reading time · Questions 11–16'],
    ['narrator', 'Now listen carefully and answer questions 11 to 16.'],
    ['supervisor', "Good morning, and welcome to the Northgate distribution centre. Before you start work, I'm going to explain some of the safety rules in different parts of the building."],
    ['supervisor', "Let's start with the loading bay, where the lorries arrive. Everyone gets safety boots, which you must wear everywhere in the building. But in the loading bay you also need to wear {{gloves|11}}, because the edges of the boxes can be very sharp."],
    ['supervisor', "Next to the loading bay is the cold store, where we keep frozen food. It's minus twenty-five degrees in there, so even with the special clothing we give you, you mustn't stay inside for more than {{twenty|12}} minutes at a time."],
    ['supervisor', "The forklift trucks work in the main warehouse. They're very quiet, and the drivers can't always see people, so you must only walk on the {{green|13}} paths that are painted on the floor. The yellow lines are for the trucks."],
    ['supervisor', "The canteen is on the first floor. Hot food is served from twelve, but the canteen itself opens at {{six|14}} in the morning, so you can get a drink before the early shift."],
    ['supervisor', "You'll all have a locker for your personal things. The keys are not kept by the managers. You collect yours from {{reception|15}}, and you'll need to show your ID card."],
    ['supervisor', "And finally, the first aid room. It used to be next to the canteen, but it's moved, and it's now next to the {{stairs|16}} on the ground floor, so it's easier to reach from the warehouse."],
    ['narrator', 'Before you hear the rest of the talk, you have some time to look at questions 17 to 20.'],
    ['pause', 30, 'Reading time · Questions 17–20'],
    ['narrator', 'Now listen and answer questions 17 to 20.'],
    ['supervisor', "Now, during your first week, there are a few things you must do. You don't need to worry about your uniform, because that's already been ordered for you. But {{you must complete the online safety training|17}} before Friday. It takes about two hours. And {{you'll each have a meeting with your team leader|18}}, to agree your working hours for the next month. The fire drill isn't until next month, and the health check is only for forklift drivers."],
    ['supervisor', "I'd also like to mention some of the benefits of working here. A lot of people think meals are free, but they're not, although they are cheaper than in the shops. What we do offer is {{a free bus from the city centre|19}}, which leaves every hour. And after three months, {{you get a discount of fifteen per cent in all our supermarkets|20}}. There's no gym on site, I'm afraid, and staff do have to pay for parking, because the car park belongs to the business park, not to us."],
    ['supervisor', "Right, let's go and get your safety boots."],
    ['narrator', 'That is the end of Part 2. You now have half a minute to check your answers to Part 2.'],
    ['pause', 30, 'Checking time · Part 2'],

    ['focus', 3],
    ['narrator', 'Now turn to Part 3.'],
    ['narrator', 'Part 3. You will hear two design students, Nadia and Owen, discussing their project on children’s playgrounds with their tutor, Dr Clarke. First, you have some time to look at questions 21 to 25.'],
    ['pause', 30, 'Reading time · Questions 21–25'],
    ['narrator', 'Now listen carefully and answer questions 21 to 25.'],
    ['clarke', "So, how is the playground project going?"],
    ['nadia', "Well. We've visited eight playgrounds around the city now. We were expecting the newest ones to be the busiest, but actually, {{the most popular one was quite old|21}}. It just had a lot of space and some big trees."],
    ['clarke', 'Interesting. And what did you notice about how children used the playgrounds?'],
    ['owen', "We thought the younger children would stay near their parents, and they did, but that wasn't surprising. What surprised us was that {{the older children hardly used the equipment at all|22}}. They mostly invented their own games around it."],
    ['clarke', "That fits with a lot of research. I've read your first report, and your photographs are excellent. The writing is clear, too. But {{you need to explain how you chose the playgrounds|23}}. At the moment, the reader can't tell whether they're typical."],
    ['nadia', "That's fair. We mostly chose them because they were easy to get to."],
    ['clarke', "Then say so, and explain what effect that might have. Now, what's your final design going to be for?"],
    ['owen', "We considered a school playground, and a playground for a hospital. But in the end, {{we're designing one for a small park in a housing estate|24}}. The council has asked for ideas, so it might actually be built."],
    ['clarke', "That's exciting. And how will you find out what local people want?"],
    ['nadia', "We'll put up posters, but we don't expect many replies. So {{we're going to hold a drawing session for children at the local library|25}}, and ask them to draw their ideal playground."],
    ['narrator', 'Before you hear the rest of the discussion, you have some time to look at questions 26 to 30.'],
    ['pause', 30, 'Reading time · Questions 26–30'],
    ['narrator', 'Now listen and answer questions 26 to 30.'],
    ['clarke', "Let's talk about the features you're planning to include. What about a sandpit?"],
    ['owen', "Children love them, but {{they need cleaning every week|26}}, and the council says it can't afford that. So we've left it out."],
    ['clarke', 'And water? Children love water play.'],
    ['nadia', "They do, and a small stream would be wonderful, but {{it would be the most expensive feature by far|27}}, because of the pumps and the safety barriers."],
    ['clarke', 'What about the climbing wall?'],
    ['owen', "We're definitely keeping that. It's {{excellent for developing strength and balance|28}}, and it doesn't take up much space."],
    ['clarke', 'And the wooden house you mentioned?'],
    ['nadia', "Yes. It's very simple, but {{children use it for all kinds of pretend games|29}}. One day it's a shop, the next it's a castle."],
    ['clarke', 'And finally, the swings?'],
    ['owen', "Every playground has them, and {{in every playground we visited, they were what children asked for most|30}}. So they're staying."],
    ['clarke', "Good. I look forward to seeing the drawings."],
    ['narrator', 'That is the end of Part 3. You now have half a minute to check your answers to Part 3.'],
    ['pause', 30, 'Checking time · Part 3'],

    ['focus', 4],
    ['narrator', 'Now turn to Part 4.'],
    ['narrator', 'Part 4. You will hear a lecture about the history of maps. First, you have some time to look at questions 31 to 40.'],
    ['pause', 45, 'Reading time · Questions 31–40'],
    ['narrator', 'Now listen carefully and answer questions 31 to 40.'],
    ['lecturer', "Good afternoon. Today I want to talk about maps, and how the way we picture the world has changed over the last few thousand years."],
    ['lecturer', "One of the oldest surviving maps of the world was made in {{Babylon|31}}, in what is now Iraq, around two thousand six hundred years ago. It was carved on a small {{clay|32}} tablet, and it shows the world as a flat disc surrounded by water."],
    ['lecturer', "In medieval Europe, many maps were not really meant for finding your way. They were religious objects, and they usually placed the city of {{Jerusalem|33}} at the centre of the world."],
    ['lecturer', "A turning point came in fifteen sixty-nine, when the Flemish mapmaker Gerardus Mercator published a new kind of world map. It was designed for {{sailors|34}}, because a straight line on Mercator's map gave a constant compass direction, which made navigation much easier. But it had a serious weakness. To show a round world on a flat sheet, Mercator had to stretch the areas near the {{poles|35}}. As a result, Greenland looks about the same size as {{Africa|36}}, although Africa is in fact around fourteen times larger."],
    ['lecturer', "In the eighteenth century, governments began to measure their countries far more accurately. In Britain, the national mapping agency, the Ordnance Survey, was set up partly because of fears of an {{invasion|37}} from France. The army needed accurate maps of the south coast."],
    ['lecturer', "In the twentieth century, aircraft transformed mapmaking. Instead of measuring everything on the ground, surveyors could use {{photographs|38}} taken from the air, which was much faster."],
    ['lecturer', "Today, of course, most of us use digital maps on our phones, based on satellite data. Some of the most detailed maps are now created by {{volunteers|39}}, who add roads, paths and buildings to open online maps without being paid."],
    ['lecturer', "But there may be a cost. Some researchers believe that people who always follow directions on a screen are losing their sense of {{direction|40}}, because they no longer need to build a picture of the area in their heads. That's something we'll look at more closely next week."],
    ['narrator', 'That is the end of Part 4. That is the end of the listening test.'],
  ];

  // Questions. kind: gap | mcq | two | match
  const LIMIT_WN = 'ONE WORD AND/OR A NUMBER';
  const LIMIT_W = 'ONE WORD ONLY';
  const Q = {
    1:  { kind: 'gap', ans: ['novak'], limit: 'wn', key: 'Novak' },
    2:  { kind: 'gap', ans: ['nurse'], limit: 'wn' },
    3:  { kind: 'gap', ans: ['850'], limit: 'wn' },
    4:  { kind: 'gap', ans: ['station'], limit: 'wn' },
    5:  { kind: 'gap', ans: ['garden'], limit: 'wn' },
    6:  { kind: 'gap', ans: ['mill'], limit: 'wn', key: 'Mill' },
    7:  { kind: 'gap', ans: ['water'], limit: 'wn' },
    8:  { kind: 'gap', ans: ['5', 'five'], limit: 'wn' },
    9:  { kind: 'gap', ans: ['wednesday'], limit: 'wn', key: 'Wednesday' },
    10: { kind: 'gap', ans: ['income'], limit: 'wn' },
    11: { kind: 'gap', ans: ['gloves'], limit: 'wn' },
    12: { kind: 'gap', ans: ['20', 'twenty'], limit: 'wn' },
    13: { kind: 'gap', ans: ['green'], limit: 'wn' },
    14: { kind: 'gap', ans: ['6', 'six', '6am', '6.00'], limit: 'wn' },
    15: { kind: 'gap', ans: ['reception'], limit: 'wn' },
    16: { kind: 'gap', ans: ['stairs', 'stairway', 'staircase'], limit: 'wn' },
    17: { kind: 'two', pair: [17, 18], ans: ['B', 'D'] },
    18: { kind: 'two', pair: [17, 18], ans: ['B', 'D'] },
    19: { kind: 'two', pair: [19, 20], ans: ['C', 'E'] },
    20: { kind: 'two', pair: [19, 20], ans: ['C', 'E'] },
    21: { kind: 'mcq', q: 'What did the students find about the most popular playground?', opts: { A: 'It was one of the newest.', B: 'It was quite old.', C: 'It had the most equipment.' }, ans: 'B' },
    22: { kind: 'mcq', q: 'What surprised the students about how children used the playgrounds?', opts: { A: 'Younger children stayed close to their parents.', B: 'Older children rarely used the equipment.', C: 'Children preferred to play alone.' }, ans: 'B' },
    23: { kind: 'mcq', q: 'What does Dr Clarke say the students’ first report needs?', opts: { A: 'better photographs', B: 'clearer writing', C: 'an explanation of how the playgrounds were chosen' }, ans: 'C' },
    24: { kind: 'mcq', q: 'The students’ final design will be for', opts: { A: 'a school.', B: 'a hospital.', C: 'a park in a housing estate.' }, ans: 'C' },
    25: { kind: 'mcq', q: 'How will the students find out what local people want?', opts: { A: 'by putting up posters', B: 'by asking children to draw pictures', C: 'by holding a public meeting' }, ans: 'B' },
    26: { kind: 'match', label: 'sandpit', ans: 'F' },
    27: { kind: 'match', label: 'water play', ans: 'C' },
    28: { kind: 'match', label: 'climbing wall', ans: 'D' },
    29: { kind: 'match', label: 'wooden house', ans: 'E' },
    30: { kind: 'match', label: 'swings', ans: 'B' },
    31: { kind: 'gap', ans: ['babylon'], limit: 'w', key: 'Babylon' },
    32: { kind: 'gap', ans: ['clay'], limit: 'w' },
    33: { kind: 'gap', ans: ['jerusalem'], limit: 'w', key: 'Jerusalem' },
    34: { kind: 'gap', ans: ['sailors', 'navigation', 'navigators'], limit: 'w' },
    35: { kind: 'gap', ans: ['poles'], limit: 'w' },
    36: { kind: 'gap', ans: ['africa'], limit: 'w', key: 'Africa' },
    37: { kind: 'gap', ans: ['invasion'], limit: 'w' },
    38: { kind: 'gap', ans: ['photographs', 'photos'], limit: 'w' },
    39: { kind: 'gap', ans: ['volunteers'], limit: 'w' },
    40: { kind: 'gap', ans: ['direction'], limit: 'w' },
  };
  const FEATURES = { A: 'It is the safest feature.', B: 'It is the most popular with children.', C: 'It would cost the most.', D: 'It helps children’s physical development.', E: 'It encourages imaginative play.', F: 'It needs too much maintenance.', G: 'It takes up too much space.' };

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
        <h4>Parkside Lettings · Tenant enquiry</h4>
        <div class="line"><span>Bedrooms:</span><span class="example">Example: <u>one</u></span></div>
        <div class="line"><span>Name:</span><span>Anna ${gap(1)}</span></div>
        <div class="line"><span>Job:</span><span>${gap(2)} at the City Hospital</span></div>
        <div class="line"><span>Maximum rent:</span><span>£ ${gap(3)} per month</span></div>
        <div class="line"><span>Area:</span><span>near the ${gap(4)}</span></div>
        <div class="line"><span>Essential:</span><span>a ${gap(5)} for her dog</span></div>
        <div class="sub">Suggested flat</div>
        <div class="line"><span>Address:</span><span>2 ${gap(6)} Street (ground floor)</span></div>
        <div class="line"><span>Rent includes:</span><span>${gap(7)}</span></div>
        <div class="line"><span>Deposit:</span><span>${gap(8)} weeks’ rent</span></div>
        <div class="line"><span>Viewing:</span><span>${gap(9)} at 11 a.m.</span></div>
        <div class="line"><span>Bring:</span><span>identification and proof of ${gap(10)}</span></div>
      </div>
    </div>
  </section>

  <section class="part" id="part-2" data-part="2" hidden>
    <div class="part-head"><h2>Part 2</h2><span class="label">Questions 11–20</span></div>
    <div class="qblock">
      <h3>Questions 11–16</h3>
      <p class="instr">Complete the table below. Write <b>${LIMIT_WN}</b> for each answer.</p>
      <div class="ntable-wrap"><table class="ntable">
        <caption>Northgate distribution centre · Safety rules</caption>
        <thead><tr><th>Area</th><th>Rule or information</th></tr></thead>
        <tbody>
          <tr><td data-h="Area">Loading bay</td><td data-h="Rule or information">wear ${gap(11)} as well as safety boots</td></tr>
          <tr><td data-h="Area">Cold store</td><td data-h="Rule or information">stay inside for a maximum of ${gap(12)} minutes</td></tr>
          <tr><td data-h="Area">Main warehouse</td><td data-h="Rule or information">walk only on the ${gap(13)} paths</td></tr>
          <tr><td data-h="Area">Canteen</td><td data-h="Rule or information">opens at ${gap(14)} a.m.</td></tr>
          <tr><td data-h="Area">Lockers</td><td data-h="Rule or information">collect key from ${gap(15)}</td></tr>
          <tr><td data-h="Area">First aid room</td><td data-h="Rule or information">next to the ${gap(16)} on the ground floor</td></tr>
        </tbody>
      </table></div>
    </div>
    ${two(17, 'Which <b>TWO</b> things must new staff do in their first week?', { A: 'order their uniform', B: 'complete online safety training', C: 'take part in a fire drill', D: 'meet their team leader', E: 'have a health check' })}
    ${two(19, 'Which <b>TWO</b> benefits does the supervisor mention?', { A: 'free meals', B: 'a gym', C: 'free transport to work', D: 'free parking', E: 'a discount in the company’s shops' })}
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
      <p class="instr">What do the students say about each playground feature? Choose <b>FIVE</b> answers from the box and write the correct letter, <b>A–G</b>, next to Questions 26–30.</p>
      ${box('Comments', FEATURES)}
      ${matchRows([26, 27, 28, 29, 30], FEATURES)}
    </div>
  </section>

  <section class="part" id="part-4" data-part="4" hidden>
    <div class="part-head"><h2>Part 4</h2><span class="label">Questions 31–40</span></div>
    <div class="qblock">
      <h3>Questions 31–40</h3>
      <p class="instr">Complete the notes below. Write <b>${LIMIT_W}</b> for each answer.</p>
      <div class="notes">
        <h4>The history of maps</h4>
        <span class="h">Early maps</span>
        <ul>
          <li>One of the oldest world maps comes from ${gap(31)}.</li>
          <li>It was carved on a ${gap(32)} tablet.</li>
          <li>Many medieval maps had ${gap(33)} at the centre.</li>
        </ul>
        <span class="h">Mercator’s map (1569)</span>
        <ul>
          <li>Designed to help ${gap(34)}.</li>
          <li>Areas near the ${gap(35)} look too large.</li>
          <li>Greenland looks as big as ${gap(36)}.</li>
        </ul>
        <span class="h">Modern mapmaking</span>
        <ul>
          <li>Ordnance Survey: set up partly because of fear of an ${gap(37)}.</li>
          <li>20th century: surveyors used aerial ${gap(38)}.</li>
          <li>Today, some detailed maps are made by unpaid ${gap(39)}.</li>
          <li>Possible risk: people may lose their sense of ${gap(40)}.</li>
        </ul>
      </div>
    </div>
  </section>`;

  // Part changes and reading/checking pauses in the recording (seconds) — filled in by tools/make_listening_audio.py
  const TIMELINE = [{"t":1.0,"focus":1},{"t":35.87,"pause":30,"label":"Reading time · Questions 1–5"},{"t":65.87,"speech":1,"part":1},{"t":182.93,"pause":30,"label":"Reading time · Questions 6–10"},{"t":212.93,"speech":1,"part":1},{"t":275.79,"pause":30,"label":"Checking time · Part 1"},{"t":305.79,"focus":2},{"t":305.79,"speech":1,"part":2},{"t":320.67,"pause":30,"label":"Reading time · Questions 11–16"},{"t":350.67,"speech":1,"part":2},{"t":437.95,"pause":30,"label":"Reading time · Questions 17–20"},{"t":467.95,"speech":1,"part":2},{"t":527.85,"pause":30,"label":"Checking time · Part 2"},{"t":557.85,"focus":3},{"t":557.85,"speech":1,"part":3},{"t":575.27,"pause":30,"label":"Reading time · Questions 21–25"},{"t":605.27,"speech":1,"part":3},{"t":700.32,"pause":30,"label":"Reading time · Questions 26–30"},{"t":730.32,"speech":1,"part":3},{"t":792.63,"pause":30,"label":"Checking time · Part 3"},{"t":822.63,"focus":4},{"t":822.63,"speech":1,"part":4},{"t":833.93,"pause":45,"label":"Reading time · Questions 31–40"},{"t":878.93,"speech":1,"part":4}];
  const partNames = { 1: 'Part 1 · Renting a flat', 2: 'Part 2 · A safety talk for new staff', 3: 'Part 3 · Designing a playground', 4: 'Part 4 · The history of maps' };
  window.LISTENING_TEST = { num: 13, name: 'Full Mock Test 3', audio: 'audio/listening-test13.mp3', minutes: 17, mb: 8, roles: ROLES, script: SCRIPT, Q, paper: PAPER, timeline: TIMELINE, partNames };
})();
