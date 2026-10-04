// IELTS Listening · Practice Test 1 — content only. The exam engine is assets/listening-exam.js.
(() => {
  'use strict';
  // Speakers: label for the transcript, voice for tools/make_listening_audio.py
  const ROLES = {
    narrator: { label: 'Narrator', voice: 'bm_george', speed: 0.92, lang: 'en-gb' },
    tom:      { label: 'Tom', voice: 'bm_lewis', speed: 0.98, lang: 'en-gb' },
    laura:    { label: 'Laura', voice: 'bf_isabella', speed: 0.98, lang: 'en-gb' },
    claire:   { label: 'Claire', voice: 'bf_alice', speed: 0.96, lang: 'en-gb' },
    evans:    { label: 'Dr Evans', voice: 'bm_daniel', speed: 0.95, lang: 'en-gb' },
    mia:      { label: 'Mia', voice: 'bf_lily', speed: 0.98, lang: 'en-gb' },
    jake:     { label: 'Jake', voice: 'am_adam', speed: 1.0, lang: 'en-us' },
    lecturer: { label: 'Lecturer', voice: 'af_heart', speed: 0.95, lang: 'en-us' },
  };

  // Script: [role, text] lines, or ['pause', seconds, label], or ['focus', part]
  // {{text|n}} marks where the answer to question n is heard.
  const SCRIPT = [
    ['focus', 1],
    ['narrator', 'IELTS Listening. Practice Test 1.'],
    ['narrator', 'In the test, you will hear a number of different recordings and you will have to answer questions on what you hear. There will be time for you to read the instructions and questions, and you will have a chance to check your work. All the recordings will be played once only. The test is in four parts.'],
    ['narrator', 'Now turn to Part 1.'],
    ['narrator', 'Part 1. You will hear a woman phoning a sports club to ask about becoming a member. First, you have some time to look at questions 1 to 5.'],
    ['pause', 30, 'Reading time · Questions 1–5'],
    ['narrator', 'You will see that there is an example that has been done for you. On this occasion only, the conversation relating to this will be played first.'],
    ['tom', 'Good morning, Greenfield Sports Club, Tom speaking. How can I help?'],
    ['laura', "Oh, hello. I'm calling because I'd like to join the club. I saw on the leaflet that there are a few different types of membership."],
    ['tom', "That's right. We have family membership, student membership and individual membership. Which were you thinking of?"],
    ['laura', "Just individual, please. It's only for me."],
    ['narrator', "The woman wants individual membership, so 'individual' has been written in the space. Now we shall begin. You should answer the questions as you listen, because you will not hear the recording a second time. Listen carefully and answer questions 1 to 5."],
    ['tom', 'Good morning, Greenfield Sports Club, Tom speaking. How can I help?'],
    ['laura', "Oh, hello. I'm calling because I'd like to join the club. I saw on the leaflet that there are a few different types of membership."],
    ['tom', "That's right. We have family membership, student membership and individual membership. Which were you thinking of?"],
    ['laura', "Just individual, please. It's only for me."],
    ['tom', "Lovely. I can fill in the application form for you now over the phone, if that's easier. Can I take your name?"],
    ['laura', "Yes, it's Laura Pemberton."],
    ['tom', 'Could you spell your surname for me, please?'],
    ['laura', "Sure. It's {{P, E, M, B, E, R, T, O, N|1}}."],
    ['tom', 'Thank you. And what is your address?'],
    ['laura', "It's sixty-four... oh no, sorry, that's my old flat. I moved last month. It's {{forty-six|2}} Marsh Road. That's in Westbury."],
    ['tom', 'Forty-six Marsh Road, Westbury. And the postcode?'],
    ['laura', "It's {{W, B, 7, 2, R, Q|3}}."],
    ['tom', 'Let me just read that back to you. W, B, 7, 2, R, Q.'],
    ['laura', "That's right."],
    ['tom', 'And could I ask what you do for a living? We offer a discount for some professions.'],
    ['laura', "I'm a {{nurse|4}}. I was a teacher for a few years, actually, but I changed careers about two years ago."],
    ['tom', "In that case you'll qualify for our healthcare workers' discount. I'll come back to that. Now, when do you think you'll mostly use the club? We're very quiet in the mornings, if that's useful."],
    ['laura', "Until recently I'd have said mornings, but my shifts at the hospital have changed, so it'll mostly be weekday {{evenings|5}} now."],
    ['tom', 'Weekday evenings. No problem at all.'],
    ['narrator', 'Before you hear the rest of the conversation, you have some time to look at questions 6 to 10.'],
    ['pause', 30, 'Reading time · Questions 6–10'],
    ['narrator', 'Now listen and answer questions 6 to 10.'],
    ['tom', "Just for our records, can I ask how you heard about us? Was it through our website?"],
    ['laura', "No, I haven't looked at the website yet. A colleague mentioned the club a while ago, but what actually made me call was an advert I saw in the {{newspaper|6}} last week."],
    ['tom', "That's good to hear. Now, about the fees. There's a one-off joining fee. It's normally forty pounds, but we're running a special offer this month, so it's just {{twenty-five|7}} pounds."],
    ['laura', 'Oh, good timing, then.'],
    ['tom', "Then there's the monthly payment. For individual members it's usually thirty-five pounds, but with the healthcare discount it comes down to {{thirty-two pounds fifty|8}}."],
    ['laura', "Thirty-two fifty a month. That's fine."],
    ['tom', 'And which of our facilities are you most interested in?'],
    ['laura', "Mainly the swimming pool. And I'd like to join a class as well. I was hoping to try Pilates."],
    ['tom', "I'm afraid the Pilates classes are full until the spring. But there's still space in the {{yoga|9}} classes on Tuesday and Thursday evenings."],
    ['laura', "Yoga would be fine. I've done a little before."],
    ['tom', "I'll put you down for that, then. Is there anything else I can help with?"],
    ['laura', "Yes, just one thing. Can I bring someone with me at weekends? My husband isn't really interested in sport, but my {{brother|10}} visits quite often and he'd love to use the pool."],
    ['tom', "Yes, every member gets a guest pass for one named person. I'll put your brother's details on that."],
    ['laura', 'Perfect. Thank you so much.'],
    ['narrator', 'That is the end of Part 1. You now have half a minute to check your answers to Part 1.'],
    ['pause', 30, 'Checking time · Part 1'],

    ['focus', 2],
    ['narrator', 'Now turn to Part 2.'],
    ['narrator', 'Part 2. You will hear a ranger talking to a group of visitors at Haddon Park nature reserve. First, you have some time to look at questions 11 to 14.'],
    ['pause', 30, 'Reading time · Questions 11–14'],
    ['narrator', 'Now listen carefully and answer questions 11 to 14.'],
    ['claire', "Good morning, everyone, and welcome to Haddon Park. My name's Claire, and I'm one of the rangers here. Before you set off, I'd like to tell you a little about the park and show you where everything is."],
    ['claire', 'First, some history. A lot of visitors assume that Haddon Park was once a farm, probably because of the old barn by the entrance. There was a small dairy here for a few years, but that came much later. The lake you will see today was dug out as a {{gravel quarry|11}} in the nineteen fifties, and when the quarry closed, it slowly filled with water and wildlife moved in.'],
    ['claire', "We've made a few changes this year. The visitor centre was refurbished last year, so that isn't new, although it does look very smart now. We had planned to start guided night walks this season, but unfortunately those have had to be postponed until next year. What is new is {{electric bike hire|12}}. You can pick up a bike from the visitor centre and ride along any of the main paths."],
    ['claire', "Now, a few rules. I can see that many of you have brought dogs, and they're very welcome here. Some of you may have heard that dogs are only allowed on the main path. That was the rule a few years ago, but it has changed. Dogs can now go anywhere in the park, but they must be {{kept on a lead at all times|13}}."],
    ['claire', "And finally, one special request. There are bins at the café, so you don't need to take your litter home, and although we'd rather you didn't feed bread to the ducks, it isn't forbidden. What we really ask is that between March and June you {{keep to the marked paths|14}}, because that's when ground-nesting birds are raising their young, and they are very easily disturbed."],
    ['narrator', 'Before you hear the rest of the talk, you have some time to look at questions 15 to 20.'],
    ['pause', 30, 'Reading time · Questions 15–20'],
    ['narrator', 'Now listen and answer questions 15 to 20.'],
    ['claire', "Right. If you look at your maps, you'll see that we are standing at the entrance, at the bottom of the map. The car park is on your left."],
    ['claire', "Let's start with the gift shop, as it's the closest. As you come through the entrance, it's immediately on your left, {{in between the main path and the car park|15}}."],
    ['claire', "If you walk straight up the main path, you'll pass the visitor centre on your right. Keep going, and just before you reach the junction with the path that goes off to the east, you'll find the café. It's on the right-hand side, {{on the corner where the two paths meet|16}}."],
    ['claire', "Now, the lake is on the left of the main path. The picnic area used to be next to the car park, but people complained about the noise from the cars, so we've moved it. It's now on the {{southern shore of the lake|17}}, the side closest to you as you walk up."],
    ['claire', "If you enjoy birdwatching, you'll want to visit the bird hide. It's on the far side of the lake, on the {{north-west shore|18}}, so it's quite a walk, but it's worth it, because the birds there are hardly ever disturbed."],
    ['claire', "Families with children should head along the path that goes east from the café. Follow it right to the very end, and you'll find the adventure playground {{on the south side of the path, just where it finishes|19}}."],
    ['claire', "And lastly, the first aid point. It's on that same east path, {{about halfway along, on the north side|20}}, so on your left as you walk away from the café. There is always someone there until five o'clock."],
    ['claire', 'Right, I hope you all enjoy your visit.'],
    ['narrator', 'That is the end of Part 2. You now have half a minute to check your answers to Part 2.'],
    ['pause', 30, 'Checking time · Part 2'],

    ['focus', 3],
    ['narrator', 'Now turn to Part 3.'],
    ['narrator', 'Part 3. You will hear two students, Mia and Jake, talking to their tutor about their research project on food waste in the university canteen. First, you have some time to look at questions 21 to 26.'],
    ['pause', 30, 'Reading time · Questions 21–26'],
    ['narrator', 'Now listen carefully and answer questions 21 to 26.'],
    ['evans', 'Come in, both of you. So, you wanted to talk about your food waste project before the presentation next week?'],
    ['mia', "Yes, thanks, Dr Evans. We've collected all our data now, but we wanted your advice on a few things."],
    ['evans', "Of course. Let's start with your questionnaire. How did that go?"],
    ['jake', 'Mostly well. We were worried we would not get many responses from staff, but in the end almost a third of them filled it in, which was more than we expected.'],
    ['mia', 'The main problem was that {{some of the questions were confusing|21}}. Question six especially. A lot of people misunderstood what we meant by regularly.'],
    ['evans', 'That often happens. And how long did it take people to complete?'],
    ['jake', "We thought it might be too long, but the average was about four minutes, so that wasn't an issue. The other problem was that quite a few people only answered the first page and left the rest blank, so we had {{a lot of incomplete answers|22}}."],
    ['evans', 'Did you use paper copies or an online version?'],
    ['mia', 'Paper. We left the questionnaires on the canteen tables.'],
    ['evans', "Fine, that's worth mentioning in your method section. Now, your waste figures. You weighed the food left on plates for two weeks?"],
    ['jake', "That's right. We've got the totals for each day."],
    ['evans', "Good. Some students worry that their sample is too small, but for a project of this size two weeks is perfectly adequate. And I see you've already turned the figures into a graph. What would really strengthen your findings, though, is a comparison. If you could get {{figures from the canteen in the science building|23}}, you'd be able to show whether your results are typical."],
    ['mia', "OK, we'll ask them."],
    ['evans', 'So, what do you think is the main cause of the waste?'],
    ['mia', "I think a lot of students just don't like the food. You see whole meals left untouched."],
    ['jake', "I'm not sure about that. Most of the plates we weighed were half eaten, not untouched. I think {{the portions are simply too big|24}} for most people. Lectures running late might explain a few plates, but not most of them."],
    ['evans', 'Interesting. And what are you going to propose?'],
    ['mia', 'We looked at a few options. Some universities have switched to smaller plates, but students there complained a lot. We also considered charging by weight, but that would be too complicated at the till.'],
    ['jake', "So we're going to suggest {{offering a choice of portion sizes|25}}, a small and a regular, at different prices."],
    ['evans', "Sensible. And as for the presentation itself, I've looked at your slides. Your interview section is fine as it is, and you've clearly practised your timing. But your introduction takes up nearly half of the presentation. {{I'd cut that down a lot|26}}."],
    ['jake', "Right, we'll shorten it."],
    ['narrator', 'Before you hear the rest of the discussion, you have some time to look at questions 27 to 30.'],
    ['pause', 30, 'Reading time · Questions 27–30'],
    ['narrator', 'Now listen and answer questions 27 to 30.'],
    ['evans', 'You said you had discussed your proposal with a few people. What did they say?'],
    ['mia', 'Well, we spoke to the canteen manager first. I expected her to say it would be difficult to organise, but she said it would actually be quite straightforward. She just wants to {{try it for a month in one canteen|27}} before making a decision.'],
    ['evans', 'That seems reasonable. What about the student union?'],
    ['jake', "They were really positive. They ran a quick poll on social media, and they think {{students will really like having the choice|28}}. Their only comment was about the price of the small portion."],
    ['evans', 'And the kitchen staff?'],
    ['mia', "We assumed they'd be worried about longer queues, but they said serving wouldn't take any longer. Their concern was that preparing two sizes would mean {{they'd need another person in the kitchen|29}} at lunchtime."],
    ['evans', 'And did you get a response from the finance office?'],
    ['jake', "Yes, by email. They didn't comment on how it would work in practice, but they calculated that cutting waste by even ten per cent would {{save the university a significant amount|30}} each year."],
    ['evans', "Excellent. That's a really useful point to end your presentation on."],
    ['narrator', 'That is the end of Part 3. You now have half a minute to check your answers to Part 3.'],
    ['pause', 30, 'Checking time · Part 3'],

    ['focus', 4],
    ['narrator', 'Now turn to Part 4.'],
    ['narrator', 'Part 4. You will hear a lecture about the history of timekeeping. First, you have some time to look at questions 31 to 40.'],
    ['pause', 45, 'Reading time · Questions 31–40'],
    ['narrator', 'Now listen carefully and answer questions 31 to 40.'],
    ['lecturer', "Good afternoon. Today I'm going to talk about something we all depend on but rarely think about, and that is the measurement of time. I'll trace how clocks developed, from the simplest devices to the extraordinary precision we have today."],
    ['lecturer', "The earliest timekeepers we know of were sundials, which were used in Egypt more than three thousand years ago. A sundial is simple and reliable, but it has an obvious weakness: it is useless at {{night|31}}, and of course on cloudy days."],
    ['lecturer', "Water clocks solved part of this problem. Water dripped at a steady rate from a container, and the level of the water showed how many hours had passed. These clocks worked day and night, but they were not very accurate, because the rate of flow changed with the {{temperature|32}}. In winter, the water could even freeze."],
    ['lecturer', "Mechanical clocks first appeared in Europe in the late thirteenth century. People often assume they were built for merchants, who needed to organise their business, but in fact many of the earliest ones were made for monasteries, where monks needed to know the correct times for {{prayer|33}}. Interestingly, these early clocks had no faces at all. Instead, they simply rang a {{bell|34}} to mark the hours. Even when dials were added, they had only an hour hand, because the clocks could easily gain or lose a quarter of an hour in a single day."],
    ['lecturer', "The next great improvement came in sixteen fifty-six, when the Dutch scientist Christiaan Huygens built the first clock controlled by a {{pendulum|35}}. Because a pendulum swings at a very regular rate, the best clocks of this kind lost only about fifteen seconds a day, which was a dramatic improvement."],
    ['lecturer', "Pendulum clocks, however, were useless on ships, where the motion of the waves upset them. This mattered enormously, because sailors could only work out their longitude, their position east or west, if they knew the exact time at their home port. An English carpenter, John Harrison, spent most of his life trying to solve this problem. His first designs were large and heavy, but his fourth, completed in seventeen fifty-nine, looked like a large pocket {{watch|36}}. On a voyage to Jamaica, it lost only about five seconds in more than two months at sea."],
    ['lecturer', "On land, it was the railways that changed how people thought about time. Before then, each town kept its own local time, based on the position of the sun, so noon in Bristol was about ten minutes later than noon in London. This made railway timetables very confusing. Some people believe that standard time was introduced by governments, but it was actually the railway companies that first adopted London time across their networks in the eighteen-forties. Later, in eighteen eighty-four, an international conference in Washington chose Greenwich as the starting point for the world’s time {{zones|37}}."],
    ['lecturer', "In the twentieth century, mechanical clocks were gradually replaced by quartz. When an electric current passes through a tiny piece of quartz crystal, it vibrates at a very regular rate, and these vibrations can be counted to measure time. The first quartz clock was built in nineteen twenty-seven, and quartz watches appeared in the late nineteen-sixties. Today almost all watches use quartz, because they are cheap to make and extremely {{accurate|38}}."],
    ['lecturer', "The most precise clocks of all, however, are atomic clocks. The first reliable one was built in London in nineteen fifty-five. These clocks measure the natural vibrations of atoms, and since nineteen sixty-seven, the second itself has been officially defined using the {{caesium|39}} atom. The best atomic clocks today would lose less than a second in millions of years."],
    ['lecturer', "You might wonder why anyone needs such precision. The answer is that modern life depends on it. Satellite {{navigation|40}} systems, for example, work by measuring how long signals take to travel from satellites to a receiver, and an error of just a millionth of a second would place you about three hundred metres from where you really are."],
    ['lecturer', "In the next lecture, we'll look at how our bodies keep time, through what are known as biological clocks."],
    ['narrator', 'That is the end of Part 4. That is the end of the listening test.'],
  ];

  // Questions. kind: gap | mcq | two | match | map
  const LIMIT_WN = 'ONE WORD AND/OR A NUMBER';
  const Q = {
    1:  { kind: 'gap', ans: ['pemberton'], limit: 'wn' },
    2:  { kind: 'gap', ans: ['46', 'forty-six'], limit: 'wn' },
    3:  { kind: 'gap', ans: ['wb72rq'], limit: null, nospace: true, key: 'WB7 2RQ' },
    4:  { kind: 'gap', ans: ['nurse'], limit: 'wn' },
    5:  { kind: 'gap', ans: ['evenings', 'evening'], limit: 'wn' },
    6:  { kind: 'gap', ans: ['newspaper', 'paper'], limit: 'wn' },
    7:  { kind: 'gap', ans: ['25', 'twenty-five'], limit: 'wn' },
    8:  { kind: 'gap', ans: ['32.50', '32.5'], limit: 'wn', key: '32.50' },
    9:  { kind: 'gap', ans: ['yoga'], limit: 'wn' },
    10: { kind: 'gap', ans: ['brother'], limit: 'wn' },
    11: { kind: 'mcq', q: 'The lake in Haddon Park was originally', opts: { A: 'part of a dairy farm.', B: 'a gravel quarry.', C: 'a private fishing lake.' }, ans: 'B' },
    12: { kind: 'mcq', q: 'What is new at the park this year?', opts: { A: 'electric bike hire', B: 'guided night walks', C: 'a refurbished visitor centre' }, ans: 'A' },
    13: { kind: 'mcq', q: 'What is the rule for dogs in the park?', opts: { A: 'They are allowed on the main path only.', B: 'They must be on a lead everywhere.', C: 'They are not allowed near the lake.' }, ans: 'B' },
    14: { kind: 'mcq', q: 'Between March and June, visitors are asked to', opts: { A: 'take their litter home.', B: 'avoid feeding the ducks.', C: 'stay on the marked paths.' }, ans: 'C' },
    15: { kind: 'map', label: 'Gift shop', ans: 'A' },
    16: { kind: 'map', label: 'Café', ans: 'H' },
    17: { kind: 'map', label: 'Picnic area', ans: 'B' },
    18: { kind: 'map', label: 'Bird hide', ans: 'C' },
    19: { kind: 'map', label: 'Adventure playground', ans: 'G' },
    20: { kind: 'map', label: 'First aid point', ans: 'F' },
    21: { kind: 'two', pair: [21, 22], ans: ['B', 'E'] },
    22: { kind: 'two', pair: [21, 22], ans: ['B', 'E'] },
    23: { kind: 'mcq', q: 'What does the tutor suggest the students do with their food waste data?', opts: { A: 'present it as a graph', B: 'collect data for a longer period', C: 'compare it with data from another canteen' }, ans: 'C' },
    24: { kind: 'mcq', q: 'Jake believes the main reason for food waste is that', opts: { A: 'portions are too large.', B: 'students dislike the food.', C: 'students leave when lectures run late.' }, ans: 'A' },
    25: { kind: 'mcq', q: 'What will the students propose?', opts: { A: 'using smaller plates', B: 'charging customers by weight', C: 'offering different portion sizes' }, ans: 'C' },
    26: { kind: 'mcq', q: 'The tutor advises the students to', opts: { A: 'shorten their introduction.', B: 'add more interview data.', C: 'practise the timing of their talk.' }, ans: 'A' },
    27: { kind: 'match', label: 'the canteen manager', ans: 'D' },
    28: { kind: 'match', label: 'the student union', ans: 'E' },
    29: { kind: 'match', label: 'the kitchen staff', ans: 'F' },
    30: { kind: 'match', label: 'the finance office', ans: 'A' },
    31: { kind: 'gap', ans: ['night'], limit: 'w' },
    32: { kind: 'gap', ans: ['temperature'], limit: 'w' },
    33: { kind: 'gap', ans: ['prayer', 'prayers'], limit: 'w' },
    34: { kind: 'gap', ans: ['bell'], limit: 'w' },
    35: { kind: 'gap', ans: ['pendulum'], limit: 'w' },
    36: { kind: 'gap', ans: ['watch'], limit: 'w' },
    37: { kind: 'gap', ans: ['zones'], limit: 'w' },
    38: { kind: 'gap', ans: ['accurate'], limit: 'w' },
    39: { kind: 'gap', ans: ['caesium', 'cesium'], limit: 'w', key: 'caesium' },
    40: { kind: 'gap', ans: ['navigation'], limit: 'w' },
  };
  const TWO_OPTS = { A: 'Too few members of staff responded.', B: 'Some questions were difficult to understand.', C: 'It took people too long to complete.', D: 'The online link did not work.', E: 'Many people did not answer every question.' };
  const MATCH_OPTS = { A: 'It would save money.', B: 'It would be difficult to organise.', C: 'It would reduce queues.', D: 'It should be tested first.', E: 'It would be popular with students.', F: 'It would require extra staff.' };
  const MAP_LETTERS = 'ABCDEFGHI'.split('');

  const gap = n => `<span class="gap" data-q="${n}"><span class="n">${n}</span><input type="text" id="q${n}" data-q="${n}" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Question ${n}"></span>`;
  const mcq = n => { const q = Q[n]; return `<div class="mcq" data-q="${n}" role="radiogroup" aria-labelledby="ql${n}"><div class="q"><span class="qn">${n}</span><span id="ql${n}">${q.q}</span></div>${Object.entries(q.opts).map(([k, v]) => `<label data-opt="${k}"><input type="radio" name="q${n}" value="${k}" data-q="${n}"><b>${k}</b><span>${v}</span></label>`).join('')}</div>`; };
  const sel = (n, letters) => `<select id="q${n}" data-q="${n}" aria-label="Question ${n}"><option value="">–</option>${letters.map(l => `<option>${l}</option>`).join('')}</select>`;

  const MAP_SVG = `<svg class="map" viewBox="0 0 600 430" role="img" aria-label="Map of Haddon Park with locations labelled A to I">
    <rect class="wood" x="400" y="30" width="180" height="120" rx="14"/>
    <text x="490" y="62" text-anchor="middle" class="small">Woodland</text>
    <ellipse class="lake" cx="150" cy="170" rx="118" ry="72"/>
    <text x="150" y="176" text-anchor="middle" class="small">Lake</text>
    <path class="path" d="M300 410 L300 40"/>
    <path class="path" d="M300 230 L565 230"/>
    <rect class="bldg" x="30" y="325" width="150" height="70" rx="3"/>
    <text x="105" y="365" text-anchor="middle" class="small">Car park</text>
    <rect class="bldg" x="322" y="318" width="96" height="52" rx="3"/>
    <text x="370" y="341" text-anchor="middle" class="small">Visitor</text>
    <text x="370" y="356" text-anchor="middle" class="small">centre</text>
    <text x="300" y="426" text-anchor="middle" class="small">▲ ENTRANCE (you are here)</text>
    <text x="318" y="52" class="small" opacity=".7">main path</text>
    <text x="470" y="250" class="small" opacity=".7">east path</text>
    <g transform="translate(560,40)"><text x="0" y="0" text-anchor="middle" class="small">N</text><path d="M0 6 L0 26" stroke="currentColor" stroke-width="2" style="stroke:var(--ink)"/></g>
    ${[['A',240,365],['B',150,262],['C',48,112],['D',250,62],['E',345,190],['F',440,198],['G',545,268],['H',345,272],['I',520,370]].map(([l,x,y]) => `<g class="letter"><circle cx="${x}" cy="${y}" r="14"/><text x="${x}" y="${y + 5}" text-anchor="middle">${l}</text></g>`).join('')}
  </svg>`;

  const PAPER = `
  <section class="part" id="part-1" data-part="1">
    <div class="part-head"><h2>Part 1</h2><span class="label">Questions 1–10</span></div>
    <div class="qblock">
      <h3>Questions 1–10</h3>
      <p class="instr">Complete the form below. Write <b>${LIMIT_WN}</b> for each answer.</p>
      <div class="form">
        <h4>Greenfield Sports Club · Membership application</h4>
        <div class="line"><span>Type of membership:</span><span class="example">Example: <u>individual</u></span></div>
        <div class="line"><span>Name:</span><span>Laura ${gap(1)}</span></div>
        <div class="line"><span>Address:</span><span>${gap(2)} Marsh Road, Westbury</span></div>
        <div class="line"><span>Postcode:</span><span>${gap(3)}</span></div>
        <div class="line"><span>Occupation:</span><span>${gap(4)}</span></div>
        <div class="line"><span>Usually visits:</span><span>weekday ${gap(5)}</span></div>
        <div class="line"><span>Heard about the club from:</span><span>an advert in the ${gap(6)}</span></div>
        <div class="sub">Fees</div>
        <div class="line"><span>Joining fee:</span><span>£ ${gap(7)} (special offer)</span></div>
        <div class="line"><span>Monthly payment:</span><span>£ ${gap(8)} (with discount)</span></div>
        <div class="sub">Facilities and classes</div>
        <div class="line"><span>Main interest:</span><span>swimming pool</span></div>
        <div class="line"><span>Class:</span><span>${gap(9)} (Tuesday and Thursday)</span></div>
        <div class="line"><span>Guest pass for her:</span><span>${gap(10)}</span></div>
      </div>
    </div>
  </section>

  <section class="part" id="part-2" data-part="2" hidden>
    <div class="part-head"><h2>Part 2</h2><span class="label">Questions 11–20</span></div>
    <div class="qblock">
      <h3>Questions 11–14</h3>
      <p class="instr">Choose the correct letter, <b>A, B or C</b>.</p>
      ${[11, 12, 13, 14].map(mcq).join('')}
    </div>
    <div class="qblock">
      <h3>Questions 15–20</h3>
      <p class="instr">Label the map below. Write the correct letter, <b>A–I</b>, next to Questions 15–20.</p>
      <div class="mapwrap">
        ${MAP_SVG}
        <div class="maptable">
          <span class="label">Haddon Park</span>
          ${[15, 16, 17, 18, 19, 20].map(n => `<div class="match-row" data-q="${n}"><span class="qn">${n}</span><span class="who">${Q[n].label}</span>${sel(n, MAP_LETTERS)}</div>`).join('')}
        </div>
      </div>
    </div>
  </section>

  <section class="part" id="part-3" data-part="3" hidden>
    <div class="part-head"><h2>Part 3</h2><span class="label">Questions 21–30</span></div>
    <div class="qblock">
      <h3>Questions 21 and 22</h3>
      <p class="instr">Choose <b>TWO</b> letters, <b>A–E</b>.</p>
      <div class="mcq" data-q="21" data-two="1">
        <div class="q"><span class="qn">21–22</span><span>Which <b>TWO</b> problems did the students have with their questionnaire?</span></div>
        ${Object.entries(TWO_OPTS).map(([k, v]) => `<label data-opt="${k}"><input type="checkbox" value="${k}" data-two="1"><b>${k}</b><span>${v}</span></label>`).join('')}
      </div>
    </div>
    <div class="qblock">
      <h3>Questions 23–26</h3>
      <p class="instr">Choose the correct letter, <b>A, B or C</b>.</p>
      ${[23, 24, 25, 26].map(mcq).join('')}
    </div>
    <div class="qblock">
      <h3>Questions 27–30</h3>
      <p class="instr">What opinion did each of the following give about the students’ proposal? Choose <b>FOUR</b> answers from the box and write the correct letter, <b>A–F</b>, next to Questions 27–30.</p>
      <div class="boxlist"><span class="label" style="grid-column:1/-1">Opinions</span>${Object.entries(MATCH_OPTS).map(([k, v]) => `<b>${k}</b><span>${v}</span>`).join('')}</div>
      ${[27, 28, 29, 30].map(n => `<div class="match-row" data-q="${n}"><span class="qn">${n}</span><span class="who">${Q[n].label}</span>${sel(n, Object.keys(MATCH_OPTS))}</div>`).join('')}
    </div>
  </section>

  <section class="part" id="part-4" data-part="4" hidden>
    <div class="part-head"><h2>Part 4</h2><span class="label">Questions 31–40</span></div>
    <div class="qblock">
      <h3>Questions 31–40</h3>
      <p class="instr">Complete the notes below. Write <b>ONE WORD ONLY</b> for each answer.</p>
      <div class="notes">
        <h4>The history of timekeeping</h4>
        <span class="h">Early devices</span>
        <ul>
          <li>Sundials cannot be used at ${gap(31)} or on cloudy days.</li>
          <li>Water clocks were inaccurate because the flow changed with ${gap(32)}.</li>
        </ul>
        <span class="h">Mechanical clocks</span>
        <ul>
          <li>Many early clocks were made for monasteries, to show the times for ${gap(33)}.</li>
          <li>The first clocks had no face and simply rang a ${gap(34)}.</li>
          <li>1656: Huygens built a clock controlled by a ${gap(35)}.</li>
          <li>Harrison’s fourth design looked like a large pocket ${gap(36)}.</li>
        </ul>
        <span class="h">Standard time</span>
        <ul>
          <li>1884: Greenwich chosen as the basis for world time ${gap(37)}.</li>
        </ul>
        <span class="h">Modern clocks</span>
        <ul>
          <li>Quartz watches are cheap and very ${gap(38)}.</li>
          <li>The second is now defined using the ${gap(39)} atom.</li>
          <li>Precise time is essential for satellite ${gap(40)}.</li>
        </ul>
      </div>
    </div>
  </section>`;

  // Part changes and reading/checking pauses in the recording (seconds)
  const TIMELINE = [{"t":1.0,"focus":1},{"t":35.89,"pause":30,"label":"Reading time · Questions 1–5"},{"t":65.89,"speech":1,"part":1},{"t":218.77,"pause":30,"label":"Reading time · Questions 6–10"},{"t":248.77,"speech":1,"part":1},{"t":347.13,"pause":30,"label":"Checking time · Part 1"},{"t":377.13,"focus":2},{"t":377.13,"speech":1,"part":2},{"t":390.99,"pause":30,"label":"Reading time · Questions 11–14"},{"t":420.99,"speech":1,"part":2},{"t":521.52,"pause":30,"label":"Reading time · Questions 15–20"},{"t":551.52,"speech":1,"part":2},{"t":648.3,"pause":30,"label":"Checking time · Part 2"},{"t":678.3,"focus":3},{"t":678.3,"speech":1,"part":3},{"t":696.32,"pause":30,"label":"Reading time · Questions 21–26"},{"t":726.32,"speech":1,"part":3},{"t":887.66,"pause":30,"label":"Reading time · Questions 27–30"},{"t":917.66,"speech":1,"part":3},{"t":994.31,"pause":30,"label":"Checking time · Part 3"},{"t":1024.31,"focus":4},{"t":1024.31,"speech":1,"part":4},{"t":1035.97,"pause":45,"label":"Reading time · Questions 31–40"},{"t":1080.97,"speech":1,"part":4}];
  const partNames = { 1: 'Part 1 · Joining a sports club', 2: 'Part 2 · Haddon Park tour', 3: 'Part 3 · Food waste project', 4: 'Part 4 · The history of timekeeping' };
  window.LISTENING_TEST = { num: 1, audio: 'audio/listening-test1.mp3', minutes: 22, mb: 11, roles: ROLES, script: SCRIPT, Q, paper: PAPER, timeline: TIMELINE, partNames };
})();
