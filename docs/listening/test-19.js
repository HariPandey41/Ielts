// IELTS Listening · Full Mock Test 9 — content only. The exam engine is assets/listening-exam.js.
// Kept for the mock test: this test is not listed with the practice tests.
(() => {
  'use strict';
  // Speakers: label for the transcript, voice for tools/make_listening_audio.py
  const ROLES = {
    narrator:  { label: 'Narrator', voice: 'bm_george', speed: 0.92, lang: 'en-gb' },
    secretary: { label: 'Choir secretary', voice: 'bf_emma', speed: 0.98, lang: 'en-gb' },
    daniel:    { label: 'Daniel', voice: 'am_eric', speed: 0.98, lang: 'en-us' },
    guide:     { label: 'Guide', voice: 'bm_lewis', speed: 0.97, lang: 'en-gb' },
    amira:     { label: 'Amira', voice: 'af_nicole', speed: 0.98, lang: 'en-us' },
    jack:      { label: 'Jack', voice: 'am_liam', speed: 0.98, lang: 'en-us' },
    harris:    { label: 'Dr Harris', voice: 'bf_alice', speed: 0.96, lang: 'en-gb' },
    lecturer:  { label: 'Lecturer', voice: 'af_sarah', speed: 0.95, lang: 'en-us' },
  };

  // Script: [role, text] lines, or ['pause', seconds, label], or ['focus', part]
  // {{text|n}} marks where the answer to question n is heard.
  const SCRIPT = [
    ['focus', 1],
    ['narrator', 'IELTS Listening. Full Mock Test 9.'],
    ['narrator', 'In the test, you will hear a number of different recordings and you will have to answer questions on what you hear. There will be time for you to read the instructions and questions, and you will have a chance to check your work. All the recordings will be played once only. The test is in four parts.'],
    ['narrator', 'Now turn to Part 1.'],
    ['narrator', 'Part 1. You will hear a man phoning the secretary of a community choir because he would like to join. First, you have some time to look at questions 1 to 5.'],
    ['pause', 30, 'Reading time · Questions 1–5'],
    ['narrator', 'You will see that there is an example that has been done for you. On this occasion only, the conversation relating to this will be played first.'],
    ['secretary', 'Hello, Riverside Community Choir.'],
    ['daniel', "Hi. I saw that you're looking for new members, and I'd like to find out more. When do you meet?"],
    ['secretary', "We rehearse every Tuesday evening, all year round except August."],
    ['narrator', "The choir meets on Tuesday evenings, so 'Tuesday' has been written in the space. Now we shall begin. You should answer the questions as you listen, because you will not hear the recording a second time. Listen carefully and answer questions 1 to 5."],
    ['secretary', 'Hello, Riverside Community Choir.'],
    ['daniel', "Hi. I saw that you're looking for new members, and I'd like to find out more. When do you meet?"],
    ['secretary', "We rehearse every Tuesday evening, all year round except August. Shall I take some details? What's your name?"],
    ['daniel', "Daniel {{Okafor|1}}. That's O, K, A, F, O, R."],
    ['secretary', "Thanks, Daniel. And do you know what kind of voice you have?"],
    ['daniel', "I sang bass when I was at school, but my voice has changed since then. These days I'm much more comfortable as a {{tenor|2}}."],
    ['secretary', "Oh, good, we're always short of those. Can I ask how you heard about us?"],
    ['daniel', "I looked at your website after a friend mentioned you, but what made me call was a {{poster|3}} I saw in the supermarket."],
    ['secretary', "And have you sung in a choir before?"],
    ['daniel', "A little at school, but I sang properly at {{university|4}}, for three years. I haven't sung for a while, though."],
    ['secretary', "That's fine. Do you play an instrument at all?"],
    ['daniel', "I had piano lessons as a child, but I gave up. I do still play the {{guitar|5}}, though, so I can read music a bit."],
    ['narrator', 'Before you hear the rest of the conversation, you have some time to look at questions 6 to 10.'],
    ['pause', 30, 'Reading time · Questions 6–10'],
    ['narrator', 'Now listen and answer questions 6 to 10.'],
    ['daniel', 'Where do the rehearsals take place?'],
    ['secretary', "We used to meet in the community centre, but it's being rebuilt, so now we rehearse in the {{school|6}} on Park Road, in the main hall."],
    ['daniel', "And is there a membership fee?"],
    ['secretary', "Yes. It's normally sixty pounds for the year, but as you'd be joining halfway through, it's {{forty-five|7}}."],
    ['daniel', "That's reasonable. When's your next concert?"],
    ['secretary', "We usually have one in November, but this year the cathedral was already booked, so it'll be in {{December|8}}, just before Christmas."],
    ['daniel', "Do I need to buy anything? A uniform?"],
    ['secretary', "No, we just wear our own black clothes for concerts. The only thing you have to buy is a black {{folder|9}} for your music, so everyone looks the same on stage. We sell them for five pounds."],
    ['daniel', "And for my first rehearsal?"],
    ['secretary', "We start at half past seven, but please come {{fifteen|10}} minutes early, so you can meet the conductor and she can hear your voice."],
    ['daniel', "Great. I'll see you on Tuesday, then."],
    ['narrator', 'That is the end of Part 1. You now have half a minute to check your answers to Part 1.'],
    ['pause', 30, 'Checking time · Part 1'],

    ['focus', 2],
    ['narrator', 'Now turn to Part 2.'],
    ['narrator', 'Part 2. You will hear a guide talking to visitors at the start of a tour of a museum in an old prison. First, you have some time to look at questions 11 to 16.'],
    ['pause', 30, 'Reading time · Questions 11–16'],
    ['narrator', 'Now listen carefully and answer questions 11 to 16.'],
    ['guide', "Good morning, everyone, and welcome to the Castlegate Prison Museum. I'm going to give you a short introduction before you explore."],
    ['guide', "The prison opened in {{eighteen twenty-three|11}}, and it was considered very modern at the time, because each prisoner was supposed to have a cell of his own."],
    ['guide', "In practice, the prison was soon overcrowded. Some guidebooks say that four men were put in each cell, but the prison records show that by the eighteen fifties it was usual to have {{three|12}} men in a cell built for one."],
    ['guide', "Life here was hard. Many prisoners spent hours every day walking on a huge wheel called a treadwheel. Its main purpose was punishment, but it was also used to grind {{corn|13}}, which was sold to pay some of the prison's costs."],
    ['guide', "The prison also followed what was called the silent system. Prisoners worked and ate together, but they weren't allowed to {{speak|14}} to each other, and anyone who broke the rule could be punished with bread and water."],
    ['guide', "The prison finally closed in {{nineteen seventy-one|15}}, when a new prison was built outside the city."],
    ['guide', "For many years after that, the building was used by the city council for {{storage|16}}, until a group of local historians persuaded the council to turn it into a museum, which opened in nineteen ninety-five."],
    ['narrator', 'Before you hear the rest of the talk, you have some time to look at questions 17 to 20.'],
    ['pause', 30, 'Reading time · Questions 17–20'],
    ['narrator', 'Now listen and answer questions 17 to 20.'],
    ['guide', "Now, there's plenty to do. We used to let groups spend a night in the cells, but we've had to stop that, I'm afraid. And the treadwheel is still here, but for safety reasons you can only look at it. However, {{in the room by the main gate, you can try on copies of the uniforms prisoners wore|17}}, which is very popular with children. And if you think one of your ancestors was held here, {{you can search the prison records in our archive room|18}}. Many visitors have found names they recognise."],
    ['guide', "Just a couple of warnings before you go. Most of the building is open, including the kitchens and the exercise yard, and the governor's house reopened last month after being repainted. But {{the chapel is closed while its roof is repaired|19}}. And {{the walkway along the top of the outer wall is closed today|20}}, because it's dangerous when it's wet. Right, enjoy your visit."],
    ['narrator', 'That is the end of Part 2. You now have half a minute to check your answers to Part 2.'],
    ['pause', 30, 'Checking time · Part 2'],

    ['focus', 3],
    ['narrator', 'Now turn to Part 3.'],
    ['narrator', 'Part 3. You will hear two geography students, Amira and Jack, talking to their tutor, Dr Harris, about a field trip they made to study coastal erosion. First, you have some time to look at questions 21 to 25.'],
    ['pause', 30, 'Reading time · Questions 21–25'],
    ['narrator', 'Now listen carefully and answer questions 21 to 25.'],
    ['harris', "So, you've been to the coast. Why did you choose Sandmouth in the end?"],
    ['amira', "Well, it's not the place where the cliffs are disappearing fastest. That's further north. But neither of us has a car, and {{Sandmouth is the only site we could easily get to by train|21}}."],
    ['harris', "Fair enough. Did anything surprise you?"],
    ['jack', "We knew the cliffs were retreating, so that wasn't a surprise, and only a few houses have actually been lost so far. What surprised us was {{that most of the people we spoke to didn't want the sea wall to be extended|22}}. They thought it would spoil the beach."],
    ['harris', "Interesting. How did you measure how far the cliffs have moved?"],
    ['amira', "We wanted to use a drone, but we'd have needed permission, and there wasn't time. So {{we compared aerial photographs from the nineteen fifties with recent ones|23}}. It worked really well."],
    ['harris', "Good. I've read your draft, and the length is fine, and your references are all there. But {{at the moment it mostly describes what you saw. There isn't enough analysis|24}}. You need to explain why the erosion is happening at different rates."],
    ['jack', "Okay. We'll work on that."],
    ['harris', "And for the presentation next month?"],
    ['amira', "We thought about building a model of the coast, but it would take too long. And our interview recordings aren't clear enough, because of the wind. So {{we'll show a short video we filmed on the beach|25}}."],
    ['narrator', 'Before you hear the rest of the discussion, you have some time to look at questions 26 to 30.'],
    ['pause', 30, 'Reading time · Questions 26–30'],
    ['narrator', 'Now listen and answer questions 26 to 30.'],
    ['harris', "Your report looks at five ways of protecting the coast. Let's go through them. What did you say about the sea wall?"],
    ['jack', "It's very effective at protecting the town, but {{it costs far more to build than any of the other methods|26}}. The new section alone would cost millions."],
    ['harris', 'And the groynes, the wooden barriers that go down the beach?'],
    ['amira', "{{They stop the sand from being carried along the coast by the waves|27}}, so the beach stays wide and protects the cliffs behind it."],
    ['harris', 'What about the rock armour, the big boulders at the bottom of the cliffs?'],
    ['jack', "It works quite well, but {{people really don't like the way it looks|28}}. Several of the residents we spoke to called it ugly."],
    ['harris', 'And beach nourishment?'],
    ['amira', "That's when sand is brought in by ship and added to the beach. It makes the beach better for tourists, but {{the sand gets washed away, so it has to be done again every few years|29}}."],
    ['harris', 'And finally, managed retreat?'],
    ['jack', "That's where the sea is allowed to flood low-lying land. People lose some farmland, but {{it creates salt marshes, which are excellent for birds and other wildlife|30}}."],
    ['harris', "Very good. You've covered a lot."],
    ['narrator', 'That is the end of Part 3. You now have half a minute to check your answers to Part 3.'],
    ['pause', 30, 'Checking time · Part 3'],

    ['focus', 4],
    ['narrator', 'Now turn to Part 4.'],
    ['narrator', 'Part 4. You will hear a lecture about ants. First, you have some time to look at questions 31 to 40.'],
    ['pause', 45, 'Reading time · Questions 31–40'],
    ['narrator', 'Now listen carefully and answer questions 31 to 40.'],
    ['lecturer', "Good morning. Today we're going to look at some of the most successful animals on the planet: ants."],
    ['lecturer', "Ants have existed for well over a hundred million years. They evolved from {{wasps|31}}, which is why many ants still have a sting. There are more than fourteen thousand known species, and they live on every continent except Antarctica."],
    ['lecturer', "There are also a huge number of them. You may have heard the claim that all the ants in the world weigh about the same as all the people. A study in twenty twenty-two suggested that this was an exaggeration: their total mass is probably about one fifth of that of {{humans|32}}. But that's still around twenty thousand million million ants."],
    ['lecturer', "How do ants organise themselves? They have no leader giving orders. Instead, they communicate mainly by using chemicals called {{pheromones|33}}. An ant that finds food, for example, leaves a chemical trail on its way back to the nest, which other ants follow."],
    ['lecturer', "Some ants are farmers. Leafcutter ants in Central and South America cut pieces of leaves and carry them home, but they don't eat them. They use them to grow a {{fungus|34}}, which is their main food. Other species look after small insects called aphids, protecting them from predators and collecting the sweet {{honeydew|35}} they produce, rather like a farmer milking cows."],
    ['lecturer', "Ants are also remarkable for what they can achieve together. Army ants link their bodies to form living {{bridges|36}}, so that the rest of the colony can cross gaps. Some colonies are enormous. One supercolony of Argentine ants stretches for about six thousand kilometres along the coast of southern {{Europe|37}}, and ants from distant parts of it don't fight each other. And when their homes are flooded, fire ants hold on to one another to make rafts, so that they can survive {{floods|38}} that last for weeks."],
    ['lecturer', "Humans have learned from ants. Computer scientists have developed programs that copy the way ants use chemical trails, in order to find the shortest {{routes|39}} for delivery vans and for data travelling through networks."],
    ['lecturer', "Finally, ants are very important for the environment. They spread the seeds of many plants, and by digging tunnels they mix and improve the {{soil|40}}. In some dry regions, they do more of this work than earthworms."],
    ['lecturer', "Next week, we'll look at another social insect, the termite."],
    ['narrator', 'That is the end of Part 4. That is the end of the listening test.'],
  ];

  // Questions. kind: gap | mcq | two | match
  const LIMIT_WN = 'ONE WORD AND/OR A NUMBER';
  const LIMIT_W = 'ONE WORD ONLY';
  const Q = {
    1:  { kind: 'gap', ans: ['okafor'], limit: 'wn', key: 'Okafor' },
    2:  { kind: 'gap', ans: ['tenor'], limit: 'wn' },
    3:  { kind: 'gap', ans: ['poster'], limit: 'wn' },
    4:  { kind: 'gap', ans: ['university'], limit: 'wn' },
    5:  { kind: 'gap', ans: ['guitar'], limit: 'wn' },
    6:  { kind: 'gap', ans: ['school'], limit: 'wn' },
    7:  { kind: 'gap', ans: ['45', 'forty-five'], limit: 'wn' },
    8:  { kind: 'gap', ans: ['december'], limit: 'wn', key: 'December' },
    9:  { kind: 'gap', ans: ['folder'], limit: 'wn' },
    10: { kind: 'gap', ans: ['15', 'fifteen'], limit: 'wn' },
    11: { kind: 'gap', ans: ['1823'], limit: 'wn' },
    12: { kind: 'gap', ans: ['3', 'three'], limit: 'wn' },
    13: { kind: 'gap', ans: ['corn'], limit: 'wn' },
    14: { kind: 'gap', ans: ['speak', 'talk'], limit: 'wn' },
    15: { kind: 'gap', ans: ['1971'], limit: 'wn' },
    16: { kind: 'gap', ans: ['storage'], limit: 'wn' },
    17: { kind: 'two', pair: [17, 18], ans: ['A', 'C'] },
    18: { kind: 'two', pair: [17, 18], ans: ['A', 'C'] },
    19: { kind: 'two', pair: [19, 20], ans: ['A', 'E'] },
    20: { kind: 'two', pair: [19, 20], ans: ['A', 'E'] },
    21: { kind: 'mcq', q: 'Why did the students choose Sandmouth?', opts: { A: 'The cliffs there are eroding faster than anywhere else.', B: 'It was easy to reach by public transport.', C: 'Their tutor recommended it.' }, ans: 'B' },
    22: { kind: 'mcq', q: 'What surprised the students at Sandmouth?', opts: { A: 'how quickly the cliffs were retreating', B: 'how many houses had been lost', C: 'local people’s opinion of the sea wall' }, ans: 'C' },
    23: { kind: 'mcq', q: 'How did the students measure the movement of the cliffs?', opts: { A: 'by comparing old and new photographs', B: 'by measuring from fixed posts', C: 'by using a drone' }, ans: 'A' },
    24: { kind: 'mcq', q: 'What does Dr Harris say is the main weakness of the draft?', opts: { A: 'It is too long.', B: 'It does not contain enough analysis.', C: 'Some references are missing.' }, ans: 'B' },
    25: { kind: 'mcq', q: 'What will the students use in their presentation?', opts: { A: 'a model of the coast', B: 'recordings of interviews', C: 'a video' }, ans: 'C' },
    26: { kind: 'match', label: 'sea wall', ans: 'A' },
    27: { kind: 'match', label: 'groynes', ans: 'C' },
    28: { kind: 'match', label: 'rock armour', ans: 'F' },
    29: { kind: 'match', label: 'beach nourishment', ans: 'B' },
    30: { kind: 'match', label: 'managed retreat', ans: 'D' },
    31: { kind: 'gap', ans: ['wasps'], limit: 'w' },
    32: { kind: 'gap', ans: ['humans', 'people'], limit: 'w' },
    33: { kind: 'gap', ans: ['pheromones'], limit: 'w' },
    34: { kind: 'gap', ans: ['fungus'], limit: 'w' },
    35: { kind: 'gap', ans: ['honeydew'], limit: 'w' },
    36: { kind: 'gap', ans: ['bridges'], limit: 'w' },
    37: { kind: 'gap', ans: ['europe'], limit: 'w', key: 'Europe' },
    38: { kind: 'gap', ans: ['floods', 'flooding'], limit: 'w' },
    39: { kind: 'gap', ans: ['routes', 'route'], limit: 'w' },
    40: { kind: 'gap', ans: ['soil'], limit: 'w' },
  };
  const FEATURES = { A: 'the most expensive to build', B: 'needs to be repeated regularly', C: 'stops sand moving along the coast', D: 'provides new habitats for wildlife', E: 'makes the water safer for swimming', F: 'disliked because of its appearance', G: 'can be built without machines' };

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
        <h4>Riverside Community Choir · New member form</h4>
        <div class="line"><span>Rehearsals:</span><span class="example">Example: <u>Tuesday</u> evenings</span></div>
        <div class="line"><span>Name:</span><span>Daniel ${gap(1)}</span></div>
        <div class="line"><span>Voice:</span><span>${gap(2)}</span></div>
        <div class="line"><span>Heard about the choir:</span><span>from a ${gap(3)}</span></div>
        <div class="line"><span>Experience:</span><span>sang in a choir at ${gap(4)}</span></div>
        <div class="line"><span>Instrument:</span><span>plays the ${gap(5)}</span></div>
        <div class="sub">Choir information</div>
        <div class="line"><span>Rehearsals held in:</span><span>the ${gap(6)} on Park Road</span></div>
        <div class="line"><span>Fee for this year:</span><span>£ ${gap(7)}</span></div>
        <div class="line"><span>Next concert:</span><span>in ${gap(8)}</span></div>
        <div class="line"><span>Must buy:</span><span>a black ${gap(9)}</span></div>
        <div class="line"><span>First rehearsal:</span><span>arrive ${gap(10)} minutes early</span></div>
      </div>
    </div>
  </section>

  <section class="part" id="part-2" data-part="2" hidden>
    <div class="part-head"><h2>Part 2</h2><span class="label">Questions 11–20</span></div>
    <div class="qblock">
      <h3>Questions 11–16</h3>
      <p class="instr">Complete the notes below. Write <b>${LIMIT_WN}</b> for each answer.</p>
      <div class="notes">
        <h4>Castlegate Prison Museum</h4>
        <ul>
          <li>The prison opened in ${gap(11)}.</li>
          <li>By the 1850s, there were usually ${gap(12)} men in each cell.</li>
          <li>The treadwheel was used to grind ${gap(13)}.</li>
          <li>Under the silent system, prisoners could not ${gap(14)} to each other.</li>
          <li>The prison closed in ${gap(15)}.</li>
          <li>The council then used the building for ${gap(16)}.</li>
        </ul>
      </div>
    </div>
    ${two(17, 'Which <b>TWO</b> things can visitors do at the museum?', { A: 'try on prison uniforms', B: 'spend a night in a cell', C: 'search old prison records', D: 'ring the prison bell', E: 'walk on the treadwheel' })}
    ${two(19, 'Which <b>TWO</b> parts of the prison are closed?', { A: 'the chapel', B: 'the kitchens', C: 'the governor’s house', D: 'the exercise yard', E: 'the wall walkway' })}
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
      <p class="instr">What do the students say about each method of protecting the coast? Choose <b>FIVE</b> answers from the box and write the correct letter, <b>A–G</b>, next to Questions 26–30.</p>
      ${box('Features', FEATURES)}
      ${matchRows([26, 27, 28, 29, 30], FEATURES)}
    </div>
  </section>

  <section class="part" id="part-4" data-part="4" hidden>
    <div class="part-head"><h2>Part 4</h2><span class="label">Questions 31–40</span></div>
    <div class="qblock">
      <h3>Questions 31–40</h3>
      <p class="instr">Complete the notes below. Write <b>${LIMIT_W}</b> for each answer.</p>
      <div class="notes">
        <h4>Ants</h4>
        <span class="h">Background</span>
        <ul>
          <li>Ants evolved from ${gap(31)}.</li>
          <li>Their total mass is about one fifth of that of ${gap(32)}.</li>
          <li>They communicate mainly with chemicals called ${gap(33)}.</li>
        </ul>
        <span class="h">Farming</span>
        <ul>
          <li>Leafcutter ants use leaves to grow a ${gap(34)}.</li>
          <li>Some ants collect ${gap(35)} from aphids.</li>
        </ul>
        <span class="h">Working together</span>
        <ul>
          <li>Army ants make living ${gap(36)}.</li>
          <li>An Argentine ant supercolony stretches along the coast of southern ${gap(37)}.</li>
          <li>Fire ants make rafts to survive ${gap(38)}.</li>
        </ul>
        <span class="h">Ants and people</span>
        <ul>
          <li>Computer programs copy ants to find the shortest ${gap(39)}.</li>
          <li>Ants dig tunnels that improve the ${gap(40)}.</li>
        </ul>
      </div>
    </div>
  </section>`;

  // Part changes and reading/checking pauses in the recording (seconds) — filled in by tools/make_listening_audio.py
  const TIMELINE = [{"t":1.0,"focus":1},{"t":37.39,"pause":30,"label":"Reading time · Questions 1–5"},{"t":67.39,"speech":1,"part":1},{"t":169.03,"pause":30,"label":"Reading time · Questions 6–10"},{"t":199.03,"speech":1,"part":1},{"t":263.87,"pause":30,"label":"Checking time · Part 1"},{"t":293.87,"focus":2},{"t":293.87,"speech":1,"part":2},{"t":308.21,"pause":30,"label":"Reading time · Questions 11–16"},{"t":338.21,"speech":1,"part":2},{"t":428.48,"pause":30,"label":"Reading time · Questions 17–20"},{"t":458.48,"speech":1,"part":2},{"t":522.9,"pause":30,"label":"Checking time · Part 2"},{"t":552.9,"focus":3},{"t":552.9,"speech":1,"part":3},{"t":571.36,"pause":30,"label":"Reading time · Questions 21–25"},{"t":601.36,"speech":1,"part":3},{"t":710.25,"pause":30,"label":"Reading time · Questions 26–30"},{"t":740.25,"speech":1,"part":3},{"t":826.61,"pause":30,"label":"Checking time · Part 3"},{"t":856.61,"focus":4},{"t":856.61,"speech":1,"part":4},{"t":867.01,"pause":45,"label":"Reading time · Questions 31–40"},{"t":912.01,"speech":1,"part":4}];
  const partNames = { 1: 'Part 1 · Joining a choir', 2: 'Part 2 · Castlegate Prison Museum', 3: 'Part 3 · A coastal erosion field trip', 4: 'Part 4 · Ants' };
  window.LISTENING_TEST = { num: 19, name: 'Full Mock Test 9', audio: 'audio/listening-test19.mp3', minutes: 18, mb: 8, roles: ROLES, script: SCRIPT, Q, paper: PAPER, timeline: TIMELINE, partNames };
})();
