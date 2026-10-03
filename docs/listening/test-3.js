// IELTS Listening · Practice Test 3 — content only. The exam engine is assets/listening-exam.js.
(() => {
  'use strict';
  // Speakers: label for the transcript, voice for tools/make_listening_audio.py
  const ROLES = {
    narrator: { label: 'Narrator', voice: 'bm_george', speed: 0.92, lang: 'en-gb' },
    mark:     { label: 'Mark', voice: 'bm_lewis', speed: 0.98, lang: 'en-gb' },
    sophie:   { label: 'Sophie', voice: 'af_bella', speed: 0.98, lang: 'en-us' },
    guide:    { label: 'Guide', voice: 'bf_alice', speed: 0.96, lang: 'en-gb' },
    shaw:     { label: 'Dr Shaw', voice: 'bm_daniel', speed: 0.95, lang: 'en-gb' },
    ben:      { label: 'Ben', voice: 'am_adam', speed: 1.0, lang: 'en-us' },
    hana:     { label: 'Hana', voice: 'bf_lily', speed: 0.98, lang: 'en-gb' },
    lecturer: { label: 'Lecturer', voice: 'af_nicole', speed: 0.95, lang: 'en-us' },
  };

  // Script: [role, text] lines, or ['pause', seconds, label], or ['focus', part]
  // {{text|n}} marks where the answer to question n is heard.
  const SCRIPT = [
    ['focus', 1],
    ['narrator', 'IELTS Listening. Practice Test 3.'],
    ['narrator', 'In the test, you will hear a number of different recordings and you will have to answer questions on what you hear. There will be time for you to read the instructions and questions, and you will have a chance to check your work. All the recordings will be played once only. The test is in four parts.'],
    ['narrator', 'Now turn to Part 1.'],
    ['narrator', 'Part 1. You will hear a woman phoning an adult education centre to enrol on a course. First, you have some time to look at questions 1 to 5.'],
    ['pause', 30, 'Reading time · Questions 1–5'],
    ['narrator', 'You will see that there is an example that has been done for you. On this occasion only, the conversation relating to this will be played first.'],
    ['mark', 'Northgate Adult Education Centre, Mark speaking. How can I help?'],
    ['sophie', "Hi. I'd like to sign up for one of your Spanish courses. I've never studied Spanish before, so I guess I need the course for complete beginners."],
    ['mark', "That's right, the Beginners course. We still have a few places on that."],
    ['narrator', "The woman wants to join the Beginners course, so 'Beginners' has been written in the space. Now we shall begin. You should answer the questions as you listen, because you will not hear the recording a second time. Listen carefully and answer questions 1 to 5."],
    ['mark', 'Northgate Adult Education Centre, Mark speaking. How can I help?'],
    ['sophie', "Hi. I'd like to sign up for one of your Spanish courses. I've never studied Spanish before, so I guess I need the course for complete beginners."],
    ['mark', "That's right, the Beginners course. We still have a few places on that. I'll take your details. What's your name?"],
    ['sophie', "It's Sophie Caldwell."],
    ['mark', 'Could you spell your surname for me?'],
    ['sophie', "Sure. {{C, A, L, D, W, E, L, L|1}}."],
    ['mark', 'Thanks. And your address?'],
    ['sophie', "I live in a block of flats on Ashby Road, number nineteen. The flat number is fourteen. Oh, sorry, no, that was my old flat in the same building. We moved upstairs last year. It's flat {{four|2}} now."],
    ['mark', "Flat four, nineteen Ashby Road. Now, the Beginners course runs on two evenings. The Monday group is already full, I'm afraid, so it would have to be {{Tuesday|3}}."],
    ['sophie', "Tuesday's fine. What time does it start? The website said half past six."],
    ['mark', "That was last year's timetable. Now it starts at {{seven fifteen|4}}, because a lot of students said they couldn't get here straight from work."],
    ['sophie', 'Even better. And how long is the course?'],
    ['mark', "It's {{ten|5}} weeks. There's a follow-on course after that, which lasts twelve weeks, if you want to continue."],
    ['narrator', 'Before you hear the rest of the conversation, you have some time to look at questions 6 to 10.'],
    ['pause', 30, 'Reading time · Questions 6–10'],
    ['narrator', 'Now listen and answer questions 6 to 10.'],
    ['sophie', 'Where will the classes be?'],
    ['mark', "In the main building. Most language classes are on the ground floor, in the A rooms, but Beginners Spanish is in room {{B12|6}}, on the first floor. It's the one opposite the lift."],
    ['sophie', 'Okay. And what does the course cost?'],
    ['mark', "The standard fee is two hundred and ten pounds. But you said you live in Northgate, didn't you? Local residents get a discount, so for you it's {{one hundred and eighty|7}} pounds. That includes the coursebook."],
    ['sophie', 'Great. Do I need to bring anything else?'],
    ['mark', "Just a notebook and pen, obviously, and the tutor asks everyone to bring a {{dictionary|8}}. A paper one is fine, or you can use an app on your phone."],
    ['sophie', 'And how do I pay?'],
    ['mark', "You can pay online, or at reception here. We don't take cash any more, I'm afraid, so it has to be by {{card|9}}."],
    ['sophie', "That's no problem."],
    ['mark', "Last question. Just for our records, where did you hear about the course? A lot of people find us through our website."],
    ['sophie', "I did look at the website, but actually I first saw it on a {{leaflet|10}} that came through my door."],
    ['mark', "That's useful to know. Thanks, Sophie. I'll send you a confirmation email."],
    ['narrator', 'That is the end of Part 1. You now have half a minute to check your answers to Part 1.'],
    ['pause', 30, 'Checking time · Part 1'],

    ['focus', 2],
    ['narrator', 'Now turn to Part 2.'],
    ['narrator', 'Part 2. You will hear a guide talking to a group of teachers who are planning school visits to a science museum. First, you have some time to look at questions 11 to 15.'],
    ['pause', 30, 'Reading time · Questions 11–15'],
    ['narrator', 'Now listen carefully and answer questions 11 to 15.'],
    ['guide', "Good morning, everyone, and thank you for coming to our teachers' preview day at the Riverside Science Museum. I'd like to give you some information to help you plan your visits."],
    ['guide', "First, a little about the building. Because of the tall chimney, many people assume it used to be a factory, and others think it was a railway station because of the old tracks outside. In fact, it was built in nineteen twenty as a {{power station|11}}, supplying electricity to the whole of this side of the city."],
    ['guide', "Now, some good news for this term. Entry to the museum is always free, of course, but the planetarium shows and workshops normally have a small charge, and they still do. However, this month {{the audio guides are free|12}}, and they're available in eight languages."],
    ['guide', "If you're bringing a school group, please note that we ask you to {{book at least two weeks ahead|13}}, as we limit the number of groups each day. You don't need to bring packed lunches if you'd rather use the café, and we ask for one adult for every eight children, not one for every ten as it used to be."],
    ['guide', "A few rules. Visitors are welcome to take photographs anywhere in the museum, and to touch most of the exhibits, which is really the point of the place. But {{flash photography is not allowed|14}}, because it can damage some of the older objects."],
    ['guide', "Finally, the museum shop. It sells a lot more than books these days, including science kits that make great prizes. Just remember that {{it closes half an hour before the museum|15}} does. Unfortunately, we no longer offer a student discount there."],
    ['narrator', 'Before you hear the rest of the talk, you have some time to look at questions 16 to 20.'],
    ['pause', 30, 'Reading time · Questions 16–20'],
    ['narrator', 'Now listen and answer questions 16 to 20.'],
    ['guide', "Now let me tell you where the main attractions are. The museum has three floors. {{On the ground floor, as soon as you come in, you'll see the dinosaur skeletons|16}}, which are always the most popular part of the visit."],
    ['guide', "The robotics workshop used to be on the ground floor too, but it has moved, and {{it's now on the first floor|17}}, next to the lifts. The planetarium needs a high ceiling, so {{it's right at the top, on the second floor|18}}."],
    ['guide', "Our new climate exhibition opened last month. We'd planned to put it on the second floor, but in the end {{it went on the first floor|19}}, opposite the robotics workshop. And if your group brings packed lunches, the picnic area is {{on the ground floor|20}}, just behind the main shop."],
    ['guide', "Right, are there any questions before we start the tour?"],
    ['narrator', 'That is the end of Part 2. You now have half a minute to check your answers to Part 2.'],
    ['pause', 30, 'Checking time · Part 2'],

    ['focus', 3],
    ['narrator', 'Now turn to Part 3.'],
    ['narrator', 'Part 3. You will hear two students, Ben and Hana, discussing their presentation on plastic recycling with their tutor, Dr Shaw. First, you have some time to look at questions 21 to 26.'],
    ['pause', 30, 'Reading time · Questions 21–26'],
    ['narrator', 'Now listen carefully and answer questions 21 to 26.'],
    ['shaw', 'Come in, both of you. How is the presentation on plastic recycling coming along?'],
    ['hana', "Quite well, I think. We've done most of the research. The main thing we found is that recycling plastic is much harder than people imagine."],
    ['ben', "Yes. We expected the problem to be that people don't bother to sort their rubbish, but actually most households do. The real issue is {{contamination|21}}. If a bottle still has food or liquid in it, a whole load can be rejected."],
    ['hana', "And the other big problem is economic. {{Recycled plastic often costs more than new plastic|22}}, so there isn't much demand for it. We thought there might be a shortage of recycling plants, but that's not really the issue in this country."],
    ['shaw', 'Interesting. What made you choose this topic in the first place?'],
    ['ben', "Well, our local council has been running a campaign, but that wasn't the reason. It was {{a news report we both saw|23}} about plastic waste being shipped abroad. We wanted to know if that was true."],
    ['shaw', "And you've done a survey, I see. I've had a look at your questions. The sample size is fine for a project like this, and you've got a good mix of ages. My only concern is that {{some of the questions are rather leading|24}}. For example, asking whether people agree that recycling is a waste of time pushes them towards a particular answer."],
    ['hana', "That's fair. We'll mention that as a limitation."],
    ['shaw', 'How are you going to open the presentation?'],
    ['ben', "We were going to show a short video, but it's quite long. So instead we'll start by {{asking the audience a question|25}}: how many of them think their yoghurt pots get recycled. Then we'll give them the statistics."],
    ['shaw', 'Good. And how are you dividing up the work?'],
    ['hana', "Ben's doing the slides, and we'll both keep an eye on the timing. I'm going to {{prepare the handout|26}}, with a summary and a list of sources."],
    ['narrator', 'Before you hear the rest of the discussion, you have some time to look at questions 27 to 30.'],
    ['pause', 30, 'Reading time · Questions 27–30'],
    ['narrator', 'Now listen and answer questions 27 to 30.'],
    ['shaw', "In the second half, you're looking at different types of plastic packaging. What are you going to say about each one?"],
    ['ben', "We'll start with drinks bottles. People sometimes think they're a problem, but actually they're {{easy to recycle|27}}, and most councils collect them."],
    ['hana', "Then food trays, like the ones meat comes in. They can be recycled in theory, but in practice they're {{often contaminated with food|28}}, so many of them end up being burnt."],
    ['ben', "Next, carrier bags. Some people want them banned completely, but we think the key point is that the thicker ones {{can be reused many times|29}}, so they're not as bad as people think if you keep using them."],
    ['hana', "And finally, takeaway coffee cups. They look like paper, but they have a thin plastic lining, so {{very few of them are ever collected|30}} for recycling at all. Most go straight into general waste."],
    ['shaw', "That sounds like a strong structure. Well done."],
    ['narrator', 'That is the end of Part 3. You now have half a minute to check your answers to Part 3.'],
    ['pause', 30, 'Checking time · Part 3'],

    ['focus', 4],
    ['narrator', 'Now turn to Part 4.'],
    ['narrator', 'Part 4. You will hear a lecture about coral reefs. First, you have some time to look at questions 31 to 40.'],
    ['pause', 45, 'Reading time · Questions 31–40'],
    ['narrator', 'Now listen carefully and answer questions 31 to 40.'],
    ['lecturer', "Good afternoon. Today's lecture is about coral reefs, some of the most important and most threatened ecosystems on the planet."],
    ['lecturer', "Let's begin with a basic question: what is coral? Many people think it's a kind of rock, or perhaps a plant. In fact, a coral is an animal. Each coral is made up of thousands of tiny creatures called polyps, and they're closely related to {{jellyfish|31}} and sea anemones."],
    ['lecturer', "However, corals have an unusual partnership. Inside their tissues live microscopic algae. The algae use sunlight to produce sugars, and they share these with the coral, providing most of its {{food|32}}. In return, the coral gives the algae shelter. It's the algae, by the way, that give many corals their bright colours."],
    ['lecturer', "Why do reefs matter so much? Coral reefs cover less than one per cent of the sea floor, yet they support around a quarter of all marine {{species|33}}. They are also important for people. Reefs act as natural barriers, reducing the {{energy|34}} of waves before they reach the coast, which protects beaches and homes from storms. And millions of people depend on reefs for fishing and tourism."],
    ['lecturer', "Unfortunately, reefs face serious threats. The most widespread is bleaching. When the water becomes too {{warm|35}}, even by just one or two degrees for a few weeks, the coral becomes stressed and expels its algae. Without them, the coral loses its colour and turns {{white|36}}. If the water cools quickly, the algae can return, but if the stress continues, the coral may starve and die."],
    ['lecturer', "There are other threats as well. Pollution from {{farms|37}}, especially fertilisers washed into rivers and out to sea, encourages the growth of algae on the surface of reefs, which blocks sunlight. And overfishing is a problem, because it removes the fish that normally eat {{seaweed|38}}. Without these fish, seaweed can spread across a reef and smother the coral."],
    ['lecturer', "So, what can be done? Reducing pollution and protecting fish populations certainly help. In addition, scientists are now actively restoring damaged reefs. One method is to grow small pieces of coral in underwater {{nurseries|39}}, where they're attached to frames until they're large enough to be transplanted onto the reef."],
    ['lecturer', "Researchers have also noticed that some corals survive bleaching events much better than others. These corals seem to be more tolerant of {{heat|40}}, and scientists are trying to breed them, in the hope that future reefs will be better able to cope with warmer oceans."],
    ['lecturer', "Next week, we'll look at another marine ecosystem: mangrove forests."],
    ['narrator', 'That is the end of Part 4. That is the end of the listening test.'],
  ];

  // Questions. kind: gap | mcq | two | match
  const LIMIT_WN = 'ONE WORD AND/OR A NUMBER';
  const Q = {
    1:  { kind: 'gap', ans: ['caldwell'], limit: 'wn' },
    2:  { kind: 'gap', ans: ['4', 'four'], limit: 'wn' },
    3:  { kind: 'gap', ans: ['tuesday', 'tuesdays'], limit: 'wn' },
    4:  { kind: 'gap', ans: ['7.15', '7:15', '19.15', '19:15', '7.15pm', '7:15pm'], limit: 'wn', key: '7.15' },
    5:  { kind: 'gap', ans: ['10', 'ten'], limit: 'wn' },
    6:  { kind: 'gap', ans: ['b12'], limit: 'wn', key: 'B12' },
    7:  { kind: 'gap', ans: ['180'], limit: 'wn' },
    8:  { kind: 'gap', ans: ['dictionary'], limit: 'wn' },
    9:  { kind: 'gap', ans: ['card'], limit: 'wn' },
    10: { kind: 'gap', ans: ['leaflet'], limit: 'wn' },
    11: { kind: 'mcq', q: 'The museum building was originally', opts: { A: 'a factory.', B: 'a railway station.', C: 'a power station.' }, ans: 'C' },
    12: { kind: 'mcq', q: 'What is free this month?', opts: { A: 'audio guides', B: 'planetarium shows', C: 'workshops' }, ans: 'A' },
    13: { kind: 'mcq', q: 'School groups must', opts: { A: 'bring their own lunches.', B: 'book at least two weeks in advance.', C: 'have one adult for every ten children.' }, ans: 'B' },
    14: { kind: 'mcq', q: 'Visitors are not allowed to', opts: { A: 'take photographs.', B: 'touch the exhibits.', C: 'use flash photography.' }, ans: 'C' },
    15: { kind: 'mcq', q: 'The museum shop', opts: { A: 'closes before the museum does.', B: 'sells only books.', C: 'gives students a discount.' }, ans: 'A' },
    16: { kind: 'match', label: 'Dinosaur skeletons', ans: 'A' },
    17: { kind: 'match', label: 'Robotics workshop', ans: 'B' },
    18: { kind: 'match', label: 'Planetarium', ans: 'C' },
    19: { kind: 'match', label: 'Climate exhibition', ans: 'B' },
    20: { kind: 'match', label: 'Picnic area', ans: 'A' },
    21: { kind: 'two', pair: [21, 22], ans: ['A', 'C'] },
    22: { kind: 'two', pair: [21, 22], ans: ['A', 'C'] },
    23: { kind: 'mcq', q: 'Why did the students choose this topic?', opts: { A: 'Their local council asked for help.', B: 'They both saw a news report.', C: 'Their tutor suggested it.' }, ans: 'B' },
    24: { kind: 'mcq', q: 'What does the tutor say about their survey?', opts: { A: 'The sample was too small.', B: 'The age range was too narrow.', C: 'Some questions influenced the answers.' }, ans: 'C' },
    25: { kind: 'mcq', q: 'How will the students begin their presentation?', opts: { A: 'with a short video', B: 'with a question to the audience', C: 'with some statistics' }, ans: 'B' },
    26: { kind: 'mcq', q: 'Hana will be responsible for', opts: { A: 'the slides.', B: 'the timing.', C: 'the handout.' }, ans: 'C' },
    27: { kind: 'match', label: 'drinks bottles', ans: 'A' },
    28: { kind: 'match', label: 'food trays', ans: 'B' },
    29: { kind: 'match', label: 'carrier bags', ans: 'D' },
    30: { kind: 'match', label: 'coffee cups', ans: 'E' },
    31: { kind: 'gap', ans: ['jellyfish'], limit: 'w' },
    32: { kind: 'gap', ans: ['food'], limit: 'w' },
    33: { kind: 'gap', ans: ['species'], limit: 'w' },
    34: { kind: 'gap', ans: ['energy'], limit: 'w' },
    35: { kind: 'gap', ans: ['warm'], limit: 'w' },
    36: { kind: 'gap', ans: ['white'], limit: 'w' },
    37: { kind: 'gap', ans: ['farms', 'farming'], limit: 'w' },
    38: { kind: 'gap', ans: ['seaweed'], limit: 'w' },
    39: { kind: 'gap', ans: ['nurseries'], limit: 'w' },
    40: { kind: 'gap', ans: ['heat'], limit: 'w' },
  };
  const FLOORS = { A: 'Ground floor', B: 'First floor', C: 'Second floor' };
  const TWO_OPTS = { A: 'contamination of the materials', B: 'a shortage of collection lorries', C: 'the cost of recycled plastic', D: 'people refusing to sort their rubbish', E: 'too few recycling plants' };
  const OPINIONS = { A: 'They are easy to recycle.', B: 'They are often contaminated.', C: 'They should be banned.', D: 'They can be reused many times.', E: 'They are rarely collected.', F: 'They are mainly sent abroad.' };

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
        <h4>Northgate Adult Education Centre · Enrolment form</h4>
        <div class="line"><span>Course:</span><span class="example">Spanish — Example: <u>Beginners</u></span></div>
        <div class="line"><span>Name:</span><span>Sophie ${gap(1)}</span></div>
        <div class="line"><span>Address:</span><span>Flat ${gap(2)}, 19 Ashby Road</span></div>
        <div class="line"><span>Day of class:</span><span>${gap(3)}</span></div>
        <div class="line"><span>Start time:</span><span>${gap(4)} pm</span></div>
        <div class="line"><span>Length of course:</span><span>${gap(5)} weeks</span></div>
        <div class="sub">Other information</div>
        <div class="line"><span>Room:</span><span>${gap(6)} (first floor)</span></div>
        <div class="line"><span>Fee (local resident):</span><span>£ ${gap(7)}</span></div>
        <div class="line"><span>Bring:</span><span>notebook, pen and a ${gap(8)}</span></div>
        <div class="line"><span>Payment:</span><span>online or at reception, by ${gap(9)} only</span></div>
        <div class="line"><span>Heard about course from:</span><span>a ${gap(10)}</span></div>
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
      <p class="instr">Where in the museum is each of the following? Choose the correct letter, <b>A, B or C</b>, next to Questions 16–20. <b>NB</b> You may use any letter more than once.</p>
      ${box('Riverside Science Museum', FLOORS)}
      ${matchRows([16, 17, 18, 19, 20], FLOORS)}
    </div>
  </section>

  <section class="part" id="part-3" data-part="3" hidden>
    <div class="part-head"><h2>Part 3</h2><span class="label">Questions 21–30</span></div>
    <div class="qblock">
      <h3>Questions 21 and 22</h3>
      <p class="instr">Choose <b>TWO</b> letters, <b>A–E</b>.</p>
      ${twoBlock(21, 'Which <b>TWO</b> problems with plastic recycling did the students find in their research?', TWO_OPTS)}
    </div>
    <div class="qblock">
      <h3>Questions 23–26</h3>
      <p class="instr">Choose the correct letter, <b>A, B or C</b>.</p>
      ${[23, 24, 25, 26].map(mcq).join('')}
    </div>
    <div class="qblock">
      <h3>Questions 27–30</h3>
      <p class="instr">What do the students say about each type of plastic packaging? Choose <b>FOUR</b> answers from the box and write the correct letter, <b>A–F</b>, next to Questions 27–30.</p>
      ${box('Comments', OPINIONS)}
      ${matchRows([27, 28, 29, 30], OPINIONS)}
    </div>
  </section>

  <section class="part" id="part-4" data-part="4" hidden>
    <div class="part-head"><h2>Part 4</h2><span class="label">Questions 31–40</span></div>
    <div class="qblock">
      <h3>Questions 31–40</h3>
      <p class="instr">Complete the notes below. Write <b>ONE WORD ONLY</b> for each answer.</p>
      <div class="notes">
        <h4>Coral reefs</h4>
        <span class="h">What is coral?</span>
        <ul>
          <li>An animal made of polyps, related to ${gap(31)} and sea anemones.</li>
          <li>Algae inside the coral provide most of its ${gap(32)}.</li>
        </ul>
        <span class="h">Importance</span>
        <ul>
          <li>Reefs support about 25% of marine ${gap(33)}.</li>
          <li>They protect coasts by reducing the ${gap(34)} of waves.</li>
        </ul>
        <span class="h">Threats</span>
        <ul>
          <li>Bleaching occurs when water is too ${gap(35)}.</li>
          <li>Bleached coral turns ${gap(36)}.</li>
          <li>Fertilisers from ${gap(37)} cause algae to grow on reefs.</li>
          <li>Overfishing removes fish that eat ${gap(38)}.</li>
        </ul>
        <span class="h">Solutions</span>
        <ul>
          <li>Coral is grown in underwater ${gap(39)} before transplanting.</li>
          <li>Scientists are breeding corals that tolerate ${gap(40)}.</li>
        </ul>
      </div>
    </div>
  </section>`;

  // Part changes and reading/checking pauses in the recording (seconds) — filled in by tools/make_listening_audio.py
  const TIMELINE = [{"t":1.0,"focus":1},{"t":36.83,"pause":30,"label":"Reading time · Questions 1–5"},{"t":66.83,"speech":1,"part":1},{"t":198.51,"pause":30,"label":"Reading time · Questions 6–10"},{"t":228.51,"speech":1,"part":1},{"t":310.09,"pause":30,"label":"Checking time · Part 1"},{"t":340.09,"focus":2},{"t":340.09,"speech":1,"part":2},{"t":354.83,"pause":30,"label":"Reading time · Questions 11–15"},{"t":384.83,"speech":1,"part":2},{"t":486.69,"pause":30,"label":"Reading time · Questions 16–20"},{"t":516.69,"speech":1,"part":2},{"t":572.22,"pause":30,"label":"Checking time · Part 2"},{"t":602.22,"focus":3},{"t":602.22,"speech":1,"part":3},{"t":619.49,"pause":30,"label":"Reading time · Questions 21–26"},{"t":649.49,"speech":1,"part":3},{"t":764.52,"pause":30,"label":"Reading time · Questions 27–30"},{"t":794.52,"speech":1,"part":3},{"t":856.93,"pause":30,"label":"Checking time · Part 3"},{"t":886.93,"focus":4},{"t":886.93,"speech":1,"part":4},{"t":897.89,"pause":45,"label":"Reading time · Questions 31–40"},{"t":942.89,"speech":1,"part":4}];
  const partNames = { 1: 'Part 1 · Enrolling on a Spanish course', 2: 'Part 2 · Riverside Science Museum', 3: 'Part 3 · Plastic recycling presentation', 4: 'Part 4 · Coral reefs' };
  window.LISTENING_TEST = { num: 3, audio: 'audio/listening-test3.mp3', minutes: 20, mb: 10, roles: ROLES, script: SCRIPT, Q, paper: PAPER, timeline: TIMELINE, partNames };
})();
