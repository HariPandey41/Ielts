// IELTS Academic Writing · Practice Test 2 — content only. The exam engine is assets/writing-exam.js.
(() => {
  'use strict';
  // Task 1 data: average hours per week spent on three leisure activities, by age group
  const GROUPS = ['16–24', '25–44', '45–64', '65+'];
  const SERIES = [
    { name: 'Watching TV', v: [8, 10, 14, 22], fill: 'solid' },
    { name: 'Exercise', v: [5, 4, 3, 2], fill: 'open' },
    { name: 'Socialising', v: [12, 7, 6, 9], fill: 'hatch' },
  ];
  function chartSVG() {
    const X0 = 60, X1 = 560, Y0 = 310, Y1 = 50, MAX = 25;
    const y = v => Y0 - (Y0 - Y1) * v / MAX;
    const gw = (X1 - X0) / GROUPS.length, bw = 30;
    let g = '<defs><pattern id="hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="6" style="stroke:var(--ink)" stroke-width="2"/></pattern></defs>';
    for (let v = 0; v <= MAX; v += 5) g += `<line class="grid" x1="${X0}" x2="${X1}" y1="${y(v)}" y2="${y(v)}"/><text x="${X0 - 10}" y="${y(v) + 4}" text-anchor="end" font-size="12">${v}</text>`;
    GROUPS.forEach((grp, i) => {
      const cx = X0 + gw * i + gw / 2;
      SERIES.forEach((s, k) => {
        const x = cx - (bw * 3) / 2 + k * bw, h = Y0 - y(s.v[i]);
        const fill = s.fill === 'solid' ? 'style="fill:var(--ink);stroke:var(--ink)"' : s.fill === 'open' ? 'style="fill:var(--sheet);stroke:var(--ink)"' : 'fill="url(#hatch)" style="stroke:var(--ink)"';
        g += `<rect x="${x + 2}" y="${y(s.v[i])}" width="${bw - 4}" height="${h}" ${fill} stroke-width="1.4"/>`;
      });
      g += `<text x="${cx}" y="${Y0 + 20}" text-anchor="middle" font-size="12">${grp}</text>`;
    });
    g += `<line class="axis" x1="${X0}" x2="${X0}" y1="${Y1 - 8}" y2="${Y0}"/><line class="axis" x1="${X0}" x2="${X1}" y1="${Y0}" y2="${Y0}"/>`;
    g += `<text x="${(X0 + X1) / 2}" y="${Y0 + 42}" text-anchor="middle" font-size="12">Age group (years)</text>`;
    g += `<text x="16" y="${(Y0 + Y1) / 2}" font-size="12" text-anchor="middle" transform="rotate(-90 16 ${(Y0 + Y1) / 2})">Hours per week</text>`;
    g += `<text x="${(X0 + X1) / 2}" y="20" text-anchor="middle" font-size="14" font-weight="700">Average weekly hours spent on leisure activities, by age</text>`;
    SERIES.forEach((s, k) => {
      const lx = X0 + 20 + k * 150;
      const fill = s.fill === 'solid' ? 'style="fill:var(--ink);stroke:var(--ink)"' : s.fill === 'open' ? 'style="fill:var(--sheet);stroke:var(--ink)"' : 'fill="url(#hatch)" style="stroke:var(--ink)"';
      g += `<rect x="${lx}" y="32" width="14" height="12" ${fill} stroke-width="1.2"/><text x="${lx + 20}" y="42" font-size="12">${s.name}</text>`;
    });
    return `<svg class="chart" viewBox="0 0 600 370" role="img" aria-label="Bar chart of average weekly hours spent watching TV, exercising and socialising by four age groups. Watching TV: 8, 10, 14 and 22 hours. Exercise: 5, 4, 3 and 2 hours. Socialising: 12, 7, 6 and 9 hours, for ages 16–24, 25–44, 45–64 and 65 and over.">${g}</svg>`;
  }

  const tasks = [
    {
      key: 'task1', min: 150, minutes: 20,
      html: () => `<h2>Writing Task 1</h2><p class="time">You should spend about 20 minutes on this task.</p>
        <div class="prompt">
          <p class="q">The bar chart below shows the average number of hours per week that people in four age groups spent on three leisure activities in one country.</p>
          <p class="q">Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</p>
          ${chartSVG()}
        </div>
        <p class="time" style="margin-top:12px">Write at least 150 words.</p>`,
      keywords: ['hour', 'week', 'age', 'tv', 'television', 'exercis', 'socialis', 'leisure', '65', '16'],
      model: `The bar chart compares how many hours per week people in four age groups spent watching television, exercising and socialising.

Overall, television was the most time-consuming activity for every group except the youngest, and the time spent on it rose steadily with age. Exercise, by contrast, occupied the least time in all age groups and declined as people got older.

The youngest group, aged 16 to 24, was the only one that spent more time socialising than watching television, at 12 hours compared with 8. They also exercised the most, for around 5 hours a week.

Among people aged 25 to 64, television viewing increased from 10 to 14 hours, while socialising fell to about 6 or 7 hours and exercise dropped slightly to 3 or 4 hours.

The most striking figures relate to people aged 65 and over. They watched an average of 22 hours of television each week, almost three times as much as the youngest group, yet exercised for only 2 hours. Interestingly, the time they spent socialising rose again to 9 hours, higher than for any group except the 16 to 24-year-olds.`,
    },
    {
      key: 'task2', min: 250, minutes: 40,
      html: () => `<h2>Writing Task 2</h2><p class="time">You should spend about 40 minutes on this task.</p>
        <div class="prompt">
          <p>Write about the following topic:</p>
          <p class="q">In many countries, people are working longer hours and spending less time with their families.</p>
          <p class="q">What are the causes of this situation? What can be done to solve this problem?</p>
          <p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
        </div>
        <p class="time" style="margin-top:12px">Write at least 250 words.</p>`,
      opinion: false,
      keywords: ['work', 'hour', 'famil', 'time', 'cause', 'solution', 'employ', 'company', 'government', 'technolog'],
      model: `In many parts of the world, employees now spend so long at work that family life is suffering. This essay will examine the main reasons for this trend and suggest some measures that could help people achieve a better balance.

The first cause is economic pressure. In cities where housing and living costs have risen faster than wages, many people have to work overtime or take a second job simply to pay their bills. A second factor is technology. Although smartphones and laptops were supposed to make work more efficient, they have also made it possible for managers to contact staff at any hour, so that the working day no longer ends when people leave the office. Finally, in competitive industries, there is often an unspoken expectation that ambitious employees should be the first to arrive and the last to leave, and those who refuse may fear that they will not be promoted.

Several steps could be taken to address the problem. Governments could set a legal limit on weekly working hours, as some European countries have done, and introduce a 'right to disconnect', which allows employees to ignore work messages outside their contracted hours. Companies, for their part, could offer flexible working arrangements, such as working from home on certain days, which save commuting time and allow parents to spend more time with their children. Individuals can also help themselves by setting clear boundaries, for example by switching off work notifications in the evening.

In conclusion, long working hours are driven by financial pressure, constant connectivity and workplace culture. However, a combination of sensible legislation, flexible employers and personal discipline could allow people to work productively without neglecting their families.`,
    },
  ];

  window.WRITING_TEST = { num: 2, task1Intro: 'describe a bar chart', tasks };
})();
