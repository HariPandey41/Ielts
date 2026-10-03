// IELTS Academic Writing · Practice Test 7 — content only. The exam engine is assets/writing-exam.js.
(() => {
  'use strict';
  const X_LABELS = ["2010", "2012.5", "2015", "2017.5", "2020"];
  const SERIES = [{"name": "16–24", "v": [3, 4, 5, 6, 7]}, {"name": "25–44", "v": [2, 3, 4, 5, 5]}, {"name": "45–64", "v": [1, 2, 3, 3, 4]}, {"name": "65+", "v": [0.5, 1, 1.5, 2, 3]}];
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
    g+=`<text x="${(X0+X1)/2}" y="18" text-anchor="middle" font-size="14" font-weight="700">Average daily internet use by age group</text>`;
    return `<svg class="chart" viewBox="0 0 600 370" role="img" aria-label="Average daily internet use by age group">${g}</svg>`;
  }

  const tasks = [
    { key:'task1', min:150, minutes:20,
      html: () => `<h2>Writing Task 1</h2><p class="time">You should spend about 20 minutes on this task.</p><div class="prompt"><p class="q">The line graph shows the average number of hours per day spent using the internet by four age groups from 2010 to 2020.</p><p class="q">Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</p>${chartSVG()}</div><p class="time" style="margin-top:12px">Write at least 150 words.</p>`,
      keywords:["internet", "hour", "day", "age", "online", "2010", "2020", "average"],
      model: `The line graph shows average daily internet use among four age groups between 2010 and 2020. Overall, usage increased for every group, and younger people spent more time online throughout. People aged 16 to 24 recorded the highest figures, rising steadily from 3 hours per day in 2010 to 7 hours in 2020. The 25–44 group followed a similar trend, increasing from 2 to 5 hours. Internet use among 45–64-year-olds also tripled, from 1 hour to 3 hours, before reaching 4 hours at the end. The oldest group had the lowest use in every year. Nevertheless, its figure grew sixfold, from only half an hour in 2010 to 3 hours in 2020. The gap between the youngest and oldest groups therefore narrowed slightly over the period, although a substantial difference remained in 2020.` },
    { key:'task2', min:250, minutes:40,
      html: () => `<h2>Writing Task 2</h2><p class="time">You should spend about 40 minutes on this task.</p><div class="prompt"><p>Write about the following topic:</p><p class="q">The growth of online shopping will soon lead to the closure of most high-street shops. To what extent do you agree or disagree?</p><p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p></div><p class="time" style="margin-top:12px">Write at least 250 words.</p>`,
      keywords:["internet", "hour", "day", "age", "online", "2010", "2020", "average", "government", "people", "society", "education", "development"],
      model: `There are convincing arguments on both sides of this issue. In my view, a balanced approach is usually the most practical because individual circumstances and long-term social effects should both be considered.

One important argument is that policy and personal choices can produce wider benefits than are immediately visible. When people have access to useful education, reliable public services and clear information, they are more likely to make decisions that benefit themselves and their communities. For example, investment in effective public programmes can reduce future costs and create opportunities for people who would otherwise be excluded. However, opponents are right to point out that such measures can be expensive and may restrict individual choice if they are applied too rigidly.

The best solution is therefore to combine sensible public action with personal responsibility. Governments should set fair standards, provide essential support and evaluate results, while individuals and organisations should be encouraged to make informed choices. This approach avoids treating a complicated issue as if there were only one answer.

In conclusion, the advantages of a thoughtful and flexible policy outweigh the drawbacks. The most successful societies are those that protect the public interest while still allowing people enough freedom to respond to their own needs.` }
  ];
  window.WRITING_TEST = { num:7, task1Intro:'describe a line graph', tasks };
})();
