// IELTS Academic Writing · Practice Test 5 — content only. The exam engine is assets/writing-exam.js.
(() => {
  'use strict';
  const X_LABELS = ["2005", "2010", "2015", "2020", "2025"];
  const SERIES = [{"name": "Car", "v": [60, 48, 40, 35, 30]}, {"name": "Bus", "v": [25, 28, 32, 37, 40]}, {"name": "Train", "v": [10, 14, 18, 21, 25]}, {"name": "Bicycle", "v": [5, 10, 10, 7, 5]}];
  function chartSVG() {
    const W=600, X0=70, X1=540, Y0=315, Y1=55, MAX=70;
    const y=v => Y0-(Y0-Y1)*v/MAX;
    let g='';
    for(let v=0;v<=MAX;v+=10) g += `<line class="grid" x1="${X0}" x2="${X1}" y1="${y(v)}" y2="${y(v)}"/><text x="${X0-10}" y="${y(v)+4}" text-anchor="end" font-size="12">${v}</text>`;
    const colors=['var(--ink)','var(--omr)','#557a95','#8b6f47'];
    if('line'==='line') {
      const x=i=>X0+(X1-X0)*i/(X_LABELS.length-1);
      X_LABELS.forEach((a,i)=>g+=`<text x="${x(i)}" y="${Y0+22}" text-anchor="middle" font-size="12">${a}</text>`);
      SERIES.forEach((s,k)=>{ const pts=s.v.map((v,i)=>`${x(i)},${y(v)}`).join(' '); g+=`<polyline class="ln" stroke="${colors[k]}" points="${pts}"/>`; s.v.forEach((v,i)=>g+=`<circle cx="${x(i)}" cy="${y(v)}" r="4" fill="${colors[k]}"/>`); });
    } else {
      const gw=(X1-X0)/X_LABELS.length, bw=28;
      X_LABELS.forEach((a,i)=>{ const cx=X0+gw*i+gw/2; g+=`<text x="${cx}" y="${Y0+22}" text-anchor="middle" font-size="12">${a}</text>`; SERIES.forEach((s,k)=>{const val=s.v[i], x=cx-(bw*SERIES.length)/2+k*bw; g+=`<rect x="${x}" y="${y(val)}" width="${bw-3}" height="${Y0-y(val)}" fill="${colors[k]}" opacity="${0.42+0.16*k}"/>`;}); });
    }
    g+=`<line class="axis" x1="${X0}" x2="${X0}" y1="${Y1-8}" y2="${Y0}"/><line class="axis" x1="${X0}" x2="${X1}" y1="${Y0}" y2="${Y0}"/>`;
    SERIES.forEach((s,k)=>{const lx=X0+k*125; g+=`<rect x="${lx}" y="28" width="14" height="12" fill="${colors[k]}"/><text x="${lx+20}" y="39" font-size="12">${s.name}</text>`;});
    g+=`<text x="${(X0+X1)/2}" y="18" text-anchor="middle" font-size="14" font-weight="700">The percentage of people using four modes of transport</text>`;
    return `<svg class="chart" viewBox="0 0 600 370" role="img" aria-label="The percentage of people using four modes of transport">${g}</svg>`;
  }

  const tasks = [
    { key:'task1', min:150, minutes:20,
      html: () => `<h2>Writing Task 1</h2><p class="time">You should spend about 20 minutes on this task.</p><div class="prompt"><p class="q">The line graph shows the percentage of people who travelled to work by car, bus, train and bicycle in a city between 2005 and 2025.</p><p class="q">Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</p>${chartSVG()}</div><p class="time" style="margin-top:12px">Write at least 150 words.</p>`,
      keywords:["transport", "car", "bus", "train", "bicycle", "percent", "city", "travel"],
      model: `The line graph illustrates changes in the proportions of commuters using four types of transport in a city from 2005 to 2025. Overall, car use declined considerably, while bus and train use increased. Bicycle use fluctuated and ended at its original level. In 2005, cars were used by 60% of commuters, making them by far the most popular option. This percentage fell steadily to 30% in 2025. By contrast, bus use rose from 25% to 40%, overtaking car use in the final year. Train travel also became more common, increasing from 10% to 25%. Bicycle use doubled from 5% to 10% by 2010, but then declined to 5% at the end of the period. Thus, the overall pattern was a shift away from private cars towards public transport. Although cycling did not show sustained growth, the combined share of bus and train users increased substantially.` },
    { key:'task2', min:250, minutes:40,
      html: () => `<h2>Writing Task 2</h2><p class="time">You should spend about 40 minutes on this task.</p><div class="prompt"><p>Write about the following topic:</p><p class="q">Some people think that the best way to reduce traffic and pollution is to increase the cost of fuel for cars and other vehicles. To what extent do you agree or disagree?</p><p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p></div><p class="time" style="margin-top:12px">Write at least 250 words.</p>`,
      keywords:["transport", "car", "bus", "train", "bicycle", "percent", "city", "travel", "government", "people", "society", "education", "development"],
      model: `There are convincing arguments on both sides of this issue. In my view, a balanced approach is usually the most practical because individual circumstances and long-term social effects should both be considered.

One important argument is that policy and personal choices can produce wider benefits than are immediately visible. When people have access to useful education, reliable public services and clear information, they are more likely to make decisions that benefit themselves and their communities. For example, investment in effective public programmes can reduce future costs and create opportunities for people who would otherwise be excluded. However, opponents are right to point out that such measures can be expensive and may restrict individual choice if they are applied too rigidly.

The best solution is therefore to combine sensible public action with personal responsibility. Governments should set fair standards, provide essential support and evaluate results, while individuals and organisations should be encouraged to make informed choices. This approach avoids treating a complicated issue as if there were only one answer.

In conclusion, the advantages of a thoughtful and flexible policy outweigh the drawbacks. The most successful societies are those that protect the public interest while still allowing people enough freedom to respond to their own needs.` }
  ];
  window.WRITING_TEST = { num:5, task1Intro:'describe a line graph', tasks };
})();
