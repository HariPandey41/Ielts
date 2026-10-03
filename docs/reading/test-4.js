// IELTS Academic Reading · Practice Test 4 — content only. The exam engine is assets/reading-exam.js.
(() => {
  'use strict';
  const passages = [
    {
      title: 'The Science of Maps',
      sub: 'You should spend about 20 minutes on Questions 1–13, which are based on Reading Passage 1 below.',
      paras: [
        ['', 'A map appears to be a simple picture of a place, but every map is also an argument about what matters. A city map may emphasise roads and ignore footpaths; a geological map may show rock layers while making rivers almost invisible. The cartographer must select, simplify and label information before a reader can use it.'],
        ['', 'The earliest surviving maps were not always intended for travellers. Some clay tablets from Mesopotamia represented fields and irrigation channels, helping authorities record land and organise water. Other early maps were drawn for religious or political reasons. They showed an idealised world rather than a route that a person could follow on the ground.'],
        ['', 'Maps of the wider world were often shaped by the knowledge and beliefs of the people who made them. The Greek scholar Ptolemy, writing in the second century, described how to represent a curved Earth on a flat surface and listed the coordinates of thousands of places. His work was copied and recopied for centuries, and when it was rediscovered in Europe in the fifteenth century, it encouraged a new interest in mathematical mapmaking.'],
        ['', 'Modern surveying changed when accurate instruments became available. Triangulation allowed surveyors to calculate the position of a distant point by measuring angles from known locations. A network of triangles could cover an entire region, and later measurements of distance and height could be added to it. The method was slow, but it produced a reliable framework for national maps.'],
        ['', 'The most ambitious of these surveys took decades to complete. In India, the Great Trigonometrical Survey, begun in 1802, measured a chain of triangles across the subcontinent using instruments so heavy that teams of workers were needed to carry them. The survey eventually produced the first accurate measurements of the Himalayan peaks, and its results were used to correct earlier maps that had placed some towns many kilometres from their true positions.'],
        ['', 'The arrival of aerial photography created a different kind of opportunity. Cameras mounted on aircraft could record large areas quickly, while overlapping photographs allowed specialists to estimate height and shape. Yet photographs were not maps by themselves. Buildings, trees and shadows had to be interpreted, and the images had to be corrected for the angle from which they were taken.'],
        ['', 'Digital mapping has made the production of maps faster and more collaborative. Satellite positioning, laser scanning and volunteered geographic information can be combined in a single database. A hiker may upload the location of a new footbridge, while a local authority adds road closures. The same flexibility can create errors when information is copied without checking its source.'],
        ['', 'The same technology has changed how people use maps in daily life. Instead of unfolding a paper sheet, most travellers now follow a moving dot on a phone screen, and the map rotates to match the direction in which they are facing. Some researchers worry that this convenience weakens people’s ability to build a mental picture of their surroundings. In one study, drivers who relied on step-by-step directions remembered far less about the route afterwards than those who had planned it in advance using a printed map.'],
        ['', 'Maps also influence behaviour. A route shown as a thick line may appear more important than an unmarked path, and a boundary printed on a map can strengthen the impression that a political division is permanent. Designers therefore make choices about colour, scale and symbols with care, especially when maps are used in public consultations or emergencies.'],
        ['', 'Scale presents a similar challenge. A map of a whole country cannot show every street, so the cartographer must decide which features to keep and which to remove as the scale becomes smaller. Rivers may be smoothed, small villages left out and roads drawn wider than they really are so that they remain visible. These changes are not mistakes; they are necessary compromises that make a map readable.'],
        ['', 'The most useful map is not necessarily the one with the greatest amount of detail. A rescue team needs a map that makes safe routes and hazards immediately clear; a tourist may prefer one that shows cafés and museums. Good cartography begins by asking what decision the reader must make, then presents only the information that supports that decision.'],
      ],
    },
    {
      title: 'Living with Volcanoes',
      sub: 'You should spend about 20 minutes on Questions 14–26, which are based on Reading Passage 2 below.',
      paras: [
        ['A', 'Volcanoes are often described as destructive forces, but millions of people choose to live near them. The slopes of Mount Etna in Sicily support vineyards and orchards, while communities around Mount Merapi in Indonesia depend on fertile soils and tourism. Living near a volcano involves risk, but it can also provide livelihoods that are difficult to replace elsewhere. In Iceland, heat from volcanic activity is used to generate electricity and warm homes, and the country’s geothermal pools attract large numbers of visitors each year. For many households, moving away would mean giving up not only a home but a whole way of earning a living.'],
        ['B', 'The greatest danger is not always the spectacular lava flow shown in films. Ash clouds can disrupt aviation, contaminate water and damage machinery far from the crater. Lahars, mixtures of mud and volcanic debris, may travel rapidly down river valleys after an eruption or heavy rain. These less dramatic hazards are therefore central to emergency planning. Volcanic gases present another threat. Carbon dioxide is heavier than air and can collect in low-lying areas, where it may suffocate animals and people without any warning smell. In 1986, a sudden release of gas from Lake Nyos in Cameroon killed more than 1,700 people in nearby villages. Even a small eruption can affect places hundreds of kilometres away: in 2010, ash from Eyjafjallajökull in Iceland grounded flights across much of Europe for several days.'],
        ['C', 'Monitoring agencies use several signals to assess whether a volcano is becoming more active. Small earthquakes may increase as magma moves underground, and the ground can swell by a few centimetres. Changes in the temperature or chemistry of gases are also important. No single signal gives a certain prediction, so scientists compare several measurements over time. Satellites now add a further layer of information, detecting small changes in ground height or surface temperature across areas that would be difficult or dangerous to visit. At some volcanoes, scientists also fly drones through gas plumes to collect samples.'],
        ['D', 'Warnings are useful only if residents understand and trust them. In some regions, officials have installed sirens but have not explained what different sounds mean. Elsewhere, people have ignored evacuation orders because earlier warnings were followed by no eruption. Successful systems practise evacuation before a crisis and work with local leaders who are familiar with the community. Researchers call this the ‘cry wolf’ effect. To reduce it, some agencies now use a series of alert levels rather than a single warning, so that residents can see that a situation is changing gradually even when no eruption follows.'],
        ['E', 'Tourism brings a further complication. Visitors may be attracted by the dramatic landscape and may not recognise the signs of an unstable slope or poisonous gas. Guides can reduce the danger by limiting access and explaining changing conditions, but commercial pressure sometimes encourages operators to keep a trail open longer than scientists recommend. Some national parks have responded by issuing licences only to operators who complete safety training and agree to close trails when scientists raise the alert level.'],
        ['F', 'Volcanic landscapes change after an eruption. New ash can destroy crops in the short term, yet weathered ash may eventually enrich the soil. Roads and houses may be rebuilt in safer locations, and some residents return because family land and local networks matter to them. Relocation is not simply a technical decision; it also involves identity, income and trust. After the 2010 eruption of Merapi, for example, the Indonesian government offered villagers new houses further from the summit, but some families chose to keep farming their old land during the day and returned to the new settlements only at night.'],
      ],
    },
    {
      title: 'The Attention Economy',
      sub: 'You should spend about 20 minutes on Questions 27–40, which are based on Reading Passage 3 below.',
      paras: [
        ['', 'Many online services are described as free, but they compete for a scarce resource: human attention. A news site, video platform or social network can sell advertising space only if people remain on the service long enough to see it. This business model has encouraged engineers and editors to study the moments when users stop scrolling, click a headline or return to an app.'],
        ['', 'The competition is not necessarily harmful. A well-designed interface can help a person find a useful lecture, stay in touch with distant relatives or discover music that would otherwise remain unknown. The difficulty is that the same techniques can also reward material that is surprising, angry or emotionally extreme, because such material often produces a quick response. A navigation app that reroutes a driver around a traffic jam, for example, is valuable precisely because it holds the user’s attention at the right moment.'],
        ['', 'Notifications are one example. A message arriving at an unpredictable time can create a habit of checking a device, even when the message is not important. Researchers call this variable reinforcement: because the reward is occasional rather than guaranteed, the behaviour can become persistent. Turning off notifications removes one trigger, although it does not change every feature of an attention-based service. Some phones now offer a summary mode that delivers non-urgent messages in batches at chosen times of day, which keeps people informed while reducing the number of interruptions.'],
        ['', 'Recommendation systems create another tension. They are designed to predict what a user will watch or read next, and they become more accurate as they collect data. Personalisation can reduce the effort of choosing, but it may also narrow the range of material encountered. A person who watches one kind of political commentary may be shown increasingly similar material, while opposing evidence becomes less visible.'],
        ['', 'Some designers now argue that success should be measured by the quality of a user’s visit rather than its length. A learning platform might value whether a student understood a concept, not whether the student stayed online for three hours. This approach is harder to measure than clicks, but it aligns the service with an outcome that users may actually want.'],
        ['', 'Advertisers themselves are not always satisfied with the current model. A banner that appears beside an angry argument may be seen by many people, but it is unlikely to create a positive impression of the product. For this reason, some companies now pay more to place their advertisements next to content that users have chosen deliberately, such as long articles or educational videos.'],
        ['', 'Regulators have also begun to take an interest. Some governments now require large platforms to explain in plain language how their recommendation systems work, and to offer users at least one option that is not based on their personal data. Supporters say such rules give people more control; critics reply that few users read the explanations or change the default settings.'],
        ['', 'Individuals can protect attention through simple changes: grouping messages, placing distracting apps away from the home screen and deciding in advance when to check news. These actions are helpful, but responsibility cannot rest entirely with users. Platforms choose which features are easy to change, what data to collect and which goals their algorithms optimise.'],
        ['', 'Schools and parents face their own version of the problem. Children often receive their first phone before they have developed the habits needed to manage it, and some schools have introduced rules that require devices to be switched off during lessons. Early studies suggest that such policies can improve concentration, particularly for pupils who previously found it hardest to ignore their phones, although the evidence is still limited.'],
        ['', 'The central question is therefore not whether technology should capture attention. Every book, lesson and conversation does that to some degree. The question is who benefits from the capture, whether the user understands the exchange and whether the design leaves room for deliberate choice. Attention is personal, but the systems that shape it are increasingly public concerns.'],
      ],
    },
  ];

  const PEOPLE = { A: 'Elena Rossi', B: 'David Mensah', C: 'Hana Suzuki' };
  const box = { A: 'habit', B: 'quality', C: 'advertising', D: 'books', E: 'notifications', F: 'length', G: 'personalisation', H: 'engineers' };
  const Q = {
    1: { kind: 'tfng', s: 'Every early map was made to help travellers find their way.', a: 'FALSE', ev: 'Some early maps were made for religious or political reasons and showed an idealised world.' },
    2: { kind: 'tfng', s: 'Triangulation uses angles measured from known locations.', a: 'TRUE', ev: 'Triangulation allowed surveyors to calculate a distant point by measuring angles from known locations.' },
    3: { kind: 'tfng', s: 'Aerial photographs can be used as maps without any interpretation.', a: 'FALSE', ev: 'Photographs had to be interpreted and corrected before they could support mapping.' },
    4: { kind: 'tfng', s: 'Volunteers may add information to a digital mapping database.', a: 'TRUE', ev: 'A hiker may upload the location of a new footbridge.' },
    5: { kind: 'tfng', s: 'Digital maps are now more accurate than every printed map.', a: 'NOT GIVEN', ev: 'The passage describes how digital mapping works and the errors it can contain, but never compares its accuracy with printed maps.' },
    6: { kind: 'tfng', s: 'A rescue team and a tourist need exactly the same kind of map.', a: 'FALSE', ev: 'A rescue team needs hazards and safe routes, while a tourist may prefer cafés and museums.' },
    7: { kind: 'gap', a: ['fields'], limit: 1, ev: 'Clay tablets represented fields and irrigation channels.' },
    8: { kind: 'gap', a: ['triangles'], limit: 1, ev: 'A network of triangles could cover an entire region.' },
    9: { kind: 'gap', a: ['height'], limit: 1, ev: 'Overlapping photographs allowed specialists to estimate height and shape.' },
    10: { kind: 'gap', a: ['footbridge'], limit: 1, ev: 'A hiker may upload the location of a new footbridge.' },
    11: { kind: 'gap', a: ['boundary'], limit: 1, ev: 'A boundary printed on a map can strengthen the impression of a political division.' },
    12: { kind: 'gap', a: ['symbols'], limit: 1, ev: 'Designers make choices about colour, scale and symbols with care.' },
    13: { kind: 'gap', a: ['decision'], limit: 1, ev: 'Good cartography begins by asking what decision the reader must make.' },
    14: { kind: 'para', s: 'a reason why an official warning may be ignored', a: 'D', ev: 'Paragraph D explains that earlier warnings without an eruption can reduce trust.' },
    15: { kind: 'para', s: 'an example of people earning a living in a volcanic area', a: 'A', ev: 'Paragraph A mentions vineyards, orchards and tourism around volcanoes.' },
    16: { kind: 'para', s: 'a conflict between commercial interests and safety advice', a: 'E', ev: 'Paragraph E says commercial pressure may keep a trail open longer than scientists recommend.' },
    17: { kind: 'para', s: 'a description of hazards that can occur away from the crater', a: 'B', ev: 'Paragraph B discusses ash clouds and lahars travelling far from the crater.' },
    18: { kind: 'para', s: 'a list of measurements used to assess volcanic activity', a: 'C', ev: 'Paragraph C describes earthquakes, ground swelling and gas changes.' },
    19: { kind: 'gap', a: ['earthquakes'], limit: 2, ev: 'Small earthquakes may increase as magma moves underground.' },
    20: { kind: 'gap', a: ['sirens'], limit: 2, ev: 'Some regions have installed sirens without explaining their meanings.' },
    21: { kind: 'gap', a: ['guides'], limit: 2, ev: 'Guides can reduce tourism danger by limiting access and explaining conditions.' },
    22: { kind: 'gap', a: ['identity'], limit: 2, ev: 'Relocation involves identity, income and trust.' },
    23: { kind: 'gap', a: ['fertile soils'], limit: 2, ev: 'Communities depend on fertile soils and tourism.' },
    24: { kind: 'gap', a: ['lava flow'], limit: 2, ev: 'The spectacular lava flow is not always the greatest danger.' },
    25: { kind: 'gap', a: ['local leaders'], limit: 2, ev: 'Successful warning systems work with local leaders familiar with the community.' },
    26: { kind: 'gap', a: ['safer locations'], limit: 2, ev: 'Roads and houses may be rebuilt in safer locations.' },
    27: { kind: 'mcq', s: 'What is the main point of the first paragraph?', o: { A: 'Online services are always free to users.', B: 'Advertising is disappearing from digital services.', C: 'People spend too little time on the internet.', D: 'Human attention has commercial value online.' }, a: 'D', ev: 'The paragraph explains that online services compete for attention because it supports advertising.' },
    28: { kind: 'mcq', s: 'Why can emotionally extreme material be rewarded online?', o: { A: 'It is always more accurate than calm material.', B: 'It tends to produce a quick response.', C: 'It costs less to publish.', D: 'It prevents users from seeing advertisements.' }, a: 'B', ev: 'The passage says surprising, angry or extreme material often produces a quick response.' },
    29: { kind: 'mcq', s: 'What does variable reinforcement help explain?', o: { A: 'Why occasional rewards can create persistent checking.', B: 'Why users dislike all notifications.', C: 'Why recommendation systems stop collecting data.', D: 'Why books cannot capture attention.' }, a: 'A', ev: 'An unpredictable reward can make the behaviour of checking persistent.' },
    30: { kind: 'mcq', s: 'What possible disadvantage of personalisation is mentioned?', o: { A: 'It makes every choice take longer.', B: 'It prevents users from finding music.', C: 'It can narrow the range of material encountered.', D: 'It requires users to turn off their devices.' }, a: 'C', ev: 'Personalisation may narrow the range of material a person encounters.' },
    31: { kind: 'mcq', s: 'What does the fifth paragraph suggest platforms could measure?', o: { A: 'Only the number of clicks.', B: 'The quality or outcome of a user visit.', C: 'The age of every user.', D: 'The exact length of every lesson.' }, a: 'B', ev: 'A learning platform might value whether a student understood a concept rather than time online.' },
    32: { kind: 'ynng', s: 'Most people check their phones more than a hundred times a day.', a: 'NOT GIVEN', ev: 'The writer says people check their phones within seconds of having nothing to do, but gives no daily figure.' },
    33: { kind: 'ynng', s: 'Turning off notifications removes every influence on a person’s attention.', a: 'NO', ev: 'It removes one trigger but does not change every feature of an attention-based service.' },
    34: { kind: 'ynng', s: 'Recommendation systems can make opposing political material less visible.', a: 'YES', ev: 'A user may be shown increasingly similar commentary while opposing evidence becomes less visible.' },
    35: { kind: 'ynng', s: 'Measuring learning outcomes is easier than measuring clicks.', a: 'NO', ev: '“This approach is harder to measure than clicks”' },
    36: { kind: 'ynng', s: 'The author thinks platforms should share responsibility for protecting attention.', a: 'YES', ev: 'The passage says responsibility cannot rest entirely with users because platforms choose features and goals.' },
    37: { kind: 'box', a: 'C', ev: '“they compete for a scarce resource: human attention… can sell advertising space only if people remain on the service”' },
    38: { kind: 'box', a: 'E', ev: '“Notifications are one example. A message arriving at an unpredictable time can create a habit of checking a device”' },
    39: { kind: 'box', a: 'G', ev: '“Personalisation can reduce the effort of choosing, but it may also narrow the range of material encountered.”' },
    40: { kind: 'box', a: 'B', ev: '“success should be measured by the quality of a user’s visit rather than its length”' },
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
      <div class="notes"><h4>How maps are made</h4>
        <span class="h">Early and modern methods</span>
        <ul>
          <li>Some early tablets represented ${h.gapIn(7)} and irrigation channels.</li>
          <li>Surveyors created a network of ${h.gapIn(8)}.</li>
          <li>Aerial photographs helped specialists estimate ${h.gapIn(9)}.</li>
          <li>A hiker may upload a new ${h.gapIn(10)}.</li>
        </ul>
        <span class="h">Design choices</span>
        <ul>
          <li>A printed ${h.gapIn(11)} can affect how a political division is understood.</li>
          <li>Cartographers choose colours, scale and ${h.gapIn(12)}.</li>
          <li>Good maps support a reader’s ${h.gapIn(13)}.</li>
        </ul>
      </div></div>`,
    `<div class="qset"><h3>Questions 14–18</h3>
      <p class="instr">Reading Passage 2 has six paragraphs, <b>A–F</b>. Which paragraph contains the following information? <b>NB</b> You may use any letter more than once.</p>
      ${range(14, 18).map(n => selectQ(h, n, { A: 1, B: 1, C: 1, D: 1, E: 1, F: 1 }, 'Choose A–F')).join('')}</div>
    <div class="qset"><h3>Questions 19–22</h3>
      <p class="instr">Complete the sentences below. Choose <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.</p>
      <div class="notes"><h4>Volcanic communities</h4>
        <p>Scientists monitor small ${h.gapIn(19)} and other changes beneath a volcano. Some areas use ${h.gapIn(20)} to warn residents. Tourist ${h.gapIn(21)} can reduce danger by controlling access. If relocation is required, questions of ${h.gapIn(22)} may be as important as technical safety.</p>
      </div></div>
    <div class="qset"><h3>Questions 23–26</h3>
      <p class="instr">Complete the summary below. Choose <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.</p>
      <div class="notes"><h4>Living with a volcano</h4>
        <p>Volcanic areas may offer ${h.gapIn(23)}. The most dramatic hazard is not always a ${h.gapIn(24)}. Warning systems work best with ${h.gapIn(25)}, and rebuilding may involve moving to ${h.gapIn(26)}.</p>
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
      <div class="notes"><h4>Competing for attention</h4>
        <p>Many services that are free to use depend on ${h.boxSel(37)}, so they need people to stay on them. Unpredictable ${h.boxSel(38)} can lead users to check their devices again and again, and recommendation systems use ${h.boxSel(39)}, which may narrow the range of material people see. Some designers argue that a service should be judged by the ${h.boxSel(40)} of a visit rather than by how long it lasts.</p>
      </div>
      ${keyBox('List of words', box)}</div>`,
  ];

  window.READING_TEST = { num: 4, passages, Q, headings: {}, box, ranges: [[1, 13], [14, 26], [27, 40]], build };
})();
