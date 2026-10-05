// IELTS Listening · Premium Test 1 — content only. The exam engine is assets/listening-exam.js.
// Premium Exam (band 7–9 level): kept for the mock test, not listed with the practice tests.
// `why` explains each answer and the distractors; limit 3 = NO MORE THAN THREE WORDS.
(() => {
  'use strict';
  // Speakers: label for the transcript, voice for tools/make_listening_audio.py
  const ROLES = {
    narrator:  { label: 'Narrator', voice: 'bm_george', speed: 0.94, lang: 'en-gb' },
    clerk:     { label: 'Registration officer', voice: 'bf_isabella', speed: 1.02, lang: 'en-gb' },
    marcus:    { label: 'Marcus', voice: 'am_michael', speed: 1.03, lang: 'en-us' },
    presenter: { label: 'Presenter', voice: 'af_nicole', speed: 1.02, lang: 'en-us' },
    planner:   { label: 'Helen Price', voice: 'bf_emma', speed: 1.02, lang: 'en-gb' },
    nadia:     { label: 'Nadia', voice: 'af_bella', speed: 1.03, lang: 'en-us' },
    owen:      { label: 'Owen', voice: 'bm_lewis', speed: 1.03, lang: 'en-gb' },
    grant:     { label: 'Professor Grant', voice: 'bm_fable', speed: 1.0, lang: 'en-gb' },
    lecturer:  { label: 'Lecturer', voice: 'am_eric', speed: 1.0, lang: 'en-us' },
  };

  // Script: [role, text] lines, or ['pause', seconds, label], or ['focus', part]
  // {{text|n}} marks where the answer to question n is heard.
  const SCRIPT = [
    ['focus', 1],
    ['narrator', 'IELTS Listening. Premium Test 1.'],
    ['narrator', 'In the test, you will hear a number of different recordings and you will have to answer questions on what you hear. There will be time for you to read the instructions and questions, and you will have a chance to check your work. All the recordings will be played once only. The test is in four parts.'],
    ['narrator', 'Now turn to Part 1.'],
    ['narrator', 'Part 1. You will hear a man phoning to register for an academic conference. First, you have some time to look at questions 1 to 4.'],
    ['pause', 30, 'Reading time · Questions 1–4'],
    ['narrator', 'You will see that there is an example that has been done for you. On this occasion only, the conversation relating to this will be played first.'],
    ['clerk', "Good morning, conference office. How can I help you?"],
    ['marcus', "Hi. I'd like to register for the Coastal Futures conference in April. I tried to do it online, but the website kept rejecting my card."],
    ['clerk', "Sorry about that. I can do it over the phone. Are you attending as a speaker or as a delegate?"],
    ['marcus', "Just as a delegate this time."],
    ['narrator', "The man is attending as a delegate, so B has been chosen. Now we shall begin. You should answer the questions as you listen, because you will not hear the recording a second time. Listen carefully and answer questions 1 to 4."],
    ['clerk', "Good morning, conference office. How can I help you?"],
    ['marcus', "Hi. I'd like to register for the Coastal Futures conference in April. I tried to do it online, but the website kept rejecting my card."],
    ['clerk', "Sorry about that. I can do it over the phone. Are you attending as a speaker or as a delegate?"],
    ['marcus', "Just as a delegate this time."],
    ['clerk', "And will you be coming for the whole conference? It runs from Wednesday to Friday."],
    ['marcus', "I'd planned to come for all three days, but I've got a meeting at work on the Wednesday that I can't move. So {{it'll be the Thursday and Friday|1}}, if that's possible."],
    ['clerk', "That's fine. Now, on the Thursday afternoon, delegates choose one of three workshops. There's one on mapping coastal change with drones, one on writing funding applications, and one on talking to the media."],
    ['marcus', "The drone one sounds the most fun, but I've done a course on that already. And I'm hopeless with journalists. Actually, {{the funding one would be the most useful|2}}. My team is applying for a grant next year."],
    ['clerk', "I'll put you down for that. On the Thursday evening there's a dinner at the Maritime Museum. It's included in the price, but we need to know numbers."],
    ['marcus', "I'd love to come, but my train home is at seven. Oh, wait, no, that's on the Friday. {{Yes, put me down for the dinner|3}}."],
    ['clerk', "Will you need a parking permit for the campus?"],
    ['marcus', "No. I'll come by train, and I've booked a hotel near the station. {{I'll walk to the campus|4}} from there. It's only about fifteen minutes."],
    ['narrator', 'Before you hear the rest of the conversation, you have some time to look at questions 5 to 10.'],
    ['pause', 30, 'Reading time · Questions 5–10'],
    ['narrator', 'Now listen and answer questions 5 to 10.'],
    ['clerk', "Right, I just need your details. Your name?"],
    ['marcus', "Marcus {{Lindqvist|5}}. That's L, I, N, D, Q, V, I, S, T."],
    ['clerk', "Thank you. And which organisation are you from?"],
    ['marcus', "I used to be at the university, but now I work for the {{Marine Survey Office|6}}, in Plymouth."],
    ['clerk', "And your job title?"],
    ['marcus', "I'm a {{data analyst|7}}. Well, a senior one, but you don't need to put that."],
    ['clerk', "Any dietary requirements for the lunches and dinner?"],
    ['marcus', "I'm not vegetarian, but I can't eat {{nuts|8}}. It's quite a serious allergy, so could you make sure the caterers know?"],
    ['clerk', "Of course. Now, the fee for two days is one hundred and eighty pounds. But members of the Coastal Society get a discount."],
    ['marcus', "I'm not a member, I'm afraid. But I am {{under thirty|9}}. Is there a reduction for early-career researchers?"],
    ['clerk', "There is, yes. That brings it down to one hundred and forty-five pounds. How would you like to pay, as the card didn't work online?"],
    ['marcus', "Could you send an invoice? My employer will pay it. If you send it {{to my manager|10}}, she'll arrange the payment. I'll give you her email address."],
    ['clerk', "Perfect. I'll send you a confirmation as well."],
    ['narrator', 'That is the end of Part 1. You now have half a minute to check your answers to Part 1.'],
    ['pause', 30, 'Checking time · Part 1'],

    ['focus', 2],
    ['narrator', 'Now turn to Part 2.'],
    ['narrator', 'Part 2. You will hear part of a local radio programme in which a town planner talks about the redevelopment of the Eastport waterfront. First, you have some time to look at questions 11 to 15.'],
    ['pause', 40, 'Reading time · Questions 11–15'],
    ['narrator', 'Now listen carefully and answer questions 11 to 15.'],
    ['presenter', "With me is Helen Price, who's been in charge of planning the new Eastport waterfront. Helen, a lot of listeners haven't been down there since the work finished. What will they find?"],
    ['planner', "Well, if you look at the map on our website, you'll see the main road running along the top, and the river along the bottom. The best way in is from the car park, in the top left-hand corner. When you come out of the car park, turn left onto the riverside path. The first building you come to, on your right, at the corner by the river, is {{the old customs house, which is now the visitor centre|11}}."],
    ['planner', "Keep walking along the path towards the old dock, the square basin of water in the middle of the map. Just before you reach the dock, on your right, between the path and the river, is {{the market hall|12}}, which opens on Fridays and Saturdays. The building opposite it, on the other side of the path, is offices."],
    ['planner', "The path crosses the dock on a footbridge. As you come off the footbridge, there's a long building immediately on your right, facing the river. People often assume it's the hotel, but the hotel is further along. That one is {{the boatyard, where traditional wooden boats are repaired|13}}. Visitors can watch from the gallery."],
    ['planner', "Then, at the far end of the path, in the bottom right-hand corner, right by the river, there's {{the new sailing school|14}}. And opposite that, on the other side of the path, but still on the corner, is the hotel."],
    ['planner', "Finally, the side street that runs up from the footbridge to the main road. As you walk up it, the building on your left, just before you reach the road, is {{the children's play centre|15}}. The one on the right is a restaurant. The play centre is indoors, so it's very popular when it rains."],
    ['narrator', 'Before you hear the rest of the programme, you have some time to look at questions 16 to 20.'],
    ['pause', 30, 'Reading time · Questions 16–20'],
    ['narrator', 'Now listen and answer questions 16 to 20.'],
    ['presenter', "It looks very different from ten years ago. Why did the council decide to redevelop the area?"],
    ['planner', "For a long time, people assumed the problem was that it was ugly, and it certainly was. But the main reason was that {{the warehouses were unsafe|16}}. Several had partly collapsed, and the council was legally responsible."],
    ['presenter', "And was it difficult to fund?"],
    ['planner', "Very. In the end, most of the money came from {{a government regeneration grant|17}}, although private investors paid for the hotel."],
    ['presenter', "What do people like most about it?"],
    ['planner', "Our survey asked that question. The cafés and the views came fairly high, but the clear winner was {{the riverside path itself|18}}. People can walk all the way from the town centre without crossing a road."],
    ['presenter', "Is there anything you'd do differently?"],
    ['planner', "Probably the lighting. We didn't put enough in at first, and some people felt unsafe after dark. We've now added {{solar-powered lamps|19}} along the whole path."],
    ['presenter', "And what's next?"],
    ['planner', "The next stage is the old railway line behind the main road. We plan to turn it into {{a cycle route|20}} linking the waterfront to the villages to the east. Work should start next spring."],
    ['narrator', 'That is the end of Part 2. You now have half a minute to check your answers to Part 2.'],
    ['pause', 30, 'Checking time · Part 2'],

    ['focus', 3],
    ['narrator', 'Now turn to Part 3.'],
    ['narrator', 'Part 3. You will hear two engineering students, Nadia and Owen, talking to their tutor, Professor Grant, about a project on heat pumps. First, you have some time to look at questions 21 to 26.'],
    ['pause', 30, 'Reading time · Questions 21–26'],
    ['narrator', 'Now listen carefully and answer questions 21 to 26.'],
    ['grant', "So, you've visited the houses with heat pumps. How did you find the households in the end? I know you were going to ask the energy company."],
    ['nadia', "We did, but they wouldn't share customers' details. And the installers' list was mostly new houses, which we weren't interested in. In the end, {{a local community energy group put us in touch with its members|21}}, which gave us twelve older houses."],
    ['grant', "Good. And what was the main thing you were trying to find out?"],
    ['owen', "Originally we wanted to compare running costs with gas boilers. But the bills are so complicated that it wasn't realistic. So we focused on {{whether the houses were actually warm enough|22}}, which in the end turned out to be more interesting."],
    ['grant', "And what did you find?"],
    ['nadia', "Most were. Where they weren't, people tend to blame the heat pump, but in almost every case {{the problem was the radiators. They were too small|23}}. Heat pumps produce water at a lower temperature than boilers, so you need bigger radiators to get the same amount of heat out."],
    ['grant', "Exactly. What about noise? That's a common worry."],
    ['owen', "Only one household complained, and that was because the unit had been put right under a bedroom window. So {{it was a problem with where it was installed, not the technology|24}}."],
    ['grant', "Now, you were asked to include something in your report about why people chose a heat pump. Which two reasons came up most often?"],
    ['nadia', "Well, hardly anyone mentioned the government grant, which surprised us. And only a couple said it was to save money. But {{almost everyone said they wanted to reduce their carbon emissions|25}}."],
    ['owen', "And quite a few had {{had an old boiler that needed replacing anyway|26}}, so it was a natural time to change. Nobody said they'd been persuaded by neighbours, though."],
    ['narrator', 'Before you hear the rest of the discussion, you have some time to look at questions 27 to 30.'],
    ['pause', 30, 'Reading time · Questions 27–30'],
    ['narrator', 'Now listen and answer questions 27 to 30.'],
    ['grant', "Let's talk about your report. I'd like you to be much more specific in the methods section. For instance, how did you measure the temperatures?"],
    ['owen', "We left {{small digital sensors|27}} in the living room and main bedroom of each house for a fortnight."],
    ['grant', "Say so. And state the period. Also, in the results, you've written averages for the whole house, but the guidance is clear that the living room is what matters. Most households said the minimum comfortable temperature there was {{twenty-one degrees|28}}, so compare against that."],
    ['nadia', "Okay. And the conclusion?"],
    ['grant', "At the moment, it reads like an advertisement for heat pumps. You need a section on {{limitations|29}}. Twelve houses is a small sample, and they were all volunteers, so they were probably enthusiastic."],
    ['owen', "That's fair. What about the presentation?"],
    ['grant', "Keep the slides simple. And rather than reading out figures, I'd suggest {{one clear graph|30}} for each finding. The audience will remember that."],
    ['nadia', "Thanks, that's really helpful."],
    ['narrator', 'That is the end of Part 3. You now have half a minute to check your answers to Part 3.'],
    ['pause', 30, 'Checking time · Part 3'],

    ['focus', 4],
    ['narrator', 'Now turn to Part 4.'],
    ['narrator', 'Part 4. You will hear a lecture about an approach to managing water in cities known as the sponge city. First, you have some time to look at questions 31 to 40.'],
    ['pause', 50, 'Reading time · Questions 31–40'],
    ['narrator', 'Now listen carefully and answer questions 31 to 40.'],
    ['lecturer', "Good afternoon. Today I want to look at a different way of thinking about rain in cities, an approach that has become known as the sponge city."],
    ['lecturer', "The term itself is usually associated with China, and in particular with the landscape architect Yu Kongjian. It's often said that the idea began as a response to drought, but in fact {{it was serious urban flooding|31}}, especially a flood in Beijing in two thousand and twelve that killed dozens of people, that persuaded the government to act. In two thousand and fifteen, it launched a national programme with thirty pilot cities."],
    ['lecturer', "Why do modern cities flood so easily? The basic problem is that {{most of their surfaces are sealed|32}}. Roofs, roads and car parks don't let water through, so when it rains, almost all the water runs off at once, and the drains simply can't cope. Climate change makes this worse, by making very heavy rainfall more frequent."],
    ['lecturer', "The traditional engineering solution was to build bigger pipes and concrete channels to carry water away as fast as possible. The sponge city reverses this logic. Instead of removing water quickly, the aim is to {{hold water|33}} where it falls, let it soak into the ground, and release it slowly. Planners often express the target as a percentage: in many Chinese pilot cities, the goal is to absorb or reuse {{seventy per cent|34}} of rainfall on site."],
    ['lecturer', "There are several key techniques. Roofs can be covered with plants, which store water and release it gradually. Pavements and car parks can be made from {{porous materials|35}}, which allow water to pass through into the soil below. And many cities are creating rain gardens, which are shallow areas planted with species that can survive both {{flooding and drought|36}}."],
    ['lecturer', "Let me take you through how water moves through a typical sponge system, step by step. First, rain falls on a green roof, where some of it is {{absorbed by plants|37}}. The rest flows down into a rain garden or swale, a kind of shallow, planted ditch. There, the water slowly passes through {{layers of soil|38}}, which removes much of the pollution it has picked up. It then either refills the {{groundwater|39}} beneath the city or is collected in underground tanks. Finally, the stored water can be {{used for irrigation|40}} of parks and street trees during dry periods, which reduces the demand for drinking water."],
    ['lecturer', "The results so far have been mixed. Some pilot areas have performed well, but in very extreme storms, sponge measures alone can't prevent flooding, and they need to be combined with traditional drainage. Next week, we'll look at how some European cities have adapted these ideas."],
    ['narrator', 'That is the end of Part 4. That is the end of the listening test.'],
  ];

  // Questions. kind: gap | mcq | two | match
  const LIMIT_3 = 'NO MORE THAN THREE WORDS';
  const LIMIT_3N = 'NO MORE THAN THREE WORDS AND/OR A NUMBER';
  const Q = {
    1:  { kind: 'mcq', q: 'Which days will Marcus attend?', opts: { A: 'Wednesday and Thursday', B: 'Thursday and Friday', C: 'all three days' }, ans: 'B', why: 'He planned all three days (C) but has a meeting on Wednesday, so A is wrong too: “it’ll be the Thursday and Friday”.' },
    2:  { kind: 'mcq', q: 'Which workshop does Marcus choose?', opts: { A: 'mapping coastal change', B: 'writing funding applications', C: 'talking to the media' }, ans: 'B', why: 'The drone mapping sounds fun but he has done a course on it (A); he is “hopeless with journalists” (C).' },
    3:  { kind: 'mcq', q: 'What does Marcus decide about the conference dinner?', opts: { A: 'He will attend it.', B: 'He cannot attend because of his train.', C: 'He will decide later.' }, ans: 'A', why: 'He first thinks his train is on Thursday (B), then corrects himself: the train is on Friday, so “put me down for the dinner”.' },
    4:  { kind: 'mcq', q: 'How will Marcus travel to the campus each day?', opts: { A: 'by car', B: 'by train', C: 'on foot' }, ans: 'C', why: 'He travels to the town by train (B) and needs no parking permit (A); from the hotel he will walk.' },
    5:  { kind: 'gap', ans: ['lindqvist'], limit: 3, key: 'Lindqvist', why: 'Spelled out letter by letter: L-I-N-D-Q-V-I-S-T.' },
    6:  { kind: 'gap', ans: ['marine survey office'], limit: 3, key: 'Marine Survey Office', why: 'He “used to be at the university”, which is a distractor; he now works for the Marine Survey Office.' },
    7:  { kind: 'gap', ans: ['data analyst', 'senior data analyst'], limit: 3, why: '“I’m a data analyst.” “Senior” is optional; the answer must stay within three words.' },
    8:  { kind: 'gap', ans: ['nuts'], limit: 3, why: 'He is “not vegetarian”, so meat is fine; the allergy is to nuts.' },
    9:  { kind: 'gap', ans: ['under thirty', 'under 30'], limit: 3, why: 'He is not a Coastal Society member (distractor); the discount is for being under thirty.' },
    10: { kind: 'gap', ans: ['his manager', 'manager', 'my manager', 'to his manager', 'to my manager'], limit: 3, key: 'his manager', why: 'The card failed online, so the invoice goes to his manager, who will arrange payment.' },
    11: { kind: 'match', label: 'Visitor centre', ans: 'A', why: 'The first building on the right of the path, at the corner by the river: the old customs house.' },
    12: { kind: 'match', label: 'Market hall', ans: 'C', why: 'Just before the dock, on the right, between the path and the river. D, opposite it, is offices.' },
    13: { kind: 'match', label: 'Boatyard', ans: 'E', why: 'Immediately on the right after the footbridge, facing the river. People assume it is the hotel (H), but the hotel is further along.' },
    14: { kind: 'match', label: 'Sailing school', ans: 'G', why: 'Bottom right-hand corner, right by the river. The hotel is opposite it (H), on the other side of the path.' },
    15: { kind: 'match', label: 'Children’s play centre', ans: 'B', why: 'On the left as you walk up the side street, just before the main road. F, on the right, is a restaurant.' },
    16: { kind: 'mcq', q: 'According to Helen, the main reason for redeveloping the waterfront was that', opts: { A: 'it was unattractive.', B: 'the buildings were dangerous.', C: 'there was no access to the river.' }, ans: 'B', why: 'People assumed it was because the area was ugly (A), but “the main reason was that the warehouses were unsafe”.' },
    17: { kind: 'mcq', q: 'Most of the funding for the project came from', opts: { A: 'the government.', B: 'private investors.', C: 'the local council.' }, ans: 'A', why: 'Private investors paid only for the hotel (B); most money came from a government regeneration grant.' },
    18: { kind: 'mcq', q: 'What did the survey show people liked most?', opts: { A: 'the cafés', B: 'the views', C: 'the riverside path' }, ans: 'C', why: 'Cafés and views “came fairly high”, but “the clear winner was the riverside path”.' },
    19: { kind: 'mcq', q: 'What change has been made since the waterfront opened?', opts: { A: 'more lighting', B: 'more security staff', C: 'longer opening hours' }, ans: 'A', why: 'Some people felt unsafe after dark, so solar-powered lamps were added; security staff are not mentioned.' },
    20: { kind: 'mcq', q: 'The next stage of the project will be', opts: { A: 'a new railway station.', B: 'a cycle route.', C: 'a second hotel.' }, ans: 'B', why: 'The old railway line will become a cycle route; no new station is planned.' },
    21: { kind: 'mcq', q: 'How did the students find the households for their study?', opts: { A: 'through an energy company', B: 'through a list of installers', C: 'through a community group' }, ans: 'C', why: 'The energy company refused (A) and the installers’ list was mostly new houses (B).' },
    22: { kind: 'mcq', q: 'What did the students mainly investigate?', opts: { A: 'running costs', B: 'whether homes were warm enough', C: 'noise levels' }, ans: 'B', why: 'They originally planned to compare running costs (A) but the bills were too complicated.' },
    23: { kind: 'mcq', q: 'Where homes were not warm enough, the main cause was', opts: { A: 'the heat pump itself.', B: 'radiators that were too small.', C: 'poor insulation.' }, ans: 'B', why: 'People tend to blame the heat pump (A), but “the problem was the radiators. They were too small”.' },
    24: { kind: 'mcq', q: 'What do the students say about noise?', opts: { A: 'It was a common complaint.', B: 'It was caused by poor positioning.', C: 'It was worse in older houses.' }, ans: 'B', why: 'Only one household complained (not A), because the unit was under a bedroom window.' },
    25: { kind: 'two', pair: [25, 26], ans: ['B', 'D'], why: '“Almost everyone” wanted to cut emissions (B), and many had a boiler that needed replacing (D). Hardly anyone mentioned the grant (A), only a couple mentioned saving money (C), and nobody mentioned neighbours (E).' },
    26: { kind: 'two', pair: [25, 26], ans: ['B', 'D'], why: 'See question 25.' },
    27: { kind: 'gap', ans: ['small digital sensors', 'digital sensors', 'sensors'], limit: 3, why: '“We left small digital sensors in the living room and main bedroom.”' },
    28: { kind: 'gap', ans: ['21 degrees', 'twenty-one degrees', '21'], limit: 3, key: '21 degrees', why: 'The minimum comfortable living-room temperature most households gave.' },
    29: { kind: 'gap', ans: ['limitations'], limit: 3, why: 'The report reads like an advertisement, so it needs a section on limitations (small, self-selected sample).' },
    30: { kind: 'gap', ans: ['one clear graph', 'a clear graph', 'clear graph', 'graph'], limit: 3, key: 'one clear graph', why: 'Rather than reading out figures, one clear graph for each finding.' },
    31: { kind: 'mcq', q: 'According to the lecturer, the Chinese sponge city programme was started because of', opts: { A: 'a long drought.', B: 'serious flooding.', C: 'water pollution.' }, ans: 'B', why: '“It’s often said” that it began because of drought (A), “but in fact it was serious urban flooding”.' },
    32: { kind: 'mcq', q: 'The main reason modern cities flood easily is that', opts: { A: 'their drains are too old.', B: 'most surfaces do not let water through.', C: 'they are built on low ground.' }, ans: 'B', why: '“Most of their surfaces are sealed”; the drains cannot cope as a result, but their age is not the cause.' },
    33: { kind: 'gap', ans: ['hold water', 'hold'], limit: 3, key: 'hold water', why: 'The sponge city reverses the old aim of removing water quickly: hold water where it falls.' },
    34: { kind: 'gap', ans: ['70', '70%', 'seventy', 'seventy per cent', '70 per cent', '70 percent'], limit: 3, key: '70%', why: 'The target in many Chinese pilot cities: absorb or reuse 70% of rainfall on site. Thirty is the number of pilot cities.' },
    35: { kind: 'gap', ans: ['porous materials', 'porous'], limit: 3, why: 'Pavements and car parks made from porous materials let water through to the soil.' },
    36: { kind: 'gap', ans: ['flooding and drought', 'flood and drought'], limit: 3, why: 'Rain-garden plants must survive both flooding and drought.' },
    37: { kind: 'gap', ans: ['absorbed by plants', 'absorbed'], limit: 3, why: 'Step 1 of the flow chart: on a green roof, some rain is absorbed by plants.' },
    38: { kind: 'gap', ans: ['layers of soil', 'soil layers'], limit: 3, key: 'layers of soil', why: 'Step 3: water passes slowly through layers of soil, which removes much of the pollution.' },
    39: { kind: 'gap', ans: ['groundwater'], limit: 3, why: 'Step 4: water refills the groundwater or is stored in underground tanks.' },
    40: { kind: 'gap', ans: ['used for irrigation', 'irrigation'], limit: 3, why: 'Step 5: stored water is used for irrigation of parks and trees in dry periods.' },
  };
  const PLACES = { A: 'A', B: 'B', C: 'C', D: 'D', E: 'E', F: 'F', G: 'G', H: 'H' };

  const gap = n => `<span class="gap" data-q="${n}"><span class="n">${n}</span><input type="text" id="q${n}" data-q="${n}" autocomplete="off" autocapitalize="off" spellcheck="false" aria-label="Question ${n}"></span>`;
  const mcq = n => { const q = Q[n]; return `<div class="mcq" data-q="${n}" role="radiogroup" aria-labelledby="ql${n}"><div class="q"><span class="qn">${n}</span><span id="ql${n}">${q.q}</span></div>${Object.entries(q.opts).map(([k, v]) => `<label data-opt="${k}"><input type="radio" name="q${n}" value="${k}" data-q="${n}"><b>${k}</b><span>${v}</span></label>`).join('')}</div>`; };
  const sel = (n, letters) => `<select id="q${n}" data-q="${n}" aria-label="Question ${n}"><option value="">–</option>${letters.map(l => `<option>${l}</option>`).join('')}</select>`;
  const matchRows = (nums, opts) => nums.map(n => `<div class="match-row" data-q="${n}"><span class="qn">${n}</span><span class="who">${Q[n].label}</span>${sel(n, Object.keys(opts))}</div>`).join('');
  const twoBlock = (first, question, opts) => `<div class="mcq" data-q="${first}" data-two="1"><div class="q"><span class="qn">${first}–${first + 1}</span><span>${question}</span></div>${Object.entries(opts).map(([k, v]) => `<label data-opt="${k}"><input type="checkbox" value="${k}" data-two="1"><b>${k}</b><span>${v}</span></label>`).join('')}</div>`;

  // Plan of the waterfront for questions 11–15 (labels A–H are the buildings)
  const box = (x, y, w, h, l) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="${x + w / 2}" y="${y + h / 2 + 5}" text-anchor="middle" font-size="15" font-weight="700" fill="currentColor">${l}</text>`;
  const MAP = `<figure style="margin:0 0 14px"><svg viewBox="0 0 620 340" role="img" aria-label="Plan of the Eastport waterfront. Main road along the top and river along the bottom, with the riverside path between them. Car park at top left. The dock is in the middle, crossed by a footbridge, with a side street running from the footbridge up to the main road. Buildings are labelled A to H." style="width:100%;max-width:620px;height:auto;color:inherit">
    <text x="310" y="20" text-anchor="middle" font-size="14" font-weight="700" fill="currentColor">Eastport waterfront</text>
    <rect x="10" y="30" width="600" height="26" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="310" y="48" text-anchor="middle" font-size="13" fill="currentColor">MAIN ROAD</text>
    <rect x="20" y="66" width="110" height="80" fill="none" stroke="currentColor" stroke-dasharray="5 4"/><text x="75" y="110" text-anchor="middle" font-size="13" fill="currentColor">Car park</text>
    ${box(150, 120, 100, 62, 'D')}
    ${box(262, 64, 50, 70, 'B')}
    <line x1="318" y1="56" x2="318" y2="196" stroke="currentColor" stroke-dasharray="3 3"/><line x1="346" y1="56" x2="346" y2="196" stroke="currentColor" stroke-dasharray="3 3"/><text x="332" y="150" text-anchor="middle" font-size="11" fill="currentColor" transform="rotate(-90 332 150)">side street</text>
    ${box(352, 64, 50, 70, 'F')}
    ${box(500, 120, 100, 62, 'H')}
    <path d="M10 192 H265 M395 192 H610 M10 222 H265 M395 222 H610" stroke="currentColor" stroke-width="1"/><text x="70" y="212" text-anchor="middle" font-size="12" fill="currentColor">riverside path →</text>
    <rect x="265" y="186" width="130" height="104" fill="none" stroke="currentColor" stroke-width="1.5"/><text x="330" y="268" text-anchor="middle" font-size="13" fill="currentColor">Dock</text>
    <line x1="265" y1="207" x2="395" y2="207" stroke="currentColor" stroke-width="5"/><text x="330" y="228" text-anchor="middle" font-size="10" fill="currentColor">footbridge</text>
    ${box(20, 232, 90, 50, 'A')}
    ${box(140, 232, 110, 50, 'C')}
    ${box(405, 232, 110, 50, 'E')}
    ${box(530, 232, 75, 50, 'G')}
    <path d="M10 300 Q160 290 310 302 T610 298" fill="none" stroke="currentColor" stroke-width="1.2"/><text x="310" y="328" text-anchor="middle" font-size="13" fill="currentColor">RIVER</text>
  </svg></figure>`;

  const flowBox = c => `<div style="border:1.5px solid currentColor;border-radius:4px;padding:8px 12px;max-width:520px">${c}</div><div aria-hidden="true" style="padding:2px 0 2px 24px">↓</div>`;

  const PAPER = `
  <section class="part" id="part-1" data-part="1">
    <div class="part-head"><h2>Part 1</h2><span class="label">Questions 1–10</span></div>
    <div class="qblock">
      <h3>Questions 1–4</h3>
      <p class="instr">Choose the correct letter, <b>A, B or C</b>.</p>
      <div class="mcq"><div class="q"><span class="qn">Ex</span><span>Marcus is attending the conference as</span></div><label><b>A</b><span>a speaker.</span></label><label class="key"><b>B</b><span>a delegate. ✓</span></label><label><b>C</b><span>an organiser.</span></label></div>
      ${[1, 2, 3, 4].map(mcq).join('')}
    </div>
    <div class="qblock">
      <h3>Questions 5–10</h3>
      <p class="instr">Complete the form below. Write <b>${LIMIT_3}</b> for each answer.</p>
      <div class="form">
        <h4>Coastal Futures Conference · Registration</h4>
        <div class="line"><span>Surname:</span><span>${gap(5)}</span></div>
        <div class="line"><span>Organisation:</span><span>the ${gap(6)}, Plymouth</span></div>
        <div class="line"><span>Job title:</span><span>${gap(7)}</span></div>
        <div class="line"><span>Dietary needs:</span><span>no ${gap(8)} (serious allergy)</span></div>
        <div class="line"><span>Fee reduction:</span><span>delegate is ${gap(9)}</span></div>
        <div class="line"><span>Payment:</span><span>send invoice to ${gap(10)}</span></div>
      </div>
    </div>
  </section>

  <section class="part" id="part-2" data-part="2" hidden>
    <div class="part-head"><h2>Part 2</h2><span class="label">Questions 11–20</span></div>
    <div class="qblock">
      <h3>Questions 11–15</h3>
      <p class="instr">Label the plan below. Write the correct letter, <b>A–H</b>, next to Questions 11–15.</p>
      ${MAP}
      ${matchRows([11, 12, 13, 14, 15], PLACES)}
    </div>
    <div class="qblock">
      <h3>Questions 16–20</h3>
      <p class="instr">Choose the correct letter, <b>A, B or C</b>.</p>
      ${[16, 17, 18, 19, 20].map(mcq).join('')}
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
      <h3>Questions 25 and 26</h3>
      <p class="instr">Choose <b>TWO</b> letters, <b>A–E</b>.</p>
      ${twoBlock(25, 'Which <b>TWO</b> reasons for choosing a heat pump did most households give?', { A: 'a government grant', B: 'reducing carbon emissions', C: 'saving money', D: 'replacing an old boiler', E: 'advice from neighbours' })}
    </div>
    <div class="qblock">
      <h3>Questions 27–30</h3>
      <p class="instr">Complete the notes below. Write <b>${LIMIT_3N}</b> for each answer.</p>
      <div class="notes">
        <h4>Tutor’s advice on the report</h4>
        <ul>
          <li>Methods: explain that temperatures were recorded with ${gap(27)} over two weeks.</li>
          <li>Results: compare living-room temperatures with ${gap(28)}.</li>
          <li>Conclusion: add a section on ${gap(29)}.</li>
          <li>Presentation: use ${gap(30)} for each finding.</li>
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
        <h4>The sponge city</h4>
        <ul>
          <li>Main aim: to ${gap(33)} where it falls, let it soak in and release it slowly</li>
          <li>Target in many pilot cities: absorb or reuse ${gap(34)} of rainfall</li>
          <li>Pavements and car parks made of ${gap(35)}</li>
          <li>Rain gardens: plants that survive ${gap(36)}</li>
        </ul>
      </div>
    </div>
    <div class="qblock">
      <h3>Questions 37–40</h3>
      <p class="instr">Complete the flow chart below. Write <b>${LIMIT_3}</b> for each answer.</p>
      <div class="notes">
        <h4>How water moves through a sponge system</h4>
        ${flowBox(`Rain falls on a green roof, where some is ${gap(37)}.`)}
        ${flowBox('The rest flows into a rain garden or swale.')}
        ${flowBox(`The water passes slowly through ${gap(38)}, which removes pollution.`)}
        ${flowBox(`It refills the ${gap(39)} or is stored in underground tanks.`)}
        <div style="border:1.5px solid currentColor;border-radius:4px;padding:8px 12px;max-width:520px">Stored water is ${gap(40)} of parks and trees in dry periods.</div>
      </div>
    </div>
  </section>`;

  // Part changes and reading/checking pauses in the recording (seconds) — filled in by tools/make_listening_audio.py
  const TIMELINE = [{"t":1.0,"focus":1},{"t":35.19,"pause":30,"label":"Reading time · Questions 1–4"},{"t":65.19,"speech":1,"part":1},{"t":208.97,"pause":30,"label":"Reading time · Questions 5–10"},{"t":238.97,"speech":1,"part":1},{"t":319.6,"pause":30,"label":"Checking time · Part 1"},{"t":349.6,"focus":2},{"t":349.6,"speech":1,"part":2},{"t":365.95,"pause":40,"label":"Reading time · Questions 11–15"},{"t":405.95,"speech":1,"part":2},{"t":514.61,"pause":30,"label":"Reading time · Questions 16–20"},{"t":544.61,"speech":1,"part":2},{"t":623.91,"pause":30,"label":"Checking time · Part 2"},{"t":653.91,"focus":3},{"t":653.91,"speech":1,"part":3},{"t":670.76,"pause":30,"label":"Reading time · Questions 21–26"},{"t":700.76,"speech":1,"part":3},{"t":817.03,"pause":30,"label":"Reading time · Questions 27–30"},{"t":847.03,"speech":1,"part":3},{"t":914.7,"pause":30,"label":"Checking time · Part 3"},{"t":944.7,"focus":4},{"t":944.7,"speech":1,"part":4},{"t":959.33,"pause":50,"label":"Reading time · Questions 31–40"},{"t":1009.33,"speech":1,"part":4}];
  const partNames = { 1: 'Part 1 · Registering for a conference', 2: 'Part 2 · The Eastport waterfront', 3: 'Part 3 · A study of heat pumps', 4: 'Part 4 · Sponge cities' };
  window.LISTENING_TEST = { num: 101, name: 'Premium Test 1', audio: 'audio/listening-test101.mp3', minutes: 19, mb: 9, roles: ROLES, script: SCRIPT, Q, paper: PAPER, timeline: TIMELINE, partNames };
})();
