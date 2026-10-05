// Shared IELTS Academic Writing exam engine. A test page loads its content file
// (which sets window.WRITING_TEST) and then this script.

// Exam-style black-and-white charts for Task 1. Content files call these from their task html().
// line/bar spec: { title, yLabel, xLabel?, x: [labels], series: [{ name, v: [values] }], yMax, step }
// pie spec: { title, pies: [{ label, v: [percentages] }], cats: [names] }   (each pie in the order of cats)
// table spec: { title, head: [column headings], rows: [[cells]], note? }
// flow spec: { title, steps: [text], cycle?: true }   (a process diagram; cycle joins the last step to the first)
window.IELTSChart = (() => {
  const DASH = ['', '7 5', '2 4', '12 4 3 4'];
  const FILL = ['fill:var(--ink)', 'fill:var(--sheet)', 'fill:url(#ielts-hatch)', 'fill:url(#ielts-dots)', 'fill:url(#ielts-cross)', 'fill:url(#ielts-hlines)'];
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const defs = '<defs><pattern id="ielts-hatch" width="6" height="6" patternUnits="userSpaceOnUse" patternTransform="rotate(45)"><line x1="0" y1="0" x2="0" y2="6" style="stroke:var(--ink)" stroke-width="2"/></pattern><pattern id="ielts-dots" width="6" height="6" patternUnits="userSpaceOnUse"><circle cx="3" cy="3" r="1.3" style="fill:var(--ink)"/></pattern><pattern id="ielts-cross" width="8" height="8" patternUnits="userSpaceOnUse"><path d="M0 0L8 8M8 0L0 8" style="stroke:var(--ink)" stroke-width="1"/></pattern><pattern id="ielts-hlines" width="6" height="6" patternUnits="userSpaceOnUse"><line x1="0" y1="3" x2="6" y2="3" style="stroke:var(--ink)" stroke-width="1.4"/></pattern><marker id="ielts-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0 0L10 5L0 10z" style="fill:var(--ink)"/></marker></defs>';
  function frame(spec, X0, X1, Y0, Y1) {
    const y = v => Y0 - (Y0 - Y1) * v / spec.yMax;
    let g = defs;
    for (let v = 0; v <= spec.yMax + 1e-9; v += spec.step) g += `<line class="grid" x1="${X0}" x2="${X1}" y1="${y(v)}" y2="${y(v)}"/><text x="${X0 - 10}" y="${y(v) + 4}" text-anchor="end" font-size="12">${+v.toFixed(2)}</text>`;
    g += `<text x="16" y="${(Y0 + Y1) / 2}" font-size="12" text-anchor="middle" transform="rotate(-90 16 ${(Y0 + Y1) / 2})">${esc(spec.yLabel)}</text>`;
    if (spec.xLabel) g += `<text x="${(X0 + X1) / 2}" y="${Y0 + 42}" text-anchor="middle" font-size="12">${esc(spec.xLabel)}</text>`;
    g += `<text x="300" y="20" text-anchor="middle" font-size="14" font-weight="700">${esc(spec.title)}</text>`;
    return { g, y };
  }
  const legend = (spec, sw) => spec.series.map((s, k) => { const lx = 70 + k * (500 / spec.series.length); return sw(k, lx) + `<text x="${lx + 22}" y="44" font-size="12">${esc(s.name)}</text>`; }).join('');
  const wrap = (spec, g) => `<svg class="chart" viewBox="0 0 600 380" role="img" aria-label="${esc(spec.title)}. ${esc(spec.series.map(s => `${s.name}: ${s.v.join(', ')}`).join('; '))} for ${esc(spec.x.join(', '))}.">${g}</svg>`;
  function line(spec) {
    const X0 = 70, X1 = 540, Y0 = 320, Y1 = 62;
    let { g, y } = frame(spec, X0, X1, Y0, Y1);
    const x = i => X0 + (X1 - X0) * i / (spec.x.length - 1);
    spec.x.forEach((l, i) => g += `<text x="${x(i)}" y="${Y0 + 20}" text-anchor="middle" font-size="12">${esc(l)}</text>`);
    spec.series.forEach((s, k) => {
      g += `<polyline class="ln" stroke-dasharray="${DASH[k]}" points="${s.v.map((v, i) => `${x(i)},${y(v)}`).join(' ')}"/>`;
      s.v.forEach((v, i) => g += `<circle class="mk ${k % 2 ? '' : 'solid'}" cx="${x(i)}" cy="${y(v)}" r="3.8"/>`);
    });
    g += `<line class="axis" x1="${X0}" x2="${X0}" y1="${Y1 - 6}" y2="${Y0}"/><line class="axis" x1="${X0}" x2="${X1}" y1="${Y0}" y2="${Y0}"/>`;
    g += legend(spec, (k, lx) => `<line x1="${lx}" x2="${lx + 18}" y1="40" y2="40" class="ln" stroke-dasharray="${DASH[k]}"/>`);
    return wrap(spec, g);
  }
  function bar(spec) {
    const X0 = 70, X1 = 560, Y0 = 310, Y1 = 62;
    let { g, y } = frame(spec, X0, X1, Y0, Y1);
    const gw = (X1 - X0) / spec.x.length, n = spec.series.length, bw = Math.min(30, (gw - 16) / n);
    spec.x.forEach((l, i) => {
      const cx = X0 + gw * i + gw / 2;
      spec.series.forEach((s, k) => g += `<rect x="${cx - bw * n / 2 + k * bw + 2}" y="${y(s.v[i])}" width="${bw - 4}" height="${Y0 - y(s.v[i])}" style="${FILL[k]};stroke:var(--ink)" stroke-width="1.3"/>`);
      g += `<text x="${cx}" y="${Y0 + 20}" text-anchor="middle" font-size="12">${esc(l)}</text>`;
    });
    g += `<line class="axis" x1="${X0}" x2="${X0}" y1="${Y1 - 6}" y2="${Y0}"/><line class="axis" x1="${X0}" x2="${X1}" y1="${Y0}" y2="${Y0}"/>`;
    g += legend(spec, (k, lx) => `<rect x="${lx}" y="33" width="16" height="12" style="${FILL[k]};stroke:var(--ink)" stroke-width="1.2"/>`);
    return wrap(spec, g);
  }
  function pie(spec) {
    const n = spec.pies.length, R = n > 1 ? 92 : 110, W = 600, top = spec.title ? 46 : 16;
    const H = top + 44 + 2 * R + 40 + Math.ceil(spec.cats.length / 3) * 24 + 10;
    let g = defs + (spec.title ? `<text x="300" y="22" text-anchor="middle" font-size="14" font-weight="700">${esc(spec.title)}</text>` : '');
    spec.pies.forEach((p, i) => {
      const cx = W / (n * 2) * (2 * i + 1), cy = top + 44 + R;
      g += `<text x="${cx}" y="${top + 6}" text-anchor="middle" font-size="13" font-weight="700">${esc(p.label)}</text>`;
      const total = p.v.reduce((a, b) => a + b, 0);
      let a0 = -Math.PI / 2;
      p.v.forEach((v, k) => {
        const a1 = a0 + 2 * Math.PI * v / total, big = a1 - a0 > Math.PI ? 1 : 0;
        const P = (a, r) => `${(cx + r * Math.cos(a)).toFixed(1)},${(cy + r * Math.sin(a)).toFixed(1)}`;
        g += `<path d="M${cx},${cy} L${P(a0, R)} A${R},${R} 0 ${big} 1 ${P(a1, R)} Z" style="${FILL[k]};stroke:var(--ink)" stroke-width="1.3"/>`;
        const m = (a0 + a1) / 2, [lx, ly] = P(m, R + 17).split(',').map(Number);
        g += `<text x="${lx}" y="${ly + 4}" text-anchor="middle" font-size="12">${v}%</text>`;
        a0 = a1;
      });
    });
    const ly0 = top + 44 + 2 * R + 40;
    spec.cats.forEach((c, k) => {
      const lx = 40 + (k % 3) * 185, ly = ly0 + Math.floor(k / 3) * 24;
      g += `<rect x="${lx}" y="${ly - 11}" width="16" height="13" style="${FILL[k]};stroke:var(--ink)" stroke-width="1.2"/><text x="${lx + 22}" y="${ly}" font-size="12">${esc(c)}</text>`;
    });
    const label = spec.pies.map(p => `${p.label}: ${spec.cats.map((c, k) => `${c} ${p.v[k]}%`).join(', ')}`).join('; ');
    return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(spec.title || 'Pie chart')}. ${esc(label)}.">${g}</svg>`;
  }
  function table(spec) {
    return `<div class="datatable-wrap"><table class="datatable"><caption>${esc(spec.title)}</caption><thead><tr>${spec.head.map(h => `<th scope="col">${esc(h)}</th>`).join('')}</tr></thead><tbody>${spec.rows.map(r => `<tr>${r.map((c, i) => i ? `<td>${esc(c)}</td>` : `<th scope="row">${esc(c)}</th>`).join('')}</tr>`).join('')}</tbody></table>${spec.note ? `<p class="datanote">${esc(spec.note)}</p>` : ''}</div>`;
  }
  // wraps text into lines of at most `max` characters, for SVG boxes
  const lines = (t, max) => String(t).split(' ').reduce((a, w) => { const l = a[a.length - 1]; if (l && (l + ' ' + w).length <= max) a[a.length - 1] = l + ' ' + w; else a.push(w); return a; }, []);
  function flow(spec) {
    const n = spec.steps.length, BW = spec.cycle ? 132 : 150, BH = 74, CH = spec.cycle ? 19 : 22;
    let pos, W = 600, H;
    if (spec.cycle) {
      const cx = 300, cy = 262, rx = 228, ry = 180;
      pos = spec.steps.map((_, i) => { const a = -Math.PI / 2 + 2 * Math.PI * i / n; return [cx + rx * Math.cos(a), cy + ry * Math.sin(a)]; });
      H = 545;
    } else {
      const per = 3, rowH = 128;
      pos = spec.steps.map((_, i) => { const r = Math.floor(i / per), c = i % per, col = r % 2 ? per - 1 - c : c; return [100 + col * 200, 92 + r * rowH]; });
      H = 92 + Math.ceil(n / per) * rowH - 20;
    }
    let g = defs + `<text x="300" y="22" text-anchor="middle" font-size="14" font-weight="700">${esc(spec.title)}</text>`;
    // arrow from the edge of box i to the edge of box j
    const edge = ([x, y], [tx, ty]) => { const dx = tx - x, dy = ty - y, s = Math.min((BW / 2 + 6) / Math.abs(dx || 1e-9), (BH / 2 + 6) / Math.abs(dy || 1e-9)); return [x + dx * s, y + dy * s]; };
    const links = spec.steps.map((_, i) => [i, i + 1]).filter(([, j]) => j < n);
    if (spec.cycle) links.push([n - 1, 0]);
    links.forEach(([i, j]) => { const [x1, y1] = edge(pos[i], pos[j]), [x2, y2] = edge(pos[j], pos[i]); g += `<line x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" style="stroke:var(--ink)" stroke-width="1.6" marker-end="url(#ielts-arrow)"/>`; });
    spec.steps.forEach((t, i) => {
      const [x, y] = pos[i], L = lines(t, CH);
      g += `<rect x="${x - BW / 2}" y="${y - BH / 2}" width="${BW}" height="${BH}" rx="4" style="fill:var(--sheet);stroke:var(--ink)" stroke-width="1.4"/>`;
      g += `<circle cx="${x - BW / 2}" cy="${y - BH / 2}" r="11" style="fill:var(--ink)"/><text x="${x - BW / 2}" y="${y - BH / 2 + 4}" text-anchor="middle" font-size="11" font-weight="700" style="fill:var(--sheet)">${i + 1}</text>`;
      L.forEach((l, k) => g += `<text x="${x}" y="${y + 4 + (k - (L.length - 1) / 2) * 15}" text-anchor="middle" font-size="12">${esc(l)}</text>`);
    });
    return `<svg class="chart" viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(spec.title)}. ${esc(spec.steps.map((t, i) => `Stage ${i + 1}: ${t}`).join('. '))}${spec.cycle ? '. The cycle then begins again.' : '.'}">${g}</svg>`;
  }
  return { line, bar, pie, table, flow };
})();
(() => {
  'use strict';
  const T = window.WRITING_TEST;
  document.body.innerHTML = `
<div class="bar">
  <span class="who">IELTS Academic Writing · ${T.name || 'Practice Test ' + T.num}</span>
  <span class="tip" id="tip">Your answers are saved in this browser as you type</span>
  <span class="row" style="gap:14px"><span class="clock" id="clock">60:00</span><a href="./#writing">Back to trainer</a></span>
</div>

<div class="intro-wrap" id="intro">
  <section class="intro">
    <span class="label">Academic Writing</span>
    <h1>Writing ${T.name || 'Practice Test ' + T.num}</h1>
    <ul>
      <li>You have <b>60 minutes</b> to complete two tasks.</li>
      <li><b>Task 1:</b> ${T.task1Intro} in at least <b>150 words</b>. Spend about 20 minutes on it.</li>
      <li><b>Task 2:</b> write an essay of at least <b>250 words</b>. Spend about 40 minutes on it. Task 2 counts for twice as much as Task 1.</li>
      <li>You can switch between the tasks at any time. The word count updates as you type.</li>
      <li>Your writing is saved in this browser, so a refresh will not lose it. The test submits automatically when the time runs out.</li>
    </ul>
    <p class="resume-note" id="resume-note" hidden>You have an unfinished attempt saved in this browser. Starting will continue it with the time that was left.</p>
    <div class="row"><button class="btn" id="start" type="button">Start the test</button><button class="btn ghost" id="fresh" type="button" hidden>Start a new attempt</button></div>
  </section>
</div>

<div class="screen" id="screen" hidden>
  <article class="pane task" id="task-pane"></article>
  <section class="pane answer">
    <div class="answer-head"><span class="label" id="answer-label">Task 1 answer</span><span class="wc" id="wc">0 words</span></div>
    <textarea id="editor" spellcheck="false" autocapitalize="sentences" aria-label="Your answer"></textarea>
    <span class="saved" id="saved">&nbsp;</span>
  </section>
</div>

<div class="result-wrap" id="result-wrap" hidden></div>

<nav class="nav" id="nav" hidden>
  <div class="nav-inner">
    <div class="tabs" id="tabs">
      <button type="button" data-t="0" aria-current="true">Task 1<span class="n" id="n0">0/150</span></button>
      <button type="button" data-t="1" aria-current="false">Task 2<span class="n" id="n1">0/250</span></button>
    </div>
    <button class="btn" id="submit" type="button">Submit both tasks</button>
  </div>
</nav>
`;

  // ================= STATE =================
  const $ = id => document.getElementById(id);
  const KEY = `ielts-writing-test${T.num}-attempt`;
  let st = { texts: ['', ''], endAt: 0, submitted: false };
  try { const s = JSON.parse(localStorage.getItem(KEY) || 'null'); if (s && Array.isArray(s.texts)) st = s; } catch (e) {}
  const persist = () => { try { localStorage.setItem(KEY, JSON.stringify(st)); } catch (e) {} };
  let cur = 0, timer = null;

  const words = s => (String(s).match(/[A-Za-z0-9]+(?:['’\-.,][A-Za-z0-9]+)*/g) || []);
  const wc = s => words(s).length;

  let editorLoaded = false;
  function showTask(i) {
    if (editorLoaded) st.texts[cur] = $('editor').value;
    editorLoaded = true;
    cur = i;
    $('task-pane').innerHTML = T.tasks[i].html();
    $('editor').value = st.texts[i];
    $('answer-label').textContent = `Task ${i + 1} answer`;
    $('tabs').querySelectorAll('button').forEach(b => b.setAttribute('aria-current', String(+b.dataset.t === i)));
    $('task-pane').scrollTop = 0;
    updateCount();
  }
  function updateCount() {
    const n = wc($('editor').value), min = T.tasks[cur].min;
    $('wc').textContent = `${n} word${n === 1 ? '' : 's'} · minimum ${min}`;
    $('wc').className = 'wc ' + (n >= min ? 'ok' : n ? 'short' : '');
    [0, 1].forEach(i => { const t = i === cur ? $('editor').value : st.texts[i]; $('n' + i).textContent = `${wc(t)}/${T.tasks[i].min}`; });
  }
  let saveT = null;
  $('editor').addEventListener('input', () => {
    st.texts[cur] = $('editor').value; updateCount();
    clearTimeout(saveT); saveT = setTimeout(() => { persist(); $('saved').textContent = 'Saved ' + new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); }, 400);
  });
  $('tabs').addEventListener('click', e => { const b = e.target.closest('[data-t]'); if (b) showTask(+b.dataset.t); });

  // ================= TIMER =================
  const fmt = s => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, '0')}`;
  function tick() {
    const left = Math.max(0, Math.ceil((st.endAt - Date.now()) / 1000));
    $('clock').textContent = fmt(left);
    $('clock').classList.toggle('low', left <= 600);
    if (left <= 600 && !$('tip').dataset.w) { $('tip').dataset.w = 1; $('tip').textContent = '10 minutes remaining'; }
    if (left === 0) submit(true);
  }

  // ================= ASSESSMENT =================
  // Text-feature estimate only: an examiner (or teacher) gives the real band.
  const LINKERS = ['however', 'moreover', 'furthermore', 'in addition', 'additionally', 'therefore', 'consequently', 'as a result', 'thus', 'hence', 'although', 'even though', 'whereas', 'while', 'on the other hand', 'in contrast', 'by contrast', 'nevertheless', 'for example', 'for instance', 'such as', 'firstly', 'secondly', 'finally', 'in conclusion', 'to conclude', 'overall', 'meanwhile', 'subsequently', 'after that', 'because', 'since', 'similarly', 'likewise', 'instead', 'despite', 'in spite of', 'to sum up', 'in my view', 'in my opinion'];
  const SUBORD = /\b(because|although|though|while|whereas|which|who|whom|whose|that|if|unless|when|since|until|after|before|once|provided)\b/;
  const roundHalf = x => Math.round(x * 2) / 2;
  const clampB = b => Math.max(2.5, Math.min(8.5, roundHalf(b)));
  const fmtBand = b => Number.isInteger(b) ? b.toFixed(1) : String(b);
  function assess(text, t, idx) {
    const w = words(text.toLowerCase()), n = w.length;
    const paras = text.split(/\n\s*\n|\n/).map(s => s.trim()).filter(Boolean);
    const sents = text.split(/(?<=[.!?])\s+/).map(s => s.trim()).filter(s => words(s).length);
    const lens = sents.map(s => words(s).length);
    const avg = lens.reduce((a, b) => a + b, 0) / (lens.length || 1);
    const sd = Math.sqrt(lens.reduce((a, b) => a + (b - avg) ** 2, 0) / (lens.length || 1));
    let mattr = 0;
    if (n >= 50) { let sum = 0, k = 0; for (let i = 0; i + 50 <= n; i += 5) { sum += new Set(w.slice(i, i + 50)).size / 50; k++; } mattr = sum / k; } else mattr = n ? new Set(w).size / n : 0;
    const lower = ' ' + text.toLowerCase().replace(/[^a-z0-9' ]+/g, ' ').replace(/\s+/g, ' ') + ' ';
    const linkUsed = LINKERS.filter(l => lower.includes(' ' + l + ' '));
    const complex = sents.filter(s => SUBORD.test(s.toLowerCase())).length / (sents.length || 1);
    const longW = w.filter(x => x.length >= 8).length / (n || 1);
    const keyHit = t.keywords.filter(k => w.some(x => x.startsWith(k))).length / t.keywords.length;
    const caps = sents.filter(s => /^[A-Z“"'(0-9]/.test(s)).length / (sents.length || 1);
    const lowerI = (text.match(/\bi\b/g) || []).length;
    const numbers = (text.match(/\d+(\.\d+)?\s?(%|per ?cent)?/g) || []).length;
    const overview = /\b(overall|in general|generally|it is clear|it can be seen|in summary)\b/i.test(text);
    const position = /\b(i believe|i think|in my (view|opinion)|i (strongly )?(agree|disagree)|i would argue|personally)\b/i.test(text);
    const conclusion = /\b(in conclusion|to conclude|to sum up|in summary|overall,)\b/i.test(text);
    const ratio = n / t.min;

    let TA, taNote;
    if (idx === 0) {
      // t.figures === false: a process diagram or map, where stages or changes are described instead of numbers
      const detail = t.figures === false ? Math.min(1, keyHit * 1.4) : Math.min(1, numbers / 8);
      TA = 4 + Math.min(1.5, ratio * 1.5) + keyHit * 1.2 + (overview ? 1 : 0) + detail - (ratio < 0.7 ? 1.5 : 0);
      taNote = !overview ? `No clear overview. Add a sentence starting “Overall,” that sums up ${t.figures === false ? 'the main stages or changes' : 'the main trends'}.` : t.figures === false ? (keyHit < 0.6 ? 'Describe each stage or change in the diagram, using the words it gives you.' : ratio < 1 ? 'Under 150 words: examiners lower the score for short answers.' : 'Overview and the main stages or changes are covered.') : numbers < 6 ? 'Support the description with more figures from the chart (percentages and years).' : ratio < 1 ? `Under 150 words: examiners lower the score for short answers.` : 'Overview and supporting figures are present.';
    } else {
      const wantsOpinion = t.opinion !== false;
      TA = 4 + Math.min(1.5, ratio * 1.5) + keyHit * 1.2 + (position || !wantsOpinion ? 1 : 0) + (conclusion ? 0.5 : 0) - (ratio < 0.7 ? 1.5 : 0);
      taNote = !position && wantsOpinion ? 'Your own opinion is not clear. The question asks for it: state it in the introduction and conclusion.' : ratio < 1 ? 'Under 250 words: examiners lower the score for short essays.' : !conclusion ? 'Add a clear conclusion that restates your view.' : (wantsOpinion ? 'All parts of the question are addressed and your opinion is clear.' : 'All parts of the question are addressed.');
    }
    const CC = 4 + Math.min(2, linkUsed.length / 3) + Math.min(1.5, (paras.length - 1) * 0.5) + (avg >= 10 && avg <= 26 ? 0.5 : 0);
    const LR = 3 + (mattr - 0.55) * 12 + longW * 10;
    const GRA = 4 + complex * 3 + Math.min(1.5, sd / 5) + (caps - 0.8) * 5 - Math.min(1.5, lowerI * 0.5);
    const crit = [
      [idx === 0 ? 'Task achievement' : 'Task response', clampB(TA), taNote],
      ['Coherence and cohesion', clampB(CC), paras.length < (idx === 0 ? 3 : 4) ? `Use more paragraphs: ${idx === 0 ? 'introduction, overview and two body paragraphs' : 'introduction, two body paragraphs and a conclusion'}.` : linkUsed.length < 4 ? 'Use a wider range of linking words.' : `Clear paragraphing. Linkers used: ${linkUsed.slice(0, 6).join(', ')}.`],
      ['Lexical resource', clampB(LR), mattr < 0.62 ? 'Some words are repeated often. Use synonyms and more precise vocabulary.' : 'A reasonable range of vocabulary.'],
      ['Grammatical range and accuracy', clampB(GRA), complex < 0.3 ? 'Mostly simple sentences. Add complex ones with although, which, because or when.' : lowerI ? 'Capitalise the pronoun “I”.' : 'A good mix of sentence types. Proofread for errors this tool cannot see.'],
    ];
    // short answers: examiners cap the score, most heavily for Task response / achievement
    const cap = ratio < 0.4 ? [2.5, 3.5] : ratio < 0.7 ? [4, 4.5] : ratio < 0.9 ? [5, 6] : ratio < 1 ? [6, 7] : [9, 9];
    crit.forEach((c, k) => { c[1] = Math.min(c[1], k === 0 ? cap[0] : cap[1]); });
    const band = roundHalf(crit.reduce((a, c) => a + c[1], 0) / 4);
    return { n, crit, band: n < 20 ? 0 : band, metrics: [['Words', n], ['Paragraphs', paras.length], ['Sentences', sents.length], ['Avg sentence', avg.toFixed(1)], ['Linking words', linkUsed.length], ['Complex sentences', Math.round(complex * 100) + '%']] };
  }
  // Writing band: Task 2 counts double
  const writingBand = (b1, b2) => roundHalf((b1 + 2 * b2) / 3);
  const PTE = { 9: 88, 8.5: 81, 8: 75.5, 7.5: 68.5, 7: 61, 6.5: 53.5, 6: 45.5, 5.5: 38.5, 5: 32.5, 4.5: 26, 4: 19, 3.5: 12.5, 3: 8.5, 2.5: 6.5, 2: 4.5, 1.5: 2.5, 1: 1, 0: 0 };
  function saveBand(band, source) {
    try {
      const K = 'ielts-band-trainer-v1';
      const s = JSON.parse(localStorage.getItem(K) || '{}') || {};
      const rec = { test: T.num, band, source, recordedAt: new Date().toISOString() };
      s['writingTest' + T.num] = rec; s.writingLatest = rec;
      localStorage.setItem(K, JSON.stringify(s));
    } catch (e) {}
  }

  // ================= SUBMIT =================
  let armed = false;
  $('submit').addEventListener('click', () => {
    if (st.submitted) return;
    const short = [0, 1].filter(i => wc(i === cur ? $('editor').value : st.texts[i]) < T.tasks[i].min).map(i => `Task ${i + 1}`);
    if (!armed) {
      armed = true; $('submit').textContent = short.length ? `${short.join(' and ')} under the word limit · click again to submit` : 'Click again to submit';
      setTimeout(() => { armed = false; if (!st.submitted) $('submit').textContent = 'Submit both tasks'; }, 4000);
      return;
    }
    submit(false);
  });

  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  function submit(auto) {
    if (st.submitted) return;
    st.texts[cur] = $('editor').value;
    st.submitted = true; st.auto = auto; persist();
    clearInterval(timer);
    renderResult();
  }

  function renderResult() {
    const r = [0, 1].map(i => assess(st.texts[i], T.tasks[i], i));
    const est = writingBand(r[0].band, r[1].band);
    saveBand(est, 'estimate');
    $('intro').hidden = true; $('screen').hidden = true; $('nav').hidden = true; $('result-wrap').hidden = false;
    $('clock').textContent = 'Finished'; $('tip').textContent = '';
    const bandOpts = sel => [9, 8.5, 8, 7.5, 7, 6.5, 6, 5.5, 5, 4.5, 4, 3.5, 3, 2.5, 2, 1, 0].map(b => `<option value="${b}" ${b === sel ? 'selected' : ''}>${fmtBand(b)}</option>`).join('');
    $('result-wrap').innerHTML = `
      <section class="card">
        <span class="label">${st.auto ? 'Time is up · ' : ''}Writing result</span>
        <div class="scorebox"><div class="band-box" id="final-band">${fmtBand(est)}</div>
          <div><h2>Estimated Writing band ${fmtBand(est)}</h2><p class="muted">Task 1 ≈ ${fmtBand(r[0].band)} · Task 2 ≈ ${fmtBand(r[1].band)} (Task 2 counts double) · PTE equivalent ≈ ${PTE[est] ?? '–'}</p></div></div>
        <p class="note">This estimate comes from measurable features of your writing: length, paragraphs, key ideas, linking words, vocabulary range and sentence variety. It cannot judge meaning, accuracy or spelling the way an examiner does, so ask your teacher to mark it with the panel at the bottom of this page.</p>
        <div class="row"><button class="btn" type="button" id="copy">Copy both answers</button><button class="btn ghost" type="button" id="download">Download as a text file</button><a class="btn ghost" href="./#writing">Back to trainer</a><button class="btn ghost" type="button" id="again">Start a new attempt</button></div>
        <span class="note" id="copy-msg"></span>
      </section>
      ${[0, 1].map(i => `
      <section class="card">
        <div class="row" style="justify-content:space-between"><h2>Task ${i + 1}</h2><span class="label">${r[i].n} words · minimum ${T.tasks[i].min}</span></div>
        <div class="metrics">${r[i].metrics.map(([k, v]) => `<div class="metric"><span class="label">${k}</span><span class="v">${v}</span></div>`).join('')}</div>
        <div class="tbl-wrap"><table class="crit"><thead><tr><th>Criterion</th><th>Estimate</th><th>Feedback</th></tr></thead><tbody>${r[i].crit.map(([c, b, f]) => `<tr><td>${c}</td><td class="b">${fmtBand(b)}</td><td>${esc(f)}</td></tr>`).join('')}</tbody></table></div>
        <div class="two">
          <div><span class="label">Your answer</span><div class="essay">${st.texts[i].trim() ? esc(st.texts[i]) : '<span class="muted">No answer written.</span>'}</div></div>
          <div><span class="label">Model answer (about band 8)</span><div class="essay">${esc(T.tasks[i].model)}</div></div>
        </div>
        ${T.tasks[i].models ? `<h3>The same task at different bands</h3>
        <p class="note">Compare these answers to see what moves a response up the band scale. The notes explain what an examiner would reward or penalise.</p>
        <div class="bands-compare">${T.tasks[i].models.map(m => `<details${m.band === 7 ? ' open' : ''}><summary><b>Band ${fmtBand(m.band)}</b> answer</summary>${m.text === T.tasks[i].model ? '<p class="note">This is the model answer shown above.</p>' : `<div class="essay">${esc(m.text)}</div>`}<ul class="band-notes">${m.notes.map(x => `<li>${esc(x)}</li>`).join('')}</ul></details>`).join('')}</div>` : ''}
      </section>`).join('')}
      <section class="card">
        <h2>Teacher marking</h2>
        <p class="note">Teachers: read both answers and choose a band for each criterion. The Writing band is worked out the official way (the four criteria are averaged for each task, and Task 2 counts double). Saving replaces the estimate in this student’s score summary.</p>
        <div class="teacher">
          <div class="tbl-wrap"><table class="crit"><thead><tr><th>Criterion</th><th>Task 1</th><th>Task 2</th></tr></thead><tbody>
            ${r[0].crit.map((c, k) => `<tr><td>${k === 0 ? 'Task achievement / response' : c[0]}</td><td><select data-t="0" data-k="${k}" aria-label="Task 1 ${c[0]}">${bandOpts(r[0].crit[k][1])}</select></td><td><select data-t="1" data-k="${k}" aria-label="Task 2 ${c[0]}">${bandOpts(r[1].crit[k][1])}</select></td></tr>`).join('')}
            <tr><td><b>Task band</b></td><td class="b" id="tb0"></td><td class="b" id="tb1"></td></tr>
          </tbody></table></div>
          <div class="row"><span>Writing band: <b id="tw" class="mono"></b></span><button class="btn" type="button" id="save-teacher">Save teacher’s band</button><span class="note" id="teacher-msg"></span></div>
        </div>
      </section>`;
    const teacherCalc = () => {
      const tb = [0, 1].map(t => { const v = [...document.querySelectorAll(`select[data-t="${t}"]`)].map(s => +s.value); return Math.floor(v.reduce((a, b) => a + b, 0) / 4 * 2) / 2; });
      $('tb0').textContent = fmtBand(tb[0]); $('tb1').textContent = fmtBand(tb[1]);
      const w = writingBand(tb[0], tb[1]); $('tw').textContent = fmtBand(w); return w;
    };
    teacherCalc();
    $('result-wrap').addEventListener('change', e => { if (e.target.matches('select[data-t]')) teacherCalc(); });
    $('save-teacher').addEventListener('click', () => { const w = teacherCalc(); saveBand(w, 'teacher'); $('final-band').textContent = fmtBand(w); $('teacher-msg').textContent = `Saved: Writing band ${fmtBand(w)}.`; });
    const plain = () => `IELTS Academic Writing · ${T.name || 'Practice Test ' + T.num}\n\nTASK 1 (${wc(st.texts[0])} words)\n\n${st.texts[0]}\n\n\nTASK 2 (${wc(st.texts[1])} words)\n\n${st.texts[1]}\n`;
    $('copy').addEventListener('click', () => {
      navigator.clipboard.writeText(plain()).then(() => $('copy-msg').textContent = 'Copied. Paste into an email or message to your teacher.')
        .catch(() => $('copy-msg').textContent = 'Copying is blocked here. Use Download instead.');
    });
    $('download').addEventListener('click', () => {
      const a = document.createElement('a');
      a.href = URL.createObjectURL(new Blob([plain()], { type: 'text/plain' }));
      a.download = `ielts-writing-test-${T.num}.txt`; document.body.appendChild(a); a.click(); a.remove();
    });
    $('again').addEventListener('click', () => { try { localStorage.removeItem(KEY); } catch (e) {} location.reload(); });
    window.scrollTo({ top: 0 });
  }

  // ================= START =================
  function begin() {
    if (!st.endAt) st.endAt = Date.now() + 60 * 60 * 1000;
    persist();
    $('intro').hidden = true; $('screen').hidden = false; $('nav').hidden = false;
    cur = 0; showTask(0);
    timer = setInterval(tick, 500); tick();
    $('editor').focus();
  }
  $('start').addEventListener('click', begin);
  $('fresh').addEventListener('click', () => { st = { texts: ['', ''], endAt: 0, submitted: false }; persist(); begin(); });
  if (st.submitted) renderResult();
  else if (st.endAt) {
    if (Date.now() >= st.endAt) { st.submitted = true; st.auto = true; persist(); renderResult(); }
    else { $('resume-note').hidden = false; $('start').textContent = 'Continue the test'; $('fresh').hidden = false; }
  }
})();
