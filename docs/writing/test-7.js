// IELTS Academic Writing · Practice Test 7 — content only. The exam engine is assets/writing-exam.js.
(() => {
  'use strict';
  // Task 1: two maps of the same village, drawn in the exam's black-and-white style
  const ink = 'style="stroke:var(--ink)"', box = 'style="fill:var(--sheet);stroke:var(--ink)"';
  const t = (x, y, s, o = '') => `<text x="${x}" y="${y}" font-size="12" text-anchor="middle" ${o}>${s}</text>`;
  function panel(oy, today) {
    let g = `<text x="300" y="${oy + 18}" text-anchor="middle" font-size="14" font-weight="700">${today ? 'Hawton today' : 'Hawton in 1995'}</text>`;
    g += `<rect x="20" y="${oy + 30}" width="560" height="250" style="fill:none;stroke:var(--ink)" stroke-width="1.5"/>`;
    // river, running north to south
    const river = dx => `M${300 + dx},${oy + 30} C${280 + dx},${oy + 90} ${320 + dx},${oy + 150} ${296 + dx},${oy + 210} S${306 + dx},${oy + 260} ${300 + dx},${oy + 280}`;
    g += `<path d="${river(-12)}" fill="none" ${ink} stroke-width="1.4"/><path d="${river(12)}" fill="none" ${ink} stroke-width="1.4"/>`;
    g += t(318, oy + 115, 'River', 'transform="rotate(90 318 ' + (oy + 115) + ')" font-style="italic"');
    // main road with its bridge (both years)
    g += `<line x1="20" x2="580" y1="${oy + 168}" y2="${oy + 168}" ${ink} stroke-width="1.4"/><line x1="20" x2="580" y1="${oy + 180}" y2="${oy + 180}" ${ink} stroke-width="1.4"/>`;
    g += `<rect x="282" y="${oy + 163}" width="36" height="22" ${box} stroke-width="1.6"/>` + t(470, oy + 194, 'Main road');
    // railway (1995) or cycle path (today) along the north edge
    if (!today) {
      g += `<line x1="20" x2="580" y1="${oy + 52}" y2="${oy + 52}" ${ink} stroke-width="2"/>`;
      for (let x = 30; x < 580; x += 14) g += `<line x1="${x}" x2="${x}" y1="${oy + 47}" y2="${oy + 57}" ${ink} stroke-width="1.2"/>`;
      g += t(150, oy + 44, 'Railway');
    } else {
      g += `<line x1="20" x2="580" y1="${oy + 52}" y2="${oy + 52}" ${ink} stroke-width="2" stroke-dasharray="8 6"/>` + t(150, oy + 44, 'Cycle path');
    }
    // north-west: farmland, then housing
    if (!today) {
      g += `<rect x="40" y="${oy + 70}" width="220" height="82" style="fill:url(#map-field);stroke:var(--ink)" stroke-width="1.2"/>` + `<rect x="105" y="${oy + 100}" width="90" height="22" ${box} stroke-width="0"/>` + t(150, oy + 115, 'Farmland');
    } else {
      for (let r = 0; r < 3; r++) for (let c = 0; c < 8; c++) if (r !== 1 || c === 0 || c === 7) g += `<rect x="${44 + c * 27}" y="${oy + 72 + r * 27}" width="17" height="17" ${box} stroke-width="1.2"/>`;
      g += t(150, oy + 114, 'Housing estate', 'font-weight="700"');
    }
    // north-east: woodland, partly replaced by a car park
    const trees = cols => { let s = ''; for (let r = 0; r < 3; r++) for (let c = 0; c < cols; c++) s += `<circle cx="${345 + c * 36}" cy="${oy + 79 + r * 25}" r="9" ${box} stroke-width="1.2"/>`; return s; };
    if (!today) g += trees(6) + t(435, oy + 156, 'Woodland');
    else {
      g += trees(3) + t(381, oy + 156, 'Woodland');
      g += `<rect x="455" y="${oy + 70}" width="110" height="82" ${box} stroke-width="1.2"/>` + `<text x="510" y="${oy + 118}" text-anchor="middle" font-size="22" font-weight="700">P</text>` + t(510, oy + 140, 'Car park');
    }
    // south-west: church and shop / café
    g += `<rect x="62" y="${oy + 210}" width="40" height="30" ${box} stroke-width="1.3"/><line x1="82" x2="82" y1="${oy + 196}" y2="${oy + 210}" ${ink} stroke-width="1.5"/><line x1="75" x2="89" y1="${oy + 201}" y2="${oy + 201}" ${ink} stroke-width="1.5"/>` + t(82, oy + 258, 'Church');
    g += `<rect x="160" y="${oy + 208}" width="56" height="32" ${box} stroke-width="1.3"/>` + t(188, oy + 258, today ? 'Café' : 'Shop');
    // south-east: school (extended today, with a playing field)
    if (!today) g += `<rect x="400" y="${oy + 205}" width="70" height="40" ${box} stroke-width="1.3"/>` + t(435, oy + 262, 'School');
    else g += `<rect x="362" y="${oy + 205}" width="106" height="40" ${box} stroke-width="1.3"/>` + t(415, oy + 262, 'School (extended)') + `<rect x="485" y="${oy + 200}" width="80" height="46" style="fill:url(#map-field);stroke:var(--ink)" stroke-width="1.2"/>` + t(525, oy + 262, 'Playing field');
    // new footbridge (today)
    if (today) g += `<line x1="282" x2="320" y1="${oy + 240}" y2="${oy + 240}" ${ink} stroke-width="3"/>` + t(248, oy + 273, 'Footbridge', 'font-size="11"');
    return g;
  }
  function mapsSVG() {
    const defs = '<defs><pattern id="map-field" width="10" height="10" patternUnits="userSpaceOnUse"><path d="M0 10L10 0" style="stroke:var(--ink)" stroke-width="0.8"/></pattern></defs>';
    return `<svg class="chart" viewBox="0 0 600 590" role="img" aria-label="Two maps of the village of Hawton. In 1995: a railway along the north, farmland in the north-west, woodland in the north-east, a main road with a road bridge over the river, a church and a shop in the south-west, and a school in the south-east. Today: the railway has become a cycle path, the farmland is a housing estate, half of the woodland has been replaced by a car park, the shop is now a café, the school has been extended and has a playing field, and a footbridge has been built over the river. The church, the main road and the road bridge are unchanged.">${defs}${panel(0, false)}${panel(300, true)}</svg>`;
  }

  const tasks = [
    {
      key: 'task1', min: 150, minutes: 20, figures: false,
      html: () => `<h2>Writing Task 1</h2><p class="time">You should spend about 20 minutes on this task.</p>
        <div class="prompt">
          <p class="q">The maps below show the village of Hawton in 1995 and today.</p>
          <p class="q">Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</p>
          ${mapsSVG()}
        </div>
        <p class="time" style="margin-top:12px">Write at least 150 words.</p>`,
      keywords: ['village', 'railway', 'cycle', 'farmland', 'housing', 'woodland', 'car', 'shop', 'caf', 'school', 'footbridge', 'river'],
      model: `The maps compare the village of Hawton in 1995 with the village as it is today.

Overall, Hawton has become more residential and more developed for leisure and transport, with much of its open countryside replaced. However, the basic layout of the village, including the river, the main road and the church, has not changed.

The most noticeable change has taken place in the north of the village. The railway line that used to run along the northern edge has been converted into a cycle path. To the west of the river, the farmland that existed in 1995 has been replaced by a large housing estate. On the opposite side of the river, about half of the woodland has been cleared to make way for a car park.

There have also been several changes in the southern half of the village. The shop near the church has been turned into a café, and the school to the east of the river has been extended and now has its own playing field. Finally, a footbridge has been built across the river, south of the original road bridge, which remains in use.`,
    },
    {
      key: 'task2', min: 250, minutes: 40,
      html: () => `<h2>Writing Task 2</h2><p class="time">You should spend about 40 minutes on this task.</p>
        <div class="prompt">
          <p>Write about the following topic:</p>
          <p class="q">Some people think that zoos should be closed because it is cruel to keep animals in captivity. Others believe that zoos play an important role in protecting wild animals.</p>
          <p class="q">Discuss both these views and give your own opinion.</p>
          <p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
        </div>
        <p class="time" style="margin-top:12px">Write at least 250 words.</p>`,
      keywords: ['zoo', 'animal', 'captiv', 'cruel', 'protect', 'species', 'wild', 'conservation', 'educat', 'natural'],
      model: `Zoos have long divided opinion. While some people argue that keeping animals in captivity is cruel and that zoos should be closed, others believe that zoos are essential for protecting wildlife. This essay will discuss both views before explaining why I think zoos should remain, but only if they are greatly improved.

Those who oppose zoos have strong arguments. Many animals, especially large mammals such as elephants and polar bears, naturally travel long distances every day, and no enclosure can give them enough space. As a result, some zoo animals show signs of stress, such as walking repeatedly in circles. Critics also point out that many zoos exist mainly to make money from visitors, and that the animals' welfare is sometimes treated as less important than entertainment.

On the other hand, supporters of zoos argue that they play a vital role in conservation. Several species, including the Arabian oryx and the California condor, survived only because they were bred in zoos and later returned to the wild. Zoos also fund research into animal diseases and protect habitats in other countries. In addition, they educate millions of visitors, particularly children, who may care more about protecting wildlife after seeing animals in real life.

In my opinion, closing all zoos would harm the very animals that critics want to protect, because many endangered species depend on breeding programmes. However, zoos should focus on species that they can keep properly and that genuinely need protection, and they should stop keeping animals, such as elephants, that cannot live well in captivity. Strict laws and regular inspections would help to ensure this.

In conclusion, although zoos can cause animals to suffer, I believe well-run zoos are important for conservation and education, and the solution is reform rather than closure.`,
    },
  ];

  window.WRITING_TEST = { num: 7, task1Intro: 'compare two maps', tasks };
})();
