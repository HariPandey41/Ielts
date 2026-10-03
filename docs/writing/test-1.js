// IELTS Academic Writing · Practice Test 1 — content only. The exam engine is assets/writing-exam.js.
(() => {
  'use strict';
  // Task 1 data: % of household waste recycled
  const YEARS = [2000, 2005, 2010, 2015, 2020];
  const SERIES = [
    { name: 'Germany', v: [33, 45, 56, 62, 66], dash: '', mk: 'circle', solid: true },
    { name: 'UK', v: [11, 22, 38, 43, 44], dash: '7 5', mk: 'square', solid: false },
    { name: 'Spain', v: [15, 18, 22, 30, 39], dash: '2 4', mk: 'triangle', solid: true },
    { name: 'Japan', v: [16, 19, 20, 20, 21], dash: '12 4 3 4', mk: 'diamond', solid: false },
  ];
  function chartSVG() {
    const X0 = 70, X1 = 500, Y0 = 330, Y1 = 40, MAX = 70;
    const x = i => X0 + (X1 - X0) * i / (YEARS.length - 1);
    const y = v => Y0 - (Y0 - Y1) * v / MAX;
    let g = '';
    for (let v = 0; v <= MAX; v += 10) g += `<line class="grid" x1="${X0}" x2="${X1}" y1="${y(v)}" y2="${y(v)}"/><text x="${X0 - 10}" y="${y(v) + 4}" text-anchor="end" font-size="12">${v}</text>`;
    YEARS.forEach((yr, i) => g += `<text x="${x(i)}" y="${Y0 + 20}" text-anchor="middle" font-size="12">${yr}</text>`);
    const marker = (m, cx, cy, solid) => {
      const c = `class="mk ${solid ? 'solid' : ''}"`;
      if (m === 'circle') return `<circle ${c} cx="${cx}" cy="${cy}" r="4.5"/>`;
      if (m === 'square') return `<rect ${c} x="${cx - 4}" y="${cy - 4}" width="8" height="8"/>`;
      if (m === 'triangle') return `<path ${c} d="M${cx} ${cy - 5.5} L${cx + 5} ${cy + 4} L${cx - 5} ${cy + 4} Z"/>`;
      return `<path ${c} d="M${cx} ${cy - 5.5} L${cx + 5.5} ${cy} L${cx} ${cy + 5.5} L${cx - 5.5} ${cy} Z"/>`;
    };
    SERIES.forEach(s => {
      g += `<polyline class="ln" stroke-dasharray="${s.dash}" points="${s.v.map((v, i) => `${x(i)},${y(v)}`).join(' ')}"/>`;
      s.v.forEach((v, i) => g += marker(s.mk, x(i), y(v), s.solid));
      g += `<text x="${X1 + 12}" y="${y(s.v[4]) + 4}" font-size="13" font-weight="700">${s.name}</text>`;
    });
    g += `<line class="axis" x1="${X0}" x2="${X0}" y1="${Y1 - 8}" y2="${Y0}"/><line class="axis" x1="${X0}" x2="${X1}" y1="${Y0}" y2="${Y0}"/>`;
    g += `<text x="18" y="${(Y0 + Y1) / 2}" font-size="12" text-anchor="middle" transform="rotate(-90 18 ${(Y0 + Y1) / 2})">% of household waste recycled</text>`;
    g += `<text x="${(X0 + X1) / 2}" y="20" text-anchor="middle" font-size="14" font-weight="700">Household waste recycled in four countries, 2000–2020</text>`;
    return `<svg class="chart" viewBox="0 0 600 370" role="img" aria-label="Line graph of the percentage of household waste recycled in Germany, the UK, Spain and Japan from 2000 to 2020. Germany rose from 33% to 66%, the UK from 11% to 44%, Spain from 15% to 39%, and Japan from 16% to 21%.">${g}</svg>`;
  }

  const tasks = [
    {
      key: 'task1', min: 150, minutes: 20,
      html: () => `<h2>Writing Task 1</h2><p class="time">You should spend about 20 minutes on this task.</p>
        <div class="prompt">
          <p class="q">The graph below shows the percentage of household waste that was recycled in four countries between 2000 and 2020.</p>
          <p class="q">Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</p>
          ${chartSVG()}
        </div>
        <p class="time" style="margin-top:12px">Write at least 150 words.</p>`,
      keywords: ['recycl', 'waste', 'household', 'germany', 'uk', 'spain', 'japan', 'percent', '2000', '2020'],
      model: `The line graph compares the proportion of household waste that was recycled in Germany, the UK, Spain and Japan over a twenty-year period from 2000.

Overall, recycling rates increased in all four countries, although the scale of the rise varied considerably. Germany recycled the highest proportion of its waste throughout the period, while Japan showed the least change.

In 2000, Germany already recycled a third of its household waste, roughly double the figures for Spain (15%) and Japan (16%), and three times the UK's rate of just 11%. Over the following two decades, the German figure climbed steadily to reach 66% in 2020.

The UK saw the most dramatic improvement. Its rate quadrupled, rising sharply to 38% by 2010 before levelling off at 44% in 2020. Spain's progress was slower at first, with only a small increase to 22% by 2010, but it then accelerated, reaching 39% by the end of the period.

Japan, by contrast, remained almost unchanged, edging up from 16% to just 21%, which meant that it went from having the second-highest rate in 2000 to the lowest in 2020.`,
    },
    {
      key: 'task2', min: 250, minutes: 40,
      html: () => `<h2>Writing Task 2</h2><p class="time">You should spend about 40 minutes on this task.</p>
        <div class="prompt">
          <p>Write about the following topic:</p>
          <p class="q">Some people believe that university education should be free for all students. Others think that students should pay for their own studies.</p>
          <p class="q">Discuss both these views and give your own opinion.</p>
          <p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p>
        </div>
        <p class="time" style="margin-top:12px">Write at least 250 words.</p>`,
      keywords: ['universit', 'free', 'pay', 'student', 'educat', 'fee', 'government', 'tax', 'cost', 'degree'],
      model: `Whether university education should be paid for by the state or by students themselves is a question that divides opinion in many countries. While there are reasonable arguments on both sides, I believe that higher education should be largely free, provided that places are allocated fairly.

Those who argue that students should pay point out that graduates usually earn considerably more than people without a degree. From this perspective, it seems unfair to ask taxpayers, many of whom never attended university, to fund an investment that mainly benefits the individual. Supporters of fees also claim that paying for a course encourages students to take their studies more seriously and to choose subjects that lead to employment.

On the other hand, there are strong reasons for making university free. Firstly, fees discourage talented young people from poorer families, who may be unwilling to take on large debts. As a result, a country risks wasting the abilities of a significant part of its population. Secondly, society as a whole benefits from a highly educated workforce. Doctors, engineers and teachers trained at public expense go on to provide essential services and, because they earn more, they also pay higher taxes throughout their working lives. In Germany, for example, tuition is free at public universities, yet the country continues to have one of the strongest economies in Europe.

In my view, the advantages of free higher education outweigh the costs. However, to keep the system affordable, governments should link funding to the needs of the economy and maintain high entry standards. In conclusion, although graduates do gain personally from their degrees, education is ultimately an investment in the whole of society and should therefore be funded by the state.`,
    },
  ];

  window.WRITING_TEST = { num: 1, task1Intro: 'describe a graph', tasks };
})();
