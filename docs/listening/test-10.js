// IELTS Listening · Practice Test 10 — content only. The exam engine is assets/listening-exam.js.
(() => {
  'use strict';
  // Speakers: label for the transcript, voice for tools/make_listening_audio.py
  const ROLES = {
    narrator:  { label: 'Narrator', voice: 'bm_george', speed: 0.92, lang: 'en-gb' },
    reception: { label: 'Receptionist', voice: 'bf_isabella', speed: 0.98, lang: 'en-gb' },
    lucas:     { label: 'Lucas', voice: 'am_eric', speed: 0.98, lang: 'en-us' },
    presenter: { label: 'Presenter', voice: 'bf_emma', speed: 0.98, lang: 'en-gb' },
    tom:       { label: 'Tom Hale', voice: 'bm_daniel', speed: 0.96, lang: 'en-gb' },
    zoe:       { label: 'Zoe', voice: 'af_heart', speed: 0.98, lang: 'en-us' },
    ethan:     { label: 'Ethan', voice: 'am_puck', speed: 1.0, lang: 'en-us' },
    moss:      { label: 'Dr Moss', voice: 'bf_alice', speed: 0.96, lang: 'en-gb' },
    lecturer:  { label: 'Lecturer', voice: 'af_sarah', speed: 0.95, lang: 'en-us' },
  };

  // Script: [role, text] lines, or ['pause', seconds, label], or ['focus', part]
  // {{text|n}} marks where the answer to question n is heard.
  const SCRIPT = [
    ['focus', 1],
    ['narrator', 'IELTS Listening. Practice Test 10.'],
    ['narrator', 'In the test, you will hear a number of different recordings and you will have to answer questions on what you hear. There will be time for you to read the instructions and questions, and you will have a chance to check your work. All the recordings will be played once only. The test is in four parts.'],
    ['narrator', 'Now turn to Part 1.'],
    ['narrator', 'Part 1. You will hear a man phoning a dental surgery. First, you have some time to look at questions 1 to 5.'],
    ['pause', 30, 'Reading time · Questions 1–5'],
    ['narrator', 'You will see that there is an example that has been done for you. On this occasion only, the conversation relating to this will be played first.'],
    ['reception', 'Good morning, Green Lane Dental Practice.'],
    ['lucas', "Hi. I've just moved to the area, and I'd like to register as a new patient, please."],
    ['reception', "Of course. I'll take a few details. What's your first name?"],
    ['lucas', "It's Lucas."],
    ['narrator', "The man's first name is Lucas, so 'Lucas' has been written in the space. Now we shall begin. You should answer the questions as you listen, because you will not hear the recording a second time. Listen carefully and answer questions 1 to 5."],
    ['reception', 'Good morning, Green Lane Dental Practice.'],
    ['lucas', "Hi. I've just moved to the area, and I'd like to register as a new patient, please."],
    ['reception', "Of course. I'll take a few details. What's your first name?"],
    ['lucas', "It's Lucas."],
    ['reception', 'And your surname?'],
    ['lucas', "Moreau. That's {{M, O, R, E, A, U|1}}. It's French."],
    ['reception', "Thank you. And your date of birth?"],
    ['lucas', "The fourteenth of October, {{nineteen ninety-one|2}}."],
    ['reception', "Sorry, was that nineteen ninety-five?"],
    ['lucas', "No, ninety-one."],
    ['reception', "Thanks. And where was your previous dentist?"],
    ['lucas', "I was living in Manchester for a couple of years, but I didn't register there. My last dentist was in {{Leeds|3}}, where I grew up."],
    ['reception', "That's fine. We'll ask them to send your records. Now, is this just for a check-up, or do you have a problem at the moment?"],
    ['lucas', "Actually, I do. Hot food and drinks are fine, but I get a sharp pain when I eat anything {{cold|4}}, like ice cream."],
    ['reception', "Then we should see you fairly soon. Dr Clarke is away this week, but I can book you in with Dr {{Patel|5}} on Thursday afternoon."],
    ['lucas', "Thursday's fine."],
    ['narrator', 'Before you hear the rest of the conversation, you have some time to look at questions 6 to 10.'],
    ['pause', 30, 'Reading time · Questions 6–10'],
    ['narrator', 'Now listen and answer questions 6 to 10.'],
    ['lucas', 'How much will the appointment cost?'],
    ['reception', "If you were a private patient, a check-up would be forty-five pounds. But you'll be registered with the public health service, so it's {{twenty-six|6}} pounds. If you need treatment, there may be an extra charge."],
    ['lucas', 'Okay. Is there anything I need to do before I come?'],
    ['reception', "Yes. As a new patient, you'll need to fill in a medical history form, so please arrive {{ten|7}} minutes early. And bring a list of any {{medication|8}} you're taking, because some medicines affect dental treatment."],
    ['lucas', "Sure. And where exactly are you? I'm still finding my way around."],
    ['reception', "We're on Green Lane, at the top of the hill. Some people get confused, because there's a dental lab further down the road, but we're directly opposite the {{bakery|9}}."],
    ['lucas', "Got it. Is there anything else I should know?"],
    ['reception', "Just one thing. If you can't come to an appointment, please give us at least {{twenty-four|10}} hours' notice, or we have to charge a fee."],
    ['lucas', "Understood. Thanks very much."],
    ['narrator', 'That is the end of Part 1. You now have half a minute to check your answers to Part 1.'],
    ['pause', 30, 'Checking time · Part 1'],

    ['focus', 2],
    ['narrator', 'Now turn to Part 2.'],
    ['narrator', 'Part 2. You will hear a radio programme in which the organiser of a food festival talks about this year\'s event. First, you have some time to look at questions 11 to 16.'],
    ['pause', 30, 'Reading time · Questions 11–16'],
    ['narrator', 'Now listen carefully and answer questions 11 to 16.'],
    ['presenter', "And now, with the Westbay Food Festival coming up next month, I'm joined by the organiser, Tom Hale. Tom, what can people look forward to?"],
    ['tom', "Thanks. Well, there's a lot going on, so let me pick out a few highlights. First, our cookery competition. In the past it's been for professional chefs, but this year it's for {{teenagers|11}}, aged thirteen to eighteen, and it'll be held in the Market Hall."],
    ['tom', "The street food market used to be in the main square, but it got far too crowded. So this year it'll be along the {{riverside|12}}, where there's much more space."],
    ['tom', "We're also holding a cheese tasting in the Corn Exchange, with cheeses from twenty local farms. Tickets for that are {{eight|13}} pounds, and that includes a glass of local apple juice."],
    ['presenter', 'Any famous names?'],
    ['tom', "Yes. The television chef Amira Shah will be giving a talk on the Saturday. Last year she talked about cooking on a budget, but this time it's about cooking without {{sugar|14}}, which I think will be very popular."],
    ['tom', "There's also the chilli-eating contest, which is always a lot of fun to watch. It used to be in the Market Hall, but it's being held in a big {{tent|15}} on the village green this year."],
    ['tom', "And for younger children, there's a baking workshop on Sunday morning. Places are limited, so you have to book. You can't book online, I'm afraid. You need to book by {{phone|16}}, through the tourist office."],
    ['narrator', 'Before you hear the rest of the programme, you have some time to look at questions 17 to 20.'],
    ['pause', 30, 'Reading time · Questions 17–20'],
    ['narrator', 'Now listen and answer questions 17 to 20.'],
    ['presenter', "Is the festival different from last year in any other way?"],
    ['tom', "Entry is still free, and it's in the same place. But we've added an extra day, so {{it now runs from Friday to Sunday|17}}, instead of just the weekend."],
    ['presenter', 'And who pays for it all?'],
    ['tom', "We've had support from a local bank and a supermarket in the past. But this year our main sponsor is {{the regional farmers' association|18}}, which is very appropriate."],
    ['presenter', 'Any advice for visitors?'],
    ['tom', "Most stalls take cards now, so you don't need much cash. And people don't need to arrive early, because there's plenty to do all day. But parking is very limited, so {{we'd really encourage people to come by train|19}}. The station is only a five-minute walk away."],
    ['presenter', 'And finally, where does the money from the festival go?'],
    ['tom', "We've supported the hospital and local schools in the past. This year, {{all profits will go to the town's food bank|20}}, which helps families who are struggling."],
    ['presenter', 'Tom Hale, thank you.'],
    ['narrator', 'That is the end of Part 2. You now have half a minute to check your answers to Part 2.'],
    ['pause', 30, 'Checking time · Part 2'],

    ['focus', 3],
    ['narrator', 'Now turn to Part 3.'],
    ['narrator', 'Part 3. You will hear two students, Zoe and Ethan, discussing their climate project with their tutor, Dr Moss. First, you have some time to look at questions 21 to 25.'],
    ['pause', 30, 'Reading time · Questions 21–25'],
    ['narrator', 'Now listen carefully and answer questions 21 to 25.'],
    ['moss', "Hello, both of you. I see you've changed the topic of your climate project. You were going to look at rising sea levels, weren't you?"],
    ['zoe', "Yes. It's still relevant here, because we're near the coast. But {{there's already so much research on it|21}} that we couldn't find anything new to say. So now we're looking at how the city can cope with heatwaves."],
    ['moss', "Good. I've read your research question. It's original, and it's not too technical. My only concern is that {{it's very broad|22}}. Heatwaves affect health, transport, energy... You can't cover all of that."],
    ['ethan', "We realised that too. We've started looking at temperature data, and we were really surprised by {{how much hotter the city centre is than the countryside|23}}. On some nights, it's six degrees warmer."],
    ['moss', "That's the urban heat island effect. So how will you narrow it down?"],
    ['zoe', "We looked at green roofs and painting roofs white, but they're both very expensive for existing buildings. So {{we're going to focus on planting trees|24}}, because the shade they give makes the biggest difference at street level."],
    ['moss', "Good. And how will you present your findings?"],
    ['ethan', "We thought about a video, but that would take too long. And everyone does slides. So {{we'll make a large poster|25}}, with maps of the city, for the department exhibition."],
    ['narrator', 'Before you hear the rest of the discussion, you have some time to look at questions 26 to 30.'],
    ['pause', 30, 'Reading time · Questions 26–30'],
    ['narrator', 'Now listen and answer questions 26 to 30.'],
    ['moss', "Let's talk about your sources. What have you found so far?"],
    ['zoe', "There's a government report on heatwaves. It's recent, but {{a lot of it is very technical|26}}. We've had to read some sections several times."],
    ['ethan', "There's also a newspaper article about air conditioning. It's interesting, but {{it was paid for by a company that sells air conditioners|27}}, so we don't think we can trust it."],
    ['moss', 'Yes, be careful with that. What else?'],
    ['zoe', "The university's geography website has been really helpful. It's a bit old, but {{it has excellent maps|28}} of temperatures across the city."],
    ['ethan', "And we interviewed a planner at the city council. She didn't give us any figures, but {{she said some things we can quote|29}} in our introduction, about why the council is worried."],
    ['moss', 'And the temperature data you mentioned?'],
    ['zoe', "That's from a network of weather stations run by volunteers. Some people find their data hard to access, but it was easy for us. The best thing is that {{it gives us figures for each neighbourhood|30}}, which nobody else has."],
    ['moss', "That sounds like a strong set of sources. Well done."],
    ['narrator', 'That is the end of Part 3. You now have half a minute to check your answers to Part 3.'],
    ['pause', 30, 'Checking time · Part 3'],

    ['focus', 4],
    ['narrator', 'Now turn to Part 4.'],
    ['narrator', 'Part 4. You will hear a lecture about the future of electric vehicles. First, you have some time to look at questions 31 to 40.'],
    ['pause', 45, 'Reading time · Questions 31–40'],
    ['narrator', 'Now listen carefully and answer questions 31 to 40.'],
    ['lecturer', "Good morning. Today's topic is electric vehicles: where they came from, the challenges they face, and where the technology might go next."],
    ['lecturer', "Many people think electric cars are a recent invention, but in fact they're older than petrol cars. In the United States, in nineteen hundred, about a {{third|31}} of all cars on the road were electric. They were quiet and clean, and easy to start. But within twenty years, they had almost disappeared. The main reasons were that cheap {{petrol|32}} became widely available, and petrol cars got an electric starter, so you no longer had to start them by hand."],
    ['lecturer', "The modern revival depends above all on batteries. Most electric cars today use lithium-ion batteries, the same basic technology as in your phone. For a long time, the battery was the most expensive part of the car. But since twenty ten, the cost of batteries has fallen by around {{eighty|33}} per cent."],
    ['lecturer', "However, batteries raise serious concerns. One is the mining of {{cobalt|34}}, which is used in many batteries and is often mined in very poor conditions. So manufacturers are developing new types of battery. One promising option uses {{sodium|35}}, which can be obtained from ordinary salt, so it's cheap and plentiful, although these batteries store less energy."],
    ['lecturer', "The other big question is charging. With the fastest chargers, many cars can now be charged to eighty per cent in about {{twenty|36}} minutes, which is about the length of a coffee break. And in future, electric cars may become part of the energy system itself. With what's called vehicle-to-grid technology, a parked car could supply electricity to {{homes|37}} when demand is high, and then recharge at night when electricity is cheaper."],
    ['lecturer', "But there are still gaps. In cities, charging points are becoming common. However, in {{rural|38}} areas there are still very few, and that puts many people off buying an electric car."],
    ['lecturer', "What happens to batteries at the end of their life? This is a growing industry. Modern recycling plants can now recover up to {{ninety-five|39}} per cent of the valuable materials in a battery, which can then be used to make new ones."],
    ['lecturer', "Finally, will everything run on batteries? Probably not. For cars and vans, batteries seem to be the answer. But for the heaviest lorries, which travel long distances, the batteries would be enormous, so some companies are developing trucks that run on {{hydrogen|40}} instead."],
    ['lecturer', "In our next session, we'll look at the future of public transport."],
    ['narrator', 'That is the end of Part 4. That is the end of the listening test.'],
  ];

  // Questions. kind: gap | mcq | two | match
  const LIMIT_WN = 'ONE WORD AND/OR A NUMBER';
  const Q = {
    1:  { kind: 'gap', ans: ['moreau'], limit: 'wn', key: 'Moreau' },
    2:  { kind: 'gap', ans: ['1991'], limit: 'wn' },
    3:  { kind: 'gap', ans: ['leeds'], limit: 'wn', key: 'Leeds' },
    4:  { kind: 'gap', ans: ['cold'], limit: 'wn' },
    5:  { kind: 'gap', ans: ['patel'], limit: 'wn', key: 'Patel' },
    6:  { kind: 'gap', ans: ['26'], limit: 'wn' },
    7:  { kind: 'gap', ans: ['10', 'ten'], limit: 'wn' },
    8:  { kind: 'gap', ans: ['medication', 'medications', 'medicines', 'medicine'], limit: 'wn' },
    9:  { kind: 'gap', ans: ['bakery'], limit: 'wn' },
    10: { kind: 'gap', ans: ['24', 'twenty-four'], limit: 'wn' },
    11: { kind: 'gap', ans: ['teenagers'], limit: 'wn' },
    12: { kind: 'gap', ans: ['riverside', 'river'], limit: 'wn' },
    13: { kind: 'gap', ans: ['8', 'eight'], limit: 'wn' },
    14: { kind: 'gap', ans: ['sugar'], limit: 'wn' },
    15: { kind: 'gap', ans: ['tent'], limit: 'wn' },
    16: { kind: 'gap', ans: ['phone', 'telephone'], limit: 'wn' },
    17: { kind: 'mcq', q: 'How is the festival different this year?', opts: { A: 'Visitors have to pay to enter.', B: 'It has moved to a new town.', C: 'It lasts for three days.' }, ans: 'C' },
    18: { kind: 'mcq', q: 'Who is the main sponsor of the festival?', opts: { A: 'a group of farmers', B: 'a local bank', C: 'a supermarket' }, ans: 'A' },
    19: { kind: 'mcq', q: 'What does Tom advise visitors to do?', opts: { A: 'bring plenty of cash', B: 'travel by train', C: 'arrive early' }, ans: 'B' },
    20: { kind: 'mcq', q: 'The festival’s profits will go to', opts: { A: 'local schools.', B: 'the hospital.', C: 'a food bank.' }, ans: 'C' },
    21: { kind: 'mcq', q: 'Why did the students change the topic of their project?', opts: { A: 'Their first topic had been studied a lot already.', B: 'Their first topic was not relevant to their area.', C: 'Their tutor suggested a different topic.' }, ans: 'A' },
    22: { kind: 'mcq', q: 'What does Dr Moss think about their research question?', opts: { A: 'It is too technical.', B: 'It covers too much.', C: 'It is not original.' }, ans: 'B' },
    23: { kind: 'mcq', q: 'What surprised the students about the temperature data?', opts: { A: 'the difference between the city and the countryside', B: 'the number of heatwaves in recent years', C: 'how quickly the city cools at night' }, ans: 'A' },
    24: { kind: 'mcq', q: 'What will the project focus on?', opts: { A: 'green roofs', B: 'white roofs', C: 'trees' }, ans: 'C' },
    25: { kind: 'mcq', q: 'How will the students present their findings?', opts: { A: 'as a video', B: 'as a poster', C: 'as a slide presentation' }, ans: 'B' },
    26: { kind: 'match', label: 'government report', ans: 'D' },
    27: { kind: 'match', label: 'newspaper article', ans: 'C' },
    28: { kind: 'match', label: 'university website', ans: 'B' },
    29: { kind: 'match', label: 'interview with a city planner', ans: 'G' },
    30: { kind: 'match', label: 'weather station data', ans: 'E' },
    31: { kind: 'gap', ans: ['third'], limit: 'wn' },
    32: { kind: 'gap', ans: ['petrol', 'gasoline', 'fuel'], limit: 'wn' },
    33: { kind: 'gap', ans: ['80', 'eighty'], limit: 'wn' },
    34: { kind: 'gap', ans: ['cobalt'], limit: 'wn' },
    35: { kind: 'gap', ans: ['sodium', 'salt'], limit: 'wn' },
    36: { kind: 'gap', ans: ['20', 'twenty'], limit: 'wn' },
    37: { kind: 'gap', ans: ['homes', 'houses'], limit: 'wn' },
    38: { kind: 'gap', ans: ['rural'], limit: 'wn' },
    39: { kind: 'gap', ans: ['95', 'ninety-five'], limit: 'wn' },
    40: { kind: 'gap', ans: ['hydrogen'], limit: 'wn' },
  };
  const SOURCES = { A: 'It is out of date.', B: 'It contains useful maps.', C: 'It may be biased.', D: 'It is difficult to understand.', E: 'It gives detailed local figures.', F: 'It was hard to obtain.', G: 'It provides useful quotations.' };

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
        <h4>Green Lane Dental Practice · New patient</h4>
        <div class="line"><span>First name:</span><span class="example">Example: <u>Lucas</u></span></div>
        <div class="line"><span>Surname:</span><span>${gap(1)}</span></div>
        <div class="line"><span>Date of birth:</span><span>14 October ${gap(2)}</span></div>
        <div class="line"><span>Previous dentist in:</span><span>${gap(3)}</span></div>
        <div class="line"><span>Problem:</span><span>pain when eating ${gap(4)} food</span></div>
        <div class="line"><span>Appointment:</span><span>Thursday afternoon with Dr ${gap(5)}</span></div>
        <div class="sub">Other information</div>
        <div class="line"><span>Cost of check-up:</span><span>£ ${gap(6)}</span></div>
        <div class="line"><span>Arrive:</span><span>${gap(7)} minutes early to fill in a form</span></div>
        <div class="line"><span>Bring:</span><span>a list of current ${gap(8)}</span></div>
        <div class="line"><span>Location:</span><span>Green Lane, opposite the ${gap(9)}</span></div>
        <div class="line"><span>Cancellations:</span><span>at least ${gap(10)} hours’ notice</span></div>
      </div>
    </div>
  </section>

  <section class="part" id="part-2" data-part="2" hidden>
    <div class="part-head"><h2>Part 2</h2><span class="label">Questions 11–20</span></div>
    <div class="qblock">
      <h3>Questions 11–16</h3>
      <p class="instr">Complete the table below. Write <b>${LIMIT_WN}</b> for each answer.</p>
      <div class="ntable-wrap"><table class="ntable">
        <caption>Westbay Food Festival · Highlights</caption>
        <thead><tr><th>Event</th><th>Location</th><th>Details</th></tr></thead>
        <tbody>
          <tr><td data-h="Event">Cookery competition</td><td data-h="Location">Market Hall</td><td data-h="Details">open to ${gap(11)}</td></tr>
          <tr><td data-h="Event">Street food market</td><td data-h="Location">along the ${gap(12)}</td><td data-h="Details">moved because the square was too crowded</td></tr>
          <tr><td data-h="Event">Cheese tasting</td><td data-h="Location">Corn Exchange</td><td data-h="Details">tickets £ ${gap(13)}</td></tr>
          <tr><td data-h="Event">Talk by Amira Shah</td><td data-h="Location">–</td><td data-h="Details">cooking without ${gap(14)}</td></tr>
          <tr><td data-h="Event">Chilli-eating contest</td><td data-h="Location">a ${gap(15)} on the village green</td><td data-h="Details">–</td></tr>
          <tr><td data-h="Event">Children’s baking workshop</td><td data-h="Location">–</td><td data-h="Details">book by ${gap(16)}</td></tr>
        </tbody>
      </table></div>
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
      <p class="instr">What do the students say about each source? Choose <b>FIVE</b> answers from the box and write the correct letter, <b>A–G</b>, next to Questions 26–30.</p>
      ${box('Comments', SOURCES)}
      ${matchRows([26, 27, 28, 29, 30], SOURCES)}
    </div>
  </section>

  <section class="part" id="part-4" data-part="4" hidden>
    <div class="part-head"><h2>Part 4</h2><span class="label">Questions 31–40</span></div>
    <div class="qblock">
      <h3>Questions 31–40</h3>
      <p class="instr">Complete the notes below. Write <b>${LIMIT_WN}</b> for each answer.</p>
      <div class="notes">
        <h4>The future of electric vehicles</h4>
        <span class="h">History</span>
        <ul>
          <li>In 1900, about a ${gap(31)} of US cars were electric.</li>
          <li>They declined because of cheap ${gap(32)} and the electric starter.</li>
        </ul>
        <span class="h">Batteries</span>
        <ul>
          <li>Battery costs have fallen by about ${gap(33)} per cent since 2010.</li>
          <li>Concern about the mining of ${gap(34)}.</li>
          <li>New batteries use ${gap(35)}, which is cheap and plentiful.</li>
        </ul>
        <span class="h">Charging</span>
        <ul>
          <li>Fast chargers: 80% charge in about ${gap(36)} minutes.</li>
          <li>Vehicle-to-grid: cars could supply power to ${gap(37)}.</li>
          <li>Few charging points in ${gap(38)} areas.</li>
        </ul>
        <span class="h">The future</span>
        <ul>
          <li>Up to ${gap(39)} per cent of battery materials can be recycled.</li>
          <li>Heavy lorries may use ${gap(40)} instead of batteries.</li>
        </ul>
      </div>
    </div>
  </section>`;

  // Part changes and reading/checking pauses in the recording (seconds) — filled in by tools/make_listening_audio.py
  const TIMELINE = [{"t":1.0,"focus":1},{"t":34.27,"pause":30,"label":"Reading time · Questions 1–5"},{"t":64.27,"speech":1,"part":1},{"t":172.85,"pause":30,"label":"Reading time · Questions 6–10"},{"t":202.85,"speech":1,"part":1},{"t":268.01,"pause":30,"label":"Checking time · Part 1"},{"t":298.01,"focus":2},{"t":298.01,"speech":1,"part":2},{"t":313.11,"pause":30,"label":"Reading time · Questions 11–16"},{"t":343.11,"speech":1,"part":2},{"t":430.18,"pause":30,"label":"Reading time · Questions 17–20"},{"t":460.18,"speech":1,"part":2},{"t":526.1,"pause":30,"label":"Checking time · Part 2"},{"t":556.1,"focus":3},{"t":556.1,"speech":1,"part":3},{"t":571.71,"pause":30,"label":"Reading time · Questions 21–25"},{"t":601.71,"speech":1,"part":3},{"t":689.25,"pause":30,"label":"Reading time · Questions 26–30"},{"t":719.25,"speech":1,"part":3},{"t":795.6,"pause":30,"label":"Checking time · Part 3"},{"t":825.6,"focus":4},{"t":825.6,"speech":1,"part":4},{"t":837.73,"pause":45,"label":"Reading time · Questions 31–40"},{"t":882.73,"speech":1,"part":4}];
  const partNames = { 1: 'Part 1 · Registering with a dentist', 2: 'Part 2 · Westbay Food Festival', 3: 'Part 3 · A climate project on heatwaves', 4: 'Part 4 · The future of electric vehicles' };
  window.LISTENING_TEST = { num: 10, audio: 'audio/listening-test10.mp3', minutes: 17, mb: 8, roles: ROLES, script: SCRIPT, Q, paper: PAPER, timeline: TIMELINE, partNames };
})();
