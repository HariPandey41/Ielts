// IELTS Academic Reading · Practice Test 10 — content only. The exam engine is assets/reading-exam.js.
(() => {
  'use strict';
  const passages = [
    {
      title: 'The Great Stink',
      sub: 'You should spend about 20 minutes on Questions 1–13, which are based on Reading Passage 1 below.',
      paras: [
        ['', 'In the middle of the nineteenth century, London was the largest and wealthiest city in the world, but it had a problem that no amount of wealth seemed able to solve. Its population had more than doubled in fifty years, to around two and a half million people, and almost all of their waste ended up in the River Thames. The same river was also one of the main sources of the city’s drinking water.'],
        ['', 'For centuries, Londoners had relied on cesspits, holes in the ground beneath or behind houses, which were emptied by night-soil men who sold the waste to farmers as fertiliser. Ironically, a technological improvement made matters worse. From the early nineteenth century, flushing toilets became increasingly common in wealthier homes. They used large amounts of water, which caused cesspits to overflow, and in 1848 new regulations required houses to be connected to the sewers. The sewers, however, had been designed to carry rainwater, not human waste, and they emptied directly into the Thames.'],
        ['', 'The consequences were deadly. London suffered a series of cholera epidemics, in which thousands of people died, often within a day or two of falling ill. At the time, most doctors believed that cholera was spread by miasma, a poisonous form of bad air that rose from rotting material. In 1854, however, the physician John Snow studied an outbreak in the Soho district and showed that almost all of the victims had drawn water from a single public pump in Broad Street. When the handle of the pump was removed, the outbreak, which was already declining, came to an end. Snow argued that cholera was spread through contaminated water, but his ideas were not widely accepted during his lifetime.'],
        ['', 'What finally forced the authorities to act was not disease but smell. The summer of 1858 was unusually hot, and the level of the Thames fell, exposing banks of rotting sewage to the sun. The resulting smell, which became known as the Great Stink, was so powerful that it reached the Houses of Parliament, which stand beside the river. Members of Parliament had the curtains soaked in chemicals in an attempt to block it out, and some considered moving to another building. Within eighteen days, Parliament passed a law giving the Metropolitan Board of Works the money and the authority to build a new sewer system.'],
        ['', 'The man responsible for the project was the Board’s chief engineer, Joseph Bazalgette. His plan was to build large sewers running parallel to the river, which would intercept the waste flowing into the Thames and carry it east, away from the city centre. Construction began in 1859 and took around sixteen years. Workers built around 130 kilometres of these main intercepting sewers and more than 1,800 kilometres of smaller street sewers, using hundreds of millions of bricks. The waste was carried to outfalls at Beckton, on the north bank, and Crossness, on the south, where it was released into the river on the outgoing tide. Huge steam-powered pumping stations lifted the sewage at points where it could no longer flow downhill on its own.'],
        ['', 'Bazalgette made two decisions that proved particularly wise. First, after calculating the size of pipe that would be needed for each area, he doubled it, reasoning that the city would continue to grow and that the work would only be done once. Without this decision, the system would have been overwhelmed decades earlier than it was. Second, he insisted on using Portland cement, a relatively new and untested material that becomes stronger when it is exposed to water. Its quality was strictly controlled, and much of the network built with it is still in use today.'],
        ['', 'The project changed the appearance of central London as well. Along parts of the river, the new sewers were built inside embankments that reclaimed land from the Thames. The Victoria Embankment, completed in 1870, contained not only a sewer but also a new road and an underground railway, and the land above was laid out with gardens. The last serious cholera epidemic in London occurred in 1866, in an area of the East End that had not yet been connected to the new system, which seemed to confirm Snow’s theory.'],
        ['', 'Bazalgette’s sewers remain the backbone of London’s drainage, but they were designed for a city of around four million people, and London now has more than twice that number. Because the system carries rainwater as well as sewage, heavy rain can still cause it to overflow into the Thames, sometimes dozens of times a year. To deal with this, a new tunnel twenty-five kilometres long has been built beneath the river to capture the overflow and carry it to a treatment works. Like the Victorian system, it has been designed to last for well over a century.'],
      ],
    },
    {
      title: 'Forests Between Land and Sea',
      sub: 'You should spend about 20 minutes on Questions 14–26, which are based on Reading Passage 2 below.',
      paras: [
        ['A', 'Along tropical and subtropical coastlines, where rivers meet the sea, grow some of the most unusual forests on Earth. Mangroves are trees and shrubs that live in the zone between high and low tide, their roots flooded by salt water twice a day. They are found in more than one hundred countries, from Florida and Brazil to West Africa, India and northern Australia. Although they cover a small area compared with rainforests, they provide benefits out of all proportion to their size. For much of history, however, they were regarded as unhealthy, mosquito-filled swamps, and clearing them was often seen as a sign of progress.'],
        ['B', 'Few plants can survive in salt water, and mangroves have developed several ways of dealing with it. Some species prevent most of the salt from entering their roots, filtering it out as they absorb water. Others take in salt but get rid of it through special glands in their leaves, which may be covered with salt crystals on a dry day. The mud in which mangroves grow also contains very little oxygen, so many species have developed roots that grow upwards out of the mud like small pencils. These roots are exposed at low tide and allow the trees to take in air. Other species send out curved roots from their trunks and branches, which support the trees in the soft mud like the legs of a table.'],
        ['C', 'Mangroves have an unusual way of reproducing too. In many species, the seeds begin to grow while they are still attached to the parent tree, developing into long, pointed seedlings. When they drop, some stick upright in the mud below and quickly take root. Others are carried away by the tide and can float for months, which helps to explain how mangroves have spread across such large distances. Seedlings that are carried into water that is too deep or too salty simply fail to establish themselves, so only a small fraction of the seedlings produced ever grow into mature trees.'],
        ['D', 'The tangle of roots below the water provides shelter for young fish, crabs and shrimps, protecting them from larger predators. Many species that are later caught far out at sea spend the early part of their lives among the mangroves, so the forests support fisheries on which millions of coastal people depend. Mangroves also act as a natural barrier against the sea. Their roots slow down waves and trap sediment, reducing erosion, and several studies after major storms have found that villages behind wide belts of mangroves suffered less damage than those on open coasts.'],
        ['E', 'Mangroves have recently attracted attention for another reason: their ability to store carbon. Because their waterlogged soils contain little oxygen, fallen leaves and roots decay very slowly, and carbon builds up in the mud over hundreds or thousands of years. As a result, a hectare of mangrove forest may store several times as much carbon as a hectare of tropical rainforest, most of it below ground. When mangroves are cleared and the soil is exposed to the air, this carbon is released into the atmosphere. Clearing even a small area of mangroves can therefore release far more carbon than clearing a much larger area of forest on dry land.'],
        ['F', 'Despite their value, mangroves have been disappearing rapidly. Over the past few decades, a large proportion of the world’s mangroves has been lost, cleared for shrimp farms, rice fields, palm oil plantations and coastal development. The rate of loss has slowed in recent years, and many countries have started planting new mangroves. However, restoration projects have often been disappointing. Seedlings have frequently been planted on mudflats that are flooded for too long each day, where few of them survive. Scientists now recommend restoring the natural flow of water to areas where mangroves once grew, which often allows them to return by themselves.'],
        ['G', 'For the people who live beside them, mangroves have long been a source of materials as well as food. Their wood is dense and resistant to rot, and it has traditionally been used for building houses and boats and for making charcoal. Coastal communities also collect honey, crabs and shellfish from the forests. The largest continuous area of mangroves in the world, the Sundarbans on the border between India and Bangladesh, is home to the Bengal tiger, which has adapted to swimming between the islands of the delta. Conservation schemes that involve local people in managing mangroves, and that allow them to continue using the forests in sustainable ways, have generally been more successful than those that simply ban all use. In some places, communities receive payments for protecting mangroves because of the carbon they store, which gives them a direct financial reason to keep the forests standing.'],
      ],
    },
    {
      title: 'Bringing Back the Mammoth?',
      sub: 'You should spend about 20 minutes on Questions 27–40, which are based on Reading Passage 3 below.',
      paras: [
        ['', 'In 2003, a team of Spanish and French scientists achieved something that had never been done before. Three years earlier, the last Pyrenean ibex, a type of wild goat, had been found dead in a national park in northern Spain. Before it died, scientists had taken samples of its skin and preserved its cells. Using cloning techniques, they placed the cells into eggs taken from domestic goats and implanted the embryos into other females. One ibex was born alive, the first animal ever to be brought back from extinction. It survived for only a few minutes, dying because of a defect in its lungs.'],
        ['', 'Two decades later, the idea of de-extinction, as it has become known, has moved from science fiction towards serious science. Several organisations are now working to bring back extinct species, including the passenger pigeon, which was once the most numerous bird in North America, and, most ambitiously, the woolly mammoth. Because no living mammoth cells exist, the aim is not to clone a mammoth but to edit the genes of its closest living relative, the Asian elephant, so that it has some of the mammoth’s characteristics, such as thick hair, a layer of fat and smaller ears that lose less heat.'],
        ['', 'Supporters argue that such animals could do more than attract visitors. In the Siberian Arctic, scientists have suggested that herds of mammoth-like elephants could help to restore the grasslands that existed during the last ice age, by trampling snow, knocking down trees and encouraging grass to grow. They claim that this could slow the melting of the frozen ground beneath, which contains huge amounts of carbon. Others argue that the technology developed for de-extinction will help to save species that are still alive. In 2020, for example, scientists in the United States cloned a black-footed ferret from cells that had been frozen more than thirty years earlier, adding genetic variety to a small and endangered population. Every ferret alive at the time was descended from just seven animals, so even one new genetic line was significant.'],
        ['', 'Critics, however, raise a number of objections. The first is that the animals produced would not really be the species that were lost. An elephant with mammoth-like hair would be, at best, a new kind of elephant. Its behaviour, which in elephants is learned from older members of the herd, could not be recovered from DNA at all. A passenger pigeon raised by another species of pigeon might not know how to behave like one, and the vast flocks in which passenger pigeons once lived could not easily be recreated.'],
        ['', 'A second objection concerns habitat. Many species became extinct because the places where they lived were destroyed, and those places have often not recovered. Releasing a revived animal into an environment that can no longer support it would achieve little. There are also concerns about the effects that revived species might have on existing ecosystems, which have changed considerably since they disappeared.'],
        ['', 'The most serious objection may be about money and priorities. Thousands of living species are currently threatened with extinction, and conservation organisations rarely have enough funding to protect them. A study published in 2017 estimated that, if the cost of reviving and maintaining extinct species were paid for from conservation budgets, more species could be lost than gained. Some conservationists also fear that the promise of de-extinction will make people less concerned about protecting endangered animals, if extinction no longer seems permanent.'],
        ['', 'Supporters respond that much of the money for de-extinction comes from private investors who would not otherwise give it to conservation, and that public interest in mammoths might increase support for protecting elephants. Even so, the timescales involved are long. Elephants are pregnant for almost two years, and an edited elephant would take many more years to grow up and breed. Creating a herd large enough to have any effect on the Siberian landscape could therefore take many decades, even if every stage of the project succeeded. Some researchers have proposed growing embryos in artificial wombs, but this technology does not yet exist for large mammals.'],
        ['', 'In my view, the technologies being developed are genuinely valuable, but their greatest value lies in protecting species that still exist rather than in recreating those that have gone. The clone of the black-footed ferret shows what is possible when frozen cells are stored before a population declines too far. A modest investment in collecting and storing cells from endangered species today may do far more good than any number of mammoths. Above all, de-extinction should never be allowed to distract from the fact that it is far easier and cheaper to prevent a species from disappearing than to bring it back.'],
      ],
    },
  ];

  const box = { A: 'storms', B: 'carbon', C: 'oxygen', D: 'shrimp farms', E: 'fishing boats', F: 'young fish', G: 'tourists', H: 'rainfall' };
  const ENDINGS = {
    A: 'could not be recreated from its genes.',
    B: 'might help to protect frozen ground in Siberia.',
    C: 'was achieved using cells stored for decades.',
    D: 'died because of a problem with its lungs.',
    E: 'has already been released into the wild.',
    F: 'would be paid for entirely by governments.',
  };

  const Q = {
    1: { kind: 'tfng', s: 'London’s population doubled in the first half of the nineteenth century.', a: 'TRUE', ev: '“Its population had more than doubled in fifty years”' },
    2: { kind: 'tfng', s: 'Night-soil men were paid by the city authorities.', a: 'NOT GIVEN', ev: 'The passage says only that night-soil men “sold the waste to farmers as fertiliser”; it does not say whether the authorities paid them.' },
    3: { kind: 'tfng', s: 'The introduction of flushing toilets improved conditions in the Thames.', a: 'FALSE', ev: '“Ironically, a technological improvement made matters worse.”' },
    4: { kind: 'tfng', s: 'London’s original sewers were built to carry rainwater.', a: 'TRUE', ev: '“The sewers, however, had been designed to carry rainwater, not human waste”' },
    5: { kind: 'tfng', s: 'Most doctors in the 1850s believed cholera was caused by contaminated water.', a: 'FALSE', ev: '“At the time, most doctors believed that cholera was spread by miasma”' },
    6: { kind: 'tfng', s: 'The Broad Street outbreak ended entirely because the pump handle was removed.', a: 'FALSE', ev: '“When the handle of the pump was removed, the outbreak, which was already declining, came to an end.”' },
    7: { kind: 'tfng', s: 'Some Members of Parliament became ill because of the Great Stink.', a: 'NOT GIVEN', ev: 'The passage says the smell “reached the Houses of Parliament” and that members soaked the curtains, but does not mention anyone becoming ill.' },
    8: { kind: 'gap', a: ['eighteen', '18'], limit: 1, ev: '“Within eighteen days, Parliament passed a law”' },
    9: { kind: 'gap', a: ['bricks'], limit: 1, ev: '“using hundreds of millions of bricks”' },
    10: { kind: 'gap', a: ['crossness'], limit: 1, ev: '“The waste was carried to outfalls at Beckton, on the north bank, and Crossness, on the south”' },
    11: { kind: 'gap', a: ['pumping'], limit: 1, ev: '“Huge steam-powered pumping stations lifted the sewage”' },
    12: { kind: 'gap', a: ['doubled'], limit: 1, ev: '“after calculating the size of pipe that would be needed for each area, he doubled it”' },
    13: { kind: 'gap', a: ['railway'], limit: 1, ev: '“contained not only a sewer but also a new road and an underground railway”' },
    14: { kind: 'para', s: 'a description of how young mangroves can travel long distances', a: 'C', ev: '“Others are carried away by the tide and can float for months”' },
    15: { kind: 'para', s: 'a reason why many attempts to plant mangroves have failed', a: 'F', ev: '“Seedlings have frequently been planted on mudflats that are flooded for too long each day, where few of them survive.”' },
    16: { kind: 'para', s: 'a comparison between mangroves and another type of forest', a: 'E', ev: '“a hectare of mangrove forest may store several times as much carbon as a hectare of tropical rainforest”' },
    17: { kind: 'para', s: 'two different ways in which mangroves deal with salt', a: 'B', ev: '“Some species prevent most of the salt from entering their roots… Others take in salt but get rid of it through special glands in their leaves”' },
    18: { kind: 'box', a: 'C', ev: '“The mud in which mangroves grow also contains very little oxygen”' },
    19: { kind: 'box', a: 'F', ev: '“The tangle of roots below the water provides shelter for young fish, crabs and shrimps”' },
    20: { kind: 'box', a: 'A', ev: '“villages behind wide belts of mangroves suffered less damage”' },
    21: { kind: 'box', a: 'B', ev: '“carbon builds up in the mud over hundreds or thousands of years”' },
    22: { kind: 'box', a: 'D', ev: '“cleared for shrimp farms, rice fields, palm oil plantations and coastal development”' },
    23: { kind: 'gap', a: ['salt crystals'], limit: 2, ev: '“which may be covered with salt crystals on a dry day”' },
    24: { kind: 'gap', a: ['fisheries'], limit: 2, ev: '“so the forests support fisheries on which millions of coastal people depend”' },
    25: { kind: 'gap', a: ['sediment'], limit: 2, ev: '“Their roots slow down waves and trap sediment, reducing erosion”' },
    26: { kind: 'gap', a: ['flow of water', 'natural flow'], limit: 3, ev: '“restoring the natural flow of water to areas where mangroves once grew”' },
    27: { kind: 'ynng', s: 'The cloning of the Pyrenean ibex should be regarded as a complete success.', a: 'NO', ev: '“It survived for only a few minutes, dying because of a defect in its lungs.”' },
    28: { kind: 'ynng', s: 'The passenger pigeon was once very common in North America.', a: 'YES', ev: '“the passenger pigeon, which was once the most numerous bird in North America”' },
    29: { kind: 'ynng', s: 'Mammoth-like elephants would be more popular with visitors than ordinary elephants.', a: 'NOT GIVEN', ev: 'The writer reports that supporters say such animals “could do more than attract visitors” but makes no comparison with ordinary elephants.' },
    30: { kind: 'ynng', s: 'Ecosystems have remained much the same since many species disappeared.', a: 'NO', ev: '“existing ecosystems, which have changed considerably since they disappeared”' },
    31: { kind: 'ynng', s: 'Preventing extinction is easier than reversing it.', a: 'YES', ev: '“it is far easier and cheaper to prevent a species from disappearing than to bring it back”' },
    32: { kind: 'ending', s: 'The cloned Pyrenean ibex', a: 'D', ev: '“It survived for only a few minutes, dying because of a defect in its lungs.”' },
    33: { kind: 'ending', s: 'A herd of mammoth-like elephants', a: 'B', ev: '“could help to restore the grasslands… could slow the melting of the frozen ground beneath”' },
    34: { kind: 'ending', s: 'The cloning of the black-footed ferret', a: 'C', ev: '“cloned a black-footed ferret from cells that had been frozen more than thirty years earlier”' },
    35: { kind: 'ending', s: 'The behaviour of an extinct species', a: 'A', ev: '“Its behaviour, which in elephants is learned from older members of the herd, could not be recovered from DNA at all.”' },
    36: { kind: 'mcq', s: 'Why do scientists plan to edit the genes of the Asian elephant?', o: { A: 'Mammoth cells are too old to use.', B: 'No living mammoth cells are available.', C: 'Elephants are easier to clone than other animals.', D: 'The law does not allow mammoths to be cloned.' }, a: 'B', ev: '“Because no living mammoth cells exist, the aim is not to clone a mammoth but to edit the genes of its closest living relative”' },
    37: { kind: 'mcq', s: 'What is the main point of the fifth paragraph?', o: { A: 'Revived species would face the same problems that made them extinct.', B: 'Revived species would quickly destroy existing ecosystems.', C: 'Most extinct species lived in habitats that have recovered.', D: 'Revived animals should be kept in zoos rather than released.' }, a: 'A', ev: '“Many species became extinct because the places where they lived were destroyed, and those places have often not recovered.”' },
    38: { kind: 'mcq', s: 'What did the 2017 study suggest?', o: { A: 'De-extinction would be cheaper than expected.', B: 'Paying for de-extinction from conservation budgets could cause a net loss of species.', C: 'Private investors are unwilling to fund conservation.', D: 'Most endangered species cannot be saved.' }, a: 'B', ev: '“if the cost of reviving and maintaining extinct species were paid for from conservation budgets, more species could be lost than gained”' },
    39: { kind: 'mcq', s: 'How do supporters of de-extinction respond to concerns about funding?', o: { A: 'They say the costs will fall quickly.', B: 'They say governments should pay more.', C: 'They say the money would not otherwise go to conservation.', D: 'They say mammoths will be ready within a few years.' }, a: 'C', ev: '“much of the money for de-extinction comes from private investors who would not otherwise give it to conservation”' },
    40: { kind: 'mcq', s: 'What does the writer recommend?', o: { A: 'stopping all research into de-extinction', B: 'reviving the mammoth before other species', C: 'releasing revived species as soon as possible', D: 'storing cells from endangered species now' }, a: 'D', ev: '“A modest investment in collecting and storing cells from endangered species today may do far more good than any number of mammoths.”' },
  };

  const TF_KEY = '<div class="key-box"><dl><dt>TRUE</dt><dd>if the statement agrees with the information</dd><dt>FALSE</dt><dd>if the statement contradicts the information</dd><dt>NOT GIVEN</dt><dd>if there is no information on this</dd></dl></div>';
  const YN_KEY = '<div class="key-box"><dl><dt>YES</dt><dd>if the statement agrees with the claims of the writer</dd><dt>NO</dt><dd>if the statement contradicts the claims of the writer</dd><dt>NOT GIVEN</dt><dd>if it is impossible to say what the writer thinks about this</dd></dl></div>';
  const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i);
  const keyBox = (title, obj) => `<div class="key-box"><span class="label">${title}</span><dl>${Object.entries(obj).map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl></div>`;
  const selectQ = (h, n, opts, ph) => `<div class="q" data-q="${n}"><div class="stem"><span class="qn">${n}</span><span>${h.esc(h.Q[n].s)}</span></div>${h.select(n, Object.keys(opts).map(k => [k, k]), ph)}</div>`;
  const shortQ = (h, n, text) => `<div class="q" data-q="${n}"><div class="stem"><span class="qn">${n}</span><span>${text}</span></div><div style="margin-left:2.4rem">${h.gapIn(n).replace(/<span class="qn">\d+<\/span>/, '')}</div></div>`;

  const build = h => [
    `<div class="qset"><h3>Questions 1–7</h3>
      <p class="instr">Do the following statements agree with the information given in Reading Passage 1? Choose</p>
      ${TF_KEY}
      ${range(1, 7).map(h.tf).join('')}</div>
    <div class="qset"><h3>Questions 8–13</h3>
      <p class="instr">Complete the notes below. Choose <b>ONE WORD AND/OR A NUMBER</b> from the passage for each answer.</p>
      <div class="notes"><h4>Bazalgette’s sewers</h4>
        <ul>
          <li>Parliament approved the plan in ${h.gapIn(8)} days.</li>
          <li>Hundreds of millions of ${h.gapIn(9)} were used in construction.</li>
          <li>Waste was released into the river at Beckton and ${h.gapIn(10)}.</li>
          <li>Steam-powered ${h.gapIn(11)} stations raised the sewage where necessary.</li>
          <li>Bazalgette ${h.gapIn(12)} the size of pipe that he had calculated.</li>
          <li>The Victoria Embankment also contained a road and an underground ${h.gapIn(13)}.</li>
        </ul>
      </div></div>`,
    `<div class="qset"><h3>Questions 14–17</h3>
      <p class="instr">Reading Passage 2 has seven paragraphs, <b>A–G</b>. Which paragraph contains the following information? <b>NB</b> You may use any letter more than once.</p>
      ${range(14, 17).map(n => selectQ(h, n, { A: 1, B: 1, C: 1, D: 1, E: 1, F: 1, G: 1 }, 'Choose A–G')).join('')}</div>
    <div class="qset"><h3>Questions 18–22</h3>
      <p class="instr">Complete the summary using the list of words, <b>A–H</b>, below.</p>
      <div class="notes"><h4>The value of mangroves</h4>
        <p>Mangroves grow in mud that contains little ${h.boxSel(18)}, so many have roots that grow up into the air. Their underwater roots shelter ${h.boxSel(19)} and other animals. They also reduce erosion and can protect villages from ${h.boxSel(20)}. Their soils store large amounts of ${h.boxSel(21)}. However, large areas have been cleared, for example for ${h.boxSel(22)}.</p>
      </div>
      ${keyBox('List of words', box)}</div>
    <div class="qset"><h3>Questions 23–26</h3>
      <p class="instr">Answer the questions below. Choose <b>NO MORE THAN THREE WORDS</b> from the passage for each answer.</p>
      ${shortQ(h, 23, 'What may be seen on the leaves of some mangroves on a dry day?')}
      ${shortQ(h, 24, 'What economic activity do mangroves support far out at sea?')}
      ${shortQ(h, 25, 'What do mangrove roots trap?')}
      ${shortQ(h, 26, 'What do scientists now recommend restoring to former mangrove areas?')}</div>`,
    `<div class="qset"><h3>Questions 27–31</h3>
      <p class="instr">Do the following statements agree with the claims of the writer in Reading Passage 3? Choose</p>
      ${YN_KEY}
      ${range(27, 31).map(h.tf).join('')}</div>
    <div class="qset"><h3>Questions 32–35</h3>
      <p class="instr">Complete each sentence with the correct ending, <b>A–F</b>, below.</p>
      ${keyBox('List of endings', ENDINGS)}
      ${range(32, 35).map(n => selectQ(h, n, ENDINGS, 'Choose A–F')).join('')}</div>
    <div class="qset"><h3>Questions 36–40</h3>
      <p class="instr">Choose the correct letter, <b>A, B, C or D</b>.</p>
      ${range(36, 40).map(h.mcq).join('')}</div>`,
  ];

  window.READING_TEST = { num: 10, passages, Q, headings: {}, box, ranges: [[1, 13], [14, 26], [27, 40]], build };
})();
