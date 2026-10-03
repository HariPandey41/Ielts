// IELTS Listening · Practice Test 8 — content only. The exam engine is assets/listening-exam.js.
(() => {
  'use strict';
  // Speakers: label for the transcript, voice for tools/make_listening_audio.py
  const ROLES = {
    narrator: { label: 'Narrator', voice: 'bm_george', speed: 0.92, lang: 'en-gb' },
    helen:    { label: 'Helen', voice: 'bf_emma', speed: 0.98, lang: 'en-gb' },
    ryan:     { label: 'Ryan', voice: 'am_michael', speed: 0.98, lang: 'en-us' },
    speaker:  { label: 'Transport officer', voice: 'af_aoede', speed: 0.96, lang: 'en-us' },
    lily:     { label: 'Lily', voice: 'af_bella', speed: 0.98, lang: 'en-us' },
    max:      { label: 'Max', voice: 'bm_daniel', speed: 0.98, lang: 'en-gb' },
    lecturer: { label: 'Lecturer', voice: 'bm_fable', speed: 0.95, lang: 'en-gb' },
  };

  // Script: [role, text] lines, or ['pause', seconds, label], or ['focus', part]
  // {{text|n}} marks where the answer to question n is heard.
  const SCRIPT = [
    ['focus', 1],
    ['narrator', 'IELTS Listening. Practice Test 8.'],
    ['narrator', 'In the test, you will hear a number of different recordings and you will have to answer questions on what you hear. There will be time for you to read the instructions and questions, and you will have a chance to check your work. All the recordings will be played once only. The test is in four parts.'],
    ['narrator', 'Now turn to Part 1.'],
    ['narrator', 'Part 1. You will hear a man phoning an arts centre to ask about photography courses. First, you have some time to look at questions 1 to 5.'],
    ['pause', 30, 'Reading time · Questions 1–5'],
    ['narrator', 'You will see that there is an example that has been done for you. On this occasion only, the conversation relating to this will be played first.'],
    ['helen', 'Lakeside Arts Centre, Helen speaking.'],
    ['ryan', "Hi. I'm calling about your photography courses. I've just bought my first proper camera, and I'd like to learn how to use it."],
    ['helen', "Then you might like our Getting Started course. That's on Monday evenings."],
    ['narrator', "The Getting Started course is on Monday evenings, so 'Monday evenings' has been written in the space. Now we shall begin. You should answer the questions as you listen, because you will not hear the recording a second time. Listen carefully and answer questions 1 to 5."],
    ['helen', 'Lakeside Arts Centre, Helen speaking.'],
    ['ryan', "Hi. I'm calling about your photography courses. I've just bought my first proper camera, and I'd like to learn how to use it."],
    ['helen', "Then you might like our Getting Started course. That's on Monday evenings. It was a hundred and ten pounds last year, but the price has gone up slightly, so it's now {{a hundred and twenty|1}}."],
    ['ryan', 'And what does it cover?'],
    ['helen', "A lot of people expect to learn about editing software, but that's in the advanced course. Getting Started is mainly about how to control {{light|2}}, which is really the key to a good photo."],
    ['ryan', "I see. I'm also interested in taking pictures of people. Do you have anything on that?"],
    ['helen', "Yes, there's a Portraits course on Wednesdays. It used to run for eight weeks, but now it's a shorter course, just {{six|3}} weeks. It's a hundred and fifty pounds, but that includes one session in a professional {{studio|4}} in the town centre, with proper lighting equipment."],
    ['ryan', "That sounds good. And is there anything outdoors? I live near the countryside."],
    ['helen', "There's the Wildlife course, on Saturday mornings. The group used to meet in the car park of the nature reserve, but now they meet at the {{reservoir|5}}, because there are more birds there."],
    ['narrator', 'Before you hear the rest of the conversation, you have some time to look at questions 6 to 10.'],
    ['pause', 30, 'Reading time · Questions 6–10'],
    ['narrator', 'Now listen and answer questions 6 to 10.'],
    ['ryan', 'How much is the Wildlife course?'],
    ['helen', "It's only four sessions, so it's cheaper: {{eighty-five|6}} pounds."],
    ['ryan', 'Do I need any special equipment? I just have the lens that came with the camera.'],
    ['helen', "That's fine. You don't need a long lens for this course, because the tutor takes you to places where the birds are quite close. But you will need a {{tripod|7}}, to keep the camera steady."],
    ['ryan', "Okay. Are there any discounts? I'm a part-time student at the college."],
    ['helen', "Yes, {{students|8}} get ten per cent off all our courses. We used to offer the same discount to people over sixty-five, but unfortunately that's stopped."],
    ['ryan', 'Great. And who teaches the courses?'],
    ['helen', "Most of them are taught by Maria Delgado. She's a professional photographer. Her surname is spelled {{D, E, L, G, A, D, O|9}}. You can see her work on our website."],
    ['ryan', 'And is there anything at the end of the course?'],
    ['helen', "Yes. Every student chooses their best photo for an exhibition. It used to be held in our café, but there wasn't enough space, so now it's in the town {{museum|10}}, which is lovely."],
    ['ryan', "Brilliant. I think I'll book Getting Started first. Thanks for your help."],
    ['narrator', 'That is the end of Part 1. You now have half a minute to check your answers to Part 1.'],
    ['pause', 30, 'Checking time · Part 1'],

    ['focus', 2],
    ['narrator', 'Now turn to Part 2.'],
    ['narrator', 'Part 2. You will hear an announcement on local radio about changes to bus services. First, you have some time to look at questions 11 to 16.'],
    ['pause', 30, 'Reading time · Questions 11–16'],
    ['narrator', 'Now listen carefully and answer questions 11 to 16.'],
    ['speaker', "Good morning. I'm speaking on behalf of the city transport department, and I'd like to tell listeners about some changes to bus services, which will start on the first of next month."],
    ['speaker', "Let's start with the Airport Express. This is one of our busiest routes, and at the moment buses run every thirty minutes. From next month, {{they'll run every fifteen minutes|11}}, throughout the day."],
    ['speaker', "Route three serves the university. Many students have asked for more frequent buses, but unfortunately we can't do that this year. What we are doing is replacing the old buses on that route, and {{all the buses will now be electric|12}}."],
    ['speaker', "Route nine currently ends at Hillside. With all the new houses being built at Brook Farm, {{route nine will now continue past Hillside to the new estate|13}}."],
    ['speaker', "Route fourteen, to Riverside, has had very few passengers for some time, and most of its stops are also served by route nine. So {{we've decided to stop running route fourteen altogether|14}}."],
    ['speaker', "Some listeners have heard that the Old Town bus, route twenty-two, will stop running in the evenings. That's not true. The service will be exactly the same, but {{it will now be called route two|15}}, to match the new city map."],
    ['speaker', "And the Park and Ride service, from the car park on the ring road, will continue to run every ten minutes. The only change is that {{it'll now stop at the hospital|16}}, which will be very helpful for staff and visitors."],
    ['narrator', 'Before you hear the rest of the announcement, you have some time to look at questions 17 to 20.'],
    ['pause', 30, 'Reading time · Questions 17–20'],
    ['narrator', 'Now listen and answer questions 17 to 20.'],
    ['speaker', "There are also some changes to tickets. You can still buy tickets on the bus, but from next month, {{drivers will no longer accept cash|17}}. You can pay with a bank card or your phone."],
    ['speaker', "And there's good news on prices. A day ticket currently costs five pounds fifty. Some newspapers reported that it would go down to five pounds, but in fact {{the new price will be four pounds fifty|18}}."],
    ['speaker', "Please also note that the main bus station will be closed for three weeks in the summer. People have been asking if it's because of the new shops that are planned, but those won't be built until next year. {{The closure is so that the roof can be repaired|19}}. Buses will stop on Market Street instead."],
    ['speaker', "Finally, new timetables. These are available on our website, of course, but we know that not everyone uses the internet. We no longer have printed timetables on the buses or at the bus station, but {{you can pick up a printed copy at any public library|20}}."],
    ['speaker', 'Thank you for listening.'],
    ['narrator', 'That is the end of Part 2. You now have half a minute to check your answers to Part 2.'],
    ['pause', 30, 'Checking time · Part 2'],

    ['focus', 3],
    ['narrator', 'Now turn to Part 3.'],
    ['narrator', 'Part 3. You will hear two media students, Lily and Max, discussing a short documentary film they are making about a street market. First, you have some time to look at questions 21 to 26.'],
    ['pause', 30, 'Reading time · Questions 21–26'],
    ['narrator', 'Now listen carefully and answer questions 21 to 26.'],
    ['lily', "Okay, Max, we've both watched the first edit of the film now. Shall we go through it section by section?"],
    ['max', "Good idea. The opening scene, at the market at dawn. The length is about right, I think."],
    ['lily', "I agree, but {{it's far too dark|21}}. You can hardly see the stallholders setting up. We need to film it again with some extra lights, or at least brighten it."],
    ['max', "Yes, let's do that. Then the interview with Mr Okoro, the fruit seller. What he says is brilliant."],
    ['lily', "It is, but {{the wind noise makes it really hard to hear him|22}}. We'll have to record his voice again, with a better microphone."],
    ['max', "Agreed. Now, the background music. I chose it, but I'm not sure about it any more."],
    ['lily', "Me neither. It's far too dramatic for a film about a market. {{We should find something completely different|23}}, something more relaxed."],
    ['max', "Okay. What about the drone shots of the market from above? I wondered about cutting them altogether."],
    ['lily', "No, I think they're useful. They show how big the market is. But at the moment they come right at the end. {{They'd work much better near the beginning|24}}, to set the scene."],
    ['max', "That's true. And the time-lapse of the crowds?"],
    ['lily', "I love it, but it goes on for nearly two minutes. {{We need to cut it down|25}} to about thirty seconds."],
    ['max', "Fair enough. And the ending, with the stallholders packing up as it gets dark?"],
    ['lily', "{{That's the best thing in the whole film|26}}. I wouldn't change a thing."],
    ['max', 'Neither would I.'],
    ['narrator', 'Before you hear the rest of the discussion, you have some time to look at questions 27 to 30.'],
    ['pause', 30, 'Reading time · Questions 27–30'],
    ['narrator', 'Now listen and answer questions 27 to 30.'],
    ['max', "Our tutor made some comments on the first edit too. He didn't think it was too long, and he liked the camera work."],
    ['lily', "No, his main point was that {{there's no clear story|27}}. It's just a series of scenes. He suggested we follow one stallholder through the day."],
    ['max', "Mr Okoro would be perfect for that. Now, before we finish it, who should we show it to? I thought about our classmates, or the film club."],
    ['lily', "I think {{we should show it to the stallholders first|28}}. It's their story, and they might spot mistakes."],
    ['max', "Good point. What about subtitles? I thought we'd only need them for the interview."],
    ['lily', "But most people watch videos on their phones with the sound off. {{Let's add subtitles for the whole film|29}}."],
    ['max', "Okay. And finally, where should we enter it? The international documentary festival has a student category."],
    ['lily', "The competition there is enormous. And the city film festival only accepts films over twenty minutes. I think {{the national student film festival|30}} is the best choice."],
    ['max', 'Agreed. Let\'s get started on the changes.'],
    ['narrator', 'That is the end of Part 3. You now have half a minute to check your answers to Part 3.'],
    ['pause', 30, 'Checking time · Part 3'],

    ['focus', 4],
    ['narrator', 'Now turn to Part 4.'],
    ['narrator', 'Part 4. You will hear a lecture about the psychology of colour. First, you have some time to look at questions 31 to 40.'],
    ['pause', 45, 'Reading time · Questions 31–40'],
    ['narrator', 'Now listen carefully and answer questions 31 to 40.'],
    ['lecturer', "Good afternoon. Today we're looking at the psychology of colour: how colours affect the way we think, feel and behave. It's a popular subject, and you'll find a lot of exaggerated claims about it, so I'll try to focus on what the research actually shows."],
    ['lecturer', "First, it's important to understand why this research is difficult. People's reactions to colour are strongly affected by their {{culture|31}}. Take white. In many Western countries, it's associated with weddings, but in parts of East Asia, it has traditionally been worn at {{funerals|32}}. So we can't assume that a colour has the same meaning everywhere."],
    ['lecturer', "Let's look at red. A well-known study of the two thousand and four Olympic Games found that in combat sports, such as boxing and wrestling, competitors wearing red won more often than those wearing blue. Later research suggested one reason may be that {{referees|33}} tend to give more points to competitors in red, even when the performance is identical."],
    ['lecturer', "But red isn't always helpful. In several experiments, students who saw the colour red before a test, for example on the cover of the exam paper, performed worse than other students. Researchers think this is because we associate red with {{danger|34}}, which makes people more cautious and anxious."],
    ['lecturer', "Blue, on the other hand, is usually linked with calm. Some cities have even experimented with blue street {{lighting|35}}. In Glasgow, and later in some railway stations in Japan, it was introduced in the hope of making people calmer, although it's hard to prove that it had a real effect."],
    ['lecturer', "There's also evidence that different colours suit different tasks. One study found that red backgrounds improved people's attention to detail, for example in proofreading, while blue backgrounds improved {{creativity|36}}, such as thinking of new uses for everyday objects."],
    ['lecturer', "Colour also affects how we respond to food. Blue is rare in natural foods, and some designers advise restaurants to avoid blue lighting and plates, because it seems to reduce {{appetite|37}}."],
    ['lecturer', "And what about green? An Australian study found that people who looked at a picture of a green roof for just forty seconds made fewer mistakes in a task afterwards than those who looked at a concrete roof. So a brief view of green may help to restore our {{concentration|38}}."],
    ['lecturer', "Businesses, of course, take colour very seriously. Studies suggest that a large proportion of our first impressions of a product are based on colour alone. But research shows that it's not about choosing the 'best' colour. What matters is whether the colour fits the brand's {{personality|39}}. Pink might work for a sweet shop, but not for a bank."],
    ['lecturer', "Finally, a warning about exaggerated claims. In the nineteen seventies, a shade known as Baker-Miller pink was painted on the walls of some prison {{cells|40}}, because early research suggested it made people less aggressive. However, later studies failed to find the same effect. So we should be careful about simple explanations."],
    ['lecturer', "Next week, we'll look at how colour vision works in other animals."],
    ['narrator', 'That is the end of Part 4. That is the end of the listening test.'],
  ];

  // Questions. kind: gap | mcq | two | match
  const LIMIT_WN = 'ONE WORD AND/OR A NUMBER';
  const Q = {
    1:  { kind: 'gap', ans: ['120'], limit: 'wn' },
    2:  { kind: 'gap', ans: ['light', 'lighting'], limit: 'wn' },
    3:  { kind: 'gap', ans: ['6', 'six'], limit: 'wn' },
    4:  { kind: 'gap', ans: ['studio'], limit: 'wn' },
    5:  { kind: 'gap', ans: ['reservoir'], limit: 'wn' },
    6:  { kind: 'gap', ans: ['85'], limit: 'wn' },
    7:  { kind: 'gap', ans: ['tripod'], limit: 'wn' },
    8:  { kind: 'gap', ans: ['students', 'student'], limit: 'wn' },
    9:  { kind: 'gap', ans: ['delgado'], limit: 'wn', key: 'Delgado' },
    10: { kind: 'gap', ans: ['museum'], limit: 'wn' },
    11: { kind: 'match', label: 'Airport Express', ans: 'A' },
    12: { kind: 'match', label: 'Route 3 (University)', ans: 'E' },
    13: { kind: 'match', label: 'Route 9 (Hillside)', ans: 'D' },
    14: { kind: 'match', label: 'Route 14 (Riverside)', ans: 'H' },
    15: { kind: 'match', label: 'Route 22 (Old Town)', ans: 'G' },
    16: { kind: 'match', label: 'Park and Ride', ans: 'F' },
    17: { kind: 'mcq', q: 'From next month, passengers buying tickets on the bus', opts: { A: 'must buy them before they travel.', B: 'cannot pay in cash.', C: 'will get a discount.' }, ans: 'B' },
    18: { kind: 'mcq', q: 'How much will a day ticket cost?', opts: { A: '£4.50', B: '£5.00', C: '£5.50' }, ans: 'A' },
    19: { kind: 'mcq', q: 'Why will the bus station close for three weeks?', opts: { A: 'to build new shops', B: 'to install new screens', C: 'to repair the roof' }, ans: 'C' },
    20: { kind: 'mcq', q: 'Printed timetables will be available', opts: { A: 'in public libraries.', B: 'on the buses.', C: 'at the bus station.' }, ans: 'A' },
    21: { kind: 'match', label: 'the opening scene', ans: 'F' },
    22: { kind: 'match', label: 'the interview with Mr Okoro', ans: 'B' },
    23: { kind: 'match', label: 'the background music', ans: 'G' },
    24: { kind: 'match', label: 'the drone shots', ans: 'C' },
    25: { kind: 'match', label: 'the time-lapse sequence', ans: 'A' },
    26: { kind: 'match', label: 'the ending', ans: 'D' },
    27: { kind: 'mcq', q: 'What was the tutor’s main criticism of the first edit?', opts: { A: 'It was too long.', B: 'It did not tell a clear story.', C: 'The camera work was poor.' }, ans: 'B' },
    28: { kind: 'mcq', q: 'Who will the students show the film to first?', opts: { A: 'their classmates', B: 'a film club', C: 'the people who work at the market' }, ans: 'C' },
    29: { kind: 'mcq', q: 'What do they decide about subtitles?', opts: { A: 'to use them throughout the film', B: 'to use them only for the interview', C: 'not to use them' }, ans: 'A' },
    30: { kind: 'mcq', q: 'Which festival will they enter?', opts: { A: 'an international festival', B: 'a national student festival', C: 'the city film festival' }, ans: 'B' },
    31: { kind: 'gap', ans: ['culture'], limit: 'w' },
    32: { kind: 'gap', ans: ['funerals', 'funeral'], limit: 'w' },
    33: { kind: 'gap', ans: ['referees', 'referee'], limit: 'w' },
    34: { kind: 'gap', ans: ['danger'], limit: 'w' },
    35: { kind: 'gap', ans: ['lighting', 'lights'], limit: 'w' },
    36: { kind: 'gap', ans: ['creativity'], limit: 'w' },
    37: { kind: 'gap', ans: ['appetite'], limit: 'w' },
    38: { kind: 'gap', ans: ['concentration'], limit: 'w' },
    39: { kind: 'gap', ans: ['personality'], limit: 'w' },
    40: { kind: 'gap', ans: ['cells', 'cell'], limit: 'w' },
  };
  const CHANGES = { A: 'It will run more often.', B: 'It will stop running in the evenings.', C: 'It will start earlier in the morning.', D: 'It will go further.', E: 'It will use electric buses.', F: 'It will stop at the hospital.', G: 'It will have a new number.', H: 'It will be cancelled.' };
  const VIEWS = { A: 'It should be shorter.', B: 'The sound needs to be re-recorded.', C: 'It should come earlier in the film.', D: 'It is the strongest part of the film.', E: 'It should be removed.', F: 'It needs more light.', G: 'It should be replaced.' };

  const gap = n => `<span class="gap" data-q="${n}"><span class="n">${n}</span><input type="text" id="q${n}" data-q="${n}" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Question ${n}"></span>`;
  const mcq = n => { const q = Q[n]; return `<div class="mcq" data-q="${n}" role="radiogroup" aria-labelledby="ql${n}"><div class="q"><span class="qn">${n}</span><span id="ql${n}">${q.q}</span></div>${Object.entries(q.opts).map(([k, v]) => `<label data-opt="${k}"><input type="radio" name="q${n}" value="${k}" data-q="${n}"><b>${k}</b><span>${v}</span></label>`).join('')}</div>`; };
  const sel = (n, letters) => `<select id="q${n}" data-q="${n}" aria-label="Question ${n}"><option value="">–</option>${letters.map(l => `<option>${l}</option>`).join('')}</select>`;
  const box = (title, obj) => `<div class="boxlist"><span class="label" style="grid-column:1/-1">${title}</span>${Object.entries(obj).map(([k, v]) => `<b>${k}</b><span>${v}</span>`).join('')}</div>`;
  const matchRows = (nums, opts) => nums.map(n => `<div class="match-row" data-q="${n}"><span class="qn">${n}</span><span class="who">${Q[n].label}</span>${sel(n, Object.keys(opts))}</div>`).join('');

  const PAPER = `
  <section class="part" id="part-1" data-part="1">
    <div class="part-head"><h2>Part 1</h2><span class="label">Questions 1–10</span></div>
    <div class="qblock">
      <h3>Questions 1–7</h3>
      <p class="instr">Complete the table below. Write <b>${LIMIT_WN}</b> for each answer.</p>
      <div class="ntable-wrap"><table class="ntable">
        <caption>Lakeside Arts Centre · Photography courses</caption>
        <thead><tr><th>Course</th><th>When</th><th>Cost</th><th>Other details</th></tr></thead>
        <tbody>
          <tr><td data-h="Course">Getting Started</td><td data-h="When"><span class="example">Example: <u>Monday evenings</u></span></td><td data-h="Cost">£ ${gap(1)}</td><td data-h="Other details">Mainly about how to control ${gap(2)}</td></tr>
          <tr><td data-h="Course">Portraits</td><td data-h="When">Wednesdays, for ${gap(3)} weeks</td><td data-h="Cost">£150</td><td data-h="Other details">Includes one session in a professional ${gap(4)}</td></tr>
          <tr><td data-h="Course">Wildlife</td><td data-h="When">Saturday mornings; meet at the ${gap(5)}</td><td data-h="Cost">£ ${gap(6)}</td><td data-h="Other details">Students must bring a ${gap(7)}</td></tr>
        </tbody>
      </table></div>
    </div>
    <div class="qblock">
      <h3>Questions 8–10</h3>
      <p class="instr">Complete the notes below. Write <b>${LIMIT_WN}</b> for each answer.</p>
      <div class="notes">
        <h4>Other information</h4>
        <ul>
          <li>10% discount for ${gap(8)}</li>
          <li>Tutor: Maria ${gap(9)}</li>
          <li>End-of-course exhibition: in the town ${gap(10)}</li>
        </ul>
      </div>
    </div>
  </section>

  <section class="part" id="part-2" data-part="2" hidden>
    <div class="part-head"><h2>Part 2</h2><span class="label">Questions 11–20</span></div>
    <div class="qblock">
      <h3>Questions 11–16</h3>
      <p class="instr">What change will be made to each bus service? Choose <b>SIX</b> answers from the box and write the correct letter, <b>A–H</b>, next to Questions 11–16.</p>
      ${box('Changes', CHANGES)}
      ${matchRows([11, 12, 13, 14, 15, 16], CHANGES)}
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
      <h3>Questions 21–26</h3>
      <p class="instr">What do Lily and Max agree about each part of their film? Choose <b>SIX</b> answers from the box and write the correct letter, <b>A–G</b>, next to Questions 21–26.</p>
      ${box('Opinions', VIEWS)}
      ${matchRows([21, 22, 23, 24, 25, 26], VIEWS)}
    </div>
    <div class="qblock">
      <h3>Questions 27–30</h3>
      <p class="instr">Choose the correct letter, <b>A, B or C</b>.</p>
      ${[27, 28, 29, 30].map(mcq).join('')}
    </div>
  </section>

  <section class="part" id="part-4" data-part="4" hidden>
    <div class="part-head"><h2>Part 4</h2><span class="label">Questions 31–40</span></div>
    <div class="qblock">
      <h3>Questions 31–40</h3>
      <p class="instr">Complete the notes below. Write <b>ONE WORD ONLY</b> for each answer.</p>
      <div class="notes">
        <h4>The psychology of colour</h4>
        <span class="h">Problems with research</span>
        <ul>
          <li>Reactions to colour depend on a person’s ${gap(31)}.</li>
          <li>White is linked with weddings in the West, but with ${gap(32)} in parts of East Asia.</li>
        </ul>
        <span class="h">Red</span>
        <ul>
          <li>Athletes in red win more often, possibly because ${gap(33)} favour them.</li>
          <li>Red before a test lowers performance, as it is linked with ${gap(34)}.</li>
        </ul>
        <span class="h">Blue</span>
        <ul>
          <li>Some cities have tried blue street ${gap(35)} to calm people.</li>
          <li>Blue backgrounds can improve ${gap(36)}.</li>
          <li>Restaurants may avoid blue, as it can reduce ${gap(37)}.</li>
        </ul>
        <span class="h">Green</span>
        <ul>
          <li>Looking at green briefly may help to restore ${gap(38)}.</li>
        </ul>
        <span class="h">Business and limits of research</span>
        <ul>
          <li>A brand’s colour should match its ${gap(39)}.</li>
          <li>Baker-Miller pink was used in prison ${gap(40)}, but later studies found no effect.</li>
        </ul>
      </div>
    </div>
  </section>`;

  // Part changes and reading/checking pauses in the recording (seconds) — filled in by tools/make_listening_audio.py
  const TIMELINE = [{"t":1.0,"focus":1},{"t":36.62,"pause":30,"label":"Reading time · Questions 1–5"},{"t":66.62,"speech":1,"part":1},{"t":189.73,"pause":30,"label":"Reading time · Questions 6–10"},{"t":219.73,"speech":1,"part":1},{"t":295.95,"pause":30,"label":"Checking time · Part 1"},{"t":325.95,"focus":2},{"t":325.95,"speech":1,"part":2},{"t":339.27,"pause":30,"label":"Reading time · Questions 11–16"},{"t":369.27,"speech":1,"part":2},{"t":466.44,"pause":30,"label":"Reading time · Questions 17–20"},{"t":496.44,"speech":1,"part":2},{"t":567.13,"pause":30,"label":"Checking time · Part 2"},{"t":597.13,"focus":3},{"t":597.13,"speech":1,"part":3},{"t":614.08,"pause":30,"label":"Reading time · Questions 21–26"},{"t":644.08,"speech":1,"part":3},{"t":740.8,"pause":30,"label":"Reading time · Questions 27–30"},{"t":770.8,"speech":1,"part":3},{"t":843.59,"pause":30,"label":"Checking time · Part 3"},{"t":873.59,"focus":4},{"t":873.59,"speech":1,"part":4},{"t":885.16,"pause":45,"label":"Reading time · Questions 31–40"},{"t":930.16,"speech":1,"part":4}];
  const partNames = { 1: 'Part 1 · Photography courses', 2: 'Part 2 · Changes to bus services', 3: 'Part 3 · Editing a documentary film', 4: 'Part 4 · The psychology of colour' };
  window.LISTENING_TEST = { num: 8, audio: 'audio/listening-test8.mp3', minutes: 18, mb: 9, roles: ROLES, script: SCRIPT, Q, paper: PAPER, timeline: TIMELINE, partNames };
})();
