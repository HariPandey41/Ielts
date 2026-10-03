// IELTS Listening · Practice Test 9 — content only. The exam engine is assets/listening-exam.js.
(() => {
  'use strict';
  // Speakers: label for the transcript, voice for tools/make_listening_audio.py
  const ROLES = {
    narrator: { label: 'Narrator', voice: 'bm_george', speed: 0.92, lang: 'en-gb' },
    gareth:   { label: 'Gareth', voice: 'bm_lewis', speed: 0.98, lang: 'en-gb' },
    anna:     { label: 'Anna', voice: 'af_nicole', speed: 0.98, lang: 'en-us' },
    fiona:    { label: 'Fiona', voice: 'bf_alice', speed: 0.96, lang: 'en-gb' },
    hannah:   { label: 'Hannah', voice: 'bf_lily', speed: 0.98, lang: 'en-gb' },
    omar:     { label: 'Omar', voice: 'am_liam', speed: 1.0, lang: 'en-us' },
    lecturer: { label: 'Lecturer', voice: 'am_adam', speed: 0.95, lang: 'en-us' },
  };

  // Script: [role, text] lines, or ['pause', seconds, label], or ['focus', part]
  // {{text|n}} marks where the answer to question n is heard.
  const SCRIPT = [
    ['focus', 1],
    ['narrator', 'IELTS Listening. Practice Test 9.'],
    ['narrator', 'In the test, you will hear a number of different recordings and you will have to answer questions on what you hear. There will be time for you to read the instructions and questions, and you will have a chance to check your work. All the recordings will be played once only. The test is in four parts.'],
    ['narrator', 'Now turn to Part 1.'],
    ['narrator', 'Part 1. You will hear a woman phoning a campsite to make a booking. First, you have some time to look at questions 1 to 5.'],
    ['pause', 30, 'Reading time · Questions 1–5'],
    ['narrator', 'You will see that there is an example that has been done for you. On this occasion only, the conversation relating to this will be played first.'],
    ['gareth', 'Pinewood Campsite, Gareth speaking.'],
    ['anna', "Hello. I'd like to book a pitch for a family holiday in August, if you have anything left."],
    ['gareth', "We should do. How many people will there be?"],
    ['anna', "There are four of us. Two adults and two children."],
    ['narrator', "There will be four people, so '4' has been written in the space. Now we shall begin. You should answer the questions as you listen, because you will not hear the recording a second time. Listen carefully and answer questions 1 to 5."],
    ['gareth', 'Pinewood Campsite, Gareth speaking.'],
    ['anna', "Hello. I'd like to book a pitch for a family holiday in August, if you have anything left."],
    ['gareth', "We should do. How many people will there be?"],
    ['anna', "There are four of us. Two adults and two children. We were hoping to arrive on Friday the sixteenth."],
    ['gareth', "I'm afraid that weekend is fully booked. The following Friday is fine, though. That's the {{twenty-third|1}}."],
    ['anna', "Okay, we can do that. We'll stay for a week."],
    ['gareth', "Lovely. Will you be bringing a caravan?"],
    ['anna', "We used to have one, but we sold it last year. So it'll be a {{tent|2}}. A big one."],
    ['gareth', "No problem. Do you have a preference for where you'd like to be? Some people like to be near the shower block."],
    ['anna', "I've heard that can be noisy. Is there anything near the {{lake|3}}? The children love swimming."],
    ['gareth', "Yes, there's a pitch right by the water. Now, the price in August is normally thirty-six pounds a night, but that includes electricity. Do you need an electric hook-up?"],
    ['anna', "No, we won't need it."],
    ['gareth', "Then it's {{thirty-two|4}} pounds a night."],
    ['anna', "That's fine. Oh, and we'll be bringing our dog. Is that allowed?"],
    ['gareth', "Yes, dogs are welcome, but they must be kept on a {{lead|5}} at all times, because there are a lot of children on the site."],
    ['narrator', 'Before you hear the rest of the conversation, you have some time to look at questions 6 to 10.'],
    ['pause', 30, 'Reading time · Questions 6–10'],
    ['narrator', 'Now listen and answer questions 6 to 10.'],
    ['anna', 'Is there a shop on the site?'],
    ['gareth', "There is. It's quite small, but it sells all the basics, and we have fresh {{bread|6}} delivered every morning from the village bakery."],
    ['anna', "Lovely. Can we have a campfire? The children would love that."],
    ['gareth', "I'm afraid campfires aren't allowed, because of the risk of fire in the forest. You can use a barbecue, but it has to be raised off the {{ground|7}}, so it doesn't burn the grass."],
    ['anna', 'Understood. Are there any activities for children?'],
    ['gareth', "In August, we run a kids' club every morning. This year, there's {{archery|8}} for the older children, which is very popular. We used to offer pony rides as well, but not any more."],
    ['anna', "My son will love that. And what time can we arrive?"],
    ['gareth', "Any time after two. If you arrive after reception closes, the gate will be locked, but we'll send you the code by {{text|9}} on the morning you arrive. We used to send it by email, but people couldn't always check their emails on the road."],
    ['anna', "That's sensible. And how do I pay?"],
    ['gareth', "We just need a {{deposit|10}} of fifty pounds now, and you can pay the rest when you arrive."],
    ['anna', "Great. Let me give you my card details."],
    ['narrator', 'That is the end of Part 1. You now have half a minute to check your answers to Part 1.'],
    ['pause', 30, 'Checking time · Part 1'],

    ['focus', 2],
    ['narrator', 'Now turn to Part 2.'],
    ['narrator', 'Part 2. You will hear a guide talking to visitors at a botanical garden. First, you have some time to look at questions 11 to 16.'],
    ['pause', 30, 'Reading time · Questions 11–16'],
    ['narrator', 'Now listen carefully and answer questions 11 to 16.'],
    ['fiona', "Welcome to the Kingsford Botanical Garden. I'm Fiona, one of the guides, and I'll give you a short introduction before you explore."],
    ['fiona', "The garden was founded in sixteen seventy. Today, of course, we display plants from all over the world, and we train young gardeners here too. But originally, {{the garden was created to grow plants for medicine|11}}, for the doctors at the university."],
    ['fiona', "The most famous building is the Palm House, the large glasshouse in the centre. It isn't the biggest in Europe, as some people think, but it does have an interesting history. {{It was badly damaged in a storm in nineteen eighty-seven and was completely rebuilt|12}}. It's open as usual today."],
    ['fiona', "If you're interested in roses, the rose garden is lovely at any time in summer, but {{it's at its best in late June|13}}. By September, most of the flowers are over."],
    ['fiona', "For families, we have a children's trail. You don't need to book, just pick up a map at the entrance. It takes about forty minutes, and {{there's a quiz along the way|14}}, with a small prize at the end."],
    ['fiona', "There's something new this year. We'd planned to open a sensory garden, but that won't be ready until next spring. However, {{our treetop walkway opened last month|15}}, and it gives you a wonderful view of the whole garden."],
    ['fiona', "And if you enjoy your visit, do think about becoming a member. Members get free entry all year, of course, and {{they can bring a guest for free|16}} on every visit. Unfortunately, we can't offer free parking."],
    ['narrator', 'Before you hear the rest of the talk, you have some time to look at questions 17 to 20.'],
    ['pause', 30, 'Reading time · Questions 17–20'],
    ['narrator', 'Now listen and answer questions 17 to 20.'],
    ['fiona', "Now, a few requests. You're welcome to have a picnic in the meadow, and dogs are allowed as long as they're on a lead. You can take as many photographs as you like. But please {{don't feed the ducks|17}} on the lake, because bread is bad for them. And {{flying drones isn't allowed|18}} anywhere in the garden, because they disturb the birds."],
    ['fiona', "Finally, don't miss our giant water lily in the Lily House. It's a remarkable plant. The first one to flower in Britain was at a country house in Derbyshire, not here, in eighteen forty-nine. The leaves can grow up to three metres across, and {{they're strong enough to support the weight of a small child|19}}. The flowers are unusual too. {{They only open at night|20}}, and they change colour from white to pink. Ours won't flower until August, I'm afraid, but the leaves alone are worth seeing."],
    ['fiona', 'Enjoy your visit.'],
    ['narrator', 'That is the end of Part 2. You now have half a minute to check your answers to Part 2.'],
    ['pause', 30, 'Checking time · Part 2'],

    ['focus', 3],
    ['narrator', 'Now turn to Part 3.'],
    ['narrator', 'Part 3. You will hear two students, Hannah and Omar, discussing a study they are planning on clothing recycling. First, you have some time to look at questions 21 to 24.'],
    ['pause', 30, 'Reading time · Questions 21–24'],
    ['narrator', 'Now listen carefully and answer questions 21 to 24.'],
    ['hannah', "So, Omar, I've finished reading the background articles on clothing recycling. Some of it was quite shocking."],
    ['omar', "Same here. I'd always assumed that clothes we give to charity shops are sold here. But in fact, {{most donated clothes are exported|21}}, often to countries where they put local clothing makers out of business."],
    ['hannah', "And the other big problem is the material itself. Charity shops will take almost anything, and there are collection banks everywhere, so it's not that people don't know where to take clothes. It's that {{so many clothes are made from mixed fabrics|22}}, like cotton and polyester together, which are very hard to separate."],
    ['omar', "Right. So, how are we going to collect our data? I don't think observing people at the recycling banks would tell us much."],
    ['hannah', "No. And focus groups are hard to organise. I think {{we should interview some charity shop managers|23}}. They know exactly what gets donated."],
    ['omar', "Good. And to find out about people's habits, {{we could put an online questionnaire|24}} on the student union website. We'd get a lot of responses that way."],
    ['hannah', "And we can't get sales data anyway, the shops said it's confidential. So interviews and a questionnaire."],
    ['narrator', 'Before you hear the rest of the discussion, you have some time to look at questions 25 to 30.'],
    ['pause', 30, 'Reading time · Questions 25–30'],
    ['narrator', 'Now listen and answer questions 25 to 30.'],
    ['omar', "We should also explain what actually happens to donated clothes. I made some notes when I visited the recycling company."],
    ['hannah', 'Go on.'],
    ['omar', "First, clothes from the collection banks are taken by lorry to a {{warehouse|25}}, on an industrial estate outside the city. There, everything is sorted by {{hand|26}}. I was surprised. I expected machines, but people can judge the quality much better."],
    ['hannah', 'And then?'],
    ['omar', "The best items go to charity shops here. The next grade is exported. They're packed into large bales, and they're sold by {{weight|27}}, not by the number of items, so the buyers don't know exactly what they're getting."],
    ['hannah', "And the clothes that are too damaged to wear?"],
    ['omar', "They're shredded. Some of the material is used to make cleaning cloths, but most of it becomes {{insulation|28}} for houses."],
    ['hannah', "So very little is actually made into new clothes?"],
    ['omar', "Less than one per cent. Turning old clothes into new {{fibres|29}} is still very expensive. But there's a new process being tested, which uses {{chemicals|30}} to separate cotton from polyester. If it works, it could change everything."],
    ['hannah', "That would be a good way to end our report."],
    ['narrator', 'That is the end of Part 3. You now have half a minute to check your answers to Part 3.'],
    ['pause', 30, 'Checking time · Part 3'],

    ['focus', 4],
    ['narrator', 'Now turn to Part 4.'],
    ['narrator', 'Part 4. You will hear a lecture about the history of bridges. First, you have some time to look at questions 31 to 40.'],
    ['pause', 45, 'Reading time · Questions 31–40'],
    ['narrator', 'Now listen carefully and answer questions 31 to 40.'],
    ['lecturer', "Good morning. In today's lecture, I'm going to give an overview of how bridge design has developed, from the earliest crossings to the structures being built today."],
    ['lecturer', "The very first bridges were not designed at all. They were simply {{trees|31}} that had fallen across a stream. People soon learned to place stones in rivers, and to tie ropes across valleys, but these crossings didn't last long."],
    ['lecturer', "The first great bridge builders were the Romans. Their key invention was the stone arch, which carries weight down into the ground on each side. And they made a very strong concrete, using a type of volcanic {{ash|32}} that hardened even under water. Some Roman bridges are still in use today, two thousand years later."],
    ['lecturer', "In medieval Europe, bridges became centres of town life. The old London Bridge, for example, had {{shops|33}} and houses built along it, as well as a chapel, and the rents paid for the bridge's repairs."],
    ['lecturer', "The industrial revolution brought new materials. The first bridge made entirely of cast iron was built in seventeen seventy-nine, in Shropshire, in England. Interestingly, the builders didn't really know how to work with iron yet, so they joined the pieces together using methods from {{carpentry|34}}, as if they were working with wood."],
    ['lecturer', "In the nineteenth century, engineers began building suspension bridges, where the road hangs from chains or cables. One of the first major examples was the Menai Bridge in Wales, which opened in eighteen twenty-six, and its chains were made of wrought {{iron|35}}."],
    ['lecturer', "Suspension bridges can cross very long distances, but they also brought new problems. In nineteen forty, the Tacoma Narrows Bridge, in the United States, collapsed only four months after it opened. The cause was the {{wind|36}}, which made the deck twist until it broke apart. After this disaster, it became standard practice to test models of new bridges in wind {{tunnels|37}} before they are built."],
    ['lecturer', "Today, many long bridges are cable-stayed, with cables running directly from tall towers to the road. A famous example is the Millau Viaduct in France, which opened in two thousand and four. Its highest tower is taller than the Eiffel {{Tower|38}}."],
    ['lecturer', "Engineers are also experimenting with new materials. Several small bridges have now been built from recycled {{plastic|39}}, which doesn't rust and needs very little maintenance."],
    ['lecturer', "And finally, many new bridges are fitted with sensors. These measure movement and temperature, and they can detect {{cracks|40}} long before they would be visible to an inspector, which should make bridges safer and cheaper to maintain."],
    ['lecturer', "Next week, we'll look at tunnels."],
    ['narrator', 'That is the end of Part 4. That is the end of the listening test.'],
  ];

  // Questions. kind: gap | mcq | two | match
  const LIMIT_WN = 'ONE WORD AND/OR A NUMBER';
  const Q = {
    1:  { kind: 'gap', ans: ['23', '23rd', 'twenty-third'], limit: 'wn', key: '23rd' },
    2:  { kind: 'gap', ans: ['tent'], limit: 'wn' },
    3:  { kind: 'gap', ans: ['lake'], limit: 'wn' },
    4:  { kind: 'gap', ans: ['32'], limit: 'wn' },
    5:  { kind: 'gap', ans: ['lead', 'leash'], limit: 'wn' },
    6:  { kind: 'gap', ans: ['bread'], limit: 'wn' },
    7:  { kind: 'gap', ans: ['ground'], limit: 'wn' },
    8:  { kind: 'gap', ans: ['archery'], limit: 'wn' },
    9:  { kind: 'gap', ans: ['text', 'sms'], limit: 'wn' },
    10: { kind: 'gap', ans: ['deposit'], limit: 'wn' },
    11: { kind: 'mcq', q: 'The garden was originally created to', opts: { A: 'train gardeners.', B: 'grow medicinal plants.', C: 'display plants from abroad.' }, ans: 'B' },
    12: { kind: 'mcq', q: 'What does Fiona say about the Palm House?', opts: { A: 'It was rebuilt after a storm.', B: 'It is the largest glasshouse in Europe.', C: 'It is closed for repairs.' }, ans: 'A' },
    13: { kind: 'mcq', q: 'The best time to see the rose garden is', opts: { A: 'in May.', B: 'in late June.', C: 'in September.' }, ans: 'B' },
    14: { kind: 'mcq', q: 'The children’s trail', opts: { A: 'must be booked in advance.', B: 'takes about an hour.', C: 'includes a quiz.' }, ans: 'C' },
    15: { kind: 'mcq', q: 'What is new at the garden this year?', opts: { A: 'a sensory garden', B: 'a treetop walkway', C: 'a café' }, ans: 'B' },
    16: { kind: 'mcq', q: 'Members of the garden', opts: { A: 'can bring a guest without paying.', B: 'get a discount in the shop.', C: 'can park for free.' }, ans: 'A' },
    17: { kind: 'two', pair: [17, 18], ans: ['A', 'D'] },
    18: { kind: 'two', pair: [17, 18], ans: ['A', 'D'] },
    19: { kind: 'two', pair: [19, 20], ans: ['C', 'E'] },
    20: { kind: 'two', pair: [19, 20], ans: ['C', 'E'] },
    21: { kind: 'two', pair: [21, 22], ans: ['B', 'D'] },
    22: { kind: 'two', pair: [21, 22], ans: ['B', 'D'] },
    23: { kind: 'two', pair: [23, 24], ans: ['A', 'C'] },
    24: { kind: 'two', pair: [23, 24], ans: ['A', 'C'] },
    25: { kind: 'gap', ans: ['warehouse'], limit: 'w' },
    26: { kind: 'gap', ans: ['hand'], limit: 'w' },
    27: { kind: 'gap', ans: ['weight'], limit: 'w' },
    28: { kind: 'gap', ans: ['insulation'], limit: 'w' },
    29: { kind: 'gap', ans: ['fibres', 'fibers'], limit: 'w' },
    30: { kind: 'gap', ans: ['chemicals'], limit: 'w' },
    31: { kind: 'gap', ans: ['trees', 'tree'], limit: 'w' },
    32: { kind: 'gap', ans: ['ash'], limit: 'w' },
    33: { kind: 'gap', ans: ['shops'], limit: 'w' },
    34: { kind: 'gap', ans: ['carpentry'], limit: 'w' },
    35: { kind: 'gap', ans: ['iron'], limit: 'w' },
    36: { kind: 'gap', ans: ['wind'], limit: 'w' },
    37: { kind: 'gap', ans: ['tunnels'], limit: 'w' },
    38: { kind: 'gap', ans: ['tower'], limit: 'w', key: 'Tower' },
    39: { kind: 'gap', ans: ['plastic'], limit: 'w' },
    40: { kind: 'gap', ans: ['cracks'], limit: 'w' },
  };
  const RULES = { A: 'feed the birds', B: 'have a picnic', C: 'bring a dog', D: 'use a drone', E: 'take photographs' };
  const LILY = { A: 'It first flowered in Britain at this garden.', B: 'It needs very cold water.', C: 'Its leaves can hold the weight of a child.', D: 'It is flowering at the moment.', E: 'Its flowers open in the dark.' };
  const PROBLEMS = { A: 'Charity shops refuse many donations.', B: 'Most donated clothes are sent abroad.', C: 'People do not know where to take old clothes.', D: 'Many fabrics are difficult to separate.', E: 'Collection banks are often damaged.' };
  const METHODS = { A: 'interviews', B: 'observation', C: 'an online questionnaire', D: 'analysis of sales data', E: 'focus groups' };

  const gap = n => `<span class="gap" data-q="${n}"><span class="n">${n}</span><input type="text" id="q${n}" data-q="${n}" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Question ${n}"></span>`;
  const mcq = n => { const q = Q[n]; return `<div class="mcq" data-q="${n}" role="radiogroup" aria-labelledby="ql${n}"><div class="q"><span class="qn">${n}</span><span id="ql${n}">${q.q}</span></div>${Object.entries(q.opts).map(([k, v]) => `<label data-opt="${k}"><input type="radio" name="q${n}" value="${k}" data-q="${n}"><b>${k}</b><span>${v}</span></label>`).join('')}</div>`; };
  const twoBlock = (first, question, opts) => `<div class="mcq" data-q="${first}" data-two="1"><div class="q"><span class="qn">${first}–${first + 1}</span><span>${question}</span></div>${Object.entries(opts).map(([k, v]) => `<label data-opt="${k}"><input type="checkbox" value="${k}" data-two="1"><b>${k}</b><span>${v}</span></label>`).join('')}</div>`;
  const two = (first, question, opts) => `<div class="qblock"><h3>Questions ${first} and ${first + 1}</h3><p class="instr">Choose <b>TWO</b> letters, <b>A–E</b>.</p>${twoBlock(first, question, opts)}</div>`;
  const arrow = '<span class="arrow" aria-hidden="true">↓</span>';

  const PAPER = `
  <section class="part" id="part-1" data-part="1">
    <div class="part-head"><h2>Part 1</h2><span class="label">Questions 1–10</span></div>
    <div class="qblock">
      <h3>Questions 1–10</h3>
      <p class="instr">Complete the notes below. Write <b>${LIMIT_WN}</b> for each answer.</p>
      <div class="notes">
        <h4>Pinewood Campsite · Booking</h4>
        <ul>
          <li>Number of people: <span class="example">Example: <u>4</u></span></li>
          <li>Arrival: Friday ${gap(1)} August, for one week</li>
          <li>Type of pitch: for a ${gap(2)}</li>
          <li>Location: near the ${gap(3)}</li>
          <li>Cost: £ ${gap(4)} per night (no electricity)</li>
          <li>Dog must be kept on a ${gap(5)}</li>
        </ul>
        <span class="h">Facilities and rules</span>
        <ul>
          <li>Shop sells fresh ${gap(6)} every morning.</li>
          <li>No campfires. Barbecues must be raised off the ${gap(7)}.</li>
          <li>Kids’ club: ${gap(8)} for older children</li>
          <li>Gate code sent by ${gap(9)}</li>
          <li>Pay a ${gap(10)} of £50 now.</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="part" id="part-2" data-part="2" hidden>
    <div class="part-head"><h2>Part 2</h2><span class="label">Questions 11–20</span></div>
    <div class="qblock">
      <h3>Questions 11–16</h3>
      <p class="instr">Choose the correct letter, <b>A, B or C</b>.</p>
      <p class="instr"><b>Kingsford Botanical Garden</b></p>
      ${[11, 12, 13, 14, 15, 16].map(mcq).join('')}
    </div>
    ${two(17, 'Which <b>TWO</b> things are visitors asked not to do?', RULES)}
    ${two(19, 'Which <b>TWO</b> facts does Fiona give about the giant water lily?', LILY)}
  </section>

  <section class="part" id="part-3" data-part="3" hidden>
    <div class="part-head"><h2>Part 3</h2><span class="label">Questions 21–30</span></div>
    ${two(21, 'Which <b>TWO</b> problems with clothing recycling do the students mention?', PROBLEMS)}
    ${two(23, 'Which <b>TWO</b> methods will the students use to collect data?', METHODS)}
    <div class="qblock">
      <h3>Questions 25–30</h3>
      <p class="instr">Complete the flow chart below. Write <b>ONE WORD ONLY</b> for each answer.</p>
      <div class="flow">
        <h4>What happens to donated clothes</h4>
        <div class="step">Clothes are taken from collection banks to a ${gap(25)}.</div>${arrow}
        <div class="step">They are sorted by ${gap(26)} into different grades.</div>${arrow}
        <div class="step">The best items are sold in local charity shops.</div>${arrow}
        <div class="step">The next grade is exported in bales and sold by ${gap(27)}.</div>${arrow}
        <div class="step">Damaged clothes are shredded; most are made into ${gap(28)} for houses.</div>${arrow}
        <div class="step">Under 1% become new ${gap(29)}. A new process uses ${gap(30)} to separate cotton and polyester.</div>
      </div>
    </div>
  </section>

  <section class="part" id="part-4" data-part="4" hidden>
    <div class="part-head"><h2>Part 4</h2><span class="label">Questions 31–40</span></div>
    <div class="qblock">
      <h3>Questions 31–40</h3>
      <p class="instr">Complete the notes below. Write <b>ONE WORD ONLY</b> for each answer.</p>
      <div class="notes">
        <h4>The history of bridges</h4>
        <span class="h">Early bridges</span>
        <ul>
          <li>The first bridges were fallen ${gap(31)}.</li>
          <li>Romans: stone arches and concrete made with volcanic ${gap(32)}.</li>
          <li>Medieval London Bridge had ${gap(33)} and houses on it.</li>
        </ul>
        <span class="h">Iron and suspension bridges</span>
        <ul>
          <li>1779: the first iron bridge was joined using methods from ${gap(34)}.</li>
          <li>1826: Menai Bridge had chains made of wrought ${gap(35)}.</li>
          <li>1940: Tacoma Narrows Bridge collapsed because of the ${gap(36)}.</li>
          <li>Since then, models are tested in wind ${gap(37)}.</li>
        </ul>
        <span class="h">Modern bridges</span>
        <ul>
          <li>Millau Viaduct: its highest tower is taller than the Eiffel ${gap(38)}.</li>
          <li>Some small bridges are now made of recycled ${gap(39)}.</li>
          <li>Sensors can find ${gap(40)} before inspectors can see them.</li>
        </ul>
      </div>
    </div>
  </section>`;

  // Part changes and reading/checking pauses in the recording (seconds) — filled in by tools/make_listening_audio.py
  const TIMELINE = [{"t":1.0,"focus":1},{"t":34.87,"pause":30,"label":"Reading time · Questions 1–5"},{"t":64.87,"speech":1,"part":1},{"t":208.18,"pause":30,"label":"Reading time · Questions 6–10"},{"t":238.18,"speech":1,"part":1},{"t":323.89,"pause":30,"label":"Checking time · Part 1"},{"t":353.89,"focus":2},{"t":353.89,"speech":1,"part":2},{"t":366.43,"pause":30,"label":"Reading time · Questions 11–16"},{"t":396.43,"speech":1,"part":2},{"t":495.05,"pause":30,"label":"Reading time · Questions 17–20"},{"t":525.05,"speech":1,"part":2},{"t":579.86,"pause":30,"label":"Checking time · Part 2"},{"t":609.86,"focus":3},{"t":609.86,"speech":1,"part":3},{"t":625.36,"pause":30,"label":"Reading time · Questions 21–24"},{"t":655.36,"speech":1,"part":3},{"t":734.19,"pause":30,"label":"Reading time · Questions 25–30"},{"t":764.19,"speech":1,"part":3},{"t":840.08,"pause":30,"label":"Checking time · Part 3"},{"t":870.08,"focus":4},{"t":870.08,"speech":1,"part":4},{"t":881.7,"pause":45,"label":"Reading time · Questions 31–40"},{"t":926.7,"speech":1,"part":4}];
  const partNames = { 1: 'Part 1 · Booking a campsite', 2: 'Part 2 · Kingsford Botanical Garden', 3: 'Part 3 · A study of clothing recycling', 4: 'Part 4 · The history of bridges' };
  window.LISTENING_TEST = { num: 9, audio: 'audio/listening-test9.mp3', minutes: 18, mb: 9, roles: ROLES, script: SCRIPT, Q, paper: PAPER, timeline: TIMELINE, partNames };
})();
