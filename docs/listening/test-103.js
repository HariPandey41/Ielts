// IELTS Listening · Premium Test 3 — content only. The exam engine is assets/listening-exam.js.
// Premium Exam (band 7–9 level): kept for the mock test, not listed with the practice tests.
// `why` explains each answer and the distractors; limit 3 = NO MORE THAN THREE WORDS (AND/OR A NUMBER).
(() => {
  'use strict';
  // Speakers: label for the transcript, voice for tools/make_listening_audio.py
  const ROLES = {
    narrator: { label: 'Narrator', voice: 'bm_george', speed: 0.94, lang: 'en-gb' },
    chloe:    { label: 'Chloe', voice: 'bf_isabella', speed: 1.03, lang: 'en-gb' },
    farouk:   { label: 'Farouk', voice: 'am_eric', speed: 1.02, lang: 'en-us' },
    manager:  { label: 'Farm manager', voice: 'bm_lewis', speed: 1.02, lang: 'en-gb' },
    reid:     { label: 'Dr Reid', voice: 'am_michael', speed: 1.0, lang: 'en-us' },
    maya:     { label: 'Maya', voice: 'bf_emma', speed: 1.03, lang: 'en-gb' },
    tariq:    { label: 'Tariq', voice: 'bm_daniel', speed: 1.03, lang: 'en-gb' },
    lecturer: { label: 'Lecturer', voice: 'af_bella', speed: 1.0, lang: 'en-us' },
  };

  // Script: [role, text] lines, or ['pause', seconds, label], or ['focus', part]
  // {{text|n}} marks where the answer to question n is heard.
  const SCRIPT = [
    ['focus', 1],
    ['narrator', 'IELTS Listening. Premium Test 3.'],
    ['narrator', 'In the test, you will hear a number of different recordings and you will have to answer questions on what you hear. There will be time for you to read the instructions and questions, and you will have a chance to check your work. All the recordings will be played once only. The test is in four parts.'],
    ['narrator', 'Now turn to Part 1.'],
    ['narrator', 'Part 1. You will hear a man phoning a company to rent a storage unit. First, you have some time to look at questions 1 to 4.'],
    ['pause', 30, 'Reading time · Questions 1–4'],
    ['narrator', 'You will see that there is an example that has been done for you. On this occasion only, the conversation relating to this will be played first.'],
    ['chloe', "Good afternoon, SafeSpace Storage, Chloe speaking."],
    ['farouk', "Hello. I need somewhere to keep some furniture for a few months. Do you have anything available at your Northgate site?"],
    ['chloe', "We do, yes. Northgate's our biggest site."],
    ['narrator', "The man wants to use the Northgate site, so 'Northgate' has been written in the example. Now we shall begin. You should answer the questions as you listen, because you will not hear the recording a second time. Listen carefully and answer questions 1 to 4."],
    ['chloe', "Good afternoon, SafeSpace Storage, Chloe speaking."],
    ['farouk', "Hello. I need somewhere to keep some furniture for a few months. Do you have anything available at your Northgate site?"],
    ['chloe', "We do, yes. Northgate's our biggest site. Can I ask what the storage is for? It helps me suggest the right size."],
    ['farouk', "People keep asking if I'm moving abroad, but no, nothing so exciting. And I'm not moving to a smaller place either. {{We're having the kitchen and bathroom completely redone|1}}, and the builders need the ground floor empty."],
    ['chloe', "I see. How much furniture is there?"],
    ['farouk', "Roughly the contents of two rooms. A sofa, a dining table, chairs, a fridge, and quite a lot of boxes. I was assuming I'd need your largest unit."],
    ['chloe', "Honestly, you'd be paying for space you don't need. The large units are the size of a garage. {{The medium unit would easily take two rooms of furniture|2}}, especially if you stack the boxes."],
    ['farouk', "Okay, the medium one, then. Do you offer anything else? Packing materials, insurance?"],
    ['chloe', "We sell boxes and tape, and we offer insurance, and there's a free van service within ten miles."],
    ['farouk', "I've already got plenty of boxes, and my home insurance covers goods in storage, I checked. But {{the van would be really useful|3}}. I was going to borrow a friend's, but it's quite small."],
    ['chloe', "I'll book that for you. And just so you know about access: our business customers can get in twenty-four hours a day, but {{for personal customers, it's six in the morning until ten at night|4}}. The office itself is only open during working hours."],
    ['narrator', 'Before you hear the rest of the conversation, you have some time to look at questions 5 to 10.'],
    ['pause', 30, 'Reading time · Questions 5–10'],
    ['narrator', 'Now listen and answer questions 5 to 10.'],
    ['chloe', "Let me fill in the application. Your name?"],
    ['farouk', "Farouk {{Haddad|5}}. That's H, A, D, D, A, D."],
    ['chloe', "And your address?"],
    ['farouk', "Fourteen, {{Kingfisher Road|6}}, Northgate. Kingfisher like the bird."],
    ['chloe', "When would you like the unit from?"],
    ['farouk', "The builders start on the fifth of September, so I'll need to move everything a couple of days before. Could I have it from the {{third of September|7}}?"],
    ['chloe', "No problem. And for how long?"],
    ['farouk', "The builders say three months, but they also said that work like this often overruns, so I'd better book it for {{four months|8}} to be safe."],
    ['chloe', "Sensible. The medium unit is thirty pounds a week, but with a booking of over three months, it's {{twenty-seven fifty|9}} a week."],
    ['farouk', "That's good. Do you need anything from me when I come in?"],
    ['chloe', "Just some proof of {{address|10}}, like a recent utility bill. And you'll need to bring your own padlock, or you can buy one here."],
    ['farouk', "Great. Thanks for your help."],
    ['narrator', 'That is the end of Part 1. You now have half a minute to check your answers to Part 1.'],
    ['pause', 30, 'Checking time · Part 1'],

    ['focus', 2],
    ['narrator', 'Now turn to Part 2.'],
    ['narrator', 'Part 2. You will hear the manager of a city farm talking to a group of new volunteers. First, you have some time to look at questions 11 to 16.'],
    ['pause', 30, 'Reading time · Questions 11–16'],
    ['narrator', 'Now listen carefully and answer questions 11 to 16.'],
    ['manager', "Good morning, everyone, and welcome to Hollins City Farm. Thank you all for volunteering. Let me start with a bit of background."],
    ['manager', "The farm was set up in {{nineteen seventy-nine|11}} by a group of local parents who wanted their children to see real animals. It's built on the site of an old {{brickworks|12}}, which had been empty for years, and you can still see part of the original chimney behind the goat shed."],
    ['manager', "We get around forty thousand visitors a year. Families come at weekends, of course, but most of our visitors are actually {{school groups|13}}, who come during the week to learn where their food comes from."],
    ['manager', "Before your first shift, every volunteer has to attend a {{safety briefing|14}}, which takes about an hour. We run them on the first Saturday of every month."],
    ['manager', "As for clothing, you'll be working outdoors in all weathers, and the yard can get very muddy, so please wear {{waterproof boots|15}}. Trainers really aren't suitable. We provide gloves and overalls."],
    ['manager', "And as a thank you, all volunteers who work a full day on Saturday get a free {{lunch|16}} in our café."],
    ['narrator', 'Before you hear the rest of the talk, you have some time to look at questions 17 to 20.'],
    ['pause', 30, 'Reading time · Questions 17–20'],
    ['narrator', 'Now listen and answer questions 17 to 20.'],
    ['manager', "Now, most volunteers want to work with the animals, which is understandable. And we always need help in the café on busy weekends. But {{the area where we're really short of people is the vegetable garden|17}}, so I'd be very grateful if some of you would consider it."],
    ['manager', "There's some exciting news this year. We'd hoped to open a cookery school, but the funding didn't come through. However, {{thanks to a grant from a local business, we've built an outdoor classroom|18}} next to the pond, which school groups will start using next month."],
    ['manager', "A note for younger volunteers. You don't need to be accompanied by an adult, and you can work on weekdays during the holidays. But {{if you're under eighteen, we need a consent form signed by a parent|19}} before you start."],
    ['manager', "Finally, people often ask how the farm is funded. The council used to pay for most of it, but that funding has been cut by half. We sell some vegetables and eggs, but that doesn't bring in much. These days, {{most of our income comes from the café and from donations|20}}. Right, let's go and meet the animals."],
    ['narrator', 'That is the end of Part 2. You now have half a minute to check your answers to Part 2.'],
    ['pause', 30, 'Checking time · Part 2'],

    ['focus', 3],
    ['narrator', 'Now turn to Part 3.'],
    ['narrator', 'Part 3. You will hear two business students, Maya and Tariq, talking to their tutor, Dr Reid, about their research on supermarket loyalty cards. First, you have some time to look at questions 21 to 24.'],
    ['pause', 30, 'Reading time · Questions 21–24'],
    ['narrator', 'Now listen carefully and answer questions 21 to 24.'],
    ['reid', "So, how did the loyalty card research go?"],
    ['maya', "Well. We'd planned to survey two hundred shoppers, but people were more willing to stop than we expected, so in the end we had {{two hundred and forty|21}}."],
    ['reid', "Excellent. And you mentioned you'd interviewed someone from the industry."],
    ['tariq', "Yes. We'd hoped to talk to someone at the head office, but they never replied. In the end, {{a store manager|22}} at one of the big supermarkets gave us an hour, and he was very open."],
    ['reid', "What was the most surprising finding?"],
    ['maya', "How many cards people have. We assumed most would have one or two, but the majority carried at least {{three|23}}, and some had seven or eight."],
    ['reid', "And what do shoppers value most about the schemes?"],
    ['tariq', "Not the points themselves, interestingly, and not the fuel discounts, which used to be popular. What people valued most were {{personalised offers|24}}, discounts on things they actually buy."],
    ['narrator', 'Before you hear the rest of the discussion, you have some time to look at questions 25 to 30.'],
    ['pause', 30, 'Reading time · Questions 25–30'],
    ['narrator', 'Now listen and answer questions 25 to 30.'],
    ['reid', "You've divided the shoppers into groups. Tell me about each."],
    ['maya', "Young families were the keenest users. What they value most are {{money-off vouchers|25}}, because they save money immediately. But their main complaint was that many of the offers are for {{unhealthy snacks|26}}, which they don't want to buy for their children."],
    ['reid', "And students?"],
    ['tariq', "Most don't bother with the schemes. They prefer to shop at {{discount supermarkets|27}}, where prices are low anyway. And they told us the points are worth {{very little|28}} unless you spend a lot, which they don't."],
    ['reid', "And older shoppers?"],
    ['maya', "They use the cards a lot, but many of them don't use the apps. They much prefer {{paper vouchers|29}}, which some supermarkets are now phasing out. And their biggest concern was how the supermarkets use their {{personal data|30}}. Several of them asked us whether it was sold to other companies."],
    ['reid', "That's a rich set of findings. Well done."],
    ['narrator', 'That is the end of Part 3. You now have half a minute to check your answers to Part 3.'],
    ['pause', 30, 'Checking time · Part 3'],

    ['focus', 4],
    ['narrator', 'Now turn to Part 4.'],
    ['narrator', 'Part 4. You will hear a lecture about tides. First, you have some time to look at questions 31 to 40.'],
    ['pause', 50, 'Reading time · Questions 31–40'],
    ['narrator', 'Now listen carefully and answer questions 31 to 40.'],
    ['lecturer', "Good morning. Today we're looking at tides, the regular rise and fall of the sea, and at whether they can be used to produce energy."],
    ['lecturer', "Tides are caused mainly by the Moon. If you look at the first diagram, you'll see that the ocean bulges out on the side of the Earth that faces the Moon. This bulge is caused by the Moon's {{gravity|31}}, which pulls the water towards it. Less obviously, there's a second bulge on the opposite side of the Earth. This one is often explained in terms of {{inertia|32}}: the water there is pulled less strongly than the Earth itself, so in effect it's left behind. As the Earth rotates through these two bulges, most coasts experience two high tides and two low tides each day."],
    ['lecturer', "The Sun has an effect too, although it's less than half as strong as the Moon's. In the second diagram, the Sun, the Moon and the Earth are in a straight line, which happens at new moon and full moon. Their pulls combine to produce especially large tides, called {{spring tides|33}}. The name has nothing to do with the season, by the way. In the third diagram, the Sun and Moon are at right angles to each other, and their effects partly cancel out, producing smaller tides, known as {{neap tides|34}}."],
    ['lecturer', "Because the Moon moves along its orbit as the Earth turns, high tide comes about {{fifty minutes|35}} later each day."],
    ['lecturer', "The difference between high and low tide, the tidal range, varies enormously from place to place. The largest in the world is in the Bay of {{Fundy|36}}, in Canada, where it can exceed sixteen metres. The Mediterranean, by contrast, has very small tides, mainly because its {{narrow entrance|37}} at Gibraltar restricts the flow of water from the Atlantic."],
    ['lecturer', "Tides have attracted engineers for a long time, because unlike wind and sunshine, they're completely predictable. The first large tidal power station was built across the estuary of the River Rance, in France, and opened in {{nineteen sixty-six|38}}. It's still operating. For many years it was the largest in the world, until a station opened at Sihwa Lake in {{South Korea|39}} in two thousand and eleven."],
    ['lecturer', "So why aren't there more? The main problem is environmental. A barrage, a dam across an estuary, changes the flow of water and the movement of sediment, and it can damage the {{mudflats|40}} that are feeding grounds for huge numbers of birds. That's why engineers are now more interested in underwater turbines, which work rather like wind turbines in fast tidal currents. We'll look at those next week."],
    ['narrator', 'That is the end of Part 4. That is the end of the listening test.'],
  ];

  // Questions. kind: gap | mcq | two | match
  const LIMIT_3N = 'NO MORE THAN THREE WORDS AND/OR A NUMBER';
  const LIMIT_3 = 'NO MORE THAN THREE WORDS';
  const Q = {
    1:  { kind: 'mcq', q: 'Why does Farouk need a storage unit?', opts: { A: 'He is moving abroad.', B: 'His home is being renovated.', C: 'He is moving to a smaller home.' }, ans: 'B', why: 'People ask if he is moving abroad (A), and he is not downsizing (C): the kitchen and bathroom are being redone.' },
    2:  { kind: 'mcq', q: 'Which size of unit does Farouk choose?', opts: { A: 'small', B: 'medium', C: 'large' }, ans: 'B', why: 'He assumed he needed the largest (C), but Chloe says the medium unit would easily take two rooms of furniture.' },
    3:  { kind: 'mcq', q: 'Which extra service will Farouk use?', opts: { A: 'packing materials', B: 'insurance', C: 'a van' }, ans: 'C', why: 'He already has boxes (A) and his home insurance covers storage (B); the free van is useful because his friend’s is small.' },
    4:  { kind: 'mcq', q: 'When can Farouk get into his unit?', opts: { A: 'at any time', B: 'from 6 am to 10 pm', C: 'during office hours only' }, ans: 'B', why: '24-hour access is only for business customers (A); the office hours (C) apply to the office, not the units.' },
    5:  { kind: 'gap', ans: ['haddad'], limit: 3, key: 'Haddad', why: 'Spelled H-A-D-D-A-D.' },
    6:  { kind: 'gap', ans: ['kingfisher road'], limit: 3, key: 'Kingfisher Road', why: '“Fourteen, Kingfisher Road… Kingfisher like the bird.”' },
    7:  { kind: 'gap', ans: ['3 september', '3rd september', 'september 3', 'september 3rd', 'third of september', '3rd of september'], limit: 3, key: '3 September', why: 'The builders start on the 5th (distractor); he needs the unit from the 3rd.' },
    8:  { kind: 'gap', ans: ['four months', '4 months'], limit: 3, key: '4 months', why: 'The builders say three months (distractor), but the work may overrun, so he books four.' },
    9:  { kind: 'gap', ans: ['27.50', '£27.50'], limit: 3, key: '27.50', why: 'The standard price is £30 (distractor); bookings over three months are £27.50 a week.' },
    10: { kind: 'gap', ans: ['address'], limit: 3, why: 'Proof of address, such as a utility bill. The padlock is something he can also buy there.' },
    11: { kind: 'gap', ans: ['1979'], limit: 3, why: 'Set up in 1979 by local parents.' },
    12: { kind: 'gap', ans: ['brickworks'], limit: 3, why: 'Built on the site of an old brickworks; part of its chimney remains.' },
    13: { kind: 'gap', ans: ['school groups'], limit: 3, why: 'Families come at weekends (distractor), but most visitors are school groups.' },
    14: { kind: 'gap', ans: ['safety briefing'], limit: 3, why: 'Every volunteer must attend a one-hour safety briefing before the first shift.' },
    15: { kind: 'gap', ans: ['waterproof boots'], limit: 3, why: 'Trainers are not suitable; gloves and overalls are provided.' },
    16: { kind: 'gap', ans: ['lunch'], limit: 3, why: 'A free lunch in the café for a full Saturday shift.' },
    17: { kind: 'mcq', q: 'Where does the farm most need volunteers?', opts: { A: 'looking after the animals', B: 'in the café', C: 'in the vegetable garden' }, ans: 'C', why: 'Most volunteers want the animals (A) and the café needs help at weekends (B), but they are “really short of people” in the vegetable garden.' },
    18: { kind: 'mcq', q: 'What is new at the farm this year?', opts: { A: 'a cookery school', B: 'an outdoor classroom', C: 'a pond' }, ans: 'B', why: 'The cookery school funding did not come through (A); the pond (C) already exists, and the classroom is next to it.' },
    19: { kind: 'mcq', q: 'What must volunteers under eighteen have?', opts: { A: 'an adult with them', B: 'a parent’s signed consent', C: 'permission to work only on weekdays' }, ans: 'B', why: 'They do not need an adult with them (A); the weekday detail is about holidays, not a requirement (C).' },
    20: { kind: 'mcq', q: 'Where does most of the farm’s income now come from?', opts: { A: 'the local council', B: 'selling produce', C: 'the café and donations' }, ans: 'C', why: 'Council funding has been cut by half (A), and produce sales bring in little (B).' },
    21: { kind: 'gap', ans: ['240'], limit: 3, key: '240', why: 'They planned 200 (distractor) but surveyed 240.' },
    22: { kind: 'gap', ans: ['store manager', 'a store manager'], limit: 3, key: 'store manager', why: 'Head office never replied (distractor); a store manager gave them an hour.' },
    23: { kind: 'gap', ans: ['3', 'three'], limit: 3, why: 'They assumed one or two (distractor); most carried at least three.' },
    24: { kind: 'gap', ans: ['personalised offers', 'personalized offers'], limit: 3, key: 'personalised offers', why: 'Not points or fuel discounts (distractors): personalised offers.' },
    25: { kind: 'gap', ans: ['money-off vouchers', 'vouchers'], limit: 3, key: 'money-off vouchers', why: 'Young families value money-off vouchers because the saving is immediate.' },
    26: { kind: 'gap', ans: ['unhealthy snacks', 'snacks'], limit: 3, key: 'unhealthy snacks', why: 'Their complaint: many offers are for unhealthy snacks.' },
    27: { kind: 'gap', ans: ['discount supermarkets'], limit: 3, why: 'Students prefer discount supermarkets, where prices are low anyway.' },
    28: { kind: 'gap', ans: ['very little', 'little'], limit: 3, key: 'very little', why: 'Points are worth very little unless you spend a lot.' },
    29: { kind: 'gap', ans: ['paper vouchers'], limit: 3, why: 'Older shoppers often do not use apps and prefer paper vouchers.' },
    30: { kind: 'gap', ans: ['personal data', 'data'], limit: 3, key: 'personal data', why: 'Their biggest concern is how supermarkets use their personal data.' },
    31: { kind: 'gap', ans: ['gravity', "moon's gravity", 'the moon’s gravity'], limit: 3, key: 'gravity', why: 'The bulge facing the Moon is caused by the Moon’s gravity.' },
    32: { kind: 'gap', ans: ['inertia'], limit: 3, why: 'The bulge on the far side is explained in terms of inertia.' },
    33: { kind: 'gap', ans: ['spring tides', 'spring'], limit: 3, key: 'spring tides', why: 'Sun, Moon and Earth in a line: spring tides (nothing to do with the season).' },
    34: { kind: 'gap', ans: ['neap tides', 'neap'], limit: 3, key: 'neap tides', why: 'Sun and Moon at right angles: smaller, neap tides.' },
    35: { kind: 'gap', ans: ['50 minutes', 'fifty minutes'], limit: 3, key: '50 minutes', why: 'High tide comes about fifty minutes later each day.' },
    36: { kind: 'gap', ans: ['fundy'], limit: 3, key: 'Fundy', why: 'The Bay of Fundy in Canada, with a range of over 16 metres.' },
    37: { kind: 'gap', ans: ['narrow entrance'], limit: 3, why: 'Its narrow entrance at Gibraltar restricts the flow of water from the Atlantic.' },
    38: { kind: 'gap', ans: ['1966'], limit: 3, why: 'The Rance station opened in 1966 and still operates.' },
    39: { kind: 'gap', ans: ['south korea', 'korea'], limit: 3, key: 'South Korea', why: 'Sihwa Lake, South Korea, opened in 2011.' },
    40: { kind: 'gap', ans: ['mudflats', 'mud flats'], limit: 3, key: 'mudflats', why: 'Barrages can damage mudflats, feeding grounds for birds.' },
  };

  const gap = n => `<span class="gap" data-q="${n}"><span class="n">${n}</span><input type="text" id="q${n}" data-q="${n}" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Question ${n}"></span>`;
  const mcq = n => { const q = Q[n]; return `<div class="mcq" data-q="${n}" role="radiogroup" aria-labelledby="ql${n}"><div class="q"><span class="qn">${n}</span><span id="ql${n}">${q.q}</span></div>${Object.entries(q.opts).map(([k, v]) => `<label data-opt="${k}"><input type="radio" name="q${n}" value="${k}" data-q="${n}"><b>${k}</b><span>${v}</span></label>`).join('')}</div>`; };
  const sel = (n, letters) => `<select id="q${n}" data-q="${n}" aria-label="Question ${n}"><option value="">–</option>${letters.map(l => `<option>${l}</option>`).join('')}</select>`;
  const matchRows = (nums, opts) => nums.map(n => `<div class="match-row" data-q="${n}"><span class="qn">${n}</span><span class="who">${Q[n].label}</span>${sel(n, Object.keys(opts))}</div>`).join('');
  const twoBlock = (first, question, opts) => `<div class="mcq" data-q="${first}" data-two="1"><div class="q"><span class="qn">${first}–${first + 1}</span><span>${question}</span></div>${Object.entries(opts).map(([k, v]) => `<label data-opt="${k}"><input type="checkbox" value="${k}" data-two="1"><b>${k}</b><span>${v}</span></label>`).join('')}</div>`;

  const cell = c => `<div style="border:1.5px solid currentColor;border-radius:4px;padding:8px 12px">${c}</div>`;
  const DIAGRAMS = `<div style="display:grid;gap:8px;max-width:600px;margin:6px 0 10px">
      ${cell(`<b>Diagram 1 · Earth and Moon</b><br>☾ Moon ·········· ( ⬭ Earth ⬭ )<br>Bulge facing the Moon: caused by the Moon’s ${gap(31)}<br>Bulge on the far side: explained by ${gap(32)}`)}
      ${cell(`<b>Diagram 2 · Sun, Earth and Moon in a line</b><br>☀ Sun ········ ◯ Earth ···· ☾ Moon<br>Result: ${gap(33)} (very large tides)`)}
      ${cell(`<b>Diagram 3 · Sun and Moon at right angles</b><br>☀ Sun ········ ◯ Earth<br><span style="padding-left:9.5em">⋮ ☾ Moon</span><br>Result: ${gap(34)} (small tides)`)}
    </div>`;

  const PAPER = `
  <section class="part" id="part-1" data-part="1">
    <div class="part-head"><h2>Part 1</h2><span class="label">Questions 1–10</span></div>
    <div class="qblock">
      <h3>Questions 1–4</h3>
      <p class="instr">Choose the correct letter, <b>A, B or C</b>.</p>
      <p class="muted"><i>Example: Site: <u>Northgate</u></i></p>
      ${[1, 2, 3, 4].map(mcq).join('')}
    </div>
    <div class="qblock">
      <h3>Questions 5–10</h3>
      <p class="instr">Complete the application form below. Write <b>${LIMIT_3N}</b> for each answer.</p>
      <div class="form">
        <h4>SafeSpace Storage · Application</h4>
        <div class="line"><span>Name:</span><span>Farouk ${gap(5)}</span></div>
        <div class="line"><span>Address:</span><span>14 ${gap(6)}, Northgate</span></div>
        <div class="line"><span>Start date:</span><span>${gap(7)}</span></div>
        <div class="line"><span>Length of hire:</span><span>${gap(8)}</span></div>
        <div class="line"><span>Weekly price:</span><span>£ ${gap(9)}</span></div>
        <div class="line"><span>Bring:</span><span>proof of ${gap(10)}</span></div>
      </div>
    </div>
  </section>

  <section class="part" id="part-2" data-part="2" hidden>
    <div class="part-head"><h2>Part 2</h2><span class="label">Questions 11–20</span></div>
    <div class="qblock">
      <h3>Questions 11–16</h3>
      <p class="instr">Complete the notes below. Write <b>${LIMIT_3N}</b> for each answer.</p>
      <div class="notes">
        <h4>Hollins City Farm · Volunteer information</h4>
        <ul>
          <li>Founded in ${gap(11)}</li>
          <li>Built on the site of an old ${gap(12)}</li>
          <li>Most visitors are ${gap(13)}.</li>
          <li>Before the first shift: attend a ${gap(14)}</li>
          <li>Wear ${gap(15)}.</li>
          <li>Saturday volunteers get a free ${gap(16)}.</li>
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
      <h3>Questions 21–24</h3>
      <p class="instr">Complete the notes below. Write <b>${LIMIT_3N}</b> for each answer.</p>
      <div class="notes">
        <h4>Loyalty card research</h4>
        <ul>
          <li>Number of shoppers surveyed: ${gap(21)}</li>
          <li>Interview with a ${gap(22)}</li>
          <li>Most shoppers carried at least ${gap(23)} loyalty cards.</li>
          <li>Shoppers valued ${gap(24)} most.</li>
        </ul>
      </div>
    </div>
    <div class="qblock">
      <h3>Questions 25–30</h3>
      <p class="instr">Complete the table below. Write <b>${LIMIT_3}</b> for each answer.</p>
      <div class="tbl-wrap"><table class="rev" style="max-width:640px">
        <thead><tr><th>Group</th><th>What they value or prefer</th><th>Main concern</th></tr></thead>
        <tbody>
          <tr><td>Young families</td><td>${gap(25)}</td><td>offers are mainly for ${gap(26)}</td></tr>
          <tr><td>Students</td><td>shopping at ${gap(27)}</td><td>points are worth ${gap(28)}</td></tr>
          <tr><td>Older shoppers</td><td>${gap(29)}</td><td>how supermarkets use their ${gap(30)}</td></tr>
        </tbody></table></div>
    </div>
  </section>

  <section class="part" id="part-4" data-part="4" hidden>
    <div class="part-head"><h2>Part 4</h2><span class="label">Questions 31–40</span></div>
    <div class="qblock">
      <h3>Questions 31–34</h3>
      <p class="instr">Label the diagrams below. Write <b>${LIMIT_3}</b> for each answer.</p>
      <div class="notes"><h4>What causes tides</h4>${DIAGRAMS}</div>
    </div>
    <div class="qblock">
      <h3>Questions 35–40</h3>
      <p class="instr">Complete the notes below. Write <b>${LIMIT_3N}</b> for each answer.</p>
      <div class="notes">
        <h4>Tides and tidal power</h4>
        <ul>
          <li>High tide is about ${gap(35)} later each day.</li>
          <li>Largest tidal range: the Bay of ${gap(36)}, Canada</li>
          <li>Mediterranean tides are small because of its ${gap(37)}.</li>
          <li>The Rance tidal power station opened in ${gap(38)}.</li>
          <li>Largest station today: Sihwa Lake, ${gap(39)}</li>
          <li>Barrages can damage ${gap(40)} used by birds.</li>
        </ul>
      </div>
    </div>
  </section>`;

  // Part changes and reading/checking pauses in the recording (seconds) — filled in by tools/make_listening_audio.py
  const TIMELINE = [{"t":1.0,"focus":1},{"t":34.74,"pause":30,"label":"Reading time · Questions 1–4"},{"t":64.74,"speech":1,"part":1},{"t":194.65,"pause":30,"label":"Reading time · Questions 5–10"},{"t":224.65,"speech":1,"part":1},{"t":285.2,"pause":30,"label":"Checking time · Part 1"},{"t":315.2,"focus":2},{"t":315.2,"speech":1,"part":2},{"t":328.35,"pause":30,"label":"Reading time · Questions 11–16"},{"t":358.35,"speech":1,"part":2},{"t":434.42,"pause":30,"label":"Reading time · Questions 17–20"},{"t":464.42,"speech":1,"part":2},{"t":539.86,"pause":30,"label":"Checking time · Part 2"},{"t":569.86,"focus":3},{"t":569.86,"speech":1,"part":3},{"t":587.58,"pause":30,"label":"Reading time · Questions 21–24"},{"t":617.58,"speech":1,"part":3},{"t":678.86,"pause":30,"label":"Reading time · Questions 25–30"},{"t":708.86,"speech":1,"part":3},{"t":770.84,"pause":30,"label":"Checking time · Part 3"},{"t":800.84,"focus":4},{"t":800.84,"speech":1,"part":4},{"t":811.26,"pause":50,"label":"Reading time · Questions 31–40"},{"t":861.26,"speech":1,"part":4}];
  const partNames = { 1: 'Part 1 · Renting a storage unit', 2: 'Part 2 · Volunteering at a city farm', 3: 'Part 3 · Supermarket loyalty cards', 4: 'Part 4 · Tides and tidal power' };
  window.LISTENING_TEST = { num: 103, name: 'Premium Test 3', audio: 'audio/listening-test103.mp3', minutes: 17, mb: 8, roles: ROLES, script: SCRIPT, Q, paper: PAPER, timeline: TIMELINE, partNames };
})();
