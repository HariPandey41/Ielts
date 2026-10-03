// IELTS Academic Reading · Practice Test 9 — content only. The exam engine is assets/reading-exam.js.
(() => {
  'use strict';
  const passages = [
    {
      title: 'The Invention of the Barcode',
      sub: 'You should spend about 20 minutes on Questions 1–13, which are based on Reading Passage 1 below.',
      paras: [
        ['', 'A barcode is so familiar that shoppers rarely notice it, yet the pattern of lines and spaces represents a major change in how goods move through a store. Before automated scanning, a cashier read a printed price or typed a product number. The process was slower and more vulnerable to transcription errors.'],
        ['', 'The first ideas for automatic product identification appeared before supermarkets were ready to adopt them. Inventors proposed patterns that could be read by light, but early equipment was expensive and unreliable. The technology needed a cheap scanner, a standard numbering system and a reason for manufacturers and retailers to cooperate.'],
        ['', 'A turning point came when engineers developed a circular bull’s-eye design. It could be scanned from several directions, which seemed convenient for a product moving along a conveyor. The design was eventually replaced by the familiar rectangular pattern because printing defects made some circular codes difficult to read accurately.'],
        ['', 'The first retail scan in the United States took place in 1974 on a packet of chewing gum. The event attracted attention because it demonstrated a practical system, not because the product was unusual. Supermarkets could now update prices in a central computer instead of changing labels on every item.'],
        ['', 'Barcodes also produced information beyond the price of an item. Stores could track sales, identify popular products and plan stock deliveries. This data improved logistics, but it also changed the relationship between retailers and customers. A purchase could become part of a record used to predict future demand.'],
        ['', 'The system was not universally welcomed. Some workers feared that scanning would reduce the need for cashiers, while some shoppers worried about privacy. In practice, employment changed rather than disappearing entirely, and many concerns depended on how stores used the data. The technology itself did not determine every social outcome.'],
        ['', 'Modern codes can contain much more information than the original retail symbol. Two-dimensional patterns can store website addresses, tickets or medical details, and a phone camera can read them. The basic principle remains the same: a physical pattern translates information into a form that a machine can process quickly.'],
      ],
    },
    {
      title: 'Coastal Dunes',
      sub: 'You should spend about 20 minutes on Questions 14–26, which are based on Reading Passage 2 below.',
      paras: [
        ['A', 'Coastal dunes are often seen as piles of sand, but they are living landscapes shaped by wind, plants and waves. Sand arrives from the beach and moves inland when dry grains are lifted by strong air currents. A dune can grow when vegetation catches the moving sand and holds it in place.'],
        ['B', 'The first plants to colonise a new dune must tolerate salt, wind and burial. Marram grass is well adapted because its stems can continue growing as sand accumulates. Its roots bind the surface, while its leaves slow the wind close to the ground. Other species arrive as the dune becomes more stable.'],
        ['C', 'Dunes protect settlements by absorbing the energy of storm waves. The front of a dune may be cut back during a storm, but the sand is not necessarily lost from the coastal system. It can move offshore and return during calmer conditions. A hard wall may protect one site while increasing erosion nearby.'],
        ['D', 'Visitors can damage dunes by creating shortcuts across them. Repeated footsteps break plants and form tracks that channel wind and water. Boardwalks guide people to the beach while keeping sensitive areas undisturbed. Fences can help, although a fence that blocks every natural movement may also create problems.'],
        ['E', 'Managers sometimes plant grass to speed recovery, but planting alone cannot repair a dune if the supply of sand has been interrupted. They may need to remove barriers, restore a beach or allow natural movement. The correct intervention depends on the cause of the decline rather than on the appearance of the dune.'],
        ['F', 'Climate change adds uncertainty. Rising sea levels and stronger storms may move the shoreline inland, while drought can reduce plant growth. Monitoring programmes record dune height, vegetation and the position of the shoreline so that managers can identify gradual changes before a major storm exposes them.'],
      ],
    },
    {
      title: 'Why We Tell Stories',
      sub: 'You should spend about 20 minutes on Questions 27–40, which are based on Reading Passage 3 below.',
      paras: [
        ['', 'Stories are used for entertainment, but they also organise experience. A narrative connects events, gives characters motives and creates a sense of consequence. This can make a complicated situation easier to remember, although it may also encourage people to see a clear pattern where real events are uncertain.'],
        ['', 'In education, stories can provide a context for facts. A student may remember a scientific process more easily when it is linked to a person trying to solve a problem. Narrative does not replace evidence, but it can give evidence a structure that helps learners ask what happened, why it happened and what might happen next.'],
        ['', 'Stories influence how organisations describe themselves. A company may present its history as a sequence of obstacles overcome by an inventive founder. Such a story can motivate employees, yet it may hide the contribution of teams or make success look inevitable. Organisational stories are therefore useful but selective.'],
        ['', 'Personal memories are also shaped by storytelling. Recounting an event can strengthen some details and alter others, particularly when listeners ask questions or offer their own interpretation. A confident story is not necessarily a complete record. Memory is reconstructed each time it is recalled.'],
        ['', 'Digital media have increased the speed at which stories travel. A short video can reach millions of people, and viewers may add comments that change the interpretation. Speed brings opportunities for solidarity and education, but it can also spread a compelling story before its facts have been checked.'],
        ['', 'Researchers studying public health use stories carefully. A patient’s account may help a community understand an unfamiliar illness, while statistics show how common the illness is. Stories can make risk feel more personal, but one vivid case should not be treated as proof that every person will have the same experience.'],
        ['', 'The value of a story depends on the question being asked. If the aim is empathy, a personal narrative may be powerful. If the aim is to estimate frequency, a representative survey is more suitable. Good communication does not choose between stories and data in every case; it uses each for the work it can do best.'],
      ],
    },
  ];
  const box = { A: 'memory', B: 'evidence', C: 'context', D: 'teams', E: 'speed', F: 'statistics', G: 'empathy', H: 'frequency' };
  const Q = {
    1: { kind: 'tfng', s: 'Cashiers always typed product numbers before barcodes existed.', a: 'NOT GIVEN', ev: 'The passage says a cashier read a price or typed a product number, but not that this always happened.' },
    2: { kind: 'tfng', s: 'Early automatic identification equipment was inexpensive.', a: 'FALSE', ev: 'Early equipment was expensive and unreliable.' },
    3: { kind: 'tfng', s: 'The circular code could be scanned from several directions.', a: 'TRUE', ev: 'The circular design could be scanned from several directions.' },
    4: { kind: 'tfng', s: 'The first retail scan involved a packet of chewing gum.', a: 'TRUE', ev: 'The first retail scan took place in 1974 on chewing gum.' },
    5: { kind: 'tfng', s: 'Barcodes made price changes impossible for supermarkets.', a: 'FALSE', ev: 'Supermarkets could update prices centrally rather than changing labels.' },
    6: { kind: 'tfng', s: 'All workers welcomed barcode scanning immediately.', a: 'FALSE', ev: 'Some workers feared scanning would reduce the need for cashiers.' },
    7: { kind: 'gap', a: ['transcription'], limit: 1, ev: 'Manual processes were vulnerable to transcription errors.' },
    8: { kind: 'gap', a: ['scanner'], limit: 1, ev: 'The technology needed a cheap scanner.' },
    9: { kind: 'gap', a: ['numbering system'], limit: 2, ev: 'A standard numbering system was needed.' },
    10: { kind: 'gap', a: ['circular'], limit: 1, ev: 'Engineers developed a circular bull’s-eye design.' },
    11: { kind: 'gap', a: ['chewing gum'], limit: 2, ev: 'The first retail scan was on chewing gum.' },
    12: { kind: 'gap', a: ['logistics'], limit: 1, ev: 'Sales data improved logistics.' },
    13: { kind: 'gap', a: ['privacy'], limit: 1, ev: 'Some shoppers worried about privacy.' },
    14: { kind: 'para', s: 'an explanation of how sand begins to form a dune', a: 'A', ev: 'Paragraph A explains wind movement and vegetation catching sand.' },
    15: { kind: 'para', s: 'a description of the plant best adapted to early dune conditions', a: 'B', ev: 'Paragraph B describes marram grass and its adaptations.' },
    16: { kind: 'para', s: 'a warning that a sea wall may create erosion elsewhere', a: 'C', ev: 'Paragraph C says a hard wall may increase erosion nearby.' },
    17: { kind: 'para', s: 'a way to reduce damage from visitors', a: 'D', ev: 'Paragraph D describes boardwalks guiding people and protecting sensitive areas.' },
    18: { kind: 'para', s: 'a reason why planting may not solve dune decline', a: 'E', ev: 'Paragraph E says planting cannot repair a dune when sand supply is interrupted.' },
    19: { kind: 'gap', a: ['wind'], limit: 1, ev: 'Sand moves inland when dry grains are lifted by air currents.' },
    20: { kind: 'gap', a: ['marram grass'], limit: 2, ev: 'Marram grass is adapted to salt, wind and burial.' },
    21: { kind: 'gap', a: ['roots'], limit: 1, ev: 'Marram grass roots bind the surface.' },
    22: { kind: 'gap', a: ['storm waves'], limit: 2, ev: 'Dunes protect settlements by absorbing storm-wave energy.' },
    23: { kind: 'gap', a: ['shortcuts'], limit: 1, ev: 'Visitors damage dunes by creating shortcuts.' },
    24: { kind: 'gap', a: ['boardwalks'], limit: 1, ev: 'Boardwalks guide people to the beach.' },
    25: { kind: 'gap', a: ['sand'], limit: 1, ev: 'Planting cannot repair a dune if the supply of sand is interrupted.' },
    26: { kind: 'gap', a: ['shoreline'], limit: 1, ev: 'Monitoring records the position of the shoreline.' },
    27: { kind: 'mcq', s: 'What is one effect of narrative mentioned in the first paragraph?', o: { A: 'It always removes uncertainty.', B: 'It can make complex situations easier to remember.', C: 'It prevents people from seeing motives.', D: 'It makes every event entertaining.' }, a: 'B', ev: 'A narrative can make a complicated situation easier to remember.' },
    28: { kind: 'mcq', s: 'How can stories help education?', o: { A: 'By replacing evidence entirely.', B: 'By giving facts a structure.', C: 'By avoiding questions about causes.', D: 'By making every process fictional.' }, a: 'B', ev: 'Stories can give evidence a structure that helps learners ask useful questions.' },
    29: { kind: 'mcq', s: 'What may an organisational success story hide?', o: { A: 'The existence of a founder.', B: 'The contribution of teams.', C: 'The company’s history.', D: 'The fact that employees need motivation.' }, a: 'B', ev: 'A founder story may hide the contribution of teams.' },
    30: { kind: 'mcq', s: 'What can happen when a personal memory is retold?', o: { A: 'It becomes a perfect record.', B: 'Some details may change.', C: 'Listeners cannot ask questions.', D: 'The event becomes impossible to recall.' }, a: 'B', ev: 'Recounting can strengthen some details and alter others.' },
    31: { kind: 'mcq', s: 'Why should a vivid health story not be treated as proof for everyone?', o: { A: 'It may not represent the frequency of all experiences.', B: 'Stories never create empathy.', C: 'Statistics are always inaccurate.', D: 'Patients cannot describe illness.' }, a: 'A', ev: 'One vivid case should not be treated as proof that every person has the same experience.' },
    32: { kind: 'ynng', s: 'The author believes stories are useful only for entertainment.', a: 'NO', ev: 'Stories organise experience, support education and shape public-health communication.' },
    33: { kind: 'ynng', s: 'Narrative can replace evidence in education.', a: 'NO', ev: 'Narrative does not replace evidence; it can give evidence a structure.' },
    34: { kind: 'ynng', s: 'A confident personal story is always complete.', a: 'NO', ev: 'A confident story is not necessarily a complete record.' },
    35: { kind: 'ynng', s: 'Digital stories can spread before their facts are checked.', a: 'YES', ev: 'Digital media can spread a compelling story before facts are checked.' },
    36: { kind: 'ynng', s: 'A representative survey is more suitable than a personal narrative for estimating frequency.', a: 'YES', ev: 'The final paragraph says a representative survey is more suitable for frequency.' },
    37: { kind: 'box', a: 'A', ev: 'Memory can change when an event is retold.' },
    38: { kind: 'box', a: 'B', ev: 'Narrative does not replace evidence.' },
    39: { kind: 'box', a: 'G', ev: 'Personal narratives can be powerful for empathy.' },
    40: { kind: 'box', a: 'H', ev: 'Surveys are suitable when the aim is to estimate frequency.' },
  };
  const TF_KEY = '<div class="key-box"><dl><dt>TRUE</dt><dd>if the statement agrees with the information</dd><dt>FALSE</dt><dd>if the statement contradicts the information</dd><dt>NOT GIVEN</dt><dd>if there is no information on this</dd></dl></div>';
  const YN_KEY = '<div class="key-box"><dl><dt>YES</dt><dd>if the statement agrees with the claims of the writer</dd><dt>NO</dt><dd>if the statement contradicts the claims of the writer</dd><dt>NOT GIVEN</dt><dd>if it is impossible to say what the writer thinks about this</dd></dl></div>';
  const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i);
  const keyBox = (title, obj) => `<div class="key-box"><span class="label">${title}</span><dl>${Object.entries(obj).map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl></div>`;
  const selectQ = (h, n, opts, ph) => `<div class="q" data-q="${n}"><div class="stem"><span class="qn">${n}</span><span>${h.esc(h.Q[n].s)}</span></div>${h.select(n, Object.keys(opts).map(k => [k, k]), ph)}</div>`;
  const build = h => [
    `<div class="qset"><h3>Questions 1–6</h3><p class="instr">Do the following statements agree with the information given in Reading Passage 1? Choose</p>${TF_KEY}${range(1, 6).map(h.tf).join('')}</div>
    <div class="qset"><h3>Questions 7–13</h3><p class="instr">Complete the notes below. Choose <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.</p><div class="notes"><h4>How barcodes changed retail</h4><ul><li>Manual pricing was vulnerable to ${h.gapIn(7)} errors.</li><li>The system required a cheap ${h.gapIn(8)}.</li><li>It also required a standard ${h.gapIn(9)}.</li><li>An early design was ${h.gapIn(10)}.</li><li>The first retail scan used ${h.gapIn(11)}.</li><li>Sales data improved store ${h.gapIn(12)}.</li><li>Some shoppers were concerned about ${h.gapIn(13)}.</li></ul></div></div>`,
    `<div class="qset"><h3>Questions 14–18</h3><p class="instr">Reading Passage 2 has six paragraphs, <b>A–F</b>. Which paragraph contains the following information? <b>NB</b> You may use any letter more than once.</p>${range(14, 18).map(n => selectQ(h, n, { A: 1, B: 1, C: 1, D: 1, E: 1, F: 1 }, 'Choose A–F')).join('')}</div>
    <div class="qset"><h3>Questions 19–26</h3><p class="instr">Complete the notes below. Choose <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.</p><div class="notes"><h4>Coastal dunes</h4><ul><li>Sand is moved inland by ${h.gapIn(19)}.</li><li>${h.gapIn(20)} survives salt, wind and burial.</li><li>Its ${h.gapIn(21)} bind the surface.</li><li>Dunes absorb the energy of ${h.gapIn(22)}.</li><li>Visitors can create ${h.gapIn(23)}.</li><li>${h.gapIn(24)} can guide people across dunes.</li><li>Planting cannot solve a lack of ${h.gapIn(25)}.</li><li>Managers monitor the ${h.gapIn(26)}.</li></ul></div></div>`,
    `<div class="qset"><h3>Questions 27–31</h3><p class="instr">Choose the correct letter, <b>A, B, C or D</b>.</p>${range(27, 31).map(h.mcq).join('')}</div>
    <div class="qset"><h3>Questions 32–36</h3><p class="instr">Do the following statements agree with the claims of the writer in Reading Passage 3? Choose</p>${YN_KEY}${range(32, 36).map(h.tf).join('')}</div>
    <div class="qset"><h3>Questions 37–40</h3><p class="instr">Complete the summary using the list of words, <b>A–H</b>, below.</p><div class="notes"><h4>Stories and evidence</h4><p>Retelling can change ${h.boxSel(37)}. In education, stories should not replace ${h.boxSel(38)}. Personal accounts may be especially useful for ${h.boxSel(39)}, while surveys are better for estimating ${h.boxSel(40)}.</p></div>${keyBox('List of words', box)}</div>`,
  ];
  window.READING_TEST = { num: 9, passages, Q, headings: {}, box, ranges: [[1, 13], [14, 26], [27, 40]], build };
})();
