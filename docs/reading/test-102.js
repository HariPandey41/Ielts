// IELTS Academic Reading · Premium Test 2 — content only. The exam engine is assets/reading-exam.js.
// Premium Exam (band 7–9 level): kept for the mock test, not listed with the practice tests.
// evidence: true makes the engine highlight each answer's evidence in the passage after submission.
(() => {
  'use strict';
  const passages = [
    {
      title: 'Saving Daylight',
      sub: 'You should spend about 20 minutes on Questions 1–13, which are based on Reading Passage 1 below.',
      paras: [
        ['', 'Twice a year, in around seventy countries, hundreds of millions of people move their clocks forward or back by an hour. The practice, known as daylight saving time or summer time, is so familiar that few people stop to ask where it came from or whether it does any good. Yet it has a surprisingly long and contested history, and in recent years the case for abolishing it has grown stronger. Its supporters say it gives people more daylight in the evenings for leisure and shopping, while its critics argue that it disrupts sleep and brings few real benefits.'],
        ['', 'The idea is often credited to Benjamin Franklin, who, while living in Paris in 1784, wrote a letter to a French newspaper describing his “discovery” that the sun gave light as soon as it rose. Franklin calculated the enormous quantity of candles that Parisians could save if they simply got up earlier, and proposed that church bells should be rung and cannons fired at sunrise to wake them. The letter, however, was a joke, written to amuse his readers, and Franklin never suggested changing the clocks themselves.'],
        ['', 'The first serious proposal came more than a century later from George Vernon Hudson, a New Zealand postal worker and enthusiastic insect collector. In 1895, Hudson presented a paper to a scientific society in Wellington suggesting that clocks should be moved forward by two hours in summer, so that people would have more daylight after work, which he would have been able to spend collecting insects. His paper attracted some interest but was not acted upon.'],
        ['', 'Independently, the British builder William Willett reached a similar conclusion. Riding his horse early one summer morning in 1905, he was struck by how many houses still had their curtains closed while the sun was shining. In 1907 he published a pamphlet, The Waste of Daylight, in which he proposed advancing the clocks by eighty minutes in four steps of twenty minutes each Sunday in April, and reversing the process in September. Willett spent much of his own fortune promoting the idea, and a bill based on it was debated in Parliament in 1908, but it failed to become law. He died in 1915, without seeing his idea adopted.'],
        ['', 'It took a war to change the situation. In April 1916, Germany and its ally Austria-Hungary put their clocks forward in order to reduce the use of artificial lighting and so save coal, which was needed for the war effort. Britain followed within weeks, and many other countries soon did the same. The United States introduced daylight saving in 1918, but it proved so unpopular, particularly with farmers, whose working day was governed by the sun rather than the clock, that it was repealed in 1919. In Britain, the clocks were even moved two hours ahead of normal during the summers of the Second World War, a practice known as double summer time. After the war, practices varied widely between countries and even between regions until international agreements brought more order.'],
        ['', 'The original justification was energy saving, but the evidence for this is weak. The most detailed study, by the economists Matthew Kotchen and Laura Grant, took advantage of the fact that, until 2006, only some counties in the American state of Indiana used daylight saving. Comparing electricity use before and after the whole state adopted it, they found that daylight saving actually increased household electricity consumption by about one per cent, because the savings on lighting were outweighed by greater use of heating in the mornings and air conditioning in the evenings.'],
        ['', 'Meanwhile, concern has grown about the effects on health. Losing an hour of sleep in spring disrupts the body’s internal clock, and the effects can be serious. A study led by the cardiologist Amneet Sandhu found that hospital admissions for heart attacks in the American state of Michigan rose by around a quarter on the Monday after the clocks went forward. Other research has found a rise in fatal road accidents in the week after the spring change. Because of such findings, organisations representing sleep scientists have called for the clock changes to be abolished, and for countries to keep standard time, the time used in winter, all year round. Permanent summer time, they argue, would leave many people getting up in darkness for much of the winter.'],
        ['', 'This is not a theoretical concern. In 2011, Russia abolished clock changes and adopted permanent summer time, but dark winter mornings proved so unpopular that in 2014 the government moved the clocks back again and adopted permanent winter time instead. The European Union has faced a similar dilemma. In 2018, it held a public consultation on the issue, which attracted 4.6 million responses, the largest number in its history, and 84 per cent of those who took part favoured an end to the clock changes. The European Parliament voted to abolish them in 2019. However, the plan has stalled, largely because member states cannot agree whether to keep summer or winter time, and are reluctant to end up in different time zones from their neighbours.'],
      ],
    },
    {
      title: 'Learning from Termites',
      sub: 'You should spend about 20 minutes on Questions 14–26, which are based on Reading Passage 2 below.',
      paras: [
        ['A', 'Across the dry grasslands of southern Africa stand thousands of tall, reddish towers of hardened earth. Some exceed eight metres in height, making them, relative to the size of their builders, among the largest structures created by any animal. They are the work of termites, insects only a few millimetres long, which construct them from soil, saliva and their own droppings. For decades, these mounds have fascinated both biologists and architects, not least because they appear to maintain remarkably stable conditions inside, despite extreme temperatures outside. Abandoned mounds can survive for many years, slowly worn away by rain.'],
        ['B', 'The termites that build the largest mounds do not live in the tower itself. Their nest, which may contain a million or more insects, lies underground beneath it. Inside the nest, the termites cultivate a fungus on chewed plant material, and the fungus breaks down the plant material into a form that the termites can digest. This arrangement is efficient, but it is also demanding. The fungus grows well only within a narrow range of temperature and humidity, and the colony, together with its fungus gardens, produces large quantities of carbon dioxide that must somehow be removed. The workers spend much of their lives repairing and extending the mound, adding fresh soil to its surface.'],
        ['C', 'For many years, it was widely believed that the mound worked like a natural air-conditioning system. According to this theory, warm air from the nest rose up a large central chimney and escaped through the top of the mound, drawing cooler, fresher air in through openings near its base. The idea was attractive and widely repeated, and it inspired several architects. One version even claimed that termites opened and closed vents to control the temperature, much as a person adjusts a window. Unfortunately, closer study revealed that it was wrong. The mounds of many species have no openings at the top at all, and measurements showed that air does not flow through them in the way the theory predicted.'],
        ['D', 'The physiologist J. Scott Turner, who spent many years studying mounds in Namibia, proposed a different explanation. In his view, the mound functions less like an air conditioner than like a lung. Its porous walls allow gases to pass slowly between the inside and the outside, and the wind blowing across the surface creates small changes in pressure that help to mix the air inside. More recently, a team of researchers at Harvard University placed sensors inside mounds in India and found that the daily cycle of heating and cooling drives the air. During the day, the thin outer channels warm up faster than the centre, so air rises in them and sinks in the middle; at night, the pattern is reversed. In this way, the mound slowly ventilates the nest below. Turner also showed that the termites constantly rebuild the walls, opening new passages and sealing others as conditions change.'],
        ['E', 'By then, the old theory had already inspired one of the most celebrated buildings in Africa. The Eastgate Centre, an office and shopping complex in Harare, Zimbabwe, opened in 1996. Its architect, Mick Pearce, wanted to avoid the high cost of conventional air conditioning, and he looked to termite mounds for ideas. Pearce worked with the engineering firm Arup, and the building has no conventional air-conditioning system at all. It is cooled almost entirely by natural means. At night, when the outside air is cool, large fans draw it into the building, where it passes through cavities in the floors and cools the heavy concrete structure. During the day, the concrete absorbs heat from the offices, keeping them comfortable, and warm air rises through the building and escapes through a row of tall chimneys on the roof.'],
        ['F', 'The results have been impressive. The Eastgate Centre is reported to use around ten per cent of the energy needed to cool a conventional building of the same size, and the money saved on air-conditioning equipment allowed the owners to charge lower rents than in neighbouring buildings. Pearce has gone on to apply similar principles elsewhere, including an office building in Melbourne, Australia. The irony that Eastgate was based on a mistaken idea of how mounds work has not reduced its value: its design succeeds because it applies sound principles of physics, whatever termites actually do.'],
        ['G', 'Researchers now believe that the real lessons from termites may be different, and perhaps more useful. Instead of copying a single system, some engineers are studying how the walls of mounds, which are full of tiny pores, allow buildings to exchange air with their surroundings without fans or open windows. Some architects have even proposed walls made of porous earth-based materials, imitating the way that mounds allow gases to pass through them. Others are interested in how millions of termites, without any plan or leader, build such complex structures by following simple rules, an idea that is now being tested with swarms of small construction robots. Whatever the outcome, it seems likely that these small insects will continue to influence the design of human buildings for many years to come.'],
      ],
    },
    {
      title: 'Insects on the Menu?',
      sub: 'You should spend about 20 minutes on Questions 27–40, which are based on Reading Passage 3 below.',
      paras: [
        ['', 'In 2013, the Food and Agriculture Organization of the United Nations published a report with an unusual title: Edible Insects. Its argument was simple. As the world’s population grows and incomes rise, the demand for meat is increasing rapidly, and producing it requires vast amounts of land, water and feed. Insects, the report suggested, could provide a nutritious and far more efficient alternative. The report attracted worldwide attention, and in the decade that followed, dozens of companies were founded to farm insects, while restaurants in Europe and North America experimented with dishes made from crickets and mealworms. Some commentators even predicted that insects would become an everyday food in Western supermarkets within a decade.'],
        ['', 'It is worth remembering that eating insects is nothing new. According to the report, around two billion people, mainly in Asia, Africa and Latin America, regularly eat insects as part of their traditional diet, and more than 1,900 species are eaten around the world. In many places, insects are not a food of last resort but a delicacy, gathered seasonally and sold at high prices. The idea that insects are strange or disgusting is largely a Western one, and it is a cultural attitude rather than a reflection of their nutritional value.'],
        ['', 'There is no doubt that insects can be highly nutritious. Many species are rich in protein, as well as in fats, vitamins and minerals such as iron and zinc. The environmental case is also strong, at least in principle. Because insects are cold-blooded, they do not use energy to keep their bodies warm, and so they convert feed into body weight far more efficiently than cattle or pigs. They also produce smaller quantities of greenhouse gases and can be raised in small spaces, stacked in trays inside buildings. In addition, almost the whole body of many insects can be eaten, whereas a large part of a cow or a pig is not used as food.'],
        ['', 'Nevertheless, I believe that the enthusiasm of the past decade has often run ahead of the evidence. The environmental benefits of insect farming depend heavily on what the insects are fed. If they are raised on cereals that could have been eaten by people or used for other animals, the advantage over conventional livestock shrinks considerably, and some studies suggest that it may disappear altogether once the energy used to keep insect farms warm is included. The real benefit comes when insects are fed on waste, such as spoiled fruit and vegetables or by-products from the food industry, which would otherwise be thrown away. At present, however, food safety rules in many countries restrict the kinds of waste that can be fed to insects intended for human consumption.'],
        ['', 'Consumer resistance is also a serious obstacle, and I doubt that clever marketing will overcome it quickly. Research consistently shows that Western consumers are far more willing to eat insects when they cannot see them, for example when crickets have been ground into flour and added to pasta or protein bars. This suggests that insects are likely to remain a minor ingredient rather than a replacement for meat. There are health questions too: people who are allergic to shellfish may also react to insects, which are distantly related to shrimps and crabs, and products need to be clearly labelled. Price is another problem: because insect farming is still small in scale, insect products are usually more expensive than the meat they are meant to replace.'],
        ['', 'Regulators have gradually begun to respond. In 2021, the European Union approved dried yellow mealworms as a food, the first insect to receive such approval, and several other species have since followed. Yet several of the companies founded during the early wave of enthusiasm have already closed, having found that demand from consumers was much lower than they had expected. Approval, it seems, does not guarantee success. Others have shifted their focus from human food to animal feed.'],
        ['', 'In my view, the most promising future for insect farming lies not on our plates but in animal feed. Fish farms and poultry producers currently depend heavily on soya, much of it grown on land cleared from forests, and on fishmeal made from wild fish caught at sea. The larvae of the black soldier fly, which can be raised on food waste, offer a protein-rich alternative that animals readily eat, and that does not require consumers to overcome their disgust. Several large insect farms now produce feed of this kind.'],
        ['', 'None of this means that insects will never become a common food in the West. Attitudes to food can change surprisingly quickly: raw fish was considered strange in many Western countries a few decades ago, yet sushi is now sold in supermarkets everywhere. Change may also be more likely if insects are offered to children, whose tastes are not yet fixed. But those who promote insects as the solution to the world’s food problems would do better to focus on where they can make a difference now, rather than on persuading reluctant consumers to eat whole crickets.'],
      ],
    },
  ];

  const PEOPLE = { A: 'Benjamin Franklin', B: 'George Vernon Hudson', C: 'William Willett', D: 'Matthew Kotchen and Laura Grant', E: 'Amneet Sandhu' };
  const headings = {
    i: 'Towers built by tiny creatures',
    ii: 'A demanding way of obtaining food',
    iii: 'A popular explanation proves false',
    iv: 'Breathing rather than cooling',
    v: 'An African building inspired by insects',
    vi: 'Savings in energy and money',
    vii: 'New directions for research',
    viii: 'Why termites are a threat to buildings',
    ix: 'The cost of conventional air conditioning',
    x: 'How termites communicate',
  };
  const ENDINGS = {
    A: 'is mainly a cultural attitude found in Western countries.',
    B: 'depend on what the insects are given to eat.',
    C: 'are more acceptable to consumers when insects cannot be seen.',
    D: 'may also be allergic to insects.',
    E: 'could replace soya and fishmeal in animal feed.',
    F: 'was the first insect approved as food in the European Union.',
    G: 'has made insects cheaper than meat.',
    H: 'limit the kinds of waste that can be fed to insects for human food.',
    I: 'have led to a ban on insect farming.',
  };

  const Q = {
    1: { kind: 'person', s: 'wanted extra daylight partly in order to pursue a hobby', a: 'B', ev: '“so that people would have more daylight after work, which he would have been able to spend collecting insects”' },
    2: { kind: 'person', s: 'suggested changing the clocks in a series of small steps', a: 'C', ev: '“advancing the clocks by eighty minutes in four steps of twenty minutes each Sunday in April”' },
    3: { kind: 'person', s: 'found that the change led to higher use of electricity in homes', a: 'D', ev: '“they found that daylight saving actually increased household electricity consumption by about one per cent”' },
    4: { kind: 'person', s: 'made a suggestion that was not meant seriously', a: 'A', ev: '“The letter, however, was a joke, written to amuse his readers”' },
    5: { kind: 'person', s: 'found an increase in heart attacks after the clocks went forward', a: 'E', ev: '“hospital admissions for heart attacks in the American state of Michigan rose by around a quarter on the Monday after the clocks went forward”' },
    6: { kind: 'gap', a: ['coal'], limit: 1, ev: '“to reduce the use of artificial lighting and so save coal, which was needed for the war effort”' },
    7: { kind: 'gap', a: ['farmers'], limit: 1, ev: '“it proved so unpopular, particularly with farmers… that it was repealed in 1919”' },
    8: { kind: 'gap', a: ['mornings'], limit: 1, ev: '“dark winter mornings proved so unpopular that in 2014 the government moved the clocks back again”' },
    9: { kind: 'gap', a: ['84'], limit: 1, ev: '“84 per cent of those who took part favoured an end to the clock changes”' },
    10: { kind: 'mcq', s: 'What happened to Willett’s proposal during his lifetime?', o: { A: 'It was adopted in Britain in 1908.', B: 'It was discussed in Parliament but rejected.', C: 'It was ignored by politicians.', D: 'It was adopted by Germany.' }, a: 'B', ev: '“a bill based on it was debated in Parliament in 1908, but it failed to become law”' },
    11: { kind: 'mcq', s: 'Why did daylight saving fail to save energy in Indiana?', o: { A: 'People used more lighting in the evenings.', B: 'Extra heating and cooling cancelled out the savings.', C: 'Only some counties adopted it.', D: 'Electricity prices rose at the same time.' }, a: 'B', ev: '“the savings on lighting were outweighed by greater use of heating in the mornings and air conditioning in the evenings”' },
    12: { kind: 'mcq', s: 'Sleep scientists recommend', o: { A: 'keeping summer time all year.', B: 'keeping winter time all year.', C: 'changing the clocks by half an hour.', D: 'changing the clocks only in spring.' }, a: 'B', ev: '“for countries to keep standard time, the time used in winter, all year round”' },
    13: { kind: 'mcq', s: 'Why has the European Union not ended the clock changes?', o: { A: 'Most people who took part in the consultation opposed the idea.', B: 'The European Parliament voted against it.', C: 'Member states disagree about which time to keep.', D: 'The cost of the change would be too high.' }, a: 'C', ev: '“member states cannot agree whether to keep summer or winter time”' },
    14: { kind: 'gap', free: true, a: ['chimneys'], limit: 2, ev: '“warm air rises through the building and escapes through a row of tall chimneys on the roof”' },
    15: { kind: 'gap', free: true, a: ['fans', 'large fans'], limit: 2, ev: '“At night, when the outside air is cool, large fans draw it into the building”' },
    16: { kind: 'gap', free: true, a: ['cavities'], limit: 2, ev: '“where it passes through cavities in the floors”' },
    17: { kind: 'gap', free: true, a: ['concrete', 'heavy concrete'], limit: 2, ev: '“During the day, the concrete absorbs heat from the offices”' },
    18: { kind: 'heading', p: 'B', a: 'ii', ev: '“the termites cultivate a fungus… This arrangement is efficient, but it is also demanding.”' },
    19: { kind: 'heading', p: 'C', a: 'iii', ev: '“The idea was attractive and widely repeated… Unfortunately, closer study revealed that it was wrong.”' },
    20: { kind: 'heading', p: 'D', a: 'iv', ev: '“the mound functions less like an air conditioner than like a lung”' },
    21: { kind: 'heading', p: 'E', a: 'v', ev: '“The Eastgate Centre, an office and shopping complex in Harare, Zimbabwe… he looked to termite mounds for ideas”' },
    22: { kind: 'heading', p: 'F', a: 'vi', ev: '“use around ten per cent of the energy… allowed the owners to charge lower rents”' },
    23: { kind: 'heading', p: 'G', a: 'vii', ev: '“Researchers now believe that the real lessons from termites may be different”' },
    24: { kind: 'mcq', s: 'According to paragraph B, the termites’ fungus', o: { A: 'is eaten by the termites without being processed.', B: 'needs carefully controlled conditions.', C: 'grows inside the tower of the mound.', D: 'produces oxygen for the colony.' }, a: 'B', ev: '“The fungus grows well only within a narrow range of temperature and humidity”' },
    25: { kind: 'mcq', s: 'What did the Harvard researchers find?', o: { A: 'Air enters through openings at the base of the mound.', B: 'Daily changes in temperature move the air inside the mound.', C: 'The wind has no effect on the air inside the mound.', D: 'Mounds in India have chimneys at the top.' }, a: 'B', ev: '“the daily cycle of heating and cooling drives the air”' },
    26: { kind: 'mcq', s: 'What point does the writer make about the Eastgate Centre in paragraph F?', o: { A: 'It no longer saves as much energy as expected.', B: 'Its success does not depend on the theory that inspired it.', C: 'It was more expensive to build than other buildings.', D: 'Its design has never been used again.' }, a: 'B', ev: '“its design succeeds because it applies sound principles of physics, whatever termites actually do”' },
    27: { kind: 'ynng', s: 'The 2013 report led to the creation of many new businesses.', a: 'YES', ev: '“in the decade that followed, dozens of companies were founded to farm insects”' },
    28: { kind: 'ynng', s: 'Disgust at eating insects reflects their low nutritional value.', a: 'NO', ev: '“it is a cultural attitude rather than a reflection of their nutritional value”' },
    29: { kind: 'ynng', s: 'Insects are a cheaper source of protein than beans and lentils.', a: 'NOT GIVEN', ev: 'The writer compares insects with livestock (“they convert feed into body weight far more efficiently than cattle or pigs”), but never with plant sources of protein such as beans.' },
    30: { kind: 'ynng', s: 'Supporters of insect farming have sometimes exaggerated its benefits.', a: 'YES', ev: '“the enthusiasm of the past decade has often run ahead of the evidence”' },
    31: { kind: 'ynng', s: 'Effective marketing will soon make insects popular with Western consumers.', a: 'NO', ev: '“I doubt that clever marketing will overcome it quickly”' },
    32: { kind: 'ynng', s: 'Using insects as animal feed avoids the problem of consumer disgust.', a: 'YES', ev: '“that does not require consumers to overcome their disgust”' },
    33: { kind: 'ynng', s: 'Western attitudes to food never change.', a: 'NO', ev: '“Attitudes to food can change surprisingly quickly”' },
    34: { kind: 'ending', s: 'The view that insects are disgusting', a: 'A', ev: '“The idea that insects are strange or disgusting is largely a Western one, and it is a cultural attitude”' },
    35: { kind: 'ending', s: 'The environmental benefits of insect farming', a: 'B', ev: '“The environmental benefits of insect farming depend heavily on what the insects are fed.”' },
    36: { kind: 'ending', s: 'Products in which insects have been ground into flour', a: 'C', ev: '“Western consumers are far more willing to eat insects when they cannot see them, for example when crickets have been ground into flour”' },
    37: { kind: 'ending', s: 'People with an allergy to shellfish', a: 'D', ev: '“people who are allergic to shellfish may also react to insects”' },
    38: { kind: 'ending', s: 'The yellow mealworm', a: 'F', ev: '“the European Union approved dried yellow mealworms as a food, the first insect to receive such approval”' },
    39: { kind: 'ending', s: 'The larvae of the black soldier fly', a: 'E', ev: '“The larvae of the black soldier fly, which can be raised on food waste, offer a protein-rich alternative”' },
    40: { kind: 'ending', s: 'Food safety rules in many countries', a: 'H', ev: '“food safety rules in many countries restrict the kinds of waste that can be fed to insects intended for human consumption”' },
  };

  const YN_KEY = '<div class="key-box"><dl><dt>YES</dt><dd>if the statement agrees with the claims of the writer</dd><dt>NO</dt><dd>if the statement contradicts the claims of the writer</dd><dt>NOT GIVEN</dt><dd>if it is impossible to say what the writer thinks about this</dd></dl></div>';
  const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i);
  const keyBox = (title, obj) => `<div class="key-box"><span class="label">${title}</span><dl>${Object.entries(obj).map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl></div>`;
  const selectQ = (h, n, opts, ph) => `<div class="q" data-q="${n}"><div class="stem"><span class="qn">${n}</span><span>${h.esc(h.Q[n].s)}</span></div>${h.select(n, Object.keys(opts).map(k => [k, k]), ph)}</div>`;
  const dBox = c => `<div style="border:1.5px solid currentColor;border-radius:4px;padding:8px 12px">${c}</div>`;

  const build = h => [
    `<div class="qset"><h3>Questions 1–5</h3>
      <p class="instr">Look at the following statements and the list of people below. Match each statement with the correct person or people, <b>A–E</b>.</p>
      ${keyBox('List of people', PEOPLE)}
      ${range(1, 5).map(n => selectQ(h, n, PEOPLE, 'Choose A–E')).join('')}</div>
    <div class="qset"><h3>Questions 6–9</h3>
      <p class="instr">Complete the table below. Choose <b>ONE WORD AND/OR A NUMBER</b> from the passage for each answer.</p>
      <div class="rtable-wrap"><table class="rtable"><caption>Daylight saving around the world</caption>
        <thead><tr><th>Place</th><th>What happened</th></tr></thead><tbody>
          <tr><td data-h="Place">Germany, 1916</td><td data-h="What happened">clocks moved forward to save ${h.gapIn(6)} for the war</td></tr>
          <tr><td data-h="Place">United States, 1918–19</td><td data-h="What happened">repealed because it was unpopular, especially with ${h.gapIn(7)}</td></tr>
          <tr><td data-h="Place">Russia, 2011–14</td><td data-h="What happened">permanent summer time abandoned because of dark winter ${h.gapIn(8)}</td></tr>
          <tr><td data-h="Place">European Union, 2018</td><td data-h="What happened">${h.gapIn(9)} per cent of consultation responses favoured ending clock changes</td></tr>
        </tbody></table></div></div>
    <div class="qset"><h3>Questions 10–13</h3>
      <p class="instr">Choose the correct letter, <b>A, B, C or D</b>.</p>
      ${range(10, 13).map(h.mcq).join('')}</div>`,
    `<div class="qset"><h3>Questions 14–17</h3>
      <p class="instr">Label the diagram below. Choose <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.</p>
      <div class="notes"><h4>How the Eastgate Centre is cooled</h4>
        <div style="display:grid;gap:8px;max-width:560px">
          ${dBox(`<b>Roof:</b> warm air leaves through a row of tall ${h.gapIn(14)}`)}
          ${dBox(`<b>Offices:</b> warm air rises through the building`)}
          ${dBox(`<b>Night:</b> cool outside air is drawn in by ${h.gapIn(15)}`)}
          ${dBox(`<b>Floors:</b> air passes through ${h.gapIn(16)} and cools the structure`)}
          ${dBox(`<b>Day:</b> the ${h.gapIn(17)} absorbs heat from the offices`)}
        </div>
      </div></div>
    <div class="qset"><h3>Questions 18–23</h3>
      <p class="instr">Reading Passage 2 has seven paragraphs, <b>A–G</b>. Choose the correct heading for paragraphs <b>B–G</b> from the list of headings below.</p>
      ${keyBox('List of headings', headings)}
      <p class="muted"><i>Example: Paragraph A — i</i></p>
      ${range(18, 23).map(n => `<div class="q" data-q="${n}"><div class="stem"><span class="qn">${n}</span><span>Paragraph ${h.Q[n].p}</span></div>${h.select(n, Object.keys(headings).filter(k => k !== 'i').map(k => [k, k]), 'Choose a heading')}</div>`).join('')}</div>
    <div class="qset"><h3>Questions 24–26</h3>
      <p class="instr">Choose the correct letter, <b>A, B, C or D</b>.</p>
      ${range(24, 26).map(h.mcq).join('')}</div>`,
    `<div class="qset"><h3>Questions 27–33</h3>
      <p class="instr">Do the following statements agree with the claims of the writer in Reading Passage 3? Choose</p>
      ${YN_KEY}
      ${range(27, 33).map(h.tf).join('')}</div>
    <div class="qset"><h3>Questions 34–40</h3>
      <p class="instr">Complete each sentence with the correct ending, <b>A–I</b>, below.</p>
      ${keyBox('List of endings', ENDINGS)}
      ${range(34, 40).map(n => selectQ(h, n, ENDINGS, 'Choose A–I')).join('')}</div>`,
  ];

  window.READING_TEST = { num: 102, name: 'Premium Test 2', passages, Q, headings, box: {}, ranges: [[1, 13], [14, 26], [27, 40]], build, evidence: true };
})();
