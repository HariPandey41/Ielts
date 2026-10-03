// IELTS Listening · Practice Test 4 — content only. The exam engine is assets/listening-exam.js.
(() => {
  'use strict';
  // Speakers: label for the transcript, voice for tools/make_listening_audio.py
  const ROLES = {
    narrator: { label: 'Narrator', voice: 'bm_george', speed: 0.92, lang: 'en-gb' },
    kirsty:   { label: 'Kirsty', voice: 'bf_emma', speed: 0.98, lang: 'en-gb' },
    tom:      { label: 'Tom', voice: 'am_michael', speed: 0.98, lang: 'en-us' },
    ruth:     { label: 'Ruth Hall', voice: 'bf_isabella', speed: 0.96, lang: 'en-gb' },
    grant:    { label: 'Dr Grant', voice: 'bm_fable', speed: 0.95, lang: 'en-gb' },
    leo:      { label: 'Leo', voice: 'am_eric', speed: 1.0, lang: 'en-us' },
    aisha:    { label: 'Aisha', voice: 'af_sarah', speed: 0.98, lang: 'en-us' },
    lecturer: { label: 'Lecturer', voice: 'af_heart', speed: 0.95, lang: 'en-us' },
  };

  // Script: [role, text] lines, or ['pause', seconds, label], or ['focus', part]
  // {{text|n}} marks where the answer to question n is heard.
  const SCRIPT = [
    ['focus', 1],
    ['narrator', 'IELTS Listening. Practice Test 4.'],
    ['narrator', 'In the test, you will hear a number of different recordings and you will have to answer questions on what you hear. There will be time for you to read the instructions and questions, and you will have a chance to check your work. All the recordings will be played once only. The test is in four parts.'],
    ['narrator', 'Now turn to Part 1.'],
    ['narrator', 'Part 1. You will hear a man phoning a language school to enrol on a course. First, you have some time to look at questions 1 to 5.'],
    ['pause', 30, 'Reading time · Questions 1–5'],
    ['narrator', 'You will see that there is an example that has been done for you. On this occasion only, the conversation relating to this will be played first.'],
    ['kirsty', 'Good morning, Westbridge Language School, Kirsty speaking.'],
    ['tom', "Oh, hello. I'm calling about your evening courses. I was thinking about French, but actually I'd like to enrol on one of your Italian courses."],
    ['kirsty', "Italian, lovely. Let me just open a form for you."],
    ['narrator', "The man wants to study Italian, so 'Italian' has been written in the space. Now we shall begin. You should answer the questions as you listen, because you will not hear the recording a second time. Listen carefully and answer questions 1 to 5."],
    ['kirsty', 'Good morning, Westbridge Language School, Kirsty speaking.'],
    ['tom', "Oh, hello. I'm calling about your evening courses. I was thinking about French, but actually I'd like to enrol on one of your Italian courses."],
    ['kirsty', "Italian, lovely. Let me just open a form for you. Can I have your name, please?"],
    ['tom', "Yes, it's Tom Fenwick."],
    ['kirsty', 'And how do you spell your surname?'],
    ['tom', "{{F, E, N, W, I, C, K|1}}."],
    ['kirsty', "Thank you. Now, have you studied Italian before? We need to put you in the right level."],
    ['tom', "I did a bit at school, a long time ago, so I assumed I'd be intermediate. But I did the placement test on your website last night, and it put me in {{elementary|2}}."],
    ['kirsty', "Then we'll go with that. The test is usually quite accurate. Now, the elementary group meets twice a week. There's a Monday and Thursday group, but Thursday is completely full, I'm afraid. The other option is Tuesday and {{Wednesday|3}}."],
    ['tom', "I can't do Mondays anyway, so Tuesday and Wednesday would suit me."],
    ['kirsty', "Good. Classes run from seven until nine. The course was due to start on the fifth of September, but the teacher is away that week, so the first class will now be on the {{twelfth|4}}."],
    ['tom', 'The twelfth of September. Fine. How big are the classes?'],
    ['kirsty', "We used to have up to twelve students in a group, but we found that was too many for speaking practice, so now the maximum is {{eight|5}}."],
    ['tom', "That sounds much better."],
    ['narrator', 'Before you hear the rest of the conversation, you have some time to look at questions 6 to 10.'],
    ['pause', 30, 'Reading time · Questions 6–10'],
    ['narrator', 'Now listen and answer questions 6 to 10.'],
    ['tom', 'Can I ask about the cost?'],
    ['kirsty', "Of course. The full fee for the term is three hundred and eighty pounds. But if you enrol before the end of this month, there's an early booking reduction, so you'd pay {{three hundred and forty|6}}."],
    ['tom', "Great, I'll do it today then. Does that include books?"],
    ['kirsty', "The coursebook isn't included in the fee, but you don't need to buy it. You can borrow a copy from the school {{library|7}}. It's on the ground floor, next to reception."],
    ['tom', "That's helpful. Are there any other activities for students?"],
    ['kirsty', "Yes, there's a free conversation class every Friday. There's an evening one, but that's for advanced students. Yours would be the one on Friday {{lunchtime|8}}, from twelve thirty to one thirty."],
    ['tom', "I might be able to get there from work. And is there anything I need to bring to the first class?"],
    ['kirsty', "You'll need to show some photo ID, for our records, so please bring your {{passport|9}}. We used to ask for two passport photographs as well, but we don't need those any more. Your driving licence won't work, by the way, because the system only accepts passports."],
    ['tom', 'Okay, passport it is.'],
    ['kirsty', "And one last question. How did you find out about us? We've been running some adverts on the local radio."],
    ['tom', "I have heard those, but I first heard about the school from a {{colleague|10}}. She did your Spanish course last year and really enjoyed it."],
    ['kirsty', "Oh, that's nice to hear. Right, Tom, I'll email you the details now."],
    ['narrator', 'That is the end of Part 1. You now have half a minute to check your answers to Part 1.'],
    ['pause', 30, 'Checking time · Part 1'],

    ['focus', 2],
    ['narrator', 'Now turn to Part 2.'],
    ['narrator', 'Part 2. You will hear the manager of a new city cycling scheme talking on a local radio programme. First, you have some time to look at questions 11 to 16.'],
    ['pause', 30, 'Reading time · Questions 11–16'],
    ['narrator', 'Now listen carefully and answer questions 11 to 16.'],
    ['ruth', "Thanks for having me on the programme. I'm Ruth Hall, and I manage Greenford City Bikes, the bike hire scheme that launched last week. I'd like to explain how it works."],
    ['ruth', "First, why did the council set it up? A lot of people assume it was mainly about air pollution, and cleaner air will certainly be a benefit. Tourists will use the bikes too, of course. But the main reason the council agreed to fund the scheme was {{to reduce the traffic congestion in the city centre|11}}, which has got much worse in recent years."],
    ['ruth', "We originally ordered three hundred bikes. Then we received a government grant, which allowed us to increase that, and {{we've launched with four hundred and fifty|12}}. Our target is six hundred by the end of next year."],
    ['ruth', "So how do you use a bike? During the trial last year, people used a membership card, but we've stopped issuing those. And although there are machines at some stations, those are only for information. {{Everything is now done through our phone app|13}}: you scan the code on the bike and it unlocks."],
    ['ruth', "Annual membership costs sixty pounds. We don't provide helmets, and you'll need to arrange your own insurance if you want it. What membership does give you is {{the first thirty minutes of every journey free|14}}, which covers most trips across the city."],
    ['ruth', "Now, a few pieces of advice for new users. Please don't ride on the pavement, even for short distances. You can return a bike to any station, not just the one where you picked it up. Before you set off, {{take a moment to check the brakes and tyres|15}}. And if you do find a problem, {{please report it through the app|16}}, so our mechanics can collect the bike."],
    ['narrator', 'Before you hear the rest of the talk, you have some time to look at questions 17 to 20.'],
    ['pause', 30, 'Reading time · Questions 17–20'],
    ['narrator', 'Now listen and answer questions 17 to 20.'],
    ['ruth', "Let me tell you about some of our docking stations. There's one outside the Central Library. It's not a big station, but {{it has a small repair point|17}}, where you can pump up your tyres or adjust the seat."],
    ['ruth', "The station at the railway station is our largest, {{with sixty bikes|18}}. You might expect it to fill up in the mornings, with all the commuters arriving, but in fact it's the opposite. People take bikes away from there to get to work. The station that's usually full in the morning is the one outside the hospital."],
    ['ruth', "Riverside Park was one of the most popular stations during the trial. However, {{it's closed for the next two weeks|19}}, while the path along the river is resurfaced. A new cycle lane is planned along that stretch of the river, but it won't open until the spring."],
    ['ruth', "And finally, the University campus. That station is where {{we're trialling our first electric bikes|20}}. If they're successful, we'll introduce them across the city."],
    ['ruth', "So do download the app and give it a try."],
    ['narrator', 'That is the end of Part 2. You now have half a minute to check your answers to Part 2.'],
    ['pause', 30, 'Checking time · Part 2'],

    ['focus', 3],
    ['narrator', 'Now turn to Part 3.'],
    ['narrator', 'Part 3. You will hear two students, Leo and Aisha, discussing their group project on tourism with their tutor, Dr Grant. First, you have some time to look at questions 21 to 25.'],
    ['pause', 30, 'Reading time · Questions 21–25'],
    ['narrator', 'Now listen carefully and answer questions 21 to 25.'],
    ['grant', "Come in, Leo, Aisha. So, your project is on the effects of tourism on Portmere. Remind me why you chose that town."],
    ['aisha', "Well, my grandparents live there, so I know it quite well, but that's not really why. And the data isn't brilliant, to be honest. It was more that {{visitor numbers have doubled in the last five years|21}}, so we thought the changes would be easy to see."],
    ['grant', 'Good. And you interviewed some residents. What came out of that?'],
    ['leo', "The thing that surprised us most was that {{the majority of people were in favour of tourism|22}}. We expected a lot of complaints. People did mention that young people are leaving the town, but we knew that already. And the business owners talked about how quiet it is in winter, which was what we'd predicted."],
    ['grant', "Interesting. Now, I've looked at your questionnaire. The length is fine, and I'm glad you recorded people's ages. My concern is that {{you collected all your responses in August|23}}, at the height of the season. You may be hearing mainly from people who work in tourism and are doing well out of it."],
    ['aisha', "That's true. We could add a few more in the autumn."],
    ['grant', 'What about the housing data? You were going to look at house prices.'],
    ['leo', "We've got the figures. They're up to date, they're from last year, and they were free from the government website. The problem is that {{they cover the whole district, not just the town|24}}, so it's hard to see what's happening in Portmere itself."],
    ['grant', "That's a common problem. You might find more local figures from estate agents. So, what's your next step?"],
    ['aisha', "We'd thought about going back to the tourist office, but we've already interviewed them twice."],
    ['grant', "I'd suggest something else. You need something to compare Portmere with."],
    ['leo', "Right. So {{we could visit another town on the coast where tourism hasn't grown|25}}, and see how it's different."],
    ['grant', 'Exactly.'],
    ['narrator', 'Before you hear the rest of the discussion, you have some time to look at questions 26 to 30.'],
    ['pause', 30, 'Reading time · Questions 26–30'],
    ['narrator', 'Now listen and answer questions 26 to 30.'],
    ['grant', "Let's talk about how you're going to put the report together. What will you write first?"],
    ['aisha', "We thought we'd leave the introduction until the end, once we know what we're saying. So we'll start with the {{methodology|26}} section, while the details are fresh."],
    ['grant', 'Sensible. And the results?'],
    ['leo', "We've found out where all the holiday rental homes are, so we want to draw a {{map|27}} to show where they're concentrated. Most are in the old streets around the harbour."],
    ['aisha', "And the local museum has given us some old {{photographs|28}} of the harbour from the nineteen seventies, so we can show what it looked like before and after."],
    ['grant', "That would work well. What about the figures for second homes?"],
    ['leo', "We'll work out the percentage of homes in the town that are second homes, and then compare that with the national {{average|29}}. We expect it to be much higher."],
    ['grant', 'And finally, will the findings go anywhere?'],
    ['aisha', "The local newspaper asked if they could write a story about it, but we'd rather wait. What we're going to do first is present our findings to the town {{council|30}} at their meeting in May."],
    ['grant', 'Excellent. I look forward to reading it.'],
    ['narrator', 'That is the end of Part 3. You now have half a minute to check your answers to Part 3.'],
    ['pause', 30, 'Checking time · Part 3'],

    ['focus', 4],
    ['narrator', 'Now turn to Part 4.'],
    ['narrator', 'Part 4. You will hear a lecture about the history of paper. First, you have some time to look at questions 31 to 40.'],
    ['pause', 45, 'Reading time · Questions 31–40'],
    ['narrator', 'Now listen carefully and answer questions 31 to 40.'],
    ['lecturer', "Good morning. Today I'm going to talk about something we all take for granted: paper. I'll look at how it was invented, how it spread around the world, and some of the problems it has caused."],
    ['lecturer', "Before paper, people wrote on many different materials. The ancient Egyptians used papyrus, which was made from a plant that grew along the Nile. In medieval Europe, the most common writing material was parchment. People sometimes think parchment came from plants too, but it was actually made from animal {{skins|31}}, which made it very expensive."],
    ['lecturer', "Paper itself was invented in China. The traditional date is around one hundred and five AD, and the invention is usually credited to a man called Cai Lun. He wasn't a craftsman, as you might expect, but an official at the imperial {{court|32}}, and he presented the method to the emperor. The earliest Chinese paper was made from a mixture of tree bark, hemp and old fishing {{nets|33}}, which were beaten into a pulp, spread on a screen and left to dry."],
    ['lecturer', "The Chinese found many uses for paper. It was used for writing, of course, but in fact some of the earliest paper we have found was used for {{wrapping|34}}, for example to protect medicines. Much later, the Chinese also became the first to use paper money."],
    ['lecturer', "For centuries, the Chinese kept the method secret. According to tradition, it reached the Islamic world in seven hundred and fifty-one, after a battle near Samarkand, in Central Asia, when some Chinese {{prisoners|35}} revealed how paper was made. Whether or not that story is true, paper mills soon appeared in Baghdad. The mulberry trees used in China didn't grow there, so the paper makers used {{linen|36}} rags instead, and that became the standard material for the next thousand years."],
    ['lecturer', "Paper reached Europe through Spain, where the first mills were built in the twelfth century. In Italy, the town of Fabriano became famous for its paper, and its mills introduced {{watermarks|37}}, faint designs you can see when you hold the sheet up to the light, so that buyers could tell who had made it. But demand really took off in the fifteenth century, after the invention of the printing {{press|38}}, which needed huge quantities of paper."],
    ['lecturer', "This demand eventually caused a crisis. By the nineteenth century, there simply weren't enough rags to go round. After many experiments, paper makers found that they could make paper from {{wood|39}}, which was cheap and plentiful, and the price of paper fell dramatically."],
    ['lecturer', "However, this new paper had a serious weakness. The chemicals used to process it left it containing {{acid|40}}, which slowly breaks down the fibres. That's why many books from the late nineteenth century have turned yellow and are falling apart, while some much older books are in perfect condition. Libraries now spend a great deal of money treating these books to preserve them."],
    ['lecturer', "Next week, we'll look at the future of paper in a digital age."],
    ['narrator', 'That is the end of Part 4. That is the end of the listening test.'],
  ];

  // Questions. kind: gap | mcq | two | match
  const LIMIT_WN = 'ONE WORD AND/OR A NUMBER';
  const Q = {
    1:  { kind: 'gap', ans: ['fenwick'], limit: 'wn', key: 'Fenwick' },
    2:  { kind: 'gap', ans: ['elementary'], limit: 'wn' },
    3:  { kind: 'gap', ans: ['wednesday', 'wednesdays'], limit: 'wn', key: 'Wednesday' },
    4:  { kind: 'gap', ans: ['12', '12th', 'twelfth', 'twelve'], limit: 'wn', key: '12th' },
    5:  { kind: 'gap', ans: ['8', 'eight'], limit: 'wn' },
    6:  { kind: 'gap', ans: ['340'], limit: 'wn' },
    7:  { kind: 'gap', ans: ['library'], limit: 'wn' },
    8:  { kind: 'gap', ans: ['lunchtime', 'lunchtimes', 'lunch'], limit: 'wn' },
    9:  { kind: 'gap', ans: ['passport'], limit: 'wn' },
    10: { kind: 'gap', ans: ['colleague'], limit: 'wn' },
    11: { kind: 'mcq', q: 'The main reason the council funded the scheme was to', opts: { A: 'reduce traffic congestion.', B: 'improve air quality.', C: 'attract more tourists.' }, ans: 'A' },
    12: { kind: 'mcq', q: 'How many bikes does the scheme have now?', opts: { A: '300', B: '600', C: '450' }, ans: 'C' },
    13: { kind: 'mcq', q: 'Users unlock a bike by', opts: { A: 'using a membership card.', B: 'scanning a code with a phone app.', C: 'paying at a machine at the station.' }, ans: 'B' },
    14: { kind: 'mcq', q: 'Annual membership includes', opts: { A: 'the loan of a helmet.', B: 'insurance.', C: 'free use for the first half hour of each trip.' }, ans: 'C' },
    15: { kind: 'two', pair: [15, 16], ans: ['A', 'D'] },
    16: { kind: 'two', pair: [15, 16], ans: ['A', 'D'] },
    17: { kind: 'match', label: 'Central Library', ans: 'E' },
    18: { kind: 'match', label: 'Railway station', ans: 'A' },
    19: { kind: 'match', label: 'Riverside Park', ans: 'B' },
    20: { kind: 'match', label: 'University campus', ans: 'C' },
    21: { kind: 'mcq', q: 'Why did the students choose Portmere for their project?', opts: { A: 'Aisha grew up there.', B: 'Tourism there has grown quickly.', C: 'A lot of data was available.' }, ans: 'B' },
    22: { kind: 'mcq', q: 'What surprised the students in their interviews with residents?', opts: { A: 'Most people were positive about tourism.', B: 'Young people were leaving the town.', C: 'Business owners complained about the winter.' }, ans: 'A' },
    23: { kind: 'mcq', q: 'What is the tutor’s criticism of their questionnaire?', opts: { A: 'It was too long.', B: 'It did not record people’s ages.', C: 'It was only carried out in one month.' }, ans: 'C' },
    24: { kind: 'mcq', q: 'What is the problem with the house price data?', opts: { A: 'It is out of date.', B: 'It covers too large an area.', C: 'It was expensive to obtain.' }, ans: 'B' },
    25: { kind: 'mcq', q: 'What will the students do next?', opts: { A: 'visit a different town', B: 'interview the tourist office again', C: 'contact some estate agents' }, ans: 'A' },
    26: { kind: 'gap', ans: ['methodology'], limit: 'w' },
    27: { kind: 'gap', ans: ['map'], limit: 'w' },
    28: { kind: 'gap', ans: ['photographs', 'photos'], limit: 'w' },
    29: { kind: 'gap', ans: ['average'], limit: 'w' },
    30: { kind: 'gap', ans: ['council'], limit: 'w' },
    31: { kind: 'gap', ans: ['skins', 'skin'], limit: 'w' },
    32: { kind: 'gap', ans: ['court'], limit: 'w' },
    33: { kind: 'gap', ans: ['nets'], limit: 'w' },
    34: { kind: 'gap', ans: ['wrapping'], limit: 'w' },
    35: { kind: 'gap', ans: ['prisoners'], limit: 'w' },
    36: { kind: 'gap', ans: ['linen'], limit: 'w' },
    37: { kind: 'gap', ans: ['watermarks'], limit: 'w' },
    38: { kind: 'gap', ans: ['press'], limit: 'w' },
    39: { kind: 'gap', ans: ['wood'], limit: 'w' },
    40: { kind: 'gap', ans: ['acid'], limit: 'w' },
  };
  const TWO_OPTS = { A: 'check the brakes and tyres', B: 'ride on the pavement for short distances', C: 'return the bike to the same station', D: 'report any problems through the app', E: 'buy their own insurance' };
  const STATIONS = { A: 'has the largest number of bikes', B: 'is temporarily closed', C: 'has electric bikes', D: 'is usually full in the morning', E: 'has a repair point', F: 'is next to a new cycle lane' };

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
        <h4>Westbridge Language School · Enrolment form</h4>
        <div class="line"><span>Language:</span><span class="example">Example: <u>Italian</u></span></div>
        <div class="line"><span>Name:</span><span>Tom ${gap(1)}</span></div>
        <div class="line"><span>Level:</span><span>${gap(2)}</span></div>
        <div class="line"><span>Class days:</span><span>Tuesday and ${gap(3)}, 7–9 pm</span></div>
        <div class="line"><span>First class:</span><span>${gap(4)} September</span></div>
        <div class="line"><span>Maximum class size:</span><span>${gap(5)} students</span></div>
        <div class="sub">Other information</div>
        <div class="line"><span>Fee (early booking):</span><span>£ ${gap(6)}</span></div>
        <div class="line"><span>Coursebook:</span><span>borrow from the school ${gap(7)}</span></div>
        <div class="line"><span>Free extra:</span><span>conversation class on Friday ${gap(8)}</span></div>
        <div class="line"><span>Bring to first class:</span><span>${gap(9)} (photo ID)</span></div>
        <div class="line"><span>Heard about school from:</span><span>a ${gap(10)}</span></div>
      </div>
    </div>
  </section>

  <section class="part" id="part-2" data-part="2" hidden>
    <div class="part-head"><h2>Part 2</h2><span class="label">Questions 11–20</span></div>
    <div class="qblock">
      <h3>Questions 11–14</h3>
      <p class="instr">Choose the correct letter, <b>A, B or C</b>.</p>
      <p class="instr"><b>Greenford City Bikes</b></p>
      ${[11, 12, 13, 14].map(mcq).join('')}
    </div>
    <div class="qblock">
      <h3>Questions 15 and 16</h3>
      <p class="instr">Choose <b>TWO</b> letters, <b>A–E</b>.</p>
      ${twoBlock(15, 'Which <b>TWO</b> things does Ruth advise new users to do?', TWO_OPTS)}
    </div>
    <div class="qblock">
      <h3>Questions 17–20</h3>
      <p class="instr">What does Ruth say about each docking station? Choose <b>FOUR</b> answers from the box and write the correct letter, <b>A–F</b>, next to Questions 17–20.</p>
      ${box('Docking stations', STATIONS)}
      ${matchRows([17, 18, 19, 20], STATIONS)}
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
      <p class="instr">Complete the notes below. Write <b>ONE WORD ONLY</b> for each answer.</p>
      <div class="notes">
        <h4>Plan for the Portmere report</h4>
        <ul>
          <li>Write the ${gap(26)} section first; leave the introduction until the end.</li>
          <li>Draw a ${gap(27)} showing where holiday rental homes are concentrated.</li>
          <li>Include old ${gap(28)} of the harbour from the museum.</li>
          <li>Compare the percentage of second homes with the national ${gap(29)}.</li>
          <li>Present the findings to the town ${gap(30)} in May.</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="part" id="part-4" data-part="4" hidden>
    <div class="part-head"><h2>Part 4</h2><span class="label">Questions 31–40</span></div>
    <div class="qblock">
      <h3>Questions 31–40</h3>
      <p class="instr">Complete the notes below. Write <b>ONE WORD ONLY</b> for each answer.</p>
      <div class="notes">
        <h4>The history of paper</h4>
        <span class="h">Before paper</span>
        <ul>
          <li>In medieval Europe, parchment was made from animal ${gap(31)}.</li>
        </ul>
        <span class="h">China</span>
        <ul>
          <li>Invention credited to Cai Lun, an official at the imperial ${gap(32)}.</li>
          <li>Made from bark, hemp and old fishing ${gap(33)}.</li>
          <li>Some of the earliest paper was used for ${gap(34)}, e.g. medicines.</li>
        </ul>
        <span class="h">Spread of paper</span>
        <ul>
          <li>751: method revealed near Samarkand by Chinese ${gap(35)}.</li>
          <li>Baghdad mills used ${gap(36)} rags instead of mulberry bark.</li>
          <li>Fabriano mills introduced ${gap(37)} to show who made the paper.</li>
          <li>Demand grew after the invention of the printing ${gap(38)}.</li>
        </ul>
        <span class="h">19th century</span>
        <ul>
          <li>Shortage of rags: paper made from ${gap(39)} instead.</li>
          <li>This paper contains ${gap(40)}, so it turns yellow and falls apart.</li>
        </ul>
      </div>
    </div>
  </section>`;

  // Part changes and reading/checking pauses in the recording (seconds) — filled in by tools/make_listening_audio.py
  const TIMELINE = [{"t":1.0,"focus":1},{"t":35.45,"pause":30,"label":"Reading time · Questions 1–5"},{"t":65.45,"speech":1,"part":1},{"t":200.19,"pause":30,"label":"Reading time · Questions 6–10"},{"t":230.19,"speech":1,"part":1},{"t":323.33,"pause":30,"label":"Checking time · Part 1"},{"t":353.33,"focus":2},{"t":353.33,"speech":1,"part":2},{"t":367.46,"pause":30,"label":"Reading time · Questions 11–16"},{"t":397.46,"speech":1,"part":2},{"t":500.15,"pause":30,"label":"Reading time · Questions 17–20"},{"t":530.15,"speech":1,"part":2},{"t":596.9,"pause":30,"label":"Checking time · Part 2"},{"t":626.9,"focus":3},{"t":626.9,"speech":1,"part":3},{"t":643.34,"pause":30,"label":"Reading time · Questions 21–25"},{"t":673.34,"speech":1,"part":3},{"t":786.86,"pause":30,"label":"Reading time · Questions 26–30"},{"t":816.86,"speech":1,"part":3},{"t":892.16,"pause":30,"label":"Checking time · Part 3"},{"t":922.16,"focus":4},{"t":922.16,"speech":1,"part":4},{"t":933.61,"pause":45,"label":"Reading time · Questions 31–40"},{"t":978.61,"speech":1,"part":4}];
  const partNames = { 1: 'Part 1 · Enrolling at a language school', 2: 'Part 2 · Greenford City Bikes', 3: 'Part 3 · Tourism project on Portmere', 4: 'Part 4 · The history of paper' };
  window.LISTENING_TEST = { num: 4, audio: 'audio/listening-test4.mp3', minutes: 19, mb: 9, roles: ROLES, script: SCRIPT, Q, paper: PAPER, timeline: TIMELINE, partNames };
})();
