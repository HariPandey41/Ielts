// IELTS Listening · Premium Test 5 — content only. The exam engine is assets/listening-exam.js.
// Premium Exam (band 7–9 level): kept for the mock test, not listed with the practice tests.
// `why` explains each answer and the distractors; limit 3 = NO MORE THAN THREE WORDS (AND/OR A NUMBER).
(() => {
  'use strict';
  // Speakers: label for the transcript, voice for tools/make_listening_audio.py
  const ROLES = {
    narrator:  { label: 'Narrator', voice: 'bm_george', speed: 0.94, lang: 'en-gb' },
    mechanic:  { label: 'Receptionist', voice: 'bm_daniel', speed: 1.03, lang: 'en-gb' },
    claire:    { label: 'Claire', voice: 'af_sarah', speed: 1.03, lang: 'en-us' },
    manager:   { label: 'Station manager', voice: 'bf_isabella', speed: 1.02, lang: 'en-gb' },
    walsh:     { label: 'Dr Walsh', voice: 'bm_fable', speed: 1.0, lang: 'en-gb' },
    hana:      { label: 'Hana', voice: 'af_nicole', speed: 1.03, lang: 'en-us' },
    luke:      { label: 'Luke', voice: 'bm_lewis', speed: 1.03, lang: 'en-gb' },
    lecturer:  { label: 'Lecturer', voice: 'af_heart', speed: 1.0, lang: 'en-us' },
  };

  // Script: [role, text] lines, or ['pause', seconds, label], or ['focus', part]
  // {{text|n}} marks where the answer to question n is heard.
  const SCRIPT = [
    ['focus', 1],
    ['narrator', 'IELTS Listening. Premium Test 5.'],
    ['narrator', 'In the test, you will hear a number of different recordings and you will have to answer questions on what you hear. There will be time for you to read the instructions and questions, and you will have a chance to check your work. All the recordings will be played once only. The test is in four parts.'],
    ['narrator', 'Now turn to Part 1.'],
    ['narrator', 'Part 1. You will hear a woman phoning a garage to book a service for her car. First, you have some time to look at questions 1 to 4.'],
    ['pause', 30, 'Reading time · Questions 1–4'],
    ['narrator', 'You will see that there is an example that has been done for you. On this occasion only, the conversation relating to this will be played first.'],
    ['mechanic', "Hartley's Garage, good morning."],
    ['claire', "Hi. I'd like to book my car in for a service, please. Could you tell me what the options are?"],
    ['mechanic', "Of course. The simplest is our basic safety check, which is forty-five pounds."],
    ['narrator', "The basic check costs forty-five pounds, so '45' has been written in the table. Now we shall begin. You should answer the questions as you listen, because you will not hear the recording a second time. Listen carefully and answer questions 1 to 4."],
    ['mechanic', "Hartley's Garage, good morning."],
    ['claire', "Hi. I'd like to book my car in for a service, please. Could you tell me what the options are?"],
    ['mechanic', "Of course. The simplest is our basic safety check, which is forty-five pounds. We check the lights, the tyres and the {{brakes|1}}, but we don't change any fluids. It's really for people who just want peace of mind before a long journey."],
    ['claire', "And the next level up?"],
    ['mechanic', "That's the interim service. It used to be a hundred and fifteen pounds, but our parts costs went up this year, so it's now {{a hundred and twenty-nine|2}}. For that, we change the engine oil and the {{oil filter|3}}, and do all the basic checks as well."],
    ['claire', "And the full service?"],
    ['mechanic', "Two hundred and ten pounds. That includes everything in the interim service, plus new air and fuel filters, and we also check the {{air conditioning|4}}. Most manufacturers recommend a full service every two years."],
    ['narrator', 'Before you hear the rest of the conversation, you have some time to look at questions 5 to 10.'],
    ['pause', 30, 'Reading time · Questions 5–10'],
    ['narrator', 'Now listen and answer questions 5 to 10.'],
    ['claire', "My car's due a full service, so I'll go for that."],
    ['mechanic', "Right. Can I take your name?"],
    ['claire', "Claire {{Whitlock|5}}. W, H, I, T, L, O, C, K."],
    ['mechanic', "And what car is it?"],
    ['claire', "It's a Ford. People always think it's a Focus, but it's actually a {{Fiesta|6}}, the older model."],
    ['mechanic', "Is there anything in particular you'd like us to look at?"],
    ['claire', "Yes. The steering feels fine, but there's a grinding noise when I'm {{braking|7}}, especially going downhill."],
    ['mechanic', "We'll check that carefully. When would you like to bring it in? We open at eight."],
    ['claire', "I'd say eight, but I have to take my son to school first. Could I drop it off at {{eight fifteen|8}} on Thursday?"],
    ['mechanic', "That's fine. Do you need a courtesy car? I'm afraid they're all booked on Thursday."],
    ['claire', "Oh. How will I get to work, then?"],
    ['mechanic', "One of our drivers can give you a free lift to the {{station|9}}, if that helps. It's only five minutes away."],
    ['claire', "Perfect, I can get the train from there. And when can I pick the car up?"],
    ['mechanic', "A full service takes most of the day. We close at six, but please collect it by {{five thirty|10}}, so we have time to go through the work with you."],
    ['claire', "Great. Thanks very much."],
    ['narrator', 'That is the end of Part 1. You now have half a minute to check your answers to Part 1.'],
    ['pause', 30, 'Checking time · Part 1'],

    ['focus', 2],
    ['narrator', 'Now turn to Part 2.'],
    ['narrator', 'Part 2. You will hear the manager of a railway station talking about how the station has been renovated. First, you have some time to look at questions 11 to 16.'],
    ['pause', 40, 'Reading time · Questions 11–16'],
    ['narrator', 'Now listen carefully and answer questions 11 to 16.'],
    ['manager', "Good evening, and thank you for coming. As you know, Kingsbridge station has just reopened after a two-year renovation, and tonight I'd like to explain the new layout. If you look at the plan, the main entrance from the street is at the bottom, and the platforms are along the top."],
    ['manager', "As you come in through the main entrance, the first room on your right is {{the new ticket office|11}}, which replaces the old ticket windows on the platform."],
    ['manager', "In the middle of the concourse, standing on its own so you can walk all the way round it, is {{the café|12}}, which has seating on all four sides."],
    ['manager', "On the left-hand side of the concourse, there are two rooms. The one at the top, in the corner next to the platform, is {{the waiting room|13}}, which is heated and has free Wi-Fi. Below it, nearer the entrance, is {{a secure bicycle store|14}}, which you can open with your travel card."],
    ['manager', "Over in the top right-hand corner, beside the platform, you'll find {{the lost property office|15}}. People expect it to be next to the ticket office, as it used to be, but it's moved."],
    ['manager', "And finally, just below the platform, there are two units between the café and the platform. The toilets are in the one on the right. The one on the left, nearer the waiting room, is {{a new shop|16}} selling newspapers and snacks."],
    ['narrator', 'Before you hear the rest of the talk, you have some time to look at questions 17 to 20.'],
    ['pause', 30, 'Reading time · Questions 17–20'],
    ['narrator', 'Now listen and answer questions 17 to 20.'],
    ['manager', "Now, why did we renovate the station? It was certainly looking old, and the roof leaked. But {{the main aim was to make it fully accessible|17}}, with lifts to every platform and no steps anywhere, which was something passengers had asked for for years."],
    ['manager', "There are several new features. We considered building a car park, but there simply wasn't space. What we have done is to cover {{the new roof with solar panels|18}}, which provide about a third of the station's electricity."],
    ['manager', "We surveyed passengers after the reopening. The new café and the extra seating were popular, but {{the improvement people mentioned most often was the clearer signs|19}}, which use larger letters and are much easier to read."],
    ['manager', "And looking ahead, the next big change will be {{direct trains to the airport|20}}, starting next spring, which will save most passengers a change of trains in the city centre. Thank you."],
    ['narrator', 'That is the end of Part 2. You now have half a minute to check your answers to Part 2.'],
    ['pause', 30, 'Checking time · Part 2'],

    ['focus', 3],
    ['narrator', 'Now turn to Part 3.'],
    ['narrator', 'Part 3. You will hear two tourism students, Hana and Luke, talking to their tutor, Dr Walsh, about their research into how travellers use guidebooks and travel apps. First, you have some time to look at questions 21 to 24.'],
    ['pause', 30, 'Reading time · Questions 21–24'],
    ['narrator', 'Now listen carefully and answer questions 21 to 24.'],
    ['walsh', "So, you've been looking at guidebooks and travel apps. How did you collect your data?"],
    ['hana', "We'd planned an online survey, but we were worried that it would only reach people who prefer apps. So instead, {{we interviewed travellers in person at the airport|21}}, which gave us a much more mixed group."],
    ['walsh', "Good thinking. What was your most surprising finding?"],
    ['luke', "We expected young people to use only apps, and most do. But {{a surprising number of young travellers still buy a printed guidebook as well|22}}, often for planning before the trip."],
    ['walsh', "And what's the main reason people choose apps?"],
    ['hana', "Cost isn't really a factor, because many guidebooks are cheap second-hand. And the maps are about equally good. {{It's mainly that the information is more up to date|23}}."],
    ['walsh', "I've read your draft. The data is good, but {{the literature review is too short|24}}. There's been quite a lot written on this, and you need to show you know it."],
    ['luke', "Okay. We'll expand that section."],
    ['narrator', 'Before you hear the rest of the discussion, you have some time to look at questions 25 to 30.'],
    ['pause', 30, 'Reading time · Questions 25–30'],
    ['narrator', 'Now listen and answer questions 25 to 30.'],
    ['walsh', "Let's go through your comparison. What did people say about how easy it is to update the information?"],
    ['hana', "That's clearly a strength of {{apps|25}}. Restaurants open and close so quickly, and apps can change overnight."],
    ['walsh', "Which do older travellers trust more?"],
    ['luke', "{{Guidebooks|26}}, definitely. They feel the information has been checked by a professional writer."],
    ['walsh', "And out-of-date information?"],
    ['hana', "A common complaint about {{guidebooks|27}}. Some people were using editions that were five years old."],
    ['walsh', "What about the risk that everyone ends up in the same places?"],
    ['luke', "We heard that about {{both of them|28}}. Whether it's a book's top ten or an app's ranking, people follow the same lists."],
    ['walsh', "And reviews from other travellers?"],
    ['hana', "That's something only {{apps|29}} offer, and people value it, although some don't trust the reviews."],
    ['walsh', "Anything else?"],
    ['luke', "Yes, a nice one. Many people said they {{keep their guidebooks as souvenirs|30}} after the trip, full of notes and tickets. Nobody said that about an app!"],
    ['walsh', "Lovely. Good work, both of you."],
    ['narrator', 'That is the end of Part 3. You now have half a minute to check your answers to Part 3.'],
    ['pause', 30, 'Checking time · Part 3'],

    ['focus', 4],
    ['narrator', 'Now turn to Part 4.'],
    ['narrator', 'Part 4. You will hear a lecture about the life cycle of the European eel. First, you have some time to look at questions 31 to 40.'],
    ['pause', 45, 'Reading time · Questions 31–40'],
    ['narrator', 'Now listen carefully and answer questions 31 to 40.'],
    ['lecturer', "Good morning. Today I want to tell you about one of the strangest journeys in the animal kingdom: the life cycle of the European eel."],
    ['lecturer', "For more than two thousand years, the origin of eels was a mystery. Nobody had ever seen an eel egg, or a baby eel. The Greek philosopher Aristotle concluded that eels simply arose from the {{mud|31}} at the bottom of rivers and ponds."],
    ['lecturer', "We now know that European eels breed thousands of kilometres away, in the {{Sargasso Sea|32}}, an area of the western Atlantic Ocean. The larvae that hatch there look nothing like adult eels. They're flat and transparent, and shaped like a {{leaf|33}}, which is why they weren't recognised as eels for so long."],
    ['lecturer', "The larvae drift towards Europe, carried mainly by the {{Gulf Stream|34}}, a journey that may take a year or more. As they approach the coast, they change shape and become small, transparent, worm-like fish known as {{glass eels|35}}. These swim into rivers, often in enormous numbers."],
    ['lecturer', "In fresh water, they darken in colour and become what are called {{yellow eels|36}}, and in this form they may live in rivers and lakes for ten, twenty or even more years. Then, one autumn, something triggers their final transformation. Their bodies turn silver, their {{eyes|37}} grow much larger, to help them see in the deep ocean, and their digestive system shrinks, because they will not eat again. They then begin the long journey back to the Sargasso Sea to breed and die."],
    ['lecturer', "Remarkably, no one had ever followed an adult eel all the way to its breeding grounds until two thousand and twenty-two, when scientists attached {{satellite tags|38}} to eels released off the coast of the Azores and tracked some of them to the Sargasso Sea."],
    ['lecturer', "Unfortunately, the species is now in serious trouble. The number of young eels reaching Europe has fallen by more than {{ninety|39}} per cent since the nineteen eighties. There are several causes: dams and other barriers on rivers, overfishing of glass eels, many of which are smuggled to Asia for farming, and a {{parasite|40}} accidentally introduced from Asia, which damages the organ eels use to control their buoyancy. Next week, we'll look at conservation efforts."],
    ['narrator', 'That is the end of Part 4. That is the end of the listening test.'],
  ];

  // Questions. kind: gap | mcq | two | match
  const LIMIT_3N = 'NO MORE THAN THREE WORDS AND/OR A NUMBER';
  const LIMIT_3 = 'NO MORE THAN THREE WORDS';
  const Q = {
    1:  { kind: 'gap', ans: ['brakes'], limit: 3, why: 'The basic check covers the lights, the tyres and the brakes; no fluids are changed.' },
    2:  { kind: 'gap', ans: ['129', '£129'], limit: 3, key: '129', why: 'It used to be £115 (distractor); it is now £129.' },
    3:  { kind: 'gap', ans: ['oil filter'], limit: 3, why: 'The interim service changes the engine oil and the oil filter.' },
    4:  { kind: 'gap', ans: ['air conditioning'], limit: 3, why: 'The full service also checks the air conditioning.' },
    5:  { kind: 'gap', ans: ['whitlock'], limit: 3, key: 'Whitlock', why: 'Spelled W-H-I-T-L-O-C-K.' },
    6:  { kind: 'gap', ans: ['fiesta'], limit: 3, key: 'Fiesta', why: 'People think it is a Focus (distractor); it is a Fiesta.' },
    7:  { kind: 'gap', ans: ['braking'], limit: 3, why: 'The steering is fine (distractor); the noise happens when braking.' },
    8:  { kind: 'gap', ans: ['8.15', '8.15 am', '8.15am', '8:15', 'eight fifteen', 'quarter past eight'], limit: 3, key: '8.15', why: 'The garage opens at eight (distractor); she will drop it off at 8.15.' },
    9:  { kind: 'gap', ans: ['station', 'the station'], limit: 3, key: 'station', why: 'No courtesy cars are free; a driver will take her to the station.' },
    10: { kind: 'gap', ans: ['5.30', '5.30 pm', '5.30pm', '5:30', 'five thirty', 'half past five'], limit: 3, key: '5.30', why: 'They close at six (distractor); collect by 5.30.' },
    11: { kind: 'match', label: 'Ticket office', ans: 'H', why: 'The first room on your right as you come in from the main entrance (bottom right).' },
    12: { kind: 'match', label: 'Café', ans: 'E', why: 'In the middle of the concourse, standing on its own.' },
    13: { kind: 'match', label: 'Waiting room', ans: 'A', why: 'On the left-hand side, at the top, in the corner next to the platform.' },
    14: { kind: 'match', label: 'Bicycle store', ans: 'B', why: 'On the left-hand side, below the waiting room, nearer the entrance.' },
    15: { kind: 'match', label: 'Lost property office', ans: 'F', why: 'Top right-hand corner beside the platform; it is no longer next to the ticket office (H).' },
    16: { kind: 'match', label: 'Shop', ans: 'C', why: 'Of the two units between the café and the platform, the toilets are on the right (D); the shop is on the left.' },
    17: { kind: 'mcq', q: 'What was the main aim of the renovation?', opts: { A: 'to repair the roof', B: 'to make the station accessible to everyone', C: 'to modernise the appearance' }, ans: 'B', why: 'The station looked old and the roof leaked (A, C), but the main aim was full accessibility.' },
    18: { kind: 'mcq', q: 'Which new feature has been added?', opts: { A: 'a car park', B: 'solar panels', C: 'electric car chargers' }, ans: 'B', why: 'A car park was considered but there was no space (A); the roof is covered with solar panels.' },
    19: { kind: 'mcq', q: 'Which improvement did passengers mention most often?', opts: { A: 'the café', B: 'more seating', C: 'clearer signs' }, ans: 'C', why: 'The café and seating were popular, but the clearer signs were mentioned most often.' },
    20: { kind: 'mcq', q: 'What will happen next spring?', opts: { A: 'Direct trains to the airport will start.', B: 'A new platform will open.', C: 'Trains will run all night.' }, ans: 'A', why: 'Direct airport trains will save a change in the city centre.' },
    21: { kind: 'mcq', q: 'How did the students collect their data?', opts: { A: 'through an online survey', B: 'by interviewing people at an airport', C: 'by observing tourists in the city' }, ans: 'B', why: 'They planned an online survey (A) but worried it would reach only app users.' },
    22: { kind: 'mcq', q: 'What surprised the students?', opts: { A: 'Older travellers use apps more than expected.', B: 'Many young travellers also buy printed guidebooks.', C: 'Few people use maps.' }, ans: 'B', why: 'Most young people use apps, as expected, but many also buy a printed guidebook.' },
    23: { kind: 'mcq', q: 'What is the main reason people choose apps?', opts: { A: 'They are cheaper.', B: 'Their maps are better.', C: 'Their information is more current.' }, ans: 'C', why: 'Cost is not a factor (A) and the maps are about equally good (B).' },
    24: { kind: 'mcq', q: 'What does Dr Walsh say should be improved?', opts: { A: 'the data', B: 'the literature review', C: 'the conclusion' }, ans: 'B', why: 'The data is good (A); the literature review is too short.' },
    25: { kind: 'match', label: 'easy to update', ans: 'B', why: 'Apps can change overnight.' },
    26: { kind: 'match', label: 'trusted more by older travellers', ans: 'A', why: 'Older travellers trust guidebooks, checked by a professional writer.' },
    27: { kind: 'match', label: 'often contain out-of-date information', ans: 'A', why: 'A common complaint about guidebooks; some editions were five years old.' },
    28: { kind: 'match', label: 'send everyone to the same places', ans: 'C', why: '“We heard that about both of them.”' },
    29: { kind: 'match', label: 'include reviews by other travellers', ans: 'B', why: 'Only apps offer reviews from other travellers.' },
    30: { kind: 'match', label: 'kept as souvenirs', ans: 'A', why: 'People keep their guidebooks as souvenirs; “nobody said that about an app”.' },
    31: { kind: 'gap', ans: ['mud'], limit: 3, why: 'Aristotle thought eels arose from the mud.' },
    32: { kind: 'gap', ans: ['sargasso sea', 'the sargasso sea', 'sargasso'], limit: 3, key: 'Sargasso Sea', why: 'They breed in the Sargasso Sea in the western Atlantic.' },
    33: { kind: 'gap', ans: ['leaf', 'a leaf'], limit: 3, key: 'leaf', why: 'The larvae are flat, transparent and leaf-shaped.' },
    34: { kind: 'gap', ans: ['gulf stream', 'the gulf stream'], limit: 3, key: 'Gulf Stream', why: 'The larvae are carried mainly by the Gulf Stream.' },
    35: { kind: 'gap', ans: ['glass eels'], limit: 3, why: 'Near the coast they become glass eels.' },
    36: { kind: 'gap', ans: ['yellow eels', 'yellow'], limit: 3, key: 'yellow eels', why: 'In fresh water they darken and become yellow eels.' },
    37: { kind: 'gap', ans: ['eyes'], limit: 3, why: 'Their eyes grow larger to see in the deep ocean.' },
    38: { kind: 'gap', ans: ['satellite tags', 'satellite'], limit: 3, key: 'satellite tags', why: 'In 2022 satellite tags tracked eels to the Sargasso Sea.' },
    39: { kind: 'gap', ans: ['90', 'ninety', '90%', '90 per cent', 'ninety per cent'], limit: 3, key: '90', why: 'Numbers of young eels have fallen by more than 90 per cent since the 1980s.' },
    40: { kind: 'gap', ans: ['parasite', 'a parasite'], limit: 3, key: 'parasite', why: 'A parasite from Asia damages the organ eels use to control buoyancy. Dams and overfishing are the other causes.' },
  };
  const PLACES = { A: 'A', B: 'B', C: 'C', D: 'D', E: 'E', F: 'F', G: 'G', H: 'H' };
  const SOURCES = { A: 'printed guidebooks', B: 'travel apps', C: 'both guidebooks and apps' };

  const gap = n => `<span class="gap" data-q="${n}"><span class="n">${n}</span><input type="text" id="q${n}" data-q="${n}" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Question ${n}"></span>`;
  const mcq = n => { const q = Q[n]; return `<div class="mcq" data-q="${n}" role="radiogroup" aria-labelledby="ql${n}"><div class="q"><span class="qn">${n}</span><span id="ql${n}">${q.q}</span></div>${Object.entries(q.opts).map(([k, v]) => `<label data-opt="${k}"><input type="radio" name="q${n}" value="${k}" data-q="${n}"><b>${k}</b><span>${v}</span></label>`).join('')}</div>`; };
  const sel = (n, letters) => `<select id="q${n}" data-q="${n}" aria-label="Question ${n}"><option value="">–</option>${letters.map(l => `<option>${l}</option>`).join('')}</select>`;
  const matchRows = (nums, opts) => nums.map(n => `<div class="match-row" data-q="${n}"><span class="qn">${n}</span><span class="who">${Q[n].label}</span>${sel(n, Object.keys(opts))}</div>`).join('');
  const twoBlock = (first, question, opts) => `<div class="mcq" data-q="${first}" data-two="1"><div class="q"><span class="qn">${first}–${first + 1}</span><span>${question}</span></div>${Object.entries(opts).map(([k, v]) => `<label data-opt="${k}"><input type="checkbox" value="${k}" data-two="1"><b>${k}</b><span>${v}</span></label>`).join('')}</div>`;

  const box2 = (title, obj) => `<div class="boxlist"><span class="label" style="grid-column:1/-1">${title}</span>${Object.entries(obj).map(([k, v]) => `<b>${k}</b><span>${v}</span>`).join('')}</div>`;
  // Plan of the station for questions 11–16 (labels A–H)
  const box = (x, y, w, h, l) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="${x + w / 2}" y="${y + h / 2 + 5}" text-anchor="middle" font-size="15" font-weight="700" fill="currentColor">${l}</text>`;
  const MAP = `<figure style="margin:0 0 14px"><svg viewBox="0 0 620 340" role="img" aria-label="Plan of Kingsbridge station. Platform along the top, main entrance at the bottom, concourse between them with rooms labelled A to H." style="width:100%;max-width:620px;height:auto;color:inherit">
    <text x="310" y="18" text-anchor="middle" font-size="14" font-weight="700" fill="currentColor">Kingsbridge station</text>
    <rect x="10" y="26" width="600" height="28" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="310" y="45" text-anchor="middle" font-size="13" fill="currentColor">PLATFORM</text>
    <rect x="10" y="60" width="600" height="240" fill="none" stroke="currentColor" stroke-dasharray="4 4"/>
    ${box(20, 66, 110, 70, 'A')}
    ${box(20, 160, 110, 70, 'B')}
    ${box(220, 66, 85, 44, 'C')}
    ${box(315, 66, 85, 44, 'D')}
    ${box(250, 150, 120, 64, 'E')}
    ${box(490, 66, 110, 70, 'F')}
    ${box(490, 160, 110, 44, 'G')}
    ${box(490, 226, 110, 64, 'H')}
    <text x="310" y="262" text-anchor="middle" font-size="12" fill="currentColor">concourse</text>
    <rect x="250" y="296" width="120" height="10" fill="currentColor"/><text x="310" y="326" text-anchor="middle" font-size="13" font-weight="700" fill="currentColor">MAIN ENTRANCE ↑</text>
  </svg></figure>`;

  const PAPER = `
  <section class="part" id="part-1" data-part="1">
    <div class="part-head"><h2>Part 1</h2><span class="label">Questions 1–10</span></div>
    <div class="qblock">
      <h3>Questions 1–4</h3>
      <p class="instr">Complete the table below. Write <b>${LIMIT_3N}</b> for each answer.</p>
      <div class="tbl-wrap"><table class="rev" style="max-width:640px">
        <caption style="text-align:left;font-weight:700;padding-bottom:6px">Hartley’s Garage · Services</caption>
        <thead><tr><th>Service</th><th>Price</th><th>Includes</th></tr></thead>
        <tbody>
          <tr><td>Basic check</td><td>£ <u>45</u> (example)</td><td>lights, tyres and ${gap(1)}</td></tr>
          <tr><td>Interim service</td><td>£ ${gap(2)}</td><td>engine oil and ${gap(3)}</td></tr>
          <tr><td>Full service</td><td>£ 210</td><td>new filters and a check of the ${gap(4)}</td></tr>
        </tbody></table></div>
    </div>
    <div class="qblock">
      <h3>Questions 5–10</h3>
      <p class="instr">Complete the booking form below. Write <b>${LIMIT_3N}</b> for each answer.</p>
      <div class="form">
        <h4>Booking · Full service</h4>
        <div class="line"><span>Name:</span><span>Claire ${gap(5)}</span></div>
        <div class="line"><span>Car:</span><span>Ford ${gap(6)}</span></div>
        <div class="line"><span>Problem:</span><span>grinding noise when ${gap(7)}</span></div>
        <div class="line"><span>Drop-off:</span><span>Thursday at ${gap(8)}</span></div>
        <div class="line"><span>Transport:</span><span>free lift to the ${gap(9)}</span></div>
        <div class="line"><span>Collect by:</span><span>${gap(10)} p.m.</span></div>
      </div>
    </div>
  </section>

  <section class="part" id="part-2" data-part="2" hidden>
    <div class="part-head"><h2>Part 2</h2><span class="label">Questions 11–20</span></div>
    <div class="qblock">
      <h3>Questions 11–16</h3>
      <p class="instr">Label the plan below. Write the correct letter, <b>A–H</b>, next to Questions 11–16.</p>
      ${MAP}
      ${matchRows([11, 12, 13, 14, 15, 16], PLACES)}
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
      <p class="instr">Choose the correct letter, <b>A, B or C</b>.</p>
      ${[21, 22, 23, 24].map(mcq).join('')}
    </div>
    <div class="qblock">
      <h3>Questions 25–30</h3>
      <p class="instr">What do the students say about each feature? Write the correct letter, <b>A, B or C</b>, next to Questions 25–30.</p>
      ${box2('Sources', SOURCES)}
      ${matchRows([25, 26, 27, 28, 29, 30], SOURCES)}
    </div>
  </section>

  <section class="part" id="part-4" data-part="4" hidden>
    <div class="part-head"><h2>Part 4</h2><span class="label">Questions 31–40</span></div>
    <div class="qblock">
      <h3>Questions 31–40</h3>
      <p class="instr">Complete the notes below. Write <b>${LIMIT_3N}</b> for each answer.</p>
      <div class="notes">
        <h4>The life cycle of the European eel</h4>
        <ul>
          <li>Aristotle believed eels came from ${gap(31)}.</li>
          <li>Eels breed in the ${gap(32)}.</li>
          <li>Larvae are flat and shaped like a ${gap(33)}.</li>
          <li>Larvae are carried to Europe by the ${gap(34)}.</li>
          <li>Near the coast they become ${gap(35)}.</li>
          <li>In fresh water they become ${gap(36)}.</li>
          <li>Before returning to sea, their ${gap(37)} grow larger.</li>
          <li>In 2022, eels were followed using ${gap(38)}.</li>
          <li>Young eels have declined by over ${gap(39)} per cent since the 1980s.</li>
          <li>Threats include dams, overfishing and a ${gap(40)}.</li>
        </ul>
      </div>
    </div>
  </section>`;

  // Part changes and reading/checking pauses in the recording (seconds) — filled in by tools/make_listening_audio.py
  const TIMELINE = [{"t":1.0,"focus":1},{"t":35.11,"pause":30,"label":"Reading time · Questions 1–4"},{"t":65.11,"speech":1,"part":1},{"t":161.47,"pause":30,"label":"Reading time · Questions 5–10"},{"t":191.47,"speech":1,"part":1},{"t":267.21,"pause":30,"label":"Checking time · Part 1"},{"t":297.21,"focus":2},{"t":297.21,"speech":1,"part":2},{"t":311.3,"pause":40,"label":"Reading time · Questions 11–16"},{"t":351.3,"speech":1,"part":2},{"t":430.92,"pause":30,"label":"Reading time · Questions 17–20"},{"t":460.92,"speech":1,"part":2},{"t":519.78,"pause":30,"label":"Checking time · Part 2"},{"t":549.78,"focus":3},{"t":549.78,"speech":1,"part":3},{"t":568.66,"pause":30,"label":"Reading time · Questions 21–24"},{"t":598.66,"speech":1,"part":3},{"t":679.02,"pause":30,"label":"Reading time · Questions 25–30"},{"t":709.02,"speech":1,"part":3},{"t":795.16,"pause":30,"label":"Checking time · Part 3"},{"t":825.16,"focus":4},{"t":825.16,"speech":1,"part":4},{"t":837.55,"pause":45,"label":"Reading time · Questions 31–40"},{"t":882.55,"speech":1,"part":4}];
  const partNames = { 1: 'Part 1 · Booking a car service', 2: 'Part 2 · The renovated Kingsbridge station', 3: 'Part 3 · Guidebooks and travel apps', 4: 'Part 4 · The life cycle of the eel' };
  window.LISTENING_TEST = { num: 105, name: 'Premium Test 5', audio: 'audio/listening-test105.mp3', minutes: 17, mb: 8, roles: ROLES, script: SCRIPT, Q, paper: PAPER, timeline: TIMELINE, partNames };
})();
