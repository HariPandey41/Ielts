// IELTS Academic Reading · Practice Test 9 — content only. The exam engine is assets/reading-exam.js.
(() => {
  'use strict';
  const passages = [
    {
      title: 'A Brief History of Tea',
      sub: 'You should spend about 20 minutes on Questions 1–13, which are based on Reading Passage 1 below.',
      paras: [
        ['', 'After water, tea is the most widely consumed drink in the world. Every type of true tea, whether green, black or white, comes from the leaves of a single plant, an evergreen shrub native to the region where China, India and Myanmar meet. The differences between the various kinds lie mainly in how the leaves are processed after they are picked: green tea is heated soon after picking to prevent the leaves from darkening, while black tea is allowed to react with the air until the leaves turn dark brown.'],
        ['', 'According to a well-known Chinese legend, tea was discovered almost five thousand years ago when a few leaves blew into a pot of water being boiled for the emperor Shen Nong. The story is almost certainly a myth, but archaeology confirms that tea was being drunk in China at least two thousand years ago. Traces of tea leaves have been found in the tomb of a Han dynasty emperor who died in 141 BC, buried alongside other goods intended for use in the afterlife.'],
        ['', 'Tea became central to Chinese culture during the Tang dynasty, which lasted from the seventh to the tenth century. Around the year 760, a writer named Lu Yu produced The Classic of Tea, the first book devoted entirely to the subject. It described how tea should be grown, processed and prepared, and even recommended the best kinds of water for making it, preferring mountain springs to rivers and wells. At this time, tea leaves were usually steamed, pressed into bricks and dried. Pieces of the brick were then ground into a powder and boiled. Compressed tea was easy to transport, and in parts of Central Asia, tea bricks were even used as money.'],
        ['', 'Tea travelled to Japan with Buddhist monks who had studied in China. In the twelfth century, the monk Eisai introduced the practice of whisking powdered green tea in hot water, and wrote that the drink could help monks stay awake during long periods of meditation. Over the following centuries, the preparation of tea developed into an elaborate ceremony in Japan, in which every movement is carefully prescribed and which is still practised today.'],
        ['', 'Europeans learned about tea much later. Dutch traders brought the first shipments to Europe in the early seventeenth century, and the drink became popular in the Netherlands before it was widely known in England. Its fashionable status in England is often credited to Catherine of Braganza, the Portuguese princess who married King Charles II in 1662 and brought her taste for tea to the royal court. For many years, however, tea remained expensive, partly because the British government taxed it heavily. As a result, smuggling was widespread, and much of the tea drunk in Britain had been brought into the country illegally. In 1784, the tax was cut from 119 per cent to 12.5 per cent, and tea quickly became affordable for ordinary people.'],
        ['', 'Britain’s demand for tea created a serious problem. China would accept little except silver in payment, and the trade drained Britain’s reserves. The British East India Company responded partly by selling opium grown in India to Chinese merchants, a trade that led to two wars between Britain and China. At the same time, the British began to look for ways to grow tea in their own colonies. In 1823, a tea plant native to Assam, in north-east India, was identified, and plantations were soon established there. In 1848, the Scottish botanist Robert Fortune travelled into parts of China that were closed to foreigners, disguised in Chinese clothing, and collected thousands of tea plants and seeds, together with information about how the leaves were processed. These were shipped to India, where they helped to establish the tea industry in the hills around Darjeeling.'],
        ['', 'The way tea is prepared has changed too. Tea bags are said to have been invented by accident in 1908, when an American merchant named Thomas Sullivan sent samples of tea to his customers in small silk bags. Some customers apparently put the bags straight into hot water instead of emptying them. Whether or not the story is true, tea bags were in common use in the United States by the 1920s, although they did not become popular in Britain until the 1950s. Today, more than nine in ten cups of tea drunk in Britain are made with tea bags.'],
        ['', 'China is still the world’s largest producer of tea, followed by India, but the largest exporter of black tea is Kenya, where tea was first planted only in the early twentieth century. Most of Kenya’s tea is grown by small farmers on plots of less than one hectare. Like many crops, tea faces an uncertain future as the climate changes. Tea plants require reliable rainfall and are sensitive to high temperatures, and in several producing countries, growers have already reported lower yields during periods of drought.'],
      ],
    },
    {
      title: 'Concrete That Repairs Itself',
      sub: 'You should spend about 20 minutes on Questions 14–26, which are based on Reading Passage 2 below.',
      paras: [
        ['A', 'Concrete is the most widely used man-made material on Earth. It forms the foundations of houses, the walls of dams, the decks of bridges and the tunnels beneath cities, and roughly three tonnes of it are produced every year for every person on the planet. Yet concrete has a weakness. Almost all concrete eventually develops small cracks, caused by changes in temperature, shrinkage as it dries or the weight it carries. On their own, these cracks may be harmless, but they allow water and chemicals to reach the steel bars that are embedded in most concrete structures to strengthen them.'],
        ['B', 'Once water reaches the steel, the bars begin to rust. Rust takes up more space than the original steel, so it pushes against the surrounding concrete, widening the cracks and allowing still more water inside. Over time, the structure may lose much of its strength. Inspecting and repairing concrete structures is expensive and disruptive, often requiring roads or bridges to be closed, and in many countries the cost of maintaining ageing infrastructure is rising. Many of the bridges and tunnels built during the great expansion of road networks in the mid-twentieth century are now reaching the end of their expected lives at around the same time. Engineers have therefore become increasingly interested in concrete that can seal its own cracks before serious damage occurs.'],
        ['C', 'Remarkably, some of the oldest concrete in the world appears to have this ability. Structures built by the Romans, such as harbour walls and the Pantheon in Rome, have survived for around two thousand years. In 2023, a team of researchers in the United States reported that Roman concrete contains small white lumps of lime, which had previously been regarded as a sign of poor mixing. When a crack reaches one of these lumps and water enters, the lime dissolves and then forms new mineral crystals that fill the gap. The Romans may therefore have created self-healing concrete without fully realising it. The researchers have since produced modern concrete using a similar recipe and found that cracks in test samples closed within two weeks when water was allowed to flow through them, whereas similar cracks in ordinary concrete did not.'],
        ['D', 'The best-known modern approach uses bacteria. It was developed by the microbiologist Henk Jonkers at Delft University of Technology in the Netherlands. Jonkers selected a type of bacteria that can survive in the extremely alkaline conditions inside concrete, where most living things would quickly die. The bacteria are added in the form of spores, an inactive state in which they can survive for many years without food or water. They are mixed into the concrete together with their food, calcium lactate, inside small clay pellets that protect them while the concrete is being made.'],
        ['E', 'Nothing happens as long as the concrete remains undamaged. When a crack forms and water seeps in, however, the spores become active and begin to feed. As they do so, they produce limestone, which gradually fills the crack and seals it. The process can close cracks up to almost one millimetre wide within a few weeks, protecting the steel from corrosion. Because the bacteria become inactive again once the crack has been sealed, the concrete can repair itself more than once. Laboratory tests suggest that the spores can survive inside concrete for many decades, although it is not yet known how long they will remain effective in real buildings.'],
        ['F', 'Other researchers are exploring different methods. Some have added tiny capsules containing a liquid healing agent, which break open when a crack passes through them and release a substance that hardens on contact with the air. Others have built networks of thin tubes into concrete, similar to the blood vessels in the body, through which repair materials can be pumped when damage is detected. Each method has advantages, but all of them so far work only on relatively small cracks and cannot repair major structural damage. Some engineers have also experimented with self-healing coatings and with repair liquids containing bacteria, which can be sprayed onto existing structures rather than mixed into new concrete.'],
        ['G', 'Cost remains the main obstacle. Self-healing concrete is considerably more expensive to produce than ordinary concrete, so it has mostly been used in structures where repairs would be particularly difficult, such as underground water tanks and tunnels. Supporters argue that the higher initial price should be compared with the savings over a structure’s lifetime. There may be environmental benefits too. Producing cement, the main ingredient in concrete, is responsible for around eight per cent of the world’s carbon dioxide emissions, so any technology that allows concrete structures to last longer could reduce the need to build new ones, and with it the emissions involved in producing fresh cement.'],
      ],
    },
    {
      title: 'Creatures of Habit',
      sub: 'You should spend about 20 minutes on Questions 27–40, which are based on Reading Passage 3 below.',
      paras: [
        ['', 'Much of what we do each day is not the result of conscious decision. We brush our teeth, check our phones and take the same route to work without really thinking about it. In one well-known study, the American psychologist Wendy Wood asked volunteers to record what they were doing and thinking at regular intervals throughout the day. She found that about forty per cent of their actions were performed almost automatically, in the same place each day, while their thoughts were elsewhere. Habits, it seems, make up a large part of our lives.'],
        ['', 'Habits are formed through repetition. When we perform an action repeatedly in the same situation, a link develops between the situation and the action, so that eventually the situation itself is enough to trigger the behaviour. Research with animals has helped to show what happens in the brain. In experiments at the Massachusetts Institute of Technology, Ann Graybiel recorded brain activity in rats as they learned to find food in a maze. At first, activity in a region deep in the brain was high throughout the run. Once the route had become a habit, however, activity rose sharply at the beginning and end of the run but fell during the middle, as though the whole sequence had been packaged into a single unit.'],
        ['', 'A common belief is that a new habit takes twenty-one days to form. This figure appears to have no scientific basis. When the psychologist Phillippa Lally and her colleagues at University College London asked volunteers to adopt a new daily behaviour, such as eating a piece of fruit with lunch or going for a run before dinner, they found that the time taken for the behaviour to become automatic varied enormously, from eighteen days to more than eight months. On average, it took sixty-six days. Missing a single day did not significantly affect the process, but simpler behaviours became habits more quickly than complex ones.'],
        ['', 'One important consequence of this research is that good intentions are often not enough. People who want to change their behaviour frequently rely on willpower, but willpower is unreliable, especially when people are tired or stressed. Indeed, Wood’s research suggests that people who seem to have strong self-control are not necessarily better at resisting temptation. Instead, they are better at forming habits that make temptation less likely to arise in the first place, such as never keeping sweets in the house.'],
        ['', 'This suggests that changing the environment can be more effective than relying on determination. Making a desirable behaviour easier, for example by leaving running shoes beside the door, and making an undesirable one harder, for instance by keeping a phone in another room, can have surprisingly large effects. The American researcher BJ Fogg has also recommended starting with very small changes, such as doing two press-ups after brushing one’s teeth, and linking each new behaviour to an existing routine. Once the small habit is established, it can gradually be expanded. The aim, Fogg argues, is to make a new behaviour so easy that it does not depend on motivation, which naturally rises and falls from day to day.'],
        ['', 'Breaking bad habits is often harder than forming good ones, because the old link between situation and behaviour does not simply disappear. However, major changes in people’s lives may provide an opportunity. When people move house or start a new job, the familiar cues that triggered their old habits are no longer present. Wood found that students who had recently changed university were more likely to succeed in changing their exercise habits, provided they were already motivated to do so. Some governments and businesses have taken advantage of such moments, for instance by offering new residents information about local public transport.'],
        ['', 'Not everyone accepts the most enthusiastic claims made about habits. Some psychologists argue that the concept has become so popular that it is used to explain almost everything, and that books promising to transform readers’ lives through habit change often go far beyond the evidence. Laboratory studies of simple behaviours may not tell us much about complex activities such as learning a language or running a business, which require continued attention and planning. Habits may help people to start such activities each day, but they cannot do the thinking that the activities themselves demand.'],
        ['', 'Nevertheless, the research offers a useful corrective to the idea that behaviour is mainly a matter of character. Many of the things we do, both good and bad, are the product of the situations in which we find ourselves. Understanding this may make us both more effective at changing our own behaviour and more sympathetic towards people who struggle to change theirs, since their difficulty may owe more to their surroundings than to any lack of effort.'],
      ],
    },
  ];

  const headings = {
    i: 'How a hidden weakness leads to serious damage',
    ii: 'The safety of bacteria in buildings',
    iii: 'A material used everywhere, but with one problem',
    iv: 'An ancient material with an unexpected ability',
    v: 'A living ingredient and how it is protected',
    vi: 'Alternative ways of repairing cracks',
    vii: 'Why concrete is stronger than steel',
    viii: 'A price worth paying?',
    ix: 'Training engineers in new techniques',
    x: 'How the bacteria seal a crack',
  };
  const PEOPLE = { A: 'Wendy Wood', B: 'Ann Graybiel', C: 'Phillippa Lally', D: 'BJ Fogg' };
  const twoQ = { kind: 'two', pair: [25, 26], s: 'Which TWO limitations of self-healing concrete does the writer mention?', o: { A: 'It costs more than ordinary concrete.', B: 'It is weaker than ordinary concrete.', C: 'It cannot be used in cold climates.', D: 'It can repair only fairly small cracks.', E: 'The bacteria may be harmful to people.' }, a: ['A', 'D'], ev: '“all of them so far work only on relatively small cracks… Self-healing concrete is considerably more expensive to produce than ordinary concrete”' };

  const Q = {
    1: { kind: 'tfng', s: 'Green tea and black tea are produced from different plants.', a: 'FALSE', ev: '“Every type of true tea, whether green, black or white, comes from the leaves of a single plant”' },
    2: { kind: 'tfng', s: 'Archaeologists have found evidence that tea was drunk in China two thousand years ago.', a: 'TRUE', ev: '“archaeology confirms that tea was being drunk in China at least two thousand years ago”' },
    3: { kind: 'tfng', s: 'Lu Yu’s book was translated into several other languages during his lifetime.', a: 'NOT GIVEN', ev: 'The passage describes The Classic of Tea as “the first book devoted entirely to the subject” but says nothing about translations.' },
    4: { kind: 'tfng', s: 'Lu Yu believed that river water was best for making tea.', a: 'FALSE', ev: '“preferring mountain springs to rivers and wells”' },
    5: { kind: 'tfng', s: 'Eisai thought that tea could help monks to meditate.', a: 'TRUE', ev: '“wrote that the drink could help monks stay awake during long periods of meditation”' },
    6: { kind: 'tfng', s: 'Tea was popular in England before it became popular in the Netherlands.', a: 'FALSE', ev: '“the drink became popular in the Netherlands before it was widely known in England”' },
    7: { kind: 'gap', a: ['court', 'royal court'], limit: 2, ev: '“brought her taste for tea to the royal court”' },
    8: { kind: 'gap', a: ['12.5'], limit: 2, ev: '“the tax was cut from 119 per cent to 12.5 per cent”' },
    9: { kind: 'gap', a: ['silver'], limit: 2, ev: '“China would accept little except silver in payment”' },
    10: { kind: 'gap', a: ['assam'], limit: 2, ev: '“a tea plant native to Assam, in north-east India, was identified”' },
    11: { kind: 'gap', a: ['chinese clothing', 'clothing'], limit: 2, ev: '“disguised in Chinese clothing”' },
    12: { kind: 'gap', a: ['silk'], limit: 2, ev: '“sent samples of tea to his customers in small silk bags”' },
    13: { kind: 'gap', a: ['kenya'], limit: 2, ev: '“the largest exporter of black tea is Kenya”' },
    14: { kind: 'heading', p: 'A', a: 'iii', ev: '“Concrete is the most widely used man-made material on Earth… Yet concrete has a weakness.”' },
    15: { kind: 'heading', p: 'B', a: 'i', ev: '“Rust takes up more space than the original steel… the structure may lose much of its strength”' },
    16: { kind: 'heading', p: 'C', a: 'iv', ev: '“some of the oldest concrete in the world appears to have this ability”' },
    17: { kind: 'heading', p: 'D', a: 'v', ev: '“inside small clay pellets that protect them while the concrete is being made”' },
    18: { kind: 'heading', p: 'F', a: 'vi', ev: '“Other researchers are exploring different methods.”' },
    19: { kind: 'heading', p: 'G', a: 'viii', ev: '“Cost remains the main obstacle… the higher initial price should be compared with the savings”' },
    20: { kind: 'gap', a: ['food', 'calcium lactate'], limit: 2, ev: '“They are mixed into the concrete together with their food, calcium lactate”' },
    21: { kind: 'gap', a: ['pellets', 'clay pellets'], limit: 2, ev: '“inside small clay pellets”' },
    22: { kind: 'gap', a: ['water'], limit: 2, ev: '“When a crack forms and water seeps in”' },
    23: { kind: 'gap', a: ['limestone'], limit: 2, ev: '“they produce limestone, which gradually fills the crack”' },
    24: { kind: 'gap', a: ['corrosion'], limit: 2, ev: '“protecting the steel from corrosion”' },
    25: twoQ,
    26: twoQ,
    27: { kind: 'mcq', s: 'What did Wendy Wood’s diary study show?', o: { A: 'People think carefully about most of their actions.', B: 'Much everyday behaviour happens without conscious thought.', C: 'Habits are more common in the evening.', D: 'People are unaware of most of their thoughts.' }, a: 'B', ev: '“about forty per cent of their actions were performed almost automatically”' },
    28: { kind: 'mcq', s: 'What happened in the brains of the rats once running the maze became a habit?', o: { A: 'Activity was high throughout the run.', B: 'Activity stopped completely.', C: 'Activity was concentrated at the start and finish.', D: 'Activity moved to a different part of the brain.' }, a: 'C', ev: '“activity rose sharply at the beginning and end of the run but fell during the middle”' },
    29: { kind: 'mcq', s: 'What does the writer say about the idea that habits take twenty-one days to form?', o: { A: 'It applies only to simple behaviours.', B: 'It is not supported by evidence.', C: 'It was first suggested by Lally.', D: 'It is accurate for most people.' }, a: 'B', ev: '“This figure appears to have no scientific basis.”' },
    30: { kind: 'mcq', s: 'According to Wood, people with strong self-control', o: { A: 'avoid situations in which they will be tempted.', B: 'are better at resisting temptation when it appears.', C: 'rely mainly on their willpower.', D: 'find it harder to form new habits.' }, a: 'A', ev: '“they are better at forming habits that make temptation less likely to arise in the first place”' },
    31: { kind: 'mcq', s: 'Why does the writer mention people who move house or start a new job?', o: { A: 'to show that change causes stress', B: 'to explain why habits are hard to form', C: 'to give an example of a good time to change habits', D: 'to show that habits are rarely affected by environment' }, a: 'C', ev: '“major changes in people’s lives may provide an opportunity”' },
    32: { kind: 'person', s: 'suggested starting with a very small new behaviour', a: 'D', ev: '“BJ Fogg has also recommended starting with very small changes”' },
    33: { kind: 'person', s: 'found that the time needed to form a habit varies widely', a: 'C', ev: '“varied enormously, from eighteen days to more than eight months”' },
    34: { kind: 'person', s: 'studied how habits are represented in the brain', a: 'B', ev: '“Ann Graybiel recorded brain activity in rats as they learned to find food in a maze”' },
    35: { kind: 'person', s: 'found that a change of situation can help motivated people to change their habits', a: 'A', ev: '“Wood found that students who had recently changed university were more likely to succeed in changing their exercise habits”' },
    36: { kind: 'gap', a: ['situation'], limit: 2, ev: '“so that eventually the situation itself is enough to trigger the behaviour”' },
    37: { kind: 'gap', a: ['willpower'], limit: 2, ev: '“willpower is unreliable, especially when people are tired or stressed”' },
    38: { kind: 'gap', a: ['environment'], limit: 2, ev: '“changing the environment can be more effective than relying on determination”' },
    39: { kind: 'gap', a: ['existing routine'], limit: 2, ev: '“linking each new behaviour to an existing routine”' },
    40: { kind: 'gap', a: ['character'], limit: 2, ev: '“the idea that behaviour is mainly a matter of character”' },
  };

  const TF_KEY = '<div class="key-box"><dl><dt>TRUE</dt><dd>if the statement agrees with the information</dd><dt>FALSE</dt><dd>if the statement contradicts the information</dd><dt>NOT GIVEN</dt><dd>if there is no information on this</dd></dl></div>';
  const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i);
  const keyBox = (title, obj) => `<div class="key-box"><span class="label">${title}</span><dl>${Object.entries(obj).map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl></div>`;
  const selectQ = (h, n, opts, ph) => `<div class="q" data-q="${n}"><div class="stem"><span class="qn">${n}</span><span>${h.esc(h.Q[n].s)}</span></div>${h.select(n, Object.keys(opts).map(k => [k, k]), ph)}</div>`;
  const arrow = '<span class="arrow" aria-hidden="true">↓</span>';

  const build = h => [
    `<div class="qset"><h3>Questions 1–6</h3>
      <p class="instr">Do the following statements agree with the information given in Reading Passage 1? Choose</p>
      ${TF_KEY}
      ${range(1, 6).map(h.tf).join('')}</div>
    <div class="qset"><h3>Questions 7–13</h3>
      <p class="instr">Complete the table below. Choose <b>NO MORE THAN TWO WORDS AND/OR A NUMBER</b> from the passage for each answer.</p>
      <div class="rtable-wrap"><table class="rtable"><caption>Tea in Britain and its empire</caption>
        <thead><tr><th>Date</th><th>Event</th></tr></thead>
        <tbody>
          <tr><td data-h="Date">1662</td><td data-h="Event">Catherine of Braganza makes tea fashionable at the ${h.gapIn(7)}.</td></tr>
          <tr><td data-h="Date">1784</td><td data-h="Event">The tax on tea falls to ${h.gapIn(8)} per cent.</td></tr>
          <tr><td data-h="Date">late 18th to 19th centuries</td><td data-h="Event">China accepts mainly ${h.gapIn(9)} as payment for tea, causing problems for Britain.</td></tr>
          <tr><td data-h="Date">1823</td><td data-h="Event">A tea plant native to ${h.gapIn(10)} is identified.</td></tr>
          <tr><td data-h="Date">1848</td><td data-h="Event">Robert Fortune, wearing ${h.gapIn(11)}, collects tea plants in China.</td></tr>
          <tr><td data-h="Date">1908</td><td data-h="Event">Thomas Sullivan sends samples in small ${h.gapIn(12)} bags.</td></tr>
          <tr><td data-h="Date">Today</td><td data-h="Event">${h.gapIn(13)} is the largest exporter of black tea.</td></tr>
        </tbody></table></div></div>`,
    `<div class="qset"><h3>Questions 14–19</h3>
      <p class="instr">Reading Passage 2 has seven paragraphs, <b>A–G</b>. Choose the correct heading for paragraphs <b>A–D</b> and <b>F–G</b> from the list of headings below.</p>
      ${keyBox('List of headings', headings)}
      <p class="muted"><i>Example: Paragraph E — x</i></p>
      ${range(14, 19).map(n => `<div class="q" data-q="${n}"><div class="stem"><span class="qn">${n}</span><span>Paragraph ${h.Q[n].p}</span></div>${h.select(n, Object.keys(headings).filter(k => k !== 'x').map(k => [k, k]), 'Choose a heading')}</div>`).join('')}</div>
    <div class="qset"><h3>Questions 20–24</h3>
      <p class="instr">Complete the flow chart below. Choose <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.</p>
      <div class="rflow"><h4>How bacteria repair concrete</h4>
        <div class="step">Bacterial spores and their ${h.gapIn(20)} are mixed into the concrete inside clay ${h.gapIn(21)}.</div>${arrow}
        <div class="step">A crack forms and ${h.gapIn(22)} gets in.</div>${arrow}
        <div class="step">The spores become active, feed and produce ${h.gapIn(23)}.</div>${arrow}
        <div class="step">The crack is sealed, which protects the steel from ${h.gapIn(24)}.</div>
      </div></div>
    <div class="qset"><h3>Questions 25 and 26</h3>
      <p class="instr">Choose <b>TWO</b> letters, <b>A–E</b>.</p>
      ${h.two(25)}</div>`,
    `<div class="qset"><h3>Questions 27–31</h3>
      <p class="instr">Choose the correct letter, <b>A, B, C or D</b>.</p>
      ${range(27, 31).map(h.mcq).join('')}</div>
    <div class="qset"><h3>Questions 32–35</h3>
      <p class="instr">Look at the following findings and recommendations and the list of researchers below. Match each one with the correct researcher, <b>A–D</b>.</p>
      ${keyBox('List of researchers', PEOPLE)}
      ${range(32, 35).map(n => selectQ(h, n, PEOPLE, 'Choose A–D')).join('')}</div>
    <div class="qset"><h3>Questions 36–40</h3>
      <p class="instr">Complete the summary below. Choose <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.</p>
      <div class="notes"><h4>Changing habits</h4>
        <p>A habit forms when an action is repeated so often that the ${h.gapIn(36)} alone triggers it. Many people try to change their behaviour through ${h.gapIn(37)}, but this often fails when they are tired. A better approach may be to change the ${h.gapIn(38)}, making good behaviour easier and bad behaviour harder. Small new behaviours can be linked to an ${h.gapIn(39)}. The research suggests that behaviour depends less on ${h.gapIn(40)} than many people believe.</p>
      </div></div>`,
  ];

  window.READING_TEST = { num: 9, passages, Q, headings, box: {}, ranges: [[1, 13], [14, 26], [27, 40]], build };
})();
