// IELTS Academic Reading · Practice Test 8 — content only. The exam engine is assets/reading-exam.js.
(() => {
  'use strict';
  const passages = [
    {
      title: 'The Language of Bees',
      sub: 'You should spend about 20 minutes on Questions 1–13, which are based on Reading Passage 1 below.',
      paras: [
        ['', 'Honeybees live in colonies, yet a colony behaves less like a crowd and more like a coordinated system. Workers collect food, care for young bees, control temperature and defend the nest. No single bee directs all these activities. Instead, information is exchanged through movement, smell and contact.'],
        ['', 'The famous waggle dance helps a worker communicate the direction and approximate distance of a food source. The angle of the dance relates to the position of the sun, while the duration of the waggle provides information about distance. Other bees do not receive a complete map; they use the signal as an invitation to search.'],
        ['', 'Dance is only one part of the message. A flower’s scent can remain on a forager’s body and help other bees identify the type of plant being advertised. Returning workers may also share food with nest-mates, allowing chemical information about the food to circulate inside the colony.'],
        ['', 'The sun is useful but not always visible. Bees can detect patterns of polarised light in the sky, which provide a reference when clouds partly cover the sun. Their eyes are sensitive to wavelengths that humans cannot see, and this helps them navigate between the nest and changing patches of flowers.'],
        ['', 'A colony must decide whether a new nest site is suitable. Scout bees inspect possible cavities and return to advertise them. Several sites may be discussed at once, but the colony eventually concentrates on one location. The process is not a vote in the human sense; it is a competition between signals that recruit more scouts.'],
        ['', 'Bees also communicate danger. Alarm pheromones can cause nearby workers to become defensive, while vibrations may pass through the comb. The response is useful when a predator approaches, but it can be triggered by disturbance that poses no real threat. Beekeepers therefore handle colonies gently and use smoke to reduce defensive behaviour.'],
        ['', 'Research on bees has influenced robotics and computer science. Engineers study how simple agents can produce efficient group decisions without a central controller. A bee colony is not a machine to copy exactly, but it offers a model of how local information can create organised behaviour at a larger scale.'],
      ],
    },
    {
      title: 'Making Better Noise',
      sub: 'You should spend about 20 minutes on Questions 14–26, which are based on Reading Passage 2 below.',
      paras: [
        ['A', 'Noise is not simply any unwanted sound. A busy market may be loud but enjoyable, while a quiet repeated hum can be intensely irritating. Researchers therefore measure both physical features, such as volume and frequency, and human responses, including annoyance, concentration and sleep disruption.'],
        ['B', 'Road traffic is one of the most common sources of urban noise. Barriers can reduce the sound reaching homes, but their effectiveness depends on height, material and position. A barrier that blocks the direct line between a road and a window may be useful, while a gap can allow sound to travel around it.'],
        ['C', 'Buildings can be designed to protect quiet rooms. Thick walls, double glazing and mechanical ventilation allow windows to remain closed when outside noise is high. Yet insulation can also reduce contact with natural sounds, and an entirely sealed room may feel unpleasant even when it is acoustically calm.'],
        ['D', 'Public soundscapes include sounds that people value. Water, birds and human voices can make a place feel lively, while a monotonous engine can make the same volume feel tiring. Designers of parks and squares increasingly ask residents which sounds should be reduced and which should be preserved.'],
        ['E', 'Workplaces face a different problem. Conversation may be useful in a workshop but distracting in an office where people read or write. Headphones can help individuals, although they may reduce awareness of alarms or colleagues. Flexible spaces allow workers to choose a quieter area without requiring everyone to work in silence.'],
        ['F', 'Noise policy often fails when it treats sound as an engineering problem alone. A new road surface may be technically quieter, but residents may still object if heavy vehicles use the road at night. Timing, trust and the perceived fairness of decisions influence how a community experiences noise.'],
      ],
    },
    {
      title: 'The Future of Workspaces',
      sub: 'You should spend about 20 minutes on Questions 27–40, which are based on Reading Passage 3 below.',
      paras: [
        ['', 'The office is not disappearing, but its purpose is changing. When routine tasks can be completed from home, workers may travel to a shared workplace for collaboration, learning and access to equipment. This makes the design of the office less about assigning one desk to each person and more about providing different settings for different activities.'],
        ['', 'Open-plan offices were introduced partly to encourage communication, yet research has often found that people in open spaces communicate less face to face and use more electronic messages. The reason may be that noise and lack of privacy make spontaneous conversation tiring. Openness can support visibility, but it is not the same as collaboration.'],
        ['', 'Hybrid work creates a fairness problem. Staff who are present in the building may receive more informal information or be remembered more easily when opportunities arise. Remote workers may contribute effectively but become less visible. Managers need clear systems for sharing decisions and assessing results rather than rewarding physical presence.'],
        ['', 'The best workplace may include a mixture of areas: rooms for confidential conversations, tables for group work, quiet corners for concentration and informal spaces where people can meet by chance. These areas need acoustic treatment, comfortable lighting and furniture that can be rearranged. A flexible space is useful only if workers understand how to use it.'],
        ['', 'Technology supports the new office but can also add friction. A video call in a shared room may disturb nearby workers, while poor microphones exclude remote participants. Screens and booking systems should be reliable and simple. When technology becomes the main subject of a meeting, the design has failed to support the work.'],
        ['', 'Workplaces also communicate values. Natural light, plants and materials that can be repaired may signal care and sustainability. Such features do not automatically improve productivity, but they can influence whether employees feel that the organisation has considered their comfort and long-term wellbeing.'],
        ['', 'There is no universal office blueprint. A laboratory, a school and a software company need different arrangements, and even one organisation may need more than one model. The useful question is not whether a workplace is traditional or modern, but whether its spaces help people perform the activities the organisation actually requires.'],
      ],
    },
  ];
  const box = { A: 'privacy', B: 'visibility', C: 'acoustics', D: 'lighting', E: 'microphones', F: 'comfort', G: 'activities', H: 'blueprint' };
  const Q = {
    1: { kind: 'tfng', s: 'One bee directs all the activities of a colony.', a: 'FALSE', ev: 'No single bee directs all activities; information is exchanged through several signals.' },
    2: { kind: 'tfng', s: 'The waggle dance gives other bees a complete map of a food source.', a: 'FALSE', ev: 'Other bees do not receive a complete map; they use the signal as an invitation to search.' },
    3: { kind: 'tfng', s: 'A flower’s scent can be transferred between bees.', a: 'TRUE', ev: 'A flower’s scent can remain on a forager and help other bees identify the plant.' },
    4: { kind: 'tfng', s: 'Bees can use light patterns when the sun is partly hidden.', a: 'TRUE', ev: 'Bees detect polarised light patterns when clouds partly cover the sun.' },
    5: { kind: 'tfng', s: 'A colony chooses a nest site through a human-style vote.', a: 'FALSE', ev: 'The process is not a vote; it is a competition between recruiting signals.' },
    6: { kind: 'tfng', s: 'Alarm signals are triggered only by genuine predators.', a: 'NOT GIVEN', ev: 'Alarm responses can be triggered by disturbance that poses no real threat, but the passage does not say how often.' },
    7: { kind: 'gap', a: ['smell'], limit: 1, ev: 'Information is exchanged through movement, smell and contact.' },
    8: { kind: 'gap', a: ['duration'], limit: 1, ev: 'The duration of the waggle provides information about distance.' },
    9: { kind: 'gap', a: ['scent'], limit: 1, ev: 'A flower’s scent can remain on a forager’s body.' },
    10: { kind: 'gap', a: ['polarised light'], limit: 2, ev: 'Bees detect patterns of polarised light in the sky.' },
    11: { kind: 'gap', a: ['scouts'], limit: 1, ev: 'Scout bees inspect possible cavities.' },
    12: { kind: 'gap', a: ['pheromones'], limit: 1, ev: 'Alarm pheromones can make nearby workers defensive.' },
    13: { kind: 'gap', a: ['robotics'], limit: 1, ev: 'Research on bees has influenced robotics and computer science.' },
    14: { kind: 'para', s: 'an explanation of why unwanted sound is difficult to define', a: 'A', ev: 'Paragraph A distinguishes physical sound from human responses.' },
    15: { kind: 'para', s: 'a condition that affects whether a road barrier works', a: 'B', ev: 'Paragraph B says effectiveness depends on height, material and position.' },
    16: { kind: 'para', s: 'a possible disadvantage of making a room completely insulated', a: 'C', ev: 'Paragraph C says a sealed room may lose contact with natural sounds.' },
    17: { kind: 'para', s: 'an example of sounds that residents may want to keep', a: 'D', ev: 'Paragraph D names water, birds and human voices as valued sounds.' },
    18: { kind: 'para', s: 'a reason why noise policy can disappoint residents', a: 'F', ev: 'Paragraph F says timing, trust and fairness affect community experience.' },
    19: { kind: 'gap', a: ['frequency'], limit: 1, ev: 'Researchers measure physical features such as volume and frequency.' },
    20: { kind: 'gap', a: ['height'], limit: 1, ev: 'A barrier’s height affects its effectiveness.' },
    21: { kind: 'gap', a: ['ventilation'], limit: 1, ev: 'Mechanical ventilation allows windows to remain closed.' },
    22: { kind: 'gap', a: ['alarms'], limit: 1, ev: 'Headphones may reduce awareness of alarms.' },
    23: { kind: 'gap', a: ['night'], limit: 1, ev: 'Residents may object when heavy vehicles use a road at night.' },
    24: { kind: 'gap', a: ['quiet'], limit: 1, ev: 'Flexible spaces let workers choose a quieter area.' },
    25: { kind: 'gap', a: ['acoustic treatment'], limit: 2, ev: 'Work areas need acoustic treatment.' },
    26: { kind: 'gap', a: ['fairness'], limit: 1, ev: 'The perceived fairness of decisions influences noise experience.' },
    27: { kind: 'mcq', s: 'Why may workers travel to an office in the future?', o: { A: 'To complete every routine task there.', B: 'For collaboration, learning and equipment.', C: 'Because home working is impossible.', D: 'To avoid all technology.' }, a: 'B', ev: 'The office may be used for collaboration, learning and access to equipment.' },
    28: { kind: 'mcq', s: 'What can be a disadvantage of an open-plan office?', o: { A: 'It always prevents visibility.', B: 'Noise and lack of privacy can make conversation tiring.', C: 'It contains too many private rooms.', D: 'It eliminates electronic messages.' }, a: 'B', ev: 'Noise and lack of privacy may make spontaneous conversation tiring.' },
    29: { kind: 'mcq', s: 'What fairness problem can hybrid work create?', o: { A: 'Remote workers may become less visible.', B: 'Present workers cannot receive information.', C: 'Managers cannot assess results.', D: 'All staff must use the same desk.' }, a: 'A', ev: 'Remote workers may contribute effectively but become less visible.' },
    30: { kind: 'mcq', s: 'What does a flexible office need in addition to different areas?', o: { A: 'No rules at all.', B: 'Furniture that cannot move.', C: 'Clear understanding of how to use the space.', D: 'Only open-plan desks.' }, a: 'C', ev: 'A flexible space is useful only if workers understand how to use it.' },
    31: { kind: 'mcq', s: 'When has workplace technology failed?', o: { A: 'When it is reliable.', B: 'When it becomes the main subject of a meeting.', C: 'When workers use screens.', D: 'When microphones include remote participants.' }, a: 'B', ev: 'If technology becomes the main subject of a meeting, the design has failed.' },
    32: { kind: 'ynng', s: 'Open-plan offices always increase face-to-face communication.', a: 'NO', ev: 'Research has often found less face-to-face communication in open spaces.' },
    33: { kind: 'ynng', s: 'Remote workers can contribute effectively even if they are less visible.', a: 'YES', ev: 'The passage says remote workers may contribute effectively but become less visible.' },
    34: { kind: 'ynng', s: 'Every workplace should use the same blueprint.', a: 'NO', ev: 'Different organisations need different arrangements.' },
    35: { kind: 'ynng', s: 'Natural light automatically makes employees more productive.', a: 'NOT GIVEN', ev: 'Natural light may signal care, but the passage does not claim it automatically improves productivity.' },
    36: { kind: 'ynng', s: 'A video call can disturb workers nearby.', a: 'YES', ev: 'A video call in a shared room may disturb nearby workers.' },
    37: { kind: 'box', a: 'A', ev: 'Open-plan work can create a lack of privacy.' },
    38: { kind: 'box', a: 'B', ev: 'Remote workers may become less visible.' },
    39: { kind: 'box', a: 'C', ev: 'Workplaces need acoustic treatment.' },
    40: { kind: 'box', a: 'G', ev: 'A workplace should support the activities an organisation requires.' },
  };
  const TF_KEY = '<div class="key-box"><dl><dt>TRUE</dt><dd>if the statement agrees with the information</dd><dt>FALSE</dt><dd>if the statement contradicts the information</dd><dt>NOT GIVEN</dt><dd>if there is no information on this</dd></dl></div>';
  const YN_KEY = '<div class="key-box"><dl><dt>YES</dt><dd>if the statement agrees with the claims of the writer</dd><dt>NO</dt><dd>if the statement contradicts the claims of the writer</dd><dt>NOT GIVEN</dt><dd>if it is impossible to say what the writer thinks about this</dd></dl></div>';
  const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i);
  const keyBox = (title, obj) => `<div class="key-box"><span class="label">${title}</span><dl>${Object.entries(obj).map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl></div>`;
  const selectQ = (h, n, opts, ph) => `<div class="q" data-q="${n}"><div class="stem"><span class="qn">${n}</span><span>${h.esc(h.Q[n].s)}</span></div>${h.select(n, Object.keys(opts).map(k => [k, k]), ph)}</div>`;
  const build = h => [
    `<div class="qset"><h3>Questions 1–6</h3><p class="instr">Do the following statements agree with the information given in Reading Passage 1? Choose</p>${TF_KEY}${range(1, 6).map(h.tf).join('')}</div>
    <div class="qset"><h3>Questions 7–13</h3><p class="instr">Complete the notes below. Choose <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.</p><div class="notes"><h4>Bee communication</h4><ul><li>Colonies exchange information through movement, ${h.gapIn(7)} and contact.</li><li>Dance ${h.gapIn(8)} indicates distance.</li><li>A flower’s ${h.gapIn(9)} can remain on a forager.</li><li>Bees can detect ${h.gapIn(10)} in the sky.</li><li>Potential nest sites are inspected by ${h.gapIn(11)}.</li><li>Defensive behaviour may be triggered by alarm ${h.gapIn(12)}.</li><li>Bee research has influenced ${h.gapIn(13)}.</li></ul></div></div>`,
    `<div class="qset"><h3>Questions 14–18</h3><p class="instr">Reading Passage 2 has six paragraphs, <b>A–F</b>. Which paragraph contains the following information? <b>NB</b> You may use any letter more than once.</p>${range(14, 18).map(n => selectQ(h, n, { A: 1, B: 1, C: 1, D: 1, E: 1, F: 1 }, 'Choose A–F')).join('')}</div>
    <div class="qset"><h3>Questions 19–26</h3><p class="instr">Complete the notes below. Choose <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.</p><div class="notes"><h4>Managing noise</h4><ul><li>Researchers measure volume and ${h.gapIn(19)}.</li><li>A barrier’s ${h.gapIn(20)} affects its performance.</li><li>Buildings may use mechanical ${h.gapIn(21)}.</li><li>Headphones can reduce awareness of ${h.gapIn(22)}.</li><li>Residents may object to traffic at ${h.gapIn(23)}.</li><li>Workers may choose a ${h.gapIn(24)} area.</li><li>Offices may need ${h.gapIn(25)}.</li><li>Perceived ${h.gapIn(26)} affects public responses.</li></ul></div></div>`,
    `<div class="qset"><h3>Questions 27–31</h3><p class="instr">Choose the correct letter, <b>A, B, C or D</b>.</p>${range(27, 31).map(h.mcq).join('')}</div>
    <div class="qset"><h3>Questions 32–36</h3><p class="instr">Do the following statements agree with the claims of the writer in Reading Passage 3? Choose</p>${YN_KEY}${range(32, 36).map(h.tf).join('')}</div>
    <div class="qset"><h3>Questions 37–40</h3><p class="instr">Complete the summary using the list of words, <b>A–H</b>, below.</p><div class="notes"><h4>Designing future workspaces</h4><p>Open offices may create a lack of ${h.boxSel(37)}. Hybrid work can reduce ${h.boxSel(38)} for remote staff. Shared spaces need good ${h.boxSel(39)}. The best workplace supports required ${h.boxSel(40)}.</p></div>${keyBox('List of words', box)}</div>`,
  ];
  window.READING_TEST = { num: 8, passages, Q, headings: {}, box, ranges: [[1, 13], [14, 26], [27, 40]], build };
})();
