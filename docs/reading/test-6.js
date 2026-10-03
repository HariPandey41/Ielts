// IELTS Academic Reading · Practice Test 6 — content only. The exam engine is assets/reading-exam.js.
(() => {
  'use strict';
  const passages = [
    {
      title: 'The Museum of Everyday Things',
      sub: 'You should spend about 20 minutes on Questions 1–13, which are based on Reading Passage 1 below.',
      paras: [
        ['', 'Museums once concentrated on objects that were rare, beautiful or connected with famous people. In recent decades, however, many curators have begun collecting ordinary things: a bus ticket, a school lunch box or a broken telephone. Such objects can appear unimportant, but they reveal how people worked, travelled and communicated.'],
        ['', 'The difficulty is deciding what deserves to be saved. A museum cannot keep every object, and a common item may become meaningful only after its original context has disappeared. Curators therefore ask who used it, how widely it was produced and whether it represents a change in everyday life. They also record stories from the people who donated it.'],
        ['', 'Digital photographs have changed collecting practice. A museum can document a large object without keeping it physically, and a family may contribute images of a room that no longer exists. Digital files are easier to copy than furniture, but they require careful descriptions and storage systems. A photograph without a date or location may be impossible to interpret later.'],
        ['', 'Some museums invite communities to choose objects themselves. Residents may nominate items associated with a neighbourhood, such as a shop sign or a particular type of cooking pot. This approach can broaden a collection beyond the interests of professional curators, although it may also reproduce the views of the most active participants rather than the whole population.'],
        ['', 'Exhibiting ordinary objects requires explanation. A visitor may understand why a crown is displayed, but a collection of plastic containers needs labels, photographs or recorded memories to show its significance. Designers often place familiar objects beside unfamiliar ones so that a change in materials, habits or technology becomes visible.'],
        ['', 'There are ethical questions as well. Personal belongings may contain private information, and a donor may not expect a story to be displayed publicly. Museums now discuss consent, anonymity and the possibility of returning an object if a family changes its mind. The work of collecting continues after an object enters the museum.'],
        ['', 'The best collections do not claim to represent an entire society perfectly. Instead, they make gaps visible and invite visitors to ask whose experiences have been preserved. An ordinary object can be valuable not because it is unique, but because it opens a conversation about lives that official histories often overlook.'],
      ],
    },
    {
      title: 'Restoring Wetlands',
      sub: 'You should spend about 20 minutes on Questions 14–26, which are based on Reading Passage 2 below.',
      paras: [
        ['A', 'Wetlands include marshes, peatlands and shallow coastal lagoons. Although they cover a relatively small part of the land surface, they store water, filter pollutants and provide breeding areas for birds and fish. For centuries, many wetlands were drained because they were considered unproductive or unhealthy.'],
        ['B', 'Restoration often begins by changing the movement of water. Engineers may block a drainage channel, remove a bank or reconnect a river with its floodplain. The aim is not to create a permanent lake; many wetlands need a pattern of wet and dry periods. Water levels are therefore monitored rather than fixed at one height.'],
        ['C', 'Plants return when the basic conditions are right, but replanting is sometimes necessary. Local species are preferred because they are adapted to the climate and support native insects. Introducing attractive plants from elsewhere can create a second problem if they spread aggressively and displace the species that restoration was meant to protect.'],
        ['D', 'Wetlands also store carbon, particularly when waterlogged soil slows the decomposition of plant material. If a peatland dries, stored carbon can enter the atmosphere and the ground may become vulnerable to fire. Restoration can reduce these emissions, but it may take years before the full climate benefit is visible.'],
        ['E', 'People who live near a restoration site may have competing needs. Farmers may depend on drainage, while fishers may welcome a larger wet area. Successful projects involve residents early, explain what will change and provide ways to report problems. A technically impressive scheme can fail if local people feel that decisions were made without them.'],
        ['F', 'Restoration is measured in more than hectares. Scientists may count bird species, examine water quality or record how long the ground remains saturated. They may also ask whether the wetland reduces flooding downstream. These measures help managers adjust a project instead of treating the first design as final.'],
      ],
    },
    {
      title: 'The Psychology of Colour',
      sub: 'You should spend about 20 minutes on Questions 27–40, which are based on Reading Passage 3 below.',
      paras: [
        ['', 'Colour seems to influence mood and behaviour, but simple claims about colour have often travelled faster than the evidence supporting them. A marketing guide may say that red creates excitement or that blue produces calm. Psychologists generally take a more cautious view: responses depend on context, culture, brightness and what a colour has previously come to mean.'],
        ['', 'Experiments in sport provide one example. Researchers have reported that athletes wearing red sometimes receive more favourable outcomes, but it is difficult to separate the colour of clothing from skill, team identity and the expectations of officials. A colour may affect perception without changing physical performance, and the size of the effect is not always consistent.'],
        ['', 'Colour also helps people find their way through buildings. Hospitals and airports use coloured zones, lines and signs to distinguish destinations. The system works best when colour is combined with words or symbols, because some users cannot distinguish particular colours and others may encounter poor lighting. Colour should support navigation, not carry the entire message.'],
        ['', 'Food researchers have found that colour can change the expectation of taste. A drink served in a familiar colour may be judged sweeter or more intense before it is tasted. This does not mean colour determines flavour: smell, texture and personal preference remain important, and expectations can be corrected after the first sip.'],
        ['', 'Cultural experience matters. White may be associated with weddings in one society and mourning in another, while a colour used for danger in one country may have a different local meaning elsewhere. Designers working internationally therefore test a palette with intended users instead of assuming that a universal colour code exists.'],
        ['', 'The physical environment changes perception too. A colour can look darker beside a bright surface and warmer beside a cool one. Screens add another complication because brightness and calibration vary between devices. A designer who approves a colour on one monitor may see a noticeably different result in a classroom, shop or outdoor sign.'],
        ['', 'Colour remains a powerful design tool, but power is not the same as certainty. The most responsible use combines research with testing, provides more than one source of information and leaves room for individual differences. Rather than asking what a colour always does, designers should ask what it is likely to suggest in a particular situation.'],
      ],
    },
  ];
  const box = { A: 'context', B: 'lighting', C: 'symbols', D: 'taste', E: 'culture', F: 'palette', G: 'expectations', H: 'performance' };
  const Q = {
    1: { kind: 'tfng', s: 'Museums have always preferred ordinary objects to rare objects.', a: 'FALSE', ev: 'Museums once concentrated on objects that were rare, beautiful or linked with famous people.' },
    2: { kind: 'tfng', s: 'A common object may become meaningful after its original context is lost.', a: 'TRUE', ev: 'The passage says a common item may become meaningful only after its context has disappeared.' },
    3: { kind: 'tfng', s: 'Digital photographs never need descriptions.', a: 'FALSE', ev: 'Digital files require careful descriptions and storage systems.' },
    4: { kind: 'tfng', s: 'Community nominations can broaden a museum collection.', a: 'TRUE', ev: 'Residents can choose objects beyond the interests of professional curators.' },
    5: { kind: 'tfng', s: 'Every museum visitor understands the meaning of plastic containers on display.', a: 'NOT GIVEN', ev: 'The passage says such objects need explanation, but does not describe every visitor’s understanding.' },
    6: { kind: 'tfng', s: 'Museums now consider whether displayed personal belongings contain private information.', a: 'TRUE', ev: 'Curators discuss consent, anonymity and private information.' },
    7: { kind: 'gap', a: ['ticket'], limit: 1, ev: 'A bus ticket is given as an example of an ordinary object.' },
    8: { kind: 'gap', a: ['stories'], limit: 1, ev: 'Curators record stories from people who donate objects.' },
    9: { kind: 'gap', a: ['date'], limit: 1, ev: 'A photograph without a date or location may be impossible to interpret.' },
    10: { kind: 'gap', a: ['neighbourhood'], limit: 1, ev: 'Residents may nominate items associated with a neighbourhood.' },
    11: { kind: 'gap', a: ['labels'], limit: 1, ev: 'Collections of ordinary objects need labels, photographs or memories.' },
    12: { kind: 'gap', a: ['consent'], limit: 1, ev: 'Museums now discuss consent and anonymity.' },
    13: { kind: 'gap', a: ['gaps'], limit: 1, ev: 'Good collections make gaps visible.' },
    14: { kind: 'para', s: 'a list of services provided by wetlands', a: 'A', ev: 'Paragraph A lists water storage, pollution filtering and breeding areas.' },
    15: { kind: 'para', s: 'an explanation of why water levels should change', a: 'B', ev: 'Paragraph B says many wetlands need wet and dry periods.' },
    16: { kind: 'para', s: 'a warning about plants from other regions', a: 'C', ev: 'Paragraph C warns that introduced plants may spread aggressively.' },
    17: { kind: 'para', s: 'a connection between dry peatland and atmospheric emissions', a: 'D', ev: 'Paragraph D explains that dry peatland can release stored carbon.' },
    18: { kind: 'para', s: 'a reason why residents should be involved early', a: 'E', ev: 'Paragraph E says projects can fail when local people feel excluded.' },
    19: { kind: 'gap', a: ['marshes'], limit: 1, ev: 'Wetlands include marshes, peatlands and shallow coastal lagoons.' },
    20: { kind: 'gap', a: ['drainage'], limit: 1, ev: 'Engineers may block a drainage channel.' },
    21: { kind: 'gap', a: ['floodplain'], limit: 1, ev: 'A river may be reconnected with its floodplain.' },
    22: { kind: 'gap', a: ['native insects'], limit: 2, ev: 'Local plants support native insects.' },
    23: { kind: 'gap', a: ['fire'], limit: 1, ev: 'Dry peatland may become vulnerable to fire.' },
    24: { kind: 'gap', a: ['farmers'], limit: 1, ev: 'Farmers may depend on drainage.' },
    25: { kind: 'gap', a: ['water quality'], limit: 2, ev: 'Scientists may examine water quality.' },
    26: { kind: 'gap', a: ['flooding'], limit: 1, ev: 'Managers may ask whether a wetland reduces flooding downstream.' },
    27: { kind: 'mcq', s: 'What is the main point of the first paragraph?', o: { A: 'Colour has exactly the same effect in every culture.', B: 'Claims about colour should be treated cautiously.', C: 'Marketing guides are more reliable than psychology.', D: 'Blue is the most useful colour for designers.' }, a: 'B', ev: 'The paragraph says simple colour claims have spread faster than supporting evidence.' },
    28: { kind: 'mcq', s: 'What difficulty affects research on red clothing in sport?', o: { A: 'Athletes refuse to wear red.', B: 'Colour is mixed with skill and expectations.', C: 'Red cannot be seen by officials.', D: 'Sport has no measurable outcomes.' }, a: 'B', ev: 'The passage says clothing colour is difficult to separate from skill, team identity and officials’ expectations.' },
    29: { kind: 'mcq', s: 'Why should colour not carry the entire message in a building?', o: { A: 'Colour makes signs too expensive.', B: 'Some users cannot distinguish particular colours.', C: 'Words are always faster to read.', D: 'Buildings have no natural light.' }, a: 'B', ev: 'The system works best with words or symbols because some users cannot distinguish colours.' },
    30: { kind: 'mcq', s: 'What can colour do to the expectation of a drink?', o: { A: 'Make smell irrelevant.', B: 'Change how sweet or intense it is expected to be.', C: 'Guarantee that everyone will like it.', D: 'Remove the effect of texture.' }, a: 'B', ev: 'Colour can change expectations of sweetness or intensity before tasting.' },
    31: { kind: 'mcq', s: 'What should international designers do with a colour palette?', o: { A: 'Use the same danger code everywhere.', B: 'Test it with intended users.', C: 'Avoid all bright colours.', D: 'Choose colours only from historical paintings.' }, a: 'B', ev: 'Designers should test a palette because cultural meanings differ.' },
    32: { kind: 'ynng', s: 'The passage claims that colour always changes physical performance in sport.', a: 'NO', ev: 'Colour may affect perception, while physical effects are not consistent.' },
    33: { kind: 'ynng', s: 'Navigation systems using colour should also use words or symbols.', a: 'YES', ev: 'The passage says colour should be combined with words or symbols.' },
    34: { kind: 'ynng', s: 'Colour is the only factor affecting how a drink tastes.', a: 'NO', ev: 'Smell, texture and personal preference remain important.' },
    35: { kind: 'ynng', s: 'White has the same cultural meaning everywhere.', a: 'NO', ev: 'The meaning of white differs between societies.' },
    36: { kind: 'ynng', s: 'A colour approved on one monitor will look identical on every device.', a: 'NOT GIVEN', ev: 'The passage says screens vary, but does not say that every device will show an identical result.' },
    37: { kind: 'box', a: 'A', ev: 'Responses to colour depend on context.' },
    38: { kind: 'box', a: 'B', ev: 'Poor lighting can affect how colour-based signs are used.' },
    39: { kind: 'box', a: 'C', ev: 'Symbols can support colour in navigation.' },
    40: { kind: 'box', a: 'G', ev: 'Colour can influence expectations before a drink is tasted.' },
  };
  const TF_KEY = '<div class="key-box"><dl><dt>TRUE</dt><dd>if the statement agrees with the information</dd><dt>FALSE</dt><dd>if the statement contradicts the information</dd><dt>NOT GIVEN</dt><dd>if there is no information on this</dd></dl></div>';
  const YN_KEY = '<div class="key-box"><dl><dt>YES</dt><dd>if the statement agrees with the claims of the writer</dd><dt>NO</dt><dd>if the statement contradicts the claims of the writer</dd><dt>NOT GIVEN</dt><dd>if it is impossible to say what the writer thinks about this</dd></dl></div>';
  const range = (a, b) => Array.from({ length: b - a + 1 }, (_, i) => a + i);
  const keyBox = (title, obj) => `<div class="key-box"><span class="label">${title}</span><dl>${Object.entries(obj).map(([k, v]) => `<dt>${k}</dt><dd>${v}</dd>`).join('')}</dl></div>`;
  const selectQ = (h, n, opts, ph) => `<div class="q" data-q="${n}"><div class="stem"><span class="qn">${n}</span><span>${h.esc(h.Q[n].s)}</span></div>${h.select(n, Object.keys(opts).map(k => [k, k]), ph)}</div>`;
  const build = h => [
    `<div class="qset"><h3>Questions 1–6</h3><p class="instr">Do the following statements agree with the information given in Reading Passage 1? Choose</p>${TF_KEY}${range(1, 6).map(h.tf).join('')}</div>
    <div class="qset"><h3>Questions 7–13</h3><p class="instr">Complete the notes below. Choose <b>ONE WORD ONLY</b> from the passage for each answer.</p><div class="notes"><h4>Collecting everyday history</h4><ul><li>A museum may keep a bus ${h.gapIn(7)}.</li><li>Curators record donor ${h.gapIn(8)}.</li><li>Digital photographs need a ${h.gapIn(9)}.</li><li>Residents nominate objects from a ${h.gapIn(10)}.</li><li>Exhibitions may need ${h.gapIn(11)}.</li><li>Donors may be asked for ${h.gapIn(12)}.</li><li>Good collections make historical ${h.gapIn(13)} visible.</li></ul></div></div>`,
    `<div class="qset"><h3>Questions 14–18</h3><p class="instr">Reading Passage 2 has six paragraphs, <b>A–F</b>. Which paragraph contains the following information? <b>NB</b> You may use any letter more than once.</p>${range(14, 18).map(n => selectQ(h, n, { A: 1, B: 1, C: 1, D: 1, E: 1, F: 1 }, 'Choose A–F')).join('')}</div>
    <div class="qset"><h3>Questions 19–26</h3><p class="instr">Complete the notes below. Choose <b>NO MORE THAN TWO WORDS</b> from the passage for each answer.</p><div class="notes"><h4>Wetland restoration</h4><ul><li>Wetlands include ${h.gapIn(19)}.</li><li>Engineers may block a ${h.gapIn(20)} channel.</li><li>Rivers can be reconnected with a ${h.gapIn(21)}.</li><li>Local plants support ${h.gapIn(22)}.</li><li>Dry peatland may be vulnerable to ${h.gapIn(23)}.</li><li>${h.gapIn(24)} may depend on drainage.</li><li>Scientists examine ${h.gapIn(25)}.</li><li>Wetlands may reduce downstream ${h.gapIn(26)}.</li></ul></div></div>`,
    `<div class="qset"><h3>Questions 27–31</h3><p class="instr">Choose the correct letter, <b>A, B, C or D</b>.</p>${range(27, 31).map(h.mcq).join('')}</div>
    <div class="qset"><h3>Questions 32–36</h3><p class="instr">Do the following statements agree with the claims of the writer in Reading Passage 3? Choose</p>${YN_KEY}${range(32, 36).map(h.tf).join('')}</div>
    <div class="qset"><h3>Questions 37–40</h3><p class="instr">Complete the summary using the list of words, <b>A–H</b>, below.</p><div class="notes"><h4>Using colour responsibly</h4><p>Designers should consider ${h.boxSel(37)}. In buildings, poor ${h.boxSel(38)} can affect colour signs, which should be supported by ${h.boxSel(39)}. In food research, colour may shape ${h.boxSel(40)} before tasting.</p></div>${keyBox('List of words', box)}</div>`,
  ];
  window.READING_TEST = { num: 6, passages, Q, headings: {}, box, ranges: [[1, 13], [14, 26], [27, 40]], build };
})();
