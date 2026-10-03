// IELTS Listening · Practice Test 5 — content only. The exam engine is assets/listening-exam.js.
(() => {
  'use strict';
  // Speakers: label for the transcript, voice for tools/make_listening_audio.py
  const ROLES = {
    narrator: { label: 'Narrator', voice: 'bm_george', speed: 0.92, lang: 'en-gb' },
    clerk:    { label: 'Box office', voice: 'bm_lewis', speed: 0.98, lang: 'en-gb' },
    joanna:   { label: 'Joanna', voice: 'bf_lily', speed: 0.98, lang: 'en-gb' },
    martin:   { label: 'Martin', voice: 'bm_daniel', speed: 0.96, lang: 'en-gb' },
    mia:      { label: 'Mia', voice: 'bf_alice', speed: 0.98, lang: 'en-gb' },
    josh:     { label: 'Josh', voice: 'am_liam', speed: 1.0, lang: 'en-us' },
    lecturer: { label: 'Lecturer', voice: 'af_kore', speed: 0.95, lang: 'en-us' },
  };

  // Script: [role, text] lines, or ['pause', seconds, label], or ['focus', part]
  // {{text|n}} marks where the answer to question n is heard.
  const SCRIPT = [
    ['focus', 1],
    ['narrator', 'IELTS Listening. Practice Test 5.'],
    ['narrator', 'In the test, you will hear a number of different recordings and you will have to answer questions on what you hear. There will be time for you to read the instructions and questions, and you will have a chance to check your work. All the recordings will be played once only. The test is in four parts.'],
    ['narrator', 'Now turn to Part 1.'],
    ['narrator', 'Part 1. You will hear a woman phoning a theatre box office to book tickets. First, you have some time to look at questions 1 to 5.'],
    ['pause', 30, 'Reading time · Questions 1–5'],
    ['narrator', 'You will see that there is an example that has been done for you. On this occasion only, the conversation relating to this will be played first.'],
    ['clerk', 'Kingsway Theatre box office, good afternoon.'],
    ['joanna', "Hello. I'd like to book some tickets for The Lighthouse Keeper, please. I think it's on until the end of the month."],
    ['clerk', "That's right, The Lighthouse Keeper. It's been very popular."],
    ['narrator', "The woman wants tickets for The Lighthouse Keeper, so 'The Lighthouse Keeper' has been written in the space. Now we shall begin. You should answer the questions as you listen, because you will not hear the recording a second time. Listen carefully and answer questions 1 to 5."],
    ['clerk', 'Kingsway Theatre box office, good afternoon.'],
    ['joanna', "Hello. I'd like to book some tickets for The Lighthouse Keeper, please. I think it's on until the end of the month."],
    ['clerk', "That's right, The Lighthouse Keeper. It's been very popular. Which performance were you thinking of?"],
    ['joanna', "We'd like to come this Saturday. Is there anything left for the evening show?"],
    ['clerk', "I'm afraid Saturday evening is completely sold out. But there are still seats for the {{matinee|1}} that afternoon, which starts at half past two."],
    ['joanna', "Oh, the afternoon would actually be better, with the children. Let's do that."],
    ['clerk', 'And how many tickets would you like?'],
    ['joanna', "It'll be me, my mother and my two children, so four. Oh, wait, my brother said he wanted to come too. So that's {{five|2}} altogether."],
    ['clerk', "Five. Now, in the stalls there are only single seats left, scattered around, so if you want to sit together, it would have to be the {{balcony|3}}. The view is very good from there."],
    ['joanna', "That's fine. We'd much rather sit together."],
    ['clerk', "I can offer you five seats in row D, but there's a pillar at one end, so one person wouldn't see very much. Or there are five together in row {{H|4}}, a bit further back, with a clear view."],
    ['joanna', 'Row H, please. A clear view is more important.'],
    ['clerk', "Right. Balcony seats are twenty-two pounds for adults, and children's tickets are half price. So that's three adults and two children, and with the booking fee, it comes to {{ninety-six|5}} pounds altogether."],
    ['joanna', "That's fine."],
    ['narrator', 'Before you hear the rest of the conversation, you have some time to look at questions 6 to 10.'],
    ['pause', 30, 'Reading time · Questions 6–10'],
    ['narrator', 'Now listen and answer questions 6 to 10.'],
    ['clerk', 'Can I take your name, please?'],
    ['joanna', "Yes, it's Joanna Prentice. That's {{P, R, E, N, T, I, C, E|6}}."],
    ['clerk', "Thank you. Now, we usually email tickets, but our email system isn't working properly this week, so we'll send them by {{post|7}}. They should reach you by Thursday."],
    ['joanna', "That's fine. Oh, one more thing. My mother uses a walking stick, and I'm a bit worried about the stairs up to the balcony."],
    ['clerk', "There's no need to worry. There's a {{lift|8}} just inside the main entrance that goes up to the balcony, and the staff will show you where it is."],
    ['joanna', "That's a relief. And where's the best place to park? Last time we parked at the supermarket."],
    ['clerk', "A lot of people do, but the supermarket car park closes at eight, so it's not ideal. The nearest one is the car park behind the {{cathedral|9}}. It's only a two-minute walk, and it's open all night."],
    ['joanna', "Great. And is there anything else happening that day?"],
    ['clerk', "Yes, actually. There's a free talk at half past one, before the matinee. Last week it was with two of the actors, but this Saturday it's with the {{director|10}}, who'll talk about how she adapted the novel for the stage."],
    ['joanna', "That sounds interesting. We'll try to get there early. Thank you so much."],
    ['narrator', 'That is the end of Part 1. You now have half a minute to check your answers to Part 1.'],
    ['pause', 30, 'Checking time · Part 1'],

    ['focus', 2],
    ['narrator', 'Now turn to Part 2.'],
    ['narrator', 'Part 2. You will hear a volunteer coordinator talking to a group of new volunteers at a coastal nature reserve. First, you have some time to look at questions 11 to 15.'],
    ['pause', 30, 'Reading time · Questions 11–15'],
    ['narrator', 'Now listen carefully and answer questions 11 to 15.'],
    ['martin', "Good morning, everyone, and welcome to Saltmarsh Bay Nature Reserve. I'm Martin, and I coordinate the volunteer programme here. Thank you all for giving up your time."],
    ['martin', "Let me start with a bit of background. People often think the reserve was set up to protect the sand dunes, and the dunes are certainly important. We also get seals on the sandbanks in winter. But the reserve was originally created to protect {{the seabirds that nest here every spring|11}}, especially the terns, which had almost disappeared from this coast."],
    ['martin', "The dunes do need a lot of care, though. Twenty years ago, the biggest problem was rabbits, and of course winter storms cause damage. These days, however, most of the damage comes from {{visitors walking off the paths|12}}, which kills the grass that holds the sand in place."],
    ['martin', "Now, some practical points. Volunteers need to be at least sixteen, so you're all fine there. We provide all the tools and gloves, so you don't need to bring anything except suitable clothes. But {{everyone must attend a safety briefing|13}} before their first session, because the tides here come in very quickly."],
    ['martin', "Many of you are interested in our beach cleans. We used to hold them once a month, on a Sunday. But we've found it's much more useful to {{go out straight after a storm|14}}, when most of the rubbish is washed up, so we'll contact you by text when one is planned."],
    ['martin', "And what do we find? You might expect plastic bottles, and we do find plenty of those, and lots of cigarette ends. But by far the most common item is {{fishing line and pieces of net|15}}, which are very dangerous for birds."],
    ['narrator', 'Before you hear the rest of the talk, you have some time to look at questions 16 to 20.'],
    ['pause', 30, 'Reading time · Questions 16–20'],
    ['narrator', 'Now listen and answer questions 16 to 20.'],
    ['martin', "Now let me tell you what we need help with in different parts of the reserve. Up on the North Dunes, the fences were repaired last month, so they're in good shape. What we need there now is people to help with {{planting marram grass|16}}, to stabilise the sand."],
    ['martin', "Down on the salt marsh, we don't do any physical work at all, because the ground is too soft. Instead, volunteers help with {{counting the birds|17}}, twice a week, at high tide."],
    ['martin', "At the visitor centre, the inside is looked after by our staff. But the signs along the paths are looking very tired, so this month, {{volunteers will be painting the signs|18}} in the workshop behind the centre."],
    ['martin', "The rock pools are very popular with families in the summer, and the area is pretty clean. What we need there is people to {{lead groups of visitors|19}} and show them what lives in the pools."],
    ['martin', "And finally, the car park. It might not sound exciting, but rhododendron bushes from the old gardens nearby are spreading into the reserve there, and {{they need to be removed|20}} before they reach the dunes."],
    ['martin', "Right, let's go and get your safety briefing done."],
    ['narrator', 'That is the end of Part 2. You now have half a minute to check your answers to Part 2.'],
    ['pause', 30, 'Checking time · Part 2'],

    ['focus', 3],
    ['narrator', 'Now turn to Part 3.'],
    ['narrator', 'Part 3. You will hear two students, Mia and Josh, planning a podcast for their media studies course. First, you have some time to look at questions 21 to 26.'],
    ['pause', 30, 'Reading time · Questions 21–26'],
    ['narrator', 'Now listen carefully and answer questions 21 to 26.'],
    ['mia', "So, Josh, we need to explain in our proposal why we chose to do a podcast instead of a written report."],
    ['josh', "Right. Well, it wasn't because it's easier. If anything, all the editing makes it harder. And our tutor didn't push us either way."],
    ['mia', "No. I think the main reason is that {{we can include interviews with experts|21}}, so people hear them in their own words."],
    ['josh', "And the other thing is that {{students who'd never read a report might listen to a podcast|22}}, on the bus or at the gym. So we'll reach a lot more people."],
    ['mia', "Okay, I'll put those two. Now, we need to decide who does what. I was going to write the script, but you're much better at writing than me."],
    ['josh', "Fine, {{I'll write the script|23}}. But I'm not doing the interviews on my own. I get nervous."],
    ['mia', "Then {{we'll both do the interviews|24}}. One of us can ask the questions and the other can check the recording levels."],
    ['josh', "Good. What about the editing? I've never used the software."],
    ['mia', "I used it last year, so {{I'll do the editing|25}}. It's the bit that takes longest, so maybe you could do something else to make up for it."],
    ['josh', "Like what? Oh, we need a logo for the podcast page. I could {{design the logo|26}}. I've done a few for friends."],
    ['mia', 'Perfect.'],
    ['narrator', 'Before you hear the rest of the discussion, you have some time to look at questions 27 to 30.'],
    ['pause', 30, 'Reading time · Questions 27–30'],
    ['narrator', 'Now listen and answer questions 27 to 30.'],
    ['josh', "So, what should the first episode be about? I wanted to do student housing, but there have already been a lot of articles about that."],
    ['mia', "And exam stress is a bit depressing for a first episode. What about {{food waste in the university canteen|27}}? Nobody's covered that, and the catering manager has already agreed to talk to us."],
    ['josh', "Good idea. Where are we going to record? I thought the library group rooms might be too noisy, but actually they're fine."],
    ['mia', "The problem is the media studio. The equipment's great, but {{it's fully booked for the next three weeks|28}}. So we'll have to use the group rooms after all."],
    ['josh', "Okay. And how long should each episode be? I was thinking twenty or thirty minutes."],
    ['mia', "Our tutor said most students stop listening after about ten minutes, so {{let's keep each one to ten minutes|29}}. We can always make a longer special episode later."],
    ['josh', "Makes sense. Last thing: how do we show that the podcast has worked? Counting downloads would be easy."],
    ['mia', "But downloads don't tell us if anyone actually listened. And online comments are mostly from friends. I think {{we should send a short survey to listeners|30}} after each episode, asking what they learned."],
    ['josh', "Agreed. Let's write it up."],
    ['narrator', 'That is the end of Part 3. You now have half a minute to check your answers to Part 3.'],
    ['pause', 30, 'Checking time · Part 3'],

    ['focus', 4],
    ['narrator', 'Now turn to Part 4.'],
    ['narrator', 'Part 4. You will hear a lecture about how earthquakes are measured. First, you have some time to look at questions 31 to 40.'],
    ['pause', 45, 'Reading time · Questions 31–40'],
    ['narrator', 'Now listen carefully and answer questions 31 to 40.'],
    ['lecturer', "Good afternoon. In today's lecture, I'm going to look at how scientists detect and measure earthquakes, and why measuring them is more complicated than you might think."],
    ['lecturer', "People have tried to detect earthquakes for a very long time. In China, in one hundred and thirty-two AD, a scholar called Zhang Heng built a large bronze vessel with eight dragons around the top, each holding a ball in its mouth. When the ground shook, one of the balls dropped into the mouth of a bronze {{toad|31}} below, which showed the direction the shaking had come from."],
    ['lecturer', "Modern instruments are called seismometers. The basic principle is simple. A heavy {{weight|32}} is hung inside a frame. When the ground moves, the frame moves with it, but the weight tends to stay still, and the difference between them is recorded. In early seismometers, a pen drew this movement on paper wrapped around a turning {{drum|33}}. Today, of course, the signal is recorded digitally."],
    ['lecturer', "An earthquake produces different kinds of waves. The first to arrive are P waves, which travel fastest. Then come S waves, which are slower. An important difference is that S waves cannot travel through {{liquid|34}}, and this is how scientists discovered that the Earth's outer core is molten. By measuring the gap between the arrival of the P and S waves, scientists can work out how far away an earthquake was. To find its exact location, they need data from at least {{three|35}} stations."],
    ['lecturer', "Now, measuring size. The best-known scale is the Richter scale, which was developed in California in {{nineteen thirty-five|36}} by Charles Richter. It's a logarithmic scale. Each step up means the ground movement is ten times larger, and the energy released is about {{thirty-two|37}} times greater. So a magnitude seven earthquake releases around a thousand times more energy than a magnitude five."],
    ['lecturer', "However, the Richter scale has a major weakness. It works well for small and medium earthquakes, but it is not accurate for very {{large|38}} ones, because the readings stop increasing beyond a certain point. So since the nineteen seventies, scientists have used the moment magnitude scale instead. This is based on how much energy the earthquake actually released, which depends on the area of the {{fault|39}} that slipped and how far it moved."],
    ['lecturer', "Finally, there's a completely different way of describing earthquakes, which measures intensity rather than magnitude. The Modified Mercalli scale describes what people actually felt, and the amount of {{damage|40}} to buildings. A single earthquake has only one magnitude, but its intensity varies from place to place, depending on distance and the type of ground."],
    ['lecturer', "Next week, we'll look at whether earthquakes can be predicted."],
    ['narrator', 'That is the end of Part 4. That is the end of the listening test.'],
  ];

  // Questions. kind: gap | mcq | two | match
  const LIMIT_WN = 'ONE WORD AND/OR A NUMBER';
  const Q = {
    1:  { kind: 'gap', ans: ['matinee', 'matinees'], limit: 'wn' },
    2:  { kind: 'gap', ans: ['5', 'five'], limit: 'wn' },
    3:  { kind: 'gap', ans: ['balcony'], limit: 'wn' },
    4:  { kind: 'gap', ans: ['h'], limit: 'wn', key: 'H' },
    5:  { kind: 'gap', ans: ['96'], limit: 'wn' },
    6:  { kind: 'gap', ans: ['prentice'], limit: 'wn', key: 'Prentice' },
    7:  { kind: 'gap', ans: ['post'], limit: 'wn' },
    8:  { kind: 'gap', ans: ['lift'], limit: 'wn' },
    9:  { kind: 'gap', ans: ['cathedral'], limit: 'wn' },
    10: { kind: 'gap', ans: ['director'], limit: 'wn' },
    11: { kind: 'mcq', q: 'The reserve was originally set up to protect', opts: { A: 'the sand dunes.', B: 'nesting seabirds.', C: 'seals.' }, ans: 'B' },
    12: { kind: 'mcq', q: 'What causes most damage to the dunes today?', opts: { A: 'storms', B: 'rabbits', C: 'people leaving the paths' }, ans: 'C' },
    13: { kind: 'mcq', q: 'All volunteers must', opts: { A: 'attend a safety briefing.', B: 'be over 18.', C: 'bring their own tools.' }, ans: 'A' },
    14: { kind: 'mcq', q: 'Beach cleans now take place', opts: { A: 'once a month.', B: 'every Sunday.', C: 'after storms.' }, ans: 'C' },
    15: { kind: 'mcq', q: 'The most common item found on beach cleans is', opts: { A: 'plastic bottles.', B: 'fishing line and net.', C: 'cigarette ends.' }, ans: 'B' },
    16: { kind: 'match', label: 'North Dunes', ans: 'A' },
    17: { kind: 'match', label: 'Salt marsh', ans: 'D' },
    18: { kind: 'match', label: 'Visitor centre', ans: 'F' },
    19: { kind: 'match', label: 'Rock pools', ans: 'C' },
    20: { kind: 'match', label: 'Car park', ans: 'E' },
    21: { kind: 'two', pair: [21, 22], ans: ['A', 'E'] },
    22: { kind: 'two', pair: [21, 22], ans: ['A', 'E'] },
    23: { kind: 'match', label: 'writing the script', ans: 'B' },
    24: { kind: 'match', label: 'doing the interviews', ans: 'C' },
    25: { kind: 'match', label: 'editing the audio', ans: 'A' },
    26: { kind: 'match', label: 'designing the logo', ans: 'B' },
    27: { kind: 'mcq', q: 'What will the first episode be about?', opts: { A: 'student housing', B: 'food waste', C: 'exam stress' }, ans: 'B' },
    28: { kind: 'mcq', q: 'Why can’t the students use the media studio?', opts: { A: 'It is too noisy.', B: 'The equipment is old.', C: 'It is not available.' }, ans: 'C' },
    29: { kind: 'mcq', q: 'How long will each episode be?', opts: { A: '10 minutes', B: '20 minutes', C: '30 minutes' }, ans: 'A' },
    30: { kind: 'mcq', q: 'How will the students judge whether the podcast is successful?', opts: { A: 'by counting downloads', B: 'by reading online comments', C: 'by surveying listeners' }, ans: 'C' },
    31: { kind: 'gap', ans: ['toad'], limit: 'wn' },
    32: { kind: 'gap', ans: ['weight'], limit: 'wn' },
    33: { kind: 'gap', ans: ['drum'], limit: 'wn' },
    34: { kind: 'gap', ans: ['liquid', 'liquids'], limit: 'wn' },
    35: { kind: 'gap', ans: ['3', 'three'], limit: 'wn' },
    36: { kind: 'gap', ans: ['1935'], limit: 'wn' },
    37: { kind: 'gap', ans: ['32', 'thirty-two'], limit: 'wn' },
    38: { kind: 'gap', ans: ['large', 'big'], limit: 'wn' },
    39: { kind: 'gap', ans: ['fault'], limit: 'wn' },
    40: { kind: 'gap', ans: ['damage'], limit: 'wn' },
  };
  const TASKS = { A: 'planting grass', B: 'repairing fences', C: 'guiding visitors', D: 'counting birds', E: 'removing plants', F: 'painting signs', G: 'collecting litter' };
  const TWO_OPTS = { A: 'It will reach a wider audience.', B: 'It is easier than a written report.', C: 'Their tutor recommended it.', D: 'It will improve their technical skills.', E: 'It allows them to include interviews.' };
  const WHO = { A: 'Mia', B: 'Josh', C: 'both Mia and Josh' };

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
        <h4>Kingsway Theatre · Ticket booking</h4>
        <div class="line"><span>Play:</span><span class="example">Example: <u>The Lighthouse Keeper</u></span></div>
        <div class="line"><span>Performance:</span><span>Saturday ${gap(1)}, 2.30 pm</span></div>
        <div class="line"><span>Number of tickets:</span><span>${gap(2)}</span></div>
        <div class="line"><span>Seats in the:</span><span>${gap(3)}</span></div>
        <div class="line"><span>Row:</span><span>${gap(4)}</span></div>
        <div class="line"><span>Total cost:</span><span>£ ${gap(5)} (including booking fee)</span></div>
        <div class="sub">Customer details</div>
        <div class="line"><span>Name:</span><span>Joanna ${gap(6)}</span></div>
        <div class="line"><span>Tickets sent by:</span><span>${gap(7)}</span></div>
        <div class="line"><span>Access:</span><span>a ${gap(8)} goes up to the balcony</span></div>
        <div class="line"><span>Parking:</span><span>car park behind the ${gap(9)}</span></div>
        <div class="line"><span>Free talk (1.30 pm):</span><span>with the ${gap(10)}</span></div>
      </div>
    </div>
  </section>

  <section class="part" id="part-2" data-part="2" hidden>
    <div class="part-head"><h2>Part 2</h2><span class="label">Questions 11–20</span></div>
    <div class="qblock">
      <h3>Questions 11–15</h3>
      <p class="instr">Choose the correct letter, <b>A, B or C</b>.</p>
      <p class="instr"><b>Saltmarsh Bay Nature Reserve</b></p>
      ${[11, 12, 13, 14, 15].map(mcq).join('')}
    </div>
    <div class="qblock">
      <h3>Questions 16–20</h3>
      <p class="instr">What task will volunteers do in each area of the reserve? Choose <b>FIVE</b> answers from the box and write the correct letter, <b>A–G</b>, next to Questions 16–20.</p>
      ${box('Tasks', TASKS)}
      ${matchRows([16, 17, 18, 19, 20], TASKS)}
    </div>
  </section>

  <section class="part" id="part-3" data-part="3" hidden>
    <div class="part-head"><h2>Part 3</h2><span class="label">Questions 21–30</span></div>
    <div class="qblock">
      <h3>Questions 21 and 22</h3>
      <p class="instr">Choose <b>TWO</b> letters, <b>A–E</b>.</p>
      ${twoBlock(21, 'Which <b>TWO</b> reasons do the students give for making a podcast instead of a written report?', TWO_OPTS)}
    </div>
    <div class="qblock">
      <h3>Questions 23–26</h3>
      <p class="instr">Who will be responsible for each task? Choose the correct letter, <b>A, B or C</b>, next to Questions 23–26. <b>NB</b> You may use any letter more than once.</p>
      ${box('People', WHO)}
      ${matchRows([23, 24, 25, 26], WHO)}
    </div>
    <div class="qblock">
      <h3>Questions 27–30</h3>
      <p class="instr">Choose the correct letter, <b>A, B or C</b>.</p>
      ${[27, 28, 29, 30].map(mcq).join('')}
    </div>
  </section>

  <section class="part" id="part-4" data-part="4" hidden>
    <div class="part-head"><h2>Part 4</h2><span class="label">Questions 31–40</span></div>
    <div class="qblock">
      <h3>Questions 31–40</h3>
      <p class="instr">Complete the notes below. Write <b>${LIMIT_WN}</b> for each answer.</p>
      <div class="notes">
        <h4>Measuring earthquakes</h4>
        <span class="h">Early detection</span>
        <ul>
          <li>132 AD, China: when the ground shook, a ball dropped into the mouth of a bronze ${gap(31)}.</li>
        </ul>
        <span class="h">Seismometers</span>
        <ul>
          <li>A heavy ${gap(32)} stays still while the frame moves.</li>
          <li>Early versions: a pen recorded movement on a turning ${gap(33)}.</li>
        </ul>
        <span class="h">Earthquake waves</span>
        <ul>
          <li>S waves cannot travel through ${gap(34)}.</li>
          <li>Locating an earthquake needs data from at least ${gap(35)} stations.</li>
        </ul>
        <span class="h">Magnitude</span>
        <ul>
          <li>Richter scale developed in ${gap(36)}.</li>
          <li>Each step up = about ${gap(37)} times more energy.</li>
          <li>Not accurate for very ${gap(38)} earthquakes.</li>
          <li>Moment magnitude scale: depends on the area of the ${gap(39)} that slipped.</li>
        </ul>
        <span class="h">Intensity</span>
        <ul>
          <li>Mercalli scale: based on what people felt and the amount of ${gap(40)} to buildings.</li>
        </ul>
      </div>
    </div>
  </section>`;

  // Part changes and reading/checking pauses in the recording (seconds) — filled in by tools/make_listening_audio.py
  const TIMELINE = [{"t":1.0,"focus":1},{"t":35.92,"pause":30,"label":"Reading time · Questions 1–5"},{"t":65.92,"speech":1,"part":1},{"t":204.56,"pause":30,"label":"Reading time · Questions 6–10"},{"t":234.56,"speech":1,"part":1},{"t":317.99,"pause":30,"label":"Checking time · Part 1"},{"t":347.99,"focus":2},{"t":347.99,"speech":1,"part":2},{"t":363.47,"pause":30,"label":"Reading time · Questions 11–15"},{"t":393.47,"speech":1,"part":2},{"t":490.36,"pause":30,"label":"Reading time · Questions 16–20"},{"t":520.36,"speech":1,"part":2},{"t":591.73,"pause":30,"label":"Checking time · Part 2"},{"t":621.73,"focus":3},{"t":621.73,"speech":1,"part":3},{"t":636.25,"pause":30,"label":"Reading time · Questions 21–26"},{"t":666.25,"speech":1,"part":3},{"t":747.54,"pause":30,"label":"Reading time · Questions 27–30"},{"t":777.54,"speech":1,"part":3},{"t":858.23,"pause":30,"label":"Checking time · Part 3"},{"t":888.23,"focus":4},{"t":888.23,"speech":1,"part":4},{"t":899.8,"pause":45,"label":"Reading time · Questions 31–40"},{"t":944.8,"speech":1,"part":4}];
  const partNames = { 1: 'Part 1 · Booking theatre tickets', 2: 'Part 2 · Volunteering at a nature reserve', 3: 'Part 3 · Planning a student podcast', 4: 'Part 4 · Measuring earthquakes' };
  window.LISTENING_TEST = { num: 5, audio: 'audio/listening-test5.mp3', minutes: 18, mb: 9, roles: ROLES, script: SCRIPT, Q, paper: PAPER, timeline: TIMELINE, partNames };
})();
