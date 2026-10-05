// IELTS Listening · Premium Test 4 — content only. The exam engine is assets/listening-exam.js.
// Premium Exam (band 7–9 level): kept for the mock test, not listed with the practice tests.
// `why` explains each answer and the distractors; limit 3 = NO MORE THAN THREE WORDS (AND/OR A NUMBER).
(() => {
  'use strict';
  // Speakers: label for the transcript, voice for tools/make_listening_audio.py
  const ROLES = {
    narrator: { label: 'Narrator', voice: 'bm_george', speed: 0.94, lang: 'en-gb' },
    adviser:  { label: 'Adviser', voice: 'am_adam', speed: 1.02, lang: 'en-us' },
    grace:    { label: 'Grace', voice: 'bf_lily', speed: 1.03, lang: 'en-gb' },
    officer:  { label: 'Liaison officer', voice: 'bm_lewis', speed: 1.02, lang: 'en-gb' },
    iqbal:    { label: 'Dr Iqbal', voice: 'bf_emma', speed: 1.0, lang: 'en-gb' },
    rosa:     { label: 'Rosa', voice: 'af_kore', speed: 1.03, lang: 'en-us' },
    ethan:    { label: 'Ethan', voice: 'am_liam', speed: 1.03, lang: 'en-us' },
    lecturer: { label: 'Lecturer', voice: 'bm_fable', speed: 1.0, lang: 'en-gb' },
  };

  // Script: [role, text] lines, or ['pause', seconds, label], or ['focus', part]
  // {{text|n}} marks where the answer to question n is heard.
  const SCRIPT = [
    ['focus', 1],
    ['narrator', 'IELTS Listening. Premium Test 4.'],
    ['narrator', 'In the test, you will hear a number of different recordings and you will have to answer questions on what you hear. There will be time for you to read the instructions and questions, and you will have a chance to check your work. All the recordings will be played once only. The test is in four parts.'],
    ['narrator', 'Now turn to Part 1.'],
    ['narrator', 'Part 1. You will hear a woman phoning a car-sharing club to become a member. First, you have some time to look at questions 1 to 3.'],
    ['pause', 30, 'Reading time · Questions 1–3'],
    ['narrator', 'You will see that there is an example that has been done for you. On this occasion only, the conversation relating to this will be played first.'],
    ['adviser', "Good morning, CityWheels car club. How can I help?"],
    ['grace', "Hello. I'd like to join the club, please. A colleague of mine is a member and recommended you."],
    ['narrator', "The woman heard about the club from a colleague, so 'colleague' has been written in the example. Now we shall begin. You should answer the questions as you listen, because you will not hear the recording a second time. Listen carefully and answer questions 1 to 3."],
    ['adviser', "Good morning, CityWheels car club. How can I help?"],
    ['grace', "Hello. I'd like to join the club, please. A colleague of mine is a member and recommended you."],
    ['adviser', "Great. Can I ask why you're interested in car sharing?"],
    ['grace', "Well, I've lived in the city for years, and my old car was running perfectly well. But I was only driving it about twice a month, so {{I sold it|1}}, and now I just need a car occasionally."],
    ['adviser', "That's very common. We have three plans. The annual plan has the lowest hourly rates but a fee of a hundred and twenty pounds a year. The monthly plan is ten pounds a month. And pay-as-you-go has no fee, but slightly higher rates."],
    ['grace', "If I'm only driving twice a month, the fees wouldn't be worth it. {{I'll go for pay-as-you-go|2}}."],
    ['adviser', "Sensible. And what kind of car do you think you'll book most often? We have small cars, electric cars and estate cars for bigger loads."],
    ['grace', "I sometimes need an estate car to take things to the tip, but that's rare. Mostly I'll be driving in the city centre, and as there's a charge for petrol cars in the low-emission zone, {{an electric car makes the most sense|3}}."],
    ['narrator', 'Before you hear the rest of the conversation, you have some time to look at questions 4 to 10.'],
    ['pause', 30, 'Reading time · Questions 4–10'],
    ['narrator', 'Now listen and answer questions 4 to 10.'],
    ['adviser', "Let me take your details. Your surname?"],
    ['grace', "{{Fairbairn|4}}. F, A, I, R, B, A, I, R, N. First name Grace."],
    ['adviser', "And your date of birth?"],
    ['grace', "The {{fourteenth of August, nineteen ninety-one|5}}."],
    ['adviser', "How long have you held a full driving licence? We need at least two years."],
    ['grace', "That's fine. I passed my test {{six years|6}} ago, when I was at university."],
    ['adviser', "Which car bay would be nearest to you? There's one at the station, but that's often busy."],
    ['grace', "I live near the river. Is there one in the car park behind the {{leisure centre|7}}? That's about two minutes from my flat."],
    ['adviser', "Yes, there are two cars there, one of them electric. How would you like to pay? Most members pay by card through the app, but we also offer direct debit."],
    ['grace', "I'd rather not keep my card on the app. {{Direct debit|8}} would be better."],
    ['adviser', "No problem. The small cars are five pounds fifty an hour on pay-as-you-go, and the electric ones are {{six fifty|9}}."],
    ['grace', "That's fine. Anything else I need to know?"],
    ['adviser', "Just one important rule. Before you drive off, walk around the car and report any {{damage|10}} through the app, with photos. Otherwise, you could be charged for it."],
    ['grace', "Got it. Thank you."],
    ['narrator', 'That is the end of Part 1. You now have half a minute to check your answers to Part 1.'],
    ['pause', 30, 'Checking time · Part 1'],

    ['focus', 2],
    ['narrator', 'Now turn to Part 2.'],
    ['narrator', 'Part 2. You will hear a community liaison officer talking to local residents about a new waste-to-energy plant. First, you have some time to look at questions 11 to 20.'],
    ['pause', 50, 'Reading time · Questions 11–20'],
    ['narrator', 'Now listen carefully and answer questions 11 to 20.'],
    ['officer', "Good evening, everyone. I'm the community liaison officer for the new Eastmoor Energy Recovery Facility, and I'd like to give you some facts about the plant and answer some of the questions we've been receiving."],
    ['officer', "The plant takes household waste that can't be recycled and burns it to generate electricity. It was originally designed for two hundred thousand tonnes a year, but the final design is larger, and it will process {{three hundred thousand|11}} tonnes a year, collected from four neighbouring councils."],
    ['officer', "That will generate enough electricity for around {{sixty thousand|12}} homes. Steam from the plant may also be used to heat some public buildings in future, but that hasn't been agreed yet."],
    ['officer', "Many of you were worried about lorries. In fact, most of the waste will arrive by {{rail|13}}, from a transfer station on the old goods line, which means far fewer lorries on local roads than people expected."],
    ['officer', "The chimney will be {{eighty-five|14}} metres high. That's lower than the original plan of a hundred metres, following comments from residents."],
    ['officer', "Nothing goes to waste. The ash left after burning is processed and used as a material for {{road building|15}}, and any metals in the ash are separated out and sold to {{recycling companies|16}}."],
    ['officer', "Air quality is a major concern for everyone. Emissions from the chimney will be monitored {{continuously|17}}, not just checked once a day, and the results will be published on our website in real time."],
    ['officer', "We want the plant to be open and transparent. There's a visitor centre where you can see the whole process from a viewing gallery, and it's open on {{Wednesdays and Saturdays|18}}. School visits can be arranged on other days."],
    ['officer', "The company will also pay {{two hundred and fifty thousand|19}} pounds a year into a community fund, which local groups can apply to for projects such as playgrounds and sports facilities."],
    ['officer', "Finally, if you ever notice a problem, such as smells or noise, please don't just email us. Call the {{twenty-four-hour hotline|20}}, so that someone can investigate immediately. Thank you."],
    ['narrator', 'That is the end of Part 2. You now have half a minute to check your answers to Part 2.'],
    ['pause', 30, 'Checking time · Part 2'],

    ['focus', 3],
    ['narrator', 'Now turn to Part 3.'],
    ['narrator', 'Part 3. You will hear two product design students, Rosa and Ethan, talking to their tutor, Dr Iqbal, about a water filter bottle they have designed. First, you have some time to look at questions 21 to 30.'],
    ['pause', 50, 'Reading time · Questions 21–30'],
    ['narrator', 'Now listen carefully and answer questions 21 to 30.'],
    ['iqbal', "So, let's look at your prototype. Talk me through it from the top."],
    ['rosa', "Okay. In the lid, there's a small {{ultraviolet light|21}}, which runs for sixty seconds when you close the lid and kills most bacteria in the water. It's charged by USB."],
    ['ethan', "Below the lid, there's the filter cartridge. It's made of {{activated carbon|22}}, which removes chemicals and improves the taste."],
    ['rosa', "Then, around the cartridge, there's a thin {{ceramic membrane|23}}, which traps very small particles that the carbon can't."],
    ['iqbal', "And the bottle itself?"],
    ['ethan', "We tried plastic, but it felt cheap. The body is made from {{recycled aluminium|24}}, which is light and fully recyclable."],
    ['rosa', "And at the bottom there's a base made of {{silicone|25}}, so it doesn't slip and doesn't make a noise when you put it down."],
    ['iqbal', "Very neat. How long does the filter last?"],
    ['ethan', "We estimated two hundred litres at first, but the lab tests showed it works well for {{three hundred litres|26}}, so that's what we'll recommend."],
    ['iqbal', "And the price?"],
    ['rosa', "Our target is under {{thirty|27}} pounds. Most competitors are around forty."],
    ['iqbal', "Who's your main market?"],
    ['ethan', "We thought about students and festival-goers, but our survey suggests the biggest market is {{hikers|28}}, who need clean water from streams."],
    ['iqbal', "Any problems in testing?"],
    ['rosa', "Yes. It was fine in cold conditions, but when we left it in a hot car, the bottle {{leaked|29}} around the lid, so we need to redesign the seal."],
    ['iqbal', "And what's next?"],
    ['ethan', "We've made ten prototypes so far. Next, we want to test it with {{fifty volunteers|30}} over a month, to see how people actually use it."],
    ['iqbal', "Excellent work. I'm impressed."],
    ['narrator', 'That is the end of Part 3. You now have half a minute to check your answers to Part 3.'],
    ['pause', 30, 'Checking time · Part 3'],

    ['focus', 4],
    ['narrator', 'Now turn to Part 4.'],
    ['narrator', 'Part 4. You will hear a lecture about the history of the number zero. First, you have some time to look at questions 31 to 40.'],
    ['pause', 45, 'Reading time · Questions 31–40'],
    ['narrator', 'Now listen carefully and answer questions 31 to 40.'],
    ['lecturer', "Good afternoon. Today we're going to look at the history of something that seems so simple we rarely think about it: zero."],
    ['lecturer', "Zero actually has two different roles. The first is as a {{placeholder|31}}, a symbol that shows an empty position in a number, so that we can tell the difference between, say, twenty-five and two hundred and five. The second is as a number in its own right, something you can add, subtract and multiply."],
    ['lecturer', "The first role appeared much earlier. The Babylonians, who used a number system based on sixty, began to use a sign made of two {{slanted wedges|32}} to mark an empty position, around two thousand three hundred years ago. But they never treated it as a number. Remarkably, the {{Maya|33}} of Central America developed their own zero completely independently, and used it in their calendars by the fourth century."],
    ['lecturer', "The idea of zero as a number comes from India. A manuscript found in a field near Peshawar, in what is now Pakistan, uses dots to represent zero. In two thousand and seventeen, {{radiocarbon dating|34}} suggested that parts of it might date from as early as the third or fourth century, although some scholars dispute this. The key figure, however, is the mathematician Brahmagupta, who, in the year {{six hundred and twenty-eight|35}}, wrote down rules for calculating with zero, such as the rule that a number minus itself equals zero. Not all of his rules were correct, though. He struggled, like everyone after him, with {{division|36}} by zero."],
    ['lecturer', "From India, the idea spread to the Islamic world. In ninth-century Baghdad, the scholar al-Khwarizmi wrote a book explaining the Indian numerals, and the Arabic word for zero, sifr, which meant {{empty|37}}, eventually gave us both the English word zero and the word cipher."],
    ['lecturer', "The numerals reached Europe largely through the Italian mathematician Fibonacci, whose book of twelve-oh-two showed merchants how much easier they made calculations. But not everyone was convinced. In twelve ninety-nine, the city of {{Florence|38}} banned the use of the new numerals in financial records, because officials feared that they were easier to {{forge|39}}: a zero, for example, could easily be changed into a six or a nine."],
    ['lecturer', "Eventually, of course, the system won. And without zero, much of modern science would be impossible. Today, the whole of digital technology depends on the {{binary system|40}}, which uses only two digits, zero and one. Next week, we'll look at the history of negative numbers."],
    ['narrator', 'That is the end of Part 4. That is the end of the listening test.'],
  ];

  // Questions. kind: gap | mcq | two | match
  const LIMIT_3N = 'NO MORE THAN THREE WORDS AND/OR A NUMBER';
  const LIMIT_3 = 'NO MORE THAN THREE WORDS';
  const Q = {
    1:  { kind: 'mcq', q: 'Why does Grace want to join the club?', opts: { A: 'Her car broke down.', B: 'She has sold her car.', C: 'She has just moved to the city.' }, ans: 'B', why: 'Her car was “running perfectly well” (A) and she has lived in the city for years (C); she sold it because she rarely drove.' },
    2:  { kind: 'mcq', q: 'Which plan does Grace choose?', opts: { A: 'annual', B: 'monthly', C: 'pay-as-you-go' }, ans: 'C', why: 'Driving only twice a month, the fees for the annual and monthly plans would not be worth it.' },
    3:  { kind: 'mcq', q: 'Which type of car will Grace mostly book?', opts: { A: 'a small car', B: 'an electric car', C: 'an estate car' }, ans: 'B', why: 'She sometimes needs an estate car (C), but rarely; petrol cars are charged in the low-emission zone.' },
    4:  { kind: 'gap', ans: ['fairbairn'], limit: 3, key: 'Fairbairn', why: 'Spelled F-A-I-R-B-A-I-R-N.' },
    5:  { kind: 'gap', ans: ['14 august 1991', '14th august 1991', 'august 14 1991', '14.08.1991', '14/08/1991', '14/8/1991'], limit: 3, key: '14 August 1991', why: '“The fourteenth of August, nineteen ninety-one.”' },
    6:  { kind: 'gap', ans: ['six years', '6 years', '6', 'six'], limit: 3, key: '6 years', why: 'The club needs at least two years (distractor); she passed six years ago.' },
    7:  { kind: 'gap', ans: ['leisure centre', 'the leisure centre', 'leisure center'], limit: 3, key: 'leisure centre', why: 'The station bay is often busy (distractor); she chooses the car park behind the leisure centre.' },
    8:  { kind: 'gap', ans: ['direct debit'], limit: 3, why: 'Most members pay by card through the app (distractor); she prefers direct debit.' },
    9:  { kind: 'gap', ans: ['6.50', '£6.50'], limit: 3, key: '6.50', why: 'Small cars are £5.50 (distractor); electric cars are £6.50 an hour.' },
    10: { kind: 'gap', ans: ['damage', 'any damage'], limit: 3, key: 'damage', why: 'Report any damage through the app before driving, or you may be charged.' },
    11: { kind: 'gap', ans: ['300,000', '300000', '300 000'], limit: 3, key: '300,000', why: 'The original design was 200,000 tonnes (distractor); the final plant processes 300,000.' },
    12: { kind: 'gap', ans: ['60,000', '60000', '60 000'], limit: 3, key: '60,000', why: 'Enough electricity for around 60,000 homes. Heating public buildings has not been agreed.' },
    13: { kind: 'gap', ans: ['rail', 'train', 'by rail', 'by train'], limit: 3, key: 'rail', why: 'Residents worried about lorries, but most waste will arrive by rail.' },
    14: { kind: 'gap', ans: ['85', 'eighty-five', '85 metres', '85m'], limit: 3, key: '85', why: 'The original plan was 100 metres (distractor); the chimney is 85 metres.' },
    15: { kind: 'gap', ans: ['road building', 'road-building', 'roads', 'building roads'], limit: 3, key: 'road building', why: 'The ash is processed and used as a material for road building.' },
    16: { kind: 'gap', ans: ['recycling companies'], limit: 3, why: 'Metals separated from the ash are sold to recycling companies.' },
    17: { kind: 'gap', ans: ['continuously'], limit: 3, why: 'Monitored continuously, “not just checked once a day” (distractor).' },
    18: { kind: 'gap', ans: ['wednesdays and saturdays', 'wednesday and saturday'], limit: 3, key: 'Wednesdays and Saturdays', why: 'Open to the public on Wednesdays and Saturdays; school visits on other days.' },
    19: { kind: 'gap', ans: ['250,000', '250000', '250 000'], limit: 3, key: '250,000', why: '£250,000 a year into a community fund.' },
    20: { kind: 'gap', ans: ['24-hour hotline', '24 hour hotline', 'hotline', 'twenty-four-hour hotline'], limit: 3, key: '24-hour hotline', why: '“Please don’t just email us” (distractor): call the 24-hour hotline.' },
    21: { kind: 'gap', ans: ['ultraviolet light', 'uv light', 'ultraviolet'], limit: 3, key: 'ultraviolet light', why: 'The lid contains a small ultraviolet light that kills bacteria.' },
    22: { kind: 'gap', ans: ['activated carbon', 'carbon'], limit: 3, key: 'activated carbon', why: 'The cartridge is activated carbon, which removes chemicals.' },
    23: { kind: 'gap', ans: ['ceramic membrane'], limit: 3, why: 'A thin ceramic membrane around the cartridge traps very small particles.' },
    24: { kind: 'gap', ans: ['recycled aluminium', 'aluminium', 'recycled aluminum', 'aluminum'], limit: 3, key: 'recycled aluminium', why: 'Plastic felt cheap (distractor); the body is recycled aluminium.' },
    25: { kind: 'gap', ans: ['silicone'], limit: 3, why: 'A silicone base stops it slipping and makes no noise.' },
    26: { kind: 'gap', ans: ['300 litres', 'three hundred litres', '300', '300 liters'], limit: 3, key: '300 litres', why: 'Estimated at 200 litres (distractor), but tests showed 300 litres.' },
    27: { kind: 'gap', ans: ['30', '£30', 'thirty'], limit: 3, key: '30', why: 'Target price under £30; competitors are around £40 (distractor).' },
    28: { kind: 'gap', ans: ['hikers'], limit: 3, why: 'They considered students and festival-goers (distractors); the biggest market is hikers.' },
    29: { kind: 'gap', ans: ['leaked'], limit: 3, why: 'In a hot car, the bottle leaked around the lid.' },
    30: { kind: 'gap', ans: ['50 volunteers', 'fifty volunteers'], limit: 3, key: '50 volunteers', why: 'Ten prototypes so far (distractor); next, a month-long test with fifty volunteers.' },
    31: { kind: 'gap', ans: ['placeholder', 'place holder'], limit: 3, why: 'The first role: a placeholder showing an empty position.' },
    32: { kind: 'gap', ans: ['slanted wedges', 'wedges', 'two slanted wedges'], limit: 3, key: 'slanted wedges', why: 'The Babylonian sign was made of two slanted wedges.' },
    33: { kind: 'gap', ans: ['maya', 'the maya'], limit: 3, key: 'Maya', why: 'The Maya developed zero independently.' },
    34: { kind: 'gap', ans: ['radiocarbon dating', 'carbon dating'], limit: 3, key: 'radiocarbon dating', why: 'Radiocarbon dating in 2017 suggested an early date, although this is disputed.' },
    35: { kind: 'gap', ans: ['628', 'ad 628', '628 ad'], limit: 3, key: '628', why: 'Brahmagupta wrote his rules in 628.' },
    36: { kind: 'gap', ans: ['division'], limit: 3, why: 'He struggled with division by zero.' },
    37: { kind: 'gap', ans: ['empty'], limit: 3, why: 'Sifr meant “empty”.' },
    38: { kind: 'gap', ans: ['florence'], limit: 3, key: 'Florence', why: 'Florence banned the numerals in financial records in 1299.' },
    39: { kind: 'gap', ans: ['forge'], limit: 3, why: 'Officials feared the numerals were easier to forge.' },
    40: { kind: 'gap', ans: ['binary system', 'binary'], limit: 3, key: 'binary system', why: 'Digital technology depends on the binary system of zeros and ones.' },
  };

  const gap = n => `<span class="gap" data-q="${n}"><span class="n">${n}</span><input type="text" id="q${n}" data-q="${n}" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Question ${n}"></span>`;
  const mcq = n => { const q = Q[n]; return `<div class="mcq" data-q="${n}" role="radiogroup" aria-labelledby="ql${n}"><div class="q"><span class="qn">${n}</span><span id="ql${n}">${q.q}</span></div>${Object.entries(q.opts).map(([k, v]) => `<label data-opt="${k}"><input type="radio" name="q${n}" value="${k}" data-q="${n}"><b>${k}</b><span>${v}</span></label>`).join('')}</div>`; };
  const sel = (n, letters) => `<select id="q${n}" data-q="${n}" aria-label="Question ${n}"><option value="">–</option>${letters.map(l => `<option>${l}</option>`).join('')}</select>`;
  const matchRows = (nums, opts) => nums.map(n => `<div class="match-row" data-q="${n}"><span class="qn">${n}</span><span class="who">${Q[n].label}</span>${sel(n, Object.keys(opts))}</div>`).join('');
  const twoBlock = (first, question, opts) => `<div class="mcq" data-q="${first}" data-two="1"><div class="q"><span class="qn">${first}–${first + 1}</span><span>${question}</span></div>${Object.entries(opts).map(([k, v]) => `<label data-opt="${k}"><input type="checkbox" value="${k}" data-two="1"><b>${k}</b><span>${v}</span></label>`).join('')}</div>`;

  const part = (x, c) => `<div style="border:1.5px solid currentColor;border-radius:${x};padding:8px 12px;text-align:center">${c}</div>`;
  const BOTTLE = `<div style="display:grid;gap:4px;max-width:340px;margin:6px 0 10px">
      ${part('14px 14px 4px 4px', `<b>Lid</b><br>contains a small ${gap(21)}`)}
      ${part('4px', `<b>Filter cartridge</b><br>made of ${gap(22)}`)}
      ${part('4px', `<b>Around the cartridge</b><br>a thin ${gap(23)}`)}
      ${part('4px', `<b>Body</b><br>made from ${gap(24)}`)}
      ${part('4px 4px 14px 14px', `<b>Base</b><br>made of ${gap(25)}`)}
    </div>`;

  const PAPER = `
  <section class="part" id="part-1" data-part="1">
    <div class="part-head"><h2>Part 1</h2><span class="label">Questions 1–10</span></div>
    <div class="qblock">
      <h3>Questions 1–3</h3>
      <p class="instr">Choose the correct letter, <b>A, B or C</b>.</p>
      <p class="muted"><i>Example: Grace heard about the club from a <u>colleague</u>.</i></p>
      ${[1, 2, 3].map(mcq).join('')}
    </div>
    <div class="qblock">
      <h3>Questions 4–10</h3>
      <p class="instr">Complete the registration form below. Write <b>${LIMIT_3N}</b> for each answer.</p>
      <div class="form">
        <h4>CityWheels car club · Registration</h4>
        <div class="line"><span>Name:</span><span>Grace ${gap(4)}</span></div>
        <div class="line"><span>Date of birth:</span><span>${gap(5)}</span></div>
        <div class="line"><span>Licence held for:</span><span>${gap(6)}</span></div>
        <div class="line"><span>Nearest car bay:</span><span>car park behind the ${gap(7)}</span></div>
        <div class="line"><span>Payment method:</span><span>${gap(8)}</span></div>
        <div class="line"><span>Hourly rate:</span><span>£ ${gap(9)}</span></div>
        <div class="line"><span>Before driving:</span><span>report any ${gap(10)} in the app</span></div>
      </div>
    </div>
  </section>

  <section class="part" id="part-2" data-part="2" hidden>
    <div class="part-head"><h2>Part 2</h2><span class="label">Questions 11–20</span></div>
    <div class="qblock">
      <h3>Questions 11–20</h3>
      <p class="instr">Complete the fact sheet below. Write <b>${LIMIT_3N}</b> for each answer.</p>
      <div class="notes">
        <h4>Eastmoor Energy Recovery Facility · Fact sheet</h4>
        <ul>
          <li>Waste processed: ${gap(11)} tonnes a year</li>
          <li>Electricity for about ${gap(12)} homes</li>
          <li>Most waste delivered by ${gap(13)}</li>
          <li>Chimney height: ${gap(14)} metres</li>
          <li>Ash used as a material for ${gap(15)}</li>
          <li>Metals sold to ${gap(16)}</li>
          <li>Emissions monitored ${gap(17)}</li>
          <li>Visitor centre open on ${gap(18)}</li>
          <li>Community fund: £ ${gap(19)} a year</li>
          <li>To report a problem: call the ${gap(20)}</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="part" id="part-3" data-part="3" hidden>
    <div class="part-head"><h2>Part 3</h2><span class="label">Questions 21–30</span></div>
    <div class="qblock">
      <h3>Questions 21–25</h3>
      <p class="instr">Label the diagram below. Write <b>${LIMIT_3}</b> for each answer.</p>
      <div class="notes"><h4>The water filter bottle</h4>${BOTTLE}</div>
    </div>
    <div class="qblock">
      <h3>Questions 26–30</h3>
      <p class="instr">Complete the notes below. Write <b>${LIMIT_3N}</b> for each answer.</p>
      <div class="notes">
        <h4>Development notes</h4>
        <ul>
          <li>Filter lasts for ${gap(26)}.</li>
          <li>Target price: under £ ${gap(27)}</li>
          <li>Main market: ${gap(28)}</li>
          <li>Problem: the bottle ${gap(29)} when it was hot.</li>
          <li>Next step: a month-long test with ${gap(30)}</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="part" id="part-4" data-part="4" hidden>
    <div class="part-head"><h2>Part 4</h2><span class="label">Questions 31–40</span></div>
    <div class="qblock">
      <h3>Questions 31–40</h3>
      <p class="instr">Complete the lecture notes below. Write <b>${LIMIT_3N}</b> for each answer.</p>
      <div class="notes">
        <h4>The history of zero</h4>
        <span class="h">Two roles</span>
        <ul>
          <li>a ${gap(31)} showing an empty position, and a number in its own right</li>
        </ul>
        <span class="h">Early forms</span>
        <ul>
          <li>Babylonians: a sign of two ${gap(32)}, not used as a number</li>
          <li>The ${gap(33)} developed zero independently.</li>
        </ul>
        <span class="h">India</span>
        <ul>
          <li>A manuscript was dated early by ${gap(34)}.</li>
          <li>Brahmagupta’s rules for zero: written in ${gap(35)}</li>
          <li>He had difficulty with ${gap(36)} by zero.</li>
        </ul>
        <span class="h">Spread</span>
        <ul>
          <li>Arabic “sifr” meant ${gap(37)}.</li>
          <li>In 1299, ${gap(38)} banned the numerals.</li>
          <li>Officials feared they were easier to ${gap(39)}.</li>
          <li>Today: computers use the ${gap(40)}.</li>
        </ul>
      </div>
    </div>
  </section>`;

  // Part changes and reading/checking pauses in the recording (seconds) — filled in by tools/make_listening_audio.py
  const TIMELINE = [{"t":1.0,"focus":1},{"t":34.87,"pause":30,"label":"Reading time · Questions 1–3"},{"t":64.87,"speech":1,"part":1},{"t":170.8,"pause":30,"label":"Reading time · Questions 4–10"},{"t":200.8,"speech":1,"part":1},{"t":277.63,"pause":30,"label":"Checking time · Part 1"},{"t":307.63,"focus":2},{"t":307.63,"speech":1,"part":2},{"t":322.71,"pause":50,"label":"Reading time · Questions 11–20"},{"t":372.71,"speech":1,"part":2},{"t":508.76,"pause":30,"label":"Checking time · Part 2"},{"t":538.76,"focus":3},{"t":538.76,"speech":1,"part":3},{"t":556.52,"pause":50,"label":"Reading time · Questions 21–30"},{"t":606.52,"speech":1,"part":3},{"t":713.23,"pause":30,"label":"Checking time · Part 3"},{"t":743.23,"focus":4},{"t":743.23,"speech":1,"part":4},{"t":754.93,"pause":45,"label":"Reading time · Questions 31–40"},{"t":799.93,"speech":1,"part":4}];
  const partNames = { 1: 'Part 1 · Joining a car-sharing club', 2: 'Part 2 · A waste-to-energy plant', 3: 'Part 3 · Designing a water filter bottle', 4: 'Part 4 · The history of zero' };
  window.LISTENING_TEST = { num: 104, name: 'Premium Test 4', audio: 'audio/listening-test104.mp3', minutes: 16, mb: 8, roles: ROLES, script: SCRIPT, Q, paper: PAPER, timeline: TIMELINE, partNames };
})();
