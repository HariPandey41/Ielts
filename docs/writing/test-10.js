// IELTS Academic Writing · Practice Test 10 — content only. The exam engine is assets/writing-exam.js.
(() => {
  'use strict';
  const X_LABELS = ["Year 1", "Year 2"];
  const SERIES = [{"name": "No qualification", "v": [48, 62, 74, 86]}, {"name": "School certificate", "v": [42, 58, 70, 82]}];
  function chartSVG() {
    const W=600, X0=70, X1=540, Y0=315, Y1=55, MAX=100;
    const y=v => Y0-(Y0-Y1)*v/MAX;
    let g='';
    for(let v=0;v<=MAX;v+=20) g += `<line class="grid" x1="${X0}" x2="${X1}" y1="${y(v)}" y2="${y(v)}"/><text x="${X0-10}" y="${y(v)+4}" text-anchor="end" font-size="12">${v}</text>`;
    const colors=['var(--ink)','var(--omr)','#557a95','#8b6f47'];
    if('bar'==='line') {
      const x=i=>X0+(X1-X0)*i/(X_LABELS.length-1);
      X_LABELS.forEach((a,i)=>g+=`<text x="${x(i)}" y="${Y0+22}" text-anchor="middle" font-size="12">${a}</text>`);
      SERIES.forEach((s,k)=>{ const pts=s.v.map((v,i)=>`${x(i)},${y(v)}`).join(' '); g+=`<polyline class="ln" stroke="${colors[k]}" points="${pts}"/>`; s.v.forEach((v,i)=>g+=`<circle cx="${x(i)}" cy="${y(v)}" r="4" fill="${colors[k]}"/>`); });
    } else {
      const gw=(X1-X0)/X_LABELS.length, bw=28;
      X_LABELS.forEach((a,i)=>{ const cx=X0+gw*i+gw/2; g+=`<text x="${cx}" y="${Y0+22}" text-anchor="middle" font-size="12">${a}</text>`; SERIES.forEach((s,k)=>{const val=s.v[i], x=cx-(bw*SERIES.length)/2+k*bw; g+=`<rect x="${x}" y="${y(val)}" width="${bw-3}" height="${Y0-y(val)}" fill="${colors[k]}" opacity="${0.42+0.16*k}"/>`;}); });
    }
    g+=`<line class="axis" x1="${X0}" x2="${X0}" y1="${Y1-8}" y2="${Y0}"/><line class="axis" x1="${X0}" x2="${X1}" y1="${Y0}" y2="${Y0}"/>`;
    SERIES.forEach((s,k)=>{const lx=X0+k*125; g+=`<rect x="${lx}" y="28" width="14" height="12" fill="${colors[k]}"/><text x="${lx+20}" y="39" font-size="12">${s.name}</text>`;});
    g+=`<text x="${(X0+X1)/2}" y="18" text-anchor="middle" font-size="14" font-weight="700">Employment rates among adults with different qualifications</text>`;
    return `<svg class="chart" viewBox="0 0 600 370" role="img" aria-label="Employment rates among adults with different qualifications">${g}</svg>`;
  }

  const tasks = [
    { key:'task1', min:150, minutes:20,
      html: () => `<h2>Writing Task 1</h2><p class="time">You should spend about 20 minutes on this task.</p><div class="prompt"><p class="q">The bar chart compares employment rates among adults with four different levels of educational qualification in two years.</p><p class="q">Summarise the information by selecting and reporting the main features, and make comparisons where relevant.</p>${chartSVG()}</div><p class="time" style="margin-top:12px">Write at least 150 words.</p>`,
      keywords:["employment", "qualification", "school", "diploma", "degree", "adult", "rate", "education"],
      model: `The bar chart compares employment rates for adults with four levels of education in two different years. Overall, employment was higher among better-qualified adults in both years, and the rate increased at every level. Among adults with no qualification, employment rose from 48% to 62%. The figure for people with a school certificate increased from 42% to 58%, although this group had the lowest rate in the later year. Diploma holders recorded rates of 74% and 70%, while degree holders had the highest figures, at 86% and 82%. Despite the general upward pattern, the order of the first two categories differed slightly between the years shown. The strongest relationship is between education and employment: adults with a degree were employed at roughly twice the rate of those with no qualification in the earlier year. The data therefore suggest that higher qualifications were associated with better employment prospects.` },
    { key:'task2', min:250, minutes:40,
      html: () => `<h2>Writing Task 2</h2><p class="time">You should spend about 40 minutes on this task.</p><div class="prompt"><p>Write about the following topic:</p><p class="q">In the future, nobody will buy printed newspapers or books because they will be able to read everything they want online for free. Do you agree or disagree?</p><p>Give reasons for your answer and include any relevant examples from your own knowledge or experience.</p></div><p class="time" style="margin-top:12px">Write at least 250 words.</p>`,
      keywords:["employment", "qualification", "school", "diploma", "degree", "adult", "rate", "education", "government", "people", "society", "education", "development"],
      model: `There are convincing arguments on both sides of this issue. In my view, a balanced approach is usually the most practical because individual circumstances and long-term social effects should both be considered.

One important argument is that policy and personal choices can produce wider benefits than are immediately visible. When people have access to useful education, reliable public services and clear information, they are more likely to make decisions that benefit themselves and their communities. For example, investment in effective public programmes can reduce future costs and create opportunities for people who would otherwise be excluded. However, opponents are right to point out that such measures can be expensive and may restrict individual choice if they are applied too rigidly.

The best solution is therefore to combine sensible public action with personal responsibility. Governments should set fair standards, provide essential support and evaluate results, while individuals and organisations should be encouraged to make informed choices. This approach avoids treating a complicated issue as if there were only one answer.

In conclusion, the advantages of a thoughtful and flexible policy outweigh the drawbacks. The most successful societies are those that protect the public interest while still allowing people enough freedom to respond to their own needs.` }
  ];
  window.WRITING_TEST = { num:10, task1Intro:'describe a bar chart', tasks };
})();
