// IELTS Listening · Premium Test 2 — content only. The exam engine is assets/listening-exam.js.
// Premium Exam (band 7–9 level): kept for the mock test, not listed with the practice tests.
// `why` explains each answer and the distractors; limit 3 = NO MORE THAN THREE WORDS (AND/OR A NUMBER).
(() => {
  'use strict';
  // Speakers: label for the transcript, voice for tools/make_listening_audio.py
  const ROLES = {
    narrator: { label: 'Narrator', voice: 'bm_george', speed: 0.94, lang: 'en-gb' },
    leo:      { label: 'Leo', voice: 'bm_daniel', speed: 1.03, lang: 'en-gb' },
    ingrid:   { label: 'Ingrid', voice: 'bf_alice', speed: 1.03, lang: 'en-gb' },
    officer:  { label: 'Transport officer', voice: 'af_sarah', speed: 1.02, lang: 'en-us' },
    shaw:     { label: 'Dr Shaw', voice: 'bf_lily', speed: 1.0, lang: 'en-gb' },
    ana:      { label: 'Ana', voice: 'af_heart', speed: 1.03, lang: 'en-us' },
    kofi:     { label: 'Kofi', voice: 'am_adam', speed: 1.03, lang: 'en-us' },
    lecturer: { label: 'Lecturer', voice: 'bm_fable', speed: 1.0, lang: 'en-gb' },
  };

  // Script: [role, text] lines, or ['pause', seconds, label], or ['focus', part]
  // {{text|n}} marks where the answer to question n is heard.
  const SCRIPT = [
    ['focus', 1],
    ['narrator', 'IELTS Listening. Premium Test 2.'],
    ['narrator', 'In the test, you will hear a number of different recordings and you will have to answer questions on what you hear. There will be time for you to read the instructions and questions, and you will have a chance to check your work. All the recordings will be played once only. The test is in four parts.'],
    ['narrator', 'Now turn to Part 1.'],
    ['narrator', 'Part 1. You will hear a woman phoning a coworking space, a shared office where people can rent a desk. First, you have some time to look at questions 1 to 4.'],
    ['pause', 30, 'Reading time · Questions 1–4'],
    ['narrator', 'You will see that there is an example that has been done for you. On this occasion only, the conversation relating to this will be played first.'],
    ['leo', "Good morning, The Foundry, Leo speaking."],
    ['ingrid', "Hi, Leo. I'm a freelance translator, and I'm thinking about renting a desk with you. Could you tell me a bit about it?"],
    ['narrator', "The woman works as a translator, so 'translator' has been written in the example. Now we shall begin. You should answer the questions as you listen, because you will not hear the recording a second time. Listen carefully and answer questions 1 to 4."],
    ['leo', "Good morning, The Foundry, Leo speaking."],
    ['ingrid', "Hi, Leo. I'm a freelance translator, and I'm thinking about renting a desk with you. Could you tell me a bit about it?"],
    ['leo', "Of course. We have three kinds of membership. There's a fixed desk, which is yours all the time, a flexible desk, where you can come in up to three days a week and sit anywhere, and a virtual office, which just gives you an address for your post."],
    ['ingrid', "I was hoping for a fixed desk, but I saw the price on your website, and it's more than I can justify at the moment. And I definitely want to work there, not just use the address. So {{I'll go for the flexible option|1}}."],
    ['leo', "That's our most popular one. Can I ask what made you look for a space like ours?"],
    ['ingrid', "Well, my flat's big enough, and I meet clients in cafés, which works fine. To be honest, {{after two years on my own at home, I'm starting to go a bit mad|2}}. I just need other people around."],
    ['leo', "You're not the only one. What's most important to you in terms of facilities?"],
    ['ingrid', "The internet at home is fast, so that's not an issue, and I hardly ever print anything. But I spend a lot of time on video calls with clients, so {{somewhere private to take calls is essential|3}}."],
    ['leo', "We've got six soundproof phone booths, so that's no problem. When would you like to start?"],
    ['ingrid', "I was going to say the first of next month. But your website mentions a trial day."],
    ['leo', "Yes, it's free. Most people come in for a day first and see how they like it."],
    ['ingrid', "Then {{I'll do the trial day first and decide after that|4}}."],
    ['narrator', 'Before you hear the rest of the conversation, you have some time to look at questions 5 to 10.'],
    ['pause', 30, 'Reading time · Questions 5–10'],
    ['narrator', 'Now listen and answer questions 5 to 10.'],
    ['ingrid', "So how much is the flexible desk?"],
    ['leo', "The full price is one hundred and sixty pounds a month, but we've just reduced it to {{one hundred and forty|5}} for anyone who signs up for six months or more."],
    ['ingrid', "I'd sign up for six months. What does that include?"],
    ['leo', "Tea and coffee, of course, and you can book the meeting rooms for up to {{four hours|6}} a month. After that, it's ten pounds an hour."],
    ['ingrid', "And is there anywhere to leave my things? I don't want to carry my laptop home every day."],
    ['leo', "You can rent a locker for {{twelve|7}} pounds a month. Fixed-desk members get one free, but flexible members pay."],
    ['ingrid', "What are the opening hours?"],
    ['leo', "The reception is staffed from eight till six, but members can get in with their key card from seven in the morning until {{ten at night|8}}, seven days a week."],
    ['ingrid', "Great. What do I need to bring on the trial day?"],
    ['leo', "Just {{photo ID|9}}, like a passport or driving licence, so we can register you in the building. Everything else is provided."],
    ['ingrid', "And can I park nearby?"],
    ['leo', "There's no parking at the building itself, I'm afraid, and the street parking is limited to two hours. Most people use the {{multi-storey car park|10}} on Dock Street. It's about three minutes' walk."],
    ['ingrid', "Perfect. I'll book the trial day for Thursday, then."],
    ['narrator', 'That is the end of Part 1. You now have half a minute to check your answers to Part 1.'],
    ['pause', 30, 'Checking time · Part 1'],

    ['focus', 2],
    ['narrator', 'Now turn to Part 2.'],
    ['narrator', 'Part 2. You will hear a transport officer giving a talk to a community group about the city’s new cable car. First, you have some time to look at questions 11 to 16.'],
    ['pause', 30, 'Reading time · Questions 11–16'],
    ['narrator', 'Now listen carefully and answer questions 11 to 16.'],
    ['officer', "Thanks for inviting me. As most of you know, the Riverford cable car has now been running for six months, so I'd like to tell you how it works and how it's been received."],
    ['officer', "The line is {{one point two|11}} kilometres long. When the project was first proposed, the plan was to link the station with the shopping district. But in the end, it was decided that the greatest need was to connect the station with the {{university campus|12}} on the hill, which until then could only be reached by a long bus journey around the valley."],
    ['officer', "There are thirty cabins. Each one has eight seats, but there's room for two more people standing, so each cabin can carry up to {{ten|13}} passengers, including people with bicycles or wheelchairs."],
    ['officer', "The journey takes about {{four|14}} minutes, compared with twenty-five minutes on the bus, and cabins leave every thirty seconds, so there's no timetable to worry about."],
    ['officer', "The system is designed to keep running in rain, snow and even thunderstorms, but for safety reasons it does close in {{high winds|15}}, which has happened on only three days so far."],
    ['officer', "Fares are the same as on the buses. And anyone who has a {{city travel card|16}} can travel free, which covers most students and many commuters."],
    ['narrator', 'Before you hear the rest of the talk, you have some time to look at questions 17 to 20.'],
    ['pause', 30, 'Reading time · Questions 17–20'],
    ['narrator', 'Now listen and answer questions 17 to 20.'],
    ['officer', "So, what difference has it made? Some people expected it to become a tourist attraction, but in fact the vast majority of passengers are regular commuters. And it isn't cheaper than the bus, as I said. The main benefits are elsewhere. First, {{traffic on the old bridge has fallen by about a fifth|17}}, because far fewer students drive to the campus. Second, {{the whole system runs on electricity from renewable sources|18}}, so it produces almost no emissions."],
    ['officer', "There have been concerns, of course. Many residents worried about noise, but the cabins are almost silent, and we've had very few complaints. The safety record has been excellent. The issues people have raised are, first, that {{the cabins pass directly over some back gardens|19}}, and people feel they're being watched. We're fitting frosted glass in the lower part of the windows to deal with that. And second, {{some people feel the towers have spoiled the view of the old town|20}} from the river. That's harder to solve, but we're planting trees around the base of the towers."],
    ['narrator', 'That is the end of Part 2. You now have half a minute to check your answers to Part 2.'],
    ['pause', 30, 'Checking time · Part 2'],

    ['focus', 3],
    ['narrator', 'Now turn to Part 3.'],
    ['narrator', 'Part 3. You will hear two marketing students, Ana and Kofi, talking to their tutor, Dr Shaw, about a project on a company that makes plant-based food. First, you have some time to look at questions 21 to 24.'],
    ['pause', 30, 'Reading time · Questions 21–24'],
    ['narrator', 'Now listen carefully and answer questions 21 to 24.'],
    ['shaw', "So, you've chosen Greenleaf Kitchen for your case study. Why that company in particular?"],
    ['ana', "It's not the biggest, and it isn't even local, it's based in the north. But {{my cousin works in their marketing department|21}}, so we knew we'd be able to get interviews and real sales figures."],
    ['shaw', "That's a real advantage. What's the main challenge the company faces?"],
    ['kofi', "We expected it to be price, because their products are expensive. And some people say plant-based food doesn't taste good. But the company's view, and the figures support it, is that {{the biggest threat is the supermarkets' own brands|22}}, which are copying their products and selling them for less."],
    ['shaw', "And who's buying their products?"],
    ['ana', "We assumed it would be mainly vegetarians and students. But in our survey, {{most buyers were people who still eat meat but are trying to eat less of it|23}}."],
    ['shaw', "Interesting. I've looked at your questionnaire. The sample size is fine, and the length is reasonable. My concern is that {{some of the questions push people towards a particular answer|24}}. For example, 'How much do you enjoy our delicious products?' You can't use the results from questions like that."],
    ['kofi', "That's fair. We'll rewrite them."],
    ['narrator', 'Before you hear the rest of the discussion, you have some time to look at questions 25 to 30.'],
    ['pause', 30, 'Reading time · Questions 25–30'],
    ['narrator', 'Now listen and answer questions 25 to 30.'],
    ['shaw', "Now, your recommendations. Talk me through them."],
    ['ana', "First, the packaging. At the moment, it's all about health and the environment. But our survey showed that people choose food mainly for flavour, so we'd recommend that it should emphasise {{taste|25}} instead."],
    ['kofi', "Second, people are reluctant to pay for something they've never tried. So we suggest the company runs {{tastings|26}} in stores at weekends."],
    ['shaw', "Sensible. What about new markets?"],
    ['ana', "We think there's a big opportunity in {{workplace canteens|27}}. Large employers are under pressure to offer more sustainable food, and it would get the products in front of a lot of people who'd never buy them in a shop."],
    ['kofi', "And for marketing, we'd suggest short {{recipe videos|28}} on social media, showing how to use the products in everyday meals, rather than more adverts."],
    ['shaw', "Anything else?"],
    ['ana', "Yes. They make forty different products, and some sell very badly. We think they should cut the {{product range|29}} to about twenty-five and focus on the best sellers."],
    ['shaw', "Good. Remember the presentation is on the {{fourteenth of March|30}}, not the twenty-first as it says on the old timetable."],
    ['narrator', 'That is the end of Part 3. You now have half a minute to check your answers to Part 3.'],
    ['pause', 30, 'Checking time · Part 3'],

    ['focus', 4],
    ['narrator', 'Now turn to Part 4.'],
    ['narrator', 'Part 4. You will hear a lecture about avalanches. First, you have some time to look at questions 31 to 40.'],
    ['pause', 50, 'Reading time · Questions 31–40'],
    ['narrator', 'Now listen carefully and answer questions 31 to 40.'],
    ['lecturer', "Good morning. Today's topic is avalanches, which kill around a hundred and fifty people a year worldwide, most of them in Europe and North America."],
    ['lecturer', "Let's begin with a fact that surprises many people. We tend to imagine avalanches as natural disasters that strike without warning. In reality, {{in about nine out of ten fatal avalanches, the victim or someone in their group set it off|31}}. Most victims are skiers, snowboarders and climbers, usually away from marked runs."],
    ['lecturer', "Avalanches can happen on any slope with enough snow, but {{the most dangerous slopes are those of between thirty and forty-five degrees|32}}. Below that, snow rarely slides; above it, snow tends to fall off in small amounts before it can build up."],
    ['lecturer', "There are several types of avalanche. Loose snow avalanches start at a single point and spread out as they fall, and they're usually small. Far more deadly are {{slab avalanches|33}}, in which a whole sheet of snow, sometimes hundreds of metres wide, breaks away at once."],
    ['lecturer', "When is the risk greatest? Above all, in the {{twenty-four hours|34}} after heavy snowfall, before the new snow has had time to settle and bond with the layers beneath. Rapid warming and strong winds also increase the danger."],
    ['lecturer', "If someone is buried, speed is everything. Around nine out of ten buried victims survive if they're dug out within {{fifteen minutes|35}}, but after that, the chances fall dramatically. That's why everyone in a group off the marked runs should carry three items: a transceiver, which sends out a signal so that others can locate them, a shovel, and a {{probe|36}}, a long folding pole that's pushed into the snow to find the exact position of a victim."],
    ['lecturer', "Now let's look at the diagram of a slab avalanche. At the top of the snowpack, there's usually a layer of recent snow. Beneath it is the slab itself, which is often made of {{wind-packed snow|37}}, snow that has been blown by the wind and pressed into a hard, cohesive layer. Under the slab is the key to the whole process: a weak layer. A common type is made of {{surface hoar|38}}, feathery ice crystals that form on the surface on cold, clear nights and are later buried by new snow. They're very fragile, rather like a layer of tiny glass feathers. The slab rests on this weak layer, and beneath that is the bed surface, often an old {{ice crust|39}}, which provides a smooth surface for the slab to slide on."],
    ['lecturer', "When a skier crosses the slope, their weight can collapse the weak layer. A crack then runs across the slope, and the slab breaks away along a line near the top called the crown, where the snow is under the greatest {{tension|40}}. The whole slab then slides down the bed surface."],
    ['lecturer', "Next week, we'll look at how avalanche forecasters assess the risk each day."],
    ['narrator', 'That is the end of Part 4. That is the end of the listening test.'],
  ];

  // Questions. kind: gap | mcq | two | match
  const LIMIT_3N = 'NO MORE THAN THREE WORDS AND/OR A NUMBER';
  const LIMIT_3 = 'NO MORE THAN THREE WORDS';
  const Q = {
    1:  { kind: 'mcq', q: 'Which type of membership does Ingrid choose?', opts: { A: 'a fixed desk', B: 'a flexible desk', C: 'a virtual office' }, ans: 'B', why: 'She wanted a fixed desk (A) but it is too expensive, and she wants to work there, not just use the address (C).' },
    2:  { kind: 'mcq', q: 'Why does Ingrid want to work in a coworking space?', opts: { A: 'Her flat is too small.', B: 'She needs somewhere to meet clients.', C: 'She feels isolated working alone.' }, ans: 'C', why: 'Her flat is “big enough” (A) and she meets clients in cafés (B); she is “going a bit mad” on her own.' },
    3:  { kind: 'mcq', q: 'Which facility is most important to Ingrid?', opts: { A: 'fast internet', B: 'a private place for calls', C: 'a printer' }, ans: 'B', why: 'Her home internet is fast (A) and she hardly ever prints (C); she needs “somewhere private to take calls”.' },
    4:  { kind: 'mcq', q: 'When will Ingrid start?', opts: { A: 'next Monday', B: 'on the first of next month', C: 'after a trial day' }, ans: 'C', why: 'She was going to say the first of next month (B) but changes her mind: “I’ll do the trial day first”.' },
    5:  { kind: 'gap', ans: ['140', '£140'], limit: 3, key: '140', why: 'The full price is £160 (distractor); it is reduced to £140 for six months or more, and she will sign up for six months.' },
    6:  { kind: 'gap', ans: ['four hours', '4 hours'], limit: 3, key: '4 hours', why: 'Meeting rooms can be booked for up to four hours a month; after that it costs £10 an hour.' },
    7:  { kind: 'gap', ans: ['12', 'twelve', '£12'], limit: 3, key: '12', why: 'Lockers cost £12 a month for flexible members; only fixed-desk members get one free.' },
    8:  { kind: 'gap', ans: ['10 pm', '10pm', 'ten at night', '10 at night', '10.00 pm', '22.00', 'ten pm'], limit: 3, key: '10 pm', why: 'Reception closes at six (distractor), but members can get in until ten at night.' },
    9:  { kind: 'gap', ans: ['photo id', 'photo identification', 'id'], limit: 3, key: 'photo ID', why: 'Photo ID such as a passport or driving licence, to register in the building.' },
    10: { kind: 'gap', ans: ['multi-storey car park', 'multi-storey', 'multistorey car park'], limit: 3, key: 'multi-storey car park', why: 'There is no parking at the building and street parking is limited to two hours; people use the multi-storey car park.' },
    11: { kind: 'gap', ans: ['1.2', '1.2 km', '1.2 kilometres'], limit: 3, key: '1.2', why: '“One point two kilometres long.”' },
    12: { kind: 'gap', ans: ['university campus', 'campus', 'university'], limit: 3, why: 'The first plan was the shopping district (distractor); the line links the station with the university campus on the hill.' },
    13: { kind: 'gap', ans: ['10', 'ten'], limit: 3, why: 'Eight seats (distractor) plus room for two standing: up to ten passengers.' },
    14: { kind: 'gap', ans: ['4', 'four', '4 minutes', 'four minutes'], limit: 3, key: '4', why: 'About four minutes, compared with 25 minutes by bus.' },
    15: { kind: 'gap', ans: ['high winds', 'winds', 'high wind'], limit: 3, key: 'high winds', why: 'It runs in rain, snow and thunderstorms, but closes in high winds.' },
    16: { kind: 'gap', ans: ['city travel card', 'travel card'], limit: 3, why: 'Fares match the buses; holders of a city travel card travel free.' },
    17: { kind: 'two', pair: [17, 18], ans: ['A', 'D'], why: 'Traffic on the old bridge fell by a fifth (A) and it runs on renewable electricity (D). Most passengers are commuters, not tourists (B), and it is not cheaper than the bus (C). Jobs (E) are not mentioned.' },
    18: { kind: 'two', pair: [17, 18], ans: ['A', 'D'], why: 'See question 17.' },
    19: { kind: 'two', pair: [19, 20], ans: ['B', 'D'], why: 'Cabins pass over back gardens (B: privacy) and the towers spoil the view of the old town (D). Noise (A) brought very few complaints, ticket prices (C) were not raised, and safety (E) has been excellent.' },
    20: { kind: 'two', pair: [19, 20], ans: ['B', 'D'], why: 'See question 19.' },
    21: { kind: 'mcq', q: 'Why did the students choose Greenleaf Kitchen?', opts: { A: 'It is a local company.', B: 'It is the largest company of its kind.', C: 'They had a personal contact there.' }, ans: 'C', why: 'It is “not the biggest” (B) and “isn’t even local” (A); Ana’s cousin works in its marketing department.' },
    22: { kind: 'mcq', q: 'What is the main problem facing the company?', opts: { A: 'high prices', B: 'doubts about taste', C: 'competition from supermarket brands' }, ans: 'C', why: 'The students expected price (A) or taste (B), but the biggest threat is the supermarkets’ own brands.' },
    23: { kind: 'mcq', q: 'The survey found that most buyers of the products', opts: { A: 'were vegetarians.', B: 'were trying to eat less meat.', C: 'were students.' }, ans: 'B', why: 'The students assumed vegetarians and students (A, C); most buyers still eat meat but want to eat less.' },
    24: { kind: 'mcq', q: 'What does Dr Shaw criticise about the questionnaire?', opts: { A: 'The sample was too small.', B: 'Some questions were leading.', C: 'It was too long.' }, ans: 'B', why: 'The sample size and length are fine (A, C); some questions “push people towards a particular answer”.' },
    25: { kind: 'gap', ans: ['taste', 'flavour'], limit: 3, key: 'taste', why: 'Packaging currently stresses health and the environment; it should emphasise taste.' },
    26: { kind: 'gap', ans: ['tastings'], limit: 3, why: 'People will not pay for something untried, so: tastings in stores at weekends.' },
    27: { kind: 'gap', ans: ['workplace canteens', 'canteens'], limit: 3, key: 'workplace canteens', why: 'A new market: large employers are under pressure to offer sustainable food.' },
    28: { kind: 'gap', ans: ['recipe videos'], limit: 3, why: 'Short recipe videos on social media rather than more adverts.' },
    29: { kind: 'gap', ans: ['product range', 'range'], limit: 3, key: 'product range', why: 'Cut the product range from forty products to about twenty-five.' },
    30: { kind: 'gap', ans: ['14 march', '14th march', 'march 14', 'march 14th', 'fourteenth of march', '14th of march', '14 mar'], limit: 3, key: '14 March', why: 'The old timetable says the 21st (distractor); the presentation is on 14 March.' },
    31: { kind: 'mcq', q: 'According to the lecturer, most fatal avalanches', opts: { A: 'happen without any warning.', B: 'are triggered by the victims or their group.', C: 'occur on marked ski runs.' }, ans: 'B', why: 'We “tend to imagine” avalanches strike without warning (A); in nine out of ten, the victim or their group set it off, usually away from marked runs (C).' },
    32: { kind: 'mcq', q: 'The most dangerous slopes have an angle of', opts: { A: 'less than 25 degrees.', B: 'between 30 and 45 degrees.', C: 'more than 60 degrees.' }, ans: 'B', why: 'Below that, snow rarely slides; above it, snow falls off before it can build up.' },
    33: { kind: 'gap', ans: ['slab avalanches', 'slab', 'slab avalanche'], limit: 3, key: 'slab avalanches', why: 'Loose snow avalanches are usually small; slab avalanches are far more deadly.' },
    34: { kind: 'gap', ans: ['24 hours', 'twenty-four hours', '24'], limit: 3, key: '24 hours', why: 'The risk is greatest in the 24 hours after heavy snowfall.' },
    35: { kind: 'gap', ans: ['15 minutes', 'fifteen minutes', '15'], limit: 3, key: '15 minutes', why: 'About nine in ten survive if dug out within fifteen minutes.' },
    36: { kind: 'gap', ans: ['probe', 'a probe'], limit: 3, key: 'probe', why: 'The three items: transceiver, shovel and probe.' },
    37: { kind: 'gap', ans: ['wind-packed snow', 'wind packed snow'], limit: 3, key: 'wind-packed snow', why: 'The slab is often wind-packed snow; recent snow is the layer above it.' },
    38: { kind: 'gap', ans: ['surface hoar'], limit: 3, why: 'A common weak layer: surface hoar, feathery ice crystals.' },
    39: { kind: 'gap', ans: ['ice crust', 'an ice crust', 'old ice crust'], limit: 3, key: 'ice crust', why: 'The bed surface is often an old ice crust.' },
    40: { kind: 'gap', ans: ['tension'], limit: 3, why: 'The crown is where the snow is under the greatest tension.' },
  };

  const gap = n => `<span class="gap" data-q="${n}"><span class="n">${n}</span><input type="text" id="q${n}" data-q="${n}" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Question ${n}"></span>`;
  const mcq = n => { const q = Q[n]; return `<div class="mcq" data-q="${n}" role="radiogroup" aria-labelledby="ql${n}"><div class="q"><span class="qn">${n}</span><span id="ql${n}">${q.q}</span></div>${Object.entries(q.opts).map(([k, v]) => `<label data-opt="${k}"><input type="radio" name="q${n}" value="${k}" data-q="${n}"><b>${k}</b><span>${v}</span></label>`).join('')}</div>`; };
  const sel = (n, letters) => `<select id="q${n}" data-q="${n}" aria-label="Question ${n}"><option value="">–</option>${letters.map(l => `<option>${l}</option>`).join('')}</select>`;
  const matchRows = (nums, opts) => nums.map(n => `<div class="match-row" data-q="${n}"><span class="qn">${n}</span><span class="who">${Q[n].label}</span>${sel(n, Object.keys(opts))}</div>`).join('');
  const twoBlock = (first, question, opts) => `<div class="mcq" data-q="${first}" data-two="1"><div class="q"><span class="qn">${first}–${first + 1}</span><span>${question}</span></div>${Object.entries(opts).map(([k, v]) => `<label data-opt="${k}"><input type="checkbox" value="${k}" data-two="1"><b>${k}</b><span>${v}</span></label>`).join('')}</div>`;

  const two = (first, question, opts) => `<div class="qblock"><h3>Questions ${first} and ${first + 1}</h3><p class="instr">Choose <b>TWO</b> letters, <b>A–E</b>.</p>${twoBlock(first, question, opts)}</div>`;
  // Diagram of a slab avalanche for questions 37–40: layers of the snowpack, top to bottom
  const layer = (name, body, style) => `<div style="border:1.5px solid currentColor;border-top:none;padding:8px 12px;${style || ''}"><b>${name}</b> ${body}</div>`;
  const DIAGRAM = `<div style="max-width:560px;margin:6px 0 10px">
      <div style="border-top:1.5px solid currentColor"></div>
      ${layer('Recent snow', '')}
      ${layer('The slab:', `often ${gap(37)}`, 'border-left-width:4px;border-right-width:4px')}
      ${layer('Weak layer:', `e.g. ${gap(38)} (feathery crystals)`, 'border-style:dashed')}
      ${layer('Bed surface:', `often an old ${gap(39)}`)}
      <p class="muted" style="margin:8px 0 0">The slab breaks away along the <b>crown</b>, near the top of the slope, where the snow is under the most ${gap(40)}.</p>
    </div>`;

  const PAPER = `
  <section class="part" id="part-1" data-part="1">
    <div class="part-head"><h2>Part 1</h2><span class="label">Questions 1–10</span></div>
    <div class="qblock">
      <h3>Questions 1–4</h3>
      <p class="instr">Choose the correct letter, <b>A, B or C</b>.</p>
      <p class="muted"><i>Example: Ingrid works as a <u>translator</u>.</i></p>
      ${[1, 2, 3, 4].map(mcq).join('')}
    </div>
    <div class="qblock">
      <h3>Questions 5–10</h3>
      <p class="instr">Complete the notes below. Write <b>${LIMIT_3N}</b> for each answer.</p>
      <div class="notes">
        <h4>The Foundry · Flexible desk</h4>
        <ul>
          <li>Price: £ ${gap(5)} a month (six-month membership)</li>
          <li>Meeting rooms: free for up to ${gap(6)} a month</li>
          <li>Locker: £ ${gap(7)} a month</li>
          <li>Members’ access: 7 am to ${gap(8)}</li>
          <li>Bring on trial day: ${gap(9)}</li>
          <li>Parking: use the ${gap(10)} on Dock Street</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="part" id="part-2" data-part="2" hidden>
    <div class="part-head"><h2>Part 2</h2><span class="label">Questions 11–20</span></div>
    <div class="qblock">
      <h3>Questions 11–16</h3>
      <p class="instr">Complete the notes below. Write <b>${LIMIT_3N}</b> for each answer.</p>
      <div class="notes">
        <h4>The Riverford cable car</h4>
        <ul>
          <li>Length of line: ${gap(11)} km</li>
          <li>Links the station with the ${gap(12)}</li>
          <li>Each cabin carries up to ${gap(13)} passengers.</li>
          <li>Journey time: about ${gap(14)} minutes</li>
          <li>Closes in ${gap(15)}</li>
          <li>Free travel with a ${gap(16)}</li>
        </ul>
      </div>
    </div>
    ${two(17, 'Which <b>TWO</b> benefits of the cable car does the speaker mention?', { A: 'less traffic on a bridge', B: 'more tourists in the city', C: 'cheaper fares than the bus', D: 'the use of renewable energy', E: 'new jobs for local people' })}
    ${two(19, 'Which <b>TWO</b> concerns have residents raised?', { A: 'noise from the cabins', B: 'loss of privacy', C: 'the cost of tickets', D: 'damage to a view', E: 'safety' })}
  </section>

  <section class="part" id="part-3" data-part="3" hidden>
    <div class="part-head"><h2>Part 3</h2><span class="label">Questions 21–30</span></div>
    <div class="qblock">
      <h3>Questions 21–24</h3>
      <p class="instr">Choose the correct letter, <b>A, B or C</b>.</p>
      ${[21, 22, 23, 24].map(mcq).join('')}
    </div>
    <div class="qblock">
      <h3>Questions 25–30</h3>
      <p class="instr">Complete the notes below. Write <b>${LIMIT_3N}</b> for each answer.</p>
      <div class="notes">
        <h4>Recommendations for Greenleaf Kitchen</h4>
        <ul>
          <li>Packaging should emphasise ${gap(25)}.</li>
          <li>Run ${gap(26)} in stores at weekends.</li>
          <li>New market: ${gap(27)}</li>
          <li>Marketing: short ${gap(28)} on social media</li>
          <li>Reduce the ${gap(29)} to about 25 items.</li>
          <li>Presentation date: ${gap(30)}</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="part" id="part-4" data-part="4" hidden>
    <div class="part-head"><h2>Part 4</h2><span class="label">Questions 31–40</span></div>
    <div class="qblock">
      <h3>Questions 31 and 32</h3>
      <p class="instr">Choose the correct letter, <b>A, B or C</b>.</p>
      ${[31, 32].map(mcq).join('')}
    </div>
    <div class="qblock">
      <h3>Questions 33–36</h3>
      <p class="instr">Complete the notes below. Write <b>${LIMIT_3N}</b> for each answer.</p>
      <div class="notes">
        <h4>Avalanches</h4>
        <ul>
          <li>The most deadly type: ${gap(33)}</li>
          <li>Greatest risk: in the ${gap(34)} after heavy snowfall</li>
          <li>Most buried victims survive if found within ${gap(35)}.</li>
          <li>Equipment: transceiver, shovel and ${gap(36)}</li>
        </ul>
      </div>
    </div>
    <div class="qblock">
      <h3>Questions 37–40</h3>
      <p class="instr">Label the diagram below. Write <b>${LIMIT_3}</b> for each answer.</p>
      <div class="notes"><h4>The layers of a slab avalanche</h4>${DIAGRAM}</div>
    </div>
  </section>`;

  // Part changes and reading/checking pauses in the recording (seconds) — filled in by tools/make_listening_audio.py
  const TIMELINE = [{"t":1.0,"focus":1},{"t":36.92,"pause":30,"label":"Reading time · Questions 1–4"},{"t":66.92,"speech":1,"part":1},{"t":196.03,"pause":30,"label":"Reading time · Questions 5–10"},{"t":226.03,"speech":1,"part":1},{"t":308.37,"pause":30,"label":"Checking time · Part 1"},{"t":338.37,"focus":2},{"t":338.37,"speech":1,"part":2},{"t":353.19,"pause":30,"label":"Reading time · Questions 11–16"},{"t":383.19,"speech":1,"part":2},{"t":465.08,"pause":30,"label":"Reading time · Questions 17–20"},{"t":495.08,"speech":1,"part":2},{"t":563.39,"pause":30,"label":"Checking time · Part 2"},{"t":593.39,"focus":3},{"t":593.39,"speech":1,"part":3},{"t":611.53,"pause":30,"label":"Reading time · Questions 21–24"},{"t":641.53,"speech":1,"part":3},{"t":721.88,"pause":30,"label":"Reading time · Questions 25–30"},{"t":751.88,"speech":1,"part":3},{"t":829.21,"pause":30,"label":"Checking time · Part 3"},{"t":859.21,"focus":4},{"t":859.21,"speech":1,"part":4},{"t":870.04,"pause":50,"label":"Reading time · Questions 31–40"},{"t":920.04,"speech":1,"part":4}];
  const partNames = { 1: 'Part 1 · Renting a desk in a coworking space', 2: 'Part 2 · The Riverford cable car', 3: 'Part 3 · A plant-based food company', 4: 'Part 4 · Avalanches' };
  window.LISTENING_TEST = { num: 102, name: 'Premium Test 2', audio: 'audio/listening-test102.mp3', minutes: 18, mb: 9, roles: ROLES, script: SCRIPT, Q, paper: PAPER, timeline: TIMELINE, partNames };
})();
