// IELTS Academic Reading · Full Mock Test 1 — content only. The exam engine is assets/reading-exam.js.
// Kept for the mock test: this test is not listed with the practice tests.
(() => {
  'use strict';
  const passages = [
    {
      title: 'The Lighthouse Keepers',
      sub: 'You should spend about 20 minutes on Questions 1–13, which are based on Reading Passage 1 below.',
      paras: [
        ['', 'For more than two thousand years, people have lit fires on dangerous coasts to warn ships away from rocks and guide them safely into harbour. The most famous early lighthouse, the Pharos of Alexandria in Egypt, was built in the third century BC and was, for many centuries, one of the tallest structures in the world. Its light, produced by a fire burning at the top, is said to have been visible from far out at sea.'],
        ['', 'For most of history, however, lighthouses were simple and unreliable. In Britain, many early lighthouses burned coal in open iron baskets. These fires were extremely wasteful: a single lighthouse could burn up to 400 tonnes of coal a year, all of which had to be carried up the tower by hand. Worse, in wet or windy weather the flames often died down, and on calm nights the light could be hidden by its own smoke, precisely when ships needed it most.'],
        ['', 'The first great improvement came in the 1780s, when the Swiss scientist Aimé Argand invented a new kind of oil lamp. Its hollow, circular wick allowed air to reach the flame from both inside and outside, and it produced a light far brighter than any candle or earlier lamp, with very little smoke. Placed in front of curved reflectors made of polished copper coated with silver, Argand lamps could send a strong beam of light across the sea.'],
        ['', 'An even greater advance followed in 1822, when the French physicist Augustin Fresnel designed a new type of lens. Instead of a single thick piece of glass, which would have been extremely heavy, Fresnel’s lens was made of rings of glass prisms arranged around the lamp, which bent the light into a narrow, powerful beam. A light fitted with a Fresnel lens could be seen more than 20 miles away. The design was quickly adopted around the world, and many of the original lenses are still in use.'],
        ['', 'Engineers also found ways to help sailors tell one lighthouse from another. By rotating the lens, or by placing screens around the lamp, each light could be given its own pattern of flashes, known as its “character”. A navigator who saw, for example, two flashes every ten seconds could look up the pattern on a chart and know exactly which lighthouse was in sight, and therefore where the ship was. Early rotating lenses were turned by clockwork, driven by heavy weights that had to be wound up by hand every few hours throughout the night.'],
        ['', 'Keeping these lights burning was the job of the lighthouse keeper. Keepers on rock lighthouses, built far offshore on reefs, lived in some of the most isolated conditions imaginable. In 1801, one of the two keepers at the Smalls lighthouse, off the coast of Wales, died during a long period of storms. Unable to leave, and afraid that he would be suspected of murder if he threw the body into the sea, his companion kept it in a box tied to the outside of the lighthouse for several weeks until a relief boat arrived. After this incident, it became the rule that rock lighthouses should always have at least three keepers.'],
        ['', 'The work was demanding. Before electricity, the wick of the lamp had to be trimmed every few hours through the night so that the flame did not smoke, which is why keepers in the United States were often known as “wickies”. The lens had to be cleaned every day, because even a thin layer of soot or salt could reduce the strength of the beam. Keepers also recorded the weather and any passing ships in a logbook, and in fog they operated warning signals, sometimes for days without a break. On British rock lighthouses, keepers typically spent two months at the lighthouse, followed by a month ashore with their families.'],
        ['', 'Not all keepers were men. In the United States, many women took over lighthouses after their fathers or husbands died, and some became famous. Ida Lewis, who kept the Lime Rock lighthouse in Rhode Island for more than fifty years, is believed to have rescued at least eighteen people from the water, often rowing out alone in terrible weather.'],
        ['', 'From the early twentieth century, electric lamps and automatic machinery gradually made keepers unnecessary. Automation was cheaper, and it removed the need to send people to dangerous and lonely places. In Britain, the last keepers left the North Foreland lighthouse in Kent in 1998. Today, satellite navigation means that most ships rarely rely on lighthouses at all, although many lights still operate as a back-up. Others have found new uses as museums, holiday homes and even hotels, and their keepers’ logbooks have become a valuable source of information for historians studying past weather.'],
      ],
    },
    {
      title: 'The Hidden Cost of Noise',
      sub: 'You should spend about 20 minutes on Questions 14–26, which are based on Reading Passage 2 below.',
      paras: [
        ['A', 'When people think about pollution, they usually picture dirty air or contaminated rivers. Noise is rarely mentioned in the same breath, and in many countries it receives far less attention from governments and the public. Yet the World Health Organization regards noise as one of the most serious environmental threats to health. It has estimated that in western Europe alone, traffic noise is responsible for the loss of more than one million healthy years of life every year, through illness, disability and early death. Part of the difficulty is that noise is invisible and leaves no trace: once a sound has stopped, there is nothing to clean up, and its effects on health build up slowly over many years.'],
        ['B', 'Part of the reason noise is so harmful is that our ears never switch off. Even when we are asleep, the brain continues to monitor the sounds around us, because in our evolutionary past a sudden noise at night might have signalled danger. A passing lorry or aircraft can therefore trigger the body’s stress response, raising the heart rate and blood pressure and releasing stress hormones such as cortisol, even if the sleeper does not wake. People who live with high levels of night-time noise for many years have been found to have a greater risk of heart disease, high blood pressure and stroke.'],
        ['C', 'Noise also seems to affect how well children learn. One of the clearest examples comes from Munich, where in the 1990s the city’s old airport was closed and a new one opened elsewhere. Researchers tested children living near both sites before and after the move. Near the new airport, children’s reading skills and long-term memory declined after the aircraft arrived, while near the old site, where the noise had stopped, the children’s scores improved. Other studies have found that pupils in schools under flight paths take longer to learn to read than similar pupils in quieter schools. Researchers believe that children who are exposed to constant noise learn to shut out sounds, including the voices of their teachers, and that they may find it harder to concentrate even when the noise has stopped.'],
        ['D', 'Sound is measured in decibels, but the scale can be misleading. Because it is logarithmic, an increase of ten decibels represents ten times as much sound energy, and most people experience it as roughly a doubling of loudness. Ordinary conversation is around 60 decibels, while heavy traffic close to the road can reach 80 or more. In 2018, the World Health Organization recommended that average road traffic noise should be kept below 53 decibels, a level that is exceeded in many city streets.'],
        ['E', 'Loudness is not the only thing that matters, however. How much a sound bothers us also depends on whether we can predict it and whether we feel we have any control over it. People are often more annoyed by a neighbour’s music, which they cannot switch off, than by louder noise that they have chosen, such as the sound of their own vacuum cleaner. Low-frequency sounds, like the constant hum of ventilation systems, can be particularly disturbing because they travel through walls and are difficult to escape. For the same reason, complaints about noise are often less about how loud a sound is than about how long it goes on.'],
        ['F', 'Fortunately, much can be done to reduce traffic noise. Lowering speed limits makes a noticeable difference, because both engines and tyres make more noise at higher speeds. Quieter road surfaces, made from porous asphalt that absorbs sound, can reduce noise by several decibels, and barriers beside motorways protect nearby homes. Some cities have also installed cameras that measure noise, in order to catch drivers whose vehicles have illegally loud exhausts. Electric vehicles help in slow-moving city traffic, but their benefits are smaller than many people expect: above about 30 kilometres per hour, most of the noise from any car comes from its tyres rather than its engine.'],
        ['G', 'Some cities are now going further, treating sound not only as a problem to be reduced but as part of the environment to be designed. Planners in several European cities have mapped their quiet areas, such as parks and courtyards, so that they can be protected from new development. Others are adding pleasant sounds to busy places: fountains, for example, can mask the noise of traffic, and research suggests that hearing birdsong can lift people’s mood and help them recover from stress. In one experiment in a busy square, visitors rated the space as more pleasant after recordings of running water were played, even though the overall sound level had actually risen slightly. The aim is not silence, which few people really want, but surroundings that sound as good as they look.'],
      ],
    },
    {
      title: 'The Trouble with University Rankings',
      sub: 'You should spend about 20 minutes on Questions 27–40, which are based on Reading Passage 3 below.',
      paras: [
        ['', 'Every autumn, a number of organisations publish league tables that claim to show which universities are the best in the world. The results are widely reported in newspapers, and they are studied closely by students, parents, university managers and even governments. National rankings have existed since the 1980s, when the magazine US News & World Report began rating American colleges, but global rankings are more recent: the first appeared in 2003, and several more have followed.'],
        ['', 'It is easy to see why rankings are popular. Choosing a university is an important and expensive decision, and a single number seems to make it simpler. For students who hope to study abroad, rankings can be especially valuable, because they may have no other way of comparing institutions in a country they have never visited. Some employers, too, use rankings when deciding which graduates to invite for interview. Rankings, in other words, meet a real need for information, and it would be wrong to dismiss them entirely.'],
        ['', 'The problem lies in what they measure. Most global rankings rely heavily on research: the number of articles a university’s staff publish, how often those articles are cited by other researchers, and how many prize-winning scientists it employs. These things can be counted, which is why they are used. The quality of teaching, by contrast, is very difficult to measure, so it is given little weight or left out altogether. Some rankings try to include teaching by counting the number of staff for every student, but this shows how many teachers a university has, not how good they are. A student who chooses a university because of its ranking may therefore learn a great deal about its laboratories and very little about the education they will actually receive.'],
        ['', 'Another large part of many rankings comes from reputation surveys, in which thousands of academics are asked to name the best universities in their field. Not surprisingly, they tend to name institutions that are already famous, often universities they have never visited. A high ranking improves a university’s reputation, which in turn improves its ranking, so the same names appear at the top year after year.'],
        ['', 'More worrying is the effect that rankings have on universities themselves. Because a higher position brings more students and more funding, institutions face strong pressure to improve their scores, sometimes in ways that do little for their students. Some have offered part-time contracts to highly cited researchers who spend only a few weeks a year on campus, so that their articles count towards the university’s total. Others have spent large sums on advertising aimed at the academics who answer reputation surveys, money that might otherwise have been spent on teaching.'],
        ['', 'Even taken on their own terms, rankings can be misleading. The differences between universities in the middle of a table are often tiny, so a university ranked 50th may be no better, in any meaningful sense, than one ranked 70th. Most rankings also give a single overall score, even though a university may be excellent in one subject and weak in another. Positions can also rise or fall sharply from one year to the next, not because anything at the university has changed, but because the organisation that produces the ranking has changed the way it is calculated.'],
        ['', 'In recent years, some institutions have begun to resist. In 2022, a number of leading American law and medical schools announced that they would no longer provide data to US News & World Report, arguing that its methods rewarded the wrong things. Critics suggested that they were simply afraid of a poor result, but the schools concerned were among the most highly ranked in the country. The following year, Utrecht University in the Netherlands withdrew from one of the major global rankings, saying that it preferred to be judged on the quality of its teaching and its contribution to society rather than on a single score.'],
        ['', 'Rankings are unlikely to disappear, and I do not believe that they should. But they need to be used with much more care. It is worth remembering that many excellent universities, especially small ones that concentrate on teaching, do not appear in global rankings at all. Students would be better served by looking at information about the particular subject they want to study, at surveys of current students, and at what happens to graduates after they leave. Governments, meanwhile, should be particularly cautious: some already award scholarships only to students who attend highly ranked universities, a policy that rewards institutions for being famous rather than for being good. A ranking can be a useful place to start looking, but it should never be the place where the search ends.'],
      ],
    },
  ];

  const headings = {
    i: 'Why some sounds bother us more than others',
    ii: 'A problem that receives less attention than it deserves',
    iii: 'The effect of noise on children’s learning',
    iv: 'How the body reacts to noise during sleep',
    v: 'Practical ways of making roads quieter',
    vi: 'Planning cities that sound pleasant',
    vii: 'How sound levels are measured and limited',
    viii: 'The history of laws against noise',
    ix: 'Why electric cars have solved the problem',
  };
  const box = { A: 'heart', B: 'wake', C: 'memory', D: 'airport', E: 'improved', F: 'declined', G: 'hearing', H: 'motorway' };
  const ENDINGS = {
    A: 'may lead universities to spend money on advertising instead of teaching.',
    B: 'are based largely on the opinions of academics.',
    C: 'pay little attention to the quality of teaching.',
    D: 'can affect which students receive financial support.',
    E: 'have been banned in several countries.',
    F: 'give equal weight to teaching and research.',
  };

  const Q = {
    1: { kind: 'tfng', s: 'The Pharos of Alexandria was the tallest building in the ancient world.', a: 'NOT GIVEN', ev: 'The passage says only that it was “one of the tallest structures in the world”; it does not say that it was the tallest.' },
    2: { kind: 'tfng', s: 'Coal fires were an efficient way of lighting lighthouses.', a: 'FALSE', ev: '“These fires were extremely wasteful”' },
    3: { kind: 'tfng', s: 'Argand’s lamp gave a brighter light than earlier lamps.', a: 'TRUE', ev: '“it produced a light far brighter than any candle or earlier lamp”' },
    4: { kind: 'tfng', s: 'The first Fresnel lens was installed in a British lighthouse.', a: 'NOT GIVEN', ev: 'The passage says only that the design “was quickly adopted around the world”; it does not say where the first lens was installed.' },
    5: { kind: 'tfng', s: 'After 1801, rock lighthouses were expected to have a minimum of three keepers.', a: 'TRUE', ev: '“it became the rule that rock lighthouses should always have at least three keepers”' },
    6: { kind: 'tfng', s: 'Keepers cleaned the lens of the light once a week.', a: 'FALSE', ev: '“The lens had to be cleaned every day”' },
    7: { kind: 'tfng', s: 'Ida Lewis was paid more than most male lighthouse keepers.', a: 'NOT GIVEN', ev: 'The passage describes her rescues and how long she kept the lighthouse, but says nothing about her pay.' },
    8: { kind: 'gap', a: ['400'], limit: 1, ev: '“a single lighthouse could burn up to 400 tonnes of coal a year”' },
    9: { kind: 'gap', a: ['copper'], limit: 1, ev: '“curved reflectors made of polished copper coated with silver”' },
    10: { kind: 'gap', a: ['20', 'twenty'], limit: 1, ev: '“A light fitted with a Fresnel lens could be seen more than 20 miles away.”' },
    11: { kind: 'gap', a: ['logbook', 'log'], limit: 1, ev: '“Keepers also recorded the weather and any passing ships in a logbook”' },
    12: { kind: 'gap', a: ['two', '2'], limit: 1, ev: '“keepers typically spent two months at the lighthouse, followed by a month ashore”' },
    13: { kind: 'gap', a: ['1998'], limit: 1, ev: '“the last keepers left the North Foreland lighthouse in Kent in 1998”' },
    14: { kind: 'heading', p: 'B', a: 'iv', ev: '“A passing lorry or aircraft can therefore trigger the body’s stress response… even if the sleeper does not wake.”' },
    15: { kind: 'heading', p: 'C', a: 'iii', ev: '“Noise also seems to affect how well children learn.”' },
    16: { kind: 'heading', p: 'D', a: 'vii', ev: '“Sound is measured in decibels… recommended that average road traffic noise should be kept below 53 decibels”' },
    17: { kind: 'heading', p: 'E', a: 'i', ev: '“How much a sound bothers us also depends on whether we can predict it and whether we feel we have any control over it.”' },
    18: { kind: 'heading', p: 'F', a: 'v', ev: '“much can be done to reduce traffic noise. Lowering speed limits… Quieter road surfaces”' },
    19: { kind: 'heading', p: 'G', a: 'vi', ev: '“treating sound not only as a problem to be reduced but as part of the environment to be designed”' },
    20: { kind: 'box', a: 'B', ev: '“even if the sleeper does not wake”' },
    21: { kind: 'box', a: 'A', ev: '“a greater risk of heart disease, high blood pressure and stroke”' },
    22: { kind: 'box', a: 'D', ev: '“the city’s old airport was closed and a new one opened elsewhere”' },
    23: { kind: 'box', a: 'C', ev: '“children’s reading skills and long-term memory declined after the aircraft arrived”' },
    24: { kind: 'box', a: 'E', ev: '“near the old site, where the noise had stopped, the children’s scores improved”' },
    25: { kind: 'two', pair: [25, 26], s: 'Which TWO ways of reducing traffic noise does the writer mention?', o: { A: 'lowering speed limits', B: 'banning lorries at night', C: 'using quieter road surfaces', D: 'planting trees beside roads', E: 'building homes further from roads' }, a: ['A', 'C'], ev: '“Lowering speed limits makes a noticeable difference… Quieter road surfaces, made from porous asphalt that absorbs sound”' },
    26: { kind: 'two', pair: [25, 26], a: ['A', 'C'], ev: '“Lowering speed limits makes a noticeable difference… Quieter road surfaces, made from porous asphalt that absorbs sound”' },
    27: { kind: 'ynng', s: 'University rankings meet a genuine need for information.', a: 'YES', ev: '“Rankings, in other words, meet a real need for information”' },
    28: { kind: 'ynng', s: 'Teaching quality is the most important factor in most global rankings.', a: 'NO', ev: '“The quality of teaching, by contrast, is very difficult to measure, so it is given little weight or left out altogether.”' },
    29: { kind: 'ynng', s: 'Reputation surveys tend to favour universities that are already well known.', a: 'YES', ev: '“they tend to name institutions that are already famous”' },
    30: { kind: 'ynng', s: 'Organisations that produce rankings usually punish universities that try to improve their scores unfairly.', a: 'NOT GIVEN', ev: 'The writer describes how some universities try to raise their scores, but says nothing about how ranking organisations respond.' },
    31: { kind: 'ynng', s: 'Small differences in position between universities are usually significant.', a: 'NO', ev: '“a university ranked 50th may be no better, in any meaningful sense, than one ranked 70th”' },
    32: { kind: 'mcq', s: 'According to the writer, why can rankings be especially useful to students who want to study abroad?', o: { A: 'They show which universities are cheapest.', B: 'Such students may have no other way of comparing universities.', C: 'Universities abroad are required to take part in them.', D: 'They are published in many languages.' }, a: 'B', ev: '“because they may have no other way of comparing institutions in a country they have never visited”' },
    33: { kind: 'mcq', s: 'What does the writer say about some universities’ response to the pressure of rankings?', o: { A: 'They have invested more in teaching.', B: 'They have refused to employ part-time staff.', C: 'They have taken steps that benefit their position more than their students.', D: 'They have created rankings of their own.' }, a: 'C', ev: '“institutions face strong pressure to improve their scores, sometimes in ways that do little for their students”' },
    34: { kind: 'mcq', s: 'What happened in 2022?', o: { A: 'A ranking organisation changed the way it calculated its results.', B: 'Some American law and medical schools stopped supplying data to a ranking.', C: 'A Dutch university withdrew from a global ranking.', D: 'The first global ranking was published.' }, a: 'B', ev: '“In 2022, a number of leading American law and medical schools announced that they would no longer provide data to US News & World Report”' },
    35: { kind: 'mcq', s: 'According to the writer, sudden changes in a university’s position are often caused by', o: { A: 'changes in the way the ranking is calculated.', B: 'improvements in the university’s facilities.', C: 'the departure of well-known researchers.', D: 'changes in the number of students who apply.' }, a: 'A', ev: '“because the organisation that produces the ranking has changed the way it is calculated”' },
    36: { kind: 'mcq', s: 'What is the writer’s main conclusion?', o: { A: 'Rankings should no longer be published.', B: 'Rankings should be used only as a starting point.', C: 'Governments should produce their own rankings.', D: 'Students should ignore rankings completely.' }, a: 'B', ev: '“A ranking can be a useful place to start looking, but it should never be the place where the search ends.”' },
    37: { kind: 'ending', s: 'Reputation surveys', a: 'B', ev: '“reputation surveys, in which thousands of academics are asked to name the best universities in their field”' },
    38: { kind: 'ending', s: 'Most global rankings', a: 'C', ev: '“The quality of teaching… is given little weight or left out altogether.”' },
    39: { kind: 'ending', s: 'The pressure to rise in the rankings', a: 'A', ev: '“Others have spent large sums on advertising… money that might otherwise have been spent on teaching.”' },
    40: { kind: 'ending', s: 'The use of rankings by governments', a: 'D', ev: '“some already award scholarships only to students who attend highly ranked universities”' },
  };

  const TF_KEY = '<div class="key-box"><dl><dt>TRUE</dt><dd>if the statement agrees with the information</dd><dt>FALSE</dt><dd>if the statement contradicts the information</dd><dt>NOT GIVEN</dt><dd>if there is no information on this</dd></dl></div>';
  const YN_KEY = '<div class="key-box"><dl><dt>YES</dt><dd>if the statement agrees with the claims of the writer</dd><dt>NO</dt><dd>if the statement contradicts the claims of the writer</dd><dt>NOT GIVEN</dt><dd>if it is impossible to say what the writer thinks about this</dd></dl></div>';
  const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i);
  const keyBox = (title, obj) => `<div class="key-box"><span class="label">${title}</span><dl>${Object.entries(obj).map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl></div>`;
  const selectQ = (h, n, opts, ph) => `<div class="q" data-q="${n}"><div class="stem"><span class="qn">${n}</span><span>${h.esc(h.Q[n].s)}</span></div>${h.select(n, Object.keys(opts).map(k => [k, k]), ph)}</div>`;

  const build = h => [
    `<div class="qset"><h3>Questions 1–7</h3>
      <p class="instr">Do the following statements agree with the information given in Reading Passage 1? Choose</p>
      ${TF_KEY}
      ${range(1, 7).map(h.tf).join('')}</div>
    <div class="qset"><h3>Questions 8–13</h3>
      <p class="instr">Complete the notes below. Choose <b>ONE WORD AND/OR A NUMBER</b> from the passage for each answer.</p>
      <div class="notes"><h4>Lighthouses and their keepers</h4>
        <ul>
          <li>Some coal-burning lighthouses used up to ${h.gapIn(8)} tonnes of coal a year.</li>
          <li>Argand lamps were placed in front of reflectors made of polished ${h.gapIn(9)}.</li>
          <li>A light with a Fresnel lens was visible from over ${h.gapIn(10)} miles away.</li>
          <li>Keepers noted the weather and passing ships in a ${h.gapIn(11)}.</li>
          <li>British rock lighthouse keepers usually worked for ${h.gapIn(12)} months before a month ashore.</li>
          <li>The last British keepers left their lighthouse in ${h.gapIn(13)}.</li>
        </ul>
      </div></div>`,
    `<div class="qset"><h3>Questions 14–19</h3>
      <p class="instr">Reading Passage 2 has seven paragraphs, <b>A–G</b>. Choose the correct heading for paragraphs <b>B–G</b> from the list of headings below.</p>
      ${keyBox('List of headings', headings)}
      <p class="muted"><i>Example: Paragraph A — ii</i></p>
      ${range(14, 19).map(n => `<div class="q" data-q="${n}"><div class="stem"><span class="qn">${n}</span><span>Paragraph ${h.Q[n].p}</span></div>${h.select(n, Object.keys(headings).filter(k => k !== 'ii').map(k => [k, k]), 'Choose a heading')}</div>`).join('')}</div>
    <div class="qset"><h3>Questions 20–24</h3>
      <p class="instr">Complete the summary using the list of words, <b>A–H</b>, below.</p>
      <div class="notes"><h4>Noise, health and learning</h4>
        <p>Noise at night can raise blood pressure and release stress hormones, even if the sleeper does not ${h.boxSel(20)}. Over many years, this increases the risk of ${h.boxSel(21)} disease. In Munich, after a new ${h.boxSel(22)} opened, the reading skills and long-term ${h.boxSel(23)} of children living nearby became worse, while the scores of children near the old site ${h.boxSel(24)}.</p>
      </div>
      ${keyBox('List of words', box)}</div>
    <div class="qset"><h3>Questions 25–26</h3>
      <p class="instr">Choose <b>TWO</b> letters, <b>A–E</b>.</p>
      ${h.two(25)}</div>`,
    `<div class="qset"><h3>Questions 27–31</h3>
      <p class="instr">Do the following statements agree with the claims of the writer in Reading Passage 3? Choose</p>
      ${YN_KEY}
      ${range(27, 31).map(h.tf).join('')}</div>
    <div class="qset"><h3>Questions 32–36</h3>
      <p class="instr">Choose the correct letter, <b>A, B, C or D</b>.</p>
      ${range(32, 36).map(h.mcq).join('')}</div>
    <div class="qset"><h3>Questions 37–40</h3>
      <p class="instr">Complete each sentence with the correct ending, <b>A–F</b>, below.</p>
      ${keyBox('List of endings', ENDINGS)}
      ${range(37, 40).map(n => selectQ(h, n, ENDINGS, 'Choose A–F')).join('')}</div>`,
  ];

  window.READING_TEST = { num: 11, name: 'Full Mock Test 1', passages, Q, headings, box, ranges: [[1, 13], [14, 26], [27, 40]], build };
})();
