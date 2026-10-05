// IELTS Listening · Full Mock Test 6 — content only. The exam engine is assets/listening-exam.js.
// Kept for the mock test: this test is not listed with the practice tests.
(() => {
  'use strict';
  // Speakers: label for the transcript, voice for tools/make_listening_audio.py
  const ROLES = {
    narrator:  { label: 'Narrator', voice: 'bm_george', speed: 0.92, lang: 'en-gb' },
    organiser: { label: 'Organiser', voice: 'bf_lily', speed: 0.98, lang: 'en-gb' },
    james:     { label: 'James', voice: 'am_liam', speed: 0.98, lang: 'en-us' },
    guide:     { label: 'Guide', voice: 'bm_fable', speed: 0.97, lang: 'en-gb' },
    ella:      { label: 'Ella', voice: 'af_kore', speed: 0.98, lang: 'en-us' },
    ravi:      { label: 'Ravi', voice: 'bm_lewis', speed: 0.98, lang: 'en-gb' },
    moore:     { label: 'Dr Moore', voice: 'bf_emma', speed: 0.96, lang: 'en-gb' },
    lecturer:  { label: 'Lecturer', voice: 'am_eric', speed: 0.95, lang: 'en-us' },
  };

  // Script: [role, text] lines, or ['pause', seconds, label], or ['focus', part]
  // {{text|n}} marks where the answer to question n is heard.
  const SCRIPT = [
    ['focus', 1],
    ['narrator', 'IELTS Listening. Full Mock Test 6.'],
    ['narrator', 'In the test, you will hear a number of different recordings and you will have to answer questions on what you hear. There will be time for you to read the instructions and questions, and you will have a chance to check your work. All the recordings will be played once only. The test is in four parts.'],
    ['narrator', 'Now turn to Part 1.'],
    ['narrator', 'Part 1. You will hear a man phoning to enter a charity running race. First, you have some time to look at questions 1 to 5.'],
    ['pause', 30, 'Reading time · Questions 1–5'],
    ['narrator', 'You will see that there is an example that has been done for you. On this occasion only, the conversation relating to this will be played first.'],
    ['organiser', 'Hello, Riverside Charity Run, how can I help?'],
    ['james', "Hi. I'd like to enter the race next month, please. Is it too late?"],
    ['organiser', "Not at all. There are two distances, five kilometres and ten. Which one would you like to do?"],
    ['james', "The ten-kilometre race, please."],
    ['narrator', "The man wants to run ten kilometres, so '10 km' has been written in the space. Now we shall begin. You should answer the questions as you listen, because you will not hear the recording a second time. Listen carefully and answer questions 1 to 5."],
    ['organiser', 'Hello, Riverside Charity Run, how can I help?'],
    ['james', "Hi. I'd like to enter the race next month, please. Is it too late?"],
    ['organiser', "Not at all. There are two distances, five kilometres and ten. Which one would you like to do?"],
    ['james', "The ten-kilometre race, please."],
    ['organiser', "Lovely. Can I have your name?"],
    ['james', "James {{Thornton|1}}. That's T, H, O, R, N, T, O, N."],
    ['organiser', 'And how old are you, James?'],
    ['james', "I'm {{thirty-four|2}}. I'll be thirty-five in December, but that's after the race."],
    ['organiser', "And what time do you expect to finish in? We put runners in groups at the start, so faster runners don't get held up."],
    ['james', "Last year I did it in just over an hour. But I've been training much harder, so I'm hoping to finish in under {{fifty-five|3}} minutes."],
    ['organiser', "Great. Every runner gets a free T-shirt. What size would you like?"],
    ['james', "I'm usually a small, but these shirts tend to be tight, so I'll have a {{medium|4}}, please."],
    ['organiser', "And are you raising money for a particular charity?"],
    ['james', "Yes. I'm running for the {{hospice|5}} in my town, where my grandfather was looked after."],
    ['narrator', 'Before you hear the rest of the conversation, you have some time to look at questions 6 to 10.'],
    ['pause', 30, 'Reading time · Questions 6–10'],
    ['narrator', 'Now listen and answer questions 6 to 10.'],
    ['james', 'How much is the entry fee?'],
    ['organiser', "If you'd entered before the end of last month, it would have been twenty pounds. It's {{twenty-five|6}} pounds now, I'm afraid."],
    ['james', "That's fine. Where does the race start?"],
    ['organiser', "It used to start at the park, but this year it starts in front of the {{cathedral|7}}, and finishes by the river."],
    ['james', 'And when do I get my race number?'],
    ['organiser', "We don't post them any more. You collect it from the sports shop on {{Bridge|8}} Street, any time in the week before the race."],
    ['james', "Is there anywhere to leave a bag on the day?"],
    ['organiser', "Yes, there'll be a large {{tent|9}} near the start, where volunteers will look after bags."],
    ['james', "And do we get anything at the end?"],
    ['organiser', "Everyone who finishes gets a {{medal|10}}, and there's free fruit and water too."],
    ['james', "Brilliant. Thanks very much."],
    ['narrator', 'That is the end of Part 1. You now have half a minute to check your answers to Part 1.'],
    ['pause', 30, 'Checking time · Part 1'],

    ['focus', 2],
    ['narrator', 'Now turn to Part 2.'],
    ['narrator', 'Part 2. You will hear a guide talking to a group of visitors at a wildlife rescue centre. First, you have some time to look at questions 11 to 16.'],
    ['pause', 30, 'Reading time · Questions 11–16'],
    ['narrator', 'Now listen carefully and answer questions 11 to 16.'],
    ['guide', "Welcome to Oakhill Wildlife Rescue. We care for wild animals that have been injured, orphaned or made ill, and we return them to the wild whenever we can."],
    ['guide', "People often expect us to be full of foxes and deer, and we do get some. But by far the most common animals brought in are {{hedgehogs|11}}, usually because they've been hit by cars or caught in garden netting."],
    ['guide', "Our busiest season is {{spring|12}}, when lots of baby birds and animals are found on their own. Summer is busy too, but nothing like spring."],
    ['guide', "We have just four paid staff. The centre is run mainly by {{volunteers|13}}, and we couldn't manage without them."],
    ['guide', "Please remember that these are wild animals, not pets. You can take photographs, but you must never {{feed|14}} them, because human food can make them very ill."],
    ['guide', "Most visitors' favourite place is the {{owl|15}} enclosure, where you can see birds that are recovering from injuries. The hedgehog hospital is popular too, but you can only see it through a window."],
    ['guide', "On average, animals stay with us for about {{six|16}} weeks before they're well enough to be released, although some stay for months."],
    ['narrator', 'Before you hear the rest of the talk, you have some time to look at questions 17 to 20.'],
    ['pause', 30, 'Reading time · Questions 17–20'],
    ['narrator', 'Now listen and answer questions 17 to 20.'],
    ['guide', "Many of you will find an injured bird at some point. If you do, please don't try to give it water or bread, because it may choke. And don't rush it to a vet, because many vets aren't trained to treat wild birds. Instead, {{put it in a cardboard box and leave it somewhere quiet and dark|17}}, which helps it to calm down. Then {{phone us for advice|18}}. We'll tell you whether to bring it in."],
    ['guide', "And if you'd like to help us, there are several ways. We can't take any more volunteers at the moment, because we have a long waiting list, and we don't need food donations. But {{you can adopt one of our animals|19}}, which helps to pay for its care, and you'll receive photos of its progress. And {{we're always grateful for old towels and blankets|20}}, which we use for bedding. Now, let's go and see the owls."],
    ['narrator', 'That is the end of Part 2. You now have half a minute to check your answers to Part 2.'],
    ['pause', 30, 'Checking time · Part 2'],

    ['focus', 3],
    ['narrator', 'Now turn to Part 3.'],
    ['narrator', 'Part 3. You will hear two education students, Ella and Ravi, talking to their tutor, Dr Moore, about their research on children’s reading habits. First, you have some time to look at questions 21 to 25.'],
    ['pause', 30, 'Reading time · Questions 21–25'],
    ['narrator', 'Now listen carefully and answer questions 21 to 25.'],
    ['moore', "So, how did the research in the primary school go?"],
    ['ella', "Really well. We interviewed sixty children aged nine and ten. We'd expected them to read less than children in the past, because of screens. But {{most of them said they read for pleasure several times a week|21}}, which was a nice surprise."],
    ['moore', "That's encouraging. Did anything else stand out?"],
    ['ravi', "Yes. The biggest factor seemed to be {{whether there were books at home|22}}. It mattered more than how much time the children spent on screens, and more than whether their parents read themselves."],
    ['moore', "Interesting. I've read your draft, and the analysis is good. But the introduction is weak. {{You don't explain why this research matters|23}}. Why should teachers or parents care about it?"],
    ['ella', "Okay, we'll rewrite that."],
    ['moore', "And how are you going to present your findings to the school?"],
    ['ravi', "We thought about a written report, but the head teacher said teachers wouldn't have time to read it. So {{we'll give a short talk at a staff meeting|24}}."],
    ['moore', "Good. And what would you do differently if you did it again?"],
    ['ella', "{{We'd talk to the parents as well|25}}. The children told us a lot, but sometimes they didn't really know how often they read, so it would be good to compare their answers with what their parents say."],
    ['narrator', 'Before you hear the rest of the discussion, you have some time to look at questions 26 to 30.'],
    ['pause', 30, 'Reading time · Questions 26–30'],
    ['narrator', 'Now listen and answer questions 26 to 30.'],
    ['moore', "Let's look at your findings on different types of reading. What did you find about comics?"],
    ['ravi', "{{They were by far the most popular kind of reading with boys|26}}. Girls read them too, but not as much."],
    ['moore', 'And e-books?'],
    ['ella', "Lots of children had them on tablets, but {{they rarely finished them|27}}. They said they got distracted by games."],
    ['moore', 'What about library books?'],
    ['ravi', "Most of the library books were {{chosen by teachers|28}}, as part of a reading scheme. The children didn't get much choice."],
    ['moore', 'And audiobooks?'],
    ['ella', "Fewer children used them, but those who did {{mostly listened at bedtime|29}}, to help them fall asleep."],
    ['moore', 'And finally, non-fiction?'],
    ['ravi', "Books about animals and football were very popular, and {{children often swapped them with their friends|30}}. That was quite unusual for other kinds of book."],
    ['moore', "Very interesting. Well done, both of you."],
    ['narrator', 'That is the end of Part 3. You now have half a minute to check your answers to Part 3.'],
    ['pause', 30, 'Checking time · Part 3'],

    ['focus', 4],
    ['narrator', 'Now turn to Part 4.'],
    ['narrator', 'Part 4. You will hear a lecture about desertification. First, you have some time to look at questions 31 to 40.'],
    ['pause', 45, 'Reading time · Questions 31–40'],
    ['narrator', 'Now listen carefully and answer questions 31 to 40.'],
    ['lecturer', "Good morning. Today's topic is desertification, a problem that affects the lives of hundreds of millions of people."],
    ['lecturer', "First, what does the word mean? Desertification is the process by which land in dry areas loses its {{fertility|31}}, so that it can no longer support crops, animals or natural vegetation. It's important to understand what it isn't. It's not, for example, the existing deserts, such as the {{Sahara|32}}, simply moving outwards. It happens in patches, wherever land is badly managed."],
    ['lecturer', "What causes it? One major cause is overgrazing, when farmers keep too many {{livestock|33}}, such as goats and cattle, on the same land, so that the plants have no chance to recover. Another is the cutting down of trees and bushes for {{firewood|34}}, which is still the main fuel for cooking in many dry regions. Without roots to hold it in place, the soil is easily blown or washed away. A third cause is poor {{irrigation|35}}. When farmers water their fields without proper drainage, salt builds up in the soil, until nothing will grow."],
    ['lecturer', "The effects are serious. Bare soil is picked up by the wind, causing dust {{storms|36}} that can travel thousands of kilometres. Farmers' harvests fall, and in the worst cases, families are forced to {{migrate|37}}, often to cities, in search of work."],
    ['lecturer', "So what can be done? The best-known project is Africa's Great Green {{Wall|38}}, a plan to restore a belt of land across the continent, south of the Sahara. Progress has been slower than hoped, but it has encouraged many local projects."],
    ['lecturer', "Some of the most successful methods are also the simplest. In Niger, farmers have protected the tree {{stumps|39}} that remain in their fields, allowing them to grow back, and millions of hectares have become green again. In other places, farmers build lines of stones along the slopes of their fields. These slow down the water when it rains, so that more {{rainwater|40}} soaks into the soil instead of running away."],
    ['lecturer', "Next week, we'll look at a case study from China."],
    ['narrator', 'That is the end of Part 4. That is the end of the listening test.'],
  ];

  // Questions. kind: gap | mcq | two | match
  const LIMIT_WN = 'ONE WORD AND/OR A NUMBER';
  const LIMIT_W = 'ONE WORD ONLY';
  const Q = {
    1:  { kind: 'gap', ans: ['thornton'], limit: 'wn', key: 'Thornton' },
    2:  { kind: 'gap', ans: ['34', 'thirty-four'], limit: 'wn' },
    3:  { kind: 'gap', ans: ['55', 'fifty-five'], limit: 'wn' },
    4:  { kind: 'gap', ans: ['medium', 'm'], limit: 'wn' },
    5:  { kind: 'gap', ans: ['hospice'], limit: 'wn' },
    6:  { kind: 'gap', ans: ['25', 'twenty-five'], limit: 'wn' },
    7:  { kind: 'gap', ans: ['cathedral'], limit: 'wn' },
    8:  { kind: 'gap', ans: ['bridge'], limit: 'wn', key: 'Bridge' },
    9:  { kind: 'gap', ans: ['tent'], limit: 'wn' },
    10: { kind: 'gap', ans: ['medal'], limit: 'wn' },
    11: { kind: 'gap', ans: ['hedgehogs'], limit: 'wn' },
    12: { kind: 'gap', ans: ['spring'], limit: 'wn' },
    13: { kind: 'gap', ans: ['volunteers'], limit: 'wn' },
    14: { kind: 'gap', ans: ['feed'], limit: 'wn' },
    15: { kind: 'gap', ans: ['owl', 'owls'], limit: 'wn' },
    16: { kind: 'gap', ans: ['6', 'six'], limit: 'wn' },
    17: { kind: 'two', pair: [17, 18], ans: ['B', 'D'] },
    18: { kind: 'two', pair: [17, 18], ans: ['B', 'D'] },
    19: { kind: 'two', pair: [19, 20], ans: ['A', 'C'] },
    20: { kind: 'two', pair: [19, 20], ans: ['A', 'C'] },
    21: { kind: 'mcq', q: 'What surprised the students about the children they interviewed?', opts: { A: 'Most of them read for pleasure regularly.', B: 'They spent little time on screens.', C: 'They preferred reading to sport.' }, ans: 'A' },
    22: { kind: 'mcq', q: 'According to Ravi, which factor had the biggest effect on children’s reading?', opts: { A: 'the amount of time spent on screens', B: 'whether their parents read', C: 'whether there were books at home' }, ans: 'C' },
    23: { kind: 'mcq', q: 'What does Dr Moore say is wrong with the introduction?', opts: { A: 'It is too long.', B: 'It does not explain why the research is important.', C: 'It does not describe the method.' }, ans: 'B' },
    24: { kind: 'mcq', q: 'How will the students present their findings to the school?', opts: { A: 'in a written report', B: 'in a talk to teachers', C: 'in a newsletter for parents' }, ans: 'B' },
    25: { kind: 'mcq', q: 'If they did the research again, the students would', opts: { A: 'interview more children.', B: 'include older children.', C: 'also interview parents.' }, ans: 'C' },
    26: { kind: 'match', label: 'comics', ans: 'A' },
    27: { kind: 'match', label: 'e-books', ans: 'F' },
    28: { kind: 'match', label: 'library books', ans: 'E' },
    29: { kind: 'match', label: 'audiobooks', ans: 'B' },
    30: { kind: 'match', label: 'non-fiction books', ans: 'G' },
    31: { kind: 'gap', ans: ['fertility'], limit: 'w' },
    32: { kind: 'gap', ans: ['sahara'], limit: 'w', key: 'Sahara' },
    33: { kind: 'gap', ans: ['livestock', 'animals'], limit: 'w' },
    34: { kind: 'gap', ans: ['firewood', 'fuel'], limit: 'w' },
    35: { kind: 'gap', ans: ['irrigation'], limit: 'w' },
    36: { kind: 'gap', ans: ['storms'], limit: 'w' },
    37: { kind: 'gap', ans: ['migrate', 'move'], limit: 'w' },
    38: { kind: 'gap', ans: ['wall'], limit: 'w', key: 'Wall' },
    39: { kind: 'gap', ans: ['stumps'], limit: 'w' },
    40: { kind: 'gap', ans: ['rainwater', 'water', 'rain'], limit: 'w' },
  };
  const FINDINGS = { A: 'most popular with boys', B: 'mainly used at bedtime', C: 'disliked by parents', D: 'usually read with a parent', E: 'mostly chosen by teachers', F: 'rarely finished', G: 'often shared with friends' };

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
        <h4>Riverside Charity Run · Entry form</h4>
        <div class="line"><span>Race:</span><span class="example">Example: <u>10 km</u></span></div>
        <div class="line"><span>Name:</span><span>James ${gap(1)}</span></div>
        <div class="line"><span>Age:</span><span>${gap(2)}</span></div>
        <div class="line"><span>Expected time:</span><span>under ${gap(3)} minutes</span></div>
        <div class="line"><span>T-shirt size:</span><span>${gap(4)}</span></div>
        <div class="line"><span>Raising money for:</span><span>a local ${gap(5)}</span></div>
        <div class="sub">Race information</div>
        <div class="line"><span>Entry fee:</span><span>£ ${gap(6)}</span></div>
        <div class="line"><span>Start:</span><span>in front of the ${gap(7)}</span></div>
        <div class="line"><span>Race number:</span><span>collect from the sports shop on ${gap(8)} Street</span></div>
        <div class="line"><span>Bags:</span><span>can be left in a ${gap(9)}</span></div>
        <div class="line"><span>At the finish:</span><span>every runner gets a ${gap(10)}</span></div>
      </div>
    </div>
  </section>

  <section class="part" id="part-2" data-part="2" hidden>
    <div class="part-head"><h2>Part 2</h2><span class="label">Questions 11–20</span></div>
    <div class="qblock">
      <h3>Questions 11–16</h3>
      <p class="instr">Complete the notes below. Write <b>${LIMIT_WN}</b> for each answer.</p>
      <div class="notes">
        <h4>Oakhill Wildlife Rescue</h4>
        <ul>
          <li>Most common animals brought in: ${gap(11)}</li>
          <li>Busiest season: ${gap(12)}</li>
          <li>The centre is run mainly by ${gap(13)}.</li>
          <li>Visitors must never ${gap(14)} the animals.</li>
          <li>Most popular area: the ${gap(15)} enclosure</li>
          <li>Average stay before release: ${gap(16)} weeks</li>
        </ul>
      </div>
    </div>
    ${two(17, 'Which <b>TWO</b> things does the guide advise people to do if they find an injured bird?', { A: 'give it some water', B: 'keep it in a quiet, dark box', C: 'feed it some bread', D: 'phone the centre', E: 'take it to a vet at once' })}
    ${two(19, 'Which <b>TWO</b> ways of helping the centre does the guide suggest?', { A: 'adopting an animal', B: 'becoming a volunteer', C: 'giving old towels and blankets', D: 'donating food', E: 'organising a fundraising event' })}
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
      <p class="instr">What did the students find about each type of reading? Choose <b>FIVE</b> answers from the box and write the correct letter, <b>A–G</b>, next to Questions 26–30.</p>
      ${box('Findings', FINDINGS)}
      ${matchRows([26, 27, 28, 29, 30], FINDINGS)}
    </div>
  </section>

  <section class="part" id="part-4" data-part="4" hidden>
    <div class="part-head"><h2>Part 4</h2><span class="label">Questions 31–40</span></div>
    <div class="qblock">
      <h3>Questions 31–40</h3>
      <p class="instr">Complete the notes below. Write <b>${LIMIT_W}</b> for each answer.</p>
      <div class="notes">
        <h4>Desertification</h4>
        <span class="h">Definition</span>
        <ul>
          <li>Land in dry areas loses its ${gap(31)}.</li>
          <li>It is not deserts such as the ${gap(32)} moving outwards.</li>
        </ul>
        <span class="h">Causes</span>
        <ul>
          <li>Overgrazing by too many ${gap(33)}.</li>
          <li>Cutting trees and bushes for ${gap(34)}.</li>
          <li>Poor ${gap(35)}, which leaves salt in the soil.</li>
        </ul>
        <span class="h">Effects</span>
        <ul>
          <li>Dust ${gap(36)} that travel long distances.</li>
          <li>Families may have to ${gap(37)}.</li>
        </ul>
        <span class="h">Solutions</span>
        <ul>
          <li>Africa’s Great Green ${gap(38)}.</li>
          <li>Niger: farmers protect tree ${gap(39)} so they grow back.</li>
          <li>Lines of stones help ${gap(40)} soak into the soil.</li>
        </ul>
      </div>
    </div>
  </section>`;

  // Part changes and reading/checking pauses in the recording (seconds) — filled in by tools/make_listening_audio.py
  const TIMELINE = [{"t":1.0,"focus":1},{"t":35.08,"pause":30,"label":"Reading time · Questions 1–5"},{"t":65.08,"speech":1,"part":1},{"t":175.21,"pause":30,"label":"Reading time · Questions 6–10"},{"t":205.21,"speech":1,"part":1},{"t":260.69,"pause":30,"label":"Checking time · Part 1"},{"t":290.69,"focus":2},{"t":290.69,"speech":1,"part":2},{"t":304.4,"pause":30,"label":"Reading time · Questions 11–16"},{"t":334.4,"speech":1,"part":2},{"t":411.5,"pause":30,"label":"Reading time · Questions 17–20"},{"t":441.5,"speech":1,"part":2},{"t":490.71,"pause":30,"label":"Checking time · Part 2"},{"t":520.71,"focus":3},{"t":520.71,"speech":1,"part":3},{"t":538.56,"pause":30,"label":"Reading time · Questions 21–25"},{"t":568.56,"speech":1,"part":3},{"t":652.87,"pause":30,"label":"Reading time · Questions 26–30"},{"t":682.87,"speech":1,"part":3},{"t":747.68,"pause":30,"label":"Checking time · Part 3"},{"t":777.68,"focus":4},{"t":777.68,"speech":1,"part":4},{"t":789.06,"pause":45,"label":"Reading time · Questions 31–40"},{"t":834.06,"speech":1,"part":4}];
  const partNames = { 1: 'Part 1 · Entering a charity run', 2: 'Part 2 · A wildlife rescue centre', 3: 'Part 3 · Children’s reading habits', 4: 'Part 4 · Desertification' };
  window.LISTENING_TEST = { num: 16, name: 'Full Mock Test 6', audio: 'audio/listening-test16.mp3', minutes: 16, mb: 8, roles: ROLES, script: SCRIPT, Q, paper: PAPER, timeline: TIMELINE, partNames };
})();
