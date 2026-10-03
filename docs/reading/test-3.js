// IELTS Academic Reading · Practice Test 3 — content only. The exam engine is assets/reading-exam.js.
(() => {
  'use strict';
  const passages = [
    {
      title: 'The Urban Forest',
      sub: 'You should spend about 20 minutes on Questions 1–13, which are based on Reading Passage 1 below.',
      paras: [
        ['', 'For centuries, towns planted trees mainly for decoration. A row of elms might line a boulevard, or a wealthy landowner might create a shaded avenue to impress visitors. Today, however, urban trees are increasingly treated as part of a city’s infrastructure. They can cool streets, absorb rainwater and provide habitats for insects and birds, so planners now discuss a city’s “urban forest” in much the same way as its roads and drainage systems.'],
        ['', 'The cooling effect is especially valuable during heatwaves. Leaves shade buildings and pavements, while water released from leaves lowers the temperature of the surrounding air. In one study, sensors placed in a tree-lined neighbourhood recorded afternoon temperatures several degrees lower than those in a nearby area with very little vegetation. The difference was greatest where trees formed a continuous canopy over the road.'],
        ['', 'Trees do not solve every environmental problem. Young specimens need regular watering, particularly during their first two summers, and mature trees can damage pavements if their roots have too little space. Some species also release pollen that affects people with allergies. For these reasons, successful planting programmes begin below ground: engineers must check the soil, underground cables and the room available for roots before choosing a location.'],
        ['', 'The choice of species matters above ground as well. In the past, many councils planted long avenues with a single species, which made the trees easy to manage but left them vulnerable to disease. When Dutch elm disease arrived in Europe and North America, entire streets lost their trees within a few years. Modern programmes therefore aim for diversity, mixing species with different tolerances of heat, drought and pests.'],
        ['', 'Residents often influence which projects survive. A newly planted tree may look insignificant, and volunteers sometimes organise watering rotas or report damage after vandalism. In Melbourne, a public mapping project allowed residents to record the condition of individual trees. The resulting database helped the council identify neglected areas and plan maintenance more fairly, although participation was uneven between neighbourhoods.'],
        ['', 'There is also a question of ownership. Trees beside a private house may be cared for by the resident, while those in a park or on a pavement are usually the council’s responsibility. Clear rules are important because pruning carried out by one party can affect the safety or health of a tree maintained by another. Several cities now publish guidance explaining who may plant, prune or remove a street tree.'],
        ['', 'Urban foresters caution that trees should not be measured only by the number planted. A sapling counts as a success only if it survives long enough to become part of the canopy. This has encouraged councils to record survival rates, shade coverage and the distribution of trees, rather than announcing a large planting total and moving on. The long-term goal is not simply greener streets, but healthier and more resilient neighbourhoods.'],
      ],
    },
    {
      title: 'The Repair Café Movement',
      sub: 'You should spend about 20 minutes on Questions 14–26, which are based on Reading Passage 2 below.',
      paras: [
        ['A', 'On a Saturday morning in Amsterdam, people carry broken lamps, torn jackets and silent radios into a community centre. They are not visiting a shop: they have come to a repair café, where volunteers help visitors mend household objects. The first event was organised in 2009, and the idea has since spread to hundreds of towns in Europe, North America and Australia.'],
        ['B', 'The practical appeal is obvious. Repairing an object can cost less than replacing it, and a successful repair keeps material out of the waste stream. Yet organisers say that the environmental benefit is difficult to calculate. A repaired toaster may avoid the manufacture of a new one, but visitors sometimes travel by car to the event, and a repair that lasts only a few months may delay rather than prevent replacement.'],
        ['C', 'Repair cafés also function as informal classrooms. A visitor who watches a volunteer replace a plug may feel able to attempt a similar job at home. Older participants often teach skills that are no longer passed down in families, while younger volunteers may contribute knowledge of electronics or 3D printing. The exchange is deliberately collaborative: the owner is encouraged to take part rather than hand over the object and wait.'],
        ['D', 'The movement has its limits. Modern devices are frequently sealed with glue, contain proprietary parts or require software that only the manufacturer can access. Volunteers may diagnose a fault but be unable to obtain the right component. Some organisers have therefore begun campaigning for “right to repair” laws, which would require manufacturers to provide spare parts and technical information for a reasonable period.'],
        ['E', 'Financial sustainability is another challenge. Most cafés charge nothing or ask for a small donation, and the tools are often donated. Some receive grants from local councils, but grants can be temporary and may come with reporting requirements that consume volunteers’ time. A few cafés have developed partnerships with schools or libraries, sharing equipment and premises instead of paying for a permanent workshop.'],
        ['F', 'Despite these difficulties, researchers see the cafés as valuable social spaces. People who would not normally meet can work together on a common problem, and visitors may return even when they have nothing to repair. The strongest projects are not necessarily those that fix the largest number of objects; they are the ones that create a regular local habit of sharing knowledge and resources.'],
      ],
    },
    {
      title: 'The Value of Waiting',
      sub: 'You should spend about 20 minutes on Questions 27–40, which are based on Reading Passage 3 below.',
      paras: [
        ['', 'Modern life is organised around reducing delays. We order food before leaving work, receive messages instantly and complain when a website takes a few seconds to load. Waiting is usually treated as wasted time, but psychologists who study decision-making argue that a pause can sometimes improve the quality of a choice. The benefit does not come from delay itself; it comes from allowing an initial reaction to be examined before it becomes an action.'],
        ['', 'One example is the “marshmallow test”, in which children were offered a small reward immediately or a larger reward if they waited. Early accounts presented the task as a simple measure of self-control. Later research has shown that performance was also influenced by factors such as whether the child trusted the adult and what the child believed about the reliability of the environment. Waiting, in other words, is partly a judgement about whether a future promise is credible.'],
        ['', 'Adults make similar calculations when deciding whether to buy something. Online retailers know that a strong emotional response can lead to an immediate purchase, so some consumer advisers recommend a cooling-off period. Leaving an item in a basket overnight does not guarantee a sensible decision, but it gives the buyer time to compare alternatives, check the budget and notice whether the desire was caused by a temporary mood.'],
        ['', 'A pause can also improve communication. In conversation, people who answer instantly may repeat a familiar opinion, whereas a few seconds of silence can make room for a more considered response. This is one reason some interviewers deliberately wait after asking a question. The silence may feel uncomfortable, but it often encourages the speaker to add detail rather than ending with the first answer that comes to mind.'],
        ['', 'Waiting is not always beneficial. When a decision is reversible and the available information is unlikely to change, postponing it may simply create anxiety. Delays can also be costly in emergencies, and people who are already exhausted may use a pause to avoid deciding at all. The useful question is therefore not “Should I wait?” but “What could I learn or reconsider during the wait?”'],
        ['', 'Some organisations have started building purposeful pauses into their procedures. Hospitals use checklists before operations, pilots follow standard call-outs before take-off, and financial firms impose short review periods before unusually large transactions. These systems do not rely on an individual remembering to be patient at a stressful moment. Instead, they make the pause part of the design of the task.'],
        ['', 'The wider lesson is modest. A pause cannot turn incomplete information into complete information, and it cannot remove the need for judgement. It can, however, separate a feeling from a decision. In a culture that rewards speed, choosing to wait for a clearly defined reason may be a small but useful form of control.'],
      ],
    },
  ];

  const PEOPLE = { A: 'Marta de Vries', B: 'Leon Okafor', C: 'Priya Nair' };
  const ENDINGS = {
    A: 'may reduce waste but does not always prevent a new purchase.',
    B: 'can allow people to learn skills from one another.',
    C: 'depends partly on whether a future promise is trusted.',
    D: 'is most successful when it is made compulsory by a government.',
    E: 'can be useful when a pause is built into a procedure.',
    F: 'always produces a better result than acting immediately.',
  };
  const box = { A: 'reaction', B: 'promise', C: 'alternatives', D: 'silence', E: 'emergency', F: 'checklists', G: 'control', H: 'mood' };
  const headings = {};

  const Q = {
    1: { kind: 'tfng', s: 'Urban trees were originally planted mainly for environmental reasons.', a: 'FALSE', ev: 'The passage says towns planted trees mainly for decoration.' },
    2: { kind: 'tfng', s: 'A continuous canopy can make a road cooler than an area with little vegetation.', a: 'TRUE', ev: 'The greatest temperature difference was found where trees formed a continuous canopy over the road.' },
    3: { kind: 'tfng', s: 'Young trees usually survive without extra water after they are planted.', a: 'FALSE', ev: 'Young specimens need regular watering, particularly during their first two summers.' },
    4: { kind: 'tfng', s: 'Engineers check underground conditions before a tree species is selected.', a: 'TRUE', ev: 'Programmes begin below ground by checking soil, cables and space for roots before choosing a location.' },
    5: { kind: 'tfng', s: 'Dutch elm disease affected only trees in Europe.', a: 'NOT GIVEN', ev: 'The passage says it arrived in Europe and North America but does not compare the extent of the damage in the two regions.' },
    6: { kind: 'tfng', s: 'Every neighbourhood took part equally in Melbourne’s tree-mapping project.', a: 'FALSE', ev: 'Participation was uneven between neighbourhoods.' },
    7: { kind: 'gap', a: ['watering'], limit: 1, ev: 'Volunteers sometimes organise watering rotas.' },
    8: { kind: 'gap', a: ['diversity'], limit: 1, ev: 'Modern programmes aim for diversity by mixing species.' },
    9: { kind: 'gap', a: ['mapping'], limit: 1, ev: 'A public mapping project allowed residents to record the condition of individual trees.' },
    10: { kind: 'gap', a: ['maintenance'], limit: 1, ev: 'The database helped the council plan maintenance more fairly.' },
    11: { kind: 'gap', a: ['ownership'], limit: 1, ev: 'There is also a question of ownership.' },
    12: { kind: 'gap', a: ['prune', 'pruning'], limit: 1, ev: 'Guidance explains who may plant, prune or remove a street tree.' },
    13: { kind: 'gap', a: ['survival'], limit: 1, ev: 'Councils are encouraged to record survival rates rather than only planting totals.' },
    14: { kind: 'para', s: 'an example of a repair event and the objects brought to it', a: 'A', ev: 'Paragraph A describes people bringing lamps, jackets and radios to a community repair event.' },
    15: { kind: 'para', s: 'a warning that repairing an object may not avoid replacement for long', a: 'B', ev: 'Paragraph B says a short-lived repair may delay rather than prevent replacement.' },
    16: { kind: 'para', s: 'a description of visitors learning by working alongside volunteers', a: 'C', ev: 'Paragraph C explains that owners are encouraged to take part and learn skills.' },
    17: { kind: 'para', s: 'a reason why some products are difficult to repair', a: 'D', ev: 'Paragraph D mentions sealed devices, proprietary parts and inaccessible software.' },
    18: { kind: 'para', s: 'a way for repair cafés to avoid the cost of their own premises', a: 'E', ev: 'Paragraph E describes partnerships with schools or libraries to share equipment and premises.' },
    19: { kind: 'person', s: 'Repair cafés should be judged partly by their educational effect.', a: 'A', ev: 'Marta de Vries argues that the most important result is often the learning that happens during a repair.' },
    20: { kind: 'person', s: 'Manufacturers should make technical information available for longer.', a: 'B', ev: 'Leon Okafor supports right-to-repair rules requiring spare parts and technical information.' },
    21: { kind: 'person', s: 'A café can be successful even if it does not repair the greatest number of objects.', a: 'C', ev: 'Priya Nair says the strongest projects are those that create a regular habit of sharing knowledge and resources.' },
    22: { kind: 'person', s: 'Repairing household objects can help people from different generations meet.', a: 'A', ev: 'Marta de Vries describes older participants and younger volunteers exchanging different skills.' },
    23: { kind: 'gap', a: ['waste'], limit: 2, ev: 'A successful repair keeps material out of the waste stream.' },
    24: { kind: 'gap', a: ['donation'], limit: 2, ev: 'Most cafés charge nothing or ask for a small donation.' },
    25: { kind: 'gap', a: ['spare parts'], limit: 2, ev: 'Right-to-repair laws would require manufacturers to provide spare parts.' },
    26: { kind: 'gap', a: ['social spaces'], limit: 2, ev: 'Researchers see the cafés as valuable social spaces.' },
    27: { kind: 'mcq', s: 'What is the main point of the first paragraph?', o: { A: 'People are becoming less patient than they were in the past.', B: 'A pause can sometimes lead to a better decision.', C: 'Technology has made all decisions easier.', D: 'Psychologists have proved that waiting is always helpful.' }, a: 'B', ev: 'The paragraph introduces the idea that a pause can improve a choice by allowing an initial reaction to be examined.' },
    28: { kind: 'mcq', s: 'What did later research into the marshmallow test suggest?', o: { A: 'Children never care about future rewards.', B: 'The test measures only a child’s age.', C: 'Trust in the adult can affect whether a child waits.', D: 'The larger reward was usually removed.' }, a: 'C', ev: 'Later research found that waiting was influenced by whether the child trusted the adult and the environment.' },
    29: { kind: 'mcq', s: 'According to the passage, leaving an online purchase overnight can help a buyer to', o: { A: 'obtain a guaranteed discount.', B: 'avoid comparing different products.', C: 'check whether the desire is temporary.', D: 'make the retailer deliver faster.' }, a: 'C', ev: 'The cooling-off period can reveal whether desire was caused by a temporary mood.' },
    30: { kind: 'mcq', s: 'Why might an interviewer remain silent after asking a question?', o: { A: 'To encourage the speaker to give more detail.', B: 'To show that the answer was incorrect.', C: 'To save time during the interview.', D: 'To prevent the speaker from changing the subject.' }, a: 'A', ev: 'The passage says silence often encourages the speaker to add detail.' },
    31: { kind: 'mcq', s: 'What is the main purpose of the fifth paragraph?', o: { A: 'To list emergencies in which people must act quickly.', B: 'To explain why waiting is never a good idea.', C: 'To show that the usefulness of waiting depends on the situation.', D: 'To compare anxiety with tiredness.' }, a: 'C', ev: 'The paragraph gives situations where waiting helps and situations where it may simply create anxiety or delay action.' },
    32: { kind: 'ynng', s: 'The marshmallow test gives a complete measure of a child’s self-control.', a: 'NO', ev: 'Later research shows that trust and the reliability of the environment also affect performance.' },
    33: { kind: 'ynng', s: 'A cooling-off period guarantees that an online purchase will be wise.', a: 'NO', ev: 'The passage says leaving an item overnight does not guarantee a sensible decision.' },
    34: { kind: 'ynng', s: 'Silence in an interview can lead a speaker to provide additional information.', a: 'YES', ev: 'The passage says silence often encourages the speaker to add detail.' },
    35: { kind: 'ynng', s: 'Delaying a decision is always harmful when information is incomplete.', a: 'NOT GIVEN', ev: 'The passage discusses reversible decisions and emergencies, but does not make this general claim about incomplete information.' },
    36: { kind: 'ynng', s: 'Some organisations make pauses part of their formal procedures.', a: 'YES', ev: 'Hospitals, pilots and financial firms build review pauses into their procedures.' },
    37: { kind: 'box', a: 'A', ev: 'A pause allows an initial reaction to be examined.' },
    38: { kind: 'box', a: 'C', ev: 'A cooling-off period gives a buyer time to compare alternatives.' },
    39: { kind: 'box', a: 'D', ev: 'A few seconds of silence can make room for a more considered response.' },
    40: { kind: 'box', a: 'F', ev: 'Hospitals and other organisations use checklists before important actions.' },
  };

  const TF_KEY = '<div class="key-box"><dl><dt>TRUE</dt><dd>if the statement agrees with the information</dd><dt>FALSE</dt><dd>if the statement contradicts the information</dd><dt>NOT GIVEN</dt><dd>if there is no information on this</dd></dl></div>';
  const YN_KEY = '<div class="key-box"><dl><dt>YES</dt><dd>if the statement agrees with the claims of the writer</dd><dt>NO</dt><dd>if the statement contradicts the claims of the writer</dd><dt>NOT GIVEN</dt><dd>if it is impossible to say what the writer thinks about this</dd></dl></div>';
  const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i);
  const keyBox = (title, obj) => `<div class="key-box"><span class="label">${title}</span><dl>${Object.entries(obj).map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl></div>`;
  const selectQ = (h, n, opts, ph) => `<div class="q" data-q="${n}"><div class="stem"><span class="qn">${n}</span><span>${h.esc(h.Q[n].s)}</span></div>${h.select(n, Object.keys(opts).map(k => [k, k]), ph)}</div>`;

  const build = h => [
    `<div class="qset"><h3>Questions 1–6</h3>
      <p class="instr">Do the following statements agree with the information given in Reading Passage 1? Choose</p>
      ${TF_KEY}
      ${range(1, 6).map(h.tf).join('')}</div>
    <div class="qset"><h3>Questions 7–13</h3>
      <p class="instr">Complete the notes below. Choose <b>ONE WORD ONLY</b> from the passage for each answer.</p>
      <div class="notes"><h4>Managing an urban forest</h4>
        <span class="h">Community involvement</span>
        <ul>
          <li>Volunteers may organise ${h.gapIn(7)} rotas.</li>
          <li>Modern planting programmes aim for species ${h.gapIn(8)}.</li>
          <li>Residents helped with tree ${h.gapIn(9)}.</li>
        </ul>
        <span class="h">Long-term planning</span>
        <ul>
          <li>Databases help councils plan ${h.gapIn(10)}.</li>
          <li>Clear rules are needed because the question of ${h.gapIn(11)} can be complicated.</li>
          <li>Guidance explains who may ${h.gapIn(12)} a street tree.</li>
          <li>Councils now record tree ${h.gapIn(13)} rates.</li>
        </ul>
      </div></div>`,
    `<div class="qset"><h3>Questions 14–18</h3>
      <p class="instr">Reading Passage 2 has six paragraphs, <b>A–F</b>. Which paragraph contains the following information? <b>NB</b> You may use any letter more than once.</p>
      ${range(14, 18).map(n => selectQ(h, n, { A: 1, B: 1, C: 1, D: 1, E: 1, F: 1 }, 'Choose A–F')).join('')}</div>
    <div class="qset"><h3>Questions 19–22</h3>
      <p class="instr">Look at the following statements and the list of people below. Match each statement with the correct person, <b>A, B or C</b>. <b>NB</b> You may use any letter more than once.</p>
      ${keyBox('List of people', PEOPLE)}
      ${range(19, 22).map(n => selectQ(h, n, PEOPLE, 'Choose A–C')).join('')}</div>
    <div class="qset"><h3>Questions 23–26</h3>
      <p class="instr">Complete the summary below. Choose <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.</p>
      <div class="notes"><h4>Why repair cafés matter</h4>
        <p>Repairing an object may keep it out of ${h.gapIn(23)}. Visitors are sometimes asked for a small ${h.gapIn(24)}, while campaigns may call for manufacturers to provide ${h.gapIn(25)}. Researchers also value repair cafés as ${h.gapIn(26)} where people share skills.</p>
      </div></div>`,
    `<div class="qset"><h3>Questions 27–31</h3>
      <p class="instr">Choose the correct letter, <b>A, B, C or D</b>.</p>
      ${range(27, 31).map(h.mcq).join('')}</div>
    <div class="qset"><h3>Questions 32–36</h3>
      <p class="instr">Do the following statements agree with the claims of the writer in Reading Passage 3? Choose</p>
      ${YN_KEY}
      ${range(32, 36).map(h.tf).join('')}</div>
    <div class="qset"><h3>Questions 37–40</h3>
      <p class="instr">Complete the summary using the list of words, <b>A–H</b>, below.</p>
      <div class="notes"><h4>Why a pause can help</h4>
        <p>A pause gives people time to examine an initial ${h.boxSel(37)}. When shopping, it allows a buyer to compare ${h.boxSel(38)}. In conversation, it can create ${h.boxSel(39)} and encourage a fuller answer. Organisations often use ${h.boxSel(40)} to make a pause part of a procedure.</p>
      </div>
      ${keyBox('List of words', box)}</div>`,
  ];

  window.READING_TEST = { num: 3, passages, Q, headings, box, ranges: [[1, 13], [14, 26], [27, 40]], build };
})();
