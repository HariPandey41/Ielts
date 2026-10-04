// IELTS Listening · Full Mock Test 1 — content only. The exam engine is assets/listening-exam.js.
// Kept for the mock test: this test is not listed with the practice tests.
(() => {
  'use strict';
  // Speakers: label for the transcript, voice for tools/make_listening_audio.py
  const ROLES = {
    narrator:  { label: 'Narrator', voice: 'bm_george', speed: 0.92, lang: 'en-gb' },
    clerk:     { label: 'Clerk', voice: 'bm_lewis', speed: 0.98, lang: 'en-gb' },
    ellen:     { label: 'Ellen', voice: 'bf_emma', speed: 0.98, lang: 'en-gb' },
    presenter: { label: 'Presenter', voice: 'af_sarah', speed: 0.98, lang: 'en-us' },
    sam:       { label: 'Sam Okafor', voice: 'bm_daniel', speed: 0.96, lang: 'en-gb' },
    maya:      { label: 'Maya', voice: 'bf_isabella', speed: 0.98, lang: 'en-gb' },
    leo:       { label: 'Leo', voice: 'am_eric', speed: 0.98, lang: 'en-us' },
    grant:     { label: 'Dr Grant', voice: 'bm_fable', speed: 0.96, lang: 'en-gb' },
    lecturer:  { label: 'Lecturer', voice: 'bf_alice', speed: 0.95, lang: 'en-gb' },
  };

  // Script: [role, text] lines, or ['pause', seconds, label], or ['focus', part]
  // {{text|n}} marks where the answer to question n is heard.
  const SCRIPT = [
    ['focus', 1],
    ['narrator', 'IELTS Listening. Full Mock Test 1.'],
    ['narrator', 'In the test, you will hear a number of different recordings and you will have to answer questions on what you hear. There will be time for you to read the instructions and questions, and you will have a chance to check your work. All the recordings will be played once only. The test is in four parts.'],
    ['narrator', 'Now turn to Part 1.'],
    ['narrator', 'Part 1. You will hear a woman reporting a lost bag to the lost property office at a railway station. First, you have some time to look at questions 1 to 5.'],
    ['pause', 30, 'Reading time · Questions 1–5'],
    ['narrator', 'You will see that there is an example that has been done for you. On this occasion only, the conversation relating to this will be played first.'],
    ['clerk', 'Hartfield Station, lost property office. How can I help?'],
    ['ellen', "Hello. I left a bag on a train yesterday, and I'm hoping someone has handed it in."],
    ['clerk', "Let's see what we can do. What sort of bag is it?"],
    ['ellen', "It's a rucksack."],
    ['narrator', "The item is a rucksack, so 'rucksack' has been written in the space. Now we shall begin. You should answer the questions as you listen, because you will not hear the recording a second time. Listen carefully and answer questions 1 to 5."],
    ['clerk', 'Hartfield Station, lost property office. How can I help?'],
    ['ellen', "Hello. I left a bag on a train yesterday, and I'm hoping someone has handed it in."],
    ['clerk', "Let's see what we can do. What sort of bag is it?"],
    ['ellen', "It's a rucksack."],
    ['clerk', "Right. I'll fill in a report for you. Can I have your name, please?"],
    ['ellen', "Yes, it's Ellen Ridley. That's {{R, I, D, L, E, Y|1}}."],
    ['clerk', 'Thank you. And which train were you on?'],
    ['ellen', "The eight forty-five. I got on at Bristol, but the train actually starts in {{Oxford|2}}. I got off here at Hartfield."],
    ['clerk', 'And do you remember where you were sitting?'],
    ['ellen', "I think it was coach B. No, wait, B was the quiet coach, and I was on the phone, so I moved. It was coach {{D|3}}. D for David."],
    ['clerk', "Okay. Now, what does the rucksack look like?"],
    ['ellen', "It's medium-sized. People always think it's black, but it's actually {{grey|4}}. It has a black strap, though."],
    ['clerk', 'Anything that would help us to recognise it?'],
    ['ellen', "Yes. The {{zip|5}} on the front pocket is broken, so I've tied it closed with a bit of string."],
    ['narrator', 'Before you hear the rest of the conversation, you have some time to look at questions 6 to 10.'],
    ['pause', 30, 'Reading time · Questions 6–10'],
    ['narrator', 'Now listen and answer questions 6 to 10.'],
    ['clerk', 'And what was inside the rucksack?'],
    ['ellen', "The most important thing is my {{laptop|6}}. I'd left my tablet at home, luckily, but the laptop has all my work on it."],
    ['clerk', 'Anything else?'],
    ['ellen', "A library book. It's a guide to British {{birds|7}}. I'll have to pay for it if I can't find it. And a pair of {{gloves|8}}. They're leather, so I'd like those back too. My sunglasses were in my coat pocket, so they're fine."],
    ['clerk', "I'll put all that down. If the rucksack is found, we'll send you a text message. You'll need to bring some photo identification when you collect it."],
    ['ellen', 'Where do I collect it from? Is it this office?'],
    ['clerk', "No. We're moving next week, so you'll need to go to the new office. It's on Platform {{three|9}}, next to the waiting room."],
    ['ellen', 'Is there a charge?'],
    ['clerk', "There's a small handling fee for items worth more than fifty pounds. It's {{five|10}} pounds. The full list of charges is on our website."],
    ['ellen', "That's fine. Thank you so much for your help."],
    ['narrator', 'That is the end of Part 1. You now have half a minute to check your answers to Part 1.'],
    ['pause', 30, 'Checking time · Part 1'],

    ['focus', 2],
    ['narrator', 'Now turn to Part 2.'],
    ['narrator', "Part 2. You will hear a local radio interview with the manager of an open-air swimming pool that is about to reopen. First, you have some time to look at questions 11 to 16."],
    ['pause', 30, 'Reading time · Questions 11–16'],
    ['narrator', 'Now listen carefully and answer questions 11 to 16.'],
    ['presenter', "This weekend, after two years of repairs, Millbrook Lido is finally reopening. With me is the manager, Sam Okafor. Sam, what will swimmers find?"],
    ['sam', "Well, the main pool is the same size as before, fifty metres, but the water is much warmer. Last year it was heated to twenty-two degrees, and people complained it was too cold. Now it'll be kept at {{twenty-four|11}} degrees."],
    ['sam', "The children's pool has been completely rebuilt. In the past it closed at the end of August, but this year it'll stay open until the end of {{September|12}}, as long as the weather is reasonable."],
    ['presenter', 'And if people want something to eat?'],
    ['sam', "The café used to be by the entrance, but it's moved, and it's now on the {{roof|13}}, so you can sit and look down over the whole pool."],
    ['sam', "We've also replaced the old changing rooms. The new lockers don't use keys any more. You just need a {{coin|14}}, which you get back at the end."],
    ['presenter', "What about people who want to swim before work?"],
    ['sam', "On weekdays we have an early session for serious swimmers. It used to start at seven, but we've moved it to {{six thirty|15}}, so people can have a proper swim before they catch the train."],
    ['sam', "And for regular swimmers, a season ticket costs {{ninety-five|16}} pounds. That's for adults. Children's tickets are half price."],
    ['narrator', 'Before you hear the rest of the interview, you have some time to look at questions 17 to 20.'],
    ['pause', 30, 'Reading time · Questions 17–20'],
    ['narrator', 'Now listen and answer questions 17 to 20.'],
    ['presenter', "So, apart from the warmer water, what's new this year?"],
    ['sam', "Well, some people think the solar panels are new, but we actually put those in back in twenty nineteen. The new things are, first, {{a sauna|17}}, which is right beside the main pool, so you can warm up after your swim. And second, for the first time, {{we're running swimming lessons for adults|18}}. A lot of adults never learned, and they've told us they'd feel more comfortable learning with other adults."],
    ['presenter', 'Is the diving board still there?'],
    ['sam', "I'm afraid not. It didn't meet modern safety rules, so it's been taken away. And parking is still charged, because the car park belongs to the council, not to us."],
    ['presenter', 'Any advice for people planning a visit?'],
    ['sam', "Yes. Weekends get very busy, so {{please book online|19}} if you're coming on a Saturday or Sunday. On weekdays you can just turn up. You don't need to bring a padlock, because the lockers have their own locks. And the water temperature can drop on cold nights, so {{it's worth checking our website|20}} before you come, because we post the temperature there every morning. Lots of people cycle here, which is great, and there's plenty of space for bikes."],
    ['presenter', 'Sam Okafor, thank you.'],
    ['narrator', 'That is the end of Part 2. You now have half a minute to check your answers to Part 2.'],
    ['pause', 30, 'Checking time · Part 2'],

    ['focus', 3],
    ['narrator', 'Now turn to Part 3.'],
    ['narrator', 'Part 3. You will hear two business students, Maya and Leo, talking to their tutor, Dr Grant, about their case study of a small bakery. First, you have some time to look at questions 21 to 25.'],
    ['pause', 30, 'Reading time · Questions 21–25'],
    ['narrator', 'Now listen carefully and answer questions 21 to 25.'],
    ['grant', "Come in, both of you. So you've chosen Hollins Bakery for your case study. Why that one?"],
    ['maya', "We looked at several local businesses. Some people assume we chose it because my cousin works there, but that wasn't the reason, and they didn't have much data to give us either. {{It was the big change they made last year|21}}, when they started selling online. That seemed really interesting to study."],
    ['grant', 'And how did that go for them, at first?'],
    ['leo', "Not very well. Their website was fine, and the bread actually travelled better than they expected. But {{the delivery company they used kept arriving late|22}}, so customers were getting their orders a day after they wanted them."],
    ['grant', "I've looked at the questions you're planning to ask the owner. They're polite, and there aren't too many of them. My worry is that {{they're too general|23}}. If you ask, 'How has going online changed the business?', you'll get a very general answer. Ask about specific things, like costs or staff."],
    ['maya', "That makes sense. We've already looked at their sales figures, and the thing that surprised us most was that {{most of the online customers live within ten miles of the shop|24}}. We'd assumed they'd be all over the country."],
    ['leo', "We expected older customers to stay with the shop, and they did, but that wasn't really a surprise. And sales in the shop itself stayed about the same."],
    ['grant', "Interesting. So what's your next step?"],
    ['leo', "We thought about visiting another bakery to compare, but there isn't time. So {{we're going to send a short survey to their customers|25}}, to find out why they order online instead of walking to the shop."],
    ['narrator', 'Before you hear the rest of the discussion, you have some time to look at questions 26 to 30.'],
    ['pause', 30, 'Reading time · Questions 26–30'],
    ['narrator', 'Now listen and answer questions 26 to 30.'],
    ['grant', "Now, how are you going to divide up the writing of the report?"],
    ['maya', "I'll do {{the introduction|26}}, because I wrote most of the proposal, so I know the background."],
    ['leo', "And I'm happy with spreadsheets, so {{I'll make all the graphs|27}} from the sales figures."],
    ['grant', 'What about the summary of the interview with the owner?'],
    ['maya', "We'll both be at the interview, so {{we'll write that part together|28}}. It's easier if we compare our notes."],
    ['grant', 'And the recommendations at the end?'],
    ['leo', "{{I'll take those|29}}. I've got quite a few ideas about the delivery problem."],
    ['maya', "And {{I'll check all the references|30}} at the end. Leo always forgets the page numbers."],
    ['leo', "That's true, I'm afraid."],
    ['grant', "Good. That sounds like a sensible plan."],
    ['narrator', 'That is the end of Part 3. You now have half a minute to check your answers to Part 3.'],
    ['pause', 30, 'Checking time · Part 3'],

    ['focus', 4],
    ['narrator', 'Now turn to Part 4.'],
    ['narrator', 'Part 4. You will hear a lecture about sleep in the animal kingdom. First, you have some time to look at questions 31 to 40.'],
    ['pause', 45, 'Reading time · Questions 31–40'],
    ['narrator', 'Now listen carefully and answer questions 31 to 40.'],
    ['lecturer', "Good morning. Today we're looking at sleep, not in humans, but in the rest of the animal kingdom, and at what it might tell us about why sleep exists at all."],
    ['lecturer', "For a long time, scientists thought that only animals with large brains needed to sleep. But it now seems that almost every animal with a nervous system sleeps in some way. In twenty seventeen, researchers even found that the {{jellyfish|31}}, which has no brain at all, has regular periods of rest at night, and becomes sleepy if it's kept awake."],
    ['lecturer', "The amount of sleep varies enormously. The little brown bat holds the record, sleeping around {{twenty|32}} hours a day. At the other extreme, wild elephants in Africa have been recorded sleeping only about {{two|33}} hours a night, usually standing up, although they lie down every few days."],
    ['lecturer', "Some animals have found remarkable ways to sleep. Dolphins have to keep swimming and come to the surface to breathe, so they can't simply fall unconscious. Instead, they sleep with only one half of their {{brain|34}} at a time, while the other half stays alert. During this kind of sleep, a dolphin keeps one {{eye|35}} open, watching for danger."],
    ['lecturer', "Birds can do something similar. Frigatebirds, which spend weeks over the ocean without landing, have been shown to sleep while {{flying|36}}, often for just a few seconds at a time. In total, they manage less than an hour of sleep a day while they're at sea."],
    ['lecturer', "So why do animals sleep? Sleep is risky, because a sleeping animal can't watch out for predators, so it must be very important. One traditional explanation is that sleep helps animals to save {{energy|37}}, especially small animals that lose heat quickly. But that can't be the whole story."],
    ['lecturer', "More recent research suggests that sleep allows the brain to clear away waste products that build up during the day. Sleep also seems to strengthen {{memory|38}}. Animals that are allowed to sleep after learning a task perform it better the next day than animals that are kept awake."],
    ['lecturer', "Much of this evidence comes from studies of {{fruit|39}} flies, which are easy to keep in large numbers. Flies that are deprived of sleep become slower and make more mistakes, much as tired humans do."],
    ['lecturer', "Finally, a word of caution. A lot of our information about animal sleep comes from zoos and laboratories. Animals in captivity often sleep far more than they do in the wild, probably because they feel {{safe|40}}, and they don't have to search for food. So we need more studies of animals in their natural environment."],
    ['lecturer', "Next week, we'll look at dreaming."],
    ['narrator', 'That is the end of Part 4. That is the end of the listening test.'],
  ];

  // Questions. kind: gap | mcq | two | match
  const LIMIT_WN = 'ONE WORD AND/OR A NUMBER';
  const LIMIT_W = 'ONE WORD ONLY';
  const Q = {
    1:  { kind: 'gap', ans: ['ridley'], limit: 'wn', key: 'Ridley' },
    2:  { kind: 'gap', ans: ['oxford'], limit: 'wn', key: 'Oxford' },
    3:  { kind: 'gap', ans: ['d'], limit: 'wn', key: 'D' },
    4:  { kind: 'gap', ans: ['grey', 'gray'], limit: 'wn' },
    5:  { kind: 'gap', ans: ['zip', 'zipper'], limit: 'wn' },
    6:  { kind: 'gap', ans: ['laptop'], limit: 'wn' },
    7:  { kind: 'gap', ans: ['birds'], limit: 'wn' },
    8:  { kind: 'gap', ans: ['gloves'], limit: 'wn' },
    9:  { kind: 'gap', ans: ['3', 'three'], limit: 'wn' },
    10: { kind: 'gap', ans: ['5', 'five'], limit: 'wn' },
    11: { kind: 'gap', ans: ['24', 'twenty-four'], limit: 'wn' },
    12: { kind: 'gap', ans: ['september'], limit: 'wn', key: 'September' },
    13: { kind: 'gap', ans: ['roof', 'rooftop'], limit: 'wn' },
    14: { kind: 'gap', ans: ['coin'], limit: 'wn' },
    15: { kind: 'gap', ans: ['6.30', '6.30am'], limit: 'wn' },
    16: { kind: 'gap', ans: ['95', 'ninety-five'], limit: 'wn' },
    17: { kind: 'two', pair: [17, 18], ans: ['B', 'D'] },
    18: { kind: 'two', pair: [17, 18], ans: ['B', 'D'] },
    19: { kind: 'two', pair: [19, 20], ans: ['A', 'D'] },
    20: { kind: 'two', pair: [19, 20], ans: ['A', 'D'] },
    21: { kind: 'mcq', q: 'Why did the students choose Hollins Bakery for their case study?', opts: { A: 'A relative of one student works there.', B: 'It had recently made an important change.', C: 'It was able to give them a lot of data.' }, ans: 'B' },
    22: { kind: 'mcq', q: 'What was the bakery’s first problem with selling online?', opts: { A: 'Its website did not work well.', B: 'The bread was damaged on the way.', C: 'Orders arrived later than expected.' }, ans: 'C' },
    23: { kind: 'mcq', q: 'What does Dr Grant say about the students’ interview questions?', opts: { A: 'There are too many of them.', B: 'They are not specific enough.', C: 'They are rather impolite.' }, ans: 'B' },
    24: { kind: 'mcq', q: 'What surprised the students about the sales figures?', opts: { A: 'Most online customers live near the shop.', B: 'Older customers continued to visit the shop.', C: 'Sales in the shop fell after the website opened.' }, ans: 'A' },
    25: { kind: 'mcq', q: 'What will the students do next?', opts: { A: 'visit a second bakery', B: 'interview the delivery company', C: 'carry out a survey of customers' }, ans: 'C' },
    26: { kind: 'match', label: 'the introduction', ans: 'A' },
    27: { kind: 'match', label: 'the graphs', ans: 'B' },
    28: { kind: 'match', label: 'the summary of the interview', ans: 'C' },
    29: { kind: 'match', label: 'the recommendations', ans: 'B' },
    30: { kind: 'match', label: 'checking the references', ans: 'A' },
    31: { kind: 'gap', ans: ['jellyfish'], limit: 'w' },
    32: { kind: 'gap', ans: ['20', 'twenty'], limit: 'w' },
    33: { kind: 'gap', ans: ['2', 'two'], limit: 'w' },
    34: { kind: 'gap', ans: ['brain'], limit: 'w' },
    35: { kind: 'gap', ans: ['eye'], limit: 'w' },
    36: { kind: 'gap', ans: ['flying'], limit: 'w' },
    37: { kind: 'gap', ans: ['energy'], limit: 'w' },
    38: { kind: 'gap', ans: ['memory', 'memories'], limit: 'w' },
    39: { kind: 'gap', ans: ['fruit'], limit: 'w' },
    40: { kind: 'gap', ans: ['safe', 'safer'], limit: 'w' },
  };
  const WHO = { A: 'Maya', B: 'Leo', C: 'both Maya and Leo' };

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
        <h4>Hartfield Station · Lost property report</h4>
        <div class="line"><span>Item:</span><span class="example">Example: <u>rucksack</u></span></div>
        <div class="line"><span>Name:</span><span>Ellen ${gap(1)}</span></div>
        <div class="line"><span>Train:</span><span>8.45 service, which starts in ${gap(2)}</span></div>
        <div class="line"><span>Seat:</span><span>coach ${gap(3)}</span></div>
        <div class="line"><span>Colour:</span><span>${gap(4)}, with a black strap</span></div>
        <div class="line"><span>Special feature:</span><span>broken ${gap(5)} on the front pocket</span></div>
        <div class="sub">Contents</div>
        <div class="line"><span>Item 1:</span><span>a ${gap(6)}</span></div>
        <div class="line"><span>Item 2:</span><span>a library book about ${gap(7)}</span></div>
        <div class="line"><span>Item 3:</span><span>a pair of leather ${gap(8)}</span></div>
        <div class="sub">Collection</div>
        <div class="line"><span>Where:</span><span>new office on Platform ${gap(9)}</span></div>
        <div class="line"><span>Handling fee:</span><span>£ ${gap(10)}</span></div>
      </div>
    </div>
  </section>

  <section class="part" id="part-2" data-part="2" hidden>
    <div class="part-head"><h2>Part 2</h2><span class="label">Questions 11–20</span></div>
    <div class="qblock">
      <h3>Questions 11–16</h3>
      <p class="instr">Complete the table below. Write <b>${LIMIT_WN}</b> for each answer.</p>
      <div class="ntable-wrap"><table class="ntable">
        <caption>Millbrook Lido · What’s on offer</caption>
        <thead><tr><th>Facility</th><th>Details</th></tr></thead>
        <tbody>
          <tr><td data-h="Facility">Main pool</td><td data-h="Details">water heated to ${gap(11)} degrees</td></tr>
          <tr><td data-h="Facility">Children’s pool</td><td data-h="Details">open until the end of ${gap(12)}</td></tr>
          <tr><td data-h="Facility">Café</td><td data-h="Details">now on the ${gap(13)}</td></tr>
          <tr><td data-h="Facility">Lockers</td><td data-h="Details">need a ${gap(14)}, which is returned</td></tr>
          <tr><td data-h="Facility">Early session (weekdays)</td><td data-h="Details">starts at ${gap(15)} a.m.</td></tr>
          <tr><td data-h="Facility">Adult season ticket</td><td data-h="Details">£ ${gap(16)}</td></tr>
        </tbody>
      </table></div>
    </div>
    ${two(17, 'Which <b>TWO</b> things are new at the lido this year?', { A: 'solar panels', B: 'a sauna', C: 'a diving board', D: 'swimming lessons for adults', E: 'free parking' })}
    ${two(19, 'Which <b>TWO</b> pieces of advice does Sam give to visitors?', { A: 'Book in advance for weekend visits.', B: 'Bring a padlock for the lockers.', C: 'Avoid cycling because there is little space for bikes.', D: 'Check the water temperature online before coming.', E: 'Come early on weekdays.' })}
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
      <p class="instr">Who will do each part of the report? Write the correct letter, <b>A, B or C</b>, next to Questions 26–30.</p>
      ${box('Who', WHO)}
      ${matchRows([26, 27, 28, 29, 30], WHO)}
    </div>
  </section>

  <section class="part" id="part-4" data-part="4" hidden>
    <div class="part-head"><h2>Part 4</h2><span class="label">Questions 31–40</span></div>
    <div class="qblock">
      <h3>Questions 31–40</h3>
      <p class="instr">Complete the notes below. Write <b>${LIMIT_W}</b> for each answer.</p>
      <div class="notes">
        <h4>Sleep in the animal kingdom</h4>
        <span class="h">Which animals sleep?</span>
        <ul>
          <li>Almost all animals with a nervous system, even the ${gap(31)}, which has no brain.</li>
        </ul>
        <span class="h">How much?</span>
        <ul>
          <li>Little brown bat: about ${gap(32)} hours a day.</li>
          <li>Wild elephants: about ${gap(33)} hours a night.</li>
        </ul>
        <span class="h">Unusual ways of sleeping</span>
        <ul>
          <li>Dolphins sleep with one half of the ${gap(34)} at a time.</li>
          <li>They keep one ${gap(35)} open to watch for danger.</li>
          <li>Frigatebirds can sleep while ${gap(36)}.</li>
        </ul>
        <span class="h">Why do animals sleep?</span>
        <ul>
          <li>To save ${gap(37)}, especially in small animals.</li>
          <li>To clear waste from the brain and to strengthen ${gap(38)}.</li>
          <li>Much evidence comes from studies of ${gap(39)} flies.</li>
        </ul>
        <span class="h">A word of caution</span>
        <ul>
          <li>Captive animals sleep more, perhaps because they feel ${gap(40)}.</li>
        </ul>
      </div>
    </div>
  </section>`;

  // Part changes and reading/checking pauses in the recording (seconds) — filled in by tools/make_listening_audio.py
  const TIMELINE = [{"t":1.0,"focus":1},{"t":37.67,"pause":30,"label":"Reading time · Questions 1–5"},{"t":67.67,"speech":1,"part":1},{"t":177.0,"pause":30,"label":"Reading time · Questions 6–10"},{"t":207.0,"speech":1,"part":1},{"t":274.32,"pause":30,"label":"Checking time · Part 1"},{"t":304.32,"focus":2},{"t":304.32,"speech":1,"part":2},{"t":319.52,"pause":30,"label":"Reading time · Questions 11–16"},{"t":349.52,"speech":1,"part":2},{"t":432.8,"pause":30,"label":"Reading time · Questions 17–20"},{"t":462.8,"speech":1,"part":2},{"t":532.63,"pause":30,"label":"Checking time · Part 2"},{"t":562.63,"focus":3},{"t":562.63,"speech":1,"part":3},{"t":579.71,"pause":30,"label":"Reading time · Questions 21–25"},{"t":609.71,"speech":1,"part":3},{"t":708.91,"pause":30,"label":"Reading time · Questions 26–30"},{"t":738.91,"speech":1,"part":3},{"t":791.66,"pause":30,"label":"Checking time · Part 3"},{"t":821.66,"focus":4},{"t":821.66,"speech":1,"part":4},{"t":833.55,"pause":45,"label":"Reading time · Questions 31–40"},{"t":878.55,"speech":1,"part":4}];
  const partNames = { 1: 'Part 1 · Reporting lost property', 2: 'Part 2 · Millbrook Lido reopens', 3: 'Part 3 · A bakery case study', 4: 'Part 4 · Sleep in the animal kingdom' };
  window.LISTENING_TEST = { num: 11, name: 'Full Mock Test 1', audio: 'audio/listening-test11.mp3', minutes: 17, mb: 8, roles: ROLES, script: SCRIPT, Q, paper: PAPER, timeline: TIMELINE, partNames };
})();
