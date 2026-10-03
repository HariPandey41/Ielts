// IELTS Academic Reading · Practice Test 10 — content only. The exam engine is assets/reading-exam.js.
(() => {
  'use strict';
  const passages = [
    {
      title: 'The Chemistry of Bread',
      sub: 'You should spend about 20 minutes on Questions 1–13, which are based on Reading Passage 1 below.',
      paras: [
        ['', 'Bread seems simple: flour, water, yeast and heat produce a food found in many cultures. Its apparent simplicity hides a sequence of chemical and physical changes. Mixing creates a network, fermentation produces gas and heat transforms a soft dough into a crusted loaf.'],
        ['', 'Flour contains proteins that can join when water is added and the mixture is worked. Two of these proteins form gluten, an elastic network that traps gas. The amount and quality of gluten vary between wheat varieties, which is one reason why flour intended for bread behaves differently from flour used for cakes.'],
        ['', 'Yeast feeds on sugars and releases carbon dioxide and alcohol during fermentation. The gas forms bubbles in the dough, while the alcohol contributes to aroma and largely evaporates during baking. Temperature affects the speed of fermentation: a warmer dough usually rises faster, but very high temperatures can damage the yeast.'],
        ['', 'Salt has several functions. It adds flavour, strengthens the gluten network and slows yeast activity, giving the baker more control over timing. Too much salt can inhibit fermentation, while too little may produce a loaf with a weak structure and a flat taste.'],
        ['', 'During baking, the dough expands rapidly. Heat causes gases to expand and water to turn into steam, while proteins set and starch changes. The outer surface dries and darkens through reactions between sugars and proteins. This browning creates many of the aromas associated with a fresh loaf.'],
        ['', 'Steam in the oven affects the crust. A humid surface remains flexible for longer, allowing the loaf to expand before the crust hardens. Professional bakers may inject steam at the beginning of baking, while home bakers can create a similar effect with a covered pan or a tray of hot water.'],
        ['', 'Bread continues to change after it leaves the oven. As it cools, the crumb becomes firmer and flavours develop. Over time, starch molecules rearrange and the bread becomes stale, even if it has not lost all its moisture. Freezing slows this process, while refrigeration can make some breads stale more quickly.'],
      ],
    },
    {
      title: 'Citizen Science',
      sub: 'You should spend about 20 minutes on Questions 14–26, which are based on Reading Passage 2 below.',
      paras: [
        ['A', 'Citizen science involves members of the public collecting or analysing information for research. Volunteers may count birds, photograph insects, record rainfall or classify images from a telescope. The projects vary greatly, but they all rely on people outside professional laboratories contributing observations.'],
        ['B', 'The scale of participation can be a major advantage. A small research team cannot watch every beach or garden, while thousands of volunteers can collect observations over a wide area. The data may be uneven, but it can reveal patterns that would be invisible in a short, tightly controlled study.'],
        ['C', 'Training improves the quality of observations. Volunteers may receive an illustrated guide, an online quiz or feedback after their first submissions. Simple categories are easier to apply consistently, although some projects need specialist participants who can identify species or interpret complex images.'],
        ['D', 'Digital platforms have lowered the cost of participation. A phone can record a location and upload a photograph immediately. The same convenience creates privacy questions when images include people or private land. Project leaders need clear rules about what is collected, who can see it and how long it is stored.'],
        ['E', 'Volunteers are not merely unpaid instruments. Many join because they want to learn, protect a local place or meet people with similar interests. When a project shares results and explains how observations are used, participants are more likely to remain involved and to notice changes in their own environment.'],
        ['F', 'Scientists must still decide whether the data answer the research question. A large number of observations does not remove bias: volunteers may be concentrated in accessible areas or may record attractive species more often than difficult ones. Statistical methods can account for some patterns, but the limitations should be reported openly.'],
      ],
    },
    {
      title: 'The Benefits of Walking',
      sub: 'You should spend about 20 minutes on Questions 27–40, which are based on Reading Passage 3 below.',
      paras: [
        ['', 'Walking is one of the simplest forms of movement, but public-health researchers study it because small changes in daily activity can accumulate. A person does not need to become an athlete to gain a benefit: walking to a station, taking stairs or spending time outdoors can add movement to an ordinary day.'],
        ['', 'The physical effects are familiar. Regular walking can support cardiovascular health, balance and muscle strength. The size of the benefit depends on pace, distance and a person’s starting point, but even moderate activity may be more realistic for an inactive adult than an ambitious exercise programme that ends after a few weeks.'],
        ['', 'Walking also changes attention. A route through a park exposes a person to natural variation, while a short walk after a difficult task can create a break from concentrated work. Researchers do not claim that every walk improves creativity, but a change of setting may help people return to a problem with a different focus.'],
        ['', 'The design of streets influences who walks. Continuous pavements, safe crossings, shade and places to rest make walking possible for more people, including those with limited mobility. A destination must also be close enough to reach. Telling people to walk without changing a hostile environment is unlikely to produce a lasting change.'],
        ['', 'Walking can be social or solitary. Neighbourhood walking groups provide motivation and contact, while some people value a quiet route without conversation. Digital step counters can encourage activity through feedback, but they may also make people focus on numbers rather than how movement feels.'],
        ['', 'Weather and safety remain practical barriers. Covered routes, lighting and traffic reduction can help, but solutions must reflect local conditions. A shaded path may be valuable in a hot climate, while protection from rain may matter more elsewhere. There is no single street design that suits every community.'],
        ['', 'The strongest case for walking is therefore not that it is a cure for every problem. It is flexible, inexpensive and can be built into routines. When streets, workplaces and neighbourhoods make movement easy, people are more likely to gain health and social benefits without treating exercise as a separate task.'],
      ],
    },
  ];
  const box = { A: 'pace', B: 'balance', C: 'focus', D: 'crossings', E: 'motivation', F: 'lighting', G: 'routines', H: 'weather' };
  const Q = {
    1: { kind: 'tfng', s: 'Bread’s apparent simplicity hides several changes during its production.', a: 'TRUE', ev: 'The passage describes chemical and physical changes during mixing, fermentation and heating.' },
    2: { kind: 'tfng', s: 'All wheat flour contains the same amount of gluten.', a: 'FALSE', ev: 'The amount and quality of gluten vary between wheat varieties.' },
    3: { kind: 'tfng', s: 'Yeast produces carbon dioxide during fermentation.', a: 'TRUE', ev: 'Yeast releases carbon dioxide and alcohol during fermentation.' },
    4: { kind: 'tfng', s: 'Salt makes yeast activity faster in every dough.', a: 'FALSE', ev: 'Salt slows yeast activity.' },
    5: { kind: 'tfng', s: 'Browning reactions contribute to the smell of fresh bread.', a: 'TRUE', ev: 'Browning creates many aromas associated with a fresh loaf.' },
    6: { kind: 'tfng', s: 'Refrigeration keeps every type of bread fresh for longer than freezing.', a: 'NOT GIVEN', ev: 'The passage says refrigeration can make some breads stale more quickly, but does not compare every type.' },
    7: { kind: 'gap', a: ['gluten'], limit: 1, ev: 'Two proteins form gluten, an elastic network.' },
    8: { kind: 'gap', a: ['gas'], limit: 1, ev: 'Gluten traps gas.' },
    9: { kind: 'gap', a: ['carbon dioxide'], limit: 2, ev: 'Yeast releases carbon dioxide.' },
    10: { kind: 'gap', a: ['salt'], limit: 1, ev: 'Salt slows yeast activity and strengthens gluten.' },
    11: { kind: 'gap', a: ['steam'], limit: 1, ev: 'Heat causes water to turn into steam.' },
    12: { kind: 'gap', a: ['crust'], limit: 1, ev: 'A humid surface remains flexible before the crust hardens.' },
    13: { kind: 'gap', a: ['freezing'], limit: 1, ev: 'Freezing slows the staling process.' },
    14: { kind: 'para', s: 'a definition of citizen science', a: 'A', ev: 'Paragraph A defines citizen science as public participation in collecting or analysing research information.' },
    15: { kind: 'para', s: 'a reason why a large number of volunteers can help research', a: 'B', ev: 'Paragraph B explains that volunteers can cover a wide area.' },
    16: { kind: 'para', s: 'a method of improving the quality of volunteer records', a: 'C', ev: 'Paragraph C describes guides, quizzes and feedback.' },
    17: { kind: 'para', s: 'a privacy issue created by smartphone participation', a: 'D', ev: 'Paragraph D mentions images of people or private land.' },
    18: { kind: 'para', s: 'a reason why volunteers may continue participating', a: 'E', ev: 'Paragraph E says participants remain involved when results are shared and explained.' },
    19: { kind: 'gap', a: ['birds'], limit: 1, ev: 'Volunteers may count birds.' },
    20: { kind: 'gap', a: ['rainfall'], limit: 1, ev: 'Volunteers may record rainfall.' },
    21: { kind: 'gap', a: ['accessible areas'], limit: 2, ev: 'Volunteers may be concentrated in accessible areas.' },
    22: { kind: 'gap', a: ['bias'], limit: 1, ev: 'A large number of observations does not remove bias.' },
    23: { kind: 'gap', a: ['feedback'], limit: 1, ev: 'Feedback after first submissions can improve training.' },
    24: { kind: 'gap', a: ['privacy'], limit: 1, ev: 'Digital participation creates privacy questions.' },
    25: { kind: 'gap', a: ['results'], limit: 1, ev: 'Sharing results helps participants remain involved.' },
    26: { kind: 'gap', a: ['limitations'], limit: 1, ev: 'Project limitations should be reported openly.' },
    27: { kind: 'mcq', s: 'What is the main point of the first paragraph?', o: { A: 'Walking is useful only for athletes.', B: 'Small amounts of walking can add up in daily life.', C: 'People should avoid public transport.', D: 'Outdoor activity is always difficult.' }, a: 'B', ev: 'The paragraph explains that ordinary journeys can add movement to the day.' },
    28: { kind: 'mcq', s: 'Why may moderate walking suit an inactive adult?', o: { A: 'It is more realistic than an ambitious programme.', B: 'It requires specialist equipment.', C: 'It always produces rapid results.', D: 'It eliminates the need for sleep.' }, a: 'A', ev: 'Moderate activity may be more realistic than an ambitious programme that ends quickly.' },
    29: { kind: 'mcq', s: 'What may a change of setting do after concentrated work?', o: { A: 'Guarantee a creative idea.', B: 'Help someone return with a different focus.', C: 'Prevent all future concentration.', D: 'Make every task shorter.' }, a: 'B', ev: 'A short walk may help people return to a problem with a different focus.' },
    30: { kind: 'mcq', s: 'Which street feature can help people with limited mobility?', o: { A: 'Unsafe crossings.', B: 'Places to rest.', C: 'Longer distances.', D: 'More traffic.' }, a: 'B', ev: 'Places to rest are among the features that make walking possible for more people.' },
    31: { kind: 'mcq', s: 'What is one possible disadvantage of digital step counters?', o: { A: 'They cannot provide feedback.', B: 'They may make people focus on numbers rather than feeling.', C: 'They stop people walking socially.', D: 'They require covered routes.' }, a: 'B', ev: 'Step counters may make people focus on numbers rather than how movement feels.' },
    32: { kind: 'ynng', s: 'A person must become an athlete to benefit from walking.', a: 'NO', ev: 'The passage says a person does not need to become an athlete.' },
    33: { kind: 'ynng', s: 'The physical benefit of walking is identical for every person.', a: 'NO', ev: 'The benefit depends on pace, distance and starting point.' },
    34: { kind: 'ynng', s: 'Street design can influence who is able to walk.', a: 'YES', ev: 'Continuous pavements, crossings, shade and rest places affect access.' },
    35: { kind: 'ynng', s: 'Walking groups are useful only for people who dislike walking alone.', a: 'NOT GIVEN', ev: 'The passage says groups provide motivation, but does not make this claim about everyone who joins.' },
    36: { kind: 'ynng', s: 'Every community needs exactly the same walking infrastructure.', a: 'NO', ev: 'Solutions must reflect local conditions and no single street design suits every community.' },
    37: { kind: 'box', a: 'A', ev: 'The benefit of walking depends partly on pace.' },
    38: { kind: 'box', a: 'B', ev: 'Walking can support balance.' },
    39: { kind: 'box', a: 'D', ev: 'Safe crossings help make walking possible.' },
    40: { kind: 'box', a: 'G', ev: 'Walking can be built into daily routines.' },
  };
  const TF_KEY = '<div class="key-box"><dl><dt>TRUE</dt><dd>if the statement agrees with the information</dd><dt>FALSE</dt><dd>if the statement contradicts the information</dd><dt>NOT GIVEN</dt><dd>if there is no information on this</dd></dl></div>';
  const YN_KEY = '<div class="key-box"><dl><dt>YES</dt><dd>if the statement agrees with the claims of the writer</dd><dt>NO</dt><dd>if the statement contradicts the claims of the writer</dd><dt>NOT GIVEN</dt><dd>if it is impossible to say what the writer thinks about this</dd></dl></div>';
  const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i);
  const keyBox = (title, obj) => `<div class="key-box"><span class="label">${title}</span><dl>${Object.entries(obj).map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl></div>`;
  const selectQ = (h, n, opts, ph) => `<div class="q" data-q="${n}"><div class="stem"><span class="qn">${n}</span><span>${h.esc(h.Q[n].s)}</span></div>${h.select(n, Object.keys(opts).map(k => [k, k]), ph)}</div>`;
  const build = h => [
    `<div class="qset"><h3>Questions 1–6</h3><p class="instr">Do the following statements agree with the information given in Reading Passage 1? Choose</p>${TF_KEY}${range(1, 6).map(h.tf).join('')}</div>
    <div class="qset"><h3>Questions 7–13</h3><p class="instr">Complete the notes below. Choose <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.</p><div class="notes"><h4>Bread making</h4><ul><li>Proteins form ${h.gapIn(7)}.</li><li>The network traps ${h.gapIn(8)}.</li><li>Yeast releases ${h.gapIn(9)}.</li><li>${h.gapIn(10)} slows yeast activity.</li><li>Water turns into ${h.gapIn(11)} during baking.</li><li>Steam keeps the ${h.gapIn(12)} flexible.</li><li>${h.gapIn(13)} slows staling.</li></ul></div></div>`,
    `<div class="qset"><h3>Questions 14–18</h3><p class="instr">Reading Passage 2 has six paragraphs, <b>A–F</b>. Which paragraph contains the following information? <b>NB</b> You may use any letter more than once.</p>${range(14, 18).map(n => selectQ(h, n, { A: 1, B: 1, C: 1, D: 1, E: 1, F: 1 }, 'Choose A–F')).join('')}</div>
    <div class="qset"><h3>Questions 19–26</h3><p class="instr">Complete the notes below. Choose <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.</p><div class="notes"><h4>Citizen science</h4><ul><li>Volunteers may count ${h.gapIn(19)}.</li><li>They may also record ${h.gapIn(20)}.</li><li>Volunteers may be concentrated in ${h.gapIn(21)}.</li><li>Large datasets can still contain ${h.gapIn(22)}.</li><li>Training may include ${h.gapIn(23)}.</li><li>Phone projects raise questions about ${h.gapIn(24)}.</li><li>Sharing ${h.gapIn(25)} can keep participants involved.</li><li>Research ${h.gapIn(26)} should be reported.</li></ul></div></div>`,
    `<div class="qset"><h3>Questions 27–31</h3><p class="instr">Choose the correct letter, <b>A, B, C or D</b>.</p>${range(27, 31).map(h.mcq).join('')}</div>
    <div class="qset"><h3>Questions 32–36</h3><p class="instr">Do the following statements agree with the claims of the writer in Reading Passage 3? Choose</p>${YN_KEY}${range(32, 36).map(h.tf).join('')}</div>
    <div class="qset"><h3>Questions 37–40</h3><p class="instr">Complete the summary using the list of words, <b>A–H</b>, below.</p><div class="notes"><h4>Walking in daily life</h4><p>The benefit of walking depends partly on ${h.boxSel(37)}. It can support ${h.boxSel(38)}. Urban design should include safe ${h.boxSel(39)}. Walking is easiest to maintain when it becomes part of daily ${h.boxSel(40)}.</p></div>${keyBox('List of words', box)}</div>`,
  ];
  window.READING_TEST = { num: 10, passages, Q, headings: {}, box, ranges: [[1, 13], [14, 26], [27, 40]], build };
})();
