// IELTS Listening · Full Mock Test 7 — content only. The exam engine is assets/listening-exam.js.
// Kept for the mock test: this test is not listed with the practice tests.
(() => {
  'use strict';
  // Speakers: label for the transcript, voice for tools/make_listening_audio.py
  const ROLES = {
    narrator: { label: 'Narrator', voice: 'bm_george', speed: 0.92, lang: 'en-gb' },
    owner:    { label: 'Café owner', voice: 'af_sarah', speed: 0.98, lang: 'en-us' },
    sofia:    { label: 'Sofia', voice: 'bf_alice', speed: 0.98, lang: 'en-gb' },
    guide:    { label: 'Guide', voice: 'bm_daniel', speed: 0.97, lang: 'en-gb' },
    zara:     { label: 'Zara', voice: 'bf_isabella', speed: 0.98, lang: 'en-gb' },
    felix:    { label: 'Felix', voice: 'am_adam', speed: 0.98, lang: 'en-us' },
    ward:     { label: 'Ms Ward', voice: 'af_river', speed: 0.96, lang: 'en-us' },
    lecturer: { label: 'Lecturer', voice: 'bm_lewis', speed: 0.95, lang: 'en-gb' },
  };

  // Script: [role, text] lines, or ['pause', seconds, label], or ['focus', part]
  // {{text|n}} marks where the answer to question n is heard.
  const SCRIPT = [
    ['focus', 1],
    ['narrator', 'IELTS Listening. Full Mock Test 7.'],
    ['narrator', 'In the test, you will hear a number of different recordings and you will have to answer questions on what you hear. There will be time for you to read the instructions and questions, and you will have a chance to check your work. All the recordings will be played once only. The test is in four parts.'],
    ['narrator', 'Now turn to Part 1.'],
    ['narrator', 'Part 1. You will hear a student talking to the owner of a café about a part-time job. First, you have some time to look at questions 1 to 5.'],
    ['pause', 30, 'Reading time · Questions 1–5'],
    ['narrator', 'You will see that there is an example that has been done for you. On this occasion only, the conversation relating to this will be played first.'],
    ['owner', "Hi, come in. You must be here about the job."],
    ['sofia', "Yes. I saw the sign in the window. You're looking for a barista?"],
    ['owner', "That's right, someone to make coffee at weekends."],
    ['narrator', "The job is for a barista, so 'barista' has been written in the space. Now we shall begin. You should answer the questions as you listen, because you will not hear the recording a second time. Listen carefully and answer questions 1 to 5."],
    ['owner', "Hi, come in. You must be here about the job."],
    ['sofia', "Yes. I saw the sign in the window. You're looking for a barista?"],
    ['owner', "That's right, someone to make coffee at weekends. Let me take some details. What's your name?"],
    ['sofia', "Sofia {{Mendes|1}}. That's M, E, N, D, E, S."],
    ['owner', 'And you said you were a student. What are you studying?'],
    ['sofia', "I'm in my second year at the university. I'm doing {{chemistry|2}}. My friends say that's why I'm good at making coffee!"],
    ['owner', "Ha! Which days could you work? We need someone for two days."],
    ['sofia', "I have lectures on Fridays, so I couldn't do that. But I'm free on {{Saturday|3}} and Sunday."],
    ['owner', "Perfect. Have you worked anywhere before?"],
    ['sofia', "Yes, I worked in a {{cinema|4}} for a year, mostly selling snacks and drinks. I haven't worked in a café, but I've done a short course in making coffee."],
    ['owner', "And do you have a food hygiene qualification?"],
    ['sofia', "Yes, I got my {{certificate|5}} last year, when I was working at the cinema."],
    ['narrator', 'Before you hear the rest of the conversation, you have some time to look at questions 6 to 10.'],
    ['pause', 30, 'Reading time · Questions 6–10'],
    ['narrator', 'Now listen and answer questions 6 to 10.'],
    ['sofia', 'Can I ask about the pay?'],
    ['owner', "Of course. It's {{eleven pounds fifty|6}} an hour, and that goes up after three months."],
    ['sofia', "That sounds fine. Is there any training?"],
    ['owner', "Yes. Before you start, you'd come in for a training session with our head barista. That's on {{Thursday|7}} afternoon, if you can make it."],
    ['sofia', "Yes, I can. Is there a uniform?"],
    ['owner', "We give you an apron and a T-shirt with our logo. You need to wear black {{trousers|8}}, and comfortable shoes, because you'll be standing all day."],
    ['sofia', "Okay. And do staff get anything else?"],
    ['owner', "You can't eat for free, I'm afraid, but you get a discount on food. And all staff get free {{drinks|9}} during their shift."],
    ['sofia', "Great. Do I need to bring anything on my first day?"],
    ['owner', "Just your {{passport|10}}, so we can check that you're allowed to work. Your bank details you can send by email."],
    ['sofia', "Thank you so much."],
    ['narrator', 'That is the end of Part 1. You now have half a minute to check your answers to Part 1.'],
    ['pause', 30, 'Checking time · Part 1'],

    ['focus', 2],
    ['narrator', 'Now turn to Part 2.'],
    ['narrator', 'Part 2. You will hear a guide talking to visitors at the start of a tour of an old water mill. First, you have some time to look at questions 11 to 16.'],
    ['pause', 30, 'Reading time · Questions 11–16'],
    ['narrator', 'Now listen carefully and answer questions 11 to 16.'],
    ['guide', "Good morning, and welcome to Dunmore Mill. Before we go inside, let me tell you a little about its history."],
    ['guide', "There's been a mill on this site for over six hundred years, but the building you can see was built in {{seventeen eighty-four|11}}, after the earlier mill was destroyed by a flood."],
    ['guide', "Most people assume it made flour from wheat, but the soil around here was too poor for wheat. For most of its history, the mill ground {{oats|12}}, which grow well in our cool, wet climate."],
    ['guide', "The mill is powered by the water wheel you can see on the side of the building. It's {{six|13}} metres high, and it's turned by water from the river, which flows along a channel called the mill race."],
    ['guide', "The mill worked commercially until {{nineteen fifty-two|14}}, when it could no longer compete with large modern factories, and it then stood empty for many years."],
    ['guide', "In the nineteen nineties, local people began a campaign to save it, and the restoration was finally paid for with money from the national {{lottery|15}}. The mill started working again in two thousand and three."],
    ['guide', "Today we still produce oatmeal in the traditional way, and you can buy it in our {{shop|16}}, which is next to the car park."],
    ['narrator', 'Before you hear the rest of the talk, you have some time to look at questions 17 to 20.'],
    ['pause', 30, 'Reading time · Questions 17–20'],
    ['narrator', 'Now listen and answer questions 17 to 20.'],
    ['guide', "Now, some practical information. The mill grinds oats on most days, but {{on Sundays you can watch our miller demonstrate the whole process|17}}, from start to finish, at eleven and two o'clock."],
    ['guide', "You'll notice that the top floor is closed. The floor is perfectly safe, and it's not being repaired. But {{a family of bats lives up there|18}}, and they're protected by law, so we keep people away from them during the summer."],
    ['guide', "After the tour, do visit our café. It's quite small, and the prices are similar to anywhere else. But {{all the cakes are made with flour from the mill|19}}, so it's a real taste of history."],
    ['guide', "And finally, if you have time, {{I'd recommend the walk along the river to the old bridge|20}}. It takes about half an hour, and you can see the start of the mill race. Right, let's go inside."],
    ['narrator', 'That is the end of Part 2. You now have half a minute to check your answers to Part 2.'],
    ['pause', 30, 'Checking time · Part 2'],

    ['focus', 3],
    ['narrator', 'Now turn to Part 3.'],
    ['narrator', 'Part 3. You will hear two students, Zara and Felix, talking to their tutor, Ms Ward, about a debate they are preparing on banning cars from city centres. First, you have some time to look at questions 21 to 25.'],
    ['pause', 30, 'Reading time · Questions 21–25'],
    ['narrator', 'Now listen carefully and answer questions 21 to 25.'],
    ['ward', "So, you two are arguing in favour of banning cars from city centres. How's the preparation going?"],
    ['zara', "Well, at first we were given the opposite side, against the ban. But {{the other team asked to swap|21}}, and we agreed, because we actually both support the idea."],
    ['ward', "That should make it easier. What's your main argument going to be?"],
    ['felix', "We considered focusing on climate change, but that's a very global argument. We think {{the strongest case is about health|22}}: cleaner air, fewer accidents, and people walking more."],
    ['ward', "Good. I looked at your plan. Your evidence is strong, but I'm worried about {{the timing|23}}. Each speaker has only four minutes, and your opening speech would take at least seven."],
    ['zara', "Oh. We'll have to cut it down."],
    ['ward', "What do you think the other team will argue?"],
    ['felix', "Probably that {{businesses in the centre will lose customers|24}}. That's what people usually say."],
    ['ward', "Then make sure you have an answer ready. How will you prepare for their questions?"],
    ['zara', "We're going to {{practise with two friends who'll ask us difficult questions|25}}, so we're not surprised on the day."],
    ['narrator', 'Before you hear the rest of the discussion, you have some time to look at questions 26 to 30.'],
    ['pause', 30, 'Reading time · Questions 26–30'],
    ['narrator', 'Now listen and answer questions 26 to 30.'],
    ['ward', "Now, who's going to speak about each point?"],
    ['felix', "{{I'll talk about air quality|26}}, because I did a project on pollution last year."],
    ['zara', "And the effect on shops. That's going to be the hardest point, so {{we'll prepare it together|27}} and decide on the day who answers."],
    ['ward', 'What about access for disabled people?'],
    ['zara', "{{I'll take that|28}}. My brother uses a wheelchair, so I know quite a lot about it."],
    ['ward', 'And public transport?'],
    ['felix', "{{That's mine too|29}}. I've got the figures on how many extra passengers the buses could carry."],
    ['ward', 'And deliveries to shops and offices?'],
    ['zara', "{{I'll do deliveries|30}}. I found a good example of a city that only allows deliveries early in the morning."],
    ['ward', "That sounds well organised. Good luck."],
    ['narrator', 'That is the end of Part 3. You now have half a minute to check your answers to Part 3.'],
    ['pause', 30, 'Checking time · Part 3'],

    ['focus', 4],
    ['narrator', 'Now turn to Part 4.'],
    ['narrator', 'Part 4. You will hear a lecture about the history of the telephone. First, you have some time to look at questions 31 to 40.'],
    ['pause', 45, 'Reading time · Questions 31–40'],
    ['narrator', 'Now listen carefully and answer questions 31 to 40.'],
    ['lecturer', "Good morning. Today we're going to look at the history of a device that most of you are probably holding right now: the telephone."],
    ['lecturer', "The inventor usually given credit for the telephone is Alexander Graham Bell, who received a patent for it in {{eighteen seventy-six|31}}, although several other inventors were working on similar ideas at the same time. The first words spoken on Bell's telephone were addressed to his assistant, Thomas {{Watson|32}}, who was in the next room: 'Mr Watson, come here, I want to see you.'"],
    ['lecturer', "In the early years, a caller couldn't dial a number. Instead, they spoke to {{operators|33}} at a telephone exchange, who connected the call by hand, plugging cables into a board. At first, teenage boys were employed for this work, but they were often rude to customers, so companies soon replaced them with young {{women|34}}, who were thought to be more polite and patient."],
    ['lecturer', "The automatic exchange, which allowed people to dial numbers themselves, was invented in the eighteen nineties by an American named Almon Strowger. Interestingly, Strowger was not an engineer but an {{undertaker|35}}. He believed that a local operator was sending calls meant for his business to a competitor."],
    ['lecturer', "Long-distance calls developed slowly. Telephone calls across the Atlantic were first made by radio, which was expensive and unreliable, and the first transatlantic telephone cable was not laid until {{nineteen fifty-six|36}}."],
    ['lecturer', "The first call from a handheld mobile phone was made in New York in nineteen seventy-three. The phone weighed more than a {{kilogram|37}}, and later versions sold to the public had batteries that lasted for only about {{thirty|38}} minutes of conversation."],
    ['lecturer', "Today, there are more mobile phone subscriptions in the world than there are {{people|39}}. Meanwhile, the traditional landline is declining fast. In many countries, landlines are now used mainly by {{businesses|40}}, while most households rely entirely on mobile phones."],
    ['lecturer', "Next week, we'll look at the history of the internet."],
    ['narrator', 'That is the end of Part 4. That is the end of the listening test.'],
  ];

  // Questions. kind: gap | mcq | two | match
  const LIMIT_WN = 'ONE WORD AND/OR A NUMBER';
  const Q = {
    1:  { kind: 'gap', ans: ['mendes'], limit: 'wn', key: 'Mendes' },
    2:  { kind: 'gap', ans: ['chemistry'], limit: 'wn' },
    3:  { kind: 'gap', ans: ['saturday'], limit: 'wn', key: 'Saturday' },
    4:  { kind: 'gap', ans: ['cinema'], limit: 'wn' },
    5:  { kind: 'gap', ans: ['certificate'], limit: 'wn' },
    6:  { kind: 'gap', ans: ['11.50'], limit: 'wn' },
    7:  { kind: 'gap', ans: ['thursday'], limit: 'wn', key: 'Thursday' },
    8:  { kind: 'gap', ans: ['trousers'], limit: 'wn' },
    9:  { kind: 'gap', ans: ['drinks'], limit: 'wn' },
    10: { kind: 'gap', ans: ['passport'], limit: 'wn' },
    11: { kind: 'gap', ans: ['1784'], limit: 'wn' },
    12: { kind: 'gap', ans: ['oats'], limit: 'wn' },
    13: { kind: 'gap', ans: ['6', 'six'], limit: 'wn' },
    14: { kind: 'gap', ans: ['1952'], limit: 'wn' },
    15: { kind: 'gap', ans: ['lottery'], limit: 'wn' },
    16: { kind: 'gap', ans: ['shop'], limit: 'wn' },
    17: { kind: 'mcq', q: 'What can visitors see on Sundays?', opts: { A: 'a demonstration of the whole milling process', B: 'the mill being repaired', C: 'oats being harvested' }, ans: 'A' },
    18: { kind: 'mcq', q: 'Why is the top floor of the mill closed?', opts: { A: 'It is unsafe.', B: 'It is being repaired.', C: 'Bats live there.' }, ans: 'C' },
    19: { kind: 'mcq', q: 'What is special about the mill café?', opts: { A: 'It is larger than most cafés.', B: 'Its cakes are made with the mill’s own flour.', C: 'Its prices are low.' }, ans: 'B' },
    20: { kind: 'mcq', q: 'What does the guide recommend?', opts: { A: 'a walk to the old bridge', B: 'a visit to the car park shop', C: 'a boat trip on the river' }, ans: 'A' },
    21: { kind: 'mcq', q: 'Why are the students arguing in favour of the ban?', opts: { A: 'Their tutor told them to.', B: 'The other team wanted to change sides.', C: 'They were given this side at the start.' }, ans: 'B' },
    22: { kind: 'mcq', q: 'What will be the students’ main argument?', opts: { A: 'climate change', B: 'health', C: 'the cost of roads' }, ans: 'B' },
    23: { kind: 'mcq', q: 'What does Ms Ward think is a problem with the plan?', opts: { A: 'Their evidence is weak.', B: 'The opening speech is too long.', C: 'They have too few speakers.' }, ans: 'B' },
    24: { kind: 'mcq', q: 'What do the students expect the other team to argue?', opts: { A: 'Businesses will lose customers.', B: 'Public transport is too expensive.', C: 'People need cars for work.' }, ans: 'A' },
    25: { kind: 'mcq', q: 'How will the students prepare for difficult questions?', opts: { A: 'by watching other debates', B: 'by practising with friends', C: 'by reading the other team’s notes' }, ans: 'B' },
    26: { kind: 'match', label: 'air quality', ans: 'B' },
    27: { kind: 'match', label: 'effects on shops', ans: 'C' },
    28: { kind: 'match', label: 'access for disabled people', ans: 'A' },
    29: { kind: 'match', label: 'public transport', ans: 'B' },
    30: { kind: 'match', label: 'deliveries', ans: 'A' },
    31: { kind: 'gap', ans: ['1876'], limit: 'wn' },
    32: { kind: 'gap', ans: ['watson'], limit: 'wn', key: 'Watson' },
    33: { kind: 'gap', ans: ['operators'], limit: 'wn' },
    34: { kind: 'gap', ans: ['women'], limit: 'wn' },
    35: { kind: 'gap', ans: ['undertaker'], limit: 'wn' },
    36: { kind: 'gap', ans: ['1956'], limit: 'wn' },
    37: { kind: 'gap', ans: ['kilogram', 'kilo', 'kg'], limit: 'wn' },
    38: { kind: 'gap', ans: ['30', 'thirty'], limit: 'wn' },
    39: { kind: 'gap', ans: ['people'], limit: 'wn' },
    40: { kind: 'gap', ans: ['businesses', 'companies'], limit: 'wn' },
  };
  const WHO = { A: 'Zara', B: 'Felix', C: 'both Zara and Felix' };

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
        <h4>Corner Café · Job application notes</h4>
        <div class="line"><span>Job:</span><span class="example">Example: <u>barista</u></span></div>
        <div class="line"><span>Name:</span><span>Sofia ${gap(1)}</span></div>
        <div class="line"><span>Studying:</span><span>${gap(2)} (second year)</span></div>
        <div class="line"><span>Available:</span><span>${gap(3)} and Sunday</span></div>
        <div class="line"><span>Experience:</span><span>one year in a ${gap(4)}</span></div>
        <div class="line"><span>Food hygiene:</span><span>has a ${gap(5)}</span></div>
        <div class="sub">Job details</div>
        <div class="line"><span>Pay:</span><span>£ ${gap(6)} per hour</span></div>
        <div class="line"><span>Training:</span><span>${gap(7)} afternoon</span></div>
        <div class="line"><span>Clothes:</span><span>black ${gap(8)} and comfortable shoes</span></div>
        <div class="line"><span>Staff benefit:</span><span>free ${gap(9)} during shifts</span></div>
        <div class="line"><span>First day:</span><span>bring ${gap(10)}</span></div>
      </div>
    </div>
  </section>

  <section class="part" id="part-2" data-part="2" hidden>
    <div class="part-head"><h2>Part 2</h2><span class="label">Questions 11–20</span></div>
    <div class="qblock">
      <h3>Questions 11–16</h3>
      <p class="instr">Complete the notes below. Write <b>${LIMIT_WN}</b> for each answer.</p>
      <div class="notes">
        <h4>Dunmore Mill</h4>
        <ul>
          <li>Present building built in ${gap(11)}</li>
          <li>The mill mainly ground ${gap(12)}.</li>
          <li>Height of the water wheel: ${gap(13)} metres</li>
          <li>Stopped working commercially in ${gap(14)}</li>
          <li>Restoration paid for by the national ${gap(15)}</li>
          <li>Oatmeal is sold in the ${gap(16)} next to the car park.</li>
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
      <p class="instr">Who will speak about each point in the debate? Write the correct letter, <b>A, B or C</b>, next to Questions 26–30.</p>
      ${box('Who', WHO)}
      ${matchRows([26, 27, 28, 29, 30], WHO)}
    </div>
  </section>

  <section class="part" id="part-4" data-part="4" hidden>
    <div class="part-head"><h2>Part 4</h2><span class="label">Questions 31–40</span></div>
    <div class="qblock">
      <h3>Questions 31–40</h3>
      <p class="instr">Complete the notes below. Write <b>${LIMIT_WN}</b> for each answer.</p>
      <div class="notes">
        <h4>The history of the telephone</h4>
        <span class="h">Early days</span>
        <ul>
          <li>Bell’s patent: ${gap(31)}</li>
          <li>First words were spoken to his assistant, Thomas ${gap(32)}.</li>
          <li>Calls were connected by ${gap(33)} at an exchange.</li>
          <li>Boys were replaced by young ${gap(34)}.</li>
          <li>Strowger, who invented the automatic exchange, was an ${gap(35)}.</li>
        </ul>
        <span class="h">Long distance and mobile</span>
        <ul>
          <li>First transatlantic telephone cable: ${gap(36)}</li>
          <li>The first handheld mobile weighed over a ${gap(37)}.</li>
          <li>Early batteries lasted about ${gap(38)} minutes.</li>
        </ul>
        <span class="h">Today</span>
        <ul>
          <li>More mobile subscriptions than ${gap(39)}.</li>
          <li>Landlines are now used mainly by ${gap(40)}.</li>
        </ul>
      </div>
    </div>
  </section>`;

  // Part changes and reading/checking pauses in the recording (seconds) — filled in by tools/make_listening_audio.py
  const TIMELINE = [{"t":1.0,"focus":1},{"t":36.9,"pause":30,"label":"Reading time · Questions 1–5"},{"t":66.9,"speech":1,"part":1},{"t":165.32,"pause":30,"label":"Reading time · Questions 6–10"},{"t":195.32,"speech":1,"part":1},{"t":258.38,"pause":30,"label":"Checking time · Part 1"},{"t":288.38,"focus":2},{"t":288.38,"speech":1,"part":2},{"t":302.28,"pause":30,"label":"Reading time · Questions 11–16"},{"t":332.28,"speech":1,"part":2},{"t":407.95,"pause":30,"label":"Reading time · Questions 17–20"},{"t":437.95,"speech":1,"part":2},{"t":492.53,"pause":30,"label":"Checking time · Part 2"},{"t":522.53,"focus":3},{"t":522.53,"speech":1,"part":3},{"t":541.3,"pause":30,"label":"Reading time · Questions 21–25"},{"t":571.3,"speech":1,"part":3},{"t":643.59,"pause":30,"label":"Reading time · Questions 26–30"},{"t":673.59,"speech":1,"part":3},{"t":727.27,"pause":30,"label":"Checking time · Part 3"},{"t":757.27,"focus":4},{"t":757.27,"speech":1,"part":4},{"t":768.99,"pause":45,"label":"Reading time · Questions 31–40"},{"t":813.99,"speech":1,"part":4}];
  const partNames = { 1: 'Part 1 · Applying for a café job', 2: 'Part 2 · A tour of Dunmore Mill', 3: 'Part 3 · Preparing a debate', 4: 'Part 4 · The history of the telephone' };
  window.LISTENING_TEST = { num: 17, name: 'Full Mock Test 7', audio: 'audio/listening-test17.mp3', minutes: 16, mb: 8, roles: ROLES, script: SCRIPT, Q, paper: PAPER, timeline: TIMELINE, partNames };
})();
