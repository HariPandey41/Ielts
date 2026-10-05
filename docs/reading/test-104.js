// IELTS Academic Reading · Premium Test 4 — content only. The exam engine is assets/reading-exam.js.
// Premium Exam (band 7–9 level): kept for the mock test, not listed with the practice tests.
// evidence: true makes the engine highlight each answer's evidence in the passage after submission.
(() => {
  'use strict';
  const passages = [
    {
      title: 'The Elastic Century',
      sub: 'You should spend about 20 minutes on Questions 1–13, which are based on Reading Passage 1 below.',
      paras: [
        ['A', 'Few materials have shaped the modern world as quietly as rubber. It is in the tyres of every car, bicycle and aircraft, in the seals of engines and washing machines, and in the gloves worn by surgeons. World production of natural rubber now exceeds fourteen million tonnes a year. Yet for most of history it was little more than a curiosity, and its rise to global importance depended on a chemical discovery, an act of botanical smuggling and the pressures of war. Today, the industry faces new challenges, and scientists are searching for sources of rubber that could not have been imagined a century ago.'],
        ['B', 'Long before Europeans encountered it, the peoples of Central and South America knew how to use rubber. As early as 1600 BC, the Olmecs of what is now Mexico were making solid rubber balls for a ritual ball game. Researchers at the Massachusetts Institute of Technology have shown that they did this by mixing the milky sap of the rubber tree with the juice of a local vine, which altered the properties of the material and made it bounce. Rubber was also used to make sandals and to waterproof cloth. When the French explorer Charles de la Condamine sent samples back to Paris in the eighteenth century, European scientists were fascinated, but they could find few practical uses for it. The English name itself came from one of these minor applications: in 1770, the chemist Joseph Priestley noted that it was excellent for rubbing out pencil marks.'],
        ['C', 'The main obstacle was that natural rubber reacted badly to temperature. In hot weather it became soft and sticky, and in cold weather it turned hard and brittle. Early waterproof coats and shoes were notorious for melting in summer and cracking in winter, and several companies that tried to sell rubber goods went bankrupt. The breakthrough came in 1839, when the American inventor Charles Goodyear discovered that heating rubber with sulphur produced a material that stayed firm and elastic across a wide range of temperatures. The process, later called vulcanisation after the Roman god of fire, transformed rubber into a reliable industrial material. Goodyear, however, profited little; he spent years in legal disputes, including with the English manufacturer Thomas Hancock, who had patented a similar process, and he died in debt.'],
        ['D', 'Natural rubber comes from latex, a milky liquid that flows in vessels just beneath the bark of the rubber tree, Hevea brasiliensis. To collect it, workers make a thin diagonal cut through the bark, taking care not to damage the wood beneath. The latex runs slowly down the groove and drips into a small cup fixed to the trunk. Tapping is usually carried out very early in the morning, when the air is cool and the latex flows most freely. A fresh cut is made just below the previous one every day or two, and a healthy tree can be tapped for twenty-five years or more. The collected latex is then mixed with acid to make it solidify, pressed into sheets and dried before it is sent to factories. Because tapping is skilled work that must be repeated so often, natural rubber remains one of the few major raw materials still collected largely by hand.'],
        ['E', 'For much of the nineteenth century, almost all the world’s rubber came from wild trees in the Amazon, and the trade brought enormous wealth to cities such as Manaus, as well as terrible suffering to the workers who collected it. In 1876, the British adventurer Henry Wickham shipped around seventy thousand rubber seeds from Brazil to the botanical gardens at Kew, near London. Seedlings raised there were sent to British colonies in Asia, including Ceylon and Malaya, where they were grown in carefully managed plantations. Within a few decades, Asian plantations had overtaken the wild trees of the Amazon, and today most of the world’s natural rubber is still produced in Southeast Asia, particularly in Thailand and Indonesia.'],
        ['F', 'War created the next turning point. During the Second World War, Japan occupied the plantations of Southeast Asia, cutting off most of the supply to the Allies. The United States responded with a huge programme to manufacture synthetic rubber from petroleum, based partly on earlier German research, and within a few years it was producing far more than the country had ever imported. Today, more than half of all rubber used worldwide is synthetic. Yet natural rubber remains essential, because it is stronger and more resistant to heat build-up than most synthetic alternatives, which is why the tyres of aircraft and heavy lorries contain a high proportion of it. The dependence on a single region worries the industry, since a fungal disease that has prevented large plantations in South America could devastate Asian production if it ever spread there. As a result, researchers are developing alternative sources. A tyre company in Germany has produced tyres using rubber extracted from the roots of a species of dandelion, which can be grown in cooler climates, and a desert shrub called guayule is being tested in the south-western United States.'],
      ],
    },
    {
      title: 'Larks and Owls',
      sub: 'You should spend about 20 minutes on Questions 14–26, which are based on Reading Passage 2 below.',
      paras: [
        ['A', 'Some people leap out of bed at six o’clock, full of energy, while others struggle to function before ten but feel wide awake at midnight. Scientists use the term chronotype to describe these differences in the natural timing of our sleep and alertness. People who prefer early hours are often called larks, and those who prefer late hours owls, although most of the population falls somewhere between the two extremes. Far from being a matter of willpower or discipline, chronotype appears to be rooted in our biology. It is usually measured with questionnaires that ask people when they would naturally sleep and wake if they had no obligations.'],
        ['B', 'Every human being has an internal body clock, a group of cells in the brain that regulates a roughly twenty-four-hour cycle of sleep, body temperature and hormone release. The clock is reset each day mainly by light, especially morning light. In larks, the clock runs slightly early, so that they become sleepy and wake up earlier; in owls, it runs late. The German researcher Till Roenneberg, who has collected questionnaire data from hundreds of thousands of people, has shown that chronotype changes over the course of life. Children tend to be early risers, but people become progressively later during adolescence, reaching their latest point at around the age of twenty, before gradually becoming earlier again in middle and old age. This helps to explain why so many parents find it almost impossible to get their teenage children out of bed in the morning.'],
        ['C', 'Roenneberg has also drawn attention to what he calls “social jet lag”. Because work and school start at fixed times, owls are forced to get up long before their body clock is ready, and they build up a lack of sleep during the week, which they try to repay by sleeping late at weekends. The result resembles flying across several time zones every Friday and back every Monday. According to Roenneberg, a large proportion of the population lives with social jet lag of at least an hour, and owls are the worst affected. Many owls also rely heavily on alarm clocks and caffeine to get through the working week.'],
        ['D', 'The problem is particularly acute for teenagers. The American sleep researcher Mary Carskadon showed that during puberty, the release of melatonin, a hormone that makes us sleepy, shifts later in the evening, so that teenagers genuinely find it difficult to fall asleep early. Yet secondary schools in many countries start earlier than primary schools. Some scientists argue that early start times amount to asking teenagers to perform at what is, for their bodies, the middle of the night. When schools in Seattle moved their start time from 7.50 to 8.45 in 2016, researchers found that students slept, on average, more than half an hour longer each night, and that their grades and attendance improved.'],
        ['E', 'There is strong evidence that chronotype is partly inherited. In 2019, a team led by Samuel Jones at the University of Exeter analysed genetic data from almost seven hundred thousand people and identified 351 regions of the genome linked to being a morning person. Many of these regions are involved in the operation of the body clock itself, and people with the largest number of “morning” variants tended to wake, on average, around twenty-five minutes earlier than those with the fewest. Genes do not determine chronotype completely, however; exposure to light, especially artificial light in the evening, can shift the clock later. Studies of twins point in the same direction: identical twins tend to have more similar chronotypes than non-identical twins.'],
        ['F', 'Being an owl in a world designed for larks may carry costs. A study by Kristen Knutson and Malcolm von Schantz, using health records from nearly half a million people in Britain, found that those who described themselves as definite evening types had a slightly higher risk of dying during the study period than definite morning types, as well as higher rates of conditions such as diabetes and depression. The researchers stressed that this does not mean being an owl is harmful in itself; the problems may arise from the constant mismatch between owls’ body clocks and the demands of society. Night-shift workers, whose body clocks are constantly disrupted, face similar risks.'],
        ['G', 'Owls may have some advantages, though. In an experiment by the psychologists Mareike Wieth and Rose Zacks, students were given problems that required a sudden creative insight to solve. Surprisingly, they performed better at their non-optimal time of day, morning for owls and evening for larks, perhaps because a tired brain is less focused and more open to unusual ideas. Some researchers therefore suggest that, where possible, people should schedule analytical work at their peak time and creative work at their off-peak time. Employers, too, are beginning to recognise that flexible working hours may allow both larks and owls to perform at their best. Some companies that already let staff choose their working hours within limits report that employees are both happier and more productive.'],
      ],
    },
    {
      title: 'Letting Rivers Run Free',
      sub: 'You should spend about 20 minutes on Questions 27–40, which are based on Reading Passage 3 below.',
      paras: [
        ['', 'For most of the twentieth century, dams were symbols of progress. They generated electricity, stored water for farms and cities, controlled floods and allowed ships to travel further inland. Hundreds of thousands were built across Europe and North America, from vast structures generating power for whole regions to small weirs that once drove local mills. Some were built so long ago that nobody can now remember who owns them. Yet many of these dams have outlived their original purpose, and a growing movement argues that removing them would bring greater benefits than keeping them. In my view, this argument is largely correct, although it should not be applied without careful thought.'],
        ['', 'The most famous example of dam removal took place on the Elwha River, in the north-western United States. Two dams, built in the early twentieth century to supply electricity to a nearby town and its paper mill, had blocked the river for nearly a hundred years. They had no passages for fish, and the salmon runs, which had once been among the richest in the region, had collapsed. Between 2011 and 2014, both dams were taken down, in what was at the time the largest dam removal project ever undertaken. The work cost hundreds of millions of dollars, much of it spent on protecting the water supply of the nearby town. Since then, salmon have returned to stretches of the river that they had not reached for a century.'],
        ['', 'Removing a dam sets off a series of changes, some of them rapid. Dams trap enormous quantities of sediment, the sand, gravel and mud carried by the river. Once the Elwha dams had gone, tens of millions of tonnes of this material were carried downstream, and within a few years the beach at the river’s mouth had grown considerably, creating new habitats for shellfish and other marine life. When fish can once again swim upstream, they carry nutrients from the sea into the river and the surrounding forests, as their bodies decay after spawning. And as the reservoir behind a dam disappears, the water downstream becomes cooler, since water no longer lies warming in a shallow lake, which benefits species that need cold, well-oxygenated water.'],
        ['', 'Other effects take longer. A river that has been held behind a dam cannot flood naturally, and floods, although destructive for people, are essential for many ecosystems. Periodic flooding creates and refreshes wetlands and backwaters on the river’s flood plain, where young fish shelter and insects breed. Flooding also spreads seeds and fresh soil across the land beside the river. Once natural flows are restored, these habitats gradually begin to form again, although the process may take decades.'],
        ['', 'The movement has spread well beyond North America. In Europe, where it has been estimated that there are more than a million barriers on rivers, many of them small and abandoned, hundreds are now removed every year. Most of these are not great walls of concrete but old weirs and culverts, whose removal is relatively cheap. Many were built to power mills or to water fields that no longer exist. Yet they matter enormously, because even a small barrier can prevent fish from reaching their breeding grounds. In 2024, an even larger project than the Elwha was completed on the Klamath River in the United States, where four hydroelectric dams were removed.'],
        ['', 'None of this means that all dams should be removed. Many still provide essential services, such as drinking water and flood protection for towns built close to rivers, and large hydroelectric dams produce electricity without burning fossil fuels, which is a significant advantage at a time when countries are trying to reduce their emissions. Removing such dams would simply replace one environmental problem with another. Removal can also cause short-term damage: the release of sediment may cloud the water and smother the riverbed for several years, and in some cases it releases pollutants that have accumulated behind the dam. Removal can also be unpopular locally, since some residents value the lakes created by dams for fishing, boating or simply the view.'],
        ['', 'The decision should therefore be made case by case. Dams that are unsafe, that no longer serve any useful purpose, or whose benefits are small compared with their ecological cost are strong candidates for removal. Those that provide clean energy or protect communities should be modernised instead, for example by adding passages that allow fish to pass. What is clear is that the old assumption that rivers exist mainly to be controlled is giving way to a recognition that a free-flowing river provides benefits of its own.'],
        ['', 'Perhaps the most encouraging lesson from the Elwha is how quickly nature can recover when it is given the opportunity. Scientists who had expected the river to take decades to return to health were surprised by the speed of the changes. Within five years of the dams being removed, several species of fish had been recorded far upstream. Rivers, it seems, are more resilient than we once believed, provided that we are willing to step out of their way.'],
      ],
    },
  ];

  const headings = {
    i: 'A material in every part of modern life',
    ii: 'Ancient uses and early European interest',
    iii: 'Solving a problem with heat',
    iv: 'How the raw material is gathered',
    v: 'From South American forests to Asian plantations',
    vi: 'Conflict, chemistry and the search for new sources',
    vii: 'Why rubber trees are dying out',
    viii: 'Rubber in medicine',
    ix: 'A failed attempt to grow rubber in Europe',
  };
  const SOURCES = { A: 'is used on a large scale today', B: 'is being developed or tested', C: 'is not mentioned in the passage' };
  const PARAS = { A: 1, B: 1, C: 1, D: 1, E: 1, F: 1, G: 1 };
  const PEOPLE = { A: 'Till Roenneberg', B: 'Mary Carskadon', C: 'Samuel Jones and colleagues', D: 'Kristen Knutson and Malcolm von Schantz', E: 'Mareike Wieth and Rose Zacks' };
  const EFFECTS = {
    A: 'cooler water downstream',
    B: 'the growth of a beach at the river mouth',
    C: 'nutrients carried from the sea into forests',
    D: 'the creation of wetlands on the flood plain',
    E: 'an increase in tourism',
    F: 'higher electricity prices',
  };

  const Q = {
    1: { kind: 'heading', p: 'B', a: 'ii', ev: '“the Olmecs of what is now Mexico were making solid rubber balls… European scientists were fascinated, but they could find few practical uses for it”' },
    2: { kind: 'heading', p: 'C', a: 'iii', ev: '“natural rubber reacted badly to temperature… heating rubber with sulphur produced a material that stayed firm and elastic”' },
    3: { kind: 'heading', p: 'D', a: 'iv', ev: '“To collect it, workers make a thin diagonal cut through the bark”' },
    4: { kind: 'heading', p: 'E', a: 'v', ev: '“almost all the world’s rubber came from wild trees in the Amazon… Asian plantations had overtaken the wild trees of the Amazon”' },
    5: { kind: 'heading', p: 'F', a: 'vi', ev: '“War created the next turning point… synthetic rubber from petroleum… researchers are developing alternative sources”' },
    6: { kind: 'gap', free: true, a: ['diagonal cut', 'diagonal'], limit: 2, ev: '“workers make a thin diagonal cut through the bark”' },
    7: { kind: 'gap', free: true, a: ['cup', 'small cup'], limit: 2, ev: '“drips into a small cup fixed to the trunk”' },
    8: { kind: 'gap', free: true, a: ['acid'], limit: 2, ev: '“The collected latex is then mixed with acid to make it solidify”' },
    9: { kind: 'para', s: 'rubber trees grown on plantations in Southeast Asia', a: 'A', ev: '“today most of the world’s natural rubber is still produced in Southeast Asia, particularly in Thailand and Indonesia”' },
    10: { kind: 'para', s: 'synthetic rubber made from petroleum', a: 'A', ev: '“Today, more than half of all rubber used worldwide is synthetic.”' },
    11: { kind: 'para', s: 'the roots of a type of dandelion', a: 'B', ev: '“A tyre company in Germany has produced tyres using rubber extracted from the roots of a species of dandelion”' },
    12: { kind: 'para', s: 'a desert shrub called guayule', a: 'B', ev: '“a desert shrub called guayule is being tested in the south-western United States”' },
    13: { kind: 'para', s: 'rubber produced from seaweed', a: 'C', ev: 'Seaweed is never mentioned; the alternative sources named are “a species of dandelion” and “a desert shrub called guayule”.' },
    14: { kind: 'para', s: 'an example of a change that improved students’ sleep and performance', a: 'D', ev: '“students slept, on average, more than half an hour longer each night, and that their grades and attendance improved”' },
    15: { kind: 'para', s: 'a comparison between people’s weekly routine and air travel', a: 'C', ev: '“The result resembles flying across several time zones every Friday and back every Monday.”' },
    16: { kind: 'para', s: 'a description of how chronotype changes with age', a: 'B', ev: '“people become progressively later during adolescence, reaching their latest point at around the age of twenty”' },
    17: { kind: 'para', s: 'a suggestion about planning different kinds of work', a: 'G', ev: '“people should schedule analytical work at their peak time and creative work at their off-peak time”' },
    18: { kind: 'para', s: 'a reference to a factor that can shift the body clock later', a: 'E', ev: '“exposure to light, especially artificial light in the evening, can shift the clock later”' },
    19: { kind: 'person', s: 'found that evening types had higher rates of some illnesses', a: 'D', ev: '“higher rates of conditions such as diabetes and depression”' },
    20: { kind: 'person', s: 'showed that a sleep hormone is released later during puberty', a: 'B', ev: '“during puberty, the release of melatonin, a hormone that makes us sleepy, shifts later in the evening”' },
    21: { kind: 'person', s: 'found that people solved some problems better when they were not at their best', a: 'E', ev: '“they performed better at their non-optimal time of day”' },
    22: { kind: 'person', s: 'identified many genetic regions linked to waking early', a: 'C', ev: '“identified 351 regions of the genome linked to being a morning person”' },
    23: { kind: 'gap', a: ['light', 'morning light'], limit: 3, ev: '“The clock is reset each day mainly by light, especially morning light.”' },
    24: { kind: 'gap', a: ['twenty', '20'], limit: 3, ev: '“reaching their latest point at around the age of twenty”' },
    25: { kind: 'gap', a: ['seattle'], limit: 3, ev: '“When schools in Seattle moved their start time from 7.50 to 8.45 in 2016”' },
    26: { kind: 'gap', a: ['twenty-five minutes', '25 minutes'], limit: 3, ev: '“tended to wake, on average, around twenty-five minutes earlier”' },
    27: { kind: 'ynng', s: 'Many dams no longer serve the purpose for which they were built.', a: 'YES', ev: '“many of these dams have outlived their original purpose”' },
    28: { kind: 'ynng', s: 'The Elwha dams were removed mainly because they had become unsafe.', a: 'NOT GIVEN', ev: 'The writer explains that the Elwha dams “had no passages for fish” and that “salmon runs… had collapsed”, but never states why the decision to remove them was taken.' },
    29: { kind: 'ynng', s: 'Small barriers on rivers have little effect on fish.', a: 'NO', ev: '“even a small barrier can prevent fish from reaching their breeding grounds”' },
    30: { kind: 'ynng', s: 'Large hydroelectric dams should be removed in order to protect rivers.', a: 'NO', ev: '“Removing such dams would simply replace one environmental problem with another.”' },
    31: { kind: 'ynng', s: 'Rivers can recover more quickly than scientists had expected.', a: 'YES', ev: '“Scientists who had expected the river to take decades to return to health were surprised by the speed of the changes.”' },
    32: { kind: 'person', s: 'the release of sediment trapped behind the dams', a: 'B', ev: '“within a few years the beach at the river’s mouth had grown considerably”' },
    33: { kind: 'person', s: 'the return of fish to the upper river', a: 'C', ev: '“they carry nutrients from the sea into the river and the surrounding forests”' },
    34: { kind: 'person', s: 'the disappearance of the reservoir', a: 'A', ev: '“the water downstream becomes cooler, since water no longer lies warming in a shallow lake”' },
    35: { kind: 'person', s: 'the return of natural flooding', a: 'D', ev: '“Periodic flooding creates and refreshes wetlands and backwaters on the river’s flood plain”' },
    36: { kind: 'gap', a: ['paper mill'], limit: 3, ev: '“to supply electricity to a nearby town and its paper mill”' },
    37: { kind: 'gap', a: ['salmon runs', 'the salmon runs', 'salmon'], limit: 3, ev: '“the salmon runs, which had once been among the richest in the region, had collapsed”' },
    38: { kind: 'gap', a: ['old weirs'], limit: 3, ev: '“Most of these are not great walls of concrete but old weirs and culverts”' },
    39: { kind: 'gap', a: ['klamath river', 'klamath', 'the klamath river'], limit: 3, ev: '“an even larger project than the Elwha was completed on the Klamath River”' },
    40: { kind: 'gap', a: ['pollutants'], limit: 3, ev: '“in some cases it releases pollutants that have accumulated behind the dam”' },
  };

  const YN_KEY = '<div class="key-box"><dl><dt>YES</dt><dd>if the statement agrees with the claims of the writer</dd><dt>NO</dt><dd>if the statement contradicts the claims of the writer</dd><dt>NOT GIVEN</dt><dd>if it is impossible to say what the writer thinks about this</dd></dl></div>';
  const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i);
  const keyBox = (title, obj) => `<div class="key-box"><span class="label">${title}</span><dl>${Object.entries(obj).map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl></div>`;
  const selectQ = (h, n, opts, ph) => `<div class="q" data-q="${n}"><div class="stem"><span class="qn">${n}</span><span>${h.esc(h.Q[n].s)}</span></div>${h.select(n, Object.keys(opts).map(k => [k, k]), ph)}</div>`;
  const dBox = c => `<div style="border:1.5px solid currentColor;border-radius:4px;padding:8px 12px">${c}</div><div aria-hidden="true" style="padding:2px 0 2px 24px">↓</div>`;

  const build = h => [
    `<div class="qset"><h3>Questions 1–5</h3>
      <p class="instr">Reading Passage 1 has six paragraphs, <b>A–F</b>. Choose the correct heading for paragraphs <b>B–F</b> from the list of headings below.</p>
      ${keyBox('List of headings', headings)}
      <p class="muted"><i>Example: Paragraph A — i</i></p>
      ${range(1, 5).map(n => `<div class="q" data-q="${n}"><div class="stem"><span class="qn">${n}</span><span>Paragraph ${h.Q[n].p}</span></div>${h.select(n, Object.keys(headings).filter(k => k !== 'i').map(k => [k, k]), 'Choose a heading')}</div>`).join('')}</div>
    <div class="qset"><h3>Questions 6–8</h3>
      <p class="instr">Complete the diagram below. Choose <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.</p>
      <div class="notes"><h4>Collecting natural rubber</h4>
        <div style="max-width:520px">
          ${dBox(`A thin ${h.gapIn(6)} is made through the bark.`)}
          ${dBox(`Latex drips into a ${h.gapIn(7)} on the trunk.`)}
          <div style="border:1.5px solid currentColor;border-radius:4px;padding:8px 12px">The latex is mixed with ${h.gapIn(8)}, pressed into sheets and dried.</div>
        </div>
      </div></div>
    <div class="qset"><h3>Questions 9–13</h3>
      <p class="instr">Classify the following sources of rubber according to whether, in the passage, each one</p>
      ${keyBox('Classification', SOURCES)}
      ${range(9, 13).map(n => selectQ(h, n, SOURCES, 'Choose A–C')).join('')}</div>`,
    `<div class="qset"><h3>Questions 14–18</h3>
      <p class="instr">Reading Passage 2 has seven paragraphs, <b>A–G</b>. Which paragraph contains the following information?</p>
      ${range(14, 18).map(n => selectQ(h, n, PARAS, 'Choose A–G')).join('')}</div>
    <div class="qset"><h3>Questions 19–22</h3>
      <p class="instr">Match each finding with the correct researcher or researchers, <b>A–E</b>.</p>
      ${keyBox('List of researchers', PEOPLE)}
      ${range(19, 22).map(n => selectQ(h, n, PEOPLE, 'Choose A–E')).join('')}</div>
    <div class="qset"><h3>Questions 23–26</h3>
      <p class="instr">Answer the questions below. Choose <b>NO MORE THAN THREE WORDS AND/OR A NUMBER</b> from the passage for each answer.</p>
      <div class="notes"><ol start="23" style="padding-left:20px">
        <li>What mainly resets the body clock each day? ${h.gapIn(23)}</li>
        <li>At about what age are people at their latest chronotype? ${h.gapIn(24)}</li>
        <li>In which city did a later school start lead to longer sleep? ${h.gapIn(25)}</li>
        <li>How much earlier did people with many “morning” genetic variants wake? ${h.gapIn(26)}</li>
      </ol></div></div>`,
    `<div class="qset"><h3>Questions 27–31</h3>
      <p class="instr">Do the following statements agree with the claims of the writer in Reading Passage 3? Choose</p>
      ${YN_KEY}
      ${range(27, 31).map(h.tf).join('')}</div>
    <div class="qset"><h3>Questions 32–35</h3>
      <p class="instr">The writer describes changes that follow the removal of a dam. Match each change with the effect, <b>A–F</b>, that the writer links with it.</p>
      ${keyBox('List of effects', EFFECTS)}
      ${range(32, 35).map(n => selectQ(h, n, EFFECTS, 'Choose A–F')).join('')}</div>
    <div class="qset"><h3>Questions 36–40</h3>
      <p class="instr">Complete the sentences below. Choose <b>NO MORE THAN THREE WORDS</b> from the passage for each answer.</p>
      <div class="notes"><ul>
        <li>The Elwha dams supplied electricity to a town and its ${h.gapIn(36)}.</li>
        <li>Before the dams were removed, the river’s ${h.gapIn(37)} had collapsed.</li>
        <li>Most barriers removed in Europe are ${h.gapIn(38)} and culverts.</li>
        <li>Four hydroelectric dams were removed on the ${h.gapIn(39)} in 2024.</li>
        <li>Removing a dam can sometimes release ${h.gapIn(40)} into the river.</li>
      </ul></div></div>`,
  ];

  window.READING_TEST = { num: 104, name: 'Premium Test 4', passages, Q, headings, box: {}, ranges: [[1, 13], [14, 26], [27, 40]], build, evidence: true };
})();
